# Chapter 5 — Testing Techniques in Agile: Lessons

---

## 5.1 Exploratory Testing

### What Is Exploratory Testing?

Exploratory testing is a testing approach where the tester simultaneously designs and executes tests, using the information gained while testing to design new and better tests.

**Key Characteristics:**
- **Simultaneous learning, test design, and execution:** The tester learns about the system while testing it
- **Adaptability:** Tests change based on what is discovered
- **Creativity:** The tester uses intuition, experience, and domain knowledge
- **No predefined scripts:** Tests are designed dynamically during the session

**Contrast with Scripted Testing:**

| Aspect | Scripted Testing | Exploratory Testing |
|--------|-----------------|--------------------|
| Test design | Before execution | During execution |
| Scripts | Detailed predefined steps | High-level guidance or none |
| Flexibility | Low — must follow script | High — adapts to findings |
| Creativity | Limited | High |
| Documentation | Detailed test cases | Notes, charters, mind maps |
| Best for | Stable, repeatable scenarios | New features, complex systems |

### Why Exploratory Testing Is Essential in Agile

1. **Changing requirements:** Scripts become obsolete when requirements change; exploratory testing adapts
2. **Short sprints:** There is no time to write detailed scripts for every new feature
3. **Human judgment:** Some defects require human intuition (usability, intuitiveness)
4. **Complements automation:** Automation checks what you expect; exploratory testing finds what you don't expect
5. **Learning:** Testers learn the system deeply, which improves all testing

### How to Perform Exploratory Testing

**1. Prepare:**
- Understand the feature or area being tested
- Identify risks and areas of concern
- Set a time limit (e.g., 60-90 minutes)

**2. Explore:**
- Start with the happy path
- Try variations and edge cases
- Use different data, sequences, and timings
- Follow hunches and anomalies
- Take notes on what you test and what you find

**3. Learn:**
- If you find something interesting, dig deeper
- If something seems wrong, investigate
- Use what you learn to guide further testing

**4. Document:**
- Note what was tested
- Record defects found
- Summarize coverage and risks

### Exploratory Testing Techniques

**1. Tour-Based Testing:**
- Treat the application like a city and take "tours"
- Business district tour: follow typical business workflows
- Historic district tour: test legacy features
- Tourist tour: test as a first-time user
- Bad neighborhood tour: test error handling and edge cases

**2. Persona-Based Testing:**
- Test as different user types
- Novice user, expert user, malicious user, impatient user

**3. Risk-Based Exploratory Testing:**
- Focus on high-risk areas first
- Allocate more time to complex or critical features

**4. Scenario-Based Exploratory Testing:**
- Start with a realistic scenario
- Vary the scenario as you test
- Add complications and edge cases

---

## 5.2 Session-Based Test Management (SBTM)

### What Is SBTM?

SBTM is a structured approach to exploratory testing that organizes testing into managed "sessions."

**Components:**

**1. Charter:**
- A mission statement for the session
- Defines what to test and what to look for
- Examples:
  - "Explore the checkout flow focusing on payment validation and error handling"
  - "Test the search feature with various query types and filters"
  - "Investigate reported performance issues on the dashboard"

**2. Time Box:**
- A fixed duration for the session (typically 60-90 minutes)
- Prevents endless exploration without reporting
- Creates a rhythm of test → report → test

**3. Session Report:**
- What was tested
- Defects found
- Issues or questions raised
- Coverage assessment
- Time breakdown (setup, testing, reporting)

### SBTM Process

```
1. Plan: Define charters based on risk and coverage gaps
2. Execute: Tester performs session within time box
3. Debrief: Tester and test lead discuss findings
4. Report: Document session results
5. Adjust: Update charters and priorities based on findings
```

### Debrief Questions

After a session, the tester and lead discuss:
- What did you test?
- What did you find?
- Were there areas you could not cover?
- Do we need follow-up sessions?
- Are there new risks to investigate?

### SBTM Metrics

| Metric | Description |
|--------|-------------|
| Sessions completed | Number of sessions run |
| Defects per session | Average defects found per session |
| Coverage areas | Which parts of the system were explored |
| Setup ratio | Time spent on setup vs. testing |
| Charter vs. opportunity | Time on planned charter vs. opportunistic testing |

---

## 5.3 Pairwise and Combinatorial Testing

### The Problem: Too Many Combinations

