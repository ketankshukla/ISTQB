# Chapter 4 — Security Testing Process: Lessons

---

## 4.1 Security Test Planning

### Steps

| Step | Activity |
|------|----------|
| 1 | Identify assets to protect |
| 2 | Identify threats and vulnerabilities |
| 3 | Define security test objectives |
| 4 | Select appropriate techniques |
| 5 | Define scope and boundaries |
| 6 | Identify constraints and assumptions |
| 7 | Plan resources and schedule |

### Scope Considerations

| Element | Decision |
|---------|----------|
| **In scope** | Web app, APIs, database |
| **Out of scope** | Third-party services, physical security |
| **Constraints** | No production testing, limited time |
| **Assumptions** | Test environment mirrors production |

---

## 4.2 Test Execution

### Preparation

| Activity | Purpose |
|----------|---------|
| **Environment setup** | Secure, isolated test environment |
| **Tool configuration** | Calibrate scanners and tools |
| **Baseline capture** | Document starting state |
| **Backup** | Protect test environment |

### Execution Steps

1. **Reconnaissance** — Gather information about target
2. **Vulnerability scanning** — Automated discovery
3. **Manual testing** — Deep-dive on findings
4. **Exploitation** — Validate vulnerabilities
5. **Documentation** — Record all activities and findings

---

## 4.3 Risk Assessment

### Risk Calculation

```
Risk = Threat Likelihood x Impact x Vulnerability
```

### Risk Levels

| Level | Description | Action |
|-------|-------------|--------|
| **Critical** | Immediate exploitation possible | Fix immediately |
| **High** | Easy exploitation, significant impact | Fix in next release |
| **Medium** | Moderate difficulty or impact | Fix in planned release |
| **Low** | Difficult or minimal impact | Accept or fix as time permits |

---

## 4.4 Security Test Reporting

### Report Contents

| Section | Content |
|---------|---------|
| **Executive summary** | High-level findings and risk |
| **Methodology** | Tools, techniques, scope |
| **Findings** | Detailed vulnerability descriptions |
| **Evidence** | Screenshots, logs, reproduction steps |
| **Risk ratings** | Severity and likelihood |
| **Remediation** | Specific fix recommendations |
| **Appendix** | Technical details |

### CVSS Scoring

| Metric | Values |
|--------|--------|
| **Base score** | Intrinsic characteristics |
| **Temporal score** | Current exploitability |
| **Environmental score** | Organization-specific impact |

---

## 4.5 Integration with Test Lifecycle

| Phase | Security Activity |
|-------|-------------------|
| **Requirements** | Define security requirements |
| **Design** | Threat modeling |
| **Development** | SAST, code review |
| **System test** | DAST, penetration testing |
| **Acceptance** | Security acceptance criteria |
| **Production** | Continuous monitoring |

---

## Worked Examples

### Worked Example 1: Test Plan

| Element | Detail |
|---------|--------|
| Objective | Validate OWASP Top 10 compliance |
| Scope | Web application and API |
| Techniques | DAST, manual testing |
| Constraints | No production testing |
| Schedule | 2 weeks |

### Worked Example 2: Risk Assessment

| Finding | Likelihood | Impact | Risk | Priority |
|---------|------------|--------|------|----------|
| SQL injection | High | High | Critical | 1 |
| Weak password policy | Medium | Medium | Medium | 3 |
| Information disclosure | Low | Low | Low | 5 |

### Worked Example 3: Report Finding

```
Finding: SQL Injection in Login Form
Severity: Critical
Evidence: Input ' OR 1=1 -- bypasses authentication
Impact: Complete database access
Remediation: Use parameterized queries
```
