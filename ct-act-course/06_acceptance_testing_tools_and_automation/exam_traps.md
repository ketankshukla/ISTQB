# Chapter 6 — Acceptance Testing Tools and Automation: Exam Traps

## Trap 1: Confusing BDD Tools with Test Automation Frameworks

**Trap:** BDD tools (Cucumber, SpecFlow) are for acceptance-level executable specifications. Unit test frameworks (JUnit, NUnit) are for developer testing. They serve different purposes.

**Example question:**
> A team uses JUnit for all testing including acceptance tests written in business-readable format. The issue is:
>
> A. JUnit is the best tool for all testing
> B. JUnit is a unit testing framework; BDD tools like Cucumber or SpecFlow are designed for business-readable acceptance tests
> C. JUnit cannot run automated tests
> D. There is no issue

**Correct answer:** B — JUnit is for unit testing. BDD tools support business-readable acceptance specifications.

---

## Trap 2: Thinking Tool Selection Is Only About Features

**Trap:** Tool selection must consider team skills, existing toolchain, budget, and regulatory requirements, not just feature lists.

**Example question:**
> A team selects the most feature-rich test management tool without considering that the team already uses Jira extensively and needs tight integration. The risk is:
>
> A. The tool is too good
> B. Poor adoption due to workflow friction and lack of integration with existing tools
> C. The tool will be cheaper
> D. The tool has too few features

**Correct answer:** B — Tool selection must consider existing toolchain and team context.

---

## Trap 3: Confusing Service Virtualization with Mocking

**Trap:** Service virtualization simulates complete services for integration testing. Mocking replaces individual objects in unit tests. Different scopes.

**Example question:**
> A team uses service virtualization to simulate a payment gateway during acceptance testing. This allows them to:
>
> A. Test payment processing without making real transactions or depending on the actual gateway
> B. Replace unit test mocks
> C. Eliminate the need for security testing
> D. Test only happy paths

**Correct answer:** A — Service virtualization = simulate real services for integration/acceptance testing without dependencies.

---

## Trap 4: Thinking Automated Acceptance Tests Replace UAT

**Trap:** Automated acceptance tests (e.g., Cucumber) complement but don't replace hands-on UAT by business users.

**Example question:**
> A team has 100% automated acceptance test coverage and skips UAT. The risk is:
>
> A. No risk — automated tests are sufficient
> B. Automated tests may miss usability issues, real-world workflow problems, and subjective quality factors that only human users identify
> C. The release will be faster
> D. Costs will be lower

**Correct answer:** B — Automated tests don't replace human judgment on usability and real-world workflows.

---

## Trap 5: Ignoring Test Data as a Tool Concern

**Trap:** Test data management is critical for acceptance testing. Tools for data generation, masking, and virtualization are as important as test execution tools.

**Example question:**
> A team has excellent BDD automation but struggles with acceptance testing because they can't get realistic test data. The missing element is:
>
> A. Better step definitions
> B. Test data management tools and processes (generation, masking, subsetting)
> C. More test environments
> D. Faster test execution

**Correct answer:** B — Test data management is essential for effective acceptance testing.
