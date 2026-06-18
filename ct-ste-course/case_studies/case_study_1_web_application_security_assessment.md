# 📂 Case Study 1 — Web Application Security Assessment

## ⭐ Context

You are the Security Test Lead for ShopOnline, an e-commerce platform processing 10,000 transactions daily.

**Application:**
- Web frontend (React)
- API layer (Node.js)
- Database (PostgreSQL)
- Payment integration (Stripe)

**Requirements:**
- PCI-DSS compliance
- GDPR compliance (EU customers)
- Annual penetration test

---

## ♟️ Task 1: Test Strategy

**Question:** Design a comprehensive security test strategy.

**Model Answer:**

**Scope:**
- In-scope: Web app, APIs, database access, payment flows, admin panel
- Out-of-scope: Stripe infrastructure, physical security

**Approach:**
| Phase | Technique | Owner | Timing |
|-------|-----------|-------|--------|
| Design | Threat modeling | Security architect | Sprint 0 |
| Development | SAST (Semgrep), SCA (Snyk) | Developers | Every commit |
| Integration | API security testing, code review | Security team | Weekly |
| Staging | DAST (OWASP ZAP), IAST | Security team | Nightly |
| Pre-release | Penetration test (grey-box) | External firm | Quarterly |
| Production | Bug bounty, monitoring | Security ops | Continuous |

---

## 📐 Task 2: Threat Modeling

**Question:** Apply STRIDE to the checkout flow.

**Model Answer:**

| Component | Threat | Mitigation | Test |
|-----------|--------|------------|------|
| Login | Spoofing (stolen creds) | MFA, account lockout | Brute force test |
| Cart | Tampering (price change) | Server-side validation | Parameter manipulation |
| Checkout | Info Disclosure (card data) | TLS, tokenization | Traffic capture |
| Payment | Repudiation | Audit logs, digital signatures | Log review |
| Search | DoS (resource exhaustion) | Rate limiting | Load test |
| Admin | Elevation of Privilege | RBAC | Role-based access test |

---

## 🗂️ Task 3: Vulnerability Management

**Question:** Handle findings from a penetration test.

**Model Answer:**

| Finding | CVSS | Business Impact | Action | Timeline |
|---------|------|---------------|--------|----------|
| SQL injection in search | 9.1 | Customer data exposure | Immediate fix + hotfix deploy | 24 hours |
| Weak session management | 7.5 | Session hijacking | Fix + retest | 1 week |
| Missing CSP header | 4.3 | XSS risk reduction | Add header + test | 2 weeks |
| Verbose error messages | 5.3 | Information leakage | Custom error pages | 2 weeks |

**Verification:**
- SQLi fix: Re-run original payload → rejected
- Session fix: Hijack attempt → fails
- CSP fix: Header present in all responses

---

## ⭐ Task 4: Compliance Validation

**Question:** Verify PCI-DSS requirements.

**Model Answer:**

| Requirement | Test | Result |
|-------------|------|--------|
| 3.4: PAN unreadable | Verify encryption at rest | AES-256 confirmed |
| 4.1: Encrypt transmission | TLS scan | TLS 1.3, no weak ciphers |
| 6.5: Address coding vulns | SAST scan | No injection, XSS, or buffer overflow |
| 11.3: Vulnerability scans | DAST quarterly | Quarterly reports on file |
| 10.2: Audit logs | Log review | All access to card data logged |

**Gap:**
- Requirement 8.2: MFA for admin not yet implemented
- Action: Implement MFA, test, document
