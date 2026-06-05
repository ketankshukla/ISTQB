# Chapter 1 — Introduction to Performance Testing: Exam Traps

## Trap 1: Confusing Performance Testing with Functional Testing

**Trap:** Performance testing validates speed, scalability, and stability — NOT correctness. A system can pass performance tests but have functional bugs.

**Example question:**
> A system responds to all requests in under 1 second under load. This means:
>
> A. The system has no defects
> B. The system meets its performance targets
> C. The system is functionally correct
> D. No further testing is needed

**Correct answer:** B — Fast response does not guarantee functional correctness. Functional testing is still required.

---

## Trap 2: Thinking Average Response Time Is Sufficient

**Trap:** Average response time can hide outliers. Percentiles (90th, 95th, 99th) are more meaningful for SLAs.

**Example question:**
> A system has an average response time of 1.5 seconds but 10% of users experience 8-second delays. For SLA purposes, the BEST metric is:
>
> A. Average response time
> B. 90th percentile response time
> C. Minimum response time
> D. Total throughput

**Correct answer:** B — 90th percentile captures the experience of the slowest 10% of users, which is critical for SLAs.

---

## Trap 3: Confusing Concurrent Users and Simultaneous Users

**Trap:** Concurrent users = active on the system (some idle). Simultaneous users = sending requests at the same moment. Simultaneous is a subset of concurrent.

**Example question:**
> A load test simulates 1,000 concurrent users with 10 seconds of think time between actions. The number of simultaneous users sending requests at any moment is:
>
> A. Exactly 1,000
> B. Likely much less than 1,000
> C. More than 1,000
> D. Zero

**Correct answer:** B — With think time, only a fraction of concurrent users are actively sending requests at any moment.

---

## Trap 4: Ignoring the Network in Response Time

**Trap:** Response time is end-to-end. Server processing is only one component. Network latency can be significant, especially for geographically distributed users.

**Example question:**
> A performance test shows server processing time of 200ms, but users report 2-second page loads. The MOST likely explanation is:
>
> A. The server processing measurement is wrong
> B. Network latency, client rendering, and other components account for the remaining 1,800ms
> C. The test environment is faster than production
> D. Users are lying about the delay

**Correct answer:** B — End-to-end response time includes network, client processing, and rendering, not just server time.

---

## Trap 5: Thinking All Systems Need the Same Performance Testing

**Trap:** Performance testing scope and intensity depend on the system's purpose, expected load, and criticality. A small internal tool needs less testing than a public e-commerce platform.

**Example question:**
> A team applies the same performance testing approach to a small internal reporting tool and a customer-facing payment system. This is:
>
> A. Appropriate — all systems deserve equal testing
> B. Inappropriate — the payment system warrants more rigorous performance testing due to higher load and business criticality
> C. Required by ISTQB standards
> D. The only way to ensure consistency

**Correct answer:** B — Performance testing should be risk-based and proportionate to the system's criticality and expected load.
