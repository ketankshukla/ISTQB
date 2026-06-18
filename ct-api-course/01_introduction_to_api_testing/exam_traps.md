# 🪤 Chapter 1 — Introduction to API Testing: Exam Traps

## 🪤 Trap 1: Confusing Idempotent and Safe Methods

**Trap:** Safe methods do not modify data. Idempotent methods produce the same result when called multiple times. A method can be idempotent but not safe (e.g., DELETE).

**Example question:**
> Which HTTP method is idempotent but NOT safe?
>
> A. GET
> B. POST
> C. DELETE
> D. HEAD

**Correct answer:** C — DELETE is idempotent (deleting twice has the same effect as once) but not safe (it modifies data).

---

## 🪤 Trap 2: Confusing 401 and 403 Status Codes

**Trap:** 401 = not authenticated (who are you?). 403 = authenticated but not authorized (who are you? — yes, but you cannot do that).

**Example question:**
> A user provides valid login credentials but is denied access to an admin endpoint. The correct status code is:
>
> A. 401 Unauthorized
> B. 403 Forbidden
> C. 404 Not Found
> D. 500 Internal Server Error

**Correct answer:** B — The user is authenticated (credentials valid) but not authorized for that resource. 401 means authentication failed.

---

## 🪤 Trap 3: Thinking REST Is a Protocol

**Trap:** REST is an architectural style, not a protocol. SOAP is a protocol. REST uses HTTP as its protocol.

**Example question:**
> REST is BEST described as:
>
> A. A protocol like SOAP
> B. An architectural style for designing networked applications
> C. A programming language
> D. A database management system

**Correct answer:** B — REST is an architectural style (constraints and principles), not a protocol.

---

## 🪤 Trap 4: Thinking GraphQL Replaces REST Completely

**Trap:** GraphQL solves specific problems (over-fetching, complex relationships) but is not always better than REST. They serve different use cases.

**Example question:**
> A team with simple CRUD operations and basic caching needs should:
>
> A. Always use GraphQL for all APIs
> B. Consider REST for its simplicity and mature caching support
> C. Never use REST because it is outdated
> D. Only use SOAP

**Correct answer:** B — REST is simple and has excellent caching support. GraphQL adds complexity that may not be needed.

---

## 🪤 Trap 5: Using POST for Updates

**Trap:** POST should create resources. PUT replaces resources. PATCH partially updates. Using POST for updates violates REST conventions.

**Example question:**
> A developer uses POST to update an existing user's email address. This is:
>
> A. Correct — POST can be used for any operation
> B. Incorrect — PUT or PATCH should be used for updates
> C. Required by the REST specification
> D. Only acceptable if the API is SOAP

**Correct answer:** B — POST is for creation. PATCH is for partial updates. PUT is for full replacement.
