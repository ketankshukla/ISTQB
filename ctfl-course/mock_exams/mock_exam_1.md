# 📝 Mock Exam 1

**ISTQB CTFL v4.0 — Full-Length Practice Exam**

- 40 questions
- Time allowed: 60 minutes
- Pass mark: 26/40 (65%)
- Select the single best answer unless otherwise stated

---

### 🔷 Q1
Which of the following is a PRIMARY objective of testing?

A. To prove the software has no defects

B. To find defects, reduce risk, and provide information for stakeholder decisions

C. To delay the release until all possible scenarios are tested

D. To replace the need for requirements reviews

### 🔷 Q2
A developer accidentally uses "greater than" instead of "greater than or equal to" in a comparison. This mistake in the developer's reasoning is called:

A. A failure

B. A defect

C. An error

D. A root cause

### 🔷 Q3
Which testing principle states that a small number of modules typically contain the majority of defects?

A. Exhaustive testing is impossible

B. Testing shows the presence of defects

C. Defects cluster together

D. Pesticide paradox

### 🔷 Q4
Which test activity produces test conditions as its primary output?

A. Test planning

B. Test analysis

C. Test design

D. Test execution

### 🔷 Q5
In the whole-team approach, who is responsible for quality?

A. Only the dedicated testers

B. Only the test manager

C. Every team member

D. Only the product owner

### 🔷 Q6
What is the PRIMARY difference between the testing role and the test management role?

A. There is no difference; they are the same

B. The management role plans and controls testing; the testing role analyzes, designs, and executes tests

C. The testing role writes the test plan; the management role executes tests

D. The management role only exists in Agile projects

### 🔷 Q7
In a sequential V-model, which test level corresponds to the system requirements/design phase?

A. Component testing

B. Integration testing

C. System testing

D. Acceptance testing

### 🔷 Q8
Which statement BEST describes the shift-left approach?

A. Moving test execution to the end of the project

B. Performing testing activities earlier in the lifecycle to find defects sooner

C. Replacing developers with testers

D. Automating all tests before any code is written

### 🔷 Q9
What distinguishes TDD from ATDD?

A. TDD operates at the unit/component level driven by developers; ATDD operates at the system/acceptance level with collaboration among business, developer, and tester

B. TDD is manual; ATDD is automated

C. TDD uses natural language; ATDD uses code

D. They are the same approach with different names

### 🔷 Q10
A tester re-runs a specific test that previously failed, after the developer claims the defect is fixed. The test now passes. This is an example of:

A. Regression testing

B. Confirmation testing

C. Smoke testing

D. Exploratory testing

### 🔷 Q11
Which of the following is a trigger for maintenance testing?

A. Initial development of a new system

B. Migration of a system from on-premise to the cloud

C. Creation of unit tests during TDD

D. Planning a sprint backlog

### 🔷 Q12
Static testing can find defects in which of the following work products?

A. Only source code

B. Only requirements documents

C. Any readable work product including requirements, designs, code, test plans, and manuals

D. Only work products that can be executed

### 🔷 Q13
During which phase of a formal review are most defects typically identified?

A. Planning

B. Individual review (preparation)

C. The review meeting

D. Fixing and reporting

### 🔷 Q14
Which review type is characterized by the AUTHOR leading participants through the work product?

A. Inspection

B. Walkthrough

C. Technical review

D. Informal review

### 🔷 Q15
Which review type has formal entry/exit criteria, a trained moderator, mandatory individual preparation, and collects metrics for process improvement?

A. Informal review

B. Walkthrough

C. Technical review

D. Inspection

### 🔷 Q16
An input field accepts integer ages from 18 to 60. Using equivalence partitioning, how many partitions should be identified at minimum?

A. 1 (the valid range only)

B. 2 (valid and one invalid)

C. 3 (below range, within range, above range)

D. 5 (below, within, above, non-integer, non-numeric)

### 🔷 Q17
An integer input field accepts values from 1 to 100. Using two-value boundary value analysis, which set of test values is correct?

A. 0, 1, 100, 101

B. 1, 50, 100

C. -1, 0, 1, 2, 99, 100, 101, 102

D. 1, 100

### 🔷 Q18
A decision table has 3 binary conditions. What is the maximum number of rules before simplification?

A. 3

B. 6

C. 8

D. 9

### 🔷 Q19
A state transition diagram has 4 states and 7 valid transitions. What is the minimum number of test cases needed for 0-switch (all-transitions) coverage?

A. 4

B. 7

C. It depends on how transitions can be combined into paths (typically less than 7)

D. 1

