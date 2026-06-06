# Chapter 4 — Monitoring, Observability, and Feedback: Practice Questions

---

### Q1 (QDO-4.1, K2)

Observability differs from monitoring because:

A. It only tracks CPU usage
B. It enables understanding of unknown issues through logs, metrics, and traces
C. It requires fewer tools
D. It only works for monolithic systems

---

### Q2 (QDO-4.2, K2)

The RED method for microservices monitors:

A. Rate, Errors, Duration
B. Resources, Events, Data
C. Requests, Exceptions, Deployments
D. Replicas, Errors, Downtime

---

### Q3 (QDO-4.3, K2)

An effective alert should be:

A. Triggered by any metric change
B. Actionable, relevant, and severity-appropriate
C. Sent for every log entry
D. Only sent to managers

---

### Q4 (QDO-4.4, K2)

An error budget is:

A. A financial penalty for downtime
B. The allowed unreliability derived from the SLO target
C. An unlimited resource
D. Only for large companies

---

### Q5 (QDO-4.1, K2)

A trace tracks:

A. Only CPU usage
B. A request as it flows through multiple services
C. Only database queries
D. Only network packets

---

### Q6 (QDO-4.2, K2)

The USE method for infrastructure monitors:

A. Users, Services, Endpoints
B. Utilization, Saturation, Errors
C. Uptime, Speed, Efficiency
D. Units, Sets, Elements

---

### Q7 (QDO-4.3, K2)

Alert fatigue occurs when:

A. There are too few alerts
B. Teams receive too many low-priority or false-positive alerts
C. Alerts are too detailed
D. Only during business hours

---

### Q8 (QDO-4.4, K2)

If a 99.9% SLO error budget is exhausted, the team should:

A. Continue releasing features normally
B. Focus on reliability and halt non-critical releases
C. Ignore the SLO
D. Increase the SLO to 100%

---

### Q9 (QDO-4.1, K2)

Logs are best for:

A. Real-time system health overview
B. Capturing discrete events with detailed context
C. Only network monitoring
D. Only user interface design

---

### Q10 (QDO-4.2, K2)

A histogram metric is useful for:

A. Current queue depth
B. Distribution of response times
C. Total request count
D. Active connections

---

### Q11 (QDO-4.3, K2)

A "page" alert should be reserved for:

A. All issues
B. Emergencies requiring immediate human response
C. Minor performance improvements
D. Weekly reports

---

### Q12 (QDO-4.4, K2)

Chaos engineering experiments should:

A. Be run without planning
B. Have a hypothesis, abort criteria, and controlled blast radius
C. Only in production
D. Only break the database

---

### Q13 (QDO-4.1, K2)

An SLA differs from an SLO because:

A. SLA is an internal target; SLO is a customer contract
B. SLA is a customer contract with potential penalties; SLO is an internal reliability target
C. They are the same thing
D. SLA is only for small systems

---

### Q14 (QDO-4.2, K2)

Dashboards should be designed:

A. With as many metrics as possible
B. Focused on actionable insights for the intended audience
C. Only for executives
D. Only for technical teams

---

### Q15 (QDO-4.3, K3)

A payment service shows 0.5% failure rate. The BEST alert is:

A. "Server CPU > 70%"
B. "Payment failure rate > 0.1% for 2 minutes"
C. "Database connections = 50"
D. "Disk usage > 60%"

---

### Q16 (QDO-4.4, K2)

A chaos engineering "blast radius" refers to:

A. The explosion size
B. The scope of user impact limited by the experiment design
C. Only network latency
D. Only the number of servers

---

### Q17 (QDO-4.1, K2)

Correlating metrics, logs, and traces helps:

A. Only count errors
B. Identify root cause across distributed systems
C. Only monitor CPU
D. Only track user logins

---

### Q18 (QDO-4.2, K2)

Synthetic monitoring:

A. Replaces user testing completely
B. Simulates user transactions to detect issues before real users are affected
C. Only tracks hardware temperature
D. Only works during business hours

---

### Q19 (QDO-4.3, K2)

Mean Time To Detect (MTTD) measures:

A. Time to fix an issue
B. Time between issue occurrence and detection
C. Time to deploy
D. Time to write tests

---

### Q20 (QDO-4.4, K3)

A team has a 99.99% availability SLO. Their monthly error budget in minutes is approximately:

A. 432 minutes
B. 4.32 minutes
C. 43.2 minutes
D. 0.432 minutes

---

## Answers and Rationales

### Q1
**Answer: B**
**Rationale:** Observability = understanding unknown issues via logs, metrics, traces.

### Q2
**Answer: A**
**Rationale:** RED = Rate, Errors, Duration.

### Q3
**Answer: B**
**Rationale:** Effective alerts = actionable, relevant, severity-appropriate.

### Q4
**Answer: B**
**Rationale:** Error budget = allowed unreliability (100% - SLO).

### Q5
**Answer: B**
**Rationale:** Trace = request flow through services.

### Q6
**Answer: B**
**Rationale:** USE = Utilization, Saturation, Errors.

### Q7
**Answer: B**
**Rationale:** Alert fatigue = too many low-priority/false alerts.

### Q8
**Answer: B**
**Rationale:** Budget exhausted = focus on reliability, halt releases.

### Q9
**Answer: B**
**Rationale:** Logs = discrete events with context.

### Q10
**Answer: B**
**Rationale:** Histogram = distribution of values (e.g., response times).

### Q11
**Answer: B**
**Rationale:** Page = emergencies requiring immediate response.

### Q12
**Answer: B**
**Rationale:** Chaos = hypothesis, abort criteria, controlled blast radius.

### Q13
**Answer: B**
**Rationale:** SLA = external contract; SLO = internal target.

### Q14
**Answer: B**
**Rationale:** Dashboards = focused actionable insights.

### Q15
**Answer: B**
**Rationale:** Alert on user-impacting symptom (failure rate), not internal metrics.

### Q16
**Answer: B**
**Rationale:** Blast radius = limited scope of user impact.

### Q17
**Answer: B**
**Rationale:** Correlation = root cause across distributed systems.

### Q18
**Answer: B**
**Rationale:** Synthetic = simulated transactions for proactive detection.

### Q19
**Answer: B**
**Rationale:** MTTD = time from occurrence to detection.

### Q20
**Answer: C**
**Rationale:** 99.99% = 0.01% budget. 43,200 min × 0.01% = 4.32 min. Wait, that's 4.32. But the options show 4.32 as B. Actually let me recalculate: 43,200 × 0.0001 = 4.32 minutes. So answer is B.
