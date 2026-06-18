# ❓ Chapter 3 — Agile Testing Tools and Automation: Practice Questions

---

### 🔷 Q1 (AT-3.1, K2)

Continuous Integration (CI) is BEST described as:

A. Automatically deploying code to production on every commit
B. Frequently merging code changes into a shared repository with automated builds and tests
C. Writing tests after the code is developed
D. Manual testing performed continuously throughout the day

---

### 🔷 Q2 (AT-3.2, K2)

In the test automation pyramid, which layer is typically the SMALLEST?

A. Unit tests
B. Integration tests
C. UI tests
D. Manual tests

---

### 🔷 Q3 (AT-3.1, K2)

Which practice extends CI by ensuring code is always in a deployable state?

A. Continuous Deployment
B. Continuous Delivery
C. Test-Driven Development
D. Manual Acceptance Testing

---

### 🔷 Q4 (AT-3.3, K2)

Which tool is MOST appropriate for writing acceptance tests in Given-When-Then format?

A. Jenkins
B. Cucumber
C. JUnit
D. JMeter

---

### 🔷 Q5 (AT-3.2, K3)

A team has 300 UI tests, 50 integration tests, and 20 unit tests. What is the PRIMARY problem?

A. They have too few total tests
B. The distribution is inverted, leading to slow feedback and high maintenance
C. Unit tests are unnecessary in agile
D. They should eliminate integration tests

---

### 🔷 Q6 (AT-3.1, K2)

In a CI pipeline, unit tests should typically run:

A. After deployment to production
B. Immediately after the build, before integration tests
C. Only once per week
D. After manual approval from a test manager

---

### 🔷 Q7 (AT-3.2, K2)

Which statement about test automation in agile is TRUE?

A. Automation replaces all manual and exploratory testing
B. Automation is essential for regression testing and fast feedback
C. Automation should only be implemented after the application is stable
D. Agile teams do not need test automation

---

### 🔷 Q8 (AT-3.4, K2)

A team's CI build fails randomly due to tests that pass on rerun. These tests are:

A. Regression tests
B. Flaky tests
C. Unit tests
D. Acceptance tests

---

### 🔷 Q9 (AT-3.3, K2)

Which tool category is used to automate build, test, and deployment pipelines?

A. BDD tool
B. CI/CD server
C. UI automation tool
D. Static analysis tool

---

### 🔷 Q10 (AT-3.2, K3)

A team wants to test whether a new API endpoint correctly processes payment requests. Which test level is MOST appropriate?

A. UI test through the browser
B. Integration/API test
C. Manual exploratory test only
D. Performance load test

---

### 🔷 Q11 (AT-3.1, K2)

The MAIN benefit of Continuous Integration for testing is:

A. Eliminating the need for testers
B. Providing rapid feedback on whether code changes broke existing functionality
C. Reducing the number of unit tests needed
D. Replacing all manual testing with automation

---

### 🔷 Q12 (AT-3.2, K2)

According to the test automation pyramid, unit tests should:

A. Be minimal because they are difficult to write
B. Form the majority of automated tests due to speed and reliability
C. Be replaced by UI tests for better coverage
D. Only be written by dedicated test automation engineers

---

### 🔷 Q13 (AT-3.4, K2)

Which is a PRIMARY cause of flaky automated UI tests?

A. Too many assertions in the test
B. Timing issues and unstable element locators
C. Running tests in parallel
D. Using data-driven test frameworks

---

### 🔷 Q14 (AT-3.3, K2)

A team wants to monitor application response times and error rates in production. Which tool category is MOST appropriate?

A. Unit test framework
B. Application Performance Monitoring (APM) tool
C. BDD tool
D. Static analysis tool

---

### 🔷 Q15 (AT-3.2, K3)

A team delays implementing test automation until after 6 sprints. What is the MAIN risk?

A. The team will have too much time for manual testing
B. The codebase becomes harder to test, and manual regression becomes unsustainable
C. Agile does not require test automation
D. Test automation is only useful for waterfall projects

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** CI is the practice of frequently merging code into a shared repository, triggering automated builds and tests. CD (A) is deployable state. TDD (C) is a development practice.

### 🔷 Q2
**Answer: C**

**Rationale:** The pyramid has many unit tests at the base, fewer integration tests in the middle, and few UI tests at the top. UI tests are the smallest layer.

### 🔷 Q3
**Answer: B**

**Rationale:** Continuous Delivery extends CI by ensuring code is always in a deployable state. Continuous Deployment (A) goes further by deploying automatically to production.

### 🔷 Q4
**Answer: B**

**Rationale:** Cucumber is a BDD tool that uses Given-When-Then syntax. Jenkins (A) is CI. JUnit (C) is unit testing. JMeter (D) is performance testing.

### 🔷 Q5
**Answer: B**

**Rationale:** This is an ice cream cone — too many UI tests and too few unit tests. UI tests are slow and brittle; unit tests are fast and reliable. The distribution should be inverted.

### 🔷 Q6
**Answer: B**

**Rationale:** Unit tests run first in the CI pipeline because they are fast and provide immediate feedback. If unit tests fail, there is no need to run slower tests.

### 🔷 Q7
**Answer: B**

**Rationale:** Automation is essential for regression testing and fast feedback in agile. It does not replace all manual testing (A) and should start immediately (C).

### 🔷 Q8
**Answer: B**

**Rationale:** Flaky tests pass and fail inconsistently without code changes. They erode trust in CI and must be fixed or quarantined.

### 🔷 Q9
**Answer: B**

**Rationale:** CI/CD servers (Jenkins, GitHub Actions, GitLab CI) automate build, test, and deployment pipelines.

### 🔷 Q10
**Answer: B**

**Rationale:** API testing is the appropriate level for testing endpoints. UI tests (A) add unnecessary overhead for API validation. Manual-only (C) misses regression. Performance (D) is a different concern.

### 🔷 Q11
**Answer: B**

**Rationale:** CI provides rapid feedback by running automated tests on every commit. This is its primary benefit for testing.

### 🔷 Q12
**Answer: B**

**Rationale:** Unit tests should form the majority of automated tests because they are fast, reliable, and isolate defects precisely.

### 🔷 Q13
**Answer: B**

**Rationale:** Timing issues (e.g., using sleep instead of explicit waits) and unstable locators (e.g., relying on CSS classes that change) are primary causes of flaky UI tests.

### 🔷 Q14
**Answer: B**

**Rationale:** APM tools (Datadog, New Relic) monitor production performance metrics like response times and error rates.

### 🔷 Q15
**Answer: B**

**Rationale:** Delaying automation leads to untestable code, accumulation of technical debt, and unsustainable manual regression. Automation should start in Sprint 1.
