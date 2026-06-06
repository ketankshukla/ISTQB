# Case Study 3 — CI/CD Security Integration

## Context

You are the DevSecOps Lead for CloudServices, deploying microservices to Kubernetes.

**Pipeline:**
- GitHub → GitHub Actions → Docker → ECR → Kubernetes
- 15 microservices
- Multiple teams

**Goal:** Integrate security into CI/CD without slowing delivery.

---

## Task 1: Pipeline Design

**Question:** Design a secure CI/CD pipeline.

**Model Answer:**

```
Commit → Secret Scan → SAST → SCA → Build → Container Scan → Deploy to Dev
→ Integration Tests → DAST → Deploy to Staging → Manual Gate → Deploy to Prod
```

**Gates:**
| Stage | Gate | Action |
|-------|------|--------|
| Commit | No secrets | Block push |
| Build | No critical SAST/SCA | Block build |
| Deploy Dev | Container clean | Auto-deploy |
| Deploy Staging | DAST acceptable | Auto-deploy |
| Deploy Prod | Manual approval + all gates passed | Require human sign-off |

---

## Task 2: Tool Integration

**Question:** Integrate security tools into the pipeline.

**Model Answer:**

| Tool | Stage | Configuration |
|------|-------|---------------|
| GitLeaks | Pre-commit | Block on secret detection |
| Semgrep | Build | Rules for OWASP Top 10 |
| Snyk | Build | Block on CVSS ≥ 7.0 |
| Trivy | Container scan | Scan OS and app packages |
| OWASP ZAP | Staging | Baseline scan, alert on new findings |
| kube-bench | Production | Verify Kubernetes CIS benchmarks |

---

## Task 3: Managing False Positives

**Question:** Handle false positives at scale.

**Model Answer:**

| Finding | Analysis | Action |
|---------|----------|--------|
| SAST: Hard-coded URL in config | Not a secret; public URL | Suppress with justification |
| SCA: CVE in dev dependency | Not in production build | Document, monitor for production impact |
| Container: OS package CVE | Low severity, no exploit | Accept risk with 30-day review |
| DAST: Missing header on static asset | Low impact | Add header, no emergency deploy |

**Process:**
1. Automated triage by confidence score
2. Security team reviews weekly
3. Accepted risks documented with expiration
4. New findings automatically create tickets

---

## Task 4: Metrics and Improvement

**Question:** Track security pipeline effectiveness.

**Model Answer:**

| Metric | Baseline | Target | Current |
|--------|----------|--------|---------|
| Mean time to fix critical | 14 days | 2 days | 3 days |
| False positive rate | 40% | < 10% | 15% |
| Secrets caught pre-commit | 0 | 100% | 95% |
| Container vulnerabilities | 50/image | < 5/image | 8/image |
| Security gate pass rate | 60% | 95% | 88% |

**Improvement Actions:**
- Tune SAST rules to reduce false positives
- Provide developer training on secure coding
- Automate remediation for common issues (dependency updates)
