# Chapter 2 — Types of Performance Testing: Exam Traps

## Trap 1: Confusing Load Testing and Stress Testing

**Trap:** Load = expected load. Stress = beyond expected/breaking point.

**Example question:**
> A team tests a web application at 150% of expected peak load to find the point at which it fails. This is:
>
> A. Load testing
> B. Stress testing
> C. Endurance testing
> D. Spike testing

**Correct answer:** B — Testing beyond expected load to find the breaking point = stress testing.

---

## Trap 2: Confusing Endurance and Spike Testing

**Trap:** Endurance = sustained load over long time. Spike = sudden burst of load.

**Example question:**
> A team suddenly increases load from 100 to 10,000 users in 1 minute, then returns to 100 users. This is:
>
> A. Endurance testing
> B. Spike testing
> C. Load testing
> D. Volume testing

**Correct answer:** B — Sudden extreme increase in load = spike testing.

---

## Trap 3: Thinking Stress Testing Is for Routine Validation

**Trap:** Stress testing is NOT for routine validation. It's for finding breaking points and recovery behavior. Load testing is for routine performance validation.

**Example question:**
> A team runs stress tests weekly as part of regression. This is:
>
> A. Best practice — stress tests should always be run
> B. Inappropriate — stress tests are for finding breaking points, not routine regression; load tests are more appropriate for regular validation
> C. Required by all performance testing standards
> D. The only way to catch memory leaks

**Correct answer:** B — Stress tests are disruptive and resource-intensive. Load/endurance tests are better for routine regression.

---

## Trap 4: Confusing Volume Testing and Load Testing

**Trap:** Volume = large data amounts. Load = many users/requests. They test different things.

**Example question:**
> A team tests a database with 100 million records to measure query performance. This is:
>
> A. Load testing
> B. Volume testing
> C. Stress testing
> D. Scalability testing

**Correct answer:** B — Testing with large data volumes = volume testing.

---

## Trap 5: Thinking One Test Type Is Enough

**Trap:** Comprehensive performance validation requires multiple test types. No single test covers all risks.

**Example question:**
> A team runs only load tests and reports that performance is acceptable. They may have missed:
>
> A. Nothing — load tests cover all performance risks
> B. Memory leaks (endurance), sudden surge behavior (spike), and large data performance (volume)
> C. Only functional defects
> D. Only security issues

**Correct answer:** B — Load tests alone miss endurance, spike, and volume issues.
