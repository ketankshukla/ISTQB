# Chapter 5 — Security Test Execution and Analysis: Lessons

---

## 5.1 Test Execution Workflow

### Preparation

| Step | Activity |
|------|----------|
| **Scope confirmation** | Agree what is and isn't in scope |
| **Environment setup** | Dedicated, isolated test environment |
| **Tool calibration** | Verify tools are configured correctly |
| **Rules of engagement** | Define authorized test hours, escalation paths |

### Execution

| Phase | Activities |
|-------|------------|
| **Discovery** | Map application, identify entry points |
| **Vulnerability identification** | Run automated scans and manual tests |
| **Exploitation** | Validate vulnerabilities are real and assess impact |
| **Post-exploitation** | Determine business impact, data access |

### Constraints

- **Production testing:** Generally avoided; use staging where possible
- **Data handling:** No real PII; use synthetic data
- **Business hours:** Avoid peak times for DoS tests
- **Authorization:** Written permission required

---

## 5.2 Vulnerability Analysis

### Validation

| Finding | Validation Approach |
|---------|-------------------|
| **SAST reported injection** | Reproduce with crafted input |
| **DAST reported XSS** | Confirm in browser with payload |
| **SCA reported CVE** | Verify version and exploitability |
| **Code review finding** | Trace execution path to confirm |

### Severity Rating (CVSS)

| Vector | Description |
|--------|-------------|
| **Attack Vector** | Network, adjacent, local, physical |
| **Attack Complexity** | Low or high |
| **Privileges Required** | None, low, high |
| **User Interaction** | None or required |
| **Scope** | Changed or unchanged |
| **Confidentiality** | None, low, high |
| **Integrity** | None, low, high |
| **Availability** | None, low, high |

### Business Context

- CVSS provides technical severity; business impact may differ
- A CVSS 6.0 on a payment system may be more urgent than CVSS 8.0 on an internal wiki

---

## 5.3 Security Reporting

### Report Structure

| Section | Content |
|---------|---------|
| **Executive summary** | High-level findings, risk rating, recommendations |
| **Methodology** | Scope, tools, techniques used |
| **Findings** | Detailed vulnerability descriptions with evidence |
| **Risk ratings** | Severity with business context |
| **Remediation** | Specific, actionable fix guidance |
| **Appendices** | Screenshots, logs, tool outputs |

### Writing Effective Findings

| Element | Example |
|---------|---------|
| **Description** | "The login form is vulnerable to SQL injection" |
| **Evidence** | Screenshot of successful injection; HTTP request/response |
| **Impact** | "Attacker can bypass authentication and access any account" |
| **Reproduction** | Step-by-step instructions |
| **Remediation** | "Use parameterized queries; validate input" |

### Audience-Specific Reporting

| Audience | Focus |
|----------|-------|
| **Developers** | Technical details, reproduction steps, code fixes |
| **Management** | Risk summary, timeline, resource needs |
| **Compliance** | Mapping to control requirements |

---

## 5.4 Remediation Verification

### Retest Process

1. **Developer fixes** the vulnerability
2. **Developer tests** the fix locally
3. **Security team retests** in staging environment
4. **Confirm** the vulnerability is resolved
5. **Verify** the fix doesn't introduce new issues
6. **Close** the finding

### Common Remediation Mistakes

| Mistake | Example |
|---------|---------|
| **Partial fix** | Sanitize one input field but miss another |
| **Incomplete fix** | Validate length but not special characters |
| **Workaround** | Disable feature instead of fixing root cause |
| **Reintroduction** | Same vulnerability returns in next release |

---

## 5.5 Security Test Environments

### Requirements

| Requirement | Implementation |
|-------------|---------------|
| **Isolation** | Separate from production; no shared data |
| **Realism** | Mirror production architecture |
| **Reset capability** | Ability to restore clean state |
| **Monitoring** | Log all test activities |
| **Access control** | Only authorized testers |

### Types

| Type | Use Case |
|------|----------|
| **Local dev** | Developer security testing |
| **CI/CD test** | Automated scanning |
| **Dedicated security** | Penetration testing, red team |
| **Staging** | Pre-release validation |

---

## 5.6 Emergency Testing

### Triggers

- Zero-day vulnerability disclosure (e.g., Log4j)
- Production security incident
- Compliance audit finding
- Third-party breach affecting your dependencies

### Response

| Step | Action |
|------|--------|
| **Assess** | Determine if you are affected |
| **Scope** | Identify affected systems |
| **Test** | Verify vulnerability and impact |
| **Remediate** | Apply patch or workaround |
| **Verify** | Confirm fix is effective |
| **Communicate** | Notify stakeholders |

---

## Worked Examples

### Worked Example 1: Vulnerability Validation

**Scenario:** SAST reports "Potential SQL injection in login.php line 45."

**Validation:**
1. Review source code — query uses string concatenation
2. Craft test input: `admin' OR '1'='1`
3. Submit to login form
4. Observe: Login succeeds without valid credentials
5. Confirm: True positive, severity High

### Worked Example 2: Severity with Business Context

**Scenario:** Two findings rated CVSS 7.5.

| Finding | Technical CVSS | Business Impact | Adjusted Priority |
|---------|---------------|-----------------|-------------------|
| XSS on admin panel | 7.5 | Admin compromise → full system control | Critical |
| XSS on contact form | 7.5 | Limited to contact form, no session | Medium |

**Decision:** Prioritize admin panel XSS despite same CVSS.

### Worked Example 3: Remediation Verification

**Scenario:** SQL injection fixed by switching to parameterized queries.

**Retest:**
1. Re-run original payload: `admin' OR '1'='1`
2. Result: Login fails, error message generic
3. Re-run SAST: No SQL injection finding
4. Re-run DAST: No injection detected
5. Regression test: Valid login still works
6. **Status:** Verified fixed
