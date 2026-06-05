# Chapter 5 — AI Quality Characteristics and Risks: Practice Questions

---

### Q1 (AI-5.1, K2)

Fairness in AI means:

A. All groups receive exactly the same outcomes
B. The system does not discriminate against individuals or groups based on protected characteristics
C. The AI makes random decisions
D. Only accuracy matters

---

### Q2 (AI-5.1, K2)

Demographic parity requires that:

A. The model has the same accuracy for all groups
B. The positive prediction rate is the same across groups
C. The model uses the same features for all groups
D. The training data is identical for all groups

---

### Q3 (AI-5.2, K2)

Robustness in AI refers to:

A. The system's ability to work only in ideal conditions
B. The system's ability to maintain performance under varying conditions and unexpected inputs
C. The system's speed
D. The system's training time

---

### Q4 (AI-5.3, K2)

SHAP and LIME are techniques for:

A. Training neural networks faster
B. Explaining predictions of complex models
C. Generating adversarial examples
D. Cleaning training data

---

### Q5 (AI-5.4, K2)

Which is a key ethical principle for AI?

A. Maximum profit regardless of consequences
B. Transparency, accountability, and human oversight
C. Replacing all human decision-making
D. Collecting as much data as possible

---

### Q6 (AI-5.1, K3)

A loan approval system has 80% approval rate for men and 60% for women. Both groups have the same qualification rate. This indicates:

A. The system is working correctly
B. Potential bias against women
C. Women are less qualified
D. The data is random

---

### Q7 (AI-5.2, K3)

An image classifier fails when small, imperceptible noise is added to images. This is a lack of:

A. Accuracy
B. Adversarial robustness
C. Fairness
D. Explainability

---

### Q8 (AI-5.3, K2)

An inherently interpretable model is one that:

A. Cannot be explained
B. Is naturally understandable, such as a decision tree or linear regression
C. Requires complex post-hoc analysis
D. Only works on small datasets

---

### Q9 (AI-5.4, K2)

The GDPR "Right to Explanation" means:

A. Users have no right to know how automated decisions are made
B. Users affected by automated decisions have a right to meaningful explanations
C. Only regulators can request explanations
D. Explanations are optional

---

### Q10 (AI-5.5, K2)

A membership inference attack on an AI model attempts to:

A. Determine whether a specific data point was in the training set
B. Improve model accuracy
C. Speed up training
D. Add new features

---

### Q11 (AI-5.1, K3)

A hiring AI system recommends qualified candidates at 70% rate for one group and 50% for another. Under the principle of equal opportunity, this is:

A. Fair because different groups have different sizes
B. Unfair because equally qualified candidates have unequal chances
C. Fair because outcomes are proportional
D. Only unfair if it is illegal

---

### Q12 (AI-5.3, K2)

Feature importance in an AI model shows:

A. Which features were most expensive to collect
B. Which input features had the most influence on the prediction
C. Only the features engineers selected
D. Random information

---

### Q13 (AI-5.2, K3)

A speech recognition system works well with male voices but poorly with female voices. This indicates a problem with:

A. Accuracy
B. Robustness to voice variation (or fairness in training data)
C. Explainability
D. Model size

---

### Q14 (AI-5.5, K2)

Data poisoning is an attack where:

A. Training data is accidentally deleted
B. Malicious data is inserted into the training set to corrupt the model
C. The test data is encrypted
D. Data is backed up incorrectly

---

### Q15 (AI-5.4, K3)

An AI system for criminal sentencing uses historical sentencing data. It assigns higher risk scores to defendants from historically over-policed neighborhoods. The ethical concern is:

A. There is no concern — the data is objective
B. The system perpetuates historical biases embedded in the training data
C. Only a concern if defendants complain
D. A technical issue, not an ethical one

---

### Q16 (AI-5.3, K2)

Post-hoc explainability techniques are used when:

A. The model is inherently interpretable
B. The model is a complex "black box" like a deep neural network
C. No explanation is needed
D. Only linear models are used

---

### Q17 (AI-5.5, K2)

AI risk management should include:

A. Only technical testing
B. Technical, legal, ethical, and societal risk assessment
C. Only security testing
D. Only performance testing

---

### Q18 (AI-5.2, K2)

Temporal robustness means:

A. The model works only at specific times
B. The model maintains performance as data distributions change over time
C. The model trains faster over time
D. The model only works with historical data

---

### Q19 (AI-5.1, K3)

A credit scoring model uses zip code as a feature. Zip code correlates with race. Even if race is not explicitly used, the model may discriminate because:

A. Zip code is always discriminatory
B. Zip code acts as a proxy for race (proxy discrimination)
C. The correlation is coincidental
D. Only explicit features cause discrimination

---

### Q20 (AI-5.4, K2)

Human-in-the-loop AI refers to:

A. AI that replaces all humans
B. AI systems where humans retain oversight and decision-making authority
C. AI that only works when humans are physically present
D. AI that trains on human data

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** Fairness = no discrimination based on protected characteristics.

### Q2
**Answer: B**

**Rationale:** Demographic parity = equal positive prediction rate across groups.

### Q3
**Answer: B**

**Rationale:** Robustness = maintaining performance under varying conditions.

### Q4
**Answer: B**

**Rationale:** SHAP and LIME explain predictions of complex models.

### Q5
**Answer: B**

**Rationale:** Key ethical principles: transparency, accountability, human oversight.

### Q6
**Answer: B**

**Rationale:** Same qualification rate but different approval rate = potential bias.

### Q7
**Answer: B**

**Rationale:** Failing with small noise = lack of adversarial robustness.

### Q8
**Answer: B**

**Rationale:** Interpretable models = naturally understandable (decision trees, linear regression).

### Q9
**Answer: B**

**Rationale:** GDPR Right to Explanation = users have right to meaningful explanations.

### Q10
**Answer: A**

**Rationale:** Membership inference = determine if data point was in training set.

### Q11
**Answer: B**

**Rationale:** Equal opportunity requires equal true positive rates for equally qualified candidates.

### Q12
**Answer: B**

**Rationale:** Feature importance = which features influenced the prediction most.

### Q13
**Answer: B**

**Rationale:** Different performance across voice types = robustness/fairness issue.

### Q14
**Answer: B**

**Rationale:** Data poisoning = inserting malicious data to corrupt the model.

### Q15
**Answer: B**

**Rationale:** Historical data encodes biases = system perpetuates them.

### Q16
**Answer: B**

**Rationale:** Post-hoc explanations apply to complex "black box" models.

### Q17
**Answer: B**

**Rationale:** AI risk management = technical, legal, ethical, and societal risks.

### Q18
**Answer: B**

**Rationale:** Temporal robustness = maintaining performance as data changes over time.

### Q19
**Answer: B**

**Rationale:** Proxy discrimination = correlated attributes act as proxies for protected characteristics.

### Q20
**Answer: B**

**Rationale:** Human-in-the-loop = humans retain oversight and decision authority.
