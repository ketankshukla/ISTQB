# Chapter 5 — Managing the Test Activities: Lessons

---

## 5.1 Test Planning

### Purpose and Content of a Test Plan (FL-5.1.1, K2)

A test plan is the document that describes the scope, approach, resources, schedule, and activities for testing. It serves as the main communication vehicle for the testing effort.

**Purpose:**
- Documents the test objectives and how they will be achieved
- Defines the scope — what will and will not be tested
- Communicates the approach, resources needed, and schedule
- Identifies risks and mitigation strategies
- Defines entry criteria (when to start) and exit criteria (when to stop)
- Serves as a baseline for test monitoring and control

**Typical content of a test plan:**
- Test objectives and scope
- Test strategy/approach (which techniques, levels, types)
- Entry and exit criteria
- Test schedule and milestones
- Resource requirements (people, environments, tools, budget)
- Risk assessment and contingency plans
- Test deliverables (what testware will be produced)
- Metrics to be collected
- Configuration management approach
- Communication plan (reporting frequency, audience)

**Context matters:** In sequential models, the test plan is often a single detailed document created early. In Agile, test planning is lighter and continuous — the test strategy may be captured in a brief team agreement, with details emerging per iteration/sprint.

### Tester's Contribution to Planning (FL-5.1.2, K1)

Testers add value during iteration and release planning by:

- Estimating testing effort for user stories/features
- Identifying test dependencies (environments, data, third-party services)
- Identifying which stories require the most test effort (complex logic, risky areas)
- Raising testability concerns early (e.g., "this story has no clear acceptance criteria")
- Contributing to Definition of Ready (DoR) — ensuring stories are testable before entering a sprint
- Contributing to Definition of Done (DoD) — ensuring adequate testing is included in "done"
- Proposing which regression tests need to run for the release

### Entry Criteria and Exit Criteria (FL-5.1.3, K2)

**Entry criteria (Definition of Ready for testing):** Conditions that must be met BEFORE a test activity can begin:
- Test environment is set up and accessible
- Required test tools are installed and configured
- Test data is available
- The test basis (requirements, user stories) is available and reviewed
- Code is deployed and ready for testing
- Previous test level is complete (e.g., component testing done before integration testing starts)

**Exit criteria (Definition of Done for testing):** Conditions that must be met to consider a test activity COMPLETE:
- Planned tests have been executed
- A defined level of coverage has been achieved (e.g., 90% requirement coverage)
- Defect density is below a threshold
- No open critical or high-severity defects
- All planned test completion deliverables are produced (reports, archived testware)
- Risk acceptance has been agreed by stakeholders

In Agile, these translate directly to **DoR** (entry) and **DoD** (exit) for user stories and sprints.

### Estimation Techniques (FL-5.1.4, K1)

Common approaches to estimating testing effort:

**Metrics-based (historical data):**
- Use data from previous similar projects
- Example: "In past releases, testing took 40% of development effort"
- Requires an organization with mature metrics collection

**Expert-based:**
- Rely on the knowledge and experience of testers and test managers
- Techniques include: Planning Poker, Wideband Delphi, three-point estimation
- Useful when no historical data exists

**Planning Poker** (Agile):
- Each team member independently selects a complexity estimate (story points)
- Cards are revealed simultaneously
- Large differences trigger discussion
- Consensus is reached through iterative rounds

**Wideband Delphi:**
- Experts provide independent estimates
- Estimates are shared anonymously
- Discussion rounds converge toward consensus
- Reduces bias from dominant voices

### Test Case Prioritization (FL-5.1.5, K3)

When time or resources are limited, not all tests can be executed. Prioritization decides which tests run first.

**Prioritization strategies:**

**Risk-based prioritization:**
- Tests covering higher-risk features run first
- Risk = likelihood of failure x impact of failure
- Ensures the most critical areas are always tested, even if time runs out

**Coverage-based prioritization:**
- Tests that cover the most untested requirements/code run first
- Maximizes coverage per test executed

