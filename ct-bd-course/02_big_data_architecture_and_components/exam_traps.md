# Chapter 2 — Big Data Architecture and Components: Exam Traps

## Trap 1: Confusing HDFS Block Replication with RAID

**Trap:** HDFS replication (storing copies on different nodes) is for fault tolerance, not performance striping like RAID.

**Example question:**
> HDFS stores 3 copies of each block primarily to:
>
> A. Increase read performance through striping
> B. Provide fault tolerance by ensuring data survives node failures
> C. Compress data more efficiently
> D. Enable schema-on-read

**Correct answer:** B — Replication is for fault tolerance, not performance striping.

---

## Trap 2: Thinking MapReduce and Spark Are Identical

**Trap:** Spark is faster than MapReduce for many workloads due to in-memory processing, but they serve similar distributed processing purposes.

**Example question:**
> A team chooses Spark over MapReduce for iterative machine learning because:
>
> A. Spark uses less memory
> B. Spark's in-memory processing is significantly faster for iterative algorithms
> C. MapReduce cannot process large datasets
> D. Spark does not support Java

**Correct answer:** B — Spark caches data in memory between iterations, making it much faster for iterative workloads than MapReduce which writes to disk after each step.

---

## Trap 3: Confusing NoSQL Database Types

**Trap:** Each NoSQL type (key-value, document, column, graph) has specific use cases. Choosing the wrong type is a common exam trap.

**Example question:**
> A social network needs to find connections between users up to 3 degrees of separation. The BEST database choice is:
>
> A. Key-value store (Redis)
> B. Document store (MongoDB)
> C. Column-family store (Cassandra)
> D. Graph database (Neo4j)

**Correct answer:** D — Graph databases are optimized for relationship traversals. Other types would require expensive joins or application-level logic.

---

## Trap 4: Ignoring Data Locality in Testing

**Trap:** Hadoop optimizes for data locality (moving computation to data). Tests should verify that jobs run on nodes where data resides.

**Example question:**
> A MapReduce job is running slowly despite low cluster CPU. Investigation shows most data is being transferred over the network. The likely issue is:
>
> A. The network is too fast
> B. Data locality is not being exploited — tasks should run on nodes containing the data
> C. HDFS is disabled
> D. The NameNode is overloaded

**Correct answer:** B — Data locality means processing should happen where data resides. Network transfer indicates poor locality.

---

## Trap 5: Confusing Batch and Stream Processing

**Trap:** Batch processes accumulated data; stream processes data as it arrives. Testing approaches differ significantly.

**Example question:**
> A pipeline processes all yesterday's transactions at 2 AM. This is:
>
> A. Stream processing
> B. Batch processing
> C. Interactive processing
> D. Real-time processing

**Correct answer:** B — Scheduled processing of accumulated data = batch processing. Stream processing would handle transactions as they occur.
