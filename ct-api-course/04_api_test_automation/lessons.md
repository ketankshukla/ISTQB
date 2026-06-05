# Chapter 4 — API Test Automation: Lessons

---

## 4.1 API Automation Frameworks

### Popular Frameworks by Language

| Language | Framework | Best For |
|----------|-----------|----------|
| Java | REST Assured | Java teams, detailed assertions |
| JavaScript/Node.js | Supertest, Axios + Jest | JavaScript teams, fast setup |
| Python | Requests + pytest | Python teams, readability |
| C# | RestSharp + NUnit/xUnit | .NET teams |
| Ruby | HTTParty + RSpec | Ruby teams |
| Postman | Newman (CLI) | Teams already using Postman |
| Karate | Java (DSL) | BDD-style API testing |

### REST Assured (Java)

**Features:**
- Fluent API for readable test code
- Built-in JSON/XML parsing and validation
- Support for authentication (Basic, OAuth, JWT)
- Request/response logging

**Example:**
```java
@Test
public void testCreateOrder() {
    given()
        .auth().oauth2(token)
        .contentType(ContentType.JSON)
        .body("{\"productId\": 1, \"quantity\": 2}")
    .when()
        .post("/orders")
    .then()
        .statusCode(201)
        .body("orderId", notNullValue())
        .body("status", equalTo("pending"))
        .body("totalAmount", greaterThan(0f));
}
```

### Supertest (JavaScript)

**Features:**
- Works directly with Express/Node.js apps or HTTP endpoints
- Promise-based (async/await)
- Clean, readable syntax

**Example:**
```javascript
it('creates a new order', async () => {
    const response = await request(app)
        .post('/orders')
        .set('Authorization', `Bearer ${token}`)
        .send({ productId: 1, quantity: 2 })
        .expect(201);
    
    expect(response.body.orderId).toBeDefined();
    expect(response.body.status).toBe('pending');
});
```

### Requests + pytest (Python)

**Features:**
- Simple, human-readable syntax
- Excellent for quick scripts and data-driven tests
- Rich ecosystem of plugins

**Example:**
```python
def test_create_order():
    response = requests.post(
        f"{BASE_URL}/orders",
        headers={"Authorization": f"Bearer {token}"},
        json={"productId": 1, "quantity": 2}
    )
    assert response.status_code == 201
    data = response.json()
    assert data["orderId"] is not None
    assert data["status"] == "pending"
```

### Karate

**Features:**
- BDD-style syntax (no Java knowledge needed)
- Built-in assertions for JSON/XML
- Parallel execution
- Mock server capabilities

**Example:**
```gherkin
Feature: Order API

  Scenario: Create a new order
    Given url baseUrl + '/orders'
    And request { productId: 1, quantity: 2 }
    When method post
    Then status 201
    And match response.status == 'pending'
    And match response.orderId == '#notnull'
```

---

## 4.2 Data-Driven API Testing

### Concept

Separate test logic from test data. The same test script runs with multiple data sets.

**Benefits:**
- Reduce code duplication
- Easy to add new test cases
- Tests are easier to review and maintain

### Implementation

**Java (REST Assured + TestNG DataProvider):**
```java
@DataProvider(name = "loginData")
public Object[][] loginData() {
    return new Object[][] {
        {"user1", "correctPass", 200},
        {"user1", "wrongPass", 401},
        {"", "anyPass", 400},
        {"nonexistent", "anyPass", 401}
    };
}

@Test(dataProvider = "loginData")
public void testLogin(String username, String password, int expectedStatus) {
    given()
        .body(Map.of("username", username, "password", password))
    .when()
        .post("/login")
    .then()
        .statusCode(expectedStatus);
}
```

**JavaScript (Jest):**
```javascript
const testCases = [
    { username: 'user1', password: 'correctPass', expected: 200 },
    { username: 'user1', password: 'wrongPass', expected: 401 },
    { username: '', password: 'anyPass', expected: 400 },
];

test.each(testCases)('login with $username/$password → $expected', async ({ username, password, expected }) => {
    const res = await request(app)
        .post('/login')
        .send({ username, password });
    expect(res.status).toBe(expected);
});
```

**Python (pytest):**
```python
@pytest.mark.parametrize("username,password,expected_status", [
    ("user1", "correctPass", 200),
    ("user1", "wrongPass", 401),
    ("", "anyPass", 400),
])
def test_login(username, password, expected_status):
    response = requests.post(f"{BASE_URL}/login", json={"username": username, "password": password})
    assert response.status_code == expected_status
```

### Data Sources

**1. Inline (small datasets):**
- Hard-coded in test file
- Good for simple parameterization

**2. CSV/JSON files (medium datasets):**
```json
// test_data.json
[
  {"username": "user1", "password": "pass1", "expected": 200},
  {"username": "user2", "password": "wrong", "expected": 401}
]
```

**3. Database (large/complex datasets):**
- Query test data from a test database
- Good for complex scenarios with many fields

---

## 4.3 CI/CD Integration for API Tests

### Pipeline Design

**Stage 1: Build**
- Compile/build the application
- Run unit tests

**Stage 2: API Smoke Tests**
- Deploy to test environment
- Run critical path API tests
- Must pass before continuing

**Stage 3: API Regression Tests**
- Run full API test suite
- Verify all endpoints

**Stage 4: Integration Tests**
- Test API with real downstream services (or mocks)

**Stage 5: Report**
- Generate test reports
- Upload to dashboard

### Example GitHub Actions Pipeline

