# Chapter 6 — Big Data Testing Tools and Automation: Practice Questions

---

### Q1 (BD-6.1, K2)

Deequ is a data quality library built on:

A. Hadoop MapReduce only
B. Apache Spark
C. Relational databases only
D. Python Pandas only

---

### Q2 (BD-6.1, K2)

Great Expectations is a:

A. Data ingestion tool
B. Python framework for defining and validating data expectations
C. Hadoop cluster manager
D. Network monitoring tool

---

### Q3 (BD-6.2, K2)

QuerySurge is PRIMARILY used for:

A. Writing Spark jobs
B. Automating comparison between source and target data in ETL testing
C. Managing HDFS
D. Streaming data ingestion

---

### Q4 (BD-6.3, K2)

Unit testing a Spark job should be done:

A. Only on a production cluster with full data
B. In local mode with small, controlled test datasets
C. Never — Spark jobs cannot be unit tested
D. Only by data engineers

---

### Q5 (BD-6.4, K2)

A data quality gate in CI/CD should:

A. Always pass regardless of data quality
B. Fail the pipeline if data quality checks fall below defined thresholds
C. Only run manually
D. Only check code syntax

---

### Q6 (BD-6.5, K2)

For comparing two large datasets (billions of rows), the MOST practical approach is:

A. Row-by-row comparison of every record
B. Aggregation-based comparison (counts, sums) or hash-based sampling
C. Manual visual inspection
D. Comparing file sizes only

---

### Q7 (BD-6.1, K2)

Anomaly detection in data quality means:

A. Detecting when data volume is unexpectedly high or low, or when distributions change abnormally
B. Finding aliens in the data
C. Compressing data
D. Encrypting data

---

### Q8 (BD-6.3, K2)

pytest-spark is used for:

A. Monitoring Spark clusters
B. Testing PySpark code with pytest
C. Ingesting data into Spark
D. Visualizing Spark jobs

---

### Q9 (BD-6.4, K2)

Schema compatibility checking in CI/CD ensures:

A. That the code compiles
B. That schema changes do not break downstream consumers
C. That the database is backed up
D. That the network is fast

---

### Q10 (BD-6.6, K2)

Apache Atlas is PRIMARILY used for:

A. Data processing
B. Metadata management, governance, and data lineage tracking
C. Data ingestion
D. Report generation

---

### Q11 (BD-6.1, K2)

Which is NOT a feature of Great Expectations?

A. Automatic documentation generation
B. Data profiling to suggest expectations
C. Running MapReduce jobs
D. Integration with Pandas and Spark

---

### Q12 (BD-6.2, K2)

iCEDQ is:

A. A data processing engine
B. A data validation and reconciliation platform
C. A NoSQL database
D. A streaming platform

---

### Q13 (BD-6.4, K2)

Performance regression testing in CI/CD compares:

A. Code line counts
B. Current execution time against a baseline to detect degradation
C. Number of developers
D. File sizes

---

### Q14 (BD-6.5, K2)

A hash-based comparison of datasets works by:

A. Comparing every row in order
B. Computing cryptographic hashes per row or partition and comparing them
C. Visual inspection
D. Comparing file names

---

### Q15 (BD-6.6, K2)

Data observability platforms like Monte Carlo are used for:

A. Writing ETL code
B. Automatic anomaly detection and incident management for data pipelines
C. Compressing files
D. Managing user accounts

---

### Q16 (BD-6.3, K2)

Spark Testing Base is a library for:

A. Monitoring Spark applications
B. Unit testing Spark programs in Scala
C. Ingesting data into Spark
D. Scheduling Spark jobs

---

### Q17 (BD-6.4, K3)

A CI/CD pipeline for a data pipeline should include all EXCEPT:

A. Unit tests for transformations
B. Data quality checks
C. Performance regression tests
D. Manual data entry validation

---

### Q18 (BD-6.1, K2)

Data quality constraints in Deequ can include:

A. Only row count checks
B. Completeness, uniqueness, range checks, and containment checks
C. Only network checks
D. Only file size checks

---

### Q19 (BD-6.5, K2)

Sampling-based comparison is:

A. Comparing every single row
B. Comparing a statistically significant random sample to infer overall dataset correctness
C. Only comparing headers
D. Only comparing metadata

---

### Q20 (BD-6.4, K2)

The PRIMARY benefit of automated data quality checks in CI/CD is:

A. Replacing all manual testing
B. Catching data quality regressions early before they reach production
C. Increasing data volume
D. Reducing storage costs

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** Deequ = data quality library built on Apache Spark.

### Q2
**Answer: B**

**Rationale:** Great Expectations = Python framework for data expectations and validation.

### Q3
**Answer: B**

**Rationale:** QuerySurge = automated source-to-target comparison for ETL testing.

### Q4
**Answer: B**

**Rationale:** Spark unit tests run in local mode with small controlled datasets.

### Q5
**Answer: B**

**Rationale:** Data quality gate = fail pipeline if quality falls below thresholds.

### Q6
**Answer: B**

**Rationale:** Large dataset comparison = aggregation-based or hash-based sampling.

### Q7
**Answer: A**

**Rationale:** Anomaly detection = unexpected volume/distribution changes.

### Q8
**Answer: B**

**Rationale:** pytest-spark = testing PySpark code with pytest.

### Q9
**Answer: B**

**Rationale:** Schema compatibility = ensure changes don't break downstream consumers.

### Q10
**Answer: B**

**Rationale:** Apache Atlas = metadata management, governance, lineage.

### Q11
**Answer: C**

**Rationale:** Great Expectations does not run MapReduce jobs. It validates data.

### Q12
**Answer: B**

**Rationale:** iCEDQ = data validation and reconciliation platform.

### Q13
**Answer: B**

**Rationale:** Performance regression = compare current time to baseline.

### Q14
**Answer: B**

**Rationale:** Hash-based comparison = compute and compare cryptographic hashes.

### Q15
**Answer: B**

**Rationale:** Monte Carlo = data observability, anomaly detection, incident management.

### Q16
**Answer: B**

**Rationale:** Spark Testing Base = unit testing Spark programs in Scala.

### Q17
**Answer: D**

**Rationale:** Manual data entry validation = not a CI/CD pipeline component.

### Q18
**Answer: B**

**Rationale:** Deequ supports completeness, uniqueness, range, containment checks.

### Q19
**Answer: B**

**Rationale:** Sampling-based = compare random sample to infer overall correctness.

### Q20
**Answer: B**

**Rationale:** Automated quality checks in CI/CD = catch regressions early.
