# 📂 Case Study 1 — E-Commerce Checkout Test Design

## ⭐ Context

You are a Senior Test Analyst for ShopFlow, a mid-sized e-commerce company. The development team has just completed a major redesign of the checkout process. Your task is to design comprehensive tests for this feature.

## ⭐ The Checkout Feature

The checkout process has the following requirements:

**R1: Customer Types**
- Guest customers can check out without creating an account
- Registered customers can log in and use saved addresses and payment methods
- The system must verify the customer type at checkout start

**R2: Shipping Address**
- Address must include: name, street, city, state/province, ZIP/postal code, country
- ZIP code must be valid for the selected country (US: 5 digits or 5+4; UK: alphanumeric)
- The system validates the address against a third-party address verification service

**R3: Shipping Methods**
- Standard Shipping (5-7 business days): $5.99 (free for orders over $50)
- Express Shipping (2-3 business days): $12.99
- Overnight Shipping (1 business day): $24.99
- Shipping method availability depends on destination and product availability

**R4: Payment**
- Accepted methods: Credit Card (Visa, MasterCard, AmEx), PayPal, ShopFlow Store Credit
- Credit cards must pass Luhn algorithm validation and expiration date check
- PayPal redirects to PayPal site for authentication
- Store credit balance is checked and applied automatically
- For orders over $200, additional verification (CVV + billing ZIP) is required

**R5: Order Summary**
- Subtotal: sum of item prices
- Shipping: based on selected method
- Tax: calculated based on shipping destination (varies by state/country)
- Discounts: promo codes, loyalty rewards, seasonal sales
- Total = Subtotal + Shipping + Tax - Discounts

**R6: Order Confirmation**
- Order confirmation page displays order number, summary, and estimated delivery
- Confirmation email sent to customer
- Order status in system: "Pending" → "Processing" → "Shipped" → "Delivered"

---

## 📏 Task 1: Equivalence Partitioning and Boundary Value Analysis

Apply EP and 2-value BVA to the following fields:

1. Order total for free shipping eligibility
2. ZIP code field for US addresses
3. Credit card expiration date

**Model Answer:**

**1. Order Total for Free Shipping ($5.99 shipping for orders under $50, free for $50+):**

EP Partitions:
- Valid: Order total < $50 (shipping = $5.99)
- Valid: Order total >= $50 (shipping = free)
- Invalid: Order total < $0 (negative value)
- Invalid: Non-numeric input

2-Value BVA for $50 boundary:
- $49.99 (just under boundary) → shipping = $5.99
- $50.00 (at boundary) → shipping = free
- $50.01 (just over boundary) → shipping = free

**2. ZIP Code (US: 5 digits or 5+4 format):**

EP Partitions:
- Valid: 5 digits (12345)
- Valid: 5+4 digits (12345-6789)
- Invalid: < 5 digits (1234)
- Invalid: > 5 digits without hyphen (123456)
- Invalid: Non-numeric characters in 5-digit portion
- Invalid: Empty

2-Value BVA for length:
- 4 digits (min-1)
- 5 digits (min)
- 6 digits without hyphen (max+1 for basic format)

**3. Credit Card Expiration Date:**

EP Partitions:
- Valid: Future date (MM/YY > current date)
- Invalid: Past date (MM/YY < current date)
- Invalid: Current month (edge case — depends on policy)
- Invalid: Invalid format (13/25, 00/25)
- Invalid: Empty

2-Value BVA around current date:
- Previous month (invalid)
- Current month (boundary — depends on policy)
- Next month (valid)

---

## 🗂️ Task 2: Decision Table Testing

Create a decision table for payment processing based on:
- Customer type (Guest, Registered)
- Order amount (<$200, >=$200)
- Payment method (Credit Card, PayPal, Store Credit)
- Store credit balance (Sufficient, Insufficient)

**Model Answer:**

Conditions:
1. Customer = Registered (Y/N)
2. Order >= $200 (Y/N)
3. Payment = Credit Card (Y/N)
4. Payment = PayPal (Y/N)
5. Payment = Store Credit (Y/N)
6. Credit Balance Sufficient (Y/N)

Simplified Rules (selected examples):

