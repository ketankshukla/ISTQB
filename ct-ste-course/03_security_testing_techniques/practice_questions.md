# Chapter 3 — Security Testing Techniques: Practice Questions

---

### Q1 (STE-3.1, K2)

SAST analyzes:

A. Running applications
B. Source code without execution
C. Only network traffic
D. Only databases

---

### Q2 (STE-3.1, K2)

DAST requires:

A. Source code access
B. A running application
C. Only documentation
D. Only unit tests

---

### Q3 (STE-3.2, K2)

Code review for security should focus on:

A. Only indentation
B. Authentication, input validation, and error handling
C. Only comments
D. Only variable names

---

### Q4 (STE-3.3, K2)

Fuzzing involves:

A. Only valid inputs
B. Invalid, unexpected, or random data
C. Only manual testing
D. Only performance testing

---

### Q5 (STE-3.4, K2)

Penetration testing includes:

A. Only automated scanning
B. Reconnaissance, exploitation, and post-exploitation
C. Only code review
D. Only unit testing

---

### Q6 (STE-3.1, K2)

SCA identifies:

A. Only custom code issues
B. Vulnerable open-source dependencies
C. Only runtime issues
D. Only network issues

---

### Q7 (STE-3.2, K2)

Hard-coded credentials in source code are found by:

A. Only DAST
B. SAST and manual code review
C. Only fuzzing
D. Only load testing

---

### Q8 (STE-3.3, K2)

Coverage-guided fuzzing:

A. Randomly mutates inputs
B. Uses code coverage feedback to evolve inputs
C. Only for web apps
D. Only for APIs

---

### Q9 (STE-3.4, K2)

SQL injection is tested by:

A. Only reviewing code
B. Inputting malicious SQL and observing behavior
C. Only load testing
D. Only usability testing

---

### Q10 (STE-3.1, K2)

IAST provides:

A. Only static analysis
B. Context-aware runtime security analysis with fewer false positives
C. Only dependency scanning
D. Only network scanning

---

### Q11 (STE-3.2, K2)

Error handling should be tested for:

A. Only functional correctness
B. Information leakage that aids attackers
C. Only performance impact
D. Only UI appearance

---

### Q12 (STE-3.3, K2)

Generation-based fuzzing:

A. Mutates existing inputs
B. Creates inputs based on protocol specifications
C. Only for images
D. Only for text files

---

### Q13 (STE-3.4, K2)

Privilege escalation testing verifies:

A. Only login speed
B. Whether lower-privilege users can access higher-privilege functions
C. Only password strength
D. Only session timeout

---

### Q14 (STE-3.1, K2)

The best time to run SAST is:

A. After production deployment
B. During development and in CI/CD
C. Only before release
D. Only during maintenance

---

### Q15 (STE-3.2, K2)

Peer review of security-critical code:

A. Is unnecessary if SAST passes
B. Catches issues that automated tools miss
C. Only slows development
D. Only for junior developers

---

### Q16 (STE-3.3, K2)

XSS testing should verify:

A. Only server response time
B. That user input is encoded before rendering in the browser
C. Only database integrity
D. Only network encryption

---

### Q17 (STE-3.4, K2)

OSINT in penetration testing means:

A. Only internal network scanning
B. Gathering public information about the target
C. Only social engineering
D. Only code review

---

### Q18 (STE-3.1, K2)

DAST limitations include:

A. Finding all vulnerabilities
B. Limited code coverage and inability to find some business logic flaws
C. Only false positives
D. Only slow execution

---

### Q19 (STE-3.2, K2)

Weak cryptography in code review is identified by:

A. Only DAST
B. SAST detecting deprecated algorithms (MD5, SHA1, DES)
C. Only manual testing
D. Only performance testing

---

### Q20 (STE-3.3, K2)

CSRF is tested by:

A. Only SQL injection
B. Crafting malicious requests that exploit authenticated sessions
C. Only XSS
D. Only buffer overflow

---

## Answers and Rationales

### Q1
**Answer: B**
**Rationale:** SAST = source code, no execution.

### Q2
**Answer: B**
**Rationale:** DAST = running app.

### Q3
**Answer: B**
**Rationale:** Code review = auth, input validation, errors.

### Q4
**Answer: B**
**Rationale:** Fuzzing = invalid/random data.

### Q5
**Answer: B**
**Rationale:** Pen test = recon + exploit + post-exploit.

### Q6
**Answer: B**
**Rationale:** SCA = dependencies.

### Q7
**Answer: B**
**Rationale:** Hard-coded = SAST + manual.

### Q8
**Answer: B**
**Rationale:** Coverage-guided = coverage feedback.

### Q9
**Answer: B**
**Rationale:** SQLi = malicious input test.

### Q10
**Answer: B**
**Rationale:** IAST = context-aware runtime.

### Q11
**Answer: B**
**Rationale:** Error handling = info leakage.

### Q12
**Answer: B**
**Rationale:** Generation = protocol-based inputs.

### Q13
**Answer: B**
**Rationale:** Privilege escalation = low → high access.

### Q14
**Answer: B**
**Rationale:** SAST = dev + CI/CD.

### Q15
**Answer: B**
**Rationale:** Peer review = catches what SAST misses.

### Q16
**Answer: B**
**Rationale:** XSS = encode output.

### Q17
**Answer: B**
**Rationale:** OSINT = public info gathering.

### Q18
**Answer: B**
**Rationale:** DAST = limited coverage + logic.

### Q19
**Answer: B**
**Rationale:** Weak crypto = SAST detects deprecated.

### Q20
**Answer: B**
**Rationale:** CSRF = malicious authenticated requests.
