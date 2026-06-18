# ❓ Chapter 5 — Performance Test Analysis and Reporting: Practice Questions

---

### 🔷 Q1 (PT-5.1, K2)

A P95 response time of 3 seconds means:

A. The average response time is 3 seconds
B. 95% of requests completed in less than 3 seconds
C. The slowest request took 3 seconds
D. 95 requests took 3 seconds

---

### 🔷 Q2 (PT-5.1, K2)

Which metric is MOST appropriate for a response time SLA?

A. Average response time
B. 95th percentile response time
C. Minimum response time
D. Total number of requests

---

### 🔷 Q3 (PT-5.2, K2)

The 5 Whys technique is used for:

A. Counting test iterations
B. Root cause analysis by repeatedly asking "why"
C. Measuring response time
D. Calculating throughput

---

### 🔷 Q4 (PT-5.3, K2)

Adding an index to a slow database query is an example of:

A. Hardware tuning
B. Software tuning
C. Configuration tuning
D. Architecture tuning

---

### 🔷 Q5 (PT-5.3, K2)

Increasing the JVM heap size is an example of:

A. Hardware tuning
B. Software tuning
C. Configuration tuning
D. Architecture tuning

---

### 🔷 Q6 (PT-5.1, K2)

Throughput plateauing while response time increases indicates:

A. The system is working efficiently
B. A bottleneck has been reached
C. The test is too short
D. The load generator is broken

---

### 🔷 Q7 (PT-5.2, K3)

A code profiler shows that method `processOrder()` consumes 60% of total execution time. This suggests:

A. The method is working correctly
B. The method is the primary optimization target
C. The profiler is wrong
D. The test has too few users

---

### 🔷 Q8 (PT-5.4, K2)

A management performance report should PRIMARILY include:

A. Detailed thread dump analysis
B. Executive summary, business impact, and go/no-go recommendation
C. Raw log files from all servers
D. Code-level method timings

---

### 🔷 Q9 (PT-5.1, K2)

A "connection timeout" error during a load test MOST likely indicates:

A. The database query is too fast
B. The server is not responding to new connections, likely due to overload
C. The network is too fast
D. The load generator has extra capacity

---

### 🔷 Q10 (PT-5.3, K2)

Which tuning approach should typically be tried FIRST?

A. Buy new hardware
B. Configuration changes (no code change required)
C. Rewrite the entire application architecture
D. Replace the database vendor

---

### 🔷 Q11 (PT-5.1, K2)

A consistent upward trend in memory usage during endurance testing indicates:

A. Normal behavior
B. A probable memory leak
C. Efficient garbage collection
D. Optimal performance

---

### 🔷 Q12 (PT-5.2, K2)

Component isolation in root cause analysis means:

A. Testing the entire system at once
B. Testing individual components separately to identify which is causing the issue
C. Isolating testers from developers
D. Running tests in isolation from the network

---

### 🔷 Q13 (PT-5.4, K2)

A trend report comparing performance across releases is used to:

A. Track developer productivity
B. Detect performance regressions introduced by new code
C. Measure user satisfaction
D. Calculate marketing ROI

---

### 🔷 Q14 (PT-5.1, K3)

Response times: [1s, 1s, 1s, 1s, 10s]. Which statement is TRUE?

A. Average = 2.8s, which accurately represents typical user experience
B. Median = 1s, showing most users have fast response
C. The test is invalid because of the outlier
D. Minimum = 10s

---

### 🔷 Q15 (PT-5.3, K3)

A team has a CPU bottleneck. They immediately order 2x the CPU cores. Without also optimizing the code, this approach:

A. Always solves the problem completely
B. May help but could be expensive; software optimization should usually be attempted first
C. Is the only valid solution
D. Is free

---

### 🔷 Q16 (PT-5.4, K2)

A technical performance report for developers should include:

A. Marketing budget recommendations
B. Detailed metrics, bottleneck identification, and code-level tuning recommendations
C. Stock price analysis
D. Employee satisfaction scores

---

### 🔷 Q17 (PT-5.2, K2)

Correlation analysis in performance testing involves:

A. Finding relationships between metrics and events to identify potential causes
B. Counting the number of users
C. Measuring network bandwidth
D. Calculating the average response time

---

### 🔷 Q18 (PT-5.1, K2)

A throughput of 200 TPS at 1,000 users and 210 TPS at 2,000 users indicates:

A. Linear scalability
B. A bottleneck has likely been reached near 1,000 users
C. The system can handle unlimited users
D. The test is too short

---

### 🔷 Q19 (PT-5.4, K2)

When reporting performance results, recommendations should be:

A. Vague to allow flexibility
B. Specific, prioritized, and include expected impact
C. Limited to one option
D. Written only for technical audiences

---

### 🔷 Q20 (PT-5.3, K3)

Which is a software tuning approach?

A. Adding more RAM
B. Optimizing a slow database query by adding an index
C. Increasing network bandwidth
D. Buying a faster CPU

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** P95 = 95% of requests are faster than this value.

### 🔷 Q2
**Answer: B**

**Rationale:** Percentiles (P90, P95) are best for SLAs. Average is skewed.

### 🔷 Q3
**Answer: B**

**Rationale:** 5 Whys = root cause analysis by repeatedly asking why.

### 🔷 Q4
**Answer: B**

**Rationale:** Adding index = software tuning (code/database optimization).

### 🔷 Q5
**Answer: C**

**Rationale:** JVM heap size = configuration tuning (no code change).

### 🔷 Q6
**Answer: B**

**Rationale:** Throughput plateau + response time increase = bottleneck reached.

### 🔷 Q7
**Answer: B**

**Rationale:** 60% execution time = primary optimization target.

### 🔷 Q8
**Answer: B**

**Rationale:** Management report = summary, business impact, go/no-go.

### 🔷 Q9
**Answer: B**

**Rationale:** Connection timeout = server not responding, likely overloaded.

### 🔷 Q10
**Answer: B**

**Rationale:** Configuration changes = first (no code, low risk, quick).

### 🔷 Q11
**Answer: B**

**Rationale:** Growing memory over time = probable memory leak.

### 🔷 Q12
**Answer: B**

**Rationale:** Component isolation = test components separately.

### 🔷 Q13
**Answer: B**

**Rationale:** Trend report = detect performance regressions across releases.

### 🔷 Q14
**Answer: B**

**Rationale:** Median = 1s (most users fast). Average skewed by outlier.

### 🔷 Q15
**Answer: B**

**Rationale:** Hardware first = expensive. Software optimization should be tried first.

### 🔷 Q16
**Answer: B**

**Rationale:** Technical report = detailed metrics, bottlenecks, code-level fixes.

### 🔷 Q17
**Answer: A**

**Rationale:** Correlation analysis = find relationships between metrics/events.

### 🔷 Q18
**Answer: B**

**Rationale:** Throughput barely increases = bottleneck near 1,000 users.

### 🔷 Q19
**Answer: B**

**Rationale:** Recommendations = specific, prioritized, with expected impact.

### 🔷 Q20
**Answer: B**

**Rationale:** Query optimization with index = software tuning.
