# Chapter 2 — API Test Analysis and Design: Lessons

---

## 2.1 Deriving Test Conditions from API Specifications

### Sources of Test Conditions

**1. OpenAPI / Swagger Specifications:**
- Endpoints and HTTP methods
- Path parameters, query parameters, headers
- Request body schema (required fields, data types, formats)
- Response schemas and status codes
- Authentication requirements

**2. WSDL (for SOAP):**
- Operations and messages
- Input/output types
- Fault definitions

**3. Business Requirements:**
- User stories and acceptance criteria
- Business rules (e.g., "discount cannot exceed 50%")
- Data validation rules

**4. Technical Requirements:**
- Rate limiting (e.g., max 100 requests/minute)
- Timeout values
- Error handling requirements

### Example: Deriving Test Conditions from OpenAPI

**Specification:**
```yaml
paths:
  /orders:
    post:
      summary: Create order
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [customerId, items]
              properties:
                customerId:
                  type: integer
                  minimum: 1
                items:
                  type: array
                  minItems: 1
                  maxItems: 50
                  items:
                    type: object
                    properties:
                      productId:
                        type: integer
                      quantity:
                        type: integer
                        minimum: 1
                        maximum: 100
                      discount:
                        type: number
                        minimum: 0
                        maximum: 0.5
```

**Derived Test Conditions:**
1. Valid order with minimum required fields
2. Valid order with all optional fields
3. Missing required field (customerId)
4. Missing required field (items)
5. customerId = 0 (below minimum)
6. customerId = 1 (boundary — minimum valid)
7. Items array empty (below minItems)
8. Items array with 50 items (boundary — max valid)
9. Items array with 51 items (above maxItems)
10. quantity = 0 (below minimum)
11. quantity = 100 (boundary — maximum valid)
12. quantity = 101 (above maximum)
13. discount = 0.5 (boundary — maximum valid)
14. discount = 0.51 (above maximum)
15. Invalid data type (customerId as string)

---

## 2.2 Equivalence Partitioning for APIs

### Concept

Equivalence partitioning divides input data into groups where the system is expected to behave similarly. One test from each partition is sufficient.

### Applying EP to API Parameters

**Example: API parameter `age` (integer, 18-120)**

| Partition | Range | Representative Value |
|-----------|-------|---------------------|
| Valid | 18-120 | 25 |
| Invalid (too low) | < 18 | 17 |
| Invalid (too high) | > 120 | 121 |
| Invalid (non-numeric) | "abc" | "abc" |
| Invalid (missing) | — | null |

**Example: API parameter `status` (enum: active, inactive, pending)**

| Partition | Values | Representative |
|-----------|--------|---------------|
| Valid | active, inactive, pending | "active" |
| Invalid (not in enum) | "deleted" | "deleted" |
| Invalid (null) | null | null |

### Combining Partitions

When testing APIs with multiple parameters, consider:
- **Weak robust testing:** One invalid parameter at a time (keeps test count manageable)
- **Strong robust testing:** All combinations of partitions (comprehensive but expensive)
- **Best practice for APIs:** Test each parameter's invalid partitions independently, plus one "all valid" test

---

## 2.3 Boundary Value Analysis for APIs

### Concept

Errors often occur at boundaries. Test values at the edges of equivalence partitions.

### BVA for Numeric Parameters

For a parameter with range [min, max], test:
- min - 1
- min
- min + 1
- max - 1
- max
- max + 1

**Example: `pageSize` parameter (1-100)**

| Test | Value | Expected |
|------|-------|----------|
| Below min | 0 | 400 Bad Request |
| At min | 1 | 200 OK (1 item) |
| Above min | 2 | 200 OK (2 items) |
| Below max | 99 | 200 OK (99 items) |
| At max | 100 | 200 OK (100 items) |
| Above max | 101 | 400 Bad Request |

### BVA for String Parameters

For a string with length constraints:
- Empty string (if not allowed)
- Minimum length
- Minimum + 1
- Maximum - 1
- Maximum
- Maximum + 1

**Example: `username` (3-20 characters)**

| Test | Value | Length |
|------|-------|--------|
| Too short | "ab" | 2 |
| Min length | "abc" | 3 |
| Min + 1 | "abcd" | 4 |
| Max - 1 | 19 chars | 19 |
| Max length | 20 chars | 20 |
| Too long | 21 chars | 21 |

### BVA for Arrays

- Empty array (if not allowed)
- 1 element
- Multiple elements
- Maximum allowed
- Maximum + 1

---

## 2.4 Positive vs. Negative Testing

### Positive Testing

Tests that use valid inputs and verify the API behaves as expected.

**Examples:**
- Valid username and password → 200 OK with token
- Valid order with all required fields → 201 Created
- Valid search query → 200 OK with results

