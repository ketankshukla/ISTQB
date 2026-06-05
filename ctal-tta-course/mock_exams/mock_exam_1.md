# CTAL-TTA Mock Exam 1

**Instructions:**
- 45 questions
- 120 minutes
- Single best answer for each question
- No negative marking

---

### Q1

Which of the following is a TECHNICAL risk that a technical test analyst would focus on?

A. The project deadline may be missed
B. The authentication module uses a custom encryption algorithm
C. The testing budget is insufficient
D. The product manager is unavailable

---

### Q2

What does statement coverage measure?

A. Whether every decision outcome (true/false) has been executed
B. Whether every executable statement has been executed at least once
C. Whether every path through the code has been executed
D. Whether every function has been called at least once

---

### Q3

A test manager estimates effort by first estimating the total and then allocating percentages to each phase. This is:

A. Bottom-up estimation
B. Top-down estimation
C. Wideband Delphi
D. Three-point estimation

---

### Q4

A function contains:
```
if (x > 0) {
    y = 1;
} else {
    y = 2;
}
return y;
```
A test suite with only the test case `x = 5` achieves what coverage?

A. 100% statement coverage and 100% branch coverage
B. 100% statement coverage and 50% branch coverage
C. 50% statement coverage and 50% branch coverage
D. 50% statement coverage and 100% branch coverage

---

### Q5

Which of the following is a characteristic of static analysis?

A. It requires executing the code
B. It examines code without executing it
C. It measures runtime performance
D. It tests user interactions

---

### Q6

What is the cyclomatic complexity of the following code?
```
if (a > 0) {
    if (b > 0) {
        x = 1;
    } else {
        x = 2;
    }
} else {
    x = 3;
}
```

A. 2
B. 3
C. 4
D. 5

---

### Q7

Which of the following requires code execution?

A. Static analysis
B. Dynamic analysis
C. Code review
D. Linting

---

### Q8

For the decision `(A OR B)`, which set of test cases achieves MC/DC?

A. A=T, B=T and A=F, B=F
B. A=F, B=F and A=F, B=T and A=T, B=F
C. A=T, B=T and A=T, B=F and A=F, B=T
D. A=F, B=F and A=T, B=T

---

### Q9

An application's memory usage grows continuously over several hours without decreasing. This is MOST likely:

A. Normal behavior
B. A memory leak
C. Memory corruption
D. Efficient memory management

---

### Q10

Which of the following CANNOT be found by dynamic analysis?

A. Memory leak
B. Unreachable code
C. Performance bottleneck
D. Thread deadlock

---

### Q11

A team uses a capture/replay tool to record user interactions for 500 test cases. After a UI update, 80% of the tests fail. This demonstrates:

A. That the application has many bugs
B. The brittleness of capture/replay automation
C. That automation is not worth the effort
D. That manual testing should have been used

---

### Q12

In a risk-based testing approach, tests should be prioritized based on:

A. The alphabetical order of test case names
B. The assessed level of risk
C. The order in which test cases were written
D. The preference of the development team

---

### Q13

A control flow graph has 8 nodes and 10 edges. The cyclomatic complexity is:

A. 2
B. 3
C. 4
D. 5

---

### Q14

Which tool category is JUnit?

A. Performance testing tool
B. Unit test framework
C. Static analysis tool
D. Security scanner

---

### Q15

Which type of performance testing evaluates system behavior under expected user load?

A. Stress testing
B. Load testing
C. Spike testing
D. Soak testing

---

### Q16

SAST (Static Application Security Testing) analyzes:

A. A running application for exploitable vulnerabilities
B. Source code without executing it
C. Network traffic for malicious activity
D. User behavior for security risks

---

### Q17

In data flow testing, a "definition-use pair" (DU pair) is:

A. A pair of test cases that define and use the same input
B. A pair of locations where a variable is assigned a value and later used
C. A pair of functions that call each other
D. A pair of decisions that depend on each other

---

### Q18

Which statement about code coverage is TRUE?

A. 100% path coverage implies 100% branch coverage
B. 100% statement coverage implies 100% branch coverage
C. 100% branch coverage implies 100% path coverage
D. Coverage percentage is directly proportional to the number of defects found

---

### Q19

A sampling profiler is preferred over an instrumentation profiler when:

A. Maximum accuracy is required
B. Minimal overhead is required (e.g., production monitoring)
C. Line-by-line timing is needed
D. Memory allocation tracking is needed

---

### Q20

Testing a system at 2x expected capacity to find its breaking point is:

A. Load testing
B. Stress testing
C. Volume testing
D. Scalability testing

---

### Q21

Which of the following is a PRIMARY purpose of a test approach?

A. To define the implementation of the test strategy for a specific project
B. To replace the test strategy
C. To document the organizational test policy
D. To record test execution results

---

### Q22

Availability is calculated as:

A. MTBF / (MTBF + MTTR)
B. MTTR / (MTBF + MTTR)
C. MTBF x MTTR
D. MTBF - MTTR

