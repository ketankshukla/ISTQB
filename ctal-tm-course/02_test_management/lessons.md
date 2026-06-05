# Chapter 2 — Test Management: Lessons

---

## 2.1 Test Organization

### Why Test Organization Matters

The way a testing team is organized affects objectivity, communication, efficiency, and the quality of the testing performed. Test managers must understand the trade-offs of different organizational models.

### Types of Test Organization

**1. Independent Testing**

**Definition:** Testing is performed by an organization that is separate from the development organization.

**Variants:**
- **External test company:** Testing performed by a third-party vendor
- **Separate internal department:** A testing department independent of development
- **Independent test team within project:** Testers report to a test manager, not the project manager

**Advantages:**
- Greater objectivity (testers are not influenced by development pressures)
- Different perspective and approach
- Can provide unbiased quality assessment
- Easier to enforce quality standards

**Disadvantages:**
- Potential communication barriers between testers and developers
- Testers may have less domain knowledge
- May be perceived as adversarial
- Higher cost and overhead
- Delayed feedback if testers are not involved early

**2. Integrated Testing**

**Definition:** Testing is performed by the development team or within the same organizational unit.

**Variants:**
- **Developers test their own code:** Unit testing performed by developers
- **Cross-functional teams:** Testers embedded in development teams (agile)
- **DevOps:** Everyone is responsible for quality

**Advantages:**
- Better communication and collaboration
- Faster feedback
- Shared understanding of the system
- Lower overhead
- Testers gain domain knowledge

**Disadvantages:**
- Potential loss of objectivity
- May lack specialized testing skills
- Testing may be deprioritized under schedule pressure
- Conflict of interest (team may be reluctant to report defects)

**3. Matrix Organization**

**Definition:** Testers report to both a functional manager (testing) and a project manager.

**Advantages:**
- Testers maintain testing skills through functional manager
- Project needs are met through project manager
- Shared resources across projects
- Career path in testing discipline

**Disadvantages:**
- Dual reporting can create conflicts
- Competing priorities between projects
- Testers may be pulled between multiple projects
- More complex management structure

### Choosing the Right Organization

| Factor | Independent | Integrated | Matrix |
|--------|------------|-----------|--------|
| Objectivity needed | High | Low | Medium |
| Speed of feedback | Slower | Faster | Medium |
| Domain knowledge | May be lower | Higher | Medium |
| Cost | Higher | Lower | Medium |
| Collaboration | May be weaker | Strong | Medium |
| Scalability | Good | Limited | Good |

### Test Manager's Role in Organization

The test manager is responsible for:
- Defining the test organization structure
- Hiring and developing test staff
- Ensuring testers have appropriate skills and resources
- Managing relationships with stakeholders (development, business, project management)
- Advocating for testing within the organization
- Ensuring objectivity while maintaining collaboration

---

## 2.2 Test Estimation

### Why Estimation Is Critical

Test estimation affects:
- Project scheduling and resource allocation
- Budget and cost management
- Stakeholder expectations
- Risk assessment

**Consequences of poor estimation:**
- Over-optimistic: testing is rushed, quality suffers
- Over-pessimistic: unnecessary cost and schedule padding

### Estimation Techniques

**1. Bottom-Up Estimation**

**Process:**
1. Break down testing into individual tasks (work packages)
2. Estimate effort for each task
3. Sum task estimates to get total estimate

**Formula:**
```
Total Effort = Σ (Effort for each task)
```

**Advantages:**
- Detailed and accurate if tasks are well understood
- Helps identify all required activities
- Easy to adjust individual tasks

**Disadvantages:**
- Time-consuming to create detailed breakdown
- May miss integration or overhead activities
- Can be overly optimistic if tasks are underestimated

**Example:**

| Task | Effort (person-days) |
|------|---------------------|
| Test planning | 5 |
| Test analysis (100 requirements) | 10 |
| Test design (500 test cases) | 15 |
| Test implementation | 8 |
| Test execution (round 1) | 20 |
| Defect retest | 10 |
| Test completion | 5 |
| **Total** | **73** |

**2. Top-Down Estimation**

**Process:**
1. Estimate overall testing effort based on project size or historical data
2. Allocate the total estimate to individual phases or activities

**Methods:**
- **Percentage of development effort:** Testing = 30-50% of development effort
- **Function points:** Estimate testing per function point
- **Use case points:** Estimate testing per use case complexity
- **Historical analogy:** Compare to similar past projects

