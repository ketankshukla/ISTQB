# 📝 Mock Exam 6 — Extended Practice Set

**ISTQB CTFL v4.0 — Full-Length Practice Exam**

- 40 questions
- Time allowed: 60 minutes
- Pass mark: 26/40 (65%)
- Select the single best answer unless otherwise stated

---

### 🔷 Q1
Which activity supports testing's defect-PREVENTION objective?

A. Fixing code defects directly in the repository

B. Reviewing requirements and designs to find issues before coding begins

C. Releasing the software without any checks

D. Ignoring the requirements during development

### 🔷 Q2
Quality assurance (QA) focuses primarily on:

A. Finding defects by executing the software

B. Establishing and improving processes to provide confidence that quality will be achieved

C. Writing the application's source code

D. Fixing each individual defect as it is found

### 🔷 Q3
"A small number of modules usually contain most of the defects." Which testing principle is this?

A. Defects cluster together

B. The pesticide paradox

C. Exhaustive testing is impossible

D. Early testing saves time and money

### 🔷 Q4
Which of the following is an example of an error (a mistake)?

A. A wrong calculation produced at runtime

B. A developer misreading a specification and choosing the wrong formula

C. A line of faulty code stored in the repository

D. A crash observed by the user

### 🔷 Q5
Traceability from requirements through to test results enables the team to:

A. Hide gaps in test coverage

B. Determine which requirements are covered and assess the impact of changes

C. Remove the need for test design

D. Avoid reporting test outcomes

### 🔷 Q6
Which test activity archives testware and evaluates lessons learned?

A. Test planning

B. Test completion

C. Test analysis

D. Test design

### 🔷 Q7
Which of the following is an example of context affecting the test process?

A. A safety-critical medical system requiring more rigorous testing and documentation than a simple internal tool

B. The test process being identical regardless of the system under test

C. Ignoring all applicable regulations

D. Spending equal effort on every risk regardless of severity

### 🔷 Q8
Combining the test management role and the testing role in a single person is:

A. Never allowed under any circumstances

B. Possible in some contexts, especially in smaller teams or Agile settings

C. Required in every project

D. Permitted only in waterfall projects

### 🔷 Q9
Which statement about test-first approaches is correct?

A. Tests are written only after all the code is complete

B. In TDD, ATDD, and BDD, tests or examples are written before or alongside the code they verify

C. They forbid any use of automation

D. They apply only to documentation, not code

### 🔷 Q10
A good testing practice for any SDLC is that:

A. Only developers perform any testing

B. Testers provide feedback throughout, and test activities occur in every development phase

C. Testing is skipped entirely for small projects

D. All test levels are merged into a single level

### 🔷 Q11
A key testing implication of DevOps is that:

A. Manual testing is strictly forbidden

B. Automated tests in the CI/CD pipeline provide rapid feedback on each change

C. Testing happens only after the product is released

D. No test environments are required at all

### 🔷 Q12
Integration testing primarily aims to find defects in:

A. Individual statements within one unit

B. The interfaces and interactions between components or systems

C. The user manual

D. The project budget

### 🔷 Q13
A black-box functional test of a login feature would check that:

A. The internal password-hashing algorithm's code paths are all executed

B. Valid credentials grant access and invalid credentials are rejected, as specified

C. The cyclomatic complexity is within limits

D. The number of code statements is minimized

### 🔷 Q14
Maintenance testing is performed:

A. Only during the initial development of a system

B. When an operational system is modified, migrated, or retired

C. Only on brand-new systems before their first release

D. Never, once a system is live in production

### 🔷 Q15
The moderator/facilitator in a formal review is responsible for:

A. Writing the work product under review

B. Running the review effectively, mediating discussion, and ensuring the process is followed

C. Fixing all of the defects that are found

D. Approving the project budget

### 🔷 Q16
Static testing of a user story might detect:

A. A runtime memory leak

B. An ambiguous or untestable acceptance criterion

C. A slow database query occurring under heavy load

D. A network timeout during execution

### 🔷 Q17
Compared with finding the same defect during system testing, finding it during a requirements review is generally:

A. More expensive to fix

B. Cheaper to fix, because it is found earlier

C. Impossible to achieve

D. Irrelevant to the overall cost

### 🔷 Q18
The "fixing and reporting" activity of the review process involves:

A. Selecting which reviewers to invite

B. Logging defects, deciding on actions, fixing where appropriate, and tracking issues to closure

C. Writing the original requirements

D. Executing the software under test

### 🔷 Q19
Which technique category would you use when no specification exists and you must rely on tester expertise?

A. Black-box

B. White-box

