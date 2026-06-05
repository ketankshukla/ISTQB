# Chapter 5 — Test Tools and Automation: Practice Questions

---

### Q1 (TTA-5.1, K2)

Which tool category is JUnit?

A. Performance testing tool
B. Unit test framework
C. Static analysis tool
D. Security scanner

---

### Q2 (TTA-5.2, K2)

In a keyword-driven framework, test cases are written using:

A. Programming language code
B. Predefined keywords that map to framework functions
C. Recorded user actions
D. Binary test scripts

---

### Q3 (TTA-5.3, K2)

Continuous Integration (CI) is BEST described as:

A. Automatically deploying to production
B. Frequently merging code changes and running automated builds and tests
C. Manually testing each feature before release
D. Writing tests after the code is complete

---

### Q4 (TTA-5.1, K2)

JaCoCo is primarily used for:

A. Executing Java unit tests
B. Measuring code coverage during test execution
C. Finding security vulnerabilities
D. Performance profiling

---

### Q5 (TTA-5.2, K3)

A team needs a test framework that allows business analysts to read and contribute to test scripts. The BEST choice is:

A. A pure data-driven framework with CSV files
B. A BDD framework using natural language (Given/When/Then)
C. A record/replay tool
D. A script-based framework in Python

---

### Q6 (TTA-5.3, K3)

In a CI pipeline, which activity should typically come FIRST?

A. Deploy to production
B. Compile/build the application
C. Run integration tests
D. Generate coverage report

---

### Q7 (TTA-5.1, K2)

Which of the following is a dynamic security testing tool?

A. SonarQube
B. OWASP ZAP
C. Checkstyle
D. PMD

---

### Q8 (TTA-5.4, K2)

A test automation framework's effectiveness is BEST measured by:

A. The number of test scripts created
B. The defects found and the time saved compared to manual testing
C. The programming language used
D. The cost of the tool licenses

---

### Q9 (TTA-5.3, K2)

A quality gate that requires 80% code coverage before deployment is an example of:

A. Static analysis
B. A CI/CD quality gate
C. Manual testing criteria
D. User acceptance criteria

---

### Q10 (TTA-5.2, K3)

The Page Object Model (POM) design pattern is used to:

A. Record user actions for replay
B. Separate UI element locators from test logic for better maintainability
C. Generate random test data
D. Execute tests in parallel automatically

---

### Q11 (TTA-5.1, K2)

Which tool is MOST appropriate for measuring CPU usage of a Java application?

A. JProfiler
B. SonarQube
C. JUnit
D. Jenkins

---

### Q12 (TTA-5.3, K3)

A team wants to ensure no code with critical static analysis issues is merged to the main branch. They should:

A. Run static analysis only once per month
B. Integrate static analysis into the CI pipeline and fail the build on critical issues
C. Rely on manual code review only
D. Run static analysis only after deployment

---

### Q13 (TTA-5.2, K2)

Which automation approach is MOST maintainable for a frequently changing web application?

A. Capture/replay recording
B. Keyword-driven framework
C. Page Object Model with structured scripts
D. Hard-coded XPath locators in every test

---

### Q14 (TTA-5.4, K2)

Which metric would BEST indicate that a test automation initiative is providing value?

A. Number of automated test cases
B. Reduction in production defects and faster feedback
C. Lines of code in the test framework
D. Number of tool licenses purchased

---

### Q15 (TTA-5.1, K2)

Gatling is primarily used for:

A. Unit testing
B. Load and performance testing
C. Static code analysis
D. Security scanning

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** JUnit is a unit test framework for Java.

### Q2
**Answer: B**

**Rationale:** Keyword-driven frameworks use predefined keywords that map to functions, making tests readable by non-programmers.

### Q3
**Answer: B**

**Rationale:** CI is the practice of frequently merging changes and running automated builds and tests.

### Q4
**Answer: B**

**Rationale:** JaCoCo measures code coverage (statement, branch, etc.) during Java test execution.

### Q5
**Answer: B**

**Rationale:** BDD frameworks use natural language (Given/When/Then) that business analysts can read and contribute to.

### Q6
**Answer: B**

**Rationale:** CI pipeline order: build first, then test, then analyze, then deploy.

### Q7
**Answer: B**

**Rationale:** OWASP ZAP is a DAST tool that tests running web applications for security vulnerabilities.

### Q8
**Answer: B**

**Rationale:** Effectiveness is measured by outcomes: defects found and time saved. Number of scripts is an activity metric, not an outcome.

### Q9
**Answer: B**

**Rationale:** A coverage threshold as a requirement before deployment is a CI/CD quality gate.

### Q10
**Answer: B**

**Rationale:** POM separates UI locators from test logic, making tests more maintainable when the UI changes.

### Q11
**Answer: A**

**Rationale:** JProfiler is a Java profiler that measures CPU, memory, and thread usage.

### Q12
**Answer: B**

**Rationale:** Integrating static analysis into CI with build-fail conditions prevents critical issues from being merged.

### Q13
**Answer: C**

**Rationale:** POM with structured scripts is the most maintainable for frequently changing UIs.

### Q14
**Answer: B**

**Rationale:** Value is demonstrated by outcomes: fewer production defects and faster feedback.

### Q15
**Answer: B**

**Rationale:** Gatling is an open-source load and performance testing tool.