Testing all combinations of multiple parameters leads to exponential growth:

| Parameters | Values Each | Total Combinations |
|-----------|-------------|-------------------|
| 3 | 3 | 27 |
| 4 | 3 | 81 |
| 5 | 4 | 1,024 |
| 10 | 3 | 59,049 |

### Pairwise Testing

Pairwise testing (all-pairs testing) reduces the number of test cases by testing every pair of parameter values at least once, rather than every combination.

**Principle:** Most defects are caused by interactions between two parameters, not three or more.

**Example:**

Parameters:
- Browser: Chrome, Firefox, Safari
- OS: Windows, macOS, iOS
- Network: Wi-Fi, 4G, 5G

Full combinations: 3 x 3 x 3 = 27

Pairwise combinations: 9 (all pairs covered)

| Browser | OS | Network |
|---------|----|---------|
| Chrome | Windows | Wi-Fi |
| Chrome | macOS | 4G |
| Chrome | iOS | 5G |
| Firefox | Windows | 4G |
| Firefox | macOS | 5G |
| Firefox | iOS | Wi-Fi |
| Safari | Windows | 5G |
| Safari | macOS | Wi-Fi |
| Safari | iOS | 4G |

**Verification:**
- Chrome + Windows: covered
- Chrome + macOS: covered
- Wi-Fi + Windows: covered
- 4G + iOS: covered
- Every pair of values appears at least once

### Tools for Pairwise Testing

- **PICT (Microsoft):** Command-line pairwise test generator
- **Hexawise:** Web-based pairwise testing tool
- **AllPairs:** Python library
- ** jenny:** Linux command-line tool

### When to Use Pairwise in Agile

- Configuration testing (OS, browser, device)
- API parameter combinations
- Form field combinations
- Any situation with multiple independent parameters

**Caution:** Pairwise is NOT appropriate when:
- Parameters have known interactions that require all combinations
- Safety-critical systems where missing a combination could be catastrophic

---

## 5.4 Non-Functional Testing in Agile

### Performance Testing in Agile

**Challenge:** Traditional performance testing is done late in the project. In agile, performance must be considered from the start.

**Agile Performance Testing Approach:**

**1. Performance Criteria in Definition of Done:**
- Define performance targets (response time, throughput)
- Include performance checks in acceptance criteria

**2. Performance Smoke Tests in CI:**
- Run quick performance checks on every build
- Verify no major regressions
- Use lightweight tools (not full load testing)

**3. Sprint-Level Performance Testing:**
- Test new features for performance impact
- Compare before/after performance

**4. Release-Level Performance Testing:**
- Full load and stress testing before major releases
- Use production-like data and environments

**5. Production Monitoring:**
- APM tools (New Relic, Datadog, Dynatrace)
- Real user monitoring (RUM)
- Alert on performance degradation

### Security Testing in Agile

**Challenge:** Security cannot be an afterthought. It must be built into every sprint.

**Agile Security Testing:**

**1. Security in Definition of Done:**
- Input validation criteria
- Authentication/authorization checks
- No hardcoded secrets

**2. Automated Security Scans in CI:**
- SAST on every build
- Dependency vulnerability scanning
- Static analysis for security patterns

**3. Sprint Security Testing:**
- Review new features for security risks
- Test authentication and authorization
- Verify input validation

**4. Penetration Testing:**
- Scheduled (not every sprint)
- Before major releases
- After significant architecture changes

### Usability Testing in Agile

**1. Sprint Reviews as Usability Tests:**
- Stakeholders see working software
- Feedback on user experience
- Quick iterations based on feedback

**2. Lightweight Usability Testing:**
- Test with 3-5 users per sprint
- Focus on new or changed features
- Use paper prototypes or wireframes early

**3. Analytics:**
- Track user behavior in production
- Identify pain points (high drop-off rates, error rates)

---

## 5.5 Agile Testing Quadrants

### The Quadrants Model

Developed by Brian Marick, popularized by Lisa Crispin and Janet Gregory, the Testing Quadrants organize tests by:
- **Business-facing vs. Technology-facing**
- **Supporting programming vs. Critiquing the product**

