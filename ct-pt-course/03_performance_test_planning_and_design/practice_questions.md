# ❓ Chapter 3 — Performance Test Planning and Design: Practice Questions

---

### 🔷 Q1 (PT-3.1, K2)

A performance test strategy should include all of the following EXCEPT:

A. Test objectives and scope
B. KPIs and acceptance criteria
C. The complete source code of the application
D. Environment and schedule

---

### 🔷 Q2 (PT-3.2, K2)

A user profile in workload modeling describes:

A. The physical appearance of the user
B. A type of user and their typical actions and timing
C. The user's login credentials
D. The user's computer hardware

---

### 🔷 Q3 (PT-3.2, K2)

Think time in a performance test script represents:

A. The time the server takes to process requests
B. The time a simulated user spends between actions
C. The time to ramp up to full load
D. The duration of the test

---

### 🔷 Q4 (PT-3.4, K2)

The 95th percentile (P95) response time means:

A. 95% of requests are slower than this value
B. 95% of requests are faster than this value
C. The average response time is 95% of this value
D. 95 users experienced this response time

---

### 🔷 Q5 (PT-3.4, K2)

Which metric is LEAST appropriate for a response time SLA?

A. 90th percentile response time
B. Average response time
C. Minimum response time
D. 95th percentile response time

---

### 🔷 Q6 (PT-3.5, K2)

A baseline measurement is:

A. The maximum performance ever achieved
B. A measurement under known conditions used as a reference point
C. The minimum acceptable performance
D. A competitor's performance result

---

### 🔷 Q7 (PT-3.2, K3)

A workload model specifies all of the following EXCEPT:

A. Number and types of users
B. Transaction mix and think time
C. The programming language used to build the application
D. Arrival patterns (ramp-up, steady state)

---

### 🔷 Q8 (PT-3.4, K2)

Throughput is BEST measured as:

A. The number of concurrent users
B. The number of transactions or requests processed per unit of time
C. The average response time
D. The percentage of CPU utilization

---

### 🔷 Q9 (PT-3.6, K2)

For performance testing, test data should be:

A. The same for every virtual user to ensure consistency
B. Realistic, varied, and sufficient in volume
C. Minimal — just enough to run one test
D. Always copied directly from production without modification

---

### 🔷 Q10 (PT-3.7, K2)

A scaled-down test environment:

A. Always produces results identical to production
B. May require extrapolation, but results may not scale linearly
C. Is never appropriate for performance testing
D. Must be exactly half the size of production

---

### 🔷 Q11 (PT-3.2, K3)

A system has 500 concurrent users with an average think time of 20 seconds and average response time of 2 seconds. The approximate RPS is:

A. 500
B. 25
C. 250
D. 23

---

### 🔷 Q12 (PT-3.4, K2)

An SLA states "95% of search requests must complete within 2 seconds." The appropriate KPI is:

A. Average response time < 2 seconds
B. P95 response time < 2 seconds
C. Minimum response time < 2 seconds
D. Maximum response time < 2 seconds

---

### 🔷 Q13 (PT-3.5, K2)

Acceptance criteria for a performance test should be:

A. Defined after the test is run
B. Defined before testing begins
C. Left vague to allow flexibility
D. Based only on the tester's opinion

---

### 🔷 Q14 (PT-3.6, K2)

Which is a PRIMARY requirement for performance test data?

A. Must be identical to production data in every way
B. Must be realistic, varied, and at sufficient volume without exposing sensitive information
C. Should be minimal to save storage
D. Must be manually entered for accuracy

---

### 🔷 Q15 (PT-3.1, K2)

A performance test objective might be to:

A. Verify the login button is blue
B. Identify the system bottleneck under expected load
C. Check spelling on the homepage
D. Validate the company logo placement

---

### 🔷 Q16 (PT-3.3, K2)

A critical performance scenario is one that:

A. Tests only the homepage
B. Represents a high-frequency or business-critical user journey
C. Uses the minimum possible load
D. Runs for the shortest duration

---

### 🔷 Q17 (PT-3.4, K2)

Error rate in performance testing is calculated as:

A. Total errors divided by total requests
B. Total successful requests divided by total requests
C. The number of concurrent users
D. The average response time

---

### 🔷 Q18 (PT-3.7, K2)

Mocking external services in a performance test is appropriate when:

A. The external service is too slow to test against
B. The external service is not available or testing against it is expensive/impractical
C. You want to test the external service's performance
D. You have unlimited budget for external service calls

---

### 🔷 Q19 (PT-3.2, K2)

A stepped load profile is characterized by:

A. Constant load throughout the test
B. Load increasing in discrete steps, held for periods
C. Sudden spikes followed by immediate drops
D. Only ramp-up with no steady state

---

### 🔷 Q20 (PT-3.1, K3)

A team is planning performance testing for a new release. The FIRST activity should be:

A. Writing test scripts
B. Defining objectives, scope, and acceptance criteria
C. Running tests against production
D. Buying performance testing tools

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: C**

**Rationale:** Source code is not part of a test strategy.

### 🔷 Q2
**Answer: B**

**Rationale:** User profile = type of user + typical actions + timing.

### 🔷 Q3
**Answer: B**

**Rationale:** Think time = simulated user's time between actions.

### 🔷 Q4
**Answer: B**

**Rationale:** P95 = 95% of requests are FASTER than this value.

### 🔷 Q5
**Answer: C**

**Rationale:** Minimum response time is irrelevant for SLA. Average is poor (skewed). Percentiles are best.

### 🔷 Q6
**Answer: B**

**Rationale:** Baseline = known conditions reference point.

### 🔷 Q7
**Answer: C**

**Rationale:** Programming language is not part of a workload model.

### 🔷 Q8
**Answer: B**

**Rationale:** Throughput = transactions/requests per unit of time.

### 🔷 Q9
**Answer: B**

**Rationale:** Test data = realistic, varied, sufficient volume.

### 🔷 Q10
**Answer: B**

**Rationale:** Scaled-down = may need extrapolation, not always linear.

### 🔷 Q11
**Answer: D**

**Rationale:** RPS ≈ users / (response + think) = 500 / 22 ≈ 23.

### 🔷 Q12
**Answer: B**

**Rationale:** "95% of requests" = P95 metric.

### 🔷 Q13
**Answer: B**

**Rationale:** Acceptance criteria must be defined before testing.

### 🔷 Q14
**Answer: B**

**Rationale:** Test data = realistic, varied, sufficient, no sensitive info.

### 🔷 Q15
**Answer: B**

**Rationale:** Performance objective = identify bottlenecks.

### 🔷 Q16
**Answer: B**

**Rationale:** Critical scenario = high-frequency or business-critical journey.

### 🔷 Q17
**Answer: A**

**Rationale:** Error rate = total errors / total requests.

### 🔷 Q18
**Answer: B**

**Rationale:** Mock = when external service unavailable/expensive.

### 🔷 Q19
**Answer: B**

**Rationale:** Stepped = discrete steps held for periods.

### 🔷 Q20
**Answer: B**

**Rationale:** First activity = define objectives, scope, acceptance criteria.
