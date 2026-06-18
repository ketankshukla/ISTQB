# 📘 Chapter 5 — Performance and Scalability Testing for Big Data: Lessons

---

## 🎯 5.1 Performance Testing Objectives for Big Data

### ⚡ Why Performance Test Big Data?

Big Data systems handle massive volumes. Performance testing ensures:
- **SLA compliance:** Data is available within required timeframes
- **Capacity planning:** System can handle expected growth
- **Cost optimization:** Resources are used efficiently
- **User satisfaction:** Queries and reports respond quickly
- **Pipeline reliability:** Batch jobs complete before next scheduled run

### 🎯 Key Performance Objectives

**Ingestion Performance:**
- How fast can data be ingested?
- Can the system handle peak arrival rates?
- Is data loss occurring during high-volume ingestion?

**Processing Performance:**
- How long do batch jobs take?
- Can streaming jobs keep up with event rates?
- Are transformations completing within the batch window?

**Query Performance:**
- How fast do dashboards load?
- Can ad-hoc queries return in acceptable time?
- Does query performance degrade with data growth?

**Storage Performance:**
- How efficiently is storage utilized?
- Is compression effective?
- Are read/write operations balanced?

---

## ⭐ 5.2 Throughput and Latency

### 🔷 Throughput

**Definition:** The amount of data processed per unit of time.

**Common measures:**
- Records per second
- GB per hour
- Events per second (streaming)
- Rows loaded per minute

**Example:**
```
ETL pipeline processes 10 million records in 2 hours.
Throughput = 10,000,000 records / 7,200 seconds = 1,389 records/second
```

**Throughput testing approach:**
1. Measure processing time for known data volumes
2. Calculate throughput
3. Compare against SLA (e.g., must process daily load within 4-hour window)
4. Test at expected and peak volumes

### 🔷 Latency

**Definition:** The delay between an event occurring and the data being available for use.

**Types of latency:**

| Type | Definition | Example |
|------|------------|---------|
| **Ingestion latency** | Time from event occurrence to data stored | Sensor reading → stored in HDFS |
| **Processing latency** | Time from data stored to processing complete | Raw data → transformed output |
| **Query latency** | Time from query submission to results returned | Dashboard request → rendered |
| **End-to-end latency** | Total time from event to actionable insight | Click → report updated |

**Latency testing approach:**
1. Inject events with timestamps
2. Measure arrival time at each stage
3. Compare against SLA (e.g., streaming latency < 5 seconds)

**Example:**
```
Event timestamp: 2024-06-15 10:00:00.000
Stored in Kafka: 10:00:00.200 (200ms ingestion latency)
Processed by Spark: 10:00:02.500 (2.5s processing latency)
Available in dashboard: 10:00:03.000 (3s end-to-end latency)
SLA: < 5 seconds → PASS
```

---

## 🗃️ 5.3 Benchmarks for Big Data

### 🔷 Why Benchmark?

Benchmarks provide standardized ways to measure and compare Big Data system performance.

### 🗃️ Common Big Data Benchmarks

**TPC-DS (Decision Support):**
- Industry-standard benchmark for data warehouse systems
- 99 SQL queries covering complex analytics
- Measures query throughput and data loading performance
- Used for: Data warehouses, SQL-on-Hadoop engines

**TPC-H (Decision Support — simpler):**
- 22 queries, smaller dataset
- Older but still relevant for basic OLAP testing

**HiBench:**
- Comprehensive benchmark suite for Hadoop/Spark
- Includes: Sort, WordCount, TeraSort, PageRank, K-means
- Measures: Throughput, resource utilization

**YCSB (Yahoo! Cloud Serving Benchmark):**
- For NoSQL databases
- Tests read/write throughput and latency
- Workloads: A (update heavy), B (read heavy), C (read only), etc.

### 🔷 Running a Benchmark Test

**Steps:**
1. **Define baseline:** Run benchmark on reference configuration
2. **Prepare data:** Generate or load benchmark dataset
3. **Execute:** Run benchmark workloads
4. **Measure:** Record throughput, latency, resource usage
5. **Compare:** Compare results to baseline and SLA
6. **Tune:** Optimize based on findings
7. **Re-test:** Verify improvements

**Example HiBench TeraSort results:**

