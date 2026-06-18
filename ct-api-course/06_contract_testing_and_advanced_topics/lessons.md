# 📘 Chapter 6 — Contract Testing and Advanced Topics: Lessons

---

## ⭐ 6.1 Consumer-Driven Contract Testing

### 🔷 The Problem

In microservices architectures:
- Service A (consumer) depends on Service B (provider)
- Service B changes its API, breaking Service A
- Integration tests are expensive and slow
- Service A's tests may pass in isolation but fail when integrated

### 🔷 Contract Testing Solution

**Definition:** Contract testing verifies that the interactions between services meet the agreed contract, without requiring both services to be running together.

**How it works:**
1. Consumer defines its expectations of the provider's API (the contract)
2. Consumer tests run against a mock that satisfies the contract
3. Provider verifies it satisfies the contract
4. Both sides independently verify without integration tests

### 🔷 Pact

**Pact** is the most popular contract testing framework.

**Pact Workflow:**
```
Consumer (e.g., Web App)
  |
  writes expectations (contract/pact file)
  |
  tests against mock provider that satisfies contract
  |
  publishes pact file to Pact Broker

Provider (e.g., API Service)
  |
  retrieves pact file from Pact Broker
  |
  verifies it satisfies the contract
  |
  reports results
```

**Consumer Test Example (JavaScript):**
```javascript
const { Pact } = require('@pact-foundation/pact');

const provider = new Pact({
    consumer: 'WebApp',
    provider: 'UserAPI',
    port: 1234
});

beforeAll(() => provider.setup());
afterAll(() => provider.finalize());

it('gets user by ID', async () => {
    await provider.addInteraction({
        state: 'user 123 exists',
        uponReceiving: 'a request for user 123',
        withRequest: {
            method: 'GET',
            path: '/users/123',
            headers: { 'Authorization': 'Bearer token' }
        },
        willRespondWith: {
            status: 200,
            body: {
                id: 123,
                name: 'Alice',
                email: 'alice@example.com'
            }
        }
    });

    const user = await userService.getUser(123);
    expect(user.name).toBe('Alice');
});
```

**Provider Verification:**
```bash
# Provider runs tests against the pact file
pact-verifier \
    --provider UserAPI \
    --pact-broker-base-url https://pact-broker.example.com \
    --provider-app-version 1.2.3
```

### 🔗 Contract Testing vs. Integration Testing

| Aspect | Contract Testing | Integration Testing |
|--------|-----------------|-------------------|
| Speed | Fast (unit test speed) | Slower (requires both services) |
| Coupling | Loose | Tight |
| Failure isolation | Know which side broke contract | Harder to diagnose |
| Coverage | Verifies contract only | Verifies actual integration |
| CI/CD friendly | Yes | More complex |

### 🔷 When to Use Contract Testing

- **Many microservices:** Integration testing becomes impractical
- **Independent teams:** Consumer and provider teams need independent verification
- **Frequent deployments:** Fast feedback needed
- **API-first design:** Contracts are defined upfront

---

## ⭐ 6.2 Schema Validation

### 🔷 JSON Schema

**Purpose:** Define the expected structure of JSON data.

**Example:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["id", "name", "email"],
  "properties": {
    "id": { "type": "integer", "minimum": 1 },
    "name": { "type": "string", "minLength": 1, "maxLength": 100 },
    "email": { "type": "string", "format": "email" },
    "age": { "type": "integer", "minimum": 0, "maximum": 150 }
  }
}
```

**Validation in Tests:**
```javascript
const Ajv = require('ajv');
const ajv = new Ajv();
const validate = ajv.compile(userSchema);

const valid = validate(response.body);
expect(valid).toBe(true);
```

### 🔷 XML Schema (XSD)

**Purpose:** Define structure and data types for XML documents.

**Example:**
```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="user">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="id" type="xs:integer"/>
        <xs:element name="name" type="xs:string"/>
        <xs:element name="email" type="xs:string"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

### 🔷 WSDL Validation (SOAP)

**WSDL** defines:
- Operations (methods available)
- Messages (input/output formats)
- Bindings (protocol used)
- Service endpoint

**Testing:** Validate that SOAP requests/responses conform to WSDL definitions.

### 🔷 Schema Validation Benefits

1. **Early error detection:** Catch format issues before processing
2. **Documentation:** Schema serves as API documentation
3. **Automation:** Generate tests from schema automatically
4. **Contract enforcement:** Ensure responses match agreed structure

---

## 🔌 6.3 API Versioning

### 🔌 Why Version APIs?

- APIs evolve over time
- Consumers need time to migrate
- Breaking changes must be managed

### 🔷 Versioning Strategies

**1. URL Versioning:**
```
/api/v1/users
/api/v2/users
```
- **Pros:** Clear, easy to understand, cacheable
- **Cons:** Changes resource URLs

**2. Header Versioning:**
```
Accept: application/vnd.example.v2+json
X-API-Version: 2
```
- **Pros:** URLs stay clean
- **Cons:** Less visible, harder to test in browser

**3. Query Parameter Versioning:**
```
/api/users?version=2
```
- **Pros:** Simple
- **Cons:** Can be accidentally omitted, not cache-friendly

**4. Content Negotiation:**
```
Accept: application/json; version=2
```
- **Pros:** HTTP standard approach
- **Cons:** Complex for some clients

