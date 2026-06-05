# Chapter 5 — Security Test Execution and Evaluation: Lessons

---

## 5.1 CVSS (Common Vulnerability Scoring System)

### What is CVSS?

CVSS is a standardized framework for rating the severity of security vulnerabilities. Version 3.1 is the current standard.

### Base Score Metrics

The base score represents the intrinsic characteristics of a vulnerability.

**Exploitability Metrics:**

| Metric | Options | Description |
|--------|---------|-------------|
| **Attack Vector (AV)** | Network (N), Adjacent (A), Local (L), Physical (P) | How is the vulnerability exploited? |
| **Attack Complexity (AC)** | Low (L), High (H) | How complex is the attack? |
| **Privileges Required (PR)** | None (N), Low (L), High (H) | What privileges does attacker need? |
| **User Interaction (UI)** | None (N), Required (R) | Does victim need to take action? |
| **Scope (S)** | Unchanged (U), Changed (C) | Can vulnerability affect other components? |

**Impact Metrics:**

| Metric | Options | Description |
|--------|---------|-------------|
| **Confidentiality Impact (C)** | None (N), Low (L), High (H) | Impact on confidentiality |
| **Integrity Impact (I)** | None (N), Low (L), High (H) | Impact on integrity |
| **Availability Impact (A)** | None (N), Low (L), High (H) | Impact on availability |

### Severity Ratings

| Score | Severity |
|-------|----------|
| 0.0 | None |
| 0.1 – 3.9 | Low |
| 4.0 – 6.9 | Medium |
| 7.0 – 8.9 | High |
| 9.0 – 10.0 | Critical |

### Worked Example: CVSS Calculation

**Vulnerability:** SQL injection in a public web application

| Metric | Value | Reason |
|--------|-------|--------|
| Attack Vector | Network (N) | Exploitable over the internet |
| Attack Complexity | Low (L) | SQLMap automates exploitation |
| Privileges Required | None (N) | No authentication needed |
| User Interaction | None (N) | No victim action required |
| Scope | Changed (C) | Can access database beyond the vulnerable component |
| Confidentiality Impact | High (H) | Full database read possible |
| Integrity Impact | High (H) | Data can be modified/deleted |
| Availability Impact | High (H) | Database can be made unavailable |

**Base Score:** 10.0 (Critical)

**Another example: Self-XSS**

| Metric | Value | Reason |
|--------|-------|--------|
| Attack Vector | Network (N) | Via web |
| Attack Complexity | Low (L) | Easy to execute |
| Privileges Required | None (N) | No special access |
| User Interaction | Required (R) | Victim must run script on themselves |
| Scope | Unchanged (U) | Only affects own session |
| Confidentiality Impact | Low (L) | Only own data at risk |
| Integrity Impact | Low (L) | Only own session affected |
| Availability Impact | None (N) | No availability impact |

**Base Score:** ~2.3 (Low)

---

## 5.2 Vulnerability Prioritization

### Factors Beyond CVSS

CVSS base score alone is insufficient for prioritization. Consider:

**Asset Value:**
- What data/system is at risk?
- Is it a production database or a test server?
- Does it contain PII, financial data, or trade secrets?

**Threat Context:**
- Is the vulnerability being actively exploited in the wild?
- Is there public exploit code available?
- Is the system internet-facing or internal only?

**Business Impact:**
- What is the financial impact of a breach?
- Regulatory consequences (GDPR, PCI-DSS, HIPAA fines)
- Reputational damage

**Mitigation Difficulty:**
- Is a patch available?
- Can it be mitigated with WAF rules or configuration changes?
- Does fixing it require architectural changes?

### Prioritization Framework

| Priority | Criteria | Action Timeline |
|----------|----------|-----------------|
| **P1 — Critical** | CVSS 9.0-10.0, actively exploited, internet-facing, sensitive data | Fix within 24-48 hours |
| **P2 — High** | CVSS 7.0-8.9, exploit available, production system | Fix within 1 week |
| **P3 — Medium** | CVSS 4.0-6.9, no known exploit, some compensating controls | Fix within 30 days |
| **P4 — Low** | CVSS 0.1-3.9, minimal impact, difficult to exploit | Fix in next maintenance window |

---

## 5.3 Security Test Reporting

### Report Components

**1. Executive Summary:**
- Overall risk posture
- Number of findings by severity
- High-level recommendations
- Remediation timeline

**2. Technical Findings:**
- Detailed vulnerability descriptions
- Evidence (screenshots, request/response pairs, code snippets)
- CVSS scores
- Affected components and versions
- Proof of concept (if appropriate)

**3. Risk Assessment:**
- Business impact of each finding
- Likelihood of exploitation
- Combined risk rating

**4. Remediation Guidance:**
- Specific steps to fix each vulnerability
- Alternative mitigations if immediate patching isn't possible
- Verification steps to confirm the fix

**5. Appendices:**
- Testing methodology
- Scope and limitations
- Tools used
- Glossary

### Effective Report Writing

**Be specific:**
- Bad: "The application has XSS."
- Good: "The search parameter on /search?q= is vulnerable to reflected XSS. The payload `<script>alert(1)</script>` executes in the victim's browser when they click a crafted link."

**Include evidence:**
- HTTP request/response showing the vulnerability
- Screenshot of exploitation
- Code snippet showing the vulnerable line

**Prioritize clearly:**
- Lead with critical findings
- Group findings by severity
- Include a risk matrix

**Provide actionable remediation:**
- "Use parameterized queries instead of string concatenation"
- "Implement output encoding with a library like OWASP Java Encoder"
- "Add Content-Security-Policy header: default-src 'self'"

---

