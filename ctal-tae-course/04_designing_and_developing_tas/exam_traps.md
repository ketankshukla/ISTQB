# Chapter 4 — Designing and Developing the TAS: Exam Traps

## Trap 1: Confusing Framework Types

**Trap:** Data-driven = test logic separate from data. Keyword-driven = action words readable by business. Hybrid = combination of both.

**Example question:**
> A team writes tests using action words like "ClickButton" and "EnterText" in a spreadsheet. Non-technical stakeholders review these tests. This is:
>
> A. A data-driven framework
> B. A keyword-driven framework
> C. A record/replay framework
> D. A unit testing framework

**Correct answer:** B — Action words (keywords) readable by non-technical users is the hallmark of a keyword-driven framework.

---

## Trap 2: Putting Assertions in Page Objects

**Trap:** Page Objects should contain locators and actions, NOT assertions. Assertions belong in test scripts.

**Example question:**
> A Page Object contains a method `verifyLoginSuccess()` that asserts the user is logged in. This is:
>
> A. Good practice — it keeps tests short
> B. Poor practice — Page Objects should not contain assertions
> C. Required by the Page Object Model
> D. Only acceptable in keyword-driven frameworks

**Correct answer:** B — Page Objects expose actions. Test scripts contain assertions. Mixing them reduces reusability and clarity.

---

## Trap 3: Using Fixed Sleep Instead of Explicit Waits

**Trap:** `sleep(5)` wastes time and is unreliable. Explicit waits that check for conditions are faster and more reliable.

**Example question:**
> A test script uses `sleep(10)` to wait for a page to load. A better approach is:
>
> A. Increase the sleep to 20 seconds for safety
> B. Use an explicit wait that polls for the element to be present
> C. Remove all waits and hope for the best
> D. Only run tests when the server is idle

**Correct answer:** B — Explicit waits check for conditions and proceed as soon as possible, unlike fixed sleeps.

---

## Trap 4: Sharing Test Data Between Tests

**Trap:** Tests should be independent. Sharing data creates ordering dependencies and makes debugging difficult.

**Example question:**
> Test B assumes Test A has already created a user account. Test B fails when run alone. The problem is:
>
> A. Test B has a defect
> B. Test B depends on Test A's side effects instead of being self-contained
> C. The test framework is broken
> D. Test B should be deleted

**Correct answer:** B — Each test should set up its own prerequisites. Dependencies between tests create brittleness.

---

## Trap 5: Hard-Coding Credentials in Test Scripts

**Trap:** Hard-coded credentials are a security risk and make tests non-portable. Use environment variables or secret managers.

**Example question:**
> A test script contains: `login("admin", "Password123!")`. This is:
>
> A. Acceptable for test environments
> B. A security risk and makes the test non-portable
> C. Required for all automated tests
> D. The most secure approach

**Correct answer:** B — Hard-coded credentials are a security risk and prevent tests from running in different environments.
