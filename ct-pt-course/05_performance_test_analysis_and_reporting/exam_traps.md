# 🪤 Chapter 5 — Performance Test Analysis and Reporting: Exam Traps

## 🪤 Trap 1: Using Average Response Time Alone

**Trap:** Average is skewed by outliers. Always consider percentiles and distribution.

**Example question:**
> A system has an average response time of 1.5 seconds and a P95 of 8 seconds. For user experience assessment, the MOST important metric is:
>
> A. Average = 1.5s (acceptable)
> B. P95 = 8s (5% of users have terrible experience)
> C. Minimum = 0.5s (great performance)
> D. Throughput = 200 TPS (good capacity)

**Correct answer:** B — P95 shows 5% of users wait 8+ seconds. Average hides this problem.

---

## 🪤 Trap 2: Thinking Errors Mean the Test Failed

**Trap:** Some errors under stress are expected and acceptable. The context (test type, load level) matters.

**Example question:**
> A stress test at 3x normal load shows 5% error rate. The team concludes the system is broken. The BEST interpretation is:
>
> A. The system is completely unusable
> B. Stress testing intentionally exceeds capacity; some errors at extreme load are expected and reveal where the system breaks
> C. No errors are ever acceptable
> D. The test should be stopped immediately

**Correct answer:** B — Stress tests push beyond limits. Errors reveal breaking points. The question is whether recovery is graceful.

---

## 🪤 Trap 3: Recommending Hardware Before Software Fixes

**Trap:** Hardware upgrades are expensive and may not address the root cause. Software/configuration fixes should usually come first.

**Example question:**
> A slow query is doing a full table scan. The team's first recommendation is to buy a faster database server. This is:
>
> A. The best approach — hardware solves everything
> B. Likely premature — adding an index (software fix) is cheaper and more effective
> C. Required by performance testing standards
> D. The only way to fix a slow query

**Correct answer:** B — Software fixes (indexes, query optimization) should come before hardware upgrades.

---

## 🪤 Trap 4: Confusing Correlation and Causation

**Trap:** Two metrics may correlate without one causing the other. Root cause analysis must prove causation.

**Example question:**
> During a test, disk I/O spikes at the same time response time degrades. The team concludes disk I/O causes slow response time. However, the disk spikes are caused by a background backup job. The actual cause of slow response is CPU saturation. This demonstrates:
>
> A. Disk I/O always causes slow response
> B. Correlation does not prove causation — further investigation was needed
> C. Backups should never run during tests
> D. CPU is never the bottleneck

**Correct answer:** B — Correlation ≠ causation. Always investigate the actual causal chain.

---

## 🪤 Trap 5: Reporting Raw Numbers Without Context

**Trap:** Stakeholders need interpretation, not just raw metrics. A report should say what the numbers mean and what to do about them.

**Example question:**
> A performance report lists 50 metrics with no conclusions or recommendations. The PRIMARY weakness is:
>
> A. It has too much data
> B. It lacks analysis, conclusions, and actionable recommendations for stakeholders
> C. The metrics are wrong
> D. It should only have 10 metrics

**Correct answer:** B — Raw data without analysis and recommendations is not useful. Reports must interpret results and suggest actions.
