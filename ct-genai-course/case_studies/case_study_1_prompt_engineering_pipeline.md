# 📂 Case Study 1 — Prompt Engineering Pipeline for E-Commerce Testing

## ⭐ Context

You are a senior test analyst at an e-commerce company called "ShopFast" that processes $2B in annual transactions. The development team is building a new checkout flow for the upcoming holiday season peak (projected 5x normal traffic). The checkout flow has the following requirements:

- **Guest checkout:** Users can check out without creating an account. Email is required for order confirmation.
- **Registered checkout:** Users with accounts can use saved payment methods and addresses.
- **Payment methods:** Credit card (Visa, Mastercard, Amex, Discover), PayPal, "Buy Now Pay Later" (BNPL) via Klarna and Afterpay.
- **Shipping options:** Standard (free over $50, otherwise $5.99), Express (+$10, 2-day), Overnight (+$25, next-day).
- **Discounts:** Percentage-based coupons (e.g., 15% off), fixed-amount gift cards (e.g., $25 off), "buy X get Y free" promotions, and free shipping codes.
- **Discount rules:** Only one coupon per order. Gift cards can be combined with coupons. BNPL cannot be combined with gift cards.
- **Tax:** Calculated based on shipping address and local tax rules. International orders are tax-exempt but subject to customs duties (not handled at checkout).
- **Validation:** Email format validation, required field validation, CVV length validation (3 for most cards, 4 for Amex), address verification via USPS API, and credit card Luhn checksum validation.
- **Security:** PCI-DSS Level 1 compliance required. No card data stored in ShopFast systems (tokenized via payment processor).
- **Performance:** Checkout must complete within 3 seconds for 99.9% of transactions during peak load.

Your team of 8 testers has 3 weeks to design and execute checkout testing before the holiday code freeze. You want to use an LLM to accelerate test design while maintaining quality.

---

## ⭐ Tasks

### 🎨 Task 1: Design an Effective Prompt (Chapter 2)

Write a complete prompt that includes all six components of an effective prompt (role, task, input, constraints, examples, format). Target: test case generation for the guest checkout path with credit card payment.

**Consider:**
- What role should the LLM assume given the PCI-DSS and e-commerce context?
- What specific input data should you provide beyond the requirements above?
- What constraints ensure comprehensive coverage of validation, security, and business rules?
- What example format ensures consistency with your team's test management tool (TestRail)?

### 🎯 Task 2: Select Prompt Techniques (Chapter 2)

For each of the following sub-tasks, recommend the most appropriate prompt engineering technique and justify your choice:

A. Generating basic happy-path test cases for guest checkout with a single item
B. Generating edge cases for discount stacking (e.g., coupon + gift card + BNPL applied simultaneously)
C. Explaining why a particular generated test case might miss the tax calculation requirement for multi-state scenarios
D. Converting the generated test cases into a structured JSON format for import into TestRail
E. Analyzing which of the 8 requirements areas (guest checkout, registered checkout, payment, shipping, discounts, tax, validation, security) has the weakest test coverage after initial generation

### 🔷 Task 3: Evaluate and Refine (Chapters 2 and 3)

An LLM generates the following test case for the checkout flow:

```
Test Case: Checkout with expired credit card
Steps:
1. Add item to cart
2. Proceed to checkout
3. Enter expired credit card details
4. Complete purchase
Expected Result: Order is placed successfully with a warning
```

Evaluate this output against all six quality criteria (correctness, completeness, consistency, relevance, feasibility, absence of hallucinations). Identify at least two problems per applicable criterion. Write a refined prompt constraint that would prevent these problems, and explain which GenAI limitation each problem represents.

### ⚠️ Task 4: Risk Assessment (Chapter 3)

Identify the top three risks of using an LLM to generate test cases for this checkout flow, and propose specific mitigations for each. Consider both technical risks (hallucinations, reasoning errors) and organizational risks (privacy, security, compliance).

---

## ✔️ Model Answers

### ✔️ Task 1 Model Answer

