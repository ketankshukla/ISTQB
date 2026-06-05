# CTAL-TA Glossary

Key terms and definitions aligned with the ISTQB CTAL-TA syllabus and industry standard usage.

---

## A

**Accuracy**
The degree to which a product provides the correct results with the required precision. A sub-characteristic of Functional Suitability under ISO 25010.

**Action (in Decision Table)**
An output or behavior of the system that results from a specific combination of conditions.

**Ad Hoc Testing**
Testing performed without planning, documentation, or formal test cases. Often used interchangeably with random testing. Less structured than exploratory testing.

**Availability**
The degree to which a system is operational and accessible when required. A sub-characteristic of Reliability under ISO 25010.

---

## B

**Boundary Value Analysis (BVA)**
A black-box test design technique in which test cases are designed based on boundary values. 2-value BVA tests min-1, min, max, max+1. 3-value BVA tests min-1, min, min+1, max-1, max, max+1.

**Brittle Test**
An automated test that breaks easily when the application under test changes, typically due to tight coupling to UI implementation details.

---

## C

**Capture/Replay**
A test automation approach where user interactions are recorded and played back. Simple to create but produces brittle scripts that are hard to maintain.

**Checklist-Based Testing**
An experience-based test design technique whereby the experienced tester uses a list of items to verify. More structured than error guessing but less formal than specification-based techniques.

**Combinatorial Testing**
A test design technique that tests combinations of input parameters. Pairwise testing ensures every pair of parameter values is tested at least once.

**Condition (in Decision Table)**
An input or system state that affects the outcome of a decision.

**Confidentiality**
The degree to which data is accessible only to authorized persons. A sub-characteristic of Security under ISO 25010.

**Coverage**
The degree to which specified coverage items are exercised by a test suite, expressed as a percentage.

---

## D

**Data-Driven Framework**
A test automation framework where test logic is separate from test data. Test data is stored in external files, and the same script runs with multiple data sets.

**Decision Table Testing**
A black-box test design technique in which test cases are designed to execute the combinations of inputs and/or stimuli shown in a decision table.

**Defect Density**
The number of defects identified in a work product divided by the size of the work product (e.g., defects per KLOC or per function point).

---

## E

**Efficiency (Performance Efficiency)**
The degree to which a product performs its functions within given time and resource constraints. Includes time behavior, resource utilization, and capacity.

**Endurance Testing**
A type of performance testing that evaluates system behavior under a significant load extended over a significant period of time, to identify degradation such as memory leaks.

**Entry Criteria**
The set of conditions that must be met before testing can begin or before a phase of testing can start.

**Equivalence Partitioning (EP)**
A black-box test design technique in which test cases are designed to execute representatives from equivalence partitions. Values within the same partition are expected to be handled identically by the system.

**Error Guessing**
A test design technique where the tester uses experience and intuition to guess where defects are likely to be found. Not systematic but valuable as a supplement.

**Event (in State Transition)**
An input or trigger that causes a transition from one state to another.

**Exit Criteria**
The set of conditions that must be met for testing to be considered complete.

**Exploratory Testing**
An approach to testing whereby the tester simultaneously designs and executes tests, using the information gained while testing to design new and better tests. Structured by test charters, not random.

---

## F

**Fault Tolerance**
The degree to which a system operates as intended despite the presence of hardware or software faults. A sub-characteristic of Reliability.

---

## G

**Guard Condition**
A condition that must be true for a transition to occur in a state transition diagram.

---

## I

**Informal Review**
A review with no formal process, no entry/exit criteria, and minimal documentation. Typically used for quick feedback on early drafts.

**Inspection**
The most formal type of review, characterized by trained participants, defined roles, checklists, entry/exit criteria, and metrics collection.

**Integrity**
The degree to which unauthorized modification of data is prevented. A sub-characteristic of Security under ISO 25010.

**Interoperability**
The degree to which a product can exchange information with other products and use the information that has been exchanged. A sub-characteristic of Compatibility under ISO 25010.

---

## K

**Keyword-Driven Framework**
A test automation framework where test cases are written using keywords representing actions (e.g., "ClickButton", "EnterText"). Keywords are implemented in code by automation engineers.

---

## L