**Advantages:**
- Quick to produce
- Good for early project phases when details are unknown
- Based on organizational experience

**Disadvantages:**
- Less accurate for unique or complex projects
- May not account for project-specific risks
- Can perpetuate past estimation errors

**Example:**
- Development effort estimated at 200 person-days
- Historical data shows testing is 40% of development
- Test estimate = 200 × 0.40 = 80 person-days
- Allocate: Planning 10%, Analysis 15%, Design 20%, Execution 40%, Completion 15%

**3. Wideband Delphi (Expert-Based Estimation)**

**Process:**
1. Select a panel of experts (3-7 people)
2. Each expert independently estimates effort
3. Experts discuss their estimates (without revealing who made which estimate)
4. Experts revise estimates based on discussion
5. Repeat until consensus is reached or range is acceptable

**Advantages:**
- Leverages collective expertise
- Reduces individual bias
- Discusses assumptions openly
- Good for novel projects

**Disadvantages:**
- Time-consuming
- Requires experienced experts
- Group dynamics can influence estimates
- May converge on average rather than best estimate

**4. Experience-Based Estimation**

**Process:**
- Use the estimator's personal experience with similar projects
- Adjust for differences between past and current projects

**Best used when:**
- Estimator has deep experience with similar projects
- Project is similar to previous work
- Quick estimate is needed

**Risk:** Highly dependent on individual experience; may not account for new risks.

### Factors Affecting Test Estimation

1. **Scope of testing:** More test levels = more effort
2. **Test types:** Non-functional testing (performance, security) often takes more effort
3. **Complexity:** Complex systems require more testing
4. **Quality expectations:** Higher quality targets = more effort
5. **Risks:** High-risk areas need more thorough testing
6. **Team experience:** Experienced teams work faster
7. **Tools and automation:** Good tools reduce effort
8. **Defect density expected:** More defects = more retesting
9. **Regression needs:** Frequent changes = more regression testing
10. **Documentation quality:** Good requirements reduce analysis effort

### Estimation Contingency

**Contingency:** Additional effort added to account for uncertainty.

**Typical contingency:** 10-20% of base estimate

**When to add more contingency:**
- New technology
- Inexperienced team
- Unclear requirements
- Tight schedule
- High-risk project

---

## 2.3 Risk-Based Testing

### What Is Risk-Based Testing?

Risk-based testing (RBT) is an approach to testing that prioritizes test design, implementation, and execution based on the assessed risk of failure and the impact of that failure.

**Key principle:** Test more where the risk is higher.

### Risk Identification

**Product Risks (What could go wrong with the product?):**
- Functional failures (system does not do what it should)
- Performance failures (system too slow)
- Security vulnerabilities
- Usability problems
- Compatibility issues
- Reliability failures (crashes, data loss)

**Project Risks (What could go wrong with the project?):**
- Schedule slippage
- Budget overrun
- Staff turnover
- Technology issues
- Requirements changes
- Stakeholder conflicts

**Risk Identification Techniques:**
- Expert interviews
- Brainstorming sessions
- Checklists
- Failure Mode and Effect Analysis (FMEA)
- Fault tree analysis
- Historical data analysis
- Risk workshops

### Risk Assessment

**Two dimensions:**
1. **Likelihood (Probability):** How likely is the risk to occur?
   - Scale: Very Low, Low, Medium, High, Very High
   - Or numeric: 1-5 scale

2. **Impact (Severity):** How bad would it be if the risk occurred?
   - Scale: Very Low, Low, Medium, High, Very High
   - Or numeric: 1-5 scale

**Risk Priority = Likelihood × Impact**

**Example Risk Assessment Matrix:**

| Risk | Likelihood (1-5) | Impact (1-5) | Risk Priority |
|------|-------------------|--------------|---------------|
| Payment processing fails | 2 | 5 | 10 |
| UI cosmetic issue | 4 | 1 | 4 |
| Login security flaw | 2 | 5 | 10 |
| Search returns wrong results | 3 | 3 | 9 |
| Report formatting incorrect | 3 | 2 | 6 |

### Risk Mitigation through Testing

**Mitigation Strategies:**
1. **Test more for high-risk areas:**
   - More test cases
   - More thorough techniques
   - Earlier testing

2. **Reduce likelihood:**
   - Reviews and static analysis
   - Better requirements
   - Training

3. **Reduce impact:**
   - Error handling
   - Redundancy
   - Backup and recovery

