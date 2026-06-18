# 📘 Chapter 6 — Security Testing Tools and Automation: Lessons

---

## 🛠️ 6.1 SAST Tools

### 🔷 What is SAST?

Static Application Security Testing analyzes source code, bytecode, or binaries without executing the program.

### 🛠️ Popular SAST Tools

| Tool | Type | Best For |
|------|------|----------|
| **SonarQube** | Open-source + Commercial | Continuous code quality and security |
| **Checkmarx** | Commercial | Enterprise, multi-language support |
| **Fortify** | Commercial | Large enterprises, deep analysis |
| **Semgrep** | Open-source | Fast, customizable rules |
| **Bandit** | Open-source | Python-specific security |
| **ESLint Security** | Open-source | JavaScript/Node.js |
| **SpotBugs (FindBugs)** | Open-source | Java bug patterns |

### 🔷 SAST in CI/CD

**Integration points:**
- Pull request scanning (block merge on critical findings)
- Nightly full scans
- IDE integration (real-time feedback)

**Pipeline example:**
```yaml
security_scan:
  stage: test
  script:
    - sonar-scanner -Dsonar.projectKey=myapp
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
  allow_failure: false  # Block merge on critical issues
```

### 🔷 SAST Limitations

- High false positive rate (especially for custom frameworks)
- Cannot find runtime issues (business logic, session management)
- Language-specific (may not support all languages)
- Requires access to source code

---

## 🛠️ 6.2 DAST Tools

### 🔷 What is DAST?

Dynamic Application Security Testing tests running applications from the outside, like an attacker.

### 🛠️ Popular DAST Tools

| Tool | Type | Best For |
|------|------|----------|
| **OWASP ZAP** | Open-source | Web app scanning, CI/CD integration |
| **Burp Suite** | Commercial (Community free) | Professional penetration testing |
| **Acunetix** | Commercial | Automated web vulnerability scanning |
| **Netsparker (Invicti)** | Commercial | High-accuracy automated scanning |
| **Arachni** | Open-source | Web application security scanner |

### 🔷 DAST Scanning Modes

**Spider/Discovery:**
- Crawl the application to discover pages and endpoints
- Follow links, submit forms, parse JavaScript

**Active Scanning:**
- Send malicious payloads to discovered endpoints
- Test for SQL injection, XSS, command injection, etc.

**Passive Scanning:**
- Analyze traffic without sending attack payloads
- Identify information disclosure, missing headers, etc.

**Authenticated Scanning:**
- Log in as a user before scanning
- Discover and test authenticated endpoints
- Test for privilege escalation and IDOR

### 🔷 DAST in CI/CD

```yaml
dast_scan:
  stage: security
  script:
    - docker run -t owasp/zap2docker-stable zap-baseline.py -t http://staging.myapp.com
  allow_failure: true  # Don't block pipeline; report findings
```

### 🔷 DAST Limitations

- Cannot find code-level issues without triggering them
- May miss vulnerabilities behind complex authentication
- Coverage limited to discovered endpoints
- Can be destructive (avoid production)

---

## 🛠️ 6.3 IAST Tools

### 🔷 What is IAST?

Interactive Application Security Testing instruments the running application to observe code behavior during dynamic testing.

### 🔷 How IAST Works

1. Agent is deployed with the application (bytecode instrumentation)
2. Application runs normally (functional tests, DAST scans, manual testing)
3. Agent observes data flow, method calls, and security-relevant operations
4. Findings are reported with code-level detail (line numbers, stack traces)

### 🛠️ Popular IAST Tools

| Tool | Notes |
|------|-------|
| **Contrast Security** | Enterprise IAST, supports Java, .NET, Node.js, Python, Ruby |
| **Seeker (Synopsys)** | IAST with correlation to SAST findings |
| **HCL AppScan** | IAST component available |
| **Checkmarx IAST** | Integrated with SAST platform |

### 🔷 IAST Advantages

- Lower false positives than SAST
- More coverage than DAST alone
- Can trace vulnerabilities to specific lines of code
- Understands data flow and taint propagation
- Works during normal functional testing

### 🔷 IAST Limitations

- Requires application instrumentation (performance overhead)
- Coverage limited to exercised code paths
- Agent compatibility issues with some frameworks
- Cannot test code that isn't executed during testing

---

## 🛠️ 6.4 SCA Tools

