# 🪤 Chapter 6 — Big Data Testing Tools and Automation: Exam Traps

## 🪤 Trap 1: Confusing Testing Tools with Processing Tools

**Trap:** Hive, Pig, and Spark are processing/query tools, not testing frameworks. Deequ, Great Expectations, and QuerySurge are testing/validation tools.

**Example question:**
> A team uses Hive to validate data quality by running SQL queries manually. The PRIMARY issue is:
>
> A. Hive is not a testing tool; it is a data warehouse query tool. Validation should use dedicated frameworks (Deequ, Great Expectations) with automated checks, thresholds, and reporting
> B. Hive cannot run SQL
> C. Manual validation is always better
> D. Hive is too fast for testing

**Correct answer:** A — Hive is for querying, not systematic data quality validation. Dedicated frameworks provide automation, thresholds, and structured reporting.

---

## 🪤 Trap 2: Thinking Unit Testing Is Impossible for Big Data

**Trap:** Big Data jobs can and should be unit tested with small datasets in local mode before running on large clusters.

**Example question:**
> A developer says Spark jobs cannot be unit tested because they require large clusters. This is:
>
> A. Correct — Big Data jobs must be tested on production clusters only
> B. Incorrect — Spark can run in local mode with small test datasets for unit testing
> C. Only true for Hadoop
> D. Required by Spark design

**Correct answer:** B — Spark supports local mode (`local[2]`) for unit testing with controlled small datasets.

---

## 🪤 Trap 3: Confusing Data Quality Checks with Data Testing

**Trap:** Automated quality checks (Deequ, Great Expectations) complement but don't replace functional and integration testing.

**Example question:**
> A team implements Great Expectations and concludes all testing is now automated. The weakness is:
>
> A. They are correct — automated checks cover everything
> B. Quality checks validate data characteristics but do not replace functional testing of transformations, ETL logic correctness, or end-to-end integration testing
> C. Great Expectations is not a real tool
> D. Automated checks are only for production

**Correct answer:** B — Quality frameworks validate constraints but don't test transformation logic or integration.

---

## 🪤 Trap 4: Ignoring Schema Compatibility in CI/CD

**Trap:** Schema changes can break downstream consumers. CI/CD must validate schema compatibility.

**Example question:**
> A team deploys a pipeline change that renames `user_id` to `customer_id`. All tests pass but downstream dashboards break. The missing CI/CD step is:
>
> A. More unit tests
> B. Schema compatibility validation against downstream consumers
> C. Faster deployment
> D. More data volume

**Correct answer:** B — Schema changes require compatibility checks to ensure downstream systems aren't broken.

---

## 🪤 Trap 5: Comparing Production Data Without Sampling

**Trap:** Row-by-row comparison of petabyte-scale datasets is impractical. Sampling or aggregation-based comparison is needed.

**Example question:**
> A tester plans to compare every record between a 10TB source and a 10TB target. The PRIMARY problem is:
>
> A. No problem — this is the best approach
> B. At this scale, full comparison is impractical; sampling, hashing, or aggregation-based comparison should be used
> C. The data is too small
> D. The tool is too fast

**Correct answer:** B — PB-scale row-by-row comparison is impractical. Use sampling, aggregation, or hashing.
