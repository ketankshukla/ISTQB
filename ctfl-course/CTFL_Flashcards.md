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
# 🃏 CTFL v4.0 Flashcards

Use these for quick drills. Read the **Q** side, answer aloud, then flip to **A**.

---

## 📜 Seven Principles

**Q1:** What does the first testing principle state about defects?
**A:** Testing shows the presence of defects, not their absence.

**Q2:** Why is exhaustive testing impossible?
**A:** There are too many inputs, paths, and combinations; risk and priorities must guide test selection.

**Q3:** What is the "shift-left" principle?
**A:** Early testing (starting during requirements/design) saves time and money.

**Q4:** What does "defects cluster together" mean?
**A:** A small number of modules usually contain most of the defects (Pareto principle).

**Q5:** What is the "tests wear out" principle?
**A:** Running the same tests repeatedly finds fewer new defects over time; tests need updating.

**Q6:** What is the "absence-of-defects fallacy"?
**A:** Finding and fixing defects does not guarantee the system is useful or meets user needs.

---

## 🪜 Test Levels

**Q7:** Who typically performs component testing?
**A:** Developers, in the development environment.

**Q8:** What is the main focus of integration testing?
**A:** Interfaces and interactions between integrated components or systems.

**Q9:** Who typically performs system testing?
**A:** Independent testers (not the developers of the code under test).

**Q10:** What is the primary goal of acceptance testing?
**A:** To establish confidence that the system is fit for purpose and meets business needs.

**Q11:** What is the difference between component integration and system integration?
**A:** Component integration = within one system; System integration = between separate systems.

---

## 🧪 Test Types

**Q12:** What does functional testing verify?
**A:** What the system does — its functions and features against requirements.

**Q13:** Give three examples of non-functional testing.
**A:** Performance, usability, security, reliability, compatibility, maintainability.

**Q14:** What is regression testing?
**A:** Testing to confirm that changes have not caused unintended side effects in unchanged areas.

**Q15:** What is confirmation testing?
**A:** Re-testing a defect fix to confirm the defect is resolved.

**Q16:** What does white-box testing examine?
**A:** Internal structure of the software: code, architecture, data flows.

---

## 🔍 Static Testing

**Q17:** What is the difference between reviews and static analysis?
**A:** Reviews are manual examination of work products; static analysis is automated tool-based code examination without execution.

**Q18:** List the four review types from least to most formal.
**A:** Informal, Walkthrough, Technical review, Inspection.

**Q19:** What is the main purpose of a walkthrough?
**A:** Knowledge transfer — led by the author, often for training or finding defects.

**Q20:** Who leads an inspection?
**A:** A trained moderator (not the author).

**Q21:** What metrics are typically collected during an inspection?
**A:** Preparation time, review time, number and severity of defects found.

**Q22:** What can static analysis tools detect?
**A:** Unreachable code, unused variables, security vulnerabilities, coding standard violations, cyclomatic complexity.

---

## 🎯 Test Design Techniques

**Q23:** What is equivalence partitioning?
**A:** Dividing inputs into classes where the system is expected to behave the same way; one test per partition.

**Q24:** In standard ISTQB BVA, which values do you test for a range 1-100?
**A:** 1 (min), 100 (max) — the two boundary values.

**Q25:** What additional values would a 3-value BVA include for range 1-100?
**A:** 0 (min-1) and 101 (max+1).

**Q26:** How many rules does a full decision table have for 3 binary conditions?
**A:** 2^3 = 8 rules.

**Q27:** What does "don't care" (-) mean in a decision table?
**A:** The condition value does not affect the action for that rule; rules can be collapsed.

**Q28:** In state transition testing, what is 0-switch coverage?
**A:** Covering every single transition at least once.

**Q29:** In state transition testing, what is 1-switch coverage?
**A:** Covering every pair of consecutive transitions (n-1 pairs for n transitions).

**Q30:** What does use case testing base its test cases on?
**A:** User goals, interactions between actors and the system (main flow + alternatives + exceptions).

---

## 📊 Coverage

**Q31:** What does statement coverage measure?
**A:** The percentage of executable statements that have been executed.

**Q32:** What does decision (branch) coverage measure?
**A:** The percentage of decision outcomes (true/false) that have been executed.

**Q33:** Does 100% statement coverage guarantee 100% decision coverage?
**A:** No. You can execute all statements without taking every branch outcome.

