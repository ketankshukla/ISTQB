# Chapter 2 — Agile Testing: Lessons

---

## 2.1 The Whole-Team Approach

### Concept

The whole-team approach means that **delivering quality is the responsibility of everyone on the team**, not just testers.

**Principles:**
- Everyone is responsible for quality
- Testers, developers, and business people collaborate closely
- Testing activities are integrated throughout the development process
- Knowledge is shared — no silos

**Benefits:**
- Faster feedback on quality issues
- Better understanding of requirements across the team
- Fewer handoffs and delays
- Shared ownership reduces blame culture
- More innovative solutions through diverse perspectives

**Challenges:**
- Requires culture change in traditional organizations
- Testers may feel their expertise is undervalued
- Developers may need training in testing techniques
- Management may not understand the shift

**How It Works in Practice:**

| Traditional Approach | Whole-Team Approach |
|---------------------|---------------------|
| Testers work in isolation | Testers collaborate with developers and PO daily |
| Requirements handed off | Testers help refine acceptance criteria |
| Testing at the end | Testing continuously throughout |
| "It's not my bug" mentality | "How do we fix this together?" |
| Testers report to test manager | Testers embedded in cross-functional team |

---

## 2.2 The Tester's Role in Agile

### Evolved Responsibilities

In agile, the tester's role evolves from "gatekeeper" to "quality enabler."

**1. Collaborator:**
- Participates in all team ceremonies
- Works with developers to prevent defects
- Helps the Product Owner refine stories
- Pairs with developers on test design

**2. Test Designer and Executor:**
- Designs tests based on acceptance criteria
- Executes manual and automated tests
- Performs exploratory testing
- Validates user stories against requirements

**3. Automation Engineer:**
- Develops and maintains test automation
- Integrates tests into CI/CD pipelines
- Coaches developers on writing better unit tests
- Maintains the test automation framework

**4. Quality Coach:**
- Coaches the team on quality practices
- Facilitates risk analysis
- Helps establish Definition of Done
- Promotes testing mindset across the team

**5. Customer Advocate:**
- Represents the user perspective
- Validates that features meet user needs
- Ensures usability and accessibility
- Challenges assumptions about requirements

### Tester's Activities Throughout the Sprint

| Sprint Phase | Tester's Activities |
|--------------|---------------------|
| Sprint Planning | Estimate testing effort, identify testability concerns, clarify acceptance criteria |
| During Sprint | Test features as they are developed, provide immediate feedback, automate tests |
| Daily Standup | Report testing progress, raise impediments, coordinate with developers |
| Story Refinement | Ask "how will we test this?", identify edge cases, suggest acceptance criteria |
| Sprint Review | Demonstrate features, gather feedback, validate against expectations |
| Retrospective | Propose quality improvements, reflect on testing effectiveness |

### Skill Set for Agile Testers

**Technical Skills:**
- Test automation (Selenium, Cypress, Playwright, etc.)
- API testing (Postman, REST Assured)
- CI/CD basics (Jenkins, GitHub Actions, GitLab CI)
- Version control (Git)
- Scripting/programming basics

**Testing Skills:**
- Exploratory testing techniques
- Test design techniques (EP, BVA, state transition)
- Risk-based testing
- Non-functional testing (performance, security, usability)

**Soft Skills:**
- Communication and collaboration
- Coaching and mentoring
- Facilitation
- Adaptability
- Systems thinking

---

## 2.3 Acceptance Criteria

### What Are Acceptance Criteria?

Acceptance criteria are the **conditions that a user story must satisfy to be accepted by the Product Owner.** They define the boundaries of a user story and help the team understand when the story is complete.

### Characteristics of Good Acceptance Criteria

**1. Testable:**
- Each criterion can be verified by a test
- Avoid vague terms like "fast," "user-friendly," "good performance"
- Use specific, measurable conditions

**2. Clear and concise:**
- Written in language the whole team understands
- No ambiguity or room for interpretation
- Focus on what, not how

**3. Specific:**
- Define exact conditions, values, and boundaries
- Include both positive and negative scenarios
- Specify error handling

### Formats for Acceptance Criteria

**1. Given/When/Then (Scenario Format):**
```
Given the user is on the login page
When they enter valid credentials and click "Login"
Then they are redirected to the dashboard
And a welcome message is displayed
```

**2. Rule-oriented (Checklist Format):**
```
- The password must be at least 8 characters
- The password must contain at least one uppercase letter
- The password must contain at least one number
- An error message is displayed for non-matching passwords
```

**3. Acceptance Test Format:**
```
Scenario: Successful login
  Input: Valid username "alice" and password "Password123"
  Action: Click Login button
  Expected Result: Redirect to dashboard, status 200
```

### Acceptance Criteria and Testing

**How ACs Drive Testing:**
- Each acceptance criterion should have at least one test
- Tests are written BEFORE or DURING development (ATDD/BDD)
- ACs form the basis for regression tests
- Missing or unclear ACs lead to missed tests

**Example:**

**User Story:** As a customer, I want to apply a discount code so that I can save money.

**Acceptance Criteria:**
1. Valid discount code reduces the total by the discount percentage
2. Invalid discount code displays "Invalid code" error
3. Expired discount code displays "Code expired" error
4. Discount cannot exceed 50% of the order total
5. Discounted total cannot be less than zero

