# Chapter 6 — Practice Questions

15 original ISTQB-style questions covering Chapter 6 learning objectives.

---

## Questions

### Q1 (FL-6.1.1, K1)

Which category of test tool would BEST support the measurement of statement and branch coverage?

A. Test management tool
B. Test execution and coverage tool
C. Static analysis tool
D. Performance testing tool

---

### Q2 (FL-6.1.1, K1)

A tester needs a tool to check source code for violations of coding standards without executing the code. Which tool category is MOST appropriate?

A. Test execution tool
B. Performance testing tool
C. Static analysis tool
D. Test data generation tool

---

### Q3 (FL-6.1.1, K1)

Which tool category supports planning test activities, managing test cases, tracking test execution, and generating progress reports?

A. Static analysis tool
B. Test management tool
C. Coverage measurement tool
D. Load testing tool

---

### Q4 (FL-6.1.1, K1)

A team needs to generate large volumes of realistic test data that complies with privacy regulations. Which tool category is MOST relevant?

A. Test management tool
B. Defect tracking tool
C. Test design and implementation tool (test data generation)
D. Static analysis tool

---

### Q5 (FL-6.1.1, K1)

Which of the following tool categories is MOST relevant for evaluating system behavior under heavy load?

A. Static analysis tool
B. Test management tool
C. Non-functional testing tool (performance testing)
D. Code coverage tool

---

### Q6 (FL-6.2.1, K2)

Which of the following is a BENEFIT of test automation?

A. It eliminates the need for test planning
B. It provides faster execution of regression tests and faster feedback to developers
C. It guarantees that all defects will be found
D. It removes the need for skilled testers

---

### Q7 (FL-6.2.1, K2)

Which of the following is a RISK associated with test automation?

A. Tests execute faster than manual testing
B. Tests run consistently without human error
C. High initial investment in framework development and ongoing maintenance cost for script updates
D. Tests can run overnight without supervision

---

### Q8 (FL-6.2.1, K2)

A company automated its entire regression suite six months ago. Recently, the UI was redesigned, and now 60% of the automated tests fail because they cannot find the expected UI elements.

This situation illustrates which risk of test automation?

A. The benefit of faster execution
B. The risk of high maintenance cost when the application changes
C. The benefit of better coverage
D. The benefit of consistency

---

### Q9 (FL-6.2.1, K2)

Which type of testing is LEAST suitable for full automation?

A. Regression testing of stable functionality
B. Data-driven testing with thousands of input combinations
C. Exploratory testing requiring human creativity and observation
D. Smoke testing of a build

---

### Q10 (FL-6.2.1, K2)

Which statement about test automation is CORRECT?

A. All tests should always be automated to maximize efficiency
B. Test automation is only useful for large organizations
C. Automated tests provide fast, repeatable regression checks but cannot replace testing that requires human judgment
D. Test automation eliminates the need for a test strategy

---

### Q11 (FL-6.2.1, K2)

A development team runs automated unit tests on every code commit as part of their CI pipeline. What is the PRIMARY benefit of this practice?

A. It replaces the need for system testing
B. It provides immediate feedback to developers if their changes break existing functionality
C. It guarantees zero defects in production
D. It eliminates the need for code reviews

---

### Q12 (FL-6.1.1, K1)

Which of the following is an example of how DevOps/CI/CD pipeline tools support testing?

A. They perform manual exploratory testing automatically
B. They trigger automated test execution on every code commit and provide rapid feedback
C. They replace the need for test environments
D. They write test cases automatically from requirements

---

### Q13 (FL-6.2.1, K2)

What is meant by "flaky tests" in the context of test automation?

A. Tests that consistently pass every time
B. Tests that intermittently pass or fail without any code change, eroding confidence in the test suite
C. Tests that have been recently created
D. Tests that cover non-functional requirements

---

### Q14 (FL-6.2.1, K2)

A team is deciding which tests to automate. Which factor would MOST strongly favor automation?

A. The test is executed only once during the project
B. The test requires subjective human judgment about usability
C. The test is part of the regression suite and runs every sprint
D. The test scenario changes with every release

---

### Q15 (FL-6.2.1, K2)

A manager claims that after implementing test automation, the team no longer needs testers because the tools do all the work. Which statement BEST responds to this claim?

A. The manager is correct — automation replaces testers entirely
B. Automation handles repetitive execution efficiently, but testers are still needed for test design, exploratory testing, results analysis, and maintaining the automation framework
C. Testers are only needed if automation fails
D. Automation tools can perform usability testing better than humans

