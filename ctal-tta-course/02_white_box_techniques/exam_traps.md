# Chapter 2 — White-Box Test Techniques: Exam Traps

## Trap 1: Confusing Statement and Branch Coverage

**Trap:** Statement coverage = every statement executed. Branch coverage = every decision outcome executed. 100% statement coverage does NOT imply 100% branch coverage.

**Example question:**
> A test suite achieves 100% statement coverage for a function containing a single `if` statement. Which statement is TRUE?
>
> A. The test suite also achieves 100% branch coverage
> B. The test suite may or may not achieve 100% branch coverage
> C. The false branch of the if statement was definitely executed
> D. Branch coverage is guaranteed to be at least 50%

**Correct answer:** B — 100% statement coverage only means every statement was executed. If the `if` condition was always true, the false branch's statements were not executed, and branch coverage would be 50%.

---

## Trap 2: Forgetting That Cyclomatic Complexity Measures Decision Points, Not Lines of Code

**Trap:** Cyclomatic complexity is about the number of paths through decisions, not the number of lines of code.

**Example question:**
> Function A has 100 lines of code with no decisions. Function B has 20 lines with 10 if statements. Which has higher cyclomatic complexity?
>
> A. Function A (more lines of code)
> B. Function B (more decision points)
> C. They have the same complexity
> D. Cannot be determined

**Correct answer:** B — Cyclomatic complexity depends on decision points (branches), not lines of code. Function A has complexity 1; Function B has complexity 11.

---

## Trap 3: Thinking 100% Coverage Means No Defects

**Trap:** Coverage measures what was executed, not whether the code is correct. A test suite can have 100% coverage but still miss defects.

**Example question:**
> A module has 100% branch coverage. Which statement is TRUE?
>
> A. The module is guaranteed to have no defects
> B. All possible paths through the code have been tested
> C. Both true and false outcomes of every decision have been executed
> D. The module is safe to deploy without further testing

**Correct answer:** C — Branch coverage means both outcomes of every decision were executed. It does not guarantee no defects (A), test all paths (B), or eliminate need for more testing (D).

---

## Trap 4: Confusing MC/DC with Branch Coverage

**Trap:** MC/DC is more rigorous than branch coverage. Branch coverage requires each decision outcome. MC/DC additionally requires each condition to independently affect the outcome.

**Example question:**
> For the decision `(A AND B)`, branch coverage requires:
> For the decision `(A AND B)`, MC/DC additionally requires:
>
> A. The same test cases as branch coverage
> B. Proof that changing A alone changes the outcome, and changing B alone changes the outcome
> C. Testing A and B in all 4 combinations (TT, TF, FT, FF)
> D. Only testing when A and B are both true

**Correct answer:** B — MC/DC requires showing that each condition independently affects the decision outcome.

---

## Trap 5: Thinking Path Coverage Is Always Achievable

**Trap:** Path coverage requires every path through the code to be executed. For code with loops, the number of paths is infinite or very large. Path coverage is often impractical.

**Example question:**
> A function contains a `while` loop that can iterate 0 to 100 times. Path coverage would require:
>
> A. 2 test cases (loop executes 0 times, loop executes 1 time)
> B. 101 test cases (loop executes 0, 1, 2, ..., 100 times)
> C. 100 test cases
> D. A test case for every possible iteration count from 0 to 100

**Correct answer:** D — Each iteration count represents a different path. Path coverage would require testing all 101 possibilities (0 through 100). This illustrates why path coverage is often impractical.
