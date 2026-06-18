# 🪤 Chapter 2 — Scaling Agile Testing: Exam Traps

## 🪤 Trap 1: Each Team Tests Independently Without Integration

**Trap:** Team-level quality doesn't guarantee system quality. Integration and system testing are essential.

**Example question:**
> Each of 5 teams achieves 100% sprint test pass rate. At release, the system fails. The likely cause is:
>
> A. Individual team tests are wrong
> B. Missing integration and system-level validation across teams
> C. Only performance issues
> D. Only security issues

**Correct answer:** B — Cross-team integration testing is essential at scale.

---

## 🪤 Trap 2: One Definition of Done Fits All Teams

**Trap:** Teams have different contexts. A baseline DoD with team-specific additions is more practical.

**Example question:**
> Management mandates the exact same Definition of Done for all 20 teams. The risk is:
>
> A. Teams will be more consistent
> B. Teams with different contexts may adopt DoD ritualistically without real quality improvement
> C. Only slower sprints
> D. Only more meetings

**Correct answer:** B — DoD should have a baseline with team-appropriate additions.

---

## 🪤 Trap 3: Using Production Data in Shared Test Environments

**Trap:** Production data in shared environments causes privacy risks and conflicts.

**Example question:**
> A team uses production database snapshots in shared test environments. The risk is:
>
> A. No risk — production data is most realistic
> B. Privacy violations, data conflicts between teams, and potential GDPR issues
> C. Only slower tests
> D. Only more storage

**Correct answer:** B — Use synthetic or anonymized data in shared environments.

---

## 🪤 Trap 4: Ignoring Dependencies Until Integration

**Trap:** Dependencies discovered late cause delays. Identify and mitigate early.

**Example question:**
> Team B discovers on day 8 of a 10-day sprint that Team A's API change breaks their work. The prevention is:
>
> A. Work faster
> B. Early dependency identification, contract tests, and regular cross-team sync
> C. Only more testers
> D. Only longer sprints

**Correct answer:** B — Dependencies must be identified and mitigated early.

---

## 🪤 Trap 5: Manual Regression at Scale

**Trap:** Manual regression across multiple teams is too slow and error-prone. Automation is essential.

**Example question:**
> A 10-team ART does manual regression before each release. It takes 3 weeks and still misses issues. The solution is:
>
> A. Hire more manual testers
> B. Invest in automated regression with CI/CD integration
> C. Only extend the release cycle
> D. Only reduce test scope

**Correct answer:** B — Scaled regression requires automation.
