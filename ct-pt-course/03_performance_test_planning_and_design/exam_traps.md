# Chapter 3 — Performance Test Planning and Design: Exam Traps

## Trap 1: Confusing Concurrent Users and Requests Per Second

**Trap:** 1,000 concurrent users with 10-second think time generate far fewer RPS than 1,000 simultaneous users with no think time.

**Example question:**
> A test plan specifies 1,000 concurrent users. The team expects 1,000 requests per second. The flaw is:
>
> A. 1,000 concurrent users always equals 1,000 RPS
> B. Concurrent users include think time, so actual RPS is much lower
> C. RPS is not relevant to performance testing
> D. 1,000 users is too few

**Correct answer:** B — With think time, only a fraction of concurrent users send requests at any moment. RPS = users / (response time + think time).

---

## Trap 2: Using Average Response Time for SLAs

**Trap:** Average can be skewed by outliers. Percentiles (P90, P95) are better for SLAs because they capture the experience of most users.

**Example question:**
> A system has response times: 1s, 1s, 1s, 1s, 10s. The average is 2.8s. For an SLA stating "most users should have sub-2-second response," the BEST metric is:
>
> A. Average = 2.8s (fails SLA)
> B. Median = 1s or P80 = 1s (passes SLA for most users)
> C. Minimum = 1s (passes SLA)
> D. Maximum = 10s (fails SLA)

**Correct answer:** B — Median or P80 shows that most users experience 1s. Average is skewed by one outlier.

---

## Trap 3: Forgetting Think Time in Workload Models

**Trap:** Zero think time creates unrealistic load. Real users pause between actions.

**Example question:**
> A performance test script sends requests as fast as the server responds, with no delays. The result will be:
>
> A. A realistic simulation of user behavior
> B. An unrealistic stress on the system that does not represent real usage
> C. More accurate than scripts with think time
> D. The only valid way to test

**Correct answer:** B — Zero think time = unrealistic. Real users have pauses for reading, thinking, and data entry.

---

## Trap 4: Using Production Data Without Anonymization

**Trap:** Production data contains sensitive information. Performance tests should use anonymized or synthetic data.

**Example question:**
> A team copies the production database directly to the test environment for performance testing. This is:
>
> A. Best practice — production data is the most realistic
> B. Risky — production data may contain sensitive customer information that violates privacy policies
> C. Required for accurate performance results
> D. Only a problem for functional testing

**Correct answer:** B — Production data in test environments violates privacy. Use anonymized or synthetic data.

---

## Trap 5: Expecting Linear Extrapolation from Scaled Environments

**Trap:** Results from scaled-down environments don't always extrapolate linearly to production. Coordination overhead, shared resources, and bottlenecks may behave differently.

**Example question:**
> A team tests on a server with 1/4 the CPU cores of production and gets 4x lower throughput. They conclude production will have exactly 4x throughput. This is:
>
> A. Correct — scaling is always linear
> B. Potentially incorrect — database locks, network limits, and coordination overhead may prevent linear scaling
> C. Required by ISTQB
> D. The only valid extrapolation method

**Correct answer:** B — Scaling is rarely perfectly linear. Bottlenecks may shift as resources change.
