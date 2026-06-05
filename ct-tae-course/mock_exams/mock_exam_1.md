# CTAL-TAE Mock Exam 1

**Instructions:**
- 40 questions
- 90 minutes
- Single best answer for each question
- No negative marking

---

### Q1

Test automation is BEST described as:

A. The execution of tests by a tool instead of a human
B. The use of software to perform or support test activities
C. The manual creation of test cases without tools
D. The replacement of all manual testing activities

---

### Q2

Which of the following is a PRIMARY risk of test automation?

A. Tests run too quickly
B. High maintenance costs when the application changes
C. Too few defects are found
D. Testers become more skilled

---

### Q3

The test automation pyramid recommends:

A. Many UI tests and few unit tests
B. Many unit tests, some integration tests, and few UI tests
C. Equal numbers of unit, integration, and UI tests
D. Only UI tests for complete coverage

---

### Q4

The PRIMARY purpose of a Proof of Concept (PoC) is to:

A. Demonstrate business value and ROI
B. Verify that a tool is technically feasible in the target environment
C. Replace the need for tool evaluation
D. Train the entire team on the new tool

---

### Q5

Total Cost of Ownership (TCO) for a test tool includes all EXCEPT:

A. License fees
B. Training costs
C. The tool's market popularity
D. Maintenance and support costs

---

### Q6

Which TAA layer is responsible for creating or selecting test cases?

A. Test Generation Layer
B. Test Definition Layer
C. Test Execution Layer
D. Test Adaptation Layer

---

### Q7

Which TAA layer interfaces directly with the System Under Test (SUT)?

A. Test Generation Layer
B. Test Definition Layer
C. Test Execution Layer
D. Test Adaptation Layer

---

### Q8

Testware includes all EXCEPT:

A. Test scripts
B. Test data
C. The SUT source code
D. Expected results

---

### Q9

A framework where the same test logic runs with multiple data sets from external files is:

A. Keyword-driven
B. Data-driven
C. Modular
D. Linear

---

### Q10

The Page Object Model (POM) is used to:

A. Record user actions for replay
B. Separate UI locators from test logic
C. Generate random test data
D. Execute tests in parallel

---

### Q11

In a well-designed TAS, assertions should be placed in:

A. Page Objects
B. Test scripts
C. The Test Adaptation Layer
D. Configuration files

---

### Q12

Explicit waits in test scripts are preferred over fixed sleeps because:

A. They make tests longer
B. They wait only as long as necessary, improving speed and reliability
C. They are easier to write
D. They eliminate the need for error handling

---

### Q13

Deploying a TAS to one team first, gathering feedback, and then expanding is called:

A. Big-bang deployment
B. Pilot deployment
C. Incremental deployment
D. Parallel deployment

---

### Q14

Code coverage measures:

A. The percentage of defects found
B. The percentage of code statements executed by tests
C. The percentage of requirements tested
D. The percentage of tests that pass

---

### Q15

ROI for test automation is calculated as:

A. Benefits / Costs
B. (Benefits - Costs) / Costs
C. Costs / Benefits
D. (Benefits + Costs) / Benefits

---

### Q16

Transitioning from manual to automated testing on an existing project is called:

A. Greenfield transition
B. Brownfield transition
C. Migration
D. Retirement

---

### Q17

Updating a test script to accommodate a renamed button on the SUT is:

A. Corrective maintenance
B. Adaptive maintenance
C. Perfective maintenance
D. No maintenance

---

### Q18

Refactoring a test script to improve readability and reduce duplication is:

A. Corrective maintenance
B. Adaptive maintenance
C. Perfective maintenance
D. Retirement

---

### Q19

A test should be retired when:

A. It has passed 100 times in a row
B. The feature it tests has been removed from the SUT
C. It takes longer than 1 minute to run
D. It was written by a former employee

---

### Q20

Legacy automation is BEST described as:

A. Brand new automation using the latest tools
B. Existing automation that is difficult to maintain and may use outdated practices
C. Automation that has never been run
D. Manual testing that has been documented

---

### Q21

A team has 500 UI tests but only 50 unit tests. Their suite takes 5 hours to run. The MOST significant problem is:

A. They have too many unit tests
B. They have an inverted test pyramid, leading to slow feedback and high maintenance
C. The suite runs too quickly
D. They need more UI tests

