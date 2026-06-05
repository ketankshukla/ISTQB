# Case Study 2 — Test Automation and CI/CD

## Context

You are the Technical Test Analyst for ShopFast, an e-commerce company. The team:
- 6 developers, 2 testers, 1 DevOps engineer
- Releases every 2 weeks (Sprint)
- React frontend, Node.js API, PostgreSQL database
- Current pain points:
  - 400 manual regression tests take 4 days
  - 30% of sprints are consumed by regression
  - Production bugs in checkout and payment flow
  - No automated deployment process

## Task 1: Test Automation Strategy

**Question:** Design a test automation strategy for ShopFast.

**Model Answer:**

**Current State Analysis:**
- 4 days of regression = 32 person-hours per sprint
- 30% of sprint = 6 days out of 20 consumed by regression
- Production bugs in critical paths (checkout, payment)

**Target State (6-month roadmap):**

**Month 1-2: Quick Wins**
- Automate 50 highest-priority smoke tests (checkout, login, search)
- Use Cypress for React frontend (developer-friendly)
- Use Jest for component/unit tests
- Run smoke tests in CI on every commit

**Month 3-4: Expand Coverage**
- Automate 150 API tests (Node.js + Jest/Supertest)
- Implement Page Object Model for UI tests
- Add visual regression testing for UI (Percy/Chromatic)
- Run full regression nightly

**Month 5-6: Mature State**
- 80% of regression suite automated
- Full regression runs in < 1 hour
- Parallel test execution across 4 workers
- Test data managed via API seeding

**Test Pyramid Target:**
- Unit/component tests: 500+ (Cypress component, Jest)
- API tests: 200 (Supertest)
- E2E tests: 50 (Cypress)

---

## Task 2: CI/CD Pipeline

**Question:** Design a CI/CD pipeline for ShopFast.

**Model Answer:**

**Pipeline (GitHub Actions):**

```yaml
name: ShopFast CI/CD

on: [push, pull_request]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint
        # Gate: No lint errors

      - name: Unit Tests
        run: npm run test:unit -- --coverage
        # Gate: 100% pass, coverage >= 80%

      - name: Component Tests
        run: npm run test:component
        # Gate: 100% pass

      - name: Build Application
        run: npm run build

      - name: Start Services
        run: docker-compose up -d db api

      - name: API Tests
        run: npm run test:api
        # Gate: 100% pass

      - name: E2E Smoke Tests
        run: npm run test:e2e:smoke
        # Gate: 100% pass

      - name: Security Scan
        run: npm audit --audit-level=high
        # Gate: No high/critical vulnerabilities

      - name: Deploy to Staging
        if: github.ref == 'refs/heads/main'
        run: npm run deploy:staging

      - name: Staging Smoke Tests
        if: github.ref == 'refs/heads/main'
        run: npm run test:smoke:staging
        # Gate: Smoke tests pass
```

**Quality Gates:**
| Stage | Criteria | Action if Failed |
|-------|----------|---------------|
| Lint | Zero errors | Block merge |
| Unit Tests | 100% pass, >= 80% coverage | Block merge |
| API Tests | 100% pass | Block merge |
| E2E Smoke | 100% pass | Block merge |
| Security | No high/critical vulnerabilities | Block merge |

**Deployment:**
- Staging: Automatic on main branch
- Production: Manual approval required (Continuous Delivery)
- Target: Move to Continuous Deployment after 3 months of stability

---

## Task 3: Test Data Management

**Question:** Design a test data strategy for the e-commerce platform.

**Model Answer:**

**Data Types:**
1. **User accounts:** Registration, login, profile, orders
2. **Products:** Catalog, inventory, pricing
3. **Orders:** Cart, checkout, payment, fulfillment
4. **Payment methods:** Credit cards, digital wallets

**Strategy:**

| Data Type | Strategy | Tool |
|-----------|----------|------|
| User accounts | API seeding: create unique user per test | Test fixture with cleanup |
| Products | Static seed data in test database | SQL seed scripts |
| Orders | API seeding: create order via checkout API | Test helper methods |
| Payment | Mock payment gateway (Stripe test mode) | Mock server |

**Example Test Fixture:**
```javascript
beforeEach(async () => {
  // Create isolated test data
  testUser = await api.createUser({
    email: `test-${uuid()}@example.com`,
    password: 'TestPass123!'
  });
  testProduct = await api.createProduct({
    name: 'Test Product',
    price: 29.99,
    stock: 100
  });
});

afterEach(async () => {
  // Cleanup regardless of test result
  await api.deleteUser(testUser.id);
  await api.deleteProduct(testProduct.id);
});
```

**Production Data:**
- NEVER use real customer data in test environments
- Use data masking/anonymization if copying production structure
- Use synthetic data generators (faker.js) for realistic test data

---

## Task 4: Handling the Test Pyramid

**Question:** ShopFast currently has 300 E2E tests and 50 unit tests. The E2E suite is flaky and slow. How do you fix this?

**Model Answer:**

**Problem Analysis:**
- 300 E2E tests = ice cream cone anti-pattern
- Flakiness indicates brittle UI tests
- Slow execution blocks CI/CD

**Remediation Plan:**

**Phase 1: Stabilize (Month 1)**
- Identify and fix the 20 flakiest tests
- Add stable data-testid attributes to UI elements
- Replace implicit waits with explicit condition checks
- Add retry logic for transient failures (with limits)

**Phase 2: Push Down (Months 2-3)**
- Convert 100 E2E tests to API tests (same business logic, faster, more reliable)
- Convert 50 E2E tests to component tests (Cypress component testing)
- Target: 150 E2E → 50 E2E, +100 API, +50 component

**Phase 3: Expand Unit (Months 3-4)**
- Add unit tests for business logic currently only tested via E2E
- Target: 50 unit → 300 unit tests

**Target Pyramid:**
- Unit/component: 350 tests (< 2 min)
- API: 200 tests (3 min)
- E2E: 50 tests (10 min)
- Total regression: < 15 minutes

---

## Task 5: Production Monitoring

**Question:** Design production monitoring for ShopFast.

**Model Answer:**

**Monitoring Stack:**
- **APM:** New Relic or Datadog (response times, error rates, throughput)
- **Error Tracking:** Sentry (JavaScript errors, API errors)
- **Uptime:** Pingdom (synthetic checks from multiple locations)
- **Logs:** ELK stack or Splunk (centralized logging)
- **Alerting:** PagerDuty (on-call rotation, escalation)

**Key Metrics:**

| Metric | Warning | Critical | Action |
|--------|---------|----------|--------|
| Checkout error rate | > 0.5% | > 2% | Alert, investigate |
| Payment success rate | < 95% | < 90% | Page on-call |
| Page load time (p95) | > 3s | > 5s | Investigate |
| API response time (p95) | > 500ms | > 2s | Investigate |
| Database connections | > 80% | > 95% | Scale or optimize |

**Synthetic Tests in Production:**
- Every 5 minutes: Login → Add to cart → Checkout (test mode)
- Every 5 minutes: Search → Product page → Verify content
- Alert if synthetic test fails 2 times in a row
