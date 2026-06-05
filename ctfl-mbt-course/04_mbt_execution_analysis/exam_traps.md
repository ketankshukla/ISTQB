# Chapter 4 — Execution and Analysis: Exam Traps

## Trap 1: Confusing Abstract and Concrete Tests

**Trap:** Abstract tests come from the model. Concrete tests are executable with specific values.

**Example question:**
> A test case generated from a model states: "From Idle, trigger Login event." This is:
>
> A. A concrete test case
> B. An abstract test case
> C. A test oracle
> D. A coverage criterion

**Correct answer:** B — It lacks specific values, so it is abstract.

---

## Trap 2: Thinking Model Coverage Equals Code Coverage

**Trap:** They are different. Model coverage measures model elements. Code coverage measures code elements.

**Example question:**
> A test suite achieves 100% transition coverage of the MBT model. This means:
>
> A. 100% of the code has been executed
> B. All transitions in the model have been exercised by tests
> C. All defects have been found
> D. The system is ready for release

**Correct answer:** B — Model coverage does not imply code coverage.

---

## Trap 3: Assuming All Model Defects Are System Defects

**Trap:** When a test fails, the model itself may be wrong.

**Example question:**
> An MBT test fails because the system behaves differently from the model's prediction. The FIRST step should be:
>
> A. Fix the system immediately
> B. Verify whether the model correctly reflects requirements
> C. Delete the test case
> D. Increase test coverage

**Correct answer:** B — The model may be wrong, not the system.

---

## Trap 4: Ignoring Infeasible Paths in Coverage Reports

**Trap:** Infeasible paths should be documented and excluded from coverage targets.

**Example question:**
> A state machine has 12 transitions, but 2 are infeasible. The coverage target for transition coverage should be:
>
> A. 100%
> B. 83% (10/12)
> C. 50%
> D. 0%

**Correct answer:** B — Only 10 of 12 transitions are feasible. Target = 10/12 ≈ 83%.
