# 📘 Chapter 4 — CI/CD, DevOps, and Continuous Testing: Lessons

---

## 🔗 4.1 Continuous Integration (CI)

### 🔷 What Is CI?

Continuous Integration is the practice of merging all developers' working copies to a shared mainline several times a day, with automated builds and tests.

**Core Practices:**
1. Maintain a single source repository
2. Automate the build
3. Make the build self-testing
4. Everyone commits to mainline every day
5. Every commit triggers an automated build and test
6. Keep the build fast
7. Test in a clone of the production environment
8. Make it easy to get the latest deliverables
9. Everyone can see what happened
10. Automate deployment

### 🔷 CI Pipeline Stages

**Typical CI Pipeline:**
```
Developer commits code
    ↓
Source control triggers build
    ↓
Compile / Build
    ↓
Static analysis (linting, style checks)
    ↓
Unit tests (fast, < 5 minutes)
    ↓
Code coverage report
    ↓
Package artifacts
    ↓
Deploy to test environment
    ↓
Integration tests
    ↓
Report results
```

### 🔷 CI Testing Activities

**1. Build Verification:**
- Does the code compile?
- Are dependencies resolvable?
- Are there syntax errors?

**2. Static Analysis:**
- Code style violations
- Potential bugs (null pointer, unused variables)
- Security vulnerabilities
- Complexity metrics

**3. Unit Tests:**
- Fast feedback on individual units
- Run on every commit
- Must complete quickly (< 5 minutes total)

**4. Code Coverage:**
- Measure what code is executed by tests
- Set minimum thresholds
- Track trends over time

**5. Integration Tests:**
- Test component interactions
- Run in a test environment
- May run after unit tests pass

### ❓ CI Best Practices

**Fast Feedback:**
- Unit tests should run in under 5 minutes
- If the suite is slower, split it or run in parallel
- Developers should get feedback before moving to another task

**Fix Broken Builds Immediately:**
- A broken mainline blocks the whole team
- The developer who broke it should fix it immediately
- If they cannot, revert the commit

**Keep the Build Green:**
- A green build means the code is releasable
- Do not ignore flaky tests — fix them
- Do not comment out failing tests — fix the code or the test

---

## ⭐ 4.2 Continuous Delivery (CD)

### 🔷 Continuous Delivery vs. Continuous Deployment

| Aspect | Continuous Delivery | Continuous Deployment |
|--------|--------------------|-----------------------|
| Definition | Code is always in a releasable state; deployment may require manual approval | Every passing commit is automatically deployed to production |
| Human gate | Yes — someone approves production deployment | No — fully automated |
| Risk | Lower — human oversight before production | Higher — requires very high confidence in tests |
| Release frequency | On demand (daily, weekly) | Every commit (multiple times per day) |
| Suitable for | Most organizations | Organizations with mature testing and monitoring |

**Relationship:**
```
CI → Continuous Delivery → Continuous Deployment
     (manual approval)      (fully automatic)
```

### 🔷 CD Pipeline Stages

**After CI passes:**
```
Deploy to staging environment
    ↓
Run acceptance tests (BDD scenarios)
    ↓
Run performance tests (smoke)
    ↓
Run security scans
    ↓
Manual approval gate (for Continuous Delivery)
    ↓
Deploy to production
    ↓
Run smoke tests in production
    ↓
Monitor and alert
```

### 🔷 CD Testing Activities

**1. Acceptance Tests in Staging:**
- Verify features meet acceptance criteria
- Run BDD scenarios against the staging environment
- Should pass before production deployment

**2. Performance Smoke Tests:**
- Quick performance check (not full load test)
- Verify response times are within acceptable ranges
- Catch major performance regressions

**3. Security Scans:**
- SAST on the deployed artifact
- DAST against the staging environment
- Dependency vulnerability scans

**4. Production Smoke Tests:**
- Verify deployment succeeded
- Check critical paths in production
- Run synthetic transactions

---

## 🔧 4.3 DevOps and the Technical Tester

### 🔧 What Is DevOps?

DevOps is a cultural and professional movement that stresses communication, collaboration, and integration between software developers and IT operations professionals.

