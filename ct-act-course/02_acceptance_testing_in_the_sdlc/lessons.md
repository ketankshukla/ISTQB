# Chapter 2 — Acceptance Testing in the SDLC: Lessons

---

## 2.1 Acceptance Testing in Different SDLC Models

### Waterfall Model

**In waterfall, acceptance testing is a distinct phase at the end:**

```
Requirements → Design → Implementation → System Testing → Acceptance Testing → Deployment
```

**Characteristics:**
- Acceptance testing occurs after all other testing
- Business users validate the complete system
- Acceptance criteria are defined during requirements phase
- Formal sign-off required before deployment
- Rework is expensive if issues are found late

**Challenges:**
- Late discovery of misunderstandings in requirements
- Business needs may have changed during development
- Pressure to accept despite known issues to meet deadlines

---

### V-Model

**In the V-model, each development level has a corresponding test level:**

```
Requirements Specification         ←→   Acceptance Testing
        ↓                                  ↑
System Specification             ←→   System Testing
        ↓                                  ↑
Architecture Design              ←→   Integration Testing
        ↓                                  ↑
Detailed Design                  ←→   Unit Testing
        ↓                                  ↑
        └──────── Coding ────────────────┘
```

**Acceptance testing in V-model:**
- Corresponds to requirements specification
- Validates that the system meets the original business requirements
- Should be planned when requirements are defined
- Test cases derived from requirements specification

**Advantage:** Clear traceability from requirements to acceptance tests

---

### Incremental / Iterative Models

**In incremental development, acceptance testing is performed incrementally:**

```
Increment 1: Requirements → Design → Build → Test → Accept
Increment 2: Requirements → Design → Build → Test → Accept
Increment 3: Requirements → Design → Build → Test → Accept
```

**Characteristics:**
- Each increment has its own acceptance criteria
- Partial functionality is accepted incrementally
- Earlier increments may be deployed while later ones are developed
- Acceptance feedback informs subsequent increments

---

### Agile / Scrum

**In agile, acceptance testing is continuous and integrated:**

```
Sprint 1: Plan → Design → Build → Test → Review/Demo → Accept
Sprint 2: Plan → Design → Build → Test → Review/Demo → Accept
Sprint 3: Plan → Design → Build → Test → Review/Demo → Accept
```

**Key practices:**
- **User stories** include acceptance criteria
- **Sprint reviews** (demos) are lightweight acceptance events
- **Definition of Done (DoD)** includes passing acceptance criteria
- **Acceptance Test-Driven Development (ATDD)** defines tests before coding
- **Product Owner** accepts or rejects user stories

**Sprint Review as Acceptance:**
- The team demonstrates completed user stories
- Stakeholders provide feedback
- The Product Owner accepts or rejects stories
- Accepted stories contribute to the potentially shippable increment

**Continuous acceptance advantages:**
- Early feedback on each feature
- Requirements misunderstandings caught quickly
- Course corrections possible mid-project
- No large "acceptance phase" at the end

---

## 2.2 Entry and Exit Criteria

### Entry Criteria for Acceptance Testing

Entry criteria define what must be true before acceptance testing can begin.

**Common entry criteria:**

| Criterion | Description |
|-----------|-------------|
| System testing complete | All system tests passed (or known failures documented) |
| Acceptance criteria defined | All acceptance criteria documented and agreed |
| Test environment ready | Production-like environment available and configured |
| Test data prepared | Realistic test data loaded and validated |
| Stakeholders available | Business users/representatives scheduled and trained |
| Defect threshold | No critical or high defects open (or agreed threshold) |
| Documentation complete | User guides, training materials available |

**Example entry criteria checklist:**
```
[ ] All P1 and P2 system test cases passed
[ ] Acceptance test cases reviewed and approved by Product Owner
[ ] UAT environment mirrors production configuration
[ ] Test data represents 6 months of realistic transactions
[ ] 5 business users trained on test procedures
[ ] No open critical defects
[ ] Help desk procedures documented
```

### Exit Criteria for Acceptance Testing

Exit criteria define what must be true for acceptance testing to be considered complete.

**Common exit criteria:**

| Criterion | Description |
|-----------|-------------|
| Test completion | All planned acceptance tests executed |
| Pass rate | Minimum percentage of tests passed (e.g., 95%) |
| Defect resolution | Critical/high defects resolved or accepted with risk |
| Business sign-off | Authorized stakeholders formally approve |
| Regression verified | No new defects introduced by fixes |
| Documentation updated | Known issues and workarounds documented |

**Example exit criteria:**
```
[ ] 100% of planned UAT test cases executed
[ ] 98% of test cases passed (2% failed with documented workarounds)
[ ] Zero critical defects open
[ ] Product Owner has signed acceptance document
[ ] Regression tests on fixed defects passed
[ ] Release notes including known issues published
```

### Risks of Poor Entry/Exit Criteria

**Starting too early:**
- System not stable enough for meaningful acceptance testing
- Wasted stakeholder time on obvious bugs
- Loss of confidence in the testing process

**Exiting too early:**
- Significant issues not discovered
- Post-release failures and rework
- Reputational damage

**Exiting too late:**
- Diminishing returns from continued testing
- Delayed business value
- Increased project costs

---

## 2.3 Traceability in Acceptance Testing

### What is Traceability?

Traceability is the ability to trace requirements through tests to defects and vice versa.

### Forward Traceability

**Requirements → Tests → Test Results → Defects**

