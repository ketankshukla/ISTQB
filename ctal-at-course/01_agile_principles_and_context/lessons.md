# Chapter 1 — Agile Principles and Context: Lessons

---

## 1.1 The Agile Manifesto

### The Four Values

The Agile Manifesto (2001) states four core values:

1. **Individuals and interactions** over processes and tools
2. **Working software** over comprehensive documentation
3. **Customer collaboration** over contract negotiation
4. **Responding to change** over following a plan

**Important:** The manifesto says "over," not "instead of." The items on the right still have value, but the items on the left are valued more.

### The Twelve Principles

1. Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.
2. Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.
3. Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.
4. Business people and developers must work together daily throughout the project.
5. Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.
6. The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.
7. Working software is the primary measure of progress.
8. Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.
9. Continuous attention to technical excellence and good design enhances agility.
10. Simplicity — the art of maximizing the amount of work not done — is essential.
11. The best architectures, requirements, and designs emerge from self-organizing teams.
12. At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.

**Relevance for Technical Testers:**
- Principle 1: Continuous delivery requires continuous automated testing
- Principle 3: Frequent delivery requires fast, reliable test feedback
- Principle 4: Testers collaborate daily with developers and business
- Principle 9: Technical excellence includes testability and test automation
- Principle 12: Retrospectives include testing process improvements

---

## 1.2 Scrum from a Testing Perspective

### Scrum Framework

**Roles:**
- **Product Owner:** Defines what to build, prioritizes the backlog
- **Scrum Master:** Facilitates the process, removes impediments
- **Development Team:** Cross-functional team that delivers the increment (includes testers)

**Ceremonies:**

**1. Sprint Planning:**
- Team selects user stories from the product backlog
- Defines the sprint goal
- Creates the sprint backlog (tasks to complete stories)
- **Tester's role:**
  - Clarify acceptance criteria
  - Estimate testing effort
  - Identify testing tasks (unit, integration, e2e, exploratory)
  - Identify dependencies and risks

**2. Daily Stand-Up:**
- 15-minute sync: What did I do? What will I do? Any impediments?
- **Tester's role:**
  - Share testing progress
  - Highlight blocked tests or defects
  - Coordinate with developers on fixes

**3. Sprint Review:**
- Demonstrate working software to stakeholders
- Gather feedback
- **Tester's role:**
  - Demonstrate test results and coverage
  - Report quality status
  - Highlight risks for upcoming releases

**4. Sprint Retrospective:**
- Team reflects on the sprint
- Identifies improvements for the next sprint
- **Tester's role:**
  - Suggest testing process improvements
  - Share automation/maintenance challenges
  - Propose tool or technique changes

**Artifacts:**
- **Product Backlog:** Prioritized list of all desired work
- **Sprint Backlog:** Work committed for the current sprint
- **Increment:** The sum of all completed product backlog items at the end of a sprint

---

## 1.3 Kanban from a Testing Perspective

### Kanban Principles

Kanban is a flow-based methodology that focuses on:
- **Visualizing work:** Kanban board shows all work items and their status
- **Limiting work in progress (WIP):** Prevents multitasking, encourages focus
- **Managing flow:** Smooth, predictable delivery of work items
- **Making process policies explicit:** Clear rules for moving items between states
- **Implementing feedback loops:** Regular reviews of process and outcomes
- **Improving collaboratively:** Continuous, incremental improvement

**Kanban vs. Scrum:**

| Aspect | Kanban | Scrum |
|--------|--------|-------|
| Cadence | Continuous flow | Fixed sprints |
| Roles | No prescribed roles | Product Owner, Scrum Master, Team |
| Ceremonies | Optional | Required (planning, review, retro) |
| Change | Can add items anytime | No changes during sprint |
| Metrics | Cycle time, lead time, throughput | Velocity, sprint burndown |

**Tester's Role in Kanban:**
- Test tasks are visible on the board
- WIP limits apply to testing columns too
- Focus on reducing cycle time (time from start to done)
- Pull work when capacity is available

---

## 1.4 Extreme Programming (XP) from a Testing Perspective

### XP Practices

**1. Test-Driven Development (TDD):**
- Write a failing test first
- Write minimal code to pass
- Refactor
- Covered in detail in Chapter 2

**2. Pair Programming:**
- Two developers at one workstation
- One writes code (driver), one reviews (navigator)
- **Testing benefit:** Continuous code review, fewer defects

**3. Continuous Integration:**
- Integrate code to mainline multiple times per day
- Automated build and test on every commit
- Covered in detail in Chapter 4

**4. Refactoring:**
- Improve code design without changing behavior
- **Testing benefit:** Maintains testability; tests verify behavior is preserved

**5. Simple Design:**
- Do the simplest thing that could possibly work
- **Testing benefit:** Simpler code is easier to test

**6. Collective Code Ownership:**
- Anyone can modify any code
- **Testing benefit:** Tests must be clear enough for anyone to understand and maintain

---

## 1.5 The Technical Tester's Role in Agile

### What Is a Technical Tester?

