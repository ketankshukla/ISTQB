# Chapter 4 — Testing Machine Learning Models: Lessons

---

## 4.1 Key ML Evaluation Metrics

### Why Metrics Matter

Metrics quantify how well a model performs. Choosing the right metric is critical because:
- Different metrics tell different stories
- The "best" metric depends on the problem and business goals
- No single metric is sufficient for all cases

### Confusion Matrix

The **confusion matrix** is the foundation for most classification metrics:

```
                    Predicted
                 Positive   Negative
Actual  Positive    TP         FN
        Negative    FP         TN
```

**True Positive (TP):** Correctly predicted positive
**True Negative (TN):** Correctly predicted negative
**False Positive (FP):** Incorrectly predicted positive (Type I error)
**False Negative (FN):** Incorrectly predicted negative (Type II error)

### Accuracy

**Formula:** Accuracy = (TP + TN) / (TP + TN + FP + FN)

**What it measures:** Overall correctness — the proportion of all predictions that were correct.

**When to use:** Balanced datasets where all classes are equally important.

**When NOT to use:** Imbalanced datasets. Example: If 95% of emails are not spam, a model that always predicts "not spam" achieves 95% accuracy but catches 0% of spam.

### Precision

**Formula:** Precision = TP / (TP + FP)

**What it measures:** Of all positive predictions, how many were actually correct?

**When it matters:** When false positives are costly.
- Example: Medical screening — you do not want to tell healthy people they are sick
- Example: Fraud detection — you do not want to block legitimate transactions

### Recall (Sensitivity / True Positive Rate)

**Formula:** Recall = TP / (TP + FN)

**What it measures:** Of all actual positives, how many did the model find?

**When it matters:** When false negatives are costly.
- Example: Cancer detection — missing a cancer case is dangerous
- Example: Fraud detection — missing actual fraud costs money

### F1-Score

**Formula:** F1 = 2 × (Precision × Recall) / (Precision + Recall)

**What it measures:** Harmonic mean of precision and recall. Balances both metrics.

**When to use:** When you need a single metric that balances precision and recall. Useful for comparing models.

**Trade-off:** Improving precision often decreases recall, and vice versa. F1 captures the balance.

### Specificity (True Negative Rate)

**Formula:** Specificity = TN / (TN + FP)

**What it measures:** Of all actual negatives, how many did the model correctly identify?

**When it matters:** When correctly identifying negatives is important.

### AUC-ROC

**ROC Curve:** Plots True Positive Rate (recall) vs. False Positive Rate at various threshold settings.

**AUC (Area Under Curve):** A single number summarizing the ROC curve.
- AUC = 1.0: Perfect classifier
- AUC = 0.5: Random guessing
- AUC > 0.8: Generally considered good

**When to use:** When you want to evaluate performance across all thresholds. Useful for comparing models independent of the classification threshold.

### Metric Selection Guide

| Scenario | Recommended Metric | Why |
|----------|-------------------|-----|
| Balanced dataset, all errors equal | Accuracy | Simple, intuitive |
| Imbalanced dataset | Precision, Recall, F1 | Accuracy is misleading |
| False positives are costly | Precision | Minimize false alarms |
| False negatives are costly | Recall | Minimize missed cases |
| Compare models across thresholds | AUC-ROC | Threshold-independent |
| Need balanced view | F1-Score | Balances precision and recall |

---

## 4.2 Overfitting and Underfitting

### Overfitting

**Definition:** The model learns the training data too well, including noise and outliers. It performs well on training data but poorly on new data.

**Symptoms:**
- High training accuracy, low test accuracy
- Complex model with many parameters
- Model memorizes rather than generalizes

**Causes:**
- Too complex a model for the data
- Too few training examples
- Training too long
- No regularization

**Solutions:**
- Use more training data
- Simplify the model (reduce layers, parameters)
- Add regularization (L1, L2, dropout)
- Use early stopping
- Apply cross-validation

### Underfitting

**Definition:** The model is too simple to capture the underlying pattern in the data.

**Symptoms:**
- Low training accuracy and low test accuracy
- Model fails to capture trends
- High bias

**Causes:**
- Too simple a model
- Insufficient features
- Too much regularization
- Not enough training time

**Solutions:**
- Use a more complex model
- Add more relevant features
- Reduce regularization
- Train longer

### Visualizing the Trade-off

```
Error
  |
  |     /\ Overfitting
  |    /  \   (high variance)
  |   /    \
  |  /      \_________ Test Error
  | /       
  |/__________________ Training Error
  +-----------------------------> Model Complexity
       |
    Sweet Spot
    (good generalization)
```

**Key insight:** The goal is to find the model complexity that minimizes test error — not training error.

---

## 4.3 Cross-Validation

### What Is Cross-Validation?

**Cross-validation** is a technique to assess how well a model generalizes to independent data.

**Why It Matters:**
- A single train/test split may be lucky or unlucky
- Cross-validation gives a more robust estimate of performance
- Helps detect overfitting

### K-Fold Cross-Validation

**Process:**
1. Split data into k equal subsets (folds)
2. For each fold:
   - Train on k-1 folds
   - Validate on the remaining fold
3. Average the performance across all k runs

