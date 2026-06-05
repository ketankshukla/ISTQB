# Chapter 3 — API Test Implementation and Execution: Lessons

---

## 3.1 Implementing API Test Scripts

### Manual Testing with Tools

**Postman:**
- Create collections of API requests
- Add pre-request scripts and test scripts (JavaScript)
- Use variables for environment-specific values
- Share collections with team members

**Example Postman Test Script:**
```javascript
// Verify status code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Verify response body
pm.test("Response contains user name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Alice");
});

// Verify header
pm.test("Content-Type is JSON", function () {
    pm.response.to.have.header("Content-Type");
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});
```

**cURL (command-line):**
```bash
# GET request
curl -X GET https://api.example.com/users/123 \
  -H "Authorization: Bearer TOKEN"

# POST request with JSON body
curl -X POST https://api.example.com/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"name":"Alice","email":"alice@example.com"}'
```

### Automated Test Scripts

**REST Assured (Java):**
```java
@Test
public void testGetUser() {
    given()
        .header("Authorization", "Bearer " + token)
    .when()
        .get("/users/123")
    .then()
        .statusCode(200)
        .body("id", equalTo(123))
        .body("name", equalTo("Alice"))
        .body("email", equalTo("alice@example.com"));
}

@Test
public void testCreateUser() {
    given()
        .header("Authorization", "Bearer " + token)
        .contentType(ContentType.JSON)
        .body("{\"name\":\"Bob\",\"email\":\"bob@example.com\"}")
    .when()
        .post("/users")
    .then()
        .statusCode(201)
        .body("id", notNullValue());
}
```

**Supertest (JavaScript/Node.js):**
```javascript
describe('Users API', () => {
    it('GET /users/123 returns user data', async () => {
        const res = await request(app)
            .get('/users/123')
            .set('Authorization', `Bearer ${token}`)
            .expect(200);
        
        expect(res.body.id).toBe(123);
        expect(res.body.name).toBe('Alice');
    });

    it('POST /users creates a new user', async () => {
        const res = await request(app)
            .post('/users')
            .set('Authorization', `Bearer ${token}`)
            .send({ name: 'Bob', email: 'bob@example.com' })
            .expect(201);
        
        expect(res.body.id).toBeDefined();
    });
});
```

**Requests (Python):**
```python
def test_get_user():
    response = requests.get(
        'https://api.example.com/users/123',
        headers={'Authorization': f'Bearer {token}'}
    )
    assert response.status_code == 200
    data = response.json()
    assert data['id'] == 123
    assert data['name'] == 'Alice'

def test_create_user():
    response = requests.post(
        'https://api.example.com/users',
        headers={'Authorization': f'Bearer {token}', 'Content-Type': 'application/json'},
        json={'name': 'Bob', 'email': 'bob@example.com'}
    )
    assert response.status_code == 201
    assert 'id' in response.json()
```

---

## 3.2 Test Data Management for APIs

### Types of Test Data

**1. Static Test Data:**
- Hard-coded in test scripts
- Stored in files (JSON, CSV, XML)
- Same data for every test run
- **Use when:** Data does not change between runs

**2. Dynamic Test Data:**
- Generated at runtime
- Unique per test execution
- **Use when:** Tests create/modify data and need isolation

**3. Production-like Data:**
- Anonymized/scrubbed production data
- Realistic volumes and distributions
- **Use when:** Performance testing or realistic scenarios

### Test Data Strategies

**Strategy 1: Setup-Teardown (Test Fixtures)**
```python
@pytest.fixture
def test_user():
    # Setup: create user
    user = api.create_user({"name": f"TestUser_{uuid4()}"})
    yield user
    # Teardown: delete user
    api.delete_user(user['id'])
```

**Strategy 2: Test Data Pools**
- Pre-create a pool of test data
- Tests "check out" data from the pool
- Data is reset after use

**Strategy 3: Database Seeding**
```sql
-- Seed script runs before tests
INSERT INTO users (id, name, email) VALUES 
    (1, 'Alice', 'alice@test.com'),
    (2, 'Bob', 'bob@test.com');
```

**Strategy 4: API-Based Data Creation**
- Use the API itself to create test data
- Ensures data is in a valid state
- Tests the creation flow as a side effect

### Data Isolation Best Practices

1. **Unique identifiers:** Use UUIDs or timestamps to avoid conflicts
2. **Separate test databases:** Do not share with development/production
3. **Cleanup:** Always delete test data after tests (even if test fails)
4. **Transactions:** Use database transactions that roll back after tests
5. **No shared state:** Each test should be independent

---

## 3.3 API Test Environments

### Environment Types

**1. Local Development:**
- Runs on developer's machine
- Fast feedback
- May use in-memory databases

**2. Integration/Test Environment:**
- Shared by the team
- Connected to real (but test) databases
- External services may be mocked

**3. Staging/Pre-Production:**
- Production-like configuration
- Production-like data (anonymized)
- All real services connected

**4. Production:**
- Live environment
- Smoke tests and monitoring only
- No test data creation

### Environment Configuration

**Environment Variables:**
```
API_BASE_URL=https://api-staging.example.com
API_AUTH_TOKEN= staging_token
DB_CONNECTION_STRING=postgres://test:test@localhost:5432/testdb
```

**Configuration Files:**
```json
{
  "development": {
    "baseUrl": "http://localhost:3000",
    "timeout": 5000
  },
  "staging": {
    "baseUrl": "https://api-staging.example.com",
    "timeout": 10000
  }
}
```

### Mocking External Services

**Why Mock:**
- External services may be unreliable during testing
- Avoid side effects (e.g., sending real emails, charging real cards)
- Test error scenarios (timeout, 503, etc.)
- Faster test execution

