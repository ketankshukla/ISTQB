# 🪤 Chapter 5 — Infrastructure and Environment Testing: Exam Traps

## 🪤 Trap 1: Thinking IaC Doesn't Need Testing

**Trap:** IaC is code and needs testing. Untested infrastructure definitions cause production issues.

**Example question:**
> A team writes Terraform scripts but applies them directly to production without testing. The risk is:
>
> A. No risk — infrastructure code is simpler than application code
> B. Misconfigurations, security gaps, and resource errors reach production
> C. Only slower deployment
> D. Only more documentation

**Correct answer:** B — IaC must be tested like any other code.

---

## 🪤 Trap 2: Confusing Image Build with Image Security

**Trap:** Building a container image successfully doesn't mean it's secure. Vulnerability scanning is essential.

**Example question:**
> A Docker image builds without errors and deploys successfully. This means:
>
> A. The image is secure
> B. The image runs, but vulnerability scanning is still needed to ensure security
> C. No further testing needed
> D. Only performance testing remains

**Correct answer:** B — Build success ≠ security. Scan for CVEs.

---

## 🪤 Trap 3: Ignoring Environment Drift

**Trap:** Manual changes to environments create drift from IaC definitions. Drift causes "works on my machine" issues.

**Example question:**
> A production issue cannot be reproduced in staging. Investigation shows a manual firewall rule exists in production but not in IaC. This is:
>
> A. Expected
> B. Configuration drift that should be detected and remediated
> C. Only a documentation issue
> D. Only a performance issue

**Correct answer:** B — Drift from IaC definitions must be detected and fixed.

---

## 🪤 Trap 4: Testing DR Only on Paper

**Trap:** DR procedures must be actually executed, not just documented. Untested DR plans fail when needed.

**Example question:**
> A team has a documented DR plan but hasn't tested it in 2 years. During an actual outage, they discover backup restoration takes 6 hours instead of the documented 1 hour. The lesson is:
>
> A. Documentation is sufficient
> B. DR must be tested regularly with realistic scenarios and timings
> C. Only small companies need DR testing
> D. Backups are unnecessary

**Correct answer:** B — DR plans require regular realistic testing.

---

## 🪤 Trap 5: Thinking All Environments Must Be Identical

**Trap:** Production-like ≠ identical. Test environments can be smaller but must represent production behavior.

**Example question:**
> A test environment uses a single database instance while production has a multi-node cluster. Testing:
>
> A. Is invalid because environments are not identical
> B. Is valid for functional testing but may miss cluster-specific issues like replication lag
> C. Only works for UI testing
> D. Is always sufficient

**Correct answer:** B — Test environment doesn't need identical scale but should represent production patterns.
