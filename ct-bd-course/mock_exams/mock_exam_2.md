# 📝 CT-BD Mock Exam 2

**Instructions:**
- 40 questions, 60 minutes, single best answer, no negative marking

---

### 🔷 Q1

Unstructured data includes:

A. Relational database tables
B. Free-form text, images, and video files
C. JSON documents
D. CSV files

---

### 🔷 Q2

A data warehouse applies schema:

A. Before writing data
B. When reading data
C. During backup
D. Only for unstructured data

---

### 🔷 Q3

In Hadoop, YARN is responsible for:

A. Storing data blocks
B. Managing cluster resources and scheduling jobs
C. Defining the file system namespace
D. Running SQL queries

---

### 🔷 Q4

A DataFrame in Spark is:

A. A mutable distributed collection of objects
B. A distributed collection of data organized into named columns with a schema
C. A single-machine data structure
D. A type of NoSQL database

---

### 🔷 Q5

Sqoop is used for:

A. Real-time event streaming
B. Bulk data transfer between Hadoop and relational databases
C. Data visualization
D. Network monitoring

---

### 🔷 Q6

Cassandra is BEST suited for:

A. Complex relationship traversal
B. Write-heavy workloads with time-series data
C. Storing binary image files
D. Ad-hoc SQL analytics

---

### 🔷 Q7

A closed workload model is characterized by:

A. A fixed number of users repeating transactions
B. Users arriving at a fixed rate regardless of system response
C. Unlimited users entering the system
D. No think time between transactions

---

### 🔷 Q8

MapReduce consists of which phases?

A. Extract, Transform, Load
B. Map, Shuffle/Sort, Reduce
C. Ingest, Store, Process
D. Read, Write, Delete

---

### 🔷 Q9

Spark transformations are:

A. Executed immediately
B. Lazy — they build an execution plan triggered by actions
C. Only available in Python
D. Not fault-tolerant

---

### 🔷 Q10

Neo4j is BEST suited for:

A. Caching session data
B. Traversing relationships and finding paths in connected data
C. Storing JSON documents
D. Time-series analytics

---

### 🔷 Q11

The degree to which data correctly represents the real-world entity is:

A. Completeness
B. Accuracy
C. Consistency
D. Timeliness

---

### 🔷 Q12

Data that is uniform across datasets and over time demonstrates:

A. Completeness
B. Accuracy
C. Consistency
D. Validity

---

### 🔷 Q13

A data quality threshold is BEST described as:

A. The maximum amount of data that can be stored
B. An acceptable level of quality balancing business needs against perfection cost
C. The number of test cases required
D. A strict requirement for 100% clean data

---

### 🔷 Q14

A referential integrity rule states every order.customer_id must exist in customers.customer_id. The test is:

A. SELECT all orders
B. SELECT orders where customer_id NOT IN (SELECT customer_id FROM customers)
C. SELECT all customers
D. SELECT orders where customer_id IS NULL

---

### 🔷 Q15

A field labeled "price" contains text values like "N/A" and "TBD". This is primarily a:

A. Completeness issue
B. Validity issue (wrong data type)
C. Timeliness issue
D. Uniqueness issue

---

### 🔷 Q16

An aggregate consistency rule validates:

A. Individual column formats
B. That summary values match the detail values they are derived from
C. Network connectivity
D. User interface design

---

### 🔷 Q17

Temporal consistency means:

A. Data is stored in the correct time zone
B. Data values do not contradict historical records over time
C. Data arrives on time
D. Data is always recent

---

### 🔷 Q18

In ETL, transformation occurs:

A. After loading data to the target
B. Before loading data to the target
C. Only in the source system
D. Never

---

### 🔷 Q19

Testing ETL extraction should verify:

A. Only the transformation logic
B. That all source data is captured with correct data types and no unintended filtering
C. Only the report colors
D. Only network speed

---

### 🔷 Q20

Report reconciliation involves:

A. Comparing report values to source system totals to verify accuracy
B. Checking report formatting only
C. Verifying the report file size
D. Testing the printer output

---

### 🔷 Q21

A team runs performance tests manually once per month. They frequently discover performance regressions in production. The BEST improvement is:

