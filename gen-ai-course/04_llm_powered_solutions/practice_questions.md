# Chapter 4 — Practice Questions

15 original ISTQB-style questions covering Chapter 4 learning objectives. Each question is tagged with its LO and K-level.

**Instructions:** Select the single best answer unless otherwise stated. After attempting all questions, check your answers against the rationales at the end of this file.

---

## Questions

### Q1 (GenAI-4.1.1, K2)

Which architectural approach enhances LLM responses by retrieving relevant documents from a knowledge base and including them in the prompt context?

A. Fine-tuning
B. Retrieval-Augmented Generation (RAG)
C. Model distillation
D. Reinforcement learning

---

### Q2 (GenAI-4.1.2, K2)

A healthcare organization needs to generate test cases for patient data processing. Regulatory requirements prohibit any patient data from leaving the organization's data center. Which architectural approach is MOST appropriate?

A. Public LLM API with prompt engineering
B. On-premise deployment of an open-weight model
C. Fine-tuning a public model on patient data via a cloud API
D. RAG using a third-party vector database hosted externally

---

### Q3 (GenAI-4.2.1, K2)

Which statement BEST describes fine-tuning in the context of testing applications?

A. Updating the LLM's internal weights using a domain-specific dataset to adapt its behavior
B. Retrieving test documents and inserting them into prompts
C. Adjusting the temperature and top-p parameters for each query
D. Combining multiple LLM APIs into a single interface

---

### Q4 (GenAI-4.2.2, K1)

Which of the following is a key component of LLMOps?

A. Manual code review by external auditors only
B. Prompt versioning, model evaluation, and monitoring
C. Eliminating all human oversight from the LLM pipeline
D. Using a single prompt for all testing tasks forever

---

### Q5 (GenAI-4.1.2, K2)

A testing team needs to answer questions like "Which requirement covers the refund policy?" and trace the answer back to the exact paragraph in the requirements document. Which approach BEST supports this need?

A. Fine-tuning a model on all requirements documents
B. Retrieval-Augmented Generation (RAG) with citation of retrieved chunks
C. Zero-shot prompting with no document references
D. Switching to a discriminative classification model

---

### Q6 (GenAI-4.2.3, K2)

How does LLMOps specifically help a test team using GenAI?

A. It eliminates the need for human review of generated test cases
B. It provides frameworks for prompt versioning, quality evaluation, and cost tracking
C. It guarantees that all LLM outputs are factually correct
D. It replaces the need for test automation frameworks

---

### Q7 (GenAI-4.1.1, K2)

In a RAG architecture, what is the role of the vector database?

A. To train the LLM on domain-specific data
B. To store and retrieve high-dimensional embeddings for similarity search
C. To execute generated test scripts automatically
D. To encrypt all prompts before sending to the LLM

---

### Q8 (GenAI-4.2.1, K2)

An organization has 500 high-quality test cases in a proprietary format. They want an LLM to generate new test cases that consistently follow this format. The requirements and standards are stable and rarely change.

Which approach is MOST appropriate?

A. RAG with frequently updated documents
B. Fine-tuning a foundation model on the 500 test cases
C. Direct API calls with zero-shot prompts
D. Replacing the LLM with a traditional rule-based system

---

### Q9 (GenAI-4.1.2, K2)

Which factor MOST strongly favors choosing RAG over fine-tuning?

A. The need for specialized behavior on a stable domain
B. The need to trace answers back to specific source documents
C. The availability of a large labeled dataset and ML engineering expertise
D. The desire to reduce per-query API costs over time

---

### Q10 (GenAI-4.2.2, K1)

Which LLMOps activity involves proactively testing an LLM with adversarial inputs to discover harmful or undesirable behaviors?

A. Prompt versioning
B. Red teaming
C. Cost management
D. Data minimization

---

### Q11 (GenAI-4.2.1, K2)

What is a significant risk of fine-tuning that does not apply to RAG?

A. The model may lose general capabilities as it specializes (catastrophic forgetting)
B. Retrieved documents may be irrelevant to the query
C. Vector databases require ongoing maintenance
D. Prompts may exceed the context window

---

### Q12 (GenAI-4.1.1, K2)

Which architectural approach is BEST suited for a testing team that needs quick prototyping without specialized ML infrastructure?

A. On-premise deployment of a 70B parameter model
B. Direct integration with a public or private LLM API
C. Building a custom model from scratch
D. Implementing a full RAG pipeline with vector database and embedding model

---

### Q13 (GenAI-4.2.3, K2)

A test manager notices that the cost of using an LLM for test case generation has doubled in the last month without a corresponding increase in output volume. Which LLMOps component should be investigated FIRST?

A. Prompt versioning and length tracking
B. Model evaluation for hallucinations
C. Security audit for unauthorized access
D. Red teaming for adversarial behavior

---

### Q14 (GenAI-4.1.2, K2)

A financial services firm needs sub-second latency for a real-time test assistant that suggests next test steps during exploratory testing. Which architectural consideration is MOST important?

A. Using the largest available foundation model for maximum accuracy
B. Selecting smaller, faster models or caching frequent responses
C. Implementing a complex multi-model ensemble for every query
D. Storing all financial data in the model's training weights

---

### Q15 (GenAI-4.2.1, K2)

An organization's testing standards change every quarter. They currently use a fine-tuned model to generate test cases. What is the PRIMARY disadvantage of this approach given the quarterly changes?

