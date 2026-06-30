# 📝 Mock Exam 3

**ISTQB CTFL v4.0 — Full-Length Practice Exam**

- 40 questions
- Time allowed: 60 minutes
- Pass mark: 26/40 (65%)
- Select the single best answer unless otherwise stated

---

### 🔷 Q1
Which testing principle warns that repeating the same tests eventually stops finding new defects?

A. Testing shows the presence of defects

B. Exhaustive testing is impossible

C. Pesticide paradox

D. Early testing saves time and money

### 🔷 Q2
What is the PRIMARY purpose of root cause analysis?

A. To find someone to blame for the defect

B. To understand the fundamental reason an error occurred so it can be prevented in the future

C. To calculate the cost of fixing the defect

D. To determine the severity of the defect

### 🔷 Q3
Which is an advantage of the whole-team approach to quality?

A. Only testers are accountable for bugs found in production

B. It slows down development to allow thorough testing

C. It fosters shared responsibility for quality and faster feedback loops

D. It eliminates the need for any testing skills

### 🔷 Q4
Which level of testing typically uses stubs and mocks to isolate the component under test?

A. System testing

B. Acceptance testing

C. Component testing

D. System integration testing

### 🔷 Q5
Operational acceptance testing (OAT) is PRIMARILY concerned with:

A. Whether the system meets business user needs

B. Whether the system meets operational needs such as backup, recovery, and maintenance procedures

C. Whether the source code meets coding standards

D. Whether the system handles 1000 concurrent users

### 🔷 Q6
Which SDLC approach builds the system in repeated cycles, each delivering a working increment?

A. Waterfall

B. V-model

C. Iterative and incremental

D. Big-bang

### 🔷 Q7
A team adds testers to user story refinement sessions to ask "what if" questions and identify missing requirements. This is an example of:

A. Regression testing

B. Shift-left

C. Post-mortem analysis

D. Performance testing

### 🔷 Q8
Static testing and dynamic testing are:

A. The same activity with different names

B. Complementary — both needed for thorough quality assurance, with static finding defects directly and dynamic finding failures during execution

C. Mutually exclusive — organizations use one or the other

D. Both require executing the software

### 🔷 Q9
A formal review has these activities in order: planning, initiation, individual review, meeting, and fixing/reporting. What is the role of the facilitator?

A. To write the work product

B. To lead the review meeting and ensure the process is followed

C. To fix all defects found

D. To record all findings

### 🔷 Q10
Which factor is MOST important for successful reviews?

A. Having as few reviewers as possible

B. Skipping individual preparation to save time

C. A supportive culture where defect findings are treated as constructive, not personal criticism

D. Reviewing very large documents in single sessions

### 🔷 Q11
An input accepts order quantities from 1 to 1000 (integers). EP identifies partitions: <1 (invalid), 1-1000 (valid), >1000 (invalid), non-integer (invalid). How many minimum test cases are needed for EP coverage?

A. 2

B. 3

C. 4

D. 1000

### 🔷 Q12
For the same field (1-1000, integers), two-value BVA produces which test values?

A. 0, 1, 1000, 1001

B. 1, 500, 1000

C. -1, 0, 1, 2, 999, 1000, 1001, 1002

D. 1, 1000

### 🔷 Q13
A decision table for insurance eligibility has conditions: Age >= 18 (T/F), Has ID (T/F), No criminal record (T/F). The action "Approved" only occurs when ALL three conditions are TRUE. For all other combinations, the action is "Rejected."

How many rules can be collapsed into a single "Rejected" rule?

A. 7 rules collapse to 1 (since any F in any condition leads to rejection)

B. They cannot be collapsed

C. 3 rules collapse to 1

D. 4 rules collapse to 1

### 🔷 Q14
In state transition testing, what is an INVALID transition?

A. A transition that the system should allow

B. A transition that should NOT be possible from the current state (the system should reject it)

C. A transition that has been tested

D. A transition from the initial state

### 🔷 Q15
A code snippet has 10 executable statements. A test suite of 3 test cases exercises 8 of these statements. What is the statement coverage?

A. 30%

B. 80%

C. 100%

D. 8%

### 🔷 Q16
Consider:
```
1: function check(age, hasLicense) {
2:     if (age >= 18) {
3:         if (hasLicense) {
4:             return "can drive"
5:         } else {
6:             return "get license first"
7:         }
8:     }
9:     return "too young"
10: }
```
How many test cases are needed for 100% branch coverage?

A. 1

B. 2

C. 3

D. 4

### 🔷 Q17
Which technique is MOST appropriate for testing complex business rules where the outcome depends on multiple conditions interacting?

A. Equivalence partitioning

B. Boundary value analysis

C. Decision table testing

D. State transition testing

### 🔷 Q18
Exploratory testing is BEST described as:

A. Random, unplanned testing with no documentation

B. Simultaneous test design, execution, and learning, guided by test charters and time-boxes

C. Automated regression testing

D. Testing performed only by inexperienced testers

### 🔷 Q19
Which format is associated with BDD scenarios?

A. As a / I want / So that

B. Given / When / Then

C. Input / Process / Output

D. Plan / Do / Check / Act

