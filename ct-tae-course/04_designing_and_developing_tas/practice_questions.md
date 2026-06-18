# ❓ Chapter 4 — Designing and Developing the TAS: Practice Questions

---

### 🔷 Q1 (TAE-4.1, K2)

A framework where the same test logic runs with multiple data sets from external files is:

A. Keyword-driven
B. Data-driven
C. Modular
D. Linear

---

### 🔷 Q2 (TAE-4.1, K2)

A keyword-driven framework is MOST appropriate when:

A. Only developers write tests
B. Non-technical stakeholders need to read or write tests
C. There is no test data variation
D. The SUT has no user interface

---

### 🔷 Q3 (TAE-4.2, K2)

The Page Object Model (POM) is used to:

A. Record user actions for replay
B. Separate UI locators from test logic
C. Generate random test data
D. Execute tests in parallel

---

### 🔷 Q4 (TAE-4.2, K3)

In a well-designed TAS, assertions should be placed in:

A. Page Objects
B. Test scripts
C. The Test Adaptation Layer
D. Configuration files

---

### 🔷 Q5 (TAE-4.3, K2)

Which test data strategy is BEST for ensuring tests do not conflict?

A. All tests share the same test account
B. Each test creates its own isolated data and cleans up afterward
C. Use production data directly in tests
D. Hard-code test data in every test script

---

### 🔷 Q6 (TAE-4.1, K3)

A hybrid framework combines:

A. Only one approach
B. Multiple approaches like data-driven and keyword-driven
C. Manual and automated testing only
D. Unit and integration tests only

---

### 🔷 Q7 (TAE-4.4, K2)

Explicit waits in test scripts are preferred over fixed sleeps because:

A. They make tests longer
B. They wait only as long as necessary, improving speed and reliability
C. They are easier to write
D. They eliminate the need for error handling

---

### 🔷 Q8 (TAE-4.2, K3)

A Page Object should NOT contain:

A. UI element locators
B. Methods to interact with the page
C. Test assertions
D. Navigation methods

---

### 🔷 Q9 (TAE-4.3, K3)

A test creates a user account, modifies it, and should delete it afterward. Even if the test fails, the account should be deleted. The BEST approach is:

A. Manually delete accounts after test runs
B. Use a setup/teardown mechanism that always runs cleanup
C. Ignore cleanup — test accounts do not matter
D. Reuse the same account for all tests

---

### 🔷 Q10 (TAE-4.4, K2)

A "flaky" test is one that:

A. Always passes
B. Fails intermittently without code changes
C. Takes too long to execute
D. Tests an unimportant feature

---

### 🔷 Q11 (TAE-4.1, K3)

Which framework type is MOST maintainable for a frequently changing web application?

A. Record/replay
B. Keyword-driven with Page Object Model
C. Linear scripting
D. Hard-coded XPath in every test

---

### 🔷 Q12 (TAE-4.2, K2)

In a three-layer test architecture, test scripts should:

A. Directly contain UI locators and HTTP endpoint URLs
B. Describe WHAT is being tested, calling reusable business actions
C. Include database connection strings
D. Hard-code all test data

---

### 🔷 Q13 (TAE-4.3, K2)

Using production data (with sensitive information) directly in test environments is:

A. Recommended for realism
B. A security risk and may violate regulations
C. Faster than generating test data
D. Required for test automation

---

### 🔷 Q14 (TAE-4.4, K3)

A test fails because it tries to click an element before it is visible. The BEST fix is:

A. Add a 10-second sleep before the click
B. Use an explicit wait for the element to be clickable
C. Click twice to ensure it works
D. Skip the test

---

### 🔷 Q15 (TAE-4.1, K2)

Which of the following is a PRIMARY advantage of a data-driven framework?

A. Tests can only run with one set of data
B. Adding new test cases requires only adding data, not new scripts
C. Business users cannot understand the tests
D. It eliminates the need for test logic

