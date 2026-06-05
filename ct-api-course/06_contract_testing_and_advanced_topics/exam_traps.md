# Chapter 6 — Contract Testing and Advanced Topics: Exam Traps

## Trap 1: Confusing Contract Testing with Integration Testing

**Trap:** Contract testing verifies the contract (request/response format) independently. Integration testing verifies both services work together.

**Example question:**
> Contract testing requires both the consumer and provider services to be running simultaneously. This statement is:
>
> A. True — both services must be running
> B. False — consumer tests against a mock; provider tests against the contract file
> C. True only for REST APIs
> D. False — only the provider needs to run

**Correct answer:** B — Contract testing's key benefit is that consumer and provider test independently. Consumer uses a mock; provider verifies against the contract file.

---

## Trap 2: Adding Required Fields Is Backward Compatible

**Trap:** Adding required fields to responses is a breaking change. Existing clients may not expect the new field. Adding optional fields is backward compatible.

**Example question:**
> An API adds a new required field `version` to all responses. Existing clients break because they do not expect this field. This is:
>
> A. A backward compatible change
> B. A breaking change — adding required fields breaks existing clients
> C. A documentation issue only
> D. The clients' fault for not handling new fields

**Correct answer:** B — Adding required fields is breaking. Adding optional fields is backward compatible.

---

## Trap 3: Thinking URL Versioning Is the Only Approach

**Trap:** URL, header, and query parameter versioning are all valid approaches. URL versioning is most common and visible.

**Example question:**
> A team wants to version their API but keep URLs unchanged. The BEST approach is:
>
> A. URL versioning (`/v1/users`)
> B. Header versioning (`Accept: application/vnd.example.v1+json`)
> C. No versioning needed
> D. Create a new subdomain

**Correct answer:** B — Header versioning keeps URLs unchanged.

---

## Trap 4: Schema Validation Is Only for Request Bodies

**Trap:** Schema validation should apply to both request and response bodies, as well as URL parameters and headers where applicable.

**Example question:**
> A team validates request bodies against JSON Schema but does not validate responses. The risk is:
>
> A. No risk — only requests need validation
> B. The API could return malformed responses that break consumers
> C. Responses are always correct
> D. Schema validation is only for requests

**Correct answer:** B — Response validation ensures consumers receive correctly formatted data.

---

## Trap 5: Contract Testing Replaces All Integration Testing

**Trap:** Contract testing complements but does not replace integration testing. Integration tests still catch issues that contract tests miss (e.g., actual data consistency, side effects).

**Example question:**
> A team replaces all integration tests with contract tests. The risk is:
>
> A. No risk — contract tests are sufficient
> B. They may miss issues like data consistency and actual service interactions
> C. Contract tests are slower
> D. Contract tests are harder to maintain

**Correct answer:** B — Contract tests verify format contracts but not actual data flows and side effects.