**CALMS Framework:**
- **Culture:** Shared responsibility, blameless postmortems, collaboration
- **Automation:** Automated builds, tests, deployments, infrastructure
- **Lean:** Eliminate waste, small batch sizes, continuous improvement
- **Measurement:** Monitor everything, data-driven decisions
- **Sharing:** Open communication, shared tools, shared goals

### 🔧 The Technical Tester's Role in DevOps

**1. Shift-Left Testing:**
- Write tests before code (TDD, ATDD)
- Review designs for testability
- Identify risks during planning

**2. Pipeline Ownership:**
- Design and maintain test stages in the CI/CD pipeline
- Ensure tests provide fast, reliable feedback
- Monitor test results and fix flaky tests

**3. Infrastructure as Code (IaC) Testing:**
- Test infrastructure definitions (Terraform, CloudFormation)
- Verify environments are provisioned correctly
- Test configuration changes

**4. Monitoring and Observability:**
- Define what to monitor in production
- Create alerts for quality-related metrics
- Participate in incident response

**5. Collaboration:**
- Work with developers on code quality
- Work with operations on deployment verification
- Work with business on acceptance criteria

### ❓ DevOps Testing Practices

**1. Infrastructure as Code (IaC):**
- Define environments in code (Terraform, Ansible, Chef, Puppet)
- Version control infrastructure definitions
- Test infrastructure changes before applying

**2. Containerization:**
- Use Docker to create consistent test environments
- Test the same container that will run in production
- Eliminates "works on my machine" problems

**3. Configuration Management:**
- Separate configuration from code
- Test configuration changes
- Use feature flags for gradual rollouts

**4. Monitoring in Production:**
- Application Performance Monitoring (APM)
- Error tracking (Sentry, Rollbar)
- Log aggregation (ELK stack, Splunk)
- Synthetic monitoring (Pingdom, New Relic Synthetics)

---

## 🎨 4.4 Designing CI/CD Pipelines

### 📜 Pipeline Design Principles

**1. Fail Fast:**
- Run fastest tests first (unit tests)
- Run slowest tests last (E2E, performance)
- If unit tests fail, don't bother running integration tests

**2. Parallelize:**
- Run independent tests in parallel
- Split test suites across multiple agents
- Use cloud-based test runners for elasticity

**3. Isolate Stages:**
- Each stage should be independent and idempotent
- Failed stages should not corrupt subsequent stages
- Artifact promotion (same artifact moves through stages)

**4. Visibility:**
- Pipeline status visible to the whole team
- Notifications on failures
- Dashboards showing trends

### 💡 Example Pipeline Design

**Team:** 8 developers, 2 testers, releasing weekly

```
Stage 1: Build (2 min)
  - Compile
  - Static analysis
  - Fail on: compilation errors, critical static analysis issues

Stage 2: Unit Tests (5 min)
  - Run all unit tests
  - Generate coverage report
  - Fail on: any test failure, coverage < 80%

Stage 3: Integration Tests (10 min)
  - Deploy to integration environment
  - Run API/integration tests
  - Fail on: any test failure

Stage 4: Acceptance Tests (15 min)
  - Deploy to staging environment
  - Run BDD scenarios
  - Fail on: any scenario failure

Stage 5: Security Scan (5 min)
  - SAST on artifacts
  - Dependency vulnerability scan
  - Fail on: critical/high vulnerabilities

Stage 6: Performance Smoke (5 min)
  - Run performance smoke tests
  - Fail on: response time > threshold

Stage 7: Deploy to Production (manual approval for Continuous Delivery)
  - Deploy artifact to production
  - Run production smoke tests
  - Monitor for errors
```

**Total pipeline time:** ~42 minutes (with parallel stages, can be ~25 minutes)

---

## 💎 4.5 Quality Gates

### 💎 What Are Quality Gates?

Quality gates are criteria that must be met before the pipeline can proceed to the next stage.

### 🧪 Types of Quality Gates

**1. Automated Gates:**
- All tests pass
- Code coverage >= threshold
- No critical security vulnerabilities
- Static analysis issues below threshold
- Performance within acceptable range

