# 🪤 Chapter 3 — Test Automation Architecture: Exam Traps

## 🪤 Trap 1: Confusing TAA Layers

**Trap:** Each TAA layer has a distinct responsibility. Test Generation creates tests, Test Definition formats them, Test Execution runs them, and Test Adaptation interfaces with the SUT.

**Example question:**
> In a TAA, the layer that sends commands to the SUT (e.g., clicking buttons, calling APIs) is:
>
> A. Test Generation Layer
> B. Test Definition Layer
> C. Test Execution Layer
> D. Test Adaptation Layer

**Correct answer:** D — The Test Adaptation Layer interfaces with the SUT. Generation creates tests, Definition formats them, Execution runs them.

---

## 🪤 Trap 2: Thinking Tight Coupling Is Efficient

**Trap:** Tight coupling between layers makes maintenance expensive. A well-designed TAA uses abstraction so changes in one layer do not cascade.

**Example question:**
> A team puts UI locators directly in every test script. When the UI changes, 50 tests break. The root cause is:
>
> A. The testers are not skilled
> B. Tight coupling between test scripts and SUT implementation
> C. The test tool is defective
> D. The application has too many defects

**Correct answer:** B — Directly embedding locators creates tight coupling. Abstraction (e.g., Page Object Model) would isolate the change.

---

## 🪤 Trap 3: Confusing Testware with Only Test Scripts

**Trap:** Testware includes much more than scripts: test data, harnesses, libraries, configuration, documentation, and expected results.

**Example question:**
> Testware consists of:
>
> A. Only the test scripts
> B. Test scripts, test data, test harness, expected results, libraries, and configuration
> C. Only the automated test tools
> D. Only the test results

**Correct answer:** B — Testware is the complete set of artifacts needed for test automation.

---

## 🪤 Trap 4: Thinking Abstraction Adds Unnecessary Complexity

**Trap:** Abstraction may seem like extra work initially, but it pays off massively in reduced maintenance. The exam tests understanding of WHY abstraction matters, not just HOW to do it.

**Example question:**
> A TAE argues against using a Page Object Model because "it requires writing more code." The BEST counter-argument is:
>
> A. More code is always better
> B. The extra code isolates SUT changes, reducing long-term maintenance
> C. Developers prefer longer code
> D. The Page Object Model is required by law

**Correct answer:** B — Abstraction's value is in maintainability. The upfront cost is recovered many times over in reduced maintenance.

---

## 🪤 Trap 5: Ignoring Interface Stability

**Trap:** Unstable interfaces between layers cause cascading changes. Interfaces should be well-defined and stable.

**Example question:**
> In a well-designed TAA, when the SUT's login mechanism changes from a form to a single-page app modal:
>
> A. All test scripts must be rewritten
> B. Only the Test Adaptation Layer should need changes
> C. The Test Generation Layer must be redesigned
> D. The entire TAA must be replaced

**Correct answer:** B — With proper abstraction, only the Adaptation Layer (which knows HOW to interact with the SUT) changes. Test scripts (Definition Layer) remain unchanged.
