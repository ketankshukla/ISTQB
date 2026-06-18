# 📂 Case Study 1 — E-Commerce Data Pipeline Testing

## ⭐ Context

You are the Lead Data Quality Engineer for ShopStream, an e-commerce platform with 5 million daily transactions. The company is migrating from a traditional data warehouse to a modern Big Data platform.

**Current Architecture:**
- Source: MySQL (transactions, customers, products)
- Current target: Oracle data warehouse
- Issues: Scaling limits, expensive licensing, 6-hour nightly ETL window

**New Architecture:**
- Source: MySQL (unchanged)
- Ingestion: Sqoop → HDFS
- Processing: Spark → Parquet
- Storage: Hive data lake + data warehouse layer
- Consumption: Tableau dashboards

---

## ♟️ Task 1: Test Strategy Design

**Question:** Design a comprehensive test strategy for the new data pipeline.

**Model Answer:**

**Test Objectives:**
1. Validate data completeness — no transactions lost in migration
2. Verify transformation correctness — business logic preserved
3. Ensure data quality — meet or exceed current warehouse standards
4. Validate performance — ETL completes within 4-hour window
5. Confirm report accuracy — dashboards match current values

**Test Types and Approach:**

| Stage | Test Type | Focus | Tool/Method |
|-------|-----------|-------|-------------|
| Ingestion | Completeness | Row counts, data types, NULL handling | Sqoop validation + row count checks |
| Ingestion | Incremental | CDC correctness for daily deltas | Timestamp-based extraction tests |
| Transformation | Functional | Business rules, aggregations, calculations | Spark unit tests + sample validation |
| Transformation | Data quality | Completeness, accuracy, validity, consistency | Great Expectations + custom SQL |
| Storage | Schema | Partitioning, file formats, compression | Hive DDL validation + file checks |
| Consumption | Reconciliation | Report totals match source | Manual + automated comparison |
| End-to-end | Regression | New system matches old system | Parallel run comparison |

**Test Data Strategy:**
- **Full reconciliation for 30 days:** Compare old and new systems side-by-side
- **Sample deep-dive:** 10,000 random transactions compared row-by-row
- **Edge cases:** Returns, cancellations, partial refunds, gift cards
- **Volume test:** Black Friday data (3x normal volume)

---

## 🎨 Task 2: Data Quality Rule Design

**Question:** Define data quality rules for the transactions table.

**Model Answer:**

| Dimension | Rule | Threshold | Test Method |
|-----------|------|-----------|-------------|
| Completeness | transaction_id NOT NULL | 100% | `COUNT(*) WHERE transaction_id IS NULL = 0` |
| Completeness | customer_id NOT NULL | 99.9% | Allow guest checkouts with NULL (expected) |
| Completeness | product_id NOT NULL | 100% | All transactions must have a product |
| Accuracy | amount > 0 for purchases | 100% | `amount > 0` for all non-refund records |
| Accuracy | amount < 0 for refunds | 100% | Refund records must have negative amount |
| Validity | transaction_type IN ('purchase', 'refund', 'exchange') | 100% | Domain check |
| Validity | currency IN ('USD', 'EUR', 'GBP') | 100% | Domain check |
| Consistency | SUM(line_items.amount) = transaction.amount | 100% | Cross-table reconciliation |
| Consistency | transaction_date <= CURRENT_DATE | 100% | No future dates |
| Uniqueness | transaction_id UNIQUE | 100% | No duplicate transactions |
| Timeliness | Yesterday's transactions available by 6 AM | 100% | SLA check |

**Test implementation (Great Expectations):**
```python
validator.expect_column_values_to_not_be_null("transaction_id")
validator.expect_column_values_to_not_be_null("customer_id", mostly=0.999)
validator.expect_column_values_to_be_between("amount", min_value=-10000, max_value=10000)
validator.expect_column_values_to_be_in_set("transaction_type", ["purchase", "refund", "exchange"])
validator.expect_column_pair_values_to_be_equal("amount", "calculated_amount")
validator.expect_column_values_to_be_unique("transaction_id")
```

