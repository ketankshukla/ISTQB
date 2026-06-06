# Chapter 4 — Testing Financial Calculations and Algorithms: Exam Traps

## Trap 1: Using Float for Currency

**Trap:** Floating-point types introduce rounding errors. Currency must use integer (cents) or decimal types.

**Example question:**
> A system stores account balances as `float` values. The PRIMARY risk is:
>
> A. The values are too large
> B. Rounding errors that accumulate and cause financial discrepancies
> C. Float is too slow
> D. Float uses too much memory

**Correct answer:** B — Float introduces precision errors that compound at scale.

---

## Trap 2: Confusing Clean and Dirty Bond Prices

**Trap:** Clean price = without accrued interest. Dirty price = with accrued interest. Trades settle at dirty price.

**Example question:**
> A bond trade settles at the price that includes accrued interest since the last coupon. This is the:
>
> A. Clean price
> B. Dirty price
> C. Face value
> D. Coupon rate

**Correct answer:** B — Settlement uses dirty price (clean + accrued interest).

---

## Trap 3: Thinking VaR is the Maximum Loss

**Trap:** VaR is a percentile (e.g., 95%), not the maximum possible loss. Losses can exceed VaR.

**Example question:**
> A portfolio has a 1-day 99% VaR of $5M. This means:
>
> A. The maximum possible loss is $5M
> B. There is a 1% chance of losing more than $5M in one day
> C. The average loss is $5M
> D. Losses will never exceed $5M

**Correct answer:** B — VaR = probability of exceeding the threshold, not maximum loss.

---

## Trap 4: Ignoring Day Count Conventions

**Trap:** Different bonds use different day count conventions (30/360, Actual/Actual). Using the wrong convention gives wrong accrued interest.

**Example question:**
> A US corporate bond uses the 30/360 day count convention. For a 90-day period, the convention assumes:
>
> A. Exactly 90 actual calendar days
> B. 90 days based on 30 days per month × 3 months
> C. 90 business days only
> D. A variable number depending on leap years

**Correct answer:** B — 30/360 assumes 30 days per month regardless of actual calendar.

---

## Trap 5: Testing Only Happy Paths for Calculations

**Trap:** Financial calculation testing must include zero, negative, maximum, and boundary values.

**Example question:**
> Testing a loan amortization calculator with only standard positive values misses:
>
> A. Nothing — standard values are sufficient
> B. Edge cases like zero interest, zero principal, extra payments, and rate changes
> C. Only performance issues
> D. Only UI issues

**Correct answer:** B — Boundary and edge cases are critical for financial calculations.
