# 📂 Case Study 3 — Payment Gateway Validation

## ⭐ Context

You are the Test Manager for PayFast, a payment processor integrating a new gateway for e-commerce merchants.

**System:**
- Merchants submit card transactions via API
- Gateway routes to appropriate acquirer
- Supports 3D Secure 2.0
- Handles authorization, capture, refunds, and chargebacks
- Must comply with PCI-DSS Level 1

**Requirements:**
- Process 1,000+ transactions per second
- P99 latency < 500ms for authorization
- 99.99% uptime during peak hours
- Full audit trail for all transactions

---

## ⭐ Task 1: Authorization Testing

**Question:** Design comprehensive authorization tests.

**Model Answer:**

| Test ID | Scenario | Input | Expected Result |
|---------|----------|-------|-----------------|
| AUTH-01 | Valid Visa card | Card number valid, expiry future, CVV correct | Approved, auth code returned |
| AUTH-02 | Invalid card number | Luhn check fails | Declined, code 14 (invalid card) |
| AUTH-03 | Expired card | Expiry date in past | Declined, code 54 (expired) |
| AUTH-04 | Insufficient funds | Card with no available credit | Declined, code 51 (insufficient funds) |
| AUTH-05 | Fraud rule triggered | Velocity limit exceeded (10 txns in 1 min) | Declined, code 65 (activity limit) |
| AUTH-06 | 3D Secure required | Merchant configured for 3DS, card enrolled | Challenge flow initiated |
| AUTH-07 | 3D Secure frictionless | Low-risk transaction, issuer allows frictionless | Approved without challenge |
| AUTH-08 | Currency conversion | USD merchant, GBP card | Correct conversion rate applied, amount matches |
| AUTH-09 | Timeout | Acquirer does not respond within 30s | Timeout response, no duplicate created |
| AUTH-10 | Retry logic | Timeout on first attempt, retry succeeds | Single transaction record, status approved |

---

## ⭐ Task 2: Settlement and Reconciliation

**Question:** Verify end-to-end settlement flow.

**Model Answer:**

**Transaction Example:**
- Merchant: Online Retailer ($100 sale)
- Acquirer fee: 1.5% ($1.50)
- Scheme fee: 0.2% ($0.20)
- Gateway fee: $0.10
- Merchant receives: $100 - $1.50 - $0.20 - $0.10 = $98.20

**Testing Checks:**
1. Authorization generates pending settlement record
2. End-of-day batch includes the transaction
3. Settlement file sent to acquirer with correct amount splits
4. Merchant statement shows $98.20 net deposit
5. Reconciliation between gateway, acquirer, and merchant matches
6. Chargeback (if initiated) reverses the correct net amount

---

## ⚡ Task 3: Performance and Load Testing

**Question:** Validate performance under Black Friday load.

**Model Answer:**

**Test Scenarios:**

| Scenario | Load | Target Latency | Result |
|----------|------|----------------|--------|
| Normal peak | 500 TPS | P99 < 500ms | Pass (P99 = 320ms) |
| Black Friday | 2,000 TPS | P99 < 750ms | Pass (P99 = 680ms) |
| Stress test | 5,000 TPS | No errors | Degrades gracefully at 4,500 TPS |
| Sustained load | 1,500 TPS for 4 hours | No memory leaks | Pass, stable throughout |

**Findings:**
- Database connection pool needs increase from 100 to 200 at > 3,000 TPS
- Cache hit rate drops to 85% under extreme load; recommend cache warming
- No transaction duplication observed under retry scenarios

---

## ⭐ Task 4: PCI-DSS Compliance

**Question:** Verify PCI-DSS controls for the gateway.

**Model Answer:**

| Requirement | Control | Test Result |
|-------------|---------|-------------|
| 3.4 | PAN displayed masked (last 4 only) | Pass — UI and logs mask PAN |
| 4.2 | Strong cryptography for transmission | Pass — TLS 1.3 enforced |
| 8.2 | Strong authentication for admin access | Pass — MFA required |
| 10.2 | Audit logs capture all access to cardholder data | Pass — all API calls logged |
| 11.3 | Vulnerability scanning quarterly | Pass — last scan 2 weeks ago, zero critical |
| 12.1 | Security policy maintained | Pass — policy reviewed quarterly |

**Remediation needed:**
- Requirement 6.5 — Code review for injection vulnerabilities: In progress, 80% complete
- Requirement 11.2 — Internal vulnerability scans: Next scan scheduled for next week

**Go-Live Decision:** Conditional go-live
- Condition 1: Complete code review ( Requirement 6.5) within 2 weeks
- Condition 2: Complete internal scan before processing live transactions
- Condition 3: Implement real-time monitoring for first 30 days
