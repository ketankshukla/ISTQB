# 📂 Case Study 2 — API Load Testing

## 🎬 Scenario

A payment API must process 500 TPS with:
- Authorization: 60%
- Capture: 30%
- Refund: 10%
- Response time < 500ms
- 99.9% availability

## ❓ Questions

1. What is the primary test type needed?
2. How would you design the workload model?
3. What specific metrics matter for an API vs a web app?
4. How would you identify if the database is the bottleneck?

## ✔️ Model Answers

### 🔷 Q1
**Load testing** is primary, with **endurance testing** for 24/7 availability and **spike testing** for peak events like Black Friday.

### 🔷 Q2
| Parameter | Value |
|-----------|-------|
| Target throughput | 500 TPS |
| Transaction mix | Auth 60%, Capture 30%, Refund 10% |
| Payload size | Typical and edge case sizes |
| Authentication | OAuth2 token per virtual user |
| Duration | 4 hours |

### 🔷 Q3
API-specific metrics:
- **Latency percentiles** (p50, p95, p99) more important than averages
- **Throughput** in requests/second
- **Error rate** by HTTP status code
- **Payload size** impact on performance
- **Connection pool** utilization

### 🔷 Q4
Database bottleneck indicators:
- High disk queue depth (>2)
- Slow query log entries
- Database CPU > 80%
- Connection pool exhaustion
- Lock wait timeouts
