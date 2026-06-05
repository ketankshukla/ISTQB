# Chapter 4 — Functional Testing of Big Data Applications: Exam Traps

## Trap 1: Confusing ETL and ELT

**Trap:** ETL transforms before loading (to warehouse). ELT loads raw data first then transforms in the target (data lake). Testing approaches differ.

**Example question:**
> A pipeline loads raw web logs into a data lake and applies SQL transformations when analysts query the data. This is:
>
> A. ETL
> B. ELT
> C. Batch processing only
> D. Not a valid pattern

**Correct answer:** B — Raw data loaded first, transformed on query = ELT.

---

## Trap 2: Testing Only the Happy Path

**Trap:** Testing ETL with clean data misses how the pipeline handles errors, nulls, duplicates, and edge cases.

**Example question:**
> A tester validates an ETL pipeline with 1,000 clean records and declares it ready. The PRIMARY risk is:
>
> A. The pipeline is definitely correct
> B. The pipeline may fail with real-world messy data containing nulls, duplicates, and invalid values
> C. 1,000 records is too many
> D. Clean data is not appropriate for testing

**Correct answer:** B — Real data includes noise. Test error paths and edge cases.

---

## Trap 3: Ignoring Incremental Load Complexity

**Trap:** Incremental loads are harder to test than full loads because changes (inserts, updates, deletes) must be tracked correctly.

**Example question:**
> An incremental ETL job missed 50 records that were updated in the source after the last run. The likely cause is:
>
> A. The source system is broken
> B. The change data capture mechanism (timestamp, log, trigger) did not correctly identify all changed records
> C. The target is too small
> D. Full load should always be used

**Correct answer:** B — Incremental loads depend on correct CDC. Test CDC mechanism thoroughly.

---

## Trap 4: Reconciling Without Understanding Transformations

**Trap:** Source-to-target reconciliation must account for transformations. Comparing raw source to transformed target directly will fail.

**Example question:**
> A tester compares source row count (1,000,000) to target row count (950,000) and declares a failure. However, the ETL filters out inactive customers. The tester's error is:
>
> A. The ETL is broken
> B. Reconciliation must account for filtering and transformations; the test should compare source active customers to target count
> C. Row counts must always match exactly
> D. Filtering is never allowed in ETL

**Correct answer:** B — Reconciliation must understand and account for transformations.

---

## Trap 5: Confusing SCD Types

**Trap:** SCD Type 1 overwrites, Type 2 preserves history with dates, Type 3 adds a previous value column.

**Example question:**
> A customer status changes from "active" to "inactive." The requirement is to keep both values for historical reporting. The BEST approach is:
>
> A. SCD Type 1 — overwrite the status
> B. SCD Type 2 — create a new row with effective dates, preserving the old row
> C. SCD Type 3 — add a "previous_status" column
> D. Delete the old record

**Correct answer:** B — SCD Type 2 preserves full history with effective dates. Type 3 only stores one previous value.
