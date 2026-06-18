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
# 📂 Case Study 1: E-Commerce Checkout

## ⭐ System Description

An online electronics retailer has a checkout system with the following features:
- Customers add items to a shopping cart and proceed to checkout
- The system calculates subtotal, applies discounts, adds tax, and computes shipping
- Payment is accepted via credit card or store credit
- Orders are confirmed with an email receipt

---

## 📑 Requirements Specification

### 🔷 REQ-CHK-001: Order Subtotal
The system shall calculate the order subtotal as the sum of (item price x quantity) for all items in the cart.

### 🔷 REQ-CHK-002: Discount Rules
- Orders $100 or more receive a 10% discount on the subtotal
- Orders $200 or more receive a 15% discount on the subtotal
- Loyalty Gold members receive an additional 5% discount (applied after the order-value discount)
- Maximum combined discount is capped at 20%

### 🔷 REQ-CHK-003: Tax Calculation
Sales tax of 8% is applied to the discounted subtotal.

### 🔷 REQ-CHK-004: Shipping
- Orders under $50 (after discount): $9.99 shipping
- Orders $50 to $149.99 (after discount): $4.99 shipping
- Orders $150 or more (after discount): free shipping

### 🔷 REQ-CHK-005: Payment Validation
- Credit card number must be 16 digits
- Expiration date must be in the future
- CVV must be exactly 3 digits
- Store credit balance must be sufficient to cover the total

### 🔷 REQ-CHK-006: Order Confirmation
Upon successful payment, the system shall display a confirmation page with order number and send a confirmation email within 60 seconds.

---

## ⭐ User Stories

**US-1: Apply Discount**
```
As a customer,
I want my order discount to be calculated automatically at checkout,
So that I receive the correct savings based on my order value and loyalty status.
```

Acceptance Criteria:
- Given an order subtotal of $100-$199.99, When I proceed to checkout, Then a 10% discount is applied
- Given an order subtotal of $200+, When I proceed to checkout, Then a 15% discount is applied
- Given I am a Gold loyalty member with an order of $100+, When I proceed to checkout, Then my additional 5% loyalty discount is applied after the order-value discount
- Given any combination of discounts, When they are calculated, Then the total discount never exceeds 20% of the subtotal

**US-2: Pay with Credit Card**
```
As a customer,
I want to pay by credit card,
So that I can complete my purchase quickly.
```

Acceptance Criteria:
- Given I enter a valid 16-digit card number, valid future expiry, and valid 3-digit CVV, When I click "Pay", Then the payment is processed and I see a confirmation
- Given I enter an invalid card number (not 16 digits), When I click "Pay", Then I see an error "Invalid card number"
- Given I enter an expired date, When I click "Pay", Then I see an error "Card expired"

---

## 🎯 Applying Test Techniques

### ➗ 1. Equivalence Partitioning on Discount Rules (REQ-CHK-002)

**Input: Order subtotal (before discount)**

| Partition | Range | Expected Discount | Valid/Invalid |
|-----------|-------|-------------------|---------------|
| P1 | $0.01 - $99.99 | 0% | Valid (no discount) |
| P2 | $100.00 - $199.99 | 10% | Valid |
| P3 | $200.00 and above | 15% | Valid |
| P4 | $0 or negative | Error/invalid order | Invalid |

**Input: Loyalty status**

| Partition | Value | Additional Discount |
|-----------|-------|---------------------|
| P5 | Gold member | +5% (after order discount) |
| P6 | Non-Gold (Silver, Bronze, None) | No additional |

**Test cases from EP:**

| TC | Subtotal | Loyalty | Expected Discount | Rationale |
|----|----------|---------|-------------------|-----------|
| TC1 | $75.00 | Non-Gold | 0% | P1 + P6 |
| TC2 | $150.00 | Non-Gold | 10% ($15.00 off) | P2 + P6 |
| TC3 | $250.00 | Non-Gold | 15% ($37.50 off) | P3 + P6 |
| TC4 | $150.00 | Gold | 10% + 5% = 14.25% effective | P2 + P5 |
| TC5 | $250.00 | Gold | 15% + 5% = 19.25% effective | P3 + P5 |
| TC6 | $0.00 | Non-Gold | Error | P4 + P6 |

### 📏 2. Boundary Value Analysis on Discount Thresholds

**Boundaries at $100 (discount threshold):**

