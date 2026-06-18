# ❓ Chapter 4 — Testing Financial Calculations and Algorithms: Practice Questions

---

### 🔷 Q1 (FT-4.1, K3)

A loan of $200,000 at 5% annual interest for 30 years requires monthly payments. Which test verifies that the total of all payments equals principal plus total interest?

A. Check the first payment amount
B. Sum all 360 payments and compare to expected total
C. Verify the interest rate is displayed correctly
D. Check the loan term in years

---

### 🔷 Q2 (FT-4.2, K2)

The "dirty price" of a bond includes:

A. Only the clean price
B. Clean price plus accrued interest
C. Only the coupon payment
D. Only the face value

---

### 🔷 Q3 (FT-4.3, K2)

Delta measures:

A. Time decay of an option
B. Sensitivity of option price to changes in underlying price
C. Sensitivity to volatility
D. Rate of change of delta

---

### 🔷 Q4 (FT-4.4, K2)

A 1-day 95% VaR of $1M means:

A. The maximum loss is $1M
B. There is a 5% probability of losing more than $1M in one day
C. The expected loss is $1M
D. Losses are always less than $1M

---

### 🔷 Q5 (FT-4.5, K3)

If EUR/USD = 1.10 and USD/JPY = 150, the cross rate EUR/JPY should be:

A. 136.36
B. 165.00
C. 150.00
D. 1.10

---

### 🔷 Q6 (FT-4.6, K2)

Using floating-point arithmetic for currency is risky because:

A. It uses too much memory
B. It introduces precision errors
C. It is too slow
D. It is not supported in databases

---

### 🔷 Q7 (FT-4.1, K2)

In an amortization schedule, early payments consist primarily of:

A. Principal
B. Interest
C. Fees
D. Taxes

---

### 🔷 Q8 (FT-4.2, K2)

A zero-coupon bond:

A. Pays coupons semiannually
B. Pays no periodic interest; return comes from discount to face value
C. Has no maturity date
D. Has a variable coupon rate

---

### 🔷 Q9 (FT-4.3, K2)

Theta measures:

A. Sensitivity to underlying price
B. Time decay of option value
C. Sensitivity to volatility
D. Sensitivity to interest rates

---

### 🔷 Q10 (FT-4.4, K2)

Which VaR method uses historical market data?

A. Parametric
B. Historical simulation
C. Monte Carlo
D. All of the above

---

### 🔷 Q11 (FT-4.5, K3)

A forward rate is calculated using:

A. Only the spot rate
B. Spot rate and interest rate differentials
C. Only historical averages
D. Only the inflation rate

---

### 🔷 Q12 (FT-4.6, K2)

HALF_EVEN rounding of 10.005 produces:

A. Always 10.01
B. 10.00 if the preceding digit is even
C. 10.01 if the preceding digit is odd
D. Both B and C depending on the preceding digit

---

### 🔷 Q13 (FT-4.1, K3)

A customer pays off a 30-year loan after 15 years. Testing should verify:

A. Only that the payment was accepted
B. That the remaining balance is zero and total interest paid is less than full-term
C. That the UI shows a thank-you message
D. That the interest rate increases

---

### 🔷 Q14 (FT-4.2, K2)

Accrued interest on a bond is calculated using:

A. Only the coupon rate
B. Days since last coupon divided by days in period, times coupon amount
C. The bond's market price
D. The bond's credit rating

---

### 🔷 Q15 (FT-4.3, K2)

Gamma is highest for options that are:

A. Deep in-the-money
B. At-the-money
C. Deep out-of-the-money
D. Expired

---

### 🔷 Q16 (FT-4.4, K2)

Monte Carlo VaR requires testing:

A. Only the final result
B. Random seed reproducibility and sufficient scenario count
C. Only the mean return
D. Only historical data completeness

---

### 🔷 Q17 (FT-4.5, K3)

Triangular arbitrage occurs when:

A. Three banks trade with each other
B. Cross-exchange rates are inconsistent, allowing risk-free profit
C. Three currencies are traded simultaneously
D. Interest rates in three countries differ

---

### 🔷 Q18 (FT-4.6, K2)

Storing currency as integer cents instead of float dollars:

A. Increases storage requirements
B. Eliminates floating-point rounding errors
C. Makes calculations slower
D. Is not supported by modern databases

---

### 🔷 Q19 (FT-4.1, K2)

Compound interest at 6% annual, compounded monthly, uses a monthly rate of:

A. 6%
B. 0.5%
C. 0.06%
D. 0.005%

---

### 🔷 Q20 (FT-4.4, K3)

A VaR model shows 20 exceptions in 250 days at 95% confidence. Expected exceptions are 12.5. This suggests:

A. The model is conservative
B. The model underestimates risk
C. The model is perfect
D. Nothing — exceptions are random

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**
**Rationale:** Sum all payments and compare to expected principal + interest to verify amortization correctness.

### 🔷 Q2
**Answer: B**
**Rationale:** Dirty price = clean price + accrued interest.

### 🔷 Q3
**Answer: B**
**Rationale:** Delta = sensitivity of option price to underlying price changes.

### 🔷 Q4
**Answer: B**
**Rationale:** 95% VaR = 5% probability of exceeding the threshold.

### 🔷 Q5
**Answer: B**
**Rationale:** EUR/JPY = EUR/USD × USD/JPY = 1.10 × 150 = 165.00.

### 🔷 Q6
**Answer: B**
**Rationale:** Floating-point introduces precision errors unsuitable for currency.

### 🔷 Q7
**Answer: B**
**Rationale:** Early amortization payments are mostly interest.

### 🔷 Q8
**Answer: B**
**Rationale:** Zero-coupon bonds pay no periodic interest; return is from discount to face value.

### 🔷 Q9
**Answer: B**
**Rationale:** Theta = time decay of option value.

### 🔷 Q10
**Answer: B**
**Rationale:** Historical simulation uses actual historical market returns.

### 🔷 Q11
**Answer: B**
**Rationale:** Forward rate = spot rate adjusted for interest rate differentials.

### 🔷 Q12
**Answer: D**
**Rationale:** HALF_EVEN rounds to nearest even number when equidistant.

### 🔷 Q13
**Answer: B**
**Rationale:** Early payoff should result in zero balance and reduced total interest.

### 🔷 Q14
**Answer: B**
**Rationale:** Accrued interest = (days since last coupon / days in period) × coupon amount.

### 🔷 Q15
**Answer: B**
**Rationale:** Gamma is highest for at-the-money options.

### 🔷 Q16
**Answer: B**
**Rationale:** Monte Carlo requires reproducible seeds and sufficient scenarios.

### 🔷 Q17
**Answer: B**
**Rationale:** Triangular arbitrage = cross-rate inconsistency enabling risk-free profit.

### 🔷 Q18
**Answer: B**
**Rationale:** Integer cents eliminate floating-point rounding errors.

### 🔷 Q19
**Answer: B**
**Rationale:** 6% / 12 = 0.5% monthly.

### 🔷 Q20
**Answer: B**
**Rationale:** More exceptions than expected = model underestimates risk.
