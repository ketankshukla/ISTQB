# 📘 Chapter 3 — Data Quality Testing: Lessons

---

## 💎 3.1 Data Quality Dimensions

### 🔷 Completeness

**Definition:** The proportion of data that is present compared to what is expected.

**Measures:**
- Percentage of non-null values in required fields
- Percentage of records with all mandatory fields populated
- Comparison of expected vs. actual record counts

**Testing approach:**
```
Test: customer_email completeness
Expected: 100% of active customers have email
Actual: 850,000 / 1,000,000 = 85%
Result: FAIL (below 95% threshold)
```

**Example test case:**
| Rule | Expected | Actual | Status |
|------|----------|--------|--------|
| product_name not null | 100% | 100% | PASS |
| price not null | 100% | 99.2% | FAIL |
| category not null | 100% | 97.5% | FAIL |

---

### 🔷 Accuracy

**Definition:** The degree to which data correctly represents the real-world entity or event it describes.

**Measures:**
- Comparison against authoritative source (e.g., verify address against postal database)
- Range checks (e.g., age between 0 and 120)
- Cross-field validation (e.g., delivery date > order date)
- Format validation (e.g., email regex, phone regex)

**Testing approach:**
```
Test: customer_age accuracy
Rule: age must be between 0 and 120
Findings: 5 records with age = 250, 3 records with age = -5
Result: FAIL (8 invalid records)
```

---

### 🔷 Consistency

**Definition:** The degree to which data values are uniform across datasets and over time.

**Types:**
- **Intra-record consistency:** Fields within a record agree (e.g., country = "USA" → state must be valid US state)
- **Inter-record consistency:** Related records agree (e.g., order total = sum of line items)
- **Temporal consistency:** Data values don't contradict historical records (e.g., birth date doesn't change)
- **Cross-system consistency:** Same entity has same values in different systems

**Testing approach:**
```
Test: order total consistency
Rule: order.total = SUM(line_item.price * line_item.quantity)
Findings: 12 orders where total ≠ sum of line items
Result: FAIL (12 discrepancies)
```

---

### 🔷 Timeliness

**Definition:** The degree to which data is available when needed and represents current reality.

**Measures:**
- Data freshness (last update time)
- Latency between event occurrence and data availability
- SLA compliance (e.g., data must be available within 1 hour)

**Testing approach:**
```
Test: inventory timeliness
Rule: inventory counts must reflect sales within 15 minutes
Findings: Average latency = 45 minutes
Result: FAIL (exceeds 15-minute SLA)
```

---

### 🔷 Validity

**Definition:** The degree to which data conforms to defined formats, types, ranges, and allowed values.

**Validation types:**
- **Format validation:** Email, phone, date formats
- **Type validation:** Numeric fields contain numbers
- **Range validation:** Values within acceptable bounds
- **Domain validation:** Values are from an allowed list (e.g., country codes)
- **Pattern validation:** Matches expected patterns (e.g., postal codes)

**Testing approach:**
```
Test: order_status validity
Rule: status must be one of ["pending", "shipped", "delivered", "cancelled"]
Findings: 3 records with status = "unknown", 1 with status = "123"
Result: FAIL (4 invalid values)
```

---

### 🔷 Uniqueness

**Definition:** The degree to which there are no unintended duplicate records.

**Measures:**
- Duplicate count on business key
- Fuzzy matching for near-duplicates (e.g., "John Smith" vs. "Jon Smith")

**Testing approach:**
```
Test: customer uniqueness
Rule: Each customer must have one unique email
Findings: 150 customers share 75 duplicate emails
Result: FAIL (75 duplicates)
```

---

## 🗃️ 3.2 Data Profiling

### 🗃️ What is Data Profiling?

Data profiling is the process of examining, analyzing, and reviewing data to understand its structure, content, and quality characteristics.

### 🎯 Profiling Techniques

**Column Profiling:**
- Data type distribution
- Min, max, average, median values
- Null percentage
- Distinct value count
- Pattern analysis (e.g., date formats, phone formats)

**Example column profile:**

