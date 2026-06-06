# Chapter 5 — Test Automation at Scale: Exam Traps

## Trap 1: Mandating One Framework for All Teams

**Trap:** Different teams have different contexts. Shared components with flexibility are better than rigid mandates.

**Example question:**
> A central team mandates that all 20 teams use the exact same test framework with no exceptions. The risk is:
>
> A. Perfect consistency
> B. Teams may struggle with unsuitable frameworks; some contexts need different approaches
> C. Only slower adoption
> D. Only more training

**Correct answer:** B — Provide shared components but allow team flexibility.

---

## Trap 2: Ignoring Cross-Team Test Dependencies

**Trap:** Teams that share components or APIs need coordinated testing approaches.

**Example question:**
> Team A changes an API contract without informing Team B (the consumer). Team B's tests break. The solution is:
>
> A. Team B should fix their tests faster
> B. Contract tests and communication channels between teams prevent this
> C. Only more documentation
> D. Only slower releases

**Correct answer:** B — Contract tests and communication prevent cross-team breakage.

---

## Trap 3: Central Framework Without Support

**Trap:** A shared framework without a support model becomes a bottleneck and source of frustration.

**Example question:**
> A central team publishes a shared framework but provides no documentation or support. Adoption is low. The issue is:
>
> A. Teams don't want automation
> B. Shared frameworks need documentation, training, and responsive support to be adopted
> C. Only a communication problem
> D. Only a tooling problem

**Correct answer:** B — Shared frameworks require investment in enablement.

---

## Trap 4: Measuring Automation by Test Count Alone

**Trap:** 1000 trivial tests provide less value than 100 meaningful tests.

**Example question:**
> A program reports "5000 automated tests" as their success metric. The missing perspective is:
>
> A. Count is sufficient
> B. Coverage of critical paths, reliability, and maintenance cost matter more than raw count
> C. Only execution speed
> D. Only tool cost

**Correct answer:** B — Test quality and coverage matter more than count.

---

## Trap 5: Separating Automation from CI/CD

**Trap:** Automation not in CI/CD runs sporadically and provides delayed feedback.

**Example question:**
> A team has 200 automated tests that run manually once per sprint. The improvement is:
>
> A. Write more tests
> B. Integrate into CI/CD to run on every commit for immediate feedback
> C. Only run them daily
> D. Only document them better

**Correct answer:** B — CI/CD integration provides continuous feedback.
