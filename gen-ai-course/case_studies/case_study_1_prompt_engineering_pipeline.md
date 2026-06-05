# Case Study 1 — Prompt Engineering Pipeline for E-Commerce Testing

## Context

You are a senior test analyst at an e-commerce company. The development team is building a new checkout flow with the following requirements:

- **Guest checkout:** Users can check out without creating an account.
- **Payment methods:** Credit card, PayPal, and "Buy Now Pay Later" (BNPL).
- **Shipping options:** Standard (free over $50), Express (+$10), Overnight (+$25).
- **Discounts:** Percentage-based coupons, fixed-amount gift cards, and "buy X get Y free" promotions.
- **Tax:** Calculated based on shipping address and local tax rules.
- **Validation:** Email format, required fields, CVV length, and address verification.

Your team wants to use an LLM to generate comprehensive test cases for this checkout flow.

---

## Tasks

### Task 1: Design an Effective Prompt (Chapter 2)

Write a complete prompt that includes all six components of an effective prompt (role, task, input, constraints, examples, format). Target: test case generation for the guest checkout path with credit card payment.

**Consider:**
- What role should the LLM assume?
- What specific input data should you provide?
- What constraints ensure comprehensive coverage?
- What example format ensures consistency?

### Task 2: Select Prompt Techniques (Chapter 2)

For each of the following sub-tasks, recommend the most appropriate prompt engineering technique and justify your choice:

A. Generating basic happy-path test cases for guest checkout
B. Generating edge cases for discount stacking (e.g., coupon + gift card + BNPL)
C. Explaining why a particular generated test case might miss a tax calculation requirement

### Task 3: Evaluate and Refine (Chapters 2 and 3)

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

Evaluate this output against quality criteria. Identify at least three problems. Write a refined prompt constraint that would prevent these problems.

---

## Model Answers

### Task 1 Model Answer

```
Role: You are a senior QA engineer specializing in e-commerce payment systems with 10 years of experience testing checkout flows across multiple platforms.

Task: Generate comprehensive test cases for the guest checkout path using credit card payment.

Input: 
- The system supports guest checkout (no account required).
- Payment: Visa, Mastercard, Amex (valid formats: 16 digits for Visa/MC, 15 for Amex, CVV 3 or 4 digits).
- Shipping: Standard (free if order >= $50, otherwise $5.99), Express (+$10), Overnight (+$25).
- Tax: 8% for in-state addresses, 0% for out-of-state.
- Validation: Email must match regex, required fields cannot be empty, CVV must be 3-4 digits.

Constraints:
- Generate exactly 8 test cases: 2 positive (happy path), 3 negative (validation failures), 3 edge cases (boundary values, combinations).
- Each test case must include: ID, preconditions, steps (numbered), expected result, priority (High/Medium/Low).
- Test cases must cover: email validation, CVV validation, minimum order for free shipping, tax calculation, and address verification.
- Do NOT include test cases for PayPal or BNPL — credit card only.

Example (format):
| TC-ID | Description | Preconditions | Steps | Expected Result | Priority |
|-------|-------------|---------------|-------|-----------------|----------|
| CC-001 | Valid guest checkout | Product in cart, valid CC | 1. Add $60 item... | Order confirmed, $4.80 tax charged | High |

Format: Return as a markdown table with the columns shown in the example.
```

**Why this works:** Defines expertise, narrows scope to credit card, provides concrete business rules, sets quantitative targets, gives a format example, and excludes non-target payment methods.

### Task 2 Model Answer

**A. Basic happy-path test cases:** Zero-shot prompting is sufficient. The task is straightforward, well-represented in LLM training data, and doesn't require complex formatting or reasoning.

**B. Edge cases for discount stacking:** Chain-of-thought prompting. Discount stacking involves complex conditional logic ("if coupon + gift card + BNPL, which applies first? Are they combinable?"). The LLM must reason through business rules step-by-step to identify valid and invalid combinations.

**C. Explaining missing tax calculation coverage:** Chain-of-thought or few-shot with examples of good requirement analysis. The model needs to analyze the requirement, map it to generated test cases, and identify gaps — a reasoning task.

### Task 3 Model Answer

**Evaluation problems:**

1. **Incorrectness:** An expired credit card should be rejected, not accepted with a warning. The expected result is factually wrong.
2. **Incompleteness:** The test case does not specify which expiration date is used (month/year boundary, exactly expired, far expired).
3. **Feasibility:** Step 4 says "Complete purchase" but the system should decline before completion. The steps are not executable as written.
4. **Missing detail:** No preconditions (e.g., product in cart, valid shipping address).

**Refined constraint:**
```
For negative test cases involving validation failures:
- The expected result must state the exact validation error message or behavior.
- The test must NOT proceed past the validation failure point.
- Include the specific invalid value being tested (e.g., "expiration date: 01/2020").
- Preconditions must include the minimum viable state to reach the validation step.
```
