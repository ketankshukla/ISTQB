# Case Study 2 — Multi-Team Quality Initiative

## Context

You are the Quality Lead for ProductX, with 12 teams building a SaaS platform.

**Problem:**
- Each team has different test practices
- No shared regression suite
- Release regression takes 6 weeks
- Production incidents increasing

**Goal:** Create consistent quality practices across teams in 6 months.

---

## Task 1: Assessment

**Question:** Assess current state across teams.

**Model Answer:**

| Team | Practices | Coverage | Automation | Issues |
|------|-----------|----------|------------|--------|
| A (Web) | TDD, CI | 85% | High | Good |
| B (API) | Some unit tests | 40% | Medium | Needs coverage |
| C (Mobile) | Manual mostly | 20% | Low | Needs automation |
| D-F (Backend) | Varies widely | 30-60% | Mixed | Inconsistent |
| G-L (Services) | Minimal testing | 15% | Low | High risk |

**Common Gaps:**
- No shared Definition of Done
- Different CI/CD maturity
- No cross-team integration testing
- Limited test environment availability

---

## Task 2: Standard Definition of Done

**Question:** Create a DoD that all teams can adopt.

**Model Answer:**

**Baseline DoD (mandatory):**
- [ ] Code reviewed by another team member
- [ ] Unit tests written and passing (> 70% coverage)
- [ ] Feature tested against acceptance criteria
- [ ] CI build green
- [ ] No critical static analysis issues

**Extended DoD (aspirational):**
- [ ] Integration tests with adjacent services
- [ ] Accessibility scan passes
- [ ] Performance regression < 5%
- [ ] Documentation updated

**Adoption Plan:**
- Month 1-2: Baseline mandatory for all
- Month 3-4: Teams adopt one extended item
- Month 5-6: Full extended DoD for mature teams

---

## Task 3: Shared Regression Strategy

**Question:** Design a shared regression approach.

**Model Answer:**

**Regression Levels:**
| Level | Owner | Scope | Trigger |
|-------|-------|-------|---------|
| Team | Team | Team features | Every commit |
| Integration | System Team | Cross-team APIs | Nightly |
| System | QA Lead | End-to-end flows | Weekly |
| Release | Release Team | Full platform | Release candidate |

**Automation Priority:**
1. Critical user journeys (login, purchase, core workflow)
2. High-risk areas (payment, security, data integrity)
3. Cross-team integration points
4. Regression-prone features

---

## Task 4: Training and Coaching

**Question:** Plan capability building.

**Model Answer:**

**Communities of Practice:**
| CoP | Focus | Meeting |
|-----|-------|---------|
| Test Automation | Framework, patterns, tooling | Bi-weekly |
| API Testing | Contract tests, mocking, Postman | Monthly |
| Mobile Testing | Device testing, Appium, manual practices | Monthly |
| Performance | Load testing, monitoring, optimization | Quarterly |

**Coaching Plan:**
| Team | Coach Assignment | Focus Area |
|------|-----------------|------------|
| C (Mobile) | Alice (automation lead) | Appium + CI integration |
| G-L (Services) | Bob (API testing expert) | Contract tests + TDD |
| All | External consultant | TDD workshop |

**Metrics:**
- Training completion: 90% by month 3
- DoD compliance: 100% by month 4
- Automation coverage: 50% by month 6
