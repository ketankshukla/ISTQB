# 🪤 Chapter 5 — Security Test Execution and Analysis: Exam Traps

## 🪤 Trap 1: Reporting Raw Tool Output Without Validation

**Trap:** Automated tools report potential issues. Manual validation is required to confirm real vulnerabilities.

**Example question:**
> A team reports all 200 SAST findings as "vulnerabilities" without validation. The issue is:
>
> A. They are thorough
> B. Many may be false positives; validation is required before reporting
> C. Only that the report is too long
> D. Only that developers will ignore it

**Correct answer:** B — Validate findings before reporting.

---

## 🪤 Trap 2: Treating CVSS as the Only Severity Measure

**Trap:** CVSS is technical severity; business context (data sensitivity, exposure) may change priority.

**Example question:**
> Two vulnerabilities both have CVSS 8.0. The team fixes the one on the public website first and delays the one on the internal payment API. The better approach is:
>
> A. CVSS is the same, so either order is fine
> B. The payment API vulnerability likely has higher business impact and should be prioritized
> C. Only fix public-facing issues
> D. Only fix internal issues

**Correct answer:** B — Business context adjusts technical severity.

---

## 🪤 Trap 3: Testing in Production Without Authorization

**Trap:** Unauthorized security testing in production can be illegal and disruptive.

**Example question:**
> A tester performs a DoS test on the production environment without permission to "see if it works." This is:
>
> A. Appropriate — production is the real target
> B. Unauthorized, potentially illegal, and disruptive; testing should be in isolated environments with permission
> C. Only wrong during business hours
> D. Only wrong for external testers

**Correct answer:** B — Never test production without explicit authorization.

---

## 🪤 Trap 4: Accepting Developer Self-Verification Only

**Trap:** Independent verification by security team ensures fixes are real and complete.

**Example question:**
> A developer says they fixed a vulnerability and closes the ticket without independent verification. The risk is:
>
> A. The developer is trustworthy
> B. The fix may be incomplete, partial, or the wrong root cause; independent retest is needed
> C. Only that it takes longer
> D. Only that it costs more

**Correct answer:** B — Independent retest verifies remediation.

---

## 🪤 Trap 5: Ignoring Test Environment Realism

**Trap:** Tests in unrealistic environments may not reflect production behavior.

**Example question:**
> A vulnerability is "fixed" in test but the production environment has different configurations. The risk is:
>
> A. No risk — the fix is the same
> B. The production environment may still be vulnerable due to configuration differences
> C. Only that tests are slower
> D. Only that documentation is different

**Correct answer:** B — Environments should mirror production for valid results.