A. Run tests more frequently manually
B. Integrate automated performance tests with gates into CI/CD
C. Don't run performance tests at all
D. Only test after production deployment

---

### 🔷 Q22

A recorded performance test script typically requires:

A. No further modification before running with load
B. Cleanup, parameterization, and correlation before it can be used for realistic load testing
C. Only a different tool
D. Only more users

---

### 🔷 Q23

Which scripting approach gives the most control and maintainability?

A. Recorded scripts used without modification
B. Hand-coded scripts with proper parameterization and correlation
C. Scripts with hard-coded credentials
D. Scripts that include all browser resources

---

### 🔷 Q24

A performance gate in CI/CD is:

A. A physical security gate
B. An automated check that prevents deployment if performance degrades beyond a threshold
C. A manual approval step
D. A network firewall

---

### 🔷 Q25

Which is a PRIMARY advantage of cloud-based performance testing?

A. It is always free
B. On-demand scaling to very large loads without maintaining infrastructure
C. It requires no internet connection
D. It only works for small applications

---

### 🔷 Q26

A throughput of 200 TPS at 1,000 users and 210 TPS at 2,000 users indicates:

A. Linear scalability
B. A bottleneck has likely been reached near 1,000 users
C. The system can handle unlimited users
D. The test is too short

---

### 🔷 Q27

Adding an index to a slow database query is an example of:

A. Hardware tuning
B. Software tuning
C. Configuration tuning
D. Architecture tuning

---

### 🔷 Q28

A management performance report should PRIMARILY include:

A. Detailed thread dump analysis
B. Executive summary, business impact, and go/no-go recommendation
C. Raw log files from all servers
D. Code-level method timings

---

### 🔷 Q29

Data skew can be mitigated by:

A. Adding more data
B. Techniques like salting, custom partitioning, or two-stage aggregation
C. Removing all partitions
D. Using only one node

---

### 🔷 Q30

Vertical scaling means:

A. Adding more machines
B. Adding more power (CPU, RAM) to existing machines
C. Deleting old data
D. Using a distributed file system

---

### 🔷 Q31

Excessive garbage collection in a Java-based Big Data application suggests:

A. Optimal memory usage
B. Memory pressure — too many short-lived objects or insufficient heap
C. Fast processing
D. Network efficiency

---

### 🔷 Q32

A system processes 100 records/sec on 1 server and 180 records/sec on 2 servers. This demonstrates:

A. Linear scalability
B. Sub-linear scalability
C. No scalability
D. Perfect scalability

---

### 🔷 Q33

QuerySurge is PRIMARILY used for:

A. Writing Spark jobs
B. Automating comparison between source and target data in ETL testing
C. Managing HDFS
D. Streaming data ingestion

---

### 🔷 Q34

pytest-spark is used for:

A. Monitoring Spark clusters
B. Testing PySpark code with pytest
C. Ingesting data into Spark
D. Visualizing Spark jobs

---

### 🔷 Q35

Schema compatibility checking in CI/CD ensures:

A. That the code compiles
B. That schema changes do not break downstream consumers
C. That the database is backed up
D. That the network is fast

---

### 🔷 Q36

A hash-based comparison of datasets works by:

A. Comparing every row in order
B. Computing cryptographic hashes per row or partition and comparing them
C. Visual inspection
D. Comparing file names

---

### 🔷 Q37

A data observability platform is used for:

A. Writing ETL code
B. Automatic anomaly detection and incident management for data pipelines
C. Compressing files
D. Managing user accounts

---

### 🔷 Q38

Spark Testing Base is a library for:

A. Monitoring Spark applications
B. Unit testing Spark programs in Scala
C. Ingesting data into Spark
D. Scheduling Spark jobs

---

### 🔷 Q39

A CI/CD pipeline for a data pipeline should include all EXCEPT:

A. Unit tests for transformations
B. Data quality checks
C. Performance regression tests
D. Manual data entry validation

---

### 🔷 Q40

The PRIMARY difference between speed testing and load testing is:

A. There is no difference
B. Speed testing measures response time under light load; load testing validates behavior under expected workload
C. Speed testing uses more users
D. Load testing is only for databases

---

## 📝 End of Mock Exam 2
