# Chapter 4 — Test Automation in Agile: Exam Traps

## Trap 1: Thinking Automation Replaces All Manual Testing

**Trap:** Automation is a complement to manual testing, not a replacement. Exploratory testing, usability testing, and subjective evaluation still require humans.

**Example question:**
> A team decides to automate 100% of testing and eliminate all manual testing. This is:
>
> A. The goal of agile testing
> B. A mistake — automation cannot replace exploratory and usability testing
> C. Required for CI/CD
> D. Only possible with AI tools

**Correct answer:** B — Automation cannot replace human judgment for exploratory and usability testing.

---

## Trap 2: Automating at the Wrong Level

**Trap:** Automating everything at the UI level creates slow, brittle suites. Push tests down to the API or unit level where possible.

**Example question:**
> A team automates all business logic tests through the UI because "that is how users interact with the system." The risk is:
>
> A. No risk — UI tests are the best tests
> B. High maintenance cost, slow execution, and brittleness from UI changes
> C. Tests will be too fast
> D. Users will not trust the tests

**Correct answer:** B — UI tests are slow and brittle. Business logic should be tested at the API or unit level.

---

## Trap 3: Ignoring Maintenance Costs in ROI

**Trap:** Automation requires ongoing maintenance (typically 30-70% of total effort). Ignoring this leads to overestimated ROI.

**Example question:**
> A team calculates automation ROI using only the initial development time. Their calculation will be:
>
> A. Perfectly accurate
> B. Overestimated because maintenance costs are ignored
> C. Underestimated
> D. Only valid for the first month

**Correct answer:** B — Maintenance is a significant ongoing cost. Ignoring it overestimates ROI.

---

## Trap 4: Not Integrating Tests into CI/CD

**Trap:** Automated tests that only run manually provide little value. They must be integrated into the CI/CD pipeline for fast, automatic feedback.

**Example question:**
> A team has 500 automated tests but only runs them once per month manually. The problem is:
>
> A. They have too many tests
> B. The tests are not providing continuous feedback because they are not integrated into CI/CD
> C. Monthly testing is sufficient for agile
> D. Manual execution is more reliable

**Correct answer:** B — Tests should run automatically on every commit for fast feedback.

---

## Trap 5: Automating Unstable Features

**Trap:** Automating tests for features with changing requirements leads to frequent rework and low ROI. Wait until requirements stabilize.

**Example question:**
> A team starts automating UI tests for a feature that is still undergoing significant design changes. The tests break every week. The BEST action is:
>
> A. Continue automating and fix tests weekly
> B. Delay UI automation until the design stabilizes; focus on API-level tests instead
> C. Stop all testing for this feature
> D. Hire more automation engineers

**Correct answer:** B — Automating unstable features wastes effort. Test at lower levels or wait for stability.
