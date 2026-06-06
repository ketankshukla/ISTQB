# Chapter 6 — DevOps Quality Tools and Automation: Exam Traps

## Trap 1: Selecting Tools Based on Hype Alone

**Trap:** Tool selection must consider team skills, existing stack, and actual needs. Popular doesn't mean right.

**Example question:**
> A team selects Cypress for UI testing because it's trending on Twitter, but the app must support IE11. The issue is:
>
> A. Cypress is always the best choice
> B. Cypress doesn't support IE11; browser requirements must drive tool selection
> C. Only speed matters
> D. Only cost matters

**Correct answer:** B — Requirements (IE11 support) should drive tool selection.

---

## Trap 2: Ignoring Test Report Value

**Trap:** Test reports aren't just pass/fail. They provide trends, coverage, and debugging information.

**Example question:**
> A team runs 500 tests but only checks if the final status is green. They miss:
>
> A. Nothing — green is enough
> B. Trend data, flaky test identification, coverage gaps, and debugging details
> C. Only the build time
> D. Only the number of tests

**Correct answer:** B — Reports contain valuable diagnostic and trend information.

---

## Trap 3: Sharing Test Databases Between Runs

**Trap:** Shared test databases cause flaky tests from leftover data. Ephemeral/isolated data is better.

**Example question:**
> Integration tests fail intermittently because test data from previous runs conflicts. The fix is:
>
> A. Run tests more slowly
> B. Use ephemeral databases or clean up data between runs
> C. Ignore flaky tests
> D. Only run tests manually

**Correct answer:** B — Isolated/ephemeral data prevents cross-test contamination.

---

## Trap 4: Treating All Tests the Same in CI

**Trap:** Fast tests should run early, slow tests later. Running everything together wastes time.

**Example question:**
> A pipeline runs unit tests, integration tests, and end-to-end UI tests together in one stage. The improvement is:
>
> A. No improvement needed
> B. Split into stages: fast unit tests first, slow E2E tests later
> C. Remove unit tests
> D. Remove all tests

**Correct answer:** B — Stage tests by speed for faster feedback.

---

## Trap 5: Forgetting Flaky Test Management

**Trap:** Flaky tests erode trust in CI. They must be identified, quarantined, and fixed.

**Example question:**
> A test fails 10% of the time with no code changes. The team should:
>
> A. Ignore it if it usually passes
> B. Quarantine the test, investigate root cause, and fix or remove it
> C. Run it more times until it passes
> D. Disable all tests

**Correct answer:** B — Flaky tests must be quarantined and fixed.