### 🔷 What is SCA?

Software Composition Analysis identifies and manages open-source and third-party components and their known vulnerabilities.

### 🔷 Why SCA Matters

- Modern applications are 70-90% third-party code
- Known vulnerabilities in dependencies are common attack vectors
- License compliance is also important

### 🛠️ Popular SCA Tools

| Tool | Type | Best For |
|------|------|----------|
| **Snyk** | Commercial (free tier) | Developer-friendly, CI/CD integration |
| **OWASP Dependency-Check** | Open-source | Free Java/.NET/Node.js/Python/Ruby scanning |
| **GitHub Dependabot** | Built-in | Automated dependency updates |
| **WhiteSource (Mend)** | Commercial | Enterprise, comprehensive coverage |
| **FOSSA** | Commercial | License compliance + security |

### 🔷 SCA in CI/CD

```yaml
sca_scan:
  stage: security
  script:
    - snyk test --severity-threshold=high
    - snyk monitor  # Track in dashboard
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
```

---

## 🔒 6.5 Web Application Security Scanners

### 🔷 Specialized Scanners

**SQL Injection Scanners:**
- sqlmap — Automated SQL injection and database takeover
- BBQSQL — Blind SQL injection framework

**XSS Scanners:**
- XSStrike — Advanced XSS detection
- XSSer — Automated XSS testing

**API Security Scanners:**
- Postman + security tests
- OWASP ZAP API scanning
- Burp Suite API scanner

**Mobile App Scanners:**
- MobSF (Mobile Security Framework)
- QARK (Quick Android Review Kit)

---

## 🛠️ 6.6 Network Security Tools

### 🔷 Port Scanners

**Nmap:**
- Discover hosts and services on a network
- Identify operating systems and versions
- Scriptable (NSE scripts for vulnerability detection)

```bash
nmap -sV -sC -O target.com  # Version detection, scripts, OS fingerprint
```

### 🔷 Vulnerability Scanners

**Nessus / Tenable:**
- Comprehensive vulnerability scanning
- Configuration auditing
- Compliance checking (PCI-DSS, CIS benchmarks)

**OpenVAS:**
- Open-source vulnerability scanner
- Extensive vulnerability database

### 🔷 Network Protocol Analyzers

**Wireshark:**
- Capture and analyze network traffic
- Detect unencrypted transmissions
- Identify unusual traffic patterns

---

## ⚙️ 6.7 CI/CD Security Automation

### 🔒 Security Gates

**Definition:** Automated checks in the CI/CD pipeline that prevent deployment if security thresholds are not met.

**Example gates:**

| Gate | Tool | Threshold |
|------|------|-----------|
| SAST | SonarQube | Zero critical/high vulnerabilities |
| SCA | Snyk | No high-severity dependency vulnerabilities |
| DAST | OWASP ZAP | No high-risk findings in staging |
| Secrets | GitLeaks / TruffleHog | No committed secrets |
| Container | Trivy / Clair | No critical CVEs in base images |

### 🔷 DevSecOps Pipeline

```
Commit → Secret Scan → SAST → Build → SCA → Container Scan → Deploy to Staging → DAST → Deploy to Production
         ↑ Block if found  ↑ Block if critical  ↑ Block if high   ↑ Block if critical   ↑ Report, don't block
```

### 🗂️ Secrets Management in CI/CD

**Problem:** Hardcoded credentials in code, config files, or CI/CD variables.

**Detection tools:**
- **GitLeaks:** Scan git history for secrets
- **TruffleHog:** Find high-entropy strings and verify against APIs
- **GitGuardian:** Commercial secret detection

**Prevention:**
- Use secret management systems (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault)
- Rotate credentials automatically
- Never commit secrets to version control

---

## 🛠️ 6.8 Fuzzing Tools

### 🔷 AFL (American Fuzzy Lop)

- Coverage-guided fuzzer for C/C++ applications
- Instruments target to detect crashes
- Mutates input to reach new code paths

### 🔷 libFuzzer

- In-process, coverage-guided fuzzing engine
- Part of LLVM project
- Used by Chrome, Firefox, and other projects

### 🔷 Web Fuzzing

- **ffuf:** Fast web fuzzer written in Go
- **Wfuzz:** Web application fuzzer
- **Burp Suite Intruder:** Automated payload delivery

---

## 🛠️ 6.9 Tool Selection

