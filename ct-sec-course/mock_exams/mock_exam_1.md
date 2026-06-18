# 📝 CT-SEC Mock Exam 1

**Instructions:**
- 40 questions, 60 minutes, single best answer, no negative marking

---

### 🔷 Q1

Which of the following is part of the CIA triad?

A. Authentication
B. Availability
C. Authorization
D. Auditing

---

### 🔷 Q2

A system encrypts all stored data but does not verify that data hasn't been tampered with. The PRIMARY missing security property is:

A. Confidentiality
B. Integrity
C. Availability
D. Authentication

---

### 🔷 Q3

The process of verifying a user's identity is called:

A. Authorization
B. Authentication
C. Auditing
D. Accounting

---

### 🔷 Q4

Defense in depth means:

A. Using one very strong security control
B. Employing multiple layers of security controls so that if one fails, others still provide protection
C. Making the system as complex as possible
D. Hiding the system design from attackers

---

### 🔷 Q5

A firewall that blocks unauthorized traffic is a:

A. Detective control
B. Preventive control
C. Corrective control
D. Compensating control

---

### 🔷 Q6

In STRIDE, "Spoofing" violates:

A. Integrity
B. Authentication
C. Confidentiality
D. Availability

---

### 🔷 Q7

An attacker modifies data in transit. This STRIDE threat is:

A. Spoofing
B. Tampering
C. Repudiation
D. Information Disclosure

---

### 🔷 Q8

In DREAD, "Exploitability" measures:

A. How much damage is caused
B. How easy it is to exploit the vulnerability
C. How many users are affected
D. How easy it is to discover

---

### 🔷 Q9

A penetration test with no knowledge of the target system is called:

A. White box
B. Gray box
C. Black box
D. Glass box

---

### 🔷 Q10

Testing that one user cannot access another user's resources at the same privilege level is:

A. Vertical privilege escalation testing
B. Horizontal privilege escalation testing
C. Session fixation testing
D. Brute force testing

---

### 🔷 Q11

Inputting `<script>alert('xss')</script>` tests for:

A. SQL injection
B. Cross-site scripting (XSS)
C. Command injection
D. Path traversal

---

### 🔷 Q12

A tool that analyzes source code without executing the program is:

A. DAST
B. SAST
C. IAST
D. WAF

---

### 🔷 Q13

Fuzzing is best described as:

A. Manual code review
B. Automated testing with invalid, unexpected, or random data
C. Social engineering attacks
D. Network scanning only

---

### 🔷 Q14

CVSS stands for:

A. Common Verification Security System
B. Common Vulnerability Scoring System
C. Certified Vulnerability Scanning Standard
D. Comprehensive Verification Scanning Service

---

### 🔷 Q15

In CVSS v3.1, a base score of 9.5 indicates:

A. Low severity
B. Medium severity
C. High severity
D. Critical severity

---

### 🔷 Q16

A false positive is:

A. A vulnerability that exists but was not detected
B. A test result that incorrectly indicates a vulnerability exists when it does not
C. A correct detection of a real vulnerability
D. A missed test case

---

### 🔷 Q17

OWASP ZAP is primarily a:

A. SAST tool
B. DAST tool
C. SCA tool
D. IAST tool

---

### 🔷 Q18

SonarQube is primarily a:

A. DAST tool
B. SAST tool
C. Network scanner
D. Fuzzing tool

---

### 🔷 Q19

A tool that scans for known vulnerabilities in open-source dependencies is:

A. SAST
B. DAST
C. SCA
D. IAST

---

### 🔷 Q20

The principle of least privilege states that:

A. All users should have administrator access
B. Users should be granted only the minimum access necessary for their function
C. Security should be invisible to users
D. Security controls should be expensive

---

### 🔷 Q21

A user successfully logs in but cannot access an admin function. This is a failure of:

A. Authentication
B. Authorization
C. Confidentiality
D. Integrity

---

### 🔷 Q22

