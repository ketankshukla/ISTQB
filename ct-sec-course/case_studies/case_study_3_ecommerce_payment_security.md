# Case Study 3 — E-Commerce Payment Security

## Context

You are the Security Test Manager for ShopMax, an e-commerce platform processing 100,000 transactions daily. The company is preparing for PCI-DSS compliance audit.

**Payment Flow:**
1. Customer adds items to cart
2. Customer proceeds to checkout
3. Payment page loads (hosted payment page from payment processor)
4. Customer enters card details (on processor's page)
5. Processor returns token to ShopMax
6. ShopMax completes order with token

**Technology:**
- Frontend: React
- Backend: Node.js/Express
- Payment Processor: Stripe (tokenization)
- Database: PostgreSQL (stores order data, NOT card data)
- Infrastructure: AWS

**Compliance:** PCI-DSS Level 1 (processes > 6M card transactions/year)

---

## Task 1: PCI-DSS Scope and Testing

**Question:** Define the PCI-DSS scope and corresponding security tests.

**Model Answer:**

**Scope Definition:**

ShopMax uses a hosted payment page (Stripe). Card data never touches ShopMax servers.

| Component | In PCI Scope? | Reason |
|-----------|-------------|--------|
| Web server hosting checkout page | YES | Redirects to payment page; could be compromised |
| Application server (Node.js) | YES (partial) | Receives payment tokens, processes orders |
| Database (PostgreSQL) | YES (partial) | Stores order data, token references |
| CDN | YES (partial) | Serves checkout page; could inject malicious code |
| Payment processor (Stripe) | NO | Out of scope (PCI compliant third party) |
| Analytics server | NO | No card data |

**SAQ Type:** SAQ A (card-not-present, fully outsourced)

**Required Tests:**

| PCI Requirement | Test | Expected Result |
|-----------------|------|-----------------|
| 1: Firewall | Verify AWS security groups restrict access | Only necessary ports open |
| 2: Default passwords | Scan for default/weak credentials | No default passwords |
| 3: Stored data | Verify no card data stored | PAN, CVV, track data absent |
| 4: Encrypted transmission | Verify TLS 1.2+ for all connections | No unencrypted traffic |
| 5: Anti-virus | Verify endpoint protection | Current AV on all servers |
| 6: Secure development | Verify patch management, code review | Recent patches, reviewed code |
| 7: Restrict access | Verify role-based access to cardholder data | Least privilege enforced |
| 8: Authentication | Verify unique IDs, strong passwords | MFA for admin, password policy enforced |
| 9: Physical access | Verify AWS data center controls | SSAE-16 SOC 2 reports |
| 10: Logging | Verify audit logs for all access | Complete audit trail |
| 11: Scanning | Quarterly ASV scan | No high/critical vulnerabilities |
| 12: Policy | Security policy documented and followed | Up-to-date policy, training records |

---

## Task 2: Payment Token Security Testing

**Question:** Test the security of the payment token flow.

**Model Answer:**

**Token Flow Tests:**

| Step | Test | Expected Result |
|------|------|-----------------|
| 1. Checkout page loads | Verify redirect to Stripe | HTTPS, valid Stripe domain |
| 2. iFrame embedding | Verify iframe origin | `stripe.com` only |
| 3. Card data entry | ShopMax server receives no card data | Network capture shows no PAN/CVV |
| 4. Token generation | Verify token format | Stripe token (not real card number) |
| 5. Token transmission | Token sent to ShopMax backend | Over TLS only |
| 6. Token storage | Check database for tokens | No raw card data; tokens only |
| 7. Token reuse | Attempt to reuse token | Rejected (single-use tokens) |
| 8. Token forgery | Create fake token | Rejected by Stripe API |

**Man-in-the-Middle Tests:**

| Test | Attack | Expected Result |
|------|--------|-----------------|
| Certificate validation | Invalid certificate on checkout | Browser warning, connection refused |
| HSTS enforcement | HTTP request to checkout | Redirect to HTTPS |
| Mixed content | HTTP resource on HTTPS page | Blocked by browser |

---

## Task 3: Web Application Security Testing

**Question:** Design security tests for the e-commerce application (excluding payment page, which is hosted).

**Model Answer:**

**Cart and Checkout Tests:**

| Test | Attack | Expected Result |
|------|--------|-----------------|
| Price tampering | Modify item price in cart request | Server validates price against database |
| Negative quantity | Set quantity to -1 | Rejected (quantity must be >= 1) |
| Free shipping bypass | Remove shipping parameter | Server applies default shipping |
| Coupon abuse | Reuse single-use coupon | Rejected after first use |
| Race condition | Two simultaneous orders with last item | One succeeds, one gets "out of stock" |
| Session fixation | Reuse pre-login session after login | New session ID issued |

**User Account Tests:**

| Test | Attack | Expected Result |
|------|--------|-----------------|
| Registration abuse | Create 1000 accounts | Rate limited or CAPTCHA triggered |
| Password reset abuse | Request reset for arbitrary email | Rate limited; no account enumeration |
| Profile XSS | `<img src=x onerror=alert(1)>` | Output encoded |
| Email enumeration | Check if "user@exists.com" gets different error | Same generic message for all |
| Admin access | Access /admin as regular user | 403 Forbidden |

**Order History Tests:**

| Test | Attack | Expected Result |
|------|--------|-----------------|
| IDOR | Access /orders/1000 (user owns 999,1001) | 403 Forbidden |
| SQL injection in order filter | `status=shipped' OR '1'='1` | Rejected or sanitized |
| Mass assignment | Add `is_admin=true` to order request | Ignored (whitelist) |

---

## Task 4: Compliance Validation

**Question:** Prepare for the PCI-DSS QSA (Qualified Security Assessor) audit.

**Model Answer:**

**Evidence Package:**

| Requirement | Evidence | Status |
|-------------|----------|--------|
| 1. Firewall config | AWS security group rules, network diagram | Documented |
| 2. No default passwords | Credential audit report | Pass |
| 3. No stored card data | Database scan for PAN patterns | Pass |
| 4. TLS encryption | SSL Labs report, certificate inventory | Grade A+ |
| 5. Anti-virus | AWS GuardDuty, endpoint protection logs | Active |
| 6. Secure SDLC | Code review logs, SAST/DAST reports, patch history | Documented |
| 7. Access controls | RBAC matrix, access reviews | Enforced |
| 8. Authentication | Password policy, MFA logs, account review | Enforced |
| 9. Physical security | AWS compliance certificates | Obtained |
| 10. Logging | SIEM configuration, log samples, retention policy | 1 year retention |
| 11. Vulnerability scans | ASV scan reports (last 4 quarters) | No critical findings |
| 12. Security policy | Policy document, training attendance | Up to date |

**Pre-Audit Self-Testing:**

1. **Internal vulnerability scan:**
   - Run Nessus/OpenVAS on all in-scope systems
   - Remediate all high/critical findings
   - Document false positives with justification

2. **Penetration test:**
   - Hire external pen tester (required annually)
   - Scope: All in-scope systems
   - Focus: Cardholder data environment

3. **Code review:**
   - Review all code handling payment tokens
   - Verify no card data logging
   - Verify token validation logic

4. **Social engineering test:**
   - Phishing simulation to employees
   - Verify reporting procedures
   - Training effectiveness measurement

**Common Audit Failures to Avoid:**
- Default passwords on any in-scope system
- Unencrypted cardholder data transmission
- Missing patches older than 30 days
- Incomplete audit logs
- Shared administrator accounts
- Missing security policy acknowledgments
