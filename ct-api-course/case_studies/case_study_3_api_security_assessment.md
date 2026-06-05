# Case Study 3 — API Security Assessment

## Context

You are a security test consultant hired by HealthCloud, a healthcare SaaS platform.

**Platform:**
- REST API for patient records, appointments, prescriptions, billing
- OAuth2 authentication with JWT tokens
- HIPAA compliance required
- Mobile apps and web portal consume the API
- 15 microservices behind an API gateway
- Current state:
  - No dedicated security testing
  - API passes basic functional tests
  - No penetration testing of APIs
  - Concerns about patient data exposure
  - Need to comply with HIPAA security requirements

## Task 1: Security Risk Assessment

**Question:** Identify the highest-priority API security risks for HealthCloud.

**Model Answer:**

**Risk Assessment:**

| Risk | Likelihood | Impact | Priority | OWASP Category |
|------|-----------|--------|----------|----------------|
| Broken object level authorization | High | Critical | 1 | API1 |
| Excessive data exposure (PHI) | High | Critical | 2 | API3 |
| Broken authentication | Medium | Critical | 3 | API2 |
| Injection attacks | Medium | High | 4 | API8 |
| Broken function level authorization | Medium | High | 5 | API5 |
| Lack of rate limiting | Medium | Medium | 6 | API4 |
| Security misconfiguration | Medium | Medium | 7 | API7 |
| Insufficient logging | Low | High | 8 | API10 |

**HIPAA-Specific Concerns:**
- PHI must be encrypted in transit (TLS 1.2+) and at rest
- Access must be logged and auditable
- Minimum necessary access principle
- Patient data must not be exposed in error messages

---

## Task 2: Authentication and Authorization Test Plan

**Question:** Design comprehensive auth tests for HealthCloud's API.

**Model Answer:**

**JWT Authentication Tests:**

| Test | Token | Expected |
|------|-------|----------|
| Valid unexpired JWT | Valid, not expired | 200 OK |
| Missing JWT | None | 401 Unauthorized |
| Expired JWT | `exp` in the past | 401 Unauthorized |
| Tampered payload | Valid signature, modified payload | 401 Unauthorized |
| Wrong signing key | Signed with different key | 401 Unauthorized |
| Algorithm "none" | `alg: "none"` | 401 Unauthorized |
| Missing required claims | No `sub`, `exp`, `iss` | 401 Unauthorized |

**Object Level Authorization Tests:**

| Test | Request | Expected |
|------|---------|----------|
| Patient accesses own records | `GET /patients/self/records` | 200 OK |
| Patient accesses another patient's records | `GET /patients/123/records` (as patient 456) | 403 Forbidden |
| Doctor accesses own patient's records | `GET /patients/123/records` (as authorized doctor) | 200 OK |
| Doctor accesses non-patient's records | `GET /patients/789/records` (unauthorized patient) | 403 Forbidden |
| Admin accesses any records | `GET /patients/123/records` (as admin) | 200 OK |

**Function Level Authorization Tests:**

| Role | DELETE /patients/123 | GET /admin/audit-logs |
|------|---------------------|----------------------|
| Patient | 403 | 403 |
| Doctor | 403 | 403 |
| Admin | 200 | 200 |

---

## Task 3: Input Validation and Injection Testing

**Question:** Design injection tests for HealthCloud's API.

**Model Answer:**

**Test Targets:**
All endpoints that accept string input: patient search, appointment notes, prescription names, billing descriptions.

**SQL Injection Tests:**
```json
// Patient search
{"query": "Smith' OR '1'='1"}
{"query": "Smith'; DROP TABLE patients; --"}
{"query": "Smith' UNION SELECT * FROM users --"}

// Expected: API should sanitize or reject
// Actual: Verify no unauthorized data access
```

**NoSQL Injection Tests:**
```json
// If using MongoDB
{"patientId": {"$gt": ""}}
{"patientId": {"$ne": null}}
```

