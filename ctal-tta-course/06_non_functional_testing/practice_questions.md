# ❓ Chapter 6 — Non-Functional Testing: Practice Questions

---

### 🔷 Q1 (TTA-6.1, K2)

Which type of performance testing evaluates system behavior under expected user load?

A. Stress testing
B. Load testing
C. Spike testing
D. Soak testing

---

### 🔷 Q2 (TTA-6.2, K2)

SAST (Static Application Security Testing) analyzes:

A. A running application for exploitable vulnerabilities
B. Source code without executing it
C. Network traffic for malicious activity
D. User behavior for security risks

---

### 🔷 Q3 (TTA-6.1, K3)

Testing a system at 2x expected capacity to find its breaking point is:

A. Load testing
B. Stress testing
C. Volume testing
D. Scalability testing

---

### 🔷 Q4 (TTA-6.3, K2)

Availability is calculated as:

A. MTBF / (MTBF + MTTR)
B. MTTR / (MTBF + MTTR)
C. MTBF x MTTR
D. MTBF - MTTR

---

### 🔷 Q5 (TTA-6.2, K3)

Which security testing technique involves simulating real-world attacks on a running application?

A. SAST
B. DAST
C. Penetration testing
D. Fuzz testing

---

### 🔷 Q6 (TTA-6.1, K2)

Soak testing is primarily used to detect:

A. Memory leaks and gradual degradation over time
B. The maximum number of concurrent users
C. Sudden traffic spikes
D. Compatibility with different browsers

---

### 🔷 Q7 (TTA-6.2, K3)

A tool that sends random malformed inputs to an application to find crashes is:

A. A vulnerability scanner
B. A fuzz testing tool
C. A SAST tool
D. A performance profiler

---

### 🔷 Q8 (TTA-6.3, K2)

A system has MTBF = 500 hours and MTTR = 2 hours. The availability is approximately:

A. 96%
B. 99.6%
C. 99.96%
D. 99.996%

---

### 🔷 Q9 (TTA-6.4, K2)

Backward compatibility testing verifies that:

A. New version works with old data formats
B. Old version works with new data formats
C. Application works on all browsers
D. Application works on mobile devices

---

### 🔷 Q10 (TTA-6.1, K3)

Which metric is MOST relevant for measuring user-perceived performance?

A. CPU utilization
B. Response time at the 95th percentile
C. Lines of code
D. Database connection pool size

---

### 🔷 Q11 (TTA-6.2, K3)

Which security vulnerability occurs when user input is directly included in a database query without sanitization?

A. Cross-site scripting (XSS)
B. SQL injection
C. Cross-site request forgery (CSRF)
D. Insecure direct object reference

---

### 🔷 Q12 (TTA-6.1, K2)

Scalability testing evaluates:

A. System behavior under sudden load spikes
B. The system's ability to handle growth by adding resources
C. System behavior over extended periods
D. System behavior at maximum capacity

---

### 🔷 Q13 (TTA-6.5, K2)

Testing that a web application can be navigated using only a keyboard is part of:

A. Performance testing
B. Security testing
C. Accessibility testing
D. Load testing

---

### 🔷 Q14 (TTA-6.3, K3)

Failover testing verifies that:

A. The system never fails
B. Backup systems take over when the primary system fails
C. Data is encrypted at rest
D. Users can access the system from different locations

---

### 🔷 Q15 (TTA-6.2, K2)

DAST is performed:

A. During code compilation
B. On a running application
C. During requirements review
D. On source code without execution

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** Load testing evaluates behavior under expected user load.

### 🔷 Q2
**Answer: B**

**Rationale:** SAST analyzes source code without executing it.

### 🔷 Q3
**Answer: B**

**Rationale:** Stress testing pushes beyond expected capacity to find breaking points.

### 🔷 Q4
**Answer: A**

**Rationale:** Availability = MTBF / (MTBF + MTTR).

### 🔷 Q5
**Answer: C**

**Rationale:** Penetration testing simulates real-world attacks on running applications.

### 🔷 Q6
**Answer: A**

**Rationale:** Soak testing runs under sustained load to detect memory leaks and gradual degradation.

### 🔷 Q7
**Answer: B**

**Rationale:** Fuzz testing sends random/malformed inputs to find crashes and vulnerabilities.

### 🔷 Q8
**Answer: B**

**Rationale:** Availability = 500 / (500 + 2) = 500 / 502 = 0.996 = 99.6%.

### 🔷 Q9
**Answer: A**

**Rationale:** Backward compatibility = new version works with old data/formats.

### 🔷 Q10
**Answer: B**

**Rationale:** p95 response time measures the latency experienced by 95% of users.

### 🔷 Q11
**Answer: B**

**Rationale:** SQL injection occurs when unsanitized user input is included in database queries.

### 🔷 Q12
**Answer: B**

**Rationale:** Scalability testing evaluates the ability to handle growth by adding resources.

### 🔷 Q13
**Answer: C**

**Rationale:** Keyboard-only navigation testing is part of accessibility testing (WCAG operability).

### 🔷 Q14
**Answer: B**

**Rationale:** Failover testing verifies backup systems take over when primary systems fail.

### 🔷 Q15
**Answer: B**

**Rationale:** DAST tests running applications by simulating attacks.
