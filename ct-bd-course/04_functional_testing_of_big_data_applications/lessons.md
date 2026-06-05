# Chapter 4 — Functional Testing of Big Data Applications: Lessons

---

## 4.1 ETL and ELT Testing

### ETL (Extract, Transform, Load)

**Process:**
1. **Extract:** Read data from source systems
2. **Transform:** Apply business rules, cleansing, aggregations
3. **Load:** Write transformed data to target system

**When used:** Data warehouses, systems requiring high data quality before loading.

**Testing focus:**
- Extraction completeness (all source data captured)
- Transformation correctness (rules applied accurately)
- Load accuracy (target matches transformed data)

### ELT (Extract, Load, Transform)

**Process:**
1. **Extract:** Read data from source systems
2. **Load:** Write raw data directly to target system (data lake)
3. **Transform:** Apply transformations in the target system (on demand)

**When used:** Data lakes, systems with flexible schema requirements, large-scale analytics.

**Testing focus:**
- Extraction and load completeness
- Transformation correctness in target environment
- Performance of on-demand transformations
- Schema flexibility handling

### ETL vs. ELT Comparison

| Aspect | ETL | ELT |
|--------|-----|-----|
| Transform location | External processing server | Target system (data lake/warehouse) |
| Data loaded | Clean, structured | Raw, unprocessed |
| Schema flexibility | Low (fixed target schema) | High (schema-on-read) |
| Use case | Data warehouse, BI reporting | Data lake, ML, exploration |
| Hardware | Powerful ETL server needed | Scalable target storage/processing |
| Complexity | Complex transformation logic | Simpler pipeline, complex queries |

---

## 4.2 Testing ETL Pipelines

### Stage 1: Extraction Testing

**Tests:**
- Row count: Source count = Extracted count
- Data type preservation
- NULL handling
- Incremental extraction: only new/changed records
- Error handling: connection failures, timeouts

**Example:**
```
Source table: customers (1,000,000 rows)
Extracted file: customers_extract.csv
Test: wc -l customers_extract.csv = 1,000,001 (including header)
Result: PASS
```

### Stage 2: Transformation Testing

**Tests:**
- Each transformation rule produces correct output
- Business logic matches requirements
- Aggregations are mathematically correct
- Filtering includes/excludes correct records
- Sorting and ordering are correct
- NULL and default value handling

**Transformation rule test matrix:**

| Rule | Input | Expected Output | Test Result |
|------|-------|-----------------|-------------|
| Concatenate first_name + " " + last_name | "John", "Smith" | "John Smith" | PASS |
| Calculate age from birth_date | "1990-06-15", today = "2024-06-15" | 34 | PASS |
| Map country_code to country_name | "US" | "United States" | PASS |
| Filter: age >= 18 | 17, 18, 25 | 18, 25 only | PASS |
| Aggregate: SUM(sales) by region | [(North, 100), (North, 200), (South, 150)] | [(North, 300), (South, 150)] | PASS |
| Default: missing category → "Unknown" | null | "Unknown" | PASS |

### Stage 3: Load Testing

**Tests:**
- Target row count matches transformed row count
- Data types correct in target
- Constraints enforced (primary keys, NOT NULL)
- Referential integrity maintained
- Partitioning correct
- Indexing effective

### End-to-End Reconciliation

**The golden rule:** Source totals must equal target totals (after transformations).

**Reconciliation methods:**
- Row counts
- SUM of numeric columns
- COUNT DISTINCT of key columns
- Checksums or hashes
- Sample-based row-by-row comparison

**Example reconciliation report:**

| Check | Source | Target | Variance | Status |
|-------|--------|--------|----------|--------|
| Row count | 1,000,000 | 999,995 | -0.0005% | PASS |
| SUM(sales) | $50,000,000 | $50,000,000 | 0% | PASS |
| COUNT DISTINCT(customer_id) | 500,000 | 499,999 | -1 | INVESTIGATE |
| MAX(transaction_date) | 2024-06-15 | 2024-06-15 | 0 | PASS |

---

## 4.3 Testing Spark/MapReduce Jobs

### Unit Testing Transformations

Test individual functions in isolation before running on the cluster.

**Example Spark transformation test:**
```python
def calculate_revenue(quantity, price, discount):
    return quantity * price * (1 - discount)

# Unit tests
assert calculate_revenue(10, 100, 0.1) == 900
assert calculate_revenue(0, 100, 0.1) == 0
assert calculate_revenue(10, 100, 0) == 1000
```

### Integration Testing Jobs

Test the full job with sample data on a small cluster or local mode.

**Test data strategy:**
- Minimal dataset covering all scenarios
- Edge cases (empty input, single record, maximum values)
- Error cases (bad data, schema mismatches)

**Example:**
```
Test input: 1,000 rows with known expected output
Run job locally
Compare actual output to expected output
All rows match: PASS
```

### Regression Testing

When a job is modified, ensure existing behavior is preserved.

**Approach:**
1. Save expected output from previous version
2. Run new version with same input
3. Compare outputs
4. Investigate any differences

---

## 4.4 Testing Reports and Dashboards

### Report Validation Types

**Structured report testing:**
- Row/column counts match expected
- Totals and subtotals calculate correctly
- Sorting and grouping correct
- Filters apply correctly
- Date ranges include correct data

**Visual/dashboard testing:**
- Chart values match underlying data
- Drill-down shows correct detail
- Filters update all visualizations
- Export function produces correct files

### Report Reconciliation

**Approach:** Compare report values to source data.

**Example:**
```
Report: Monthly Sales by Region
Report shows: North = $1,250,000
Source query: SELECT SUM(sales) FROM transactions WHERE region='North' AND month='2024-06'
Source result: $1,250,000
Reconciliation: PASS (0% variance)
```

