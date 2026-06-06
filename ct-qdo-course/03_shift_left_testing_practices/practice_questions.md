# Chapter 3 — Shift-Left Testing Practices: Practice Questions

---

### Q1 (QDO-3.1, K2)

Shift-left testing primarily aims to:

A. Delay testing until just before release
B. Find defects earlier when they are cheaper to fix
C. Only test in production
D. Eliminate all test automation

---

### Q2 (QDO-3.2, K2)

In TDD, the correct sequence is:

A. Write code, then write tests
B. Write failing test, write code to pass, refactor
C. Write tests after code review
D. Write code and skip tests

---

### Q3 (QDO-3.3, K2)

Contract testing is most valuable when:

A. Testing a monolithic application
B. Testing interactions between independently deployable microservices
C. Only for UI testing
D. Only for database testing

---

### Q4 (QDO-3.4, K2)

SAST analyzes code:

A. During runtime
B. Without executing the application
C. Only in production
D. Only manually

---

### Q5 (QDO-3.1, K2)

A code review checklist should include:

A. Only coding style
B. Security, performance, test coverage, and maintainability
C. Only variable names
D. Only comments

---

### Q6 (QDO-3.2, K2)

BDD scenarios written in Given-When-Then format primarily serve:

A. Only technical documentation
B. Shared understanding between business, developers, and testers
C. Only performance testing
D. Only database queries

---

### Q7 (QDO-3.3, K2)

Pact is a tool for:

A. Load testing
B. Consumer-driven contract testing
C. UI automation
D. Security scanning

---

### Q8 (QDO-3.4, K2)

A linter in a CI pipeline:

A. Replaces all manual testing
B. Enforces code style and catches common errors automatically
C. Only tests performance
D. Only deploys applications

---

### Q9 (QDO-3.1, K2)

Pair programming provides:

A. Slower development
B. Real-time code review and knowledge sharing
C. Only for beginners
D. No quality benefits

---

### Q10 (QDO-3.2, K3)

A team writes Given-When-Then scenarios with business analysts before development starts. This is:

A. Traditional waterfall
B. Behavior-Driven Development
C. Only documentation
D. Only exploratory testing

---

### Q11 (QDO-3.3, K2)

The PRIMARY difference between contract tests and integration tests:

A. Contract tests are slower
B. Contract tests verify API structure; integration tests verify actual behavior and data flow
C. There is no difference
D. Integration tests are only manual

---

### Q12 (QDO-3.4, K2)

SonarQube quality gates should:

A. Always pass to avoid delays
B. Block merges when critical security or quality thresholds are not met
C. Only check code style
D. Only run after production deployment

---

### Q13 (QDO-3.1, K2)

Pre-commit hooks typically run:

A. After code is pushed to the repository
B. Before a commit is finalized, checking formatting and basic issues
C. Only in production
D. Only during code review

---

### Q14 (QDO-3.2, K2)

The Three Amigos in BDD refers to:

A. Three test tools
B. Business analyst, developer, and tester collaborating on requirements
C. Three types of testing
D. Three project phases

---

### Q15 (QDO-3.3, K2)

Consumer-driven contract testing means:

A. The provider writes all tests
B. The consumer defines expectations that the provider must satisfy
C. Only manual testing
D. Only performance testing

---

### Q16 (QDO-3.4, K2)

Static analysis can detect:

A. Only runtime performance issues
B. Security vulnerabilities, code smells, and potential bugs without execution
C. Only UI layout issues
D. Only network latency

---

### Q17 (QDO-3.1, K2)

Mob programming is:

A. One person coding while the team reviews together in real time
B. Multiple people writing code on different features simultaneously
C. Only for remote teams
D. Only for testing

---

### Q18 (QDO-3.2, K3)

A team finds 60% of defects in production. The best shift-left improvement is:

A. Hire more testers for production
B. Implement TDD, code review, and static analysis before deployment
C. Add more documentation
D. Increase release frequency without testing

---

### Q19 (QDO-3.3, K2)

Contract tests allow microservices to be tested:

A. Only when all services are deployed together
B. Independently, without full integration environment
C. Only in production
D. Only manually

---

### Q20 (QDO-3.4, K2)

A pull request should be reviewed by:

A. No one — direct merge is faster
B. At least one other developer before merging
C. Only the author
D. Only the project manager

---

## Answers and Rationales

### Q1
**Answer: B**
**Rationale:** Shift-left = find defects early when cheaper to fix.

### Q2
**Answer: B**
**Rationale:** TDD = red (failing test), green (pass), refactor.

### Q3
**Answer: B**
**Rationale:** Contract testing = microservice interactions.

### Q4
**Answer: B**
**Rationale:** SAST = static analysis without execution.

### Q5
**Answer: B**
**Rationale:** Code review covers security, performance, coverage, maintainability.

### Q6
**Answer: B**
**Rationale:** BDD = shared understanding across roles.

### Q7
**Answer: B**
**Rationale:** Pact = consumer-driven contract testing.

### Q8
**Answer: B**
**Rationale:** Linter = style enforcement and error detection.

### Q9
**Answer: B**
**Rationale:** Pair programming = real-time review and knowledge sharing.

### Q10
**Answer: B**
**Rationale:** GWT with business before dev = BDD.

### Q11
**Answer: B**
**Rationale:** Contract = API structure; Integration = behavior and data flow.

### Q12
**Answer: B**
**Rationale:** Quality gates should block on critical issues.

### Q13
**Answer: B**
**Rationale:** Pre-commit hooks run before commit finalization.

### Q14
**Answer: B**
**Rationale:** Three Amigos = BA, dev, tester collaboration.

### Q15
**Answer: B**
**Rationale:** Consumer-driven = consumer defines expectations.

### Q16
**Answer: B**
**Rationale:** Static analysis finds vulnerabilities and bugs without execution.

### Q17
**Answer: A**
**Rationale:** Mob = one codes, team reviews together in real time.

### Q18
**Answer: B**
**Rationale:** TDD, code review, static analysis = shift-left practices.

### Q19
**Answer: B**
**Rationale:** Contract tests enable independent testing.

### Q20
**Answer: B**
**Rationale:** PRs require at least one reviewer before merge.
