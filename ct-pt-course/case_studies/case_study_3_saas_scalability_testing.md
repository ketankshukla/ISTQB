# Case Study 3 — SaaS Scalability Testing

## Context

You are the Lead Performance Engineer for CloudCRM, a SaaS customer relationship management platform. The company is moving from a single-tenant to multi-tenant architecture and needs to validate scalability.

**Current Architecture:**
- Single-tenant: Each customer has dedicated database
- Problems: High infrastructure cost, complex maintenance

**New Architecture:**
- Multi-tenant: Shared database with tenant ID isolation
- Benefits: Lower cost, easier maintenance
- Risk: One tenant's heavy usage could affect others ("noisy neighbor")

**Current Scale:** 500 customers, 10,000 total users
**Target Scale:** 5,000 customers, 200,000 total users

---

## Task 1: Scalability Test Strategy

**Question:** Design a scalability testing strategy for the multi-tenant migration.

**Model Answer:**

**Test Objectives:**
1. Validate system scales from 10,000 to 200,000 users
2. Ensure no "noisy neighbor" effect (one tenant doesn't slow others)
3. Determine optimal database shard size
4. Validate auto-scaling of application tier
5. Measure cost per user at different scales

**Scalability Dimensions:**

| Dimension | Current | Target | Test Increment |
|-----------|---------|--------|----------------|
| Tenants | 500 | 5,000 | +500 per test |
| Total users | 10,000 | 200,000 | +20,000 per test |
| Concurrent users | 1,000 | 20,000 | +2,000 per test |
| Database size | 500GB | 5TB | +500GB per test |

**Test Phases:**

**Phase 1: Vertical Scaling (Scale Up)**
- Test on progressively larger database instances
- Measure performance vs. instance size
- Find optimal instance size for cost/performance

**Phase 2: Horizontal Scaling (Scale Out)**
- Add application servers
- Test with database read replicas
- Measure if performance scales linearly

**Phase 3: Sharding**
- Test with 2, 4, 8 database shards
- Measure cross-shard query performance
- Find optimal shard count

**Phase 4: Multi-Tenant Isolation**
- One tenant generates heavy load
- Measure impact on other tenants
- Validate resource quotas and throttling

---

## Task 2: Noisy Neighbor Testing

**Question:** How do you test and prevent the "noisy neighbor" problem?

**Model Answer:**

**Test Design:**

**Tenant Setup:**
- Tenant A: Normal load (100 concurrent users)
- Tenant B: Normal load (100 concurrent users)
- Tenant C: Heavy load (1,000 concurrent users, "noisy neighbor")
- Tenant D: Normal load (100 concurrent users)

**Test Execution:**
1. Baseline: All tenants at normal load for 30 minutes
2. Spike: Tenant C increases to heavy load for 30 minutes
3. Measure: Response times for all tenants during the spike

**Expected Results (Pass):**
- Tenants A, B, D: Response time remains within SLA (< 10% degradation)
- Tenant C: Response time acceptable for its load level
- System resources allocated fairly

**Failure Scenario:**
- Tenant A response time degrades from 1s to 5s due to Tenant C's load
- This = "noisy neighbor" effect

**Prevention Mechanisms:**

1. **Database Resource Quotas**
   - Per-tenant connection limits
   - Per-tenant query timeout (e.g., 10 seconds max)
   - Per-tenant CPU allocation

2. **Application Throttling**
   - Rate limiting per tenant (e.g., 100 requests/second)
   - Priority queuing (small tenants get priority)

3. **Resource Isolation**
   - Database: Tenant-specific schema or row-level isolation with resource pools
   - Cache: Per-tenant cache quotas
   - Background jobs: Per-tenant job queue

---

## Task 3: Scalability Test Results and Analysis

**Question:** Analyze the following scalability test results and recommend the architecture.

**Model Answer:**

**Test Results — Adding Application Servers:**

| App Servers | DB Instance | Concurrent Users | P95 Response | Throughput | App CPU | DB CPU |
|-------------|-------------|-------------------|--------------|------------|---------|--------|
| 2 | db.r5.xlarge | 2,000 | 1.2s | 400 TPS | 75% | 45% |
| 4 | db.r5.xlarge | 4,000 | 1.3s | 750 TPS | 70% | 65% |
| 8 | db.r5.xlarge | 6,000 | 2.1s | 950 TPS | 55% | 90% |
| 8 | db.r5.2xlarge | 8,000 | 1.5s | 1,200 TPS | 60% | 70% |
| 8 | db.r5.2xlarge | 10,000 | 2.0s | 1,400 TPS | 68% | 85% |

**Analysis:**

1. **Database is the bottleneck**
   - With db.r5.xlarge: Adding app servers beyond 4 doesn't help (DB CPU at 90%)
   - Upgrading to db.r5.2xlarge unlocks more capacity

2. **Sub-linear scaling**
   - 2 servers → 4 servers: 2x users, 1.9x throughput (close to linear)
   - 4 servers → 8 servers (same DB): 1.5x users, 1.3x throughput (sub-linear)
   - Shared database limits horizontal scaling

3. **Optimal configuration for 10,000 concurrent:**
   - 8 app servers + db.r5.2xlarge handles 10,000 users
   - But DB CPU at 85% — no more headroom

**Projection to 200,000 Users:**

Current optimal: 10,000 concurrent with DB at 85%
Target: 200,000 total users ≈ 20,000 concurrent (assuming 10% active)

**Required scaling: 2x from current optimal**

**Options:**

| Option | Config | Cost/Month | Risk |
|--------|--------|------------|------|
| A | db.r5.8xlarge + 16 app servers | $8,000 | Single DB = single point of failure, noisy neighbor |
| B | 2 shards (db.r5.4xlarge × 2) + 16 app servers | $6,000 | Cross-shard queries, complexity |
| C | 4 shards (db.r5.2xlarge × 4) + 16 app servers | $5,500 | More complexity, but better isolation |
| D | 8 shards (db.r5.xlarge × 8) + 16 app servers | $5,000 | Most complex, best isolation, harder to manage |

**Recommendation:**
- Start with Option C (4 shards)
- Balances cost, complexity, and isolation
- Each shard handles ~5,000 tenants
- Cross-shard queries minimized by tenant-aware routing

---

## Task 4: Cost-Performance Reporting

**Question:** Create a management report on scalability test findings.

**Model Answer:**

**Executive Summary:**

The multi-tenant migration can support the target scale of 200,000 users with the recommended architecture. However, database scaling is the critical enabler.

**Key Findings:**

1. **Current single-tenant architecture cannot scale cost-effectively**
   - 500 databases × $200/month = $100,000/month
   - At 5,000 customers: $1M/month (unsustainable)

2. **Multi-tenant with 4 database shards reduces cost by 80%**
   - 4 shards × $1,375/month = $5,500/month
   - Supports 200,000 users
   - Cost per user: $0.028/month vs. $0.50/month (single-tenant)

3. **"Noisy neighbor" risk is manageable with resource quotas**
   - Tests show < 5% impact on other tenants when one tenant spikes
   - Rate limiting and query timeouts prevent abuse

4. **Auto-scaling application tier works correctly**
   - Scales from 2 to 16 servers in 3 minutes
   - Response time remains stable during scale events

**Recommendation:**

| Phase | Action | Timeline | Cost |
|-------|--------|----------|------|
| 1 | Migrate first 100 tenants to multi-tenant (pilot) | 1 month | $10K setup |
| 2 | Migrate remaining 400 tenants | 2 months | — |
| 3 | Scale to 2,000 tenants (add 2nd shard pair) | 3 months | +$2,750/mo |
| 4 | Scale to 5,000 tenants (add 3rd/4th shard pair) | 6 months | +$5,500/mo |

**Risk Mitigation:**
- Keep single-tenant option for enterprise customers (>1,000 users)
- Monitor "noisy neighbor" metrics in production
- Plan shard split when shards reach 70% capacity

**Go/No-Go Decision:**
- GO for multi-tenant migration with 4-shard architecture
- Re-evaluate after 1,000 tenants
- No-go if pilot shows > 10% performance degradation for migrated tenants
