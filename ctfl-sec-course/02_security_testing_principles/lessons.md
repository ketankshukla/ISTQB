# 📘 Chapter 2 — Security Testing Principles: Lessons

---

## ⭐ 2.1 Applying the CIA Triad

### 🔷 Confidentiality Testing

| Test Focus | Example Tests |
|------------|---------------|
| **Authentication** | Verify login mechanisms |
| **Authorization** | Verify role-based access |
| **Encryption** | Verify data is encrypted in transit and at rest |
| **Session management** | Verify session timeout and hijacking prevention |

### 🔷 Integrity Testing

| Test Focus | Example Tests |
|------------|---------------|
| **Input validation** | Verify data is validated and sanitized |
| **Digital signatures** | Verify signature verification |
| **Hash verification** | Verify data has not been tampered with |
| **Audit trails** | Verify all changes are logged |

### 🤖 Availability Testing

| Test Focus | Example Tests |
|------------|---------------|
| **DoS resilience** | Verify system under high load |
| **Backup recovery** | Verify data can be restored |
| **Failover** | Verify backup systems activate |
| **Redundancy** | Verify no single point of failure |

---

## ⚠️ 2.2 Risk-Based Security Testing

### 🔷 Process

1. **Identify assets** — What needs protection?
2. **Identify threats** — What could go wrong?
3. **Identify vulnerabilities** — What weaknesses exist?
4. **Assess risk** — Likelihood x Impact
5. **Prioritize tests** — Focus on highest risks

### ⚠️ Risk Matrix

| Likelihood \ Impact | Low | Medium | High |
|---------------------|-----|--------|------|
| **High** | Medium | High | Critical |
| **Medium** | Low | Medium | High |
| **Low** | Low | Low | Medium |

---

## 🔒 2.3 Security Controls

### 🔷 Preventive Controls

| Control | Purpose |
|---------|---------|
| **Authentication** | Verify identity |
| **Authorization** | Restrict access |
| **Encryption** | Protect data |
| **Input validation** | Block malicious input |
| **Firewalls** | Block unauthorized access |

### 🔷 Detective Controls

| Control | Purpose |
|---------|---------|
| **Logging** | Record activity |
| **Monitoring** | Detect anomalies |
| **Intrusion detection** | Identify attacks |
| **Audit trails** | Track changes |

### 🔷 Corrective Controls

| Control | Purpose |
|---------|---------|
| **Backup** | Restore lost data |
| **Incident response** | Handle breaches |
| **Patching** | Fix vulnerabilities |
| **Failover** | Switch to backup |

---

## 📐 2.4 Threat Modeling Basics

### 📐 STRIDE Model

| Category | Threat | Violates |
|----------|--------|----------|
| **S**poofing | Pretending to be someone else | Authentication |
| **T**ampering | Modifying data | Integrity |
| **R**epudiation | Denying an action | Non-repudiation |
| **I**nformation Disclosure | Exposing data | Confidentiality |
| **D**enial of Service | Blocking access | Availability |
| **E**levation of Privilege | Gaining unauthorized access | Authorization |

### 🔷 When to Apply

- During design phase
- Before major changes
- After security incidents
- During architecture reviews

---

## 📑 2.5 Security Requirements

| Type | Example |
|------|---------|
| **Functional** | "System shall encrypt passwords with bcrypt" |
| **Non-functional** | "System shall handle 10,000 concurrent authenticated users" |
| **Compliance** | "System shall comply with PCI-DSS requirements" |
| **Recovery** | "System shall restore within 4 hours of a breach" |

---

## 💡 Worked Examples

### 💡 Worked Example 1: Control Selection

| Threat | Control Type | Control |
|--------|-------------|---------|
| Unauthorized access | Preventive | Authentication + Authorization |
| Data breach | Preventive | Encryption |
| Attack in progress | Detective | Intrusion detection system |
| Data corruption | Corrective | Backup + restore |

### 💡 Worked Example 2: Risk Assessment

| Asset | Threat | Vulnerability | Likelihood | Impact | Risk | Priority |
|-------|--------|-------------|------------|--------|------|----------|
| Customer DB | SQL injection | No input validation | High | High | Critical | 1 |
| Login page | Brute force | No account lockout | Medium | Medium | Medium | 3 |
| Public content | Defacement | Unpatched CMS | Low | Low | Low | 5 |

### 💡 Worked Example 3: STRIDE Analysis

| Component | S | T | R | I | D | E |
|-----------|---|---|---|---|---|---|
| Login | X |   | X | X |   | X |
| Database |   | X | X | X |   | X |
| API | X | X |   | X | X | X |
