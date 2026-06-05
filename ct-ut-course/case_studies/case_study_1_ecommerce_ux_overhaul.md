# Case Study 1 — E-Commerce UX Overhaul

## Context

You are the UX Research Lead for ShopMax, an e-commerce platform experiencing declining conversion rates.

**Current Metrics:**
- Monthly visitors: 500,000
- Cart abandonment rate: 68% (industry average: 60%)
- Average order value: $65
- Customer support tickets related to checkout: 2,000/month
- SUS score from last survey: 52 (below average)

**User Complaints:**
- "I can't find the checkout button"
- "The shipping costs appear too late"
- "I have to create an account to buy"
- "The mobile site is impossible to use"
- "I got an error and lost my cart"

**Business Goals:**
- Reduce cart abandonment to 55%
- Increase average order value to $75
- Reduce checkout-related support tickets by 50%
- Improve SUS score to 70+

**Team:**
- 2 UX researchers, 1 interaction designer, 1 frontend developer, 1 product manager
- Budget: $50,000 for UX research and testing
- Timeline: 6 months

## Task 1: Planning the Usability Test

**Question:** Design a comprehensive usability testing plan to address the identified problems.

**Model Answer:**

**Test Objectives:**
1. Identify barriers in the checkout process that cause abandonment
2. Evaluate mobile usability of the shopping experience
3. Assess user expectations around shipping costs and account creation
4. Measure improvement potential for SUS score

**Method Selection:**

| Phase | Method | Participants | Purpose |
|-------|--------|------------|---------|
| Phase 1 | Heuristic evaluation | 3 UX experts | Quick identification of obvious problems |
| Phase 2 | Moderated think-aloud | 8 users (desktop + mobile) | Deep understanding of checkout barriers |
| Phase 3 | Unmoderated remote test | 50 users | Quantify problem frequency across larger sample |
| Phase 4 | A/B testing | 10,000 real users | Validate design changes in production |

**User Profile:**
- Mix of new and returning customers
- Ages 18-65
- Both desktop and mobile users (60% mobile target)
- Varying technical proficiency

**Tasks:**
1. Find and add a specific product to cart
2. Proceed to checkout from the cart page
3. Complete checkout as a guest
4. Apply a discount code
5. Review and confirm order
6. Find order confirmation and tracking info

---

## Task 2: Conducting Heuristic Evaluation

**Question:** Evaluate the checkout flow against Nielsen's heuristics.

**Model Answer:**

| Heuristic | Finding | Severity |
|-----------|---------|----------|
| Visibility of status | No progress indicator showing checkout steps (shipping, payment, review) | Major |
| Match with real world | "Proceed to fulfillment" instead of "Checkout" | Minor |
| User control | No guest checkout option; forced account creation | Critical |
| Consistency | "Continue" button changes position between pages | Major |
| Error prevention | No validation on phone number format until submission | Major |
| Recognition | Order summary disappears on payment page | Major |
| Flexibility | No way to edit cart items during checkout | Major |
| Minimalist design | Checkout form has 25 fields when 12 would suffice | Minor |
| Error recovery | Generic error: "Transaction failed" — no reason or path forward | Critical |
| Help | No explanation of security icons or shipping methods | Minor |

**Priority Actions:**
1. Critical: Add guest checkout option
2. Critical: Improve error messages with specific reasons and recovery paths
3. Major: Add progress indicator
4. Major: Allow cart editing during checkout
5. Major: Keep order summary visible

---

## Task 3: Analyzing Test Results

**Question:** Analyze the results from 8 moderated think-aloud sessions.

**Model Answer:**

**Quantitative Results:**

| Task | Success Rate | Avg Time | Errors |
|------|-------------|----------|--------|
| Add to cart | 100% | 45 sec | 0 |
| Proceed to checkout | 75% | 2 min | 6 (users couldn't find button) |
| Complete as guest | 0% | N/A | 8 (all forced to create account) |
| Apply discount | 50% | 3 min | 4 (code field hard to find) |
| Confirm order | 63% | 4 min | 5 (hidden errors) |

**SUS Scores:** 45, 50, 55, 48, 60, 52, 58, 50 (Average: 52.25)

**Qualitative Findings:**
- 7/8 users expressed frustration about forced account creation
- 6/8 users were surprised by shipping costs appearing late
- 5/8 users tried to edit cart during checkout but couldn't find how
- 4/8 users said they would abandon and buy elsewhere

**Affinity Diagram Themes:**
1. **Trust issues:** Hidden costs, no security reassurance
2. **Control issues:** Can't edit, can't proceed as guest, can't recover errors
3. **Clarity issues:** Confusing labels, missing progress indicators

---

## Task 4: Accessibility Assessment

**Question:** Evaluate the checkout flow for WCAG 2.1 Level AA compliance.

**Model Answer:**

| WCAG Criterion | Check | Result |
|----------------|-------|--------|
| 1.1.1 Non-text Content | Do product images have alt text? | Fail (missing on 30% of images) |
| 1.3.1 Info and Relationships | Are form labels associated with inputs? | Fail (labels not programmatically linked) |
| 1.4.3 Contrast | Is text contrast sufficient? | Fail (placeholder text at 2.8:1) |
| 2.1.1 Keyboard | Can checkout be completed with keyboard only? | Fail (credit card CVV field not keyboard accessible) |
| 2.4.3 Focus Order | Does tab order follow logical sequence? | Fail (jumps from shipping to footer) |
| 3.3.1 Error Identification | Are errors identified in text? | Fail (only red border, no text) |
| 3.3.2 Labels or Instructions | Are required fields clearly indicated? | Fail (color only, no text or asterisk) |

**Critical Accessibility Issues:**
1. Keyboard users cannot complete checkout
2. Screen reader users cannot identify form fields
3. Error messages are invisible to screen readers and colorblind users

---

## Task 5: Recommendations and Business Case

**Question:** Develop prioritized recommendations with business justification.

**Model Answer:**

**Priority 1 (Quick Wins — Implement in 2 weeks):**

| Recommendation | Effort | Expected Impact |
|---------------|--------|----------------|
| Add guest checkout option | Low | Reduce abandonment by 10% |
| Show shipping costs earlier | Low | Reduce abandonment by 5% |
| Improve error messages | Low | Reduce support tickets by 20% |
| Add progress indicator | Low | Improve satisfaction |

**Priority 2 (Medium-term — 1-2 months):**

| Recommendation | Effort | Expected Impact |
|---------------|--------|----------------|
| Allow cart editing during checkout | Medium | Reduce abandonment by 5% |
| Reduce checkout form fields | Medium | Improve completion rate by 8% |
| Fix keyboard accessibility | Medium | Enable checkout for all users |
| Add form labels for screen readers | Medium | Compliance + accessibility |

**Priority 3 (Long-term — 3-6 months):**

| Recommendation | Effort | Expected Impact |
|---------------|--------|----------------|
| Redesign mobile checkout flow | High | Mobile conversion +15% |
| Implement saved payment methods | High | Returning customer AOV +10% |
| Full accessibility audit and remediation | High | Compliance + expanded market |

**Business Case:**

| Metric | Current | Target | Annual Impact |
|--------|---------|--------|---------------|
| Cart abandonment | 68% | 55% | +$1.2M revenue |
| AOV | $65 | $75 | +$600K revenue |
| Support tickets | 2,000/mo | 1,000/mo | -$120K costs |
| SUS score | 52 | 70+ | Improved loyalty |

**Total Investment:** $50,000
**Expected Annual Return:** $1.9M
**ROI:** 3,700%
