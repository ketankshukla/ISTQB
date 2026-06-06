# Chapter 5 — Regulation Acceptance Testing (RAT): Lessons

---

## 5.1 Regulation Acceptance Testing Overview

### What is RAT?

**Regulation Acceptance Testing (RAT)** is acceptance testing performed to verify compliance with laws, regulations, standards, and internal policies.

**Why RAT matters:**
- Legal liability for non-compliance
- Fines and penalties (GDPR: up to 4% global revenue)
- Loss of certifications or licenses
- Reputational damage
- Contractual obligations

### Types of Regulatory Requirements

**Legal requirements:**
- Data protection (GDPR, CCPA, PIPEDA)
- Accessibility (ADA, EN 301 549)
- Financial regulations (SOX, Basel III)
- Healthcare (HIPAA, FDA)
- Industry-specific (aviation DO-178C, automotive ISO 26262)

**Standards:**
- ISO/IEC 25010 (Software quality)
- ISO 9001 (Quality management)
- ISO 27001 (Information security)
- WCAG 2.1 (Web accessibility)
- PCI-DSS (Payment card security)

---

## 5.2 Compliance Testing Approaches

### Compliance Test Design

**1. Identify applicable regulations:**
- Industry analysis (healthcare, finance, retail)
- Geographic analysis (EU GDPR, US state laws)
- Customer requirements (government contracts)

**2. Map requirements to tests:**
```
GDPR Article 17 (Right to erasure)
  → Test: User can request account deletion
  → Test: All personal data is removed within 30 days
  → Test: Data is removed from backups (or documented retention)
  → Test: User receives confirmation of deletion
```

**3. Define compliance criteria:**
- Pass/fail thresholds
- Evidence requirements
- Audit trail requirements

### Compliance Testing Types

| Type | Description | Example |
|------|-------------|---------|
| **Functional compliance** | System functions meet regulatory requirements | User can export their data (GDPR portability) |
| **Technical compliance** | Architecture and design meet standards | Encryption at rest for PCI-DSS |
| **Process compliance** | Development and operational processes meet requirements | Change management audit trail for SOX |
| **Documentation compliance** | Required documentation is complete and accurate | Privacy policy available and up-to-date |

---

## 5.3 Accessibility Acceptance Testing

### WCAG 2.1 Principles (POUR)

**Perceivable:**
- Text alternatives for images
- Captions/transcripts for video
- Sufficient color contrast
- Resizable text up to 200%

**Operable:**
- Keyboard accessible
- No time limits (or adjustable)
- No seizures/flashing content
- Navigable with assistive technology

**Understandable:**
- Readable text
- Predictable behavior
- Input error identification and correction

**Robust:**
- Compatible with assistive technology
- Valid HTML/markup

### Accessibility Testing Techniques

**Automated scanning:**
- axe DevTools
- WAVE
- Lighthouse accessibility audit

**Manual testing:**
- Keyboard-only navigation
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Color contrast checking
- Zoom testing (200%)
- Focus indicator visibility

**User testing:**
- Testing with users who have disabilities
- Task completion with assistive technology

### Accessibility Acceptance Criteria Example

```
- All images have descriptive alt text (WCAG 1.1.1)
- All form fields have associated labels (WCAG 1.3.1)
- Color is not the only means of conveying information (WCAG 1.4.1)
- Text contrast ratio is at least 4.5:1 (WCAG 1.4.3)
- All functionality is accessible via keyboard (WCAG 2.1.1)
- Focus indicator is visible (WCAG 2.4.7)
- Error messages are clear and suggest corrections (WCAG 3.3.1, 3.3.3)
```

---

## 5.4 Data Protection Acceptance Testing

### GDPR Compliance Testing

**Key GDPR requirements and tests:**

| Requirement | Test |
|-------------|------|
| Lawful basis for processing | Verify consent mechanisms or other legal basis documented |
| Data minimization | Verify only necessary data is collected |
| Purpose limitation | Verify data is not used for unrelated purposes |
| Right to access | Test user can request and receive their data |
| Right to rectification | Test user can correct inaccurate data |
| Right to erasure | Test user can request deletion |
| Right to portability | Test user can export data in machine-readable format |
| Data breach notification | Verify 72-hour notification process tested |
| Privacy by design | Verify privacy features built in, not added on |
| Data Protection Impact Assessment | Verify DPIA completed for high-risk processing |

### PCI-DSS Acceptance Testing

**For systems handling payment card data:**

