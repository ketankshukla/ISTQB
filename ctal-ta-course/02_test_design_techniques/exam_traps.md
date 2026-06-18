# 🪤 Chapter 2 — Test Design Techniques: Exam Traps

## 🪤 Trap 1: Confusing EP and BVA

**Trap:** Candidates often cannot distinguish when to use EP versus BVA, or they apply BVA without first identifying partitions.

**Example question:**
> A field accepts integers from 10 to 100. Which technique is MOST appropriate for testing the values 9, 10, 100, and 101?
>
> A. Equivalence Partitioning only
> B. Boundary Value Analysis
> C. Decision Table Testing
> D. State Transition Testing

**Wrong answer:** A — "Equivalence Partitioning only" — because these are boundary values, not partition representatives.

**Why it's wrong:** EP would test one representative value per partition (e.g., 50 for the valid partition). Testing 9, 10, 100, 101 is specifically BVA.

**Correct answer:** B — Boundary Value Analysis.

**Defense strategy:** EP = one value per partition. BVA = values at and around boundaries. If you see min-1, min, max, max+1, that's BVA.

---

## 🪤 Trap 2: Counting Decision Table Rules Wrong

**Trap:** Forgetting that the number of rules is the product of condition values, not the sum.

**Example question:**
> A decision table has 3 conditions: Condition A (2 values), Condition B (3 values), Condition C (2 values). How many rules are needed for full coverage?
>
> A. 7 (2 + 3 + 2)
> B. 12 (2 × 3 × 2)
> C. 6 (2 + 3 + 2 - 1)
> D. 8 (2^3)

**Wrong answer:** A — "7" — adding instead of multiplying.

**Why it's wrong:** The number of rules is the PRODUCT of the number of values for each condition: 2 × 3 × 2 = 12.

**Correct answer:** B — 12.

**Defense strategy:** Always multiply, never add. For n binary conditions: 2^n rules. For conditions with v1, v2, v3 values: v1 × v2 × v3 rules.

---

## 🪤 Trap 3: Forgetting Invalid Transitions in State Testing

**Trap:** Testing only valid state transitions and ignoring invalid transitions that should be rejected.

**Example question:**
> In a login system, a user is in the "Logged In" state. Which transition should be tested for robustness?
>
> A. Logged In → Idle (valid logout)
> B. Logged In → Logged In (stay in same state)
> C. Idle → Logged In (valid login)
> D. Logged In → Locked (without any invalid action event)

**Wrong answer:** A — "Logged In → Idle" — this is a valid transition, not a robustness test.

**Why it's wrong:** The question asks for an invalid/robustness transition. A user in "Logged In" state should not transition directly to "Locked" without an invalid action event.

**Correct answer:** D — Logged In → Locked without cause.

**Defense strategy:** State transition questions often test invalid transitions. Look for transitions that violate the state diagram logic.

---

## 🪤 Trap 4: Applying BVA to Non-Ordered Partitions

**Trap:** Trying to use BVA on categorical data that has no natural order or boundary.

**Example question:**
> A field accepts one of three payment types: Credit Card, PayPal, Bank Transfer. Which test design technique is MOST appropriate?
>
> A. Boundary Value Analysis
> B. Equivalence Partitioning
> C. Decision Table Testing
> D. State Transition Testing

**Wrong answer:** A — "Boundary Value Analysis" — because boundaries don't exist for unordered categories.

**Why it's wrong:** BVA requires ordered, contiguous ranges. Payment types are discrete categories with no ordering.

**Correct answer:** B — Equivalence Partitioning (one test per valid payment type, plus invalid types).

**Defense strategy:** BVA requires numeric ranges with boundaries. EP works for any partitionable domain. Decision tables work for combinations. State transitions work for state-based systems.

---

## 🪤 Trap 5: Testing Multiple Invalid Conditions Simultaneously

**Trap:** When applying EP with multiple conditions, testing more than one invalid condition in a single test case.

**Example question:**
> A form has two fields: Username (5-20 chars) and Password (8-30 chars). A test case enters a 3-character username and a 6-character password, and the form is rejected. What problem does this test case have?
>
> A. It tests too many valid conditions
> B. It tests two invalid conditions simultaneously, so we cannot determine which caused rejection
> C. It does not use Boundary Value Analysis
> D. It does not test the main path

**Wrong answer:** C — "It does not use BVA" — the problem is not about technique choice.

**Why it's wrong:** The fundamental issue is that with both username AND password invalid, we cannot tell which field triggered the rejection.

