# Chapter 3 — Business Acceptance Testing (BAT): Lessons

---

## 3.1 Planning Business Acceptance Testing

### What is Business Acceptance Testing (BAT)?

BAT is acceptance testing performed to verify that a system meets business needs and requirements. It encompasses activities that validate the system from a business perspective, including UAT, pilot testing, and business process validation.

### UAT Planning Steps

**1. Define Scope:**
- Which business processes will be tested?
- Which user roles will participate?
- What is in scope vs. out of scope?

**Example scope definition:**
```
In scope:
- Customer registration and login
- Product catalog browsing and search
- Shopping cart and checkout
- Order tracking

Out of scope:
- Admin functions (tested separately)
- Payment gateway integration (tested by vendor)
- Mobile app (separate project)
```

**2. Identify Participants:**
- Business representatives who know the processes
- End users who will use the system daily
- Subject matter experts (SMEs)
- Product Owner or business analyst to facilitate

**3. Prepare Environment:**
- Production-like environment (same versions, configurations)
- Stable — no development changes during UAT
- Accessible to all participants
- Separate from development and system testing environments

**4. Prepare Test Data:**
- Realistic but anonymized data
- Covers normal and edge cases
- Represents all business scenarios
- Data setup scripts for reset between test cycles

**5. Schedule and Resources:**
- Allocate sufficient time (typically 2-4 weeks)
- Ensure participants have time away from daily duties
- Have support staff available to answer questions and triage defects

---

## 3.2 Writing Acceptance Criteria

### Acceptance Criteria for User Stories

**Format 1: Scenario-based (Given-When-Then)**

```
User Story: As a customer, I want to apply a promo code so that I get a discount.

Acceptance Criteria:
Given my cart total is $100
When I enter valid promo code "SAVE20"
Then the cart total becomes $80
And a success message "Code applied: $20 off" is displayed

Given my cart total is $100
When I enter expired promo code "SAVE20"
Then an error message "This code has expired" is displayed
And the cart total remains $100

Given my cart total is $30
When I enter promo code "SAVE20" (minimum $50)
Then an error message "Minimum order $50 required" is displayed
```

**Format 2: Rule-based**

```
User Story: As a store manager, I want to set discount rules.

Acceptance Criteria:
- Discount codes can be created with: code, percentage or fixed amount, expiration date, minimum order value
- Only one discount code can be applied per order
- Discount codes cannot be stacked with automatic promotions
- Expired codes are automatically rejected
- Invalid codes display: "Code not recognized"
```

**Format 3: Checklist**

```
User Story: As a user, I want to reset my password.

Acceptance Criteria:
- [ ] User receives reset email within 5 minutes of request
- [ ] Reset link expires after 24 hours
- [ ] New password must differ from last 3 passwords
- [ ] Password must be 8+ characters with 1 uppercase, 1 lowercase, 1 number
- [ ] User can log in with new password after reset
- [ ] Old password no longer works
```

### Common Mistakes in Acceptance Criteria

**Too vague:**
```
Bad: "The system should be fast"
Good: "Search results return within 2 seconds for up to 1000 products"
```

**Too technical:**
```
Bad: "System shall use Redis caching for session storage"
Good: "User remains logged in for 8 hours of inactivity"
```

**Not testable:**
```
Bad: "The system should be user-friendly"
Good: "New users can complete registration without assistance in under 3 minutes"
```

**Mixing multiple concerns:**
```
Bad: "User can register, login, and reset password"
Good: Separate criteria for each feature
```

---

## 3.3 UAT Execution

### UAT Process

```
1. Kickoff meeting (explain scope, schedule, procedures)
2. Test case assignment (distribute tests to participants)
3. Test execution (users perform tests in environment)
4. Defect logging (report issues found)
5. Daily triage (review and prioritize defects)
6. Fix and retest (developers fix, users retest)
7. Regression testing (verify fixes didn't break other features)
8. Evaluation (assess readiness for release)
9. Sign-off (formal acceptance or rejection)
```

### Defect Management in UAT

| Severity | Definition | Example | Response Time |
|----------|------------|---------|---------------|
| **Critical** | Blocks acceptance, no workaround | Cannot complete checkout | Fix within 24 hours |
| **High** | Major issue with workaround available | Search returns incorrect results | Fix within 3 days |
| **Medium** | Minor issue affecting usability | Button misaligned | Fix in next release |
| **Low** | Cosmetic or enhancement request | Color doesn't match brand | Defer to backlog |

### UAT Defect Report Template

```
ID: UAT-045
Title: Checkout fails when shipping address contains apostrophe
Severity: High
Steps:
  1. Add item to cart
  2. Proceed to checkout
  3. Enter shipping address: "O'Brien Street"
  4. Click "Continue"
Expected: Proceed to payment page
Actual: Error "Invalid address format"
Environment: UAT v2.3
Business Impact: Customers with apostrophes in addresses cannot complete orders
Workaround: Remove apostrophe from address
```

---

## 3.4 ATDD and BDD

### Acceptance Test-Driven Development (ATDD)

**Process:**
```
1. Business, developer, and tester collaborate to define acceptance criteria
2. Acceptance tests are written before development begins
3. Development proceeds until acceptance tests pass
4. Story is considered done when all acceptance tests pass
```

