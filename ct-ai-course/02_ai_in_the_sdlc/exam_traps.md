# 🪤 Chapter 2 — AI in the SDLC: Exam Traps

## 🪤 Trap 1: Treating AI Systems Like Traditional Software

**Trap:** AI systems are probabilistic, not deterministic. Testing must account for non-determinism, data dependency, and statistical evaluation.

**Example question:**
> An AI system gives a confidence score of 0.85 for an image classification. The tester concludes the system is 85% certain and therefore correct. The problem is:
>
> A. The confidence score is too low
> B. Confidence does not guarantee correctness — the system can be confidently wrong
> C. The tester should trust any score above 0.5
> D. AI systems are never wrong

**Correct answer:** B — High confidence does not mean the prediction is correct. The model may be confidently wrong.

---

## 🪤 Trap 2: Ignoring Data Leakage

**Trap:** Using test data during training (even indirectly) produces misleadingly high metrics.

**Example question:**
> A team achieves 99% accuracy on a test set. They later discover the test set was accidentally included in the training data. The true performance is likely:
>
> A. Also 99% — the test was valid
> B. Lower than 99% — data leakage inflated the metrics
> C. Higher than 99% — more data always helps
> D. Unknown — data leakage does not affect results

**Correct answer:** B — Data leakage makes metrics unreliable. True performance on unseen data is likely lower.

---

## 🪤 Trap 3: Thinking MLOps Is the Same as DevOps

**Trap:** MLOps extends DevOps with data versioning, model versioning, and continuous training. It is not identical to DevOps.

**Example question:**
> MLOps and DevOps are identical practices applied to different domains. This statement is:
>
> A. True — they are the same
> B. False — MLOps adds data management, model versioning, and continuous training
> C. True only for supervised learning
> D. False — MLOps is only for deployment

**Correct answer:** B — MLOps extends DevOps with ML-specific concerns: data versioning, model tracking, and retraining pipelines.

---

## 🪤 Trap 4: Testing AI Systems Only at the End

**Trap:** AI testing must happen throughout the lifecycle: data validation, model evaluation, integration testing, and continuous monitoring.

**Example question:**
> A team tests an AI system only after model training is complete. The risk is:
>
> A. No risk — this is the standard approach
> B. Data quality issues and training problems may not be discovered until late
> C. The model will train faster
> D. Testing is more efficient this way

**Correct answer:** B — AI testing must start with data validation and continue through training, evaluation, and deployment.

---

## 🪤 Trap 5: Assuming Training Data Equals Real-World Data

**Trap:** Models trained on biased or unrepresentative data will fail in production.

**Example question:**
> A face recognition model is trained on 90% light-skinned faces. In production, it performs poorly on dark-skinned faces. The root cause is:
>
> A. The model is defective
> B. Training data was not representative of the real-world population
> C. Dark-skinned faces are harder to recognize
> D. The model needs more layers

**Correct answer:** B — Biased training data leads to biased performance. Data must represent the population the system will serve.
