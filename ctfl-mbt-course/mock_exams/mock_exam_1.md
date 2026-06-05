# CTFL-MBT Mock Exam 1

**Instructions:**
- 40 questions
- 60 minutes
- Single best answer for each question
- No negative marking

---

### Q1

Which statement BEST describes Model-Based Testing?

A. Testing performed by human models to find defects
B. Test cases are generated from models describing system behavior
C. Testing that only uses mathematical models
D. Manual testing guided by test scripts

---

### Q2

In the MBT process, which step comes AFTER test generation?

A. Model creation
B. Test execution
C. Selection criteria definition
D. Requirements analysis

---

### Q3

A test case generated from a model that lacks specific input values is called:

A. A concrete test case
B. An abstract test case
C. An executable test script
D. A selection criterion

---

### Q4

Which of the following is a PRIMARY benefit of MBT?

A. Eliminates the need for all manual testing
B. Systematic test coverage based on selection criteria
C. Reduces the need for requirements documentation
D. Automatically fixes defects in the code

---

### Q5

In a state machine, a transition is triggered by:

A. A state
B. An event
C. An action
D. A guard condition

---

### Q6

A state machine has 5 states and 7 transitions. What is the minimum number of test cases for 0-switch coverage?

A. 5
B. 7
C. 8
D. 12

---

### Q7

A guard condition in a state machine:

A. Always causes a transition to occur
B. Must be true for a transition to be enabled
C. Is the action performed during a transition
D. Is the starting state of the machine

---

### Q8

A decision table has 4 binary conditions. How many rules are in the full table before removing impossible rules?

A. 8
B. 12
C. 16
D. 20

---

### Q9

0-switch coverage in a state machine means:

A. Every transition is exercised at least once
B. Every state is visited at least once
C. Every pair of consecutive transitions is exercised
D. Every path from initial to final state is executed

---

### Q10

1-switch coverage is also known as:

A. State coverage
B. Transition coverage
C. Transition pair coverage
D. Path coverage

---

### Q11

2-switch coverage requires:

A. Every state is visited once
B. Every transition is exercised once
C. Every pair of consecutive transitions is exercised
D. Every variable is tested at its boundary

---

### Q12

A state machine has 6 states and 8 transitions. What is the minimum number of test cases for 1-switch coverage?

A. 6
B. 8
C. 10
D. 14

---

### Q13

A guard condition "amount >= 50" in a state machine should be tested at boundary values:

A. 0, 50, 100
B. 49, 50, 51
C. 50 only
D. 1, 50, 99

---

### Q14

A test suite achieves 100% 2-switch coverage. Which of the following is guaranteed?

A. Only 2-switch coverage
B. 1-switch and 0-switch coverage
C. Only 0-switch coverage
D. Full path coverage

---

### Q15

A state machine has 10 transitions, but 2 are unreachable. The maximum achievable transition coverage is:

A. 100%
B. 80%
C. 20%
D. 0%

---

### Q16

An abstract test case generated from a model:

A. Can be executed directly against the system
B. Needs to be concretized with specific values before execution
C. Is the same as a concrete test case
D. Does not need expected results

---

### Q17

Which type of coverage measures how much of the model is exercised?

A. Code coverage
B. Model coverage
C. Requirement coverage
D. User coverage

---

### Q18

When an MBT test fails, the FIRST step should be:

A. Fix the system immediately
B. Verify whether the model correctly reflects requirements
C. Delete the test case
D. Increase coverage target

---

### Q19

An infeasible path in a state machine is:

A. A path that executes very slowly
B. A path that cannot be executed in the real system
C. A path with too many transitions
D. A path that generates too many tests

---

### Q20

Which MBT tool category is responsible for creating and editing models?

A. Test generator
B. Model editor
C. Coverage analyzer
D. Execution framework

---

### Q21

A test generator in MBT:

A. Creates models from requirements
B. Generates test cases from models based on selection criteria
C. Executes tests against the system
D. Tracks project schedules

