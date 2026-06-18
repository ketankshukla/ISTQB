# 🪤 Chapter 4 — Testing ML Models: Exam Traps

## 🪤 Trap 1: Using Accuracy on Imbalanced Data

**Trap:** High accuracy can be misleading when classes are imbalanced. A model that always predicts the majority class may have high accuracy but be useless.

**Example question:**
> A disease detection model has 99% accuracy. The disease occurs in 1% of the population. The model predicts "no disease" for everyone. The accuracy is:
>
> A. A reliable indicator of good performance
> B. Misleading because the model never detects the disease despite high accuracy
> C. Only useful for training data
> D. The best possible metric

**Correct answer:** B — 99% accuracy is achieved by never detecting the disease. Precision and recall are needed.

---

## 🪤 Trap 2: Confusing Precision and Recall

**Trap:** Precision = of predicted positives, how many are correct? Recall = of actual positives, how many were found?

**Example question:**
> In a cancer screening system, missing a cancer case (false negative) is more dangerous than a false alarm (false positive). The MOST important metric is:
>
> A. Precision
> B. Recall
> C. Accuracy
> D. Specificity

**Correct answer:** B — Missing cancer = false negative. Recall measures how many actual positives were found.

---

## 🪤 Trap 3: Testing on Training Data

**Trap:** Evaluating on training data produces overly optimistic results. Always use held-out test data.

**Example question:**
> A team reports 99% accuracy by evaluating the model on the same data it was trained on. This is:
>
> A. A valid performance estimate
> B. Overfitting — the true performance on new data is likely lower
> C. Required by best practices
> D. Only wrong for neural networks

**Correct answer:** B — Testing on training data is invalid. True performance on unseen data will be lower.

---

## 🪤 Trap 4: Ignoring the Bias-Variance Tradeoff

**Trap:** Complex models reduce bias but increase variance. Simple models reduce variance but increase bias. The goal is to balance both.

**Example question:**
> A model has 95% training accuracy and 60% test accuracy. The problem is:
>
> A. Underfitting — the model is too simple
> B. Overfitting — the model memorized training data
> C. The test data is wrong
> D. The training data is too small (always)

**Correct answer:** B — Large gap between training and test accuracy = overfitting (high variance).

---

## 🪤 Trap 5: Using the Test Set for Model Selection

**Trap:** Trying multiple models on the test set and picking the best one effectively overfits to the test set.

**Example question:**
> A team trains 10 different models, evaluates all on the test set, and selects the best performer. The reported test accuracy will likely be:
>
> A. An unbiased estimate of real-world performance
> B. Optimistically biased because the test set was used for selection
> C. Exactly correct
> D. Only valid for the best model

**Correct answer:** B — Using the test set for model selection gives overly optimistic results. Use validation set for selection.
