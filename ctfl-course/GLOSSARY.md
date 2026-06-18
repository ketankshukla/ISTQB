<!-- ISTQB-BEAUTIFY-V1 -->
<style>
html, body {
  background-color: #000000 !important;
  color: #F5F5F5 !important;
}
body {
  font-size: 19px !important;
  line-height: 1.85 !important;
  font-family: 'Segoe UI', 'Trebuchet MS', Verdana, sans-serif !important;
  padding: 24px 44px !important;
  letter-spacing: 0.2px;
}
h1 { color: #FFD700 !important; font-size: 2.7em !important; font-weight: 800 !important; border-bottom: 3px solid #FF5252 !important; padding-bottom: 0.25em; }
h2 { color: #00E5FF !important; font-size: 2.05em !important; font-weight: 800 !important; border-bottom: 2px solid #00E5FF !important; padding-bottom: 0.2em; }
h3 { color: #69F0AE !important; font-size: 1.6em !important; font-weight: 700 !important; }
h4 { color: #FF80AB !important; font-size: 1.35em !important; font-weight: 700 !important; }
h5 { color: #FFAB40 !important; font-size: 1.2em !important; font-weight: 700 !important; }
h6 { color: #B388FF !important; font-size: 1.1em !important; font-weight: 700 !important; }
p, li, td, th, span, div { font-size: 1em !important; color: #F5F5F5 !important; }
strong, b { color: #FFEB3B !important; }
em, i { color: #FF8A65 !important; }
a { color: #40C4FF !important; text-decoration: underline; }
a:hover { color: #80D8FF !important; }
code { color: #FF4081 !important; background: transparent !important; font-size: 0.95em !important; }
pre { background: transparent !important; border: 1px solid #555 !important; border-radius: 8px; padding: 14px !important; }
pre code { color: #80CBC4 !important; }
blockquote { color: #B0BEC5 !important; border-left: 5px solid #FFD700 !important; background: transparent !important; padding-left: 18px; font-style: italic; }
table { border-collapse: collapse !important; background: transparent !important; }
th { color: #FFD700 !important; border: 2px solid #00E5FF !important; background: transparent !important; padding: 8px 12px !important; }
td { color: #F5F5F5 !important; border: 1px solid #607D8B !important; background: transparent !important; padding: 8px 12px !important; }
hr { border: none; border-top: 2px dashed #FF5252 !important; margin: 1.5em 0; }
ul li::marker { color: #69F0AE !important; font-size: 1.1em; }
ol li::marker { color: #00E5FF !important; font-weight: bold; }
</style>
# 📖 CTFL v4.0 Glossary

All definitions below are written in original words, aligned with official ISTQB terminology for the v4.0 syllabus. Terms are organized alphabetically for quick reference.

---

## ⭐ A

**Acceptance criteria** — The conditions that a user story or requirement must satisfy to be considered complete and acceptable to stakeholders. Used as the basis for acceptance testing.

**Acceptance testing** — Formal testing conducted to determine whether a system meets its acceptance criteria and whether the customer/user should accept the system. Typically the final test level before release.

**Accuracy** — See Correctness. The degree to which a system produces correct results.

**Ad hoc testing** — Informal testing performed without a documented test plan or test cases, relying on the tester's intuition and experience.

**Alpha testing** — Acceptance testing performed at the developer's site by potential users or an independent test team, simulating real operational conditions.

**Anomaly** — Any condition that deviates from expected results based on requirements, specifications, design documents, or user expectations.

**API testing** — Testing of application programming interfaces directly, typically at the component integration or system integration level.

**ATDD (Acceptance Test-Driven Development)** — A collaborative approach where acceptance tests are defined before development begins, based on acceptance criteria. Tests guide implementation and serve as a shared understanding among developers, testers, and business representatives.

**Audit** — An independent examination of a work product or process to determine compliance with specifications, standards, or agreements.

---

## ⭐ B

**Basis test set** — The minimum set of test cases needed to achieve a specified coverage criterion.

**BDD (Behavior-Driven Development)** — A collaborative development approach that extends TDD by writing tests in a natural language format (Given/When/Then) understood by all stakeholders.

**Beta testing** — Acceptance testing performed by real users at their own sites under real operating conditions, typically after alpha testing.

**Black-box testing** — Testing based solely on the specification of a component or system without knowledge of its internal structure. Also called specification-based testing.

**Boundary value** — A value at or near the edge of an equivalence partition. Used in boundary value analysis to detect errors at partition boundaries.

**Boundary value analysis (BVA)** — A black-box test technique that derives test cases from the boundary values of equivalence partitions. In the two-value approach, tests use the boundary itself and its closest neighbor outside the partition.

**Branch** — A transfer of control between two sequential nodes in a control flow graph. A decision point creates two or more branches.

**Branch coverage** — The percentage of branches in the code that have been exercised by a test suite. 100% branch coverage means every decision outcome (true and false) has been tested.

**Branch testing** — A white-box technique that designs test cases to exercise all branches (decision outcomes) in the code.

**Bug** — See Defect.

---

## ⭐ C

**Checklist-based testing** — An experience-based technique where the tester uses a high-level list of items to check, conditions to verify, or aspects to evaluate during testing.

**Code coverage** — The degree to which source code has been exercised by a test suite, measured by criteria such as statement coverage or branch coverage.

**Commercial off-the-shelf (COTS)** — Software available for purchase, not custom-built for a specific client.

**Component integration testing** — Testing the interactions between integrated software components (units) to verify that they work together correctly.

**Component testing** — Testing individual software components in isolation. Also called unit testing or module testing.

**Condition** — A logical expression in code that evaluates to true or false and determines which branch is taken.

**Configuration management** — The discipline of identifying, organizing, and controlling modifications to work products (including testware) so that integrity and traceability are maintained throughout the project lifecycle.

**Confirmation testing** — Re-executing test cases that previously failed after a defect has been fixed, to confirm the fix resolves the problem. Also called re-testing.

**Contractual acceptance testing** — Acceptance testing performed to verify that a system meets the terms defined in a contract.

**Control flow** — The sequence in which statements or instructions are executed in a program.

**Coverage** — The degree to which specified items (requirements, code structures, test conditions) have been exercised by a test suite, expressed as a percentage.

---

## ⭐ D

**Data-driven testing** — A scripting technique where test input data and expected results are stored in a table or file, and a single test script iterates through the data.

**Decision** — A point in the code where the control flow can take two or more paths (e.g., an if-statement, a switch/case).

**Decision table** — A table representing combinations of inputs (conditions) and their corresponding outputs (actions). Used to design test cases for complex business logic.

**Decision table testing** — A black-box technique that derives test cases from a decision table, ensuring each combination of conditions (rule) is tested at least once.

**Defect** — An imperfection or flaw in a work product (code, document, specification) that could cause the system to fail. A defect is the result of an error.

**Defect density** — The number of defects found per unit of size (e.g., per thousand lines of code or per function point).

**Defect management** — The process of recognizing, documenting, classifying, investigating, resolving, and disposing of defects.

**Defect report** — A document describing a defect found during testing, including the steps to reproduce it, the expected result, the actual result, severity, and other relevant information.

**DevOps** — A set of practices that combines software development and IT operations, aiming for shorter development cycles, increased deployment frequency, and more dependable releases. Testing is integrated continuously.

**DoD (Definition of Done)** — A shared team agreement on the conditions that must be satisfied before an item (user story, feature, iteration) is considered complete. Includes testing activities.

**DoR (Definition of Ready)** — A shared team agreement on the conditions that must be met before a work item can enter development (e.g., acceptance criteria defined, testable, dependencies resolved).

**Dynamic testing** — Testing that involves executing the software (or a model of it) and comparing actual behavior against expected behavior.

---

## ⭐ E

**Entry criteria** — The preconditions that must be fulfilled before a test activity can begin. In Agile, often expressed as the Definition of Ready.

**Equivalence partition (EP)** — A subset of the input or output domain for which all values are expected to be treated identically by the system. Also called equivalence class.

**Equivalence partitioning** — A black-box technique that divides the input domain into partitions of equivalent behavior and selects at least one representative test value from each.

**Error** — A human mistake (such as a misunderstanding, typo, or logic slip) that produces a defect in a work product. Also called a mistake.

**Error guessing** — An experience-based technique where the tester uses knowledge of common errors, past defects, and failure patterns to anticipate where defects may exist and design tests to expose them.

**Exit criteria** — The conditions that must be met to declare a test activity or level complete. In Agile, often expressed as the Definition of Done.

**Exhaustive testing** — Testing every possible input combination and precondition — generally impossible and impractical (Testing Principle: exhaustive testing is impossible).

**Exploratory testing** — An experience-based approach where test design, execution, and learning happen simultaneously. The tester uses a charter or time-box to guide focused exploration.

---

## ⭐ F

**Failure** — An observable deviation of the system from its expected behavior during execution. A failure is caused by a defect being triggered at runtime.

**False negative** — A test result that incorrectly indicates no defect when one actually exists (the test passes but should have failed).

**False positive** — A test result that incorrectly indicates a defect when none exists (the test fails but should have passed).

**Functional testing** — Testing what the system does — whether it performs its specified functions correctly.

---

## ⭐ G-H

**Heuristic** — A practical, experience-based approach or rule of thumb used to guide problem-solving or testing when formal methods are impractical.

---

## ⭐ I

**Impact analysis** — Assessment of the effect of a proposed change on the system and its tests, identifying what areas may be affected and what testing is needed.

**Incremental development** — A development approach where the system is built and delivered in pieces (increments), each adding functionality.

**Independence of testing** — The degree to which testing is performed by people who are not the authors of the code under test. Higher independence can improve objectivity and defect detection but may reduce communication speed.

**Inspection** — The most formal type of review, led by a trained moderator, with defined roles, entry/exit criteria, metrics, and a formal follow-up process. Aimed at finding defects efficiently.

**Integration testing** — Testing the interfaces and interactions between integrated components or systems.

**Iterative development** — A development approach where the product is built through repeated cycles (iterations), with each cycle refining and expanding the system.

---

## ⭐ K

**Keyword-driven testing** — A testing approach where test cases are defined using action keywords (e.g., "Enter," "Click," "Verify") combined with test data, enabling non-programmers to design tests.

**K-level** — The cognitive level at which a learning objective is tested in the ISTQB exam: K1 (remember), K2 (understand), K3 (apply).

---

## ⭐ L

**Load testing** — A type of performance testing that evaluates system behavior under expected and peak load conditions.

---

## ⭐ M

**Maintenance testing** — Testing triggered by changes to or retirement of an existing operational system (patches, migrations, upgrades, or hot fixes).

**Metric** — A quantitative measure used to track and assess the status of testing (e.g., defect count, coverage percentage, test execution rate).

**Mock exam** — A practice exam simulating real exam conditions used for preparation and self-assessment.

---

## ⭐ N

**Negative testing** — Testing aimed at showing that the system handles invalid inputs or unexpected conditions gracefully (e.g., error messages, rejections).

**Non-functional testing** — Testing how well the system performs its functions — its quality characteristics such as performance, usability, reliability, security, and portability.

---

## ⭐ P

**Pair testing** — A testing approach where two team members work together at one workstation to test the same feature, combining their perspectives.

**Peer review** — A review of a work product performed by colleagues with comparable expertise.

**Performance testing** — Testing conducted to evaluate how well a system meets performance requirements (response time, throughput, resource utilization).

**Planning poker** — An Agile estimation technique where team members privately select a complexity value for a work item, then discuss differences to reach consensus.

**Precondition** — The state or conditions that must be established before a test case can be executed.

**Priority** — The level of business importance assigned to a test case or defect, influencing the order in which it is addressed.

**Product risk** — A risk related to the quality of the product (e.g., a feature might not work correctly, performance might degrade under load).

**Project risk** — A risk related to the management and control of the project (e.g., budget overrun, staff shortage, tool unavailability).

---

## ⭐ Q

**Quality** — The degree to which a work product satisfies stated and implied needs of its stakeholders.

**Quality assurance (QA)** — A set of activities focused on providing confidence that quality requirements will be fulfilled. QA is process-oriented and preventive — it ensures good processes are followed. Testing is one activity within QA.

**Quality control (QC)** — Activities focused on examining work products to verify they meet quality requirements. Testing is a form of quality control.

---

## ⭐ R

**Regression testing** — Re-executing tests on previously tested functionality after changes have been made, to detect unintended side effects.

**Regulatory acceptance testing** — Acceptance testing performed to verify compliance with laws, regulations, or standards.

**Requirements-based testing** — An approach to testing where test cases are derived from documented requirements.

**Retrospective** — A team meeting at the end of an iteration or project phase to reflect on what went well, what went poorly, and what improvements to make going forward.

**Review** — A static testing technique where a work product is examined by one or more people to find defects, improve quality, or build shared understanding.

**Risk** — A factor that could result in future negative consequences; defined by its likelihood of occurring and its impact if it does.

**Risk-based testing** — An approach where testing is planned, designed, and prioritized based on the level of product risk. Higher-risk areas receive more thorough testing.

**Risk level** — The combined measure of likelihood and impact for a given risk, used to prioritize testing effort.

**Root cause** — The underlying fundamental reason for a defect or failure. Root cause analysis seeks to identify why an error occurred, not just what went wrong.

---

## ⭐ S

**Scripted testing** — Testing performed by following pre-written, detailed test procedures step by step.

**Sequential development model** — A development model (e.g., Waterfall, V-model) where phases are performed in a linear sequence, each phase starting only after the previous one completes.

**Severity** — The degree of impact a defect has on system functionality or stakeholders.

**Shift-left** — The practice of performing testing activities earlier in the software development lifecycle to find and fix defects sooner when they are cheaper to repair.

**Smoke testing** — A subset of tests that verify the most critical functionality of a build, determining whether it is stable enough for further testing.

**Specification-based testing** — See Black-box testing.

**State transition diagram** — A graphical representation showing states a system can be in, the events that cause transitions between states, and any resulting actions.

**State transition testing** — A black-box technique that designs test cases based on valid and invalid transitions between system states.

**Statement** — An executable line or unit of code in a program.

**Statement coverage** — The percentage of executable statements in the code that have been exercised by a test suite.

**Statement testing** — A white-box technique that designs test cases to exercise executable statements in the code.

**Static analysis** — Examination of code or other work products using automated tools without executing the software.

**Static testing** — Examining work products (requirements, design, code) without executing them, to find defects. Includes reviews and static analysis.

**Structure-based testing** — See White-box testing.

**System integration testing** — Testing the interfaces and interactions between systems or between a system and external services/components.

**System testing** — Testing the complete, integrated system to verify it meets specified requirements. Performed in an environment as close to production as possible.

---

## ⭐ T

**TDD (Test-Driven Development)** — A development practice where automated unit tests are written before the code, driving design through repeated cycles of test-write-code-refactor.

**Test approach** — The implementation of the test strategy for a specific project, describing how testing will be performed.

**Test automation** — The use of software tools to execute tests, compare actual results to expected results, and report outcomes without manual intervention.

**Test basis** — The body of knowledge (requirements, specifications, designs, code, risk analysis results) used as the foundation for designing test cases.

**Test case** — A set of preconditions, inputs, actions, expected results, and postconditions developed to verify a specific test condition or requirement.

**Test charter** — A statement of test objectives and scope used to guide an exploratory testing session.

**Test completion** — Activities performed at the end of a test level or project, including archiving testware, analyzing lessons learned, and producing the test summary report.

**Test condition** — A testable aspect of a component or system identified from the test basis (e.g., a function, a transaction, a quality attribute).

**Test control** — The management activity of taking corrective actions when testing deviates from the plan (e.g., re-prioritizing tests, adding resources).

**Test data** — Data created or selected to execute test cases.

**Test design** — The activity of deriving and specifying test cases from test conditions and the test basis.

**Test environment** — The hardware, software, network, and tools configured to support test execution.

**Test estimation** — The activity of predicting the effort, resources, and duration needed for testing.

**Test execution** — The activity of running test cases and comparing actual results with expected results.

**Test implementation** — The activity of preparing testware needed for execution (creating test data, setting up environments, writing automated scripts, establishing execution schedules).

**Test level** — A group of test activities organized and managed together, typically corresponding to a development level (component, integration, system, acceptance).

**Test management** — The planning, scheduling, estimating, monitoring, and control of test activities.

**Test monitoring** — The ongoing activity of checking the status of testing against the plan, gathering metrics, and reporting progress.

**Test objective** — A reason or purpose for testing (e.g., finding defects, building confidence, providing information for decisions, preventing defects).

**Test oracle** — A source used to determine expected results for comparison with actual results during test execution.

**Test plan** — A document describing the scope, approach, resources, schedule, entry/exit criteria, risks, and deliverables for a test effort.

**Test procedure** — A sequence of actions for executing a test case. Also called a test script (when manual).

**Test process** — The set of interrelated activities comprising test planning, monitoring and control, analysis, design, implementation, execution, and completion.

**Test pyramid** — A model suggesting that a system should have many fast unit/component tests at the base, fewer integration tests in the middle, and very few slow end-to-end/UI tests at the top.

**Test report** — A document summarizing testing activities, results, and status. Includes test progress reports and test completion reports.

**Test strategy** — A high-level description of test levels, types, and activities to be performed within an organization or program, typically spanning multiple projects.

**Test suite** — A set of test cases grouped together for execution purposes (e.g., related to a feature, a test level, or a risk area).

**Test technique** — A procedure for deriving test cases based on specific rules or heuristics (e.g., equivalence partitioning, branch testing, error guessing).

**Test type** — A category of testing focused on a specific quality characteristic (e.g., functional testing, performance testing, usability testing).

**Testability** — The degree to which a component or system facilitates testing (e.g., controllability, observability).

**Tester** — A person who performs testing activities, including analysis, design, implementation, execution, and reporting.

**Testing** — The process of evaluating a system or component to determine whether it meets specified requirements, detect defects, and provide stakeholders with information about quality.

**Testing quadrants** — A model (Brian Marick) that categorizes tests along two axes: business-facing vs technology-facing, and supporting the team vs critiquing the product. Four quadrants (Q1-Q4) help ensure balanced test coverage.

**Testware** — All artifacts produced during the test process (test plans, test cases, test data, scripts, reports, defect reports, etc.).

**Traceability** — The ability to link related items (e.g., requirements to test cases to defect reports), enabling coverage analysis and impact assessment.

---

## ⭐ U

**Usability testing** — Testing that evaluates how easy and satisfying the system is to use for its intended audience.

**User acceptance testing (UAT)** — Acceptance testing performed by intended users to validate that the system meets their needs and is fit for purpose.

**User story** — A short, simple description of a feature from the user's perspective, typically in the format "As a [role], I want [goal], so that [benefit]."

---

## ⭐ V

**V-model** — A sequential development model showing a correspondence between each development phase (left side) and its associated testing phase (right side).

**Validation** — Confirmation that the product meets the user's actual needs and intended use. "Are we building the right product?"

**Verification** — Confirmation that a work product meets its specified requirements. "Are we building the product right?"

---

## ⭐ W

**Walkthrough** — A type of review where the author guides participants through a work product, explaining it step by step. Less formal than an inspection but more structured than an informal review.

**White-box testing** — Testing based on the internal structure of a component or system (e.g., code, architecture). Also called structure-based testing.

**Whole-team approach** — The practice in Agile where every team member (not just dedicated testers) shares responsibility for quality and testing activities.

---

## 📊 0-switch / 1-switch Coverage

**0-switch coverage** — Achieving coverage of every valid single transition in a state-transition diagram (covering each arc once).

**1-switch coverage** — Achieving coverage of every valid pair of consecutive transitions (covering sequences of two transitions).

---

*This glossary will be expanded as chapters are built. Terms are cross-referenced within lesson files.*