---

### 🔷 Q16 (TAE-4.2, K3)

A team combines test logic, UI interaction, and database verification into a single test script. The test is difficult to maintain. The BEST improvement is:

A. Add more comments
B. Separate concerns into layers: UI interaction in Page Objects, database in helpers, assertions in tests
C. Make the test longer to include more details
D. Delete the test and rewrite from scratch

---

### 🔷 Q17 (TAE-4.3, K2)

Test code should be treated:

A. As less important than production code
B. With the same quality standards as production code
C. As disposable and not requiring review
D. As documentation that does not need maintenance

---

### 🔷 Q18 (TAE-4.4, K3)

A team has 300 UI tests, 50 integration tests, and 30 unit tests. Their suite takes 4 hours to run. The BEST improvement is:

A. Buy faster test machines
B. Push tests down the pyramid: replace some UI tests with integration/unit tests
C. Run tests less frequently
D. Hire more testers to maintain the tests

---

### 🔷 Q19 (TAE-4.2, K2)

The DRY (Don't Repeat Yourself) principle in test automation means:

A. Tests should never be repeated
B. Common functionality should be extracted into reusable libraries
C. Each test should be completely unique
D. Tests should not use any libraries

---

### 🔷 Q20 (TAE-4.3, K3)

A team stores database credentials in a test script committed to Git. This is:

A. A secure and portable approach
B. A security risk and makes the test non-portable
C. Required for all database tests
D. The only way to connect to a database

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** Data-driven frameworks separate test logic from data.

### 🔷 Q2
**Answer: B**

**Rationale:** Keyword-driven frameworks use action words that non-technical stakeholders can understand.

### 🔷 Q3
**Answer: B**

**Rationale:** POM separates UI locators from test logic for maintainability.

### 🔷 Q4
**Answer: B**

**Rationale:** Assertions belong in test scripts. Page Objects contain locators and actions.

### 🔷 Q5
**Answer: B**

**Rationale:** Isolated data per test with cleanup prevents conflicts and ensures independence.

### 🔷 Q6
**Answer: B**

**Rationale:** Hybrid frameworks combine multiple approaches (data-driven + keyword-driven).

### 🔷 Q7
**Answer: B**

**Rationale:** Explicit waits check for conditions and proceed as soon as possible.

### 🔷 Q8
**Answer: C**

**Rationale:** Page Objects contain locators and interaction methods. Assertions belong in test scripts.

### 🔷 Q9
**Answer: B**

**Rationale:** Setup/teardown ensures cleanup runs even if the test fails.

### 🔷 Q10
**Answer: B**

**Rationale:** Flaky tests fail intermittently without code changes.

### 🔷 Q11
**Answer: B**

**Rationale:** POM with keyword-driven framework is maintainable for changing applications.

### 🔷 Q12
**Answer: B**

**Rationale:** Test scripts should describe what is tested. Locators and URLs belong in lower layers.

### 🔷 Q13
**Answer: B**

**Rationale:** Using real sensitive data in test environments is a security risk.

### 🔷 Q14
**Answer: B**

**Rationale:** Explicit waits wait for the element to be ready, unlike fixed sleeps.

### 🔷 Q15
**Answer: B**

**Rationale:** Data-driven frameworks allow adding test cases by adding data rows.

### 🔷 Q16
**Answer: B**

**Rationale:** Separation of concerns improves maintainability by isolating responsibilities.

### 🔷 Q17
**Answer: B**

**Rationale:** Test code should meet the same quality standards as production code.

### 🔷 Q18
**Answer: B**

**Rationale:** Pushing tests down the pyramid improves speed and reliability.

### 🔷 Q19
**Answer: B**

**Rationale:** DRY means extracting common functionality into reusable libraries.

### 🔷 Q20
**Answer: B**

**Rationale:** Hard-coded credentials are a security risk and prevent running tests in different environments.
