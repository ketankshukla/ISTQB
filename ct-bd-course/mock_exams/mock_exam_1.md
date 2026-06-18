# 📝 CT-BD Mock Exam 1

**Instructions:**
- 40 questions, 60 minutes, single best answer, no negative marking

---

### 🔷 Q1

Big Data is PRIMARILY characterized by:

A. Only large volume
B. The 5 Vs: Volume, Velocity, Variety, Veracity, and Value
C. Only high speed processing
D. Only unstructured data

---

### 🔷 Q2

JSON log files are an example of:

A. Structured data
B. Semi-structured data
C. Unstructured data
D. Relational data

---

### 🔷 Q3

A data lake applies schema:

A. Before writing data
B. When reading data
C. Never
D. Only for structured data

---

### 🔷 Q4

In HDFS, the NameNode is responsible for:

A. Storing actual data blocks
B. Managing file system metadata and block locations
C. Running MapReduce tasks
D. Scheduling YARN containers

---

### 🔷 Q5

A PRIMARY advantage of Apache Spark over MapReduce is:

A. Spark uses less memory
B. Spark performs in-memory processing, making iterative workloads much faster
C. Spark cannot run on YARN
D. Spark only supports Scala

---

### 🔷 Q6

Kafka is PRIMARILY used for:

A. Batch processing of historical data
B. Distributed event streaming and real-time data ingestion
C. Data warehouse reporting
D. Relational database backups

---

### 🔷 Q7

MongoDB is an example of a:

A. Key-value store
B. Document store
C. Column-family store
D. Graph database

---

### 🔷 Q8

The 5 Vs of Big Data include all EXCEPT:

A. Volume
B. Velocity
C. Verification
D. Variety

---

### 🔷 Q9

ETL stands for:

A. Extract, Transfer, Load
B. Extract, Transform, Load
C. Execute, Test, Load
D. Extract, Translate, Link

---

### 🔷 Q10

In ELT, transformation occurs:

A. Before loading data to the target
B. After loading raw data to the target
C. Only in the source system
D. In a separate data mart

---

### 🔷 Q11

Data profiling is PRIMARILY used to:

A. Fix data quality issues automatically
B. Understand the structure, content, and quality characteristics of data
C. Replace data testing
D. Delete bad data

---

### 🔷 Q12

A dataset has 15% missing values in the "phone_number" field. This is a problem with:

A. Accuracy
B. Completeness
C. Consistency
D. Timeliness

---

### 🔷 Q13

The degree to which data conforms to defined formats, types, and ranges is:

A. Completeness
B. Accuracy
C. Validity
D. Consistency

---

### 🔷 Q14

A cross-field validation rule states: "if status = 'shipped', then tracking_number must not be null." To test this:

A. Check that all records have a tracking_number
B. Check that records with status='shipped' have tracking_number, and records with other statuses are not affected
C. Only test records with null tracking_number
D. Delete all records without tracking_number

---

### 🔷 Q15

Deduplication testing should verify:

A. All records are deleted
B. True duplicates are removed while distinct records are preserved
C. Only exact matches are considered
D. Fuzzy matching is never used

---

### 🔷 Q16

Testing NULL handling in a transformation means:

A. Ignoring NULL values
B. Verifying that NULL inputs produce defined outputs per requirements
C. Removing all NULL values
D. Converting NULL to zero always

---

### 🔷 Q17

Throughput is defined as:

A. The time for a single record to be processed
B. The amount of data processed per unit of time
C. The number of CPUs in a cluster
D. The size of the database

---

### 🔷 Q18

Latency is defined as:

A. The total volume of data stored
B. The delay between an event and the data being available for use
C. The number of nodes in a cluster
D. The speed of the network

---

### 🔷 Q19

A Spark job shows one task taking 45 minutes while all others take under 2 minutes. The MOST likely cause is:

A. The cluster is too large
B. Data skew — one partition has disproportionate data
C. The network is too fast
D. Too much CPU

---

### 🔷 Q20

Horizontal scaling means:

A. Adding more CPU and RAM to existing machines
B. Adding more machines to distribute the load
C. Compressing data
D. Reducing the dataset size

---