| Nodes | Data Size | Time | Throughput |
|-------|-----------|------|------------|
| 5 | 100GB | 25 min | 4 GB/min |
| 10 | 100GB | 14 min | 7.1 GB/min |
| 20 | 100GB | 8 min | 12.5 GB/min |

**Analysis:** Doubling nodes reduces time by ~40% (sub-linear due to overhead).

---

## ⭐ 5.4 Bottleneck Detection

### 🗃️ Common Big Data Bottlenecks

**CPU Bottleneck:**
- Symptom: High CPU usage, long processing times
- Causes: Complex transformations, inefficient algorithms, too few cores
- Detection: Monitor CPU on all nodes
- Mitigation: Optimize code, add nodes, use more efficient operations

**I/O Bottleneck:**
- Symptom: High disk read/write, low CPU
- Causes: Reading/writing large datasets, network storage, insufficient memory
- Detection: Monitor disk I/O and wait times
- Mitigation: Increase memory for caching, use faster storage (SSD), optimize data formats (Parquet, ORC)

**Network Bottleneck:**
- Symptom: High network utilization, shuffle time dominates
- Causes: Large data transfers between nodes, data skew causing imbalance
- Detection: Monitor network traffic between nodes
- Mitigation: Reduce shuffle, improve data locality, increase network bandwidth

**Memory Bottleneck:**
- Symptom: OutOfMemory errors, excessive garbage collection, swapping
- Causes: Large datasets in memory, inefficient caching, memory leaks
- Detection: Monitor heap usage, GC frequency, swap usage
- Mitigation: Increase memory, optimize data structures, spill to disk

### 🔬 Bottleneck Analysis Process

```
1. Monitor all resources (CPU, memory, disk, network) across all nodes
2. Identify the saturated resource
3. Correlate saturation with specific jobs/stages
4. Identify the specific operation causing saturation
5. Apply targeted optimization
6. Re-test and measure improvement
```

---

## 🗃️ 5.5 Data Skew and Hot Spots

### 🗃️ What is Data Skew?

Data skew occurs when data is unevenly distributed across partitions or nodes, causing some nodes to process much more data than others.

**Symptoms:**
- Job takes much longer than expected
- Most nodes finish quickly, one or two nodes run for a long time
- High variance in task completion times

**Example:**
```
Word count on social media data:
- "the" appears 1,000,000 times
- "obstreperous" appears 3 times
- If partitioned by first letter: "t" partition has 1,000,000 records, "o" partition has 3
- The "t" reducer takes 99% of the job time
```

### 🔷 Detecting Skew

**Spark UI:**
- Look for tasks with much larger input sizes or longer durations
- Check "Shuffle Read" and "Shuffle Write" per task

**Metrics to monitor:**
- Min/Max/Median task duration
- Records processed per task
- Input size per task

**Example analysis:**
```
Task 1: 10,000 records, 15 seconds
Task 2: 12,000 records, 18 seconds
Task 3: 8,000 records, 12 seconds
Task 4: 1,500,000 records, 8 minutes  ← SKEW!
```

### 🔷 Mitigating Skew

**Salting:**
- Add random prefix to skewed keys to distribute them across partitions
- Example: "the" → "the_1", "the_2", "the_3" (random assignment)
- Aggregate results in a second step

**Two-stage aggregation:**
- First aggregate locally on each partition
- Then shuffle and combine partial results
- Reduces data moved across network

**Custom partitioning:**
- Use knowledge of data distribution to create balanced partitions
- Example: Partition by date range instead of user ID (if some users are much more active)

**Broadcast joins:**
- For joining small table to large table, broadcast the small table to all nodes
- Avoids shuffling the large table

---

## ⭐ 5.6 Scalability Testing

### 🔷 Horizontal Scaling (Scale Out)

**Definition:** Adding more machines to distribute the load.

**Testing approach:**
1. Run workload on baseline cluster size (e.g., 5 nodes)
2. Double cluster size (10 nodes)
3. Compare throughput and latency
4. Expected: ~2x throughput, similar latency
5. Reality: Often sub-linear due to overhead

**Example results:**

