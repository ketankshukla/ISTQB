# Chapter 1 — Introduction to API Testing: Practice Questions

---

### Q1 (API-1.1, K2)

An API is BEST described as:

A. A user interface for web applications
B. A set of protocols that allow software applications to communicate
C. A type of database
D. A programming language

---

### Q2 (API-1.2, K2)

Which API type uses a query language where clients specify exactly what data they need?

A. REST
B. SOAP
C. GraphQL
D. RPC

---

### Q3 (API-1.3, K2)

Which HTTP method is used to create a new resource?

A. GET
B. POST
C. PUT
D. DELETE

---

### Q4 (API-1.3, K2)

Which HTTP status code indicates that a resource was successfully created?

A. 200 OK
B. 201 Created
C. 204 No Content
D. 404 Not Found

---

### Q5 (API-1.3, K3)

A user sends a request without an authentication token. The API should return:

A. 400 Bad Request
B. 401 Unauthorized
C. 403 Forbidden
D. 404 Not Found

---

### Q6 (API-1.2, K2)

SOAP is BEST characterized as:

A. An architectural style using JSON
B. A protocol that uses XML messages
C. A query language for APIs
D. A replacement for HTTP

---

### Q7 (API-1.3, K2)

Which HTTP method is both safe and idempotent?

A. POST
B. GET
C. PATCH
D. DELETE

---

### Q8 (API-1.4, K2)

A 403 Forbidden status code means:

A. The request syntax was invalid
B. The client is authenticated but not authorized for this resource
C. The server encountered an unexpected error
D. The resource does not exist

---

### Q9 (API-1.5, K2)

In a microservices architecture, APIs are typically:

A. A single API for the entire application
B. Each service has its own API
C. Only used for external communication
D. Replaced by direct database access

---

### Q10 (API-1.6, K2)

OpenAPI (formerly Swagger) is used to:

A. Execute API tests automatically
B. Describe REST APIs in a machine-readable format
C. Replace HTTP as a transport protocol
D. Encrypt API communications

---

### Q11 (API-1.3, K3)

A client sends the same PUT request three times. Each time, the result is the same resource state. This demonstrates:

A. Safety
B. Idempotency
C. Caching
D. Authentication

---

### Q12 (API-1.2, K2)

Which API type is most likely to use WSDL for its contract?

A. REST
B. SOAP
C. GraphQL
D. WebSocket

---

### Q13 (API-1.4, K2)

A 503 Service Unavailable status code indicates:

A. The client sent invalid data
B. The server is temporarily unable to handle the request
C. The resource was not found
D. The client is not authorized

---

### Q14 (API-1.3, K3)

Which HTTP method should be used to partially update an existing resource?

A. POST
B. PUT
C. PATCH
D. DELETE

---

### Q15 (API-1.5, K2)

A monolithic architecture typically has:

A. Many small APIs, one per service
B. A single API that serves all application features
C. No APIs at all
D. Only external APIs

---

### Q16 (API-1.2, K3)

A mobile application needs to fetch user profile, recent orders, and order details in a single request to minimize network calls. The BEST API type is:

A. REST with multiple endpoints
B. SOAP with XML messages
C. GraphQL with a single query
D. RPC with multiple calls

---

### Q17 (API-1.3, K2)

A 409 Conflict status code is returned when:

A. The server crashes
B. The request conflicts with the current state of the resource
C. The client is not authenticated
D. The resource was moved

---

### Q18 (API-1.6, K2)

API documentation is important for testing because it:

A. Replaces the need for test cases
B. Provides the specification from which tests are designed
C. Is only used by developers
D. Makes the API run faster

---

### Q19 (API-1.3, K3)

A client sends a DELETE request to `/users/123` twice. The first request succeeds (204). The second request returns 404. This behavior:

A. Violates REST principles because DELETE should be idempotent
B. Is acceptable — the resource was already deleted
C. Indicates a server error
D. Requires POST instead of DELETE

---

### Q20 (API-1.4, K2)

Which status code range represents client errors?

A. 1xx
B. 2xx
C. 4xx
D. 5xx

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** An API is a set of protocols for software communication.

### Q2
**Answer: C**

**Rationale:** GraphQL is a query language where clients specify exactly what data they need.

### Q3
**Answer: B**

**Rationale:** POST is used to create new resources.

### Q4
**Answer: B**

**Rationale:** 201 Created indicates a resource was successfully created.

### Q5
**Answer: B**

**Rationale:** 401 Unauthorized = missing or invalid authentication.

### Q6
**Answer: B**

**Rationale:** SOAP is a protocol that uses XML messages.

### Q7
**Answer: B**

**Rationale:** GET is both safe (does not modify) and idempotent (same result every time).

### Q8
**Answer: B**

**Rationale:** 403 = authenticated but not authorized. 401 = not authenticated.

### Q9
**Answer: B**

**Rationale:** Microservices = each service has its own API.

### Q10
**Answer: B**

**Rationale:** OpenAPI describes REST APIs in a machine-readable format.

### Q11
**Answer: B**

**Rationale:** Same result after multiple identical requests = idempotency.

### Q12
**Answer: B**

**Rationale:** WSDL is the contract definition language for SOAP.

### Q13
**Answer: B**

**Rationale:** 503 = server temporarily unavailable.

### Q14
**Answer: C**

**Rationale:** PATCH is for partial updates. PUT is for full replacement.

### Q15
**Answer: B**

**Rationale:** Monolithic = single codebase with one API.

### Q16
**Answer: C**

**Rationale:** GraphQL fetches related data in a single query.

### Q17
**Answer: B**

**Rationale:** 409 = request conflicts with current resource state.

### Q18
**Answer: B**

**Rationale:** API docs provide the specification from which test conditions are derived.

### Q19
**Answer: B**

**Rationale:** Returning 404 on second DELETE is acceptable — the resource is gone, which is the intended state.

### Q20
**Answer: C**

**Rationale:** 4xx = client errors. 5xx = server errors.