**Correct answer:** B — Two invalid conditions simultaneously prevent root cause identification.

**Defense strategy:** In EP, test one invalid condition at a time while keeping other conditions valid. This isolates the cause of failure.

---

## 🪤 Trap 6: Treating Exploratory Testing as Random Testing

**Trap:** Exploratory testing is structured by skill and charters, not random.

**Example question:**
> Which statement BEST describes exploratory testing?
>
> A. Testing without any planning or documentation
> B. Simultaneous learning, test design, and test execution guided by test charters
> C. Random clicking to see if the system breaks
> D. Automated testing without test scripts

**Wrong answer:** A or C — equating exploratory with unstructured or random testing.

**Why it's wrong:** Exploratory testing has structure (charters, time boxes, session reports). It is not random or unplanned.

**Correct answer:** B — Simultaneous learning, test design, and execution guided by charters.

**Defense strategy:** Remember the key phrase: "Simultaneous learning, test design, and test execution." If an answer omits any of these, it's wrong.

---

## 🪤 Trap 7: Forgetting Alternative and Exception Flows in Use Cases

**Trap:** Only testing the main flow of a use case and missing alternative and exception paths.

**Example question:**
> A use case for "Place Order" has a main flow, 3 alternative flows, and 4 exception flows. What is the MINIMUM number of test cases needed to cover all paths?
>
> A. 1 (main flow only)
> B. 4 (main + alternatives)
> C. 7 (main + alternatives + exceptions)
> D. 8 (all flows plus precondition)

**Wrong answer:** A or B — missing exception flows.

**Why it's wrong:** All flows (main, alternative, exception) must be tested. Exception flows often contain the most defects.

**Correct answer:** C — 7 (1 main + 3 alternatives + 4 exceptions). Some would argue 8 including precondition violation.

**Defense strategy:** Use case testing requires: main flow (1) + each alternative (n) + each exception (m) + precondition tests.

---

## 🪤 Trap 8: Not Removing Impossible Rules from Decision Tables

**Trap:** Counting impossible rules as test cases, inflating the test count.

**Example question:**
> A decision table has 4 binary conditions. Two conditions are mutually exclusive (they cannot both be true). How many valid test cases are needed?
>
> A. 16 (2^4)
> B. 14 (16 - 2 impossible rules)
> C. 8 (half of 16)
> D. 4 (one per condition)

**Wrong answer:** A — counting all combinations including impossible ones.

**Why it's wrong:** When two binary conditions are mutually exclusive, there are 2 impossible combinations (both true, both false if they must be one or the other).

**Correct answer:** B — 14 (16 total - 2 impossible).

**Defense strategy:** Always identify and subtract impossible rules. Mutually exclusive conditions reduce the total rule count.

---

## 🪤 Trap 9: Using Error Guessing as the Primary Technique

**Trap:** Error guessing is a supplement, not a primary technique. Questions test this.

**Example question:**
> For a safety-critical medical device, which test design approach is MOST appropriate?
>
> A. Error guessing by experienced testers
> B. Exploratory testing with test charters
> C. Specification-based techniques (EP, BVA, DT) with full traceability
> D. Ad hoc testing by the development team

**Wrong answer:** A — "Error guessing" — not systematic enough for safety-critical.

**Why it's wrong:** Safety-critical systems require systematic, repeatable, measurable techniques with full documentation and traceability.

**Correct answer:** C — Specification-based techniques with full traceability.

**Defense strategy:** Error guessing and exploratory testing supplement systematic techniques. They never replace them for high-risk systems.

---

## 🪤 Trap 10: Confusing 2-Value and 3-Value BVA

**Trap:** Not knowing when to use 2-value vs. 3-value BVA.

**Example question:**
> For a high-risk financial calculation with a valid range [1000, 9999], which BVA approach is MOST appropriate?
>
> A. 2-value BVA (999, 1000, 9999, 10000)
> B. 3-value BVA (999, 1000, 1001, 9998, 9999, 10000)
> C. Equivalence Partitioning only (5000)
> D. Neither — use pairwise testing

**Wrong answer:** A — using standard 2-value for a high-risk scenario.

**Why it's wrong:** High-risk financial calculations justify the additional thoroughness of 3-value BVA.

**Correct answer:** B — 3-value BVA for higher-risk scenarios.

**Defense strategy:** 2-value = standard. 3-value = higher risk, complex boundaries, or explicit requirement. The exam often hints at risk level.