| Statistic | customer_age | order_amount | email |
|-----------|-------------|--------------|-------|
| Type | Integer | Decimal | String |
| Null % | 2% | 0.1% | 5% |
| Min | -5 | 0.01 | — |
| Max | 250 | 50000 | — |
| Avg | 42.5 | 125.30 | — |
| Distinct | 95 | 5000 | 950,000 |
| Invalid patterns | 8 (< 0 or > 120) | 2 (negative) | 10,000 (no @) |

**Cross-Column Profiling:**
- Correlation between columns
- Functional dependencies
- Orphan records

**Table Profiling:**
- Row count trends over time
- Record size distribution
- Growth rate

### 🔷 Using Profiling for Testing

1. **Baseline creation:** Profile source data before testing
2. **Anomaly detection:** Compare current profile to baseline
3. **Test case generation:** Use profiling to identify edge cases
4. **Quality threshold definition:** Set realistic expectations based on actual data

---

## 🗃️ 3.3 Data Validation Rules

### 🧪 Types of Validation Rules

**Column-Level Rules:**
- NOT NULL (completeness)
- UNIQUE (uniqueness)
- CHECK (range, format, domain)
- DATA TYPE (validity)

**Row-Level Rules:**
- Cross-field consistency (e.g., start_date < end_date)
- Conditional logic (e.g., if status = "shipped" then tracking_number not null)
- Record format (e.g., all required fields present)

**Table-Level Rules:**
- Referential integrity (foreign keys)
- Aggregate consistency (e.g., SUM = total)
- Row count expectations (e.g., within 10% of previous day)

**Cross-System Rules:**
- Source-target reconciliation
- System of record validation
- Duplicate detection across systems

### 🔷 Writing Testable Validation Rules

**Good rule:**
```
Rule: customer_age must be between 0 and 120
Testable: SELECT COUNT(*) FROM customers WHERE age < 0 OR age > 120
Expected: 0
```

**Poor rule:**
```
Rule: Data should be good quality
Testable: ???
```

### 🔷 Validation Rule Testing Framework

```
For each rule:
  1. Define the rule in SQL or pseudocode
  2. Define the pass criteria (usually COUNT of violations = 0)
  3. Define the acceptable threshold (if not 100%)
  4. Execute the check against the dataset
  5. Report violations
  6. Determine PASS/FAIL
```

---

## 🗃️ 3.4 Data Cleansing

### 🎯 Cleansing Techniques

**Standardization:**
- Convert to consistent formats (e.g., dates to ISO 8601)
- Normalize text (upper/lower case, trim whitespace)
- Standardize codes (e.g., country names to ISO codes)

**Correction:**
- Fix known errors using reference data (e.g., correct city based on ZIP code)
- Apply business rules (e.g., negative quantities → 0)

**Imputation:**
- Fill missing values with defaults, averages, or predicted values
- Flag imputed records for tracking

**Deduplication:**
- Remove exact duplicates
- Merge fuzzy duplicates using matching rules
- Create master records from multiple sources

**Filtering:**
- Remove records that fail critical validation rules
- Route bad records to error tables for manual review

### 🗃️ Testing Data Cleansing

**Test the cleansing logic:**
```
Input: "  john smith  "
Cleansing: TRIM + UPPERCASE
Expected: "JOHN SMITH"
```

**Test that good data is not corrupted:**
```
Input: "Jane Doe"
Cleansing: TRIM + UPPERCASE
Expected: "JANE DOE" (not modified beyond standardization)
```

**Test bad data routing:**
```
Input: record with invalid email = "not-an-email"
Cleansing: Route to error_table
Expected: Not in main table, present in error_table with reason
```

---

## ✅ 3.5 Quality Thresholds and Acceptance Criteria

### 🔷 Setting Realistic Thresholds

Not all data can be 100% clean. Thresholds should reflect:
- Source system quality
- Business criticality
- Cost of fixing vs. cost of bad data

**Example thresholds:**

| Dimension | Critical Field | Non-Critical Field |
|-----------|--------------|-------------------|
| Completeness | 99.9% | 95% |
| Accuracy | 99.5% | 90% |
| Consistency | 99.9% | 95% |
| Validity | 99.9% | 98% |
| Uniqueness | 100% | 99% |

### 💎 Continuous Quality Monitoring

Data quality should be monitored continuously, not just tested once.

