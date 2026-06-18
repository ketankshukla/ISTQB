# ❓ Chapter 1 — Introduction to Security Testing: Practice Questions

---

### 🔷 Q1 (SEC-1.1, K1)

Which of the following is part of the CIA triad?

A. Authentication
B. Availability
C. Authorization
D. Auditing

---

### 🔷 Q2 (SEC-1.1, K2)

A system encrypts all stored data but does not verify that data hasn't been tampered with. The PRIMARY missing security property is:

A. Confidentiality
B. Integrity
C. Availability
D. Authentication

---

### 🔷 Q3 (SEC-1.2, K2)

The process of verifying a user's identity is called:

A. Authorization
B. Authentication
C. Auditing
D. Accounting

---

### 🔷 Q4 (SEC-1.2, K2)

A user successfully logs in but cannot access an admin function. This is a failure of:

A. Authentication
B. Authorization
C. Confidentiality
D. Integrity

---

### 🔷 Q5 (SEC-1.3, K1)

A weakness in a system that could be exploited is called a:

A. Threat
B. Vulnerability
C. Risk
D. Countermeasure

---

### 🔷 Q6 (SEC-1.3, K2)

Risk is BEST defined as:

A. A piece of malicious code
B. The potential for loss when a threat exploits a vulnerability
C. A safeguard against attacks
D. An unauthorized user

---

### 🔷 Q7 (SEC-1.4, K2)

The PRIMARY reason security testing is needed in addition to functional testing is:

A. Functional testing is too slow
B. Functional testing verifies features work; security testing verifies features cannot be misused or bypassed
C. Security testing replaces functional testing
D. Functional testing is only for mobile apps

---

### 🔷 Q8 (SEC-1.5, K1)

Which OWASP category involves sending untrusted data to interpreters?

A. Broken Access Control
B. Cryptographic Failures
C. Injection
D. Security Misconfiguration

---

### 🔷 Q9 (SEC-1.5, K2)

Using components with known vulnerabilities is categorized under OWASP as:

A. Injection
B. Vulnerable and Outdated Components
C. Broken Access Control
D. Security Logging Failures

---

### 🔷 Q10 (SEC-1.2, K2)

Multi-factor authentication (MFA) primarily enhances:

A. Availability
B. Integrity
C. Confidentiality through stronger authentication
D. Non-repudiation only

---

### 🔷 Q11 (SEC-1.1, K2)

A hospital system ensures doctors can access patient records 24/7. This primarily demonstrates:

A. Confidentiality
B. Integrity
C. Availability
D. Authentication

---

### 🔷 Q12 (SEC-1.3, K2)

An attacker is a:

A. Vulnerability
B. Threat
C. Risk
D. Control

---

### 🔷 Q13 (SEC-1.5, K2)

Missing security hardening and default accounts are examples of:

A. Injection
B. Security Misconfiguration
C. Cryptographic Failures
D. Insecure Design

---

### 🔷 Q14 (SEC-1.6, K2)

A functional test for a login feature verifies that valid credentials grant access. A security test for the same feature would additionally verify:

A. The login page loads quickly
B. SQL injection in the password field does not compromise the database
C. The page is visually appealing
D. The username field accepts 50 characters

---

### 🔷 Q15 (SEC-1.2, K2)

Non-repudiation is achieved through:

A. Password complexity rules
B. Digital signatures and tamper-proof audit logs
C. Firewalls
D. Load balancers

---

### 🔷 Q16 (SEC-1.3, K2)

A countermeasure is:

A. A type of vulnerability
B. A safeguard or action taken to reduce risk
C. A threat actor
D. A type of exploit

---

### 🔷 Q17 (SEC-1.5, K2)

An attacker tricks a user into performing an unwanted action on a web application. This is:

A. SQL Injection
B. Cross-Site Request Forgery (CSRF)
C. Cross-Site Scripting (XSS)
D. Broken Access Control

---

### 🔷 Q18 (SEC-1.1, K2)

A system prevents unauthorized modification of data. This is an example of:

A. Confidentiality
B. Integrity
C. Availability
D. Authentication

---

### 🔷 Q19 (SEC-1.4, K2)

Which is a PRIMARY objective of security testing?

A. Improve application performance
B. Identify vulnerabilities before attackers exploit them
C. Reduce the number of features
D. Make the user interface more attractive

---

### 🔷 Q20 (SEC-1.2, K2)

Role-Based Access Control (RBAC) is an example of:

A. Authentication
B. Authorization
C. Auditing
D. Encryption

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** CIA triad = Confidentiality, Integrity, Availability.

### 🔷 Q2
**Answer: B**

**Rationale:** Encryption = confidentiality. No tamper verification = missing integrity.

### 🔷 Q3
**Answer: B**

**Rationale:** Authentication = verifying identity.

### 🔷 Q4
**Answer: B**

**Rationale:** Login success = authentication OK. Missing access = authorization failure.

### 🔷 Q5
**Answer: B**

**Rationale:** Weakness that can be exploited = vulnerability.

### 🔷 Q6
**Answer: B**

**Rationale:** Risk = potential for loss when threat exploits vulnerability.

### 🔷 Q7
**Answer: B**

**Rationale:** Functional = features work. Security = features resist misuse/attacks.

### 🔷 Q8
**Answer: C**

**Rationale:** Untrusted data to interpreters = Injection (OWASP A03).

### 🔷 Q9
**Answer: B**

**Rationale:** Known vulnerable components = Vulnerable and Outdated Components (OWASP A06).

### 🔷 Q10
**Answer: C**

**Rationale:** MFA = stronger authentication = better access control = confidentiality.

### 🔷 Q11
**Answer: C**

**Rationale:** 24/7 access = availability.

### 🔷 Q12
**Answer: B**

**Rationale:** Attacker = potential cause of unwanted incident = threat.

### 🔷 Q13
**Answer: B**

**Rationale:** Missing hardening, default accounts = Security Misconfiguration (OWASP A05).

### 🔷 Q14
**Answer: B**

**Rationale:** Security test = verify attack resistance (SQL injection).

### 🔷 Q15
**Answer: B**

**Rationale:** Non-repudiation = digital signatures + tamper-proof logs.

### 🔷 Q16
**Answer: B**

**Rationale:** Countermeasure = safeguard to reduce risk.

### 🔷 Q17
**Answer: B**

**Rationale:** Tricking user into unwanted action = CSRF.

### 🔷 Q18
**Answer: B**

**Rationale:** Preventing unauthorized modification = integrity.

### 🔷 Q19
**Answer: B**

**Rationale:** Security testing = identify vulnerabilities before exploitation.

### 🔷 Q20
**Answer: B**

**Rationale:** RBAC = access based on roles = authorization.
