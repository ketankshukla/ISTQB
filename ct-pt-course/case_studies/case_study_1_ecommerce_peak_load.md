# 📂 Case Study 1 — E-Commerce Peak Load Testing

## ⭐ Context

You are the Performance Test Lead for ShopMax, an e-commerce platform preparing for Black Friday. Last year, the site crashed during the sale, costing an estimated $2M in lost revenue.

**System Architecture:**
- CDN (CloudFront) for static assets
- 4 web application servers (load balanced)
- 2 database servers (primary + read replica)
- Redis cache cluster
- Payment gateway (external)

**Expected Load:**
- Normal day: 2,000 concurrent users
- Black Friday peak: 25,000 concurrent users (12.5x normal)

---

## ♟️ Task 1: Test Strategy Design

**Question:** Design a performance test strategy for Black Friday readiness.

**Model Answer:**

**Objectives:**
1. Validate site handles 25,000 concurrent users
2. Ensure checkout completes within 5 seconds for 95% of users
3. Verify auto-scaling triggers correctly
4. Confirm no data loss or corruption under load
5. Establish maximum capacity before failure

**Test Types and Scenarios:**

| Test Type | Scenario | Load | Duration | Key Metrics |
|-----------|----------|------|----------|-------------|
| Load | Normal shopping day | 2,000 users | 1 hour | P95 < 2s, error < 0.1% |
| Load | Peak Black Friday | 25,000 users | 2 hours | P95 < 5s, error < 1% |
| Stress | Beyond peak | 35,000 users | Until failure | Breaking point, recovery |
| Endurance | Sustained peak | 25,000 users | 8 hours | Memory stability |
| Spike | Sale start | 0 → 25,000 in 5 min | 30 min | Auto-scaling response |
| Volume | Full catalog | 2,000 users | 1 hour | Search with 10M products |

**User Profiles:**

| Profile | % | Actions | Think Time |
|---------|---|---------|------------|
| Browser | 40% | Homepage, categories, product pages | 15-45s |
| Searcher | 30% | Search, filter, compare | 10-30s |
| Cart Builder | 20% | Add to cart, view cart, continue shopping | 20-60s |
| Buyer | 10% | Checkout, payment, confirmation | 30-120s |

**Transaction Mix:**
```
Homepage:       25%
Category browse: 20%
Product view:    20%
Search:          15%
Add to cart:     10%
Checkout start:   5%
Payment:          5%
```

**Acceptance Criteria:**
- P95 page load: < 2s (normal), < 5s (peak)
- P95 checkout: < 5s (peak)
- Error rate: < 0.1% (normal), < 1% (peak)
- Throughput: > 500 orders/minute at peak
- CPU: < 80% on all servers
- Auto-scaling: Triggers within 2 minutes of load increase

---

## 🗓️ Task 2: Environment Planning

**Question:** The production environment costs $50K/month. The test budget is $10K. How do you approach test environment sizing?

**Model Answer:**

**Challenge:** Cannot afford production-identical environment.

**Solution: Scaled-Down with Extrapolation**

**Test Environment:**
- 2 app servers (half of production)
- 1 database server (no read replica)
- 1 Redis node (cluster in production)
- CDN: Use same CDN (production) for realistic cache behavior

**Scaling Factor:** 0.5 (half the app servers)

**Expected Results at 0.5 Scale:**
- Should handle ~12,500 users (half of peak)
- Throughput should be ~250 orders/minute
- Response times should be similar (if database isn't the bottleneck)

**Extrapolation to Production:**
- If 2 servers handle 12,500 users with P95 < 5s
- Assume 4 servers handle 25,000 with similar performance
- **Risk:** Database (single server in test) may be the bottleneck that doesn't scale linearly

**Mitigation:**
- Monitor database closely in test
- If database is bottleneck at 12,500 users, extrapolation to 25,000 is NOT linear
- Plan database scaling (read replicas, sharding) for production

---

## 🔬 Task 3: Test Execution and Bottleneck Analysis

**Question:** During the peak load test, results show degradation. Analyze the data.

**Model Answer:**

**Test Results at 12,000 Users:**

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| P95 homepage | < 5s | 1.5s | PASS |
| P95 search | < 5s | 2.0s | PASS |
| P95 checkout | < 5s | 8.5s | FAIL |
| Throughput | > 250/min | 180/min | FAIL |
| Error rate | < 1% | 3% | FAIL |
| App server CPU | < 80% | 55% | PASS |
| App server memory | Stable | Stable | PASS |
| Database CPU | < 80% | 95% | FAIL |
| DB connections | < 100 | 100/100 | FAIL |
| Redis CPU | < 80% | 30% | PASS |

**Bottleneck Analysis:**

1. **Primary bottleneck: Database**
   - CPU at 95%
   - Connection pool saturated (100/100)
   - Checkout queries slow (8.5s P95)

2. **Checkout is the problem transaction**
   - Other pages are fast (1.5-2s)
   - Only checkout and payment are slow

3. **Errors are connection timeouts**
   - 3% error rate = users getting "connection timeout" during checkout
   - Correlates with connection pool saturation

**Root Cause — Database Query Analysis:**
```sql
-- Checkout process query (simplified)
SELECT inventory, price FROM products WHERE id = ?
UPDATE inventory SET quantity = quantity - ? WHERE id = ?
INSERT INTO orders (user_id, total, status) VALUES (?, ?, 'pending')
INSERT INTO order_items (order_id, product_id, qty) VALUES (?, ?, ?)
UPDATE users SET loyalty_points = loyalty_points + ? WHERE id = ?
```

**Issues Found:**
1. No index on order_items(order_id) — causes full scan
2. Inventory update locks the product row — contention under load
3. Loyalty points update locks the user row — serializes checkouts
4. All queries run in a single transaction holding connections for 3-5 seconds

---

## ⭐ Task 4: Tuning Recommendations and Re-Test

**Question:** Create a tuning plan and define re-test criteria.

**Model Answer:**

**Tuning Plan:**

| Priority | Fix | Effort | Expected Impact |
|----------|-----|--------|-----------------|
| 1 | Add index on order_items(order_id) | 1 hour | Reduce checkout query from 3s to < 50ms |
| 2 | Reduce transaction scope — commit inventory update immediately, do loyalty points asynchronously | 1 day | Reduce connection hold time from 5s to 1s |
| 3 | Increase connection pool from 100 to 200 | 30 min | Support 2x concurrent checkouts |
| 4 | Implement inventory reservation via Redis (not DB lock) | 1 week | Eliminate row locking contention |
| 5 | Add database read replica for reporting queries | 3 days | Offload read traffic |

**Quick Fixes (Before Black Friday — 2 weeks):**
- Add index (1 hour)
- Increase connection pool (30 min)
- Reduce transaction scope (1 day)

**Architecture Changes (Post-Black Friday):**
- Redis inventory reservation (1 week)
- Database read replica (3 days)

**Re-Test Plan:**
1. Apply quick fixes to test environment
2. Re-run peak load test (12,000 users)
3. Verify:
   - P95 checkout < 5s
   - Error rate < 1%
   - Database CPU < 80%
   - Throughput > 250/min
4. If pass: Deploy to production, monitor during Black Friday
5. If fail: Apply additional fixes and re-test

**Production Monitoring Plan:**
- Real-time dashboard: Concurrent users, P95 response time, error rate, orders/minute
- Alert thresholds: P95 > 5s, Error rate > 1%, CPU > 85%
- Auto-scaling: Scale app servers when CPU > 70%
- Fallback: Enable "wait queue" for checkout if load exceeds capacity
