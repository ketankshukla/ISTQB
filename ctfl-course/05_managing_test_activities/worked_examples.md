<!-- ISTQB-BEAUTIFY-V1 -->
<style>
html, body {
  background-color: #000000 !important;
  color: #F5F5F5 !important;
}
body {
  font-size: 19px !important;
  line-height: 1.85 !important;
  font-family: 'Segoe UI', 'Trebuchet MS', Verdana, sans-serif !important;
  padding: 24px 44px !important;
  letter-spacing: 0.2px;
}
h1 { color: #FFD700 !important; font-size: 2.7em !important; font-weight: 800 !important; border-bottom: 3px solid #FF5252 !important; padding-bottom: 0.25em; }
h2 { color: #00E5FF !important; font-size: 2.05em !important; font-weight: 800 !important; border-bottom: 2px solid #00E5FF !important; padding-bottom: 0.2em; }
h3 { color: #69F0AE !important; font-size: 1.6em !important; font-weight: 700 !important; }
h4 { color: #FF80AB !important; font-size: 1.35em !important; font-weight: 700 !important; }
h5 { color: #FFAB40 !important; font-size: 1.2em !important; font-weight: 700 !important; }
h6 { color: #B388FF !important; font-size: 1.1em !important; font-weight: 700 !important; }
p, li, td, th, span, div { font-size: 1em !important; color: #F5F5F5 !important; }
strong, b { color: #FFEB3B !important; }
em, i { color: #FF8A65 !important; }
a { color: #40C4FF !important; text-decoration: underline; }
a:hover { color: #80D8FF !important; }
code { color: #FF4081 !important; background: transparent !important; font-size: 0.95em !important; }
pre { background: transparent !important; border: 1px solid #555 !important; border-radius: 8px; padding: 14px !important; }
pre code { color: #80CBC4 !important; }
blockquote { color: #B0BEC5 !important; border-left: 5px solid #FFD700 !important; background: transparent !important; padding-left: 18px; font-style: italic; }
table { border-collapse: collapse !important; background: transparent !important; }
th { color: #FFD700 !important; border: 2px solid #00E5FF !important; background: transparent !important; padding: 8px 12px !important; }
td { color: #F5F5F5 !important; border: 1px solid #607D8B !important; background: transparent !important; padding: 8px 12px !important; }
hr { border: none; border-top: 2px dashed #FF5252 !important; margin: 1.5em 0; }
ul li::marker { color: #69F0AE !important; font-size: 1.1em; }
ol li::marker { color: #00E5FF !important; font-weight: bold; }
</style>
# 💡 Chapter 5 — Worked Examples

Step-by-step examples for risk analysis, test prioritization, and defect reports.

---

## 💡 PRODUCT RISK ANALYSIS — Worked Examples

### 💡 Example RA-1: E-Commerce Payment Module

**Context:** A team is about to begin system testing for a new payment processing module. They conduct a product risk analysis session.

**Step 1: Identify product risks.**

| ID | Risk Description | Component |
|----|------------------|-----------|
| R1 | Payment amount calculated incorrectly | Pricing engine |
| R2 | Credit card data exposed in transit | Payment gateway integration |
| R3 | Transaction fails silently (no error to user) | Error handling |
| R4 | Performance degrades under peak load (Black Friday) | Payment service |
| R5 | Refund processed for wrong amount | Refund module |
| R6 | Minor UI alignment issue on payment form | Payment UI |

**Step 2: Assess likelihood and impact (scale 1-5).**

| ID | Likelihood (1-5) | Impact (1-5) | Risk Level (L x I) | Rating |
|----|-------------------|---------------|---------------------|--------|
| R1 | 3 | 5 | 15 | High |
| R2 | 2 | 5 | 10 | High |
| R3 | 4 | 4 | 16 | High |
| R4 | 3 | 4 | 12 | High |
| R5 | 3 | 4 | 12 | High |
| R6 | 4 | 1 | 4 | Low |

**Step 3: Determine testing response.**

| Risk Level | Testing Response |
|------------|-----------------|
| High (R1, R2, R3, R4, R5) | Extensive testing — multiple techniques, early execution, experienced testers |
| Low (R6) | Basic visual check, low priority |

**Step 4: Plan specific test actions.**

| Risk | Testing Action |
|------|---------------|
| R1 | EP + BVA on all pricing rules; decision table for discount combinations; reviewed by senior tester |
| R2 | Security testing: verify TLS, check no card data in logs, penetration test on gateway |
| R3 | Error guessing for all failure modes; test with gateway simulator returning various error codes |
| R4 | Performance testing with 2x expected peak load; stress testing to identify breaking point |
| R5 | EP + BVA on refund calculations; state transition testing for order-refund lifecycle |
| R6 | Checklist-based visual review at end of testing |

---

### 💡 Example RA-2: User Registration Feature

**Risks identified:**

| ID | Risk | Likelihood | Impact | Level |
|----|------|------------|--------|-------|
| R1 | Duplicate accounts created for same email | 3 | 4 | 12 (High) |
| R2 | Password stored in plain text | 1 | 5 | 5 (Medium) |
| R3 | Validation bypass allows SQL injection in name field | 2 | 5 | 10 (High) |
| R4 | Confirmation email not sent | 3 | 3 | 9 (Medium) |
| R5 | Username allows special characters causing display issues | 3 | 2 | 6 (Medium) |

**Testing priorities based on risk:**

1. R1 and R3 (High) — tested first with thorough techniques
2. R2, R4, R5 (Medium) — tested with standard coverage
3. Any residual risks documented in test report for stakeholder acceptance

---

### 💡 Example RA-3: Risk-Based Test Prioritization

**Scenario:** A sprint has 5 user stories. Only 3 days of testing time are available. The team prioritizes based on product risk:

| Story | Risk Level | Testing Priority | Test Effort |
|-------|------------|-----------------|-------------|
| Payment calculation changes | High | 1st (Day 1) | 1 day |
| New password policy | High | 2nd (Day 2) | 0.5 day |
| Admin dashboard chart update | Low | 5th (if time allows) | 0.25 day |
| Email notification template change | Medium | 3rd (Day 2) | 0.5 day |
| Shopping cart quantity update | Medium | 4th (Day 3) | 0.5 day |

If time runs out, the highest-risk stories have already been tested. The team documents that the admin dashboard change received minimal testing (accepted residual risk).

---

## 💡 DEFECT REPORT — Worked Examples

### 💡 Example DR-1: Incorrect Discount Calculation

```
DEFECT REPORT
============================================================
ID:             BUG-2847
Title:          Checkout applies 10% discount instead of 15% for Gold members
Date Reported:  2024-03-15 14:30
Reporter:       Jane Smith (Senior Tester)
Status:         New
Severity:       High
Priority:       High
Component:      Pricing Engine / Checkout Module
Build/Version:  v3.2.1-rc2 (build #4521)
Environment:    Chrome 122, Windows 11, Test Server (staging-east-1)

STEPS TO REPRODUCE:
1. Log in as a Gold-tier loyalty member (test account: gold_user@test.com)
2. Add any product to the shopping cart
3. Proceed to checkout
4. Observe the discount line item on the order summary

EXPECTED RESULT:
Gold members should receive a 15% discount on all orders,
as specified in REQ-LOYALTY-003: "Gold tier members receive 15%
discount applied at checkout."

ACTUAL RESULT:
The discount displayed is 10%, not 15%.
Order subtotal: $100.00
Discount shown: -$10.00 (10%)
Discount expected: -$15.00 (15%)

ATTACHMENTS:
- screenshot_checkout_discount.png
- test_data_gold_member.csv

RELATED TEST CASE: TC-LOYALTY-015
RELATED REQUIREMENT: REQ-LOYALTY-003

NOTES:
- Verified Silver members correctly receive 5% discount
- Issue is consistent across all product types tested
- Appears to be a calculation issue, not a display/rounding issue
============================================================
```

---

### 💡 Example DR-2: Application Crash on Empty Search

```
DEFECT REPORT
============================================================
ID:             BUG-2848
Title:          Application crashes with unhandled exception when search
                field is submitted empty
Date Reported:  2024-03-15 16:45
Reporter:       Bob Chen (Tester)
Status:         New
Severity:       Critical
Priority:       High
Component:      Search Module / API Layer
Build/Version:  v3.2.1-rc2 (build #4521)
Environment:    Firefox 123, macOS 14.3, Test Server (staging-east-1)

STEPS TO REPRODUCE:
1. Navigate to the product search page (/products/search)
2. Leave the search input field completely empty
3. Click the "Search" button (or press Enter)

EXPECTED RESULT:
The system should either display a validation message ("Please enter
a search term") or show all products (default behavior per REQ-SEARCH-001).

ACTUAL RESULT:
The page displays a 500 Internal Server Error.
Browser console shows: "Unhandled TypeError: Cannot read property
'toLowerCase' of null at SearchController.execute (search.js:47)"
The application becomes unresponsive until the page is refreshed.

ATTACHMENTS:
- screenshot_500_error.png
- browser_console_log.txt
- server_error_log_excerpt.txt

RELATED TEST CASE: TC-SEARCH-003
RELATED REQUIREMENT: REQ-SEARCH-001

NOTES:
- Reproducible 100% of the time
- Also occurs when search field contains only whitespace
- Other search inputs (valid text) work correctly
============================================================
```

---

### 💡 Example DR-3: Minor UI Defect

```
DEFECT REPORT
============================================================
ID:             BUG-2849
Title:          "Add to Cart" button label truncated on mobile viewport
Date Reported:  2024-03-16 09:15
Reporter:       Maria Lopez (Tester)
Status:         New
Severity:       Low
Priority:       Low
Component:      Product Detail Page / UI
Build/Version:  v3.2.1-rc2 (build #4521)
Environment:    iPhone 14 Safari (iOS 17.2), also Chrome DevTools
                mobile emulation (375px width)

STEPS TO REPRODUCE:
1. Open any product detail page on a mobile device (viewport width <= 375px)
2. Observe the "Add to Cart" button below the product description

EXPECTED RESULT:
The button should display the full text "Add to Cart" without truncation.

ACTUAL RESULT:
The button displays "Add to Ca..." with the text cut off by an
ellipsis. The button is still functional (clicking it adds the item
to the cart).

ATTACHMENTS:
- screenshot_mobile_button.png

RELATED TEST CASE: TC-UI-MOBILE-022

NOTES:
- Button functions correctly despite the label truncation
- Only occurs at viewport widths below 375px
- Desktop and tablet viewports display correctly
============================================================
```

---

## 📜 KEY PRINCIPLES FOR WRITING GOOD DEFECT REPORTS

1. **One defect per report.** Do not combine multiple issues.
2. **Reproducible steps.** Another person should be able to reproduce the defect by following your steps exactly.
3. **Factual, not emotional.** State what happened, not "this is terrible."
4. **Expected vs actual is mandatory.** Without the expected result, the developer cannot confirm it is a defect.
5. **Include version/build.** The defect may already be fixed in a newer build.
6. **Include environment.** The defect may be environment-specific.
7. **Severity vs priority.** Report both — they serve different purposes.
8. **Descriptive title.** The title alone should communicate the essence of the problem.

---

## 💡 TEST CASE PRIORITIZATION — Worked Example

### 💡 Example TP-1: Regression Suite Prioritization

**Scenario:** A regression suite has 50 test cases. Due to a shortened sprint, only 30 can be executed. Prioritize using risk-based criteria.

**Step 1: Assign risk attributes to each test case.**

| TC Group | Count | Covers | Risk Level | Priority |
|----------|-------|--------|------------|----------|
| Payment processing tests | 8 | High-risk feature, high defect history | High | Run first |
| Authentication/security tests | 6 | High impact if broken | High | Run second |
| Core workflow tests (add to cart, checkout) | 10 | Medium risk, essential business flow | Medium | Run third |
| Reporting/analytics tests | 8 | Low risk, internal tool | Low | Run if time permits |
| UI/cosmetic tests | 8 | Low impact, low defect likelihood | Low | Run last |
| Admin panel tests | 10 | Low usage, low visibility | Low | Run last |

**Step 2: Select 30 highest-priority tests.**
- All 8 payment tests (cumulative: 8)
- All 6 auth tests (cumulative: 14)
- All 10 core workflow tests (cumulative: 24)
- 6 of 8 reporting tests (cumulative: 30)

**Result:** The 30 executed tests cover all high and medium risk areas. Low-risk areas receive partial or no coverage — this is a documented, accepted residual risk.
