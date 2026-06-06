# Chapter 4 — Contract Acceptance Testing (CAT): Lessons

---

## 4.1 Contract Acceptance Testing Overview

### What is CAT?

**Contract Acceptance Testing (CAT)** is acceptance testing performed to verify that a system meets the contractual requirements between a supplier and customer.

**When is CAT needed?**
- Custom software development contracts
- System integration projects
- Outsourced development
- COTS (Commercial Off-The-Shelf) software procurement
- SaaS platform subscriptions
- Maintenance and support contracts

### Key Differences: CAT vs. BAT

| Aspect | CAT | BAT |
|--------|-----|-----|
| **Focus** | Contractual obligations | Business needs |
| **Criteria source** | Contract, SOW, SLAs | Business requirements, user stories |
| **Stakeholders** | Legal, procurement, supplier, customer | Business users, product owner |
| **Formality** | High (legal implications) | Moderate |
| **Remedies** | Contractual (penalties, termination) | Business (delay, rework) |

---

## 4.2 Contractual Acceptance Criteria

### Types of Contractual Criteria

**1. Functional Criteria:**
- System must implement specified features
- Compliance with functional requirements document
- Interface compatibility

**2. Performance Criteria:**
- Response times under specified load
- Throughput requirements
- Resource utilization limits
- Scalability thresholds

**3. Quality Criteria:**
- Defect density limits
- Reliability metrics (MTBF, MTTR)
- Security standards compliance
- Code quality metrics (coverage, complexity)

**4. Delivery Criteria:**
- Milestone completion dates
- Documentation completeness
- Training delivery
- Source code handover

### Contractual Acceptance Process

```
1. Review contract and Statement of Work (SOW)
2. Derive acceptance test plan from contractual requirements
3. Prepare test environment and data
4. Execute acceptance tests
5. Document results and deviations
6. Negotiate resolution for failures
7. Obtain formal sign-off or invoke remedies
```

---

## 4.3 SLAs and Performance Criteria

### Service Level Agreements (SLAs)

An SLA defines the level of service expected from a supplier.

**Common SLA metrics for acceptance:**

| Metric | Description | Example Target |
|--------|-------------|----------------|
| **Availability** | % of time system is operational | 99.9% uptime |
| **Response time** | Time to respond to requests | < 2 seconds for 95% of requests |
| **Resolution time** | Time to fix defects | Critical: 4 hours, High: 24 hours |
| **Support response** | Time to acknowledge support tickets | < 1 hour during business hours |
| **Capacity** | Maximum supported load | 10,000 concurrent users |

### Testing SLA Compliance

**Availability testing:**
- Monitor system over agreed measurement period (e.g., 30 days)
- Calculate uptime percentage
- Verify it meets SLA target

**Response time testing:**
- Load testing under specified conditions
- Measure response times at different percentiles (P50, P95, P99)
- Verify against SLA thresholds

**Example SLA test:**
```
Contract requires: "System response time < 3 seconds for 95% of transactions under 1000 concurrent users"

Test: Run 1000 concurrent users for 4 hours
Result: 97.2% of transactions completed in < 3 seconds
Status: PASS (exceeds 95% requirement)
```

---

## 4.4 Acceptance in Outsourcing

### Outsourcing Models

| Model | Description | Acceptance Approach |
|-------|-------------|---------------------|
| **Project-based** | Fixed scope, fixed price | CAT at project completion |
| **Time and materials** | Hourly billing | Continuous acceptance, milestone reviews |
| **Managed services** | Ongoing operation | Periodic SLA compliance audits |
| **Staff augmentation** | Contract developers | Integrated into customer's acceptance process |

### Acceptance Responsibilities

**Customer responsibilities:**
- Provide clear requirements and acceptance criteria
- Make timely acceptance decisions
- Provide access to test environments and data
- Report defects with sufficient detail

**Supplier responsibilities:**
- Deliver system meeting contractual requirements
- Provide test evidence and documentation
- Fix defects within agreed timeframes
- Support acceptance testing activities

### Common Outsourcing Acceptance Challenges

| Challenge | Mitigation |
|-----------|------------|
| Vague requirements | Detailed SOW with measurable acceptance criteria |
| Cultural/communication gaps | Regular video meetings, shared documentation |
| Time zone differences | Overlapping working hours, async communication tools |
| Quality issues | Clear quality gates, code review requirements |
| Scope creep | Change control process, impact analysis |

