# 📘 Chapter 4 — Monitoring, Observability, and Feedback: Lessons

---

## ⭐ 4.1 Monitoring vs Observability

### 🔷 Monitoring

- **Definition:** Collecting and analyzing predefined metrics to understand system health
- **Use case:** "Is the CPU usage above 80%?"
- **Limitation:** You must know what to monitor in advance

### 🔷 Observability

- **Definition:** Ability to understand internal system state from its external outputs
- **Use case:** "Why is this request slow?" — follow the trace through all services
- **Advantage:** Can answer unknown-unknowns without predefined dashboards

### 🔷 The Three Pillars

| Pillar | What It Captures | Example |
|--------|------------------|---------|
| **Metrics** | Numeric data over time | CPU %, request rate, error rate, latency P99 |
| **Logs** | Discrete events with context | "User 123 failed login at 10:05:30" |
| **Traces** | End-to-end request flow through services | Request ID spanning API → Service A → DB → Service B |

### 🔷 Correlation

The most powerful insights come from correlating all three:
- High error rate (metric) + "connection timeout" (log) + slow DB call (trace) = database issue

---

## 📊 4.2 Metrics and Dashboards

### 🧪 Key Metric Types

| Type | Description | Example |
|------|-------------|---------|
| **Counter** | Cumulative count | Total requests, total errors |
| **Gauge** | Current value | Queue depth, active connections |
| **Histogram** | Distribution of values | Response time buckets |
| **Summary** | Calculated percentiles | P50, P95, P99 latency |

### 🔷 The RED Method

For monitoring microservices:
- **Rate:** Number of requests per second
- **Errors:** Number of failed requests
- **Duration:** How long requests take

### 🔷 The USE Method

For monitoring infrastructure:
- **Utilization:** Percentage of resource used
- **Saturation:** Amount of work queued
- **Errors:** Count of error events

### 🎨 Dashboard Design

- **Overview dashboard:** System health at a glance (RED metrics)
- **Detailed dashboard:** Drill-down by service, region, endpoint
- **Business dashboard:** Conversion rate, revenue, user engagement

---

## ❓ 4.3 Alerting Best Practices

### 🧪 Alert Types

| Type | Trigger | Response |
|------|---------|----------|
| **Page** | Service down, data loss | Immediate human response |
| **Ticket** | Degraded performance, non-critical issue | Work during business hours |
| **Log/Metric** | Anomaly detected, trend change | Review in next standup |

### 📜 Alert Design Principles

1. **Actionable:** Every alert must have a clear response procedure
2. **Relevant:** Alert on symptoms affecting users, not just any threshold
3. **Noisy alerts desensitize:** False positives cause teams to ignore alerts
4. **Severity-appropriate:** Page only for real emergencies

### 🔷 Common Anti-Patterns

- **Alert fatigue:** Too many low-priority alerts
- **"Wake me up for nothing":** Pages for non-urgent issues
- **Missing context:** Alert says "service error" but not which service or why

---

## ⭐ 4.4 SRE and Error Budgets

### 🪜 Service Level Indicators (SLIs)

- Quantitative measure of service quality
- Example: "Proportion of HTTP requests served successfully"

### 🪜 Service Level Objectives (SLOs)

- Target reliability level
- Example: "99.9% of requests succeed within 200ms"

### 🪜 Service Level Agreements (SLAs)

- Contract with customers; breach may have penalties
- Example: "If availability drops below 99.5%, service credit applies"

### 🔷 Error Budget

- **Definition:** Allowed unreliability = 100% - SLO target
- **Example:** 99.9% SLO = 0.1% error budget
- **Usage:** If error budget is exhausted, halt feature releases and focus on reliability

### 🔷 Error Budget Policy

```
Error budget consumed | Action
----------------------|--------
0-25%                 | Normal operations
25-50%                | Investigate root cause
50-75%                | Freeze non-critical releases
75-100%               | All hands on reliability; stop releases
```

---

## ⭐ 4.5 Chaos Engineering

### 🔷 Definition

Chaos engineering is the discipline of experimenting on a system to build confidence in its capability to withstand turbulent conditions.

### 📜 Principles

1. **Build a hypothesis:** "If we lose a database node, the system remains available"
2. **Run small experiments:** Start in dev/test, progress to production
3. **Minimize blast radius:** Test on a small subset of traffic
4. **Have abort criteria:** Stop experiment if user impact exceeds threshold
5. **Measure and learn:** Validate or invalidate the hypothesis

### 🔷 Common Experiments

| Experiment | What It Tests |
|------------|---------------|
| **Instance failure** | Auto-scaling and failover |
| **Network latency** | Timeout handling, circuit breakers |
| **Packet loss** | Retry logic, graceful degradation |
| **Disk fill** | Log rotation, cleanup procedures |
| **Time skew** | Certificate validation, token expiry |

### 🛠️ Tools

- Chaos Monkey (Netflix) — random instance termination
- Gremlin — comprehensive chaos engineering platform
- Litmus — Kubernetes-native chaos engineering

---

## ⭐ 4.6 Production Feedback Loops

### 🔷 Feedback Sources

| Source | Information | Action |
|--------|-------------|--------|
| **Error tracking** (Sentry, Rollbar) | Stack traces, affected users | Prioritize bug fixes |
| **Performance monitoring** (New Relic, Datadog) | Slow transactions, bottlenecks | Optimize hot paths |
| **User analytics** (Amplitude, Mixpanel) | Feature usage, drop-off points | Improve UX |
| **Support tickets** | User complaints, confusion | Fix usability issues |
| **A/B test results** | Conversion differences | Roll out winning variant |

### 🔷 Closing the Loop

1. **Observe:** Monitor production metrics
2. **Analyze:** Identify patterns and anomalies
3. **Prioritize:** Rank issues by user impact
4. **Fix:** Implement changes
5. **Validate:** Confirm improvement in production
6. **Share:** Document learnings for the team

---

## 💡 Worked Examples

### 💡 Worked Example 1: Alert Design

**Scenario:** Design an alert for a payment service.

**Bad alert:**
- "CPU usage > 80% for 5 minutes"
- Problem: High CPU may not affect users; noisy at peak traffic

**Good alert:**
- "Payment failure rate > 1% for 2 minutes"
- Context: Includes affected merchant IDs and error types
- Runbook: Link to incident response procedure

### 💡 Worked Example 2: Error Budget Calculation

**Scenario:** An API has a 99.95% availability SLO.

**Monthly error budget:**
- Total minutes in month: 43,200
- Allowed downtime: 43,200 × 0.05% = 21.6 minutes

**Current month status:**
| Incident | Duration | Budget Remaining |
|----------|----------|-----------------|
| Start | — | 21.6 min |
| DB failover | 5 min | 16.6 min |
| Deployment rollback | 3 min | 13.6 min |
| Third-party outage | 10 min | 3.6 min |

**Decision:** With only 3.6 minutes remaining, halt non-critical releases.

### 💡 Worked Example 3: Chaos Engineering Experiment

**Scenario:** Test ecommerce checkout resilience during database latency.

**Hypothesis:** "If database latency increases to 500ms, checkout completion rate remains above 95%"

**Experiment:**
1. Inject 500ms latency into database proxy
2. Monitor: checkout completion rate, error rate, cart abandonment
3. Abort if: completion rate drops below 90%

**Result:**
- Completion rate: 97% (hypothesis validated)
- Cart abandonment: increased 2% (acceptable)
- Timeout errors: 0.5% (within budget)

**Action:** No changes needed. Schedule quarterly re-test.