A. The model must be retrained each quarter, incurring ongoing cost and delay
B. The model cannot generate text
C. RAG does not support document updates
D. Public APIs are always cheaper than fine-tuning

---

### Q16 (GenAI-4.1.2, K2)

A team needs to build a test assistant that can answer questions about 500 internal API specifications that are updated weekly. The assistant must cite the exact specification section in its answers. Data sensitivity is moderate (internal APIs, not customer data).

Which architecture is MOST appropriate?

A. Fine-tuning a foundation model on all 500 specifications
B. RAG with a vector database containing chunked API specifications
C. Direct API calls with the full specification pasted into each prompt
D. Building a custom model from scratch using the API specs as training data

---

### Q17 (GenAI-4.2.2, K2)

Which of the following is a key LLMOps practice for ensuring reproducibility of AI-generated test artifacts?

A. Randomly varying prompt text for each generation to increase diversity
B. Version-controlling prompts, tracking model versions, and logging generation parameters
C. Using the latest model version automatically without notification
D. Allowing each tester to use their personal LLM accounts for testing tasks

---

### Q18 (GenAI-4.1.2, K2)

An organization has strict data residency requirements, a team of ML engineers, and a need to process thousands of test-related queries daily. They want to minimize ongoing per-query costs after an initial investment.

Which architectural approach BEST fits these constraints?

A. Public LLM API with enterprise agreement
B. On-premise deployment of an open-weight model
C. RAG with a managed cloud vector database
D. Fine-tuned model hosted on a shared cloud provider

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** RAG retrieves documents and includes them in prompts. Fine-tuning updates model weights. Model distillation creates smaller models. Reinforcement learning uses rewards for training.

### Q2
**Answer: B**

**Rationale:** On-premise open-weight models keep all data within the organization's control. Public APIs and external cloud services violate the data residency requirement. Fine-tuning on patient data via a public API is especially risky.

### Q3
**Answer: A**

**Rationale:** Fine-tuning updates internal weights using domain-specific data. RAG retrieves documents. Parameter adjustments are inference-time controls. API combination is integration, not fine-tuning.

### Q4
**Answer: B**

**Rationale:** Prompt versioning, evaluation, and monitoring are core LLMOps components. External-only review, eliminating oversight, and static prompts are antithetical to LLMOps principles.

### Q5
**Answer: B**

**Rationale:** RAG retrieves specific chunks and can cite them, providing provenance. Fine-tuning embeds knowledge opaquely. Zero-shot without references can't trace sources. Discriminative models classify, not retrieve.

### Q6
**Answer: B**

**Rationale:** LLMOps provides operational frameworks for managing GenAI systems. It does not eliminate human review, guarantee correctness, or replace test automation.

### Q7
**Answer: B**

**Rationale:** The vector database stores embeddings and enables similarity search for retrieval. It does not train the model, execute scripts, or encrypt prompts.

### Q8
**Answer: B**

**Rationale:** Stable requirements + proprietary format + sufficient training data = strong fine-tuning case. RAG is better for dynamic knowledge. Zero-shot wouldn't learn the format. Rule-based systems lack flexibility.

### Q9
**Answer: B**

**Rationale:** Provenance and source traceability are strengths of RAG. Specialized behavior and cost reduction favor fine-tuning. ML expertise enables either approach.

### Q10
**Answer: B**

**Rationale:** Red teaming is adversarial testing of models. Prompt versioning tracks changes. Cost management tracks spend. Data minimization is a privacy practice.

### Q11
**Answer: A**

**Rationale:** Catastrophic forgetting is a fine-tuning-specific risk. Irrelevant retrieval, vector DB maintenance, and context limits are RAG concerns but not fine-tuning-specific risks.

### Q12
**Answer: B**

**Rationale:** Direct API integration is fastest for prototyping without infrastructure. On-premise and custom models require significant setup. Full RAG pipelines need infrastructure.

### Q13
**Answer: A**

**Rationale:** Costs increasing without volume suggests prompts have grown longer or a more expensive model is being used. Prompt versioning and length tracking directly investigate this. Security audits and red teaming address different concerns.

### Q14
**Answer: B**

**Rationale:** Sub-second latency requires smaller, faster models or caching. Large models and complex ensembles add latency. Storing data in weights is unrelated to latency and a privacy risk.

### Q15
**Answer: A**

**Rationale:** Frequent changes to standards require frequent retraining of fine-tuned models, which is costly and slow. RAG would handle this better by simply updating documents. B, C, and D are factually incorrect.

### Q16
**Answer: B**

**Rationale:** RAG is the best fit because: (1) documents change weekly, (2) the assistant must cite exact sections (source grounding is a RAG strength), and (3) 500 specifications likely exceed context window limits for direct API calls. Fine-tuning (A, D) would require retraining weekly. Direct API calls (C) would exceed context limits.

### Q17
**Answer: B**

**Rationale:** Version-controlling prompts, tracking model versions, and logging generation parameters are core LLMOps practices for reproducibility. Randomly varying prompts (A) destroys reproducibility. Using latest models without notification (C) makes results unpredictable. Personal accounts (D) create governance and security risks.

### Q18
**Answer: B**

**Rationale:** Strict data residency rules out public APIs (A) and shared cloud providers (D). Thousands of daily queries make per-token API costs prohibitive at scale. On-premise deployment (B) requires upfront hardware investment (CapEx) but minimizes ongoing per-query costs. The ML engineering team can handle deployment and maintenance.
