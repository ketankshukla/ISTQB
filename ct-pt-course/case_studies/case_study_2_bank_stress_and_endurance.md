# 📂 Case Study 2 — Bank Stress and Endurance Testing

## ⭐ Context

You are the Performance Engineer for SecureBank, testing a new mobile banking backend API before release.

**System:** REST API serving mobile banking app
**Endpoints:** Login, balance check, transfer, transaction history, bill pay
**Critical Requirements:**
- Must handle 50,000 concurrent users (customer base: 2M)
- 99.99% uptime required
- No data loss or inconsistency under any load
- Financial transaction response time < 3 seconds (P95)

---

## 🧪 Task 1: Test Type Selection

**Question:** Which performance test types are most critical for this banking system, and why?

**Model Answer:**

**Critical Test Types:**

1. **Load Testing (HIGH priority)**
   - Validate API handles 50,000 concurrent users
   - Verify response times meet SLAs
   - Test all critical endpoints under expected load

2. **Stress Testing (HIGH priority)**
   - Find breaking point beyond 50,000 users
   - Verify graceful degradation (not crashes)
   - Test recovery mechanisms
   - Validate transaction integrity at extreme load

3. **Endurance Testing (HIGH priority)**
   - System runs 24/7; must be stable over time
   - Detect memory leaks in financial calculations
   - Verify connection pools don't deplete over days
   - Check log rotation doesn't fill disk

4. **Spike Testing (MEDIUM priority)**
   - Morning login surge (everyone checks balance at 8 AM)
   - Payday traffic spikes
   - Unexpected viral app usage

5. **Volume Testing (MEDIUM priority)**
   - 2M customers × 5 years of transactions = 100M+ records
   - Query performance with large history
   - Report generation with large datasets

6. **Isolation Testing (MEDIUM priority)**
   - Test transfer endpoint in isolation
   - Test database transaction handling
   - Validate payment gateway integration

**Less Critical:**
- Configuration testing (standardized banking infrastructure)
- Scalability testing (auto-scaling not used due to regulatory constraints)

---

## 📐 Task 2: Workload Model and KPIs

**Question:** Create a workload model and define KPIs for the mobile banking API.

**Model Answer:**

**User Profiles:**

| Profile | % | Typical Actions per Session | Session Duration |
|---------|---|----------------------------|------------------|
| Quick Checker | 50% | Login → Balance → Logout | 1 min |
| Transaction Reviewer | 25% | Login → History → Filter → Logout | 3 min |
| Active User | 20% | Login → Transfer → Balance → History → Logout | 5 min |
| Bill Payer | 5% | Login → Bill Pay → Confirm → Balance → Logout | 4 min |

**API Call Mix (per 1,000 calls):**
```
Login:              250
Balance check:      350
Transaction history: 200
Transfer:           100
Bill pay:            80
Logout:             250
```

**Think Time Between Actions:**
- Quick actions (view balance): 5-15 seconds
- Data entry (transfer amount): 15-45 seconds
- Reading history: 10-30 seconds

**KPIs and Acceptance Criteria:**

| KPI | Target | Measurement |
|-----|--------|-------------|
| P95 login | < 1 second | Under 50,000 concurrent users |
| P95 balance check | < 0.5 seconds | Under 50,000 concurrent users |
| P95 transfer | < 3 seconds | Under 50,000 concurrent users |
| P95 history | < 2 seconds | For last 30 days of data |
| P99 all endpoints | < 5 seconds | Under peak load |
| Throughput | > 1,000 TPS | Across all endpoints |
| Error rate | < 0.01% | No financial errors acceptable |
| CPU | < 70% sustained | All application servers |
| Memory | Stable | No growth over 48 hours |
| Database CPU | < 80% | Primary database |

---

## 🔬 Task 3: Stress Test Execution and Analysis

**Question:** Execute a stress test and analyze the breaking point.

**Model Answer:**

**Stress Test Plan:**
- Start: 10,000 users (normal load)
- Increment: +5,000 users every 10 minutes
- Continue until: Error rate > 5% OR response time > 10s

**Results:**

| Users | P95 Transfer | Throughput | Error Rate | App CPU | DB CPU | DB Connections |
|-------|--------------|------------|------------|---------|--------|----------------|
| 10,000 | 1.5s | 800 TPS | 0.001% | 35% | 40% | 45/200 |
| 20,000 | 1.8s | 1,500 TPS | 0.002% | 55% | 60% | 80/200 |
| 30,000 | 2.5s | 2,000 TPS | 0.01% | 70% | 78% | 120/200 |
| 40,000 | 4.0s | 2,200 TPS | 0.5% | 82% | 92% | 180/200 |
| 45,000 | 6.5s | 2,000 TPS | 2% | 88% | 97% | 200/200 |
| 50,000 | 12s | 1,500 TPS | 8% | 92% | 100% | 200/200 (wait queue) |

