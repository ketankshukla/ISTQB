# Chapter 2 — Agile Testing Methods and Techniques: Practice Questions

---

### Q1 (AT-2.3, K2)

In Acceptance Test-Driven Development (ATDD), acceptance tests are typically defined:

A. After the code is written
B. Before development begins, collaboratively by the team
C. Only by the tester, independently
D. During the final sprint review

---

### Q2 (AT-2.4, K2)

Which format is commonly used in Behavior-Driven Development to express acceptance criteria?

A. If-Then-Else
B. Given-When-Then
C. Input-Process-Output
D. For-Each-Do

---

### Q3 (AT-2.1, K2)

According to the test automation pyramid, which layer should have the MOST tests?

A. UI tests
B. Integration tests
C. Unit tests
D. Manual tests

---

### Q4 (AT-2.6, K2)

Which statement BEST describes exploratory testing in agile?

A. Random clicking without any plan or documentation
B. Unstructured testing performed only at the end of the sprint
C. Simultaneous learning, test design, and execution guided by test charters
D. A replacement for all automated regression testing

---

### Q5 (AT-2.3, K3)

A team uses ATDD for a new user story. Which activity happens FIRST in the ATDD workflow?

A. Write production code
B. Discuss the story and identify examples
C. Run automated acceptance tests
D. Deploy to production

---

### Q6 (AT-2.1, K2)

A team has 50 unit tests, 30 integration tests, and 400 UI tests. This distribution is best described as:

A. An ideal test automation pyramid
B. An ice cream cone anti-pattern
C. A balanced approach
D. A regression suite

---

### Q7 (AT-2.5, K2)

The PRIMARY purpose of Specification by Example is to:

A. Generate test scripts automatically from requirements
B. Create shared understanding of requirements using concrete examples
C. Replace all manual testing with automated tests
D. Eliminate the need for a product owner

---

### Q8 (AT-2.7, K2)

During a Three Amigos meeting, which role is responsible for identifying edge cases and risks?

A. Product Owner
B. Developer
C. Tester
D. Scrum Master

---

### Q9 (AT-2.2, K2)

In agile, regression testing is typically:

A. Performed manually once per release
B. Automated and run continuously in CI/CD
C. Skipped to save time
D. Performed only by an independent test team

---

### Q10 (AT-2.4, K2)

BDD is most closely related to which other practice?

A. Load Testing
B. ATDD and Specification by Example
C. Static Analysis
D. Manual Regression Testing

---

### Q11 (AT-2.1, K3)

A team wants to improve their test automation. Currently, they have many UI tests that frequently break. What is the BEST recommendation?

A. Add more UI tests to increase coverage
B. Move business logic tests to the integration or unit layer
C. Eliminate all automated tests and test manually
D. Run UI tests less frequently

---

### Q12 (AT-2.6, K2)

Session-Based Test Management (SBTM) for exploratory testing includes all of the following EXCEPT:

A. Test charters defining the session mission
B. Time-boxed testing sessions
C. Detailed test scripts written before the session
D. Session reports documenting findings

---

### Q13 (AT-2.4, K3)

Which scenario uses correct BDD Given-When-Then syntax?

A. "Test that login works"
B. "Given a registered user, When they enter valid credentials, Then they access their account"
C. "Login with username and password"
D. "Verify the system accepts correct passwords"

---

### Q14 (AT-2.2, K2)

In agile, non-functional testing such as performance and security should be:

A. Ignored until the final release
B. Considered in the Definition of Done and addressed continuously
C. Performed only by an external audit team
D. Replaced with functional testing

---

### Q15 (AT-2.3, K3)

A product owner, developer, and tester meet to discuss a user story, identify examples, and agree on acceptance criteria. This is:

A. A sprint retrospective
B. A Three Amigos session
C. A bug triage meeting
D. A release planning session

---

### Q16 (AT-2.1, K2)

Unit tests in the test automation pyramid are characterized by:

A. Being slow to execute and expensive to maintain
B. Being fast to execute and isolating defects precisely
C. Requiring a full running application
D. Being written only by testers

---

### Q17 (AT-2.5, K2)

Which is a concrete example that supports Specification by Example?

A. "The system should handle invalid inputs"
B. "Entering 'abc' in the age field displays 'Age must be a number'"
C. "The system should be user-friendly"
D. "Performance should be acceptable"

---

### Q18 (AT-2.7, K2)

A tester pairs with a developer while the developer writes code for a new feature. This practice is known as:

A. Independent testing
B. Developer-tester pairing
C. Silent observation
D. Code review

---

### Q19 (AT-2.4, K2)

TDD, ATDD, and BDD are related practices. Which statement is TRUE?

A. They are all the same practice with different names
B. TDD is unit-level and developer-focused; ATDD and BDD are acceptance-level and team-focused
C. BDD replaces TDD and ATDD completely
D. ATDD is only for manual testing

---

### Q20 (AT-2.6, K3)

A tester is assigned a charter: "Explore the checkout process with various invalid payment details to assess error handling." This describes:

A. A scripted regression test
B. An automated UI test
C. An exploratory testing session
D. A unit test case

---

### Q21 (AT-2.2, K2)

Confirmation testing in agile is typically performed:

A. In the next sprint after the defect is found
B. Immediately after a defect is fixed, within the same sprint
C. Only during the final release testing
D. By an independent test team

---

### Q22 (AT-2.1, K3)

A team wants fast feedback on whether a recent code change broke existing functionality. Which test type should they run FIRST in CI?

A. Full end-to-end UI regression suite (2 hours)
B. Unit test suite (30 seconds)
C. Manual exploratory testing session
D. Performance test suite (4 hours)

---

### Q23 (AT-2.7, K2)

In agile, testers collaborate with business representatives primarily to:

A. Write production code
B. Clarify requirements and define acceptance criteria
C. Manage the project schedule
D. Perform code reviews

---

### Q24 (AT-2.4, K2)

A BDD scenario outline allows:

A. Only one set of test data per scenario
B. Multiple sets of test data to be run against the same scenario
C. Automatic code generation without human input
D. Testing without any Given-When-Then structure

---

### Q25 (AT-2.3, K3)

Which of the following is a benefit of ATDD?

A. It eliminates the need for developers to write unit tests
B. It ensures shared understanding of requirements before coding begins
C. It replaces all manual testing with automated tests
D. It removes the need for a product owner

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** ATDD defines acceptance tests collaboratively before development begins. This ensures shared understanding and provides a definition of "done."

### Q2
**Answer: B**

**Rationale:** BDD uses Given-When-Then format to express behavior in natural language that is understandable by all stakeholders.

### Q3
**Answer: C**

**Rationale:** The test automation pyramid has unit tests at the base (many), integration in the middle (some), and UI at the top (few).

### Q4
**Answer: C**

**Rationale:** Exploratory testing is structured by test charters, time-boxed, and involves simultaneous learning, design, and execution.

### Q5
**Answer: B**

**Rationale:** ATDD workflow starts with discussing the story and identifying examples (the "Discuss" step). Code writing comes later.

### Q6
**Answer: B**

**Rationale:** 400 UI tests with only 50 unit tests is an ice cream cone — too many slow, brittle UI tests and too few fast, reliable unit tests.

### Q7
**Answer: B**

**Rationale:** SbE uses concrete examples to create shared understanding of requirements. The executable tests are a byproduct, not the primary purpose.

### Q8
**Answer: C**

**Rationale:** The tester identifies edge cases, risks, and testability issues. The product owner provides business context, and the developer provides technical feasibility.

### Q9
**Answer: B**

**Rationale:** In agile, regression testing must be automated and run continuously to keep pace with frequent changes.

### Q10
**Answer: B**

**Rationale:** BDD evolved from ATDD and both focus on acceptance-level behavior. They are closely related, with BDD adding Given-When-Then syntax.

### Q11
**Answer: B**

**Rationale:** Business logic tests should be at the integration or unit layer, where they are faster and more maintainable. UI tests should verify only UI-specific behavior.

### Q12
**Answer: C**

**Rationale:** SBTM uses charters (A), time-boxes (B), and session reports (D). Detailed scripts written before execution (C) contradict the exploratory nature.

### Q13
**Answer: B**

**Rationale:** Proper BDD syntax uses Given (context), When (action), Then (expected result). Only option B follows this structure.

### Q14
**Answer: B**

**Rationale:** Non-functional testing should be addressed continuously in agile, often included in the Definition of Done.

### Q15
**Answer: B**

**Rationale:** Three Amigos involves business, developer, and tester discussing a story to clarify requirements and acceptance criteria.

### Q16
**Answer: B**

**Rationale:** Unit tests are fast (milliseconds) and isolate defects precisely. They are written by developers, not just testers.

### Q17
**Answer: B**

**Rationale:** Concrete examples specify exact inputs and expected outputs. "Entering 'abc'..." is concrete. "The system should..." is abstract.

### Q18
**Answer: B**

**Rationale:** Developer-tester pairing is a collaborative agile practice where both work together on a feature.

### Q19
**Answer: B**

**Rationale:** TDD is unit-level and developer-focused. ATDD and BDD are acceptance-level and involve the whole team. They are complementary, not replacements.

### Q20
**Answer: C**

**Rationale:** A test charter describing a mission for exploration is the key artifact of an exploratory testing session.

### Q21
**Answer: B**

**Rationale:** In agile, confirmation testing happens immediately after a fix, ideally within the same sprint.

### Q22
**Answer: B**

**Rationale:** Unit tests provide the fastest feedback (30 seconds) and should run first in CI. Slow tests (UI, performance) run later in the pipeline.

### Q23
**Answer: B**

**Rationale:** Testers collaborate with business representatives to clarify requirements and define acceptance criteria.

### Q24
**Answer: B**

**Rationale:** Scenario outlines allow multiple data sets (Examples table) to be executed against the same scenario structure.

### Q25
**Answer: B**

**Rationale:** ATDD's primary benefit is shared understanding of requirements before coding, reducing rework. It does not eliminate other testing or roles.
