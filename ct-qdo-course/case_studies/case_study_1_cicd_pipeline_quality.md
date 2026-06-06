# Case Study 1 — CI/CD Pipeline Quality Implementation

## Context

You are the Quality Lead for CloudRetail, an e-commerce company moving from monthly releases to continuous deployment. The current release process takes 3 weeks and has a 30% failure rate.

**Current State:**
- Manual testing takes 2 weeks per release
- Deployments are done manually by ops team
- Rollbacks take 4+ hours
- No automated tests in the pipeline
- Production issues discovered by customers

**Goals:**
- Deploy multiple times per day
- Reduce production incidents by 80%
- Achieve < 1 hour MTTR

---

## Task 1: Pipeline Design

**Question:** Design a CI/CD pipeline with appropriate quality gates.

**Model Answer:**

```yaml
stages:
  - build
  - unit-test
  - static-analysis
  - integration-test
  - security-scan
  - staging-deploy
  - acceptance-test
  - canary-deploy
  - production-monitor

quality_gates:
  unit-test:
    coverage: ">= 80%"
    pass_rate: "100%"
    max_duration: "5 minutes"
  
  static-analysis:
    critical_issues: 0
    high_issues: "<= 3"
  
  integration-test:
    pass_rate: "100%"
    services: ["catalog", "cart", "payment", "shipping"]
  
  security-scan:
    critical_vulns: 0
    high_vulns: "<= 2"
  
  acceptance-test:
    scenarios: ["browse", "add-to-cart", "checkout", "order-tracking"]
    pass_rate: "100%"
  
  canary-deploy:
    duration: "30 minutes"
    error_rate: "< 0.1%"
    p95_latency: "< 500ms"
    conversion_rate_drop: "< 2%"
```

---

## Task 2: Shift-Left Implementation

**Question:** Plan shift-left testing activities.

**Model Answer:**

| Phase | Activity | Owner | Tool |
|-------|----------|-------|------|
| Requirements | BDD scenario review with Three Amigos | BA, Dev, QA | Cucumber |
| Design | Architecture review for testability | Tech Lead, QA | ADRs |
| Coding | TDD for all new features | Developer | JUnit, pytest |
| Pre-commit | Pre-commit hooks (lint, format) | Developer | ESLint, Black |
| PR | Code review + static analysis + unit tests | Peer, SonarQube | GitHub PR |
| CI | Integration + contract + security tests | CI Pipeline | Jenkins, Pact, Snyk |
| Staging | End-to-end acceptance tests | QA Automation | Cypress |
| Production | Synthetic monitoring, A/B tests | SRE | Datadog |

---

## Task 3: Deployment Strategy

**Question:** Recommend a deployment strategy for the checkout service.

**Model Answer:**

**Strategy:** Canary deployment with feature flags

**Reasoning:**
- Checkout is revenue-critical; any bug directly impacts sales
- Canary limits blast radius to small user subset
- Feature flags allow gradual rollout of new features
- Automatic rollback if metrics degrade

**Implementation:**
1. Deploy new version to 5% of users
2. Monitor for 30 minutes: error rate, latency, conversion rate
3. If healthy, increase to 25%, then 50%, then 100%
4. If metrics degrade, automatically route all traffic to old version
5. New features hidden behind LaunchDarkly flags; enable for beta users first

---

## Task 4: Observability Setup

**Question:** Design monitoring and alerting for the new pipeline.

**Model Answer:**

**Metrics (Datadog):**
- Deployment frequency (target: 5+ per day)
- Lead time for changes (target: < 1 hour)
- Change failure rate (target: < 5%)
- MTTR (target: < 1 hour)

**Alerts:**
| Condition | Severity | Response |
|-----------|----------|----------|
| Error rate > 0.5% for 2 min | P1 (Page) | Immediate investigation |
| P95 latency > 1s for 5 min | P2 (Ticket) | Investigate within 1 hour |
| Canaries failing quality gate | P2 (Ticket) | Block deployment, investigate |
| Build failure on main branch | P3 (Slack) | Fix before next merge |

**Dashboards:**
- Executive: DORA metrics (deployment frequency, lead time, failure rate, MTTR)
- Engineering: Pipeline health, test pass rates, flaky tests
- Operations: Production health, resource utilization, error budgets