| Nodes | Throughput | Scaling Efficiency |
|-------|-----------|-------------------|
| 5 | 100 records/sec | Baseline |
| 10 | 180 records/sec | 90% (sub-linear) |
| 20 | 320 records/sec | 80% |
| 40 | 560 records/sec | 70% |

**Analysis:** Diminishing returns as overhead (coordination, shuffle, network) increases.

### 🔷 Vertical Scaling (Scale Up)

**Definition:** Adding more power (CPU, RAM) to existing machines.

**When to use:**
- Single-node databases
- Applications that can't distribute easily
- When horizontal scaling is not cost-effective

**Limitations:**
- Hardware cost increases non-linearly
- Single point of failure
- Physical limits (can't add infinite RAM to one machine)

### 🔷 Testing Scalability

**Questions to answer:**
1. If data volume doubles, does processing time double?
2. If cluster size doubles, does throughput double?
3. At what point does adding nodes stop helping?
4. What is the maximum capacity before failure?

**Test scenarios:**
- **Data volume scaling:** 2x, 5x, 10x data with fixed cluster
- **Cluster scaling:** Fixed data, 2x, 5x cluster size
- **Combined scaling:** Both data and cluster grow proportionally

---

## 💡 Worked Examples

### 💡 Worked Example 1: Throughput SLA Testing

**Scenario:** A daily ETL job must process 500GB within a 6-hour window.

**Test:**
```
Data volume: 500GB
Cluster: 10 nodes
Run time: 5 hours 15 minutes
Throughput: 500GB / 5.25 hours = 95.2 GB/hour
SLA: 500GB / 6 hours = 83.3 GB/hour minimum
Result: PASS (exceeds SLA by 14%)
```

**Peak volume test:**
```
Data volume: 750GB (Black Friday peak)
Cluster: 10 nodes
Projected time: 750 / 95.2 = 7.9 hours
SLA window: 6 hours
Result: FAIL — need larger cluster or optimization
```

**Recommendation:** Increase to 15 nodes or optimize transformation logic.

### 💡 Worked Example 2: Bottleneck Identification

**Scenario:** A Spark job takes 3 hours instead of the expected 1 hour.

**Monitoring results:**

| Node | CPU | Memory | Disk I/O | Network |
|------|-----|--------|----------|---------|
| Node 1 | 95% | 80% | High | High |
| Node 2 | 30% | 50% | Low | Low |
| Node 3 | 25% | 45% | Low | Low |
| ... | ... | ... | ... | ... |

**Analysis:**
- Node 1 is saturated (CPU, disk, network all high)
- Other nodes are underutilized
- **Conclusion:** Data skew — one partition has most of the data

**Spark UI investigation:**
```
Stage 3: reduceByKey
- Task 15: 2.5GB shuffle read, 45 minutes
- All other tasks: < 100MB shuffle read, < 2 minutes
```

**Root cause:** `reduceByKey` on a highly skewed key (customer_id for a very large customer).

**Fix:** Apply salting to the skewed key:
```python
# Before: rdd.reduceByKey(lambda a, b: a + b)
# After: Salt the key
salted = rdd.map(lambda (k, v): (k + "_" + str(random.randint(0, 9)), v))
partial = salted.reduceByKey(lambda a, b: a + b)
result = partial.map(lambda (k, v): (k.split("_")[0], v)).reduceByKey(lambda a, b: a + b)
```

**Re-test:** Job completes in 55 minutes.

### 💡 Worked Example 3: Scalability Test Design

**Scenario:** A recommendation engine processes user activity.

**Test matrix:**

| Test | Data Volume | Cluster Size | Expected Throughput | Actual |
|------|-------------|--------------|---------------------|--------|
| Baseline | 100M events | 5 nodes | Baseline | 500 events/sec |
| Scale data | 200M events | 5 nodes | ~500 events/sec | 480 events/sec |
| Scale cluster | 100M events | 10 nodes | ~1000 events/sec | 900 events/sec |
| Scale both | 200M events | 10 nodes | ~1000 events/sec | 920 events/sec |

**Analysis:**
- Doubling data with fixed cluster: throughput drops slightly (overhead)
- Doubling cluster with fixed data: throughput increases 80% (not quite linear)
- Doubling both: throughput stays similar to single-data 10-node test

**Conclusion:** System scales reasonably well. Bottleneck appears to be in coordination overhead, not data processing itself.