### Testing OLAP Cubes

**OLAP operations to test:**
- **Roll-up:** Aggregate from detail to summary (e.g., day → month → year)
- **Drill-down:** Navigate from summary to detail
- **Slice:** Filter on one dimension (e.g., region = "North")
- **Dice:** Filter on multiple dimensions (e.g., region = "North" AND product = "Electronics")
- **Pivot:** Rotate dimensions (rows become columns)

**Example test:**
```
Drill-down test:
- Year 2024 total = $15,000,000
- Sum of all 12 monthly totals = $15,000,000
- Drill-down consistency: PASS
```

---

## 4.5 Data Lineage Testing

### What is Data Lineage?

Data lineage is the ability to trace data from its origin through all transformations to its final destination.

**Why test lineage:**
- Verify transformations match documented rules
- Impact analysis (what happens if source changes?)
- Debugging (where did this value come from?)
- Compliance (GDPR, audit requirements)

### Lineage Testing Approaches

**Forward lineage:** Follow data from source to target.
```
Source: customer_id = 12345, name = "Alice"
→ Extract: customer_id = 12345, name = "Alice"
→ Transform: customer_id = 12345, full_name = "ALICE", segment = "premium"
→ Load: customer_id = 12345, full_name = "ALICE", segment = "premium"
→ Report: "Alice" appears in premium segment report
```

**Backward lineage:** Trace a report value to its source.
```
Report: Monthly sales = $1,000,000
→ Warehouse: SUM(monthly_sales) = $1,000,000
→ Lake: SUM(daily_sales) for month = $1,000,000
→ Source: 1,000 transactions totaling $1,000,000
```

### Testing Lineage Tools

**Manual lineage testing:**
- Review transformation code
- Map source fields to target fields
- Verify with sample records

**Automated lineage tools:**
- Apache Atlas
- Informatica Lineage
- Collibra
- Alation

**Test approach:**
1. Select sample records
2. Trace forward through all transformations
3. Verify each step matches documented rules
4. Trace backward from report values to source
5. Confirm all transformations are accounted for

---

## 4.6 Incremental vs. Full Load Testing

### Full Load

**Definition:** All data from source is loaded to target, typically replacing existing data.

**Testing:**
- Total row counts match
- Historical data preserved (if required)
- No duplicate records
- Load time within SLA

### Incremental Load

**Definition:** Only new or changed records since the last load are processed.

**Testing:**
- Change data capture (CDC) captures all changes
- No records missed
- No duplicate records loaded
- Delete handling (soft vs. hard deletes)
- Update handling (SCD Type 1, 2, 3)

**Slowly Changing Dimensions (SCD):**

| Type | Behavior | Test |
|------|----------|------|
| SCD Type 1 | Overwrite old value | Verify old value is replaced |
| SCD Type 2 | Create new row with history | Verify both old and new rows exist with dates |
| SCD Type 3 | Add previous value column | Verify previous column populated |

**Example SCD Type 2 test:**
```
Day 1: customer_id=123, status="active", effective_date=2024-01-01, end_date=null
Day 2: customer_id=123, status="inactive", effective_date=2024-02-01, end_date=null
        customer_id=123, status="active", effective_date=2024-01-01, end_date=2024-01-31

Test: Two rows exist, dates are contiguous, only one row has end_date=null
```

---

## Worked Examples

### Worked Example 1: ETL Pipeline Test Design

**Scenario:** A pipeline loads daily sales data from POS to data warehouse.

**Pipeline:**
```
POS MySQL → Sqoop → HDFS → Spark → Parquet → Hive → BI Report
```

**Test cases:**

| Stage | Test | Method | Expected |
|-------|------|--------|----------|
| Extract | Row count | `SELECT COUNT(*) FROM pos.sales WHERE date='2024-06-15'` = HDFS file rows | Match |
| Transform | Revenue calc | Sample 100 rows, verify `quantity * unit_price - discount = revenue` | All pass |
| Transform | Date standardization | All dates in `yyyy-MM-dd` format | 100% |
| Load | Partition correctness | Files in `/sales/year=2024/month=06/day=15/` | Yes |
| Load | Schema compliance | All columns present with correct types | Yes |
| Report | Daily total | Report total = Hive `SUM(revenue) WHERE date='2024-06-15'` | Match |

### Worked Example 2: Transformation Rule Validation

**Scenario:** A customer dimension table is built from multiple sources.

**Transformation rules:**

| Rule | Input | Output | Test |
|------|-------|--------|------|
| Full name | first_name="john", last_name="smith" | full_name="John Smith" | Case conversion + concatenation |
| Age segment | age=25 | segment="18-34" | Range mapping |
| Age segment | age=45 | segment="35-54" | Range mapping |
| Age segment | age=null | segment="Unknown" | NULL handling |
| VIP flag | lifetime_value > 10000 AND orders > 50 | vip=true | Multi-field logic |
| Country | country_code="US" | country="United States" | Lookup table |
| Country | country_code="ZZ" | country="Unknown" | Invalid code handling |

### Worked Example 3: Report Drill-Down Test

**Scenario:** Test a sales dashboard.

**Test steps:**
1. **Overview:** Dashboard shows Q2 2024 total sales = $12,500,000
2. **Drill-down to months:** April=$4M, May=$4.5M, June=$4M. Sum=$12.5M ✓
3. **Drill-down April to weeks:** Week 1=$1M, Week 2=$1M, Week 3=$1M, Week 4=$1M. Sum=$4M ✓
4. **Drill-down Week 1 to days:** Day 1-7 sum to $1M ✓
5. **Slice by region:** North + South + East + West = $12.5M ✓
6. **Filter by product:** Electronics + Clothing + Food = $12.5M ✓

**Result:** All drill-down levels reconcile to parent level. PASS.