---

## ⭐ Task 3: ETL Transformation Testing

**Question:** The following transformation rules are applied. Design test cases.

**Transformation rules:**
1. `total_amount = SUM(line_item.price * line_item.quantity) - discount`
2. `customer_segment = CASE WHEN lifetime_value > 10000 THEN 'VIP' WHEN > 1000 THEN 'Regular' ELSE 'New' END`
3. `shipping_status = IF shipped_date IS NOT NULL THEN 'Shipped' ELSE 'Pending'`
4. `country_name = LOOKUP(country_code, countries_table)`
5. Filter: Exclude test transactions (`is_test = 1`)

**Model Answer:**

| Rule | Test Case | Input | Expected | Validation |
|------|-----------|-------|----------|------------|
| 1 — Total amount | Standard order | 2 items @ $50, qty 1 each, $10 discount | $90 | 50*1 + 50*1 - 10 = 90 |
| 1 — Total amount | Single item | 1 item @ $100, no discount | $100 | 100 - 0 = 100 |
| 1 — Total amount | Full discount | 1 item @ $50, $50 discount | $0 | 50 - 50 = 0 |
| 1 — Total amount | NULL line items | NULL price | Error / default | Error handling |
| 2 — Customer segment | VIP customer | lifetime_value = 15000 | "VIP" | > 10000 |
| 2 — Customer segment | Regular customer | lifetime_value = 5000 | "Regular" | 1000 < x <= 10000 |
| 2 — Customer segment | New customer | lifetime_value = 500 | "New" | <= 1000 |
| 2 — Customer segment | NULL lifetime_value | NULL | "New" (default) | NULL handling |
| 3 — Shipping status | Shipped | shipped_date = "2024-06-15" | "Shipped" | date present |
| 3 — Shipping status | Pending | shipped_date = NULL | "Pending" | NULL handling |
| 4 — Country name | Valid code | country_code = "US" | "United States" | Lookup match |
| 4 — Country name | Invalid code | country_code = "XX" | "Unknown" (default) | Invalid handling |
| 5 — Filter | Test transaction | is_test = 1 | Excluded | Filter logic |
| 5 — Filter | Real transaction | is_test = 0 | Included | Filter logic |

---

## ⚡ Task 4: Performance and Parallel Run

**Question:** The new pipeline runs in parallel with the old system for 30 days. How do you validate correctness?

**Model Answer:**

**Parallel Run Approach:**

1. **Daily Reconciliation:**
   | Check | Old System | New System | Tolerance | Status |
   |-------|-----------|-----------|-----------|--------|
   | Transaction count | 1,000,000 | 1,000,000 | 0% | PASS |
   | Total sales | $5,000,000 | $5,000,000 | 0% | PASS |
   | Unique customers | 450,000 | 450,000 | 0% | PASS |
   | Avg order value | $50.00 | $50.00 | 1% | PASS |

2. **Sample Row-by-Row:**
   - Randomly select 1,000 transactions daily
   - Compare all fields between old and new systems
   - Target: 100% match

3. **Edge Case Tracking:**
   - Track all refunds, cancellations, exchanges
   - Verify handling matches old system

4. **Performance Comparison:**
   | Metric | Old System | New System | Target |
   |--------|-----------|-----------|--------|
   | ETL duration | 6 hours | 3.5 hours | < 4 hours |
   | Dashboard load | 15 seconds | 5 seconds | < 10 seconds |
   | Ad-hoc query | 5 minutes | 45 seconds | < 2 minutes |

**Acceptance Criteria:**
- 30 consecutive days of reconciliation PASS
- Sample comparison: 100% match rate
- Performance meets or exceeds old system
- Data quality score >= old system quality score

**Go/No-Go Decision:**
- **Go:** All criteria met for 30 days
- **No-Go:** Any critical discrepancy or quality degradation
- **Rollback plan:** Keep old system on standby for 60 days
