# ❓ Chapter 2 — Types of Performance Testing: Practice Questions

---

### 🔷 Q1 (PT-2.1, K2)

Load testing is PRIMARILY used to:

A. Find the system's breaking point
B. Validate system behavior under expected normal and peak load
C. Detect memory leaks over time
D. Test with extremely large datasets

---

### 🔷 Q2 (PT-2.2, K2)

Stress testing is BEST described as:

A. Testing at expected normal load
B. Testing beyond normal capacity to find the breaking point and evaluate recovery
C. Testing with sustained load over a long period
D. Testing with sudden bursts of traffic

---

### 🔷 Q3 (PT-2.3, K2)

Endurance (soak) testing is MOST likely to detect:

A. Slow response time under normal load
B. Memory leaks and resource exhaustion that develop over time
C. Immediate system crashes
D. Database indexing issues

---

### 🔷 Q4 (PT-2.4, K2)

Spike testing is appropriate when:

A. The system needs to run continuously for days
B. Sudden, extreme increases in load are expected
C. The database contains millions of records
D. The system needs to handle gradual user growth

---

### 🔷 Q5 (PT-2.5, K2)

Volume testing focuses on:

A. The number of concurrent users
B. System performance with large volumes of data
C. The speed of network connections
D. Hardware configuration variations

---

### 🔷 Q6 (PT-2.6, K2)

Scalability testing is used to determine:

A. How fast a single user can complete a task
B. Whether the system performance improves proportionally when resources are added
C. The system's behavior under sustained load
D. The exact breaking point of the system

---

### 🔷 Q7 (PT-2.2, K3)

A team gradually increases the number of users on a system until errors exceed 1%. This is:

A. Load testing
B. Stress testing
C. Endurance testing
D. Volume testing

---

### 🔷 Q8 (PT-2.4, K3)

A news website expects a sudden 50x traffic increase when breaking news occurs. The MOST appropriate test is:

A. Load testing at normal traffic
B. Spike testing with sudden traffic surge
C. Endurance testing for 72 hours
D. Volume testing with large article databases

---

### 🔷 Q9 (PT-2.3, K3)

A system's memory usage grows from 2GB to 16GB over 48 hours of normal operation. The BEST test to have run earlier is:

A. Load testing
B. Stress testing
C. Endurance testing
D. Scalability testing

---

### 🔷 Q10 (PT-2.5, K2)

A database query takes 200ms with 10,000 records but 5 seconds with 10 million records. This indicates a need for:

A. More application servers
B. Volume testing and query optimization
C. Stress testing with more users
D. Network bandwidth increase

---

### 🔷 Q11 (PT-2.6, K2)

A system handles 1,000 users on 1 server and 1,800 users on 2 servers. This demonstrates:

A. Linear scalability
B. Sub-linear scalability
C. No scalability
D. Perfect scalability

---

### 🔷 Q12 (PT-2.7, K2)

Configuration testing is used to:

A. Test different user loads
B. Evaluate performance under different hardware, software, or network configurations
C. Find memory leaks
D. Test with large data volumes

---

### 🔷 Q13 (PT-2.8, K2)

Isolation testing is MOST useful for:

A. Testing the entire system end-to-end
B. Identifying which specific component is causing a performance issue
C. Validating user interface performance
D. Testing with production-sized data

---

### 🔷 Q14 (PT-2.1, K2)

Which is a PRIMARY difference between load testing and stress testing?

A. Load testing uses more users
B. Load testing validates expected load; stress testing finds the breaking point
C. Stress testing is shorter
D. Load testing finds memory leaks

---

### 🔷 Q15 (PT-2.4, K3)

A flash sale on an e-commerce site causes a sudden 100x increase in checkout requests. The BEST test to prepare for this is:

A. Endurance testing
B. Spike testing
C. Volume testing
D. Configuration testing

---

### 🔷 Q16 (PT-2.3, K2)

Endurance testing should be run for:

A. A few minutes
B. Hours, days, or weeks
C. Only during business hours
D. Only when the system is idle

---

### 🔷 Q17 (PT-2.6, K2)

Horizontal scaling refers to:

A. Adding more CPU and memory to a single server
B. Adding more servers to a cluster
C. Increasing network bandwidth
D. Upgrading the database software

---

### 🔷 Q18 (PT-2.2, K2)

The PRIMARY goal of recovery testing after stress testing is to:

A. Measure response time during normal load
B. Verify the system can recover gracefully after being stressed to failure
C. Find memory leaks
D. Test with large datasets

---

### 🔷 Q19 (PT-2.5, K2)

Volume testing is MOST appropriate for:

A. A new system with an empty database
B. A system expected to accumulate years of data
C. A system with a fixed number of users
D. A system that only processes small files

---

### 🔷 Q20 (PT-2.1, K3)

A comprehensive performance test strategy for a new banking application should include all of the following EXCEPT:

A. Load testing at expected peak
B. Endurance testing for 48 hours
C. Stress testing to find the breaking point
D. Functional testing of login feature

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** Load testing = validate under expected normal and peak load.

### 🔷 Q2
**Answer: B**

**Rationale:** Stress testing = beyond normal capacity, breaking point, recovery.

### 🔷 Q3
**Answer: B**

**Rationale:** Endurance = sustained load, finds leaks and resource exhaustion over time.

### 🔷 Q4
**Answer: B**

**Rationale:** Spike = sudden extreme load increases.

### 🔷 Q5
**Answer: B**

**Rationale:** Volume = large data volumes.

### 🔷 Q6
**Answer: B**

**Rationale:** Scalability = performance improvement proportional to resource addition.

### 🔷 Q7
**Answer: B**

**Rationale:** Gradually increasing until failure = stress testing.

### 🔷 Q8
**Answer: B**

**Rationale:** Sudden 50x traffic = spike testing.

### 🔷 Q9
**Answer: C**

**Rationale:** Memory growth over time = endurance testing would have caught it.

### 🔷 Q10
**Answer: B**

**Rationale:** Query degradation with data size = volume testing + optimization needed.

### 🔷 Q11
**Answer: B**

**Rationale:** 2x servers → 1.8x users = sub-linear (not 2x = not linear).

### 🔷 Q12
**Answer: B**

**Rationale:** Configuration testing = different hardware/software/network configurations.

### 🔷 Q13
**Answer: B**

**Rationale:** Isolation = pinpoint which component causes issues.

### 🔷 Q14
**Answer: B**

**Rationale:** Load = expected; Stress = breaking point.

### 🔷 Q15
**Answer: B**

**Rationale:** Flash sale = sudden surge = spike testing.

### 🔷 Q16
**Answer: B**

**Rationale:** Endurance = hours, days, or weeks.

### 🔷 Q17
**Answer: B**

**Rationale:** Horizontal = adding servers (scale out).

### 🔷 Q18
**Answer: B**

**Rationale:** Recovery after stress = verify graceful recovery.

### 🔷 Q19
**Answer: B**

**Rationale:** Volume = system accumulating years of data.

### 🔷 Q20
**Answer: D**

**Rationale:** Functional testing is not a performance test type.
