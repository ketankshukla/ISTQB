# Chapter 2 — CI/CD Pipeline Testing: Practice Questions

---

### Q1 (QDO-2.1, K2)

In a CI/CD pipeline, unit tests should:

A. Run after acceptance tests
B. Run first because they are fast and provide quick feedback
C. Only run manually
D. Skip if the build succeeds

---

### Q2 (QDO-2.2, K2)

A quality gate that blocks deployment if code coverage is below 80%:

A. Slows development unnecessarily
B. Ensures a minimum testing standard before progression
C. Only applies to manual testing
D. Is optional in all cases

---

### Q3 (QDO-2.3, K2)

Blue-green deployment provides:

A. Gradual traffic shifting
B. Two identical environments for instant rollback
C. Only feature flag management
D. Automatic user segmentation

---

### Q4 (QDO-2.4, K2)

Canary deployment is characterized by:

A. Immediate 100% traffic to new version
B. Gradual rollout to a subset of users with monitoring
C. No monitoring during rollout
D. Only rolling back after 24 hours

---

### Q5 (QDO-2.1, K3)

A pipeline fails at the integration test stage. The appropriate action is:

A. Skip the stage and proceed to production
B. Fix the integration issue and re-run the pipeline
C. Deploy manually to bypass the failure
D. Disable integration tests

---

### Q6 (QDO-2.2, K2)

Which is an example of a quality gate criterion?

A. Developer preference
B. Zero critical security vulnerabilities
C. Number of meetings attended
D. UI color scheme

---

### Q7 (QDO-2.3, K2)

Feature flags allow:

A. Deploying code without testing
B. Releasing code to production while controlling visibility
C. Only A/B testing
D. Automatic rollback without monitoring

---

### Q8 (QDO-2.4, K2)

Rollback testing should verify:

A. Only successful deployments
B. That the previous version can be restored quickly and safely
C. Only database migrations
D. Only user interface changes

---

### Q9 (QDO-2.1, K2)

SAST (Static Application Security Testing) is typically performed:

A. In production
B. During the build or early pipeline stages on source code
C. Only after deployment
D. Only manually by security teams

---

### Q10 (QDO-2.2, K2)

A pipeline that deploys automatically to production after all tests pass has:

A. Continuous Integration only
B. Continuous Deployment
C. No automation
D. Only manual testing

---

### Q11 (QDO-2.3, K2)

Smoke tests after production deployment verify:

A. All features in detail
B. That critical functionality works in the live environment
C. Only load performance
D. Only security vulnerabilities

---

### Q12 (QDO-2.4, K3)

A database migration fails mid-deployment. The recovery test should verify:

A. Only that the deployment succeeded
B. That rollback scripts restore the database to a consistent state
C. Only application logs
D. Only network connectivity

---

### Q13 (QDO-2.1, K2)

Testing in staging should primarily verify:

A. Developer productivity
B. That the system works in a production-like environment
C. Only unit test coverage
D. Only documentation accuracy

---

### Q14 (QDO-2.2, K2)

An approval gate before production deployment enforces:

A. Faster deployments
B. Segregation of duties and final review
C. Only automated testing
D. No testing requirements

---

### Q15 (QDO-2.3, K2)

Rolling deployment:

A. Replaces all instances at once
B. Gradually replaces old instances with new ones
C. Only deploys to one server
D. Requires downtime

---

### Q16 (QDO-2.4, K2)

Synthetic monitoring in production:

A. Replaces all user testing
B. Simulates user transactions to detect issues proactively
C. Only monitors CPU usage
D. Only tests during business hours

---

### Q17 (QDO-2.1, K2)

The test pyramid in a CI/CD pipeline suggests:

A. Most tests should be end-to-end
B. Most tests should be unit tests with fewer integration and E2E tests
C. All tests should be manual
D. Only acceptance tests matter

---

### Q18 (QDO-2.2, K2)

A security scan in the pipeline detects a critical vulnerability. The correct response is:

A. Ignore it if the feature is urgent
B. Fix the vulnerability before deployment
C. Deploy and fix later
D. Only document it

---

### Q19 (QDO-2.3, K2)

Dark launch refers to:

A. Deploying without any testing
B. Deploying features to production but keeping them invisible to users
C. Only deploying at night
D. Only deploying to internal users

---

### Q20 (QDO-2.4, K3)

A canary deployment should be aborted when:

A. Any user complains
B. Defined metrics (error rate, latency) exceed thresholds
C. After exactly 1 hour regardless of metrics
D. When the development team leaves for the day

---

## Answers and Rationales

### Q1
**Answer: B**
**Rationale:** Unit tests run first for fast feedback.

### Q2
**Answer: B**
**Rationale:** Quality gates enforce minimum standards.

### Q3
**Answer: B**
**Rationale:** Blue-green = two environments, instant switch/rollback.

### Q4
**Answer: B**
**Rationale:** Canary = gradual rollout with monitoring.

### Q5
**Answer: B**
**Rationale:** Fix the issue and re-run; don't bypass gates.

### Q6
**Answer: B**
**Rationale:** Security vulnerability thresholds are quality gate criteria.

### Q7
**Answer: B**
**Rationale:** Feature flags control visibility after deployment.

### Q8
**Answer: B**
**Rationale:** Rollback testing verifies safe restoration.

### Q9
**Answer: B**
**Rationale:** SAST = static analysis, runs early in pipeline on source code.

### Q10
**Answer: B**
**Rationale:** Auto-deploy to production after tests = Continuous Deployment.

### Q11
**Answer: B**
**Rationale:** Smoke tests verify critical functionality post-deploy.

### Q12
**Answer: B**
**Rationale:** Migration failure recovery requires rollback script verification.

### Q13
**Answer: B**
**Rationale:** Staging tests production-like environment behavior.

### Q14
**Answer: B**
**Rationale:** Approval gates enforce segregation of duties.

### Q15
**Answer: B**
**Rationale:** Rolling = gradual instance replacement.

### Q16
**Answer: B**
**Rationale:** Synthetic monitoring simulates transactions proactively.

### Q17
**Answer: B**
**Rationale:** Pyramid = many unit tests, fewer integration, fewer E2E.

### Q18
**Answer: B**
**Rationale:** Critical vulnerabilities must be fixed before deployment.

### Q19
**Answer: B**
**Rationale:** Dark launch = deployed but invisible to users.

### Q20
**Answer: B**
**Rationale:** Abort canary when metrics exceed defined thresholds.