### 🔷 Q21

Deequ is a data quality library built on:

A. Hadoop MapReduce only
B. Apache Spark
C. Relational databases only
D. Python Pandas only

---

### 🔷 Q22

Great Expectations is a:

A. Data ingestion tool
B. Python framework for defining and validating data expectations
C. Hadoop cluster manager
D. Network monitoring tool

---

### 🔷 Q23

Unit testing a Spark job should be done:

A. Only on a production cluster with full data
B. In local mode with small, controlled test datasets
C. Never — Spark jobs cannot be unit tested
D. Only by data engineers

---

### 🔷 Q24

A data quality gate in CI/CD should:

A. Always pass regardless of data quality
B. Fail the pipeline if data quality checks fall below defined thresholds
C. Only run manually
D. Only check code syntax

---

### 🔷 Q25

For comparing two large datasets (billions of rows), the MOST practical approach is:

A. Row-by-row comparison of every record
B. Aggregation-based comparison or hash-based sampling
C. Manual visual inspection
D. Comparing file sizes only

---

### 🔷 Q26

Schema-on-read introduces a testing challenge because:

A. The schema is too rigid
B. Different consumers may interpret the same raw data differently
C. No data can be stored
D. It only works for structured data

---

### 🔷 Q27

A team tests at expected peak load and achieves acceptable results. They have completed:

A. Load testing
B. Stress testing
C. Endurance testing
D. All types of performance testing

---

### 🔷 Q28

Which is a PRIMARY difference between ETL and ELT?

A. ETL uses more data
B. ETL transforms before loading; ELT loads raw data first then transforms
C. ELT is only for small data
D. ETL is faster than ELT

---

### 🔷 Q29

SCD Type 2 is characterized by:

A. Overwriting old values with new values
B. Creating a new row with effective dates while preserving the historical row
C. Adding a "previous_value" column
D. Deleting old records

---

### 🔷 Q30

Data lineage is used to:

A. Only measure data size
B. Trace data from its origin through transformations to its destination
C. Delete old data
D. Compress data

---

### 🔷 Q31

A consistency rule validates that:

A. Individual column formats are correct
B. Data values are uniform across datasets and agree with related data
C. Data arrives on time
D. Data is unique

---

### 🔷 Q32

An incremental load test should verify all EXCEPT:

A. All new records since last load are captured
B. Changed records are updated correctly
C. Deleted records are handled per requirements
D. The source database password

---

### 🔷 Q33

Apache Atlas is PRIMARILY used for:

A. Data processing
B. Metadata management, governance, and data lineage tracking
C. Data ingestion
D. Report generation

---

### 🔷 Q34

A "hockey stick" curve on a performance graph indicates:

A. Perfect linear scalability
B. A threshold where performance degrades rapidly as a bottleneck is reached
C. A memory leak
D. Optimal caching behavior

---

### 🔷 Q35

Broadcast joins in Spark are used to:

A. Join two very large tables
B. Avoid shuffling a large table by broadcasting a small table to all nodes
C. Compress data
D. Delete duplicate records

---

### 🔷 Q36

A data warehouse is BEST described as:

A. A storage repository for raw data in native formats
B. A structured repository of processed data optimized for reporting and analysis
C. A real-time streaming platform
D. A NoSQL database

---

### 🔷 Q37

Testing a MapReduce job with empty input should verify:

A. The job crashes
B. The job produces empty output without errors
C. The job generates random data
D. The job runs forever

---

### 🔷 Q38

A performance benchmark is used to:

A. Replace functional testing
B. Measure and compare system performance against standardized workloads
C. Delete test data
D. Encrypt data

---

### 🔷 Q39

The PRIMARY benefit of automated data quality checks in CI/CD is:

A. Replacing all manual testing
B. Catching data quality regressions early before they reach production
C. Increasing data volume
D. Reducing storage costs

---

### 🔷 Q40

Which statement about Big Data testing is TRUE?

A. Big Data testing should only be done once before production release
B. Big Data testing should be integrated throughout the data pipeline lifecycle
C. Big Data testing replaces functional testing
D. Big Data testing requires production data at all times

---

## 📝 End of Mock Exam 1
