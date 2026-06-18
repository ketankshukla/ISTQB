# ❓ Chapter 4 — CI/CD, DevOps: Practice Questions

---

### 🔷 Q1 (AT-4.1, K2)

Continuous Integration (CI) requires:

A. Manual testing after every commit
B. Automated builds and automated tests on every commit
C. Deployment to production on every commit
D. A dedicated DevOps team

---

### 🔷 Q2 (AT-4.2, K2)

The difference between Continuous Delivery and Continuous Deployment is:

A. Continuous Delivery requires manual approval for production deployment; Continuous Deployment does not
B. Continuous Delivery deploys more frequently than Continuous Deployment
C. There is no difference
D. Continuous Delivery is only for large organizations

---

### 🔷 Q3 (AT-4.1, K3)

In a CI pipeline, which stage should typically run FIRST?

A. End-to-end UI tests
B. Unit tests
C. Production deployment
D. Performance load testing

---

### 🔷 Q4 (AT-4.3, K2)

DevOps is BEST described as:

A. A specific software tool
B. A culture of collaboration between development and operations
C. A job title
D. A replacement for agile

---

### 🔷 Q5 (AT-4.4, K3)

A quality gate that fails the pipeline if any unit test fails is an example of:

A. A manual gate
B. An automated gate
C. A business review gate
D. A deployment gate

---

### 🔷 Q6 (AT-4.2, K2)

A pipeline automatically deploys every passing commit to production without human approval. This is:

A. Continuous Integration
B. Continuous Delivery
C. Continuous Deployment
D. Manual deployment

---

### 🔷 Q7 (AT-4.1, K3)

A developer commits code and the build takes 2 hours to complete. The BIGGEST problem is:

A. The build is too fast
B. Slow feedback discourages frequent commits and integration
C. The build is running too many unit tests
D. The developer should commit less frequently

---

### 🔷 Q8 (AT-4.3, K2)

The CALMS framework for DevOps includes:

A. Culture, Automation, Lean, Measurement, Sharing
B. Coding, Analysis, Lean, Monitoring, Security
C. Culture, Agile, Lean, Metrics, Scrum
D. Compilation, Automation, Load testing, Monitoring, Security

---

### 🔷 Q9 (AT-4.5, K3)

A team blocks production deployment if code coverage drops below 80%. This is:

A. Too strict and should be removed
B. An automated quality gate
C. A manual review process
D. Unrelated to CI/CD

---

### 🔷 Q10 (AT-4.4, K3)

In a CI pipeline, the "fail fast" principle means:

A. Run the slowest tests first to get them out of the way
B. Run the fastest tests first to get quick feedback on obvious problems
C. Allow failures to accumulate before fixing them
D. Stop the pipeline only after all tests complete

---

### 🔷 Q11 (AT-4.2, K2)

Feature flags are used to:

A. Replace automated testing
B. Deploy code to production without making it visible to users
C. Disable the CI pipeline
D. Increase code complexity

---

### 🔷 Q12 (AT-4.3, K3)

A canary release deploys a new version to:

A. All users immediately
B. A small subset of users first, monitoring for issues before full rollout
C. Only internal testers
D. The development environment only

---

### 🔷 Q13 (AT-4.1, K2)

A broken mainline build should be:

A. Ignored until the end of the sprint
B. Fixed immediately by the developer who broke it
C. Fixed by a dedicated DevOps team only
D. Considered normal in agile

---

### 🔷 Q14 (AT-4.4, K3)

Infrastructure as Code (IaC) allows teams to:

A. Manually configure servers
B. Define and version-control infrastructure configurations
C. Skip testing of infrastructure changes
D. Avoid using cloud providers

---

### 🔷 Q15 (AT-4.5, K2)

Which of the following is a MANUAL quality gate?

A. All unit tests must pass
B. Code coverage must be >= 80%
C. A senior developer must approve the pull request
D. No critical security vulnerabilities

---

### 🔷 Q16 (AT-4.2, K3)

