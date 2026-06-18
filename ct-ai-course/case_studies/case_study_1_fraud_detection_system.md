# 📂 Case Study 1 — Fraud Detection System

## ⭐ Context

You are the Test Lead for SecureBank, a financial institution deploying an AI-based fraud detection system.

**System:**
- Machine learning model that scores transactions for fraud risk (0-100)
- Transactions with score > 70 are blocked pending review
- 10 million transactions per day
- Historical fraud rate: 0.1% (1 in 1000 transactions)
- Model: Gradient Boosted Decision Trees trained on 2 years of transaction data

**Team:**
- 4 data scientists, 2 ML engineers, 3 testers (including you)
- Release cycle: Monthly model retraining
- Regulatory requirements: Must explain blocked transactions to customers

**Current Issues:**
- 15% of blocked transactions are false positives (legitimate transactions)
- Model performance degrades after 3-4 weeks (fraud patterns change)
- Customer complaints about unexplained blocks
- Auditors question fairness across customer demographics

## 🔬 Task 1: Metric Analysis and Test Oracle Design

**Question:** Analyze the current metrics and design appropriate test oracles.

**Model Answer:**

**Current Confusion Matrix (on test set):**

| | Predicted Fraud | Predicted Legit |
|---|---|---|
| Actual Fraud | 850 (TP) | 150 (FN) |
| Actual Legit | 15,000 (FP) | 984,000 (TN) |

**Calculated Metrics:**

| Metric | Value | Assessment |
|--------|-------|------------|
| Accuracy | (850+984000)/1000000 = 98.5% | Misleading due to class imbalance |
| Precision | 850/15850 = 5.4% | Very low — 94.6% of blocks are false alarms |
| Recall | 850/1000 = 85% | Acceptable — catches 85% of fraud |
| F1-Score | 2*(0.054*0.85)/(0.054+0.85) = 10.1% | Poor |
| False Positive Rate | 15000/999000 = 1.5% | 15,000 legit customers blocked |

**Critical Finding:**
The 98.5% accuracy is misleading. The real problem is precision: only 5.4% of blocked transactions are actually fraud. This creates massive customer friction.

**Test Oracle Design:**

| Oracle Type | Application |
|-------------|-----------|
| Statistical | Precision must be > 30%, Recall > 80%, FPR < 0.5% |
| Fairness | FPR within 20% across age groups, geographies |
| Business | Cost of fraud blocked vs. cost of false positives |
| Temporal | Performance must not degrade > 5% month-over-month |

---

## 🤖 Task 2: Fairness Audit

**Question:** Design a fairness testing approach for the fraud detection system.

**Model Answer:**

**Demographics to Test:**
- Age groups (18-25, 26-40, 41-60, 60+)
- Geographic regions (urban, suburban, rural)
- Account tenure (new, established)
- Transaction types (online, in-store, international)

**Test Execution:**

```
For each demographic group:
  1. Extract subgroup from test data
  2. Calculate: False Positive Rate, False Negative Rate, Approval Rate
  3. Compare across groups
  4. Flag groups with > 20% deviation from average
```

**Hypothetical Results:**

| Group | FPR | FNR | Flag? |
|-------|-----|-----|-------|
| Age 18-25 | 2.8% | 10% | YES (FPR 87% above avg) |
| Age 26-40 | 1.2% | 15% | No |
| Age 41-60 | 0.9% | 18% | No |
| Age 60+ | 1.1% | 20% | No |
| International | 3.5% | 5% | YES (FPR 133% above avg) |
| Domestic | 1.0% | 17% | No |

**Analysis:**
- Young customers (18-25) are 2.8x more likely to have legitimate transactions blocked
- International transactions have 3.5x higher false positive rate
- Potential causes: Training data underrepresents young/international transaction patterns

**Mitigation:**
1. Retrain with balanced representation of all demographics
2. Apply fairness constraints during training
3. Set different thresholds per segment (with regulatory approval)
4. Add human review for flagged demographic groups

---

## ⭐ Task 3: Robustness Testing

**Question:** Design adversarial and robustness tests for the fraud detection model.

**Model Answer:**

**Adversarial Testing:**

| Attack Type | Description | Expected Result |
|-------------|-------------|---------------|
| Feature perturbation | Slightly change transaction amount, time, location | Prediction should not flip for small changes |
| Mimicry attack | Fraudulent transaction made to look like legitimate pattern | Model should still detect anomalies |
| Reverse mimicry | Legitimate transaction with unusual pattern | Model should not block (or should flag for review, not auto-block) |
| Concept drift simulation | Test with transactions from 6 months ago vs. today | Model performance should degrade < 10% |

**Robustness Tests:**

| Test | Input Variation | Expected |
|------|----------------|----------|
| Amount variation | $1, $50, $500, $5000, $50000 | Model handles all ranges |
| Time variation | 2 AM, 9 AM, 3 PM, 11 PM | No time-based bias |
| Location variation | Local, domestic, international | Appropriate risk scoring |
| Velocity | 1 transaction/hour vs. 50/hour | Velocity flags work correctly |
| Merchant type | Grocery, electronics, gambling | Category-appropriate scoring |

---

## 🤖 Task 4: Explainability Testing

**Question:** The bank must explain blocked transactions to customers. Test the explainability system.

**Model Answer:**

**SHAP Explanation for Blocked Transaction:**

```
Transaction: $2,500 electronics purchase at 2:30 AM from new device

Risk Score: 78 (Blocked)

Top contributing factors:
- Unusual time (2:30 AM): +18 points
- New device/IP address: +15 points
- Amount 5x above customer average: +12 points
- International merchant: +10 points
- No recent similar purchases: +8 points
- Customer history (good): -5 points
```

**Explainability Tests:**

| Test | Pass Criteria |
|------|--------------|
| Explanation matches model internals | SHAP values sum to prediction difference |
| Consistency | Same transaction type yields similar explanation structure |
| Understandability | Non-technical customer can understand the explanation |
| Actionability | Customer knows what to do (call bank, verify device) |
| No sensitive leakage | Explanation does not expose model internals or other customer data |

---

## 🤖 Task 5: Production Monitoring and Retraining

**Question:** Design the production monitoring and retraining strategy.

**Model Answer:**

**Monitoring Dashboard:**

| Metric | Threshold | Action |
|--------|-----------|--------|
| Daily fraud detection rate | Drop > 10% from baseline | Alert data science team |
| False positive rate | Exceed 2% | Alert and review threshold |
| Average transaction score | Shift > 5 points | Investigate data drift |
| Model latency | > 100ms | Scale infrastructure |
| Explainability failures | > 1% | Alert ML engineering |

**Retraining Triggers:**

| Trigger | Threshold | Process |
|---------|-----------|---------|
| Performance degradation | Precision < 25% for 3 days | Emergency retraining |
| Scheduled | Monthly | Standard retraining with last 30 days data |
| Data volume | > 100k new labeled transactions | Triggered retraining |
| Fraud pattern alert | New fraud type detected | Custom retraining with new patterns |

**Validation Before Deployment:**

1. Backtesting: Test new model on last 7 days of held-out data
2. A/B test: 5% canary for 48 hours
3. Compare: Precision, recall, FPR vs. current model
4. Fairness check: Verify no demographic disparities increased
5. Rollback plan: Automatic rollback if FPR increases > 20%
