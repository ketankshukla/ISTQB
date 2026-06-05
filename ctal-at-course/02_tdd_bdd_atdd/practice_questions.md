# Chapter 2 — TDD, BDD, ATDD: Practice Questions

---

### Q1 (AT-2.1, K2)

In TDD, the cycle is:

A. Write code → Write test → Refactor
B. Write test → Write code → Refactor
C. Refactor → Write test → Write code
D. Write code → Refactor → Write test

---

### Q2 (AT-2.2, K2)

BDD scenarios are typically written in which format?

A. If/Then/Else
B. Given/When/Then
C. For/While/Do
D. Try/Catch/Finally

---

### Q3 (AT-2.3, K2)

The "Three Amigos" in ATDD refers to:

A. Three senior developers reviewing code
B. A developer, a tester, and a business representative collaborating on acceptance criteria
C. Three testers performing exploratory testing
D. Three product owners prioritizing the backlog

---

### Q4 (AT-2.1, K3)

A developer writes a unit test, sees it fail, writes the minimal code to pass, and then improves the code while keeping tests passing. The developer skipped the "improve the code" step for several cycles. The MOST likely result is:

A. Tests will pass faster
B. The code will accumulate technical debt
C. The code will have fewer defects
D. The test suite will be smaller

---

### Q5 (AT-2.2, K3)

Which practice is MOST appropriate when the business needs to review and approve feature behavior before development?

A. TDD
B. BDD
C. Pure unit testing
D. Performance testing

---

### Q6 (AT-2.1, K2)

The PRIMARY purpose of the "Red" step in TDD is to:

A. Verify the test actually tests something meaningful
B. Make the test suite run faster
C. Document the code
D. Deploy to production

---

### Q7 (AT-2.4, K2)

The test pyramid recommends:

A. Many end-to-end tests and few unit tests
B. Many unit tests, fewer integration tests, few end-to-end tests
C. Equal numbers of unit, integration, and end-to-end tests
D. Only end-to-end tests

---

### Q8 (AT-2.3, K3)

Before a sprint starts, the team meets to discuss a user story, define acceptance criteria, and agree on acceptance tests. This practice is:

A. TDD
B. BDD
C. ATDD
D. Code review

---

### Q9 (AT-2.2, K2)

Which of the following is a BDD tool?

A. JUnit
B. Cucumber
C. JaCoCo
D. Jenkins

---

### Q10 (AT-2.1, K3)

A team writes tests after completing the code. This is:

A. TDD
B. Test-Last Development
C. BDD
D. ATDD

---

### Q11 (AT-2.4, K2)

The "ice cream cone" anti-pattern in test automation refers to:

A. Too many unit tests and too few end-to-end tests
B. Too many end-to-end tests and too few unit tests
C. A balanced mix of test types
D. Testing only the happy path

---

### Q12 (AT-2.3, K3)

In an ATDD workshop, a tester asks: "What happens if the user enters a negative value?" This question is valuable because it:

A. Slows down the workshop unnecessarily
B. Identifies an edge case that should be in the acceptance criteria
C. Is only the tester's concern
D. Should be discussed after coding begins

---

### Q13 (AT-2.2, K2)

The relationship between ATDD, BDD, and TDD is BEST described as:

A. They are competing practices and teams should choose one
B. They are complementary practices applied at different levels (outer to inner)
C. They are all the same thing with different names
D. Only TDD is appropriate for agile teams

---

### Q14 (AT-2.1, K3)

During TDD, a developer writes the minimal code to make a test pass. The code is inelegant but functional. The next step should be:

A. Commit the code immediately
B. Refactor to improve design while keeping tests passing
C. Write more production code
D. Delete the test

---

### Q15 (AT-2.4, K3)

A team has 1,000 end-to-end tests, 200 integration tests, and 100 unit tests. The test suite takes 6 hours to run. The BEST improvement is to:

A. Buy faster hardware
B. Push tests down the pyramid: replace some E2E tests with unit/integration tests
C. Run tests less frequently
D. Hire more testers to maintain the tests

---

### Q16 (AT-2.2, K2)

BDD focuses on:

A. Implementation details of individual functions
B. The behavior of the system from the user's perspective
C. Code coverage metrics
D. Performance benchmarks

---

### Q17 (AT-2.3, K2)

The PRIMARY benefit of ATDD is:

A. Faster code compilation
B. Shared understanding of what "done" means before coding starts
C. Reduced need for automated tests
D. Elimination of exploratory testing

---

### Q18 (AT-2.1, K2)

In TDD, a developer should NOT:

A. Write a failing test first
B. Write more production code than needed to pass the test
C. Refactor after the test passes
D. Run all tests after each change

---

### Q19 (AT-2.4, K3)

Unit tests are at the base of the test pyramid because they are:

A. The most expensive to write
B. The fastest, most reliable, and cheapest to maintain
C. The only tests that matter
D. Written by testers, not developers

---

### Q20 (AT-2.2, K3)

Given the BDD scenario:
```
Given a user has a balance of $100
When the user withdraws $30
Then the balance should be $70
```
Which test level does this MOST closely represent?

A. Unit test
B. Integration or acceptance test
C. Static analysis
D. Security test

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** TDD cycle: write test (Red), write code to pass (Green), improve code (Refactor).

### Q2
**Answer: B**

**Rationale:** BDD uses Given/When/Then format for scenarios.

### Q3
**Answer: B**

**Rationale:** Three Amigos = developer + tester + business representative collaborating on acceptance criteria.

### Q4
**Answer: B**

**Rationale:** Skipping refactoring leads to technical debt. Refactoring is essential for code quality.

### Q5
**Answer: B**

**Rationale:** BDD scenarios in natural language are designed for business review and approval.

### Q6
**Answer: A**

**Rationale:** The Red step confirms the test is valid (it fails for the right reason) before writing code.

### Q7
**Answer: B**

**Rationale:** Test pyramid = many unit tests (base), fewer integration, few E2E (top).

### Q8
**Answer: C**

**Rationale:** ATDD is the collaborative process of defining acceptance criteria and tests before coding.

### Q9
**Answer: B**

**Rationale:** Cucumber is a BDD tool. JUnit is a unit test framework. JaCoCo is coverage. Jenkins is CI.

### Q10
**Answer: B**

**Rationale:** Writing tests after code is test-last development, not TDD.

### Q11
**Answer: B**

**Rationale:** Ice cream cone = too many E2E tests, too few unit tests (inverted pyramid).

### Q12
**Answer: B**

**Rationale:** Testers identify edge cases during ATDD workshops, improving acceptance criteria.

### Q13
**Answer: B**

**Rationale:** ATDD (acceptance), BDD (scenario), and TDD (unit) are complementary at different levels.

### Q14
**Answer: B**

**Rationale:** After Green, the next step is always Refactor to improve code quality.

### Q15
**Answer: B**

**Rationale:** Pushing tests down the pyramid (E2E → integration/unit) reduces execution time and maintenance.

### Q16
**Answer: B**

**Rationale:** BDD focuses on system behavior from the user's perspective, not implementation details.

### Q17
**Answer: B**

**Rationale:** ATDD ensures the whole team agrees on acceptance criteria before coding begins.

### Q18
**Answer: B**

**Rationale:** TDD rule: write only enough production code to pass the test. No more.

### Q19
**Answer: B**

**Rationale:** Unit tests are fast, reliable, and cheap because they test in isolation.

### Q20
**Answer: B**

**Rationale:** The scenario describes a user-facing behavior, which is an integration/acceptance level test.
