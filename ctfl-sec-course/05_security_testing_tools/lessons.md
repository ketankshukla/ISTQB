# 📘 Chapter 5 — Security Testing Tools: Lessons

---

## 🛠️ 5.1 SAST Tools

### 🔷 Characteristics

| Feature | Description |
|---------|-------------|
| **Input** | Source code |
| **Output** | Code-level vulnerability findings |
| **Integration** | CI/CD pipelines, IDEs |
| **Speed** | Fast, can scan entire codebase |
| **False positives** | Common, requires triage |

### 💡 Examples

| Tool | Language | Type |
|------|----------|------|
| **SonarQube** | Multi-language | Open source + commercial |
| **Checkmarx** | Multi-language | Commercial |
| **Fortify** | Multi-language | Commercial |
| **Bandit** | Python | Open source |
| **ESLint Security** | JavaScript | Open source |

---

## 🛠️ 5.2 DAST Tools

### 🔷 Characteristics

| Feature | Description |
|---------|-------------|
| **Input** | Running application URL |
| **Output** | Runtime vulnerability findings |
| **Crawl** | Discovers application pages |
| **Attack** | Sends malicious payloads |
| **Authentication** | Can test authenticated areas |

### 💡 Examples

| Tool | Type |
|------|------|
| **OWASP ZAP** | Open source |
| **Burp Suite** | Commercial |
| **Acunetix** | Commercial |
| **Nikto** | Open source |

---

## 🛠️ 5.3 Penetration Testing Tools

### 🔷 Categories

| Category | Tools | Purpose |
|----------|-------|---------|
| **Network scanning** | Nmap | Discover hosts and services |
| **Vulnerability scanning** | Nessus, OpenVAS | Find known vulnerabilities |
| **Web testing** | SQLMap, XSSer | Exploit web vulnerabilities |
| **Password cracking** | John the Ripper, Hashcat | Test password strength |
| **Wireless testing** | Aircrack-ng | Test Wi-Fi security |

---

## ✅ 5.4 Tool Selection Criteria

| Criterion | Consideration |
|-----------|-------------|
| **Technology stack** | Does it support your languages/frameworks? |
| **Integration** | CI/CD, IDE, bug tracker compatibility |
| **Accuracy** | False positive rate |
| **Coverage** | Types of vulnerabilities detected |
| **Reporting** | Output format, detail level |
| **Cost** | Open source vs commercial |
| **Support** | Community or vendor support |

---

## 🛠️ 5.5 Tool Limitations

| Limitation | Explanation |
|------------|-------------|
| **False positives** | Tools report issues that are not real vulnerabilities |
| **False negatives** | Tools miss real vulnerabilities |
| **Business logic** | Tools cannot understand application-specific logic |
| **New vulnerabilities** | Tools may not detect zero-day vulnerabilities |
| **Configuration** | Tools require proper configuration for accurate results |

---

## 💡 Worked Examples

### 💡 Worked Example 1: Tool Selection

| Scenario | Recommended Tool | Reason |
|----------|---------------|--------|
| Java source code review | SonarQube | Java support, IDE integration |
| Running web app testing | OWASP ZAP | Free, web-focused |
| Network vulnerability scan | Nessus | Comprehensive network coverage |
| Password policy audit | John the Ripper | Password strength testing |

### 💡 Worked Example 2: Output Interpretation

| Tool Output | Analysis | Action |
|-------------|----------|--------|
| "Possible SQL injection" | Check if parameterized queries used | Verify and fix if real |
| "High: Hardcoded password" | Confirmed vulnerability | Fix immediately |
| "Medium: Information disclosure" | Review stack trace in error page | Fix error handling |

### 💡 Worked Example 3: CI/CD Integration

| Stage | Tool | Action |
|-------|------|--------|
| Commit | ESLint Security | Block commit if issues |
| Build | SonarQube | Fail build on critical issues |
| Deploy | OWASP ZAP | Scan staging before production |
