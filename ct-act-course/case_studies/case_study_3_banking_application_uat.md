# 📂 Case Study 3 — Banking Application UAT

## ⭐ Context

You are the UAT Manager for SecureBank, rolling out a new digital banking platform. The project involves replacing the legacy online banking with a modern responsive web application and native mobile apps.

**Business Context:**
- 2 million retail customers
- 500,000 business customers
- Must comply with banking regulations and PCI-DSS
- Integration with core banking system, payment networks, and fraud detection

**Key Features:**
- Account dashboard and transaction history
- Transfers between accounts and to external accounts
- Bill pay and scheduled payments
- Mobile check deposit
- Budgeting tools and spending insights
- Secure messaging with bank
- Card management (report lost, freeze, replace)

---

## 🗓️ Task 1: UAT Planning and Stakeholder Management

**Question:** Plan UAT for the digital banking platform.

**Model Answer:**

**UAT Participants:**

| Role | Number | Responsibilities |
|------|--------|-----------------|
| Retail customers | 50 | Validate daily banking workflows |
| Business customers | 20 | Validate business features (ACH, wire, multi-user) |
| Branch staff | 15 | Validate customer service workflows |
| Call center reps | 10 | Validate support procedures |
| Compliance officer | 1 | Validate regulatory requirements |
| Security officer | 1 | Validate security controls |

**UAT Phases:**

| Phase | Duration | Focus | Environment |
|-------|----------|-------|-------------|
| Phase 1: Core banking | Week 1-2 | Account access, transactions, transfers | UAT (synthetic data) |
| Phase 2: Advanced features | Week 3-4 | Bill pay, mobile deposit, budgeting | UAT (synthetic data) |
| Phase 3: Business banking | Week 5-6 | Multi-user, ACH, wire, approvals | UAT (synthetic data) |
| Phase 4: Pilot | Week 7-8 | 1,000 real customers, limited transactions | Production (pilot group) |

**Entry Criteria:**
- System test pass rate ≥ 98%
- Performance test passed (2,000 concurrent users, P95 < 3s)
- Security penetration test passed
- All critical and high defects resolved
- UAT environment stable for 1 week
- Training completed for all UAT participants

---

## 🗃️ Task 2: Test Data and Environment

**Question:** Design the UAT data strategy.

**Model Answer:**

**Data Requirements:**

| Data Type | Volume | Source | Anonymization |
|-----------|--------|--------|---------------|
| Customer profiles | 5,000 | Production subset | Names scrambled, SSN masked, addresses fictionalized |
| Account data | 10,000 accounts | Generated | Realistic balances and account types |
| Transaction history | 500,000 transactions | Production subset | Merchant names anonymized, amounts slightly randomized |
| Payment beneficiaries | 2,000 | Generated | Fictional payees |
| Bill payees | 1,000 | Generated | Fictional companies |

**Data Integrity Rules:**
- Account balances match transaction history
- Customer-to-account relationships preserved
- Joint account holders correctly linked
- Business user permissions match role matrix

**Environment Configuration:**

| Component | Production | UAT |
|-----------|------------|-----|
| Web servers | 10 | 2 |
| App servers | 20 | 4 |
| Database | Active-active cluster | Single instance (data masked) |
| Payment gateway | Live | Virtualized (no real transactions) |
| Fraud detection | Live | Virtualized (predefined responses) |
| SMS provider | Live | Virtualized (logs only) |
| Email provider | Live | Test mailbox (no real emails) |

---

## 🐞 Task 3: Test Execution and Defect Management

**Question:** Execute UAT for the transfer feature and manage findings.

**Model Answer:**

**Transfer Feature Test Cases:**

| Test ID | Scenario | Steps | Expected Result | Priority |
|---------|----------|-------|-----------------|----------|
| UAT-TF-001 | Internal transfer between own accounts | Select accounts, enter $100, confirm | Immediate transfer, balances updated, confirmation shown | High |
| UAT-TF-002 | External transfer to saved beneficiary | Select beneficiary, enter $500, confirm | Transfer initiated, reference number provided | High |
| UAT-TF-003 | External transfer to new payee | Enter new account details, verify with OTP, confirm | New payee saved, transfer initiated | High |
| UAT-TF-004 | Transfer exceeding daily limit | Enter $15,000 (limit $10,000) | Error: "Exceeds daily limit of $10,000" | High |
| UAT-TF-005 | Transfer to invalid account | Enter invalid routing number | Error: "Invalid account details" | High |
| UAT-TF-006 | Scheduled future transfer | Set transfer for next Monday | Transfer queued, reminder shown | Medium |
| UAT-TF-007 | Recurring transfer setup | Weekly $100 to savings | Recurring transfer created, first execution scheduled | Medium |
| UAT-TF-008 | Transfer cancellation | Cancel pending transfer | Transfer canceled, funds returned | Medium |

