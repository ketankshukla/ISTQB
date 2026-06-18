# 📘 Chapter 1 — Testing Process: Lessons

---

## 🔁 1.1 Testing in Context of a Software Development Lifecycle

### 🔁 Understanding Software Development Lifecycles (K2)

Testing is not an isolated activity. It must be integrated into the software development lifecycle (SDLC) that the organization uses. The CTAL-TA syllabus expects you to understand how test activities map to different lifecycle models.

**Sequential Models (Waterfall, V-Model):**
- Testing occurs in distinct phases after development activities
- Test planning happens early; test execution happens late
- Test analysis and design occur during requirements and design phases
- Strong traceability from requirements → test conditions → test cases
- Risk: Late discovery of defects; limited opportunity for feedback
- Advantage: Clear documentation, formal reviews, structured approach

**Iterative and Incremental Models:**
- Testing occurs in each iteration or increment
- Test activities are repeated for each build or iteration
- Test planning is ongoing; test execution happens multiple times
- Regression testing is critical as new increments may break existing functionality
- Risk: Scope creep across iterations; repeated test execution overhead
- Advantage: Early feedback, adaptability to change

**Agile and DevOps:**
- Testing is continuous and embedded in the development process
- Test activities are performed by the whole team (developers test, testers code)
- Test automation is essential for continuous integration and continuous delivery
- Test analysis and design happen just before or during implementation (just-in-time)
- Exploratory testing is commonly used alongside automated regression tests
- Test planning is lightweight and adaptive; test charters replace detailed test cases
- Risk: Insufficient documentation, technical debt accumulation, automation fragility
- Advantage: Fast feedback, high collaboration, business value focus

**Implications for the Test Analyst:**
- In sequential models: Focus on thorough upfront analysis, detailed test cases, traceability
- In iterative models: Focus on regression testing strategy, iteration planning, scope management
- In agile models: Focus on just-in-time test design, automation, exploratory testing, collaboration
- The test analyst's role adapts to the lifecycle: in sequential models they are more document-focused; in agile models they are more collaboration-focused

**Test Activities in Different Models:**

| Activity | Sequential | Iterative | Agile |
|----------|-----------|-----------|-------|
| Test Planning | Detailed, upfront | Per-iteration | Lightweight, per-sprint |
| Test Analysis | During requirements | Per-increment | Just-in-time |
| Test Design | During design phase | Per-increment | During/just before implementation |
| Test Implementation | After code complete | Per-build | Continuous |
| Test Execution | After implementation | Per-build | Continuous |
| Exit Criteria | Formal gate | Per-iteration | Per-sprint/continuous |

---

## 🗓️ 1.2 Test Planning, Monitoring and Control

### 🗓️ Test Planning (K2)

Test planning is the activity of defining the test objectives and specifying the test activities required to meet those objectives. The test plan is the document that records the test planning.

**Contents of a Test Plan (ISO 29119):**
1. **Context of the testing:** Scope, objectives, constraints, assumptions, dependencies
2. **Risks:** Project risks, product risks, testing risks
3. **Test strategy:** Test levels, test types, test techniques, entry/exit/suspension/resumption criteria
4. **Test estimates:** Effort, schedule, resources, budget
5. **Test schedule:** Activities, milestones, deliverables
6. **Roles and responsibilities:** Who does what
7. **Environment requirements:** Hardware, software, test data, tools
8. **Communication:** Reporting, meetings, escalation

**Test Planning Activities:**
- Understand the project context (business domain, technology, team)
- Identify risks and determine test priorities
- Select test techniques based on test objectives and risk
- Estimate test effort (using experience, metrics, or estimation models)
- Schedule test activities and allocate resources
- Define entry criteria, exit criteria, suspension criteria, and resumption criteria
- Determine the test environment and data requirements
- Plan for test deliverables (test plans, test cases, test reports)

