# Chapter 2 — Financial Domain and Systems: Exam Traps

## Trap 1: Confusing Front Office with Back Office

**Trap:** Front office = trading/execution. Back office = settlement/reconciliation. Different functions, different testing.

**Example question:**
> A tester validates that trades settle correctly two days after execution. This is:
>
> A. Front office testing
> B. Back office testing
> C. Middle office testing
> D. Compliance testing

**Correct answer:** B — Settlement is a back-office function.

---

## Trap 2: Thinking All Payments Settle Instantly

**Trap:** Different payment types have different settlement cycles (T+1, T+2, real-time). Testing must verify the correct cycle.

**Example question:**
> A credit card purchase made on Monday typically settles:
>
> A. Immediately
> B. In 1-2 business days
> C. In 30 days
> D. Never

**Correct answer:** B — Card payments settle in 1-2 business days, not instantly.

---

## Trap 3: Confusing Bonds with Stocks

**Trap:** Bonds are debt (fixed income). Stocks are equity (ownership). Different calculations and behaviors.

**Example question:**
> A "coupon rate" applies to:
>
> A. Stocks
> B. Bonds
> C. Derivatives
> D. All financial instruments

**Correct answer:** B — Coupon rate is the interest rate paid by a bond.

---

## Trap 4: Ignoring Cross-Rate Calculation Order

**Trap:** FX cross rates require correct inversion and multiplication order. Getting it backwards gives wrong rates.

**Example question:**
> To calculate JPY/AUD from USD/JPY and AUD/USD, you should:
>
> A. Multiply the two rates directly
> B. Divide USD/JPY by AUD/USD
> C. Add the two rates
> D. Subtract the two rates

**Correct answer:** B — JPY/AUD = (JPY per USD) / (AUD per USD) = USD/JPY rate / AUD/USD rate.

---

## Trap 5: Thinking Insurance Premiums Are Static

**Trap:** Premiums change based on risk factors, claims history, and actuarial models. Testing must verify dynamic calculations.

**Example question:**
> A car insurance premium increases after a claim. The tester should verify:
>
> A. Only that the premium went up
> B. That the increase matches the actuarial model and policy terms
> C. That the UI displays the new amount
> D. That the customer is notified

**Correct answer:** B — The increase must be validated against the actuarial model and policy terms.