**Defects Found:**

| ID | Description | Severity | Business Impact | Resolution |
|----|-------------|----------|----------------|------------|
| DEF-201 | External transfer confirmation doesn't show fee | Medium | Customer surprise at fees | Add fee disclosure to confirmation screen |
| DEF-202 | Scheduled transfer date picker allows past dates | High | Failed transfers, customer frustration | Disable past dates in date picker |
| DEF-203 | Transfer to international account not blocked for retail users | Critical | Regulatory violation | Add block with message "Contact branch for international transfers" |
| DEF-204 | Recurring transfer can't be edited, only canceled | Medium | Poor user experience | Add edit functionality post-launch |

**Go/No-Go Impact:**
- DEF-203 must be fixed before launch (regulatory)
- DEF-202 must be fixed before launch (functional failure)
- DEF-201 should be fixed before launch (customer experience)
- DEF-204 can be addressed in first patch (workaround exists: cancel and recreate)

---

## ⭐ Task 4: Business Sign-off

**Question:** Prepare the business sign-off package and make the go-live recommendation.

**Model Answer:**

**Test Summary:**

| Metric | Target | Actual |
|--------|--------|--------|
| Test cases executed | 100% | 100% (450/450) |
| Pass rate | ≥ 95% | 96.9% (436/450) |
| Critical defects | 0 | 0 |
| High defects open | ≤ 3 | 1 (DEF-204 — has workaround) |
| Medium defects open | ≤ 10 | 4 |
| Low defects open | ≤ 20 | 8 |

**Performance Results:**
- Login: P95 = 1.2 seconds (target < 3s)
- Dashboard load: P95 = 2.1 seconds (target < 3s)
- Transfer submission: P95 = 1.8 seconds (target < 3s)
- Peak load test: 3,000 concurrent users, no errors

**Security Results:**
- Penetration test: No critical findings, 3 medium findings addressed
- PCI-DSS: All requirements met
- OWASP Top 10: No high-risk findings

**Regulatory Results:**
- GDPR compliance: All data subject rights implemented and tested
- Accessibility: WCAG 2.1 AA (1 minor issue to fix in first patch)

**Risk Assessment:**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Performance under 2M users | Low | High | Auto-scaling configured, monitoring in place |
| Mobile app store rejection | Low | Medium | Pre-submitted to Apple and Google, minor feedback incorporated |
| Customer confusion with new UI | Medium | Medium | Tutorial videos, contextual help, FAQ updated |
| Integration failure with core banking | Low | Critical | Rollback plan tested, circuit breakers configured |

**Recommendation:** GO-LIVE with phased rollout

**Phased Rollout Plan:**

| Phase | Audience | Criteria for Next Phase |
|-------|----------|------------------------|
| Week 1: Internal staff only | 500 employees | No critical issues, performance stable |
| Week 2: Young customers (18-35) | 50,000 customers | Support ticket volume < 5% of logins, satisfaction ≥ 4.0/5 |
| Week 3: All retail customers | 2M customers | Error rate < 0.1%, no critical production defects |
| Week 4: Business customers | 500K customers | Retail metrics stable for 1 week |

**Rollback Triggers:**
- Login failure rate > 1%
- Transfer failure rate > 0.5%
- Customer complaints > 10x normal volume
- Security incident

**Sign-off Obtained From:**
- [ ] Head of Digital Banking
- [ ] Chief Risk Officer
- [ ] Chief Information Security Officer
- [ ] Compliance Officer
- [ ] Head of Customer Service

**Known Issues at Launch:**
- DEF-204: Recurring transfer edit (workaround: cancel and recreate)
- Minor accessibility issue: Focus indicator on card management page
- Budget tool doesn't categorize international transactions (will be addressed in Q2)

**First Patch Scheduled:** 2 weeks post-launch