| Requirement | Test |
|-------------|------|
| Firewall configuration | Verify network segmentation |
| Default passwords changed | Scan for default credentials |
| Stored card data encrypted | Verify PAN encryption at rest |
| Transmission encryption | Verify TLS for all card data transmission |
| Anti-virus | Verify endpoint protection |
| Secure development | Verify patch management and code review |
| Restrict access | Verify least privilege and need-to-know |
| Unique user IDs | Verify no shared accounts |
| Physical access restricted | Verify data center controls |
| Logging and monitoring | Verify audit trail for all card data access |
| Regular security testing | Verify vulnerability scans and penetration tests |
| Security policy | Verify policy documented and followed |

---

## 5.5 Audit and Certification

### Types of Audits

**Internal audit:**
- Conducted by organization's own audit team
- Prepares for external audits
- Identifies gaps before formal assessment

**External audit:**
- Conducted by independent third party
- Required for certifications
- Provides objective assessment

**Certification audit:**
- Assesses compliance against specific standard
- Results in certificate (e.g., ISO 27001)
- Typically annual surveillance audits

### Audit Evidence

**Evidence types for acceptance:**
- Test results and reports
- System configuration documentation
- Access control matrices
- Training records
- Policy and procedure documents
- Incident logs
- Change management records

### Certification Process

```
1. Gap analysis (current state vs. standard requirements)
2. Remediation (address gaps)
3. Internal audit (verify readiness)
4. Stage 1 audit (documentation review by external auditor)
5. Stage 2 audit (on-site assessment by external auditor)
6. Certification decision
7. Surveillance audits (ongoing compliance)
```

---

## Worked Examples

### Worked Example 1: GDPR Acceptance Test Plan

**System:** Customer loyalty platform

| GDPR Article | Requirement | Test | Pass Criteria |
|--------------|-------------|------|---------------|
| 13 | Privacy notice at collection | Verify notice displayed during registration | Notice present, clear, includes all required elements |
| 15 | Right of access | User requests their data via web form | Data provided within 30 days in structured format |
| 16 | Right to rectification | User updates email address | Update reflected within 24 hours |
| 17 | Right to erasure | User requests account deletion | Account and all personal data removed within 30 days |
| 18 | Right to restriction | User objects to marketing processing | Marketing stopped immediately |
| 20 | Data portability | User requests data export | JSON export provided within 30 days |
| 25 | Privacy by design | Review system design | Data collection minimized, defaults are privacy-protective |
| 32 | Security | Security assessment | Encryption, access controls, audit logging in place |
| 33 | Breach notification | Simulate data breach | Notification to DPA within 72 hours, users within 72 hours |

### Worked Example 2: WCAG 2.1 AA Compliance Test

**System:** Government services website

| WCAG Criterion | Test | Tool/Method | Result |
|----------------|------|-------------|--------|
| 1.1.1 Non-text content | Alt text for all images | axe scan | 12 images missing alt text → FAIL |
| 1.4.3 Contrast | Text contrast ≥ 4.5:1 | Lighthouse | 3 elements fail → FAIL |
| 2.1.1 Keyboard | All functions work with keyboard | Manual test | PASS |
| 2.4.3 Focus order | Tab order is logical | Manual test | PASS |
| 3.3.1 Error identification | Errors identified in text | Manual test | PASS |
| 4.1.2 Name, role, value | ARIA attributes correct | axe scan | 2 buttons missing labels → FAIL |

**Remedial actions:**
- Add alt text to 12 images
- Adjust colors for 3 failing elements
- Add aria-label to 2 buttons

**Re-test:** All criteria PASS → Accessibility acceptance achieved.

### Worked Example 3: Industry Regulation Scenario

**System:** Medical device software (IEC 62304)

**Regulatory requirements:**
- Software lifecycle process (IEC 62304 Class C — high risk)
- Risk management (ISO 14971)
- Usability (IEC 62366)
- Clinical evaluation

**Acceptance testing:**

| Area | Test | Evidence |
|------|------|----------|
| Requirements traceability | All requirements traced to tests and risks | Traceability matrix |
| Risk control | All identified risks have controls verified | Risk management file |
| Software verification | Unit, integration, system tests passed | Test reports |
| Usability validation | Usability testing with intended users | Usability test report |
| Clinical validation | Clinical evidence supports safety and effectiveness | Clinical evaluation report |
| Labeling | Instructions for use are accurate and complete | Labeling review |
| Cybersecurity | Security risk assessment and testing | Security report |

**Result:** All regulatory acceptance criteria met. Submission to regulatory authority (FDA/EU Notified Body) can proceed.
