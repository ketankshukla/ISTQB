# 📖 CT-API Glossary

Key terms and definitions for the CT-API exam, organized by chapter relevance.

---

## 🏗️ API Fundamentals

**API (Application Programming Interface)**
A set of protocols, routines, and tools that allow different software applications to communicate with each other.

**REST (Representational State Transfer)**
An architectural style for designing networked applications using stateless communication and standard HTTP methods.

**SOAP (Simple Object Access Protocol)**
A protocol for exchanging structured information using XML messages, typically over HTTP or SMTP.

**GraphQL**
A query language and runtime for APIs that allows clients to request exactly the data they need.

**HTTP (Hypertext Transfer Protocol)**
The foundation of data communication for the web, used by REST APIs.

**HTTP Method**
The action to be performed on a resource: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS.

**HTTP Status Code**
A three-digit code indicating the result of an HTTP request (e.g., 200 OK, 404 Not Found, 500 Internal Server Error).

**Endpoint**
A specific URL where an API can be accessed.

**Request**
An HTTP message sent from client to server containing a method, URL, headers, and optional body.

**Response**
An HTTP message sent from server to client containing a status code, headers, and optional body.

**Header**
Metadata sent with HTTP requests and responses (e.g., Content-Type, Authorization).

**Payload / Body**
The data sent in an HTTP request or received in a response.

**JSON (JavaScript Object Notation)**
A lightweight data interchange format commonly used in REST APIs.

**XML (eXtensible Markup Language)**
A markup language used for structured data exchange, commonly in SOAP APIs.

**WSDL (Web Services Description Language)**
An XML-based interface definition language for describing SOAP web services.

**OpenAPI / Swagger**
A specification for describing REST APIs in a machine-readable format (JSON/YAML).

---

## 🔌 API Testing Terms

**API Testing**
Testing that focuses on verifying that APIs meet functional, performance, security, and reliability requirements.

**Positive Testing**
Testing with valid inputs to verify the API behaves as expected.

**Negative Testing**
Testing with invalid inputs to verify the API handles errors appropriately.

**Boundary Value Analysis (BVA)**
A test design technique that focuses on values at the boundaries of equivalence partitions.

**Equivalence Partitioning**
A test design technique that divides input data into partitions where the system behaves similarly.

**State Transition Testing**
A test design technique that tests transitions between states in a system.

**Contract Testing**
Testing that verifies APIs meet the agreed contract between provider and consumer.

**Consumer-Driven Contract (CDC)**
A testing approach where the consumer defines the expected API behavior, and the provider verifies against it.

**Schema Validation**
Verifying that API request/response data conforms to a defined schema (JSON Schema, XML Schema).

**Mock Server**
A simulated API server that mimics the behavior of a real API for testing purposes.

**Stub**
A simplified implementation of a component that returns predefined responses.

**API Gateway**
A server that acts as an entry point for API requests, handling routing, authentication, and rate limiting.

---

## 🔒 Authentication and Security

**Authentication**
Verifying the identity of a user or system.

**Authorization**
Determining what actions an authenticated user or system is allowed to perform.

**Basic Authentication**
An HTTP authentication scheme that sends credentials as a base64-encoded username:password string.

**Bearer Token**
A security token used in OAuth2 and other protocols, sent in the Authorization header.

**OAuth2**
An authorization framework that enables third-party applications to obtain limited access to a user's resources.

**API Key**
A unique identifier used to authenticate requests to an API.

**JWT (JSON Web Token)**
A compact, self-contained token format used for secure transmission of information.

**Rate Limiting**
Restricting the number of API requests a client can make in a given time period.

**Throttling**
Controlling the rate at which API requests are processed.

**Injection Attack**
An attack where malicious input is sent to an API to execute unintended commands (e.g., SQL injection, command injection).

**Cross-Site Scripting (XSS)**
A security vulnerability where malicious scripts are injected into web pages.

**Man-in-the-Middle (MITM)**
An attack where an attacker intercepts and potentially alters communication between two parties.

---

## ⚡ Performance Testing

**Load Testing**
Testing that determines how a system performs under expected load.

**Stress Testing**
Testing that evaluates system behavior beyond normal operational capacity.

**Soak Testing**
Testing that evaluates system stability over an extended period under sustained load.

**Spike Testing**
Testing that evaluates system behavior when the load is suddenly and dramatically increased.

**Latency**
The time delay between a request being sent and a response being received.

**Throughput**
The number of requests processed per unit of time.

**Response Time**
The total time from sending a request to receiving a response.

**Concurrent Users**
The number of users simultaneously making requests to an API.

---

## 🛠️ Automation and Tools

**Test Automation Framework**
A structured set of guidelines, tools, and libraries used to automate testing.

**Data-Driven Testing**
A testing approach where test logic is separated from test data, allowing multiple data sets to be tested.

**CI/CD (Continuous Integration / Continuous Delivery)**
Practices that automate the building, testing, and deployment of code changes.

**Regression Test**
A test that verifies existing functionality still works after changes.

**Smoke Test**
A subset of tests that verify critical paths, typically run on every build.

**Flaky Test**
A test that produces inconsistent results (pass/fail) without changes to the system under test.

**Postman**
A popular API development and testing tool.

**Swagger UI**
A tool that renders OpenAPI specifications as interactive API documentation.

**REST Assured**
A Java DSL for simplifying testing of REST services.

---

## ⭐ Abbreviations

| Abbreviation | Meaning |
|-------------|---------|
| API | Application Programming Interface |
| REST | Representational State Transfer |
| SOAP | Simple Object Access Protocol |
| HTTP | Hypertext Transfer Protocol |
| HTTPS | Hypertext Transfer Protocol Secure |
| JSON | JavaScript Object Notation |
| XML | eXtensible Markup Language |
| WSDL | Web Services Description Language |
| JWT | JSON Web Token |
| OAuth | Open Authorization |
| SSL/TLS | Secure Sockets Layer / Transport Layer Security |
| CI/CD | Continuous Integration / Continuous Delivery |
| BVA | Boundary Value Analysis |
| CDC | Consumer-Driven Contract |
| TDD | Test-Driven Development |
| SUT | System Under Test |
| TAE | Test Automation Engineer |
