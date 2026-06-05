# Chapter 5 — Testing Techniques in Agile: Exam Traps

## Trap 1: Thinking Exploratory Testing Is Random or Unstructured

**Trap:** Exploratory testing is not random clicking. It is a skilled, structured approach where the tester simultaneously designs and executes tests based on learning.

**Example question:**
> Exploratory testing is BEST described as:
>
> A. Randomly clicking through the application without a plan
> B. Simultaneously designing and executing tests while learning about the system
> C. Following a detailed pre-written test script
> D. A replacement for all automated testing

**Correct answer:** B — Exploratory testing is a skilled activity of simultaneous learning, design, and execution.

---

## Trap 2: Confusing SBTM with Unmanaged Exploratory Testing

**Trap:** SBTM adds structure (charters, time boxes, debriefs) to exploratory testing. It is not the same as ad-hoc testing.

**Example question:**
> A tester is given a 90-minute mission to "explore the search feature with filters," takes notes, and then discusses findings with the test lead. This is:
>
> A. Ad-hoc testing
> B. Session-Based Test Management
> C. Scripted testing
> D. Pairwise testing

**Correct answer:** B — Charter, time box, notes, and debrief are the components of SBTM.

---

## Trap 3: Thinking Pairwise Testing Finds All Defects

**Trap:** Pairwise testing covers all pairs but not all combinations. It assumes most defects are caused by pairs, not higher-order interactions. It is not appropriate for safety-critical systems.

**Example question:**
> A safety-critical medical device uses 5 parameters with 4 values each. Pairwise testing generates 16 test cases instead of 1,024. The team should:
>
> A. Use all 16 pairwise tests without concern
> B. Consider whether higher-order interactions require additional testing beyond pairwise
> C. Skip testing because 16 tests are sufficient
> D. Only test the happy path

**Correct answer:** B — For safety-critical systems, pairwise may not be sufficient. Higher-order interactions may need testing.

---

## Trap 4: Thinking Non-Functional Testing Doesn't Fit in Agile

**Trap:** Non-functional testing (performance, security) must be integrated into agile, not deferred to the end. Performance smoke tests in CI, security scans on every build, and sprint-level checks are essential.

**Example question:**
> A team says "we do agile, so we skip performance testing until the end of the project." This is:
>
> A. Correct — agile teams test performance at the end
> B. Incorrect — performance should be considered from the start with smoke tests and criteria in the DoD
> C. Correct — performance is not important in agile
> D. Incorrect — but only because the team should do more unit tests

**Correct answer:** B — Performance must be built into agile from the start, not deferred.

---

## Trap 5: Confusing Q1-Q4 Quadrants

**Trap:** Q1/Q2 are business-facing. Q3/Q4 are technology-facing. Q1/Q4 support programming. Q2/Q3 critique the product.

**Example question:**
> Unit tests and component tests belong in which testing quadrant?
>
> A. Q1 (Business-facing, supporting programming)
> B. Q2 (Business-facing, critiquing)
> C. Q3 (Technology-facing, critiquing)
> D. Q4 (Technology-facing, supporting programming)

**Correct answer:** A — Unit tests support programming and are business-facing (they verify business logic).

**Wait — let me reconsider. Unit tests are technology-facing (they test code), but they support programming. Actually, the quadrants can be interpreted differently. Let me check the standard:

Q1: Technology-facing, supporting the team (unit tests, component tests, API tests)
Q2: Business-facing, supporting the team (BDD scenarios, story tests, examples)
Q3: Business-facing, critiquing the product (exploratory testing, usability, UAT)
Q4: Technology-facing, critiquing the product (performance, security, reliability)

Actually, I've seen different versions. Let me be more careful. The standard Crispin/Gregory quadrants:

Q1 (top left): Technology-facing, guide development (TDD, unit tests, API tests)
Q2 (top right): Business-facing, guide development (BDD, story tests, prototypes)
Q3 (bottom right): Business-facing, critique product (exploratory, usability, UAT)
Q4 (bottom left): Technology-facing, critique product (performance, security, load)

Wait, actually the standard layout is:

```
Q1 (TL) | Q2 (TR)
--------|--------
Q4 (BL) | Q3 (BR)
```

Where:
- Top = Supporting development
- Bottom = Critiquing product
- Left = Technology-facing
- Right = Business-facing

So:
- Q1: Technology-facing, supporting (unit tests, TDD, component tests)
- Q2: Business-facing, supporting (BDD, story tests, demos)
- Q3: Business-facing, critiquing (exploratory, usability, UAT, beta)
- Q4: Technology-facing, critiquing (performance, security, load, recovery)

Let me redo my earlier example. Unit tests = Q1. Exploratory = Q3. Performance = Q4. BDD = Q2.

**Corrected Example:**
> Performance and load testing belong in which testing quadrant?
>
> A. Q1
> B. Q2
> C. Q3
> D. Q4

**Correct answer:** D — Performance/load are technology-facing tests that critique the product (Q4).
