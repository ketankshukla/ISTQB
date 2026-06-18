# 📖 CT-MBT Glossary

Key terms and definitions for the CT-MBT exam, organized by chapter relevance.

---

## 🏗️ MBT Fundamentals

**Model-Based Testing (MBT)**
Testing in which test cases are derived in whole or in part from a model that describes some aspect of the system under test.

**Test Model**
A model from which test cases can be generated. It represents aspects of the SUT relevant for testing.

**System Under Test (SUT)**
 The system being tested. In MBT, the test model represents aspects of the SUT.

**Online MBT**
Test generation and execution happen simultaneously during test execution. The model is traversed dynamically.

**Offline MBT**
Test cases are generated from the model before execution. Tests can be reviewed and stored before running.

**Model-Based Test Case Generation**
The process of deriving test cases from a test model using test selection criteria.

**Test Selection Criteria**
Rules or algorithms used to select a subset of possible test cases from a model. Also called test coverage criteria.

---

## 📐 MBT Modeling

**State Transition Model / State Machine**
A model showing states of a system and transitions between them triggered by events or conditions.

**State**
A condition or situation of the SUT during which it satisfies some condition, performs some activity, or waits for some event.

**Transition**
A change from one state to another, triggered by an event or condition.

**Guard Condition**
A Boolean condition that must be true for a transition to be taken.

**Action**
An operation executed when a transition is taken or when entering/exiting a state.

**Decision Table**
A table showing combinations of conditions and corresponding actions. Used to model business rules.

**Process Model**
A model showing activities, tasks, and flows in a process. Examples: activity diagrams, BPMN.

**Feature Model**
A model showing features and their relationships (mandatory, optional, alternative). Common in product line testing.

**Control Flow Model**
A model focusing on the order of operations and decisions.

**Data Flow Model**
A model focusing on how data moves through the system and is transformed.

**UML State Machine**
A UML diagram showing states, transitions, events, guard conditions, and actions.

**UML Activity Diagram**
A UML diagram showing the flow of control or data between activities.

**BPMN (Business Process Model and Notation)**
A graphical notation for specifying business processes in a workflow.

**Model Quality**
The degree to which a model satisfies stated and implied needs. Attributes: correctness, representativeness, interpretability, maintainability.

**Abstraction Level**
The degree of detail in a model. Higher abstraction = less detail. The test model should abstract from implementation details.

**Test-Relevant Aspects**
Parts of the SUT behavior that are important for testing and should be represented in the model.

---

## ✅ Test Selection Criteria

**Coverage Criterion**
A rule defining what must be covered by tests. Examples: state coverage, transition coverage.

**State Coverage**
A criterion requiring that every state in the model is visited by at least one test case.

**Transition Coverage**
A criterion requiring that every transition in the model is traversed by at least one test case.

**Path Coverage**
A criterion requiring that every path through the model is executed. Often infeasible for models with loops.

**Boundary Value Testing**
Testing at the boundaries between equivalence partitions. Applied to data in models.

**Equivalence Partitioning**
Dividing input data into partitions where the system behaves equivalently. Tests from each partition.

**Transition Pair Coverage**
Coverage of every pair of consecutive transitions (two-transition sequences).

**Random Testing**
Selecting test cases randomly from the set of possible paths.

**Systematic Testing**
Selecting test cases according to defined coverage criteria rather than randomly.

**Test Case Length**
The number of steps/transitions in a test case. Longer tests may find more complex defects.

---

## ⭐ Test Implementation and Execution

**Abstract Test Case**
A test case described at the model level without concrete data or implementation details.

**Concrete Test Case**
An executable test case with specific data, preconditions, and expected results mapped to the SUT.

**Concretization**
The process of transforming abstract test cases into concrete, executable test cases by adding data and mapping to the SUT.

**Test Oracle**
A mechanism for determining whether a test has passed or failed by comparing actual and expected results. In MBT, the model often serves as the oracle.

**Model as Oracle**
Using the model to predict expected outputs for test inputs.

**Test Failure Analysis**
Determining the cause of a test failure: SUT defect, model defect, concretization error, or environment issue.

**Test Execution Automation**
Running tests automatically using test execution tools.

**Simulator**
A tool that imitates the behavior of the SUT or its environment for testing purposes.

---

## ⭐ Evaluating and Deploying MBT

**Return on Investment (ROI)**
A measure of the financial benefit of MBT compared to its cost. Factors: model creation effort, test maintenance savings, defect detection value.

**Pilot Project**
A small-scale initial project used to evaluate MBT in an organization before wider deployment.

**Incremental Deployment**
Introducing MBT gradually, starting with a small project or team and expanding over time.

**Big-Bang Deployment**
Introducing MBT across the entire organization at once.

**Process Maturity**
The level of formality and optimization of processes in an organization.

**Organizational Culture**
The shared values, beliefs, and practices that affect how an organization approaches testing.

**Metrics for MBT Success**
Measurements used to evaluate MBT adoption: defect detection rate, test coverage, effort reduction, time to market.

---

## 🛠️ MBT Tool Support

**Modeling Tool**
A tool for creating, editing, and validating models. Examples: Enterprise Architect, Papyrus, Visual Paradigm.

**Test Generation Tool**
A tool that generates test cases from models based on selection criteria. Examples: Conformiq, SpecExplorer, GraphWalker.

**Test Execution Tool**
A tool that executes concrete test cases against the SUT.

**Model Verification Tool**
A tool that checks models for correctness, completeness, and consistency.

**Scripting Language**
A programming language used to write test scripts and concretization logic.

**Code Generation**
Automatic generation of test code from models or abstract test cases.

**CI/CD Integration**
Incorporating MBT into Continuous Integration / Continuous Delivery pipelines.

**Model Versioning**
Tracking changes to models alongside code changes using version control systems.

---

## ⭐ Abbreviations

| Abbreviation | Meaning |
|-------------|---------|
| MBT | Model-Based Testing |
| SUT | System Under Test |
| UML | Unified Modeling Language |
| BPMN | Business Process Model and Notation |
| ROI | Return on Investment |
| CI/CD | Continuous Integration / Continuous Delivery |
| GUI | Graphical User Interface |
| API | Application Programming Interface |
| SDLC | Software Development Life Cycle |
| BDD | Behavior-Driven Development |
