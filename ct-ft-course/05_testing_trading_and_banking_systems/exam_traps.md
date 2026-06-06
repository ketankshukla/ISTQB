# Chapter 5 — Testing Trading and Banking Systems: Exam Traps

## Trap 1: Confusing Clearing with Settlement

**Trap:** Clearing = matching and confirming trades. Settlement = actual transfer of securities/cash. Different stages.

**Example question:**
> After a trade is executed, the process of transferring securities and cash between parties is:
>
> A. Clearing
> B. Settlement
> C. Reconciliation
> D. Authorization

**Correct answer:** B — Settlement = transfer of assets. Clearing = matching/confirmation.

---

## Trap 2: Thinking All Orders Execute Immediately

**Trap:** Limit orders only execute at the specified price or better. Market orders execute immediately but at uncertain prices.

**Example question:**
> A limit buy order at $50 is submitted when the market is at $51. The order:
>
> A. Executes immediately at $51
> B. Remains open until the price drops to $50 or below
> C. Executes at $50 regardless
> D. Is rejected

**Correct answer:** B — Limit buy only executes at limit price or lower.

---

## Trap 3: Ignoring Corporate Actions in Testing

**Trap:** Corporate actions change positions, prices, and option terms. They must be tested thoroughly.

**Example question:**
> After a 2-for-1 stock split, a customer who held 100 shares at $100 will have:
>
> A. 50 shares at $200
> B. 200 shares at $50
> C. 100 shares at $100 (no change)
> D. 200 shares at $100

**Correct answer:** B — 2-for-1 split doubles shares, halves price. Total value unchanged.

---

## Trap 4: Testing Only Successful Payment Paths

**Trap:** Payment testing must cover declines, timeouts, fraud blocks, chargebacks, and refunds.

**Example question:**
> Testing a payment gateway with only valid cards misses:
>
> A. Nothing — valid cards cover all scenarios
> B. Critical failure paths like declined cards, timeouts, and fraud blocks
> C. Only UI elements
> D. Only performance

**Correct answer:** B — Failure paths are essential for payment testing.

---

## Trap 5: Confusing VWAP with TWAP

**Trap:** VWAP = volume-weighted average price (trades more when volume is high). TWAP = time-weighted average price (trades evenly over time).

**Example question:**
> An algorithm that spreads trades evenly across a time period regardless of market volume is:
>
> A. VWAP
> B. TWAP
> C. Iceberg
> D. Market order

**Correct answer:** B — TWAP = time-weighted, even distribution over time.
