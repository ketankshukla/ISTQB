# 📘 Chapter 1 — Introduction to API Testing: Lessons

---

## 🔌 1.1 What Is an API?

### 🔷 Definition

An **API (Application Programming Interface)** is a set of protocols, routines, and tools that allow different software applications to communicate with each other.

**Key Characteristics:**
- **Interface:** Defines how software components should interact
- **Abstraction:** Hides internal implementation details
- **Contract:** Defines what operations are available and how to use them

**Why APIs Need Testing:**
1. **APIs are the backbone of modern applications** — Most applications use APIs internally or externally
2. **APIs enable integration** — Testing ensures integrations work correctly
3. **APIs handle critical data** — Errors can cause data loss or security breaches
4. **APIs are tested earlier** — APIs are available before UIs, enabling shift-left testing
5. **API failures affect multiple consumers** — One API bug can impact many applications

---

## 🧪 1.2 Types of APIs

### 🔄 REST (Representational State Transfer)

**Characteristics:**
- Uses standard HTTP methods (GET, POST, PUT, DELETE, PATCH)
- Stateless — each request contains all information needed
- Resource-oriented — URLs represent resources (e.g., `/users/123`)
- Data formats: JSON (most common), XML, YAML
- Lightweight and flexible

**Example REST Request/Response:**
```
GET /api/users/123 HTTP/1.1
Host: example.com
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 123,
  "name": "Alice Smith",
  "email": "alice@example.com"
}
```

**Advantages:**
- Simple and easy to understand
- Scalable (stateless)
- Cacheable responses
- Platform and language independent

**Disadvantages:**
- No built-in security standards
- Can become complex with nested resources
- Over-fetching or under-fetching data

---

### 🔷 SOAP (Simple Object Access Protocol)

**Characteristics:**
- Protocol-based (not just an architectural style)
- Uses XML for message format
- Can use HTTP, SMTP, or other transport protocols
- Built-in security (WS-Security)
- Formal contract via WSDL

**Example SOAP Message:**
```xml
<?xml version="1.0"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetUser xmlns="http://example.com/users">
      <UserId>123</UserId>
    </GetUser>
  </soap:Body>
</soap:Envelope>
```

**Advantages:**
- Strict standards and formal contracts
- Built-in error handling and security
- ACID compliance for transactions
- Platform independent

**Disadvantages:**
- Verbose XML increases overhead
- More complex to implement and test
- Slower performance due to XML parsing
- Less flexible than REST

---

### 🔷 GraphQL

**Characteristics:**
- Query language for APIs
- Clients specify exactly what data they need
- Single endpoint (typically `/graphql`)
- Strongly typed schema
- Introspection capabilities

**Example GraphQL Query:**
```graphql
query {
  user(id: 123) {
    name
    email
    orders {
      id
      total
    }
  }
}
```

**Advantages:**
- No over-fetching or under-fetching
- Strongly typed schema reduces errors
- Single request can fetch related data
- Self-documenting via introspection

**Disadvantages:**
- Query complexity can affect performance
- Caching is more complex
- File uploads require extensions
- Steeper learning curve

---

### 🧪 Comparison of API Types

| Aspect | REST | SOAP | GraphQL |
|--------|------|------|---------|
| Style | Architectural | Protocol | Query language |
| Data format | JSON, XML | XML only | JSON |
| Endpoints | Multiple (resource-based) | Single (service-based) | Single `/graphql` |
| Flexibility | High | Low | High |
| Performance | Good | Slower (XML) | Good |
| Caching | Easy | Moderate | Complex |
| Security | HTTPS, OAuth | WS-Security, HTTPS | HTTPS, OAuth |
| Use case | Web/mobile APIs | Enterprise/financial | Complex data requirements |

---

## ⭐ 1.3 HTTP Methods

### 🔷 GET
- **Purpose:** Retrieve a resource
- **Idempotent:** Yes
- **Safe:** Yes (does not modify data)
- **Example:** `GET /users/123` — Retrieve user 123

### 🔷 POST
- **Purpose:** Create a new resource
- **Idempotent:** No
- **Safe:** No
- **Example:** `POST /users` — Create a new user

### 🔷 PUT
- **Purpose:** Update/replace a resource
- **Idempotent:** Yes
- **Safe:** No
- **Example:** `PUT /users/123` — Replace user 123 entirely

### 🔷 PATCH
- **Purpose:** Partially update a resource
- **Idempotent:** Yes (usually)
- **Safe:** No
- **Example:** `PATCH /users/123` — Update only email of user 123

### 🔷 DELETE
- **Purpose:** Remove a resource
- **Idempotent:** Yes
- **Safe:** No
- **Example:** `DELETE /users/123` — Remove user 123

### 🔷 HEAD
- **Purpose:** Retrieve headers only (no body)
- **Idempotent:** Yes
- **Safe:** Yes
- **Example:** `HEAD /users/123` — Check if user exists

### 🔷 OPTIONS
- **Purpose:** Discover available methods
- **Idempotent:** Yes
- **Safe:** Yes
- **Example:** `OPTIONS /users` — Which methods are supported?

