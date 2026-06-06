# Chapter 6 — Finance Testing Tools and Automation: Exam Traps

## Trap 1: Using Production Data Unmasked in Test

**Trap:** Production financial data in test environments violates privacy regulations and security policies.

**Example question:**
> A team copies the production database to the test environment weekly for realistic testing. The risk is:
>
> A. No risk — production data is best for testing
> B. Violation of privacy regulations and potential data breach exposure
> C. Only slower performance
> D. Only higher storage costs

**Correct answer:** B — Production data must be masked/anonymized before use in test.

---

## Trap 2: Thinking Automation Eliminates Manual Testing in Finance

**Trap:** Automated tests cover calculations and workflows, but regulatory sign-off and exploratory testing still require human judgment.

**Example question:**
> A bank has 100% automated test coverage for its trading system. Manual testing is:
>
> A. No longer needed
> B. Still needed for regulatory acceptance, exploratory testing, and new scenario validation
> C. Only needed for performance testing
> D. Only needed for UI testing

**Correct answer:** B — Automation complements but does not replace all manual testing.

---

## Trap 3: Confusing Historical Replay with Synthetic Data

**Trap:** Historical replay uses actual past events. Synthetic data generates artificial scenarios. Different purposes.

**Example question:**
> A team wants to test how their algorithm would have performed during the 2008 financial crisis. They should use:
>
> A. Synthetic data with random volatility
> B. Historical replay of actual 2008 market data
> C. Only live market data today
> D. No data — just code review

**Correct answer:** B — Historical replay provides actual 2008 market conditions.

---

## Trap 4: Ignoring Segregation of Duties in CI/CD

**Trap:** In regulated environments, developers cannot approve production deployments. CI/CD must enforce segregation.

**Example question:**
> A developer configures the CI/CD pipeline to auto-deploy to production after tests pass. In a regulated financial environment, this is:
>
> A. Best practice
> B. A violation of segregation of duties; a separate approver must authorize production deployment
> C. Only wrong if tests fail
> D. Only wrong on weekends

**Correct answer:** B — Segregation of duties requires separate approval for production changes.

---

## Trap 5: Treating Tolerance Matches as Exact

**Trap:** Reconciliation tools use tolerances for matching. Testing must verify tolerance boundaries.

**Example question:**
> A reconciliation tool matches trades with a price tolerance of $0.01. Testing should verify:
>
> A. Only that exact matches work
> B. Boundary cases: exact, $0.01 difference, $0.02 difference
> C. Only the UI looks correct
> D. Only that reports generate

**Correct answer:** B — Tolerance boundaries must be tested for correct matching behavior.
