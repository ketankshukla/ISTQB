# 🪤 Chapter 5 — Performance and Scalability Testing for Big Data: Exam Traps

## 🪤 Trap 1: Confusing Throughput and Latency

**Trap:** Throughput = volume per time. Latency = time per unit. A system can have high throughput but high latency.

**Example question:**
> A pipeline processes 1TB per hour (high throughput) but each individual record takes 30 minutes to be available (high latency). For real-time fraud detection, this system:
>
> A. Is perfect because throughput is high
> B. Fails the latency requirement even though throughput is high
> C. Has no issues
> D. Needs more throughput

**Correct answer:** B — Fraud detection needs low latency. High throughput with high latency is unacceptable for real-time use cases.

---

## 🪤 Trap 2: Assuming Linear Scalability

**Trap:** Doubling cluster size rarely doubles throughput due to coordination, shuffle, and network overhead.

**Example question:**
> A team doubles their Spark cluster from 10 to 20 nodes and expects exactly 2x throughput. They achieve 1.7x. They conclude the system is broken. This is:
>
> A. Correct — it should be exactly 2x
> B. Incorrect — distributed systems have overhead; sub-linear scaling is normal and expected
> C. Only true for Hadoop
> D. Only true for Spark

**Correct answer:** B — Overhead (shuffle, coordination, network) means scaling is rarely perfectly linear. 1.7x is reasonable.

---

## 🪤 Trap 3: Ignoring Data Skew

**Trap:** Uneven data distribution can make a job run slowly even if overall cluster resources are available.

**Example question:**
> A Spark job shows 90% cluster CPU idle but takes 2 hours. Investigation shows one task processing 90% of the data. The issue is:
>
> A. Not enough cluster nodes
> B. Data skew — one partition has disproportionate data
> C. The job is too simple
> D. Network is too fast

**Correct answer:** B — Data skew causes one task to dominate runtime while other nodes sit idle.

---

## 🪤 Trap 4: Testing Performance Without Baselines

**Trap:** Without a baseline, you can't tell if performance is good or bad, or if changes improved or degraded it.

**Example question:**
> A team optimizes a query and says it "runs faster." When asked for proof, they have no before/after measurements. The lesson is:
>
> A. Optimization is always good
> B. Performance testing requires baselines to measure improvement
> C. Queries don't need measurement
> D. Only measure after optimization

**Correct answer:** B — Baselines are essential for measuring and proving performance changes.

---

## 🪤 Trap 5: Confusing Horizontal and Vertical Scaling

**Trap:** Horizontal scaling = add machines. Vertical scaling = add power to existing machines.

**Example question:**
> A team adds 10 more servers to their Hadoop cluster to handle more data. This is:
>
> A. Vertical scaling
> B. Horizontal scaling
> C. Data compression
> D. Load balancing

**Correct answer:** B — Adding more machines = horizontal scaling (scale out).
