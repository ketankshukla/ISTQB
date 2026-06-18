# 🪤 Chapter 6 — Security Testing Tools and Automation: Exam Traps

## 🪤 Trap 1: Confusing SAST, DAST, IAST, and SCA

**Trap:** These are distinct tool categories with different purposes. Exams test whether you know which to use when.

**Example question:**
> A team needs to find known vulnerabilities in third-party libraries. The BEST tool category is:
>
> A. SAST
> B. DAST
> C. SCA
> D. IAST

**Correct answer:** C — SCA (Software Composition Analysis) specifically identifies vulnerabilities in dependencies and third-party components.

---

## 🪤 Trap 2: Thinking One Tool Is Sufficient

**Trap:** Comprehensive security requires multiple tools at different stages. No single tool finds everything.

**Example question:**
> A team uses only OWASP ZAP and believes their application is secure. The weakness is:
>
> A. OWASP ZAP is not a real tool
> B. DAST alone misses code-level issues, dependency vulnerabilities, and business logic flaws; SAST, SCA, and manual testing are also needed
> C. OWASP ZAP is too expensive
> D. Only SAST is needed

**Correct answer:** B — Multiple tool categories and manual testing are needed for comprehensive security.

---

## 🪤 Trap 3: Running DAST on Production

**Trap:** DAST can be destructive (it sends attack payloads). It should run on staging/test environments, not production.

**Example question:**
> A team runs an active DAST scan against their production e-commerce site. The risk is:
>
> A. There is no risk — DAST is completely safe
> B. DAST sends attack payloads that could corrupt data, create fake orders, or cause denial of service in production
> C. DAST only works on production
> D. Production is the safest place to test

**Correct answer:** B — Active DAST sends payloads that can modify data or impact availability. Use staging/test environments.

---

## 🪤 Trap 4: Confusing Network Scanners with Application Scanners

**Trap:** Nmap and Nessus scan networks and hosts. OWASP ZAP and Burp Suite scan web applications. They serve different purposes.

**Example question:**
> A tester uses Nmap to scan a web application for SQL injection vulnerabilities. This is:
>
> A. The correct approach — Nmap finds all vulnerabilities
> B. Incorrect — Nmap is a network/port scanner; web application vulnerabilities require DAST tools like OWASP ZAP or Burp Suite
> C. Only true for SQL injection
> D. Nmap is a DAST tool

**Correct answer:** B — Nmap = network scanner. Web app vulnerabilities need web app scanners (ZAP, Burp Suite).

---

## 🪤 Trap 5: Ignoring CI/CD Security Integration

**Trap:** Security tools should be integrated into CI/CD, not run as one-off manual activities. Shift-left requires automation.

**Example question:**
> A security team runs manual scans once per quarter. The PRIMARY issue is:
>
> A. Quarterly scans are too frequent
> B. Vulnerabilities introduced between scans remain undetected for months; security tools should be integrated into CI/CD for continuous validation
> C. Manual scans are always more accurate
> D. Quarterly scans are sufficient for all compliance requirements

**Correct answer:** B — Quarterly scans leave long windows of exposure. CI/CD integration provides continuous feedback.
