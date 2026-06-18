# 📘 Chapter 2 — CI/CD Pipeline Testing: Lessons

---

## ⭐ 2.1 CI/CD Pipeline Stages

### 🔷 Typical Pipeline

```
Commit → Build → Unit Test → Integration Test → Security Scan → Staging Deploy → Acceptance Test → Production Deploy → Monitor
```

### 🔷 Stage Descriptions

| Stage | Activities | Tests |
|-------|-----------|-------|
| **Build** | Compile, package, create artifacts | Build verification, static analysis |
| **Unit Test** | Fast, isolated tests | Developer-written unit tests |
| **Integration Test** | Component interactions | API tests, database integration |
| **Security Scan** | SAST, DAST, dependency check | Vulnerability scanning |
| **Staging Deploy** | Deploy to pre-production | Environment validation |
| **Acceptance Test** | End-to-end business scenarios | Automated acceptance tests |
| **Production Deploy** | Release to live | Smoke tests, synthetic monitoring |
| **Monitor** | Production health checks | Real user monitoring, alerts |

### 🔷 Testing at Each Stage

**Build stage:**
- Verify compilation succeeds
- Check for static analysis warnings
- Validate artifact creation

**Unit test stage:**
- Run all unit tests
- Target: < 5 minutes, > 80% code coverage
- Fail pipeline on any unit test failure

**Integration test stage:**
- Test service-to-service communication
- Verify database connectivity and queries
- Test message queue behavior

**Security stage:**
- SAST (source code analysis)
- SCA (dependency vulnerability scan)
- Secret detection (API keys, passwords)

**Acceptance test stage:**
- End-to-end user scenarios
- Cross-browser/device testing
- Performance baseline checks

---

## 💎 2.2 Quality Gates

### 🔷 Purpose

Quality gates enforce that code meets defined criteria before progressing to the next stage. They prevent defective code from reaching production.

### 🧪 Gate Types

| Gate | Criteria | Action if Failed |
|------|----------|-----------------|
| **Code coverage** | Minimum % of code covered by tests | Block merge/deploy |
| **Test pass rate** | 100% of tests must pass | Block progression |
| **Security threshold** | Zero critical vulnerabilities | Block deployment |
| **Performance baseline** | Response time within defined limits | Flag for review |
| **Code review** | Peer approval required | Block merge |

### 💡 Gate Configuration Example

```yaml
quality_gates:
  unit_tests:
    coverage: ">= 80%"
    pass_rate: "= 100%"
    max_duration: "5 minutes"
  
  integration_tests:
    pass_rate: "= 100%"
    max_duration: "15 minutes"
  
  security_scan:
    critical_vulns: "= 0"
    high_vulns: "<= 3"
  
  performance:
    p95_response_time: "< 500ms"
```

### 💎 Balancing Speed and Quality

- **Too strict:** Pipeline always fails, team bypasses gates
- **Too lenient:** Defects reach production
- **Just right:** Gates catch real issues without blocking valid changes

---

## ⭐ 2.3 Deployment Strategies

### 🔷 Blue-Green Deployment

- Two identical production environments (blue = live, green = idle)
- Deploy to green, test, then switch traffic
- Instant rollback by switching back to blue
- **Testing focus:** Verify green environment before switch; test switch mechanism

### 🔷 Canary Deployment

- Deploy to small subset of users (e.g., 5%)
- Monitor metrics (errors, latency, business metrics)
- Gradually increase traffic if healthy
- **Testing focus:** Define canary metrics and abort criteria

### 🔷 Feature Flags

- Deploy code to production but hide behind a flag
- Enable flag for specific users or percentages
- **Testing focus:** Test both flag on and off states; verify flag cleanup

### 🔷 Rolling Deployment

- Replace old instances with new ones gradually
- Maintain service availability throughout
- **Testing focus:** Verify mixed-version compatibility; test pod/container health checks

---

## ⭐ 2.4 Rollback and Recovery Testing

### 🎬 Rollback Scenarios

| Trigger | Rollback Action | Testing |
|---------|---------------|---------|
| Deployment failure | Automatic rollback to previous version | Verify rollback completes within SLO |
| Canary metric breach | Abort canary, route all traffic to old version | Test metric thresholds and abort logic |
| Post-deployment alert | Manual or automated rollback decision | Test alert-to-rollback time |
| Database migration failure | Roll back migration, restore data | Test migration rollback scripts |

### 🔷 Recovery Testing

- **Backup restoration:** Verify RTO (Recovery Time Objective) and RPO (Recovery Point Objective)
- **Failover:** Test disaster recovery site activation
- **Data integrity:** Verify no data corruption after recovery

---

## 💡 Worked Examples

### 💡 Worked Example 1: Pipeline Design

**Scenario:** Design a CI/CD pipeline for an e-commerce microservice.

```yaml
stages:
  - build
  - unit-test
  - integration-test
  - security-scan
  - package
  - staging-deploy
  - acceptance-test
  - canary-deploy
  - production-monitor

quality_gates:
  unit-test:
    coverage: ">= 85%"
    pass_rate: "100%"
  
  integration-test:
    pass_rate: "100%"
    services: ["payment", "inventory", "shipping"]
  
  security-scan:
    critical: 0
    high: "<= 2"
  
  acceptance-test:
    scenarios: ["checkout", "payment", "order-tracking"]
    pass_rate: "100%"
  
  canary-deploy:
    duration: "30 minutes"
    error_rate_threshold: "< 0.1%"
    p95_latency: "< 1 second"
```

### 💡 Worked Example 2: Canary Decision

**Scenario:** A new search algorithm is deployed to 5% of users.

| Metric | Baseline | Canary | Decision |
|--------|----------|--------|----------|
| Error rate | 0.05% | 0.06% | Pass (within tolerance) |
| P95 latency | 200ms | 250ms | Pass (within 25%) |
| Conversion rate | 3.2% | 2.8% | Fail (below threshold) |
| Search result relevance | N/A | 4.2/5 | Pass |

**Decision:** Abort canary. The conversion rate drop suggests the algorithm negatively impacts purchases.

### 💡 Worked Example 3: Rollback Test

**Scenario:** Test automatic rollback after a failed deployment.

**Test steps:**
1. Deploy version 2.1 to production
2. Introduce a fatal error (simulate via feature flag or injected fault)
3. Verify monitoring detects increased error rate
4. Confirm automatic rollback to version 2.0 initiates
5. Validate production traffic returns to version 2.0
6. Check database state consistency (no partial migrations)
7. Verify alerting and incident tickets created

**Success criteria:**
- Rollback completes within 5 minutes
- No data loss
- Service availability > 99.9% during rollback
