# 📘 Chapter 4 — Security Test Automation: Lessons

---

## 🔒 4.1 Security in CI/CD

### 🔒 Shift-Left Security

Integrate security testing as early as possible in the development pipeline.

```
Commit → SAST → SCA → Build → Unit Tests → DAST → Deploy → Monitoring
```

### 🔷 Pipeline Stages

| Stage | Tools | Action on Failure |
|-------|-------|-------------------|
| **Pre-commit** | Git hooks, linting | Block commit |
| **Build** | SAST, SCA | Block build |
| **Test** | Unit tests with security focus | Block if critical |
| **Staging** | DAST, IAST | Alert, gate release |
| **Production** | Monitoring, RASP | Alert and respond |

### 💎 Quality Gates

| Gate | Criteria |
|------|----------|
| **No critical vulnerabilities** | CVSS ≥ 7.0 must be resolved |
| **No high-risk dependencies** | Known CVEs in dependencies |
| **Secret scanning clean** | No credentials in code |
| **Compliance check pass** | Required controls verified |

---

## ⚙️ 4.2 Automated Vulnerability Scanning

### 🧪 Scanning Types

| Type | Frequency | Trigger |
|------|-----------|---------|
| **SAST scan** | Every commit | Code push |
| **SCA scan** | Every commit | Dependency change |
| **DAST scan** | Daily/nightly | Schedule or deployment |
| **Container scan** | Every build | Image creation |
| **Infrastructure scan** | Weekly | Schedule |

### 🔷 Scan Orchestration

- **Parallel execution:** Run SAST, SCA, and unit tests concurrently
- **Incremental scanning:** Only scan changed files for speed
- **Full scan schedule:** Weekly comprehensive scan
- **Baseline comparison:** Track new vs existing findings

---

## 🔒 4.3 Security-as-Code

### 🔷 Definition

Security policies, tests, and configurations stored and versioned as code.

### ❓ Practices

| Practice | Implementation |
|----------|----------------|
| **Policy as code** | Open Policy Agent (OPA) for access control rules |
| **Infrastructure as code** | Terraform with security checks |
| **Compliance as code** | Chef InSpec, OpenSCAP for automated compliance |
| **Test as code** | Automated security tests in CI pipeline |

### 🔷 Benefits

- Version control for security rules
- Automated enforcement
- Audit trail
- Consistent application across environments

---

## 🗂️ 4.4 False Positive Management

### 🔷 Why False Positives Matter

- Alert fatigue leads to ignored findings
- Wasted investigation time
- Erosion of trust in security tools

### 🔷 Strategies

| Strategy | Implementation |
|----------|----------------|
| **Baseline** | Mark accepted risks; track deviations |
| **Tuning** | Adjust tool rules to reduce noise |
| **Suppression** | Document why specific findings are safe |
| **Prioritization** | Focus on high-confidence, high-impact findings |
| **Correlation** | Cross-reference with other tools |

### 🔷 Workflow

1. Tool reports finding
2. Security team triages (true positive / false positive / accepted risk)
3. True positive → Create ticket for fix
4. False positive → Suppress with justification
5. Accepted risk → Document with expiration date

---

## 🔒 4.5 Security Regression Testing

### ⚙️ What to Automate

| Test | Purpose |
|------|---------|
| **Authentication bypass** | Ensure login still requires credentials |
| **Authorization checks** | Ensure role restrictions remain |
| **Input validation** | Ensure sanitization is not removed |
| **Session management** | Ensure tokens still expire |
| **Security headers** | Ensure HSTS, CSP, X-Frame-Options present |

### 🔷 Continuous Validation

- Re-run security tests when code changes
- Compare results to baseline
- Alert on new findings
- Verify fixes with regression tests

---

## 🛠️ 4.6 Tool Selection

### ✅ Criteria

| Criterion | Questions |
|-----------|-----------|
| **Language support** | Does it support our tech stack? |
| **Integration** | Does it work with our CI/CD? |
| **Accuracy** | False positive rate? |
| **Reporting** | Can it produce actionable reports? |
| **Scalability** | Can it handle our codebase size? |
| **Cost** | License vs open-source? |

### 🛠️ Tool Categories

| Category | Examples |
|----------|----------|
| **SAST** | SonarQube, Checkmarx, Fortify, Semgrep |
| **DAST** | OWASP ZAP, Burp Suite, Acunetix |
| **SCA** | Snyk, OWASP Dependency-Check, Black Duck |
| **Secret scanning** | GitLeaks, TruffleHog, GitGuardian |
| **Container scanning** | Trivy, Clair, Anchore |
| **IaC scanning** | Checkov, Terrascan, tfsec |

---

## 💡 Worked Examples

### 💡 Worked Example 1: CI/CD Pipeline with Security Gates

**Scenario:** Design a pipeline for a web application.

```yaml
stages:
  - build
  - test
  - security
  - deploy

build:
  script:
    - npm ci
    - npm run build

test:
  script:
    - npm test

security-sast:
  script:
    - semgrep --config=auto .
  allow_failure: false  # Block on critical findings

security-sca:
  script:
    - snyk test
  allow_failure: false

security-dast:
  script:
    - zap-baseline.py -t https://staging.example.com
  allow_failure: true  # Alert but don't block

deploy:
  script:
    - deploy-to-production
  only:
    - main
```

### 💡 Worked Example 2: False Positive Management

**Scenario:** SAST reports "Hard-coded password" on a config file with a database URL.

| Finding | Analysis | Action |
|---------|----------|--------|
| Database URL in config | Not a password; URL format | Suppress with justification |
| API key in test file | Test-only key, no production access | Suppress with expiration |
| Actual password in source code | Critical — production credential | Create ticket, rotate, fix |

### 💡 Worked Example 3: Security Regression Suite

**Scenario:** Automated security tests for a banking API.

```python
def test_auth_required():
    response = requests.get('/api/account')
    assert response.status_code == 401

def test_no_sql_injection():
    response = requests.get('/api/search?q=\'; DROP TABLE accounts; --')
    assert 'error' not in response.text.lower()

def test_security_headers():
    response = requests.get('/')
    assert 'Strict-Transport-Security' in response.headers
    assert 'Content-Security-Policy' in response.headers

def test_session_expires():
    # Login, wait for timeout, verify 401
    pass
```