**Tools:**
- **WireMock:** HTTP mock server
- **MockServer:** Mock any HTTP/HTTPS system
- **Mountebank:** Multi-protocol mock server
- **Nock (Node.js):** HTTP server mocking for tests

**Example (Nock):**
```javascript
// Mock external payment API
nock('https://payment-api.example.com')
    .post('/charge', { amount: 100, currency: 'USD' })
    .reply(200, { transactionId: 'tx_123', status: 'approved' });

// Now test your API that calls the payment API
```

---

## 3.4 Test Execution

### Manual Execution

**Exploratory API Testing:**
- Send requests with variations
- Observe responses, headers, status codes
- Try unexpected inputs
- Verify error messages
- Check response times

**Ad-hoc Testing:**
- Quick verification during development
- Debugging specific issues
- Not systematic but valuable for discovery

### Automated Execution

**Test Runners:**
- JUnit (Java) + REST Assured
- Jest/Mocha (JavaScript) + Supertest
- pytest (Python) + Requests
- Newman (Postman CLI)

**Execution Patterns:**
- **Sequential:** Tests run one after another (simpler, slower)
- **Parallel:** Tests run simultaneously (faster, requires data isolation)

### CI/CD Integration

**Pipeline Integration:**
```yaml
# Example: GitHub Actions
- name: Run API tests
  run: npm run test:api
  env:
    API_BASE_URL: ${{ secrets.STAGING_API_URL }}

- name: Upload test results
  uses: actions/upload-artifact@v3
  with:
    name: api-test-results
    path: test-results/
```

**Quality Gates:**
- All tests must pass before merge
- Code coverage thresholds
- No new security vulnerabilities
- Performance regression checks

---

## 3.5 Analyzing Test Results

### Interpreting Failures

**Step 1: Determine failure type:**
- **Test script error:** Wrong expected value, bad assertion
- **API defect:** API returns wrong data or status
- **Environment issue:** Service down, database unavailable
- **Test data issue:** Data missing, wrong state

**Step 2: Gather evidence:**
- Request sent (URL, headers, body)
- Response received (status, headers, body)
- Execution logs
- Timestamp and environment

**Step 3: Reproduce:**
- Can the failure be reproduced consistently?
- Does it fail in all environments or just one?
- Is it related to specific test data?

### Common Failure Patterns

| Symptom | Likely Cause |
|---------|-------------|
| 404 on every request | Wrong base URL or endpoint |
| 401 on every request | Missing or invalid auth token |
| 500 on specific input | API defect in validation/business logic |
| Response body null | Wrong Content-Type or parsing error |
| Intermittent failures | Race condition, timing issue, or flaky test |
| Slower than expected | Performance regression or environment issue |

---

## 3.6 Defect Reporting for APIs

### What to Include in an API Defect Report

**1. Summary:**
- Clear, concise description of the defect

**2. Environment:**
- API version
- Environment (staging, production)
- Test tool/version

**3. Steps to Reproduce:**
- Full HTTP request (method, URL, headers, body)
- Actual response (status, headers, body)
- Expected response

**4. Evidence:**
- Screenshots of tool (Postman, etc.)
- Test script that reproduces the issue
- Logs and timestamps

**5. Severity and Priority:**
- Impact on users/business
- Workarounds available?

### Example API Defect Report

```
Summary: POST /orders returns 500 when discount is exactly 50%

Environment: Staging v2.3.1

Steps:
1. Send POST to https://api-staging.example.com/orders
2. Headers: Authorization: Bearer <token>, Content-Type: application/json
3. Body:
   {
     "customerId": 123,
     "items": [{"productId": 1, "quantity": 1, "discount": 0.5}]
   }

Actual Result:
- Status: 500 Internal Server Error
- Body: {"error": "Internal server error"}

Expected Result:
- Status: 201 Created
- Body: Order object with applied discount

Severity: High (prevents orders with 50% discount)
Priority: High (business promotion requires this)
```

---

## Worked Examples

### Worked Example 1: Implementing a Test Suite

**Scenario:** Test a user management API.

**Test Cases:**
```
1. GET /users/123
   - Verify 200, correct user data

2. GET /users/99999 (non-existent)
   - Verify 404

3. POST /users (valid data)
   - Verify 201, user created, ID returned

4. POST /users (missing email)
   - Verify 400, error about missing field

5. PUT /users/123 (update name)
   - Verify 200, name updated

6. DELETE /users/123
   - Verify 204

7. DELETE /users/123 (already deleted)
   - Verify 404
```

### Worked Example 2: Test Data Strategy

**Scenario:** E-commerce API with products, carts, and orders.

**Challenge:** Tests create orders, which reduces inventory. Running tests multiple times causes "out of stock" failures.

**Solution:**
```python
@pytest.fixture
def test_product():
    # Create a product with high inventory specifically for testing
    product = api.create_product({
        "name": f"TestProduct_{uuid4()}",
        "price": 9.99,
        "inventory": 10000  # High enough for all tests
    })
    yield product
    api.delete_product(product['id'])

@pytest.fixture
def test_cart():
    cart = api.create_cart()
    yield cart
    api.clear_cart(cart['id'])
```

### Worked Example 3: Environment Configuration

**Scenario:** Same test suite must run locally, in CI, and against staging.

**Solution:**
```javascript
// config.js
const config = {
  development: {
    baseUrl: 'http://localhost:3000',
    authToken: 'dev-token',
    timeout: 5000
  },
  ci: {
    baseUrl: process.env.API_URL || 'http://localhost:3000',
    authToken: process.env.API_TOKEN,
    timeout: 10000
  },
  staging: {
    baseUrl: 'https://api-staging.example.com',
    authToken: process.env.STAGING_TOKEN,
    timeout: 15000
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];
```
