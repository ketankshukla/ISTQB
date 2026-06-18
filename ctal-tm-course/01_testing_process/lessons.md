# 📘 Chapter 1 — Testing Process: Lessons

---

## 🗓️ 1.1 Test Planning

### 🗓️ What Is Test Planning?

Test planning is the activity of defining the test objectives and specifying the test activities required to meet those objectives. It involves deciding what to test, how to test it, who will do the testing, and when it will be done.

### 🗓️ Test Planning Activities

**1. Determine the Scope of Testing:**
- Identify what will be tested and what will not be tested
- Identify the test levels (component, integration, system, acceptance)
- Identify the test types (functional, non-functional, structural, change-related)
- Consider regulatory, contractual, and organizational requirements

**2. Identify Risks and Risk Mitigation:**
- Product risks: what could go wrong with the software?
- Project risks: what could go wrong with the project?
- Risk-based testing prioritizes tests that address the highest risks

**3. Define Test Objectives:**
- Find as many defects as possible
- Provide information for release decisions
- Gain confidence that the system works as expected
- Prevent defects through early testing activities
- Comply with contractual or regulatory requirements

**4. Determine Test Approach:**
- Select test techniques (black-box, white-box, experience-based)
- Select test levels and types to be performed
- Decide on manual vs. automated testing balance
- Plan for regression testing
- Consider static testing (reviews) as part of the approach

**5. Identify Resources:**
- Staff: number of testers, skills required, training needs
- Environment: test hardware, software, network, tools
- Testware: test data, test scripts, test documentation
- Budget: costs for staffing, tools, environments, training

**6. Define Schedule and Milestones:**
- Start and end dates for each test level
- Milestones: test plan approved, test design complete, test execution complete, test closure
- Dependencies on other project activities (development, environment setup)

**7. Define Entry and Exit Criteria:**
- Entry criteria: conditions that must be met before testing can begin
- Exit criteria: conditions that must be met before testing can be considered complete

### 🗓️ Test Plan Template Contents

A typical test plan includes:

1. **Test Plan Identifier** — unique reference
2. **Introduction** — purpose, scope, objectives
3. **Test Items** — what is being tested (features, requirements)
4. **Features to Be Tested** — specific functionalities
5. **Features Not to Be Tested** — explicitly excluded items
6. **Approach** — test techniques, test levels, manual/automated
7. **Item Pass/Fail Criteria** — exit criteria
8. **Suspension and Resumption Criteria** — when to pause and restart testing
9. **Test Deliverables** — documents, reports, data to be produced
10. **Testing Tasks** — major activities and tasks
11. **Environmental Needs** — hardware, software, tools, facilities
12. **Responsibilities** — roles and responsibilities
13. **Staffing and Training Needs**
14. **Schedule** — milestones, dependencies
15. **Risks and Contingencies**
16. **Approvals** — who must approve the plan

### ♟️ Test Policy vs. Test Strategy vs. Test Plan vs. Test Approach

| Document | Level | Purpose | Audience |
|----------|-------|---------|----------|
| **Test Policy** | Organizational | High-level principles and objectives for testing across the organization | Senior management |
| **Test Strategy** | Program / Project | High-level approach for a program or project | Project management |
| **Test Plan** | Project / Phase | Detailed plan for a specific test project or phase | Test team, project management |
| **Test Approach** | Specific | How testing will be performed for a specific project | Test team |

**Relationship:**
- Test policy guides test strategy
- Test strategy guides test plan
- Test plan describes the test approach

---

## ⭐ 1.2 Test Monitoring and Control

### 🔷 Test Monitoring

**Definition:** The activity that tracks test progress against the test plan.

**Monitoring Activities:**
1. **Track Test Progress:**
   - Test cases designed vs. planned
   - Test cases executed vs. planned
   - Defects found vs. expected
   - Test coverage achieved vs. target

2. **Collect and Analyze Metrics:**
   - **Test case execution metrics:**
     - Number of test cases executed
     - Pass rate (% of test cases passed)
     - Fail rate (% of test cases failed)
     - Blocked rate (% of test cases that cannot be executed)

   - **Defect metrics:**
     - Defects found (total, by severity, by priority)
     - Defect fix rate (defects fixed per day/week)
     - Defect density (defects per size unit)
     - Defect age (time from detection to closure)
     - Defect removal efficiency

   - **Coverage metrics:**
     - Requirements coverage (% of requirements tested)
     - Code coverage (statement, branch, path)
     - Risk coverage (% of identified risks addressed by tests)

   - **Cost metrics:**
     - Actual cost vs. budget
     - Cost per defect found
     - Cost of testing vs. cost of quality