**Breaking Point Analysis:**

1. **Degradation starts at ~40,000 users**
   - Error rate jumps from 0.01% to 0.5%
   - Response time doubles from 2.5s to 4.0s

2. **System fails at ~50,000 users**
   - Error rate: 8% (unacceptable)
   - Response time: 12 seconds
   - Database CPU: 100% (saturated)
   - Connection pool: Full with wait queue

3. **Bottleneck: Database**
   - Database CPU climbs from 40% to 100%
   - Connection pool exhausted
   - Application servers still have CPU headroom (92% at failure)

**Error Breakdown at 50,000 Users:**
- 60%: Database connection timeout
- 25%: Transfer transaction timeout (rolled back)
- 10%: HTTP 503 (server queue full)
- 5%: Other

**Critical Finding:**
- Transfer transactions are timing out and rolling back
- This means some transfers may appear failed to users but actually succeeded
- OR some transfers appear succeeded but actually failed
- **DATA INTEGRITY RISK**

---

## 🗃️ Task 4: Data Integrity and Tuning

**Question:** Address the data integrity risk and create a tuning plan.

**Model Answer:**

**Data Integrity Issue:**

Under extreme load, transfer API returns timeout errors, but the database transaction may:
- Complete after timeout (user sees error, but money moved)
- Roll back partially (inconsistent state)
- Leave locks held (cascading failures)

**Immediate Fixes:**

1. **Transfer Endpoint Circuit Breaker**
   - If database queue > 50 pending transfers, return "System busy, try again"
   - Prevents queue buildup and timeouts
   - User gets clear message instead of ambiguous timeout

2. **Transaction Timeout Handling**
   - Implement idempotency keys for transfers
   - If timeout occurs, client can safely retry with same key
   - Server deduplicates: "This transfer already processed"

3. **Database Connection Pool Increase**
   - Increase from 200 to 400 connections
   - Cost: More database memory
   - Benefit: Handle 2x concurrent transactions

4. **Query Optimization**
   - Transfer validation query scans all accounts
   - Add composite index on (from_account, status, created_date)
   - Reduces transfer validation from 200ms to 5ms

**Long-Term Architecture Changes:**

1. **Read Replicas**
   - Balance checks and history queries go to read replicas
   - Only transfers write to primary
   - Reduces primary DB load by ~60%

2. **Async Transfer Processing**
   - Transfer API queues the request (Redis/Kafka)
   - Background worker processes the actual transfer
   - API returns "queued" immediately (< 100ms)
   - User sees "processing" status, then "completed" notification

3. **Database Sharding**
   - Shard by customer ID
   - Each shard handles subset of customers
   - Linear scaling by adding shards

**Re-Test Plan:**
1. Apply connection pool increase and query optimization
2. Re-run stress test
3. Verify breaking point improves from 50,000 to 70,000+ users
4. Verify no data integrity issues at any load level
5. Verify circuit breaker activates gracefully

---

## ⭐ Task 5: Endurance Test Results

**Question:** After running 50,000 users for 72 hours, the following is observed. What actions should be taken?

**Model Answer:**

**Endurance Test Results (50,000 users, 72 hours):**

| Metric | Hour 1 | Hour 24 | Hour 48 | Hour 72 | Assessment |
|--------|--------|---------|---------|---------|------------|
| Memory | 8GB | 10GB | 13GB | 16GB | Growing 111MB/hour |
| CPU | 70% | 72% | 73% | 75% | Stable |
| Response time | 2.5s | 2.6s | 2.9s | 3.4s | Gradually degrading |
| Error rate | 0.01% | 0.02% | 0.04% | 0.08% | Slowly increasing |
| Disk space | 500GB | 520GB | 540GB | 560GB | Growing 20GB/day (logs) |

**Analysis:**

1. **Memory Leak**
   - 8GB → 16GB over 72 hours = 111MB/hour growth
   - Causes: Unclosed sessions, growing cache, uncollected objects
   - Action: Memory profiling to identify leaked objects

2. **Response Time Degradation**
   - Correlates with memory growth
   - Likely caused by GC pressure from larger heap
   - Action: Fix memory leak, re-test

3. **Log File Growth**
   - 20GB/day of logs
   - If uncontrolled, will fill disk in ~25 days
   - Action: Implement log rotation (keep 7 days), reduce log verbosity

**Recommended Actions:**

| Priority | Action | Timeline |
|----------|--------|----------|
| 1 | Fix memory leak (profile and patch) | 3 days |
| 2 | Implement log rotation (7-day retention) | 1 day |
| 3 | Reduce default log level from DEBUG to INFO | 1 hour |
| 4 | Re-run 72-hour endurance test | 4 days |
| 5 | If pass, proceed to production release | — |
