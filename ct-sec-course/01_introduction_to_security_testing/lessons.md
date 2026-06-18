# 📘 Chapter 1 — Introduction to Security Testing: Lessons

---

## ⭐ 1.1 The CIA Triad

### 🔷 Confidentiality

**Definition:** Ensuring that information is accessible only to those authorized to have access.

**Goal:** Prevent unauthorized disclosure of information.

**Controls:**
- Encryption (data at rest and in transit)
- Access controls (authentication, authorization)
- Data classification and labeling
- Network segmentation

**Testing focus:**
- Can unauthorized users access restricted data?
- Is encryption implemented correctly?
- Are access controls bypassable?

**Example:** A hospital database stores patient records. Confidentiality testing verifies that:
- Nurses can access their assigned patients' records
- Nurses cannot access other patients' records
- Doctors can access all records in their department
- Administrative staff cannot access clinical data
- Data transmitted over the network is encrypted

---

### 🔷 Integrity

**Definition:** Safeguarding the accuracy and completeness of information and processing methods.

**Goal:** Prevent unauthorized modification of data.

**Controls:**
- Hashing and digital signatures
- Version control
- Input validation
- Transaction logging and audit trails

**Testing focus:**
- Can data be modified without authorization?
- Are checksums/hashes validated?
- Is there evidence of tampering?

**Example:** An online banking system. Integrity testing verifies that:
- Account balances cannot be modified by users
- Transaction amounts cannot be altered after submission
- Checksums on downloaded statements are valid
- Audit logs show who made what changes

---

### 🤖 Availability

**Definition:** Ensuring that authorized users have access to information and associated assets when required.

**Goal:** Prevent denial of service to authorized users.

**Controls:**
- Redundancy (failover systems, backups)
- Load balancing
- DDoS protection
- Disaster recovery plans

**Testing focus:**
- Can the system be made unavailable?
- How does it handle high load?
- What is the recovery time after failure?

**Example:** An e-commerce site during Black Friday. Availability testing verifies that:
- The site remains accessible under 10x normal load
- Database failover works within 30 seconds
- Backup systems activate automatically
- DDoS attacks are mitigated

---

## 🔒 1.2 Extended Security Concepts

### 🔷 Authentication

**Definition:** The process of verifying the identity of a user, device, or system.

**Factors:**
- **Something you know:** Password, PIN
- **Something you have:** Token, smart card, phone
- **Something you are:** Biometric (fingerprint, face recognition)
- **Somewhere you are:** Location-based
- **Something you do:** Behavioral biometrics

**Testing focus:**
- Can authentication be bypassed?
- Are weak passwords accepted?
- Is MFA (multi-factor authentication) properly enforced?
- Are session tokens securely generated?

---

### 🔷 Authorization

**Definition:** The process of granting or denying access rights to authenticated users.

**Models:**
- **DAC (Discretionary Access Control):** Owner decides access
- **MAC (Mandatory Access Control):** System-enforced labels
- **RBAC (Role-Based Access Control):** Access based on roles
- **ABAC (Attribute-Based Access Control):** Access based on attributes

**Testing focus:**
- Can users access resources beyond their permissions?
- Is horizontal/vertical authorization enforced?
- Can roles be escalated?

---

### 🔷 Non-repudiation

**Definition:** Ensuring that a party cannot deny having performed an action.

**Mechanisms:**
- Digital signatures
- Audit logs with tamper-proof storage
- Transaction receipts
- Timestamps from trusted sources

**Testing focus:**
- Can actions be performed without logging?
- Can logs be tampered with?
- Are timestamps accurate and trusted?

---

## 🔒 1.3 Security Terminology

| Term | Definition |
|------|------------|
| **Vulnerability** | A weakness that could be exploited by a threat |
| **Threat** | A potential cause of an unwanted incident |
| **Risk** | The potential for loss or damage when a threat exploits a vulnerability |
| **Exploit** | Code or technique that takes advantage of a vulnerability |
| **Attack** | An attempt to compromise a system |
| **Asset** | Something of value to the organization |
| **Control** | A safeguard or countermeasure |
| **Countermeasure** | An action taken to offset another action |

**Relationship:**
```
Threat → exploits → Vulnerability → on → Asset → causing → Risk
                                    ↑
                              Control mitigates
```

---

## 🔒 1.4 Why Security Testing?

### 🔷 The Problem: Functional Testing Is Not Enough

**Functional testing** asks: "Does the feature work as specified?"
**Security testing** asks: "Can the feature be misused or bypassed?"

**Example:** A login feature
- **Functional test:** Valid user + valid password → login succeeds
- **Security tests:**
  - SQL injection in password field → should fail safely
  - Brute force 10,000 passwords → should lock account
  - Session token prediction → should be unpredictable
  - Password in plain text → should be hashed

### 🔒 Consequences of Poor Security