3. **Report Status:**
   - Test status reports to stakeholders
   - Dashboards showing key metrics
   - Risk-based status (green/yellow/red)

**Example Test Status Report:**

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Test cases executed | 500 | 450 | Yellow (90%) |
| Pass rate | 95% | 92% | Yellow |
| Critical defects open | 0 | 2 | Red |
| Requirements coverage | 100% | 88% | Yellow |

### 🔷 Test Control

**Definition:** The activity that compares actual progress against the plan and takes corrective action when necessary.

**Control Actions:**
1. **Adjust Test Schedule:**
   - Extend schedule if testing is behind
   - Re-prioritize tests if time is limited
   - Add resources if budget allows

2. **Adjust Test Scope:**
   - Reduce scope if time is limited (focus on high-risk areas)
   - Increase scope if new risks are identified
   - Defer low-priority tests to a later release

3. **Adjust Test Approach:**
   - Increase automation if manual testing is too slow
   - Change test techniques if current approach is not finding defects
   - Add exploratory testing if scripted tests are not finding new issues

4. **Manage Defects:**
   - Escalate critical defects
   - Adjust exit criteria if defect levels are not acceptable
   - Request fixes for high-priority defects

5. **Manage Risks:**
   - Update risk assessment based on new information
   - Implement risk mitigation strategies
   - Communicate risk status to stakeholders

6. **Manage Resources:**
   - Reallocate staff if some areas need more attention
   - Request additional resources if needed
   - Adjust training if skills gaps are identified

**Monitoring vs. Control:**
- **Monitoring** = observing and measuring (information gathering)
- **Control** = acting on the information (decision-making and action)

### 💡 Example: Test Monitoring and Control in Practice

**Week 3 of System Testing:**

**Monitoring Data:**
- Test cases planned: 400
- Test cases executed: 200
- Pass rate: 75%
- Critical defects found: 8
- Critical defects fixed: 3
- Schedule: 3 weeks remaining

**Analysis:**
- Execution is 50% complete with 50% of schedule remaining (on track)
- Pass rate is below target (95%)
- Critical defect backlog is growing (8 found, 3 fixed = net +5)
- At current fix rate, critical defects will not be resolved by end of testing

**Control Action:**
- Escalate critical defects to development manager
- Request additional developers for defect fixing
- Prioritize test execution on high-risk areas
- Consider extending schedule if critical defects cannot be resolved
- Update stakeholders on risk of release delay

---

## 🔬 1.3 Test Analysis and Design

### 🔬 Test Analysis

**Definition:** The activity that identifies test conditions by analyzing the test basis.

**Test Basis:**
- Requirements specifications
- Design documents
- User stories
- Use cases
- Source code (for white-box testing)
- Risk analysis reports

**Outputs of Test Analysis:**
- Test conditions (what to test)
- Traceability matrix (links between test basis and test conditions)
- Identified risks that need to be tested

**Example:**
- Requirement: "The system shall allow users to reset their password"
- Test conditions:
  - Valid email address provided → password reset link sent
  - Invalid email address → error message displayed
  - Expired reset link → appropriate error message
  - Successful password reset → user can log in with new password

### 🎨 Test Design

**Definition:** The activity that transforms test conditions into test cases and test procedures.

**Activities:**
1. **Prioritize Test Conditions:**
   - Based on risk (high-risk items first)
   - Based on business priority
   - Based on likelihood of defects

2. **Design Test Cases:**
   - Define inputs, preconditions, expected results, postconditions
   - Use test techniques (equivalence partitioning, boundary value, decision tables, etc.)
   - Consider positive and negative tests

3. **Design Test Data:**
   - Identify specific input values
   - Prepare test data (or plan for generation)
   - Consider data privacy and security

4. **Design Test Environment:**
   - Identify hardware, software, and network requirements
   - Plan for test environment setup
   - Consider dependencies on other systems

**Outputs:**
- Test cases
- Test data requirements
- Test environment requirements
- Traceability between test cases and requirements