**The Test Analyst's Role in Planning:**
- Provide input on test technique selection (which techniques fit the specifications)
- Estimate effort for test analysis, design, and implementation
- Identify test data and environment requirements
- Define entry criteria for test execution (what must be true before testing starts)
- Define exit criteria (what must be true for testing to be considered complete)

### 🔷 Test Monitoring and Control (K2)

Test monitoring involves ongoing checking of test progress against the plan. Test control involves taking actions to address deviations.

**Test Monitoring Metrics:**

| Metric | Purpose | How to Calculate |
|--------|---------|-----------------|
| Test coverage | How much of the requirements/specifications have been tested | (Number of requirements tested / Total requirements) × 100 |
| Test case execution progress | What percentage of test cases have been run | (Executed test cases / Total test cases) × 100 |
| Test case pass rate | What percentage of executed test cases passed | (Passed test cases / Executed test cases) × 100 |
| Defect density | How many defects per size unit | Total defects / Size (KLOC, function points, story points) |
| Defect detection rate | How many defects found per test hour | Defects found / Test hours |
| Defect removal efficiency | Percentage of defects found before release | (Defects found pre-release / Total defects) × 100 |
| Test effort variance | Difference between actual and planned effort | (Actual effort - Planned effort) / Planned effort × 100 |

**Test Control Actions:**
- Re-prioritize tests when new risks emerge
- Adjust test schedule when delays occur
- Change test scope when project constraints shift
- Add resources or change assignments
- Revise exit criteria when necessary (with stakeholder approval)
- Escalate when exit criteria cannot be met

**Test Reporting:**
- Progress reports: What was planned vs. what was achieved
- Test summary reports: Final report at test completion
- Defect reports: Individual defect documentation
- Test status reports: Current state of testing (often dashboards)

**The Test Analyst's Role in Monitoring:**
- Track progress of test analysis, design, and implementation
- Report on test coverage achieved
- Identify and report risks that affect testing
- Recommend control actions when deviations occur
- Provide input for test progress reports

---

## 🔬 1.3 Test Analysis

### 🔬 What is Test Analysis? (K2)

Test analysis is the activity that identifies **what** needs to be tested. It bridges the gap between the test basis (requirements, user stories, design documents) and test design.

**Test Analysis Activities:**
1. Analyze the test basis to identify testable features and requirements
2. Identify test conditions (things that can be tested)
3. Assess risks associated with each test condition
4. Prioritize test conditions based on risk and business importance
5. Identify dependencies between test conditions
6. Identify test data requirements

**What is a Test Condition?**
A test condition is an item or event of a component or system that could be verified by one or more test cases. Test conditions are the raw material of testing — the "what" that needs to be tested.

**Examples of Test Conditions:**
- "The login system accepts valid username/password combinations"
- "The system rejects passwords shorter than 8 characters"
- "The shopping cart calculates correct tax for California residents"
- "The system displays an error message when the database is unavailable"

**Deriving Test Conditions from Different Test Bases:**

| Test Basis | How to Derive Test Conditions | Example |
|-----------|------------------------------|---------|
| Requirements | Each requirement → at least one test condition | Req: "User must log in with username and password" → TC: Valid login |
| User stories | Acceptance criteria → test conditions | AC: "Given a registered user, when they enter correct credentials, then they access their account" → TC: Valid login |
| Use cases | Precondition + main flow + alternatives → test conditions | UC: "Withdraw Cash" → TC: Valid withdrawal, insufficient funds, invalid PIN |
| Design documents | Each design element → test conditions | Design: "Database table must enforce unique email" → TC: Duplicate email rejection |
| Risk analysis | Each risk → test conditions to mitigate | Risk: "Payment processing fails" → TC: Payment success, payment failure, timeout |

**Test Conditions vs. Test Cases:**
- Test condition: "What to test" (the subject) — e.g., "Password validation"
- Test case: "How to test it" (the procedure) — e.g., "Enter password 'abc' → expect rejection with message 'Password must be at least 8 characters'"

