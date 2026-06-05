# Chapter 4 — Test Automation in Agile: Practice Questions

---

### Q1 (AT-4.1, K2)

Test automation in agile is BEST described as:

A. A replacement for all manual testing
B. A complement to manual testing that provides fast feedback
C. Only useful for waterfall projects
D. A way to eliminate the tester role

---

### Q2 (AT-4.2, K2)

Which of the following is the BEST candidate for automation?

A. Exploratory testing for UX evaluation
B. Regression tests executed before every release
C. A one-time data migration validation
D. Usability testing with real users

---

### Q3 (AT-4.2, K3)

A team wants to automate business logic tests. The MOST appropriate level is:

A. UI level — it is how users see the system
B. API / integration level — faster and more maintainable than UI
C. Only manual testing is appropriate for business logic
D. Performance testing level

---

### Q4 (AT-4.3, K2)

Continuous Integration (CI) pipelines should run automated tests:

A. Only once per month before a release
B. On every code commit to provide immediate feedback
C. Only when the tester requests it
D. Only on Fridays

---

### Q5 (AT-4.4, K2)

The Page Object Model (POM) is used to:

A. Record user actions for replay
B. Separate UI locators from test logic to improve maintainability
C. Generate random test data
D. Execute tests in parallel

---

### Q6 (AT-4.5, K3)

A team calculates automation ROI without including maintenance costs. The result will be:

A. Perfectly accurate
B. Overestimated because maintenance is a significant ongoing cost
C. Underestimated
D. Valid for exactly one year

---

### Q7 (AT-4.3, K2)

A quality gate that blocks merge if unit tests fail is:

A. A manual gate
B. An automated gate
C. Not useful for agile
D. Only for production deployment

---

### Q8 (AT-4.2, K2)

Which is a POOR candidate for automation?

A. Daily smoke tests
B. Tests for a feature with constantly changing requirements
C. API regression tests
D. Data-driven boundary value tests

---

### Q9 (AT-4.3, K3)

In a CI pipeline, the "fail fast" principle means:

A. Run the slowest tests first
B. Run the fastest tests first to get quick feedback
C. Allow failures to accumulate
D. Stop the pipeline only after all tests complete

---

### Q10 (AT-4.4, K2)

Configuration externalization in test automation means:

A. Hard-coding all values
B. Storing environment-specific values outside test scripts
C. Using only default values
D. Avoiding all configuration

---

### Q11 (AT-4.1, K2)

The PRIMARY benefit of test automation in agile is:

A. Eliminating all testers
B. Fast feedback on code changes and regression safety
C. Removing the need for documentation
D. Making testing more complex

---

### Q12 (AT-4.2, K3)

A team has 100 UI tests and 20 unit tests. To improve their automation strategy, they should:

A. Add more UI tests
B. Push tests down the pyramid — add unit and API tests, reduce UI test dependency
C. Remove all automated tests
D. Run UI tests less frequently

---

### Q13 (AT-4.3, K2)

Automated regression tests should run:

A. Only when a tester manually triggers them
B. Automatically on every code change or at least nightly
C. Once per quarter
D. Only after user acceptance testing

---

### Q14 (AT-4.5, K3)

An automation framework costs 200 hours to develop and 80 hours per year to maintain. It saves 300 hours per year in manual regression testing. The payback period is approximately:

A. Less than 1 year
B. 1-2 years
C. 3-4 years
D. More than 5 years

---

### Q15 (AT-4.4, K2)

Separation of concerns in test automation means:

A. All code in one file
B. Organizing code into tests, page objects, data, and utilities
C. Only testers write tests
D. No reuse of test components

---

### Q16 (AT-4.1, K2)

Automation does NOT replace:

A. Unit tests
B. Regression tests
C. Exploratory testing
D. API tests

---

### Q17 (AT-4.3, K3)

A pipeline runs unit tests (2 min), then integration tests (5 min), then UI tests (15 min). If unit tests fail, the pipeline:

A. Continues to run integration and UI tests
B. Stops immediately, providing fast feedback
C. Runs only UI tests
D. Retries unit tests 10 times

---

### Q18 (AT-4.2, K2)

Smoke tests are BEST described as:

A. Exhaustive tests of every feature
B. A subset of tests that verify critical paths quickly
C. Tests that only run in production
D. Performance tests under heavy load

---

### Q19 (AT-4.5, K2)

The test automation pyramid suggests that:

A. Most tests should be at the UI level
B. Most tests should be at the unit level
C. All levels should have equal numbers of tests
D. Only integration tests are needed

---

### Q20 (AT-4.4, K3)

A team hard-codes database credentials in every test script. When the test database password changes, all tests break. The solution is:

A. Never change the database password
B. Centralize credentials in environment variables or a config file
C. Delete the tests and write new ones
D. Use the production database for tests

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** Automation complements manual testing by providing fast feedback. It does not replace all manual testing.

### Q2
**Answer: B**

**Rationale:** Regression tests are repetitive and run frequently — ideal for automation.

### Q3
**Answer: B**

**Rationale:** API level is faster and more maintainable than UI for business logic.

### Q4
**Answer: B**

**Rationale:** CI runs automated tests on every commit for immediate feedback.

### Q5
**Answer: B**

**Rationale:** POM separates UI locators from test logic for maintainability.

### Q6
**Answer: B**

**Rationale:** Maintenance is 30-70% of automation effort. Ignoring it overestimates ROI.

### Q7
**Answer: B**

**Rationale:** Automated gate enforced by CI pipeline.

### Q8
**Answer: B**

**Rationale:** Features with changing requirements are poor automation candidates.

### Q9
**Answer: B**

**Rationale:** Fail fast = run quick tests first for fast feedback.

### Q10
**Answer: B**

**Rationale:** Externalize config (URLs, credentials) from test scripts.

### Q11
**Answer: B**

**Rationale:** Primary benefit = fast feedback and regression safety.

### Q12
**Answer: B**

**Rationale:** Too few unit tests and too many UI tests = push down the pyramid.

### Q13
**Answer: B**

**Rationale:** Regression tests should run automatically on every change or nightly.

### Q14
**Answer: A**

**Rationale:** Net benefit = 300 - 80 = 220 hours/year. Payback = 200/220 = 0.9 years.

### Q15
**Answer: B**

**Rationale:** Separation of concerns = tests, page objects, data, utilities in separate modules.

### Q16
**Answer: C**

**Rationale:** Automation cannot replace exploratory testing requiring human judgment.

### Q17
**Answer: B**

**Rationale:** Fail fast = stop the pipeline when the first stage fails.

### Q18
**Answer: B**

**Rationale:** Smoke tests = quick verification of critical paths.

### Q19
**Answer: B**

**Rationale:** Pyramid = most tests at unit level (base), fewer at higher levels.

### Q20
**Answer: B**

**Rationale:** Centralize credentials in config/environment variables for maintainability.