### 🔷 Test Implementation

**Definition:** The activity that creates test procedures, assembles test suites, and prepares test data and environment.

**Activities:**
1. **Create Test Procedures:**
   - Step-by-step instructions for executing test cases
   - Include preconditions and setup steps
   - Include cleanup steps

2. **Assemble Test Suites:**
   - Group test cases into logical test suites
   - Order tests to minimize setup/teardown
   - Consider dependencies between tests

3. **Prepare Test Data:**
   - Create or extract test data
   - Anonymize sensitive data
   - Ensure data is valid for the test environment

4. **Prepare Test Environment:**
   - Set up hardware and software
   - Configure the system under test
   - Verify environment is ready

5. **Prepare Test Automation:**
   - Develop automated test scripts
   - Set up test automation framework
   - Verify automation runs correctly

---

## ⭐ 1.4 Test Execution and Completion

### 🔷 Test Execution

**Definition:** The activity that runs test cases and records results.

**Activities:**
1. **Execute Test Cases:**
   - Follow test procedures
   - Compare actual results with expected results
   - Record pass/fail status

2. **Log Incidents:**
   - Record any deviation from expected behavior
   - Classify as defect, test issue, or environmental issue
   - Assign severity and priority

3. **Retest and Regression Test:**
   - Retest defects after they are fixed
   - Perform regression testing to ensure fixes did not introduce new defects

4. **Report Status:**
   - Update test execution metrics
   - Report progress to stakeholders
   - Escalate issues as needed

### 🔷 Test Completion

**Definition:** The activity that summarizes test results, evaluates test objectives, and documents lessons learned.

**Activities:**
1. **Evaluate Exit Criteria:**
   - Verify all exit criteria have been met
   - If not met, document deviations and obtain stakeholder agreement

2. **Create Test Summary Report:**
   - Summary of testing performed
   - Test results (pass/fail, coverage, defects)
   - Evaluation of test objectives
   - Recommendations for future testing

3. **Archive Testware:**
   - Store test plans, test cases, test data, and test results
   - Ensure traceability information is preserved
   - Make testware available for future maintenance testing

4. **Lessons Learned:**
   - What worked well?
   - What could be improved?
   - What should be done differently next time?
   - Update organizational test process accordingly

### ✅ Entry and Exit Criteria

**Entry Criteria (Examples):**
- Requirements are approved and baselined
- Test environment is set up and available
- Test data is prepared
- Development has completed unit testing
- Test plan is approved

**Exit Criteria (Examples):**
- All test cases have been executed
- 95% of test cases have passed
- No critical or high-priority defects remain open
- Code coverage of 80% has been achieved
- Test summary report is complete
- All identified risks have been addressed

**Important:** Entry and exit criteria should be defined early (in the test plan) and agreed with stakeholders.

---

## 💡 Worked Examples

### 💡 Worked Example 1: Risk-Based Test Prioritization

**Scenario:** A banking system has three modules being tested:
- Module A: Funds transfer (high risk — financial transactions)
- Module B: Account balance inquiry (medium risk — read-only)
- Module C: User profile management (low risk — non-financial)

**Risk Analysis:**

| Module | Probability of Defect | Impact if Defect | Risk Priority |
|--------|----------------------|-----------------|---------------|
| A | High | Critical | Very High |
| B | Medium | Low | Medium |
| C | Low | Low | Low |

**Test Prioritization:**
1. Allocate 60% of testing effort to Module A
2. Allocate 30% of testing effort to Module B
3. Allocate 10% of testing effort to Module C

### 💡 Worked Example 2: Estimation Using Wideband Delphi

**Scenario:** Estimate effort for testing a new e-commerce system.

**Step 1:** Each expert independently estimates:
- Expert 1: 400 person-hours
- Expert 2: 600 person-hours
- Expert 3: 500 person-hours
- Expert 4: 450 person-hours

**Step 2:** Discuss differences. Expert 2 explains higher estimate includes integration testing with third-party payment gateway. Others agree this is important.

**Step 3:** Re-estimate:
- Expert 1: 550 person-hours
- Expert 2: 580 person-hours
- Expert 3: 560 person-hours
- Expert 4: 540 person-hours

**Step 4:** Consensus estimate: 558 person-hours (average of revised estimates)