```
                    Business-Facing
                          |
        Q2                  |                  Q1
   (Critiquing)             |           (Supporting)
   - Exploratory testing    |           - Unit tests
   - Usability testing       |           - Component tests
   - User acceptance tests  |           - TDD
   - Beta testing           |           - Code review
   - Scenario testing       |           - API tests
                          |
   ------------------------+------------------------
                          |
        Q3                  |                  Q4
   (Critiquing)             |           (Supporting)
   - Performance testing    |           - Security tests
   - Load testing           |           - Infrastructure tests
   - Security testing       |           - Integration tests
   - Recovery testing       |           - Monitoring tests
   - Reliability testing    |           - CI/CD tests
                          |
                    Technology-Facing
```

### Quadrant Descriptions

**Q1 — Business-Facing, Supporting Programming:**
- Help the team build the right thing
- Examples: Unit tests, component tests, TDD, API tests, BDD scenarios
- Who: Developers primarily, testers collaborating

**Q2 — Business-Facing, Critiquing the Product:**
- Verify the product meets business needs
- Examples: Exploratory testing, usability testing, UAT, scenario testing, story testing
- Who: Testers primarily, business stakeholders participating

**Q3 — Technology-Facing, Critiquing the Product:**
- Verify non-functional quality
- Examples: Performance, load, security, reliability, recovery testing
- Who: Technical testers, specialists (security, performance)

**Q4 — Technology-Facing, Supporting Programming:**
- Help developers build it right technically
- Examples: Security tests, infrastructure tests, CI/CD tests, monitoring tests, integration tests
- Who: Developers, technical testers, DevOps engineers

### Using the Quadrants in Agile

**Per Sprint:**
- Q1 tests are written during development
- Q2 tests verify the story is complete
- Q3 tests may be done for high-risk features
- Q4 tests are part of the CI/CD pipeline

**Per Release:**
- Q3 tests (performance, security) are done before release
- Q2 tests include full UAT and exploratory testing

---

## Worked Examples

### Worked Example 1: Exploratory Testing Charter

**Charter:** "Explore the shopping cart functionality, focusing on edge cases for quantity updates, removal of items, and behavior when items go out of stock."

**Time Box:** 60 minutes

**Session Notes:**
- Tested adding 1, 10, 100, 0, -1, 9999 items to cart
- Found: Entering "abc" in quantity field causes JavaScript error
- Tested removing items from cart: works correctly
- Tested item going out of stock while in cart: error message is unclear
- Tested cart persistence across sessions: works for logged-in users, lost for guests

**Defects Found:**
- High: Quantity field accepts non-numeric input, causing JS error
- Medium: Out-of-stock message is confusing to users
- Low: Guest cart is lost on browser close

### Worked Example 2: Pairwise Test Design

**Scenario:** Test a mobile app on different devices, OS versions, and network conditions.

**Parameters:**
- Device: iPhone, Android, iPad
- OS: iOS 15, iOS 16, Android 12, Android 13
- Network: Wi-Fi, 4G, 5G, Offline

**Full combinations:** 3 x 4 x 4 = 48

**Pairwise combinations:** ~12 (using a pairwise tool)

**Sample output:**

| Device | OS | Network |
|--------|----|---------|
| iPhone | iOS 16 | Wi-Fi |
| iPhone | iOS 15 | 4G |
| iPhone | Android 12 | 5G |
| Android | iOS 16 | 4G |
| Android | Android 13 | Wi-Fi |
| Android | iOS 15 | Offline |
| iPad | Android 12 | Wi-Fi |
| iPad | iOS 15 | 5G |
| iPad | Android 13 | 4G |
| iPhone | Android 13 | Offline |
| Android | Android 12 | 5G |
| iPad | iOS 16 | Offline |

**Note:** Some combinations are unrealistic (iPhone + Android OS). The pairwise tool should be configured with constraints.

### Worked Example 3: Testing Quadrants Application

**Scenario:** A team is building a payment processing feature.

**Q1 — Supporting, Business-Facing:**
- BDD scenarios for payment flows
- Unit tests for payment calculation logic
- API tests for payment endpoints

**Q2 — Critiquing, Business-Facing:**
- Exploratory testing of checkout flow
- Usability testing with real users
- UAT with payment provider

**Q3 — Critiquing, Technology-Facing:**
- Load testing: 1000 transactions per minute
- Security testing: PCI DSS compliance scan
- Recovery testing: handle payment gateway timeout

**Q4 — Supporting, Technology-Facing:**
- CI pipeline tests for payment service
- Infrastructure tests for payment database
- Monitoring: alert on payment failure rate
