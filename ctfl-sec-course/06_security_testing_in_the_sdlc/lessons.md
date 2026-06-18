# 📘 Chapter 6 — Security Testing in the SDLC: Lessons

---

## 🔁 6.1 Secure Software Development Lifecycle (SSDLC)

### 🔷 Phases

| Phase | Security Activity |
|-------|-----------------|
| **Requirements** | Define security requirements, compliance needs |
| **Design** | Threat modeling, secure architecture review |
| **Development** | Secure coding standards, SAST, code review |
| **Testing** | DAST, penetration testing, vulnerability scanning |
| **Deployment** | Secure configuration, hardening |
| **Operations** | Monitoring, incident response, patching |

### 🔁 Comparison: SDLC vs SSDLC

| Aspect | Traditional SDLC | SSDLC |
|--------|-----------------|-------|
| **Security timing** | End of cycle | Throughout cycle |
| **Cost of fixes** | High (late discovery) | Lower (early discovery) |
| **Responsibility** | Security team only | Whole team |
| **Approach** | Reactive | Proactive |

---

## 🔒 6.2 Shift-Left Security

### 🔷 Definition

Moving security activities earlier in the development lifecycle.

### 🔷 Benefits

| Benefit | Explanation |
|---------|-------------|
| **Lower cost** | Fixes cheaper in development than production |
| **Faster feedback** | Developers learn immediately |
| **Better quality** | Security built in, not bolted on |
| **Reduced risk** | Fewer vulnerabilities reach production |

### 🔷 Shift-Left Activities

| Phase | Activity | Tool |
|-------|----------|------|
| **IDE** | Real-time code analysis | ESLint, SonarLint |
| **Commit** | Pre-commit hooks | Git hooks |
| **Build** | SAST scan | SonarQube |
| **Test** | DAST scan | OWASP ZAP |
| **Deploy** | Container scan | Trivy, Clair |

---

## ⭐ 6.3 DevSecOps

### 🔷 Definition

Integrating security practices into DevOps culture and processes.

### 📜 Principles

| Principle | Description |
|-----------|-------------|
| **Automation** | Security checks in CI/CD pipeline |
| **Collaboration** | Security team works with dev and ops |
| **Shared responsibility** | Everyone owns security |
| **Feedback loops** | Fast feedback on security issues |

### 🔒 CI/CD Security Pipeline

| Stage | Security Check | Tool |
|-------|---------------|------|
| **Code** | Commit signing, secrets scanning | GitLeaks, TruffleHog |
| **Build** | Dependency scan, SAST | OWASP DC, SonarQube |
| **Test** | DAST, integration security tests | ZAP, Selenium + security |
| **Deploy** | Infrastructure scan, compliance | Terraform scan, Chef Inspec |
| **Run** | Runtime monitoring, RASP | Falco, Sqreen |

---

## 🔒 6.4 Security in Agile

### ❓ Practices

| Practice | Implementation |
|----------|---------------|
| **Security stories** | Include security in backlog |
| **Definition of Done** | Security criteria for completion |
| **Sprint planning** | Allocate time for security tasks |
| **Retrospectives** | Review security incidents |
| **Spikes** | Research security solutions |

### 🔒 Security User Stories

| Story | Acceptance Criteria |
|-------|---------------------|
| "As a user, my password is secure" | Passwords hashed with bcrypt, min 12 chars |
| "As an admin, I can audit access" | All login attempts logged with timestamp |
| "As a system, I resist injection" | All inputs parameterized |

---

## 🔒 6.5 Continuous Security Monitoring

| Layer | Monitoring | Response |
|-------|------------|----------|
| **Application** | APM, RASP | Block attacks, alert team |
| **Infrastructure** | SIEM, IDS | Detect intrusions, auto-remediate |
| **Network** | NetFlow, DLP | Detect exfiltration, block traffic |
| **Endpoint** | EDR | Detect malware, isolate device |

---

## 💡 Worked Examples

### 💡 Worked Example 1: SSDLC Mapping

| Phase | Activity | Owner |
|-------|----------|-------|
| Requirements | Define GDPR compliance | Product Owner |
| Design | Threat model payment flow | Architect |
| Development | SAST scan, code review | Developer |
| Testing | DAST, pen test | Tester |
| Deployment | Harden server config | Ops |
| Operations | Monitor for attacks | SOC |

### 💡 Worked Example 2: Shift-Left Cost Comparison

| Stage | Cost to Fix |
|-------|-------------|
| Requirements | 1x |
| Design | 5x |
| Development | 10x |
| Testing | 50x |
| Production | 100x |

### 💡 Worked Example 3: Security Definition of Done

| Criterion | Verification |
|-----------|------------|
| No critical SAST findings | SonarQube scan |
| Dependencies scanned | OWASP Dependency-Check |
| Input validation tested | Unit tests |
| Authentication tested | DAST scan |
| Documentation updated | Security guide |
