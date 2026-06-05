# Chapter 5 — Security Test Execution and Evaluation: Exam Traps

## Trap 1: Using CVSS Base Score Alone for Prioritization

**Trap:** CVSS base score doesn't consider whether the vulnerability is actually exploitable in your environment or if active exploits exist.

**Example question:**
> A vulnerability has CVSS 9.8 but exists only on an internal test server with no sensitive data. A vulnerability with CVSS 6.5 is on the public-facing production database. The higher business risk is:
>
> A. The CVSS 9.8 vulnerability (higher score = higher risk)
> B. The CVSS 6.5 vulnerability (production, public-facing, sensitive data)
> C. Both are equal risk
> D. Neither requires action

**Correct answer:** B — CVSS doesn't account for environment. Production public-facing database with 6.5 may be higher business risk than isolated test server with 9.8.

---

## Trap 2: Confusing False Positives and False Negatives

**Trap:** False positive = reported but doesn't exist. False negative = exists but not detected.

**Example question:**
> A DAST tool fails to detect a SQL injection that is later exploited by an attacker. This is:
>
> A. A false positive
> B. A false negative
> C. A true positive
> D. A true negative

**Correct answer:** B — Vulnerability exists but wasn't detected = false negative. False positive would be the tool reporting a vulnerability that doesn't exist.

---

## Trap 3: Thinking Remediation Ends at Patching

**Trap:** After fixing a vulnerability, verification testing is required to confirm the fix works and hasn't introduced new issues.

**Example question:**
> A team patches a SQL injection and immediately closes the ticket without testing. The risk is:
>
> A. There is no risk — patches always work
> B. The fix may not work, may be incomplete, or may introduce new vulnerabilities; verification testing is required
> C. Testing is optional for security fixes
> D. Patches never introduce issues

**Correct answer:** B — Verification testing confirms the fix works and checks for regressions.

---

## Trap 4: Ignoring Temporal and Environmental CVSS Metrics

**Trap:** CVSS has base, temporal, and environmental scores. Temporal factors (exploit maturity, remediation level) change over time.

**Example question:**
> A vulnerability initially scored CVSS 7.0. After public exploit code is released, its temporal score increases. This demonstrates:
>
> A. CVSS is broken
> B. Temporal metrics reflect that risk changes over time as exploit availability and remediation status evolve
> C. The base score was wrong
> D. Only base score matters

**Correct answer:** B — Temporal metrics capture changing risk (exploit availability, patch status).

---

## Trap 5: Reporting Vulnerabilities Without Evidence

**Trap:** Security reports must include proof. Vague findings are not actionable.

**Example question:**
> A security report states: "The application may have SQL injection." The PRIMARY weakness is:
>
> A. The finding is too specific
> B. The report lacks evidence, reproduction steps, affected components, and CVSS scoring needed for prioritization and remediation
> C. SQL injection is not a real vulnerability
> D. Reports should never include technical details

**Correct answer:** B — Vague findings without evidence, reproduction steps, or impact assessment are not actionable.