C. Experience-based

D. Boundary value analysis

### 🔷 Q20
An exploratory testing session is typically time-boxed and guided by:

A. The complete source code

B. A test charter that states the mission or focus of the session

C. A fully completed decision table

D. A code-coverage report

### 🔷 Q21
Which list best reflects typical targets for error guessing?

A. Empty inputs, zero, maximum values, duplicate entries, and invalid formats

B. Only valid mid-range values

C. Only the documented happy path

D. Only the user documentation

### 🔷 Q22
A limitation of checklist-based testing is that:

A. It is unable to make use of the tester's experience

B. Its effectiveness depends on the quality of the checklist, and it may miss items not on the list

C. It always achieves full coverage automatically

D. It requires access to the source code

### 🔷 Q23
The "Confirmation" in the 3 C's of a user story corresponds to:

A. The story's short title

B. The acceptance criteria/tests that confirm the story is done

C. The length of the sprint

D. The size of the team

### 🔷 Q24
Rule-oriented acceptance criteria are typically written as:

A. Given/When/Then scenarios

B. A bulleted list of conditions or rules that the feature must satisfy

C. Comments inside the source code

D. A state transition diagram

### 🔷 Q25
A thermostat accepts target temperatures from 15 to 30 °C (whole numbers). Using equivalence partitioning, how many partitions exist (valid and invalid combined)?

A. 1

B. 2

C. 3

D. 4

### 🔷 Q26
For the range 15 to 30, using two-value boundary value analysis at the UPPER boundary, which values are tested?

A. 30 and 31

B. 29 and 30

C. 29, 30, and 31

D. 31 only

### 🔷 Q27
A decision table has the conditions "Member? (Y/N)" and "Order > \$100? (Y/N)" to determine a discount. What is the maximum number of rules before simplification?

A. 2

B. 4

C. 6

D. 8

### 🔷 Q28
A document workflow has the states Draft, Review, and Approved, with valid transitions: Draft→Review, Review→Draft (reject), and Review→Approved. For 0-switch coverage, how many transitions must be exercised?

A. 2

B. 3

C. 4

D. 1

### 🔷 Q29
Consider the following pseudocode (note there is no ELSE):

```
1  IF age >= 18 THEN
2      access = "granted"
3  END IF
```

What is the minimum number of test cases needed for 100% branch (decision) coverage?

A. 1

B. 2

C. 3

D. 0

### 🔷 Q30
Wideband Delphi and planning poker are examples of:

A. Code-coverage techniques

B. Expert-based estimation techniques

C. Categories of risk

D. Categories of defect

### 🔷 Q31
Which statement about the test plan is correct?

A. It is written once at the start and never updated

B. It may be updated as the project progresses and circumstances change

C. It contains only defect data

D. It is identical to the test completion report

### 🔷 Q32
"All planned tests have been executed and the exit criteria are met." This statement relates most directly to:

A. Entry criteria

B. Exit criteria

C. A defect report

D. A test charter

### 🔷 Q33
Product risk analysis influences testing by helping the team decide:

A. The salaries of the testers

B. Which areas to test, how deeply, and with which techniques and priorities

C. The location of the office

D. Which programming language to use

### 🔷 Q34
"A new regulation may require features the team has not planned for." This is primarily:

A. A product risk

B. A project risk

C. A test case

D. A defect

### 🔷 Q35
When the test team reports that "high-severity defects remain open in the checkout flow," they are:

A. Communicating test status to support stakeholder decisions

B. Writing the application's source code

C. Estimating the test effort

D. Designing new test cases

### 🔷 Q36
Test sets are prioritized by risk: A = Medium, B = High, C = High, D = Low. Running the highest risk first (and, among equal risks, the lower letter first), the order is:

A. B, C, A, D

B. A, B, C, D

C. C, B, A, D

D. D, A, B, C

### 🔷 Q37
On a 1–5 scale, a risk has likelihood 4 and impact 4. What is its risk level (likelihood × impact)?

A. 8

B. 16

C. 4

D. 20

### 🔷 Q38
Which field in a defect report indicates how the failure affects the system?

A. Priority

B. Severity

C. The reporter's manager

D. The sprint number

### 🔷 Q39
Tools that help create or manage test data belong to which category?

A. Test data preparation tools

B. Performance testing tools

C. Static analysis tools

D. Requirements management tools

### 🔷 Q40
Which statement about test automation's return on investment is realistic and correct?

A. Automation always pays off immediately

B. Automation has upfront and maintenance costs; the benefits accrue over repeated executions of stable tests

C. Automation never has any associated costs

D. Automation inherently reduces the quality of testing
