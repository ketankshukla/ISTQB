# 📝 CT-PT Mock Exam 2

**Instructions:**
- 40 questions, 60 minutes, single best answer, no negative marking

---

### 🔷 Q1

A system has response times: 1s, 1s, 1s, 1s, 10s. Which statement is TRUE?

A. Average = 2.8s, which accurately represents typical user experience
B. Median = 1s, showing most users have fast response
C. The test is invalid because of the outlier
D. Minimum = 10s

---

### 🔷 Q2

A team has a CPU bottleneck. They immediately order 2x the CPU cores. Without also optimizing the code, this approach:

A. Always solves the problem completely
B. May help but could be expensive; software optimization should usually be attempted first
C. Is the only valid solution
D. Is free

---

### 🔷 Q3

A technical performance report for developers should include:

A. Marketing budget recommendations
B. Detailed metrics, bottleneck identification, and code-level tuning recommendations
C. Stock price analysis
D. Employee satisfaction scores

---

### 🔷 Q4

Correlation analysis in performance testing involves:

A. Finding relationships between metrics and events to identify potential causes
B. Counting the number of users
C. Measuring network bandwidth
D. Calculating the average response time

---

### 🔷 Q5

A throughput of 200 TPS at 1,000 users and 210 TPS at 2,000 users indicates:

A. Linear scalability
B. A bottleneck has likely been reached near 1,000 users
C. The system can handle unlimited users
D. The test is too short

---

### 🔷 Q6

When reporting performance results, recommendations should be:

A. Vague to allow flexibility
B. Specific, prioritized, and include expected impact
C. Limited to one option
D. Written only for technical audiences

---

### 🔷 Q7

Which is a software tuning approach?

A. Adding more RAM
B. Optimizing a slow database query by adding an index
C. Increasing network bandwidth
D. Buying a faster CPU

---

### 🔷 Q8

A system shows slow response times, but the application server CPU is only 35%. The database server CPU is 90%. The bottleneck is likely:

A. The application server
B. The database server
C. The network
D. The load generator

---

### 🔷 Q9

The steady state phase of a performance test is when:

A. The target load is maintained consistently
B. All users are logging in
C. The system is shutting down
D. Only one user is active

---

### 🔷 Q10

Database lock contention is indicated by:

A. High CPU on the application server
B. High lock wait time and reduced throughput
C. Low network utilization
D. Fast query execution times

---

### 🔷 Q11

Ramp-down in a performance test is used to:

A. Increase load suddenly
B. Gradually remove load and observe system behavior as demand decreases
C. Keep load constant
D. Reset the database

---

### 🔷 Q12

Swap usage increasing during a performance test indicates:

A. Efficient memory use
B. Memory pressure — the system is running out of RAM
C. Fast disk performance
D. Network bandwidth issues

---

### 🔷 Q13

Which is a valid bottleneck analysis step?

A. Ignore all metrics and guess the cause
B. Identify saturated resources, drill down to processes/methods, correlate with transactions
C. Only check the application server CPU
D. Restart the server and hope it fixes itself

---

### 🔷 Q14

A test environment should be checked for stability before testing because:

A. It is a formal requirement
B. Other processes or issues may produce invalid test results
C. It makes the test longer
D. It ensures the environment is slower

---

### 🔷 Q15

Garbage collection (GC) pauses in a Java application are monitored because:

A. They improve performance
B. Frequent or long pauses impact response time and throughput
C. They reduce memory usage
D. They are irrelevant to performance

---

### 🔷 Q16

Connection pool exhaustion is indicated by:

A. Fast database queries
B. Requests waiting for database connections or connection acquisition timeouts
C. Low CPU on the database server
D. High network throughput

---

### 🔷 Q17

A team skips the warm-up phase to save time. The risk is:

A. No risk — warm-up is optional
B. Initial results will be artificially slow and may not represent steady-state performance
C. The test will run faster
D. The system will crash

---

### 🔷 Q18

Network saturation is indicated by:

A. High CPU on the database server
B. Network utilization > 70% and/or packet loss
C. Low disk queue length
D. Fast response times

---

### 🔷 Q19

Data reset between performance test runs is important because:

A. It makes the test longer
B. Leftover data from previous runs can affect subsequent results
C. It is required by the tool vendor
D. It deletes all production data

---

### 🔷 Q20

Which combination of metrics is MOST useful for identifying a database bottleneck?

A. Homepage color and font size
B. Database CPU, query execution time, connection pool usage, and lock waits
C. Number of testers and test duration
D. The weather and time of day