**The Test Analyst's Role in Test Analysis:**
- Review requirements, user stories, and design documents for testability
- Identify ambiguities, inconsistencies, and missing requirements
- Derive test conditions that cover functionality, boundaries, and risks
- Prioritize test conditions based on business impact and technical risk
- Document test conditions for traceability

---

## 🎨 1.4 Test Design

### 🎨 What is Test Design? (K2)

Test design is the activity that defines **how** something will be tested. It transforms test conditions into test cases and test procedures.

**Test Design Activities:**
1. Select appropriate test design techniques for each test condition
2. Design test cases that cover the test conditions
3. Identify test data requirements for each test case
4. Design test procedures (the sequence of test cases)
5. Identify preconditions and postconditions
6. Define expected results (test oracles)

**Test Case Components:**
- Test case ID
- Title/description
- Preconditions (what must be true before the test)
- Input(s) or action(s)
- Expected result(s)
- Postconditions (what should be true after the test)
- Test data requirements
- Associated requirement(s)
- Priority

**Test Design Techniques (introduced here, detailed in Chapter 2):**
- Specification-based: EP, BVA, DT, ST, Use Case, Combinatorial
- Defect-based: Error Guessing, Checklist-based
- Experience-based: Exploratory Testing

**Selecting Test Design Techniques:**

| Factor | Influences |
|--------|-----------|
| Type of specification | Formal specs → EP, BVA, DT; State-based specs → ST; Workflow specs → Use Case |
| Test objective | Functional correctness → EP/BVA; Business rules → DT; Sequence → ST |
| Risk level | High-risk areas → multiple techniques; Low-risk areas → single technique |
| Available information | Detailed specs → specification-based; Limited specs → experience-based |
| Time and budget | Limited → risk-based selection; Adequate → comprehensive coverage |
| Team skills | Technical team → white-box + black-box; Business team → specification-based |

**The Test Analyst's Role in Test Design:**
- Select the most appropriate techniques for each test condition
- Create test cases that are unambiguous, traceable, and maintainable
- Ensure test cases cover positive, negative, and boundary scenarios
- Design test cases that are independent (can be run in any order)
- Define clear expected results using reliable oracles

---

## ⭐ 1.5 Test Implementation

### 🔷 What is Test Implementation? (K2)

Test implementation is the activity that prepares everything needed to execute tests.

**Test Implementation Activities:**
1. Develop and prioritize test procedures (test suites)
2. Create test data (or arrange for data generation)
3. Prepare the test environment (hardware, software, network, tools)
4. Check test environment readiness
5. Verify test cases and test procedures
6. Write test scripts (for automated tests)
7. Configure test tools

**Test Procedures (Test Suites):**
- A test procedure is a sequence of test cases executed together
- Procedures may be grouped by: feature, risk, environment, execution time, dependencies
- Test procedures should minimize setup/teardown overhead
- Consider dependencies between test cases when ordering procedures

**Test Data Preparation:**
- Identify data requirements from test cases
- Create or acquire test data (synthetic, anonymized production, generated)
- Ensure test data covers all test conditions
- Prepare data for positive tests, negative tests, boundary tests, and volume tests
- Document data values, sources, and constraints

**Test Environment Setup:**
- Install and configure hardware, operating systems, middleware
- Install the software under test and any dependent systems
- Configure network, security, and access permissions
- Install and configure test tools
- Verify the environment matches production as closely as needed
- Smoke test the environment before formal test execution

**The Test Analyst's Role in Test Implementation:**
- Prioritize test cases into test procedures
- Specify test data requirements
- Verify the test environment is ready
- Check that test cases are executable in the planned environment
- Prepare or review automated test scripts

---

## ⭐ 1.6 Test Execution

### 🔷 What is Test Execution? (K2)

Test execution is the activity of running tests and recording results.

**Test Execution Activities:**
1. Execute test procedures in the planned sequence
2. Compare actual results with expected results
3. Log test results (pass, fail, blocked, not run)
4. Report defects for failed tests
5. Repeat tests after defect fixes (confirmation testing / re-testing)
6. Perform regression testing after changes
7. Record test execution evidence (screenshots, logs, output files)