```
Role: You are a senior QA engineer specializing in e-commerce payment systems 
with 10 years of experience testing PCI-DSS compliant checkout flows across 
Shopify, Magento, and custom platforms.

Task: Generate comprehensive test cases for the guest checkout path using 
credit card payment. Focus on validation, security, and business rule coverage.

Input: 
Guest Checkout Rules:
- No account required. Email collected for order confirmation.
- Payment: Visa (16 digits), Mastercard (16 digits), Amex (15 digits), Discover (16 digits)
- CVV: 3 digits for Visa/MC/Discover, 4 digits for Amex
- Shipping: Standard (free if order >= $50, otherwise $5.99), Express (+$10), Overnight (+$25)
- Tax: 8% for in-state (California), 0% for out-of-state, international exempt
- Discounts: One coupon per order. Gift cards can combine with coupons. 
  BNPL cannot combine with gift cards.
- Validation: Email regex, required fields, CVV length, address verification, Luhn checksum
- Security: PCI-DSS Level 1, no card data stored (tokenized)
- Performance: <3 seconds for 99.9% of transactions

Constraints:
- Generate exactly 12 test cases: 3 positive (happy path), 4 negative (validation failures), 
  5 edge cases (boundary values, combinations, security scenarios)
- Each test case must include: ID, Title, Preconditions, Steps (numbered with specific values), 
  Expected Result, Priority (High/Medium/Low), Risk Level
- Cover: email validation, CVV validation, minimum order for free shipping, tax calculation, 
  address verification, Luhn checksum, performance threshold, PCI tokenization verification
- Do NOT include test cases for: PayPal, BNPL, registered checkout, mobile app, admin panel
- All test data must be synthetic (use example.com for emails, test card numbers from PCI docs)

Example (format):
| TC-ID | Title | Preconditions | Steps | Expected Result | Priority | Risk |
|-------|-------|---------------|-------|-----------------|----------|------|
| CC-GUEST-001 | Valid guest checkout with standard shipping | Product in cart ($60), valid Visa test card 4111111111111111 | 1. Add $60 item to cart<br>2. Proceed to guest checkout<br>3. Enter email: test@example.com<br>4. Enter shipping: 123 Main St, CA<br>5. Enter card: 4111111111111111, CVV 123, Exp 12/2025<br>6. Select Standard shipping<br>7. Click Place Order | Order confirmed, $4.80 tax, $0 shipping, total $64.80, token received from payment processor, confirmation email sent, page loads <3 sec | High | Medium |

Format: Return ALL test cases as a single markdown table with the columns shown in the example.
```

**Why this works:**
- **Role:** Activates PCI-DSS and e-commerce domain knowledge, setting appropriate depth
- **Task:** Clear scope (guest checkout, credit card only)
- **Input:** Complete business rules including the discount combination rules and security requirements
- **Constraints:** Quantitative targets (12 test cases), specific coverage requirements, exclusions (PayPal/BNPL), security requirement (synthetic data only)
- **Example:** Shows exact TestRail-compatible format, specific test data values, and expected result depth
- **Format:** Reinforces the desired structure for direct import or manual entry

---

### ✔️ Task 2 Model Answer

**A. Basic happy-path test cases:** Zero-shot prompting. Guest checkout with a single item and credit card is a well-understood domain. The model has extensive training on e-commerce test cases. A clear, structured prompt with constraints will produce good results without examples.

**B. Edge cases for discount stacking:** Chain-of-thought prompting. Discount stacking involves complex conditional logic with business rules ("coupon + gift card = valid; coupon + gift card + BNPL = invalid because BNPL cannot combine with gift cards"). The LLM must reason through valid and invalid combinations step-by-step. CoT makes this reasoning visible and verifiable.

**C. Explaining missing tax calculation coverage:** Chain-of-thought with structured analysis. The model needs to: (1) identify all tax-relevant requirements (in-state, out-of-state, international), (2) review generated test cases for tax coverage, (3) map each requirement to test cases, (4) identify gaps. CoT forces this systematic analysis.

**D. Converting to JSON for TestRail:** Few-shot prompting. TestRail has a specific JSON import format. Showing 1-2 complete examples of the desired JSON structure ensures the model produces valid, correctly structured output that can be imported directly.

**E. Analyzing coverage across requirement areas:** Prompt chaining. Step 1: Extract the 8 requirement areas. Step 2: Count how many test cases cover each area. Step 3: Identify the area with the fewest test cases. Step 4: Recommend additional test cases for the weakest area. Each step is focused and verifiable.

---

### ✔️ Task 3 Model Answer

**Evaluation against quality criteria:**

