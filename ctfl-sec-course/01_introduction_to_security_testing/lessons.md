# Chapter 1 — Introduction to Security Testing: Lessons

---

## 1.1 What is Security Testing?

### Definition

Security testing is testing to determine if a system protects data and maintains functionality as intended, even when under attack.

### Objectives

| Objective | Question Answered |
|-----------|-------------------|
| **Identify vulnerabilities** | What weaknesses exist? |
| **Verify controls** | Do security measures work? |
| **Assess risk** | What is the business impact? |
| **Ensure compliance** | Does it meet standards? |

---

## 1.2 The CIA Triad

### Confidentiality

| Aspect | Description |
|--------|-------------|
| **Goal** | Prevent unauthorized access to information |
| **Threats** | Eavesdropping, data theft, unauthorized access |
| **Controls** | Encryption, access control, authentication |

### Integrity

| Aspect | Description |
|--------|-------------|
| **Goal** | Prevent unauthorized modification of information |
| **Threats** | Data tampering, man-in-the-middle attacks |
| **Controls** | Hashing, digital signatures, version control |

### Availability

| Aspect | Description |
|--------|-------------|
| **Goal** | Ensure systems and data are accessible when needed |
| **Threats** | Denial of service, system failure, ransomware |
| **Controls** | Redundancy, backups, failover, load balancing |

---

## 1.3 Threats, Vulnerabilities, and Risks

### Relationship

```
Threat + Vulnerability = Risk
```

| Term | Definition | Example |
|------|------------|---------|
| **Threat** | Potential cause of unwanted incident | Hacker trying to steal data |
| **Vulnerability** | Weakness that can be exploited | Unpatched software, weak password |
| **Risk** | Likelihood and impact of a threat exploiting a vulnerability | High chance of data breach due to unpatched server |

---

## 1.4 Common Attack Types

| Attack | Description | Target |
|--------|-------------|--------|
| **SQL Injection** | Malicious SQL in input fields | Database |
| **XSS** | Malicious scripts in web pages | Users |
| **CSRF** | Unauthorized actions on behalf of user | Web applications |
| **DoS/DDoS** | Overwhelming system with traffic | Availability |
| **Man-in-the-Middle** | Intercepting communication | Confidentiality, Integrity |
| **Phishing** | Tricking users into revealing credentials | Users |
| **Brute Force** | Trying all possible passwords | Authentication |

---

## 1.5 Business Impact of Security Failures

| Impact Type | Examples |
|-------------|----------|
| **Financial** | Fines, fraud losses, remediation costs |
| **Reputational** | Customer loss, brand damage |
| **Legal** | GDPR fines, lawsuits, regulatory action |
| **Operational** | System downtime, data recovery |

---

## 1.6 When Security Testing is Needed

| Phase | Activity |
|-------|----------|
| **Requirements** | Define security requirements |
| **Design** | Threat modeling, secure architecture |
| **Development** | Secure coding, code review |
| **Testing** | Vulnerability scanning, penetration testing |
| **Production** | Continuous monitoring, incident response |

---

## Worked Examples

### Worked Example 1: Risk Assessment

| Threat | Vulnerability | Likelihood | Impact | Risk |
|--------|---------------|------------|--------|------|
| SQL injection | Unparameterized queries | High | High | High |
| XSS | No output encoding | Medium | Medium | Medium |
| Brute force | No account lockout | High | Low | Medium |

### Worked Example 2: CIA Analysis

**Scenario:** Online banking system

| Aspect | Threat | Control |
|--------|--------|---------|
| **Confidentiality** | Data interception | TLS encryption |
| **Integrity** | Transaction tampering | Digital signatures |
| **Availability** | DDoS attack | CDN, rate limiting |

### Worked Example 3: Attack Identification

**Scenario:** Login form accepts raw SQL in username field.

| Attack | Type | Impact |
|--------|------|--------|
| `' OR 1=1 --` | SQL injection | Bypass authentication |
| `<script>alert(1)</script>` | XSS | Session hijacking |
