# Chapter 2 — TDD, BDD, ATDD: Exam Traps

## Trap 1: Confusing TDD with Testing After Coding

**Trap:** TDD means writing tests FIRST, then writing code. Writing code first and then adding tests is not TDD.

**Example question:**
> A developer writes a function, then writes tests to verify it works. This is:
>
> A. Test-Driven Development
> B. Test-Last Development
> C. Behavior-Driven Development
> D. Acceptance Test-Driven Development

**Correct answer:** B — TDD requires writing the test BEFORE the code. Writing tests after is "test-last" development.

---

## Trap 2: Confusing BDD with TDD

**Trap:** BDD is about behavior at the feature level, written in natural language for the whole team. TDD is about unit-level implementation, written by developers in code.

**Example question:**
> A team writes scenarios in Given/When/Then format to describe user story behavior. Business analysts review and approve these scenarios. This is:
>
> A. TDD
> B. BDD
> C. Unit testing
> D. Manual testing

**Correct answer:** B — Given/When/Then scenarios for business-readable behavior is BDD.

---

## Trap 3: Thinking the Refactor Step Is Optional

**Trap:** Refactoring is a critical part of TDD. Skipping it leads to technical debt and untestable code.

**Example question:**
> A team practices TDD but skips the Refactor step to save time. The MOST likely consequence is:
>
> A. Tests will fail more often
> B. Code quality will degrade over time, leading to technical debt
> C. The TDD cycle will complete faster
> D. Fewer defects will be found

**Correct answer:** B — Without refactoring, code becomes harder to maintain and test, accumulating technical debt.

---

## Trap 4: Confusing ATDD with BDD

**Trap:** ATDD is the collaborative workshop process where the team defines acceptance criteria. BDD is the format (Given/When/Then) for describing behavior. They often work together but are distinct.

**Example question:**
> A "Three Amigos" workshop where a developer, tester, and business representative define acceptance criteria before coding begins is:
>
> A. BDD
> B. ATDD
> C. TDD
> D. Exploratory testing

**Correct answer:** B — The collaborative workshop to define acceptance criteria is ATDD. The scenarios might be written in BDD format, but the workshop itself is ATDD.

---

## Trap 5: Thinking the Test Pyramid Should Be an Ice Cream Cone

**Trap:** The test pyramid has many unit tests at the base and few E2E tests at the top. An inverted pyramid (many E2E, few unit) is an anti-pattern.

**Example question:**
> A team has 500 E2E tests, 100 integration tests, and 50 unit tests. Their test suite takes 4 hours to run. This is:
>
> A. An ideal test pyramid
> B. An ice cream cone anti-pattern
> C. A balanced test strategy
> D. Recommended for agile teams

**Correct answer:** B — Many E2E tests with few unit tests is the ice cream cone anti-pattern. It creates slow, brittle test suites.