**Test Execution Entry Criteria (when can we start testing?):**
- Test environment is ready and smoke tested
- Test cases are implemented and reviewed
- Test data is available
- Build under test is stable enough for testing (no showstopper defects)
- Required test tools are installed and configured
- Test team is trained and available

**Test Execution Suspension Criteria (when should we stop testing temporarily?):**
- Critical defect blocks further testing
- Test environment becomes unavailable
- Build is too unstable to yield meaningful results
- Key dependency system is down
- Test data is corrupted or insufficient

**Test Execution Resumption Criteria (when can we resume?):**
- Critical defect is fixed and verified
- Environment is restored and verified
- New stable build is available
- Dependencies are restored
- Test data is refreshed

**Test Status Values:**
- **Pass:** Actual result matches expected result
- **Fail:** Actual result does not match expected result (defect reported)
- **Blocked:** Cannot execute due to external issue (environment, dependency, defect)
- **Not Run:** Test has not yet been executed
- **In Progress:** Test execution has started but not completed

**The Test Analyst's Role in Test Execution:**
- Execute manual tests according to test procedures
- Monitor automated test execution
- Analyze failures to determine if they are defects, test issues, or environmental issues
- Report defects with sufficient detail for reproduction
- Perform confirmation testing after defect fixes
- Participate in regression testing

---

## 📝 1.7 Evaluating Exit Criteria and Reporting

### ✅ Evaluating Exit Criteria (K2)

Exit criteria define the conditions that must be met for testing to be considered complete.

**Common Exit Criteria:**
- All planned test cases have been executed (or a defined percentage)
- All high-priority test cases have passed
- Defect density is below a defined threshold
- All critical defects have been fixed and verified
- Code coverage meets a defined threshold (if measured)
- Requirements coverage meets a defined threshold
- Test execution is within budget and schedule
- Risk level of remaining defects is acceptable to stakeholders

**Evaluating Exit Criteria:**
1. Collect test execution metrics
2. Compare metrics against exit criteria thresholds
3. Assess the risk of remaining open defects
4. Determine if testing can stop or must continue
5. Document the evaluation and decision
6. Communicate the decision to stakeholders

**When Exit Criteria Are Not Met:**
- Extend testing (requires more time/resources)
- Relax exit criteria (requires stakeholder agreement and risk acceptance)
- Release with known defects (documented in release notes)
- Postpone release (most expensive option)

**Test Summary Report Contents:**
- Test objectives and scope
- What was tested and what was not tested (with reasons)
- Test results summary (pass/fail counts, coverage metrics)
- Defect summary (severity, status, trends)
- Risk assessment of remaining defects
- Exit criteria evaluation
- Recommendations for release decision
- Lessons learned

**The Test Analyst's Role in Exit Criteria Evaluation:**
- Provide test execution metrics and coverage data
- Assess the severity and impact of remaining defects
- Provide input on whether test objectives have been met
- Recommend whether testing should continue or stop

---

## ⭐ 1.8 Test Closure Activities

### 🔷 What Happens When Testing Ends? (K2)

Test closure is the activity that concludes testing and preserves knowledge for future projects.

**Test Closure Activities:**
1. **Archive test assets:** Test plans, test cases, test data, test scripts, test results, defect reports
2. **Hand over testware:** Transfer test assets to maintenance team or next phase
3. **Analyze lessons learned:** What went well, what could be improved
4. **Evaluate test process:** Review the effectiveness of techniques, tools, and approaches
5. **Release test environment:** Clean up, restore baseline, release resources
6. **Write test closure report:** Final document summarizing testing and recommendations

**Why Test Closure Matters:**
- Prevents loss of knowledge when team members leave
- Enables reuse of test cases in future releases
- Provides evidence for compliance or audit requirements
- Identifies process improvements for future projects
- Calculates actual ROI of testing for future planning

**The Test Analyst's Role in Test Closure:**
- Ensure test cases and results are documented and archived
- Contribute to lessons learned sessions
- Provide feedback on technique effectiveness
- Hand over testware to maintenance or operations teams
- Participate in process improvement initiatives

