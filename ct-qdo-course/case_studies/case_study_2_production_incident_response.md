# 📂 Case Study 2 — Production Incident Response

## ⭐ Context

You are the SRE Lead for PaymentPro, a payment processing platform. At 14:30, the on-call engineer receives a P1 alert: payment success rate dropped from 99.5% to 85%.

**System:**
- Microservices: API Gateway, Payment Service, Fraud Service, Notification Service
- Database: PostgreSQL primary + 2 read replicas
- Message queue: RabbitMQ for async notifications
- Monitoring: Prometheus + Grafana

---

## ⭐ Task 1: Initial Response

**Question:** What are the first 10 minutes of response?

**Model Answer:**

**Minute 0-2: Acknowledge and assess**
- Acknowledge alert in PagerDuty
- Check Grafana dashboard: Payment success rate, error breakdown by service
- Initial finding: Fraud Service returning timeouts

**Minute 2-5: Communicate**
- Post in incident Slack channel
- Notify stakeholders (CTO, Customer Success)
- Create incident war room (Zoom)

**Minute 5-10: Mitigate**
- Check if recent deployment correlates with incident start
- Confirm: Payment Service v2.3.1 deployed at 14:25
- Decision: Roll back to v2.3.0
- Execute rollback via CI/CD pipeline

---

## ⭐ Task 2: Investigation

**Question:** After rollback restores service, how do you investigate?

**Model Answer:**

**Timeline Reconstruction:**
| Time | Event |
|------|-------|
| 14:20 | CI pipeline starts deployment of v2.3.1 |
| 14:25 | Deployment completes; health checks pass |
| 14:28 | Payment success rate starts declining |
| 14:30 | Alert fires |
| 14:35 | Rollback initiated |
| 14:38 | Service restored |

**Log Analysis:**
- Fraud Service logs show: "Connection pool exhausted — timeout waiting for DB connection"
- Payment Service v2.3.1 increased DB connection pool from 20 to 50 per instance
- But Fraud Service still uses 20 connections and times out under load

**Root Cause:**
- Payment Service v2.3.1 increased its DB connections
- This starved the Fraud Service of available connections
- Fraud checks timed out, causing payment failures

---

## ⭐ Task 3: Post-Mortem

**Question:** Conduct a blameless post-mortem.

**Model Answer:**

**What happened:**
- Payment Service v2.3.1 deployment increased DB connection usage
- Fraud Service experienced DB connection pool exhaustion
- Payment success rate dropped to 85%

**Impact:**
- 15% of payments failed for 13 minutes
- Estimated revenue impact: $50,000
- 200 customer support tickets

**Contributing factors:**
- Load testing did not include Fraud Service DB contention
- No monitoring alert for DB connection pool exhaustion
- Deployment was during peak hours (should be off-peak)

**Action items:**
| Action | Owner | Due |
|--------|-------|-----|
| Add DB connection pool monitoring and alert | SRE Team | 1 week |
| Include cross-service load testing in pipeline | QA Lead | 2 weeks |
| Implement off-peak deployment policy | DevOps Lead | 1 week |
| Add circuit breaker to Fraud Service calls | Engineering | 2 weeks |
| Update incident runbook with rollback procedure | SRE Team | 3 days |

**Lessons learned:**
- Resource changes in one service can starve another
- Cross-service load testing is essential
- Off-peak deployments reduce incident impact

---

## ⭐ Task 4: Prevention

**Question:** What changes prevent recurrence?

**Model Answer:**

**Pipeline changes:**
- Add resource contention tests to staging environment
- Canary deployments include cross-service metrics
- DB connection limits reviewed before any deployment

**Monitoring changes:**
- Alert when any service DB pool > 80% utilized
- Dashboard showing DB connections by service
- Alert when deployment occurs during peak hours

**Process changes:**
- No deployments 14:00-16:00 (peak transaction time)
- Mandatory cross-service review for resource changes
- Chaos engineering: simulate DB connection exhaustion quarterly