**Command Injection Tests:**
```json
// File upload or export endpoints
{"filename": "report.pdf; cat /etc/passwd"}
{"filename": "report.pdf | whoami"}
```

**XSS Tests:**
```json
{"notes": "<script>alert('xss')</script>"}
{"notes": "<img src=x onerror=alert(1)>"}

// Expected: API should sanitize or escape
// Verify response does not contain unescaped scripts
```

**Path Traversal Tests:**
```
GET /reports/download?file=../../etc/passwd
GET /reports/download?file=..\..\windows\system32\config\sam
```

---

## Task 4: Data Exposure Testing

**Question:** Design tests to verify PHI is not excessively exposed.

**Model Answer:**

**Response Inspection Tests:**

| Endpoint | Field That Must NOT Appear | Test |
|----------|---------------------------|------|
| GET /patients/123 | `ssn`, `passwordHash`, `internalNotes` | Verify absent |
| GET /appointments | `patientDiagnosis` (for non-doctors) | Verify absent |
| GET /billing/123 | `creditCardNumber` (unmasked) | Verify masked or absent |
| Error responses | Database connection strings, stack traces | Verify absent |

**Test Method:**
1. Send valid requests to each endpoint
2. Inspect the full response body
3. Verify no PHI beyond what is necessary for the consumer
4. Verify error responses do not leak internal details

---

## Task 5: Rate Limiting and DoS Testing

**Question:** Design rate limit tests for HealthCloud.

**Model Answer:**

**Rate Limit Tests:**

| Scenario | Requests | Time Window | Expected |
|----------|----------|-------------|----------|
| Within limit | 99 | 60 seconds | 200 OK |
| At limit | 100 | 60 seconds | 200 OK |
| Exceed limit | 101 | 60 seconds | 429 Too Many Requests |
| Retry after wait | After 429, wait 60s | 60 seconds | 200 OK |
| Different API keys | Key A: 100 req, Key B: 100 req | 60 seconds | Both succeed (per-key limits) |
| Burst test | 200 requests instantly | Instant | 100 succeed, 100 get 429 |

**DoS Prevention Tests:**
- Oversized payloads (>10MB JSON)
- Deeply nested JSON (1000 levels)
- Very long strings (10MB single field)
- XML bomb (billion laughs attack if XML is supported)

---

## Task 6: Security Test Automation

**Question:** Design an automated security testing pipeline for HealthCloud.

**Model Answer:**

**Pipeline Stages:**

```
Stage 1: Static Analysis
  - Tools: SonarQube, Semgrep
  - Check for hard-coded secrets, SQL injection patterns
  - Gate: No critical/high vulnerabilities

Stage 2: Dependency Scanning
  - Tools: OWASP Dependency Check, Snyk
  - Check for known vulnerabilities in libraries
  - Gate: No critical vulnerabilities

Stage 3: Automated Security Tests
  - Tools: Custom scripts + OWASP ZAP API
  - Run authentication, authorization, injection tests
  - Gate: 100% pass

Stage 4: Contract Validation
  - Verify API responses do not expose PHI
  - Gate: All contract tests pass

Stage 5: Penetration Testing (Monthly)
  - Manual penetration testing by security team
  - Focus on business logic vulnerabilities
  - Report and remediate findings
```

**Security Test Suite (Automated):**
```javascript
describe('API Security', () => {
    test('rejects SQL injection in search', async () => {
        const res = await api.search("' OR '1'='1");
        expect(res.status).toBe(400);
        expect(res.body).not.toContain unauthorizedData();
    });

    test('masks SSN in patient response', async () => {
        const res = await api.getPatient(123);
        expect(res.body.ssn).toBeUndefined();
    });

    test('enforces rate limit', async () => {
        const responses = await Promise.all(
            Array(150).fill().map(() => api.getPatient(123))
        );
        const rateLimited = responses.filter(r => r.status === 429);
        expect(rateLimited.length).toBeGreaterThan(0);
    });
});
```