```
REQ-001: Customer can place an order
  → TC-AT-001: Place valid order
  → TC-AT-002: Place order with invalid payment
  → TC-AT-003: Place order out of stock
    → TC-AT-001: PASSED
    → TC-AT-002: PASSED
    → TC-AT-003: FAILED → DEF-045: Out-of-stock message unclear
```

### Backward Traceability

**Defects → Tests → Requirements**

```
DEF-045: Out-of-stock message unclear
  → Found in: TC-AT-003
  → Tests requirement: REQ-001
  → Impact: Customer cannot understand why order failed
```

### Traceability Benefits

1. **Coverage analysis:** Are all requirements tested?
2. **Impact analysis:** What tests are affected by a requirements change?
3. **Defect root cause:** Which requirement is a defect related to?
4. **Progress tracking:** What percentage of acceptance tests passed?
5. **Audit compliance:** Prove all requirements were validated

### Coverage Metrics

| Metric | Formula | Target |
|--------|---------|--------|
| Requirements coverage | (Requirements with acceptance tests / Total requirements) × 100 | 100% |
| Acceptance test pass rate | (Passed tests / Total executed) × 100 | ≥ 90% |
| Defect density | Defects found / Test cases executed | Trend decreasing |

---

## 2.4 Acceptance Testing in Agile: Detailed

### User Stories and Acceptance Criteria

**A user story without acceptance criteria:**
```
"As a user, I want to reset my password"
```

**A user story with acceptance criteria:**
```
"As a registered user, I want to reset my password so that I can regain access to my account

Acceptance Criteria:
- Given a user enters a registered email, when they click 'Forgot Password', then they receive a reset link within 5 minutes
- Given a user clicks the reset link within 24 hours, when they enter a new password, then their password is updated
- Given a user enters an unregistered email, when they click 'Forgot Password', then they see a message: 'If this email is registered, a reset link has been sent'
- New password must be at least 8 characters and different from the previous 5 passwords
```

### Definition of Done (DoD)

**A typical DoD including acceptance:**
```
- Code written and reviewed
- Unit tests written and passing (≥ 80% coverage)
- Integration tests passing
- Acceptance criteria met
- Product Owner review complete
- No known critical or high defects
- Documentation updated
- Deployed to staging environment
```

### Sprint Review vs. Acceptance Testing

| Aspect | Sprint Review | Formal Acceptance Testing |
|--------|--------------|---------------------------|
| **Purpose** | Inspect increment, adapt backlog | Validate against acceptance criteria |
| **Frequency** | Every sprint | Per feature/release |
| **Participants** | Team + stakeholders | Business reps + testers |
| **Formality** | Informal demo | Formal test execution |
| **Outcome** | Feedback, adapted backlog | Pass/fail, go/no-go decision |

---

## Worked Examples

### Worked Example 1: Entry Criteria Evaluation

**Scenario:** A system is ready for UAT. Evaluate whether entry criteria are met.

| Entry Criterion | Status | Assessment |
|-----------------|--------|------------|
| System testing 100% complete | 95% complete, 5 minor tests remaining | FAIL — not 100% |
| Acceptance criteria approved | Approved by Product Owner | PASS |
| UAT environment ready | Ready, mirrors production | PASS |
| Test data loaded | 3 months of data loaded | PASS |
| Users available | 4 of 5 users available | CONDITIONAL |
| No critical defects | 1 critical defect in non-UAT area | CONDITIONAL |

**Recommendation:** Delay UAT start by 2 days to complete system testing. The critical defect is in a non-UAT feature, so UAT can proceed with a documented risk.

### Worked Example 2: Traceability Matrix

| Req ID | Requirement | Acceptance Test | Status | Defect |
|--------|-------------|-----------------|--------|--------|
| REQ-001 | Customer registration | TC-AT-001, TC-AT-002 | Pass | — |
| REQ-002 | Login with valid credentials | TC-AT-003, TC-AT-004 | Pass | — |
| REQ-003 | Login with invalid credentials | TC-AT-005 | Pass | — |
| REQ-004 | Password reset | TC-AT-006 | Fail | DEF-012 |
| REQ-005 | Profile update | TC-AT-007, TC-AT-008 | Pass | — |
| REQ-006 | Order placement | TC-AT-009 to AT-014 | 5 Pass, 1 Fail | DEF-015 |

**Coverage:** 6/6 requirements have acceptance tests (100%)
**Pass rate:** 9/11 tests passed (81.8%) — below 90% target
**Action:** Fix DEF-012 and DEF-015, re-run failing tests

### Worked Example 3: Agile Acceptance Scenario

**Sprint 3, 2-week sprint, Scrum team:**

**Day 1-2 (Planning):**
- Product Owner presents user stories
- Team discusses and estimates
- Acceptance criteria clarified for each story

**Day 3-8 (Development):**
- Developers write code
- Testers write acceptance tests (ATDD)
- Daily standup identifies blockers

**Day 9 (Internal demo):**
- Team demos to each other
- Early feedback incorporated

**Day 10 (Sprint Review):**
- Team demonstrates to stakeholders
- Product Owner accepts 4 of 5 stories
- 1 story rejected: "Search results pagination not working"
- Story moved to next sprint backlog

**Day 10 (Retrospective):**
- Team discusses why pagination wasn't caught earlier
- Action: Add pagination test to DoD checklist

**Result:** Potentially shippable increment with 4 accepted stories.
