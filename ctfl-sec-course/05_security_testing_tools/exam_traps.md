# Chapter 5 — Security Testing Tools: Exam Traps

## Trap 1: Tools Find All Vulnerabilities

**Trap:** Tools have false negatives; manual testing and code review are still needed.

**Example question:**
> Automated security tools find all vulnerabilities in an application. This is:
>
> A. Correct — modern tools are comprehensive
> B. Incorrect — tools have false negatives and miss business logic flaws, zero-days, and complex vulnerabilities
> C. Only for old applications
> D. Only for new applications

**Correct answer:** B — Tools don't find everything.

---

## Trap 2: One Tool is Enough

**Trap:** Different tools find different issues; a toolkit approach is needed.

**Example question:**
> A single security testing tool is sufficient for comprehensive security assessment. This is:
>
> A. Correct — comprehensive tools exist
> B. Incorrect — different tools (SAST, DAST, scanner, pen test) find different vulnerability types; a combination is needed
> C. Only for small applications
> D. Only for large applications

**Correct answer:** B — Multiple tools needed.

---

## Trap 3: All Tool Findings are Real

**Trap:** Tools produce false positives that require triage.

**Example question:**
> Every finding from a security scanner is a real vulnerability that must be fixed. This is:
>
> A. Correct — scanners are accurate
> B. Incorrect — tools produce false positives that require manual triage to verify before fixing
> C. Only for commercial tools
> D. Only for open source tools

**Correct answer:** B — Triage needed for false positives.

---

## Trap 4: Tools Don't Need Configuration

**Trap:** Tools require proper configuration for accurate results.

**Example question:**
> Security tools work accurately out of the box without configuration. This is:
>
> A. Correct — tools are pre-configured
> B. Incorrect — tools require configuration for the technology stack, authentication, scope, and rules to produce accurate results
> C. Only for simple applications
> D. Only for complex applications

**Correct answer:** B — Configuration required.

---

## Trap 5: Open Source Tools are Inferior

**Trap:** Open source tools like OWASP ZAP and SonarQube are highly effective.

**Example question:**
> Open source security tools are always less effective than commercial tools. This is:
>
> A. Correct — commercial tools have more features
> B. Incorrect — open source tools like OWASP ZAP, SonarQube, and Nikto are widely used and effective; the best tool depends on the specific needs
> C. Only for enterprises
> D. Only for startups

**Correct answer:** B — Open source can be very effective.
