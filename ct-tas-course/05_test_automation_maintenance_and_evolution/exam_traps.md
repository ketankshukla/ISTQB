# Chapter 5 — Test Automation Maintenance and Evolution: Exam Traps

## Trap 1: Treating Maintenance as Optional

**Trap:** Maintenance is 30-50% of automation effort. Not budgeting for it leads to unmaintainable suites.

**Example question:**
> A team budgets 100% of automation effort for new test creation and 0% for maintenance. The likely result is:
>
> A. Faster test creation
> B. Rapid accumulation of broken tests and eventual suite abandonment
> C. Only slower execution
> D. Only more documentation

**Correct answer:** B — Maintenance is essential; without it, tests decay.

---

## Trap 2: Refactoring Without Tests

**Trap:** Refactoring automation code without running tests risks introducing new failures.

**Example question:**
> A developer refactors the automation framework extensively without running the tests. The risk is:
>
> A. No risk — refactoring is safe
> B. The refactoring may break tests; always run tests before and after
> C. Only slower execution
> D. Only more memory usage

**Correct answer:** B — Refactoring requires verification that tests still pass.

---

## Trap 3: Deleting Tests Instead of Archiving

**Trap:** Deleted tests lose history. Archive retains traceability while removing from active execution.

**Example question:**
> A team deletes 30 old tests from version control. Later they need to verify a historical scenario was covered. The issue is:
>
> A. No issue — old tests don't matter
> B. Deleted tests lose history; archiving preserves traceability
> C. Only storage space
> D. Only execution time

**Correct answer:** B — Archive tests; don't delete them from version control history.

---

## Trap 4: Ignoring Technical Debt in Automation

**Trap:** Automation code accumulates technical debt just like application code. Regular refactoring is needed.

**Example question:**
> An automation suite hasn't been refactored in 2 years. New tests take longer to write and break frequently. This is:
>
> A. Normal for all automation
> B. Technical debt that requires scheduled refactoring investment
> C. Only a tooling issue
> D. Only a training issue

**Correct answer:** B — Technical debt in automation requires proactive management.

---

## Trap 5: Evolving Without a Plan

**Trap:** Tool or architecture changes need structured migration. Ad-hoc evolution causes coverage gaps.

**Example question:**
> A team switches automation tools over a weekend without a migration plan. The risk is:
>
> A. No risk — tools are similar
> B. Coverage gaps, broken tests, and lost productivity due to lack of structured migration
> C. Only slower tests
> D. Only more licenses

**Correct answer:** B — Evolution requires planned migration with parallel runs and validation.
