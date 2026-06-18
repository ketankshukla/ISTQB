# 📝 CT-API Mock Exam 2

**Instructions:**
- 40 questions
- 90 minutes
- Single best answer for each question
- No negative marking

---

### 🔷 Q1

Which of the following describes an HTTP PATCH request?

A. Retrieve a resource
B. Partially update a resource
C. Create a new resource
D. Delete a resource

---

### 🔷 Q2

A 503 Service Unavailable status code indicates:

A. The client sent invalid data
B. The server is temporarily unable to handle the request
C. The resource was not found
D. The client is not authorized

---

### 🔷 Q3

In a microservices architecture, APIs are typically:

A. A single API for the entire application
B. Each service has its own API
C. Only used for external communication
D. Replaced by direct database access

---

### 🔷 Q4

OpenAPI (formerly Swagger) is used to:

A. Execute API tests automatically
B. Describe REST APIs in a machine-readable format
C. Replace HTTP as a transport protocol
D. Encrypt API communications

---

### 🔷 Q5

For an API parameter `age` (integer, 18-120), which values should be tested for boundary value analysis?

A. 17, 18, 19, 119, 120, 121
B. 18, 50, 120
C. 0, 50, 150
D. Only 18 and 120

---

### 🔷 Q6

A test creates a user account, modifies it, and should delete it afterward. Even if the test fails, the account should be deleted. The BEST approach is:

A. Manually delete accounts after test runs
B. Use a setup/teardown mechanism that always runs cleanup
C. Ignore cleanup — test accounts do not matter
D. Reuse the same account for all tests

---

### 🔷 Q7

A team tests an API that calls a third-party shipping service. To make tests reliable, they should:

A. Only run tests when the shipping service is online
B. Mock the shipping service API
C. Use a different third-party service
D. Skip testing the shipping integration

---

### 🔷 Q8

Which assertion should be included when verifying an API response?

A. Only the response body
B. Status code, response body, and relevant headers
C. Only the URL
D. Only the request time

---

### 🔷 Q9

Karate is an API testing framework that uses:

A. Java code with verbose syntax
B. A BDD-style syntax readable by non-programmers
C. Python scripts
D. SQL queries

---

### 🔷 Q10

In a well-designed TAS, assertions should be placed in:

A. Page Objects
B. Test scripts
C. The Test Adaptation Layer
D. Configuration files

---

### 🔷 Q11

Explicit waits in test scripts are preferred over fixed sleeps because:

A. They make tests longer
B. They wait only as long as necessary, improving speed and reliability
C. They are easier to write
D. They eliminate the need for error handling

---

### 🔷 Q12

A team has 300 UI tests, 50 integration tests, and 30 unit tests. Their suite takes 4 hours to run. The BEST improvement is:

A. Buy faster test machines
B. Push tests down the pyramid: replace some UI tests with integration/unit tests
C. Run tests less frequently
D. Hire more testers to maintain the tests

---

### 🔷 Q13

A defect that causes incorrect data to be displayed but does not crash the system is classified as:

A. Cosmetic severity
B. Minor severity
C. Major severity
D. Critical severity

---

### 🔷 Q14

Which metric would BEST indicate that the software quality is improving during testing?

A. Number of test cases increases
B. Defect find rate decreases while test execution continues
C. More testers are added to the project
D. Test environment setup time decreases

---

### 🔷 Q15

In risk-based testing, risk priority is typically calculated as:

A. Likelihood + Impact
B. Likelihood x Impact
C. Likelihood / Impact
D. Impact - Likelihood

---

### 🔷 Q16

A test automation framework costs $60,000 to develop. It saves $30,000 per year in manual testing effort. The payback period is approximately:

A. 0.5 years
B. 2 years
C. 3 years
D. 6 years

---

### 🔷 Q17

Which of the following is a POOR candidate for test automation?

A. A daily smoke test suite
B. A regression test executed before each release
C. A usability test requiring human judgment
D. A data-driven test with 100 variations

---

### 🔷 Q18

A system has a security vulnerability that could allow unauthorized access but is difficult to exploit. It should be classified as:

A. High severity, low priority
B. Low severity, high priority
C. High severity, high priority
D. Low severity, low priority

---

### 🔷 Q19

Which of the following is the MOST formal type of review?

A. Informal review
B. Walkthrough
C. Technical review
D. Inspection

---

### 🔷 Q20

In the review process, the stage where reviewers individually examine the document before the meeting is called:

