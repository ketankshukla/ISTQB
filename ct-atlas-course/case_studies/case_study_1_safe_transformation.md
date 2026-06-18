# 📂 Case Study 1 — SAFe Transformation

## ⭐ Context

You are the Test Transformation Lead for EnterpriseSoft, a 500-person software organization adopting SAFe.

**Current State:**
- 20 teams working independently
- Quarterly releases with 4-week regression cycles
- No shared test practices
- Frequent integration failures at release

**Goal:** Implement SAFe with integrated quality practices.

---

## 🎨 Task 1: ART Design

**Question:** Design ARTs with quality considerations.

**Model Answer:**

**ART 1: Customer Portal (8 teams)**
- Web, mobile, API, and backend teams
- Shared customer-facing release

**ART 2: Internal Operations (7 teams)**
- Admin tools, reporting, integrations
- Shared internal release

**ART 3: Platform (5 teams)**
- Infrastructure, security, shared services
- Enables both other ARTs

**Quality Roles per ART:**
- RTE: Facilitates integration and system demo
- System Team: Integration testing, pipeline health
- Test Chapter: Cross-team standards, coaching

---

## 🗓️ Task 2: PI Planning Quality Activities

**Question:** Plan testing activities for PI Planning.

**Model Answer:**

**Pre-PI Planning:**
- Previous PI quality metrics reviewed
- Known technical debt documented
- Test environment capacity assessed

**PI Planning Day 1:**
- Teams identify test objectives for each feature
- Cross-team dependencies mapped
- Shared test resources allocated

**PI Planning Day 2:**
- Draft test plan for PI
- Risks and mitigations documented
- Confidence vote on quality achievability

**Post-PI Planning:**
- System Team plans integration test schedule
- Environment needs finalized
- Training plan for new practices

---

## 🎨 Task 3: System Demo Design

**Question:** Design effective system demos.

**Model Answer:**

**Frequency:** Every 2 weeks (end of each iteration)

**Participants:**
- All ART teams
- Product Management
- Key stakeholders
- System Team

**Content:**
| Demo | Focus | Quality Validation |
|------|-------|-------------------|
| Iteration 1-4 | Feature increments | Team-level tests pass |
| Iteration 5 (IP) | Full system integration | System tests, performance baseline |
| System Demo | End-to-end scenarios | Customer-facing workflows validated |

**Acceptance:**
- Features meet Definition of Done
- No critical open defects
- Performance within acceptable range

---

## 📊 Task 4: Metrics and Governance

**Question:** Establish quality governance for the ART.

**Model Answer:**

**Metrics Dashboard:**
| Metric | Baseline | Target | Review |
|--------|----------|--------|--------|
| Regression time | 4 weeks | 1 week | Monthly |
| Integration test pass rate | 70% | 95% | Every iteration |
| Defect escape rate | 25% | < 5% | Every PI |
| Automation coverage | 20% | 70% | Monthly |

**Governance:**
- Monthly quality review with RTE and System Team
- Quarterly review with executives
- Escalation path: Team → RTE → Release Management