A technical tester in an agile team:
- Has programming/scripting skills
- Designs, builds, and maintains test automation
- Understands the application architecture
- Collaborates closely with developers
- Participates in code reviews and design discussions
- Implements CI/CD pipelines for testing
- Performs exploratory testing with technical insight

### Activities by Agile Ceremony

**Sprint Planning:**
- Review user stories for testability
- Define acceptance criteria and test scenarios
- Estimate testing effort (including automation)
- Identify testing dependencies and risks

**During the Sprint:**
- Write automated tests (unit, integration, e2e)
- Pair with developers on TDD
- Perform exploratory testing on completed stories
- Review pull requests for test coverage and quality
- Maintain and fix automated tests

**Sprint Review:**
- Demonstrate test results and coverage metrics
- Report quality status and risks
- Gather feedback on test approaches

**Sprint Retrospective:**
- Propose testing improvements
- Share automation challenges and solutions
- Discuss technical debt in test code

### Whole-Team Approach to Quality

In agile, **quality is the responsibility of the whole team**, not just testers.

**Developers:**
- Write unit tests (TDD)
- Ensure code is testable
- Fix defects they introduce
- Participate in code reviews

**Testers:**
- Design and maintain automated tests
- Perform exploratory testing
- Ensure acceptance criteria are met
- Advocate for quality and testability

**Business/PO:**
- Define clear acceptance criteria
- Participate in ATDD workshops
- Prioritize defects and technical debt
- Accept or reject increments

---

## 1.6 Definition of Done and Definition of Ready

### Definition of Done (DoD)

The DoD is a checklist that defines when a user story or feature is truly complete.

**Example DoD for a User Story:**
- [ ] Code is written and follows coding standards
- [ ] Unit tests are written and passing (TDD)
- [ ] Code review is completed
- [ ] Integration tests are passing
- [ ] Acceptance criteria are met
- [ ] Automated regression tests pass
- [ ] Exploratory testing is performed
- [ ] Documentation is updated (if needed)
- [ ] No known critical or high defects

**Tester's Role in DoD:**
- Define testing-related DoD criteria
- Verify that testing criteria are met
- Ensure DoD includes appropriate test coverage

### Definition of Ready (DoR)

The DoR defines when a user story is ready to be taken into a sprint.

**Example DoR for a User Story:**
- [ ] Story is written in user story format
- [ ] Acceptance criteria are clear and testable
- [ ] Dependencies are identified
- [ ] Story is estimated by the team
- [ ] Story is small enough to fit in a sprint
- [ ] Test scenarios are identified
- [ ] UI mockups are available (if applicable)

**Tester's Role in DoR:**
- Review acceptance criteria for testability
- Identify missing test scenarios
- Ensure the story is small enough to test within the sprint
- Flag dependencies that may block testing

---

## 1.7 Agile Testing Challenges

**1. Time Pressure:**
- Sprints are short; testing must keep pace
- **Solution:** Automation, shift-left testing, whole-team approach

**2. Changing Requirements:**
- Requirements change mid-sprint
- **Solution:** Lightweight test documentation, automated regression, exploratory testing

**3. Test Environment Stability:**
- Shared environments change frequently
- **Solution:** Containerization, infrastructure as code, dedicated test environments

**4. Technical Debt in Tests:**
- Test code becomes as complex as production code
- **Solution:** Refactor tests, apply coding standards to test code, code review tests

**5. Regression Test Maintenance:**
- UI changes break automated tests
- **Solution:** Page Object Model, stable locators, API-level tests

---

## Worked Examples

### Worked Example 1: Scrum Testing Tasks

**User Story:** "As a customer, I want to reset my password so that I can regain access to my account."

**Testing Tasks for Sprint Backlog:**

| Task | Effort | Owner |
|------|--------|-------|
| Define acceptance criteria with PO | 1h | Tester + PO |
| Write API-level integration tests | 2h | Tester |
| Write UI-level automated tests | 3h | Tester |
| Perform exploratory testing | 2h | Tester |
| Verify security (password strength, token expiry) | 1h | Tester |
| Review developer's unit tests | 0.5h | Tester |

### Worked Example 2: Kanban WIP Limits

**Kanban Board Columns:**

| Backlog | In Progress | In Review | Testing | Done |
|---------|------------|-----------|---------|------|
| 5 items | WIP: 3 | WIP: 2 | WIP: 2 | — |

**Scenario:** Testing column is at its WIP limit (2 items).
- No new items can enter Testing until one moves to Done
- The tester finishes testing one item and moves it to Done
- Now Testing has capacity for one new item from In Review

**Benefit:** Prevents testers from being overwhelmed; ensures items don't sit untested.

### Worked Example 3: Definition of Done

**Team Discussion:** Should "performance testing" be in the DoD for every story?

**Analysis:**
- If every story requires performance testing, sprints slow down
- Performance is usually a non-functional requirement tested at feature/release level
- **Decision:** Performance testing is NOT in the per-story DoD, but IS in the release DoD

**Revised DoD:**
- Per-story: unit tests, integration tests, code review, exploratory testing
- Per-release: performance test, security scan, regression suite
