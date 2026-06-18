# 🪤 Chapter 4 — Test Implementation and Execution: Exam Traps

## 🪤 Trap 1: Thinking Abstract Tests Can Be Executed Directly

**Trap:** Abstract tests must be concretized (mapped to SUT with specific data) before execution.

**Example question:**
> A team generates abstract test cases from a model and immediately runs them against the SUT. The result is:
>
> A. Successful test execution
> B. Failure because abstract tests lack specific data and SUT mappings
> C. Faster than concretized tests
> D. Only possible with online MBT

**Correct answer:** B — Abstract tests need concretization (data, UI/API mappings, expected results) before execution.

---

## 🪤 Trap 2: Assuming a Test Failure Always Means an SUT Bug

**Trap:** Test failures can be caused by model defects, concretization errors, environment issues, or test tool bugs.

**Example question:**
> An MBT test fails. The SUT behaves exactly as specified in the requirements. The MOST likely cause is:
>
> A. An SUT defect
> B. A model defect or concretization error
> C. The test oracle is always wrong
> D. MBT is not suitable for this system

**Correct answer:** B — If the SUT is correct per requirements, the model may be wrong or the concretization may be incorrect.

---

## 🪤 Trap 3: Thinking the Model Is Always a Perfect Oracle

**Trap:** The model serves as the oracle only if it is correct. A wrong model gives wrong expected results.

**Example question:**
> A team uses the model as the test oracle. All tests pass. However, users report that the SUT does not meet requirements. This indicates:
>
> A. The tests are perfect
> B. The model may be incorrect and does not match actual requirements
> C. The users are wrong
> D. The oracle is working correctly

**Correct answer:** B — If the model (oracle) is wrong, it will incorrectly validate wrong behavior. Tests passing does not guarantee correctness.

---

## 🪤 Trap 4: Confusing Manual and Automated Execution Benefits

**Trap:** Manual execution is for exploration and judgment; automated execution is for repetition and scale. They complement each other.

**Example question:**
> A team runs 1,000 generated MBT tests manually. The MAIN problem is:
>
> A. Manual execution provides better coverage
> B. It is time-consuming, inconsistent, and does not scale
> C. Automated execution is not possible for MBT
> D. Manual execution is always more thorough

**Correct answer:** B — 1,000 tests should be automated. Manual execution does not scale and is inconsistent.

---

## 🪤 Trap 5: Forgetting Environment Issues as a Failure Cause

**Trap:** Test failures are often caused by environment setup (missing data, unavailable services) rather than SUT or model bugs.

**Example question:**
> A previously passing MBT test suddenly fails after a database migration. The SUT code did not change. The FIRST thing to check is:
>
> A. The model is outdated
> B. The test environment and data setup
> C. The test oracle is broken
> D. The concretization scripts are wrong

**Correct answer:** B — After a migration, test data or environment setup is the most likely cause of sudden failures.