**Derived Tests:**
- Test valid 10% discount → total reduced by 10%
- Test valid 50% discount → total reduced by 50%
- Test invalid code → error message displayed
- Test expired code → "expired" error
- Test 60% discount → capped at 50% or rejected
- Test 100% discount → total = 0 (if allowed) or capped

---

## 2.4 Definition of Done (DoD)

### What Is the Definition of Done?

The Definition of Done is a **shared understanding of what it means for work to be complete.** It ensures consistency and quality across all work items.

### Typical DoD Elements

**Code:**
- [ ] Code is written
- [ ] Code follows team standards
- [ ] Code review completed by at least one other developer
- [ ] Static analysis passes (no critical issues)

**Testing:**
- [ ] Unit tests written and passing
- [ ] Integration tests written and passing
- [ ] Acceptance criteria verified
- [ ] Exploratory testing performed
- [ ] Regression tests pass

**Documentation:**
- [ ] Technical documentation updated
- [ ] User-facing documentation updated
- [ ] Release notes updated

**Deployment:**
- [ ] Deployed to staging environment
- [ ] Smoke tests pass in staging
- [ ] No known critical defects

### DoD and Testing

**Without Testing in DoD:**
- Stories marked "done" may have undiscovered defects
- Technical debt accumulates
- Regression issues increase
- Sprint velocity becomes unreliable

**With Testing in DoD:**
- Quality is built in, not inspected in
- Fewer surprises at sprint end
- Sustainable pace is maintained
- Stakeholders can trust "done" means "releasable"

### DoD Evolution

The DoD should evolve as the team matures:

| Team Maturity | DoD Example |
|--------------|-------------|
| New team | Code written, basic testing |
| Maturing team | Code reviewed, unit tests, manual acceptance testing |
| High-performing team | All above + automated acceptance tests, performance checks, security scan, deployed to staging |

### Definition of Ready (DoR)

The Definition of Ready complements the DoD:

**DoR for a User Story:**
- Story has clear acceptance criteria
- Story is small enough to complete in one sprint
- Story has no unresolved dependencies
- Team understands how to test the story
- Story has been estimated

**Importance:** Stories that are not ready lead to:
- Blocked work during the sprint
- Rework and waste
- Unclear acceptance criteria → missed tests

---

## 2.5 Test Planning in Agile

### Differences from Traditional Test Planning

| Aspect | Traditional | Agile |
|--------|-----------|-------|
| Timing | Upfront, detailed | Continuously, just-in-time |
| Scope | Entire project | Current sprint/release |
| Documentation | Extensive test plans | Lightweight, living documents |
| Changes | Change control process | Adapt every sprint |
| Estimation | Detailed, long-term | Story points, team velocity |

### Agile Test Planning Activities

**1. Release Planning:**
- Identify high-level test objectives
- Plan test environments and data needs
- Identify risks and mitigation strategies
- Allocate automation resources

**2. Sprint Planning:**
- Review each story for testability
- Identify testing tasks and estimate effort
- Plan test data and environment needs
- Identify dependencies and risks

**3. Continuous Planning:**
- Daily refinement of test approach
- Adapting to discovered risks
- Prioritizing testing based on current risks

### Test Estimation in Agile

**Story Points:**
- Relative sizing based on complexity, effort, and uncertainty
- Testing effort is included in the story point estimate
- Team estimates together (Planning Poker)

**Task Hours (optional):**
- Some teams break stories into tasks with hour estimates
- Testing tasks: test design, automation, execution, defect verification

### Risk-Based Testing in Agile

**Identify Risks:**
- New or changed features (higher risk)
- Complex business logic (higher risk)
- Integration points (higher risk)
- High-traffic features (higher risk)

**Adapt Testing:**
- More testing on high-risk areas
- More exploratory testing for new features
- Broader regression for changed areas
- Less testing on stable, low-risk features

---

## Worked Examples

### Worked Example 1: Whole-Team Quality

**Scenario:** A team releases a feature that passes all automated tests but users report it is confusing to use.

**Root Cause:** The team focused on functional correctness but did not include usability testing in their process.

**Whole-Team Solution:**
- Include usability criteria in acceptance criteria
- Have testers perform exploratory testing from a user perspective
- Conduct sprint reviews with actual users when possible
- Include UX review in the Definition of Done

### Worked Example 2: Writing Good Acceptance Criteria

**Poor AC:**
```
The login page should be fast and user-friendly.
```

**Problems:**
- "Fast" is not measurable
- "User-friendly" is subjective
- Not testable

**Good AC:**
```
Given the user is on the login page
When they enter valid credentials
Then they are logged in within 2 seconds
And the login form is accessible via keyboard
And error messages are displayed within 1 second
```

### Worked Example 3: Definition of Done Review

**Scenario:** A team's DoD currently includes: "Code is written and tested."

**Problems:**
- "Tested" is vague — what types of tests?
- No code review requirement
- No regression check
- No environment verification

**Improved DoD:**
```
- [ ] Code is written and follows team standards
- [ ] Code review completed by at least one team member
- [ ] Unit tests written with >= 80% coverage
- [ ] Acceptance criteria verified manually or automatically
- [ ] Exploratory testing performed for new features
- [ ] All regression tests pass
- [ ] Deployed to staging and smoke tests pass
- [ ] No known critical or high defects
```
