# 📂 Case Study 1 — E-Banking Application Security

## ⭐ Context

You are the Security Test Lead for SecureBank, a regional bank launching a new online banking platform. The application allows customers to:
- View account balances and transaction history
- Transfer funds between accounts and to external accounts
- Pay bills and schedule recurring payments
- Manage beneficiaries and standing orders
- Update personal details and contact information

**Technology Stack:**
- Frontend: React SPA, mobile responsive
- Backend: Java Spring Boot REST APIs
- Database: PostgreSQL
- Authentication: OAuth 2.0 + TOTP MFA
- Hosting: Cloud (AWS) with CDN

**Regulatory Requirements:**
- PCI-DSS (payment card data)
- GDPR (customer PII)
- Banking regulations (transaction integrity, audit trails)

---

## 🔬 Task 1: Threat Model and STRIDE Analysis

**Question:** Create a threat model for the funds transfer feature.

**Model Answer:**

**Data Flow:**
```
Customer Browser → CDN → WAF → API Gateway → Authentication Service → Transfer Service → Database
                                    → Notification Service → Email/SMS
```

**STRIDE Analysis:**

| Element | Spoofing | Tampering | Repudiation | Info Disclosure | DoS | Elevation |
|---------|----------|-----------|-------------|-----------------|-----|-----------|
| Customer Browser | Fake bank site (phishing) | — | — | Keylogger, MITM | — | — |
| CDN | Cache poisoning | — | — | — | CDN outage | — |
| WAF | — | WAF rule bypass | — | — | WAF bypass → DoS | — |
| API Gateway | Fake API requests | Request modification | Missing audit logs | Error messages | Rate limit bypass | — |
| Auth Service | Credential theft, session hijacking | — | No MFA enforcement | Token exposure | Login DoS | Privilege escalation |
| Transfer Service | — | Transfer amount modification | No transfer receipts | Transaction data leak | Transfer overload | Internal API access |
| Database | — | Direct DB tampering | Missing audit trail | Unencrypted data | DB overload | DB user escalation |
| Notification | Email spoofing | — | — | Email interception | Notification flood | — |

**Top 5 Threats (by risk):**
1. Transfer amount tampering (T) → MITM without TLS or validation bypass
2. Credential theft leading to unauthorized transfer (S) → Phishing, brute force
3. Database tampering (T) → Direct access if compromised
4. Session hijacking (S) → Predictable tokens, XSS
5. Repudiation (R) → Missing transfer audit trail

---

## 🎨 Task 2: Security Test Design

**Question:** Design comprehensive security tests for the transfer feature.

**Model Answer:**

**Authentication Tests:**

| Test | Input | Expected Result |
|------|-------|-----------------|
| Valid MFA transfer | Correct password + TOTP | Transfer authorized |
| Missing MFA | Correct password only | Transfer denied |
| Replay TOTP | Reuse same TOTP code | Transfer denied |
| Brute force TOTP | 100 incorrect codes | Account locked |
| Session timeout | Transfer after 15 min idle | Redirect to login |

**Authorization Tests:**

| Test | Input | Expected Result |
|------|-------|-----------------|
| Own account transfer | Transfer from Account A to B (both owned) | Success |
| Other's account | Transfer from Account C (not owned) | Denied (403) |
| Negative amount | Transfer -$1000 | Rejected, validation error |
| Exceed limit | Transfer $1,000,000 (limit $50,000) | Rejected or requires additional approval |
| Closed account | Transfer to closed account | Rejected |

**Input Validation Tests:**

| Test | Input | Expected Result |
|------|-------|-----------------|
| SQL injection in amount | `amount=100; DROP TABLE accounts` | Sanitized or rejected |
| XSS in description | `desc=<script>alert(1)</script>` | Encoded in response |
| Path traversal in account ID | `from=../../../admin` | Rejected |
| Oversized amount | `amount=999999999999999999` | Rejected (integer overflow) |
| Null bytes | `amount=100%00` | Rejected |

