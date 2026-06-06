# Chapter 5 — Testing Trading and Banking Systems: Lessons

---

## 5.1 Order Management and Execution Testing

### Order Lifecycle

| Status | Description | Test Verification |
|--------|-------------|-------------------|
| **New** | Order submitted to market | Validated against credit, position, and market rules |
| **Partial Fill** | Part of order executed | Remaining quantity stays open |
| **Filled** | Order fully executed | Position updated, confirmation sent |
| **Canceled** | Order withdrawn before fill | No execution occurs |
| **Rejected** | Order fails validation | Reason logged (price limit, insufficient funds) |
| **Expired** | Order not filled by time limit | End-of-day or Good-Till-Canceled expiry |

### Order Types

| Type | Behavior | Test Focus |
|------|----------|------------|
| **Market** | Execute at best available price | Slippage, speed, fill certainty |
| **Limit** | Execute at specified price or better | Price validation, partial fills |
| **Stop** | Become market order when trigger reached | Trigger accuracy, slippage |
| **Stop-Limit** | Become limit order when trigger reached | Trigger + limit price validation |
| **Iceberg** | Show only portion of large order | Display quantity vs total quantity |
| **IOC** | Immediate or cancel | Partial fill or full cancel |
| **FOK** | Fill or kill | All or nothing immediately |

### Testing Scenarios

**Credit checks:**
- Verify order blocked if credit limit exceeded
- Test pre-trade margin requirements
- Validate currency exposure limits

**Market hours:**
- Test orders submitted outside market hours
- Verify after-hours trading rules
- Check holiday calendars

**Latency:**
- Measure time from order submission to exchange acknowledgment
- Test failover to backup exchange connections
- Validate market data freshness

---

## 5.2 Algorithmic Trading Testing

### Strategy Types

| Strategy | Description | Testing Focus |
|----------|-------------|---------------|
| **VWAP** | Target volume-weighted average price | Benchmark tracking, participation rate |
| **TWAP** | Target time-weighted average price | Time slicing, clock synchronization |
| **Iceberg** | Hide large order size | Visibility rules, child order management |
| **Implementation Shortfall** | Minimize difference from decision price | Slippage measurement, urgency adaptation |
| **Smart Order Routing** | Send to best venue | Venue selection logic, fee comparison |

### Testing Approach

1. **Unit tests:** Individual algorithm logic with known inputs
2. **Simulation tests:** Run against historical market data (backtesting)
3. **Paper trading:** Execute in live market with no real money
4. **Gradual live deployment:** Small size, monitor, scale up

### Risk Controls

- **Kill switch:** Emergency stop for runaway algorithms
- **Maximum order size:** Prevent accidental large orders
- **Price collars:** Block orders too far from reference price
- **Self-trade prevention:** Prevent algorithm from trading with itself

---

## 5.3 Payment Processing Testing

### Authorization Phase

**Tests:**
- Valid card → approved
- Invalid card number → rejected
- Expired card → rejected
- Insufficient funds → declined
- Fraud rule triggered → blocked/review
- 3D Secure authentication → redirect and verify

### Clearing Phase

**Tests:**
- Transaction matched between merchant acquirer and issuer
- Fees calculated correctly (interchange, scheme, acquirer)
- Currency conversion rates applied if applicable
- Chargeback initiation and response

### Settlement Phase

**Tests:**
- Funds transferred from issuer to acquirer
- Merchant receives net amount (minus fees)
- Settlement reports generated
- Reconciliation between systems

---

## 5.4 Reconciliation and Settlement

### Reconciliation Types

| Type | Description | Frequency |
|------|-------------|-----------|
| **Internal** | Between subsystems within the firm | Real-time or daily |
| **External** | With counterparties, custodians, brokers | Daily (T+1) |
| **Nostro/Vostro** | Correspondent bank accounts | Daily |
| **Securities** | Between trading and custody records | Daily |
| **Cash** | Between trading and treasury records | Daily |

### Break Types and Causes

| Break Cause | Resolution |
|-------------|------------|
| **Timing difference** | Trade recorded on different dates | Wait for next day |
| **Reference mismatch** | Different trade IDs | Map and match |
| **Quantity/price mismatch** | Data entry error | Investigate and correct |
| **Missing trade** | One side has trade, other doesn't | Locate missing record |
| **Corporate action** | Dividend, split not yet processed | Apply adjustment |

### Settlement Testing

- Verify settlement instructions (Swift MT messages)
- Test failed settlement scenarios (insufficient securities/cash)
- Validate settlement date calculations (T+1, T+2, accounting for holidays)
- Test buy-in procedures for failed settlements

---

## 5.5 Corporate Actions Testing

### Common Corporate Actions

| Action | Impact | Testing Focus |
|--------|--------|---------------|
| **Cash Dividend** | Cash payment to shareholders | Ex-dividend date, entitlement, tax withholding |
| **Stock Dividend** | Additional shares distributed | New share count, cost basis adjustment |
| **Stock Split** | Shares multiplied, price divided | Position update, historical price adjustment |
| **Reverse Split** | Shares divided, price multiplied | Same as split, opposite direction |
| **Merger/Acquisition** | Shares converted to acquirer shares | Ratio conversion, fractional share handling |
| **Spin-off** | New company shares distributed | Multi-position creation, cost allocation |
| **Rights Issue** | Offer to buy additional shares | Subscription processing, oversubscription |

### Testing Approach

1. **Announcement validation:** Correct action type, dates, terms
2. **Entitlement calculation:** Who receives the action based on record date
3. **Position updates:** Correct new quantities and values
4. **Tax implications:** Withholding calculations
5. **Client communication:** Notifications sent correctly

---

## Worked Examples

### Worked Example 1: Order Lifecycle Testing

**Scenario:** A trader submits a limit order to buy 1,000 shares at $50.00.

**Test cases:**

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Submit order | Status = New, credit checked |
| 2 | 400 shares execute at $49.95 | Status = Partial Fill, remaining = 600 |
| 3 | Market moves above $50.00 | Remaining 600 stay open |
| 4 | Trader cancels remaining | Status = Canceled, 400 filled |
| 5 | Verify position | Long 400 shares at avg $49.95 |

### Worked Example 2: Payment End-to-End Test

**Scenario:** Customer buys $200 item online with credit card.

**Test flow:**
1. **Checkout:** Card details entered, 3D Secure triggered
2. **Authentication:** Customer completes bank authentication
3. **Authorization:** Bank approves, authorization code received
4. **Order confirmation:** Merchant confirms purchase
5. **Clearing:** Transaction appears in daily clearing file
6. **Settlement:** Merchant receives $196 ($200 - $4 fees)
7. **Reconciliation:** Merchant system matches settlement to order
8. **Customer statement:** $200 charge appears on card statement

### Worked Example 3: Corporate Action — Stock Split

**Scenario:** Company announces 3-for-1 stock split. Customer holds 100 shares at $90.

**Pre-split:** 100 shares × $90 = $9,000 market value

**Post-split:** 300 shares × $30 = $9,000 market value (unchanged)

**Testing checks:**
- Position updated to 300 shares
- Cost basis adjusted to $30 per share
- Historical charts adjusted for split
- Option contracts adjusted (strike price, multiplier)
- Client notification sent with split details
