# ❓ Chapter 3 — Testing AI-Based Systems: Practice Questions

---

### 🤖 Q1 (AI-3.1, K2)

Testing AI-based systems requires:

A. Only the same techniques as traditional software
B. Specialized approaches due to probabilistic behavior and lack of complete specifications
C. No testing because AI is self-learning
D. Only performance testing

---

### 🤖 Q2 (AI-3.2, K2)

The "test oracle problem" in AI refers to:

A. A specific testing tool
B. Difficulty determining the expected correct output
C. Only testing in production
D. A problem with database queries

---

### 🤖 Q3 (AI-3.3, K2)

Metamorphic testing is useful for AI because it:

A. Requires knowing the exact expected output
B. Checks relationships between inputs and outputs without needing exact expected values
C. Only works for deterministic systems
D. Replaces all other testing

---

### 🤖 Q4 (AI-3.3, K3)

A metamorphic relation for an image classifier could be:

A. "The image must be exactly 100x100 pixels"
B. "Rotating an image of a cat should still classify it as a cat"
C. "The model should always predict 'cat'"
D. "Only color images should be accepted"

---

### 🤖 Q5 (AI-3.4, K2)

A/B testing compares two AI models by:

A. Running unit tests on each
B. Measuring real user behavior metrics across randomly assigned user groups
C. Checking which one has more lines of code
D. Comparing training times only

---

### 🤖 Q6 (AI-3.5, K2)

Adversarial examples are:

A. Inputs designed to cause a model to make mistakes while appearing normal
B. Only used for security penetration testing
C. Test cases created by users
D. Always obvious to human observers

---

### 🤖 Q7 (AI-3.2, K3)

A medical AI system classifies X-rays. For 100 test cases, there is no single "correct" diagnosis because multiple experts disagree. The BEST testing approach is:

A. Skip testing due to disagreement
B. Use a statistical oracle with inter-expert agreement as a baseline
C. Only test cases where all experts agree
D. Declare the system cannot be tested

---

### 🤖 Q8 (AI-3.3, K3)

For a machine translation system, a valid metamorphic relation is:

A. "The translation must use exactly 50 words"
B. "Translating to another language and back should preserve the core meaning"
C. "The output must match a specific dictionary exactly"
D. "Only short sentences should be translated"

---

### 🤖 Q9 (AI-3.5, K2)

Adversarial testing is important for safety-critical AI because:

A. It finds syntax errors in the code
B. Small input perturbations could cause dangerous misclassifications
C. It is only required by auditors
D. It speeds up training

---

### 🤖 Q10 (AI-3.4, K3)

In an A/B test, a guardrail metric is:

A. The primary metric the test is trying to improve
B. A metric that must not degrade during the experiment
C. Only used after the test ends
D. A metric for security testing

---

### 🤖 Q11 (AI-3.1, K2)

A shadow deployment of an AI model:

A. Replaces the production model immediately
B. Runs the new model alongside production without affecting users
C. Is only for testing hardware
D. Deploys to all users at once

---

### 🤖 Q12 (AI-3.2, K2)

A statistical oracle for an AI system might use:

A. Only one test case
B. Accuracy, precision, and recall thresholds as pass/fail criteria
C. Manual inspection of every output
D. Only the training data

---

### 🤖 Q13 (AI-3.3, K3)

A sentiment analysis system classifies "This product is great" as positive. A follow-up test with "This product is not great" should be classified as:

A. Positive
B. Negative or neutral
C. Unknown
D. Requires human translation

---

### 🤖 Q14 (AI-3.5, K2)

Which is a valid defense against adversarial examples?

A. Ignoring them — they are not a real threat
B. Adversarial training: including adversarial examples in the training data
C. Removing all test data
D. Using only one model

---

### 🤖 Q15 (AI-3.4, K3)

An A/B test for a search algorithm runs for 3 days and shows a 2% improvement with p = 0.20. The BEST action is:

A. Roll out immediately — any improvement is good
B. Continue the test longer to achieve statistical significance
C. Reject the new algorithm
D. Increase the improvement target to 10%

---

### 🤖 Q16 (AI-3.1, K2)

Integration testing of an AI system should include:

A. Only the model in isolation
B. Testing the AI component with the full system, including fallback mechanisms
C. Only testing the user interface
D. Only unit tests

---

### 🤖 Q17 (AI-3.2, K3)

A model achieves 95% accuracy on a test set. However, the test set contains 90% "easy" cases and 10% "hard" cases. The model scores 50% on hard cases. The problem is:

A. The accuracy is too low
B. The test oracle (accuracy) is incomplete — hard cases are underrepresented and poorly handled
C. The model needs more data
D. Hard cases are not important

---

### 🤖 Q18 (AI-3.4, K2)

The primary purpose of A/B testing is to:

A. Find bugs in the code
B. Compare two versions using controlled experiments and measurable outcomes
C. Replace all other testing
D. Test the database performance

---

### 🤖 Q19 (AI-3.5, K3)

A self-driving car vision system correctly identifies a stop sign. An adversarial version of the same stop sign (with small stickers) is classified as a speed limit sign. This demonstrates:

A. The model is working correctly
B. The model lacks robustness to adversarial perturbations
C. Stop signs and speed limit signs are the same
D. Small stickers do not matter

---

### 🤖 Q20 (AI-3.3, K2)

Metamorphic relations should be:

A. Specific to one input only
B. Properties that should hold across multiple related inputs
C. Only for classification systems
D. Replaced by exact expected outputs when possible

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** AI needs specialized testing due to probabilistic behavior and incomplete specifications.

### 🔷 Q2
**Answer: B**

**Rationale:** Oracle problem = difficulty knowing the expected correct output.

### 🔷 Q3
**Answer: B**

**Rationale:** Metamorphic testing checks relationships without exact expected outputs.

### 🔷 Q4
**Answer: B**

**Rationale:** Rotating a cat image should still classify as cat = valid metamorphic relation.

### 🔷 Q5
**Answer: B**

**Rationale:** A/B testing compares models by measuring real user behavior across groups.

### 🔷 Q6
**Answer: A**

**Rationale:** Adversarial examples = inputs designed to cause mistakes while appearing normal.

### 🔷 Q7
**Answer: B**

**Rationale:** Statistical oracle with expert agreement baseline handles ambiguous cases.

### 🔷 Q8
**Answer: B**

**Rationale:** Round-trip translation preserving meaning = valid metamorphic relation.

### 🔷 Q9
**Answer: B**

**Rationale:** Small perturbations causing misclassification = safety risk.

### 🔷 Q10
**Answer: B**

**Rationale:** Guardrail metrics must not degrade during A/B testing.

### 🔷 Q11
**Answer: B**

**Rationale:** Shadow deployment runs new model alongside production without affecting users.

### 🔷 Q12
**Answer: B**

**Rationale:** Statistical oracles use metrics like accuracy, precision, recall as thresholds.

### 🔷 Q13
**Answer: B**

**Rationale:** Negation should flip sentiment = metamorphic relation.

### 🔷 Q14
**Answer: B**

**Rationale:** Adversarial training includes adversarial examples in training data.

### 🔷 Q15
**Answer: B**

**Rationale:** p = 0.20 is not statistically significant. Continue testing.

### 🔷 Q16
**Answer: B**

**Rationale:** Integration testing includes AI component with full system and fallbacks.

### 🔷 Q17
**Answer: B**

**Rationale:** Accuracy alone is misleading. Hard cases are underrepresented and poorly handled.

### 🔷 Q18
**Answer: B**

**Rationale:** A/B testing compares versions using controlled experiments.

### 🔷 Q19
**Answer: B**

**Rationale:** Misclassification from small stickers = lack of robustness to adversarial inputs.

### 🔷 Q20
**Answer: B**

**Rationale:** Metamorphic relations = properties holding across related inputs.