| Value | Expected | Position |
|-------|----------|----------|
| $99.99 | No discount | Just below boundary |
| $100.00 | 10% discount | At boundary |

**Boundaries at $200 (higher discount threshold):**

| Value | Expected | Position |
|-------|----------|----------|
| $199.99 | 10% discount | Just below boundary |
| $200.00 | 15% discount | At boundary |

**Boundary for discount cap (20%):**

| Scenario | Calculation | Expected |
|----------|-------------|----------|
| $200 order, Gold member | 15% + 5% of remainder = 19.25% | Applied (under cap) |
| $500 order, Gold member | 15% + 5% of remainder = 19.25% | Applied (under cap) |

Note: With the given rules (15% order + 5% loyalty applied sequentially), the effective rate is: 1 - (0.85 x 0.95) = 19.25%, which is under 20%. The cap would only trigger if loyalty discount were higher.

### 🗂️ 3. Decision Table for Combined Discount Logic

**Conditions:**
- C1: Subtotal >= $200?
- C2: Subtotal >= $100 (but < $200)?
- C3: Gold loyalty member?

**Decision Table:**

| | R1 | R2 | R3 | R4 | R5 |
|---|---|---|---|---|---|
| C1: Subtotal >= $200 | T | T | F | F | F |
| C2: Subtotal >= $100 | - | - | T | T | F |
| C3: Gold member | T | F | T | F | - |
| Order discount | 15% | 15% | 10% | 10% | 0% |
| Loyalty discount | 5% | 0% | 5% | 0% | 0% |
| Cap check needed | Yes | No | No | No | No |

**Test cases: 5 (one per rule)**

### 🔄 4. State Transition for Order Process

**States:**
- S1: Cart (items in cart, not checked out)
- S2: Checkout (discount/tax/shipping calculated)
- S3: Payment Pending (payment details entered)
- S4: Payment Processing
- S5: Confirmed (payment successful)
- S6: Failed (payment declined)

**Transitions:**

| From | Event | To | Action |
|------|-------|----|--------|
| S1 | Click "Checkout" | S2 | Calculate totals |
| S2 | Enter payment and click "Pay" | S3 | Validate payment fields |
| S3 | Validation passes | S4 | Send to payment gateway |
| S3 | Validation fails | S2 | Show error messages |
| S4 | Gateway approves | S5 | Display confirmation, send email |
| S4 | Gateway declines | S6 | Display decline message |
| S6 | Click "Try Again" | S2 | Return to checkout |
| S2 | Click "Back to Cart" | S1 | Return to cart |

**0-switch coverage test cases:**

| TC | Path | Transitions Covered |
|----|------|---------------------|
| TC1 | S1->S2->S3->S4->S5 | Happy path (4 transitions) |
| TC2 | S2->S3 (validation fails)->S2 | Validation failure loop |
| TC3 | S1->S2->S3->S4->S6->S2 | Payment decline + retry |
| TC4 | S2->S1 | Back to cart |

All 8 transitions covered in 4 test cases.

---

## ⚠️ Risk-Based Test Approach

### ⚠️ Product Risks Identified

| ID | Risk | Likelihood (1-5) | Impact (1-5) | Level |
|----|------|-------------------|---------------|-------|
| R1 | Discount calculated incorrectly (overcharge/undercharge) | 3 | 5 | 15 High |
| R2 | Payment accepted with invalid card data | 2 | 5 | 10 High |
| R3 | Tax calculated on wrong amount (before discount) | 3 | 4 | 12 High |
| R4 | Shipping tier wrong after discount applied | 3 | 3 | 9 Medium |
| R5 | Confirmation email not sent | 2 | 3 | 6 Medium |
| R6 | Order number not unique | 1 | 4 | 4 Low |

### 🔷 Testing Priority

1. R1 (discount): EP + BVA + decision table (comprehensive)
2. R2 (payment): EP on card fields + error guessing
3. R3 (tax): Verify tax base is discounted amount
4. R4 (shipping): BVA on shipping boundaries (using post-discount values)
5. R5 (email): Functional test + timeout check
6. R6 (order number): Verify uniqueness with concurrent orders

---

## 💡 Statement/Branch Coverage Example

**Simplified discount calculation code:**

