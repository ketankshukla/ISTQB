# Mock Exam 3 — Answer Key

---

### Q1 — Answer: C
The pesticide paradox states that repeating the same tests eventually stops finding new defects. Tests must be refreshed and supplemented.

### Q2 — Answer: B
Root cause analysis identifies the fundamental reason an error occurred (e.g., unclear process, inadequate training) to prevent recurrence. It is NOT about blame.

### Q3 — Answer: C
The whole-team approach fosters shared responsibility and faster feedback. It does NOT eliminate testing skills or slow development.

### Q4 — Answer: C
Component (unit) testing isolates individual components using stubs and mocks to replace dependencies.

### Q5 — Answer: B
OAT validates operational needs: backup/restore, disaster recovery, installation, maintenance procedures. UAT validates business user needs. Performance testing covers load.

### Q6 — Answer: C
Iterative and incremental models build the system in repeated cycles, each delivering a working increment. Waterfall and V-model are sequential.

### Q7 — Answer: B
Involving testers early in story refinement to identify issues before development is a shift-left practice.

### Q8 — Answer: B
Static testing (no execution, finds defects directly) and dynamic testing (executes code, finds failures) are complementary. Both are needed.

### Q9 — Answer: B
The facilitator (moderator) leads the review meeting and ensures the process is followed correctly.

### Q10 — Answer: C
A supportive culture where findings are constructive (not personal attacks) is the most important success factor for reviews.

### Q11 — Answer: C
4 partitions (<1, 1-1000, >1000, non-integer) = 4 minimum test cases (one representative from each partition).

### Q12 — Answer: A
Two-value BVA for [1, 1000]: lower boundary = 0 (invalid), 1 (valid). Upper boundary = 1000 (valid), 1001 (invalid). Set: {0, 1, 1000, 1001}.

### Q13 — Answer: A
With 3 conditions, 2^3 = 8 rules total. Only 1 rule (all TRUE) leads to "Approved." The other 7 all lead to "Rejected." Since any FALSE in any condition produces the same outcome, all 7 rejection rules can theoretically be collapsed. However, for ISTQB purposes: the 7 non-approved rules can be represented more compactly but individual collapsed rules may still be needed for each "first FALSE" condition. The key insight: all combinations except TTT -> Rejected, so they collapse significantly.

### Q14 — Answer: B
An invalid transition is one that should NOT be possible in the current state. Testing it verifies the system correctly rejects the impossible event.

### Q15 — Answer: B
Statement coverage = (8 exercised / 10 total) x 100% = 80%.

### Q16 — Answer: C
Branches: Line 2 T/F (2) + Line 3 T/F (2) = 4 branches.
- TC1: age=20, hasLicense=true -> L2T, L3T -> "can drive"
- TC2: age=20, hasLicense=false -> L2T, L3F -> "get license first"
- TC3: age=16, any -> L2F -> "too young"
3 test cases cover all 4 branches.

### Q17 — Answer: C
Decision table testing is designed specifically for complex business rules with multiple interacting conditions. EP handles single-input partitioning; state transition handles state-based behavior.

### Q18 — Answer: B
Exploratory testing is simultaneous design, execution, and learning — structured by charters and time-boxes. It is NOT random or unplanned.

### Q19 — Answer: B
Given/When/Then is the Gherkin format associated with BDD. "As a / I want / So that" is the user story format.

### Q20 — Answer: B
Deriving tests from acceptance criteria before development, with collaborative definition by all roles, is ATDD.

### Q21 — Answer: C
A test plan contains objectives, scope, approach, schedule, resources, entry/exit criteria, and risk mitigation strategies.

### Q22 — Answer: B
Wideband Delphi uses anonymous independent estimates followed by discussion rounds to converge on consensus. Planning Poker reveals estimates simultaneously with cards.

### Q23 — Answer: B
Risk-based prioritization executes tests covering the highest-risk features first, ensuring critical areas are tested even if time runs out.

### Q24 — Answer: A
Q1 (technology-facing, supporting the team) contains unit tests, component tests, and TDD — fast automated tests that guide development.

### Q25 — Answer: B
Risk level = Likelihood x Impact = 4 x 4 = 16.

### Q26 — Answer: B
Security vulnerabilities are a product risk (product quality threat). A, C, D are project risks (schedule, staffing, tooling).

### Q27 — Answer: B
Test progress reports target the test team and project manager with current test status vs plan, including blockers and risks.

### Q28 — Answer: B
Risk-based testing allocates effort proportionally: more thorough testing for higher-risk features, basic coverage for lower-risk ones.

### Q29 — Answer: C
Severity and priority are independent dimensions. A high-severity crash in a rarely-used feature can legitimately have low business priority if a workaround exists.

### Q30 — Answer: B
CM records exact versions of code, data, and environment, enabling accurate reproduction of reported defects.

### Q31 — Answer: C
Automated code checking without execution (for standards, dead code, security patterns) is static analysis.

### Q32 — Answer: C
Fragile tests that break with UI changes and require expensive maintenance are a well-known risk of automation. A, B, D are benefits.

### Q33 — Answer: B
Automated tests only verify what they are programmed to check. They cannot replace human creativity (exploratory testing), usability judgment, or ad hoc observation.

### Q34 — Answer: C
Test management tools track progress, manage test case repositories, and generate reports.

### Q35 — Answer: B
The valid partition is the range of accepted values: -40 to 120. A, C, D are invalid partitions.

### Q36 — Answer: A
Two-value BVA for [-40, 120]: lower boundary = -41 (invalid), -40 (valid). Upper boundary = 120 (valid), 121 (invalid). Set: {-41, -40, 120, 121}.

### Q37 — Answer: B
The traffic light has 3 transitions forming a simple cycle: Red->Green->Yellow->Red. A single test case traversing the full cycle (Red->Green->Yellow->Red) covers all 3 transitions. Minimum: 1 test case.

### Q38 — Answer: B
Reviewing requirements and writing tests before development is a quintessential shift-left activity. A, C, D are opposite or counterproductive.

### Q39 — Answer: C
"Steps to reproduce" describes the specific actions needed to trigger the failure. Expected result states what should happen; severity/priority rate the defect.

### Q40 — Answer: B
100% branch coverage guarantees 100% statement coverage. Exercising every branch direction (TRUE and FALSE for all decisions) necessarily visits all reachable executable statements.

---

## Score Interpretation

| Score | Assessment |
|-------|-----------|
| 36-40 | Excellent — exam ready |
| 31-35 | Strong — review missed topics |
| 26-30 | Pass level — need more practice on weak areas |
| 21-25 | Below pass — focus on fundamentals and techniques |
| Below 21 | Significant study needed — revisit all chapters |
