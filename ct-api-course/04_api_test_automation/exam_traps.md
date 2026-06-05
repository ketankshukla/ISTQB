# Chapter 4 — API Test Automation: Exam Traps

## Trap 1: Automating Everything Without ROI Analysis

**Trap:** Not all API tests should be automated. One-time tests and exploratory tests are better done manually.

**Example question:**
> A team automates 100% of API tests including one-time migration validation tests. The problem is:
>
> A. They do not have enough automation
> B. One-time tests have poor ROI for automation
> C. All tests should always be automated
> D. Manual testing is never appropriate

**Correct answer:** B — One-time tests are poor automation candidates because the cost exceeds the value.

---

## Trap 2: Hard-Coding URLs and Tokens in Every Test

**Trap:** Centralize configuration. Hard-coding in every test makes maintenance impossible when environments change.

**Example question:**
> A team has 200 API tests, each with a hard-coded base URL. When the staging URL changes, all 200 tests break. The solution is:
>
> A. Update all 200 tests manually
> B. Centralize the base URL in a configuration file or environment variable
> C. Never change the staging URL
> D. Delete the tests and start over

**Correct answer:** B — Centralized configuration means one change updates all tests.

---

## Trap 3: Noisy Assertions

**Trap:** Assertions should be specific. A vague assertion like `expect(response).toBeDefined()` tells you little when it fails.

**Example question:**
> A test uses `assert response != null`. When it fails, the tester learns only that the response was null. A better assertion would be:
>
> A. Keep the same assertion — it is simple
> B. Use specific assertions like `assert response.status_code == 200` and `assert "id" in response.json()`
> C. Remove assertions entirely
> D. Add a sleep and retry

**Correct answer:** B — Specific assertions pinpoint exactly what failed, making debugging faster.

---

## Trap 4: Ignoring Test Suite Execution Time

**Trap:** Slow test suites discourage running them frequently. API tests should be fast (milliseconds per test).

**Example question:**
> A team's API test suite takes 45 minutes to run. Developers rarely run it. The BEST improvement is:
>
> A. Tell developers to be more patient
> B. Profile and optimize slow tests, run tests in parallel, mock slow external services
> C. Delete half the tests to make it faster
> D. Only run tests at night

**Correct answer:** B — Slow tests should be optimized and parallelized. Running only at night delays feedback.

---

## Trap 5: Not Using Data-Driven Testing for Repetitive Scenarios

**Trap:** Writing separate test methods for each data variation creates duplication and maintenance burden.

**Example question:**
> A tester writes 50 separate test methods for 50 different login credentials. A better approach is:
>
> A. Keep all 50 separate methods for clarity
> B. Use data-driven testing with one test method and a data source
> C. Delete 40 of the tests
> D. Combine all tests into one giant method

**Correct answer:** B — Data-driven testing reduces duplication and makes adding new cases easy.
