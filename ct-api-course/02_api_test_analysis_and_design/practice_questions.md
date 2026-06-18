# ❓ Chapter 2 — API Test Analysis and Design: Practice Questions

---

### 🔌 Q1 (API-2.1, K2)

Test conditions for API testing are MOST commonly derived from:

A. Only user interface mockups
B. API specifications such as OpenAPI or WSDL
C. Database schema diagrams only
D. Marketing brochures

---

### 🔌 Q2 (API-2.2, K2)

Equivalence partitioning for an API parameter divides input data into:

A. Individual test cases
B. Groups where the system behaves similarly
C. Random selections
D. Only valid values

---

### 🔌 Q3 (API-2.3, K2)

For a numeric parameter with valid range 10-100, boundary value tests should include:

A. Only 10, 50, and 100
B. 9, 10, 11, 99, 100, and 101
C. Only 10 and 100
D. Random values between 10 and 100

---

### 🔌 Q4 (API-2.4, K2)

Negative testing for an API involves:

A. Testing with valid inputs to confirm correct behavior
B. Testing with invalid inputs to verify error handling
C. Testing only the fastest response paths
D. Testing with production data only

---

### 🔌 Q5 (API-2.3, K3)

An API accepts a `quantity` parameter (integer, 1-99). Which set of boundary values provides the MOST thorough testing?

A. 1, 50, 99
B. 0, 1, 2, 98, 99, 100
C. 0, 1, 99, 100
D. -1, 0, 1, 99, 100

---

### 🔌 Q6 (API-2.5, K2)

State transition testing is MOST appropriate for APIs that:

A. Have no session or workflow
B. Have states that change based on operations (e.g., order status)
C. Only support GET requests
D. Return static responses

---

### 🔌 Q7 (API-2.2, K3)

An API has three parameters, each with 2 equivalence partitions (valid/invalid). Using weak robust testing, the minimum number of test cases is:

A. 2
B. 4
C. 6
D. 8

---

### 🔌 Q8 (API-2.4, K3)

A tester sends a request with an XSS payload in a text field and verifies the API sanitizes it. This is:

A. Positive functional testing
B. Negative security testing
C. Performance testing
D. Load testing

---

### 🔌 Q9 (API-2.1, K2)

Which of the following is a valid test condition derived from an API specification?

A. "The API should look nice"
B. "Verify that missing required fields return 400 Bad Request"
C. "The API should be fast"
D. "Users should like the API"

---

### 🔌 Q10 (API-2.3, K3)

For a string parameter with length 5-20 characters, which test is a boundary value?

A. A string of 10 characters
B. A string of exactly 5 characters
C. A string of random length
D. A string with special characters

---

### 🔌 Q11 (API-2.2, K2)

Equivalence partitioning for a boolean parameter `active` (true/false) has how many partitions?

A. 1
B. 2
C. 3
D. 4

---

### 🔌 Q12 (API-2.6, K2)

Error guessing for an API might include testing:

A. Only the documented happy paths
B. Common error scenarios like missing tokens or malformed JSON
C. Only successful login scenarios
D. The API documentation page

---

### 🔌 Q13 (API-2.5, K3)

An order API has states: Pending → Confirmed → Shipped → Delivered. An invalid transition is:

A. Pending → Confirmed
B. Confirmed → Shipped
C. Delivered → Shipped
D. Pending → Cancelled

---

### 🔌 Q14 (API-2.1, K2)

An OpenAPI specification is useful for API testing because it defines:

A. Only the API's marketing strategy
B. Endpoints, parameters, schemas, and expected responses
C. The API's user interface
D. The database backup schedule

---

### 🔌 Q15 (API-2.3, K3)

For an array parameter with minItems=1 and maxItems=5, boundary tests should include:

A. An array with 3 elements
B. An empty array, 1 element, 5 elements, and 6 elements
C. Only arrays with 1 and 5 elements
D. An array with 100 elements

---