**Correctness (2 problems):**
1. The expected result states "Order is placed successfully with a warning" but an expired credit card should be **rejected** at the payment authorization step, not accepted. This is factually incorrect.
2. The test case does not specify which expiration date is used, making it impossible to verify correctness. Is it 01/2020 (far expired), 01/2024 (recently expired), or 12/2023 (month-boundary expired)?

**Completeness (2 problems):**
1. Missing preconditions: Does the cart have an item? Is the shipping address valid? These are required to reach the payment step.
2. Missing steps: No shipping selection, no email entry, no address verification — the test case jumps directly to "enter credit card details."

**Consistency (2 problems):**
1. The test case uses a different format from the other generated test cases (lacks ID, lacks priority, lacks preconditions).
2. Step 4 says "Complete purchase" but the expected result says "Order is placed" — inconsistent terminology (purchase vs. order).

**Relevance (1 problem):**
1. The test case is relevant to the checkout flow but the expected result contradicts the requirement that invalid cards should be rejected.

**Feasibility (2 problems):**
1. Step 4 "Complete purchase" is not executable — a real system would decline the transaction before the "complete" button works, or the button would be disabled.
2. Without specific card details (number, expiration date, CVV), another tester cannot reproduce this test case.

**Absence of hallucinations (1 problem):**
1. The expected result "Order is placed successfully with a warning" is not based on any stated requirement. The model invented this behavior.

**GenAI limitations represented:**
- **Hallucination:** The invented expected result (order placed with warning for expired card)
- **Reasoning error:** Failing to understand that expired cards should be rejected, not accepted
- **Lack of true understanding:** The model cannot verify actual payment gateway behavior

**Refined constraint to prevent these problems:**
```
For all payment validation test cases:
- The expected result must match the stated business rule EXACTLY. 
  If the rule says "reject," the expected result must say "rejected" not "accepted with warning."
- Steps must include the specific invalid value being tested (e.g., "Enter expiration date: 01/2020").
- Preconditions must include the minimum state to reach the validation step 
  (product in cart, valid shipping address entered, on payment page).
- The test must NOT proceed past a validation failure point.
- For negative test cases, the expected result must state the exact error message 
  or behavior from the requirements.
```

---

### ✔️ Task 4 Model Answer

**Risk 1: Hallucination in payment test cases**
- **Description:** The LLM might invent non-existent validation rules, incorrect payment gateway behaviors, or fake test card numbers that don't follow Luhn checksum rules.
- **Impact:** Incorrect test cases could lead to false confidence in checkout quality. Testers might waste time debugging "failures" that are actually correct test oracles.
- **Mitigation:** 
  - Provide the actual payment gateway documentation in the prompt context
  - Use only official PCI test card numbers (documented, public, safe to share)
  - Require the model to cite the specific requirement ID for each test case
  - Run all generated test cases against a test payment gateway to verify oracle correctness
  - Set temperature to 0.1 for payment test case generation

**Risk 2: PCI-DSS compliance violation through data exposure**
- **Description:** Testers might inadvertently paste real credit card numbers, production transaction IDs, or customer PII into LLM prompts.
- **Impact:** Violation of PCI-DSS Level 1 requirements. Potential fines ($5,000-$100,000/month), loss of payment processing ability, reputational damage.
- **Mitigation:**
  - Use only synthetic test data and official PCI test card numbers in all prompts
  - Implement a pre-prompt data scrubber that detects and redacts potential PII or card data
  - Require enterprise API agreements with explicit "no training data retention" clauses
  - Train all testers on PCI-safe prompt practices
  - Use on-premise or private endpoint models for any payment-related testing tasks

**Risk 3: Inadequate coverage of complex business rules**
- **Description:** The LLM might generate superficial test cases that miss interaction combinations (e.g., coupon + gift card + express shipping + in-state tax).
- **Impact:** Undiscovered defects in combination scenarios could reach production, especially during high-traffic holiday periods.
- **Mitigation:**
  - Use Chain-of-Thought prompting: "First identify all independent variables. Then identify all valid combinations. Then generate test cases for each combination."
  - Use decision table testing as a coverage criterion: ensure all rule combinations are represented
  - Have a senior business analyst review generated test cases against the discount and tax rules
  - Apply pairwise or combinatorial testing techniques to ensure interaction coverage
