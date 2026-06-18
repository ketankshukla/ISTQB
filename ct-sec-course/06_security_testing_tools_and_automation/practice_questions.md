# ❓ Chapter 6 — Security Testing Tools and Automation: Practice Questions

---

### 🔷 Q1 (SEC-6.1, K2)

SonarQube is primarily a:

A. DAST tool
B. SAST tool
C. Network scanner
D. Fuzzing tool

---

### 🔷 Q2 (SEC-6.2, K2)

OWASP ZAP is primarily a:

A. SAST tool
B. DAST tool
C. SCA tool
D. IAST tool

---

### 🔷 Q3 (SEC-6.4, K2)

A tool that scans for known vulnerabilities in open-source dependencies is:

A. SAST
B. DAST
C. SCA
D. IAST

---

### 🔷 Q4 (SEC-6.2, K2)

Burp Suite is commonly used for:

A. Network port scanning
B. Web application security testing
C. Source code compilation
D. Database optimization

---

### 🔷 Q5 (SEC-6.3, K2)

IAST is characterized by:

A. Analyzing source code without execution
B. Testing running applications from the outside
C. Instrumenting running code to observe behavior during dynamic testing
D. Scanning only network ports

---

### 🔷 Q6 (SEC-6.1, K2)

A SAST tool is typically integrated:

A. Only after production deployment
B. During development and CI/CD pipelines
C. Only during manual code reviews
D. Only for runtime testing

---

### 🔷 Q7 (SEC-6.2, K2)

Active scanning in DAST:

A. Only observes traffic without sending payloads
B. Sends malicious payloads to test endpoints for vulnerabilities
C. Only reads documentation
D. Only scans network ports

---

### 🔷 Q8 (SEC-6.4, K2)

OWASP Dependency-Check is used for:

A. Dynamic web scanning
B. Identifying known vulnerabilities in project dependencies
C. Network penetration testing
D. Mobile app testing

---

### 🔷 Q9 (SEC-6.6, K2)

Nmap is primarily used for:

A. Source code analysis
B. Network discovery and port scanning
C. Database encryption
D. Web application fuzzing

---

### 🔷 Q10 (SEC-6.7, K2)

A security gate in CI/CD should:

A. Always pass to avoid delays
B. Block deployment if critical security thresholds are not met
C. Only run manually
D. Only check code style

---

### 🔷 Q11 (SEC-6.1, K2)

The PRIMARY limitation of SAST is:

A. It requires a running application
B. High false positive rate and inability to find runtime issues
C. It only works for web applications
D. It is too fast

---

### 🔷 Q12 (SEC-6.2, K2)

DAST should typically be run against:

A. Production environments
B. Staging or test environments
C. Developer laptops only
D. Source code repositories

---

### 🔷 Q13 (SEC-6.8, K2)

A coverage-guided fuzzer like AFL:

A. Sends completely random data without feedback
B. Prioritizes inputs that reach new code paths in the target
C. Only works for web applications
D. Requires no instrumentation

---

### 🔷 Q14 (SEC-6.7, K2)

GitLeaks is used to:

A. Scan git history for committed secrets and credentials
B. Test SQL injection
C. Scan network ports
D. Analyze Java bytecode

---

### 🔷 Q15 (SEC-6.3, K2)

An advantage of IAST over DAST is:

A. It requires no application changes
B. It can trace vulnerabilities to specific lines of code with lower false positives
C. It only scans from the outside
D. It doesn't require the application to run

---

### 🔷 Q16 (SEC-6.6, K2)

Nessus is primarily a:

A. Web application scanner
B. Network vulnerability scanner
C. Source code analyzer
D. Fuzzing tool

---

### 🔷 Q17 (SEC-6.7, K2)

Container image scanning in CI/CD is used to:

A. Improve container performance
B. Detect known CVEs in base images and installed packages before deployment
C. Reduce container size
D. Add container labels

---

### 🔷 Q18 (SEC-6.1, K2)

Semgrep is best described as:

A. A commercial network firewall
B. An open-source, fast, customizable static analysis tool
C. A database encryption tool
D. A social engineering framework

---

### 🔷 Q19 (SEC-6.2, K2)

Passive scanning in DAST:

A. Sends attack payloads to every endpoint
B. Analyzes traffic without sending additional attack payloads
C. Only works on HTTPS
D. Requires source code access

---

### 🔷 Q20 (SEC-6.7, K2)

The PRIMARY benefit of integrating security tools into CI/CD is:

A. Reducing the number of developers
B. Finding vulnerabilities early when they are cheaper to fix and preventing them from reaching production
C. Increasing build times
D. Eliminating the need for security teams

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** SonarQube = SAST (static code analysis).

### 🔷 Q2
**Answer: B**

**Rationale:** OWASP ZAP = DAST (dynamic web app scanning).

### 🔷 Q3
**Answer: C**

**Rationale:** Dependency vulnerability scanning = SCA.

### 🔷 Q4
**Answer: B**

**Rationale:** Burp Suite = web application security testing.

### 🔷 Q5
**Answer: C**

**Rationale:** IAST = instrumented running code during dynamic testing.

### 🔷 Q6
**Answer: B**

**Rationale:** SAST = integrated during development and CI/CD.

### 🔷 Q7
**Answer: B**

**Rationale:** Active scanning = sends malicious payloads to test endpoints.

### 🔷 Q8
**Answer: B**

**Rationale:** Dependency-Check = dependency vulnerability scanning.

### 🔷 Q9
**Answer: B**

**Rationale:** Nmap = network discovery and port scanning.

### 🔷 Q10
**Answer: B**

**Rationale:** Security gate = block deployment on critical failures.

### 🔷 Q11
**Answer: B**

**Rationale:** SAST limitation = high false positives, no runtime issues.

### 🔷 Q12
**Answer: B**

**Rationale:** DAST = staging/test environments (not production).

### 🔷 Q13
**Answer: B**

**Rationale:** Coverage-guided fuzzer = prioritizes new code path inputs.

### 🔷 Q14
**Answer: A**

**Rationale:** GitLeaks = scan git history for secrets.

### 🔷 Q15
**Answer: B**

**Rationale:** IAST advantage = traces to code lines, lower false positives.

### 🔷 Q16
**Answer: B**

**Rationale:** Nessus = network vulnerability scanner.

### 🔷 Q17
**Answer: B**

**Rationale:** Container scanning = detect CVEs before deployment.

### 🔷 Q18
**Answer: B**

**Rationale:** Semgrep = open-source customizable static analysis.

### 🔷 Q19
**Answer: B**

**Rationale:** Passive scanning = analyzes traffic without sending payloads.

### 🔷 Q20
**Answer: B**

**Rationale:** CI/CD security integration = find vulnerabilities early, prevent production issues.