### ✅ Selection Criteria

| Factor | Consideration |
|--------|---------------|
| **Language support** | Does the tool support your tech stack? |
| **Integration** | Can it integrate with CI/CD, IDE, ticketing? |
| **Accuracy** | False positive rate, detection capability |
| **Scalability** | Can it handle your codebase size? |
| **Cost** | Open-source vs. commercial licensing |
| **Reporting** | Quality of findings, remediation guidance |
| **Compliance** | Does it support required standards (OWASP, CWE)? |

### 🛠️ Recommended Tool Combinations

**Small team / Startup:**
- SAST: SonarQube Community + Semgrep
- DAST: OWASP ZAP
- SCA: GitHub Dependabot + OWASP Dependency-Check
- Secrets: GitLeaks

**Enterprise:**
- SAST: Checkmarx or Fortify
- DAST: Burp Suite Enterprise + Acunetix
- IAST: Contrast Security
- SCA: Snyk or WhiteSource
- Network: Nessus
- Secrets: GitGuardian + Vault

---

## 💡 Worked Examples

### 💡 Worked Example 1: CI/CD Security Pipeline

**Scenario:** A Java/Spring Boot application deployed to Kubernetes.

**Pipeline:**
```yaml
stages:
  - checkout
  - secret-scan
  - sast
  - build
  - sca
  - container-scan
  - deploy-staging
  - dast
  - deploy-production

secret-scan:
  script:
    - gitleaks detect --source . --verbose
  allow_failure: false

sast:
  script:
    - sonar-scanner -Dsonar.qualitygate.wait=true
  allow_failure: false

sca:
  script:
    - snyk test --severity-threshold=high
  allow_failure: false

container-scan:
  script:
    - trivy image myapp:${CI_COMMIT_SHA}
  allow_failure: false

dast:
  script:
    - zap-baseline.py -t http://staging.myapp.com -r zap-report.html
  allow_failure: true  # Report only; don't block
```

**Rationale:**
- Secret/SAST/SCA/Container scans block on critical findings (shift-left)
- DAST runs after deployment to staging (needs running app)
- DAST doesn't block because it may have false positives requiring review

### 💡 Worked Example 2: Tool Selection Decision

**Scenario:** A healthcare application with strict compliance requirements (HIPAA).

| Requirement | Tool Choice | Reason |
|-------------|-------------|--------|
| Source code analysis (Java) | Fortify | Deep analysis, HIPAA compliance reporting |
| Dependency scanning | Snyk | Tracks licenses and vulnerabilities |
| Runtime testing | Contrast (IAST) | Monitors running app without separate DAST overhead |
| Network scanning | Nessus | Compliance auditing, configuration checks |
| Secret detection | GitGuardian | Enterprise-grade, audit trail |
| Container security | Aqua Security | Kubernetes-native, HIPAA templates |

### 💡 Worked Example 3: Tool Output Interpretation

**SAST Finding:**
```
Rule: java/sql-injection
File: UserDao.java:45
Code: String query = "SELECT * FROM users WHERE name = '" + name + "'";
Severity: Critical
CWE: 89 (SQL Injection)
Recommendation: Use PreparedStatement with parameterized queries
```

**Action:**
1. Verify finding (true positive — string concatenation in SQL)
2. Fix: Replace with `PreparedStatement`
3. Verify fix: Re-run SAST scan → finding resolved
4. Regression test: Confirm application still functions correctly

**DAST Finding:**
```
Alert: Cross Site Scripting (Reflected)
URL: http://app.com/search?q=<script>alert(1)</script>
Evidence: Response contains unencoded <script> tag
Risk: High
Solution: Encode output using HTML entity encoding
```

**Action:**
1. Verify finding (visit URL → script executes)
2. Fix: Implement output encoding in search results template
3. Verify fix: Re-test URL → script displayed as text, not executed
4. Regression test: Test search functionality with valid input

**SCA Finding:**
```
Dependency: log4j-core 2.14.1
Vulnerability: CVE-2021-44228 (Log4Shell)
Severity: Critical CVSS 10.0
Fix: Upgrade to log4j-core 2.17.1
```

**Action:**
1. Verify finding (check pom.xml / build.gradle)
2. Fix: Update dependency version
3. Verify fix: Re-run SCA scan → Log4Shell no longer reported
4. Regression test: Verify logging still works correctly
