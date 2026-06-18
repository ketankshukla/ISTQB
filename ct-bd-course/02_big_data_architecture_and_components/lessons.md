# 📘 Chapter 2 — Big Data Architecture and Components: Lessons

---

## ⭐ 2.1 Hadoop Ecosystem

### 🔷 HDFS (Hadoop Distributed File System)

**Purpose:** Distributed storage for large datasets across commodity hardware.

**Key Characteristics:**
- **Fault tolerance:** Replicates data blocks (default 3x) across nodes
- **Scalability:** Add nodes to increase storage
- **Write-once, read-many:** Optimized for batch processing, not random updates
- **Block size:** Default 128MB (larger than traditional file systems)

**Architecture:**
- **NameNode:** Master server managing file system metadata (directory tree, block locations)
- **DataNodes:** Worker servers storing actual data blocks
- **Secondary NameNode:** Assists with checkpointing (not a true standby in older versions)

**Testing Focus:**
- Verify data is written to correct blocks and replicated
- Test NameNode failover (if HA is configured)
- Validate data locality (processing near data)

**Example:**
A 1GB file is split into 8 blocks (128MB each). Each block is stored on 3 different DataNodes. A test verifies:
1. All 8 blocks exist
2. Each block has 3 replicas
3. No two replicas of the same block are on the same rack

### 🔷 MapReduce

**Purpose:** A programming model for processing large datasets in parallel.

**How It Works:**

```
Input → Split → Map → Shuffle/Sort → Reduce → Output
```

1. **Input Split:** Data divided into chunks
2. **Map:** Each chunk processed independently to produce key-value pairs
3. **Shuffle/Sort:** Key-value pairs grouped by key across nodes
4. **Reduce:** Aggregated results computed per key
5. **Output:** Final results written to HDFS

**Testing Focus:**
- Map function correctness (input → intermediate output)
- Reduce function correctness (grouped data → final output)
- Shuffle behavior (correct grouping, no data loss)
- Partitioning logic (keys distributed correctly across reducers)

**Example:** Word count MapReduce

| Input | Map Output | Shuffle | Reduce Output |
|-------|-----------|---------|--------------|
| "the cat sat" | (the,1), (cat,1), (sat,1) | (the,[1,1]), (cat,[1]), (sat,[1]) | (the,2), (cat,1), (sat,1) |
| "the dog sat" | (the,1), (dog,1), (sat,1) | | |

**Test cases:**
- Empty input → empty output
- Single word → count of 1
- Multiple same words → correct sum
- Special characters handled correctly

### 🔷 YARN (Yet Another Resource Negotiator)

**Purpose:** Cluster resource management and job scheduling.

**Components:**
- **ResourceManager:** Global resource scheduler
- **NodeManager:** Per-node agent managing containers
- **ApplicationMaster:** Per-application process coordinating tasks

**Testing Focus:**
- Resource allocation (CPU, memory) matches requirements
- Job scheduling fairness (multiple users/jobs)
- Container isolation
- Fault tolerance (failed containers are restarted)

---

## ⭐ 2.2 Apache Spark

### 🔷 What is Spark?

Apache Spark is a unified analytics engine for large-scale data processing. It is significantly faster than MapReduce for many workloads because it performs in-memory computations.

**Key Advantages over MapReduce:**
- In-memory processing (10-100x faster for iterative algorithms)
- Unified engine (batch, streaming, SQL, machine learning, graph processing)
- Simpler APIs (Java, Scala, Python, R)
- Lazy evaluation (optimizes execution plan)

### 🔷 Spark Core Concepts

**RDD (Resilient Distributed Dataset):**
- Immutable distributed collection of objects
- Fault-tolerant through lineage (recompute lost partitions)
- Low-level API

**DataFrame:**
- Distributed collection of data organized into named columns
- Higher-level API with schema
- Optimized by Catalyst optimizer

**Dataset (in Scala/Java):**
- Type-safe DataFrame
- Combines benefits of RDDs and DataFrames

**Spark SQL:**
- Module for structured data processing
- Execute SQL queries on DataFrames
- Integrates with Hive metastore

### 🔷 Spark Architecture

```
Driver Program → Cluster Manager → Executors (on Worker Nodes)
```

