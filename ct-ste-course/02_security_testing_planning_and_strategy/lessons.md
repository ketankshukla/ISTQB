# 📘 Chapter 2 — Security Testing Planning and Strategy: Lessons

---

## ⚠️ 2.1 Risk Assessment for Security Testing

### ⚠️ Risk Formula

Risk = Threat × Vulnerability × Impact

| Factor | Description |
|--------|-------------|
| **Threat** | Actor or event with potential to cause harm |
| **Vulnerability** | Weakness that could be exploited |
| **Impact** | Business consequence if exploited |

### ⚠️ Risk Assessment Steps

1. **Identify assets** — What are we protecting?
2. **Identify threats** — Who/what might attack?
3. **Identify vulnerabilities** — What weaknesses exist?
4. **Determine likelihood** — How probable is an attack?
5. **Determine impact** — What is the business cost?
6. **Calculate risk** — Combine likelihood and impact
7. **Prioritize** — Address highest risks first

### ⚠️ Risk Matrix

| Likelihood \ Impact | Low | Medium | High |
|---------------------|-----|--------|------|
| **High** | Medium | High | Critical |
| **Medium** | Low | Medium | High |
| **Low** | Low | Low | Medium |

---

## 🔒 2.2 Security Test Scope

### 🔷 Scope Determinants

| Factor | Influence on Scope |
|--------|-----------------|
| **Application type** | Web apps need different tests than embedded systems |
| **Data sensitivity** | PCI-DSS data requires stronger controls than public content |
| **Threat landscape** | High-value targets need more thorough testing |
| **Compliance requirements** | Regulations mandate specific tests |
| **Budget and time** | Risk-based prioritization |

### 🔷 In-Scope vs Out-of-Scope

| Typically In-Scope | Typically Out-of-Scope |
|-------------------|------------------------|
| Application code and configuration | Third-party SaaS (unless integrated) |
| APIs and web services | Physical security (unless specified) |
| Authentication and session management | Employee background checks |
| Input validation and output encoding | Network infrastructure (separate scope) |

---

## ♟️ 2.3 Security Test Strategy

### ♟️ Strategy Components

| Component | Description |
|-----------|-------------|
| **Objectives** | What security properties to verify |
| **Approach** | White-box, black-box, or grey-box |
| **Techniques** | SAST, DAST, penetration testing, code review |
| **Tools** | Commercial, open-source, custom |
| **Schedule** | When tests occur in the SDLC |
| **Reporting** | Who receives what level of detail |
| **Remediation** | How findings are tracked and verified |

### 🔷 Testing Approaches

| Approach | Knowledge | When to Use |
|----------|-----------|-------------|
| **White-box** | Full source code and architecture | Early SDLC, thorough coverage |
| **Black-box** | No internal knowledge | Simulate real attacker |
| **Grey-box** | Limited knowledge (user access, docs) | Balance of realism and efficiency |

### 🪜 Test Levels

| Level | Focus | Examples |
|-------|-------|----------|
| **Unit** | Function-level security | Input validation, crypto functions |
| **Integration** | Component interactions | API auth, session handling |
| **System** | End-to-end application | Full penetration test |
| **Acceptance** | Business risk validation | Compliance verification |

---

## ⭐ 2.4 Compliance-Driven Testing

### 🔷 Common Standards

| Standard | Domain | Key Testing Requirements |
|----------|--------|-------------------------|
| **PCI-DSS** | Payment cards | Encryption, access controls, vulnerability scans |
| **GDPR** | EU personal data | Data protection, breach notification, consent |
| **HIPAA** | US healthcare | Access controls, audit logs, encryption |
| **ISO 27001** | Information security | Risk management, controls testing |
| **SOC 2** | Service organizations | Security, availability, confidentiality |

### 📑 Mapping Tests to Requirements

| Requirement | Test |
|-------------|------|
| Encrypt card data at rest | Verify AES-256 encryption |
| Log all access to sensitive data | Review audit log coverage |
| Test for vulnerabilities quarterly | Run DAST and SAST scans |

---

## 💡 Worked Examples

### 💡 Worked Example 1: Risk Assessment

**Scenario:** Online banking application.

| Asset | Threat | Vulnerability | Likelihood | Impact | Risk |
|-------|--------|--------------|------------|--------|------|
| Customer accounts | Criminal | SQL injection | Medium | High | High |
| Transaction data | Insider | Weak access controls | Medium | High | High |
| Session tokens | Criminal | Weak session management | High | Medium | High |
| Public content | Hacktivist | XSS | High | Low | Medium |

**Priority:** Address account and transaction risks first.

### 💡 Worked Example 2: Scope Definition

**Scenario:** Test a healthcare patient portal.

**In-scope:**
- Web application and APIs
- Authentication and authorization
- Patient data handling (PHI)
- Session management
- Audit logging

**Out-of-scope:**
- Network firewall configuration
- Physical datacenter security
- Staff background checks
- Mobile app (separate project)

### 💡 Worked Example 3: Strategy Selection

**Scenario:** Choose approach for a new fintech startup.

| Phase | Approach | Rationale |
|-------|----------|-----------|
| Design | Threat modeling | Identify risks before coding |
| Development | SAST + code review | Catch issues early |
| Integration | API security testing | Validate service boundaries |
| Pre-release | Penetration testing (grey-box) | Realistic attacker simulation |
| Ongoing | DAST + dependency scanning | Continuous monitoring |
