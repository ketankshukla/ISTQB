# Case Study 3 — BDD and CI/CD Implementation

## Context

You are the Test Lead for ShopStream, an e-commerce company rebuilding its checkout system. The team of 4 developers and 1 tester is adopting BDD and CI/CD for the first time.

## Current State

- No test automation — all testing is manual.
- Releases happen monthly with a 2-week manual regression period.
- Requirements are communicated via email and updated in a shared Word document.
- The last release had 23 defects found by customers in the first week.
- Developers write code for 3 weeks, then "throw it over the wall" to the tester.

## Goals

1. Implement BDD with Cucumber for acceptance testing.
2. Implement CI/CD with automated build and test pipeline.
3. Reduce production defects by 80%.
4. Enable bi-weekly releases.

---

## Task 1: BDD Implementation Plan

Design a step-by-step plan for introducing BDD to the team.

**Model Answer:**

**Phase 1: Education (Week 1-2)**
- Train the team on BDD concepts: Given-When-Then, feature files, step definitions.
- Practice session: Convert 3 existing requirements into BDD scenarios.
- Tool setup: Install Cucumber, configure IDE plugins.

**Phase 2: Pilot (Week 3-4)**
- Select one user story for the pilot.
- Run a Three Amigos meeting to define acceptance criteria in Given-When-Then.
- Developer writes step definitions, tester reviews scenarios.
- Run Cucumber tests locally.

**Phase 3: Integration (Week 5-6)**
- Integrate Cucumber tests into CI pipeline.
- Run BDD tests automatically on every commit.
- Expand to all new stories.

**Phase 4: Refinement (Week 7-8)**
- Review scenario quality: Are they clear? Maintainable? Business-readable?
- Refactor step definitions to reduce duplication.
- Add scenario outlines for data-driven testing.

**Example BDD Scenario for Pilot Story:**

**Story:** "As a customer, I want to apply a promo code so that I get a discount."

```gherkin
Feature: Promo Code Application

  Scenario: Valid promo code
    Given the cart total is $100
    When the customer applies promo code "SAVE20"
    Then the cart total should be $80
    And a success message should be displayed

  Scenario: Expired promo code
    Given the cart total is $100
    When the customer applies expired promo code "SAVE20"
    Then an error "Promo code expired" should be displayed
    And the cart total should remain $100

  Scenario Outline: Invalid promo codes
    Given the cart total is $100
    When the customer applies promo code "<code>"
    Then an error "<message>" should be displayed

    Examples:
      | code    | message          |
      | INVALID | Invalid code     |
      |         | Code required    |
      | EXPIRED | Code expired     |
```

---

## Task 2: CI/CD Pipeline Design

Design a CI/CD pipeline for the team.

**Model Answer:**

**Pipeline Stages:**

```
Commit → Build → Unit Tests → Integration Tests → BDD Tests → Code Analysis → Deploy to Staging → E2E Tests → Production Deploy
```

**Stage Details:**

**1. Build (2 minutes)**
- Compile the application
- Check code style (linting)
- Fail if compilation errors

**2. Unit Tests (3 minutes)**
- Run all developer unit tests (JUnit)
- Target: 80%+ code coverage
- Fail if any test fails or coverage drops below threshold

**3. Integration Tests (5 minutes)**
- Start test database (Docker)
- Run API tests (REST Assured)
- Verify service interactions
- Fail if any integration test fails

**4. BDD Tests (8 minutes)**
- Run Cucumber acceptance tests
- Test against staging-like environment
- Generate HTML report
- Fail if any BDD test fails

**5. Code Analysis (3 minutes)**
- Static analysis (SonarQube)
- Security scan (OWASP dependency check)
- Fail if critical issues found

**6. Deploy to Staging (2 minutes)**
- Deploy to staging environment
- Run smoke tests
- Verify deployment health

**7. E2E Tests (15 minutes) — Nightly**
- Run critical path UI tests (Selenium)
- Cross-browser testing (Chrome, Firefox, Safari)
- Report results to team

**8. Production Deploy (Manual Gate)**
- Product owner approves release
- Blue-green deployment (zero downtime)
- Run production smoke tests
- Monitor for 30 minutes

**Pipeline Policies:**
- Build must pass all stages 1-5 before merging to main branch.
- Stage 6 (staging) runs on every merge to main.
- Stage 7 (E2E) runs nightly and before release.
- Stage 8 (production) requires manual approval.

---

## Task 3: Measuring Success

Define metrics to track the effectiveness of BDD and CI/CD adoption.

**Model Answer:**

| Metric | Baseline (Before) | Target (After 3 Months) | Measurement Method |
|--------|------------------|------------------------|-------------------|
| Production defects | 23 per release | <5 per release | Customer support tickets |
| Defect escape rate | High | <10% defects escape sprint | Defect tracking system |
| Time to detect defect | 2-4 weeks | <24 hours | CI pipeline + defect logs |
| Time to fix defect | 3-5 days | <4 hours | Sprint tracking |
| Release frequency | Monthly | Bi-weekly | Release calendar |
| Regression time | 2 weeks manual | 30 minutes automated | CI pipeline duration |
| BDD scenario coverage | 0% | 90% of new stories | Feature file count vs. story count |
| CI build success rate | N/A | >95% | CI server metrics |

**Leading Indicators (predict future quality):**
- CI build success rate (declining = growing instability)
- Unit test coverage (low = more manual testing needed)
- BDD scenario clarity (unclear scenarios = misunderstood requirements)

**Lagging Indicators (measure past quality):**
- Production defects
- Customer satisfaction
- Time to fix defects

---

## Task 4: Addressing Common Challenges

For each challenge, propose a mitigation strategy.

**Challenge 1: Developers resist writing BDD scenarios because "it's not coding."**

**Mitigation:**
- Show that BDD scenarios prevent rework. Calculate hours saved by catching misunderstood requirements before coding.
- Pair developers with testers to write scenarios together initially.
- Start with one story and show the team how clear acceptance criteria prevented a defect.
- Recognize and reward developers who write good scenarios.

**Challenge 2: BDD tests are slow and flaky, causing CI to fail randomly.**

**Mitigation:**
- Audit flaky tests: Are they testing at the wrong level? (Move UI-level logic tests to API tests.)
- Use test data isolation: Each test creates and cleans up its own data.
- Replace Thread.sleep() with explicit waits.
- Use in-memory database for integration tests where possible.
- Quarantine flaky tests, fix them, then re-enable.

**Challenge 3: Product owner doesn't have time for Three Amigos meetings.**

**Mitigation:**
- Keep Three Amigos meetings short (15 minutes per story).
- Schedule them during existing ceremonies (e.g., after sprint planning, during story refinement).
- Demonstrate the value: Show how one Three Amigos meeting prevented a misunderstood requirement that would have taken 2 days to fix.
- Share written scenarios asynchronously for review if real-time meetings are impossible.

**Challenge 4: The team wants to revert to manual regression because "automation takes too long to create."**

**Mitigation:**
- Calculate ROI: 2 weeks of manual regression per release × 6 people = 480 hours/month. Automation development: 160 hours upfront + 20 hours/month maintenance. Break-even in 2 months.
- Start small: Automate the most critical path first (e.g., checkout flow) to show immediate value.
- Track "time saved" metric and celebrate milestones ("This month, automation saved us 100 hours of manual testing").
- Show defect prevention: Automated tests catch regressions that manual testing used to miss.
