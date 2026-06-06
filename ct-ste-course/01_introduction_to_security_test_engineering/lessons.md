# Chapter 1 — Introduction to Security Test Engineering: Lessons

---

## 1.1 What is Security Test Engineering?

### Definition

Security test engineering is the systematic process of testing software to identify vulnerabilities, verify security controls, and ensure the application resists attacks.

### Scope

| Activity | Description |
|----------|-------------|
| **Vulnerability identification** | Find weaknesses attackers could exploit |
| **Control verification** | Confirm security mechanisms work as intended |
| **Risk assessment** | Prioritize issues by business impact |
| **Compliance validation** | Verify regulatory requirements (PCI-DSS, GDPR) |

### Security Testing vs Functional Testing

| Aspect | Functional Testing | Security Testing |
|--------|-------------------|-----------------|
| **Goal** | Verify features work | Verify system resists attacks |
| **Mindset** | "Does it work?" | "Can it be broken maliciously?" |
| **Inputs** | Valid and edge cases | Malicious, malformed, unexpected |
| **Success** | Pass rate high | Vulnerabilities found and mitigated |

---

## 1.2 The CIA Triad

### Confidentiality

- **Definition:** Only authorized parties can access data
- **Testing focus:** Encryption, access controls, authentication
- **Example test:** Can user A see user B's data?

### Integrity

- **Definition:** Data is not altered improperly
- **Testing focus:** Tamper detection, input validation, checksums
- **Example test:** Can an attacker modify a price in a request?

### Availability

- **Definition:** Systems are accessible when needed
- **Testing focus:** DoS resilience, load handling, failover
- **Example test:** Does the system remain responsive under heavy load?

### Extended Security Properties

| Property | Description |
|----------|-------------|
| **Authentication** | Verifying identity |
| **Authorization** | Controlling access based on identity |
| **Non-repudiation** | Proof of action (audit logs, signatures) |
| **Accountability** | Tracing actions to responsible parties |

---

## 1.3 Threat Actors

### Types

| Actor | Motivation | Capability | Example |
|-------|-----------|------------|---------|
| **Script kiddie** | Reputation, fun | Low | Uses existing tools |
| **Hacktivist** | Political/ideological | Medium | DDoS, defacement |
| **Criminal** | Financial gain | Medium-High | Ransomware, data theft |
| **Nation-state** | Espionage, sabotage | High | APT, supply chain attacks |
| **Insider** | Revenge, profit, negligence | Variable | Data exfiltration |

### Threat Modeling Implication

Different actors require different defenses:
- Script kiddies: Patch known vulnerabilities
- Nation-state: Defense in depth, zero-trust architecture

---

## 1.4 OWASP Top 10 Overview

| Rank | Risk | Testing Relevance |
|------|------|-------------------|
| A01 | Broken Access Control | Test horizontal/vertical privilege escalation |
| A02 | Cryptographic Failures | Test encryption strength, key management |
| A03 | Injection | Test SQL, OS, LDAP injection |
| A04 | Insecure Design | Test business logic flaws |
| A05 | Security Misconfiguration | Test default credentials, exposed services |
| A06 | Vulnerable Components | Test dependency versions |
| A07 | Auth Failures | Test brute force, session management |
| A08 | Data Integrity Failures | Test deserialization, supply chain |
| A09 | Logging Failures | Verify security events are logged |
| A10 | SSRF | Test server-side request forgery |

---

## Worked Examples

### Worked Example 1: CIA Triad Test Cases

**Scenario:** Online banking application.

| Property | Test Case |
|----------|-----------|
| Confidentiality | Verify customer A cannot view customer B's balance |
| Integrity | Verify transaction amount cannot be altered in transit |
| Availability | Verify system remains available during peak hours |
| Authentication | Verify MFA is required for high-value transfers |
| Authorization | Verify teller role cannot approve loans |

### Worked Example 2: Threat Actor Analysis

**Scenario:** Healthcare application storing patient records.

| Actor | Threat | Defense |
|-------|--------|---------|
| Criminal | Ransomware, data theft | Encryption, backups, access controls |
| Insider | Unauthorized data access | RBAC, audit logs, DLP |
| Nation-state | Targeted espionage | Air-gapped systems, zero-trust |

### Worked Example 3: Security Testing Scope

**Scenario:** E-commerce checkout flow.

**Functional test:** "Can a user complete a purchase?"
**Security tests:**
- Can price be manipulated in the request?
- Can another user's payment method be used?
- Is credit card data encrypted in transit and at rest?
- Does the session expire appropriately?
- Are failed payment attempts logged?