## 5.4 Remediation and Verification

### Remediation Process

```
1. Triage findings (validate, prioritize)
2. Assign owners (development, infrastructure, security)
3. Plan fixes (patches, code changes, configuration)
4. Implement fixes
5. Verify fixes (retest)
6. Document (what was fixed, when, by whom)
```

### Verification Testing

**Purpose:** Confirm that vulnerabilities have been fixed and no new issues were introduced.

**Approach:**
1. Re-run the original test case that found the vulnerability
2. Confirm the vulnerability is no longer exploitable
3. Test edge cases (variants of the original attack)
4. Regression test related functionality
5. Re-run automated scans (SAST/DAST) to ensure no new findings

**Example:**
```
Original finding: SQL injection in login form
Fix: Parameterized queries implemented
Verification:
  - Re-run SQL injection payloads → no error, no data exposure
  - Test valid login still works
  - Test edge cases (Unicode, long inputs, special characters)
  - Re-run DAST scan → no SQL injection findings
  - Result: VERIFIED FIXED
```

---

## 5.5 False Positives and False Negatives

### False Positive

**Definition:** A test result that incorrectly indicates a vulnerability exists when it does not.

**Causes:**
- SAST tool flags patterns that look like SQL injection but are actually parameterized
- DAST reports a vulnerability on a third-party component that is not actually exploitable
- Test environment differs from production

**Handling:**
- Verify manually before dismissing
- Document the reason for dismissal
- Tune tools to reduce future false positives
- Maintain a whitelist of accepted findings

### False Negative

**Definition:** A failure to detect a vulnerability that actually exists.

**Causes:**
- Testing didn't cover the vulnerable component
- Test cases were insufficient (missed attack variant)
- Tool limitations (business logic flaws, race conditions)
- Testing in the wrong environment (test data vs. production configuration)

**Handling:**
- Use multiple testing techniques (SAST + DAST + manual)
- Regularly update test cases based on new threats
- Perform adversarial testing (red team exercises)
- Review test coverage and expand as needed

**Comparison:**

| Aspect | False Positive | False Negative |
|--------|---------------|----------------|
| Impact | Wasted time, alert fatigue | Missed vulnerability, breach risk |
| Detection | Known (reported) | Unknown (silent) |
| Cost | Investigation effort | Potentially catastrophic |
| Mitigation | Better tuning, manual verification | Multiple techniques, coverage analysis |

---

## Worked Examples

### Worked Example 1: CVSS Comparison

**Two vulnerabilities in the same application:**

**Vulnerability A: Reflected XSS in search (no auth required)**
- AV: Network, AC: Low, PR: None, UI: Required
- Scope: Unchanged, C: Low, I: Low, A: None
- **CVSS: 4.3 (Medium)**

**Vulnerability B: SQL injection in admin panel (auth required)**
- AV: Network, AC: Low, PR: High, UI: None
- Scope: Changed, C: High, I: High, A: High
- **CVSS: 7.2 (High)**

**Prioritization discussion:**
- B has higher CVSS but requires admin privileges
- A is lower CVSS but easier to exploit (no auth, just trick user to click link)
- If admin accounts are few and well-protected, B may be acceptable medium-term
- If the application has many public users, A could be used for phishing campaigns
- **Decision:** Fix B first (higher impact if exploited), but don't ignore A

### Worked Example 2: Remediation Plan

**Penetration test findings:**

| ID | Finding | CVSS | Priority | Remediation | Owner | Timeline |
|----|---------|------|----------|-------------|-------|----------|
| SEC-001 | SQL injection in login | 9.8 | P1 | Parameterize all queries | Backend team | 2 days |
| SEC-002 | Weak password policy | 7.5 | P2 | Enforce 12+ chars, complexity | Auth team | 1 week |
| SEC-003 | Missing CSP header | 4.3 | P3 | Add Content-Security-Policy | Frontend team | 2 weeks |
| SEC-004 | Verbose error messages | 3.7 | P3 | Custom error pages | Backend team | 2 weeks |
| SEC-005 | Self-XSS in profile | 2.3 | P4 | Input validation + output encoding | Frontend team | Next sprint |

**Verification plan:**
- SEC-001: Re-run SQL injection payloads; verify no database errors; confirm login works
- SEC-002: Attempt weak passwords → rejected; confirm existing users can still log in
- SEC-003: Verify CSP header present; test that inline scripts are blocked
- SEC-004: Trigger errors → verify generic messages; no stack traces
- SEC-005: Inject script in profile → verify encoding; no script execution

### Worked Example 3: False Positive Analysis

**Scenario:** SAST tool reports 500 "SQL injection" findings.

**Analysis:**

| Finding | Code | Analysis | Result |
|---------|------|----------|--------|
| F-001 | `query = "SELECT * FROM users WHERE id = " + userId` | String concatenation in SQL = real vulnerability | TRUE POSITIVE |
| F-002 | `query = "SELECT * FROM users WHERE id = ?"; stmt.setInt(1, userId)` | Parameterized query = false positive | FALSE POSITIVE |
| F-003 | `logger.info("User query: " + userInput)` | Log message, not SQL = false positive | FALSE POSITIVE |
| F-004 | `query = String.format("SELECT * FROM %s", tableName)` | Table name concatenation (no user input) = low risk | LOW PRIORITY |
| F-005 | `query = "SELECT * FROM users WHERE name = '" + sanitize(name) + "'"` | Custom sanitize function = verify if effective | NEEDS REVIEW |

**Action:**
- Fix F-001 immediately
- Document F-002, F-003 as false positives with justification
- Review F-005's sanitize function for completeness
- Configure SAST to ignore safe patterns (logging, parameterized queries)
