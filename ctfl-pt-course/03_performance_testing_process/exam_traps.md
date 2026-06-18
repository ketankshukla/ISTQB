# 🪤 Chapter 3 — Performance Testing Process: Exam Traps

## 🪤 Trap 1: Production is the Best Test Environment

**Trap:** Production testing risks user impact; production-like is preferred.

**Example question:**
> Production is always the best environment for performance testing. This is:
>
> A. Correct — real users, real data
> B. Incorrect — production testing risks impacting real users; production-like staging is preferred for controlled, repeatable tests
> C. Only for small systems
> D. Only for internal tools

**Correct answer:** B — Production-like is safer.

---

## 🪤 Trap 2: Test Data Doesn't Matter

**Trap:** Unrealistic data leads to unrealistic results.

**Example question:**
> Performance test data has minimal impact on results. This is:
>
> A. Correct — the system behaves the same with any data
> B. Incorrect — data volume, distribution, and variety significantly affect query performance, cache behavior, and results
> C. Only for databases
> D. Only for file systems

**Correct answer:** B — Data matters significantly.

---

## 🪤 Trap 3: One Test Run is Sufficient

**Trap:** Multiple runs are needed for statistical validity.

**Example question:**
> A single performance test run is sufficient to make decisions. This is:
>
> A. Correct — one good run proves performance
> B. Incorrect — multiple runs are needed to account for variability; outliers and cache effects can skew single runs
> C. Only for stress tests
> D. Only for load tests

**Correct answer:** B — Multiple runs for validity.

---

## 🪤 Trap 4: All Bottlenecks are Code Issues

**Trap:** Bottlenecks can be infrastructure, configuration, or database issues.

**Example question:**
> Slow response time always means inefficient code. This is:
>
> A. Correct — code is the main performance driver
> B. Incorrect — bottlenecks can be infrastructure (network, disk), configuration (cache size, connection pool), or database (missing indexes)
> C. Only for interpreted languages
> D. Only for compiled languages

**Correct answer:** B — Bottlenecks have many causes.

---

## 🪤 Trap 5: Performance Reports Only Need Metrics

**Trap:** Reports need context, analysis, and recommendations.

**Example question:**
> A performance test report only needs to list the measured metrics. This is:
>
> A. Correct — metrics tell the story
> B. Incorrect — reports need objectives, methodology, analysis, bottlenecks, and actionable recommendations to be useful
> C. Only for technical audiences
> D. Only for management

**Correct answer:** B — Metrics alone are insufficient.
