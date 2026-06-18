# ❓ Chapter 3 — Quality Characteristics: Practice Questions

---

### 🔷 Q1 (TA-3.5, K2)

A tester verifies that a user cannot view another user's account balance without authorization. This test validates which security sub-characteristic?

A. Integrity
B. Confidentiality
C. Availability
D. Authenticity

---

### 🔷 Q2 (TA-3.6, K2)

A system continues to process transactions when one server in a cluster fails because other servers automatically take over the workload. This demonstrates:

A. Recoverability
B. Fault Tolerance
C. Maturity
D. Availability

---

### 🔷 Q3 (TA-3.7, K2)

Which test is MOST appropriate for determining the maximum number of concurrent users a web application can support before response times become unacceptable?

A. Load Testing
B. Stress Testing
C. Endurance Testing
D. Volume Testing

---

### 🔷 Q4 (TA-3.2, K2)

A financial system calculates compound interest. A test case verifies that $10,000 at 6% for 1 year produces $10,618.00. This test primarily validates:

A. Suitability
B. Accuracy
C. Interoperability
D. Maintainability

---

### 🔷 Q5 (TA-3.4, K2)

A CRM system must exchange customer data with an email marketing platform using a REST API. Testing this data exchange validates:

A. Portability
B. Interoperability
C. Suitability
D. Efficiency

---

### 🔷 Q6 (TA-3.5, K3)

A tester enters the following into a search field: ' OR '1'='1' --. This is an example of testing for:

A. Cross-Site Scripting (XSS)
B. SQL Injection
C. Cross-Site Request Forgery (CSRF)
D. Buffer Overflow

---

### 🔷 Q7 (TA-3.8, K2)

Which of the following is MOST relevant to maintainability testing?

A. Response time under peak load
B. Ease of modifying code without introducing defects
C. Ability to prevent unauthorized access
D. Compatibility with multiple browsers

---

### 🔷 Q8 (TA-3.7, K2)

A test runs the system at expected load for 72 hours continuously to detect memory leaks. This is:

A. Load Testing
B. Stress Testing
C. Endurance Testing
D. Spike Testing

---

### 🔷 Q9 (TA-3.6, K2)

After a system crash, the database is restored from backup and all transactions from the last 24 hours are replayed. This process validates:

A. Fault Tolerance
B. Recoverability
C. Maturity
D. Availability

---

### 🔷 Q10 (TA-3.5, K2)

A system requires users to authenticate with both a password and a one-time code sent to their mobile device. This security mechanism addresses:

A. Confidentiality
B. Integrity
C. Authenticity
D. Non-repudiation

---

### 🔷 Q11 (TA-3.9, K2)

An application is tested on Windows 10, Windows 11, macOS Ventura, and Ubuntu 22.04. This testing validates:

A. Interoperability
B. Portability
C. Reliability
D. Suitability

---

### 🔷 Q12 (TA-3.3, K2)

A system is required to support all business processes defined in the user requirements document. Testing that all processes are supported validates:

A. Accuracy
B. Suitability
C. Interoperability
D. Maintainability

---

### 🔷 Q13 (TA-3.7, K2)

Which metric is MOST appropriate for measuring the efficiency of a transaction processing system?

A. Mean Time Between Failures (MTBF)
B. Transactions per second
C. Number of defects found
D. Percentage of code coverage

---

### 🔷 Q14 (TA-3.5, K3)

A tester notices that error messages display full SQL queries including table names and column names. This is a potential violation of:

A. Confidentiality
B. Integrity
C. Availability
D. Authenticity

---

### 🔷 Q15 (TA-3.6, K2)

A system guarantees 99.99% uptime, which allows no more than 52.6 minutes of downtime per year. This requirement addresses:

A. Efficiency
B. Reliability
C. Security
D. Portability

---

### 🔷 Q16 (TA-3.5, K2)

A security audit verifies that all user passwords are stored using salted hashing rather than plaintext. This validates:

A. Confidentiality
B. Integrity
C. Non-repudiation
D. Availability

---

### 🔷 Q17 (TA-3.8, K2)

A code review identifies that a module has cyclomatic complexity of 25. This finding is MOST relevant to:

A. Efficiency
B. Maintainability
C. Security
D. Suitability

---

### 🔷 Q18 (TA-3.7, K2)

A system must handle a sudden increase from 1,000 to 10,000 users within 5 minutes during a product launch. The appropriate test type is:

A. Load Testing
B. Stress Testing
C. Spike Testing
D. Volume Testing

---

### 🔷 Q19 (TA-3.4, K2)

A system exports data in both JSON and XML formats for integration with partner systems. Testing both formats validates:

