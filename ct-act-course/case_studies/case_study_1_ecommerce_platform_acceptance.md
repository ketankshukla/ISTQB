# Case Study 1 — E-Commerce Platform Acceptance

## Context

You are the Acceptance Test Lead for ShopMax, a retail company launching a new e-commerce platform to replace their 10-year-old legacy system.

**Business Drivers:**
- Legacy system cannot support mobile commerce
- Competitors offer faster checkout and better recommendations
- Need to integrate with new payment providers and shipping partners
- Compliance with PCI-DSS and GDPR required

**Key Features:**
- Product catalog with search and recommendations
- Shopping cart and checkout
- Customer accounts and order history
- Payment processing (credit card, PayPal, buy-now-pay-later)
- Order tracking and returns
- Admin dashboard for inventory and orders

**Project Approach:** Agile (Scrum), 2-week sprints, 6-month timeline

---

## Task 1: Acceptance Test Planning

**Question:** Create an acceptance test plan for the e-commerce platform.

**Model Answer:**

**Scope:**
- In scope: Customer-facing features (catalog, cart, checkout, accounts, tracking)
- Out of scope: Admin features (separate acceptance cycle), marketing integrations

**Types of Acceptance Testing:**

| Type | When | Participants | Focus |
|------|------|------------|-------|
| Alpha | Sprint 10-11 | Internal QA, business analysts | Core functionality, major flows |
| Beta | Sprint 11-12 | 500 invited customers | Real-world usage, device diversity |
| UAT | Sprint 12 | Customer service, warehouse, marketing reps | Business process validation |
| OAT | Sprint 12-13 | IT operations | Backup, monitoring, deployment |
| CAT | Before go-live | Procurement, legal | Contract deliverables |
| RAT | Before go-live | Compliance officer | PCI-DSS, GDPR, accessibility |

**Entry Criteria for UAT:**
- All P1 and P2 defects resolved
- System test pass rate ≥ 95%
- UAT environment mirrors production
- Realistic test data loaded (10,000 products, 1,000 customers)
- Business users trained on new system

**Exit Criteria for UAT:**
- 100% of UAT test cases executed
- Pass rate ≥ 95%
- Zero critical defects
- ≤ 3 high defects with documented workarounds
- Product Owner sign-off

---

## Task 2: User Stories and Acceptance Criteria

**Question:** Write acceptance criteria for the checkout user story.

**Model Answer:**

**User Story:** "As a customer, I want to complete checkout quickly so that I can finalize my purchase without frustration."

**Acceptance Criteria:**

```gherkin
Feature: Checkout

  Scenario: Successful guest checkout
    Given a cart with 3 items totaling $150
    When the customer enters valid shipping address and payment details
    And clicks "Place Order"
    Then the order is created with status "Confirmed"
    And a confirmation email is sent within 5 minutes
    And the inventory is reduced by 3 units
    And the order appears in order tracking

  Scenario: Registered user checkout with saved addresses
    Given a registered user with a saved shipping address and payment method
    And a cart with 2 items totaling $75
    When they click "Place Order" using saved details
    Then the order is confirmed without re-entering address or payment
    And loyalty points are credited to their account

  Scenario: Invalid payment
    Given a cart with items totaling $100
    When the customer enters a declined credit card
    Then an error message "Payment declined. Please try another method." is shown
    And the cart contents are preserved
    And the customer can retry with a different payment method

  Scenario: Free shipping threshold
    Given a cart totaling $35
    When the customer proceeds to checkout
    Then shipping cost of $5.99 is added
    And a message "Add $15 more for free shipping" is displayed

  Scenario: Free shipping applied
    Given a cart totaling $55
    When the customer proceeds to checkout
    Then shipping is $0
    And a message "Free shipping applied!" is displayed
```

---

## Task 3: UAT Execution and Defect Management

**Question:** During UAT, the following issues are found. Classify, prioritize, and plan resolution.

**Model Answer:**

| ID | Issue | Severity | Impact | Resolution | Timeline |
|----|-------|----------|--------|------------|----------|
| UAT-001 | Checkout fails on iPhone Safari | Critical | 40% of mobile users cannot buy | Fix iOS compatibility | 24 hours |
| UAT-002 | Order confirmation email takes 15 minutes | High | Poor customer experience | Optimize email queue | 3 days |
| UAT-003 | Search doesn't handle apostrophes ("O'Brien") | Medium | Some searches fail | Fix search sanitization | 1 week |
| UAT-004 | Wishlist button misaligned on tablet | Low | Cosmetic issue | Fix CSS | Next release |
| UAT-005 | Tax calculation off by $0.01 for some states | High | Financial inaccuracy | Fix rounding logic | 3 days |
| UAT-006 | "Remember me" checkbox not working | Medium | Users must login every time | Fix cookie logic | 1 week |

**UAT Sign-off Decision:**
- UAT-001, UAT-002, UAT-005 must be fixed before sign-off (critical/high financial)
- UAT-003, UAT-006 can be fixed in first patch (have workarounds)
- UAT-004 deferred to next release (cosmetic)

---

## Task 4: Go-Live Decision

**Question:** Evaluate readiness for go-live based on the following data.

**Model Answer:**

| Criterion | Threshold | Actual | Status |
|-----------|-----------|--------|--------|
| UAT test cases executed | 100% | 100% | Pass |
| UAT pass rate | ≥ 95% | 97.5% | Pass |
| Critical defects open | 0 | 0 | Pass |
| High defects open | ≤ 3 | 1 | Pass |
| Performance — checkout time | < 30 seconds | 12s avg, 45s P95 | Pass |
| Mobile compatibility | Top 10 devices | Works on 9/10 | Conditional |
| Beta feedback score | ≥ 4.0/5 | 4.2/5 | Pass |
| PCI-DSS compliance | All requirements | All met | Pass |
| GDPR compliance | All requirements | All met | Pass |
| Training completion | 100% of CS staff | 100% | Pass |

**Decision:** GO-LIVE with conditions
- Condition 1: Fix remaining high defect (UAT-005: tax rounding) before go-live
- Condition 2: Monitor mobile compatibility for device #10 (older Android) and provide workaround
- Condition 3: Patch release within 2 weeks for UAT-003 and UAT-006

**Pilot approach:** Phased rollout
- Week 1: 10% of traffic
- Week 2: 50% of traffic
- Week 3: 100% traffic (if metrics good)

**Rollback plan:** If checkout error rate > 0.5%, immediate rollback to legacy system
