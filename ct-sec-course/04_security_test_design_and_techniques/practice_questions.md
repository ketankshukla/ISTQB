# ❓ Chapter 4 — Security Test Design and Techniques: Practice Questions

---

### 🔷 Q1 (SEC-4.1, K2)

A penetration test with no knowledge of the target system is called:

A. White box
B. Gray box
C. Black box
D. Glass box

---

### 🔷 Q2 (SEC-4.1, K2)

The phase where a penetration tester gathers publicly available information is:

A. Exploitation
B. Reconnaissance
C. Post-exploitation
D. Reporting

---

### 🔷 Q3 (SEC-4.2, K2)

Testing that one user cannot access another user's resources at the same privilege level is:

A. Vertical privilege escalation testing
B. Horizontal privilege escalation testing
C. Session fixation testing
D. Brute force testing

---

### 🔷 Q4 (SEC-4.2, K2)

A user with regular permissions gains admin access. This is:

A. Horizontal privilege escalation
B. Vertical privilege escalation
C. Session hijacking
D. Phishing

---

### 🔷 Q5 (SEC-4.4, K2)

To test for SQL injection, a tester might input:

A. A valid username and password
B. `admin' OR '1'='1`
C. A very long password
D. A Unicode character

---

### 🔷 Q6 (SEC-4.4, K2)

Inputting `<script>alert('xss')</script>` tests for:

A. SQL injection
B. Cross-site scripting (XSS)
C. Command injection
D. Path traversal

---

### 🔷 Q7 (SEC-4.5, K2)

Fuzzing is best described as:

A. Manual code review
B. Automated testing with invalid, unexpected, or random data
C. Social engineering attacks
D. Network scanning only

---

### 🔷 Q8 (SEC-4.6, K2)

A tool that analyzes source code without executing the program is:

A. DAST
B. SAST
C. IAST
D. WAF

---

### 🔷 Q9 (SEC-4.6, K2)

A tool that tests a running application from the outside is:

A. SAST
B. DAST
C. IAST
D. SIEM

---

### 🔷 Q10 (SEC-4.6, K2)

IAST combines aspects of:

A. Firewall and antivirus
B. SAST and DAST by instrumenting running code
C. Penetration testing and auditing
D. Encryption and hashing

---

### 🔷 Q11 (SEC-4.2, K2)

Testing that a session token is invalidated after logout is:

A. Session fixation testing
B. Session management testing
C. Authentication testing
D. Authorization testing

---

### 🔷 Q12 (SEC-4.1, K2)

The PRIMARY difference between a vulnerability scan and a penetration test is:

A. Scans are always manual
B. Penetration tests attempt to exploit vulnerabilities to confirm they are real
C. Scans are more expensive
D. Penetration tests never find false positives

---

### 🔷 Q13 (SEC-4.4, K3)

An application validates input with a blacklist of known bad characters. The weakness is:

A. There is no weakness — blacklists are the best approach
B. Blacklists are incomplete; attackers can use encoding, variations, or unknown patterns to bypass them
C. Blacklists prevent all attacks
D. Blacklists are faster than whitelists

---

### 🔷 Q14 (SEC-4.2, K2)

Testing for credential stuffing involves:

A. Creating new accounts
B. Using known username/password pairs from previous breaches
C. Changing passwords
D. Encrypting credentials

---

### 🔷 Q15 (SEC-4.4, K2)

Output encoding is necessary because:

A. Input validation alone does not protect against all injection attacks in different contexts
B. It makes the output prettier
C. It replaces input validation
D. It is only needed for SQL

---

### 🔷 Q16 (SEC-4.6, K2)

SAST is typically performed:

A. Only after production deployment
B. During development, integrated into CI/CD
C. Only by external auditors
D. Only on running applications

---

### 🔷 Q17 (SEC-4.2, K2)

Session fixation is tested by:

A. Changing the session ID after login
B. Attempting to use a session ID provided before authentication after successful login
C. Deleting cookies
D. Using two browsers

---

### 🔷 Q18 (SEC-4.1, K2)

During a penetration test, attempting privilege escalation is part of:

A. Reconnaissance
B. Post-exploitation
C. Scanning
D. Planning

---

### 🔷 Q19 (SEC-4.5, K2)

Coverage-guided fuzzing:

A. Uses random inputs without any feedback
B. Prioritizes inputs that reach new code paths in the target application
C. Only tests valid inputs
D. Requires source code but no execution

---

### 🔷 Q20 (SEC-4.4, K2)

Path traversal is tested by inputting:

A. SQL commands
B. `../../../etc/passwd`
C. JavaScript code
D. Long strings

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: C**

**Rationale:** No knowledge = black box. White box = full knowledge. Gray box = partial.

### 🔷 Q2
**Answer: B**

**Rationale:** Public info gathering = reconnaissance phase.

### 🔷 Q3
**Answer: B**

**Rationale:** Same level, different user's data = horizontal privilege escalation.

### 🔷 Q4
**Answer: B**

**Rationale:** Regular to admin = higher privileges = vertical privilege escalation.

### 🔷 Q5
**Answer: B**

**Rationale:** `' OR '1'='1` = classic SQL injection test payload.

### 🔷 Q6
**Answer: B**

**Rationale:** `<script>` tag = XSS test payload.

### 🔷 Q7
**Answer: B**

**Rationale:** Fuzzing = automated random/invalid input testing.

### 🔷 Q8
**Answer: B**

**Rationale:** Source code analysis without execution = SAST.

### 🔷 Q9
**Answer: B**

**Rationale:** Testing running app from outside = DAST.

### 🔷 Q10
**Answer: B**

**Rationale:** IAST = SAST + DAST via instrumentation.

### 🔷 Q11
**Answer: B**

**Rationale:** Token invalidation after logout = session management testing.

### 🔷 Q12
**Answer: B**

**Rationale:** Pen tests exploit vulnerabilities; scans just identify them.

### 🔷 Q13
**Answer: B**

**Rationale:** Blacklists are incomplete; whitelists are preferred.

### 🔷 Q14
**Answer: B**

**Rationale:** Credential stuffing = breach credentials reused.

### 🔷 Q15
**Answer: A**

**Rationale:** Output encoding needed because input validation alone isn't enough for all contexts.

### 🔷 Q16
**Answer: B**

**Rationale:** SAST = during development, in CI/CD.

### 🔷 Q17
**Answer: B**

**Rationale:** Session fixation = pre-auth session ID persists after login.

### 🔷 Q18
**Answer: B**

**Rationale:** Privilege escalation after initial compromise = post-exploitation.

### 🔷 Q19
**Answer: B**

**Rationale:** Coverage-guided = prioritize inputs reaching new code paths.

### 🔷 Q20
**Answer: B**

**Rationale:** `../../../etc/passwd` = path traversal test payload.