**Quality Dashboard:**
```
Date: 2024-01-15
Completeness: 97.5% (target: 95%) → PASS
Accuracy: 92.0% (target: 90%) → PASS
Consistency: 88.5% (target: 95%) → FAIL
```

**Alerting:**
- Notify when quality drops below threshold
- Escalate when critical fields have issues

---

## 💡 Worked Examples

### 💡 Worked Example 1: Data Quality Rule Testing

**Scenario:** An e-commerce order table.

**Rules and tests:**

| Rule | SQL Test | Expected | Finding | Status |
|------|----------|----------|---------|--------|
| order_id NOT NULL | `SELECT COUNT(*) FROM orders WHERE order_id IS NULL` | 0 | 0 | PASS |
| order_date in past | `SELECT COUNT(*) FROM orders WHERE order_date > CURRENT_DATE` | 0 | 3 future dates | FAIL |
| total > 0 | `SELECT COUNT(*) FROM orders WHERE total <= 0` | 0 | 12 negative/zero totals | FAIL |
| customer_id exists in customers | `SELECT COUNT(*) FROM orders o LEFT JOIN customers c ON o.customer_id = c.customer_id WHERE c.customer_id IS NULL` | 0 | 45 orphan orders | FAIL |
| total = SUM(line_items) | `SELECT order_id FROM orders o JOIN (SELECT order_id, SUM(price*qty) as calc FROM line_items GROUP BY order_id) l ON o.order_id = l.order_id WHERE ABS(o.total - l.calc) > 0.01` | Empty | 8 mismatches | FAIL |

### 💡 Worked Example 2: Data Profiling Results

**Scenario:** Profile a customer table with 1,000,000 records.

**Profile findings:**

| Column | Type | Null% | Min | Max | Distinct | Issues |
|--------|------|-------|-----|-----|----------|--------|
| customer_id | Integer | 0% | 1 | 1,500,000 | 1,000,000 | 500,000 gaps (not sequential) |
| name | String | 1% | — | — | 950,000 | 50,000 duplicates |
| email | String | 5% | — | — | 940,000 | 10,000 invalid format |
| birth_date | Date | 3% | 1900-01-01 | 2025-12-31 | 15,000 | 200 future dates |
| phone | String | 8% | — | — | 500,000 | 100,000 non-numeric |
| country | String | 2% | — | — | 195 | 50 invalid codes |

**Quality assessment:**
- **Completeness:** phone (92%) and email (95%) below 95% threshold
- **Accuracy:** 200 future birth dates, 50 invalid country codes
- **Uniqueness:** 50,000 duplicate names (may be legitimate — common names)
- **Validity:** 10,000 invalid emails, 100,000 non-numeric phones

**Recommended actions:**
1. Investigate email collection process (5% missing)
2. Add validation rules for birth_date, country, email, phone
3. Implement phone standardization (remove non-numeric characters)
4. Deduplicate investigation: are 50,000 duplicate names truly different people?

### 💡 Worked Example 3: Schema Evolution

**Scenario:** A JSON event schema evolves over time.

**Version 1:**
```json
{
  "event_id": "abc123",
  "timestamp": "2024-01-15T10:00:00Z",
  "user_id": 12345
}
```

**Version 2 (added device_type):**
```json
{
  "event_id": "def456",
  "timestamp": "2024-06-01T10:00:00Z",
  "user_id": 67890,
  "device_type": "mobile"
}
```

**Version 3 (renamed user_id → user_identifier, added optional session_id):**
```json
{
  "event_id": "ghi789",
  "timestamp": "2024-09-01T10:00:00Z",
  "user_identifier": 11111,
  "device_type": "desktop",
  "session_id": "sess001"
}
```

**Testing approach:**
1. **Backward compatibility:** Old consumers must read new events without breaking
   - Test: Consumer expects `user_id` → should handle `user_identifier` or use default
2. **Forward compatibility:** New consumers should handle old events
   - Test: New consumer expects `device_type` → should handle missing field (default to "unknown")
3. **Schema validation:** Each version validates correctly
   - Test: V1 events pass V1 schema, fail V2/V3 schema if strict
4. **Data lineage:** Track which version produced each record
   - Test: All records have version identifier or inferred from field presence
