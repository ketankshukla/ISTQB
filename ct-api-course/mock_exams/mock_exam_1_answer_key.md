# Mock Exam 1 — Answer Key

| Q | Answer | Rationale |
|---|--------|-----------|
| 1 | B | An API is a set of protocols for software communication. |
| 2 | C | GraphQL is a query language where clients specify exactly what data they need. |
| 3 | B | POST is used to create new resources. |
| 4 | B | 201 Created indicates a resource was successfully created. |
| 5 | B | 401 Unauthorized = missing or invalid authentication. |
| 6 | B | SOAP is a protocol that uses XML messages. |
| 7 | B | GET is both safe (does not modify) and idempotent (same result every time). |
| 8 | B | 403 = authenticated but not authorized. 401 = not authenticated. |
| 9 | B | API specifications (OpenAPI, WSDL) are the primary source for deriving test conditions. |
| 10 | B | EP divides inputs into groups where behavior is expected to be similar. |
| 11 | B | BVA includes just below min (9), at min (10), just above min (11), just below max (99), at max (100), just above max (101). |
| 12 | B | Negative testing uses invalid inputs to verify error handling. |
| 13 | B | Postman is an API testing tool for both manual and automated testing. |
| 14 | B | Fixtures create data before and clean up after each test. |
| 15 | B | Mock servers simulate external APIs for controlled, reliable testing. |
| 16 | A | REST Assured is a Java DSL for testing REST services. |
| 17 | B | Data-driven testing separates logic from data for reuse. |
| 18 | B | Smoke tests verify critical paths quickly on every build. |
| 19 | B | Basic Auth uses Base64 encoding, which is not encryption. Must use HTTPS. |
| 20 | B | OAuth2 is an authorization framework for granting limited access. |
| 21 | A | Accessing another user's resources by changing IDs = broken object level authorization. |
| 22 | B | Returning sensitive data like password hashes = excessive data exposure. |
| 23 | B | SQL injection test using tautology (`' OR '1'='1`). |
| 24 | A | Load testing = testing under expected load. |
| 25 | B | Stress testing = finding breaking points beyond normal capacity. |
| 26 | B | Consumer-driven contract testing = consumer defines expectations, both verify independently. |
| 27 | B | JSON Schema defines and validates JSON data structure. |
| 28 | B | Header versioning keeps URLs unchanged. |
| 29 | B | Optional new fields do not break existing clients. |
| 30 | B | Renaming a field breaks existing clients = breaking change. |
| 31 | B | Data-driven testing handles multiple inputs efficiently. |
| 32 | B | Regression tests run after quick smoke tests pass. |
| 33 | B | JWT signature must match the payload. Modified payload = invalid signature. |
| 34 | C | Soak testing = sustained load for extended periods to find leaks. |
| 35 | B | Broken function level authorization = wrong role accessing endpoints. |
| 36 | C | 429 = Too Many Requests (rate limit exceeded). |
| 37 | B | Pact is the leading consumer-driven contract testing tool. |
| 38 | B | Schema validation catches format errors and enforces contracts. |
| 39 | B | Hard-coded tokens are a security risk and prevent environment portability. |
| 40 | B | Centralized configuration and helpers improve maintainability. |

## Score Interpretation

| Score | Interpretation |
|-------|-------------|
| 36-40 | Excellent — ready for the exam |
| 30-35 | Good — review weak areas and practice more |
| 26-29 | Fair — significant study needed in weak chapters |
| Below 26 | Needs improvement — re-study the full course |

**Target for exam readiness: 32+ correct answers (80%+)**