---

### Q22

A Proof of Value (PoV) is conducted to:

A. Verify technical compatibility with the SUT
B. Demonstrate that the tool delivers measurable business value
C. Install the tool in production
D. Replace manual testers immediately

---

### Q23

Separation of concerns in a TAA means:

A. Each layer has a single, focused responsibility
B. All layers are combined into one monolithic component
C. Concerns are shared equally across all layers
D. Only one person can work on the TAA at a time

---

### Q24

Which of the following is a PRIMARY advantage of a data-driven framework?

A. Tests can only run with one set of data
B. Adding new test cases requires only adding data, not new scripts
C. Business users cannot understand the tests
D. It eliminates the need for test logic

---

### Q25

Flakiness rate is defined as:

A. The percentage of tests that always pass
B. The percentage of tests that produce inconsistent results without SUT changes
C. The percentage of code covered by tests
D. The percentage of defects found by automation

---

### Q26

A team blocks production deployment if code coverage drops below 80%. This is:

A. Too strict and should be removed
B. An automated quality gate
C. A manual review process
D. Unrelated to CI/CD

---

### Q27

In a CI pipeline, the "fail fast" principle means:

A. Run the slowest tests first
B. Run the fastest tests first to get quick feedback
C. Allow failures to accumulate
D. Stop the pipeline only after all tests complete

---

### Q28

A keyword-driven framework is MOST appropriate when:

A. Only developers write tests
B. Non-technical stakeholders need to read or write tests
C. There is no test data variation
D. The SUT has no user interface

---

### Q29

A team calculates ROI using only initial development costs. The calculated ROI will be:

A. Perfectly accurate
B. Overestimated because ongoing maintenance costs are ignored
C. Underestimated
D. Only valid for the first year

---

### Q30

A test creates a user account, modifies it, and should delete it afterward. Even if the test fails, the account should be deleted. The BEST approach is:

A. Manually delete accounts after test runs
B. Use a setup/teardown mechanism that always runs cleanup
C. Ignore cleanup — test accounts do not matter
D. Reuse the same account for all tests

---

### Q31

The Test Automation Architecture (TAA) is BEST described as:

A. The executable code that runs tests
B. The conceptual design defining structure, components, and interfaces
C. The test management tool used to track results
D. The CI/CD pipeline configuration

---

### Q32

Which metric would BEST indicate that automated tests are finding real defects?

A. 100% code coverage
B. High defect detection rate with low false positive rate
C. Fast execution time
D. Large number of test cases

---

### Q33

A team's TAS uses a commercial tool that the vendor is discontinuing. The BEST action is:

A. Continue using it indefinitely
B. Plan migration to a supported tool before support ends
C. Switch to manual testing immediately
D. Buy 10 years of extra licenses

---

### Q34

A team should allocate approximately what percentage of automation capacity to maintenance?

A. 0%
B. 10%
C. 20-30%
D. 100%

---

### Q35

A dashboard showing ROI trends and automation coverage progress is MOST appropriate for:

A. Individual testers debugging failures
B. Management making strategic decisions
C. Developers fixing broken builds
D. Business analysts writing requirements

---

### Q36

A team has 90% code coverage but frequently ships defects in production. The MOST likely explanation is:

A. The coverage percentage is too low
B. Tests execute code but do not adequately verify behavior
C. They need more unit tests
D. Code coverage is the wrong metric to track

---

### Q37

Big-bang deployment is MOST appropriate when:

A. The organization has 50 teams and a complex SUT
B. A small team is starting a new project with no existing automation
C. The TAS has not been thoroughly tested
D. Management wants minimal risk

---

### Q38

A "flaky" test is one that:

A. Always passes
B. Fails intermittently without code changes
C. Takes too long to execute
D. Tests an unimportant feature

---

### Q39

Which framework type is MOST maintainable for a frequently changing web application?

A. Record/replay
B. Keyword-driven with Page Object Model
C. Linear scripting
D. Hard-coded XPath in every test

---

### Q40

A TAE fixes a test that fails because the expected result was incorrectly coded. This is:

A. Corrective maintenance
B. Adaptive maintenance
C. Perfective maintenance
D. Test retirement

---

## End of Mock Exam 1
