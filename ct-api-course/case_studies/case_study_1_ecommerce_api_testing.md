# Case Study 1 — E-commerce API Testing

## Context

You are the API Test Lead for ShopOnline, an e-commerce company. The company has:
- 25-person engineering team, 4 testers, 1 API test lead (you)
- A REST API for: products, inventory, cart, orders, payments, users
- Technology: Node.js + Express, PostgreSQL, Redis (caching)
- Current state:
  - API tests are manual via Postman
  - No automation beyond basic smoke tests
  - Frequent production incidents (2-3 per month) caused by API changes
  - No contract testing between frontend and backend
  - API documentation is outdated
- Release cycle: weekly
- Technology stack: REST API, JSON, OAuth2 authentication

## Task 1: Assessment and Test Strategy

**Question:** Analyze the current API testing gaps and recommend a test strategy.

**Model Answer:**

**Current Gaps:**

| Gap | Impact |
|-----|--------|
| Manual testing only | Slow, error-prone, cannot run on every build |
| No automation | Regression issues slip into production |
| Outdated documentation | Tests and code drift from spec |
| No contract testing | Frontend/backend integration issues |
| No security testing | Vulnerabilities may exist undetected |
| No performance baselines | Cannot detect performance regressions |

**Recommended Strategy:**

| Phase | Duration | Activities |
|-------|----------|------------|
| 1. Foundation | Month 1 | Update API docs (OpenAPI), set up test environments |
| 2. Automation | Months 2-3 | Automate critical path APIs (products, cart, orders, payments) |
| 3. Integration | Months 4-5 | Add contract testing (frontend-backend), CI/CD integration |
| 4. Advanced | Months 6-8 | Add security tests, performance baselines, full regression suite |

---

## Task 2: Test Design for Order API

**Question:** Design test cases for the POST `/orders` endpoint using appropriate test design techniques.

**Model Answer:**

**API Specification:**
```yaml
POST /orders
Headers: Authorization: Bearer <token>, Content-Type: application/json
Body:
  customerId: integer (required)
  items: array of {productId, quantity, discount} (required, 1-20 items)
  shippingAddress: {street, city, zip, country} (required)
  paymentMethod: enum ["credit_card", "paypal"] (required)
```

**Equivalence Partitions:**

| Parameter | Valid EP | Invalid EPs |
|-----------|----------|-------------|
| customerId | Positive integer | 0, negative, string, missing |
| items | 1-20 valid items | Empty, 21+ items, invalid productId |
| quantity | 1-100 | 0, negative, 101+ |
| discount | 0.00-0.50 | Negative, 0.51+ |
| paymentMethod | credit_card, paypal | Invalid enum value, missing |

**Boundary Value Tests:**
- items: 0, 1, 2, 19, 20, 21
- quantity: 0, 1, 2, 99, 100, 101
- discount: -0.01, 0, 0.01, 0.49, 0.50, 0.51

**Test Cases:**
1. Valid order with 1 item → 201 Created
2. Valid order with 20 items → 201 Created
3. Valid order with maximum discount (0.50) → 201 Created
4. Missing customerId → 400 Bad Request
5. Empty items array → 400 Bad Request
6. 21 items → 400 Bad Request
7. quantity = 0 → 400 Bad Request
8. quantity = 101 → 400 Bad Request
9. discount = 0.51 → 400 Bad Request
10. Invalid paymentMethod → 400 Bad Request
11. Invalid productId (non-existent) → 404 or 400
12. Missing authorization → 401 Unauthorized
13. Invalid authentication token → 401 Unauthorized
14. Valid request but product out of stock → 409 Conflict

---

## Task 3: Automation Framework Selection

**Question:** Select and justify an API automation framework for ShopOnline.

**Model Answer:**

**Team Profile:**
- Backend: Node.js/JavaScript
- Frontend: React/JavaScript
- Testers: Comfortable with JavaScript, some with Python
- CI/CD: GitHub Actions

