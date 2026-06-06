# Chapter 4 — Testing Financial Calculations and Algorithms: Lessons

---

## 4.1 Interest and Amortization Testing

### Simple Interest

**Formula:** Interest = Principal × Rate × Time

**Test scenarios:**
- Verify exact decimal precision
- Test partial periods (e.g., 45 days)
- Check rate changes mid-period
- Validate leap year day counts

### Compound Interest

**Formula:** A = P(1 + r/n)^(nt)

Where:
- P = principal
- r = annual rate
- n = compounding periods per year
- t = years

**Test scenarios:**
| Input | Expected Check |
|-------|----------------|
| Daily compounding | 365 or 366 periods |
| Monthly compounding | 12 periods |
| Zero rate | No interest accrued |
| Negative rate (deflation) | Principal decreases |

### Loan Amortization

**Fixed-rate mortgage:**
- Monthly payment = P × [r(1+r)^n] / [(1+r)^n - 1]
- Early payments = mostly interest
- Later payments = mostly principal

**Testing checks:**
- Sum of all payments = principal + total interest
- Last payment clears balance to zero
- Extra principal payments reduce total interest
- Rate change recalculates payment correctly

---

## 4.2 Bond Pricing and Accrued Interest

### Bond Price

**Clean price:** Present value of future cash flows
**Dirty price:** Clean price + accrued interest

**Accrued interest:**
- Days since last coupon / Days in coupon period × Coupon amount
- Day count conventions: 30/360, Actual/Actual, Actual/360

**Testing focus:**
- Verify correct day count convention is used
- Check leap year handling
- Validate dirty vs clean price split
- Test zero-coupon bonds (no interim payments)

---

## 4.3 Derivatives Greeks

### Delta

- Rate of change of option price with respect to underlying price
- Call delta: 0 to +1
- Put delta: -1 to 0

### Gamma

- Rate of change of delta with respect to underlying price
- Highest for at-the-money options

### Theta

- Rate of change of option price with respect to time
- Options lose value as expiration approaches

### Vega

- Rate of change of option price with respect to volatility
- Higher for longer-dated options

**Testing approach:**
1. Calculate Greeks using known inputs
2. Verify against external benchmark (Bloomberg, academic formula)
3. Test edge cases (deep ITM, deep OTM, ATM)
4. Verify Greeks sum correctly in portfolio context

---

## 4.4 Value-at-Risk (VaR)

### Methods

| Method | Description | Testing Focus |
|--------|-------------|---------------|
| **Historical** | Uses actual historical returns | Data completeness, look-back period |
| **Parametric** | Assumes normal distribution | Mean/variance accuracy, tail risk |
| **Monte Carlo** | Simulates random scenarios | Random seed reproducibility, scenario count |

### Interpretation

- "1-day 95% VaR = $1M" means there is a 5% chance of losing more than $1M in one day
- VaR does NOT measure maximum possible loss (tail risk)

**Testing checks:**
- Validate confidence level (95%, 99%)
- Check holding period (1-day, 10-day)
- Verify portfolio positions are current
- Test extreme market conditions (stress VaR)

---

## 4.5 FX Calculations

### Spot Rate

- Exchange rate for immediate delivery (T+2)
- Bid = price dealer buys base currency
- Ask = price dealer sells base currency
- Spread = Ask - Bid

### Forward Rate

- F = S × (1 + r_q × t) / (1 + r_b × t)

Where:
- S = spot rate
- r_q = quote currency interest rate
- r_b = base currency interest rate
- t = time to maturity

**Testing scenarios:**
- Forward premium vs discount
- Cross-rate consistency
- Triangular arbitrage prevention
- Rollover (tom-next) rates

---

## 4.6 Precision, Rounding, and Floating-Point Issues

### Why Float is Dangerous

```
0.1 + 0.2 = 0.30000000000000004 (in IEEE 754 floating point)
```

**Solutions:**
- Use integer arithmetic (store cents, not dollars)
- Use decimal/BigDecimal types
- Define rounding rules explicitly (HALF_UP, HALF_EVEN)
- Round at the correct step (per-item vs total)

### Rounding Test Cases

| Scenario | Rule | Expected |
|----------|------|----------|
| $10.005 | HALF_UP | $10.01 |
| $10.005 | HALF_EVEN | $10.00 (if previous digit even) |
| $10.015 | HALF_EVEN | $10.02 (if previous digit odd) |
| Tax on $99.99 at 7% | Per-item rounding | $7.00 or $6.9993 → $7.00 |

---

## Worked Examples

### Worked Example 1: Amortization Schedule Verification

**Scenario:** $300,000 mortgage at 4% annual, 30 years, monthly payments.

**Calculation:**
- Monthly rate = 0.04 / 12 = 0.003333
- Number of payments = 360
- Monthly payment = $1,432.25

**Test verification:**
1. Sum of 360 payments = $515,610.00
2. Total interest = $215,610.00
3. First payment: $1,000 interest, $432.25 principal
4. Last payment: ~$5 interest, ~$1,427 principal
5. After 180 payments (15 years): remaining balance ≈ $193,000

### Worked Example 2: VaR Backtesting

**Scenario:** A bank calculates 1-day 95% VaR as $2M. Over 250 trading days, there were 18 days with losses exceeding $2M.

**Expected exceptions at 95%:** 250 × 5% = 12.5 days

**Result:** 18 exceptions

**Interpretation:** The VaR model is underestimating risk (more exceptions than expected). The model should be recalibrated.

**Testing actions:**
- Verify the calculation methodology
- Check if market volatility increased
- Review position data accuracy
- Consider moving to 99% confidence

### Worked Example 3: Cross-Rate Consistency

**Scenario:** System shows EUR/USD = 1.1000, USD/JPY = 150.00. What is EUR/JPY?

**Calculation:**
- EUR/JPY = EUR/USD × USD/JPY
- EUR/JPY = 1.1000 × 150.00 = 165.00

**Test for triangular arbitrage prevention:**
- If system shows EUR/JPY = 165.10 (inconsistent with inputs)
- Arbitrage opportunity exists: buy EUR→USD→JPY, sell EUR→JPY
- System should either maintain consistency or flag discrepancy
