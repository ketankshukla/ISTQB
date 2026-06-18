# ❓ Chapter 3 — Shift-Left Testing Practices: Exam Traps

## 🪤 Trap 1: Confusing TDD with Traditional Test-After

**Trap:** TDD = test first, then code. Traditional = code first, then test.

**Example question:**
> A developer writes code for a new feature, then writes unit tests to verify it. This is:
>
> A. Test-Driven Development
> B. Traditional unit testing, not TDD
> C. Behavior-Driven Development
> D. Contract testing

**Correct answer:** B — TDD requires tests written BEFORE code.

---

## 🪤 Trap 2: Thinking Contract Testing Replaces Integration Testing

**Trap:** Contract tests verify API compatibility. Integration tests verify actual behavior. They complement each other.

**Example question:**
> A team replaces all integration tests with contract tests. The risk is:
>
> A. No risk — contract tests are sufficient
> B. Contract tests verify API structure but not business logic or data flow between services
> C. Only slower pipelines
> D. Only more documentation

**Correct answer:** B — Contract tests don't replace integration tests; they complement them.

---

## 🪤 Trap 3: Ignoring Static Analysis Results

**Trap:** Static analysis finds issues early. Ignoring results misses security and quality issues.

**Example question:**
> A team runs SonarQube but allows merges even with critical vulnerabilities. This means:
>
> A. They are efficient
> B. The static analysis is not serving as a quality gate; critical issues reach production
> C. Only slower development
> D. Only more meetings

**Correct answer:** B — Critical findings should block merge until resolved.

---

## 🪤 Trap 4: Thinking Code Review is Only for Seniors

**Trap:** Junior developers can and should review code. Code review is about catching issues and sharing knowledge, not hierarchy.

**Example question:**
> A junior developer is asked to review a senior's pull request. This is:
>
> A. Inappropriate — only seniors should review
> B. Appropriate — code review shares knowledge and catches issues regardless of seniority
> C. Only for documentation
> D. Only for testing

**Correct answer:** B — Everyone can contribute to code review.

---

## 🪤 Trap 5: Confusing BDD with Just Test Automation

**Trap:** BDD is about collaboration and shared understanding. The automation is a byproduct, not the goal.

**Example question:**
> A team writes Given-When-Then scenarios but never discusses them with business stakeholders. They are:
>
> A. Doing BDD correctly
> B. Using BDD syntax but missing the collaboration aspect that makes BDD valuable
> C. Only doing manual testing
> D. Only doing unit testing

**Correct answer:** B — BDD requires Three Amigos collaboration (business, dev, tester).