### 🔷 Q20
A tester derives test cases from the acceptance criteria of a user story BEFORE the developer writes code. The whole team participated in defining these criteria. This approach is:

A. Regression testing

B. Acceptance Test-Driven Development (ATDD)

C. Ad hoc testing

D. Performance testing

### 🔷 Q21
What is the PRIMARY content of a test plan?

A. All defect reports for the project

B. The complete source code

C. Test objectives, scope, approach, schedule, resources, entry/exit criteria, and risk mitigation

D. Only the list of test cases

### 🔷 Q22
Which estimation technique uses anonymous independent estimates followed by discussion rounds to reach consensus?

A. Planning Poker

B. Wideband Delphi

C. Lines-of-code counting

D. Random guessing

### 🔷 Q23
When prioritizing test cases using a risk-based approach, which tests should be executed FIRST?

A. Tests that are easiest to run

B. Tests covering the highest-risk features

C. Tests that were written most recently

D. Tests in alphabetical order

### 🔷 Q24
In the testing quadrants, which quadrant contains unit tests and TDD?

A. Q1 (technology-facing, supporting the team)

B. Q2 (business-facing, supporting the team)

C. Q3 (business-facing, critiquing the product)

D. Q4 (technology-facing, critiquing the product)

### 🔷 Q25
A product risk is identified: "The report generation feature may produce incorrect totals." This risk has likelihood 4 and impact 4. What is the risk level?

A. 8

B. 16

C. 4

D. 2

### 🔷 Q26
Which of the following is a product risk?

A. The project deadline has been moved forward by 2 weeks

B. The security module may have vulnerabilities allowing unauthorized access

C. The test manager resigned unexpectedly

D. The deployment tool license expired

### 🔷 Q27
A test progress report is intended for:

A. Only the CEO

B. The test team and project manager, providing current test status against the plan

C. External customers only

D. Nobody — reports are not needed

### 🔷 Q28
How does risk-based testing determine the amount of testing for each feature?

A. All features receive identical testing regardless of risk

B. Features with higher risk levels receive more thorough testing; lower-risk features receive basic coverage

C. Only the highest-risk feature is tested; all others are skipped

D. Risk is not considered in test planning

### 🔷 Q29
A defect has high severity (system crash) but low priority (the feature is used by only 2 internal users and a workaround exists). Which statement is CORRECT?

A. Severity and priority must always match

B. This is impossible — high severity always means high priority

C. Severity and priority are independent; a high-severity defect can have low business priority

D. The defect should be closed immediately since priority is low

### 🔷 Q30
What is the role of configuration management in defect reproduction?

A. CM automatically fixes defects

B. CM ensures the exact version of code, data, and environment where the defect was found is recorded, enabling accurate reproduction

C. CM generates test cases

D. CM replaces the need for defect reports

### 🔷 Q31
A tool runs automated checks on source code to detect coding standard violations, dead code, and security patterns without executing the program. This is:

A. Dynamic testing

B. Performance testing

C. Static analysis

D. Exploratory testing

### 🔷 Q32
Which is a RISK of test automation?

A. Tests execute faster

B. Tests are repeatable

C. Fragile tests that break frequently when the UI changes, requiring expensive maintenance

D. Tests provide faster feedback

### 🔷 Q33
A test manager argues that since they have a comprehensive automated regression suite, no manual testing is needed. What is WRONG with this argument?

A. Nothing — automation replaces all manual testing

B. Automated tests only check what they are programmed to check; they cannot replace exploratory testing, usability evaluation, and human judgment

C. Automated tests find more usability defects than humans

D. Manual testing is always slower and therefore useless

### 🔷 Q34
Which tool category BEST supports tracking test progress and managing test case repositories?

A. Static analysis tool

B. Performance testing tool

C. Test management tool

D. Code coverage tool

### 🔷 Q35
A field accepts temperatures from -40 to 120 (integers, in Fahrenheit). Using EP, identify the VALID partition:

A. Values below -40

B. Values from -40 to 120

C. Values above 120

D. Non-integer values

### 🔷 Q36
For the same temperature field (-40 to 120), two-value BVA test values are:

A. -41, -40, 120, 121

B. -40, 0, 120

C. -100, -40, 120, 200

D. -40, 120

### 🔷 Q37
A state machine for a traffic light has states: Red, Green, Yellow. Valid transitions: Red->Green, Green->Yellow, Yellow->Red. How many test cases are needed for 0-switch coverage?

A. 3

B. 1

C. 6

D. 9

### 🔷 Q38
Which of the following BEST supports the shift-left approach?

A. Only performing acceptance testing at the very end

B. Reviewing requirements and writing tests before development begins

C. Waiting for all code to be complete before any testing starts

D. Eliminating all testing to speed up delivery

### 🔷 Q39
In a defect report, which field describes the series of actions needed to reproduce the failure?

A. Severity

B. Expected result

C. Steps to reproduce

D. Priority

### 🔷 Q40
A test suite of 2 test cases achieves 100% branch coverage on a function. A colleague claims this also means 100% statement coverage. Is this correct?

A. No — statement coverage and branch coverage are completely unrelated

B. Yes — 100% branch coverage guarantees 100% statement coverage

C. No — you always need more tests for statement coverage

D. It depends on whether the code has loops
