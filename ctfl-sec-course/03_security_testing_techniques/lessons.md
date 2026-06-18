# 📘 Chapter 3 — Security Testing Techniques: Lessons

---

## 🔍 3.1 Static Application Security Testing (SAST)

### 🔷 Definition

Analyzing source code without executing the application.

### 🔷 Characteristics

| Aspect | Description |
|--------|-------------|
| **Timing** | Early in SDLC (development) |
| **Access** | Requires source code |
| **Speed** | Fast, automated |
| **Coverage** | All code paths |
| **Limitation** | Cannot find runtime issues |

### 🔷 What SAST Finds

| Vulnerability | Example |
|---------------|---------|
| **Hardcoded credentials** | Password in source code |
| **Insecure functions** | strcpy instead of strncpy |
| **Missing input validation** | No bounds checking |
| **Weak cryptography** | MD5 instead of SHA-256 |

---

## 🔒 3.2 Dynamic Application Security Testing (DAST)

### 🔷 Definition

Testing a running application by sending malicious inputs.

### 🔷 Characteristics

| Aspect | Description |
|--------|-------------|
| **Timing** | Later in SDLC (test environment) |
| **Access** | No source code needed |
| **Speed** | Slower, requires running app |
| **Coverage** | Only executed paths |
| **Limitation** | Cannot find dead code issues |

### 🔷 What DAST Finds

| Vulnerability | Example |
|---------------|---------|
| **SQL injection** | Malicious input in forms |
| **XSS** | Script injection in URLs |
| **CSRF** | Missing tokens |
| **Security misconfiguration** | Default credentials |

---

## ⭐ 3.3 Penetration Testing

### 🧪 Types

| Type | Knowledge | Use Case |
|------|-----------|----------|
| **Black box** | No internal knowledge | Simulates external attacker |
| **Grey box** | Limited knowledge | Simulates privileged user |
| **White box** | Full knowledge | Comprehensive assessment |

### 🔷 Process

1. **Reconnaissance** — Gather information
2. **Scanning** — Identify vulnerabilities
3. **Exploitation** — Attempt to breach
4. **Post-exploitation** — Assess impact
5. **Reporting** — Document findings

---

## 🔎 3.4 Code Review for Security

### 🔎 Manual Review

| Focus | Check |
|-------|-------|
| **Input handling** | Validation, sanitization |
| **Authentication** | Secure password storage |
| **Session management** | Secure token handling |
| **Error handling** | No information leakage |
| **Cryptography** | Strong algorithms |

### 🔎 Automated Review

| Tool Type | Example |
|-----------|---------|
| **Linters** | ESLint, Pylint |
| **Security scanners** | SonarQube, Checkmarx |
| **Dependency checkers** | OWASP Dependency-Check |

---

## ⭐ 3.5 Fuzz Testing

### 🔷 Definition

Sending random, malformed, or unexpected inputs to find crashes or vulnerabilities.

### 🧪 Types

| Type | Input |
|------|-------|
| **Random** | Completely random data |
| **Mutation** | Modify valid inputs |
| **Generation** | Create inputs from protocol specs |

### 🔷 What Fuzzing Finds

| Issue | Example |
|-------|---------|
| **Buffer overflows** | Input too long for buffer |
| **Format string bugs** | Unexpected format characters |
| **Crash handling** | Unhandled exceptions |
| **Integer overflows** | Values beyond range |

---

## 💡 Worked Examples

### 💡 Worked Example 1: Technique Selection

| Scenario | Technique | Reason |
|----------|-----------|--------|
| Early development | SAST | No running app |
| Production web app | DAST | Tests running system |
| Critical system | Pen test | Simulates real attack |
| Protocol handler | Fuzzing | Finds edge cases |

### 💡 Worked Example 2: SAST vs DAST

| Finding | SAST | DAST |
|---------|------|------|
| SQL injection in dead code | Yes | No |
| SQL injection in login form | Yes | Yes |
| Misconfigured server headers | No | Yes |
| Hardcoded password | Yes | No |

### 💡 Worked Example 3: Penetration Test Scope

| Asset | Test Type | Scope |
|-------|-----------|-------|
| Public website | Black box | External only |
| Internal admin panel | Grey box | With user credentials |
| Payment gateway | White box | Full source + config |
