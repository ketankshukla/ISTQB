# Mock Exam 1 — Answer Key

---

### Q1 — Answer: B
Testing finds defects, reduces risk, and provides stakeholders with information for decisions. A is wrong (cannot prove absence). C is wrong (testing never aims to delay). D is wrong (testing does not replace reviews).

### Q2 — Answer: C
The developer's mistake in reasoning is an **error** (human mistake). The resulting incorrect code is a defect. A failure would occur if that code is executed and produces wrong output.

### Q3 — Answer: C
"Defects cluster together" states that a small number of modules contain most defects (Pareto principle applied to defects).

### Q4 — Answer: B
Test analysis identifies test conditions from the test basis. Planning produces the test plan. Design produces test cases. Execution produces test results.

### Q5 — Answer: C
In the whole-team approach, every team member shares responsibility for quality.

### Q6 — Answer: B
The management role handles planning, monitoring, and control. The testing role handles analysis, design, implementation, and execution.

### Q7 — Answer: C
In the V-model: system requirements/design corresponds to system testing. Business requirements -> acceptance testing. Detailed design -> integration testing. Coding -> component testing.

### Q8 — Answer: B
Shift-left means performing testing activities earlier to catch defects sooner when they are cheaper to fix.

### Q9 — Answer: A
TDD is developer-driven at component level. ATDD involves all three roles (business, developer, tester) at the acceptance level.

### Q10 — Answer: B
Re-running a specific failed test after a fix to verify the fix works is confirmation testing (re-testing). Regression testing checks for side effects elsewhere.

### Q11 — Answer: B
Migration is a trigger for maintenance testing. A and C are new development, not maintenance. D is sprint planning.

### Q12 — Answer: C
Static testing can examine any readable work product — requirements, designs, code, test plans, user manuals, etc.

### Q13 — Answer: B
Most defects in a formal review are found during individual preparation (when each reviewer studies the work product alone), not during the meeting.

### Q14 — Answer: B
In a walkthrough, the author leads/guides participants through the work product. In an inspection, a trained moderator leads.

### Q15 — Answer: D
All listed characteristics (formal entry/exit criteria, trained moderator, mandatory prep, metrics) define an inspection.

### Q16 — Answer: C
At minimum: below 18 (invalid), 18-60 (valid), above 60 (invalid) = 3 partitions. Additional partitions (non-integer, non-numeric) could be added for more thorough testing, making D also defensible — but 3 is the minimum for numeric EP.

### Q17 — Answer: A
Two-value BVA for range [1, 100]: test the boundary and its nearest neighbor outside. Lower: 0 (invalid), 1 (valid). Upper: 100 (valid), 101 (invalid). Set = {0, 1, 100, 101}.

### Q18 — Answer: C
3 binary conditions -> 2^3 = 8 maximum rules.

### Q19 — Answer: C
The minimum number of test cases depends on how transitions can be combined into paths. With 7 transitions, you typically need fewer than 7 test paths since a single path traverses multiple transitions. The exact minimum depends on the diagram structure.

### Q20 — Answer: B
Two if-statements, each with TRUE and FALSE outcomes = 2 + 2 = 4 branches.

### Q21 — Answer: B
100% statement coverage does NOT guarantee 100% branch coverage. An if-statement without else can have all its statements covered by testing only the TRUE branch.

### Q22 — Answer: C
Using knowledge of past defects and common error patterns to target specific problem areas is error guessing.

### Q23 — Answer: B
Exploratory testing uses charters and time-boxes for structure while allowing dynamic adaptation. It is NOT unstructured or ad hoc.

### Q24 — Answer: B
The Three Amigos are: business representative (product owner), developer, and tester.

### Q25 — Answer: C
In ATDD, acceptance tests are written BEFORE development begins, based on collaboratively defined acceptance criteria.

### Q26 — Answer: B
The test plan documents objectives, approach, scope, schedule, resources, and criteria for the testing effort.

### Q27 — Answer: B
Definition of Done defines conditions for completion — equivalent to exit criteria in traditional terminology.

### Q28 — Answer: B
Planning Poker relies on team expert judgment. It is expert-based, not metrics-based.

### Q29 — Answer: C
The test pyramid has UI/E2E tests at the top — the layer with the fewest tests. Unit tests form the wide base with the most tests.

### Q30 — Answer: A
Risk 1: 2 x 5 = 10. Risk 2: 4 x 2 = 8. The first risk has the higher risk level.

### Q31 — Answer: C
A defect in the search function is a product quality risk. A, B, and D are project risks (they affect project management, not product quality).

### Q32 — Answer: B
Low-risk areas receive less testing effort with basic coverage. They are NOT skipped entirely (that would leave unacceptable residual risk) nor tested first or most heavily.

### Q33 — Answer: B
Test execution rate measures how many tests are completed over time — directly indicating whether testing keeps pace.

### Q34 — Answer: B
CM ensures testware is version-controlled, enabling traceability, reproducibility, and team consistency.

### Q35 — Answer: B
A complete defect report includes steps to reproduce, expected/actual results, severity, and environment. Incomplete reports waste developer time.

### Q36 — Answer: B
Severity = technical impact (how bad is it). Priority = business urgency (how soon must it be fixed). They can differ.

### Q37 — Answer: B
Static analysis tools examine code without executing it, finding standard violations and potential bugs through pattern analysis.

### Q38 — Answer: C
Automation provides faster regression feedback and consistent execution. It does NOT eliminate testers or guarantee finding all defects.

### Q39 — Answer: C
High maintenance cost when the application changes frequently is a well-known automation risk. A, B, D are benefits.

### Q40 — Answer: C
Exploratory testing requires human creativity, intuition, and judgment — it cannot be fully automated. Regression, smoke, and data-driven tests are excellent automation candidates.

---

## Score Interpretation

| Score | Assessment |
|-------|-----------|
| 36-40 | Excellent — exam ready |
| 31-35 | Strong — review missed topics |
| 26-30 | Pass level — need more practice on weak areas |
| 21-25 | Below pass — focus on fundamentals and techniques |
| Below 21 | Significant study needed — revisit all chapters |
