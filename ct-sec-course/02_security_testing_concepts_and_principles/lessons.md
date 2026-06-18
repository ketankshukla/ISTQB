# 📘 Chapter 2 — Security Testing Concepts and Principles: Lessons

---

## 📜 2.1 Key Security Principles

### 🔷 Defense in Depth

**Definition:** A security strategy that employs multiple layers of security controls throughout an IT system.

**Concept:** No single control is perfect. Multiple overlapping controls ensure that if one fails, others still provide protection.

**Example — Web application:**
```
Layer 1: Firewall (network perimeter)
Layer 2: WAF (application perimeter)
Layer 3: Input validation (application code)
Layer 4: Parameterized queries (database access)
Layer 5: Database access controls (data layer)
Layer 6: Encryption at rest (storage layer)
```

**Testing implication:** Test each layer independently AND verify that layers work together. If one layer is bypassed, do others still protect the system?

---

### 🔷 Least Privilege

**Definition:** Users and processes should be granted only the minimum access necessary to perform their function.

**Application:**
- User accounts: No admin rights for regular users
- Service accounts: Database connection uses read-only account if possible
- Application permissions: API keys scoped to specific endpoints

**Testing approach:**
1. Identify what access each user/service actually needs
2. Verify they cannot access anything beyond that
3. Test that restricted operations are properly blocked

**Example:**
A reporting user should be able to:
- Read report data ✓
- Generate reports ✓
- Modify report templates ✗
- Access raw database tables ✗
- Modify user accounts ✗

---

### 🔷 Separation of Duties

**Definition:** No single person should have complete control over a critical process. Actions that could compromise security should require collaboration.

**Examples:**
- Developer cannot deploy code to production without review
- Administrator cannot approve their own access requests
- Financial transactions require two signatures

**Testing approach:**
- Verify that one person cannot complete a sensitive end-to-end process alone
- Test that approval workflows are enforced
- Check for backdoors or bypass mechanisms

---

### 🤖 Fail Secure / Fail Safe

**Definition:** A system should default to a secure state when an error or failure occurs.

**Fail Secure:** When security fails, the system locks down (deny access).
**Fail Safe:** When safety fails, the system opens up (grant access for physical safety).

**Context matters:**
- **Bank vault door:** Fail secure — if power fails, door stays locked
- **Fire exit door:** Fail safe — if power fails, door unlocks for evacuation

**Testing approach:**
- Induce failures (disconnect database, corrupt config, kill service)
- Verify system behavior defaults to secure state
- Ensure error messages don't leak sensitive information

**Example test:**
```
Test: Database connection failure during authentication
Expected: Login denied, generic error message ("System unavailable")
Not expected: Detailed SQL error exposing table names
```

---

### 🔷 Complete Mediation

**Definition:** Every access to every object must be checked for authority. Don't assume authority from previous checks.

**Problem:** Caching authorization decisions or skipping checks for "trusted" paths.

**Example:**
```
Bad: User passes login check → session token issued → all subsequent 
     requests trust the token without re-verifying permissions

Good: Every API request validates the token AND re-checks permissions
      for the specific resource being accessed
```

**Testing approach:**
- Access a resource directly (bypassing intended flow)
- Change request parameters after authorization
- Verify that every access is independently authorized

---

### 🔷 Economy of Mechanism

**Definition:** Security designs should be as simple as possible. Complexity increases the attack surface.

**Implication:**
- Fewer components = fewer vulnerabilities
- Simpler code = easier to review and test
- Minimal features = reduced exposure

**Testing approach:**
- Identify unused features that are still enabled
- Check for unnecessary open ports, services, or endpoints
- Verify that disabled features are truly inaccessible

---

### 🎨 Open Design

**Definition:** Security should not depend on the secrecy of the design or implementation. Assume the attacker knows the system.

**Also known as:** Kerckhoffs's Principle (for cryptography) — "A cryptosystem should be secure even if everything about the system, except the key, is public knowledge."

**Implication:**
- Don't rely on "security through obscurity"
- Publish design for peer review
- Secrets should be limited to keys, passwords, tokens

**Testing approach:**
- Test with full knowledge of the system (white box)
- Verify that knowing the architecture doesn't enable attacks
- Ensure hardcoded secrets are not present in code

---

### 🔷 Psychological Acceptability

**Definition:** Security mechanisms should not make the system too difficult to use. Users will bypass security if it interferes with their work.

**Example:**
- Password policy requiring 20-character passwords with monthly changes → users write passwords on sticky notes
- Complex MFA for every minor action → users find workarounds

**Testing approach:**
- Evaluate if security controls are proportional to risk
- Check for user bypass behaviors (shadow IT, shared accounts)
- Verify that security doesn't create new vulnerabilities through usability failures

---

## 🔒 2.2 Security Controls

### 🧪 Types of Security Controls

**Preventive Controls:** Block attacks before they succeed
- Firewalls, WAFs, input validation, encryption, access controls

**Detective Controls:** Identify attacks in progress or after they occur
- IDS/IPS, SIEM, log monitoring, intrusion detection

**Corrective Controls:** Respond to and recover from attacks
- Backups, incident response, patches, failover systems

**Deterrent Controls:** Discourage attackers
- Warning banners, legal notices, visible security measures

**Compensating Controls:** Alternative measures when primary controls aren't feasible
- Additional monitoring when encryption isn't possible

### 🔷 Control Categories