4. **Transfer risk:**
   - Insurance
   - Third-party testing
   - Escrow agreements

5. **Accept risk:**
   - For low-priority, low-impact items
   - With management approval

### Risk-Based Test Prioritization

**Process:**
1. Identify all test conditions
2. Assess risk for each condition (likelihood × impact)
3. Sort test conditions by risk priority
4. Design and execute tests starting with highest risk
5. Allocate more effort to high-risk areas

**Example:**

| Test Condition | Risk Likelihood | Risk Impact | Priority | Test Effort Allocated |
|----------------|----------------|-------------|----------|----------------------|
| Funds transfer | High | Critical | 1 | 30% |
| User login | Medium | High | 2 | 20% |
| Password reset | Medium | Medium | 3 | 15% |
| Profile update | Low | Low | 4 | 10% |
| Help page content | Low | Very Low | 5 | 5% |

---

## 2.4 Defect Management

### Defect Lifecycle

A typical defect lifecycle:

```
[New] → [Assigned] → [In Progress] → [Fixed] → [Ready for Retest] → [Closed]
   ↓         ↓              ↓            ↓
[Rejected] [Deferred]    [Cannot       [Reopen]
            Reproduce]
```

**States:**
- **New:** Defect is reported, not yet assigned
- **Assigned:** Defect is assigned to a developer
- **In Progress:** Developer is fixing the defect
- **Fixed:** Developer believes the defect is fixed
- **Ready for Retest:** Fix is available for retesting
- **Closed:** Tester confirms fix is correct; defect is closed
- **Rejected:** Not a valid defect
- **Deferred:** Will be fixed in a future release
- **Cannot Reproduce:** Developer cannot reproduce the issue
- **Reopen:** Fix did not resolve the defect

### Defect Classification

**Severity (Technical Impact):**
- **Critical:** System crash, data loss, security breach
- **Major:** Major functionality not working
- **Minor:** Functionality works but has significant limitations
- **Cosmetic:** UI issues, typos, formatting

**Priority (Business Impact / Fix Order):**
- **Urgent:** Must be fixed immediately (showstopper)
- **High:** Should be fixed in current release
- **Medium:** Should be fixed if time permits
- **Low:** Fix in future release if at all

**Severity vs. Priority:**
- Severity = how bad is the defect technically?
- Priority = when should it be fixed?

**Example:**
- A misspelled company name on the home page: low severity (cosmetic) but high priority (customer-facing, embarrassing)
- A memory leak that causes a crash after 24 hours: high severity (crash) but low priority (unlikely to occur in production before next release)

### Defect Metrics

**1. Defect Density:**
```
Defect Density = Number of Defects / Size of Work Product
```
Example: 50 defects in 10,000 lines of code = 5 defects per KLOC

**2. Defect Removal Efficiency:**
```
Defect Removal Efficiency = (Defects Found in Testing / Total Defects Found) × 100
```

**3. Defect Detection Percentage (DDP):**
```
DDP = (Defects Found by Testing / Total Defects) × 100
```

**4. Defect Age:**
- Time from defect detection to defect closure
- Trend: decreasing age is good

**5. Defect Distribution:**
- By module/component
- By severity
- By priority
- By detection phase (requirements, design, code, testing, production)

**6. Defect Trend:**
- Defects found per week
- Defects fixed per week
- Open defect backlog

**Example Defect Report:**

| Metric | Week 1 | Week 2 | Week 3 | Week 4 |
|--------|--------|--------|--------|--------|
| Defects found | 45 | 38 | 22 | 12 |
| Defects fixed | 20 | 30 | 35 | 40 |
| Open defects | 45 | 53 | 40 | 12 |
| Critical open | 8 | 6 | 3 | 0 |

**Interpretation:**
- Defect find rate is decreasing (good — may indicate quality is improving)
- Fix rate is increasing (good — team is resolving faster)
- Open defects peaked in Week 2 but are now declining
- Critical defects are under control

---

## 2.5 Test Metrics

### Why Test Metrics Matter

Test metrics provide objective data for:
- Tracking progress against the test plan
- Making informed decisions about testing
- Communicating status to stakeholders
- Identifying trends and problems early
- Improving the test process over time

### Types of Test Metrics

**1. Progress Metrics:**
- Test cases designed vs. planned
- Test cases executed vs. planned
- Test cases passed/failed/blocked
- Requirements coverage achieved

**2. Quality Metrics:**
- Defect density
- Defect severity distribution
- Defect priority distribution
- Defect removal efficiency
- Test effectiveness (defects found per test case)

