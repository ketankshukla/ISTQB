# 🪤 Chapter 4 — Security Test Automation: Exam Traps

## 🪤 Trap 1: Running Security Scans Only Before Release

**Trap:** Shift-left means running security scans continuously, not just at release.

**Example question:**
> A team runs SAST and DAST only two weeks before release. The better approach is:
>
> A. Continue — thorough pre-release testing is sufficient
> B. Integrate into CI/CD to catch issues as early as possible
> C. Only run DAST daily
> D. Only run SAST monthly

**Correct answer:** B — Continuous integration of security scanning.

---

## 🪤 Trap 2: Blocking All Builds on Any Finding

**Trap:** Not all findings are equal. Block on critical/high; alert on medium/low with SLA.

**Example question:**
> A CI pipeline fails on every minor SAST finding, causing frequent developer frustration and workarounds. The solution is:
>
> A. Remove SAST from CI
> B. Configure severity-based gates — block on critical, alert on lower severity with remediation SLA
> C. Only run SAST manually
> D. Only run SAST after release

**Correct answer:** B — Severity-based gates balance security and velocity.

---

## 🪤 Trap 3: Ignoring False Positives

**Trap:** Unmanaged false positives create alert fatigue. They must be triaged and suppressed with justification.

**Example question:**
> A team receives 500 SAST alerts per week and ignores them because "most are false positives." The risk is:
>
> A. No risk — they know which are real
> B. Real vulnerabilities hide in the noise; false positives must be systematically triaged and suppressed
> C. Only slower development
> D. Only more storage

**Correct answer:** B — Systematic false positive management is essential.

---

## 🪤 Trap 4: Security Testing Without Developer Involvement

**Trap:** Security is most effective when developers own it, not just security teams.

**Example question:**
> A separate security team runs all scans and reports findings to developers. The better model is:
>
> A. Continue — security is the security team's job
> B. Developers run scans in their workflow; security team provides tools, guidance, and escalates critical issues
> C. Only manual testing
> D. Only outsourcing

**Correct answer:** B — Security is a shared responsibility.

---

## 🪤 Trap 5: Tool Selection Based on Brand Alone

**Trap:** Tools must fit the tech stack, integrate with CI/CD, and produce actionable results.

**Example question:**
> A team buys the most expensive security tool because "it must be the best." Later they find it doesn't support their programming language. The lesson is:
>
> A. Expensive tools are always better
> B. Evaluate tool fit (language support, integration, accuracy) before purchasing
> C. Only buy open-source tools
> D. Only use free tools

**Correct answer:** B — Fit and accuracy matter more than brand or price.