**Load Testing**
A type of performance testing conducted to evaluate the behavior of a system at and beyond the expected workload.

---

## M

**Maintainability**
The degree of effectiveness and efficiency with which a product can be modified. Includes modularity, reusability, analysability, modifiability, and testability.

**Maturity**
The degree to which a system meets needs for reliability under normal operation. Reflects the frequency of failures due to faults in the software.

**Moderator**
The person who leads the review meeting, manages time, ensures focus, and ensures the review process is followed.

**MTBF (Mean Time Between Failures)**
The average time between consecutive failures of a system.

**MTTR (Mean Time To Repair)**
The average time taken to repair a failed system and return it to operational status.

---

## P

**Pairwise Testing**
A combinatorial testing technique that ensures every possible pair of input parameter values is tested at least once.

**Page Object Model (POM)**
A design pattern in test automation that creates an object repository for UI elements, separating locators from test logic to improve maintainability.

**Portability**
The degree to which a product can be transferred from one hardware, software, or operational environment to another.

---

## R

**Recoverability**
The degree to which a system can recover data and restore the required state after an interruption or failure. A sub-characteristic of Reliability.

**Reliability**
The degree to which a product performs specified functions under specified conditions for a specified period of time. Includes maturity, availability, fault tolerance, and recoverability.

**Review**
A static testing technique where a work product is examined by one or more people to find defects and improve quality.

**ROI (Return on Investment)**
A measure of the profitability of an investment, calculated as (Benefits - Costs) / Costs × 100%.

**Rule (in Decision Table)**
A column in a decision table representing a unique combination of conditions and their corresponding actions.

---

## S

**Scribe**
The person who records all issues, defects, and action items during a formal review meeting.

**Security**
The degree to which a product protects information and data. Includes confidentiality, integrity, availability, non-repudiation, accountability, and authenticity.

**Session-Based Test Management (SBTM)**
A method for measuring and managing exploratory testing, consisting of test charters, time-boxed sessions, and session reports.

**Single-Fault Assumption**
The principle that a test should only vary one input at a time to isolate the cause of failure. Used in Boundary Value Analysis for multiple variables.

**Spike Testing**
A type of performance testing that evaluates a system's ability to handle sudden, extreme increases in load.

**State**
A condition or mode of a system at a specific point in time.

**State Transition Testing**
A black-box test design technique in which test cases are designed to execute valid and invalid state transitions.

**Static Analysis**
The analysis of software artifacts (e.g., code, designs) without executing them. Typically performed by automated tools.

**Stress Testing**
A type of performance testing that evaluates a system beyond the limits of its specified requirements to identify the breaking point.

**Suitability**
The degree to which a product provides functions that meet stated and implied needs. A sub-characteristic of Functional Suitability under ISO 25010.

**Suspension Criteria**
The conditions under which testing should be temporarily stopped.

---

## T

**Technical Review**
 A form of review performed by technically qualified peers that identifies defects, evaluates technical quality, and ensures conformance to standards.

**Test Analysis**
The activity that identifies what needs to be tested by deriving test conditions from the test basis.

**Test Charter**
A statement of test objectives, scope, and approach for an exploratory testing session.

**Test Condition**
An item or event of a component or system that could be verified by one or more test cases.

**Test Data**
The specific values used as inputs for test cases.

**Test Design**
The activity that defines how something will be tested by creating test cases and test procedures from test conditions.

**Test Implementation**
The activity that prepares everything needed for test execution, including test procedures, test data, and environment setup.

**Test Oracle**
A source of expected results for test cases.

**Transition**
A change from one state to another, caused by an event.

---

## U

**Use Case Testing**
A black-box test design technique in which test cases are designed to execute user scenarios derived from use cases. Tests main flow, alternative flows, and exception flows.

---

## V

**Volume Testing**
A type of performance testing that evaluates system behavior with large volumes of data.

---

## W

**Walkthrough**
A review type where the author leads participants through a document, explaining and answering questions. Less formal than a technical review or inspection.

---

## 0-1 Switch Coverage

**0-switch coverage**
A state transition coverage criterion where every state in the state transition diagram is visited at least once.

**1-switch coverage**
A state transition coverage criterion where every valid transition in the state transition diagram is exercised at least once.
