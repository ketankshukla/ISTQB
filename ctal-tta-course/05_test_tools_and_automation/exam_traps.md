# Chapter 5 — Test Tools and Automation: Exam Traps

## Trap 1: Confusing BDD Frameworks with Test Execution Frameworks

**Trap:** BDD (Cucumber, SpecFlow) is about writing tests in natural language. It still needs an underlying execution framework (JUnit, NUnit) to run the tests.

**Example question:**
> A team uses Cucumber for test automation. The actual test execution is handled by:
>
> A. Cucumber itself, which directly executes the tests
> B. An underlying framework such as JUnit or TestNG
> C. The Gherkin parser only
> D. No additional framework is needed

**Correct answer:** B — Cucumber parses Gherkin and delegates execution to an underlying test framework.

---

## Trap 2: Thinking Record/Replay Is a Maintainable Automation Strategy

**Trap:** Record/replay creates brittle scripts that break easily when the UI changes. Production automation needs structured frameworks.

**Example question:**
> A team records 500 UI test cases using a capture/replay tool. After a UI redesign, 80% fail. The BEST solution is:
>
> A. Re-record all 500 test cases
> B. Adopt a maintainable framework with Page Object Model
> C. Switch to manual testing
> D. Use smaller screen resolutions

**Correct answer:** B — POM separates UI locators from test logic, making maintenance easier.

---

## Trap 3: Confusing CI and CD

**Trap:** CI = continuous integration (automated builds and tests). CD = continuous delivery/deployment (automated deployment after tests pass).

**Example question:**
> A pipeline automatically builds code, runs tests, and deploys to production if all tests pass. This is:
>
> A. Continuous Integration only
> B. Continuous Deployment
> C. Manual deployment
> D. Waterfall development

**Correct answer:** B — Automated deployment to production after passing tests is continuous deployment (a form of CD).

---

## Trap 4: Thinking 100% Automation Is Always the Goal

**Trap:** Not all tests should be automated. Exploratory, usability, and one-time tests are often better manual.

**Example question:**
> Which test is the LEAST suitable for automation?
>
> A. Daily smoke test
> B. Regression test suite
> C. Usability evaluation of a new interface
> D. API endpoint validation

**Correct answer:** C — Usability evaluation requires human judgment and subjective assessment.

---

## Trap 5: Confusing Coverage Tools with Test Execution Tools

**Trap:** Coverage tools measure what was executed. They do not execute tests themselves — they work alongside execution tools.

**Example question:**
> JaCoCo is a tool that:
>
> A. Executes Java unit tests
> B. Measures code coverage during test execution
> C. Generates test cases automatically
> D. Finds security vulnerabilities

**Correct answer:** B — JaCoCo instruments code to measure coverage during test execution (typically with JUnit/TestNG).