| Category | Examples |
|----------|----------|
| **Physical** | Locks, guards, cameras, biometric access |
| **Technical** | Firewalls, encryption, access controls, IDS |
| **Administrative** | Policies, procedures, training, audits |

---

## 📑 2.3 Security Requirements

### 📑 Security vs. Functional Requirements

**Functional requirement:** "The system shall allow users to transfer funds between accounts."

**Security requirement:** "The system shall require MFA for transfers over $1,000."

**Key difference:** Security requirements specify HOW the feature must be protected, not just THAT it exists.

### 🧪 Types of Security Requirements

**Authentication requirements:**
- "All admin functions require two-factor authentication."
- "Passwords must be at least 12 characters with mixed case, numbers, and symbols."

**Authorization requirements:**
- "Users can only access their own account data."
- "Managers can view team data but not modify it."

**Data protection requirements:**
- "All PII must be encrypted at rest using AES-256."
- "Data in transit must use TLS 1.3."

**Audit requirements:**
- "All authentication attempts must be logged with timestamp and IP."
- "Log retention: 7 years."

### 📑 Testing Security Requirements

**Traceability matrix:**

| Requirement | Test Case | Status |
|-------------|-----------|--------|
| REQ-SEC-01: Passwords 12+ chars | TC-01: Create password "short" → rejected | PASS |
| REQ-SEC-02: MFA for admin | TC-02: Access admin without MFA → denied | PASS |
| REQ-SEC-03: Encrypt PII | TC-03: Query database → PII encrypted | PASS |
| REQ-SEC-04: Log auth attempts | TC-04: Failed login → log entry created | PASS |

---

## 🔁 2.4 Secure SDLC

### 🔒 Security in Development Phases

**Requirements:**
- Define security requirements alongside functional requirements
- Conduct threat modeling
- Identify compliance requirements (GDPR, PCI-DSS, HIPAA)

**Design:**
- Apply security principles (defense in depth, least privilege)
- Perform architecture risk analysis
- Define security test plan

**Implementation:**
- Follow secure coding guidelines (OWASP, CWE)
- Conduct peer code reviews with security focus
- Use static analysis tools (SAST)

**Testing:**
- Perform security testing (DAST, penetration testing, fuzzing)
- Validate security requirements
- Test incident response procedures

**Deployment:**
- Secure configuration (hardening guides)
- Final security assessment
- Monitor for security events

**Maintenance:**
- Patch management
- Vulnerability scanning
- Security regression testing
- Update threat models

### 🔒 Shift-Left Security

**Definition:** Integrating security activities earlier in the SDLC rather than leaving them to the end.

**Benefits:**
- Find vulnerabilities earlier when they are cheaper to fix
- Reduce security debt
- Enable continuous security validation

**Activities:**
- Security requirements in sprint planning
- Static analysis on every commit
- Dependency vulnerability scanning in CI/CD
- Security unit tests

---

## 💡 Worked Examples

### 💡 Worked Example 1: Applying Security Principles

**Scenario:** Design security for an online banking application.

| Principle | Application | Test Approach |
|-----------|-------------|---------------|
| Defense in depth | Firewall + WAF + input validation + parameterized queries + encryption | Test each layer; verify no single point of failure |
| Least privilege | Customer can view own account only; teller can view assigned customers; admin can manage users but not transactions | Test each role's boundaries; attempt privilege escalation |
| Separation of duties | Code deployment requires peer review and manager approval; large transfers require second approval | Test that one person cannot complete sensitive workflows alone |
| Fail secure | Database failure → all transactions denied, not all approved | Induce DB failure; verify transactions blocked |
| Complete mediation | Every API request validates token AND permissions | Access resource with valid token but wrong permissions; verify denial |

### 💡 Worked Example 2: Security Control Selection

**Scenario:** Protecting a web application handling credit card data.

| Threat | Preventive | Detective | Corrective |
|--------|-----------|-----------|------------|
| SQL injection | Input validation, parameterized queries | WAF alerts, log monitoring | Patch code, review logs |
| Data breach | Encryption at rest, access controls | DLP monitoring, audit logs | Incident response, breach notification |
| DDoS attack | Rate limiting, CDN | Traffic monitoring | Failover to backup, DDoS mitigation |
| Insider threat | Least privilege, separation of duties | Behavioral analytics, audit logs | Access revocation, forensic investigation |

### 💡 Worked Example 3: Security Requirements Traceability

**Scenario:** A healthcare patient portal.

| ID | Security Requirement | Test Case | Expected Result | Priority |
|----|---------------------|-----------|-----------------|----------|
| SR-01 | All data transmission must use TLS 1.2+ | TC-01: Capture login traffic with Wireshark | No plaintext credentials | High |
| SR-02 | Patients can only view their own records | TC-02: Patient A requests Patient B's record | HTTP 403 Forbidden | High |
| SR-03 | Session expires after 15 minutes of inactivity | TC-03: Wait 16 minutes, attempt action | Redirect to login | High |
| SR-04 | Passwords must be hashed with bcrypt | TC-04: Query database for user password | Encrypted hash, not plaintext | High |
| SR-05 | All PHI access is logged | TC-05: View patient record; check audit log | Entry with user, timestamp, record ID | Medium |
| SR-06 | Account locks after 5 failed login attempts | TC-06: Attempt 6 wrong passwords | Account locked, alert sent | Medium |
