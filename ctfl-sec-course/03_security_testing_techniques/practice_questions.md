# Chapter 3 — Security Testing Techniques: Practice Questions

---

### Q1 (SEC-3.1, K2)

SAST analyzes:

A. Only running applications
B. Source code without execution
C. Only network traffic
D. Only user behavior

---

### Q2 (SEC-3.2, K2)

DAST requires:

A. Source code access
B. A running application
C. Only documentation
D. Only design specs

---

### Q3 (SEC-3.3, K2)

Black box penetration testing:

A. Has full system knowledge
B. Simulates an external attacker with no internal knowledge
C. Only tests internal networks
D. Only uses automated tools

---

### Q4 (SEC-3.4, K2)

Manual code review for security checks:

A. Only syntax errors
B. Input validation, authentication, session management, error handling
C. Only spelling
D. Only formatting

---

### Q5 (SEC-3.5, K2)

Fuzz testing sends:

A. Only valid inputs
B. Random, malformed, or unexpected inputs
C. Only expected outputs
D. Only login requests

---

### Q6 (SEC-3.1, K2)

Hardcoded credentials are found by:

A. Only DAST
B. SAST analyzing source code
C. Only manual testing
D. Only penetration testing

---

### Q7 (SEC-3.2, K2)

Security misconfiguration is found by:

A. Only SAST
B. DAST testing the running application
C. Only code review
D. Only unit testing

---

### Q8 (SEC-3.3, K2)

White box penetration testing:

A. Has no system knowledge
B. Has full knowledge of source code and architecture
C. Only tests from outside
D. Only uses automated scanners

---

### Q9 (SEC-3.4, K2)

Dependency checkers identify:

A. Only code style issues
B. Known vulnerabilities in third-party libraries
C. Only spelling errors
D. Only comment quality

---

### Q10 (SEC-3.5, K2)

Buffer overflows are commonly found by:

A. Only SQL injection tests
B. Fuzz testing with oversized inputs
C. Only XSS tests
D. Only CSRF tests

---

### Q11 (SEC-3.1, K2)

SAST is performed during:

A. Only production
B. Development phase
C. Only user acceptance
D. Only maintenance

---

### Q12 (SEC-3.2, K2)

DAST is performed on:

A. Source code only
B. A deployed running application
C. Only documentation
D. Only design diagrams

---

### Q13 (SEC-3.3, K2)

Grey box penetration testing:

A. Has full source code access
B. Has limited knowledge like a privileged user
C. Has no knowledge at all
D. Only uses automated tools

---

### Q14 (SEC-3.4, K2)

Automated code review tools:

A. Replace all manual review
B. Complement manual review by catching common issues
C. Only check spelling
D. Only format code

---

### Q15 (SEC-3.5, K2)

Generation-based fuzzing:

A. Only modifies valid inputs
B. Creates inputs from protocol specifications
C. Only sends random data
D. Only tests web forms

---

### Q16 (SEC-3.1, K3)

Missing input validation in dead code:

A. Found by both SAST and DAST
B. Found by SAST only
C. Found by DAST only
D. Found by neither

---

### Q17 (SEC-3.2, K2)

OWASP ZAP is an example of:

A. A SAST tool
B. A DAST tool
C. Only a network monitor
D. Only a password manager

---

### Q18 (SEC-3.3, K2)

Penetration testing reporting should include:

A. Only successful exploits
B. All findings with risk ratings and remediation steps
C. Only tool output
D. Only screenshots

---

### Q19 (SEC-3.4, K2)

Secure password storage in code review means:

A. Storing in plain text
B. Using bcrypt, Argon2, or PBKDF2 with salt
C. Only base64 encoding
D. Only MD5 hashing

---

### Q20 (SEC-3.5, K2)

Integer overflow vulnerabilities are found by:

A. Only SQL injection tests
B. Fuzz testing with boundary values
C. Only XSS tests
D. Only authentication tests

---

## Answers and Rationales

### Q1
**Answer: B**
**Rationale:** SAST = static analysis of source code.

### Q2
**Answer: B**
**Rationale:** DAST = dynamic, needs running app.

### Q3
**Answer: B**
**Rationale:** Black box = no internal knowledge.

### Q4
**Answer: B**
**Rationale:** Manual review = input + auth + session + errors.

### Q5
**Answer: B**
**Rationale:** Fuzzing = random/malformed/unexpected.

### Q6
**Answer: B**
**Rationale:** Hardcoded credentials = SAST finds in source.

### Q7
**Answer: B**
**Rationale:** Misconfiguration = DAST on running app.

### Q8
**Answer: B**
**Rationale:** White box = full knowledge.

### Q9
**Answer: B**
**Rationale:** Dependency checkers = third-party vulnerabilities.

### Q10
**Answer: B**
**Rationale:** Buffer overflow = fuzzing with large inputs.

### Q11
**Answer: B**
**Rationale:** SAST = development phase.

### Q12
**Answer: B**
**Rationale:** DAST = deployed running app.

### Q13
**Answer: B**
**Rationale:** Grey box = limited knowledge.

### Q14
**Answer: B**
**Rationale:** Automated = complement, not replace.

### Q15
**Answer: B**
**Rationale:** Generation = from protocol specs.

### Q16
**Answer: B**
**Rationale:** Dead code = SAST only (not executed).

### Q17
**Answer: B**
**Rationale:** OWASP ZAP = DAST tool.

### Q18
**Answer: B**
**Rationale:** Report = all findings + risk + remediation.

### Q19
**Answer: B**
**Rationale:** Secure = bcrypt/Argon2/PBKDF2 + salt.

### Q20
**Answer: B**
**Rationale:** Integer overflow = fuzzing boundaries.
