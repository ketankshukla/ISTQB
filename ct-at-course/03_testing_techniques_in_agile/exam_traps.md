# Chapter 3 — Testing Techniques in Agile: Exam Traps

## Trap 1: Thinking Exploratory Testing Is Random

**Trap:** Exploratory testing is structured and purposeful. Testers use charters, heuristics, and risk analysis to guide their exploration. It is not ad-hoc or random clicking.

**Example question:**
> Exploratory testing is BEST described as:
>
> A. Random clicking to find defects
> B. Simultaneous learning, test design, and execution guided by a charter or mission
> C. A replacement for all automated testing
> D. Testing without any planning or documentation

**Correct answer:** B — Exploratory testing is structured by charters and missions, not random.

---

## Trap 2: Confusing BDD with Just Test Automation

**Trap:** BDD is primarily about collaboration and shared understanding. The Given/When/Then format enables automation, but the main value is in the conversation and clarity.

**Example question:**
> The PRIMARY benefit of Behavior-Driven Development (BDD) is:
>
> A. Generating automated test scripts automatically
> B. Collaboration between business, developers, and testers using a shared language
> C. Eliminating the need for manual testing
> D. Reducing the number of developers needed

**Correct answer:** B — BDD's main value is collaboration and shared understanding. Automation is a side benefit.

---

## Trap 3: Thinking TDD Replaces All Testing

**Trap:** TDD is a developer practice for unit tests. It does NOT replace integration testing, system testing, exploratory testing, or non-functional testing.

**Example question:**
> A team practices TDD with 100% unit test coverage. They conclude no further testing is needed. This conclusion is:
>
> A. Correct — TDD ensures zero defects
> B. Incorrect — TDD covers units but not integration, system, or exploratory testing
> C. Correct for agile teams only
> D. The goal of every agile project

**Correct answer:** B — TDD is valuable but only at the unit level. Other testing levels are still needed.

---

## Trap 4: Thinking the Test Pyramid Should Be an Ice Cream Cone

**Trap:** The pyramid should have many unit tests at the base and few UI tests at the top. An inverted pyramid is an anti-pattern.

**Example question:**
> A team has 50 unit tests, 100 API tests, and 500 UI tests. Their suite takes 4 hours to run. This is:
>
> A. An ideal test pyramid
> B. An ice cream cone anti-pattern
> C. Recommended for CI/CD
> D. A balanced test strategy

**Correct answer:** B — Too many UI tests with too few unit tests is the ice cream cone anti-pattern.

---

## Trap 5: Ignoring Quadrant 3 (Critique the Product)

**Trap:** Teams focused on automation may neglect exploratory testing, usability testing, and user feedback (Q3). These are essential for finding defects that automation misses.

**Example question:**
> A team has excellent unit test coverage (Q1) and automated acceptance tests (Q2) but never does exploratory testing. The risk is:
>
> A. No risk — automation covers everything
> B. They may miss defects that only emerge through human exploration and creativity
> C. They are testing too much
> D. Exploratory testing is not needed in agile

**Correct answer:** B — Exploratory testing (Q3) finds issues that scripted tests miss. Automation cannot replace human judgment and creativity.
