# Chapter 6 — Performance Analysis and Reporting: Exam Traps

## Trap 1: One Metric Identifies the Bottleneck

**Trap:** Bottlenecks require correlating multiple metrics across layers.

**Example question:**
> High CPU utilization alone proves a CPU bottleneck. This is:
>
> A. Correct — high CPU = CPU bottleneck
> B. Incorrect — must correlate with response time, throughput, and other metrics; high CPU with fast response may indicate efficient processing
> C. Only for web servers
> D. Only for databases

**Correct answer:** B — Correlation needed.

---

## Trap 2: Performance Reports Only Need Raw Data

**Trap:** Reports need analysis, context, and recommendations to be actionable.

**Example question:**
> A performance report should contain only the raw metrics collected during testing. This is:
>
> A. Correct — raw data is objective
> B. Incorrect — reports need analysis, bottleneck identification, and actionable recommendations to guide decisions
> C. Only for technical teams
> D. Only for management

**Correct answer:** B — Analysis + recommendations needed.

---

## Trap 3: All Recommendations Have Equal Priority

**Trap:** Recommendations should be prioritized by impact and effort.

**Example question:**
> All performance improvement recommendations should be implemented immediately. This is:
>
> A. Correct — all improvements help
> B. Incorrect — recommendations should be prioritized by business impact, risk, and implementation effort
> C. Only for small systems
> D. Only for large systems

**Correct answer:** B — Prioritize by impact and effort.

---

## Trap 4: Baseline Comparisons Are Optional

**Trap:** Baseline comparisons are essential for detecting performance changes.

**Example question:**
> Comparing results to a baseline is nice but not necessary. This is:
>
> A. Correct — current results speak for themselves
> B. Incorrect — baseline comparisons are essential to detect whether performance improved or degraded relative to a known state
> C. Only for regression testing
> D. Only for new features

**Correct answer:** B — Baseline comparison is essential.

---

## Trap 5: Bottlenecks Are Always in the Application Code

**Trap:** Bottlenecks can be in infrastructure, configuration, database, or network.

**Example question:**
> A performance bottleneck always means the application code needs optimization. This is:
>
> A. Correct — code is the primary performance driver
> B. Incorrect — bottlenecks can be infrastructure (CPU, memory, disk), configuration (cache size, connection pool), database (missing indexes), or network (bandwidth, latency)
> C. Only for interpreted languages
> D. Only for compiled languages

**Correct answer:** B — Bottlenecks have many causes.