### ❓ Best Practices

- **Use URL versioning** for most public APIs (clearest)
- **Maintain at least one previous version** for deprecation period
- **Document breaking changes** clearly in release notes
- **Communicate deprecation** with timelines
- **Use semantic versioning** principles where applicable

---

## ⭐ 6.4 Backward Compatibility Testing

### 🔷 What Is Backward Compatibility?

A new API version is backward compatible if existing clients continue to work without changes.

### 🔷 Breaking vs. Non-Breaking Changes

**Non-Breaking (Safe):**
- Adding new endpoints
- Adding optional fields to responses
- Adding new query parameters
- Relaxing validation (accepting more input)
- Adding new values to enums

**Breaking (Require New Version):**
- Removing or renaming endpoints
- Removing or renaming fields in responses
- Changing field data types
- Making optional fields required
- Changing URL structure
- Changing authentication requirements

### 🔷 Testing Backward Compatibility

**1. Response Contract Tests:**
- Verify old clients can still parse responses
- Ensure required fields are still present
- Ensure field types have not changed

**2. Regression Test Suite:**
- Run existing client tests against new API version
- Verify no existing tests break

**3. Consumer Impact Analysis:**
- Identify which consumers use affected endpoints
- Notify consumers of changes
- Verify critical consumers are unaffected

---

## 🔌 6.5 API Documentation and Discovery

### 🔌 OpenAPI (Swagger)

**Benefits:**
- Machine-readable API specification
- Auto-generates interactive documentation (Swagger UI)
- Auto-generates client SDKs
- Validates requests/responses against spec

**Example Toolchain:**
1. Write OpenAPI spec
2. Generate documentation (Swagger UI)
3. Generate server stubs
4. Generate client SDKs
5. Validate tests against spec

### 🔌 API Discovery

**Service Registries:**
- Consul, Eureka, etcd
- Services register themselves
- Consumers discover endpoints dynamically

**API Marketplaces:**
- Catalog of available APIs
- Documentation, usage examples, pricing

### 🔌 Testing API Documentation

**1. Documentation Accuracy:**
- Verify documented endpoints exist
- Verify documented parameters match actual API
- Verify response examples match real responses

**2. Completeness:**
- All endpoints documented
- All error responses documented
- Authentication requirements documented
- Rate limits documented

---

## 💡 Worked Examples

### 💡 Worked Example 1: Contract Testing with Pact

**Scenario:** A mobile app (consumer) uses a user service API (provider).

**Consumer Test:**
```javascript
// Mobile app tests its expectation of the User API
provider.addInteraction({
    uponReceiving: 'get user by id',
    withRequest: { method: 'GET', path: '/users/123' },
    willRespondWith: {
        status: 200,
        body: {
            id: 123,
            name: 'Alice',
            email: 'alice@example.com'
        }
    }
});
```

**Provider Verification:**
```bash
# User API service verifies it returns the expected format
pact-verifier --provider UserAPI --pact-url ./pacts/mobileapp-userapi.json
```

**Benefit:** If the User API team changes the response format (e.g., renames `name` to `fullName`), the provider verification fails, alerting the team before deployment.

### 💡 Worked Example 2: Backward Compatibility Check

**Scenario:** An e-commerce API is moving from v1 to v2.

**v1 Response:**
```json
{
  "productId": 1,
  "name": "Widget",
  "price": 9.99
}
```

**Proposed v2 Response:**
```json
{
  "productId": 1,
  "name": "Widget",
  "price": 9.99,
  "description": "A useful widget",
  "category": "tools"
}
```

**Analysis:**
- Added optional fields: `description`, `category`
- No fields removed or renamed
- Existing clients can ignore new fields

**Verdict:** Backward compatible. No new version required if using optional fields.

**Proposed v2 (Breaking):**
```json
{
  "id": 1,
  "productName": "Widget",
  "cost": 9.99
}
```

**Analysis:**
- `productId` → `id` (renamed)
- `name` → `productName` (renamed)
- `price` → `cost` (renamed)

**Verdict:** Breaking change. Existing clients will break. Must be `/v2/products`.

### 💡 Worked Example 3: Schema Validation

**Scenario:** An API must return user data matching a strict schema.

**JSON Schema:**
```json
{
  "type": "object",
  "required": ["id", "name", "email"],
  "properties": {
    "id": { "type": "integer" },
    "name": { "type": "string", "minLength": 1 },
    "email": { "type": "string", "format": "email" },
    "role": { "type": "string", "enum": ["user", "admin"] }
  }
}
```

**Test Cases:**
| Response | Valid? | Reason |
|----------|--------|--------|
| `{"id": 1, "name": "Alice", "email": "a@b.com"}` | Yes | All required present |
| `{"id": 1, "name": "Alice"}` | No | Missing `email` |
| `{"id": "1", "name": "Alice", "email": "a@b.com"}` | No | `id` is string, not integer |
| `{"id": 1, "name": "", "email": "a@b.com"}` | No | `name` is empty |
| `{"id": 1, "name": "Alice", "email": "invalid"}` | No | `email` format invalid |
| `{"id": 1, "name": "Alice", "email": "a@b.com", "role": "superuser"}` | No | `role` not in enum |
