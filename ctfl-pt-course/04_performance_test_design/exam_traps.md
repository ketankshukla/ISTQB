# 🪤 Chapter 4 — Performance Test Design: Exam Traps

## 🪤 Trap 1: Average Response Time is Sufficient

**Trap:** Percentiles (90th, 95th, 99th) are more meaningful than average.

**Example question:**
> Average response time fully describes user experience. This is:
>
> A. Correct — average is the standard metric
> B. Incorrect — percentiles (e.g., 90th, 95th) better represent user experience because averages can hide outliers and slow transactions
> C. Only for web apps
> D. Only for APIs

**Correct answer:** B — Percentiles matter more than average.

---

## 🪤 Trap 2: Think Time is Unimportant

**Trap:** Think time simulates realistic user behavior; zero think time creates unrealistic load.

**Example question:**
> Think time has no impact on test results. This is:
>
> A. Correct — users click instantly
> B. Incorrect — realistic think time reduces server load and creates more accurate workload models; zero think time creates unrealistic stress
> C. Only for mobile
> D. Only for desktop

**Correct answer:** B — Think time creates realistic load.

---

## 🪤 Trap 3: All Users Behave the Same

**Trap:** Different user profiles have different transaction patterns and think times.

**Example question:**
> A performance test with all users performing the same actions is sufficient. This is:
>
> A. Correct — uniformity simplifies testing
> B. Incorrect — real users have diverse behaviors; tests should include multiple profiles (browse, search, buy) with appropriate weightings
> C. Only for small sites
> D. Only for large sites

**Correct answer:** B — User diversity matters.

---

## 🪤 Trap 4: One Script Covers All Scenarios

**Trap:** Different scenarios need different scripts and data.

**Example question:**
> A single test script can validate all performance requirements. This is:
>
> A. Correct — one script is more efficient
> B. Incorrect — different scenarios (browse, search, checkout) have different resource impacts and need separate scripts
> C. Only for APIs
> D. Only for websites

**Correct answer:** B — Multiple scripts for different scenarios.

---

## 🪤 Trap 5: Metrics Can Be Collected After the Test

**Trap:** Monitoring must be active during execution to capture real-time data.

**Example question:**
> Performance metrics can be reconstructed from log files after the test completes. This is:
>
> A. Correct — logs contain all data
> B. Incorrect — real-time monitoring during execution captures metrics that may not be in logs (memory, CPU, network); logs may also be incomplete
> C. Only for stress tests
> D. Only for load tests

**Correct answer:** B — Monitor during execution.