---

### 🔷 Q21

A workload model for an e-commerce site shows 60% of users are browsers, 25% searchers, and 15% buyers. This is an example of:

A. Transaction mix
B. User profile distribution
C. Think time calculation
D. Ramp-up configuration

---

### 🔷 Q22

An SLA states "95% of search requests must complete within 2 seconds." The appropriate KPI is:

A. Average response time < 2 seconds
B. P95 response time < 2 seconds
C. Minimum response time < 2 seconds
D. Maximum response time < 2 seconds

---

### 🔷 Q23

Acceptance criteria for a performance test should be:

A. Defined after the test is run
B. Defined before testing begins
C. Left vague to allow flexibility
D. Based only on the tester's opinion

---

### 🔷 Q24

Which is a PRIMARY requirement for performance test data?

A. Must be identical to production data in every way
B. Must be realistic, varied, and at sufficient volume without exposing sensitive information
C. Should be minimal to save storage
D. Must be manually entered for accuracy

---

### 🔷 Q25

If database queries slow down as the database size increases, this is likely a:

A. CPU bottleneck
B. Volume-related issue
C. Network issue
D. Configuration issue

---

### 🔷 Q26

The number of virtual users required for a test depends PRIMARILY on:

A. The tester's preference
B. The expected number of concurrent users in production
C. The number of available load generators
D. The size of the test environment

---

### 🔷 Q27

A closed workload model is characterized by:

A. A fixed number of users repeating transactions with think time between them
B. Users arriving at a fixed rate regardless of system response
C. Unlimited users entering the system
D. No think time between transactions

---

### 🔷 Q28

An open workload model is characterized by:

A. A fixed number of users
B. Users arriving at a rate independent of system response time
C. Users only logging in once
D. No concurrent users

---

### 🔷 Q29

Before a test run, it is important to:

A. Assume the environment is clean
B. Ensure the test environment is stable and application state is predictable
C. Only check the load generator
D. Skip environment checks to save time

---

### 🔷 Q30

Monitoring the load generator during a test is important to:

A. Reduce the load on the target system
B. Ensure the load generator itself is not the bottleneck
C. Monitor user satisfaction
D. Check network cabling

---

### 🔷 Q31

A component isolation test involves:

A. Testing all components simultaneously
B. Testing each component individually to find the source of a performance issue
C. Isolating the test team
D. Removing components from the system

---

### 🔷 Q32

Which is a valid reason to stop a performance test early?

A. The test is running too fast
B. The system shows critical errors or becomes unstable
C. The testers want to go home
D. The load generator is working well

---

### 🔷 Q33

The difference between concurrent users and simultaneous users is:

A. There is no difference
B. Concurrent users are logged in; simultaneous users are actively making requests at the same moment
C. Concurrent users are always higher
D. Simultaneous users include only administrators

---

### 🔷 Q34

Which is an example of an arrival pattern?

A. 100 users logging in simultaneously
B. Users arriving in a bell-shaped curve over time
C. One user performing all transactions
D. A fixed number of users repeating forever

---

### 🔷 Q35

Average response time is LESS useful than percentiles because:

A. It is harder to calculate
B. It can be skewed by a few very slow responses and does not reflect typical user experience
C. It is not supported by most tools
D. It only works for web applications

---

### 🔷 Q36

A stress test shows 5% errors at 3x normal load. The BEST interpretation is:

A. The system is completely unusable
B. Stress testing intentionally exceeds capacity; some errors reveal where the system breaks
C. No errors are ever acceptable
D. The test should be stopped immediately

---

### 🔷 Q37

Which is a characteristic of endurance testing?

A. Very short duration
B. Sustained load over an extended period to detect degradation over time
C. Sudden load spikes
D. Testing with minimal data

---

### 🔷 Q38

Configuration testing in performance testing means:

A. Testing different hardware and software configurations to find optimal settings
B. Testing the user interface layout
C. Testing with different network protocols
D. Testing only default configurations

---

### 🔷 Q39

A load test run shows P95 login = 1.2s, P95 transfer = 8.5s, error rate = 3%. The conclusion should be:

A. The system passes all criteria
B. The transfer endpoint has a problem requiring investigation
C. Login is too slow
D. Error rate is acceptable for all scenarios

---

### 🔷 Q40

Which statement about performance testing is TRUE?

A. Performance testing should only be done once before production release
B. Performance testing should be integrated throughout the development lifecycle
C. Performance testing replaces functional testing
D. Performance testing requires production data at all times

---

## 📝 End of Mock Exam 2
