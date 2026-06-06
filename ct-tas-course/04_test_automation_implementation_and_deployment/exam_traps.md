# Chapter 4 — Test Automation Implementation and Deployment: Exam Traps

## Trap 1: Running All Tests for Every Commit

**Trap:** Full regression on every commit is slow. Run smoke tests on commit, full suite nightly.

**Example question:**
> A team runs their entire 4-hour regression suite on every commit. The better approach is:
>
> A. Continue — thoroughness is good
> B. Run fast smoke tests on commit; full suite nightly or on demand
> C. Only run tests manually
> D. Skip tests for small changes

**Correct answer:** B — Fast feedback on commit; comprehensive tests scheduled.

---

## Trap 2: Ignoring Flaky Tests

**Trap:** Flaky tests erode trust in automation. They must be fixed or quarantined.

**Example question:**
> A test fails 20% of the time with no code changes. The team should:
>
> A. Keep running it — it's mostly fine
> B. Investigate root cause, fix, or quarantine until resolved
> C. Delete it immediately
> D. Only run it manually

**Correct answer:** B — Flaky tests destroy trust; fix or quarantine.

---

## Trap 3: Thinking Parallel Execution is Always Better

**Trap:** Parallel execution helps but requires infrastructure and may cause resource contention.

**Example question:**
> A team runs 100 UI tests in parallel on one machine. The result is:
>
> A. Always faster
> B. Resource contention, browser crashes, and unreliable results
> C. Only more expensive
> D. Only harder to debug

**Correct answer:** B — Parallel requires sufficient infrastructure; one machine may not handle it.

---

## Trap 4: Using Thread.sleep() for Timing

**Trap:** Fixed sleeps slow tests and still fail on slow systems. Use explicit waits.

**Example question:**
> A test uses `Thread.sleep(5000)` to wait for a page to load. The better approach is:
>
> A. Increase to 10 seconds for safety
> B. Use explicit wait for a specific element to be present
> C. Only run on fast machines
> D. Remove all waits

**Correct answer:** B — Explicit waits wait exactly as long as needed.

---

## Trap 5: Reporting Only Pass/Fail

**Trap:** Trend data, execution time, and flaky rate provide insights that pass/fail alone cannot.

**Example question:**
> A team knows their suite is 95% green but doesn't track trends. They might miss:
>
> A. Nothing — 95% is excellent
> B. Gradual degradation, increasing execution time, or growing flaky test count
> C. Only the tool cost
> D. Only training needs

**Correct answer:** B — Trend analysis reveals problems before they become critical.
