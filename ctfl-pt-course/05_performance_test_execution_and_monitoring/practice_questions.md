# ❓ Chapter 5 — Performance Test Execution and Monitoring: Practice Questions

---

### 🔷 Q1 (PT-5.1, K2)

A smoke test before performance testing:

A. Is unnecessary
B. Validates scripts and environment before full execution
C. Only measures peak load
D. Only checks network speed

---

### 🔷 Q2 (PT-5.2, K2)

APM tools measure:

A. Only CPU usage
B. Application-level performance metrics
C. Only disk space
D. Only memory size

---

### 🔷 Q3 (PT-5.3, K2)

CPU queue length should be:

A. Only measured occasionally
B. Less than twice the number of CPU cores
C. Only checked after tests
D. Only for servers

---

### 🔷 Q4 (PT-5.4, K2)

A sudden response time spike during steady state:

A. Should be ignored
B. May indicate a real issue and should be investigated
C. Only happens in stress tests
D. Only happens in load tests

---

### 🔷 Q5 (PT-5.5, K2)

Test environment isolation means:

A. Only physical separation
B. No other tests or users interfering
C. Only virtual separation
D. Only network separation

---

### 🔷 Q6 (PT-5.1, K2)

Post-test environment reset:

A. Is optional
B. Returns the system to a known state for future tests
C. Only deletes test data
D. Only restarts servers

---

### 🔷 Q7 (PT-5.2, K2)

Database monitors help identify:

A. Only user interface issues
B. Slow queries and database bottlenecks
C. Only network latency
D. Only client-side rendering

---

### 🔷 Q8 (PT-5.3, K2)

Memory paging indicates:

A. Fast memory access
B. Memory pressure and potential bottleneck
C. Only normal operation
D. Only idle system

---

### 🔷 Q9 (PT-5.4, K2)

An error rate jump to 5% during testing suggests:

A. Normal variation
B. A system issue requiring investigation
C. Only a monitoring glitch
D. Only expected behavior

---

### 🔷 Q10 (PT-5.5, K2)

Documenting test environment configuration:

A. Is unnecessary
B. Ensures reproducibility of results
C. Only for auditors
D. Only for managers

---

### 🔷 Q11 (PT-5.1, K2)

Real-time monitoring during execution:

A. Is only for post-test analysis
B. Allows immediate detection of issues
C. Only measures baseline
D. Only applies to endurance tests

---

### 🔷 Q12 (PT-5.2, K2)

Network analyzers capture:

A. Only application errors
B. Network traffic and latency issues
C. Only CPU usage
D. Only disk I/O

---

### 🔷 Q13 (PT-5.3, K2)

Disk queue depth above 2 indicates:

A. Fast disk performance
B. Disk I/O bottleneck
C. Only network issues
D. Only memory leaks

---

### 🔷 Q14 (PT-5.4, K2)

If CPU drops to near zero during a load test:

A. Performance is improving
B. A process may have crashed
C. Only a good sign
D. Only happens at low load

---

### 🔷 Q15 (PT-5.5, K2)

Consistency in test environment means:

A. Only using the same tools
B. Same configuration for each test run
C. Only same data
D. Only same time of day

---

### 🔷 Q16 (PT-5.1, K2)

Baseline capture before testing:

A. Is unnecessary
B. Provides a reference for comparison
C. Only measures errors
D. Only applies to stress tests

---

### 🔷 Q17 (PT-5.2, K2)

System monitors like PerfMon capture:

A. Only application metrics
B. OS-level CPU, memory, disk, and network metrics
C. Only database queries
D. Only user behavior

---

### 🔷 Q18 (PT-5.3, K2)

Packet loss above 0.1% indicates:

A. Excellent network
B. Network issues affecting performance
C. Only wireless networks
D. Only wired networks

---

### 🔷 Q19 (PT-5.4, K2)

Memory climbing steadily during an endurance test:

A. Is normal
B. May indicate a memory leak
C. Only happens with large data
D. Only happens at high load

---

### 🔷 Q20 (PT-5.5, K2)

A contingency plan for test interruption:

A. Is unnecessary
B. Ensures safe shutdown and data preservation
C. Only for long tests
D. Only for production

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**
**Rationale:** Smoke test = validate scripts + environment.

### 🔷 Q2
**Answer: B**
**Rationale:** APM = application-level metrics.

### 🔷 Q3
**Answer: B**
**Rationale:** Queue < 2x cores = healthy.

### 🔷 Q4
**Answer: B**
**Rationale:** Spike = investigate potential issue.

### 🔷 Q5
**Answer: B**
**Rationale:** Isolation = no interference.

### 🔷 Q6
**Answer: B**
**Rationale:** Reset = known state for future.

### 🔷 Q7
**Answer: B**
**Rationale:** DB monitor = slow queries + bottlenecks.

### 🔷 Q8
**Answer: B**
**Rationale:** Paging = memory pressure.

### 🔷 Q9
**Answer: B**
**Rationale:** 5% errors = investigate.

### 🔷 Q10
**Answer: B**
**Rationale:** Documentation = reproducibility.

### 🔷 Q11
**Answer: B**
**Rationale:** Real-time = immediate detection.

### 🔷 Q12
**Answer: B**
**Rationale:** Network analyzer = traffic + latency.

### 🔷 Q13
**Answer: B**
**Rationale:** Queue > 2 = disk bottleneck.

### 🔷 Q14
**Answer: B**
**Rationale:** CPU drop = possible crash.

### 🔷 Q15
**Answer: B**
**Rationale:** Consistency = same config each run.

### 🔷 Q16
**Answer: B**
**Rationale:** Baseline = reference point.

### 🔷 Q17
**Answer: B**
**Rationale:** System monitor = OS metrics.

### 🔷 Q18
**Answer: B**
**Rationale:** Packet loss > 0.1% = network issues.

### 🔷 Q19
**Answer: B**
**Rationale:** Memory climb = potential leak.

### 🔷 Q20
**Answer: B**
**Rationale:** Contingency = safe shutdown + data save.
