# ❓ Chapter 2 — AI in the SDLC: Practice Questions

---

### 🤖 Q1 (AI-2.1, K2)

The main difference between traditional software and AI-based systems is that AI systems:

A. Are always faster
B. Learn behavior from data rather than following explicit rules
C. Do not need testing
D. Are always more accurate

---

### 🤖 Q2 (AI-2.2, K2)

In the AI development lifecycle, data preparation includes:

A. Only collecting data
B. Cleaning, transforming, and splitting data into training/validation/test sets
C. Only labeling data
D. Only deleting old data

---

### 🤖 Q3 (AI-2.2, K2)

Data leakage occurs when:

A. Data is lost from the database
B. Test data is used during model training
C. Data is stored in the cloud
D. Data is encrypted incorrectly

---

### 🤖 Q4 (AI-2.4, K2)

MLOps is BEST described as:

A. The same as traditional DevOps
B. DevOps principles extended to include data management, model versioning, and continuous training
C. Only for supervised learning
D. A replacement for data science

---

### 🤖 Q5 (AI-2.3, K2)

Which of the following is a key data quality dimension for AI systems?

A. Color of the data
B. Completeness and accuracy
C. File format only
D. Size of the database

---

### 🤖 Q6 (AI-2.5, K2)

A major testing challenge for AI systems is:

A. They are too simple to test
B. Non-determinism — the same input may produce different outputs
C. They never have bugs
D. They are always deterministic

---

### 🤖 Q7 (AI-2.2, K3)

A model trained on data from 2018-2020 is tested on data from 2021-2022. Performance drops significantly. The MOST likely cause is:

A. The model was trained incorrectly
B. Concept drift — the relationship between inputs and outputs changed over time
C. The test data is wrong
D. The model needs more layers

---

### 🤖 Q8 (AI-2.5, K2)

The "test oracle problem" in AI testing refers to:

A. Testing only in Oracle databases
B. Difficulty determining the expected correct output for AI predictions
C. A specific testing tool
D. Only testing during deployment

---

### 🤖 Q9 (AI-2.4, K2)

In MLOps, continuous training means:

A. Running the same training indefinitely
B. Automatically retraining models when performance degrades or new data is available
C. Only training once
D. Manual training by operators

---

### 🤖 Q10 (AI-2.3, K3)

A facial recognition system performs well on men but poorly on women. This indicates a problem with:

A. The algorithm type
B. Training data balance and representation
C. The camera resolution
D. The testing team

---

### 🤖 Q11 (AI-2.2, K2)

In AI development, the purpose of the validation dataset is to:

A. Train the final model
B. Tune hyperparameters and prevent overfitting during training
C. Report final performance metrics
D. Store backup data

---

### 🤖 Q12 (AI-2.5, K2)

Testing AI systems requires:

A. Only unit testing
B. Testing throughout the lifecycle: data, model, integration, and monitoring
C. Only performance testing
D. No testing because AI is self-correcting

---

### 🤖 Q13 (AI-2.4, K3)

A team deploys a model using a canary release with 5% of traffic. They compare the new model's predictions against the old model for 24 hours before full rollout. This is an example of:

A. Skipping testing
B. Production validation as part of MLOps
C. Avoiding A/B testing
D. Waterfall deployment

---

### 🤖 Q14 (AI-2.3, K2)

Data provenance in AI development refers to:

A. The physical location of data
B. The origin, history, and processing of data
C. The size of the dataset
D. The programming language used

---

### 🤖 Q15 (AI-2.2, K3)

A credit risk model is trained and tested using a random split of the full dataset. The model shows excellent performance. However, in production, performance is much worse. A likely explanation is:

A. The model is overfitting the training data
B. There may be data leakage or the test set does not represent future data
C. The model needs more neurons
D. Production users are entering data incorrectly

---

### 🤖 Q16 (AI-2.5, K2)

Which is a valid approach to handle non-determinism in AI testing?

A. Ignore it — non-determinism is not a problem
B. Run tests multiple times and evaluate statistical consistency
C. Test only once
D. Avoid testing AI systems entirely

---

### 🤖 Q17 (AI-2.1, K2)

In the AI SDLC, monitoring in production is essential because:

A. It is required by law
B. AI model performance can degrade over time due to data or concept drift
C. It is only for traditional software
D. Models never change after deployment

---

### 🤖 Q18 (AI-2.4, K2)

Which is NOT typically part of an MLOps pipeline?

A. Data validation
B. Model training
C. Manual code review only
D. Model deployment and monitoring

---

### 🤖 Q19 (AI-2.3, K3)

An AI system for loan approval uses historical loan data. The data shows that loans approved in summer had lower default rates. The model learns to approve more loans in summer. The problem is:

A. Summer is always better for loans
B. The model learned a spurious correlation (season does not cause creditworthiness)
C. The model is correctly identifying a real pattern
D. More training data is needed

---

### 🤖 Q20 (AI-2.5, K2)

The main reason AI systems need specialized testing approaches is:

A. They are written in different programming languages
B. They are probabilistic, data-dependent, and often opaque
C. They are always simple
D. They do not have user interfaces

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** AI systems learn from data. Traditional software follows explicit rules.

### 🔷 Q2
**Answer: B**

**Rationale:** Data preparation = cleaning, transforming, and splitting into sets.

### 🔷 Q3
**Answer: B**

**Rationale:** Data leakage = test data used during training, inflating metrics.

### 🔷 Q4
**Answer: B**

**Rationale:** MLOps = DevOps extended with data, model versioning, and retraining.

### 🔷 Q5
**Answer: B**

**Rationale:** Completeness and accuracy are key data quality dimensions.

### 🔷 Q6
**Answer: B**

**Rationale:** Non-determinism = same input may produce different outputs.

### 🔷 Q7
**Answer: B**

**Rationale:** Performance drop over time = concept drift or data drift.

### 🔷 Q8
**Answer: B**

**Rationale:** Test oracle problem = difficulty knowing the expected correct output.

### 🔷 Q9
**Answer: B**

**Rationale:** Continuous training = automatic retraining when needed.

### 🔷 Q10
**Answer: B**

**Rationale:** Poor performance on one group = training data lacked representation.

### 🔷 Q11
**Answer: B**

**Rationale:** Validation set tunes hyperparameters and prevents overfitting.

### 🔷 Q12
**Answer: B**

**Rationale:** AI testing must cover data, model, integration, and monitoring.

### 🔷 Q13
**Answer: B**

**Rationale:** Canary release with comparison = production validation in MLOps.

### 🔷 Q14
**Answer: B**

**Rationale:** Data provenance = origin, history, and processing of data.

### 🔷 Q15
**Answer: B**

**Rationale:** Random split may cause leakage or non-representative test data.

### 🔷 Q16
**Answer: B**

**Rationale:** Multiple runs with statistical evaluation handles non-determinism.

### 🔷 Q17
**Answer: B**

**Rationale:** Model degradation from drift requires continuous monitoring.

### 🔷 Q18
**Answer: C**

**Rationale:** MLOps includes automated pipelines, not just manual code review.

### 🔷 Q19
**Answer: B**

**Rationale:** Spurious correlation = model learned a coincidental pattern.

### 🔷 Q20
**Answer: B**

**Rationale:** AI is probabilistic, data-dependent, and opaque — requiring specialized testing.
