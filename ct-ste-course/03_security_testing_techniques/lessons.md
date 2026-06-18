# 📘 Chapter 3 — Security Testing Techniques: Lessons

---

## ⭐ 3.1 SAST, DAST, IAST, and SCA

### 🔍 SAST — Static Application Security Testing

| Aspect | Description |
|--------|-------------|
| **When** | During development, before compilation |
| **What** | Analyzes source code for vulnerabilities |
| **Strengths** | Finds issues early, full code coverage |
| **Limitations** | False positives, can't detect runtime issues |
| **Tools** | SonarQube, Checkmarx, Fortify, Semgrep |

### 🔒 DAST — Dynamic Application Security Testing

| Aspect | Description |
|--------|-------------|
| **When** | Against running application |
| **What** | Sends malicious inputs, observes behavior |
| **Strengths** | Finds runtime issues, low false positives |
| **Limitations** | Needs running app, limited code coverage |
| **Tools** | OWASP ZAP, Burp Suite, Acunetix |

### 🔒 IAST — Interactive Application Security Testing

| Aspect | Description |
|--------|-------------|
| **When** | During testing of running application |
| **What** | Agent in app monitors behavior during test execution |
| **Strengths** | Context-aware, fewer false positives |
| **Limitations** | Requires instrumentation, language support |
| **Tools** | Contrast Security, Seeker, Checkmarx IAST |

### 🔬 SCA — Software Composition Analysis

| Aspect | Description |
|--------|-------------|
| **When** | Continuously |
| **What** | Identifies vulnerable open-source dependencies |
| **Strengths** | Catches known CVEs automatically |
| **Limitations** | Only finds known issues |
| **Tools** | Snyk, OWASP Dependency-Check, Black Duck |

### 🔷 Comparison

| Technique | Coverage | False Positives | SDLC Phase |
|-----------|----------|----------------|------------|
| SAST | High | Higher | Development |
| DAST | Medium | Lower | Testing/Staging |
| IAST | Medium | Low | Testing |
| SCA | Dependencies | Low | Continuous |

---

## 🔎 3.2 Code Review for Security

### 🔷 What to Look For

| Category | Issues |
|----------|--------|
| **Input validation** | Missing validation, weak regexes |
| **Authentication** | Hard-coded credentials, weak password policy |
| **Session management** | Predictable session IDs, no timeout |
| **Cryptography** | Weak algorithms, hard-coded keys |
| **Error handling** | Information leakage in error messages |
| **Access control** | Missing authorization checks |

### 🔎 Review Process

1. **Automated scan** — SAST tools find obvious issues
2. **Focused manual review** — High-risk areas (auth, payment, admin)
3. **Checklist-based** — OWASP ASVS categories
4. **Peer review** — Another developer reviews changes

---

## ⭐ 3.3 Fuzzing

### 🔷 Definition

Fuzzing is automated testing that provides invalid, unexpected, or random data as inputs to a program.

### 🧪 Types

| Type | Description |
|------|-------------|
| **Mutation-based** | Mutate valid inputs randomly |
| **Generation-based** | Generate inputs based on protocol/format specification |
| **Coverage-guided** | Use code coverage feedback to evolve inputs |

### 🔷 Application Areas

- File format parsers (PDF, images)
- Network protocols
- API endpoints
- Command-line arguments

---

## 🎯 3.4 Penetration Testing Techniques

### 🤖 Reconnaissance

| Technique | Purpose |
|-----------|---------|
| **OSINT** | Gather public information |
| **Port scanning** | Identify open services (Nmap) |
| **Service enumeration** | Determine versions and configurations |

### 🔷 Vulnerability Exploitation

| Technique | Target |
|-----------|--------|
| **SQL injection** | Database-backed applications |
| **XSS** | Web applications with user input display |
| **CSRF** | State-changing operations |
| **Authentication bypass** | Login mechanisms |
| **Privilege escalation** | Access control systems |

### 🔷 Post-Exploitation

- Data exfiltration simulation
- Persistence mechanisms
- Lateral movement assessment

---

## ⭐ 3.5 Input Validation and Output Encoding

### 🔷 Input Validation Tests

| Test | Input | Expected Behavior |
|------|-------|-------------------|
| **SQL injection** | `'; DROP TABLE users; --` | Rejected or sanitized |
| **XSS** | `<script>alert('xss')</script>` | Encoded or rejected |
| **Path traversal** | `../../../etc/passwd` | Rejected |
| **Command injection** | `; cat /etc/passwd` | Rejected |
| **Buffer overflow** | Very long string | Truncated or rejected |

### 🔷 Output Encoding Tests

- Verify HTML encoding in page output
- Verify URL encoding in redirects
- Verify JavaScript encoding in JSON responses

---

## ⭐ 3.6 Authentication and Session Testing

### 🔷 Authentication Tests

| Test | Approach |
|------|----------|
| **Brute force resistance** | Many failed attempts should lock account |
| **Weak password policy** | Test minimum length, complexity |
| **Credential storage** | Verify hashing (not encryption) of passwords |
| **MFA bypass** | Attempt to skip second factor |

### 🗂️ Session Management Tests

| Test | Approach |
|------|----------|
| **Session fixation** | Log in with attacker session ID |
| **Session hijacking** | Predict or steal session token |
| **Session timeout** | Leave idle; should expire |
| **Logout effectiveness** | Log out; verify token invalidated |
| **Concurrent sessions** | Same user, multiple sessions allowed? |

---

## 💡 Worked Examples

### 💡 Worked Example 1: SAST vs DAST Selection

**Scenario:** Choose technique for a new web application.

| Phase | Technique | Why |
|-------|-----------|-----|
| Development | SAST | Catch issues in code before deployment |
| CI/CD | SCA | Catch vulnerable dependencies automatically |
| Staging | DAST | Find runtime issues in deployed app |
| Pre-release | Penetration test | Comprehensive attacker simulation |

### 💡 Worked Example 2: Input Validation Test Design

**Scenario:** Test a search field.

| Input | Expected |
|-------|----------|
| Normal: "testing" | Results returned |
| SQL injection: "'; DROP TABLE products; --" | Rejected, no error |
| XSS: `<script>alert(1)</script>` | Encoded or stripped |
| Long: 10,000 characters | Truncated or rejected |
| Null: empty string | Handled gracefully |

### 💡 Worked Example 3: Session Test Cases

**Scenario:** Test a banking session.

| Test | Steps | Expected |
|------|-------|----------|
| Timeout | Login, wait 15 min, try transaction | Redirect to login |
| Logout | Click logout, click back | Not logged in |
| Token invalidation | Login, logout, reuse old token | Denied |
| Concurrent sessions | Login on Chrome and Firefox | Both active or one invalidated based on policy |
