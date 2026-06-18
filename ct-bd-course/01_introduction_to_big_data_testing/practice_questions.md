# ❓ Chapter 1 — Introduction to Big Data Testing: Practice Questions

---

### 🔷 Q1 (BD-1.1, K1)

Which of the following is one of the 5 Vs of Big Data?

A. Verification
B. Velocity
C. Virtualization
D. Visualization

---

### 🔷 Q2 (BD-1.1, K2)

A retail company processes 50TB of transaction data daily, with data arriving from web, mobile, and in-store POS systems in structured, JSON, and log formats. This BEST demonstrates:

A. Volume and Variety only
B. Volume, Velocity, and Variety
C. Volume and Velocity only
D. Only Volume

---

### 🔷 Q3 (BD-1.2, K2)

JSON log files from web servers are an example of:

A. Structured data
B. Semi-structured data
C. Unstructured data
D. Relational data

---

### 🔷 Q4 (BD-1.2, K2)

Social media posts in free-form text are an example of:

A. Structured data
B. Semi-structured data
C. Unstructured data
D. Tabular data

---

### 🔷 Q5 (BD-1.3, K2)

A data lake applies schema:

A. Before writing data
B. When reading data
C. Never
D. Only for structured data

---

### 🔷 Q6 (BD-1.3, K2)

A data warehouse applies schema:

A. Before writing data
B. When reading data
C. During backup
D. Only for unstructured data

---

### 🔷 Q7 (BD-1.4, K2)

Which is a PRIMARY difference between traditional testing and Big Data testing?

A. Big Data testing uses fewer test cases
B. Big Data testing often requires sampling and aggregation-based validation rather than row-by-row comparison
C. Big Data testing is only manual
D. Traditional testing does not use databases

---

### 🔷 Q8 (BD-1.4, K2)

In Big Data testing, validating that "all source transactions arrived in the target system" is an example of:

A. Transformation testing
B. Ingestion completeness testing
C. Performance testing
D. Security testing

---

### 🔷 Q9 (BD-1.5, K2)

A Big Data pipeline receives 2% of records with invalid timestamps. The MOST appropriate test approach is:

A. Reject the entire dataset
B. Test that the pipeline handles invalid timestamps according to defined rules (e.g., default values, error tables)
C. Ignore the issue completely
D. Stop all data ingestion

---

### 🔷 Q10 (BD-1.5, K2)

Schema-on-read introduces a testing challenge because:

A. The schema is too rigid
B. Different consumers may interpret the same raw data differently, requiring validation of each consumer's schema assumptions
C. No data can be stored
D. It only works for structured data

---

### 🔷 Q11 (BD-1.1, K1)

The "V" in the 5 Vs that refers to data quality, accuracy, and trustworthiness is:

A. Volume
B. Velocity
C. Veracity
D. Value

---

### 🔷 Q12 (BD-1.2, K2)

A relational database table with fixed columns and data types contains:

A. Unstructured data
B. Semi-structured data
C. Structured data
D. Binary data

---

### 🔷 Q13 (BD-1.3, K2)

Which is a PRIMARY characteristic of a data warehouse?

A. Stores raw data in native format
B. Schema is defined after data is loaded
C. Stores processed, structured data optimized for reporting
D. Used only by data scientists

---

### 🔷 Q14 (BD-1.4, K2)

Testing a MapReduce job that runs across 50 nodes requires special attention to:

A. GUI color schemes
B. Distributed correctness — ensuring partial results from nodes combine into an accurate aggregate
C. Browser compatibility
D. Mobile responsiveness

---

### 🔷 Q15 (BD-1.5, K2)

Shift-left testing in a Big Data context means:

A. Moving servers to the left side of the data center
B. Testing data ingestion, transformation, and storage at each stage as it is built, rather than only at the end
C. Only testing at the end of the project
D. Testing only the user interface

---

### 🔷 Q16 (BD-1.1, K2)

The "Value" V in Big Data refers to:

A. The monetary cost of storing data
B. The usefulness and insights derived from data
C. The speed of data processing
D. The volume of data stored

---

### 🔷 Q17 (BD-1.2, K2)

Video files stored for content analysis are:

A. Structured data
B. Semi-structured data
C. Unstructured data
D. Metadata

---

### 🔷 Q18 (BD-1.3, K2)

A data scientist needs to explore raw clickstream data to build a new machine learning model. The BEST storage solution is:

A. Data warehouse
B. Data lake
C. Relational database only
D. Spreadsheet

---

### 🔷 Q19 (BD-1.4, K2)

Validating that `SUM(sales_amount)` in the source equals `SUM(sales_amount)` in the target is:

A. Row-by-row comparison
B. Aggregation-based reconciliation
C. GUI testing
D. Unit testing

---

### 🔷 Q20 (BD-1.5, K2)

Which is a challenge specific to Big Data testing?

A. Testing on a single machine
B. Generating realistic test data at terabyte scale
C. Writing test cases
D. Using JUnit

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** The 5 Vs are Volume, Velocity, Variety, Veracity, and Value. Velocity is one of them.

### 🔷 Q2
**Answer: B**

**Rationale:** 50TB daily = Volume; arriving continuously from multiple sources = Velocity; multiple formats (structured, JSON, logs) = Variety.

### 🔷 Q3
**Answer: B**

**Rationale:** JSON has structure (key-value pairs) but is flexible = semi-structured.

### 🔷 Q4
**Answer: C**

**Rationale:** Free-form text has no predefined structure = unstructured.

### 🔷 Q5
**Answer: B**

**Rationale:** Data lake = schema-on-read (applied when data is accessed).

### 🔷 Q6
**Answer: A**

**Rationale:** Data warehouse = schema-on-write (structure defined before loading).

### 🔷 Q7
**Answer: B**

**Rationale:** Big Data scale makes row-by-row comparison impractical. Sampling and aggregation are used.

### 🔷 Q8
**Answer: B**

**Rationale:** "All source arrived in target" = ingestion completeness testing.

### 🔷 Q9
**Answer: B**

**Rationale:** Big Data systems must handle imperfect data gracefully. Test the error handling rules.

### 🔷 Q10
**Answer: B**

**Rationale:** Schema-on-read = different consumers may interpret data differently. Each schema assumption must be validated.

### 🔷 Q11
**Answer: C**

**Rationale:** Veracity = quality, accuracy, and trustworthiness of data.

### 🔷 Q12
**Answer: C**

**Rationale:** Relational table with fixed schema = structured data.

### 🔷 Q13
**Answer: C**

**Rationale:** Data warehouse = processed, structured data for reporting.

### 🔷 Q14
**Answer: B**

**Rationale:** Distributed processing requires validating that partial results combine correctly.

### 🔷 Q15
**Answer: B**

**Rationale:** Shift-left = test early and often at each stage.

### 🔷 Q16
**Answer: B**

**Rationale:** Value = usefulness and insights derived from data.

### 🔷 Q17
**Answer: C**

**Rationale:** Video files have no predefined structure = unstructured.

### 🔷 Q18
**Answer: B**

**Rationale:** Raw data exploration for ML = data lake (schema-on-read, flexible).

### 🔷 Q19
**Answer: B**

**Rationale:** SUM comparison = aggregation-based reconciliation (not row-by-row).

### 🔷 Q20
**Answer: B**

**Rationale:** TB-scale test data generation is a Big Data-specific challenge.