**Q34:** What is MC/DC coverage?
**A:** Modified Condition/Decision Coverage: each condition independently affects the decision outcome.

---

## 🗂️ Test Management

**Q35:** Name the seven test activities in order.
**A:** Planning, Monitoring & Control, Analysis, Design, Implementation, Execution, Completion.

**Q36:** What is the difference between a test plan and a test strategy?
**A:** Test strategy = high-level organizational approach; Test plan = project-level document with scope, schedule, resources.

**Q37:** What are three test estimation techniques?
**A:** Expert-based (Delphi), Past-project-based (analogy), Metrics-based (formula).

**Q38:** What is a product risk in testing?
**A:** A risk that the software might fail or have defects (quality risk).

**Q39:** What is a project risk in testing?
**A:** A risk to the project itself: staffing, schedule, budget, tools, skills.

**Q40:** How is test priority typically determined in risk-based testing?
**A:** Likelihood of occurrence x Impact (severity of failure).

**Q41:** Name five essential elements of a defect report.
**A:** Title, Description/Steps, Expected result, Actual result, Severity/Priority, Environment.

**Q42:** When should exit criteria be defined?
**A:** During test planning, before test execution begins.

**Q43:** Give three examples of exit criteria.
**A:** Coverage target achieved, defect density below threshold, all severity 1 defects resolved, budget/time limit reached.

**Q44:** What is a test basis?
**A:** The source document(s) used as the basis for test analysis and design (requirements, user stories, design docs).

**Q45:** What is traceability in testing?
**A:** The ability to trace requirements forward to test cases and backward from defects to requirements.

---

## ⚙️ Configuration Management

**Q46:** What is a baseline in configuration management?
**A:** An approved version of a work product that serves as the basis for further development.

**Q47:** Why is traceability important?
**A:** To assess coverage, analyze impact of changes, and make testing auditable.

---

## 🛠️ Test Tools

**Q48:** What is the main purpose of a test management tool?
**A:** To manage test assets (plans, cases, executions), defects, and reporting.

**Q49:** What type of tool is SonarQube?
**A:** Static analysis tool.

**Q50:** What is a data-driven testing tool?
**A:** A tool that separates test scripts from test data, allowing the same script to run with multiple datasets.

**Q51:** What is the recommended approach before rolling out a test tool organization-wide?
**A:** Run a pilot project to evaluate fit, costs, and benefits.

**Q52:** What is a potential risk of test automation?
**A:** False confidence (tests pass but don't check the right things), high maintenance, tool dependency.

---

## ⭐ Key Definitions

**Q53:** What is validation?
**A:** Checking that we built the right product (meets user needs).

**Q54:** What is verification?
**A:** Checking that we built the product right (conforms to specifications).

**Q55:** What is the difference between error, defect, and failure?
**A:** Error = human mistake; Defect = flaw in the code/document; Failure = observable deviation from expected behavior.

**Q56:** What is a test condition?
**A:** An item or event that could be verified by one or more test cases.

**Q57:** What is a test case?
**A:** A set of preconditions, inputs, actions, and expected results developed to verify a specific test condition.

**Q58:** What is a test procedure (test script)?
**A:** A sequence of test cases to be executed in a specific order.

**Q59:** What is a test suite?
**A:** A collection of test cases or test procedures grouped for execution.

**Q60:** What is a test oracle?
**A:** A source of expected results used to determine whether a test has passed or failed.

---

## ⭐ Roles & Responsibilities

**Q61:** What is the main responsibility of a test manager?
**A:** Planning, organizing, directing, and controlling testing activities; resource and schedule management.

**Q62:** What is the main responsibility of a tester?
**A:** Designing, implementing, and executing tests; reporting defects; analyzing results.

**Q63:** What is independent testing?
**A:** Testing performed by someone other than the author of the item under test.

**Q64:** What are the four levels of test independence (from least to most)?
**A:** 1) Test by author, 2) Test by peer, 3) Test by independent team within same org, 4) Test by independent team in separate org.

---

## 💎 Quality Characteristics (ISO 25010)

**Q65:** Name four functional suitability sub-characteristics.
**A:** Functional completeness, functional correctness, functional appropriateness.

**Q66:** Name three performance efficiency sub-characteristics.
**A:** Time behavior, resource utilization, capacity.

**Q67:** What does compatibility testing cover?
**A:** Co-existence and interoperability with other systems.

**Q68:** What does usability testing cover?
**A:** Appropriateness recognizability, learnability, operability, user error protection, accessibility.

