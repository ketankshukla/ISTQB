# ❓ Chapter 5 — Performance and Scalability Testing for Big Data: Practice Questions

---

### 🔷 Q1 (BD-5.2, K2)

Throughput is defined as:

A. The time for a single record to be processed
B. The amount of data processed per unit of time
C. The number of CPUs in a cluster
D. The size of the database

---

### 🔷 Q2 (BD-5.2, K2)

Latency is defined as:

A. The total volume of data stored
B. The delay between an event and the data being available for use
C. The number of nodes in a cluster
D. The speed of the network

---

### 🔷 Q3 (BD-5.3, K2)

TPC-DS is:

A. A tool for data ingestion
B. A benchmark for data warehouse and decision support performance
C. A type of NoSQL database
D. A data cleansing framework

---

### 🔷 Q4 (BD-5.4, K2)

A Spark job shows one task taking 45 minutes while all others take under 2 minutes. The MOST likely cause is:

A. The cluster is too large
B. Data skew — one partition has disproportionate data
C. The network is too fast
D. Too much CPU

---

### 🔷 Q5 (BD-5.5, K2)

Data skew can be mitigated by:

A. Adding more data
B. Techniques like salting, custom partitioning, or two-stage aggregation
C. Removing all partitions
D. Using only one node

---

### 🔷 Q6 (BD-5.6, K2)

Horizontal scaling means:

A. Adding more CPU and RAM to existing machines
B. Adding more machines to distribute the load
C. Compressing data
D. Reducing the dataset size

---

### 🔷 Q7 (BD-5.6, K2)

Vertical scaling means:

A. Adding more machines
B. Adding more power (CPU, RAM) to existing machines
C. Deleting old data
D. Using a distributed file system

---

### 🔷 Q8 (BD-5.4, K2)

High disk I/O with low CPU usage suggests:

A. A CPU bottleneck
B. An I/O bottleneck
C. A memory bottleneck
D. A network bottleneck

---

### 🔷 Q9 (BD-5.2, K3)

A streaming pipeline must detect fraud within 5 seconds of a transaction. The critical metric is:

A. Throughput
B. Latency
C. Storage capacity
D. Number of nodes

---

### 🔷 Q10 (BD-5.4, K2)

OutOfMemory errors in a Spark job typically indicate:

A. Too much CPU
B. A memory bottleneck — insufficient heap or inefficient data structures
C. Fast network
D. Small dataset

---

### 🔷 Q11 (BD-5.3, K2)

A benchmark test is used to:

A. Replace functional testing
B. Measure and compare system performance against standardized workloads
C. Delete test data
D. Encrypt data

---

### 🔷 Q12 (BD-5.6, K2)

A cluster processes 100 records/sec with 5 nodes and 180 records/sec with 10 nodes. This demonstrates:

A. Linear scalability
B. Sub-linear scalability
C. No scalability
D. Super-linear scalability

---

### 🔷 Q13 (BD-5.4, K3)

Most nodes in a cluster finish a job quickly, but two nodes take 10x longer. Monitoring shows those nodes have 10x more data. The fix should target:

A. Adding more CPU to all nodes
B. Data skew mitigation for the overloaded partitions
C. Increasing network bandwidth
D. Reducing the overall dataset

---

### 🔷 Q14 (BD-5.2, K2)

End-to-end latency includes:

A. Only query execution time
B. Ingestion latency + processing latency + query latency
C. Only network transfer time
D. Only disk read time

---

### 🔷 Q15 (BD-5.6, K2)

The PRIMARY limitation of vertical scaling is:

A. It is too cheap
B. Hardware cost increases non-linearly and there are physical limits to how much power can be added to one machine
C. It requires distributed software
D. It always improves performance

---

### 🔷 Q16 (BD-5.5, K2)

Broadcast joins are used to:

A. Join two very large tables
B. Avoid shuffling a large table by broadcasting a small table to all nodes
C. Compress data
D. Delete duplicate records

---

### 🔷 Q17 (BD-5.4, K2)

Excessive garbage collection (GC) in a Java-based Big Data application suggests:

A. Optimal memory usage
B. Memory pressure — too many short-lived objects or insufficient heap
C. Fast processing
D. Network efficiency

---

### 🔷 Q18 (BD-5.3, K2)

HiBench is a benchmark suite for:

A. Relational databases only
B. Hadoop and Spark ecosystems
C. Network hardware
D. Mobile applications

---

### 🔷 Q19 (BD-5.2, K3)

A daily batch job must process 1TB within 4 hours. It currently takes 5 hours. The FIRST step should be:

A. Add 100 nodes immediately
B. Identify the bottleneck (CPU, I/O, memory, network, or skew) before deciding on optimization
C. Ignore the SLA
D. Reduce data volume

---

### 🔷 Q20 (BD-5.6, K2)

A system shows throughput of 200 records/sec on 4 nodes and 350 records/sec on 8 nodes. Adding 8 more nodes will likely result in:

A. Exactly 700 records/sec
B. Somewhere between 560-650 records/sec (diminishing returns due to overhead)
C. 400 records/sec (worse performance)
D. Infinite throughput

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** Throughput = amount of data processed per unit of time.

### 🔷 Q2
**Answer: B**

**Rationale:** Latency = delay between event and data availability.

### 🔷 Q3
**Answer: B**

**Rationale:** TPC-DS = benchmark for data warehouse and decision support.

### 🔷 Q4
**Answer: B**

**Rationale:** One task much longer = data skew (one partition has most data).

### 🔷 Q5
**Answer: B**

**Rationale:** Skew mitigation = salting, custom partitioning, two-stage aggregation.

### 🔷 Q6
**Answer: B**

**Rationale:** Horizontal scaling = add more machines.

### 🔷 Q7
**Answer: B**

**Rationale:** Vertical scaling = add power (CPU, RAM) to existing machines.

### 🔷 Q8
**Answer: B**

**Rationale:** High disk I/O + low CPU = I/O bottleneck.

### 🔷 Q9
**Answer: B**

**Rationale:** 5-second detection requirement = latency is critical.

### 🔷 Q10
**Answer: B**

**Rationale:** OutOfMemory = memory bottleneck (insufficient heap).

### 🔷 Q11
**Answer: B**

**Rationale:** Benchmark = measure/compare performance against standardized workloads.

### 🔷 Q12
**Answer: B**

**Rationale:** 2x nodes → 1.8x throughput = sub-linear (overhead).

### 🔷 Q13
**Answer: B**

**Rationale:** 10x data on two nodes = data skew. Fix = skew mitigation.

### 🔷 Q14
**Answer: B**

**Rationale:** End-to-end latency = ingestion + processing + query latency.

### 🔷 Q15
**Answer: B**

**Rationale:** Vertical scaling limitation = non-linear cost and physical limits.

### 🔷 Q16
**Answer: B**

**Rationale:** Broadcast joins = broadcast small table to avoid shuffling large table.

### 🔷 Q17
**Answer: B**

**Rationale:** Excessive GC = memory pressure (too many objects or insufficient heap).

### 🔷 Q18
**Answer: B**

**Rationale:** HiBench = benchmark suite for Hadoop and Spark.

### 🔷 Q19
**Answer: B**

**Rationale:** First step = identify bottleneck before optimization.

### 🔷 Q20
**Answer: B**

**Rationale:** Diminishing returns from overhead = somewhere between 560-650, not exactly 700.