**Requirements-based prioritization:**
- Tests for the most important business requirements run first
- Importance defined by stakeholders

**Factors influencing priority:**
- Severity of potential failures
- Likelihood of defects (based on complexity, change frequency, developer experience)
- Business criticality of the feature
- Visibility to end users
- Regulatory requirements
- Dependencies (some tests must run before others)

### The Test Pyramid (FL-5.1.6, K1)

The test pyramid is a model recommending the distribution of test effort across levels:

```
        /\
       /  \        Few: UI/E2E tests (slow, expensive, fragile)
      /    \
     /------\
    /        \     Some: Integration/API tests (moderate speed)
   /          \
  /------------\
 /              \   Many: Unit/component tests (fast, cheap, stable)
/________________\
```

**Key principles:**
- **Base (unit/component tests):** Should be the largest group. They are fast, cheap to run, easy to maintain, and provide quick feedback.
- **Middle (integration/service tests):** Moderate number. Test component interactions and APIs.
- **Top (UI/end-to-end tests):** Should be the smallest group. They are slow, expensive, brittle, and hard to maintain.

**Why this shape?**
- Lower-level tests catch more defects per dollar spent
- Lower-level tests run faster (seconds vs minutes)
- Lower-level tests are more stable (less affected by UI changes)
- Higher-level tests provide confidence but at higher cost
- A well-shaped pyramid means fast feedback with high confidence

**Anti-pattern: "Ice cream cone"** — too many slow UI tests, too few fast unit tests. Results in slow feedback and high maintenance cost.

### Testing Quadrants (FL-5.1.7, K2)

The testing quadrants model (Brian Marick) categorizes tests along two dimensions:

**Dimension 1:** Business-facing vs Technology-facing
**Dimension 2:** Supporting the team (guiding development) vs Critiquing the product (evaluating)

```
                 Business-facing
                      |
    Q2: Automated &   |   Q3: Manual
    Manual            |
    Functional tests, |   Exploratory testing,
    examples, story   |   usability testing,
    tests, prototypes |   UAT, alpha/beta
    [Support team]    |   [Critique product]
                      |
 -----[Support]-------+--------[Critique]-----
                      |
    Q1: Automated     |   Q4: Automated
    Unit tests,       |   Performance tests,
    component tests,  |   security tests,
    integration tests |   "-ility" tests
    [Support team]    |   [Critique product]
                      |
                Technology-facing
```

**Q1 (Technology-facing, support team):** Unit tests, component tests — fast automated tests that guide development. TDD lives here.

**Q2 (Business-facing, support team):** Functional tests, examples, story tests — verify that features work as the business expects. ATDD lives here.

**Q3 (Business-facing, critique product):** Exploratory testing, usability testing, UAT — evaluate whether the product actually satisfies users. Often manual.

**Q4 (Technology-facing, critique product):** Performance, security, reliability testing — evaluate non-functional quality characteristics. Often tool-intensive.

**Key exam point:** All four quadrants are needed for comprehensive testing. No single quadrant is sufficient.

---

## 5.2 Risk Management

### Risk Definition (FL-5.2.1, K2)

A **risk** is a factor that could result in future negative consequences. Every risk has two components:

- **Likelihood:** The probability that the negative event will occur (how likely?)
- **Impact:** The severity of consequences if the event does occur (how bad?)

**Risk level = Likelihood x Impact**

Risks with high likelihood AND high impact demand the most attention.

| | High Impact | Low Impact |
|---|---|---|
| **High Likelihood** | Critical risk — highest priority | Moderate risk |
| **Low Likelihood** | Moderate risk | Low risk — lowest priority |

### Project Risks vs Product Risks (FL-5.2.2, K2)

**Project risks** affect the project's ability to achieve its objectives:
- Staff shortages or skill gaps
- Tool or environment unavailability
- Budget overruns or timeline slippage
- Late delivery of test basis (requirements not ready)
- Vendor/supplier failures
- Organizational issues (restructuring, political conflicts)
- Communication breakdowns between teams
- Unclear or changing requirements (from a project management perspective)