**2. Manual Gates:**
- Code review approval
- QA sign-off
- Business stakeholder approval
- Deployment approval (for Continuous Delivery)

### 💡 Gate Examples

| Gate | Criteria | If Failed |
|------|----------|-----------|
| Compile | No compilation errors | Block pipeline |
| Unit Test | 100% pass, coverage >= 80% | Block pipeline |
| Static Analysis | No critical/blocker issues | Block pipeline |
| Integration Test | 100% pass | Block pipeline |
| Security Scan | No high/critical vulnerabilities | Block pipeline |
| Performance | p95 response time < 2s | Warn, may block |
| Manual Review | Approved by reviewer | Block deployment |

### 💎 Balancing Quality and Speed

**Too Strict:**
- Pipeline fails frequently for minor issues
- Developers bypass or ignore gates
- Slows down delivery

**Too Lenient:**
- Defects escape to production
- Low confidence in releases
- Technical debt accumulates

**Best Practice:**
- Block on critical issues (test failures, security vulnerabilities)
- Warn on minor issues (style violations, coverage slightly below target)
- Review and adjust thresholds based on data

---

## ⭐ 4.6 Feature Flags and Canary Releases

### 🔷 Feature Flags (Feature Toggles)

Feature flags allow code to be deployed to production without being visible to users.

**Benefits:**
- Deploy incomplete features safely
- Enable gradual rollout
- A/B testing
- Quick rollback (disable the flag)

**Testing with Feature Flags:**
- Test both flag-on and flag-off states
- Ensure flag-off does not break existing functionality
- Clean up flags after feature is fully rolled out

### 🔷 Canary Releases

A canary release deploys a new version to a small subset of users first, monitors for issues, then gradually rolls out to all users.

**Process:**
1. Deploy to 1% of users
2. Monitor error rates, performance, business metrics
3. If healthy, deploy to 10%, then 50%, then 100%
4. If issues detected, rollback immediately

**Testing Role:**
- Define canary metrics and thresholds
- Monitor test results during canary
- Verify rollback procedures

---

## 💡 Worked Examples

### 💡 Worked Example 1: CI Pipeline Troubleshooting

**Scenario:** A team's CI pipeline takes 45 minutes. Developers commit infrequently because they wait for the previous build to finish.

**Analysis:**
- Slow feedback discourages frequent commits
- Long builds indicate too many slow tests or lack of parallelization

**Solutions:**
1. Split E2E tests into a nightly job (not per-commit)
2. Parallelize unit tests across multiple workers
3. Cache dependencies to reduce build time
4. Run static analysis in parallel with unit tests
5. Use test impact analysis — only run tests affected by the change

**Target:** Per-commit pipeline < 10 minutes

### 💡 Worked Example 2: Quality Gate Design

**Scenario:** A team wants to prevent security vulnerabilities from reaching production.

**Quality Gates:**
```
Stage: Security Scan
  - SAST: Scan source code for vulnerabilities
  - DAST: Scan deployed application
  - Dependency check: Scan libraries for known CVEs

Gate Criteria:
  - BLOCK: Any critical or high vulnerability
  - WARN: Medium vulnerabilities (fix within 1 sprint)
  - ALLOW: Low vulnerabilities (fix within 2 sprints)

If Gate Fails:
  - Pipeline stops
  - Security team is notified
  - Developer must fix before merge
```

### 💡 Worked Example 3: DevOps Testing Scenario

**Scenario:** A team uses Docker containers and Kubernetes for deployment.

**Testing Activities:**
1. **Infrastructure Testing:**
   - Verify Terraform plans with `terraform plan`
   - Test Kubernetes manifests with kubeval
   - Validate Docker images with hadolint

2. **Container Testing:**
   - Build Docker image in CI
   - Scan image for vulnerabilities (Trivy, Clair)
   - Test container starts correctly

3. **Deployment Testing:**
   - Deploy to test namespace in Kubernetes
   - Run smoke tests against the deployed container
   - Verify service discovery and networking

4. **Production Monitoring:**
   - Monitor pod health, resource usage
   - Alert on error rate spikes
   - Track deployment success rate
