# 🪤 Chapter 1 — Introduction to Big Data Testing: Exam Traps

## 🪤 Trap 1: Thinking Big Data Is Only About Volume

**Trap:** Big Data is defined by all 5 Vs, not just Volume. Exam questions may test understanding that Velocity, Variety, Veracity, and Value are equally important.

**Example question:**
> A company has 500GB of customer data in a relational database. A manager claims they have a Big Data problem because of the volume. The BEST response is:
>
> A. They are correct — 500GB is Big Data
> B. Volume alone does not define Big Data; the other 4 Vs must also be considered
> C. 500GB is too small to be Big Data
> D. Only unstructured data qualifies as Big Data

**Correct answer:** B — Big Data is characterized by the 5 Vs together. 500GB in a relational database with simple queries is typically not a Big Data scenario.

---

## 🪤 Trap 2: Confusing Schema-on-Read and Schema-on-Write

**Trap:** Schema-on-read (data lakes) applies structure when data is read, not when written. Schema-on-write (data warehouses) enforces structure before loading.

**Example question:**
> A data lake stores log files in their raw JSON format. Analysts use SQL to query the data by defining a schema at query time. This is:
>
> A. Schema-on-write
> B. Schema-on-read
> C. Schema-on-ingest
> D. No schema is used

**Correct answer:** B — Schema is applied when reading (query time), not when writing (ingestion time).

---

## 🪤 Trap 3: Assuming Traditional Testing Techniques Scale to Big Data

**Trap:** Row-by-row validation that works for traditional databases is impractical for petabyte-scale datasets.

**Example question:**
> A tester plans to validate a Big Data ETL pipeline by comparing every source row to every target row. The PRIMARY problem is:
>
> A. This is the best approach for all data sizes
> B. At Big Data scale, full row-by-row comparison is impractical; sampling, aggregation checks, and reconciliation are needed
> C. It will be too fast
> D. The tool does not support it

**Correct answer:** B — Traditional row-by-row validation doesn't scale. Alternative approaches are required.

---

## 🪤 Trap 4: Confusing Data Lake and Data Warehouse

**Trap:** Data lakes store raw, unprocessed data. Data warehouses store processed, structured data optimized for reporting.

**Example question:**
> A business team needs fast SQL reporting on cleansed, historical sales data. The BEST storage solution is:
>
> A. Data lake — raw data is best for reporting
> B. Data warehouse — structured, processed data optimized for BI queries
> C. Either; there is no difference
> D. A NoSQL document store

**Correct answer:** B — Data warehouses are optimized for structured reporting. Data lakes are for raw data exploration.

---

## 🪤 Trap 5: Ignoring Data Quality in Big Data

**Trap:** Big Data often has lower inherent quality than traditional data. Testing must account for noise, incompleteness, and inconsistency.

**Example question:**
> A Big Data pipeline receives 5% invalid records from a sensor feed. The tester concludes the source system is broken and rejects the entire dataset. This is:
>
> A. Correct — all data must be 100% valid
> B. Incorrect — Big Data often includes noise; the pipeline should handle invalid records gracefully and the test should verify error handling and thresholds
> C. Required by data governance
> D. The only way to ensure quality

**Correct answer:** B — Big Data systems must handle imperfect data. Testing should validate that the system handles noise appropriately.