**Q69:** What does reliability testing cover?
**A:** Maturity (defects), availability, fault tolerance, recoverability.

**Q70:** What does security testing cover?
**A:** Confidentiality, integrity, non-repudiation, accountability, authenticity.

**Q71:** What does maintainability testing cover?
**A:** Modularity, reusability, analyzability, modifiability, testability.

**Q72:** What does portability testing cover?
**A:** Adaptability, installability, replaceability.

---

## ⭐ Maintenance Testing

**Q73:** What triggers maintenance testing?
**A:** Modifications (planned enhancements, patches), migration to new environments, retirement.

**Q74:** What is the difference between re-testing and regression testing during maintenance?
**A:** Re-testing = confirm fix works; Regression testing = confirm unchanged areas still work.

---

## ⭐ Keyword-Driven Testing

**Q75:** What is keyword-driven testing?
**A:** A scripting technique where test cases use keywords (actions) that map to reusable script functions, separating test logic from implementation.

---

## ⭐ Shift-Left and DevOps

**Q76:** What does "shift-left" mean in testing?
**A:** Moving testing activities earlier in the SDLC — starting during requirements and design rather than after coding.

**Q77:** How does continuous integration relate to testing?
**A:** Code changes are automatically built and tested frequently, providing fast feedback.

**Q78:** What is the test pyramid?
**A:** Many unit tests at the base, fewer integration tests in the middle, fewest UI/end-to-end tests at the top.

---

## 🎓 Exam-Specific Reminders

**Q79:** What K-levels are tested in CTFL v4.0?
**A:** K1 (remember), K2 (understand), K3 (apply).

**Q80:** How many questions and how much time?
**A:** 40 questions in 60 minutes (90 seconds per question).

**Q81:** What is the pass mark?
**A:** 65% — 26 out of 40 questions correct.

**Q82:** Is the exam open or closed book?
**A:** Closed book.

**Q83:** What is a "best single answer" question format?
**A:** Only one option is fully correct; distractors may be partially true but flawed.

**Q84:** What should you do if a question takes more than 2 minutes?
**A:** Flag it, select your best guess, and move on. Return if time permits.

---

## ⭐ Common Distractor Patterns

**Q85:** "Testing proves the software is correct." True or false?
**A:** False. Testing can only show the presence of defects, not prove correctness.

**Q86:** "100% code coverage means the software has no defects." True or false?
**A:** False. Coverage only measures what was exercised, not whether the assertions or oracles were correct.

**Q87:** "System testing is done by the developers of the system." True or false?
**A:** False. System testing should be done by independent testers.

**Q88:** "Acceptance testing checks that the code works correctly." True or false?
**A:** False. That is system testing. Acceptance testing checks fitness for purpose and business needs.

**Q89:** "Reviews can only find defects in documents, not in code." True or false?
**A:** False. Reviews can examine any work product: requirements, design, code, test plans, user manuals.

**Q90:** "Static analysis executes the code to find defects." True or false?
**A:** False. Static analysis examines code without executing it.

---

## ⭐ Quick Calculations

**Q91:** A system has a valid range of 18-65 for age. Using standard BVA, which values should be tested?
**A:** 18 and 65.

**Q92:** A system has a valid range of 1-10. Using 3-value BVA, which values should be tested?
**A:** 0, 1, 10, 11.

**Q93:** How many test cases for equivalence partitioning if there are 2 valid and 2 invalid partitions?
**A:** 4 (one from each partition).

**Q94:** A decision table has 4 conditions, each with 2 values. How many rules in a full table?
**A:** 2^4 = 16 rules.

**Q95:** A state machine has 3 states with transitions A→B, B→C, C→A. How many transitions for 0-switch coverage?
**A:** 3.

**Q96:** Same machine. How many pairs for 1-switch coverage?
**A:** 2 pairs (A→B→C and B→C→A, or C→A→B depending on valid transitions).

**Q97:** If 80 tests were run and 4 failed, what is the pass rate?
**A:** (76 / 80) x 100 = 95%.

**Q98:** A module has 100 executable statements. 85 were executed during testing. What is statement coverage?
**A:** 85%.

**Q99:** A module has 10 decisions. 8 true branches and 7 false branches were executed. What is decision coverage?
**A:** (15 / 20) x 100 = 75%.

**Q100:** A project found 90 defects in testing and 10 in production. What is defect removal efficiency?
**A:** 90 / (90 + 10) = 90%.