```yaml
name: API Test Pipeline

on: [push, pull_request]

jobs:
  api-tests:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:14
        env:
          POSTGRES_PASSWORD: test
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
      
      - name: Install dependencies
        run: npm ci
      
      - name: Start application
        run: npm run start:test &
        env:
          DATABASE_URL: postgres://postgres:test@localhost:5432/test
      
      - name: Wait for API
        run: npx wait-on http://localhost:3000/health
      
      - name: Run API tests
        run: npm run test:api
        env:
          API_URL: http://localhost:3000
      
      - name: Upload results
        uses: actions/upload-artifact@v3
        with:
          name: api-test-report
          path: test-results/
```

### Quality Gates

| Gate | Criteria | If Failed |
|------|----------|-----------|
| Smoke tests | 100% pass | Block merge |
| API tests | 100% pass | Block merge |
| Coverage | >= 80% | Warn |
| Response time | p95 < 500ms | Investigate |

---

## 4.4 Maintainability Patterns

### 1. Base Test Class / Helper

Centralize common configuration:

```javascript
// api-helper.js
class ApiHelper {
    constructor(baseUrl, token) {
        this.client = axios.create({
            baseURL: baseUrl,
            headers: { 'Authorization': `Bearer ${token}` }
        });
    }
    
    async getUser(id) {
        return this.client.get(`/users/${id}`);
    }
    
    async createUser(data) {
        return this.client.post('/users', data);
    }
}

module.exports = ApiHelper;
```

### 2. Page Object Pattern (for APIs)

Encapsulate endpoint details:

```java
public class UserApi {
    private static final String USERS = "/users";
    
    public static Response getUser(int id) {
        return given().get(USERS + "/" + id);
    }
    
    public static Response createUser(String name, String email) {
        return given()
            .body(Map.of("name", name, "email", email))
            .post(USERS);
    }
}
```

### 3. Configuration Externalization

```javascript
// config.js
module.exports = {
    baseUrl: process.env.API_URL || 'http://localhost:3000',
    timeout: parseInt(process.env.API_TIMEOUT) || 5000,
    authToken: process.env.API_TOKEN
};
```

### 4. Reusable Assertions

```javascript
// assertions.js
function expectValidUserResponse(response) {
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('email');
}

module.exports = { expectValidUserResponse };
```

---

## 4.5 When to Automate API Tests

### Automate These:

- **Regression tests:** Run frequently to catch breaking changes
- **Smoke tests:** Quick health check on every build
- **Data-driven tests:** Many variations with same logic
- **Integration tests:** Verify service interactions
- **Contract tests:** Validate API contracts continuously

### Consider Manual Testing For:

- **Exploratory API testing:** Discovering undocumented behavior
- **One-time tests:** Low ROI for automation
- **Complex multi-step workflows:** May be easier to test manually first
- **Tests requiring human judgment:** Usability of error messages

---

## Worked Examples

### Worked Example 1: Data-Driven Test Design

**Scenario:** Test a search API with query, category, and sort parameters.

**Test Data (CSV):**
```csv
query,category,sort,expected_status,expected_count
test,electronics,price_asc,200,>=1
"",electronics,price_asc,200,>=0
"invalidxyz",electronics,price_asc,200,0
test,invalid_category,price_asc,400,
test,electronics,invalid_sort,400,
test,electronics,,200,>=1
```

**Test Script:**
```python
import csv
import requests

with open('search_test_data.csv') as f:
    test_cases = list(csv.DictReader(f))

@pytest.mark.parametrize("case", test_cases)
def test_search(case):
    response = requests.get(f"{BASE_URL}/search", params={
        "query": case["query"],
        "category": case["category"],
        "sort": case["sort"]
    })
    assert response.status_code == int(case["expected_status"])
    
    if response.status_code == 200:
        data = response.json()
        if case["expected_count"] == "0":
            assert len(data["results"]) == 0
        elif case["expected_count"].startswith(">="):
            min_count = int(case["expected_count"][2:])
            assert len(data["results"]) >= min_count
```

### Worked Example 2: CI/CD Integration

**Scenario:** A microservice with a REST API needs automated testing on every commit.

**Pipeline:**
```
1. Build Docker image
2. Run unit tests
3. Start service + dependencies (Docker Compose)
4. Run API smoke tests (30 seconds)
5. If smoke passes, run full API regression (5 minutes)
6. Generate coverage report
7. Upload results to Allure
8. If all pass, deploy to staging
```

**Benefits:**
- Fast feedback (smoke tests in 30 seconds)
- Full regression before staging deployment
- Automated reporting and trending

### Worked Example 3: Maintainable Test Structure

**Poor Structure:**
```javascript
// Hard-coded URLs, duplicated auth, no reuse
it('test 1', async () => {
    const res = await axios.get('http://localhost:3000/users/123', 
        { headers: { Authorization: 'Bearer token123' }});
    expect(res.data.name).toBe('Alice');
});

it('test 2', async () => {
    const res = await axios.post('http://localhost:3000/users', 
        { name: 'Bob' },
        { headers: { Authorization: 'Bearer token123' }});
    expect(res.status).toBe(201);
});
```

**Improved Structure:**
```javascript
// api-client.js
class ApiClient {
    constructor() {
        this.client = axios.create({
            baseURL: process.env.API_URL,
            headers: { Authorization: `Bearer ${process.env.API_TOKEN}` }
        });
    }
    getUser(id) { return this.client.get(`/users/${id}`); }
    createUser(data) { return this.client.post('/users', data); }
}

// tests
describe('Users API', () => {
    const api = new ApiClient();
    
    it('retrieves a user', async () => {
        const res = await api.getUser(123);
        expect(res.data.name).toBe('Alice');
    });
    
    it('creates a user', async () => {
        const res = await api.createUser({ name: 'Bob' });
        expect(res.status).toBe(201);
    });
});
```
