# ❓ Chapter 3 — Data Quality Testing: Practice Questions

---

### 🔷 Q1 (BD-3.1, K2)

A dataset has 15% missing values in the "phone_number" field. This is a problem with:

A. Accuracy
B. Completeness
C. Consistency
D. Timeliness

---

### 🔷 Q2 (BD-3.1, K2)

A customer record shows birth_date = "2050-01-01". This is a problem with:

A. Completeness
B. Accuracy
C. Consistency
D. Uniqueness

---

### 🔷 Q3 (BD-3.1, K2)

The total in an order table does not equal the sum of its line items. This is a problem with:

A. Validity
B. Consistency
C. Timeliness
D. Uniqueness

---

### 🔷 Q4 (BD-3.1, K2)

Data in a reporting system is 48 hours old when the SLA requires 1 hour freshness. This is a problem with:

A. Completeness
B. Accuracy
C. Timeliness
D. Validity

---

### 🔷 Q5 (BD-3.1, K2)

An email field contains values like "not-an-email" and "12345". This is a problem with:

A. Completeness
B. Accuracy
C. Validity
D. Consistency

---

### 🔷 Q6 (BD-3.1, K2)

Two customer records have the same email address but different names and birth dates. This is likely a problem with:

A. Completeness
B. Accuracy
C. Uniqueness
D. Timeliness

---

### 🔷 Q7 (BD-3.2, K2)

Data profiling is PRIMARILY used to:

A. Fix data quality issues automatically
B. Understand the structure, content, and quality characteristics of data
C. Replace data testing
D. Delete bad data

---

### 🔷 Q8 (BD-3.3, K2)

Which is an example of a column-level validation rule?

A. order_total = SUM(line_item.amount)
B. customer_age must be between 0 and 120
C. All orders must have at least one line item
D. Source row count = target row count

---

### 🔷 Q9 (BD-3.3, K3)

A cross-field validation rule states: "if status = 'shipped', then tracking_number must not be null." To test this:

A. Check that all records have a tracking_number
B. Check that records with status='shipped' have tracking_number, and records with other statuses are not affected
C. Only test records with null tracking_number
D. Delete all records without tracking_number

---

### 🔷 Q10 (BD-3.4, K2)

Data cleansing should be tested by verifying:

A. Only that bad data is fixed
B. That bad data is corrected AND good data is not corrupted
C. Only the number of records changed
D. The speed of the cleansing job

---

### 🔷 Q11 (BD-3.1, K2)

The degree to which data conforms to defined formats, types, and ranges is:

A. Completeness
B. Accuracy
C. Validity
D. Consistency

---

### 🔷 Q12 (BD-3.5, K2)

A data quality threshold is BEST described as:

A. The maximum amount of data that can be stored
B. An acceptable level of quality that balances business needs against the cost of perfection
C. The number of test cases required
D. A strict requirement for 100% clean data

---

### 🔷 Q13 (BD-3.2, K2)

A column profile shows email field has 10% null, 5% invalid format, and 85% valid. The FIRST step is:

A. Reject all data
B. Use profiling results to define targeted tests for completeness and validity
C. Delete all invalid records
D. Ignore the null values

---

### 🔷 Q14 (BD-3.3, K3)

A referential integrity rule states every order.customer_id must exist in customers.customer_id. The test is:

A. SELECT all orders
B. SELECT orders where customer_id NOT IN (SELECT customer_id FROM customers)
C. SELECT all customers
D. SELECT orders where customer_id IS NULL

---

### 🔷 Q15 (BD-3.4, K2)

Deduplication testing should verify:

A. All records are deleted
B. True duplicates are removed while distinct records are preserved
C. Only exact matches are considered
D. Fuzzy matching is never used

---

### 🔷 Q16 (BD-3.1, K2)

A field labeled "price" contains text values like "N/A" and "TBD". This is primarily a:

A. Completeness issue
B. Validity issue (wrong data type)
C. Timeliness issue
D. Uniqueness issue

---

### 🔷 Q17 (BD-3.5, K2)

For a critical field like customer_id, the completeness threshold should typically be:

A. 50%
B. 80%
C. 95%
D. 99.9% or 100%

---

### 🔷 Q18 (BD-3.3, K2)

An aggregate consistency rule validates:

A. Individual column formats
B. That summary values match the detail values they are derived from
C. Network connectivity
D. User interface design

---

### 🔷 Q19 (BD-3.2, K2)

Temporal consistency means:

A. Data is stored in the correct time zone
B. Data values do not contradict historical records over time
C. Data arrives on time
D. Data is always recent

---

### 🔷 Q20 (BD-3.5, K3)

A pipeline receives 1,000,000 records with 500 invalid emails (0.05%). The business accepts up to 0.1% invalid emails. The appropriate action is:

A. Reject the entire batch
B. Route invalid records to an error table, accept the batch, and report to source owners
C. Ignore the issue
D. Stop the pipeline permanently

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** 15% missing values = completeness issue (data is not present).

### 🔷 Q2
**Answer: B**

**Rationale:** Future birth date = does not represent reality = accuracy issue.

### 🔷 Q3
**Answer: B**

**Rationale:** Total ≠ sum of parts = inter-record consistency issue.

### 🔷 Q4
**Answer: C**

**Rationale:** 48 hours old vs. 1 hour SLA = timeliness issue.

### 🔷 Q5
**Answer: C**

**Rationale:** Invalid format = does not conform to defined format = validity issue.

### 🔷 Q6
**Answer: C**

**Rationale:** Same email with different details = likely unintended duplicates = uniqueness issue.

### 🔷 Q7
**Answer: B**

**Rationale:** Profiling = understanding structure, content, and quality characteristics.

### 🔷 Q8
**Answer: B**

**Rationale:** Column-level rule = applies to a single column (age range). A is row-level, C is table-level, D is cross-system.

### 🔷 Q9
**Answer: B**

**Rationale:** Cross-field rule = test the conditional relationship AND ensure non-matching records are unaffected.

### 🔷 Q10
**Answer: B**

**Rationale:** Cleansing tests must verify both bad data correction AND good data preservation.

### 🔷 Q11
**Answer: C**

**Rationale:** Conformance to formats, types, ranges = validity.

### 🔷 Q12
**Answer: B**

**Rationale:** Threshold = acceptable quality level balancing business needs vs. perfection cost.

### 🔷 Q13
**Answer: B**

**Rationale:** Profiling informs testing. Use results to define targeted completeness and validity tests.

### 🔷 Q14
**Answer: B**

**Rationale:** Referential integrity = find orders where customer_id doesn't exist in customers table.

### 🔷 Q15
**Answer: B**

**Rationale:** Deduplication = remove true duplicates, preserve distinct records.

### 🔷 Q16
**Answer: B**

**Rationale:** Text in numeric field = wrong data type = validity issue.

### 🔷 Q17
**Answer: D**

**Rationale:** Critical fields like customer_id should have near-100% completeness.

### 🔷 Q18
**Answer: B**

**Rationale:** Aggregate consistency = summary matches detail (e.g., total = sum of line items).

### 🔷 Q19
**Answer: B**

**Rationale:** Temporal consistency = data doesn't contradict historical records over time.

### 🔷 Q20
**Answer: B**

**Rationale:** 0.05% < 0.1% threshold = accept batch, route errors, report to source.
