# Chapter 3 — Business Acceptance Testing: Exam Traps

## Trap 1: Confusing Acceptance Criteria with Test Cases

**Trap:** Acceptance criteria define WHAT should happen (business rules). Test cases define HOW to verify (specific steps and data).

**Example question:**
> "Given a cart total of $100, when promo code SAVE20 is applied, then the total is $80" is:
>
> A. A test case
> B. An acceptance criterion
> C. A system requirement
> D. A bug report

**Correct answer:** B — This is an acceptance criterion (business rule in Given-When-Then format). A test case would include specific steps, test data, and expected result in a test management tool.

---

## Trap 2: Thinking UAT Can Use Development Data

**Trap:** UAT needs realistic, production-like data. Development/test data often lacks the complexity and volume of real data.

**Example question:**
> A team plans UAT using the same small test dataset from unit testing. The risk is:
>
> A. No risk — all data is the same
> B. UAT may miss issues that only appear with realistic data volumes, variety, and edge cases
> C. UAT will be faster
> D. The data is more secure

**Correct answer:** B — UAT needs realistic data to find real-world issues.

---

## Trap 3: Confusing ATDD with Traditional Testing

**Trap:** ATDD defines acceptance tests BEFORE development. Traditional approaches write tests after or during development.

**Example question:**
> In ATDD, acceptance tests are written:
>
> A. After development is complete
> B. Before development begins, to guide implementation
> C. Only during system testing
> D. After UAT

**Correct answer:** B — ATDD = Acceptance Test-Driven Development. Tests drive development, so they must be defined first.

---

## Trap 4: Ignoring the Three Amigos

**Trap:** BDD/ATDD requires collaboration between business, development, and testing. One person writing criteria alone misses perspectives.

**Example question:**
> A business analyst writes all acceptance criteria alone and hands them to developers. The weakness is:
>
> A. There is no weakness — this is efficient
> B. Missing developer input on feasibility and tester input on edge cases and risks
> C. The criteria will be too technical
> D. The criteria will be too detailed

**Correct answer:** B — Collaboration (Three Amigos) ensures criteria are feasible and comprehensive.

---

## Trap 5: Thinking Sign-off Means Perfect

**Trap:** Sign-off can happen with known issues if business accepts the risk. Perfection is not required.

**Example question:**
> A system has 3 medium defects with documented workarounds. Business approves release with a plan to fix in the next patch. This is:
>
> A. Incorrect — sign-off requires zero defects
> B. Correct — sign-off can occur with known acceptable risks and remediation plans
> C. Only allowed for low-priority systems
> D. A violation of testing standards

**Correct answer:** B — Sign-off is a business decision that can include accepting known risks with remediation plans.