| Impact Type | Examples |
|-------------|----------|
| Financial | Fines (GDPR: up to 4% revenue), fraud losses, remediation costs |
| Reputational | Customer loss, brand damage, media coverage |
| Legal | Lawsuits, regulatory action, criminal charges |
| Operational | System downtime, data loss, recovery effort |

### 🎯 Security Testing Objectives

1. **Identify vulnerabilities** before attackers do
2. **Verify controls** are implemented correctly
3. **Assess risk** associated with identified issues
4. **Validate compliance** with security standards
5. **Improve security posture** over time

---

## 🌟 1.5 OWASP Top 10 Overview

The OWASP Top 10 is a standard awareness document for web application security risks.

### 🔷 OWASP Top 10 (2021)

| Rank | Category | Description |
|------|----------|-------------|
| A01 | Broken Access Control | Restrictions on authenticated users are not properly enforced |
| A02 | Cryptographic Failures | Failure to properly protect data in transit and at rest |
| A03 | Injection | Untrusted data sent to interpreters (SQL, NoSQL, OS, LDAP) |
| A04 | Insecure Design | Fundamental design flaws in the application |
| A05 | Security Misconfiguration | Missing security hardening, default accounts, verbose errors |
| A06 | Vulnerable and Outdated Components | Using components with known vulnerabilities |
| A07 | Identification and Authentication Failures | Weak authentication, session management |
| A08 | Software and Data Integrity Failures | Insecure deserialization, untrusted CI/CD pipelines |
| A09 | Security Logging and Monitoring Failures | Insufficient logging, detection, and response |
| A10 | Server-Side Request Forgery (SSRF) | Forging server-side requests to unintended destinations |

**Testing relevance:** Each OWASP category represents a class of vulnerabilities that security testing should identify.

---

## 🔒 1.6 Security Testing vs. Functional Testing

| Aspect | Functional Testing | Security Testing |
|--------|-----------------|------------------|
| **Objective** | Verify features work as specified | Verify features cannot be misused or bypassed |
| **Mindset** | "Does it work?" | "How can it be broken?" |
| **Input** | Valid, expected data | Invalid, unexpected, malicious data |
| **Coverage** | Happy path and defined error paths | Attack vectors, edge cases, bypass attempts |
| **Success criteria** | Feature behaves as documented | System resists attacks, maintains CIA |
| **Example** | Login with valid credentials succeeds | SQL injection in login fails without data exposure |

**Important:** Security testing complements functional testing; it does not replace it. Both are needed.

---

## 💡 Worked Examples

### 💡 Worked Example 1: Mapping OWASP to CIA

| OWASP Category | Affected CIA Element | Why |
|---------------|---------------------|-----|
| Broken Access Control | Confidentiality, Integrity | Unauthorized access to data or functions |
| Cryptographic Failures | Confidentiality, Integrity | Data exposed or modified due to weak crypto |
| Injection | Integrity, Confidentiality | Data modified or exposed through malicious input |
| Insecure Design | All three | Design flaws can affect any security property |
| Security Misconfiguration | Availability, Confidentiality | Systems exposed or made unavailable |
| Vulnerable Components | All three | Known vulnerabilities compromise all properties |
| Authentication Failures | Confidentiality, Integrity | Unauthorized access to accounts and data |
| Integrity Failures | Integrity | Data or code integrity compromised |
| Logging Failures | Non-repudiation, Availability | Incidents undetected, response delayed |
| SSRF | Confidentiality, Integrity | Internal resources accessed or modified |

### 💡 Worked Example 2: Authentication vs. Authorization

**Scenario:** A hospital system with roles: Doctor, Nurse, Admin.

**Authentication tests:**
- Valid credentials → access granted
- Invalid password → access denied
- Weak password ("123456") → rejected or policy enforced
- Locked account → login denied with appropriate message

**Authorization tests:**
- Doctor A tries to view Doctor B's patient → denied (horizontal authorization)
- Nurse tries to access admin functions → denied (vertical authorization)
- Patient tries to access their own record → granted (correct)
- Admin tries to modify patient diagnosis → denied (principle of least privilege)

**Key distinction:** Authentication = who are you? Authorization = what can you do?

### 💡 Worked Example 3: Risk Calculation

**Scenario:** An e-commerce site has an SQL injection vulnerability in the search function.

**Risk assessment:**

| Factor | Assessment | Score |
|--------|-----------|-------|
| Threat | Automated scanners and skilled attackers regularly target e-commerce sites | High |
| Vulnerability | SQL injection is well-known; many tools can exploit it | High |
| Asset value | Customer database contains PII, payment info, order history | Critical |
| Likelihood | High — automated tools can find and exploit this easily | 4/5 |
| Impact | Critical — full database compromise, financial and legal consequences | 5/5 |
| Risk | Likelihood × Impact = 4 × 5 = 20 (Critical) | Critical |

**Recommended action:** Fix immediately. Until fixed:
- Deploy WAF rule to block SQL injection patterns
- Monitor search logs for suspicious input
- Prepare incident response plan