**Benefits:**
- Shared understanding before coding
- Prevents gold-plating (developers build what's needed)
- Tests serve as executable documentation
- Reduces rework from misunderstood requirements

### Behavior-Driven Development (BDD)

**Process:**
```
1. Collaborate on concrete examples of system behavior
2. Document examples in business-readable format (Given-When-Then)
3. Automate examples as acceptance tests
4. Develop code to make examples pass
5. Refine and expand examples continuously
```

**The Three Amigos:**
- **Business representative:** Knows the problem to solve
- **Developer:** Knows how to build the solution
- **Tester:** Knows what could go wrong

**Example BDD workshop:**
```
Story: Apply discount code

Example 1: Valid code
Given a cart with $100 of items
And a valid "SAVE20" code exists in the system
When the customer enters "SAVE20" at checkout
Then the total is reduced to $80
And a confirmation message is shown

Example 2: Expired code
Given a cart with $100 of items
And "SAVE20" expired yesterday
When the customer enters "SAVE20"
Then an "Expired code" error is shown
And the total remains $100

Example 3: Below minimum
Given a cart with $30 of items
And "SAVE20" requires minimum $50
When the customer enters "SAVE20"
Then a "Minimum $50 required" error is shown
```

---

## 3.5 Sign-off and Pilot

### The Sign-off Process

**Prerequisites for sign-off:**
- All critical and high defects resolved
- Acceptance criteria met (or formally waived with business approval)
- Known issues documented with workarounds
- Performance meets business requirements
- Security validated
- Training materials complete

**Sign-off document contents:**
```
- System/version being accepted
- Scope of acceptance (features included)
- Test summary (tests executed, pass rate)
- Defect summary (open defects, severities, workarounds)
- Known issues and limitations
- Conditions of acceptance (e.g., "subject to patch for DEF-012 within 1 week")
- Signatures and dates
```

### Pilot Deployment

**Purpose:** Deploy to a limited group before full rollout to validate in production.

**Types of pilots:**

| Type | Description | Use Case |
|------|-------------|----------|
| **Phased rollout** | Deploy to one department/location at a time | Large organization |
| **Canary release** | Deploy to small % of users, monitor, expand | Web application |
| **Dark launch** | Deploy to production but not visible to users | Test scalability |
| **Beta program** | Invite selected users to use new version | Consumer software |

**Pilot success criteria:**
- Usage metrics meet targets (adoption rate, task completion)
- Support tickets below threshold
- No critical production defects
- User satisfaction scores acceptable
- Performance meets SLAs

---

## Worked Examples

### Worked Example 1: UAT Test Case Design

**Business Process:** Employee expense reimbursement

| Test ID | Scenario | Steps | Expected Result | Priority |
|---------|----------|-------|-----------------|----------|
| UAT-001 | Submit valid expense | Login, enter expense ($50 meal), attach receipt, submit | Status = "Pending Approval", confirmation email sent | High |
| UAT-002 | Submit without receipt | Login, enter expense, no receipt, submit | Error: "Receipt required for expenses over $25" | High |
| UAT-003 | Approve expense | Manager logs in, views pending expense, approves | Status = "Approved", employee notified | High |
| UAT-004 | Reject expense | Manager rejects with reason "Category not allowed" | Status = "Rejected", reason visible to employee | High |
| UAT-005 | Policy limit exceeded | Enter $500 meal expense | Error: "Exceeds $100 meal limit" | Medium |
| UAT-006 | Monthly report | Finance generates report for March | Report shows all approved March expenses, totals correct | Medium |

### Worked Example 2: ATDD Workshop

**Story:** "As a warehouse worker, I want to scan barcodes so that I can update inventory quickly."

**Three Amigos Discussion:**

**Business:** "Workers scan product barcodes and the system updates stock levels. If quantity falls below reorder point, it should alert."

**Developer:** "What barcode formats? Can they scan damaged barcodes? What if the product isn't in the system?"

**Tester:** "What if they scan the same item twice? What if the scanner disconnects mid-scan?"

**Resulting acceptance criteria:**
```
Given a product with barcode "123456789"
When the worker scans it
Then the inventory count increases by 1

Given a product with current stock 10 and reorder point 15
When the worker scans it 6 times
Then an alert "Reorder needed" is displayed

Given an unscannable barcode
When the worker clicks "Enter manually"
Then they can type the SKU and quantity

Given the scanner disconnects during scanning
When the worker reconnects it
Then no scanned data is lost
```

### Worked Example 3: Sign-off Decision Matrix

| Criterion | Threshold | Actual | Status |
|-----------|-----------|--------|--------|
| Test cases executed | 100% | 100% | Pass |
| Test pass rate | ≥ 95% | 97% | Pass |
| Critical defects open | 0 | 0 | Pass |
| High defects open | ≤ 2 | 1 | Pass |
| Medium defects with workaround | ≤ 5 | 3 | Pass |
| Performance — page load | < 3 seconds | 2.1s | Pass |
| User satisfaction score | ≥ 7/10 | 8.2/10 | Pass |
| Training completion | 100% of users | 100% | Pass |

**Decision:** ACCEPT subject to fixing the 1 high-priority defect (DEF-089: Report export fails for > 1000 rows) within 1 week of go-live.

**Rationale:** All criteria met. The one high defect has a workaround (export in batches of 500). Business value of releasing now outweighs the risk.
