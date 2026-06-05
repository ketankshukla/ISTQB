# Chapter 2 — Big Data Architecture and Components: Practice Questions

---

### Q1 (BD-2.1, K2)

In HDFS, the NameNode is responsible for:

A. Storing actual data blocks
B. Managing file system metadata and block locations
C. Running MapReduce tasks
D. Scheduling YARN containers

---

### Q2 (BD-2.1, K2)

HDFS stores multiple copies of each block primarily to:

A. Increase query speed
B. Provide fault tolerance against node failures
C. Reduce storage costs
D. Enable schema-on-read

---

### Q3 (BD-2.2, K2)

A PRIMARY advantage of Apache Spark over MapReduce is:

A. Spark uses less memory
B. Spark performs in-memory processing, making iterative workloads much faster
C. Spark cannot run on YARN
D. Spark only supports Scala

---

### Q4 (BD-2.2, K2)

In Spark, a DataFrame is:

A. A mutable distributed collection of objects
B. A distributed collection of data organized into named columns with a schema
C. A single-machine data structure
D. A type of NoSQL database

---

### Q5 (BD-2.3, K2)

A tool designed for bulk data transfer between Hadoop and relational databases is:

A. Kafka
B. Sqoop
C. Flume
D. Spark SQL

---

### Q6 (BD-2.3, K2)

Kafka is PRIMARILY used for:

A. Batch processing of historical data
B. Distributed event streaming and real-time data ingestion
C. Data warehouse reporting
D. Relational database backups

---

### Q7 (BD-2.4, K2)

MongoDB is an example of a:

A. Key-value store
B. Document store
C. Column-family store
D. Graph database

---

### Q8 (BD-2.4, K2)

Cassandra is BEST suited for:

A. Complex relationship traversal
B. Write-heavy workloads with time-series data
C. Storing binary image files
D. Ad-hoc SQL analytics

---

### Q9 (BD-2.3, K3)

A pipeline that processes data as it arrives (e.g., clickstream events) is using:

A. Batch processing
B. Stream processing
C. Interactive processing
D. Scheduled processing

---

### Q10 (BD-2.1, K2)

MapReduce consists of which phases?

A. Extract, Transform, Load
B. Map, Shuffle/Sort, Reduce
C. Ingest, Store, Process
D. Read, Write, Delete

---

### Q11 (BD-2.2, K2)

Spark transformations are:

A. Executed immediately
B. Lazy — they build a execution plan that is triggered by actions
C. Only available in Python
D. Not fault-tolerant

---

### Q12 (BD-2.4, K2)

Redis is BEST described as a:

A. Document store
B. Key-value store
C. Graph database
D. Relational database

---

### Q13 (BD-2.3, K2)

Flume is PRIMARILY designed for:

A. Bulk data transfer between Hadoop and relational databases
B. Streaming log data collection and aggregation
C. Real-time event streaming between microservices
D. Data warehouse ETL

---

### Q14 (BD-2.1, K2)

In Hadoop, YARN is responsible for:

A. Storing data blocks
B. Managing cluster resources and scheduling jobs
C. Defining the file system namespace
D. Running SQL queries

---

### Q15 (BD-2.4, K2)

Neo4j is BEST suited for:

A. Caching session data
B. Traversing relationships and finding paths in connected data
C. Storing JSON documents
D. Time-series analytics

---

### Q16 (BD-2.2, K3)

A Spark job uses `groupByKey` followed by `reduce`. The test should verify:

A. Only the number of output files
B. That grouped data is correctly aggregated and no keys are lost during shuffle
C. The color of the Spark UI
D. The driver program's memory usage only

---

### Q17 (BD-2.3, K2)

Data ingestion testing should verify all EXCEPT:

A. All source records arrived in the target
B. Data formats are preserved correctly
C. The BI dashboard color scheme
D. Bad records are handled according to defined rules

---

### Q18 (BD-2.1, K2)

The default HDFS block size is:

A. 4KB
B. 64MB
C. 128MB
D. 1GB

---

### Q19 (BD-2.4, K2)

A system needs to store product catalogs where each product has different attributes. The BEST NoSQL choice is likely:

A. Key-value store
B. Document store
C. Column-family store
D. Graph database

---

### Q20 (BD-2.3, K3)

Testing a Sqoop incremental import should verify:

A. Only the first 10 rows
B. That only new or changed rows since the last import are transferred
C. The database password
D. Network cable quality

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** NameNode manages metadata (directory tree, block locations). DataNodes store actual blocks.

### Q2
**Answer: B**

**Rationale:** HDFS replication (default 3x) provides fault tolerance against node failures.

### Q3
**Answer: B**

**Rationale:** Spark's in-memory processing makes iterative workloads much faster than MapReduce's disk-based approach.

### Q4
**Answer: B**

**Rationale:** DataFrame = distributed collection with named columns and schema.

### Q5
**Answer: B**

**Rationale:** Sqoop = bulk transfer between Hadoop and relational databases.

### Q6
**Answer: B**

**Rationale:** Kafka = distributed event streaming platform for real-time data.

### Q7
**Answer: B**

**Rationale:** MongoDB stores JSON-like documents = document store.

### Q8
**Answer: B**

**Rationale:** Cassandra = column-family store optimized for write-heavy, time-series workloads.

### Q9
**Answer: B**

**Rationale:** Processing data as it arrives = stream processing.

### Q10
**Answer: B**

**Rationale:** MapReduce phases = Map, Shuffle/Sort, Reduce.

### Q11
**Answer: B**

**Rationale:** Spark transformations are lazy (build execution plan). Actions trigger execution.

### Q12
**Answer: B**

**Rationale:** Redis = key-value store.

### Q13
**Answer: B**

**Rationale:** Flume = streaming log data collection and aggregation.

### Q14
**Answer: B**

**Rationale:** YARN = cluster resource management and job scheduling.

### Q15
**Answer: B**

**Rationale:** Neo4j = graph database optimized for relationship traversal.

### Q16
**Answer: B**

**Rationale:** `groupByKey` + `reduce` = test correct aggregation and no lost keys during shuffle.

### Q17
**Answer: C**

**Rationale:** BI dashboard color scheme = not an ingestion test concern.

### Q18
**Answer: C**

**Rationale:** Default HDFS block size = 128MB.

### Q19
**Answer: B**

**Rationale:** Different attributes per product = flexible schema = document store (MongoDB).

### Q20
**Answer: B**

**Rationale:** Incremental import = only new/changed rows since last import.