**Example (5-Fold):**
```
Run 1: [Train][Train][Train][Train][Val]
Run 2: [Train][Train][Train][Val][Train]
Run 3: [Train][Train][Val][Train][Train]
Run 4: [Train][Val][Train][Train][Train]
Run 5: [Val][Train][Train][Train][Train]

Final score = average of 5 validation scores
```

**Benefits:**
- All data is used for both training and validation
- More reliable estimate of performance
- Helps with small datasets

**Common K Values:**
- k=5: Faster, good for large datasets
- k=10: Standard choice, good balance
- k=N (leave-one-out): Used for very small datasets

### Stratified Cross-Validation

**Problem:** Random folds may not preserve class distribution.

**Solution:** Stratified k-fold ensures each fold has the same proportion of classes as the full dataset.

**When to use:** Imbalanced classification problems.

---

## 4.4 Bias and Variance

### Bias

**Definition:** The error introduced by approximating a real-world problem with a simplified model.

**High Bias (Underfitting):**
- Model makes overly simplistic assumptions
- Systematic errors regardless of training data
- Example: Using a linear model for non-linear data

### Variance

**Definition:** The amount the model's predictions change for different training data.

**High Variance (Overfitting):**
- Model is too sensitive to training data
- Small changes in training data cause large changes in predictions
- Model captures noise as if it were signal

### The Bias-Variance Tradeoff

```
Total Error = Bias² + Variance + Irreducible Error
```

| | Low Bias | High Bias |
|---|---|---|
| **Low Variance** | Ideal (good generalization) | Underfitting |
| **High Variance** | Overfitting | (uncommon) |

**How to Diagnose:**
- High training error, high test error → High bias (underfitting)
- Low training error, high test error → High variance (overfitting)

**How to Fix:**
- High bias → Increase model complexity, add features, reduce regularization
- High variance → Get more data, reduce model complexity, add regularization, use ensemble methods

---

## 4.5 Training, Validation, and Test Data

### The Golden Rule

**NEVER use test data during training, validation, or model selection.**

**Purpose of Each Set:**

**Training Set:**
- Used to train the model
- Model learns patterns from this data
- Typically 70-80% of data

**Validation Set:**
- Used during training to tune hyperparameters
- Helps detect overfitting
- Typically 10-15% of data

**Test Set:**
- Used ONLY for final evaluation
- Provides unbiased estimate of real-world performance
- Typically 10-15% of data
- Should represent the distribution the model will see in production

### Common Mistakes

**1. Data Leakage:**
- Preprocessing the entire dataset before splitting
- Using test set information to guide feature engineering
- Looking at test results to guide model adjustments

**2. Temporal Leakage:**
- Random split on time-series data
- Training on future data to predict the past

**3. Repeated Testing on Test Set:**
- Trying many models and selecting the one with best test score
- Effectively overfitting to the test set
- Solution: Use validation set for model selection

---

## Worked Examples

### Worked Example 1: Metric Calculation

**Scenario:** A fraud detection model makes the following predictions on 1000 transactions:
- True Positives: 80 (correctly caught fraud)
- False Positives: 50 (legitimate transactions blocked)
- True Negatives: 850 (legitimate transactions passed)
- False Negatives: 20 (fraud missed)

**Calculations:**

| Metric | Calculation | Result |
|--------|-------------|--------|
| Accuracy | (80 + 850) / 1000 | 93% |
| Precision | 80 / (80 + 50) | 61.5% |
| Recall | 80 / (80 + 20) | 80% |
| Specificity | 850 / (850 + 50) | 94.4% |
| F1-Score | 2 × (0.615 × 0.80) / (0.615 + 0.80) | 69.7% |

**Analysis:**
- High accuracy (93%) but fraud is rare, so accuracy is misleading
- Recall of 80% means 20% of fraud is missed — costly
- Precision of 61.5% means many legitimate transactions are blocked — customer friction
- The bank must decide which error is more acceptable

### Worked Example 2: Diagnosing Overfitting

**Scenario:** A model's performance:
- Training accuracy: 98%
- Validation accuracy: 72%

**Diagnosis:** Overfitting (high variance)

**Evidence:**
- Large gap between training and validation performance
- Model memorized training data but does not generalize

**Recommended Fixes:**
1. Collect more training data
2. Simplify the model (fewer layers, fewer parameters)
3. Add dropout regularization
4. Use data augmentation
5. Apply early stopping

### Worked Example 3: Cross-Validation in Practice

**Scenario:** A dataset has 500 samples. The team uses 5-fold cross-validation.

**Process:**
1. Split data into 5 folds of 100 samples each
2. For each fold:
   - Train on 400 samples
   - Validate on 100 samples
   - Record validation accuracy
3. Average the 5 validation accuracies

**Results:**
| Fold | Validation Accuracy |
|------|---------------------|
| 1 | 82% |
| 2 | 85% |
| 3 | 80% |
| 4 | 84% |
| 5 | 81% |
| **Average** | **82.4%** |

**Interpretation:**
- Average accuracy = 82.4% with a range of 80-85%
- The model is fairly stable (small variance across folds)
- Report 82.4% ± 2% as the expected performance