- **Driver:** Runs the main program, creates SparkContext
- **Cluster Manager:** Allocates resources (Standalone, YARN, Mesos, Kubernetes)
- **Executors:** Run tasks and store data in memory/cache

### 🔷 Spark Transformations and Actions

**Transformations (lazy, produce new RDD/DataFrame):**
- `map`, `filter`, `flatMap`, `groupByKey`, `reduceByKey`, `join`

**Actions (trigger execution):**
- `collect`, `count`, `reduce`, `saveAsTextFile`, `show`

**Testing Focus:**
- Transformation logic correctness
- Action output validation
- Caching/persistence behavior
- Broadcast variable and accumulator correctness

**Example Spark test:**

```python
# Transformation test
input_df = spark.createDataFrame([(1, "a"), (2, "b"), (3, "c")], ["id", "val"])
filtered = input_df.filter(input_df.id > 1)
assert filtered.count() == 2

# Aggregation test
sales = spark.createDataFrame([
    ("A", 100), ("B", 200), ("A", 150)
], ["region", "amount"])
totals = sales.groupBy("region").sum("amount")
# Verify: A=250, B=200
```

---

## 🗃️ 2.3 Big Data Architecture Layers

### 🗃️ Layer 1: Data Ingestion

**Purpose:** Collect and import data from various sources into the Big Data platform.

**Tools:**
- **Sqoop:** Bulk data transfer between Hadoop and relational databases
- **Flume:** Streaming log data collection
- **Kafka:** Distributed event streaming platform
- **NiFi:** Data flow automation

**Testing Focus:**
- Completeness: All records from source arrive
- Format correctness: Data encoded properly
- Frequency: Data arrives on schedule
- Error handling: Bad records handled correctly

**Example:**
A Sqoop job imports 1,000,000 rows from MySQL to HDFS. Tests:
- Row count in MySQL = row count in HDFS
- Data types preserved (INT → INT, VARCHAR → String)
- NULL values handled correctly
- Incremental imports capture only new/changed rows

### 🗃️ Layer 2: Data Storage

**Purpose:** Persist data for processing and analysis.

**Storage Types:**
- **HDFS:** Distributed file storage for batch processing
- **NoSQL databases:** Flexible schema, high write throughput
- **Object storage (S3, ADLS):** Cloud-native storage, cost-effective
- **Data lakes:** Raw data in native formats

**Testing Focus:**
- Data integrity after storage
- Partitioning strategy correctness
- Compression/decompression accuracy
- Replication factor compliance

### 🗃️ Layer 3: Data Processing

**Purpose:** Transform raw data into meaningful information.

**Processing Models:**
- **Batch:** Process large volumes at scheduled intervals
- **Stream:** Process data in real-time as it arrives
- **Interactive:** Ad-hoc queries on demand

**Testing Focus:**
- Transformation logic correctness
- Aggregation accuracy
- Handling of late-arriving data (in streaming)
- Exactly-once vs. at-least-once semantics

**Example:**
An hourly batch job calculates website metrics:
```
Raw clickstream → Filter bot traffic → Aggregate by page → Calculate bounce rate
```
Tests:
- Known bot clicks are excluded
- Bounce rate formula: single-page sessions / total sessions
- Aggregated counts match manual calculation for a sample hour

### 🗃️ Layer 4: Data Consumption

**Purpose:** Deliver processed data to end users and systems.

**Consumption Methods:**
- **BI dashboards:** Tableau, Power BI, Looker
- **Reporting:** Scheduled reports, exports
- **APIs:** REST/GraphQL endpoints
- **ML models:** Feature stores, model serving

**Testing Focus:**
- Report accuracy vs. source data
- API response correctness and performance
- Data freshness (SLA compliance)
- Access control and security

---

## 🗃️ 2.4 NoSQL Databases

### 🧪 Types of NoSQL Databases

| Type | Structure | Use Case | Examples |
|------|-----------|----------|----------|
| **Key-Value** | Key maps to value | Caching, sessions | Redis, DynamoDB |
| **Document** | JSON/XML documents | Content management, catalogs | MongoDB, CouchDB |
| **Column-Family** | Columns grouped in families | Time-series, IoT, analytics | Cassandra, HBase |
| **Graph** | Nodes and relationships | Social networks, fraud detection | Neo4j, Amazon Neptune |

