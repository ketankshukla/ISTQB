# Chapter 3 — Shift-Left Testing Practices: Lessons

---

## 3.1 Shift-Left Testing

### What is Shift-Left?

Shift-left testing moves testing activities earlier in the development lifecycle — from after coding to during requirements, design, and coding phases.

### Benefits

| Aspect | Traditional (Shift-Right) | Shift-Left |
|--------|---------------------------|------------|
| Defect cost | High (found late) | Low (found early) |
| Feedback speed | Days or weeks | Minutes or hours |
| Rework | Significant | Minimal |
| Team collaboration | Siloed | Integrated |

### Shift-Left Activities

- **Requirements phase:** Review acceptance criteria, identify ambiguities
- **Design phase:** Review architecture for testability, identify integration points
- **Coding phase:** TDD, static analysis, code review
- **Pre-commit:** Pre-commit hooks for linting and formatting
- **Commit:** Automated unit tests in CI

---

## 3.2 TDD and BDD

### Test-Driven Development (TDD)

**Cycle:**
1. Write a failing test
2. Write minimal code to pass the test
3. Refactor while keeping tests green

**Benefits in DevOps:**
- Fast feedback on code changes
- High unit test coverage by design
- Safe refactoring with regression protection

### Behavior-Driven Development (BDD)

**Format:** Given-When-Then scenarios written in business language

```gherkin
Feature: User Registration

  Scenario: Successful registration
    Given a new user with valid email "user@example.com"
    When they submit the registration form
    Then an account is created
    And a confirmation email is sent
```

**Benefits in DevOps:**
- Shared understanding between business, dev, and QA
- Living documentation that never goes stale
- Automated acceptance tests from specifications

### BDD Tools

| Tool | Language/Platform |
|------|-------------------|
| Cucumber | Multi-language |
| SpecFlow | .NET |
| Behave | Python |
| JBehave | Java |

---

## 3.3 Contract Testing

### Purpose

Contract testing verifies that services can communicate with each other by testing the contracts (API agreements) between consumer and provider.

### How It Works

**Consumer-driven:**
1. Consumer defines expected request/response
2. Contract is shared with provider
3. Provider verifies it can satisfy the contract
4. Both sides test independently

### Tools

| Tool | Framework | Notes |
|------|-----------|-------|
| **Pact** | Multi-language | Most popular contract testing framework |
| **Spring Cloud Contract** | Java/JVM | Consumer and provider in JVM ecosystem |
| **PactFlow** | SaaS | Managed Pact broker with CI/CD integration |

### Example

```json
{
  "consumer": "order-service",
  "provider": "payment-service",
  "interactions": [{
    "description": "charge credit card",
    "request": {
      "method": "POST",
      "path": "/charge",
      "body": { "amount": 100, "currency": "USD" }
    },
    "response": {
      "status": 200,
      "body": { "transactionId": "abc123", "status": "approved" }
    }
  }]
}
```

### When to Use

- **Microservices:** Many inter-service dependencies
- **Parallel development:** Consumer and provider developed simultaneously
- **Independent deployment:** Services deploy without full integration test suite

---

## 3.4 Static Analysis and Linters

### Static Application Security Testing (SAST)

- Analyzes source code for vulnerabilities without execution
- Runs in CI pipeline on every commit
- Detects: SQL injection, XSS, hardcoded secrets, unsafe dependencies

### Linters and Formatters

| Tool | Purpose |
|------|---------|
| **ESLint** | JavaScript/TypeScript code quality |
| **SonarQube** | Multi-language quality and security analysis |
| **Checkstyle** | Java style and bug pattern checking |
| **Black/Ruff** | Python formatting and linting |

### Integration in Pipeline

```yaml
stages:
  - lint
  - sast
  - build
  - test

lint:
  script:
    - eslint src/
    - black --check src/

sast:
  script:
    - sonar-scanner
  allow_failure: false
```

---

## 3.5 Code Review and Pair Programming

### Code Review Practices

- **Required before merge:** All code reviewed by at least one other developer
- **Checklist:** Security, performance, test coverage, maintainability
- **Automated support:** Static analysis results included in PR
- **Timebox:** Reviews completed within 4 hours

### Pair Programming

- **Driver:** Writes code
- **Navigator:** Reviews and strategizes
- **Benefits:** Real-time code review, knowledge sharing, fewer defects

### Mob Programming

- Whole team works on same code together
- One driver, rest navigate
- Excellent for complex architectural decisions

---

## Worked Examples

### Worked Example 1: Shift-Left Implementation

**Scenario:** A team finds 40% of defects during system testing. They want to shift left.

**Current state:**
- Requirements: No QA involvement
- Coding: Tests written after code
- System test: 2-week cycles, many regressions

**Shift-left changes:**
1. QA joins sprint planning to review acceptance criteria
2. Developers adopt TDD (unit tests before code)
3. Contract tests added for microservice integrations
4. Static analysis runs on every PR
5. Code review checklist includes test coverage check

**Result:** Defects found in system test drop to 15%; overall quality improves.

### Worked Example 2: Contract Test Design

**Scenario:** An e-commerce order service calls a payment service.

**Consumer test (Order Service):**
```python
@pact.consumer('order-service')
@pact.provider('payment-service')
def test_charge_credit_card(pact):
    (pact
     .given('payment gateway is available')
     .upon_receiving('a charge request')
     .with_request('POST', '/charge', body={'amount': 50, 'currency': 'USD'})
     .will_respond_with(200, body={'status': 'approved'}))
    
    result = payment_client.charge(50, 'USD')
    assert result.status == 'approved'
```

**Provider verification (Payment Service):**
```python
@pact.provider('payment-service')
def test_honors_contract():
    pact.verify()
```

### Worked Example 3: Static Analysis Gate

**Scenario:** SonarQube quality gate configuration.

| Metric | Threshold | Rationale |
|--------|-----------|-----------|
| Coverage | ≥ 80% | Minimum test coverage |
| Duplicated lines | ≤ 3% | Maintainability |
| Critical issues | 0 | Security and reliability |
| Major issues | ≤ 5 | Technical debt management |
| Security rating | A | No known vulnerabilities |

**Pipeline result:**
- PR passes all checks → allowed to merge
- PR fails coverage (75%) → developer adds tests
- PR introduces critical issue → immediate fix required
