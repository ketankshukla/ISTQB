# 🪤 Chapter 3 — API Test Implementation and Execution: Exam Traps

## 🪤 Trap 1: Hard-Coding Credentials in Test Scripts

**Trap:** API keys, tokens, and passwords must never be hard-coded. Use environment variables or secret managers.

**Example question:**
> A test script contains: `Authorization: Bearer abc123xyz`. This is:
>
> A. A secure approach for test environments
> B. A security risk — credentials should use environment variables
> C. Required for all API tests
> D. The only way to authenticate API requests

**Correct answer:** B — Hard-coded credentials are a security risk and prevent tests from running in different environments.

---

## 🪤 Trap 2: Sharing Test Data Between Tests

**Trap:** Tests should be independent. Sharing test data creates ordering dependencies and makes debugging difficult.

**Example question:**
> Test B assumes Test A created a user account. Test B fails when run alone. The problem is:
>
> A. Test B has a defect
> B. Test B depends on Test A's side effects
> C. The test framework is broken
> D. Both tests should be merged into one

**Correct answer:** B — Each test should set up its own prerequisites. Shared state creates brittleness.

---

## 🪤 Trap 3: Testing Against Production Directly

**Trap:** Tests that create/modify data should never run against production. Use dedicated test environments.

**Example question:**
> A team runs automated API tests that create test orders directly in the production database. This is:
>
> A. Acceptable for fast feedback
> B. Dangerous — test data pollutes production and may trigger real business processes
> C. Required for realistic testing
> D. The most efficient testing approach

**Correct answer:** B — Production testing that creates data is dangerous. Use staging/test environments.

---

## 🪤 Trap 4: Ignoring Response Headers

**Trap:** Headers contain important information (Content-Type, rate limits, caching). Assertions should verify relevant headers.

**Example question:**
> A tester verifies the JSON body of an API response but does not check the Content-Type header. The risk is:
>
> A. No risk — the body is what matters
> B. The API could return XML with a JSON body, confusing consumers
> C. Headers are never important
> D. Content-Type is set automatically and never wrong

**Correct answer:** B — Headers are part of the API contract. Content-Type tells consumers how to parse the body.

---

## 🪤 Trap 5: Assuming External Services Are Always Available

**Trap:** External service dependencies make tests unreliable. Use mocks for external APIs.

**Example question:**
> A team's API tests fail 20% of the time because a third-party payment API is slow. The BEST solution is:
>
> A. Retry failed tests until they pass
> B. Mock the payment API to control its behavior
> C. Skip tests when the third-party is down
> D. Test only during business hours

**Correct answer:** B — Mocking external services eliminates flakiness caused by factors outside your control.