### 🔌 Q16 (API-2.4, K3)

Positive testing should verify that:

A. The API rejects all requests
B. Valid inputs produce expected successful responses
C. Invalid inputs produce error responses
D. The API returns 500 for all requests

---

### 🔌 Q17 (API-2.2, K2)

A parameter accepts values "small", "medium", "large". How many invalid equivalence partitions should be tested at minimum?

A. 0
B. 1
C. 2
D. 3

---

### 🔌 Q18 (API-2.5, K3)

A payment API has states: Initiated → Authorized → Captured → Refunded. Which is a valid test case?

A. Initiated → Captured (skipping Authorized)
B. Authorized → Refunded
C. Captured → Initiated
D. Refunded → Authorized

---

### 🔌 Q19 (API-2.3, K2)

Boundary value analysis is based on the assumption that:

A. Defects are evenly distributed across all values
B. Defects are more likely to occur at the boundaries of ranges
C. Only average values need testing
D. Random values are sufficient

---

### 🔌 Q20 (API-2.1, K3)

A tester reviews an OpenAPI spec and notices an endpoint has no defined error responses. The tester should:

A. Assume the endpoint never fails
B. Design tests to discover how the API handles error conditions
C. Skip testing this endpoint
D. Report that the API is perfect

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** API specifications (OpenAPI, WSDL) are the primary source for deriving test conditions.

### 🔷 Q2
**Answer: B**

**Rationale:** EP divides inputs into groups where behavior is expected to be similar.

### 🔷 Q3
**Answer: B**

**Rationale:** BVA includes just below min (9), at min (10), just above min (11), just below max (99), at max (100), just above max (101).

### 🔷 Q4
**Answer: B**

**Rationale:** Negative testing uses invalid inputs to verify error handling.

### 🔷 Q5
**Answer: B**

**Rationale:** Complete BVA includes 0, 1, 2, 98, 99, 100. Option C is close but misses 2 and 98.

### 🔷 Q6
**Answer: B**

**Rationale:** State transition is for APIs with states that change (e.g., order status workflow).

### 🔷 Q7
**Answer: B**

**Rationale:** Weak robust = 1 all-valid + 3 (one invalid per parameter) = 4 tests.

### 🔷 Q8
**Answer: B**

**Rationale:** XSS payload = invalid/malicious input. Testing with it is negative security testing.

### 🔷 Q9
**Answer: B**

**Rationale:** Test conditions must be specific and verifiable. "Missing required fields → 400" is specific.

### 🔷 Q10
**Answer: B**

**Rationale:** Exactly 5 characters is the boundary (minimum valid length).

### 🔷 Q11
**Answer: C**

**Rationale:** True, False, and Invalid (e.g., null, "yes") = 3 partitions.

### 🔷 Q12
**Answer: B**

**Rationale:** Error guessing tests common error scenarios beyond documented behavior.

### 🔷 Q13
**Answer: C**

**Rationale:** Delivered → Shipped is backward — invalid. D might be valid if cancellation is allowed from Pending.

### 🔷 Q14
**Answer: B**

**Rationale:** OpenAPI defines endpoints, parameters, schemas, and responses.

### 🔷 Q15
**Answer: B**

**Rationale:** BVA for arrays: below min (empty), at min (1), at max (5), above max (6).

### 🔷 Q16
**Answer: B**

**Rationale:** Positive testing verifies valid inputs produce expected success.

### 🔷 Q17
**Answer: C**

**Rationale:** At minimum: invalid value (not in enum) and invalid type (e.g., integer).

### 🔷 Q18
**Answer: B**

**Rationale:** Authorized → Refunded is a valid transition. A skips a required state. C/D are backward.

### 🔷 Q19
**Answer: B**

**Rationale:** BVA assumes defects cluster at boundaries.

### 🔷 Q20
**Answer: B**

**Rationale:** Missing error responses in spec does not mean API handles errors well. Test to discover actual behavior.