**Product risks** relate to the quality of the product itself:
- A feature may not work correctly (functional defect)
- Performance may degrade under load
- Security vulnerabilities may exist
- Usability issues may frustrate users
- Data integrity may be compromised
- Reliability may be insufficient
- Migration may lose data

**Key distinction:** Project risks threaten the project SCHEDULE/BUDGET/SCOPE. Product risks threaten the QUALITY of the delivered system.

### Product Risk Analysis (FL-5.2.3, K2)

Product risk analysis involves:

1. **Risk identification:** Brainstorm potential quality risks (what could go wrong with the product?)
2. **Risk assessment:** For each risk, estimate likelihood and impact to determine the risk level
3. **Risk mitigation:** Define actions to reduce either the likelihood or the impact

**How product risk analysis influences testing:**
- Higher-risk areas receive **more thorough testing** (more test cases, more techniques, earlier testing)
- Lower-risk areas receive **less testing** (basic coverage, possibly automated regression only)
- Risk levels guide **test prioritization** — high-risk features are tested first
- Risk levels influence **test level selection** — critical risks may need testing at multiple levels
- Risk levels determine **test technique selection** — high-risk complex logic may warrant decision table testing + BVA + state transition combined

### Product Risk Control / Risk-Based Testing (FL-5.2.4, K2)

Risk-based testing uses product risk analysis results to:
- **Plan testing:** Allocate effort proportionally to risk level
- **Design tests:** Apply more rigorous techniques to higher-risk areas
- **Prioritize execution:** Test high-risk features first (so that if time runs out, the most critical areas have been tested)
- **Report results:** Communicate residual risk (what was not tested or inadequately tested)

**Risk control actions:**
- **Mitigation (preventive):** Reduce likelihood by adding more testing, using better techniques, or involving more experienced testers
- **Contingency (reactive):** Have a plan for if the risk materializes (e.g., hot-fix process, rollback procedure)
- **Transfer:** Move the risk to another party (e.g., insurance, outsourcing)
- **Acceptance:** Acknowledge the risk and choose not to mitigate it (documented decision by stakeholders)

---

## 5.3 Test Monitoring, Test Control, and Test Completion

### Metrics Used in Testing (FL-5.3.1, K1)

Common test metrics:

**Progress metrics:**
- Number of test cases planned/executed/passed/failed/blocked
- Percentage of requirements covered by tests
- Test execution rate (tests completed per day/sprint)

**Defect metrics:**
- Number of defects found (by severity, priority, module)
- Defect detection rate (defects per test hour)
- Defect fix rate (how fast are defects being resolved?)
- Defect rejection rate (false positives)

**Coverage metrics:**
- Requirement coverage percentage
- Code coverage (statement, branch) percentage
- Risk coverage (percentage of identified risks addressed by tests)

**Completion metrics:**
- Defect trends (are new defects decreasing over time?)
- Open vs closed defect curve
- Pass rate trend

### Test Reports (FL-5.3.2, K2)

**Test progress report (interim):**
- Produced during test execution
- Reports current status against the plan
- Audience: test team, project manager, development team
- Content: tests executed/remaining, defects found/open, risks, blockers, schedule adherence

**Test completion report (final/summary):**
- Produced at the end of a test level or project
- Summarizes what was tested, results, quality assessment, and lessons learned
- Audience: stakeholders, management, potentially customers
- Content: summary of activities, deviations from plan, coverage achieved, outstanding defects, residual risks, assessment of quality, recommendations (ship/no-ship)

### Communicating Test Status (FL-5.3.3, K2)

Effective communication of test status:
- Tailor the message to the audience (executives want a high-level summary; developers want technical detail)
- Use dashboards and visualizations for quick comprehension
- Report both good news (coverage achieved, defect trends improving) and bad news (blockers, high-severity defects open)
- Be objective — let data speak rather than opinions
- Highlight risks and decisions needed from stakeholders
- Report on entry/exit criteria status (which are met, which are not)

