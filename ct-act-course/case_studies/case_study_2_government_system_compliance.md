# 📂 Case Study 2 — Government System Compliance

## ⭐ Context

You are the Compliance Test Manager for GovServices, implementing a new citizen benefits portal for a government agency. The system handles sensitive citizen data and must comply with multiple regulations.

**System:**
- Citizens apply for benefits online
- Caseworkers review and approve/deny applications
- Payments are processed and tracked
- Reports generated for oversight and audit

**Regulatory Requirements:**
- Accessibility: WCAG 2.1 AA (government mandate)
- Data protection: National data protection act (similar to GDPR)
- Security: Government security standards
- Records management: 7-year retention, immutable audit trail
- Transparency: FOIA (Freedom of Information Act) requests supported

---

## 🗓️ Task 1: RAT Planning

**Question:** Create a regulation acceptance test plan for the benefits portal.

**Model Answer:**

**Regulatory Framework:**

| Regulation | Area | Acceptance Tests |
|------------|------|------------------|
| **WCAG 2.1 AA** | Accessibility | Automated scan + manual screen reader + keyboard-only testing |
| **Data Protection Act** | Privacy | Consent, access, rectification, erasure, portability tests |
| **Gov Security Standard** | Security | Penetration test, encryption, access controls, audit logging |
| **Records Management** | Retention | 7-year retention verification, immutable audit trail validation |
| **FOIA** | Transparency | Request processing, redaction, response within statutory timeframe |

**RAT Entry Criteria:**
- System testing complete
- Security assessment passed
- Privacy impact assessment approved
- Accessibility audit scheduled

**RAT Exit Criteria:**
- WCAG 2.1 AA compliance verified
- Data protection tests passed
- Security controls validated
- Audit trail integrity confirmed
- Legal/compliance officer sign-off

---

## ⭐ Task 2: Accessibility Testing

**Question:** Design accessibility acceptance tests for the benefits application form.

**Model Answer:**

**Automated Scan (axe/WAVE):**
```
- All images have alt text
- All form fields have associated labels
- Color contrast ≥ 4.5:1
- Heading structure is logical
- ARIA roles and labels correct
```

**Manual Screen Reader Tests (NVDA):**

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Form navigation | Tab through all form fields | Each field announced with label and purpose |
| Error announcement | Submit with empty required fields | Screen reader announces "Error: [field] is required" |
| Progress indication | Navigate multi-page form | Current step announced (e.g., "Step 2 of 5") |
| Dynamic content | Add dependent information | New fields announced and accessible |

**Keyboard-Only Tests:**

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Complete form | Navigate with Tab, activate with Enter/Space | All actions possible without mouse |
| Date picker | Open and select date with keyboard | Date selectable, focus returns to form |
| File upload | Select and upload document | Upload works, confirmation shown |
| Print | Trigger print with keyboard | Print dialog opens |

**User Testing:**
- 5 citizens with disabilities (visual, motor, cognitive)
- Task: Complete a benefits application independently
- Success metric: ≥ 80% task completion rate

---

## 🗃️ Task 3: Data Protection Testing

**Question:** Design tests for data protection compliance.

**Model Answer:**

**Consent Management:**

| Test | Action | Expected Result |
|------|--------|-----------------|
| Explicit consent | Citizen checks "I agree to data processing" | Consent recorded with timestamp |
| Granular consent | Citizen opts out of marketing but accepts service processing | Partial consent recorded |
| Consent withdrawal | Citizen clicks "Withdraw consent" in profile | Processing stopped, confirmation sent |
| Consent audit | Administrator views consent log | All consent actions auditable |

**Data Subject Rights:**

| Right | Test | Expected Result |
|-------|------|-----------------|
| **Access** | Citizen requests their data | Complete data export within 30 days |
| **Rectification** | Citizen updates address | Updated in 24 hours, history shows change |
| **Erasure** | Citizen requests account deletion | All personal data removed within 30 days |
| **Portability** | Citizen requests data export | JSON/CSV file provided with all personal data |
| **Objection** | Citizen objects to automated decision | Human review initiated, decision paused |

**Data Minimization:**

| Test | Expected Result |
|------|-----------------|
| Collect only required fields for application | No "optional" fields that aren't necessary |
| Review data retention | Data deleted after retention period (7 years for benefits, 1 year for failed applications) |
| Verify no unnecessary copies | No duplicate PII in logs, analytics, or reports |

---

## ⭐ Task 4: Audit and Certification

**Question:** Prepare evidence for the compliance audit.

**Model Answer:**

**Evidence Package:**

| Requirement | Evidence | Status |
|-------------|----------|--------|
| WCAG 2.1 AA | axe scan report, manual test results, user testing report | Pass with 2 minor issues to fix |
| Data protection | Consent log, rights request log, DPIA document | Pass |
| Security | Penetration test report, encryption validation, access control matrix | Pass |
| Records management | Retention policy, audit trail sample, archival test | Pass |
| FOIA | Request processing workflow, redaction tool test | Pass |

**Audit Findings and Responses:**

| Finding | Severity | Response | Timeline |
|---------|----------|----------|----------|
| 2 WCAG AA criteria not met (focus indicator on 3 pages) | Medium | Fix CSS and retest | 1 week |
| Consent withdrawal confirmation email lacks required legal text | Low | Update email template | 3 days |
| Audit log doesn't record failed login attempts | Medium | Add failed login logging | 1 week |

**Pre-Release Compliance Checklist:**

- [ ] All automated accessibility scans pass
- [ ] Manual accessibility tests completed
- [ ] Data protection tests passed
- [ ] Security assessment passed
- [ ] Audit trail integrity verified
- [ ] Retention policy implemented and tested
- [ ] FOIA workflow tested
- [ ] Legal/compliance officer sign-off obtained
- [ ] Accessibility statement published on website
- [ ] Privacy policy published and up-to-date

**Go/No-Go Decision:** GO with minor findings addressed within 1 week post-launch
