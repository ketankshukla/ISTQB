# Case Study 1 — Web Application Security Assessment

## Scenario

An online banking application requires a security assessment before launch. The app uses:
- Java backend with Spring Boot
- React frontend
- MySQL database
- REST API for mobile clients
- OAuth2 authentication

## Questions

1. What security testing techniques should be applied?
2. What are the highest priority tests based on OWASP Top 10?
3. How should authentication and session management be tested?
4. What should the security test report include?

## Model Answers

### Q1
- **SAST:** SonarQube for Java code analysis
- **DAST:** OWASP ZAP for running application testing
- **Dependency scanning:** OWASP Dependency-Check for third-party libraries
- **Manual testing:** Business logic validation, complex flows
- **Penetration testing:** Black box assessment of production-like environment

### Q2
Priority based on OWASP Top 10 for banking:
1. **A01: Broken Access Control** — Verify role-based access
2. **A02: Cryptographic Failures** — TLS 1.2+, encrypted data at rest
3. **A03: Injection** — SQL injection in queries, XSS in UI
4. **A07: Authentication Failures** — Strong passwords, MFA, session timeout
5. **A10: Server-Side Request Forgery** — Validate all outgoing requests

### Q3
Authentication and session testing:
- Brute force resistance (account lockout)
- Session timeout and invalidation
- Token storage (not in localStorage for sensitive apps)
- MFA implementation
- Password complexity and storage (bcrypt)
- OAuth2 flow validation

### Q4
Report contents:
- Executive summary with risk rating
- Methodology and scope
- Detailed findings with CVSS scores
- Evidence (screenshots, request/response)
- Prioritized remediation steps
- Compliance mapping (PCI-DSS, GDPR)
