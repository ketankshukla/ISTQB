# Case Study 1 — Legacy Automation Remediation

## Context

You are the Test Automation Lead for FinanceHub, a financial services company. The company has:
- 200-person IT department, 15 testers, 3 TAEs
- A 5-year-old UI automation suite of 800 tests built with an outdated commercial record/replay tool
- The suite takes 6 hours to run and has 35% flakiness
- Tests break every time the UI changes; the team spends 60% of automation time on fixes
- The vendor announced end-of-life for the tool in 18 months
- Technology: Java backend, Angular frontend, REST APIs, Oracle database

## Task 1: Assessment and Root Cause Analysis

**Question:** Analyze the legacy automation problems and identify root causes.

**Model Answer:**

**Symptoms:**
- 35% flakiness — tests fail without SUT changes
- 6-hour execution time — too slow for CI/CD
- 60% maintenance time — unsustainable
- Vendor end-of-life — tool will become unsupported

**Root Causes:**

| Symptom | Root Cause |
|---------|-----------|
| Flakiness | Record/replay creates brittle scripts; no abstraction; fixed sleeps; no data isolation |
| Slow execution | Too many UI tests (inverted pyramid); no parallel execution; heavy database operations |
| High maintenance | Locators embedded in every script; no Page Object Model; tool does not support modern Angular |
| Vendor risk | Single-vendor dependency; no open-source alternative considered |

**Additional Issues:**
- Tests are not under version control
- No CI/CD integration — tests run manually
- No logging or screenshots on failure
- Test data is shared across tests, causing conflicts
- No one knows what 200 of the 800 tests actually verify

---

## Task 2: Remediation Strategy

**Question:** Design a strategy to remediate the legacy automation.

**Model Answer:**

**Selected Strategy:** Selective Migration with Parallel Build

**Rationale:**
- Full rewrite is too risky for 800 tests
- Incremental refactoring is insufficient because the tool itself is end-of-life
- Need to migrate to a new tool while maintaining some coverage

**Phase 1: Assessment and Tool Selection (Month 1-2)**
- Audit all 800 tests — identify which are high-value, medium-value, or obsolete
- Evaluate 3 candidate tools (Selenium + Java, Cypress, Playwright)
- Conduct PoC with top 2 tools
- Select tool based on Angular support, team skills, and CI/CD integration

**Phase 2: Framework Design (Month 2-3)**
- Design new TAS with 3-layer architecture
- Implement Page Object Model for all Angular components
- Create API test layer for backend validation
- Set up CI/CD pipeline with Jenkins

**Phase 3: High-Value Migration (Months 4-8)**
- Migrate 150 highest-value tests first (smoke tests, critical paths)
- Run old and new suites in parallel
- Target: 150 tests migrated, stable, passing

**Phase 4: Medium-Value Migration (Months 9-14)**
- Migrate 300 medium-value tests
- Retire 200 obsolete or low-value tests
- Remaining 150 tests stay in old tool until end-of-life

**Phase 5: Retirement (Month 15-18)**
- Complete migration of remaining 150 tests or retire
- Decommission old tool
- Full team training on new TAS

---

## Task 3: Framework Architecture

**Question:** Design the new TAS architecture for FinanceHub.

**Model Answer:**

**Tool Stack:**
- **UI Tests:** Playwright (best Angular support, auto-waiting, fast)
- **API Tests:** RestAssured (Java)
- **Test Runner:** JUnit 5 + TestNG
- **BDD:** Cucumber for stakeholder-readable scenarios
- **CI/CD:** Jenkins
- **Reporting:** Allure + custom dashboard

**Three-Layer Architecture:**

```
Test Scripts (Cucumber/Gherkin + JUnit)
    |
Business Actions (CheckoutWorkflow, LoginWorkflow)
    |
Page Objects / API Clients (Playwright page classes, RestAssured clients)
    |
System Under Test (Angular frontend, Java backend, Oracle DB)
```

**Key Design Decisions:**
- Page Object Model for all UI interaction
- API tests for business logic validation (faster than UI)
- Data isolation: each test creates its own test user
- Explicit waits (Playwright auto-waiting eliminates fixed sleeps)
- Parallel execution: 4 workers in CI

---

## Task 4: Metrics and Success Criteria

**Question:** Define KPIs to measure the success of the remediation.

**Model Answer:**

| KPI | Before | Target (18 months) | Measurement |
|-----|--------|-------------------|-------------|
| Flakiness | 35% | < 2% | % of tests with inconsistent results |
| Execution time | 6 hours | < 30 minutes | Full regression suite time |
| Maintenance effort | 60% | < 25% | % of automation time spent on fixes |
| Tests migrated | 0% | 100% | % of valuable tests in new TAS |
| Coverage confidence | Low | High | % of critical paths covered |
| CI integration | None | Every commit | Frequency of automated runs |
| Defect escape rate | Unknown | < 5% | Defects found in production vs. testing |

---

## Task 5: Risk Mitigation

**Question:** Identify risks in the remediation plan and mitigation strategies.

**Model Answer:**

| Risk | Impact | Mitigation |
|------|--------|------------|
| Migration takes longer than 18 months | Vendor support ends before completion | Prioritize critical tests; negotiate vendor extension |
| Team lacks Playwright skills | Poor quality new TAS | Hire 1 experienced TAE; train existing team |
| Parallel maintenance is too expensive | Budget overrun | Phase out old tool early for non-critical tests |
| New TAS has its own issues | Replacing one problem with another | Pilot with one team before full rollout |
| Business pressure to ship features | No time for remediation | Reserve 20% of sprint capacity for TAS work |
| 200 tests have unknown purpose | Risk of losing coverage | Review each unknown test; if no one knows its purpose, retire it |