**3. Cost Metrics:**
- Actual cost vs. budget
- Cost per defect found
- Cost of testing vs. cost of defects in production
- ROI of test automation

**4. Process Metrics:**
- Test case preparation productivity
- Test execution productivity
- Defect turnaround time
- Test case reusability

### Using Metrics for Management Decisions

**When to release?**
- Exit criteria met?
- Defect trend acceptable?
- Critical risks addressed?
- Stakeholder confidence achieved?

**When to add resources?**
- Test execution falling behind schedule?
- Defect backlog growing?
- Critical defects not being fixed?

**When to change approach?**
- Defect find rate too low?
- Test cases finding no defects?
- Automation not providing expected ROI?

### Metric Pitfalls

1. **Gaming the metrics:** Teams may optimize for the metric rather than quality (e.g., passing tests that should fail)
2. **Too many metrics:** Collecting data that is never used wastes effort
3. **Wrong metrics:** Measuring activity rather than outcomes (e.g., number of test cases rather than defect find rate)
4. **Lack of context:** Metrics without context can be misleading (e.g., high defect count may mean good testing, not bad quality)

---

## 2.6 Test Team Management

### Building the Test Team

**Roles in a Test Team:**
- **Test Manager / Lead:** Plans, organizes, controls testing
- **Senior Test Analyst:** Designs tests, mentors others
- **Test Analyst:** Designs and executes tests
- **Test Engineer / Automation Specialist:** Develops automated tests
- **Test Administrator:** Manages environments and tools

**Skills Required:**
- **Technical skills:** Test design, automation, tools
- **Domain knowledge:** Understanding the business and application
- **Analytical skills:** Problem-solving, logical thinking
- **Communication skills:** Writing reports, presenting findings
- **Interpersonal skills:** Collaboration, negotiation

### Motivating the Test Team

**Factors that motivate testers:**
- Recognition for finding important defects
- Career development opportunities
- Variety in work
- Autonomy and trust
- Fair workload
- Good tools and environment
- Clear goals and feedback

**Demotivating factors:**
- Blame culture
- Unrealistic schedules
- Lack of resources
- Being ignored or overruled
- Repetitive work without purpose
- Poor quality of software (feels like endless testing)

### Communication

**The test manager must communicate with:**
- **Project management:** Status, risks, resource needs
- **Development team:** Defects, requirements clarifications
- **Business stakeholders:** Quality assessments, release recommendations
- **Upper management:** Budget, ROI, strategic value
- **Test team:** Goals, feedback, motivation

**Communication best practices:**
- Use metrics to support arguments
- Tailor communication to the audience
- Be objective, not emotional
- Propose solutions, not just problems
- Document decisions and agreements

---

## Worked Examples

### Worked Example 1: Risk Priority Calculation

**Scenario:** A healthcare system has the following risks:

| Risk | Likelihood | Impact |
|------|-----------|--------|
| Patient data is not encrypted | Medium (3) | Critical (5) |
| Appointment booking is slow | High (4) | Low (2) |
| Incorrect billing calculation | Low (2) | High (4) |
| UI button misaligned | High (4) | Very Low (1) |

**Calculation:**
- Risk 1: 3 × 5 = 15 (Highest)
- Risk 2: 4 × 2 = 8
- Risk 3: 2 × 4 = 8
- Risk 4: 4 × 1 = 4 (Lowest)

**Testing Priority:**
1. Encrypt patient data (highest risk)
2. Appointment booking and billing (equal priority)
3. UI alignment (lowest risk)

### Worked Example 2: Defect Metrics Analysis

**Data:**
- Total defects found in testing: 180
- Total defects found in production: 20
- Total defects = 200

**Defect Detection Percentage (DDP):**
```
DDP = (180 / 200) × 100 = 90%
```

**Interpretation:**
- 90% of defects were caught before production — good
- 10% escaped to production — investigate why
- Goal for many organizations: 95%+ DDP

### Worked Example 3: Estimation Using Percentage Method

**Given:**
- Development effort: 300 person-days
- Historical ratio: testing = 35% of development

**Calculation:**
```
Test effort = 300 × 0.35 = 105 person-days
```

**Allocation:**
- Test planning: 10% = 10.5 days
- Test analysis and design: 25% = 26.25 days
- Test implementation: 15% = 15.75 days
- Test execution: 35% = 36.75 days
- Test completion: 15% = 15.75 days