---

## 💡 Worked Examples — Applying Chapter 1 Concepts

### 💡 Worked Example 1: Identifying Test Activities

**Scenario:** A team is using an agile approach with 2-week sprints. During Sprint 5, a developer commits code for the "payment processing" feature on Wednesday. The tester discovers that the test environment is not configured with the payment gateway credentials. The build passes automated unit tests but fails the smoke test in the test environment.

**Task:** Identify which test activities are affected and what actions should be taken.

**Answer:**
1. **Test Implementation is blocked** — the test environment is not ready (missing payment gateway credentials)
2. **Test Execution is suspended** — the smoke test fails, so formal testing cannot proceed
3. **Test Control action:** The test analyst should escalate the environment issue to the team lead/DevOps and define suspension criteria (testing stops until environment is fixed)
4. **Resumption criteria:** Environment is configured with correct credentials and smoke test passes
5. **Test analyst actions:** Document the blocker, communicate to the team, verify the fix when available, resume test execution

**Key exam point:** In agile, test activities happen continuously, but they can still be blocked by implementation issues. The test analyst must communicate clearly and define resumption criteria.

---

### 💡 Worked Example 2: Test Analysis vs. Test Design

**Scenario:** A requirement states: "The system shall accept user ages between 18 and 65 inclusive for registration."

**Task:** Show the difference between test analysis and test design for this requirement.

**Test Analysis Output (What to test):**
- Test Condition 1: Valid age acceptance (ages 18-65)
- Test Condition 2: Rejection of ages below 18
- Test Condition 3: Rejection of ages above 65
- Test Condition 4: Rejection of non-numeric age input
- Test Condition 5: Rejection of empty/null age

**Test Design Output (How to test):**
- Using BVA: Test cases for 17 (min-1), 18 (min), 19 (min+1), 40 (nominal), 64 (max-1), 65 (max), 66 (max+1)
- Using EP: Test cases for valid partition (18-65), invalid partitions (<18, >65)
- Expected results defined for each: accepted with confirmation or rejected with specific error message

**Key exam point:** Test analysis identifies WHAT to test (conditions). Test design defines HOW to test it (cases with inputs, actions, expected results). Many exam questions test whether you can distinguish these activities.

---

### 💡 Worked Example 3: Entry, Suspension, and Exit Criteria

**Scenario:** A project is testing a mobile banking app. Testing is planned for 4 weeks. The test plan includes these criteria:

**Entry Criteria:**
- Build passes automated smoke tests
- Test environment matches production specification
- Test data for 100 test accounts is available

**Suspension Criteria:**
- Critical defect blocks login functionality
- Test environment is unavailable for >4 hours
- Build crash rate exceeds 20% during smoke tests

**Exit Criteria:**
- 100% of planned test cases executed
- 95% of high-priority test cases passed
- No critical or high-severity defects open
- Code coverage >= 80%

**Task:** For each situation, determine whether testing should start, continue, be suspended, or stop.

**Situations and Answers:**

A. Week 2: Build passes smoke tests, environment is ready, test data is loaded. First day of execution.
- **Decision:** Testing can START (all entry criteria met)

B. Week 3: A critical defect prevents all users from logging in. 60% of test cases require login.
- **Decision:** Testing should be SUSPENDED (login is a critical path; suspension criterion met). Fix the defect, verify, then resume.

C. Week 4: 100% of test cases executed, 97% of high-priority passed, 2 medium defects open, code coverage 82%.
- **Decision:** Testing can STOP (all exit criteria met). The 2 medium defects are acceptable with stakeholder agreement.

D. Week 2: Build crashes during smoke test 30% of the time. Environment is ready.
- **Decision:** Testing should be SUSPENDED (crash rate exceeds 20% suspension criterion). Stabilize the build before resuming.

**Key exam point:** Be able to match real situations to criteria. Questions often describe a scenario and ask you to identify the correct action.