### Negative Testing

Tests that use invalid inputs and verify the API handles errors appropriately.

**Examples:**
- Invalid email format → 400 Bad Request with error message
- Expired authentication token → 401 Unauthorized
- Request to non-existent resource → 404 Not Found
- Request that violates business rules → 409 Conflict or 422 Unprocessable

### Importance of Negative Testing for APIs

- **Security:** Negative tests reveal injection vulnerabilities
- **Robustness:** APIs must handle bad input gracefully
- **Error messages:** Verify error responses are helpful and do not leak information
- **Data integrity:** Ensure invalid data is not processed or stored

---

## 2.5 State Transition Testing for APIs

### When to Use

APIs with sessions, workflows, or stateful operations (e.g., order status, payment processing).

### Example: Order Status Workflow

```
[Created] --submit--> [Submitted] --process--> [Processing] --ship--> [Shipped] --deliver--> [Delivered]
   |                      |                       |                    |
   |--cancel--> [Cancelled]  |--cancel--> [Cancelled]  |--cancel--> [Cancelled]
```

**States:** Created, Submitted, Processing, Shipped, Delivered, Cancelled

**Transitions:**
- Created → Submitted (submit)
- Created → Cancelled (cancel)
- Submitted → Processing (process)
- Submitted → Cancelled (cancel)
- Processing → Shipped (ship)
- Processing → Cancelled (cancel)
- Shipped → Delivered (deliver)

**Test Cases:**
1. Created → Submitted → Processing → Shipped → Delivered (happy path)
2. Created → Cancelled (cancel from initial state)
3. Created → Submitted → Cancelled (cancel after submit)
4. Created → Submitted → Processing → Cancelled (cancel after processing)
5. Invalid: Cancelled → Submitted (cannot transition from cancelled)
6. Invalid: Shipped → Processing (cannot go backward)

---

## 2.6 Error Guessing for APIs

### Common API Errors to Guess

**1. Authentication/Authorization:**
- Missing token
- Invalid token
- Expired token
- Token for wrong user
- Insufficient permissions

**2. Input Validation:**
- SQL injection in string parameters
- XSS in string parameters
- Very large payloads
- Invalid content types
- Malformed JSON/XML

**3. Business Logic:**
- Duplicate requests (idempotency)
- Concurrent modifications
- Race conditions
- Timezone issues with timestamps

**4. Infrastructure:**
- Timeout scenarios
- Network interruptions
- Service unavailable (503)
- Rate limiting (429)

---

## Worked Examples

### Worked Example 1: Equivalence Partitioning

**Scenario:** API accepts a `priority` parameter with values: low, medium, high, critical.

**Partitions:**
| Partition | Values | Tests |
|-----------|--------|-------|
| Valid | low, medium, high, critical | Test each value |
| Invalid (not in enum) | "urgent", "normal", "" | Test each |
| Invalid (wrong type) | 123, null | Test each |

**Test Cases:**
1. priority = "low" → 200 OK
2. priority = "medium" → 200 OK
3. priority = "high" → 200 OK
4. priority = "critical" → 200 OK
5. priority = "urgent" → 400 Bad Request
6. priority = 123 → 400 Bad Request
7. priority = null → 400 Bad Request

### Worked Example 2: Boundary Value Analysis

**Scenario:** API accepts `amount` (decimal, 0.01 to 999,999.99) for a bank transfer.

**BVA Tests:**

| Test | amount | Expected |
|------|--------|----------|
| Below minimum | 0 | 400 (minimum is 0.01) |
| At minimum | 0.01 | 200 OK |
| Just above minimum | 0.02 | 200 OK |
| Normal value | 100.00 | 200 OK |
| Just below maximum | 999,999.98 | 200 OK |
| At maximum | 999,999.99 | 200 OK |
| Above maximum | 1,000,000.00 | 400 Bad Request |

### Worked Example 3: Combining EP and BVA

**Scenario:** User registration API with parameters: `age` (integer, 18-100), `email` (valid format), `password` (8-50 chars).

**Test Cases:**
1. All valid: age=25, email="test@example.com", password="Secure123!" → 201 Created
2. age boundary (min): age=18 → 201 Created
3. age boundary (max): age=100 → 201 Created
4. age invalid (too low): age=17 → 400 Bad Request
5. age invalid (too high): age=101 → 400 Bad Request
6. email invalid: email="not-an-email" → 400 Bad Request
7. password boundary (min): password="Short1!" (8 chars) → 201 Created
8. password boundary (max): password="a" * 50 → 201 Created
9. password invalid (too short): password="Short!" (6 chars) → 400 Bad Request
10. password invalid (too long): password="a" * 51 → 400 Bad Request
11. Missing required field: no email → 400 Bad Request
