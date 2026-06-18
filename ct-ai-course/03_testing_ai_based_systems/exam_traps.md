# 🪤 Chapter 3 — Testing AI-Based Systems: Exam Traps

## 🪤 Trap 1: Thinking Exact Expected Outputs Are Always Needed

**Trap:** Metamorphic testing and statistical oracles do not require knowing the exact correct answer.

**Example question:**
> An AI system translates text between languages. The tester does not know the exact correct translation for a test input. The BEST approach is:
>
> A. Skip testing this input
> B. Use metamorphic testing by checking relationships between related inputs and outputs
> C. Guess the expected output
> D. Only test with inputs that have known translations

**Correct answer:** B — Metamorphic testing checks relationships without needing exact expected outputs.

---

## 🪤 Trap 2: Confusing A/B Testing with Traditional Functional Testing

**Trap:** A/B testing compares two versions using real user metrics, not against a specification.

**Example question:**
> A/B testing for an AI recommendation system is used to:
>
> A. Verify the system meets all functional requirements
> B. Compare two models by measuring real user behavior metrics
> C. Find syntax errors in the code
> D. Test individual units in isolation

**Correct answer:** B — A/B testing compares versions using user behavior metrics (click-through, conversion).

---

## 🪤 Trap 3: Thinking Adversarial Testing Is Only for Security

**Trap:** Adversarial testing is also important for safety and robustness, even in non-security contexts.

**Example question:**
> Adversarial testing of a medical image classifier is important because:
>
> A. Hackers might try to access the hospital network
> B. Subtle image perturbations could cause misdiagnosis, affecting patient safety
> C. It is required by all medical software regulations
> D. The model has no other testing needs

**Correct answer:** B — Adversarial inputs could cause dangerous misclassifications in medical diagnosis.

---

## 🪤 Trap 4: Using Only Accuracy as an Oracle

**Trap:** Accuracy alone is insufficient. Class imbalance can make accuracy misleading. Use precision, recall, F1, and fairness metrics.

**Example question:**
> A fraud detection model has 99% accuracy but catches only 10% of actual fraud cases. The problem is:
>
> A. The accuracy is too low
> B. Accuracy is misleading due to class imbalance; recall is very poor
> C. The model is working correctly
> D. 99% accuracy means the model is excellent

**Correct answer:** B — If fraud is rare, predicting "not fraud" for everything gives high accuracy but zero value. Recall is critical.

---

## 🪤 Trap 5: Testing AI Systems Only in Isolation

**Trap:** AI systems must be tested as part of the full system, including integration, fallback mechanisms, and human handoff.

**Example question:**
> A team thoroughly tests an AI model in isolation and finds it performs well. In the full system, it fails because it receives inputs in a different format than expected. This shows:
>
> A. The model is defective
> B. Integration testing was missing — the AI component must be tested within the full system
> C. The test data was wrong
> D. The model needs more training

**Correct answer:** B — AI components must be tested in integration, not just in isolation.