---

### Q23

Which security testing technique involves simulating real-world attacks on a running application?

A. SAST
B. DAST
C. Penetration testing
D. Fuzz testing

---

### Q24

A "don't care" entry in a decision table means:

A. The condition is not important for that rule
B. The condition's value does not affect the outcome for that rule
C. The condition is always false
D. The rule should be removed

---

### Q25

In a keyword-driven framework, test cases are written using:

A. Programming language code
B. Predefined keywords that map to framework functions
C. Recorded user actions
D. Binary test scripts

---

### Q26

Soak testing is primarily used to detect:

A. Memory leaks and gradual degradation over time
B. The maximum number of concurrent users
C. Sudden traffic spikes
D. Compatibility with different browsers

---

### Q27

A tool that sends random malformed inputs to an application to find crashes is:

A. A vulnerability scanner
B. A fuzz testing tool
C. A SAST tool
D. A performance profiler

---

### Q28

Which of the following would be detected during static analysis?

A. How the application performs under 10,000 concurrent users
B. Potential security vulnerabilities in the code without executing it
C. Whether users find the application enjoyable
D. The actual defect density after test execution

---

### Q29

A system has MTBF = 500 hours and MTTR = 2 hours. The availability is approximately:

A. 96%
B. 99.6%
C. 99.96%
D. 99.996%

---

### Q30

Continuous Integration (CI) is BEST described as:

A. Automatically deploying to production
B. Frequently merging code changes and running automated builds and tests
C. Manually testing each feature before release
D. Writing tests after the code is complete

---

### Q31

Fault injection is used to:

A. Automatically fix defects
B. Test system resilience by introducing deliberate errors
C. Generate test cases automatically
D. Measure code complexity

---

### Q32

Which of the following is a POOR candidate for test automation?

A. A daily smoke test suite
B. A regression test executed before each release
C. A usability test requiring human judgment
D. A data-driven test with 100 variations

---

### Q33

The Page Object Model (POM) in UI automation is used to:

A. Record user actions
B. Improve maintainability by separating UI locators from test logic
C. Generate random test data
D. Execute tests in parallel

---

### Q34

Which of the following describes the relationship between a test strategy and a test plan?

A. The test strategy is derived from the test plan
B. The test plan is derived from the test strategy
C. They are the same document with different names
D. The test plan is created first, then the test strategy

---

### Q35

A test manager's PRIMARY responsibility is to:

A. Write all test cases personally
B. Plan, organize, and control the test process
C. Fix defects found by testers
D. Develop the application code

---

### Q36

A testing team wants to verify that code follows secure coding standards. The best approach is:

A. Visual inspection of 10 code files
B. Static analysis tool scanning the entire codebase
C. Asking the developer if the code is secure
D. Checking the design documents

---

### Q37

Which of the following is a characteristic of an informal review?

A. Trained moderators and formal checklists
B. No formal process or written procedures
C. Management attendance required
D. Mandatory metrics collection

---

### Q38

A test manager observes that the defect find rate is decreasing while test execution continues at the same pace. This MOST likely indicates:

A. The testers are becoming less skilled
B. The software may be stabilizing or tests are becoming less effective
C. The test environment is broken
D. The developers have stopped fixing defects

---

### Q39

Which of the following is a PRIMARY purpose of exit criteria?

A. To define when testing can be considered complete
B. To define the conditions that must be met before testing can begin
C. To define the maximum budget for testing
D. To define the tools to be used

---

### Q40

A test team has 150 defects found in testing. After release, 10 more defects are found by users. The approximate Defect Detection Percentage (DDP) is:

A. 6%
B. 15%
C. 94%
D. 100%

---

### Q41

Which of the following is a PRIMARY advantage of risk-based testing?

A. It guarantees that all defects will be found
B. It focuses testing effort on the areas of highest risk
C. It eliminates the need for test planning
D. It reduces the number of testers required

---

### Q42

A testing team wants to improve the maintainability of their UI automation. They should adopt:

A. More capture/replay recordings
B. The Page Object Model (POM) design pattern
C. Hard-coded locators in every test script
D. Fewer automated tests

---

### Q43

Which of the following describes the PRIMARY benefit of independent testing?

A. Faster feedback to developers
B. Greater objectivity and reduced conflict of interest
C. Lower cost than integrated testing
D. Better domain knowledge of the system

---

### Q44

A test manager is calculating ROI for a test automation initiative. The initial investment is $50,000. Annual savings are estimated at $40,000. The payback period is approximately:

A. 0.5 years
B. 1.25 years
C. 2 years
D. 4 years

---

### Q45

Which of the following is a PRIMARY characteristic of a successful test automation framework?

A. It automates 100% of all possible tests
B. It is maintainable, reliable, and provides fast feedback
C. It uses the most complex programming language available
D. It requires no documentation

---

## End of Mock Exam 1
