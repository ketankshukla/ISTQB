# Chapter 3 — API Test Implementation and Execution: Practice Questions

---

### Q1 (API-3.1, K2)

Postman is primarily used for:

A. Writing production API code
B. Manual and automated API testing
C. Database administration
D. Server deployment

---

### Q2 (API-3.2, K2)

Which test data strategy creates data before each test and cleans up afterward?

A. Static test data
B. Setup-teardown (fixtures)
C. Production data copy
D. Shared global data

---

### Q3 (API-3.3, K2)

A mock server is used to:

A. Replace the real database with a faster one
B. Simulate external APIs for reliable testing
C. Monitor production traffic
D. Generate API documentation

---

### Q4 (API-3.1, K3)

Which assertion should be included when verifying an API response?

A. Only the response body
B. Status code, response body, and relevant headers
C. Only the URL
D. Only the request time

---

### Q5 (API-3.2, K3)

A test creates an order, which reduces product inventory. Subsequent tests fail due to "out of stock." The BEST fix is:

A. Run tests in a specific order
B. Use test products with sufficient inventory or reset inventory after tests
C. Skip the failing tests
D. Manually restock inventory before each test run

---

### Q6 (API-3.3, K2)

Staging environment is BEST described as:

A. The developer's local machine
B. A production-like environment for pre-release testing
C. The live production system
D. A tool for API documentation

---

### Q7 (API-3.4, K2)

When an API test fails, the FIRST step should be to:

A. Delete the test and write a new one
B. Determine if the failure is a test script error, API defect, or environment issue
C. Immediately report a defect
D. Run the test 10 more times and see if it passes

---

### Q8 (API-3.5, K2)

An API defect report should include all EXCEPT:

A. The HTTP request that was sent
B. The actual and expected responses
C. The tester's opinion about the developer's skill
D. The environment where the defect was found

---

### Q9 (API-3.1, K3)

A test script uses a hard-coded API token. The MAIN risk is:

A. The token might expire
B. Security exposure and inability to run in different environments
C. The test runs too slowly
D. The token is too long

---

### Q10 (API-3.2, K2)

Using production data directly in API tests is:

A. Recommended for realism
B. Risky because it may contain sensitive information and trigger real processes
C. Required for integration testing
D. Faster than generating test data

---

### Q11 (API-3.3, K3)

A team tests an API that calls a third-party shipping service. To make tests reliable, they should:

A. Only run tests when the shipping service is online
B. Mock the shipping service API
C. Use a different third-party service
D. Skip testing the shipping integration

---

### Q12 (API-3.4, K2)

Test data isolation means:

A. All tests share the same database
B. Each test uses its own data to avoid conflicts
C. Tests run in production
D. Data is never deleted

---

### Q13 (API-3.1, K2)

Newman is a tool for:

A. Writing OpenAPI specifications
B. Running Postman collections from the command line
C. Generating test data
D. Monitoring API performance

---

### Q14 (API-3.5, K3)

A tester reports a defect where the API returns 500 for a valid request. The MOST useful information in the report is:

A. The tester's name
B. The exact request (URL, headers, body) and the actual response
C. The time of day the test was run
D. The tester's opinion about the API design

---

### Q15 (API-3.2, K2)

Database transactions that roll back after tests are an example of:

A. Static test data
B. Test isolation technique
C. Production deployment
D. API documentation

---

### Q16 (API-3.3, K3)

A CI/CD pipeline should run API tests:

A. Only once per month
B. On every code change (commit or pull request)
C. Only before major releases
D. Manually when a tester remembers

---

### Q17 (API-3.4, K2)

Parallel test execution requires:

A. No special preparation
B. Test data isolation to prevent conflicts
C. Only one test at a time
D. Production environment access

---

### Q18 (API-3.1, K3)

When automating API tests, the Arrange-Act-Assert pattern means:

A. Arrange test data, Act (send request), Assert (verify response)
B. Arrange the meeting, Act friendly, Assert authority
C. Arrange the UI, Act on buttons, Assert on screenshots
D. Arrange the database, Act as admin, Assert everything passes

---

### Q19 (API-3.2, K2)

Dynamic test data is generated:

A. Before the test suite runs
B. At runtime during test execution
C. After all tests complete
D. By the API itself automatically

---

### Q20 (API-3.5, K3)

An API returns 404 for all requests. The tester should FIRST check:

A. The API code for bugs
B. Whether the base URL and endpoints are correct
C. The database schema
D. The network firewall rules

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** Postman is an API testing tool for both manual and automated testing.

### Q2
**Answer: B**

**Rationale:** Fixtures create data before and clean up after each test.

### Q3
**Answer: B**

**Rationale:** Mock servers simulate external APIs for controlled, reliable testing.

### Q4
**Answer: B**

**Rationale:** Verify status code, body, and headers — all are part of the API contract.

### Q5
**Answer: B**

**Rationale:** Test products with high inventory or reset after tests prevent stock depletion.

### Q6
**Answer: B**

**Rationale:** Staging is a production-like environment for pre-release validation.

### Q7
**Answer: B**

**Rationale:** First determine the nature of the failure before deciding next steps.

### Q8
**Answer: C**

**Rationale:** Defect reports should be factual. Personal opinions have no place.

### Q9
**Answer: B**

**Rationale:** Hard-coded tokens are a security risk and prevent environment portability.

### Q10
**Answer: B**

**Rationale:** Production data is risky (sensitive, triggers real processes).

### Q11
**Answer: B**

**Rationale:** Mocking the shipping service removes external dependency flakiness.

### Q12
**Answer: B**

**Rationale:** Isolation = each test has its own data, no conflicts.

### Q13
**Answer: B**

**Rationale:** Newman is the CLI runner for Postman collections.

### Q14
**Answer: B**

**Rationale:** Exact request and response are needed to reproduce and debug.

### Q15
**Answer: B**

**Rationale:** Transaction rollback isolates tests by undoing database changes.

### Q16
**Answer: B**

**Rationale:** API tests should run on every change for fast feedback.

### Q17
**Answer: B**

**Rationale:** Parallel tests need data isolation to prevent conflicts.

### Q18
**Answer: A**

**Rationale:** Arrange = setup, Act = send request, Assert = verify.

### Q19
**Answer: B**

**Rationale:** Dynamic data is created during test execution.

### Q20
**Answer: B**

**Rationale:** 404 for all requests suggests wrong URL/endpoint, not API code bugs.
