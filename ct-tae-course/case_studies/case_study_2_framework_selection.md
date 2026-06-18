# 📂 Case Study 2 — Framework Selection and TAA Design

## ⭐ Context

You are the TAE for HealthTrack, a healthcare software company building a patient portal.

**SUT:**
- Web frontend: React + TypeScript
- Mobile apps: iOS (Swift) and Android (Kotlin)
- Backend: Node.js REST APIs
- Database: PostgreSQL
- Compliance: HIPAA (data privacy and security)

**Team:**
- 8 developers, 2 testers, 1 TAE (you)
- Mixed skills: developers know TypeScript; testers have limited coding experience
- No existing automation
- Releases: every 2 weeks

**Requirements:**
- Automate regression for web, mobile, and API
- Must be maintainable (frequent UI changes expected)
- Must integrate with GitHub Actions CI/CD
- Testers need to review and understand automated tests
- Must handle HIPAA-sensitive test data securely

## 🛠️ Task 1: Tool Evaluation

**Question:** Evaluate and select tools for web, mobile, and API testing.

**Model Answer:**

**Evaluation Matrix:**

| Tool | Web | Mobile | API | TypeScript | CI/CD | Cost | Score |
|------|-----|--------|-----|------------|-------|------|-------|
| Playwright | 5 | 3 | 3 | 5 | 5 | Free | 4.2 |
| Cypress | 5 | 1 | 3 | 5 | 5 | Free | 3.8 |
| Appium | 3 | 5 | 3 | 3 | 4 | Free | 3.6 |
| Detox | 2 | 5 | 2 | 4 | 4 | Free | 3.4 |
| Supertest | 1 | 1 | 5 | 5 | 5 | Free | 3.4 |

**Selection:**
- **Web:** Playwright (best React support, auto-waiting, cross-browser, TypeScript native)
- **Mobile:** Appium (cross-platform iOS/Android, integrates with existing stack)
- **API:** Supertest + Jest (same language as backend, fast, lightweight)

**Rationale:**
- Playwright's auto-waiting reduces flakiness
- TypeScript support matches team skills
- All tools integrate with GitHub Actions
- All are open-source (free, community support)

---

## 🎨 Task 2: TAA Design

**Question:** Design a Test Automation Architecture for HealthTrack.

**Model Answer:**

**TAA Layers:**

```
+---------------------------------+
|  Test Generation (BDD/Cucumber) |  <- Business-readable scenarios
+---------------------------------+
|  Test Definition (TypeScript)   |  <- Step definitions, test scripts
+---------------------------------+
|  Test Execution (Jest/Playwright|  <- Test runner, parallel execution
+---------------------------------+
|  Test Adaptation                |  <- Page Objects, API clients, DB helpers
|  (Playwright, Supertest, pg)   |
+---------------------------------+
|        System Under Test        |
+---------------------------------+
```

**Testware Structure:**
```
tests/
|-- e2e/
|   |-- pages/
|   |   |-- LoginPage.ts
|   |   |-- DashboardPage.ts
|   |   |-- PatientProfilePage.ts
|   |-- workflows/
|   |   |-- PatientRegistrationFlow.ts
|   |   |-- AppointmentBookingFlow.ts
|   |-- features/
|   |   |-- login.feature
|   |   |-- patientRegistration.feature
|   |-- step-definitions/
|   |   |-- login.steps.ts
|   |-- data/
|   |   |-- test-users.json
|   |   |-- test-patients.json
|-- api/
|   |-- clients/
|   |   |-- PatientApi.ts
|   |   |-- AppointmentApi.ts
|   |-- tests/
|   |   |-- patient.api.test.ts
|   |-- data/
|-- mobile/
|   |-- pages/
|   |-- tests/
|-- utils/
|   |-- DatabaseHelper.ts
|   |-- TestDataGenerator.ts
|   |-- AuthHelper.ts
```

**Abstraction Design:**
- **Page Objects:** One class per page; expose actions (not raw elements)
- **Workflow Objects:** Combine page objects into user journeys
- **API Clients:** Encapsulate all HTTP calls; handle authentication
- **Test Data:** Generated per test; no shared state

---

## 🗃️ Task 3: Test Data and HIPAA Compliance

**Question:** Design test data management that complies with HIPAA.

**Model Answer:**

**HIPAA Requirements:**
- No real patient data in test environments
- All PHI (Protected Health Information) must be encrypted
- Access to test data must be logged
- Test data must be de-identified

**Test Data Strategy:**

| Data Type | Strategy | HIPAA Compliant |
|-----------|----------|-----------------|
| Patient records | Synthetic data generated with faker.js | Yes — no real PHI |
| User accounts | Created via API with unique identifiers | Yes — fake data |
| Test images | Synthetic generated images | Yes — not real scans |
| Authentication | OAuth2 test tokens, no real credentials | Yes — test mode |

**Data Lifecycle:**
```
Before Each Test:
  1. Generate synthetic patient record
  2. Create via API (encrypted in transit)
  3. Use in test

After Each Test:
  1. Delete patient record via API
  2. Verify deletion
  3. Log access (audit trail)
```

**Environment Security:**
- Test database is separate from production
- Test database credentials stored in GitHub Secrets
- Test environments behind VPN
- Regular data purge (automated)

---

## 🔗 Task 4: CI/CD Integration

**Question:** Design a GitHub Actions pipeline for the automation suite.

**Model Answer:**

```yaml
name: HealthTrack Test Automation

on: [push, pull_request]

jobs:
  api-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run API tests
        run: npm run test:api
        env:
          TEST_DB_URL: ${{ secrets.TEST_DB_URL }}
      - name: Upload API test results
        uses: actions/upload-artifact@v3
        with:
          name: api-test-results
          path: test-results/api/

  web-tests:
    runs-on: ubuntu-latest
    needs: api-tests
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
      - name: Install Playwright
        run: npx playwright install
      - name: Run web tests
        run: npm run test:e2e
      - name: Upload Playwright report
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/

  coverage-report:
    runs-on: ubuntu-latest
    needs: [api-tests, web-tests]
    steps:
      - name: Download all artifacts
        uses: actions/download-artifact@v3
      - name: Generate combined coverage report
        run: npm run coverage:report
      - name: Upload to Codecov
        uses: codecov/codecov-action@v3
```

**Quality Gates:**
- API tests: 100% pass before web tests run
- Web tests: 100% pass before merge
- Coverage: >= 80% for new code
- No high/critical security vulnerabilities

---

## ⭐ Task 5: Pilot and Rollout

**Question:** Plan the pilot deployment and rollout strategy.

**Model Answer:**

**Pilot (Sprint 1-2):**
- Scope: Automate 20 critical smoke tests (login, patient search, appointment booking)
- Team: 1 developer + 1 tester + TAE
- Success criteria:
  - All 20 tests pass reliably (< 1% flakiness)
  - Execution time < 5 minutes
  - Testers can read and understand the Cucumber scenarios
  - CI integration works

**Evaluation:**
- Sprint retrospective on pilot
- Gather feedback from developers and testers
- Measure time saved vs. manual execution
- Refactor based on feedback

**Incremental Rollout (Sprint 3-10):**
- Sprint 3-4: Add API tests for core business logic (20 tests)
- Sprint 5-6: Add web regression tests (40 tests)
- Sprint 7-8: Add mobile smoke tests (iOS + Android, 20 tests)
- Sprint 9-10: Expand coverage, optimize execution

**Target State (End of Sprint 10):**
- 100 automated tests
- Full regression: < 15 minutes
- Flakiness: < 2%
- Maintenance effort: < 20%
- All tests integrated in CI/CD
