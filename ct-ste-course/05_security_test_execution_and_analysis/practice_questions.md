# ❓ Chapter 5 — Security Test Execution and Analysis: Practice Questions

---

### 🔷 Q1 (STE-5.1, K2)

Security testing in production should:

A. Be done without notice
B. Generally be avoided; use isolated environments with authorization
C. Only during off-hours
D. Only by external testers

---

### 🔷 Q2 (STE-5.2, K2)

CVSS provides:

A. Business impact assessment
B. Technical severity scoring
C. Only cost estimates
D. Only time estimates

---

### 🔷 Q3 (STE-5.3, K2)

A security finding report should include:

A. Only the vulnerability name
B. Description, evidence, impact, reproduction steps, and remediation
C. Only screenshots
D. Only tool output

---

### 🔷 Q4 (STE-5.4, K2)

Remediation verification should be done by:

A. Only the developer who fixed it
B. Independent retest by the security team
C. Only management review
D. Only automated tools

---

### 🔷 Q5 (STE-5.1, K2)

Rules of engagement for penetration testing define:

A. Only the tools to use
B. Authorized scope, hours, and escalation procedures
C. Only the report format
D. Only payment terms

---

### 🔷 Q6 (STE-5.2, K2)

Business context affects vulnerability prioritization because:

A. CVSS is always wrong
B. The same CVSS may have different business impacts
C. Only for compliance
D. Only for financial systems

---

### 🔷 Q7 (STE-5.3, K2)

Executive summaries in security reports focus on:

A. Technical exploit details
B. High-level risks and recommendations
C. Only code snippets
D. Only tool configurations

---

### 🔷 Q8 (STE-5.4, K2)

A partial fix of a vulnerability:

A. Is sufficient if the main attack path is blocked
B. May leave other attack vectors open; full root cause analysis is needed
C. Only delays testing
D. Only saves time

---

### 🔷 Q9 (STE-5.1, K2)

Test environment isolation means:

A. Sharing production data
B. Separate from production with no shared sensitive data
C. Only using different servers
D. Only different usernames

---

### 🔷 Q10 (STE-5.2, K2)

Validation of a reported vulnerability involves:

A. Only trusting the tool
B. Manually reproducing the issue to confirm it is real
C. Only reading the code
D. Only checking the CVSS

---

### 🔷 Q11 (STE-5.3, K2)

Developer-focused security reports should include:

A. Only executive summary
B. Technical details, reproduction steps, and code-level fixes
C. Only risk ratings
D. Only compliance mappings

---

### 🔷 Q12 (STE-5.4, K2)

Regression testing after a security fix verifies:

A. Only the fixed feature works
B. The fix works and no new issues were introduced
C. Only performance
D. Only usability

---

### 🔷 Q13 (STE-5.1, K2)

Emergency testing after a zero-day disclosure should:

A. Only wait for vendor patch
B. Assess exposure, test impact, and apply mitigations quickly
C. Only inform customers
D. Only document the issue

---

### 🔷 Q14 (STE-5.2, K2)

A vulnerability on a public-facing payment system vs an internal wiki:

A. Should have the same priority
B. Payment system likely has higher business priority despite possible same CVSS
C. Only internal systems matter
D. Only public systems matter

---

### 🔷 Q15 (STE-5.3, K2)

Security report findings should be:

A. Vague to avoid blame
B. Specific, actionable, and evidence-based
C. Only for auditors
D. Only for developers

---

### 🔷 Q16 (STE-5.4, K2)

Reintroduction of a fixed vulnerability occurs when:

A. The fix is tested
B. The same code pattern is reintroduced in a later release
C. Only by accident
D. Only in new features

---

### 🔷 Q17 (STE-5.1, K2)

DoS testing should:

A. Be done anytime
B. Be scheduled during low-impact windows with explicit authorization
C. Only in production
D. Only manually

---

### 🔷 Q18 (STE-5.2, K2)

False negatives in security testing:

A. Are acceptable
B. Are dangerous because real vulnerabilities are missed
C. Only affect reporting
D. Only affect compliance

---

### 🔷 Q19 (STE-5.3, K2)

Compliance-focused reports should map findings to:

A. Only technical details
B. Control requirements and regulatory standards
C. Only developer names
D. Only timelines

---

### 🔷 Q20 (STE-5.4, K2)

Verification that a fix doesn't introduce new issues is:

A. Unnecessary
B. Essential — regression testing after security fixes
C. Only for large changes
D. Only for critical systems

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**
**Rationale:** Production = generally avoid; isolated + authorized.

### 🔷 Q2
**Answer: B**
**Rationale:** CVSS = technical severity.

### 🔷 Q3
**Answer: B**
**Rationale:** Report = description + evidence + impact + repro + remediation.

### 🔷 Q4
**Answer: B**
**Rationale:** Verification = independent retest.

### 🔷 Q5
**Answer: B**
**Rationale:** Rules = scope + hours + escalation.

### 🔷 Q6
**Answer: B**
**Rationale:** Same CVSS, different business impact.

### 🔷 Q7
**Answer: B**
**Rationale:** Executive = high-level risks.

### 🔷 Q8
**Answer: B**
**Rationale:** Partial = may leave other vectors.

### 🔷 Q9
**Answer: B**
**Rationale:** Isolation = separate + no shared data.

### 🔷 Q10
**Answer: B**
**Rationale:** Validation = manual reproduction.

### 🔷 Q11
**Answer: B**
**Rationale:** Developer report = technical + repro + fix.

### 🔷 Q12
**Answer: B**
**Rationale:** Regression = fix works + no new issues.

### 🔷 Q13
**Answer: B**
**Rationale:** Zero-day = assess + test + mitigate quickly.

### 🔷 Q14
**Answer: B**
**Rationale:** Payment = higher priority.

### 🔷 Q15
**Answer: B**
**Rationale:** Findings = specific + actionable + evidence.

### 🔷 Q16
**Answer: B**
**Rationale:** Reintroduction = same pattern in later release.

### 🔷 Q17
**Answer: B**
**Rationale:** DoS = low-impact window + authorized.

### 🔷 Q18
**Answer: B**
**Rationale:** False negatives = real vulns missed.

### 🔷 Q19
**Answer: B**
**Rationale:** Compliance report = map to controls.

### 🔷 Q20
**Answer: B**
**Rationale:** No new issues = regression testing.
