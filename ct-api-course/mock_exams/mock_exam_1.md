# 📝 CT-API Mock Exam 1

**Instructions:**
- 40 questions
- 90 minutes
- Single best answer for each question
- No negative marking

---

### 🔷 Q1

An API is BEST described as:

A. A user interface for web applications
B. A set of protocols that allow software applications to communicate
C. A type of database
D. A programming language

---

### 🔷 Q2

Which API type uses a query language where clients specify exactly what data they need?

A. REST
B. SOAP
C. GraphQL
D. RPC

---

### 🔷 Q3

Which HTTP method is used to create a new resource?

A. GET
B. POST
C. PUT
D. DELETE

---

### 🔷 Q4

Which HTTP status code indicates that a resource was successfully created?

A. 200 OK
B. 201 Created
C. 204 No Content
D. 404 Not Found

---

### 🔷 Q5

A user sends a request without an authentication token. The API should return:

A. 400 Bad Request
B. 401 Unauthorized
C. 403 Forbidden
D. 404 Not Found

---

### 🔷 Q6

SOAP is BEST characterized as:

A. An architectural style using JSON
B. A protocol that uses XML messages
C. A query language for APIs
D. A replacement for HTTP

---

### 🔷 Q7

Which HTTP method is both safe and idempotent?

A. POST
B. GET
C. PATCH
D. DELETE

---

### 🔷 Q8

A 403 Forbidden status code means:

A. The request syntax was invalid
B. The client is authenticated but not authorized for this resource
C. The server encountered an unexpected error
D. The resource does not exist

---

### 🔷 Q9

Test conditions for API testing are MOST commonly derived from:

A. Only user interface mockups
B. API specifications such as OpenAPI or WSDL
C. Database schema diagrams only
D. Marketing brochures

---

### 🔷 Q10

Equivalence partitioning for an API parameter divides input data into:

A. Individual test cases
B. Groups where the system behaves similarly
C. Random selections
D. Only valid values

---

### 🔷 Q11

For a numeric parameter with valid range 10-100, boundary value tests should include:

A. Only 10, 50, and 100
B. 9, 10, 11, 99, 100, and 101
C. Only 10 and 100
D. Random values between 10 and 100

---

### 🔷 Q12

Negative testing for an API involves:

A. Testing with valid inputs to confirm correct behavior
B. Testing with invalid inputs to verify error handling
C. Testing only the fastest response paths
D. Testing with production data only

---

### 🔷 Q13

Postman is primarily used for:

A. Writing production API code
B. Manual and automated API testing
C. Database administration
D. Server deployment

---

### 🔷 Q14

Which test data strategy creates data before each test and cleans up afterward?

A. Static test data
B. Setup-teardown (fixtures)
C. Production data copy
D. Shared global data

---

### 🔷 Q15

A mock server is used to:

A. Replace the real database with a faster one
B. Simulate external APIs for reliable testing
C. Monitor production traffic
D. Generate API documentation

---

### 🔷 Q16

REST Assured is a test automation framework for:

A. Java
B. Python
C. JavaScript
D. C#

---

### 🔷 Q17

Data-driven testing for APIs is BEST described as:

A. Writing a separate test method for each data variation
B. Separating test logic from test data so the same test runs with multiple inputs
C. Testing only with production data
D. Using only static, hard-coded data

---

### 🔷 Q18

API smoke tests in a CI pipeline should:

A. Test every endpoint exhaustively
B. Run quickly to verify critical paths on every build
C. Only run once per week
D. Replace unit tests entirely

---

### 🔷 Q19

Basic Authentication sends credentials:

A. Encrypted with AES256
B. Base64 encoded (which is not encryption)
C. As plaintext
D. Using OAuth2

---

### 🔷 Q20

OAuth2 is primarily a framework for:

A. Encrypting database passwords
B. Authorization — granting limited access to resources
C. Compressing API responses
D. Generating API documentation

---

### 🔷 Q21

A user changes a URL parameter from `/users/123/orders` to `/users/124/orders` and accesses another user's data. This is:

A. A broken object level authorization vulnerability
B. A network routing issue
C. Normal API behavior
D. A caching problem

---

### 🔷 Q22

An API returns a user's password hash in a profile response. This is:

A. Good for debugging
B. Excessive data exposure
C. Required for authentication
D. Normal REST practice

---

### 🔷 Q23

Sending `{"username": "admin' OR '1'='1"}` to test an API is checking for:

A. Rate limiting
B. SQL injection
C. Cross-site scripting
D. Buffer overflow

---

### 🔷 Q24

Load testing verifies:

A. How the API behaves under expected load
B. How the API behaves when completely offline
C. The API's user interface
D. The API's documentation accuracy

---

### 🔷 Q25

Stress testing is used to:

A. Verify the API works under normal conditions
B. Find the API's breaking point by exceeding normal capacity
C. Test the API's documentation
D. Verify user authentication

---

### 🔷 Q26

Consumer-driven contract testing is BEST described as:

A. Testing both services running together in an integration environment
B. The consumer defines expectations and both sides verify independently
C. Only the provider tests its own API
D. Only manual testing of API contracts

---

### 🔷 Q27

JSON Schema is used to:

A. Execute API tests
B. Define and validate the structure of JSON data
C. Generate random test data
D. Encrypt API responses

---

### 🔷 Q28

Which API versioning approach keeps URLs unchanged?

A. URL versioning
B. Header versioning
C. Query parameter versioning
D. No versioning

---

### 🔷 Q29

Adding a new optional field to an API response is:

A. A breaking change
B. A backward compatible change
C. Not allowed
D. Only allowed in major version releases

---

### 🔷 Q30

An API team renames a response field from `name` to `fullName`. This is:

A. Backward compatible
B. A breaking change requiring a new version
C. Only a documentation update
D. Automatically handled by all clients

---

### 🔷 Q31

A team needs to test login with 20 different username/password combinations. The BEST approach is:

A. Write 20 separate test methods
B. Use parameterized/data-driven testing
C. Test only one combination
D. Use a loop inside a single test with no assertions

---

### 🔷 Q32

In a CI/CD pipeline, API regression tests should typically run:

A. Only on the developer's machine
B. After smoke tests pass
C. Before any code is written
D. Only when manually triggered

---

### 🔷 Q33

A valid JWT with a modified payload (but original signature) is sent to an API. A secure API should:

A. Accept it because the signature looks valid
B. Reject it because the signature no longer matches the modified payload
C. Accept it but log a warning
D. Return a cached response

---

### 🔷 Q34

A team needs to verify that an API can handle sustained traffic for 8 hours without memory leaks. They should perform:

A. Load testing
B. Stress testing
C. Soak testing
D. Spike testing

---

### 🔷 Q35

Which OWASP API Security risk involves users accessing endpoints beyond their role?

A. Broken Object Level Authorization
B. Broken Function Level Authorization
C. Excessive Data Exposure
D. Security Misconfiguration

---

### 🔷 Q36

When a client exceeds the API rate limit, the expected HTTP status code is:

A. 200 OK
B. 400 Bad Request
C. 429 Too Many Requests
D. 500 Internal Server Error

---

### 🔷 Q37

Pact is a tool primarily used for:

A. Load testing
B. Consumer-driven contract testing
C. Database migration
D. UI automation

---

### 🔷 Q38

Schema validation in API testing helps:

A. Only the UI look and feel
B. Catch format errors early and enforce API contracts
C. Improve API performance
D. Replace the need for functional testing

---

### 🔷 Q39

A test script uses a hard-coded API token. The MAIN risk is:

A. The token might expire
B. Security exposure and inability to run in different environments
C. The test runs too slowly
D. The token is too long

---

### 🔷 Q40

A testing team wants to improve the maintainability of their API automation. They should adopt:

A. Hard-coded URLs in every test
B. Centralized configuration and reusable API client helpers
C. Copy-pasting test code
D. Fewer automated tests

---

## 📝 End of Mock Exam 1
