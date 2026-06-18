# ❓ Chapter 4 — Testing ML Models: Practice Questions

---

### 🤖 Q1 (AI-4.1, K2)

In a confusion matrix, a False Positive is:

A. A correctly predicted positive case
B. An actual negative case incorrectly predicted as positive
C. A correctly predicted negative case
D. An actual positive case incorrectly predicted as negative

---

### 🤖 Q2 (AI-4.1, K2)

Precision is defined as:

A. TP / (TP + FN)
B. TP / (TP + FP)
C. (TP + TN) / Total
D. TN / (TN + FP)

---

### 🤖 Q3 (AI-4.1, K2)

Recall is defined as:

A. TP / (TP + FP)
B. TP / (TP + FN)
C. (TP + TN) / Total
D. FP / (FP + TN)

---

### 🤖 Q4 (AI-4.1, K3)

A medical test for a rare disease has 99% accuracy. However, the disease occurs in only 0.5% of the population, and the test never detects it. The accuracy metric is:

A. A reliable indicator of performance
B. Misleading due to class imbalance
C. The only metric that matters
D. Sufficient for clinical use

---

### 🤖 Q5 (AI-4.2, K2)

Overfitting occurs when:

A. The model is too simple to capture the data pattern
B. The model learns the training data too well, including noise
C. The model has too little training data
D. The model uses too few features

---

### 🤖 Q6 (AI-4.2, K2)

A model with low training accuracy and low test accuracy is experiencing:

A. Overfitting
B. Underfitting
C. Perfect generalization
D. Data leakage

---

### 🤖 Q7 (AI-4.3, K2)

5-fold cross-validation means:

A. Training on 5% of the data
B. Splitting data into 5 folds and training on 4 while validating on 1, repeated 5 times
C. Running the model 5 times on the same data
D. Using 5 different algorithms

---

### 🤖 Q8 (AI-4.4, K2)

High bias in a model typically indicates:

A. The model is too complex
B. The model makes overly simplistic assumptions (underfitting)
C. The model is too sensitive to training data
D. The model has too many parameters

---

### 🤖 Q9 (AI-4.4, K2)

The bias-variance tradeoff means:

A. Bias and variance are unrelated
B. Decreasing one often increases the other; the goal is to find the right balance
C. Both should be minimized independently
D. Only variance matters

---

### 🤖 Q10 (AI-4.1, K3)

In a spam filter, blocking a legitimate email (false positive) annoys users, but missing spam (false negative) is less harmful. The MOST important metric is:

A. Recall
B. Precision
C. F1-Score
D. AUC-ROC

---

### 🤖 Q11 (AI-4.5, K2)

The test dataset should be used:

A. During model training to improve performance
B. Only for final evaluation after all model selection is complete
C. For hyperparameter tuning
D. For selecting the best features

---

### 🤖 Q12 (AI-4.1, K3)

A model has the following results: TP=50, FP=10, FN=40, TN=900. The F1-Score is approximately:

A. 50%
B. 66.7%
C. 90%
D. 95%

---

### 🤖 Q13 (AI-4.3, K3)

Stratified k-fold cross-validation is preferred over standard k-fold when:

A. The dataset is very large
B. The classes are imbalanced
C. The model is a neural network
D. The dataset has no labels

---

### 🤖 Q14 (AI-4.2, K3)

A team notices training accuracy increases while validation accuracy decreases during training. They should:

A. Continue training until training accuracy reaches 100%
B. Use early stopping or add regularization
C. Increase model complexity
D. Reduce the test set size

---

### 🤖 Q15 (AI-4.4, K2)

High variance in a model typically indicates:

A. The model is too simple
B. The model is too complex and overfits
C. The training data is too small
D. The test data is biased

---

### 🤖 Q16 (AI-4.1, K2)

AUC-ROC measures:

A. The model's accuracy on training data
B. The trade-off between true positive rate and false positive rate across thresholds
C. Only precision and recall
D. The model's training time

---

### 🤖 Q17 (AI-4.5, K3)

Data leakage occurs when:

A. Data is lost during transmission
B. Information from outside the training set influences the model
C. The dataset is too small
D. The model is trained on encrypted data

---

### 🤖 Q18 (AI-4.3, K2)

The main advantage of cross-validation over a single train-test split is:

A. It is faster
B. It provides a more robust estimate of model performance
C. It requires less data
D. It always produces higher accuracy

---

### 🤖 Q19 (AI-4.2, K3)

A model achieves 95% training accuracy and 94% test accuracy. This suggests:

A. Overfitting
B. Good generalization with slight underfitting possible
C. Data leakage
D. The model is too complex

---

### 🤖 Q20 (AI-4.1, K2)

Which metric is the harmonic mean of precision and recall?

A. Accuracy
B. F1-Score
C. Specificity
D. AUC-ROC

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** False Positive = actual negative predicted as positive.

### 🔷 Q2
**Answer: B**

**Rationale:** Precision = TP / (TP + FP).

### 🔷 Q3
**Answer: B**

**Rationale:** Recall = TP / (TP + FN).

### 🔷 Q4
**Answer: B**

**Rationale:** Never detecting the disease still gives 99.5% accuracy. Metric is misleading.

### 🔷 Q5
**Answer: B**

**Rationale:** Overfitting = learning training data too well, including noise.

### 🔷 Q6
**Answer: B**

**Rationale:** Low training and test accuracy = underfitting (model too simple).

### 🔷 Q7
**Answer: B**

**Rationale:** 5-fold = 5 folds, train on 4, validate on 1, repeat 5 times.

### 🔷 Q8
**Answer: B**

**Rationale:** High bias = overly simplistic assumptions = underfitting.

### 🔷 Q9
**Answer: B**

**Rationale:** Bias-variance tradeoff = decreasing one often increases the other.

### 🔷 Q10
**Answer: B**

**Rationale:** Blocking legitimate email = false positive. Precision measures this.

### 🔷 Q11
**Answer: B**

**Rationale:** Test set = only for final evaluation, never for training/tuning.

### 🔷 Q12
**Answer: B**

**Rationale:** Precision = 50/60 = 83.3%. Recall = 50/90 = 55.6%. F1 = 2*(0.833*0.556)/(0.833+0.556) = 66.7%.

### 🔷 Q13
**Answer: B**

**Rationale:** Stratified k-fold preserves class distribution = good for imbalanced data.

### 🔷 Q14
**Answer: B**

**Rationale:** Training up, validation down = overfitting. Early stopping or regularization needed.

### 🔷 Q15
**Answer: B**

**Rationale:** High variance = model too complex = overfits training data.

### 🔷 Q16
**Answer: B**

**Rationale:** AUC-ROC = trade-off between TPR and FPR across thresholds.

### 🔷 Q17
**Answer: B**

**Rationale:** Data leakage = information from outside training influences the model.

### 🔷 Q18
**Answer: B**

**Rationale:** Cross-validation = more robust performance estimate than single split.

### 🔷 Q19
**Answer: B**

**Rationale:** Training and test accuracy are close = good generalization. Slight gap may indicate minor underfitting.

### 🔷 Q20
**Answer: B**

**Rationale:** F1-Score = harmonic mean of precision and recall.
