# 🪤 Chapter 1 — Introduction to Performance Testing: Exam Traps

## 🪤 Trap 1: Performance Testing is Only Load Testing

**Trap:** Performance testing includes load, stress, spike, endurance, scalability, and volume testing.

**Example question:**
> Performance testing and load testing are the same thing. This is:
>
> A. Correct — they are synonyms
> B. Incorrect — load testing is one type of performance testing; others include stress, spike, endurance, and scalability testing
> C. Only for web applications
> D. Only for databases

**Correct answer:** B — Load testing is a subset.

---

## 🪤 Trap 2: Response Time Equals Throughput

**Trap:** Response time is duration per request; throughput is requests per unit time. They are related but distinct.

**Example question:**
> A system with low response time always has high throughput. This is:
>
> A. Correct — fast responses mean high throughput
> B. Incorrect — a system can process few requests very quickly (low throughput, low response time) or many requests slowly (high throughput, high response time)
> C. Only for small systems
> D. Only for large systems

**Correct answer:** B — They are independent metrics.

---

## 🪤 Trap 3: Performance Testing Only Happens at the End

**Trap:** Performance considerations should be included from requirements through production.

**Example question:**
> Performance testing should begin only after functional testing is complete. This is:
>
> A. Correct — function first, performance second
> B. Incorrect — performance requirements, architecture, and unit-level checks should happen throughout the lifecycle
> C. Only for agile teams
> D. Only for waterfall teams

**Correct answer:** B — Performance from the start.

---

## 🪤 Trap 4: Only One Metric Matters

**Trap:** Response time, throughput, and resource utilization must be analyzed together.

**Example question:**
> A system meets its response time target but has 95% CPU utilization. The assessment is:
>
> A. Pass — response time is the only important metric
> B. Fail or at-risk — high CPU utilization indicates the system is near capacity and may fail under slightly higher load
> C. Only for servers
> D. Only for clients

**Correct answer:** B — Look at all metrics together.

---

## 🪤 Trap 5: Performance Testing is a One-Time Activity

**Trap:** Systems change; continuous performance monitoring is needed.

**Example question:**
> Once a system passes performance testing, no further performance checks are needed. This is:
>
> A. Correct — testing proves performance
> B. Incorrect — new features, data growth, and infrastructure changes can degrade performance; continuous monitoring is needed
> C. Only for SaaS
> D. Only for on-premise

**Correct answer:** B — Performance degrades over time.
