# 🪤 Chapter 2 — API Test Analysis and Design: Exam Traps

## 🪤 Trap 1: Testing Only Happy Paths

**Trap:** API testing must include negative tests. Invalid inputs, missing fields, and boundary values are where many defects hide.

**Example question:**
> A tester validates that a valid API request returns 200 OK. This testing is:
>
> A. Complete — no further testing is needed
> B. Incomplete — negative tests for invalid inputs are also required
> C. Sufficient for production deployment
> D. The only type of testing needed for APIs

**Correct answer:** B — Positive testing alone is insufficient. Negative tests verify error handling, security, and robustness.

---

## 🪤 Trap 2: Testing Only Boundary Values Within Range

**Trap:** BVA tests values ON the boundary AND just outside the boundary. Testing only inside the range misses boundary defects.

**Example question:**
> For a parameter with valid range 1-100, boundary value tests should include:
>
> A. Only values 1, 50, and 100
> B. Values 0, 1, 2, 99, 100, and 101
> C. Only values 1 and 100
> D. Random values between 1 and 100

**Correct answer:** B — BVA includes just below minimum (0), at minimum (1), just above minimum (2), just below maximum (99), at maximum (100), and just above maximum (101).

---

## 🪤 Trap 3: Forgetting Null/Empty Tests

**Trap:** Null values, empty strings, and missing fields are common sources of API defects. They must be explicitly tested.

**Example question:**
> A required API parameter `email` is not provided in the request. The tester should verify:
>
> A. The API accepts the missing parameter and uses a default
> B. The API returns an appropriate error (e.g., 400 Bad Request)
> C. The API ignores the request without response
> D. The API generates a random email

**Correct answer:** B — Missing required parameters should result in a validation error, not silent acceptance.

---

## 🪤 Trap 4: Testing All Combinations Exhaustively

**Trap:** For APIs with many parameters, testing all combinations is impractical. Use weak robust EP to test one invalid parameter at a time.

**Example question:**
> An API has 10 parameters, each with 3 equivalence partitions. Testing all combinations would require 3^10 = 59,049 tests. The BEST approach is:
>
> A. Test all 59,049 combinations
> B. Use weak robust testing: one all-valid test + one invalid parameter per test
> C. Only test the happy path
> D. Skip testing this API

**Correct answer:** B — Weak robust testing provides good coverage with a manageable number of tests.

---

## 🪤 Trap 5: Confusing Positive and Negative Testing

**Trap:** Positive = valid inputs, expected success. Negative = invalid inputs, expected error handling.

**Example question:**
> Testing an API with an SQL injection string in a text parameter is:
>
> A. Positive testing
> B. Negative testing
> C. Performance testing
> D. Load testing

**Correct answer:** B — SQL injection is an invalid/malicious input. Testing with it is negative testing (security-focused).