---

### Q22

Which is a PRIMARY criterion for selecting an MBT tool?

A. The tool's logo color
B. Support for required model notations and coverage criteria
C. The vendor's office location
D. The tool's release date

---

### Q23

A coverage analyzer in MBT measures:

A. The number of developers on the team
B. How much of the model is exercised by generated tests
C. The cost of the testing project
D. The number of requirements documents

---

### Q24

Integrating MBT tools with CI/CD provides the benefit of:

A. Eliminating the need for models
B. Automatically generating and running tests when models change
C. Reducing the number of testers needed to zero
D. Removing the need for test coverage analysis

---

### Q25

Before purchasing an MBT tool, the recommended step is:

A. Buy the most expensive tool available
B. Run a proof of concept with a small model
C. Mandate immediate adoption across all teams
D. Skip evaluation and purchase based on marketing materials

---

### Q26

Which statement about MBT tools is TRUE?

A. They eliminate the need for human testers
B. They require training and modeling expertise to be effective
C. They automatically create perfect models from requirements
D. They are only useful for large enterprises

---

### Q27

Which system is MOST appropriate for MBT?

A. A simple static web page with no user interaction
B. An ATM with multiple states and complex state transitions
C. A one-time proof-of-concept prototype
D. A system with completely random behavior

---

### Q28

Creating a model often reveals ambiguities in requirements. This demonstrates which benefit of MBT?

A. Faster test execution
B. Early defect detection
C. Reduced tool costs
D. Elimination of manual testing

---

### Q29

In a decision table, "Customer is a VIP member" is:

A. An action
B. A condition
C. A rule
D. An event

---

### Q30

A decision table has conditions: A (2 values), B (3 values), C (2 values). After analysis, 2 rules are identified as impossible. How many valid test cases are needed?

A. 10
B. 8
C. 12
D. 6

---

### Q31

Which model type is MOST appropriate for testing a system with complex state-dependent behavior?

A. Decision table
B. State machine
C. Data flow diagram
D. Entity-relationship diagram

---

### Q32

For 1-switch coverage (transition coverage) in a state machine, the minimum number of test cases must cover:

A. Every state at least once
B. Every transition at least once
C. Every pair of consecutive transitions
D. Every possible path

---

### Q33

Model validation is important because:

A. It ensures the model generates the maximum number of tests
B. A bad model will generate incorrect or incomplete tests
C. It eliminates the need for test execution
D. It makes the model more complex

---

### Q34

A "don't care" condition in a decision table means:

A. The condition is not important and can be removed
B. The condition's value does not affect the action for that rule
C. The condition is always false
D. The condition is impossible

---

### Q35

When requirements change, the MOST efficient approach in MBT is to:

A. Keep the old model and manually update tests
B. Update the model and regenerate tests
C. Discard the model and create a new one
D. Stop using MBT

---

### Q36

The PRIMARY purpose of Specification by Example is to:

A. Generate test scripts automatically
B. Create shared understanding of requirements using concrete examples
C. Replace all manual testing
D. Eliminate the need for a product owner

---

### Q37

A team has 300 UI tests, 50 integration tests, and 20 unit tests. This distribution is:

A. An ideal test automation pyramid
B. An ice cream cone anti-pattern
C. A balanced approach
D. Sufficient for all agile testing needs

---

### Q38

In BDD, a scenario outline allows:

A. Only one set of test data per scenario
B. Multiple sets of test data to run against the same scenario
C. Automatic code generation without human input
D. Testing without any Given-When-Then structure

---

### Q39

A system must exchange data with both legacy mainframe systems and modern cloud APIs. Testing this validates:

A. Portability
B. Interoperability
C. Suitability
D. Maintainability

---

### Q40

ROI for test automation is typically:

A. Positive in the first month
B. Negative in year 1 due to high initial development costs
C. Always 100% or higher
D. Not measurable for software testing

---

## End of Mock Exam 1
