# 📂 Case Study 3 — Telecom Feature Model

## ⭐ Context

You are the MBT Architect for TelecomPro, a company offering customizable telecom service packages. Each customer can configure their plan from a set of features.

**Feature Categories:**
- Voice plans (pay-per-use, unlimited, business)
- Data plans (1GB, 5GB, unlimited)
- Messaging (SMS included, pay-per-SMS)
- International (none, basic, premium)
- Add-ons (hotspot, voicemail, caller ID, roaming)

**Constraints:**
- Business voice requires unlimited data
- Hotspot requires at least 5GB data
- Premium international includes basic features
- Roaming requires international addon
- Caller ID is mandatory for business voice

## 📐 Task 1: Feature Model Construction

**Question:** Create a feature model for the telecom service packages.

**Model Answer:**

```
Telecom Service [mandatory]
|-- Voice Plan [mandatory]
|   |-- Pay-Per-Use [alternative]
|   |-- Unlimited [alternative]
|   |-- Business [alternative]
|       |-- Caller ID [mandatory] (requires Business)
|
|-- Data Plan [mandatory]
|   |-- 1GB [alternative]
|   |-- 5GB [alternative]
|   |-- Unlimited [alternative]
|       |-- Business voice requires this [constraint]
|
|-- Messaging [mandatory]
|   |-- SMS Included [alternative]
|   |-- Pay-Per-SMS [alternative]
|
|-- International [optional]
|   |-- Basic [alternative]
|   |-- Premium [alternative]
|       |-- Includes Basic [constraint: Premium → Basic features]
|
|-- Add-Ons [optional]
|   |-- Hotspot [optional]
|       |-- Requires Data >= 5GB [constraint]
|   |-- Voicemail [optional]
|   |-- Caller ID [optional]
|       |-- Mandatory for Business [constraint]
|   |-- Roaming [optional]
|       |-- Requires International [constraint]
```

**Cross-Tree Constraints:**
1. Business Voice → Unlimited Data
2. Hotspot → (5GB Data ∨ Unlimited Data)
3. Premium International → Basic International (implied by hierarchy)
4. Roaming → International
5. Business Voice → Caller ID

---

## ⚙️ Task 2: Valid Configuration Testing

**Question:** How many valid configurations exist, and what selection criteria should be used?

**Model Answer:**

**Configuration Count:**
- Voice: 3 options
- Data: 3 options
- Messaging: 2 options
- International: 3 options (none, basic, premium)
- Add-ons: Each is optional (2^4 = 16 combinations), but constraints apply

**Valid Configurations (applying constraints):**

| Config | Voice | Data | Intl | Hotspot | Roaming | Valid? |
|--------|-------|------|------|---------|---------|--------|
| 1 | Pay-Per-Use | 1GB | None | No | No | Yes |
| 2 | Pay-Per-Use | 1GB | None | Yes | No | **No** (Hotspot requires >=5GB) |
| 3 | Pay-Per-Use | 5GB | None | Yes | No | Yes |
| 4 | Unlimited | 5GB | Basic | No | Yes | Yes |
| 5 | Unlimited | 5GB | Basic | Yes | Yes | Yes |
| 6 | Business | Unlimited | Premium | Yes | Yes | Yes |
| 7 | Business | 5GB | Premium | Yes | Yes | **No** (Business requires Unlimited) |
| 8 | Business | Unlimited | None | No | No | **No** (Business requires Caller ID) |
| 9 | Business | Unlimited | None | No | No | No Caller ID = **No** |
| 10 | Business | Unlimited | None | No | No | With Caller ID = Yes |

**Selection Criteria:**

**1. Feature Coverage:**
- Each feature is included in at least one configuration
- Each feature is excluded in at least one configuration (if optional)

**2. Constraint Coverage:**
- Each constraint is exercised (true and false where applicable)
- Violation scenarios tested (negative testing)

**3. Pairwise Feature Coverage:**
- All pairs of features that can interact are tested together
- Reduces test count from exhaustive while maintaining good coverage

**4. Representative Configurations:**
- Minimum configuration (fewest features)
- Maximum configuration (most features, all valid add-ons)
- Typical customer configurations (based on sales data)

---

## ♟️ Task 3: MBT Test Generation Strategy

**Question:** Design an MBT approach for testing the billing system against feature configurations.

**Model Answer:**

**Model Type:** Feature Model + Decision Table (for billing rules)

**Test Generation Strategy:**

**Phase 1: Feature Model Coverage**
- Generate configurations using pairwise coverage
- Number of tests: ~25 (vs. hundreds for exhaustive)
- Each test = one valid configuration

**Phase 2: Billing Decision Table**
For each configuration, test billing scenarios:
- Base monthly fee calculation
- Overage charges (voice, data, SMS)
- International call rates
- Add-on fees
- Prorated billing (mid-month changes)

**Phase 3: State-Based Usage Model**
Model customer usage over a billing period:
```
States: Active, Overage Voice, Overage Data, Overage SMS, Suspended
Transitions: Make call, Send SMS, Use data, Pay bill, Miss payment
```

**Test Selection:**
- Feature model: Pairwise coverage
- Billing: Decision table rule coverage
- Usage: Transition coverage

---

## 🗓️ Task 4: Deployment Plan

**Question:** Create a deployment plan for MBT in the telecom billing system.

**Model Answer:**

**Phase 1: Pilot (Months 1-3)**
- Scope: Feature model for a single product line (consumer plans)
- Team: 2 testers + 1 business analyst
- Tool: Open-source feature modeling + test generation
- Goal: Generate 20 configurations, find any feature interaction bugs
- Success criteria: >= 1 feature interaction bug found, model creation time < 2 weeks

**Phase 2: Expand (Months 4-6)**
- Scope: Add business plans and international add-ons
- Team: Expand to 4 testers
- Integration: Connect to existing billing test automation
- Goal: 50 configurations, CI/CD integration

**Phase 3: Full Deployment (Months 7-12)**
- Scope: All product lines (consumer, business, enterprise)
- Team: All 12 testers use MBT for configuration testing
- Tool: Evaluate and potentially purchase commercial tool
- Goal: 100% feature pair coverage, < 2 hours to regenerate all tests on model change

**Risk Mitigation:**
- Risk: Business analysts resist modeling → Mitigation: Show time savings, involve them in pilot
- Risk: Generated tests don't match existing automation → Mitigation: Pilot includes concretization to existing framework
- Risk: Model becomes too complex → Mitigation: Modular feature models per product line

**Metrics:**
- Configurations generated per release
- Feature interaction defects found
- Time to update tests after plan changes
- Manual test effort reduction
