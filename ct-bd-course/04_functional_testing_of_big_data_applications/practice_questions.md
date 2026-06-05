# Chapter 4 — Functional Testing of Big Data Applications: Practice Questions

---

### Q1 (BD-4.1, K2)

In ETL, transformation occurs:

A. After loading data to the target
B. Before loading data to the target
C. Only in the source system
D. Never

---

### Q2 (BD-4.1, K2)

In ELT, transformation occurs:

A. Before loading data to the target
B. After loading raw data to the target
C. Only in the source system
D. In a separate data mart

---

### Q3 (BD-4.2, K2)

Testing ETL extraction should verify:

A. Only the transformation logic
B. That all source data is captured with correct data types and no unintended filtering
C. Only the report colors
D. Only network speed

---

### Q4 (BD-4.2, K3)

A transformation rule states: "Convert all country codes to uppercase." The test should verify:

A. Only that "us" becomes "US"
B. That "us" becomes "US", "UK" stays "UK", and "Fr" becomes "FR"
C. Only the number of records processed
D. Network bandwidth during transformation

---

### Q5 (BD-4.3, K2)

Unit testing a Spark transformation function should be done:

A. Only on the production cluster with full data
B. In isolation with small, controlled test inputs before integration testing
C. Never — Spark cannot be unit tested
D. Only by administrators

---

### Q6 (BD-4.4, K2)

Report reconciliation involves:

A. Comparing report values to source system totals to verify accuracy
B. Checking report formatting only
C. Verifying the report file size
D. Testing the printer output

---

### Q7 (BD-4.5, K2)

Data lineage is used to:

A. Only measure data size
B. Trace data from its origin through transformations to its destination
C. Delete old data
D. Compress data

---

### Q8 (BD-4.6, K2)

An incremental load test should verify all EXCEPT:

A. All new records since last load are captured
B. Changed records are updated correctly
C. Deleted records are handled per requirements
D. The source database password

---

### Q9 (BD-4.6, K2)

SCD Type 2 is characterized by:

A. Overwriting old values with new values
B. Creating a new row with effective dates while preserving the historical row
C. Adding a "previous_value" column
D. Deleting old records

---

### Q10 (BD-4.2, K3)

End-to-end reconciliation of an ETL pipeline should compare:

A. Source row count to target row count only
B. Source and target after accounting for transformations (filters, aggregations, splits)
C. File sizes only
D. Network latency

---

### Q11 (BD-4.1, K2)

ELT is MOST appropriate when:

A. The target system has limited processing power
B. Raw data needs to be preserved for flexible, on-demand transformation
C. Data quality must be enforced before any loading
D. Only structured data is involved

---

### Q12 (BD-4.3, K2)

Regression testing a Spark job means:

A. Testing with more data than before
B. Verifying that changes to the job do not break existing expected outputs
C. Testing only new features
D. Deleting old test data

---

### Q13 (BD-4.4, K2)

Drill-down testing in a BI report verifies:

A. That summary values equal the sum of their detail values
B. Only the top-level totals
C. The database connection
D. User login functionality

---

### Q14 (BD-4.5, K2)

Backward data lineage traces:

A. Data from source to target
B. A report value back to its original source records
C. Only network packets
D. Only file names

---

### Q15 (BD-4.6, K3)

A full load test should verify:

A. Only new records
B. That the complete dataset is loaded correctly with no duplicates and historical data preserved as required
C. Only changed records
D. Only deleted records

---

### Q16 (BD-4.2, K2)

Testing NULL handling in a transformation means:

A. Ignoring NULL values
B. Verifying that NULL inputs produce defined outputs (defaults, error tables, or propagated NULLs) per requirements
C. Removing all NULL values
D. Converting NULL to zero always

---

### Q17 (BD-4.1, K2)

Which is a PRIMARY advantage of ETL over ELT?

A. More flexible schema
B. Data is cleansed and structured before loading, ensuring higher quality in the target
C. Lower storage costs
D. Faster query performance on raw data

---

### Q18 (BD-4.3, K2)

A Spark job unit test should use:

A. The full production dataset
B. Small, representative datasets that exercise all code paths
C. Random data only
D. No data

---

### Q19 (BD-4.4, K2)

A dashboard filter is applied but one chart does not update. This is:

A. A data quality issue
B. A report functionality defect
C. A network issue
D. Expected behavior

---

### Q20 (BD-4.5, K3)

A compliance auditor asks: "Where did this report value come from?" The tester should demonstrate:

A. The report file path
B. Data lineage from the report value back through transformations to the source system
C. The report creation date
D. The tester's name

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** ETL = Extract, Transform, Load. Transformation happens before loading.

### Q2
**Answer: B**

**Rationale:** ELT = Extract, Load, Transform. Raw data loaded first, then transformed in target.

### Q3
**Answer: B**

**Rationale:** Extraction testing = verify completeness, data types, no unintended filtering.

### Q4
**Answer: B**

**Rationale:** Test transformation with varied inputs: lowercase, uppercase, mixed case.

### Q5
**Answer: B**

**Rationale:** Unit tests run in isolation with small controlled inputs.

### Q6
**Answer: A**

**Rationale:** Report reconciliation = compare report values to source totals.

### Q7
**Answer: B**

**Rationale:** Data lineage = trace data from origin through transformations to destination.

### Q8
**Answer: D**

**Rationale:** Source password = not an incremental load test concern.

### Q9
**Answer: B**

**Rationale:** SCD Type 2 = new row with dates, preserve historical row.

### Q10
**Answer: B**

**Rationale:** Reconciliation must account for transformations, not just raw counts.

### Q11
**Answer: B**

**Rationale:** ELT = raw data preserved for flexible on-demand transformation (data lakes).

### Q12
**Answer: B**

**Rationale:** Regression testing = verify changes don't break existing outputs.

### Q13
**Answer: A**

**Rationale:** Drill-down = summary equals sum of detail values.

### Q14
**Answer: B**

**Rationale:** Backward lineage = trace report value back to original source.

### Q15
**Answer: B**

**Rationale:** Full load = complete dataset, no duplicates, preserve history as required.

### Q16
**Answer: B**

**Rationale:** NULL handling = verify defined behavior per requirements.

### Q17
**Answer: B**

**Rationale:** ETL advantage = data cleansed before loading = higher target quality.

### Q18
**Answer: B**

**Rationale:** Unit tests use small representative datasets exercising all code paths.

### Q19
**Answer: B**

**Rationale:** Chart not updating with filter = report functionality defect.

### Q20
**Answer: B**

**Rationale:** Compliance requires data lineage from report back to source.
