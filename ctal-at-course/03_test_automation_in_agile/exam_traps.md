# Chapter 3 — Test Automation in Agile: Exam Traps

## Trap 1: Thinking 100% of All Tests Should Be Automated

**Trap:** Not all tests should be automated. Exploratory, usability, and one-time tests are typically manual. The goal is strategic automation, not 100%.

**Example question:**
> A stakeholder insists that ALL testing must be automated to be truly agile. The technical test analyst should:
>
> A. Agree and automate everything
> B. Explain that exploratory and usability testing still require human judgment
> C. Refuse to do any manual testing
> D. Extend the sprint to allow time for full automation

**Correct answer:** B — Some testing (exploratory, usability) requires human judgment and cannot be fully automated.

---

## Trap 2: Confusing Record/Replay with Maintainable Automation

**Trap:** Record/replay creates brittle scripts that break with every UI change. Production automation needs structured frameworks like POM.

**Example question:**
> A team uses a record/replay tool for 200 UI tests. After a CSS update, 150 tests fail. The BEST long-term solution is:
>
> A. Re-record all 150 failed tests
> B. Adopt the Page Object Model with stable locators
> C. Stop automating UI tests
D. Only test on one browser

**Correct answer:** B — POM separates locators from test logic, making maintenance manageable.

---

## Trap 3: Ignoring Test Code Quality

**Trap:** Test code is production code. Poor test code (duplication, hard-coded values, no cleanup) creates maintenance problems.

**Example question:**
> A team's automated tests frequently fail because one test modifies shared data that another test depends on. The root cause is:
>
> A. The application has too many bugs
> B. Tests lack proper data isolation and cleanup
> C. The test framework is defective
> D. The testers are not skilled enough

**Correct answer:** B — Tests should use isolated data and clean up after themselves to avoid conflicts.

---

## Trap 4: Automating Too Many E2E Tests

**Trap:** E2E tests are slow and brittle. The test pyramid recommends few E2E tests and many unit tests.

**Example question:**
> A team has automated 300 E2E tests, 50 integration tests, and 30 unit tests. Their feedback loop is slow. The BEST improvement is:
>
> A. Buy faster test machines
> B. Push tests down the pyramid: convert E2E to integration/unit where possible
> C. Run E2E tests less frequently
> D. Hire more automation engineers

**Correct answer:** B — The team has an inverted pyramid. Pushing tests down (E2E → integration/unit) improves speed and reliability.

---

## Trap 5: Thinking Automation Eliminates the Need for Testers

**Trap:** Automation handles repetitive checking, but testers still design tests, perform exploratory testing, analyze results, and improve the automation strategy.

**Example question:**
> A manager proposes reducing the test team because "automation does all the testing now." The technical test analyst should:
>
> A. Agree — automation replaces testers
> B. Explain that testers design automation, perform exploratory testing, and analyze results
> C. Resign before being laid off
> D. Delete all manual test cases

**Correct answer:** B — Automation augments testers but does not replace their design, analysis, and exploratory skills.
