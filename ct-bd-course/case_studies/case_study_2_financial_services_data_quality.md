# 📂 Case Study 2 — Financial Services Data Quality

## ⭐ Context

You are the Data Quality Manager for SecureBank, responsible for ensuring the accuracy and compliance of customer and transaction data feeding regulatory reports.

**Systems:**
- 12 source systems (branches, online banking, mobile, ATMs, cards)
- Data lake (raw data from all sources)
- Data warehouse (cleansed, integrated data)
- Regulatory reporting (Basel III, AML, GDPR)

**Regulatory Requirements:**
- Transaction reports: 99.99% accuracy
- Customer data: 100% completeness for KYC fields
- Data retention: 7 years with full lineage
- GDPR: Ability to identify and delete all customer data within 30 days

---

## 🎨 Task 1: Data Quality Framework Design

**Question:** Design a data quality framework for regulatory compliance.

**Model Answer:**

**Quality Dimensions by Criticality:**

| Dimension | Critical Fields | Threshold | Non-Critical Fields | Threshold |
|-----------|----------------|-----------|---------------------|-----------|
| Completeness | customer_id, account_number, transaction_amount | 100% | phone_number, email | 95% |
| Accuracy | account_balance, interest_rate, tax_id | 99.99% | customer_preferences | 90% |
| Consistency | cross-system balances, transaction totals | 100% | marketing_opt_in | 95% |
| Validity | country_code, currency, product_type | 100% | nickname | 80% |
| Uniqueness | account_number, transaction_id | 100% | — | — |
| Timeliness | transaction_timestamp, report_date | 100% | profile_update_date | 90% |

**Testing Framework:**

1. **Automated Quality Gates (Deequ/Great Expectations):**
   - Run after every ETL job
   - Critical failures = pipeline halt
   - Warnings = alert but continue

2. **Source-to-Target Reconciliation:**
   - Run after every load
   - Compare source system totals to warehouse totals
   - Variance > 0 = investigation required

3. **Lineage Verification:**
   - Monthly audit of random sample
   - Trace 100 records from source → lake → warehouse → report
   - Verify all transformations documented

4. **GDPR Compliance Testing:**
   - Quarterly "right to be forgotten" test
   - Delete test customer; verify removal from all systems
   - Verify no orphan records in downstream tables

---

## ⭐ Task 2: Multi-Source Consistency Testing

**Question:** A customer's account balance shows $10,000 in the branch system but $10,500 in the online banking system. How do you test and resolve this?

**Model Answer:**

**Investigation Steps:**

1. **Identify Discrepancy Scope:**
   - How many accounts have balance mismatches?
   - Is it limited to one source system or widespread?
   - When did the discrepancy start?

2. **Data Lineage Analysis:**
   ```
   Branch system: balance = $10,000 (last updated 2024-06-14 15:30)
   Online system: balance = $10,500 (last updated 2024-06-14 16:45)
   Warehouse: balance = $10,500 (from online system, newer timestamp)
   ```

3. **Root Cause Hypothesis:**
   - Online system processed a $500 deposit at 16:45
   - Branch system did not receive the deposit update (sync issue)
   - Warehouse took the latest timestamp = online value

4. **Validation:**
   - Check transaction log: Deposit of $500 at 16:45 exists in online system
   - Check branch system: Deposit not present
   - Check sync job: Last sync was at 15:00 (before deposit)

5. **Test the Fix:**
   - Trigger manual sync
   - Verify branch system now shows $10,500
   - Verify warehouse remains $10,500
   - Add alert: sync delay > 1 hour

**Prevention Tests:**
- Daily cross-system balance reconciliation
- Alert if sync job hasn't run in 2 hours
- Test: Add transaction, verify appears in all systems within SLA

---

## ⚡ Task 3: Performance Under Regulatory Load

**Question:** Basel III requires quarterly calculation of risk-weighted assets across 50 million transactions. Design performance tests.

**Model Answer:**

**Test Scenarios:**

| Scenario | Data Volume | Cluster Size | Expected Duration | SLA |
|----------|-------------|--------------|-------------------|-----|
| Normal quarter | 50M transactions | 20 nodes | 6 hours | 8 hours |
| Year-end (peak) | 80M transactions | 20 nodes | 10 hours | 12 hours |
| Stress test | 100M transactions | 20 nodes | Measure capacity | — |
| Scale test | 50M transactions | 10 nodes | 12 hours | Baseline |
| Scale test | 50M transactions | 40 nodes | 3 hours | < 4 hours |

**Bottleneck Detection:**

**Phase 1: Baseline (20 nodes, 50M transactions):**
- Duration: 6 hours
- CPU: 70% average
- Memory: 80% average
- Disk I/O: Moderate

**Phase 2: Year-end simulation (20 nodes, 80M transactions):**
- Projected duration: 9.6 hours (linear extrapolation)
- Actual duration: 10.2 hours
- CPU: 85% average (some saturation)
- Memory: 90% (GC pressure)

**Phase 3: Optimization:**
- Add 10 nodes (30 total)
- Optimize risk calculation (pre-aggregate by category)
- Result: 80M transactions in 7.5 hours

**Recommendation:**
- For normal quarters: 20 nodes sufficient
- For year-end: Scale to 30 nodes 2 days before quarter-end
- Implement pre-aggregation by risk category to reduce calculation time

---

## ⭐ Task 4: GDPR Delete Testing

**Question:** A customer requests deletion under GDPR. How do you test that deletion is complete across all systems?

**Model Answer:**

**Deletion Test Plan:**

1. **Pre-Deletion Audit:**
   - Record customer_id = 12345
   - Document all systems containing this customer:
     - Source systems: 5 records
     - Data lake: 15 files (historical loads)
     - Data warehouse: 8 tables
     - Backup systems: 3 backups
     - Reports: 12 monthly PDFs
     - Analytics models: 1 feature store entry

2. **Execute Deletion:**
   - Trigger GDPR deletion workflow
   - Verify cascade delete through all systems

3. **Post-Deletion Verification:**

| System | Test | Expected | Actual | Status |
|--------|------|----------|--------|--------|
| Source (branch) | SELECT * FROM customers WHERE id=12345 | 0 rows | 0 rows | PASS |
| Source (online) | SELECT * FROM customers WHERE id=12345 | 0 rows | 0 rows | PASS |
| Data lake | Search HDFS for customer_id=12345 | 0 files | 0 files | PASS |
| Data warehouse | SELECT * FROM dim_customer WHERE customer_id=12345 | 0 rows | 0 rows | PASS |
| Warehouse (facts) | SELECT * FROM fact_transactions WHERE customer_id=12345 | 0 rows | 0 rows | PASS |
| Backups | Verify backup retention policy applied | Expired backups purged | Purged | PASS |
| Reports | Search archived PDFs | No PII found | No PII | PASS |
| Feature store | Query model features for customer_id=12345 | Not found | Not found | PASS |

4. **Lineage Verification:**
   - Query data lineage tool for customer_id=12345
   - Expected: All traces show "deleted" or "anonymized"
   - Verify no downstream systems reference the deleted customer

5. **Audit Trail:**
   - Confirm deletion request logged
   - Confirm deletion completion logged with timestamp
   - Retain audit log for 7 years (regulatory requirement)

**Quarterly Regression Test:**
- Create test customer in all systems
- Execute deletion workflow
- Run full verification suite
- Document any failures and fix gaps
