# CTFL v4.0 Exam Cheat Sheet

One-page reference for the day before / morning of your exam.

---

## Seven Testing Principles (K1)

1. Testing shows the presence of defects, not their absence
2. Exhaustive testing is impossible → use risk and priorities
3. Early testing saves time and money (shift-left)
4. Defects cluster together (Pareto) → 80% of defects in 20% of modules
5. Tests wear out (same tests find fewer new defects over time)
6. Testing is context-dependent (safety-critical vs e-commerce)
7. Absence-of-defects fallacy — finding no defects does not mean the system is useful

---

## Test Levels (K2)

| Level | Who | Focus | Environment |
|-------|-----|-------|-------------|
| Component (Unit) | Developers | Functions, classes | Dev environment |
| Integration | Developers / Testers | Interfaces, APIs | Integration env |
| System | Independent testers | End-to-end, requirements | Test environment |
| Acceptance | Business / Users | Fit for purpose, contracts | Pre-production / Production |

**Component integration** = within one system. **System integration** = between systems.

---

## Test Types (K2)

| Type | Verifies |
|------|----------|
| Functional | What the system does (requirements, specs) |
| Non-functional | How well it does it (performance, usability, security, reliability) |
| White-box | Internal structure (code, architecture) |
| Change-related | Regression (no new defects) vs Confirmation (fix worked) |

---

## Static Testing (K2/K3)

- **Reviews**: Manual examination of work products (requirements, code, tests)
  - Informal: no process, no documentation
  - Walkthrough: author-led, knowledge transfer
  - Technical review: peer review with defined roles
  - Inspection: most formal, rules-based, moderator-led, metrics collected
- **Static analysis**: Tool-based code examination (no execution)
  - Finds: unreachable code, unused variables, security vulnerabilities, coding standard violations

**Review roles**: Manager (decides), Moderator (runs), Author (owns), Reviewer (finds), Scribe (records)

---

## Test Techniques (K3 — Expect to Calculate)

### Equivalence Partitioning (EP)
- Divide inputs into classes where system behaves the same way
- Valid partitions + Invalid partitions
- Pick ONE value from each partition

### Boundary Value Analysis (BVA)
- Test at the boundaries: min, min+1, max, max-1
- 2-value (min, max) vs 3-value (min-1, min, max, max+1) — ISTQB uses **2-value (min, max)** as standard BVA

### Decision Table Testing
- Conditions (yes/no) → Actions
- Full table = 2^n rules for n binary conditions
- Collapse rules with "don't care" (-)

### State Transition Testing
- States + Events + Transitions + Actions
- **0-switch**: single transition coverage
- **1-switch**: pairs of consecutive transitions (n-1 pairs for n transitions)

### Use Case Testing
- Follows user goals (actor + flow: main + alternatives + exceptions)

---

## Coverage Types (K2)

| Coverage | What it measures |
|----------|------------------|
| Statement | % of executable statements executed |
| Decision / Branch | % of decision outcomes (true/false) executed |
| Modified Condition/Decision (MC/DC) | Each condition independently affects the decision outcome |

**100% statement coverage does NOT mean 100% decision coverage.**

---

## Test Management (K2)

### Four Test Activities
1. Test planning
2. Test monitoring and control
3. Test analysis
4. Test design
5. Test implementation
6. Test execution
7. Test completion

**Test estimation techniques**: Expert-based ( Delphi / Wideband ), Past-project-based (estimating by analogy), Metrics-based (formula)

### Risk-Based Testing
- Product risks: what might go wrong with the software (defects, failures)
- Project risks: what might go wrong with the project (staffing, schedule, tools)
- Likelihood x Impact = Priority

### Defect Reporting (must contain)
- Title / Summary
- Description / Steps to reproduce
- Expected result
- Actual result
- Severity / Priority
- Environment
- Attachments

### Exit Criteria (when to stop testing)
- Test coverage achieved
- Defect density below threshold
- All severity 1 defects resolved
- Budget / time exhausted

---

## Configuration Management (K2)

- Version control of all test items
- Traceability between requirements → tests → defects
- Baselines: approved versions of work products

---

## Test Tools (K2)

| Category | Examples |
|----------|----------|
| Test management | Jira, TestRail, Zephyr, qTest |
| Static testing | SonarQube, ESLint, PMD |
| Test design | Test data generators, combinatorial tools |
| Test execution | Selenium, JUnit, Postman, JMeter |
| Performance | JMeter, LoadRunner, Gatling |
| Coverage | JaCoCo, Istanbul, Coverage.py |

**Pilot project before company-wide tool adoption.**

---

## Key Formulas

| Metric | Formula |
|--------|---------|
| Test coverage | (Items tested / Total items) x 100 |
| Defect density | Defects / Size (KLOC, function points, story points) |
| Defect removal efficiency | Defects found in test / (Defects found in test + Defects found in production) |
| Pass rate | (Tests passed / Total tests executed) x 100 |

---

## Exam Tactics

- **40 questions, 60 minutes** = 90 seconds per question
- **K1 (remember)**: Straight recall — don't overthink
- **K2 (understand)**: Explain / compare / classify
- **K3 (apply)**: Calculate / design — show your work on scrap paper
- **Best single answer**: Only one is fully correct; others are partially true but flawed
- **Eliminate**: Cross out the two obviously wrong answers first
- **Flag and move**: Don't spend >2 min on one question
- **Review flagged questions** in the last 5 minutes

---

## Common Traps on Exam Day

- "Testing proves correctness" → FALSE (principle 1)
- "100% coverage = no defects" → FALSE (coverage != quality)
- "System testing is done by developers" → FALSE (independent testers)
- "Acceptance testing checks code works" → FALSE (checks fit for purpose)
- "Reviews find defects only" → FALSE (also improve understanding, consistency)
- "Static analysis executes code" → FALSE (no execution)
- "BVA tests only valid boundaries" → FALSE (invalid boundaries too)
- "Exit criteria are defined during test execution" → FALSE (defined during planning)
