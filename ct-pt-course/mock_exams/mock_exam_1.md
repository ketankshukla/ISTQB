# 📝 CT-PT Mock Exam 1

**Instructions:**
- 40 questions, 60 minutes, single best answer, no negative marking

---

### 🔷 Q1

Performance testing is PRIMARILY concerned with:

A. Finding functional defects
B. Determining speed, scalability, and stability under workload
C. Verifying user interface layouts
D. Checking compliance with security standards

---

### 🔷 Q2

Response time is BEST defined as:

A. The time the server takes to process a request
B. The elapsed time between a user's request and the system's response
C. The time to write test scripts
D. The duration of a performance test

---

### 🔷 Q3

Throughput is measured in:

A. Seconds per transaction
B. Transactions per unit of time
C. Percentage of CPU usage
D. Number of concurrent users

---

### 🔷 Q4

Load testing is PRIMARILY used to:

A. Find the system's breaking point
B. Validate system behavior under expected normal and peak load
C. Detect memory leaks over time
D. Test with extremely large datasets

---

### 🔷 Q5

Stress testing is BEST described as:

A. Testing at expected normal load
B. Testing beyond normal capacity to find the breaking point and evaluate recovery
C. Testing with sustained load over a long period
D. Testing with sudden bursts of traffic

---

### 🔷 Q6

Endurance (soak) testing is MOST likely to detect:

A. Slow response time under normal load
B. Memory leaks and resource exhaustion that develop over time
C. Immediate system crashes
D. Database indexing issues

---

### 🔷 Q7

Spike testing is appropriate when:

A. The system needs to run continuously for days
B. Sudden, extreme increases in load are expected
C. The database contains millions of records
D. The system needs to handle gradual user growth

---

### 🔷 Q8

Volume testing focuses on:

A. The number of concurrent users
B. System performance with large volumes of data
C. The speed of network connections
D. Hardware configuration variations

---

### 🔷 Q9

Scalability testing is used to determine:

A. How fast a single user can complete a task
B. Whether the system performance improves proportionally when resources are added
C. The system's behavior under sustained load
D. The exact breaking point of the system

---

### 🔷 Q10

The 95th percentile (P95) response time means:

A. The average response time is 95% of this value
B. 95% of requests are faster than this value
C. The slowest request took this time
D. 95 requests took this response time

---

### 🔷 Q11

Which metric is LEAST appropriate for a response time SLA?

A. 90th percentile response time
B. Average response time
C. Minimum response time
D. 95th percentile response time

---

### 🔷 Q12

A workload model specifies all of the following EXCEPT:

A. Number and types of users
B. Transaction mix and think time
C. The programming language used to build the application
D. Arrival patterns (ramp-up, steady state)

---

### 🔷 Q13

Throughput is BEST measured as:

A. The number of concurrent users
B. The number of transactions or requests processed per unit of time
C. The average response time
D. The percentage of CPU utilization

---

### 🔷 Q14

For performance testing, test data should be:

A. The same for every virtual user to ensure consistency
B. Realistic, varied, and sufficient in volume
C. Minimal — just enough to run one test
D. Always copied directly from production without modification

---

### 🔷 Q15

A stepped load profile is characterized by:

A. Constant load throughout the test
B. Load increasing in discrete steps, held for periods
C. Sudden spikes followed by immediate drops
D. Only ramp-up with no steady state

---

### 🔷 Q16

The purpose of a warm-up phase before performance testing is to:

A. Let the testers rest
B. Allow the system to stabilize (caches, connections, JIT compilation)
C. Reduce the number of test users
D. Slow down the test execution

---

### 🔷 Q17

A CPU queue length greater than 2 per core typically indicates:

A. Efficient CPU usage
B. A CPU bottleneck with threads waiting for processing
C. Low CPU utilization
D. Optimal performance

---

### 🔷 Q18

Memory growing unbounded during an endurance test is a strong indicator of:

A. Efficient memory management
B. A memory leak
C. Too many concurrent users
D. Network saturation

---

### 🔷 Q19

Which metric indicates a disk I/O bottleneck?

A. CPU at 40%
B. Disk queue length > 2
C. Network at 30%
D. Memory at 60%

---

### 🔷 Q20

A bottleneck is BEST described as:

