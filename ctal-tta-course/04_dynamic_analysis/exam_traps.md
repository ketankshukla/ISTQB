# Chapter 4 — Dynamic Analysis: Exam Traps

## Trap 1: Confusing Memory Leak with Memory Corruption

**Trap:** Memory leak = memory not freed (gradual growth). Memory corruption = writing to wrong memory (crashes, unpredictable behavior).

**Example question:**
> An application's heap size grows continuously over 24 hours until it crashes. This is:
>
> A. Memory corruption
> B. A memory leak
> C. A buffer overflow
> D. Normal garbage collection behavior

**Correct answer:** B — Continuous heap growth without release is a memory leak.

---

## Trap 2: Thinking Profiling Has No Overhead

**Trap:** Instrumentation-based profiling adds code to every method, significantly impacting performance. Sampling profilers have lower overhead but less accuracy.

**Example question:**
> A development team wants to measure production performance with minimal impact. They should use:
>
> A. Instrumentation profiling
> B. Sampling profiling
> C. Static analysis
> D. Manual timing with print statements

**Correct answer:** B — Sampling profiling has lower overhead and is more suitable for production.

---

## Trap 3: Confusing Code Coverage with Code Correctness

**Trap:** Coverage measures what was executed, not whether it was correct. A test can execute code with wrong expected results and still increase coverage.

**Example question:**
> A test suite achieves 100% branch coverage for a sorting function. Which is TRUE?
>
> A. The sorting function is guaranteed to work correctly
> B. All branches were executed, but correctness was not verified
> C. No further testing is needed
> D. The function has no bugs

**Correct answer:** B — Coverage measures execution, not correctness. The tests might have incorrect assertions.

---

## Trap 4: Thinking Dynamic Analysis Can Find All Defects

**Trap:** Dynamic analysis only finds issues that occur during the test execution. If a code path is not triggered, the defect is not found.

**Example question:**
> A dynamic analysis tool finds no defects during testing. This means:
>
> A. The code has no defects
> B. The code may have defects in untested paths
> C. Static analysis is no longer needed
> D. The code is ready for production without review

**Correct answer:** B — Dynamic analysis only finds issues in executed code paths. Untested paths may still contain defects.

---

## Trap 5: Confusing Fault Injection with Defect Seeding

**Trap:** Fault injection introduces runtime errors to test resilience. Defect seeding (used in defect estimation) intentionally introduces known defects to estimate total defect count.

**Example question:**
> Introducing network latency to test how a system handles slow connections is:
>
> A. Defect seeding
> B. Fault injection
> C. Static analysis
> D. Regression testing

**Correct answer:** B — Deliberately introducing runtime errors (network latency) is fault injection.