### Acceptance Gate in Outsourced Projects

```
Milestone 1: Requirements signed off
Milestone 2: Design review and approval
Milestone 3: Alpha delivery and internal testing
Milestone 4: Beta delivery and UAT
Milestone 5: Final delivery and acceptance
Payment: 20% at each milestone upon acceptance
```

---

## 4.5 Penalties and Incentives

### Contractual Remedies

**Penalties (for non-compliance):**
- Liquidated damages for late delivery
- SLA credits for missed availability targets
- Termination rights for repeated failures
- Cost of remedy borne by supplier

**Incentives (for exceeding requirements):**
- Bonus payments for early delivery
- Performance bonuses for exceeding SLA targets
- Preferred supplier status
- Contract extension options

**Example penalty clause:**
```
"For each week of delay beyond the agreed delivery date, 
the supplier shall pay liquidated damages of 0.5% of 
the contract value, up to a maximum of 5%."
```

**Example SLA credit:**
```
"If monthly availability falls below 99.9%, the customer 
receives a service credit of 10% of the monthly fee 
for each 0.1% below the target."
```

---

## Worked Examples

### Worked Example 1: CAT Test Plan

**Contract:** Custom CRM development, fixed price $500,000

**Contractual acceptance criteria:**

| Criterion | Test Approach | Pass Threshold |
|-----------|-------------|----------------|
| All features in requirements doc implemented | Functional test of each requirement | 100% of required features |
| Response time < 2s for 95% of operations | Load test with 500 concurrent users | P95 < 2s |
| Zero critical defects | Defect classification and review | 0 critical, ≤ 3 high |
| Documentation delivered | Review of user guide, admin guide, API docs | Complete and accurate |
| Training delivered | Attendance and knowledge check | 100% of agreed attendees |
| Source code handed over | Code repository access and build verification | Build succeeds from delivered code |

**Test execution:**
- Week 1: Functional testing
- Week 2: Performance and security testing
- Week 3: Documentation review and training
- Week 4: Final evaluation and sign-off

### Worked Example 2: SLA Compliance Test

**SaaS contract SLA:**
- Availability: 99.95% monthly
- Support response: < 1 hour for P1, < 4 hours for P2
- Data backup: Daily with 24-hour RTO

**Test approach:**

| SLA | Test Method | Duration | Target |
|-----|-------------|----------|--------|
| Availability | Monitor uptime | 30 days | > 99.95% |
| Support response | Simulate P1 and P2 tickets | 10 tickets each | P1 < 1hr, P2 < 4hr |
| Backup recovery | Request restore from backup | 1 test | < 24 hours |

**Result:**
- Availability: 99.97% (PASS)
- Support P1: Average 45 minutes (PASS)
- Support P2: Average 3.2 hours (PASS)
- Backup recovery: 18 hours (PASS)

**Decision:** ACCEPT — all SLAs met.

### Worked Example 3: Outsourcing Acceptance Scenario

**Scenario:** A bank outsources mobile app development to an offshore vendor.

**Contract terms:**
- Fixed scope, milestone-based payments
- Acceptance at each milestone
- Code quality: SonarQube grade B+ or higher
- Security: OWASP Top 10 compliance
- Performance: App store review < 3 seconds

**Milestone 1 (Design) acceptance:**
- UI designs approved by bank's UX team
- Architecture document reviewed and approved
- Security architecture validated
- Payment: 20% released

**Milestone 2 (Alpha) acceptance:**
- Core features functional on test devices
- Unit test coverage > 80%
- SonarQube grade: B+
- Payment: 20% released

**Milestone 3 (Beta) acceptance:**
- All features implemented
- UAT by bank's mobile banking team
- Security penetration test passed
- Performance meets targets
- Payment: 30% released

**Milestone 4 (Final) acceptance:**
- App store submission ready
- All documentation complete
- Training for bank's support team delivered
- 30-day warranty period begins
- Payment: 30% released

**Defect found during Milestone 3:**
- Issue: Biometric login fails on certain Android devices
- Severity: High (affects 15% of target users)
- Resolution: Vendor fixes within 1 week (per contract)
- Acceptance delayed by 1 week, liquidated damages not invoked (within tolerance)