### 🔷 Q20
Consider this code:
```
if (a > 0) {
    x = a
}
if (b > 0) {
    y = b
}
```
How many branches exist?

A. 2

B. 4

C. 6

D. 8

### 🔷 Q21
A test suite achieves 100% statement coverage. Does this guarantee 100% branch coverage?

A. Yes, statement coverage always implies branch coverage

B. No, 100% statement coverage does not guarantee 100% branch coverage

C. Yes, they are the same measurement

D. No, branch coverage always implies statement coverage (this answer is about the reverse)

### 🔷 Q22
A tester uses their knowledge of past defects in date-handling code to specifically test leap year dates and timezone boundaries. Which technique is this?

A. Equivalence partitioning

B. Decision table testing

C. Error guessing

D. State transition testing

### 🔷 Q23
Which statement about exploratory testing is CORRECT?

A. It is completely unstructured with no planning

B. It uses test charters and time-boxes to provide structure while allowing the tester to adapt dynamically

C. It can only be performed by junior testers

D. It produces no documentation

### 🔷 Q24
In collaborative user story writing, the "Three Amigos" are:

A. Three customers

B. Business representative, developer, and tester

C. Project manager, Scrum master, and architect

D. Three different testers

### 🔷 Q25
In ATDD, when are the acceptance tests written?

A. After development is complete

B. During system testing

C. Before development begins, based on acceptance criteria

D. Only after production defects are found

### 🔷 Q26
What is the PRIMARY purpose of a test plan?

A. To list all defects found

B. To document the test objectives, approach, scope, schedule, resources, and criteria for the testing effort

C. To provide the final quality assessment

D. To replace communication between team members

### 🔷 Q27
In Agile, the Definition of Done (DoD) is analogous to which traditional concept?

A. Entry criteria

B. Exit criteria

C. Test charter

D. Defect report

### 🔷 Q28
A team uses Planning Poker to estimate testing effort. This is classified as:

A. A metrics-based technique

B. An expert-based technique

C. A risk-based technique

D. A coverage-based technique

### 🔷 Q29
The test pyramid recommends having the FEWEST tests at which layer?

A. Unit/component tests

B. Integration/API tests

C. UI/end-to-end tests

D. All layers should have equal numbers

### 🔷 Q30
A risk has likelihood 2 (out of 5) and impact 5 (out of 5). Another risk has likelihood 4 and impact 2. Which has the higher risk level?

A. The first risk (2 x 5 = 10)

B. The second risk (4 x 2 = 8)

C. They are equal

D. Cannot be determined

### 🔷 Q31
Which of the following is a PRODUCT risk?

A. Test environment unavailability

B. Budget cuts reducing testing time

C. The search function may return incorrect results for special characters

D. Key testers leaving the organization

### 🔷 Q32
In risk-based testing, what happens to features with LOW product risk?

A. They are not tested at all

B. They receive less testing effort, with basic coverage

C. They are tested first

D. They receive the most exhaustive testing

### 🔷 Q33
Which metric would be MOST useful for assessing whether testing is keeping pace with development?

A. The color of the office walls

B. Test execution rate (test cases executed per day)

C. Number of meetings attended

D. Developer salary

### 🔷 Q34
What is the PRIMARY purpose of configuration management in testing?

A. To eliminate all defects automatically

B. To ensure all testware is version-controlled, traceable, and reproducible

C. To replace the test plan

D. To generate test data

### 🔷 Q35
A defect report should always include:

A. Only the defect title and nothing else

B. Steps to reproduce, expected result, actual result, severity, and environment information

C. Only the developer's name

D. Only a screenshot

### 🔷 Q36
What is the difference between severity and priority in defect management?

A. They are identical concepts

B. Severity measures technical impact; priority measures business urgency for fixing

C. Severity is set by management; priority is set by testers

D. Both are always the same value for any defect

### 🔷 Q37
Which category of test tool checks source code for standard violations and potential defects WITHOUT executing the code?

A. Performance testing tool

B. Static analysis tool

C. Test execution tool

D. Test management tool

### 🔷 Q38
Which of the following is a BENEFIT of test automation?

A. It eliminates the need for testers

B. It guarantees finding all defects

C. It provides faster regression feedback and consistent, repeatable test execution

D. It is always cheaper than manual testing

### 🔷 Q39
Which of the following is a RISK of test automation?

A. Tests run faster than manual execution

B. Tests are executed consistently

C. High maintenance cost when the application frequently changes

D. Tests can run overnight

### 🔷 Q40
Which type of testing is LEAST suitable for full automation?

A. Regression testing

B. Smoke testing

C. Exploratory testing requiring human creativity and judgment

D. Data-driven testing with thousands of inputs
