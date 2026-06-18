# 📂 Case Study 1 — Trading Platform Testing

## ⭐ Context

You are the Test Lead for TradeSys, a brokerage firm launching a new retail trading platform. The platform allows customers to trade equities, options, and ETFs.

**Key Features:**
- Real-time market data streaming
- Order entry (market, limit, stop, stop-limit)
- Portfolio tracking and P&L
- Options chain display and trading
- Margin calculations
- End-of-day statements

**Regulatory Context:**
- SEC-regulated broker-dealer
- Must comply with best execution (Reg NMS)
- Customer statements must be accurate
- Options trading requires suitability checks

---

## 🗓️ Task 1: Test Planning

**Question:** Create a test plan for the trading platform launch.

**Model Answer:**

**Scope:**
- In scope: Equity and ETF trading, options trading, portfolio tracking, statements
- Out of scope: Forex, futures, international markets (phase 2)

**Testing Types:**

| Type | Focus | Participants |
|------|-------|--------------|
| Functional | Order types, calculations, portfolio | QA team |
| Regulatory | Best execution, suitability, audit trails | Compliance QA |
| Performance | Order latency, market data throughput | Performance team |
| Security | Authentication, encryption, PII | Security team |
| UAT | Real user workflows | Selected customers |

**Entry Criteria:**
- All backend calculations verified against reference
- Performance benchmarks met (< 200ms order submission)
- Security scan passed
- Options risk disclosures implemented

**Exit Criteria:**
- 100% of test cases executed
- Pass rate ≥ 95%
- Zero critical defects
- Compliance officer sign-off

---

## 🧪 Task 2: Order Type Testing

**Question:** Design test cases for a stop-limit buy order.

**Model Answer:**

**Scenario:** Buy 100 shares of XYZ with stop $50, limit $51.

| Test Case | Condition | Expected Result |
|-----------|-----------|-----------------|
| TC-01 | Price drops from $55 to $50 | Order activates (becomes limit buy at $51) |
| TC-02 | Price drops to $50, then available at $50.50 | Order fills at $50.50 |
| TC-03 | Price drops to $50, then jumps to $52 | Order does not fill (limit $51 not reached) |
| TC-04 | Price drops to $49 without touching $50 | Order does NOT activate (stop not triggered) |
| TC-05 | Stop = Limit ($50 = $50) | Acceptable configuration; fills at $50 when triggered |
| TC-06 | Stop > Limit ($52 stop, $51 limit) | Invalid configuration; reject order entry |

---

## ⭐ Task 3: Options Greeks Validation

**Question:** A customer buys 10 call options on ABC stock. The system displays delta = 0.60 per contract. The stock price increases by $2.00. Verify the expected position change.

**Model Answer:**

**Given:**
- Contracts: 10
- Delta per contract: 0.60
- Underlying price change: +$2.00
- Multiplier: 100 shares per contract

**Calculation:**
- Position delta = 10 × 0.60 × 100 = 600 shares equivalent
- Expected P&L change = 600 × $2.00 = $1,200

**Testing checks:**
1. Verify system shows unrealized P&L increase of $1,200
2. Check that buying power reduction is recalculated
3. Confirm risk metrics (portfolio Greeks) updated
4. Validate that end-of-day statement reflects the change

---

## 🗂️ Task 4: Go-Live Decision

**Question:** Evaluate readiness based on the following data.

**Model Answer:**

| Criterion | Threshold | Actual | Status |
|-----------|-----------|--------|--------|
| Functional test cases | 100% | 100% | Pass |
| Pass rate | ≥ 95% | 97% | Pass |
| Order latency (P95) | < 200ms | 145ms | Pass |
| Options Greeks accuracy | 100% match to reference | 100% | Pass |
| Security scan | Zero critical | Zero critical | Pass |
| Regulatory audit | Pass | Pass | Pass |
| UAT completion | 100% | 100% | Pass |

**Decision:** GO-LIVE with phased rollout

**Phased Rollout:**
- Week 1: 100 employees only
- Week 2: 1,000 invited customers
- Week 3: All retail customers

**Rollback trigger:** Order error rate > 0.1% or compliance violation
