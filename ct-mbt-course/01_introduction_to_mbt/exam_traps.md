# 🪤 Chapter 1 — Introduction to MBT: Exam Traps

## 🪤 Trap 1: Thinking MBT Replaces All Other Testing

**Trap:** MBT is a test design technique that complements other testing. It does not replace manual, exploratory, or other automated testing.

**Example question:**
> A test manager plans to use MBT for a new project. Which statement is TRUE?
>
> A. MBT will eliminate the need for all manual testing
> B. MBT complements manual and other automated testing but does not replace them entirely
> C. MBT is only useful for unit testing
> D. MBT requires no test execution phase

**Correct answer:** B — MBT automates test design but still requires execution, and other testing types (exploratory, usability) remain valuable.

---

## 🪤 Trap 2: Confusing Online and Offline MBT

**Trap:** Offline = generate tests first, then execute. Online = generate and execute simultaneously.

**Example question:**
> A team generates 500 test cases from a model, reviews them with stakeholders, then executes them against the SUT over two weeks. This is:
>
> A. Online MBT
> B. Offline MBT
> C. Exploratory testing
> D. Manual testing

**Correct answer:** B — Tests are generated BEFORE execution and stored for review = offline MBT.

---

## 🪤 Trap 3: Thinking Models Must Be Perfect

**Trap:** Models can be partial and iteratively improved. They do not need to be 100% complete before generating useful tests.

**Example question:**
> A team delays MBT adoption because they believe the model must be 100% complete before any tests can be generated. This belief is:
>
> A. Correct — incomplete models generate invalid tests
> B. Incorrect — partial models can still generate valuable tests that are iteratively improved
> C. Required by ISTQB standards
> D. Only true for safety-critical systems

**Correct answer:** B — Models can be partial. Start with core behavior, expand over time.

---

## 🪤 Trap 4: Thinking MBT Is Only for Large Projects

**Trap:** MBT can be valuable for small projects too, especially when the behavior is stateful or rule-based.

**Example question:**
> A startup with a simple 3-page web application is considering MBT. The BEST advice is:
>
> A. MBT is only for large enterprise projects
> B. MBT may not be cost-effective for very simple systems, but small rule-based features could still benefit
> C. MBT is mandatory for all web applications
> D. Startups should never use MBT

**Correct answer:** B — For very simple systems, model creation effort may exceed benefit. But even small systems with stateful or rule-based behavior can benefit.

---

## 🪤 Trap 5: Forgetting That Model Quality Determines Test Quality

**Trap:** If the model is wrong or incomplete, generated tests will also be wrong or incomplete. "Garbage in, garbage out" applies to models.

**Example question:**
> A team generates tests from a model and achieves 100% transition coverage. However, the SUT still has defects in areas not represented in the model. The root cause is:
>
> A. The test selection criteria were too weak
> B. The model did not represent the behavior where defects occurred
> C. The test execution was flawed
> D. MBT is not suitable for this system

**Correct answer:** B — 100% model coverage only covers what is IN the model. If the model misses behavior, tests will miss it too.