**Session Management Tests:**

| Test | Input | Expected Result |
|------|-------|-----------------|
| Session fixation | Login with attacker session ID | New session ID issued |
| Concurrent sessions | Transfer from two browsers | One succeeds or policy enforced |
| Logout replay | Replay request after logout | Denied |
| Cookie flags | Inspect transfer cookie | HttpOnly, Secure, SameSite=Strict |

---

## ⭐ Task 3: Vulnerability Assessment and Prioritization

**Question:** The penetration test finds the following issues. Prioritize and plan remediation.

**Model Answer:**

| ID | Finding | CVSS | Context | Business Risk | Priority | Remediation |
|----|---------|------|---------|--------------|----------|-------------|
| SEC-01 | SQL injection in transaction search | 9.8 | Public endpoint, no auth required | Critical — full database access | P1 | Parameterized queries within 24h |
| SEC-02 | Weak password policy (min 6 chars) | 7.5 | All user accounts | High — brute force risk | P2 | Enforce 12+ chars, complexity within 1 week |
| SEC-03 | Verbose error messages expose stack traces | 5.3 | All endpoints | Medium — aids reconnaissance | P3 | Custom error pages within 2 weeks |
| SEC-04 | Missing rate limiting on login | 6.5 | Login endpoint | High — credential stuffing | P2 | Implement CAPTCHA + lockout within 1 week |
| SEC-05 | Session token predictable | 8.1 | Authenticated users | High — session hijacking | P2 | Switch to cryptographically random tokens |
| SEC-06 | CSP header missing | 4.3 | All pages | Low — XSS mitigation missing | P4 | Add CSP in next release |
| SEC-07 | TOTP not enforced for transfers | 7.2 | Transfer endpoint | High — MFA bypass for critical action | P2 | Enforce TOTP for all transfers |

**Remediation Plan:**

| Week | Actions |
|------|---------|
| 1 | Fix SEC-01 (SQL injection), SEC-02 (password policy), SEC-04 (rate limiting) |
| 2 | Fix SEC-05 (session tokens), SEC-07 (TOTP enforcement) |
| 3 | Fix SEC-03 (error messages), begin SEC-06 (CSP) |
| 4 | Complete SEC-06, full regression testing |
| 5 | Re-penetration test, verify all fixes |

---

## ⭐ Task 4: Verification Testing

**Question:** After fixing the SQL injection, how do you verify the fix and ensure no regression?

**Model Answer:**

**Verification Steps:**

1. **Re-run original attack:**
   ```
   POST /api/transactions/search
   Body: {"query": "'; DROP TABLE users; --"}
   
   Expected: 400 Bad Request, no database error, no table dropped
   ```

2. **Test valid functionality:**
   ```
   POST /api/transactions/search
   Body: {"query": "grocery", "date_from": "2024-01-01"}
   
   Expected: 200 OK, relevant transactions returned
   ```

3. **Test edge cases:**
   - Special characters: `%`, `_`, `*`, `?`
   - Unicode: `日本語`, `العربية`
   - Long strings: 10,000 characters
   - Null/empty: `""`, `null`

4. **SAST re-scan:**
   - Re-run SonarQube/Checkmarx on modified code
   - Verify no SQL injection patterns detected
   - Check for similar issues in other queries

5. **DAST re-scan:**
   - Re-run OWASP ZAP on the application
   - Verify SQL injection category shows zero findings
   - Check for new vulnerabilities introduced by the fix

6. **Regression test suite:**
   - Run full transfer test suite (100+ test cases)
   - Verify all existing functionality works
   - Performance test: ensure parameterized queries don't slow down searches

**Sign-off Criteria:**
- All SQL injection tests pass (negative cases blocked, positive cases work)
- SAST and DAST scans show zero SQL injection findings
- Performance within 10% of baseline
- No new security findings introduced
