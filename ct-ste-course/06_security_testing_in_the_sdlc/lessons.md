# Chapter 6 — Security Testing in the SDLC: Lessons

---

## 6.1 Secure Development Lifecycle (SSDLC)

### Definition

SSDLC integrates security activities into every phase of software development.

### Phases

| Phase | Security Activity |
|-------|-------------------|
| **Requirements** | Define security requirements (CIA, compliance) |
| **Design** | Threat modeling, secure architecture review |
| **Implementation** | Secure coding standards, SAST, code review |
| **Verification** | DAST, penetration testing, fuzzing |
| **Release** | Security sign-off, final risk assessment |
| **Operations** | Monitoring, incident response, patching |

### SSDLC vs Traditional SDLC

| Aspect | Traditional | SSDLC |
|--------|-------------|-------|
| Security timing | End of cycle | Throughout |
| Cost of fixes | Expensive (late discovery) | Cheaper (early discovery) |
| Responsibility | Security team only | Shared |
| Outcome | Reactive | Proactive |

---

## 6.2 Security in Agile

### Agile Security Practices

| Practice | Implementation |
|----------|----------------|
| **Security stories** | User stories for security features |
| **Definition of Done** | Security criteria included |
| **Sprint security testing** | SAST, SCA in CI/CD |
| **Threat modeling per feature** | Lightweight modeling for new features |
| **Security retrospectives** | Discuss security improvements |

### Security in Scrum

- **Sprint planning:** Include security tasks and estimate effort
- **Daily standup:** Report security blockers
- **Sprint review:** Demo security features (auth, audit logs)
- **Sprint retrospective:** What security practices worked/didn't

### Security in Kanban

- **WIP limits:** Include security review column
- **Continuous flow:** Security testing as part of every item
- **Metrics:** Track security defect aging

---

## 6.3 Threat Modeling

### STRIDE Threat Categories

| Category | Description | Example |
|----------|-------------|---------|
| **Spoofing** | Pretending to be someone else | Stolen credentials |
| **Tampering** | Modifying data or code | Modifying request parameters |
| **Repudiation** | Denying an action | No audit logs for transaction |
| **Information Disclosure** | Exposing data to unauthorized parties | Unencrypted data transmission |
| **Denial of Service** | Making system unavailable | Resource exhaustion |
| **Elevation of Privilege** | Gaining unauthorized access | Vertical privilege escalation |

### DREAD Risk Rating

| Factor | Description | Score |
|--------|-------------|-------|
| **Damage** | Business impact | 0-10 |
| **Reproducibility** | How easily reproduced | 0-10 |
| **Exploitability** | Effort to exploit | 0-10 |
| **Affected Users** | How many users affected | 0-10 |
| **Discoverability** | How easily found | 0-10 |

**Total / 5 = Risk score (0-10)**

### Threat Modeling Process

1. **Decompose application** — Data flow diagrams, entry points
2. **Identify threats** — Apply STRIDE to each component
3. **Rate risks** — Use DREAD or similar
4. **Plan mitigations** — Design controls
5. **Verify** — Test mitigations work

---

## 6.4 Security Requirements

### Types

| Type | Example |
|------|---------|
| **Functional** | "User must authenticate with MFA for transfers > $1000" |
| **Non-functional** | "All data in transit must use TLS 1.3" |
| **Compliance** | "PCI-DSS requirement 3.4: Render PAN unreadable" |
| **Negative** | "System must reject SQL injection attempts" |

### Writing Security Requirements

- Specific and testable
- Aligned to threats
- Traceable to design and tests
- Prioritized by risk

---

## 6.5 Security in DevOps (DevSecOps)

### Principles

| Principle | Implementation |
|-----------|----------------|
| **Shift left** | Security in development, not just operations |
| **Automate** | Security tests in CI/CD |
| **Share responsibility** | Security is everyone's job |
| **Measure** | Security metrics alongside delivery metrics |
| **Feedback loops** | Fast security feedback to developers |

### DevSecOps Pipeline

```
Code → SAST → Secrets Scan → SCA → Build → Test → DAST → Deploy → Monitor
         ↓           ↓           ↓        ↓      ↓       ↓
      Developer   Block if   Block if  Unit   Alert  RASP
      feedback    secret     critical  tests  if     in
                    found    vuln      with   high   production
                             found     security risk
```

### Culture Changes

- Developers run security tools
- Security team enables, doesn't gatekeep
- Fast feedback over periodic audits
- Shared tooling between dev and security

---

## 6.6 Security Technical Debt

### Definition

Known security issues or shortcuts that increase risk over time.

### Sources

| Source | Example |
|--------|---------|
| **Shortcuts** | "We'll fix authentication later" |
| **Legacy systems** | Unsupported framework with known CVEs |
| **Incomplete fixes** | Partial input validation |
| **Deprecated algorithms** | MD5 for password hashing |

### Managing Security Debt

- **Inventory:** Track known issues
- **Prioritize:** Risk-based ranking
- **Plan:** Allocate sprint capacity for fixes
- **Monitor:** New issues don't accumulate faster than fixes

---

## Worked Examples

### Worked Example 1: SSDLC Mapping

**Scenario:** Apply SSDLC to a new banking application.

| Phase | Activity | Deliverable |
|-------|----------|-------------|
| Requirements | PCI-DSS gap analysis | Security requirements document |
| Design | Threat modeling with STRIDE | Threat model diagram |
| Implementation | Secure coding training, SAST | Clean SAST report |
| Verification | Penetration test, DAST | Security test report |
| Release | Security sign-off | Risk acceptance memo |
| Operations | SIEM monitoring, incident response | Security operations runbook |

### Worked Example 2: Threat Modeling

**Scenario:** Online shopping cart.

| Component | STRIDE Threat | DREAD Score | Mitigation |
|-----------|-------------|-------------|------------|
| Login | Spoofing (stolen creds) | 8 | MFA, account lockout |
| Cart | Tampering (price change) | 9 | Server-side validation |
| Checkout | Information Disclosure | 7 | TLS, tokenization |
| Payment | Elevation of Privilege | 8 | RBAC, audit logging |

### Worked Example 3: Security Requirements

**Scenario:** Healthcare patient portal.

| Requirement | Type | Test Approach |
|-------------|------|---------------|
| All PHI encrypted at rest | Non-functional | Verify AES-256 encryption |
| Users must authenticate before viewing records | Functional | Verify 401 without auth |
| Audit log must record all access to PHI | Compliance | Verify log entries |
| System must prevent unauthorized PHI export | Negative | Attempt export without permission |