A. The fastest component in the system
B. A resource or component that limits overall system performance
C. A monitoring tool
D. The database server only

---

### 🔷 Q21

A P95 response time of 3 seconds means:

A. 95% of requests completed in less than 3 seconds
B. The average response time is 3 seconds
C. The slowest request took 3 seconds
D. 95 requests took 3 seconds

---

### 🔷 Q22

The 5 Whys technique is used for:

A. Counting test iterations
B. Root cause analysis by repeatedly asking "why"
C. Measuring response time
D. Calculating throughput

---

### 🔷 Q23

Adding an index to a slow database query is an example of:

A. Hardware tuning
B. Software tuning
C. Configuration tuning
D. Architecture tuning

---

### 🔷 Q24

Increasing the JVM heap size is an example of:

A. Hardware tuning
B. Software tuning
C. Configuration tuning
D. Architecture tuning

---

### 🔷 Q25

Throughput plateauing while response time increases indicates:

A. The system is working efficiently
B. A bottleneck has been reached
C. The test is too short
D. The load generator is broken

---

### 🔷 Q26

A management performance report should PRIMARILY include:

A. Detailed thread dump analysis
B. Executive summary, business impact, and go/no-go recommendation
C. Raw log files from all servers
D. Code-level method timings

---

### 🔷 Q27

Apache JMeter is an example of:

A. A commercial performance testing tool
B. An open-source performance testing tool
C. A proprietary database
D. A network monitoring tool

---

### 🔷 Q28

Correlation in performance testing scripts is used to:

A. Connect multiple test tools
B. Extract dynamic values from responses for use in subsequent requests
C. Compare test results
D. Generate random data

---

### 🔷 Q29

Parameterization in a performance test script means:

A. Using hard-coded values for all users
B. Using variable data for different virtual users
C. Removing all data from requests
D. Recording user actions

---

### 🔷 Q30

A performance gate in CI/CD is:

A. A physical security gate
B. An automated check that prevents deployment if performance degrades beyond a threshold
C. A manual approval step
D. A network firewall

---

### 🔷 Q31

Which is a PRIMARY advantage of cloud-based performance testing?

A. It is always free
B. On-demand scaling to very large loads without maintaining infrastructure
C. It requires no internet connection
D. It only works for small applications

---

### 🔷 Q32

A recorded performance test script typically requires:

A. No further modification before running with load
B. Cleanup, parameterization, and correlation before it can be used for realistic load testing
C. Only a different tool
D. Only more users

---

### 🔷 Q33

Which scripting approach gives the most control and maintainability?

A. Recorded scripts used without modification
B. Hand-coded scripts with proper parameterization and correlation
C. Scripts with hard-coded credentials
D. Scripts that include all browser resources

---

### 🔷 Q34

Distributed testing means:

A. Testing from a single machine
B. Distributing load generation across multiple machines to simulate higher load
C. Testing only distributed systems
D. Running tests at random times

---

### 🔷 Q35

A team tests at expected peak load and achieves acceptable results. They have completed:

A. Load testing
B. Stress testing
C. Endurance testing
D. All types of performance testing

---

### 🔷 Q36

A system handles 1,000 users on 1 server and 1,800 users on 2 servers. This demonstrates:

A. Linear scalability
B. Sub-linear scalability
C. No scalability
D. Perfect scalability

---

### 🔷 Q37

The PRIMARY difference between load and stress testing is:

A. Load testing uses more users
B. Load testing validates expected load; stress testing finds the breaking point
C. Stress testing is shorter
D. Load testing finds memory leaks

---

### 🔷 Q38

Think time in a performance test script should:

A. Always be zero for maximum load
B. Simulate realistic pauses between user actions
C. Be ignored by the tool
D. Only be used in stress tests

---

### 🔷 Q39

A "connection timeout" error during a load test MOST likely indicates:

A. The database query is too fast
B. The server is not responding to new connections, likely due to overload
C. The network is too fast
D. The load generator has extra capacity

---

### 🔷 Q40

Which tuning approach should typically be tried FIRST?

A. Buy new hardware
B. Configuration changes (no code change required)
C. Rewrite the entire application architecture
D. Replace the database vendor

---

## 📝 End of Mock Exam 1
