# Chapter 2 — Agile Testing Methods and Techniques: Exam Traps

## Trap 1: Confusing ATDD, BDD, and TDD

**Trap:** ATDD and BDD are acceptance-level, collaborative practices. TDD is unit-level, developer-focused.

**Example question:**
> A developer writes a unit test before writing the corresponding production code. This practice is:
>
> A. ATDD
> B. BDD
> C. TDD
> D. Specification by Example

**Wrong answer:** A or B — ATDD and BDD operate at the acceptance level.

**Why it's wrong:** TDD is the practice of developers writing unit tests before code. ATDD and BDD involve the whole team and focus on acceptance criteria.

**Correct answer:** C — TDD.

**Defense strategy:** TDD = unit, developer. ATDD/BDD = acceptance, team. BDD uses Given-When-Then. ATDD focuses on acceptance criteria.

---

## Trap 2: Inverting the Test Automation Pyramid

**Trap:** The pyramid shows many unit tests, fewer integration tests, few UI tests. The ice cream cone anti-pattern has the opposite.

**Example question:**
> A team has 500 UI tests, 100 integration tests, and 50 unit tests. What is the MAIN problem?
>
> A. They have too few total tests
> B. The distribution resembles an ice cream cone, leading to slow feedback and high maintenance
> C. They should eliminate all UI tests
> D. Unit tests are unnecessary in agile

**Wrong answer:** A — total count is not the issue.

**Why it's wrong:** 650 total tests is plenty. The issue is the inverted pyramid — too many slow, brittle UI tests and too few fast, reliable unit tests.

**Correct answer:** B — Ice cream cone distribution leads to slow feedback and high maintenance.

**Defense strategy:** Pyramid = many unit, few UI. Ice cream cone = many UI, few unit. The exam often describes an ice cream cone and asks you to identify the problem.

---

## Trap 3: Treating Exploratory Testing as Unstructured

**Trap:** Exploratory testing in agile is structured by charters and time-boxes, not random.

**Example question:**
> Which statement BEST describes exploratory testing in an agile team?
>
> A. Random clicking to find defects without any plan
> B. Unstructured testing performed only at the end of the sprint
> C. Simultaneous learning, test design, and execution guided by test charters
> D. A replacement for all automated testing

**Wrong answer:** A or B — exploratory testing is not random or end-of-sprint only.

**Why it's wrong:** Exploratory testing uses charters, time-boxes, and session reports. It is performed throughout the sprint.

**Correct answer:** C — Simultaneous learning, test design, and execution guided by test charters.

**Defense strategy:** Exploratory testing is structured and continuous in agile, not random or a replacement for automation.

---

## Trap 4: Thinking Specification by Example Is Only About Testing

**Trap:** SbE is about requirements clarification and shared understanding, not just producing tests.

**Example question:**
> The PRIMARY purpose of Specification by Example is to:
>
> A. Generate automated test scripts automatically
> B. Create shared understanding of requirements using concrete examples
> C. Replace the product owner with automated specifications
> D. Eliminate the need for manual testing

**Wrong answer:** A — SbE does not generate scripts automatically.

**Why it's wrong:** SbE uses concrete examples to clarify requirements and create shared understanding. Tests are a byproduct, not the primary purpose.

**Correct answer:** B — Create shared understanding of requirements using concrete examples.

**Defense strategy:** SbE = shared understanding first, executable specifications second.

---

## Trap 5: Confusing Test Levels with Test Phases

**Trap:** In agile, test levels are continuous activities, not sequential phases.

**Example question:**
> In a Scrum team, integration testing is performed:
>
> A. After unit testing is 100% complete
> B. After system testing passes
> C. Continuously throughout the sprint as components are integrated
> D. Only during the hardening sprint

**Wrong answer:** A — waiting for 100% unit completion before integration testing is a waterfall mindset.

**Why it's wrong:** In agile, integration testing happens continuously as components are built and integrated, not after a previous phase completes.

**Correct answer:** C — Continuously throughout the sprint.

**Defense strategy:** In agile, all test levels happen continuously. There are no "phases."

---

## Trap 6: Thinking the Three Amigos Is Only About Testing

**Trap:** Three Amigos is about shared understanding of requirements, not just test design.

**Example question:**
> During a Three Amigos meeting, the tester's PRIMARY contribution is to:
>
> A. Write the production code for the story
> B. Identify edge cases, risks, and testability issues
> C. Set the sprint schedule
> D. Approve the budget

**Wrong answer:** A — testers don't write production code.

**Why it's wrong:** The tester's role is to think about what could go wrong, identify edge cases, and ensure the story is testable.

**Correct answer:** B — Identify edge cases, risks, and testability issues.

**Defense strategy:** Three Amigos = business (what), developer (how), tester (what could go wrong). Testers find the gaps.

---

## Trap 7: Overlooking the Importance of Regression Testing in Agile

**Trap:** With frequent changes, regression testing is critical in agile and must be automated.

**Example question:**
> A Scrum team delivers working software every two weeks but finds many regressions in production. What is the MOST likely cause?
>
> A. They are releasing too frequently
> B. Insufficient automated regression testing
> C. They have too many unit tests
> D. They are using BDD incorrectly

**Wrong answer:** A — frequent releases are not the problem.

**Why it's wrong:** Frequent releases are a goal of agile. The problem is likely insufficient regression testing to catch unintended side effects of changes.

**Correct answer:** B — Insufficient automated regression testing.

**Defense strategy:** Agile requires strong automated regression because change is frequent. Regression suites must run quickly in CI/CD.