```
1: function calculateDiscount(subtotal, isGoldMember) {
2:     discount = 0
3:     if (subtotal >= 200) {
4:         discount = subtotal * 0.15
5:     } else if (subtotal >= 100) {
6:         discount = subtotal * 0.10
7:     }
8:     if (isGoldMember && discount > 0) {
9:         loyaltyDiscount = (subtotal - discount) * 0.05
10:        discount = discount + loyaltyDiscount
11:    }
12:    maxDiscount = subtotal * 0.20
13:    if (discount > maxDiscount) {
14:        discount = maxDiscount
15:    }
16:    return discount
17: }
```

**Executable statements:** Lines 2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 16 = 12 statements

**Branches:**
- Line 3: TRUE/FALSE (2)
- Line 5: TRUE/FALSE (2)  
- Line 8: TRUE/FALSE (2)
- Line 13: TRUE/FALSE (2)
- Total: 8 branches

**Test cases for 100% branch coverage:**

| TC | subtotal | isGoldMember | Path | Branches Covered |
|----|----------|--------------|------|------------------|
| TC1 | 250 | true | Lines 3T, 8T, 13F | 3T, 8T, 13F |
| TC2 | 150 | false | Lines 3F, 5T, 8F, 13F | 3F, 5T, 8F |
| TC3 | 50 | false | Lines 3F, 5F, 8F, 13F | 5F |
| TC4 | 250 | true (with modified cap to trigger 13T) | Lines 13T | 13T |

Minimum: 4 test cases for 100% branch coverage (8/8 branches).

---

## 🗓️ Sample Test Plan Excerpt

**Scope:** Checkout module (REQ-CHK-001 through REQ-CHK-006)

**Approach:** Risk-based testing with EP, BVA, and decision table techniques for discount/payment logic. State transition testing for the order workflow.

**Entry Criteria:**
- Checkout module deployed to staging
- Cart functionality verified (prerequisite)
- Test payment gateway sandbox available

**Exit Criteria:**
- All high-risk test cases executed
- No critical or high-severity defects open
- Discount calculation accuracy verified for all rules

**Test Environment:** Staging server, payment sandbox (Stripe test mode), test accounts for Gold/non-Gold members.

---

## 🐞 Sample Defect Report

```
ID:             BUG-3001
Title:          Gold member loyalty discount applied even when order 
                subtotal is under $100 (no order-value discount earned)
Severity:       High
Priority:       High
Steps:
1. Log in as Gold member (test_gold@test.com)
2. Add item worth $80 to cart
3. Proceed to checkout
Expected: No discount (subtotal < $100, order discount = 0%, 
          loyalty discount only applies "after order-value discount")
Actual:   5% loyalty discount ($4.00) applied despite no order-value 
          discount being earned
Related Req: REQ-CHK-002 ("additional 5% applied AFTER the order-value discount")
```

---

## ❓ Reflection Questions

1. Why is BVA particularly important for the shipping calculation? (Hint: the shipping boundaries depend on the POST-discount amount, not the subtotal.)

2. If you could only test 5 scenarios for the discount logic, which 5 would you choose and why?

3. The discount cap (20%) never actually triggers with the current rules (max effective is 19.25%). Should you still test it? Why or why not?

4. What additional negative/error-guessing test cases would you add beyond the systematic EP/BVA cases?

---

## ❓ Worked Solutions to Reflection Questions

**1.** BVA is critical for shipping because a customer whose subtotal is $155 but receives a 10% discount ($15.50 off) now has a post-discount amount of $139.50. This falls in the $4.99 shipping tier, not free shipping. Testing at the boundaries of the post-discount amount (not the pre-discount subtotal) catches defects where shipping is calculated from the wrong value.

**2.** The 5 most valuable scenarios: (a) $99.99 non-Gold (no discount — boundary), (b) $100 non-Gold (10% — boundary), (c) $200 Gold (15% + 5% — both discounts active), (d) $199.99 Gold (10% + 5% — boundary for higher tier), (e) Invalid $0 order (error handling). These cover all boundaries, both loyalty states, and one invalid case.

**3.** Yes, test the cap even though it does not trigger under current rules. Requirements may change (higher loyalty rates), the implementation might have a bug in the cap logic that only shows with different parameters, and the code path should be exercised. Use a test configuration or directly test the code with inputs that force cap activation.

**4.** Additional negative/error-guessing cases: negative quantity, very large quantity (integer overflow), applying a discount code that does not exist, concurrent checkout with same item (race condition on stock), session timeout during payment, browser back-button during payment processing, network timeout during gateway call.
