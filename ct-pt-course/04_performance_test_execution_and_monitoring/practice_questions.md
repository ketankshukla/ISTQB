# ❓ Chapter 4 — Performance Test Execution and Monitoring: Practice Questions

---

### 🔷 Q1 (PT-4.1, K2)

The purpose of a warm-up phase before performance testing is to:

A. Let the testers rest
B. Allow the system to stabilize (caches, connections, JIT compilation)
C. Reduce the number of test users
D. Slow down the test execution

---

### 🔷 Q2 (PT-4.1, K2)

During ramp-up, virtual users are:

A. Immediately all started at once
B. Gradually added to the test
C. Removed from the test
D. Kept at a constant level

---

### 🔷 Q3 (PT-4.2, K2)

A CPU queue length greater than 2 per core typically indicates:

A. Efficient CPU usage
B. A CPU bottleneck with threads waiting for processing
C. Low CPU utilization
D. Optimal performance

---

### 🔷 Q4 (PT-4.2, K2)

Memory growing unbounded during an endurance test is a strong indicator of:

A. Efficient memory management
B. A memory leak
C. Too many concurrent users
D. Network saturation

---

### 🔷 Q5 (PT-4.2, K2)

Which metric indicates a disk I/O bottleneck?

A. CPU at 40%
B. Disk queue length > 2
C. Network at 30%
D. Memory at 60%

---

### 🔷 Q6 (PT-4.3, K2)

A bottleneck is BEST described as:

A. The fastest component in the system
B. A resource or component that limits overall system performance
C. A monitoring tool
D. The database server only

---

### 🔷 Q7 (PT-4.2, K2)

The load generator should be monitored because:

A. It is the most important server
B. If it is saturated, it cannot generate accurate load and may produce misleading results
C. It always has the most memory
D. It is required by law

---

### 🔷 Q8 (PT-4.1, K2)

The steady state phase of a performance test is when:

A. The target load is maintained consistently
B. All users are logging in
C. The system is shutting down
D. Only one user is active

---

### 🔷 Q9 (PT-4.2, K2)

Database lock contention is indicated by:

A. High CPU on the application server
B. High lock wait time and reduced throughput
C. Low network utilization
D. Fast query execution times

---

### 🔷 Q10 (PT-4.2, K3)

A test shows slow response times, but the application server CPU is only 35%. The database server CPU is 90%. The bottleneck is likely:

A. The application server
B. The database server
C. The network
D. The load generator

---

### 🔷 Q11 (PT-4.1, K2)

Ramp-down in a performance test is used to:

A. Increase load suddenly
B. Gradually remove load and observe system behavior as demand decreases
C. Keep load constant
D. Reset the database

---

### 🔷 Q12 (PT-4.2, K2)

Swap usage increasing during a performance test indicates:

A. Efficient memory use
B. Memory pressure — the system is running out of RAM
C. Fast disk performance
D. Network bandwidth issues

---

### 🔷 Q13 (PT-4.3, K2)

Which is a valid bottleneck analysis step?

A. Ignore all metrics and guess the cause
B. Identify saturated resources, drill down to processes/methods, correlate with transactions
C. Only check the application server CPU
D. Restart the server and hope it fixes itself

---

### 🔷 Q14 (PT-4.4, K2)

A test environment should be checked for stability before testing because:

A. It is a formal requirement
B. Other processes or issues may produce invalid test results
C. It makes the test longer
D. It ensures the environment is slower

---

### 🔷 Q15 (PT-4.2, K2)

Garbage collection (GC) pauses in a Java application are monitored because:

A. They improve performance
B. Frequent or long pauses impact response time and throughput
C. They reduce memory usage
D. They are irrelevant to performance

---

### 🔷 Q16 (PT-4.2, K2)

Connection pool exhaustion is indicated by:

A. Fast database queries
B. Requests waiting for database connections or connection acquisition timeouts
C. Low CPU on the database server
D. High network throughput

---

### 🔷 Q17 (PT-4.1, K3)

A team skips the warm-up phase to save time. The risk is:

A. No risk — warm-up is optional
B. Initial results will be artificially slow and may not represent steady-state performance
C. The test will run faster
D. The system will crash

---

### 🔷 Q18 (PT-4.3, K2)

Network saturation is indicated by:

A. High CPU on the database server
B. Network utilization > 70% and/or packet loss
C. Low disk queue length
D. Fast response times

---

### 🔷 Q19 (PT-4.4, K2)

Data reset between performance test runs is important because:

A. It makes the test longer
B. Leftover data from previous runs can affect subsequent results
C. It is required by the tool vendor
D. It deletes all production data

---

### 🔷 Q20 (PT-4.2, K2)

Which combination of metrics is MOST useful for identifying a database bottleneck?

A. Homepage color and font size
B. Database CPU, query execution time, connection pool usage, and lock waits
C. Number of testers and test duration
D. The weather and time of day

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** Warm-up = system stabilization (caches, connections, JIT).

### 🔷 Q2
**Answer: B**

**Rationale:** Ramp-up = gradual addition of users.

### 🔷 Q3
**Answer: B**

**Rationale:** Queue length > 2 per core = CPU bottleneck.

### 🔷 Q4
**Answer: B**

**Rationale:** Unbounded memory growth = memory leak.

### 🔷 Q5
**Answer: B**

**Rationale:** Disk queue length > 2 = disk I/O bottleneck.

### 🔷 Q6
**Answer: B**

**Rationale:** Bottleneck = resource/component limiting overall performance.

### 🔷 Q7
**Answer: B**

**Rationale:** Saturated load generator = inaccurate load, misleading results.

### 🔷 Q8
**Answer: A**

**Rationale:** Steady state = target load maintained consistently.

### 🔷 Q9
**Answer: B**

**Rationale:** Lock contention = high lock wait time, reduced throughput.

### 🔷 Q10
**Answer: B**

**Rationale:** DB CPU 90% vs. app CPU 35% = database is the bottleneck.

### 🔷 Q11
**Answer: B**

**Rationale:** Ramp-down = gradual load removal, observe decreasing demand.

### 🔷 Q12
**Answer: B**

**Rationale:** Swap usage = memory pressure, running out of RAM.

### 🔷 Q13
**Answer: B**

**Rationale:** Bottleneck analysis = identify saturated resources, drill down, correlate.

### 🔷 Q14
**Answer: B**

**Rationale:** Environment instability = invalid results.

### 🔷 Q15
**Answer: B**

**Rationale:** GC pauses = impact response time and throughput.

### 🔷 Q16
**Answer: B**

**Rationale:** Pool exhaustion = requests waiting, timeouts.

### 🔷 Q17
**Answer: B**

**Rationale:** No warm-up = artificially slow initial results.

### 🔷 Q18
**Answer: B**

**Rationale:** Network saturation = utilization > 70%, packet loss.

### 🔷 Q19
**Answer: B**

**Rationale:** Data reset = prevent leftover data from affecting results.

### 🔷 Q20
**Answer: B**

**Rationale:** Database bottleneck = DB CPU, query time, connections, locks.
