# Chapter 4 — Security Test Automation: Practice Questions

---

### Q1 (STE-4.1, K2)

Shift-left security means:

A. Only testing before release
B. Integrating security testing early in the SDLC
C. Only testing in production
D. Only manual testing

---

### Q2 (STE-4.2, K2)

SCA should run:

A. Only yearly
B. On every commit or dependency change
C. Only before release
D. Only manually

---

### Q3 (STE-4.3, K2)

Security-as-code means:

A. Only manual security checks
B. Storing security policies, tests, and configurations as versioned code
C. Only documentation
D. Only training

---

### Q4 (STE-4.4, K2)

False positives in security tools should be:

A. Ignored
B. Systematically triaged, documented, and suppressed with justification
C. Only reported to management
D. Only deleted

---

### Q5 (STE-4.1, K2)

A CI pipeline should block on:

A. Every minor finding
B. Critical and high-severity security findings
C. Only informational findings
D. No findings ever

---

### Q6 (STE-4.2, K2)

DAST in CI/CD is typically run:

A. On every commit
B. Against staging or test environments on a schedule
C. Only in production
D. Only manually

---

### Q7 (STE-4.3, K2)

Policy as code is implemented with tools like:

A. Only spreadsheets
B. Open Policy Agent (OPA) for access control rules
C. Only email notifications
D. Only whiteboards

---

### Q8 (STE-4.4, K2)

Alert fatigue occurs when:

A. Tools produce too few alerts
B. Excessive false positives cause teams to ignore real issues
C. Only critical alerts exist
D. Only automated tools are used

---

### Q9 (STE-4.1, K2)

Security regression tests verify:

A. Only new features
B. That previously fixed vulnerabilities don't recur
C. Only performance
D. Only usability

---

### Q10 (STE-4.2, K2)

Incremental SAST scanning:

A. Scans entire codebase every time
B. Scans only changed files for faster feedback
C. Only runs weekly
D. Only runs manually

---

### Q11 (STE-4.3, K2)

Compliance as code tools include:

A. Only manual checklists
B. Chef InSpec and OpenSCAP
C. Only spreadsheets
D. Only email

---

### Q12 (STE-4.4, K2)

Baseline comparison in vulnerability scanning:

A. Compares all findings to zero
B. Tracks new findings vs previously accepted risks
C. Only counts total findings
D. Only measures scan time

---

### Q13 (STE-4.1, K2)

Quality gates for security in CI/CD should:

A. Always pass
B. Enforce minimum security standards without blocking all development
C. Only apply to production
D. Only apply to manual testing

---

### Q14 (STE-4.2, K2)

Container scanning should occur:

A. Only after deployment
B. When container images are built
C. Only weekly
D. Only manually

---

### Q15 (STE-4.3, K2)

Infrastructure as code scanning checks for:

A. Only application bugs
B. Misconfigurations in cloud and infrastructure definitions
C. Only UI issues
D. Only database queries

---

### Q16 (STE-4.4, K2)

Suppression of false positives should include:

A. Only the finding ID
B. Documentation of why it is a false positive and who approved suppression
C. Only the developer's name
D. Only the date

---

### Q17 (STE-4.1, K2)

Security monitoring in production:

A. Is unnecessary if testing was thorough
B. Detects attacks and anomalies that testing may miss
C. Only for performance
D. Only for compliance

---

### Q18 (STE-4.2, K2)

Automated secret scanning checks for:

A. Only comments
B. API keys, passwords, and tokens in source code
C. Only variable names
D. Only test files

---

### Q19 (STE-4.3, K2)

Version control for security policies enables:

A. Only storage
B. Audit trail, rollback, and collaboration
C. Only faster execution
D. Only manual review

---

### Q20 (STE-4.4, K2)

Severity-based gates balance:

A. Perfect security and no releases
B. Security and development velocity
C. Only cost and time
D. Only tools and training

---

## Answers and Rationales

### Q1
**Answer: B**
**Rationale:** Shift-left = early integration.

### Q2
**Answer: B**
**Rationale:** SCA = every commit/dependency change.

### Q3
**Answer: B**
**Rationale:** Security-as-code = versioned policies/tests.

### Q4
**Answer: B**
**Rationale:** False positives = triage + suppress + justify.

### Q5
**Answer: B**
**Rationale:** Block = critical/high only.

### Q6
**Answer: B**
**Rationale:** DAST = staging/schedule.

### Q7
**Answer: B**
**Rationale:** Policy as code = OPA.

### Q8
**Answer: B**
**Rationale:** Fatigue = too many false positives → ignore real issues.

### Q9
**Answer: B**
**Rationale:** Regression = fixed issues don't recur.

### Q10
**Answer: B**
**Rationale:** Incremental = changed files only.

### Q11
**Answer: B**
**Rationale:** Compliance as code = InSpec, OpenSCAP.

### Q12
**Answer: B**
**Rationale:** Baseline = new vs accepted.

### Q13
**Answer: B**
**Rationale:** Gates = enforce standards without blocking all.

### Q14
**Answer: B**
**Rationale:** Container scan = at build time.

### Q15
**Answer: B**
**Rationale:** IaC scan = misconfigurations.

### Q16
**Answer: B**
**Rationale:** Suppression = why + who approved.

### Q17
**Answer: B**
**Rationale:** Monitoring = detect missed issues.

### Q18
**Answer: B**
**Rationale:** Secret scan = keys, passwords, tokens.

### Q19
**Answer: B**
**Rationale:** Version control = audit + rollback + collab.

### Q20
**Answer: B**
**Rationale:** Severity gates = security + velocity.