A. Portability
B. Interoperability
C. Suitability
D. Accuracy

---

### 🔷 Q20 (TA-3.6, K2)

During testing, the system crashes once every 48 hours under normal load. This metric indicates a problem with:

A. Efficiency
B. Maturity
C. Portability
D. Suitability

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** Preventing unauthorized viewing of data is confidentiality. Integrity would prevent unauthorized modification. Availability ensures authorized access. Authenticity proves identity.

### 🔷 Q2
**Answer: B**

**Rationale:** Continuing to operate during a component failure is fault tolerance. Recoverability would be restoring the failed node after the failure. Availability is the result, but fault tolerance is the mechanism.

### 🔷 Q3
**Answer: B**

**Rationale:** Stress testing finds the breaking point beyond expected load. Load testing validates at expected load. Endurance testing runs sustained load over time. Volume testing uses large data volumes.

### 🔷 Q4
**Answer: B**

**Rationale:** Verifying the correctness of a calculation is accuracy testing. Suitability would verify that interest calculation exists as a feature. Interoperability would test data exchange. Maintainability relates to code quality.

### 🔷 Q5
**Answer: B**

**Rationale:** Exchanging data between systems is interoperability. Portability would be running the CRM on different platforms. Suitability is about feature appropriateness. Efficiency is about performance.

### 🔷 Q6
**Answer: B**

**Rationale:** The input ' OR '1'='1' -- is a classic SQL injection attack pattern that attempts to modify the query logic. XSS uses script tags. CSRF exploits authenticated sessions. Buffer overflow sends excessive data.

### 🔷 Q7
**Answer: B**

**Rationale:** Ease of modification is maintainability. Response time (A) is efficiency. Preventing unauthorized access (C) is security. Browser compatibility (D) is portability.

### 🔷 Q8
**Answer: C**

**Rationale:** Running at expected load for an extended period to find degradation is endurance testing. Load testing validates at expected load for shorter periods. Stress testing exceeds expected load. Spike testing tests sudden increases.

### 🔷 Q9
**Answer: B**

**Rationale:** Restoring the system and replaying transactions after a crash is recoverability. Fault tolerance would be operating during the crash. Maturity measures failure frequency. Availability measures operational time.

### 🔷 Q10
**Answer: C**

**Rationale:** Multi-factor authentication proves the user's identity (authenticity). Confidentiality protects data from viewing. Integrity prevents modification. Non-repudiation proves actions occurred.

### 🔷 Q11
**Answer: B**

**Rationale:** Testing on multiple operating systems is portability. Interoperability would be exchanging data with other systems. Reliability is about failure rates. Suitability is about feature appropriateness.

### 🔷 Q12
**Answer: B**

**Rationale:** Verifying that all required business processes are supported is suitability (functional completeness). Accuracy would verify correctness of process results. Interoperability tests data exchange. Maintainability relates to code quality.

### 🔷 Q13
**Answer: B**

**Rationale:** Transactions per second measures throughput and time behavior — key efficiency metrics. MTBF measures reliability. Defect count measures quality. Code coverage measures test completeness.

### 🔷 Q14
**Answer: A**

**Rationale:** Displaying SQL queries in error messages leaks system information, violating confidentiality (information disclosure). This aids attackers in crafting further attacks.

### 🔷 Q15
**Answer: B**

**Rationale:** Uptime percentage is a reliability (availability sub-characteristic) metric. Efficiency measures speed and resource usage. Security protects data. Portability relates to platform independence.

### 🔷 Q16
**Answer: A**

**Rationale:** Storing passwords as salted hashes protects them from being read by attackers (confidentiality). Even if the database is breached, passwords cannot be easily recovered. Integrity would prevent modification of the hash.

### 🔷 Q17
**Answer: B**

**Rationale:** High cyclomatic complexity makes code harder to understand, test, and modify — directly impacting maintainability. Efficiency relates to execution speed. Security relates to vulnerabilities. Suitability relates to features.

### 🔷 Q18
**Answer: C**

**Rationale:** A sudden load increase from 1,000 to 10,000 users is a spike. Spike testing validates the system's ability to handle sudden traffic increases. Load testing uses gradual increases. Stress testing exceeds capacity.

### 🔷 Q19
**Answer: B**

**Rationale:** Supporting multiple data formats for partner integration is interoperability. Portability would be running on different platforms. Suitability is about feature completeness. Accuracy is about correctness.

### 🔷 Q20
**Answer: B**

**Rationale:** Crashing once every 48 hours indicates frequent failures, which is a maturity problem (frequency of failure due to faults). Maturity is a sub-characteristic of reliability. Efficiency, portability, and suitability are unrelated.
