# Case Study 2 — E-Commerce Decision Table

## Context

You are the MBT Test Analyst for ShopMax, an e-commerce platform. The checkout process has complex business rules that the team wants to model and test using decision tables.

**Checkout Rules:**
- Customers get discounts based on membership level and order value
- Shipping is free for orders over $50 (members) or $75 (non-members)
- Express shipping is available for in-stock items only
- International orders have additional restrictions

## Task 1: Decision Table Construction

**Question:** Create a decision table for the checkout discount and shipping rules.

**Model Answer:**

**Conditions:**
1. Member? (Y/N)
2. Order Value > $50? (Y/N)
3. Order Value > $100? (Y/N)
4. In Stock? (Y/N)
5. International? (Y/N)

**Actions:**
A1: Apply 10% member discount
A2: Apply 5% bulk discount (>$100)
A3: Free standard shipping
A4: Free express shipping
A5: Charge $5 standard shipping
A6: Charge $10 express shipping
A7: Charge $15 international shipping
A8: Show "Express unavailable" (out of stock)
A9: Show "International restrictions" warning

**Full Decision Table (32 rules):**

| Conditions | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 |
|-----------|----|----|----|----|----|----|----|----|
| Member? | Y | Y | Y | Y | Y | Y | Y | Y |
| >$50? | Y | Y | Y | Y | N | N | N | N |
| >$100? | Y | Y | N | N | Y | Y | N | N |
| In Stock? | Y | N | Y | N | Y | N | Y | N |
| International? | Y | Y | Y | Y | Y | Y | Y | Y |

| Actions | | | | | | | | |
| 10% Discount | X | X | X | X | X | X | | |
| 5% Bulk | X | X | | | X | X | | |
| Free Standard | X | X | X | X | | | | |
| Free Express | X | | | | | | | |
| $5 Standard | | | | | X | X | X | X |
| $10 Express | | | | | | | | |
| $15 Intl | X | X | X | X | X | X | X | X |
| Express Unavail | | X | | X | | X | | X |
| Intl Warning | X | X | X | X | X | X | X | X |

**Reduced Table (after removing impossible/duplicate rules):**

| Conditions | Member>$100 InStock Domestic | Member>$100 InStock Intl | Member $50-100 InStock | Non-Member >$75 InStock | Non-Member <$75 | Out of Stock |
|-----------|------------------------------|--------------------------|------------------------|------------------------|-----------------|-------------|
| Member? | Y | Y | Y | N | N | - |
| Order Value | >$100 | >$100 | $50-100 | >$75 | <$75 | - |
| In Stock? | Y | Y | Y | Y | Y | N |
| International? | N | Y | - | - | - | - |

| Actions | | | | | | |
| 10% Discount | X | X | X | | | |
| 5% Bulk | X | X | | | | |
| Free Standard | X | X | X | X | | |
| Free Express | X | | | | | |
| $5 Standard | | | | | X | |
| $15 Intl | | X | | | | |
| Express Unavail | | | | | | X |

---

## Task 2: Test Selection from Decision Table

**Question:** Define test selection criteria for the checkout decision table.

**Model Answer:**

**Criteria 1: Rule Coverage (Complete)**
- Every rule in the reduced table is covered by at least one test
- 6 rules → minimum 6 tests
- Example test for Rule 1:
  - Member: Yes
  - Order: $150
  - In Stock: Yes
  - Domestic: Yes
  - Expected: 10% + 5% discount, free standard + express shipping

**Criteria 2: Boundary Value Testing**
- Test at boundaries of order value:
  - $49.99 (non-member, below $50)
  - $50.00 (member threshold for free shipping)
  - $50.01 (member, just above threshold)
  - $99.99 (member, below bulk discount)
  - $100.00 (bulk discount threshold)
  - $100.01 (member, just above bulk threshold)
  - $74.99 (non-member, below free shipping)
  - $75.00 (non-member free shipping threshold)
  - $75.01 (non-member, just above threshold)

**Criteria 3: Condition Coverage**
- Each condition is true and false in at least one test:
  - Member: Yes/No
  - Order value: Various ranges
  - In Stock: Yes/No
  - International: Yes/No

**Criteria 4: Error Paths**
- Out of stock + express shipping requested → Express unavailable
- International + restricted item → International restrictions warning
- Expired member → Treat as non-member

---

## Task 3: MBT Integration with Existing Tests

**Question:** The team already has 200 manual test cases for checkout. How should they integrate with the new decision table MBT approach?

**Model Answer:**

**Strategy: Hybrid Approach**

1. **Map Existing Tests to Rules:**
   - Review 200 manual tests and map each to a decision table rule
   - Identify: Which rules are already covered? Which are missing?

2. **Gap Analysis:**
   - Rules covered by manual tests: Keep manual tests (they may include UI validation)
   - Rules NOT covered: Generate MBT tests to fill gaps
   - Boundary values missing: Add generated boundary tests

3. **Maintenance Plan:**
   - When rules change: Update decision table, regenerate MBT tests
   - Keep manual tests for exploratory/UI scenarios that MBT doesn't cover
   - Gradually replace manual rule-based tests with MBT as confidence grows

4. **Metrics:**
   - Track: Manual test coverage vs. MBT coverage
   - Goal: Decision table rule coverage = 100% (combination of manual + MBT)

**Example Integration:**

| Rule | Manual Tests | MBT Tests | Status |
|------|------------|-----------|--------|
| Member >$100 InStock Domestic | 3 | 5 | Covered |
| Member >$100 InStock Intl | 0 | 5 | **Gap filled by MBT** |
| Member $50-100 InStock | 2 | 5 | Covered |
| Non-Member >$75 InStock | 1 | 5 | Covered |
| Non-Member <$75 | 5 | 3 | Covered |
| Out of Stock | 0 | 4 | **Gap filled by MBT** |
| Boundary values | 1 | 10 | **Gap filled by MBT** |

**Result:**
- Manual tests: 200 (reduced to 150 after removing redundant rule tests)
- MBT tests: 37 generated
- Total: 187 tests covering more scenarios than original 200

---

## Task 4: ROI of Decision Table MBT

**Question:** Calculate the ROI for adopting decision table MBT for checkout testing.

**Model Answer:**

**Current Costs (Annual):**
- Manual test design/maintenance for checkout: 40 hours ≈ $4,000
- Regression testing checkout (4 releases): 80 hours ≈ $8,000
- Defects found late (production): ≈ $6,000
- **Total:** $18,000

**MBT Costs (Annual):**
- Tool: $2,000/year
- Initial model creation: 16 hours ≈ $1,600 (one-time)
- Model maintenance: 4 hours per release ≈ $1,600/year
- **Total Year 1:** $5,200
- **Total Year 2+:** $3,600

**MBT Benefits (Annual):**
- Test maintenance savings (regenerate vs. manual update): $6,000
- Earlier defect detection: $4,000
- Better coverage (fewer gaps): $3,000
- **Total:** $13,000

**Year 1:**
- Net benefit: $13,000 - $5,200 = $7,800
- ROI: $7,800 / $5,200 = 150%
- Payback: ~5 months

**Year 2+:**
- Net benefit: $13,000 - $3,600 = $9,400
- ROI: $9,400 / $3,600 = 261%