---

---

## Answers and Rationales

### Q1 — Answer: B

- **B is correct.** Test execution and coverage tools measure code coverage (statement, branch) during test execution.
- A is wrong: Test management tracks test cases and progress, not code coverage.
- C is wrong: Static analysis examines code without execution (finds standards violations, not runtime coverage).
- D is wrong: Performance tools measure speed/load, not code coverage.

### Q2 — Answer: C

- **C is correct.** Static analysis tools examine code without executing it, checking for standard violations, potential bugs, and code quality issues.
- A is wrong: Execution tools run tests (dynamic).
- B is wrong: Performance tools measure runtime behavior.
- D is wrong: Test data tools generate input data.

### Q3 — Answer: B

- **B is correct.** Test management tools support planning, test case management, execution tracking, and reporting.
- A is wrong: Static analysis checks code.
- C is wrong: Coverage tools measure code coverage.
- D is wrong: Load testing tools measure performance.

### Q4 — Answer: C

- **C is correct.** Test data generation tools (a subcategory of test design/implementation tools) create realistic, compliant test data.
- A is wrong: Management tools track tests, not generate data.
- B is wrong: Defect tools track bugs.
- D is wrong: Static analysis examines code.

### Q5 — Answer: C

- **C is correct.** Performance testing tools (load generators, monitoring) evaluate system behavior under heavy load.
- A is wrong: Static analysis does not execute code.
- B is wrong: Management tools track progress.
- D is wrong: Coverage tools measure code exercised.

### Q6 — Answer: B

- **B is correct.** Faster regression execution and faster developer feedback are primary benefits of automation.
- A is wrong: Automation does not eliminate test planning needs.
- C is wrong: No technique guarantees finding all defects.
- D is wrong: Skilled testers are still needed for design, analysis, and maintenance.

### Q7 — Answer: C

- **C is correct.** High initial investment and ongoing maintenance are well-known risks of test automation.
- A is wrong: Faster execution is a benefit, not a risk.
- B is wrong: Consistency is a benefit, not a risk.
- D is wrong: Overnight execution is a benefit, not a risk.

### Q8 — Answer: B

- **B is correct.** When the UI changes, fragile automated tests break and require expensive updates — this is the maintenance risk.
- A, C, D describe benefits, not risks.

### Q9 — Answer: C

- **C is correct.** Exploratory testing requires human creativity, adaptation, and observation — it cannot be fully automated.
- A is wrong: Regression testing of stable features is ideal for automation.
- B is wrong: Data-driven testing is well-suited to automation.
- D is wrong: Smoke tests are commonly automated.

### Q10 — Answer: C

- **C is correct.** Automation provides repeatable regression checks efficiently but cannot replace tests needing human judgment.
- A is wrong: Not all tests should be automated.
- B is wrong: Organizations of any size can benefit.
- D is wrong: A test strategy is always needed.

### Q11 — Answer: B

- **B is correct.** CI with automated tests on every commit provides immediate feedback if changes break existing functionality.
- A is wrong: Unit tests do not replace system testing.
- C is wrong: Nothing guarantees zero defects.
- D is wrong: Code reviews serve a different purpose (static testing by humans).

### Q12 — Answer: B

- **B is correct.** CI/CD tools trigger automated tests on commits and provide rapid feedback — their primary testing benefit.
- A is wrong: Exploratory testing cannot be performed by CI tools.
- C is wrong: Test environments are still needed.
- D is wrong: Requirements-to-test generation is a separate tool category.

### Q13 — Answer: B

- **B is correct.** Flaky tests pass/fail inconsistently without code changes, causing confusion and eroding trust in the test suite.
- A is wrong: Consistently passing tests are reliable, not flaky.
- C is wrong: Newness does not define flakiness.
- D is wrong: Non-functional test coverage is unrelated.

### Q14 — Answer: C

- **C is correct.** Tests that run frequently (every sprint regression) benefit most from automation due to high repetition and ROI.
- A is wrong: One-time tests have poor automation ROI.
- B is wrong: Subjective judgment tests are poorly suited to automation.
- D is wrong: Frequently changing tests have high maintenance cost.

### Q15 — Answer: B

- **B is correct.** Automation handles repetitive execution, but testers are essential for design, exploratory testing, analysis, and maintaining the framework.
- A is wrong: Testers are always needed.
- C is wrong: Testers do far more than handle automation failures.
- D is wrong: Tools cannot perform usability testing better than humans.