| Conditions | R1 | R2 | R3 | R4 | R5 | R6 |
|---|---|---|---|---|---|---|
| Registered | Y | Y | N | N | Y | Y |
| Order >= $200 | Y | N | Y | N | Y | N |
| Credit Card | Y | N | Y | N | N | N |
| PayPal | N | Y | N | Y | N | N |
| Store Credit | N | N | N | N | Y | Y |
| Credit Sufficient | - | - | - | - | Y | N |
| **Actions** | | | | | | |
| Process with CVV+ZIP | X | - | X | - | - | - |
| Process standard | - | X | - | X | X | - |
| Apply store credit | - | - | - | - | X | X |
| Show insufficient credit | - | - | - | - | - | X |
| Redirect to PayPal | - | X | - | X | - | - |
| Register as guest | - | - | X | X | - | - |

**Key insight:** Registered customers with store credit use it automatically. Guests cannot use store credit. Orders >= $200 require additional verification for credit cards.

---

## 🔄 Task 3: State Transition Testing

Model the order status lifecycle and identify test cases for 1-switch coverage.

**Model Answer:**

States: Pending, Processing, Shipped, Delivered, Cancelled, Refunded

Events:
- Payment Confirmed: Pending → Processing
- Items Packed: Processing → Shipped
- Delivery Confirmed: Shipped → Delivered
- Customer Cancels (before ship): Pending/Processing → Cancelled
- Customer Cancels (after ship): Shipped → Shipped (cannot cancel)
- Refund Issued: Cancelled → Refunded
- Refund Issued: Delivered → Refunded

Transitions:
1. Pending → Processing (payment confirmed)
2. Processing → Shipped (packed)
3. Shipped → Delivered (delivered)
4. Pending → Cancelled (cancel)
5. Processing → Cancelled (cancel)
6. Cancelled → Refunded (refund)
7. Delivered → Refunded (refund)

**1-Switch Coverage Test Cases:**

| TC | Path | States Covered |
|---|---|---|
| TC1 | Pending → Processing → Shipped → Delivered | 4 states |
| TC2 | Pending → Cancelled → Refunded | 3 states |
| TC3 | Processing → Cancelled → Refunded | 2 states (some overlap) |

**Invalid transitions to test:**
- Delivered → Processing (cannot go back)
- Refunded → Shipped (cannot reverse)
- Pending → Delivered (must go through intermediate states)

---

## 🎯 Task 4: Technique Selection and Justification

For each requirement R1-R6, select the most appropriate test design technique(s) and justify your choice.

**Model Answer:**

| Requirement | Technique | Justification |
|---|---|---|
| R1: Customer Types | EP | Two discrete categories (Guest, Registered). Test one valid case per type plus invalid/missing type. |
| R2: Shipping Address | EP + BVA + Decision Table | EP for country categories. BVA for ZIP length boundaries. Decision table for address validation outcomes (valid, invalid format, service unavailable). |
| R3: Shipping Methods | Decision Table | Multiple interacting conditions (order total, destination, product availability) affect shipping options and cost. |
| R4: Payment | Decision Table + EP + State Transition | Decision table for payment method × amount × customer type combinations. EP for card types. State transition for payment flow (Initiated → Authenticated → Confirmed → Settled). |
| R5: Order Summary | BVA + Accuracy Testing | Numeric calculations with boundaries (discount thresholds, tax rates). Verify arithmetic correctness with known expected values. |
| R6: Order Confirmation | Use Case Testing | Workflow with main path (success) and alternatives (email bounce, page timeout). Verify postconditions. |

---

## ⚠️ Task 5: Risk-Based Test Selection

The project is behind schedule. You can only execute 60% of your planned tests. Which tests would you prioritize and why?

**Model Answer:**

**Priority 1 — Must Test (High Risk):**
- Payment processing with credit cards (financial risk, regulatory compliance)
- Tax calculation accuracy (legal requirement)
- Order total calculation (customer financial impact)
- State transitions for order lifecycle (core business process)

**Priority 2 — Should Test (Medium Risk):**
- Shipping method eligibility rules
- Address validation service integration
- Discount code application
- Guest vs. registered checkout differences

**Priority 3 — Can Defer (Lower Risk):**
- Email confirmation delivery (can be monitored in production)
- UI layout and cosmetics
- Minor edge cases in ZIP code validation (e.g., extremely rare formats)
- Load testing (can be done post-launch if needed)

**Justification:** Financial and legal compliance features carry the highest business risk. Core workflow functionality must work. Lower-risk items can be deferred or tested in production with monitoring.
