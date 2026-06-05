# Chapter 1 — Testing Process: Exam Traps

## Trap 1: Confusing Test Analysis with Test Design

**Trap:** Many candidates cannot distinguish between test analysis (what to test) and test design (how to test it).

**Example question:**
> A test analyst reviews a requirements document and identifies that "the system shall reject passwords shorter than 8 characters" needs to be tested. This activity is:
>
> A. Test design
> B. Test analysis
> C. Test implementation
> D. Test execution

**Wrong answer:** A — "Test design" — because the candidate sees "test" and assumes any test activity before execution is design.

**Why it's wrong:** Identifying WHAT needs to be tested (a test condition) is test analysis. Test design would define the specific test cases (e.g., "Enter password 'abc123' → expect error 'Password must be at least 8 characters'").

**Correct answer:** B — Test analysis.

**Defense strategy:** Remember the distinction: Analysis = "What to test" (conditions). Design = "How to test" (cases with inputs, expected results, steps).

---

## Trap 2: Thinking Test Planning Only Happens at the Beginning

**Trap:** In iterative and agile models, test planning is ongoing, not a one-time activity.

**Example question:**
> In an agile project using 2-week sprints, when should test planning occur?
>
> A. Only during the first sprint
> B. At the beginning of each sprint
> C. Only when the product owner requests it
> D. Once at project kickoff

**Wrong answer:** D — "Once at project kickoff" — reflecting a waterfall mindset.

**Why it's wrong:** Agile requires continuous planning. Each sprint needs its own test plan or test approach.

**Correct answer:** B — At the beginning of each sprint.

**Defense strategy:** Match the lifecycle model to the planning approach. Sequential = upfront planning; Agile = continuous planning.

---

## Trap 3: Forgetting That Exit Criteria Can Be Changed

**Trap:** Exit criteria are not set in stone. They can be changed with stakeholder agreement.

**Example question:**
> A project is 1 week from its release date. Testing has achieved 85% of planned test cases (target was 95%). The remaining tests cover low-risk features. What is the MOST appropriate action?
>
> A. Delay the release until 95% is achieved
> B. Accept the risk, document it, and proceed with release
> C. Stop testing immediately
> D. Reduce the test team size

**Wrong answer:** A — automatically delaying the release without considering the actual risk.

**Why it's wrong:** While 95% was the target, the remaining 15% covers low-risk features. The business may accept this risk rather than delay.

**Correct answer:** B — Accept the risk with documentation and stakeholder agreement.

**Defense strategy:** Exit criteria guide decisions but do not dictate them absolutely. Risk assessment and stakeholder agreement are always part of the decision.

---

## Trap 4: Confusing Suspension Criteria with Exit Criteria

**Trap:** Suspension criteria are temporary stopping conditions (resume later). Exit criteria are final stopping conditions (testing is done).

**Example question:**
> "The build crashes during smoke tests more than 20% of the time." This is an example of:
>
> A. Entry criterion
> B. Suspension criterion
> C. Exit criterion
> D. Test completion criterion

**Wrong answer:** C — "Exit criterion" — because it involves stopping testing.

**Why it's wrong:** This stops testing temporarily until the build stabilizes. It is not a final completion condition.

**Correct answer:** B — Suspension criterion.

**Defense strategy:** Ask: "Is this temporary or permanent?" Temporary = suspension. Permanent = exit.

---

## Trap 5: Thinking Test Closure Only Happens at the End of a Project

**Trap:** Test closure can also occur at the end of a phase, iteration, or when a project is cancelled.

**Example question:**
> A project is cancelled due to budget cuts after Sprint 3 of 6. Which activity should the test team perform?
>
> A. Immediately leave the project and join another team
> B. Archive test assets and document lessons learned
> C. Continue testing until the original end date
> D. Delete all test cases to save storage

**Wrong answer:** A — abandoning without closure.

**Why it's wrong:** Test closure is needed whenever testing ends, even if the project is cancelled. Assets should be preserved and lessons learned captured.

**Correct answer:** B — Archive test assets and document lessons learned.

**Defense strategy:** Test closure = "preserving knowledge when testing stops." This applies to any stopping condition, not just successful completion.

---

## Trap 6: Forgetting the Test Analyst's Role in Planning

**Trap:** Test analysts contribute to planning by providing input on techniques, estimates, and data — but they do not own the project plan.

**Example question:**
> During test planning, which activity is MOST appropriate for a test analyst to perform?
>
> A. Set the overall project budget
> B. Define the project's release date
> C. Estimate effort for test case design and implementation
> D. Hire testers for the project

**Wrong answer:** A or B — confusing test analyst with test manager.

**Why it's wrong:** Budget and release date are project management decisions. The test analyst provides estimates and input, but does not set these.

**Correct answer:** C — Estimate effort for test case design and implementation.

**Defense strategy:** Test analysts = technical execution and estimation. Test managers = resource allocation, scheduling, budgeting.

---

## Trap 7: Ignoring the Difference Between Lifecycle Models

**Trap:** Questions often describe a scenario and expect you to identify how test activities differ in that model.

**Example question:**
> In a sequential (waterfall) lifecycle, test design typically occurs:
>
> A. During the coding phase
> B. During the requirements phase
> C. During the design phase
> D. During the testing phase

**Wrong answer:** A — "During the coding phase" — too late.

**Why it's wrong:** In sequential models, test design occurs during the design phase (parallel with or after software design). It does not wait for code.

**Correct answer:** C — During the design phase.

**Defense strategy:** Memorize the mapping: Sequential = analysis during requirements, design during design, execution during testing. Agile = all activities in each sprint.

---

## Trap 8: Confusing Test Data with Test Conditions

**Trap:** Test data is the specific values used in test cases. Test conditions are the things being tested.

**Example question:**
> "Username: testuser@example.com, Password: TestPass123!" is an example of:
>
> A. A test condition
> B. Test data
> C. A test case
> D. A test procedure

**Wrong answer:** C — "A test case" — because it looks like part of a test case.

**Why it's wrong:** These are specific input values, which is test data. A test case would include the action ("Enter username and password, click Login") and the expected result ("Dashboard displayed").

**Correct answer:** B — Test data.

**Defense strategy:** Test data = specific values. Test case = the complete specification of what to do and what to expect.