### 🔷 Key-Value Stores

**Characteristics:**
- Simple key-value pairs
- Extremely fast lookups
- No complex querying

**Testing:**
- CRUD operations (Create, Read, Update, Delete)
- Key uniqueness
- Expiration/TTL behavior
- Replication consistency

### 🔷 Document Stores

**Characteristics:**
- Stores documents (JSON, BSON, XML)
- Flexible schema per document
- Supports nested structures
- Query by document content

**Testing:**
- Document structure validation
- Index effectiveness
- Query result correctness
- Schema migration handling

**Example MongoDB test:**
```javascript
// Insert test
db.users.insertOne({name: "Alice", age: 30, tags: ["premium"]})

// Query test
result = db.users.find({age: {$gte: 25}})
assert(result.count() === 1)
```

### 🔷 Column-Family Stores

**Characteristics:**
- Data stored in columns rather than rows
- Optimized for write-heavy workloads
- Distributed by design
- Excellent for time-series data

**Testing:**
- Row key distribution (avoid hotspots)
- Column family organization
- Consistency level behavior
- Compaction and tombstone handling

### 🗃️ Graph Databases

**Characteristics:**
- Nodes (entities) and edges (relationships)
- Optimized for traversing relationships
- Property graphs with attributes on nodes/edges

**Testing:**
- Relationship traversal correctness
- Path finding accuracy
- Constraint validation
- Query performance on deep traversals

---

## 💡 Worked Examples

### 💡 Worked Example 1: Testing a MapReduce Job

**Scenario:** A MapReduce job calculates total sales per region.

**Input data:**
```
region,amount
North,100
South,200
North,150
East,300
South,50
```

**Expected output:**
```
North,250
South,250
East,300
```

**Test cases:**

| Test | Input | Expected | Reason |
|------|-------|----------|--------|
| Normal | Full dataset | North=250, South=250, East=300 | Basic aggregation |
| Empty | Empty file | Empty output | Edge case |
| Single region | All North | North=total, no other regions | Single key |
| Negative amount | North,-50 | North=50 | Handle negatives |
| Null region | null,100 | Error table or default | Bad data handling |

### 💡 Worked Example 2: Spark DataFrame Transformation Test

**Scenario:** A Spark job cleanses customer data.

**Transformation rules:**
1. Remove rows with null email
2. Standardize phone to format: +1-XXX-XXX-XXXX
3. Convert age to integer; reject negative ages

**Test data:**
```
name,email,phone,age
Alice,alice@email.com,5551234567,30
Bob,,5559876543,25
Charlie,charlie@email.com,1234567890,-5
Diana,diana@email.com,5555555555,40
```

**Expected output:**
```
name,email,phone,age
Alice,alice@email.com,+1-555-123-4567,30
Diana,diana@email.com,+1-555-555-5555,40
```

**Validation tests:**
- Row count: 2 (Bob removed for null email, Charlie removed for negative age)
- Phone format: All match +1-XXX-XXX-XXXX
- Age type: Integer, all positive

### 💡 Worked Example 3: Data Flow Validation

**Scenario:** An e-commerce platform's data pipeline.

**Architecture:**
```
MySQL (transactions)
    ↓ (Sqoop, hourly)
HDFS (raw data)
    ↓ (Spark, hourly)
Data Lake (cleansed, Parquet)
    ↓ (Spark, daily)
Data Warehouse (aggregated)
    ↓ (BI tool)
Dashboard (daily sales)
```

**Testing at each layer:**

| Layer | Test | Method |
|-------|------|--------|
| MySQL → HDFS | Row count matches | `SELECT COUNT(*) = hdfs row count` |
| HDFS → Lake | Cleansing rules applied | Sample 1000 rows, verify rules |
| Lake → Warehouse | Aggregation correct | Compare `SUM(amount)` across layers |
| Warehouse → Dashboard | Report values accurate | Manual reconciliation for a date |

**End-to-end reconciliation:**
- Source: 1,000,000 transactions totaling $50,000,000
- Dashboard: $50,000,000 daily sales
- **Result:** PASS (0% variance)
