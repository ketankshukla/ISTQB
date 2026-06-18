# 🪤 Chapter 3 — Data Quality Testing: Exam Traps

## 🪤 Trap 1: Confusing Data Quality Dimensions

**Trap:** Completeness, accuracy, consistency, timeliness, validity, and uniqueness have distinct meanings. Exams test whether you can match the right dimension to a scenario.

**Example question:**
> A customer record shows age = 250. This is a problem with:
>
> A. Completeness
> B. Accuracy
> C. Consistency
> D. Timeliness

**Correct answer:** B — Age = 250 does not correctly represent reality = accuracy issue. Completeness would be a missing age.

---

## 🪤 Trap 2: Expecting 100% Data Quality Always

**Trap:** Big Data often accepts less than perfect quality. The key is defining acceptable thresholds and handling bad data gracefully.

**Example question:**
> A data pipeline receives 2% records with invalid phone numbers. The tester's first action should be:
>
> A. Reject all data until the source system is fixed
> B. Define whether 2% is within the acceptable threshold, test that invalid records are routed correctly, and report to source system owners
> C. Ignore the issue
> D. Manually correct all phone numbers

**Correct answer:** B — Big Data systems define quality thresholds. Test error handling and report upstream issues.

---

## 🪤 Trap 3: Confusing Data Profiling with Data Testing

**Trap:** Profiling discovers data characteristics; testing validates against rules. They are complementary but different activities.

**Example question:**
> A team profiles a dataset and finds 5% null values in the email field. They conclude testing is complete. This is:
>
> A. Correct — profiling is sufficient
> B. Incorrect — profiling identifies issues but testing must validate against defined rules, thresholds, and business requirements
> C. Only true for Big Data
> D. Required by ISTQB

**Correct answer:** B — Profiling is analysis; testing is validation against criteria. Both are needed.

---

## 🪤 Trap 4: Testing Cleansing Without Testing Good Data Preservation

**Trap:** Cleansing tests must verify that bad data is fixed AND that good data is not corrupted.

**Example question:**
> A cleansing job standardizes phone numbers by removing all non-numeric characters. Testing shows "(555) 123-4567" becomes "5551234567". What else should be tested?
>
> A. Nothing — the test is complete
> B. That a valid numeric-only phone like "5559876543" is not corrupted (remains "5559876543")
> C. The database backup
> D. Network latency

**Correct answer:** B — Cleansing must not corrupt already-valid data. Both transformations and preservation must be tested.

---

## 🪤 Trap 5: Ignoring Cross-System Consistency

**Trap:** Data may be valid in one system but inconsistent with another. Testing must validate across system boundaries.

**Example question:**
> A customer is marked "inactive" in the CRM but has placed an order yesterday in the e-commerce system. This is:
>
> A. A CRM bug only
> B. An e-commerce bug only
> C. A consistency issue between systems requiring cross-system data validation
> D. Not a testing concern

**Correct answer:** C — Inconsistent data across systems is a data quality/consistency issue that cross-system testing should detect.