**Evaluation:**

| Framework | Language | CI/CD | Team Fit | Ecosystem | Score |
|-----------|----------|-------|----------|-----------|-------|
| Supertest + Jest | JavaScript | Excellent | Excellent (same stack) | Large | 5/5 |
| REST Assured | Java | Good | Poor (team is JS) | Large | 2/5 |
| Requests + pytest | Python | Good | Moderate | Large | 3/5 |
| Postman + Newman | JavaScript | Good | Good (already using Postman) | Medium | 4/5 |

**Recommendation:** Supertest + Jest

**Rationale:**
- Same language as the backend team
- Can test Express app directly (fast, no server needed)
- Excellent CI/CD integration
- Team already knows JavaScript
- Postman can still be used for manual/exploratory testing

**Alternative:** Postman + Newman for testers who prefer GUI, with Supertest for developer-written tests.

---

## Task 4: Security Test Plan

**Question:** Design security tests for the ShopOnline API.

**Model Answer:**

**Authentication Tests:**
| Test | Expected |
|------|----------|
| Missing token | 401 |
| Invalid token | 401 |
| Expired token | 401 |
| Valid token | 200 |
| Token for deleted user | 401 |

**Authorization Tests:**
| Test | Expected |
|------|----------|
| User A accesses User B's orders | 403 |
| Regular user accesses admin endpoint | 403 |
| Admin accesses any user's orders | 200 |

**Input Validation Tests:**
| Test | Payload | Expected |
|------|---------|----------|
| SQL injection | `{"name": "'; DROP TABLE orders; --"}` | 400 (sanitized or rejected) |
| XSS | `{"name": "<script>alert(1)</script>"}` | 400 or sanitized |
| Oversized payload | 10MB JSON | 413 Payload Too Large |
| Path traversal | `GET /files/../../etc/passwd` | 404 or 400 |

**Sensitive Data Tests:**
- Verify passwords are never returned in responses
- Verify credit card numbers are masked
- Verify internal IDs are not exposed unnecessarily

---

## Task 5: CI/CD Integration

**Question:** Design a CI/CD pipeline for API testing at ShopOnline.

**Model Answer:**

```yaml
name: ShopOnline API Pipeline

on: [push, pull_request]

jobs:
  lint-and-unit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run lint
      - run: npm run test:unit

  api-smoke-tests:
    runs-on: ubuntu-latest
    needs: lint-and-unit
    services:
      postgres:
        image: postgres:14
        env:
          POSTGRES_DB: test
          POSTGRES_PASSWORD: test
      redis:
        image: redis:7
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run db:migrate:test
      - run: npm run start:test &
      - run: npx wait-on http://localhost:3000/health
      - run: npm run test:api:smoke
      - run: npm run test:api:contract

  api-regression-tests:
    runs-on: ubuntu-latest
    needs: api-smoke-tests
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run db:migrate:test
      - run: npm run start:test &
      - run: npm run test:api:regression

  performance-smoke:
    runs-on: ubuntu-latest
    needs: api-smoke-tests
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run start:test &
      - run: npm run test:api:performance
```

**Quality Gates:**
- Lint and unit tests: must pass
- API smoke tests: must pass (block merge)
- Contract tests: must pass
- Regression tests: must pass before staging deploy
- Performance: p95 < 500ms, error rate < 0.1%

---

## Task 6: Metrics and Reporting

**Question:** Define KPIs to measure the success of the API testing initiative.

**Model Answer:**

| KPI | Current | Target (6 months) |
|-----|---------|------------------|
| Production incidents (API-related) | 2-3/month | < 1/month |
| API test automation coverage | 10% | 80% |
| API smoke test execution time | Manual (hours) | < 5 minutes |
| Regression test suite time | N/A | < 30 minutes |
| Security vulnerabilities found in production | Unknown | 0 |
| API documentation accuracy | 60% | 95% |
| Contract test coverage | 0% | 100% of consumer-provider pairs |
