# 🪤 Chapter 5 — AI Quality Characteristics and Risks: Exam Traps

## 🪤 Trap 1: Thinking Fairness Means Equal Outcomes for Everyone

**Trap:** Fairness does not always mean equal outcomes. Equal opportunity means qualified people have equal chances, not that everyone gets the same result.

**Example question:**
> A university admission AI rejects more applicants from Group A than Group B. This automatically proves the system is unfair. This statement is:
>
> A. True — unequal outcomes always mean unfairness
> B. False — the rejection rates may reflect different qualification rates; fairness requires analyzing whether equally qualified applicants have equal chances
> C. True only for public institutions
> D. False because AI cannot be unfair

**Correct answer:** B — Fairness requires analyzing whether equally qualified people have equal chances, not just whether outcomes are equal.

---

## 🪤 Trap 2: Thinking Explainability Is Optional

**Trap:** Regulations (GDPR, EU AI Act) increasingly require explainability for high-risk AI systems. It is not optional.

**Example question:**
> A bank uses a deep neural network for loan decisions and provides no explanation to applicants. The BEST action is:
>
> A. Continue without explanations because neural networks are inherently unexplainable
> B. Provide explanations using post-hoc methods (SHAP, LIME) or use an inherently interpretable model
> C. Only explain decisions to regulators, not customers
> D. Stop using AI entirely

**Correct answer:** B — Post-hoc explanations (SHAP, LIME) or interpretable models can provide required explanations.

---

## 🪤 Trap 3: Confusing Robustness with Accuracy

**Trap:** A model can be accurate on standard test data but not robust to perturbations, adversarial inputs, or distribution shifts.

**Example question:**
> An image classifier achieves 98% accuracy on standard test data but fails when images are slightly rotated. This shows the model lacks:
>
> A. Accuracy
> B. Robustness
> C. Fairness
> D. Explainability

**Correct answer:** B — The model is accurate but not robust to input variations.

---

## 🪤 Trap 4: Ignoring Ethical Risks Because the Technology Is "Neutral"

**Trap:** Technology is not neutral — design choices embed values. AI systems can cause harm even when unintended.

**Example question:**
> An AI system for predicting crime was trained on historical arrest data. It disproportionately predicts high risk for neighborhoods with historical over-policing. The risk is:
>
> A. Not a problem — the data is objective
> B. The system perpetuates historical biases because arrest data reflects policing patterns, not just crime rates
> C. Only a problem if the predictions are wrong
> D. A problem with the users, not the AI

**Correct answer:** B — Historical data encodes historical biases. The AI perpetuates these biases unless explicitly addressed.

---

## 🪤 Trap 5: Thinking AI Risks Are Only Technical

**Trap:** AI risks include societal, legal, and reputational dimensions, not just technical failures.

**Example question:**
> A well-performing AI system makes decisions that are legal but widely perceived as unfair by the public. The risk is:
>
> A. Not a real risk — legal compliance is all that matters
> B. Reputational and societal risk, which can lead to loss of trust, regulation, and business impact
> C. Only a technical problem
> D. Unimportant if the AI is accurate

**Correct answer:** B — Perceived unfairness creates reputational and societal risks even if the system is technically compliant.