**Idempotency:** An operation is idempotent if performing it multiple times has the same effect as performing it once. GET, PUT, DELETE are idempotent. POST is NOT idempotent.

---

## ⭐ 1.4 HTTP Status Codes

### 🔷 1xx — Informational
- **100 Continue:** Request received, client should continue

### 🔷 2xx — Success
- **200 OK:** Request succeeded
- **201 Created:** Resource created successfully
- **204 No Content:** Request succeeded, no body returned

### 🔷 3xx — Redirection
- **301 Moved Permanently:** Resource moved to new URL
- **302 Found:** Temporary redirect
- **304 Not Modified:** Resource unchanged (cache valid)

### 🔷 4xx — Client Errors
- **400 Bad Request:** Invalid request syntax or parameters
- **401 Unauthorized:** Authentication required
- **403 Forbidden:** Authenticated but not authorized
- **404 Not Found:** Resource does not exist
- **409 Conflict:** Request conflicts with current state
- **422 Unprocessable Entity:** Valid syntax but semantic errors
- **429 Too Many Requests:** Rate limit exceeded

### 🔷 5xx — Server Errors
- **500 Internal Server Error:** Unexpected server error
- **502 Bad Gateway:** Invalid response from upstream
- **503 Service Unavailable:** Server temporarily unavailable
- **504 Gateway Timeout:** Upstream server timeout

**Testing Implications:**
- Each status code should be tested with appropriate scenarios
- 4xx errors should return helpful error messages
- 5xx errors should be logged and alerted

---

## 🔌 1.5 API Architecture Patterns

### 🔷 Monolithic Architecture
- Single codebase containing all functionality
- Single API serves all features
- **Testing:** Single endpoint to test; changes may affect entire API

### 🔷 Microservices Architecture
- Application broken into small, independent services
- Each service has its own API
- **Testing:** Test each service independently and integration between services

### 🔷 Service-Oriented Architecture (SOA)
- Services communicate via middleware/ESB
- More formal contracts than microservices
- **Testing:** Test service contracts and middleware integration

### 🔷 Serverless Architecture
- Functions deployed to cloud provider (AWS Lambda, Azure Functions)
- APIs managed by API Gateway
- **Testing:** Test function logic and API Gateway configuration

---

## 🔌 1.6 API Documentation

### 🔌 OpenAPI Specification (OAS)
- Machine-readable format (JSON or YAML)
- Describes endpoints, methods, parameters, responses
- Version 3.x is current standard
- Can generate client libraries and documentation

**Example OpenAPI Snippet:**
```yaml
paths:
  /users/{id}:
    get:
      summary: Get user by ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: User found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
```

### 🔷 Swagger
- Implementation of OpenAPI specification
- Swagger UI renders interactive API documentation
- Swagger Editor for writing OpenAPI specs

### 🔷 WSDL (for SOAP)
- XML-based service description
- Defines operations, messages, bindings, and endpoints
- Tools can generate client stubs from WSDL

### 🔷 Importance of Documentation for Testing
1. **Test design source:** Requirements and test conditions derived from API spec
2. **Contract validation:** Tests verify the API matches its documented contract
3. **Automation generation:** Some tools generate tests from OpenAPI specs
4. **Stakeholder communication:** Shared understanding between teams

---

## 💡 Worked Examples

### 💡 Worked Example 1: Identifying the Correct HTTP Method

**Scenario:** An API needs to support:
1. Retrieving a list of products
2. Adding a new product
3. Updating a product's price
4. Deleting a product

**Solution:**
| Operation | Method | Endpoint |
|-----------|--------|----------|
| Retrieve list | GET | `/products` |
| Add product | POST | `/products` |
| Update price | PATCH | `/products/{id}` |
| Delete product | DELETE | `/products/{id}` |

**Rationale:**
- GET for retrieval (safe, idempotent)
- POST for creation (not idempotent — creates new resource each time)
- PATCH for partial update (idempotent)
- DELETE for removal (idempotent)

### 💡 Worked Example 2: Status Code Selection

**Scenario:** Design appropriate status codes for an API:

| Scenario | Status Code | Reason |
|----------|-------------|--------|
| User successfully created | 201 Created | New resource created |
| User updated successfully | 200 OK | Update succeeded |
| Invalid email format in request | 400 Bad Request | Client sent invalid data |
| Request without authentication token | 401 Unauthorized | Missing credentials |
| User tries to access another user's data | 403 Forbidden | Authenticated but not authorized |
| User ID does not exist | 404 Not Found | Resource not found |
| Database connection fails | 500 Internal Server Error | Server-side problem |

### 💡 Worked Example 3: REST vs. SOAP Decision

**Scenario:** A bank needs an API for internal fund transfers between accounts.

**Analysis:**
- High security requirements → SOAP's WS-Security is beneficial
- Transaction integrity required → SOAP's ACID compliance
- Internal use only → SOAP complexity is manageable
- Formal contract needed → WSDL provides clear contract

**Decision:** SOAP may be appropriate for this high-security financial scenario.

**Alternative:** REST with additional security layers (OAuth2, mutual TLS) is also viable and more common in modern banking.
