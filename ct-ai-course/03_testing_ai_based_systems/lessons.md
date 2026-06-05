# Chapter 3 — Testing AI-Based Systems: Lessons

---

## 3.1 Test Strategies for AI-Based Systems

### Why AI Testing Is Different

Traditional testing assumes:
- Deterministic behavior
- Clear pass/fail criteria
- Well-defined specifications

AI systems violate these assumptions:
- Probabilistic outputs
- No complete specification
- Behavior learned from data, not designed

### Test Strategy Components

**1. Data Testing:**
- Validate data quality, completeness, and representativeness
- Test for bias in training and test data
- Verify data transformations do not introduce errors

**2. Model Testing:**
- Evaluate model performance with appropriate metrics
- Test on diverse data subsets
- Validate fairness across groups

**3. Integration Testing:**
- Test AI component within the larger system
- Validate input/output contracts
- Test fallback mechanisms when AI fails

**4. Operational Testing:**
- Monitor model performance in production
- Test response to data drift
- Validate retraining triggers and procedures

### Risk-Based Testing for AI

**High-Risk Areas (Test Thoroughly):**
- Safety-critical decisions (medical, autonomous vehicles)
- Financial decisions (credit, fraud detection)
- Decisions affecting protected groups (hiring, policing)
- High-confidence failures (model is wrong but very confident)

**Lower-Risk Areas (Test Adequately):**
- Recommendation systems with human oversight
- Non-critical ranking systems
- Internal analytics tools

---

## 3.2 The Test Oracle Problem

### What Is the Test Oracle Problem?

A **test oracle** is a mechanism that determines whether a test has passed or failed. For many AI systems, defining the oracle is difficult:

- Image classification: Is this a "cat" or a "kitten"? Both may be acceptable.
- Translation: Which translation is "correct" when multiple are valid?
- Recommendation: What is the "best" recommendation for a user?
- Summarization: Which summary is "better"?

### Solutions to the Oracle Problem

**1. Reference Oracles:**
- Compare output to a human-labeled "ground truth" dataset
- Limitation: Creating ground truth is expensive and may contain errors
- Example: ImageNet dataset for image classification

**2. Statistical Oracles:**
- Define acceptable ranges for metrics (accuracy > 90%, precision > 85%)
- Compare against baseline model or previous version
- Example: New model should not have lower F1-score than the current production model

**3. Metamorphic Relations:**
- Define relationships between inputs and outputs that should always hold
- Do not need to know the exact expected output
- Example: If you rotate an image of a cat, it should still be classified as a cat

**4. A/B Testing:**
- Compare two versions of the system using real user behavior
- Success measured by business metrics (click-through rate, conversion)
- Example: Does the new recommendation model increase purchases?

**5. Human-in-the-Loop:**
- Human expert evaluates a sample of outputs
- Used for subjective quality (translations, summaries, medical diagnoses)
- Scalable through sampling and crowdsourcing

**6. Cross-Referencing Oracles:**
- Compare AI output against another system or method
- Example: Compare AI diagnosis against expert radiologist diagnosis

---

## 3.3 Metamorphic Testing

### Concept

**Metamorphic testing** tests software by checking whether relationships (metamorphic relations) between inputs and outputs hold, rather than checking specific outputs.

**Why It Works for AI:**
- Does not require knowing the exact correct output
- Defines properties that should always be true
- Can generate many test cases from a single seed case

### Metamorphic Relations

**Definition:** A relationship between multiple inputs and their corresponding outputs that should hold according to the system's specification.

**Example Relations for Image Classification:**

| Relation | Description |
|----------|-------------|
| Consistency under rotation | Rotating an image should not change its classification |
| Consistency under scaling | Slightly resizing an image should not change its classification |
| Consistency under translation | Moving an object within the image should not change classification |
| Addition of noise | Adding small noise should not change classification |

**Example Relations for Machine Translation:**

| Relation | Description |
|----------|-------------|
| Round-trip translation | Translating to another language and back should preserve meaning |
| Consistency of related sentences | Similar sentences should produce similar translations |
| Preservation of negation | Negating the source should negate the translation |

**Example Relations for Search/Recommendation:**

| Relation | Description |
|----------|-------------|
| Consistency with query expansion | Adding relevant keywords should not remove relevant results |
| Monotonicity | Adding positive signals should not decrease relevance |
| Stability | Slightly changing the query should not dramatically change results |

### Metamorphic Testing Process

1. **Select a seed test case** with known input and output
2. **Apply a transformation** to create follow-up test cases
3. **Run the system** on both seed and follow-up cases
4. **Verify the metamorphic relation** holds between outputs
5. **Report failure** if the relation is violated

**Example:**

**Seed:** Image of a cat → classified as "cat"
**Follow-up:** Same image rotated 5 degrees → should still be "cat"
**Result:** If classified as "dog" → BUG FOUND

---

## 3.4 A/B Testing for AI Systems

### What Is A/B Testing?

