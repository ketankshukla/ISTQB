# Chapter 5 — Mobile Test Automation: Exam Traps

## Trap 1: Using XPath as Primary Locator

**Trap:** XPath is fragile (breaks with UI changes). Accessibility IDs are stable and improve accessibility.

**Example question:**
> A team uses XPath locators like `//android.widget.Button[@text='Submit']`. The risk is:
>
> A. XPath is the most reliable locator
> B. Tests break whenever button text changes; accessibility IDs are more stable
> C. Only slower execution
> D. Only on iOS

**Correct answer:** B — XPath depends on text/structure; accessibility IDs are stable.

---

## Trap 2: Thinking Emulators Replace All Real Device Testing

**Trap:** Emulators are great for development but miss real-world performance, hardware, and behavior issues.

**Example question:**
> A team runs all tests on emulators and never tests on real devices. The risk is:
>
> A. No risk — emulators are identical
> B. Missing real-world performance, hardware-specific bugs, and gesture behavior
> C. Only slower tests
> D. Only more expensive

**Correct answer:** B — Real devices are essential for performance and hardware testing.

---

## Trap 3: Running UI Tests Without Disabling Animations

**Trap:** Animations cause timing issues and flaky tests. Disable them in developer settings.

**Example question:**
> UI tests frequently fail because elements aren't found immediately after a screen transition. The fix is:
>
> A. Add more sleep statements
> B. Disable system animations and use explicit waits instead of fixed sleeps
> C. Only run tests manually
> D. Skip those tests

**Correct answer:** B — Disable animations; use explicit waits for element presence.

---

## Trap 4: Treating Retry as a Permanent Solution

**Trap:** Retrying flaky tests masks real issues. The root cause should be investigated and fixed.

**Example question:**
> A test fails 30% of the time and the team configures 5 retries. The risk is:
>
> A. No risk — retries solve the problem
> B. Retries waste time and hide a real stability issue that should be fixed
> C. Only slower CI
> D. Only more logs

**Correct answer:** B — Investigate and fix root cause; don't rely on retries.

---

## Trap 5: Automating Everything at the UI Level

**Trap:** UI tests are slow and flaky. Use unit and integration tests for business logic; UI tests for critical flows only.

**Example question:**
> A team writes UI tests for every feature including simple calculations. The better approach is:
>
> A. Continue — more UI tests are always better
> B. Use unit tests for logic, API tests for service layer, UI tests only for end-to-end critical flows
> C. Only manual testing
> D. Only screenshot comparison

**Correct answer:** B — Test pyramid applies to mobile: many unit, fewer integration, fewest UI.
