# ❓ Chapter 3 — Test Automation in Agile: Practice Questions

---

### 🔷 Q1 (AT-3.1, K2)

In agile, test automation is MOST essential because:

A. It eliminates the need for testers
B. Frequent releases require fast, repeatable feedback
C. It is cheaper than manual testing in all cases
D. Agile mandates 100% test automation

---

### 🔷 Q2 (AT-3.2, K2)

A framework where the same test logic runs with multiple data sets stored in external files is:

A. Keyword-driven
B. Data-driven
C. Modular
D. Linear

---

### 🔷 Q3 (AT-3.3, K2)

The Page Object Model (POM) is used to:

A. Record user actions for replay
B. Separate UI element locators from test logic
C. Generate random test data
D. Execute tests in parallel

---

### 🔷 Q4 (AT-3.1, K3)

A team releases every week. Their manual regression takes 3 days. The BEST approach is:

A. Extend the release cycle to 2 weeks
B. Automate regression tests to run in under an hour
C. Skip regression testing for minor changes
D. Hire more manual testers

---

### 🔷 Q5 (AT-3.4, K2)

Which test data strategy is BEST for ensuring tests do not conflict with each other?

A. All tests share the same test account
B. Each test creates its own isolated data and cleans up afterward
C. Use production data directly in tests
D. Hard-code test data in every test script

---

### 🔷 Q6 (AT-3.2, K3)

A business analyst wants to write automated tests using simple action words like "ClickButton" and "EnterText." The MOST appropriate framework is:

A. Data-driven
B. Keyword-driven
C. Linear scripting
D. Pure code-based

---

### 🔷 Q7 (AT-3.3, K2)

In a well-layered test architecture, test scripts should:

A. Directly contain UI locators and HTTP endpoint URLs
B. Describe WHAT is being tested, calling reusable business actions
C. Include database connection strings
D. Hard-code all test data

---

### 🔷 Q8 (AT-3.5, K2)

A "flaky" test is one that:

A. Always passes
B. Fails intermittently without code changes
C. Takes too long to execute
D. Tests an unimportant feature

---

### 🔷 Q9 (AT-3.1, K3)

Which type of test should typically NOT be automated?

A. Daily smoke test
B. Regression test for a stable feature
C. Usability evaluation of a new interface
D. API endpoint validation

---

### 🔷 Q10 (AT-3.2, K2)

Which framework type is MOST maintainable for a frequently changing web application?

A. Record/replay
B. Keyword-driven with Page Object Model
C. Linear scripting
D. Hard-coded XPath in every test

---

### 🔷 Q11 (AT-3.4, K3)

A test creates a user account, modifies it, and should delete it afterward. Even if the test fails, the account should be deleted. The BEST approach is:

A. Manually delete accounts after test runs
B. Use a setup/teardown mechanism that always runs cleanup
C. Ignore cleanup — test accounts do not matter
D. Reuse the same account for all tests

---

### 🔷 Q12 (AT-3.3, K2)

Test code should be treated:

A. As less important than production code
B. With the same quality standards as production code
C. As disposable and not requiring review
D. As documentation that does not need maintenance

---

### 🔷 Q13 (AT-3.1, K2)

Smoke tests should:

A. Cover every feature in the application
B. Verify critical paths quickly to provide fast feedback
C. Replace all other types of testing
D. Only be run before major releases

---

### 🔷 Q14 (AT-3.5, K3)

A regression suite takes 4 hours to run. The team releases twice per day. The BEST improvement is:

A. Run regression tests only once per week
B. Optimize and parallelize tests, and push tests down the pyramid
C. Remove tests that rarely fail
D. Increase the team size

---

### 🔷 Q15 (AT-3.2, K2)

A hybrid automation framework combines:

A. Only one approach
B. Multiple approaches (e.g., data-driven + keyword-driven + modular)
C. Manual and automated testing only
D. Unit and integration tests only

---

### 🔷 Q16 (AT-3.3, K3)

A Page Object should NOT contain:

A. UI element locators
B. Methods to interact with the page
C. Test assertions
D. Navigation methods

---

### 🔷 Q17 (AT-3.4, K2)

Using production data (with sensitive information) directly in test environments is:

A. Recommended for realism
B. A security risk and may violate regulations
C. Faster than generating test data
D. Required for agile testing

---

### 🔷 Q18 (AT-3.1, K2)

In the test pyramid, unit tests are at the base because they are:

A. The most complex to write
B. The fastest and most reliable
C. The only tests developers write
D. The most expensive to maintain

---

### 🔷 Q19 (AT-3.5, K3)

A test suite's pass rate is 98%, but 15% of the "passes" are actually flaky tests that sometimes fail. The team's confidence in the suite should be:

A. Very high (98% pass rate)
B. Lower because flakiness undermines trust
C. Unaffected by flakiness
D. Based only on the most recent run

---

### 🔷 Q20 (AT-3.2, K3)

A team wants non-programmers to contribute to test automation. The BEST framework choice is:

A. A pure code-based framework in Java
B. A keyword-driven framework with a simple domain language
C. A record/replay tool only
D. A framework with no documentation

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** Agile's frequent releases require fast feedback, which automation provides. It does not eliminate testers (A) or mandate 100% automation (D).

### 🔷 Q2
**Answer: B**

**Rationale:** Data-driven frameworks separate test logic from data, allowing the same logic to run with multiple data sets.

### 🔷 Q3
**Answer: B**

**Rationale:** POM separates UI locators from test logic, improving maintainability when the UI changes.

### 🔷 Q4
**Answer: B**

**Rationale:** Weekly releases cannot accommodate 3-day manual regression. Automation is the scalable solution.

### 🔷 Q5
**Answer: B**

**Rationale:** Isolated data per test with cleanup prevents conflicts and ensures test independence.

### 🔷 Q6
**Answer: B**

**Rationale:** Keyword-driven frameworks use action words that non-programmers can understand and use.

### 🔷 Q7
**Answer: B**

**Rationale:** Test scripts should describe what is tested. Locators and URLs belong in lower layers (page objects, config).

### 🔷 Q8
**Answer: B**

**Rationale:** Flaky tests fail intermittently without code changes, undermining trust in automation.

### 🔷 Q9
**Answer: C**

**Rationale:** Usability evaluation requires human judgment and subjective assessment — poor for automation.

### 🔷 Q10
**Answer: B**

**Rationale:** Keyword-driven with POM is maintainable for changing applications. Record/replay and hard-coded locators are brittle.

### 🔷 Q11
**Answer: B**

**Rationale:** Setup/teardown mechanisms (like try/finally or test fixtures) ensure cleanup runs even if tests fail.

### 🔷 Q12
**Answer: B**

**Rationale:** Test code should meet the same quality standards as production code (naming, structure, review).

### 🔷 Q13
**Answer: B**

**Rationale:** Smoke tests verify critical paths quickly to provide fast feedback on build health.

### 🔷 Q14
**Answer: B**

**Rationale:** For twice-daily releases, tests must complete quickly. Optimization, parallelization, and pyramid correction are needed.

### 🔷 Q15
**Answer: B**

**Rationale:** Hybrid frameworks combine multiple approaches (data-driven + keyword-driven + modular).

### 🔷 Q16
**Answer: C**

**Rationale:** Page Objects contain locators and interaction methods. Assertions belong in test scripts.

### 🔷 Q17
**Answer: B**

**Rationale:** Using real sensitive data in test environments is a security risk and may violate GDPR, HIPAA, etc.

### 🔷 Q18
**Answer: B**

**Rationale:** Unit tests are fast and reliable because they test in isolation without external dependencies.

### 🔷 Q19
**Answer: B**

**Rationale:** Flakiness undermines trust. A 98% pass rate is misleading if 15% are unreliable flaky tests.

### 🔷 Q20
**Answer: B**

**Rationale:** Keyword-driven frameworks with simple domain languages enable non-programmers to write tests.
