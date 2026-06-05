# Chapter 5 — API Security and Performance Testing: Practice Questions

---

### Q1 (API-5.1, K2)

Basic Authentication sends credentials:

A. Encrypted with AES256
B. Base64 encoded (which is not encryption)
C. As plaintext
D. Using OAuth2

---

### Q2 (API-5.1, K2)

OAuth2 is primarily a framework for:

A. Encrypting database passwords
B. Authorization — granting limited access to resources
C. Compressing API responses
D. Generating API documentation

---

### Q3 (API-5.2, K2)

A user changes a URL parameter from `/users/123/orders` to `/users/124/orders` and accesses another user's data. This is:

A. A broken object level authorization vulnerability
B. A network routing issue
C. Normal API behavior
D. A caching problem

---

### Q4 (API-5.2, K3)

An API returns a user's password hash in a profile response. This is:

A. Good for debugging
B. Excessive data exposure
C. Required for authentication
D. Normal REST practice

---

### Q5 (API-5.3, K2)

Sending `{"username": "admin' OR '1'='1"}` to test an API is checking for:

A. Rate limiting
B. SQL injection
C. Cross-site scripting
D. Buffer overflow

---

### Q6 (API-5.4, K2)

Load testing verifies:

A. How the API behaves under expected load
B. How the API behaves when completely offline
C. The API's user interface
D. The API's documentation accuracy

---

### Q7 (API-5.4, K2)

Stress testing is used to:

A. Verify the API works under normal conditions
B. Find the API's breaking point by exceeding normal capacity
C. Test the API's documentation
D. Verify user authentication

---

### Q8 (API-5.1, K3)

A valid JWT with a modified payload (but original signature) is sent to an API. A secure API should:

A. Accept it because the signature looks valid
B. Reject it because the signature no longer matches the modified payload
C. Accept it but log a warning
D. Return a cached response

---

### Q9 (API-5.4, K3)

A team needs to verify that an API can handle sustained traffic for 8 hours without memory leaks. They should perform:

A. Load testing
B. Stress testing
C. Soak testing
D. Spike testing

---

### Q10 (API-5.2, K2)

Which OWASP API Security risk involves users accessing endpoints beyond their role (e.g., regular users accessing admin functions)?

A. Broken Object Level Authorization
B. Broken Function Level Authorization
C. Excessive Data Exposure
D. Security Misconfiguration

---

### Q11 (API-5.5, K2)

When a client exceeds the API rate limit, the expected HTTP status code is:

A. 200 OK
B. 400 Bad Request
C. 429 Too Many Requests
D. 500 Internal Server Error

---

### Q12 (API-5.3, K3)

Testing an API endpoint with an expired access token should return:

A. 200 OK
B. 401 Unauthorized
C. 403 Forbidden
D. 404 Not Found

---

### Q13 (API-5.4, K2)

k6 is a tool primarily used for:

A. Static code analysis
B. API performance/load testing
C. Database migration
D. UI automation

---

### Q14 (API-5.2, K2)

Mass assignment in APIs occurs when:

A. Too many users access the API at once
B. Clients can set fields that should not be user-modifiable (e.g., isAdmin)
C. The API assigns random IDs
D. Multiple APIs share the same database

---

### Q15 (API-5.1, K3)

In OAuth2 Authorization Code flow, the client first:

A. Sends username and password directly
B. Redirects the user to the authorization server
C. Generates its own access token
D. Calls the API with a client ID only

---

### Q16 (API-5.4, K3)

Spike testing is used to verify:

A. API behavior under expected steady load
B. API behavior when traffic suddenly increases dramatically
C. API behavior over a long period
D. API security vulnerabilities

---

### Q17 (API-5.2, K2)

Sending a request to `GET /files/../../etc/passwd` is testing for:

A. SQL injection
B. Path traversal
C. Cross-site scripting
D. Buffer overflow

---

### Q18 (API-5.3, K2)

API security testing should include:

A. Only positive tests with valid credentials
B. Tests with valid, invalid, expired, and missing credentials
C. Only performance tests
D. Only manual testing

---

### Q19 (API-5.4, K2)

Which metric measures the time from sending a request to receiving a response?

A. Throughput
B. Response time
C. Concurrent users
D. Error rate

---

### Q20 (API-5.2, K3)

A production API still has an old `/v1/` endpoint with known vulnerabilities while `/v2/` is secure. This is:

A. Proper versioning
B. Improper assets management
C. Expected behavior
D. A caching issue

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** Basic Auth uses Base64 encoding, which is not encryption. Must use HTTPS.

### Q2
**Answer: B**

**Rationale:** OAuth2 is an authorization framework for granting limited access.

### Q3
**Answer: A**

**Rationale:** Accessing another user's resources by changing IDs = broken object level authorization.

### Q4
**Answer: B**

**Rationale:** Returning sensitive data like password hashes = excessive data exposure.

### Q5
**Answer: B**

**Rationale:** SQL injection test using tautology (`' OR '1'='1`).

### Q6
**Answer: A**

**Rationale:** Load testing = testing under expected load.

### Q7
**Answer: B**

**Rationale:** Stress testing = finding breaking points beyond normal capacity.

### Q8
**Answer: B**

**Rationale:** JWT signature must match the payload. Modified payload = invalid signature.

### Q9
**Answer: C**

**Rationale:** Soak testing = sustained load for extended periods to find leaks.

### Q10
**Answer: B**

**Rationale:** Broken function level authorization = wrong role accessing endpoints.

### Q11
**Answer: C**

**Rationale:** 429 = Too Many Requests (rate limit exceeded).

### Q12
**Answer: B**

**Rationale:** Expired token = authentication failure = 401 Unauthorized.

### Q13
**Answer: B**

**Rationale:** k6 is a modern load/performance testing tool.

### Q14
**Answer: B**

**Rationale:** Mass assignment = clients setting fields they shouldn't.

### Q15
**Answer: B**

**Rationale:** Auth Code flow starts by redirecting user to authorization server.

### Q16
**Answer: B**

**Rationale:** Spike testing = sudden dramatic traffic increase.

### Q17
**Answer: B**

**Rationale:** `../../etc/passwd` = path traversal attempt.

### Q18
**Answer: B**

**Rationale:** Security testing must include invalid/missing/expired credentials.

### Q19
**Answer: B**

**Rationale:** Response time = request to response duration.

### Q20
**Answer: B**

**Rationale:** Old vulnerable endpoints still accessible = improper assets management.
