# 📂 Case Study 1 — Agile Transformation for Technical Testing

## ⭐ Context

You are the Technical Test Lead for BankConnect, a traditional bank transitioning from waterfall to agile. The bank's mobile banking app is developed by 4 teams (15 developers each, 3 testers per team). Current challenges:

- **Current state:** 3-month release cycles, 2 weeks of manual regression testing, frequent production defects
- **New target:** 2-week sprints, automated regression, daily deployments to staging
- **Team composition:** Mix of experienced testers (used to scripted testing) and junior developers (limited testing knowledge)
- **Technology:** Java backend, React Native mobile app, microservices architecture

## ♟️ Task 1: Agile Testing Strategy

**Question:** Design an agile testing strategy for BankConnect that addresses the transition challenges.

**Model Answer:**

**1. Testing Approach by Sprint Phase:**

| Sprint Phase | Testing Activities | Responsible |
|-------------|-------------------|-------------|
| Sprint Planning | ATDD workshop: define acceptance criteria and tests | Whole team |
| Days 1-3 | TDD for new features (developers) | Developers |
| Days 3-6 | Integration/API tests, test automation development | Technical testers |
| Days 6-8 | Exploratory testing of completed stories | Testers |
| Days 8-9 | Regression testing (automated + targeted manual) | Automation + testers |
| Day 10 | Sprint review demo, retrospective | Whole team |

**2. Test Automation Strategy:**
- **Unit tests:** TDD by developers, 80% coverage target
- **API tests:** RestAssured for Java backend, automated in CI
- **Mobile tests:** Appium for critical user journeys (smoke tests)
- **E2E tests:** Minimal (5-10 critical paths only)
- **Regression:** Automated suite runs nightly, smoke runs every build

**3. SBTM for Exploratory Testing:**
- Each tester runs 2 x 60-minute exploratory sessions per sprint
- Charters based on risk and new features
- Debriefs with test lead after each session

**4. CI/CD Integration:**
- Jenkins pipeline: build → unit tests → static analysis → integration tests → deploy to staging → smoke tests
- Quality gates: 100% unit test pass, 0 critical security issues, smoke tests pass

---

## ⭐ Task 2: TDD/BDD Implementation

**Question:** The backend team is new to TDD. Design a TDD training plan and first example.

**Model Answer:**

**Training Plan:**
- Week 1: TDD theory and Red-Green-Refactor cycle (2-hour workshop)
- Week 2: Pair programming with experienced TDD practitioner (3 days)
- Week 3: Team practices TDD on small stories with coaching
- Week 4: Retrospective on TDD adoption, adjust practices

**First TDD Example: Account Balance Check**

**Red:**
```java
@Test
public void balanceShouldNotBeNegative() {
    Account account = new Account(100);
    account.withdraw(150);
    assertEquals(0, account.getBalance()); // Should not allow negative
}
// FAILS: withdraw does not exist
```

**Green:**
```java
public void withdraw(int amount) {
    if (amount > balance) {
        throw new InsufficientFundsException();
    }
    balance -= amount;
}
// Test passes
```

**Refactor:**
- Extract validation logic
- Improve exception message
- Add tests for valid withdrawals

**BDD Scenario for the Same Feature:**
```gherkin
Given an account with balance $100
When the customer attempts to withdraw $150
Then the withdrawal should be rejected
And an "Insufficient funds" message should display
```

---

## 🎨 Task 3: CI/CD Pipeline Design

**Question:** Design a CI/CD pipeline for the mobile banking app.

**Model Answer:**

```
Stage 1: Build (3 min)
  - Compile Java microservices
  - Build React Native app
  - Run ESLint / Checkstyle
  - Gate: No compilation errors

Stage 2: Unit Tests (5 min)
  - Run all Java unit tests (JUnit)
  - Run React Native unit tests (Jest)
  - Generate coverage report (JaCoCo / Istanbul)
  - Gate: 100% pass, coverage >= 80%

Stage 3: Static Analysis (3 min)
  - SonarQube scan
  - Dependency vulnerability check (OWASP)
  - Gate: 0 critical/blocker issues

Stage 4: Integration Tests (8 min)
  - Deploy to Docker test environment
  - Run API tests (RestAssured)
  - Run contract tests
  - Gate: 100% pass

Stage 5: Security Scan (5 min)
  - SAST on backend code
  - DAST on staging API
  - Mobile app security scan
  - Gate: No high/critical vulnerabilities

Stage 6: Deploy to Staging (2 min)
  - Deploy to Kubernetes staging namespace
  - Run smoke tests
  - Gate: Smoke tests pass

Stage 7: Mobile Build & Test (10 min)
  - Build iOS and Android apps
  - Run Appium smoke tests on cloud devices
  - Gate: Smoke tests pass on both platforms

Stage 8: Manual QA Gate (Continuous Delivery)
  - QA approves staging build
  - Then deploy to app stores / production
```

**Metrics:**
- Pipeline duration target: < 40 minutes
- Deploy to staging: Every commit
- Deploy to production: Daily (after QA approval)

---

## ⚙️ Task 4: Test Automation Framework Selection

**Question:** Select and justify an automation framework for the mobile banking app.

**Model Answer:**

**Requirements:**
- Test both iOS and Android
- Support API testing for backend
- Integrate with Jenkins CI
- Support BDD (Given/When/Then)
- Maintainable by mixed-skill team

**Evaluation:**

| Framework | Mobile | API | CI | BDD | Maintainability |
|-----------|--------|-----|----|-----|----------------|
| Appium + Cucumber + RestAssured | Yes | Yes | Yes | Yes | High |
| Espresso + XCUITest | Platform-specific only | No | Yes | No | Medium |
| Detox | Yes | No | Yes | No | Medium |

**Recommendation:** Appium + Cucumber + RestAssured
- Appium: Cross-platform mobile testing
- Cucumber: BDD scenarios readable by business
- RestAssured: Java-based API testing
- All integrate with Jenkins
- Page Object Model for maintainability

---

## ⭐ Task 5: Measuring Success

**Question:** Define KPIs to measure the success of the agile transformation.

**Model Answer:**

| KPI | Before | Target | Measurement |
|-----|--------|--------|-------------|
| Release cycle | 3 months | 2 weeks | Time between production releases |
| Regression time | 10 days | 2 hours | Time to run full regression suite |
| Production defects | 15/month | < 3/month | Defects found in production |
| Test automation coverage | 10% | 80% | Code coverage by automated tests |
| Deployment frequency | Monthly | Daily to staging | Number of deployments |
| Lead time for changes | 2 months | < 1 week | Time from commit to production |
| Mean time to recovery | 8 hours | < 1 hour | Time to recover from production failure |
