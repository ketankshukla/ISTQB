# Chapter 2 — Scaling Agile Testing: Lessons

---

## 2.1 Multi-Team Test Planning

### Planning Levels

| Level | Horizon | Focus |
|-------|---------|-------|
| **Portfolio** | 6-12 months | Strategic themes, investment priorities |
| **Program (PI)** | 8-12 weeks | Feature delivery, team allocation |
| **Team Sprint** | 1-4 weeks | Story delivery, team-level testing |

### Test Planning in PI Planning

**Inputs:**
- Feature definitions with acceptance criteria
- Known dependencies and risks
- Previous PI quality metrics

**Outputs:**
- Team-level test objectives
- Integration test plan
- Environment needs
- Regression test scope

### Cross-Team Test Coordination

| Mechanism | Purpose |
|-----------|---------|
| **Scrum of Scrums** | Identify cross-team issues and dependencies |
| **Test sync meetings** | Align test approaches, share environments |
| **System demos** | Validate integrated functionality |
| **Joint retrospectives** | Improve cross-team processes |

---

## 2.2 Integration Testing at Scale

### Levels of Integration

| Level | Scope | Owner |
|-------|-------|-------|
| **Component** | Within team boundaries | Team |
| **System** | Across teams within ART | System Team or rotating teams |
| **Solution** | Across ARTs | Solution Train or dedicated integration team |
| **End-to-end** | Full user journey | QA lead or system team |

### Integration Testing Strategy

| Approach | When to Use |
|----------|-------------|
| **Continuous integration** | All teams merge frequently; automated build verifies |
| **Feature toggles** | Incomplete features merged but hidden |
| **Branch-based** | Features developed on branches, merged when complete |
| **Contract tests** | API consumers and providers verify independently |

### Integration Environment

- Mirror production as closely as possible
- Automated deployment from main branch
- Single source of truth (not multiple "almost identical" environments)

---

## 2.3 Environment Management

### Challenges at Scale

| Challenge | Impact |
|-----------|--------|
| **Environment contention** | Teams block each other; testing delayed |
| **Configuration drift** | "It works on my environment" issues |
| **Test data conflicts** | Team A deletes data Team B needs |
| **Slow provisioning** | Days to get a new environment |

### Solutions

| Solution | Implementation |
|----------|----------------|
| **Ephemeral environments** | Spin up per feature branch; destroy after merge |
| **Environment booking** | Calendar system for shared environments |
| **Data virtualization** | Synthetic data per test run |
| **Infrastructure as Code** | Same scripts provision all environments |

---

## 2.4 Definition of Done at Scale

### Team DoD vs System DoD

| Level | Includes |
|-------|----------|
| **Team DoD** | Unit tests pass, code reviewed, feature tested, CI green |
| **System DoD** | Integration tests pass, system tests pass, performance acceptable |
| **Release DoD** | Regression suite passes, security scan clean, documentation updated |

### Maintaining DoD Consistency

- Define baseline DoD centrally
- Teams can add team-specific criteria
- Review and evolve DoD in retrospectives
- Enforce via CI/CD gates

---

## 2.5 Dependency Management

### Types of Dependencies

| Type | Example | Mitigation |
|------|---------|------------|
| **Technical** | Team A's API needed by Team B | Mock APIs, contract tests, early integration |
| **Functional** | Feature X must release before Feature Y | Feature toggles, decoupled design |
| **Resource** | Shared test environment | Booking system, ephemeral environments |
| **Expertise** | Only one person knows a component | Knowledge sharing, pairing |

### Visualizing Dependencies

- Dependency boards in PI planning
- Dependency matrices
- Value stream mapping

---

## 2.6 Regression Strategy at Scale

### Regression Types

| Type | Scope | Frequency |
|------|-------|-----------|
| **Team regression** | Team's features | Every sprint |
| **ART regression** | All ART features | Every PI or release |
| **Full regression** | All products | Major releases |

### Automation Strategy

| Layer | Coverage | Ownership |
|-------|----------|-----------|
| **Unit** | 80%+ per team | Development team |
| **Integration** | Key APIs and services | Team or System Team |
| **System/E2E** | Critical user journeys | System Team or QA |

---

## Worked Examples

### Worked Example 1: PI Test Planning

**Scenario:** Three teams building an e-commerce platform.

**Team A:** Checkout and payment
**Team B:** Product catalog and search
**Team C:** User accounts and profiles

**PI Test Objectives:**
| Objective | Teams | Verification |
|-----------|-------|--------------|
| End-to-end purchase flow | A + B + C | System demo |
| Search results lead to valid products | B | Sprint test + contract test |
| Payment security compliance | A | Security scan + audit |
| Account creation triggers welcome email | C | Event-driven test |

**Dependencies:**
- Team A needs Team B's product API (contract tests mitigate)
- All teams need shared test environment (ephemeral instances)

### Worked Example 2: Environment Strategy

**Scenario:** 8 teams sharing 3 test environments.

**Current:** Chaos, conflicts, delays

**Improved:**
| Environment | Purpose | Provisioning |
|-------------|---------|--------------|
| **CI/Test** | Automated tests on every commit | Docker per pipeline run |
| **Integration** | Team integration testing | Terraform, booked via calendar |
| **Staging** | Pre-release validation | Mirror production, weekly refresh |
| **Ephemeral** | Feature-specific testing | Spin up per branch via Kubernetes |

### Worked Example 3: DoD Evolution

**Initial DoD:**
- [ ] Code committed
- [ ] Unit tests pass

**After 3 months:**
- [ ] Code committed and reviewed
- [ ] Unit tests pass (80% coverage)
- [ ] Feature tested by team
- [ ] CI build green
- [ ] No critical static analysis issues

**After 12 months:**
- [ ] All above plus:
- [ ] Integration tests with adjacent teams pass
- [ ] Accessibility scan passes
- [ ] Performance regression < 5%
- [ ] Documentation updated
