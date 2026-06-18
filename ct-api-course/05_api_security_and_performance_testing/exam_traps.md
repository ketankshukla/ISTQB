# 🪤 Chapter 5 — API Security and Performance Testing: Exam Traps

## 🪤 Trap 1: Confusing Authentication and Authorization

**Trap:** Authentication = verifying identity (who are you?). Authorization = verifying permissions (what can you do?).

**Example question:**
> A user provides valid login credentials but cannot access an admin endpoint. This is an:
>
> A. Authentication failure
> B. Authorization failure
> C. Session timeout
> D. Network error

**Correct answer:** B — The user is authenticated (credentials valid) but not authorized (lacks admin role). 401 = auth failure. 403 = authorization failure.

---

## 🪤 Trap 2: Thinking HTTPS Is Enough for Security

**Trap:** HTTPS encrypts data in transit but does not protect against all API vulnerabilities (injection, broken access control, excessive data exposure).

**Example question:**
> An API uses HTTPS for all communications. Therefore, it is secure against all attacks. This statement is:
>
> A. True — HTTPS provides complete security
> B. False — HTTPS only protects data in transit; other vulnerabilities may exist
> C. True for REST APIs only
> D. False — HTTPS makes APIs slower but not more secure

**Correct answer:** B — HTTPS protects transport but not application-level vulnerabilities.

---

## 🪤 Trap 3: Confusing Load and Stress Testing

**Trap:** Load = expected load. Stress = beyond normal capacity to find breaking points.

**Example question:**
> Testing an API with 10x expected traffic to find its breaking point is:
>
> A. Load testing
> B. Stress testing
> C. Regression testing
> D. Unit testing

**Correct answer:** B — Stress testing goes beyond normal capacity. Load testing uses expected capacity.

---

## 🪤 Trap 4: Ignoring Rate Limit Testing

**Trap:** Rate limits are part of the API contract. They must be tested to verify correct behavior and proper error responses.

**Example question:**
> A tester sends 150 requests/minute to an API with a 100/minute rate limit. The API returns 429 Too Many Requests. The tester concludes:
>
> A. The API is broken
> B. The rate limit is working correctly
> C. The test is invalid
> D. The API should never return 429

**Correct answer:** B — 429 is the correct response for exceeding a rate limit.

---

## 🪤 Trap 5: Testing Only with Valid Tokens

**Trap:** Security testing must include invalid, expired, missing, and tampered tokens/credentials.

**Example question:**
> A security tester only tests API endpoints with valid authentication tokens. The testing is:
>
> A. Complete — valid tokens cover all scenarios
> B. Incomplete — invalid, expired, and missing tokens must also be tested
> C. Sufficient for a security audit
> D. The best practice for API security testing

**Correct answer:** B — Security testing requires testing boundary conditions including invalid credentials.