**A/B testing** compares two versions of a system (A and B) by randomly assigning users to each version and measuring which performs better on a defined metric.

**In AI, A/B testing is used to:**
- Compare a new model against the current production model
- Evaluate different algorithms or architectures
- Test the impact of retraining with new data

### A/B Testing Process

1. **Define the metric:** What are you trying to improve? (accuracy, click-through rate, revenue)
2. **Split traffic:** Randomly assign users to version A or B
3. **Run the experiment:** Collect data for a statistically significant duration
4. **Analyze results:** Use statistical tests to determine if the difference is significant
5. **Make a decision:** Roll out the winner or iterate

### Key Considerations

**Sample Size:**
- Must be large enough to detect meaningful differences
- Use power analysis to determine required sample size

**Duration:**
- Must account for daily/weekly patterns
- Run for complete cycles (e.g., full weeks)

**Metrics:**
- Primary metric: The main goal (e.g., conversion rate)
- Guardrail metrics: Must not degrade (e.g., latency, error rate)

**Statistical Significance:**
- Typically p < 0.05 (95% confidence)
- Avoid peeking at results and stopping early

### Shadow Deployment

**Shadow deployment** (also called dark launch) runs the new model alongside the production model without affecting users:
- Production model serves users (no risk)
- New model makes predictions that are logged but not shown
- Compare predictions offline to evaluate before rollout

**Benefits:**
- Zero risk to users
- Can evaluate on production traffic patterns
- No need for randomization

---

## 3.5 Adversarial Testing

### What Are Adversarial Examples?

**Adversarial examples** are inputs deliberately designed to cause an AI model to make a mistake while appearing normal to humans.

**Example:**
- Original image: A panda (classified correctly as "panda")
- Adversarial image: Same panda with imperceptible noise added (classified as "gibbon")

### Why Adversarial Testing Matters

**Safety-Critical Systems:**
- Autonomous vehicles: Slightly altered stop sign could be misread
- Medical diagnosis: Subtle image changes could cause misdiagnosis
- Facial recognition: Special glasses could fool the system

**Security:**
- Spam filters: Adversarial text could bypass detection
- Fraud detection: Transactions designed to evade flags

### Adversarial Testing Techniques

**1. Fast Gradient Sign Method (FGSM):**
- Add small perturbations in the direction that maximizes loss
- Fast but may be detectable

**2. Projected Gradient Descent (PGD):**
- Iteratively applies small perturbations
- More powerful attacks, harder to defend

**3. Black-Box Attacks:**
- Attacker does not know the model internals
- Uses queries to the model to craft attacks
- More realistic threat model

### Defenses and Testing

**Testing for Robustness:**
- Evaluate model on adversarial examples
- Measure accuracy degradation under attack
- Test with different attack strengths

**Defensive Techniques:**
- Adversarial training: Include adversarial examples in training data
- Input preprocessing: Denoise or transform inputs
- Ensemble methods: Combine multiple models
- Certified defenses: Mathematical guarantees (limited scope)

---

## Worked Examples

### Worked Example 1: Metamorphic Testing Design

**Scenario:** Test a sentiment analysis system that classifies text as positive, negative, or neutral.

**Metamorphic Relations:**

| MR | Transformation | Expected Relation |
|----|---------------|-------------------|
| MR1 | Add "not" before positive words | Positive → Negative (or neutral) |
| MR2 | Replace positive words with synonyms | Sentiment should remain the same |
| MR3 | Add neutral filler text | Sentiment should remain the same |
| MR4 | Negate the entire sentence | Sentiment should flip |

**Test Execution:**

**Seed:** "This movie is excellent" → Positive
**MR1:** "This movie is not excellent" → Should be Negative
**Result:** If still classified as Positive → BUG

### Worked Example 2: A/B Test Design

**Scenario:** A company wants to test a new product recommendation model.

**Design:**
- **Version A (Control):** Current recommendation model
- **Version B (Treatment):** New model trained on more recent data
- **Traffic split:** 50/50
- **Duration:** 2 weeks
- **Primary metric:** Revenue per user
- **Guardrail metrics:** Click-through rate, latency, error rate

**Analysis:**
- Version B shows 5% higher revenue per user (p = 0.03)
- Click-through rate unchanged
- Latency increased by 10ms (acceptable)
- **Decision:** Roll out Version B

### Worked Example 3: Adversarial Testing

**Scenario:** Test robustness of an image classifier.

**Test Setup:**
1. Select 100 correctly classified images
2. Generate adversarial versions using FGSM with varying epsilon (noise level)
3. Measure accuracy at each noise level

**Results:**

| Epsilon (noise) | Accuracy |
|-----------------|----------|
| 0 (original) | 95% |
| 0.01 | 85% |
| 0.05 | 45% |
| 0.1 | 15% |

**Analysis:**
- Small perturbations (epsilon = 0.01) cause 10% accuracy drop
- This indicates the model is not robust to adversarial inputs
- The team should consider adversarial training as a defense