---

## 5.4 Configuration Management (FL-5.4.1, K2)

Configuration management (CM) ensures that all work products (including testware) are uniquely identified, version-controlled, tracked, and protected from unauthorized changes.

**How CM supports testing:**
- **Traceability:** Links test cases to specific versions of requirements and code
- **Reproducibility:** A defect can be reproduced because the exact version of code, test data, and environment configuration is recorded
- **Consistency:** All team members work with the correct version of testware
- **Rollback capability:** If a build introduces failures, the previous good version can be restored
- **Audit trail:** Changes to testware are logged (who changed what, when, why)

**Elements under CM:**
- Source code (versioned in Git, SVN, etc.)
- Test cases, test scripts, test data
- Test plans and test reports
- Environment configurations
- Build artifacts
- Requirement documents

---

## 5.5 Defect Management (FL-5.5.1, K3)

### The Defect Report

A defect report documents a failure or anomaly found during testing. It serves multiple purposes:
- Communicates the problem to developers for fixing
- Provides evidence for quality assessment
- Enables tracking of defect lifecycle
- Supports post-project analysis and process improvement

### Content of a Defect Report

A complete defect report typically includes:

| Field | Description |
|-------|-------------|
| Unique identifier | Auto-generated ID (e.g., BUG-1234) |
| Title/summary | Brief, descriptive one-line summary of the defect |
| Date/time reported | When the defect was found |
| Reporter | Who found the defect |
| Status | Current state in the workflow (New, Open, In Progress, Fixed, Closed, etc.) |
| Severity | Technical impact (Critical, High, Medium, Low) |
| Priority | Business urgency for fixing (High, Medium, Low) |
| Environment | Where the defect was observed (OS, browser, build version, test environment) |
| Component/module | Which part of the system is affected |
| Steps to reproduce | Numbered sequence of actions to trigger the failure |
| Expected result | What should have happened |
| Actual result | What actually happened |
| Attachments | Screenshots, logs, videos, test data |
| Version/build | Which software version exhibited the defect |
| Assigned to | Developer or team responsible for investigation |
| Related test case | Link to the test case that found it |

### Defect Workflow

A typical defect lifecycle:

```
New -> Open -> In Progress -> Fixed -> Ready for Retest -> Closed
                    |                         |
                    v                         v
                Rejected/Duplicate      Reopened (fix failed)
```

- **New:** Just reported, not yet triaged
- **Open:** Accepted as a valid defect, awaiting assignment
- **In Progress:** Developer is investigating/fixing
- **Fixed:** Developer believes the fix is complete
- **Ready for Retest:** Deployed to test environment for confirmation testing
- **Closed:** Confirmation testing passed; defect is resolved
- **Reopened:** Confirmation testing failed; the fix did not work
- **Rejected:** Not a valid defect (expected behavior, cannot reproduce, duplicate)

### Severity vs Priority

These are distinct and do not always align:

| Severity | Priority | Example |
|----------|----------|---------|
| High | High | Payment processing crashes (critical business impact, must fix now) |
| High | Low | Crash in a feature used by 2 internal users (severe but not business-urgent) |
| Low | High | Company logo is wrong on homepage (cosmetic but highly visible — CEO wants it fixed today) |
| Low | Low | Minor typo in an admin screen (cosmetic, rarely seen) |

- **Severity** = how bad is the technical impact? (Set by testers)
- **Priority** = how urgently does the business need it fixed? (Set by management/product owner)

---

## Cross-References

- Test planning connects to Chapter 1.4 (test process and activities)
- Risk-based testing connects to Chapter 4 (choosing which techniques to apply)
- Entry/exit criteria connect to Chapter 2 (shift-left, DoR/DoD in Agile)
- Metrics connect to Chapter 3 (review metrics in inspections)
- Configuration management supports traceability (Chapter 1.4)
- Defect management connects to Chapter 1.2 (error-defect-failure chain)
