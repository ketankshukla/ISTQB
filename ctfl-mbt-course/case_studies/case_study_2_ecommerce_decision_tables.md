# 📂 Case Study 2 — E-Commerce Decision Tables

## ⭐ Context

You are a Test Analyst for ShopRight, an e-commerce platform. The checkout process has complex business rules for pricing, discounts, and shipping. The team wants to use decision tables for MBT.

## 📑 Requirements

**R1: Customer Type**
- Regular customer: no special discounts
- Member customer: 5% discount on all orders
- VIP customer: 10% discount on all orders + free shipping

**R2: Order Amount**
- Orders under $50: standard shipping ($5.99)
- Orders $50-$100: free standard shipping
- Orders over $100: free express shipping

**R3: Promo Code**
- Valid promo code: additional 15% discount
- Invalid/expired promo code: no additional discount, error message

**R4: Product Availability**
- All items in stock: process normally
- Some items out of stock: backorder available items, notify customer
- All items out of stock: cancel order, notify customer

---

## 🗂️ Task 1: Create Decision Tables

Create decision tables for the pricing and shipping rules.

**Model Answer:**

**Decision Table 1: Pricing**

| Conditions | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Member | N | N | N | N | Y | Y | Y | Y | VIP | VIP | VIP | VIP |
| Order >= $100 | N | N | Y | Y | N | N | Y | Y | N | N | Y | Y |
| Valid Promo | N | Y | N | Y | N | Y | N | Y | N | Y | N | Y |
| **Actions** | | | | | | | | | | | | |
| Base Discount | 0% | 0% | 0% | 0% | 5% | 5% | 5% | 5% | 10% | 10% | 10% | 10% |
| Promo Discount | 0% | 15% | 0% | 15% | 0% | 15% | 0% | 15% | 0% | 15% | 0% | 15% |
| Total Discount | 0% | 15% | 0% | 15% | 5% | 20% | 5% | 20% | 10% | 25% | 10% | 25% |

**Decision Table 2: Shipping**

| Conditions | R1 | R2 | R3 | R4 | R5 | R6 |
|---|---|---|---|---|---|---|
| Order < $50 | Y | Y | N | N | N | N |
| Order $50-$100 | N | N | Y | Y | N | N |
| Order > $100 | N | N | N | N | Y | Y |
| VIP Customer | N | Y | N | Y | N | Y |
| **Actions** | | | | | | |
| Standard Shipping $5.99 | X | - | - | - | - | - |
| Free Standard | - | X | X | X | - | - |
| Free Express | - | - | - | - | X | X |

---

## ⭐ Task 2: Identify Impossible Rules

Which combinations are impossible?

**Model Answer:**

**Impossible Pricing Rules:**
- None of the combinations are logically impossible, though some may be rare.
- VIP + Order >= $100 + Valid Promo (25% total discount) may be a business policy limit, but not logically impossible.

**Impossible Shipping Rules:**
- None impossible, but VIP always gets free shipping regardless of order amount.

---

## ⭐ Task 3: Generate Test Cases

How many test cases are needed for full coverage of both tables (before removing impossible rules)?

**Model Answer:**

**Pricing Table:** 12 rules (3 customer types × 2 order ranges × 2 promo states = 12)
**Shipping Table:** 6 rules (3 order ranges × 2 VIP states = 6)

**Total:** 12 + 6 = 18 test cases for full coverage of both tables.

**Note:** In practice, these could be combined into end-to-end checkout test cases that cover both pricing and shipping simultaneously.

---

## 📊 Task 4: Coverage Calculation

After testing, 16 of 18 rules were covered. The 2 uncovered rules were:
- VIP + Order < $50 + Valid Promo (rare edge case)
- VIP + Order $50-$100 + No Promo (common, but missed)

**Model Answer:**

**Coverage:** 16/18 = 88.9%

**Actions:**
1. Add test case for VIP + Order < $50 + Valid Promo
2. Add test case for VIP + Order $50-$100 + No Promo
3. Review why these were missed during test design
