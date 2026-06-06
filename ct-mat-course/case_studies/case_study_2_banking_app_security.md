# Case Study 2 — Banking App Security and Compliance

## Context

You are the Security Test Lead for SecureBank Mobile, updating the banking app to comply with new regulations.

**Requirements:**
- Multi-factor authentication (biometric + PIN)
- End-to-end encryption for all transactions
- Jailbreak/root detection
- Certificate pinning
- OWASP MASVS Level 2 compliance
- GDPR data protection

---

## Task 1: Security Test Plan

**Question:** Design a security testing plan.

**Model Answer:**

| Category | Tests | Tools |
|----------|-------|-------|
| **Data Storage** | Local DB encryption, keychain/keystore usage, log sanitization | MobSF, manual inspection |
| **Communication** | TLS 1.3, certificate pinning, no cleartext traffic | OWASP ZAP, Burp Suite |
| **Authentication** | Biometric bypass attempts, session timeout, token handling | Frida, Objection |
| **Code Quality** | Hardcoded secrets, injection vulnerabilities, SAST | SonarQube, truffleHog |
| **Resilience** | Root/jailbreak detection, debug detection, tamper detection | Rooted/jailbroken devices |

---

## Task 2: Authentication Testing

**Question:** Test the biometric + PIN authentication flow.

**Model Answer:**

| Test Case | Attack / Scenario | Expected Defense |
|-----------|-----------------|------------------|
| TC-01 | Fingerprint with wrong finger 5 times | Fallback to PIN; account not locked |
| TC-02 | Face ID with photo | Rejected (liveness detection) |
| TC-03 | Device without biometric hardware | PIN only; graceful degradation |
| TC-04 | Rooted device with biometric hooking library | Detect root; block or downgrade security |
| TC-05 | Background app for 5 minutes | Require re-authentication |
| TC-06 | App terminated and relaunched | Require full authentication |
| TC-07 | MITM with fake certificate | Certificate pinning rejects connection |

---

## Task 3: Data Protection

**Question:** Verify GDPR and data protection compliance.

**Model Answer:**

| Requirement | Test | Result |
|-------------|------|--------|
| Data minimization | Only necessary data collected | Pass |
| Consent management | User can withdraw consent | Pass |
| Right to erasure | "Delete my account" removes all data | Pass |
| Data portability | Export user data in readable format | Pass |
| Encryption at rest | Local database encrypted | Pass (SQLCipher) |
| Encryption in transit | TLS 1.3 enforced | Pass |
| No PII in logs | Audit logs for sensitive data | Pass |

---

## Task 4: Compliance Report

**Question:** Summarize the security assessment.

**Model Answer:**

| Area | Status | Findings |
|------|--------|----------|
| MASVS V1: Architecture | Pass | Secure design documented |
| MASVS V2: Data Storage | Pass with note | Encrypted; minor logging improvement needed |
| MASVS V3: Cryptography | Pass | Strong algorithms, proper key management |
| MASVS V4: Authentication | Pass | MFA implemented correctly |
| MASVS V5: Network | Pass | Certificate pinning active |
| MASVS V6: Platform | Pass | Root/jailbreak detection active |
| MASVS V7: Code Quality | Pass | SAST clean, no secrets found |
| MASVS V8: Resilience | Pass | Obfuscation and anti-tampering implemented |

**Remediation:**
- Remove account numbers from debug logs (non-critical, 1-week fix)
- Implement certificate pinning backup pin (medium, 2-week fix)

**Overall:** APPROVED for production with minor fixes scheduled