An attacker gains admin privileges through a bug in the application. The STRIDE category is:

A. Spoofing
B. Tampering
C. Denial of Service
D. Elevation of Privilege

---

### 🔷 Q23

In an attack tree, an OR node means:

A. All child attacks must succeed
B. Any one child attack achieves the goal
C. At least two child attacks must succeed
D. No child attacks are valid

---

### 🔷 Q24

Risk is calculated as:

A. Threat + Vulnerability
B. Likelihood × Impact
C. Control - Asset Value
D. Attack × Defense

---

### 🔷 Q25

To test for SQL injection, a tester might input:

A. A valid username and password
B. `admin' OR '1'='1`
C. A very long password
D. A Unicode character

---

### 🔷 Q26

Which is a PRIMARY difference between SAST and DAST?

A. SAST analyzes code without execution; DAST tests running applications
B. SAST is faster than DAST
C. SAST is only for web applications
D. DAST requires source code access

---

### 🔷 Q27

IAST combines aspects of:

A. Firewall and antivirus
B. SAST and DAST by instrumenting running code
C. Penetration testing and auditing
D. Encryption and hashing

---

### 🔷 Q28

A security gate in CI/CD should:

A. Always pass to avoid delays
B. Block deployment if critical security thresholds are not met
C. Only run manually
D. Only check code style

---

### 🔷 Q29

The PRIMARY benefit of integrating security tools into CI/CD is:

A. Reducing the number of developers
B. Finding vulnerabilities early when they are cheaper to fix
C. Increasing build times
D. Eliminating the need for security teams

---

### 🔷 Q30

Separation of duties is important because:

A. It makes systems faster
B. It prevents one person from having complete control over a critical process
C. It reduces the number of employees needed
D. It simplifies the codebase

---

### 🔷 Q31

A threat with low likelihood and low impact should typically be:

A. Mitigated immediately
B. Accepted or monitored
C. Transferred to insurance
D. Avoided by shutting down

---

### 🔷 Q32

A CVSS temporal metric accounts for:

A. Only the code quality
B. Factors that change over time such as exploit availability
C. Only the number of users
D. Only the network location

---

### 🔷 Q33

After fixing a vulnerability, the next step should be:

A. Close the ticket immediately
B. Verification testing to confirm the fix works
C. Delete all test data
D. Announce the vulnerability publicly

---

### 🔷 Q34

A recorded performance test script typically requires:

A. No further modification before running with load
B. Cleanup, parameterization, and correlation
C. Only a different tool
D. Only more users

---

### 🔷 Q35

Which is a PRIMARY advantage of cloud-based performance testing?

A. It is always free
B. On-demand scaling to very large loads without maintaining infrastructure
C. It requires no internet connection
D. It only works for small applications

---

### 🔷 Q36

Which scripting approach gives the most control and maintainability?

A. Recorded scripts used without modification
B. Hand-coded scripts with proper parameterization and correlation
C. Scripts with hard-coded credentials
D. Scripts that include all browser resources

---

### 🔷 Q37

A performance gate in CI/CD is:

A. A physical security gate
B. An automated check that prevents deployment if performance degrades
C. A manual approval step
D. A network firewall

---

### 🔷 Q38

Correlation in performance testing scripts is used to:

A. Connect multiple test tools
B. Extract dynamic values from responses for use in subsequent requests
C. Compare test results
D. Generate random data

---

### 🔷 Q39

A team has a CPU bottleneck. They immediately order 2x the CPU cores. Without also optimizing the code, this approach:

A. Always solves the problem completely
B. May help but could be expensive; software optimization should usually be attempted first
C. Is the only valid solution
D. Is free

---

### 🔷 Q40

Which statement about security testing is TRUE?

A. Security testing should only be done once before production release
B. Security testing should be integrated throughout the development lifecycle
C. Security testing replaces functional testing
D. Security testing requires production data at all times

---

## 📝 End of Mock Exam 1
