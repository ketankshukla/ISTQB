# 📂 Case Study 3 — Continuous Testing in DevOps

## ⭐ Context

You are the Technical Test Lead for HealthCloud, a healthcare SaaS platform. The company:
- 50+ microservices, Kubernetes deployment
- HIPAA compliance required
- 20 teams using agile (Scrum)
- Releases to production 10+ times per day
- Uses GitLab CI, Kubernetes, Prometheus, and SonarQube

**Current Issues:**
- Integration tests are unreliable (fail 30% of the time due to environment issues)
- Security vulnerabilities reach production 2-3 times per month
- Performance regressions discovered by customers
- 40% of incidents are traced to configuration changes

## ♟️ Task 1: Continuous Testing Strategy

**Question:** Design a continuous testing strategy for HealthCloud.

**Model Answer:**

**Testing Layers:**

**1. Pre-Commit (Developer Workstation):**
- Unit tests (TDD)
- Static analysis (SonarLint in IDE)
- Pre-commit hooks (linting, secret scanning)
- Target: < 1 minute

**2. Commit Pipeline (Per Commit):**
- Build all changed microservices
- Unit tests for changed services
- Integration tests for affected interfaces
- Static analysis (SonarQube)
- Dependency vulnerability scan
- Target: < 10 minutes

**3. Merge Pipeline (Before Merge to Main):**
- Full unit test suite for all services
- Contract tests between services
- Security scan (SAST + dependency check)
- Target: < 15 minutes

**4. Deployment Pipeline (After Merge):**
- Deploy to dev namespace
- Smoke tests (synthetic transactions)
- Deploy to staging namespace
- Full integration tests
- Performance smoke tests
- Security scan (DAST on staging)
- Target: < 30 minutes

**5. Production Pipeline:**
- Canary deployment (5% → 25% → 100%)
- Production smoke tests
- Monitoring and alerting
- Rollback if error rate increases

---

## ♟️ Task 2: Test Environment Strategy

**Question:** Design reliable test environments for microservices.

**Model Answer:**

**Problem:** Integration tests fail 30% of the time due to environment issues (services down, database unavailable, network timeouts).

**Solution: Environment per Pipeline Run**

**Docker Compose for Integration Tests:**
```yaml
version: '3'
services:
  test-db:
    image: postgres:13
    environment:
      POSTGRES_DB: test_healthcloud
  auth-service:
    build: ./auth-service
    depends_on:
      - test-db
  patient-service:
    build: ./patient-service
    depends_on:
      - test-db
      - auth-service
  test-runner:
    build: ./tests
    depends_on:
      - auth-service
      - patient-service
    command: npm run test:integration
```

**Benefits:**
- Each pipeline run gets a fresh, isolated environment
- No interference from other test runs
- Deterministic — same environment every time
- Fast startup with Docker

**Service Virtualization for External Dependencies:**
- Mock external APIs (insurance providers, labs)
- Use WireMock or Mountebank
- Control responses for error scenarios
- Eliminates flakiness from external services

---

## 🔒 Task 3: Security Testing in CI/CD

**Question:** Design security testing for HIPAA-compliant healthcare software.

**Model Answer:**

**Security Testing Pipeline:**

**Stage 1: Pre-Commit (Developer IDE)**
- SonarLint with security rules enabled
- GitLeaks (secret scanning)
- Target: Catch issues before commit

**Stage 2: Commit Pipeline**
- SonarQube SAST scan
- OWASP Dependency Check
- npm audit / safety (Python)
- Target: Block on critical/high vulnerabilities

**Stage 3: Merge Pipeline**
- Full SAST scan
- License compliance check
- Container image scan (Trivy)
- Target: No vulnerabilities in dependencies

**Stage 4: Staging Deployment**
- DAST scan (OWASP ZAP) against staging
- API security testing (Burp Suite)
- Target: No exploitable vulnerabilities

**Stage 5: Pre-Production**
- Penetration test (quarterly)
- HIPAA compliance audit
- Target: Compliance certification

**Security Quality Gates:**

| Severity | Action |
|----------|--------|
| Critical | Block pipeline, fix immediately |
| High | Block pipeline, fix before next sprint |
| Medium | Warn, fix within 2 sprints |
| Low | Track, fix when convenient |

**Additional Measures:**
- No production data in test environments (HIPAA requirement)
- All PHI encrypted at rest and in transit
- Access logging for all PHI access
- Regular access reviews

---

## ⚡ Task 4: Performance Testing in Agile

**Question:** Integrate performance testing into HealthCloud's agile process.

**Model Answer:**

**Performance Testing Strategy:**

**1. Performance Criteria in Definition of Done:**
- New APIs: p95 response time < 200ms at expected load
- Database queries: execution time < 50ms
- Page load: First Contentful Paint < 1.5s

**2. Performance Smoke Tests (Per Commit):**
- Run lightweight load test on changed services
- 100 requests over 10 seconds
- Verify p95 response time
- Block merge if degraded > 20% from baseline

**3. Sprint-Level Performance Testing:**
- Full API load test on staging
- Simulate expected peak load
- Compare against previous sprint baseline
- Report trends in sprint review

**4. Release-Level Performance Testing:**
- Full system load test (all services)
- Stress test to find breaking point
- Soak test (24 hours at 80% capacity)
- Database query performance analysis

**5. Production Performance Monitoring:**
- APM (Datadog) traces every request
- Alert if p95 latency > threshold for 5 minutes
- Dashboard showing performance trends
- Weekly performance review meeting

**Performance Regression Detection:**
```
Baseline: API endpoint "getPatient" p95 = 120ms
Current:  API endpoint "getPatient" p95 = 180ms
Result:  50% regression → Investigate before release
```

---

## ⭐ Task 5: Incident Response and Testing

**Question:** An incident in production was caused by a configuration change. How does testing prevent recurrence?

**Model Answer:**

**Root Cause:**
- Configuration was changed manually in production
- No test validated the configuration before deployment
- Rollback took 2 hours because the previous configuration was not versioned

**Prevention Measures:**

**1. Configuration as Code:**
- All configurations in Git (Helm charts, ConfigMaps)
- Peer review for configuration changes
- Automated validation of configuration syntax

**2. Configuration Testing:**
```yaml
# Helm chart validation
helm lint ./healthcloud-chart
helm template ./healthcloud-chart | kubeval
```

**3. Canary Deployments with Rollback:**
- Deploy new config to 5% of pods
- Monitor error rate for 10 minutes
- If errors increase > 0.1%, automatic rollback
- Full rollout only after canary success

**4. Post-Incident Testing:**
- Add automated test for the specific failure scenario
- Include in regression suite
- Update runbooks with rollback procedure

**5. Chaos Engineering:**
- Monthly: Simulate configuration corruption
- Verify monitoring detects the issue
- Verify rollback procedures work
- Measure recovery time