A. Planning
B. Preparation
C. Review meeting
D. Rework

---

### 🔷 Q21

A team automates a new project using TDD from day one. This is:

A. Brownfield transition
B. Greenfield transition
C. Legacy migration
D. Big-bang deployment

---

### 🔷 Q22

Updating a test script to accommodate a renamed button on the SUT is:

A. Corrective maintenance
B. Adaptive maintenance
C. Perfective maintenance
D. No maintenance

---

### 🔷 Q23

Refactoring a test script to improve readability and reduce duplication is:

A. Corrective maintenance
B. Adaptive maintenance
C. Perfective maintenance
D. Retirement

---

### 🔷 Q24

A test should be retired when:

A. It has passed 100 times in a row
B. The feature it tests has been removed from the SUT
C. It takes longer than 1 minute to run
D. It was written by a former employee

---

### 🔷 Q25

Legacy automation is BEST described as:

A. Brand new automation using the latest tools
B. Existing automation that is difficult to maintain and may use outdated practices
C. Automation that has never been run
D. Manual testing that has been documented

---

### 🔷 Q26

A team puts UI locators directly in every test script. When the UI changes, 50 tests break. The root cause is:

A. The testers are not skilled
B. Tight coupling between test scripts and SUT implementation
C. The test tool is defective
D. The application has too many defects

---

### 🔷 Q27

In a CI pipeline, which stage should typically run FIRST?

A. End-to-end UI tests
B. Unit tests
C. Production deployment
D. Performance load testing

---

### 🔷 Q28

The relationship between ATDD, BDD, and TDD is BEST described as:

A. They are competing practices and teams should choose one
B. They are complementary practices applied at different levels (outer to inner)
C. They are all the same thing with different names
D. Only TDD is appropriate for agile teams

---

### 🔷 Q29

SonarQube is an example of:

A. A test execution tool
B. A static analysis tool
C. A performance testing tool
D. A test management tool

---

### 🔷 Q30

A team tests a platform by simulating 50,000 concurrent users to verify response times remain under 1 second. This is:

A. Functional testing
B. Load testing
C. Static analysis
D. Security testing

---

### 🔷 Q31

Which of the following would be detected during static analysis?

A. How the application performs under 10,000 concurrent users
B. Potential security vulnerabilities in the code without executing it
C. Whether users find the application enjoyable
D. The actual defect density after test execution

---

### 🔷 Q32

A misspelled company name on the login page is embarrassing but does not affect functionality. It should be classified as:

A. High severity, low priority
B. Low severity, high priority
C. High severity, high priority
D. Low severity, low priority

---

### 🔷 Q33

The PRIMARY purpose of a test strategy is to:

A. Provide day-to-day instructions for testers
B. Describe the high-level approach to testing for a program or project
C. Replace the need for a test plan
D. Document the results of testing

---

### 🔷 Q34

A Page Object Model (POM) in UI automation is used to:

A. Record user actions
B. Improve maintainability by separating UI locators from test logic
C. Generate random test data
D. Execute tests in parallel

---

### 🔷 Q35

A test manager is planning a risk-based testing approach. The FIRST step should be to:

A. Write test cases for all identified risks
B. Identify and assess risks
C. Execute tests on the highest-risk areas
D. Report risks to stakeholders

---

### 🔷 Q36

A 50-page requirements document is reviewed in 5 hours and 20 defects are found. The review efficiency is:

A. 4 defects per page
B. 10 pages per hour
C. 4 defects per hour
D. 0.4 defects per hour

---

### 🔷 Q37

Which of the following is the BEST example of an entry criterion for system testing?

A. All test cases have passed
B. Unit testing is complete and all critical defects are fixed
C. The test summary report is approved
D. The product is ready for release

---

### 🔷 Q38

Which test is the BEST candidate for automation?

A. A one-time data migration validation test
B. A nightly build verification test
C. An exploratory test for a new feature
D. A test for requirements that change daily

---

### 🔷 Q39

Which of the following is a non-functional testing concern?

A. Verifying correct calculation of order total
B. Ensuring the checkout page loads within 2 seconds
C. Checking that discount codes apply correctly
D. Confirming that users receive confirmation emails

---

### 🔷 Q40

A test manager's PRIMARY responsibility is to:

A. Write all test cases personally
B. Plan, organize, and control the test process
C. Fix defects found by testers
D. Develop the application code

---

## 📝 End of Mock Exam 2
