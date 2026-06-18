# 📘 Chapter 2 — Financial Domain and Systems: Lessons

---

## ⭐ 2.1 Core Banking Systems

### 🔷 Components

| Component | Function | Testing Focus |
|-----------|----------|---------------|
| **Account Management** | Open, maintain, close accounts | KYC workflow, account type logic |
| **Transaction Processing** | Deposits, withdrawals, transfers | Balance updates, limit checks |
| **Interest Engine** | Calculate interest on savings/loans | Daily accrual, compounding, rate changes |
| **Fee Engine** | Apply service charges, penalties | Fee logic, waiver rules |
| **Loan Management** | Origination, amortization, servicing | Payment schedules, early payoff |
| **General Ledger** | Record all financial transactions | Debit/credit balance, reconciliation |

### 🧪 Account Types

- **Demand deposits:** Checking accounts, accessible anytime
- **Time deposits:** CDs, fixed-term with penalties for early withdrawal
- **Loan accounts:** Mortgage, personal, credit line
- **Investment accounts:** Brokerage, retirement (401k, IRA)

### 🔷 Testing Considerations

- Interest must accrue daily and post monthly
- Overdraft protection rules vary by account type
- Joint accounts require multiple-party authorization
- Minimum balance fees must be calculated correctly

---

## ⭐ 2.2 Financial Instruments

### 🔷 Equities (Stocks)

- Represent ownership in a company
- Traded on exchanges (NYSE, NASDAQ, LSE)
- Price determined by supply and demand
- Dividends distributed to shareholders

### 🔷 Bonds

- Fixed-income debt instruments
- Government bonds (treasuries), corporate bonds, municipal bonds
- Key attributes: coupon rate, maturity date, face value, yield

### 🔷 Derivatives

| Type | Description | Example |
|------|-------------|---------|
| **Options** | Right to buy/sell at a set price | Call option on Apple stock |
| **Futures** | Obligation to buy/sell at a set date | Oil futures contract |
| **Swaps** | Exchange of cash flows/liabilities | Interest rate swap |
| **CFDs** | Contract for difference (price change) | Forex CFD |

### 🔷 Foreign Exchange (FX)

- Currency pairs (EUR/USD, GBP/JPY)
- Spot trades (T+2 settlement)
- Forward contracts (future settlement date)
- Cross rates (calculated from pairs)

### 🔷 Testing Considerations

- Price calculations must handle tick sizes (minimum price increments)
- Derivatives require testing of Greeks (delta, gamma, theta, vega)
- FX conversions must use correct rates and timestamps
- Bond accrued interest must be calculated between coupon dates

---

## ⭐ 2.3 Trading System Architecture

### 🔷 Front Office

**Functions:**
- Market data ingestion (real-time prices)
- Order entry and modification
- Algorithmic trading strategies
- Real-time position tracking

**Testing focus:**
- Latency of market data feed processing
- Order validation (quantity, price limits, credit checks)
- Algorithm behavior under market stress

### 🔷 Middle Office

**Functions:**
- Risk calculation (VaR, exposure)
- Position limits monitoring
- Regulatory pre-trade checks
- Profit/loss attribution

**Testing focus:**
- Risk model accuracy
- Limit breach detection and blocking
- Compliance rule enforcement

### 🔷 Back Office

**Functions:**
- Trade confirmation and affirmation
- Settlement (T+1, T+2)
- Corporate actions processing (dividends, splits)
- Reconciliation with counterparties

**Testing focus:**
- Settlement instruction accuracy
- Reconciliation break identification
- Corporate action calculations

---

## ⭐ 2.4 Payment Systems

### 🧪 Payment Types

| Type | Description | Example |
|------|-------------|---------|
| **Card payments** | Credit/debit card transactions | Visa, Mastercard |
| **ACH** | Automated Clearing House batch transfers | Direct deposit, bill pay |
| **Wire transfers** | Real-time bank-to-bank transfers | Fedwire, CHAPS |
| **Real-time payments** | Instant 24/7 transfers | RTP, FedNow, SEPA Instant |
| **Cross-border** | International currency transfers | SWIFT |

### 🔷 Payment Flow

1. **Initiation:** Customer initiates payment
2. **Authorization:** Bank verifies funds and approves
3. **Clearing:** Intermediary networks process between banks
4. **Settlement:** Final transfer of funds (irreversible)

### 🔷 Testing Considerations

- Authorization must check available funds in real time
- Fraud rules must flag suspicious patterns
- Settlement must be atomic (all or nothing)
- Refunds must reverse the full transaction chain

---

## ⭐ 2.5 Insurance Systems

### 🔷 Key Processes

- **Policy administration:** Create, renew, modify policies
- **Underwriting:** Assess risk and set premiums
- **Claims processing:** Validate, adjudicate, pay claims
- **Actuarial calculations:** Predict losses and set reserves

### 🔷 Testing Considerations

- Premium calculations must match actuarial models
- Claims must validate policy coverage and exclusions
- Reserve calculations affect financial statements
- Reinsurance treaties must be applied correctly

---

## 💡 Worked Examples

### 💡 Worked Example 1: Core Banking Interest Calculation

**Scenario:** A savings account has $10,000 at 2.5% annual interest, compounded daily.

**Daily accrual:**
- Daily rate = 2.5% / 365 = 0.0068493%
- Day 1 interest = $10,000 × 0.000068493 = $0.68493
- New balance = $10,000.68493

**Testing checks:**
- Verify daily rate precision
- Confirm interest posts to correct general ledger account
- Check that leap years use 366 days
- Validate that rate changes mid-cycle are handled correctly

### 💡 Worked Example 2: FX Cross Rate Calculation

**Scenario:** Customer wants JPY/AUD rate. System has USD/JPY = 150.00 and AUD/USD = 0.6600.

**Calculation:**
- JPY/AUD = (USD/JPY) × (AUD/USD) — incorrect; need inverse
- Correct: JPY per USD = 150, USD per AUD = 0.66
- JPY per AUD = 150 / 0.66 = 227.27

**Testing checks:**
- Verify cross-rate formula
- Confirm rounding to 2 decimal places
- Check timestamp alignment of constituent rates
- Validate error handling when one rate is stale

### 💡 Worked Example 3: Payment Settlement

**Scenario:** A $5,000 wire transfer is initiated.

**Test scenarios:**
1. **Happy path:** Funds debited from sender, credited to receiver, both confirmations sent
2. **Insufficient funds:** Transfer blocked, sender notified
3. **Invalid recipient account:** Transfer rejected before settlement
4. **Network timeout:** Transaction held in pending, retried, or reversed
5. **Duplicate detection:** Second identical transfer flagged for review
