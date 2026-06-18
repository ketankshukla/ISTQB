# ❓ Chapter 6 — Contract Testing and Advanced Topics: Practice Questions

---

### 🔌 Q1 (API-6.1, K2)

Consumer-driven contract testing is BEST described as:

A. Testing both services running together in an integration environment
B. The consumer defines expectations and both sides verify independently
C. Only the provider tests its own API
D. Only manual testing of API contracts

---

### 🔌 Q2 (API-6.2, K2)

JSON Schema is used to:

A. Execute API tests
B. Define and validate the structure of JSON data
C. Generate random test data
D. Encrypt API responses

---

### 🔌 Q3 (API-6.3, K2)

Which API versioning approach keeps URLs unchanged?

A. URL versioning
B. Header versioning
C. Query parameter versioning
D. No versioning

---

### 🔌 Q4 (API-6.4, K2)

Adding a new optional field to an API response is:

A. A breaking change
B. A backward compatible change
C. Not allowed
D. Only allowed in major version releases

---

### 🔌 Q5 (API-6.4, K3)

An API team renames a response field from `name` to `fullName`. This is:

A. Backward compatible
B. A breaking change requiring a new version
C. Only a documentation update
D. Automatically handled by all clients

---

### 🔌 Q6 (API-6.1, K2)

Pact is a tool primarily used for:

A. Load testing
B. Consumer-driven contract testing
C. Database migration
D. UI automation

---

### 🔌 Q7 (API-6.2, K3)

An API response includes `{"id": "abc", "name": "Alice"}`. The JSON Schema requires `id` to be an integer. The validation result is:

A. Valid — string IDs are acceptable
B. Invalid — `id` must be an integer
C. Valid if the API returns 200
D. Only invalid if the client rejects it

---

### 🔌 Q8 (API-6.3, K3)

A public API uses URL versioning (`/v1/`, `/v2/`). The MAIN advantage is:

A. URLs never change
B. Version is visible and cacheable
C. No documentation is needed
D. It is the only valid versioning approach

---

### 🔌 Q9 (API-6.4, K2)

Backward compatibility means:

A. The API only supports old browsers
B. Existing clients continue to work with the new API version
C. The API never changes
D. Only new clients can use the API

---

### 🔌 Q10 (API-6.1, K2)

In contract testing, the "contract" is:

A. A legal document between companies
B. The agreed expectations of request/response format between consumer and provider
C. The employment contract of the API developer
D. A database connection string

---

### 🔌 Q11 (API-6.2, K2)

WSDL is used with which API type?

A. REST
B. SOAP
C. GraphQL
D. WebSocket

---

### 🔌 Q12 (API-6.3, K3)

A team wants to deprecate API v1 and move all users to v2. They should:

A. Immediately shut down v1
B. Communicate the deprecation timeline and maintain v1 during the transition period
C. Delete v1 documentation
D. Redirect all v1 requests to an error page

---

### 🔌 Q13 (API-6.4, K2)

Which of the following is a breaking API change?

A. Adding a new optional query parameter
B. Removing a response field that was previously present
C. Adding a new endpoint
D. Adding an optional field to a response

---

### 🔌 Q14 (API-6.1, K3)

A contract test passes, but the integration test between the same services fails. This suggests:

A. The contract test is wrong
B. There is an issue beyond the contract (e.g., data consistency, side effects)
C. Contract tests replace integration tests
D. The services should not communicate

---

### 🔌 Q15 (API-6.2, K2)

Schema validation in API testing helps:

A. Only the UI look and feel
B. Catch format errors early and enforce API contracts
C. Improve API performance
D. Replace the need for functional testing

---

### 🔌 Q16 (API-6.3, K2)

Header-based API versioning uses:

A. Different URLs for each version
B. A header like `Accept: application/vnd.example.v2+json`
C. Query parameters in the URL
D. Different domain names

---

### 🔌 Q17 (API-6.4, K3)

A GraphQL API adds a new optional field to a type. Existing GraphQL queries:

A. Will break because they did not request the new field
B. Will continue to work because GraphQL clients only receive fields they request
C. Must be rewritten
D. Will receive the new field automatically

---

### 🔌 Q18 (API-6.1, K2)

The Pact Broker is used to:

A. Execute load tests
B. Store and share contract files between consumers and providers
C. Monitor API uptime
D. Generate API documentation

---

### 🔌 Q19 (API-6.2, K3)

An API response must match a JSON Schema that requires a `createdAt` field of type `string` with format `date-time`. A response with `createdAt: "2024-01-15"` is:

A. Valid because it is a date string
B. Invalid because it does not include time
C. Valid if the status code is 200
D. Only invalid if the client complains

---

### 🔌 Q20 (API-6.3, K2)

Semantic versioning for APIs typically means:

A. Version numbers have no meaning
B. Major.Minor.Patch where major = breaking, minor = features, patch = fixes
C. Versions are random numbers
D. Only major version numbers are used

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** Consumer-driven contract testing = consumer defines expectations, both verify independently.

### 🔷 Q2
**Answer: B**

**Rationale:** JSON Schema defines and validates JSON data structure.

### 🔷 Q3
**Answer: B**

**Rationale:** Header versioning keeps URLs unchanged.

### 🔷 Q4
**Answer: B**

**Rationale:** Optional new fields do not break existing clients.

### 🔷 Q5
**Answer: B**

**Rationale:** Renaming a field breaks existing clients = breaking change.

### 🔷 Q6
**Answer: B**

**Rationale:** Pact is the leading consumer-driven contract testing tool.

### 🔷 Q7
**Answer: B**

**Rationale:** Schema requires integer. String "abc" fails validation.

### 🔷 Q8
**Answer: B**

**Rationale:** URL versioning makes version visible and easily cacheable.

### 🔷 Q9
**Answer: B**

**Rationale:** Backward compatibility = existing clients work with new version.

### 🔷 Q10
**Answer: B**

**Rationale:** Contract = agreed request/response expectations.

### 🔷 Q11
**Answer: B**

**Rationale:** WSDL is specific to SOAP web services.

### 🔷 Q12
**Answer: B**

**Rationale:** Deprecation requires communication and transition period.

### 🔷 Q13
**Answer: B**

**Rationale:** Removing existing fields breaks clients. Other options are non-breaking.

### 🔷 Q14
**Answer: B**

**Rationale:** Contract tests verify format; integration tests catch data/side effect issues.

### 🔷 Q15
**Answer: B**

**Rationale:** Schema validation catches format errors and enforces contracts.

### 🔷 Q16
**Answer: B**

**Rationale:** Header versioning uses Accept or custom headers.

### 🔷 Q17
**Answer: B**

**Rationale:** GraphQL clients receive only requested fields. New optional fields do not affect existing queries.

### 🔷 Q18
**Answer: B**

**Rationale:** Pact Broker stores and shares contracts between teams.

### 🔷 Q19
**Answer: B**

**Rationale:** `date-time` format requires time component (e.g., `2024-01-15T10:00:00Z`).

### 🔷 Q20
**Answer: B**

**Rationale:** Semantic versioning = Major (breaking), Minor (features), Patch (fixes).
