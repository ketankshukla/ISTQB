# Mock Exam 2 — Answer Key

---

### Q1 — Answer: B
The absence-of-defects fallacy: a system with zero defects is still a failure if it does not meet user needs.

### Q2 — Answer: B
The causal chain is: error (human mistake) -> defect (flaw in work product) -> failure (incorrect runtime behavior). Not all defects cause failures (dead code). The chain does not go in reverse.

### Q3 — Answer: B
The pesticide paradox: repeating unchanged tests loses effectiveness over time as the tests "wear out" and stop finding new defects.

### Q4 — Answer: C
"Proving the software is completely correct" contradicts Principle 1 (testing shows presence of defects, not absence). A, B, D are all valid objectives.

### Q5 — Answer: B
An ambiguity in a requirement is a defect in that work product. It was found through static testing (a review). No failure occurs because nothing was executed.

### Q6 — Answer: B
Higher independence brings different cognitive biases and perspectives, reducing the chance of shared blind spots between developer and tester. It does NOT make testing cheaper or always improve communication.

### Q7 — Answer: B
DevOps integrates testing into CI/CD with heavy automation for fast feedback. Testing is not eliminated, not manual-only, and not postponed to final deployment.

### Q8 — Answer: B
BDD uses structured natural language (Given/When/Then) as executable specifications, facilitating collaboration across technical and non-technical stakeholders.

### Q9 — Answer: B
Component integration testing verifies interfaces between components WITHIN the same system. System integration testing handles interfaces between SYSTEMS.

### Q10 — Answer: B
Non-functional testing evaluates HOW WELL the system performs (quality attributes: performance, usability, security, reliability). Functional testing evaluates WHAT it does.

### Q11 — Answer: B
Confirmation = verify the fix worked (narrow). Regression = verify nothing else broke (broad). Both are needed after a fix.

### Q12 — Answer: B
Impact analysis assesses which system areas a change could affect and what testing is needed — ensuring efficient, focused maintenance testing.

### Q13 — Answer: C
Static testing does NOT execute software. It CAN examine any readable work product. It finds defects (ambiguities, omissions) that dynamic testing cannot detect.

### Q14 — Answer: B
Inspections are the most formal type with trained moderator, formal entry/exit criteria, mandatory preparation, and metrics. Technical reviews are less formal.

### Q15 — Answer: C
The author is always responsible for fixing defects found in their work product. Reviewers find them; the author fixes them.

### Q16 — Answer: B
"Orders between $50 and $200" is the valid equivalence partition. A, C, D are other partitions (invalid/boundary-related).

### Q17 — Answer: B
Two-value BVA for [1, 99]: lower boundary pair = 0, 1; upper boundary pair = 99, 100. Total = 4 test values.

### Q18 — Answer: C
A dash ("-") means "don't care" — the condition value does not affect the outcome for that rule, enabling simplification/collapsing.

### Q19 — Answer: B
0-switch coverage requires exercising all valid transitions at least once. With 5 transitions, all 5 must be covered (through paths that may combine multiple transitions).

### Q20 — Answer: C
Branches: Line 1 T/F (2) + Line 6 T/F (2) = 4 branches. But wait — if-else covers both T and F in lines 1-5. We need: (x>10)T + (y>5)T, (x>10)F + (y>5)F, and one combination that covers y>5 FALSE when x>10 is TRUE. Actually: TC1: x=15, y=10 covers L1T, L6T. TC2: x=5, y=2 covers L1F, L6F. That is 4/4 branches with 2 TCs. But the implicit else of line 6 (no else block) — still just 2 branches for line 6 decision. So minimum is 2. Let me correct: Answer is **B (2)**.

Wait, re-reading: the answer should be 2 because TC1(x=15,y=10) covers branches 1T and 6T, and TC2(x=5,y=2) covers branches 1F and 6F. But we also need to ensure we don't miss a branch combination. Actually for branch coverage (not path coverage), we only need each branch direction exercised at least once = 2 test cases.

Correction: Answer is **B** — not C. Let me fix this in the answer key:

**Answer: B** — 2 test cases. TC1: x=15, y=10 (covers line 1 TRUE, line 6 TRUE). TC2: x=5, y=2 (covers line 1 FALSE, line 6 FALSE). All 4 branches covered.

### Q21 — Answer: B
100% branch coverage guarantees 100% statement coverage (because exercising both branches of every decision visits all reachable statements). It does NOT guarantee path coverage, finding all defects, or condition coverage.

### Q22 — Answer: C
Using knowledge of past bugs in similar systems to predict and target specific problem areas is error guessing.

### Q23 — Answer: B
Checklist-based testing uses a high-level list of items to verify. The tester determines the specific approach for each item, using judgment.

### Q24 — Answer: B
Scenario-oriented acceptance criteria use Given/When/Then (Gherkin) format. Rule-oriented criteria use bullet-point lists.

### Q25 — Answer: C
In ATDD, acceptance tests are written before development, based on collaboratively defined acceptance criteria. They serve as executable specifications driving implementation.

### Q26 — Answer: B
Testers add most value in sprint planning by estimating test effort, identifying risks, and ensuring stories are testable before entering the sprint.

### Q27 — Answer: C
Entry criteria for system testing: preceding test levels are complete and the system is deployed to the test environment. A is an exit criterion. B is a completion activity.

### Q28 — Answer: C
The test pyramid recommends many fast automated unit/component tests at the base, with fewer tests at higher levels.

### Q29 — Answer: C
Q3 (business-facing, critique product) includes exploratory testing, usability testing, and UAT. These evaluate whether the product meets user needs.

### Q30 — Answer: B
Payment module risk level: 3 x 5 = 15 (High). Login module risk level: 1 x 3 = 3 (Low). More testing effort goes to the higher-risk payment module.

### Q31 — Answer: B
A vendor delivering late is a project risk (threatens the project schedule). A, C, D are all product risks (quality issues).

### Q32 — Answer: B
A test completion report summarizes activities, assesses quality, identifies residual risks, and recommends on release readiness.

### Q33 — Answer: B
CM ensures that defects can be reproduced against specific versions and that all team members use consistent, correct testware.

### Q34 — Answer: B
Severity is the technical impact of the defect. Priority (A) is business urgency. They are set by different people and can differ.

### Q35 — Answer: B
Clear steps to reproduce, expected vs actual results, and environment details give the developer everything needed to investigate.

### Q36 — Answer: C
A tool that examines code without executing it (finding unreachable code, potential bugs) is a static testing/analysis tool.

### Q37 — Answer: C
Automation cannot guarantee detection of ALL defects, especially subjective issues like usability. A, B, D are genuine benefits.

### Q38 — Answer: C
Automation is most cost-effective for stable, frequently repeated tests (regression) where the high upfront investment is amortized over many runs.

### Q39 — Answer: C
A flaky test passes/fails intermittently without code changes — a known automation risk that erodes confidence.

### Q40 — Answer: B
Retrospectives drive process improvement. The appropriate fix is involving testers earlier in story refinement (shift-left).

---

## Score Interpretation

| Score | Assessment |
|-------|-----------|
| 36-40 | Excellent — exam ready |
| 31-35 | Strong — review missed topics |
| 26-30 | Pass level — need more practice on weak areas |
| 21-25 | Below pass — focus on fundamentals and techniques |
| Below 21 | Significant study needed — revisit all chapters |