A team wants to deploy to production multiple times per day but requires a human to click "approve" before each deployment. They should implement:

A. Continuous Integration only
B. Continuous Delivery
C. Continuous Deployment
D. Waterfall release process

---

### 🔷 Q17 (AT-4.3, K2)

In DevOps, a "blameless postmortem" is:

A. A meeting to assign blame for production incidents
B. A review of incidents focused on learning and improving systems, not blaming individuals
C. A test that always fails
D. A security audit

---

### 🔷 Q18 (AT-4.1, K3)

A pipeline runs unit tests, then integration tests, then E2E tests in sequence. The E2E tests take 30 minutes. To improve feedback time, the team should:

A. Remove all E2E tests
B. Run unit and integration tests in parallel, and consider moving some E2E tests to a scheduled run
C. Only run E2E tests manually
D. Add more E2E tests to increase coverage

---

### 🔷 Q19 (AT-4.4, K2)

Containerization (e.g., Docker) in CI/CD helps by:

A. Making tests slower
B. Ensuring consistency between test and production environments
C. Increasing the number of required test environments
D. Eliminating the need for automated tests

---

### 🔷 Q20 (AT-4.5, K3)

A quality gate blocks deployment if static analysis finds any code style violation. The MOST likely outcome is:

A. Perfect code quality
B. Developers may bypass the gate or ignore violations
C. Fewer production defects
D. Faster delivery

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** CI = automated builds + automated tests on every commit. Not just compilation.

### 🔷 Q2
**Answer: A**

**Rationale:** Continuous Delivery may require manual approval for production. Continuous Deployment is fully automatic.

### 🔷 Q3
**Answer: B**

**Rationale:** Unit tests are the fastest and should run first (fail fast). E2E and performance tests run later.

### 🔷 Q4
**Answer: B**

**Rationale:** DevOps is a culture of collaboration, not a tool or job title.

### 🔷 Q5
**Answer: B**

**Rationale:** A criterion enforced automatically by the pipeline is an automated gate.

### 🔷 Q6
**Answer: C**

**Rationale:** Fully automatic deployment to production on every passing commit is Continuous Deployment.

### 🔷 Q7
**Answer: B**

**Rationale:** Slow builds discourage frequent commits, defeating the purpose of CI.

### 🔷 Q8
**Answer: A**

**Rationale:** CALMS = Culture, Automation, Lean, Measurement, Sharing.

### 🔷 Q9
**Answer: B**

**Rationale:** A coverage threshold enforced by the pipeline is an automated quality gate.

### 🔷 Q10
**Answer: B**

**Rationale:** Fail fast means running quick tests first to get fast feedback on obvious problems.

### 🔷 Q11
**Answer: B**

**Rationale:** Feature flags allow code to be deployed but hidden from users until ready.

### 🔷 Q12
**Answer: B**

**Rationale:** Canary releases go to a small subset first, then gradually roll out based on monitoring.

### 🔷 Q13
**Answer: B**

**Rationale:** Broken mainlines should be fixed immediately, ideally by the person who broke them.

### 🔷 Q14
**Answer: B**

**Rationale:** IaC allows infrastructure to be defined and version-controlled like code.

### 🔷 Q15
**Answer: C**

**Rationale:** A human approval (code review) is a manual gate. Test pass/fail and coverage are automated gates.

### 🔷 Q16
**Answer: B**

**Rationale:** Multiple daily deployments with human approval = Continuous Delivery. Fully automatic = Continuous Deployment.

### 🔷 Q17
**Answer: B**

**Rationale:** Blameless postmortems focus on system improvement, not individual blame.

### 🔷 Q18
**Answer: B**

**Rationale:** Parallelizing tests and moving slow E2E tests to scheduled runs improves feedback time.

### 🔷 Q19
**Answer: B**

**Rationale:** Docker containers ensure test and production environments are consistent.

### 🔷 Q20
**Answer: B**

**Rationale:** Overly strict gates on minor issues encourage bypassing or ignoring them.
