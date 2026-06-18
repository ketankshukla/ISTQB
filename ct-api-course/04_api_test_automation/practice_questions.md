# ❓ Chapter 4 — API Test Automation: Practice Questions

---

### 🔌 Q1 (API-4.1, K2)

REST Assured is a test automation framework for:

A. Java
B. Python
C. JavaScript
D. C#

---

### 🔌 Q2 (API-4.2, K2)

Data-driven testing for APIs is BEST described as:

A. Writing a separate test method for each data variation
B. Separating test logic from test data so the same test runs with multiple inputs
C. Testing only with production data
D. Using only static, hard-coded data

---

### 🔌 Q3 (API-4.3, K2)

API smoke tests in a CI pipeline should:

A. Test every endpoint exhaustively
B. Run quickly to verify critical paths on every build
C. Only run once per week
D. Replace unit tests entirely

---

### 🔌 Q4 (API-4.4, K2)

Which pattern improves maintainability by encapsulating endpoint details?

A. Hard-coding URLs in every test
B. API client / Page Object pattern
C. Copy-pasting test code
D. Using global variables for everything

---

### 🔌 Q5 (API-4.2, K3)

A team needs to test login with 20 different username/password combinations. The BEST approach is:

A. Write 20 separate test methods
B. Use parameterized/data-driven testing
C. Test only one combination
D. Use a loop inside a single test with no assertions

---

### 🔌 Q6 (API-4.3, K3)

In a CI/CD pipeline, API regression tests should typically run:

A. Only on the developer's machine
B. After smoke tests pass
C. Before any code is written
D. Only when manually triggered

---

### 🔌 Q7 (API-4.1, K2)

Karate is an API testing framework that uses:

A. Java code with verbose syntax
B. A BDD-style syntax readable by non-programmers
C. Python scripts
D. SQL queries

---

### 🔌 Q8 (API-4.4, K3)

Hard-coding the base API URL in every test script is:

A. A maintainable approach
B. A maintenance risk — URLs should be centralized in configuration
C. Required for REST Assured
D. Faster than using configuration

---

### 🔌 Q9 (API-4.2, K2)

Which is a valid data source for data-driven API tests?

A. Only hard-coded arrays
B. CSV files, JSON files, databases, or inline data
C. Only production databases
D. API documentation only

---

### 🔌 Q10 (API-4.1, K3)

A team using Node.js/Express should MOST likely choose:

A. REST Assured
B. Supertest
C. Karate
D. Selenium

---

### 🔌 Q11 (API-4.3, K2)

A quality gate that blocks merge if API smoke tests fail is:

A. A manual gate
B. An automated gate
C. Not useful for APIs
D. Only for UI tests

---

### 🔌 Q12 (API-4.4, K2)

Configuration externalization in API tests means:

A. Hard-coding all values
B. Storing environment-specific values (URLs, tokens) outside test scripts
C. Using only default values
D. Avoiding all configuration

---

### 🔌 Q13 (API-4.2, K3)

A data-driven API test for a search endpoint tests 50 keyword combinations. Adding a new test case requires:

A. Writing a new test method
B. Adding a new row to the test data file
C. Modifying the API code
D. Rewriting the entire test suite

---

### 🔌 Q14 (API-4.1, K2)

Postman collections can be executed in CI/CD via:

A. Only the Postman GUI
B. Newman (Postman's command-line runner)
C. Microsoft Word
D. Excel macros

---

### 🔌 Q15 (API-4.3, K3)

A pipeline runs unit tests, then API smoke tests, then full API regression. The purpose of this ordering is:

A. To waste time
B. To fail fast — catch basic issues before running slower tests
C. Because API tests are less important than unit tests
D. To make the pipeline more complex

---

### 🔌 Q16 (API-4.4, K2)

Test code should be treated:

A. As less important than production code
B. With the same quality standards as production code
C. As disposable
D. Without any review process

---

### 🔌 Q17 (API-4.2, K2)

Which Python library is commonly used for API test automation?

A. Selenium
B. Requests + pytest
C. JUnit
D. Appium

---

### 🔌 Q18 (API-4.3, K3)

Running API tests in parallel requires:

A. No special preparation
B. Test data isolation to prevent conflicts between concurrent tests
C. Slower test execution
D. Production environment access

---

### 🔌 Q19 (API-4.1, K2)

An API automation framework should provide:

A. Only request sending capability
B. Request sending, response parsing, assertions, and reporting
C. Only report generation
D. Only test data generation

---

### 🔌 Q20 (API-4.4, K3)

A team duplicates the same authentication setup code in 50 test files. The BEST improvement is:

A. Leave it as is for clarity
B. Extract the authentication logic into a shared helper or base class
C. Delete the authentication to simplify tests
D. Merge all 50 tests into one file

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: A**

**Rationale:** REST Assured is a Java DSL for testing REST services.

### 🔷 Q2
**Answer: B**

**Rationale:** Data-driven testing separates logic from data for reuse.

### 🔷 Q3
**Answer: B**

**Rationale:** Smoke tests verify critical paths quickly on every build.

### 🔷 Q4
**Answer: B**

**Rationale:** API client pattern encapsulates endpoints for maintainability.

### 🔷 Q5
**Answer: B**

**Rationale:** Data-driven testing handles multiple inputs efficiently.

### 🔷 Q6
**Answer: B**

**Rationale:** Regression tests run after quick smoke tests pass.

### 🔷 Q7
**Answer: B**

**Rationale:** Karate uses BDD-style syntax readable by non-programmers.

### 🔷 Q8
**Answer: B**

**Rationale:** Centralized configuration prevents maintenance issues.

### 🔷 Q9
**Answer: B**

**Rationale:** Data can come from CSV, JSON, DB, or inline sources.

### 🔷 Q10
**Answer: B**

**Rationale:** Supertest is designed for Node.js/Express testing.

### 🔷 Q11
**Answer: B**

**Rationale:** Automated gate enforced by CI pipeline.

### 🔷 Q12
**Answer: B**

**Rationale:** Externalize config (URLs, tokens) from test scripts.

### 🔷 Q13
**Answer: B**

**Rationale:** Data-driven tests add cases by adding data rows.

### 🔷 Q14
**Answer: B**

**Rationale:** Newman is Postman's CLI runner for CI/CD.

### 🔷 Q15
**Answer: B**

**Rationale:** Ordering from fast to slow enables fail-fast.

### 🔷 Q16
**Answer: B**

**Rationale:** Test code deserves same quality standards.

### 🔷 Q17
**Answer: B**

**Rationale:** Requests + pytest is the standard Python API testing stack.

### 🔷 Q18
**Answer: B**

**Rationale:** Parallel tests need data isolation.

### 🔷 Q19
**Answer: B**

**Rationale:** Frameworks provide request, parsing, assertions, and reporting.

### 🔷 Q20
**Answer: B**

**Rationale:** Extract shared code into helpers to reduce duplication.
