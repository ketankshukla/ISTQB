# Chapter 3 — Static Analysis: Exam Traps

## Trap 1: Confusing Static and Dynamic Analysis

**Trap:** Static analysis examines code without execution. Dynamic analysis requires execution.

**Example question:**
> A tool that monitors memory usage while the application is running is performing:
>
> A. Static analysis
> B. Dynamic analysis
> C. Code review
> D. Unit testing

**Correct answer:** B — Monitoring runtime memory usage requires execution, so it is dynamic analysis.

---

## Trap 2: Thinking Static Analysis Can Find All Defects

**Trap:** Static analysis cannot find runtime issues like memory leaks, performance bottlenecks, or integration problems. It also has false negatives.

**Example question:**
> Which of the following defects can static analysis reliably detect?
>
> A. Memory leak during extended operation
> B. Null pointer dereference in unexecuted code
> C. Slow database query under load
> D. Race condition between threads

**Correct answer:** B — Static analysis can detect potential null pointer dereferences by analyzing code paths. Memory leaks (A), performance (C), and race conditions (D) require dynamic analysis.

---

## Trap 3: Confusing Physical and Logical LOC

**Trap:** Physical LOC counts all lines. Logical LOC counts only executable statements. Metrics may use either.

**Example question:**
> A file has 100 physical lines including 30 blank lines and 20 comment lines. The logical LOC is approximately:
>
> A. 100
> B. 50
> C. 70
> D. 150

**Correct answer:** B — Logical LOC ≈ 100 - 30 blanks - 20 comments = 50 executable lines.

---

## Trap 4: Thinking High Complexity Always Means High Risk

**Trap:** Complexity should be interpreted in context. A switch statement with 20 cases has complexity 20 but may be very readable. Nested if-statements with complexity 15 may be much riskier.

**Example question:**
> Function A has a switch statement with 20 cases (complexity = 20). Function B has 5 nested if-statements (complexity = 6). Which is MORE likely to have defects?
>
> A. Function A (higher complexity)
> B. Function B (nested logic is harder to understand)
> C. Both equally
> D. Cannot be determined

**Correct answer:** B — Nested logic is cognitively harder to understand and test than a flat switch statement, even with lower cyclomatic complexity.

---

## Trap 5: Confusing False Positives with False Negatives

**Trap:** False positive = tool reports a defect that is not real. False negative = tool misses a real defect.

**Example question:**
> A static analysis tool reports a potential buffer overflow, but the developer confirms the array bounds are properly checked. This is:
>
> A. A true positive
> B. A false positive
> C. A false negative
> D. A true negative

**Correct answer:** B — The tool reported a finding that is not a real defect (false positive).
