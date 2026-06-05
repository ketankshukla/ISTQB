# CT-GenAI Glossary

Key terms and definitions aligned with the ISTQB CT-GenAI v1.1 syllabus and industry standard usage.

---

## A

**Adversarial Testing**
Testing that deliberately introduces perturbations, edge cases, or misleading inputs to evaluate the robustness and security of an AI model.

**AI (Artificial Intelligence)**
The simulation of human intelligence processes by computer systems, including learning, reasoning, and self-correction.

**Anonymization**
The process of removing or obfuscating personally identifiable information (PII) from data so that individuals cannot be re-identified.

---

## B

**Bias (in AI)**
Systematic and repeatable errors in a model that create unfair outcomes, such as privileging one group over another. Can arise from training data, algorithm design, or human decision-making.

**Black-Box Testing (of AI)**
Testing an AI system without knowledge of its internal structure, training data, or model architecture — focusing on inputs and outputs.

---

## C

**Chain-of-Thought (CoT) Prompting**
A prompt engineering technique that encourages the LLM to explain its reasoning step-by-step before delivering the final answer, improving accuracy on complex tasks.

**Context Window**
The maximum amount of text (tokens) an LLM can process in a single prompt, including both input and output. Exceeding this limit causes truncation or errors.

---

## D

**Discriminative Model**
A type of ML model that learns the boundary between classes or predicts labels based on input features (e.g., logistic regression, SVMs, traditional classifiers). Contrast with **Generative Model**.

---

## E

**Embedding**
A numerical vector representation of text (or other data) in a high-dimensional space, where semantically similar items are closer together. Used in RAG and semantic search.

**Emergent Behavior**
Capabilities that arise in large models that were not explicitly trained for, sometimes unpredictably.

**EU AI Act**
European Union regulation establishing a risk-based framework for AI systems, with specific obligations for high-risk applications.

---

## F

**Few-Shot Prompting**
Providing a small number of examples (typically 1-5) within the prompt to demonstrate the desired pattern, format, or reasoning style.

**Fine-Tuning**
The process of further training a pre-trained foundation model on a domain-specific dataset to adapt its behavior, tone, or knowledge for a specific task.

**Foundation Model**
A large-scale, general-purpose AI model trained on broad data that can be adapted to a wide range of downstream tasks (e.g., GPT-4, Llama, Claude).

---

## G

**Generative AI (GenAI)**
AI systems capable of generating new content — including text, images, code, audio, or video — based on patterns learned from training data.

**Generative Model**
A model that learns the joint probability distribution of data and can generate new samples that resemble the training data (e.g., GPT, diffusion models, GANs).

**Guardrails**
Technical and policy controls that constrain model outputs to prevent harmful, biased, or off-topic responses.

---

## H

**Hallucination**
A phenomenon where an LLM generates plausible-sounding but factually incorrect, irrelevant, or nonsensical content. A critical risk in testing applications.

**Human-in-the-Loop (HITL)**
An approach where human reviewers validate, correct, or approve AI-generated outputs before they are used in production or testing.

**Hyperparameter**
A configuration variable that governs the training process itself (e.g., learning rate, batch size, temperature) and is set before training begins.

---

## I

**Inference**
The process of using a trained model to make predictions or generate outputs from new input data.

**In-Context Learning**
The ability of LLMs to learn patterns from examples provided directly in the prompt, without updating model weights.

---

## L

**Large Language Model (LLM)**
A foundation model trained on vast text corpora to understand and generate human language. Examples include GPT-4, Claude, Llama, and Gemini.

**LLMOps**
The set of practices and tools for operationalizing LLMs, including data management, prompt versioning, model evaluation, deployment, monitoring, and governance.

---

## M

**Model Drift**
The degradation of a model's performance over time due to changes in the underlying data distribution (data drift) or relationship between inputs and outputs (concept drift).

---

## P

**Prompt**
The input text provided to an LLM to elicit a desired response or behavior.

**Prompt Engineering**
The practice of designing, refining, and optimizing prompts to achieve reliable, accurate, and useful outputs from LLMs.

**Prompt Injection**
An attack where malicious input is crafted to override the intended prompt instructions and manipulate model behavior.

---

## R

**RAG (Retrieval-Augmented Generation)**
An architecture that enhances LLM responses by retrieving relevant documents or data from an external knowledge base and incorporating them into the prompt.

**Reasoning Error**
A mistake in the logical steps an LLM takes to arrive at an answer, distinct from factual hallucinations.

**Regression Testing (for AI)**
Re-testing AI-powered functionality after model updates, prompt changes, or retraining to ensure no degradation in behavior.

---

## S

**System Prompt**
A hidden or meta-level instruction that sets the overall behavior, role, or constraints for an LLM session, separate from user queries.

**Synthetic Data**
Artificially generated data that mimics the statistical properties of real data, used for training or testing when real data is scarce or sensitive.

---

## T

**Temperature**
A hyperparameter that controls the randomness of LLM outputs. Lower values (e.g., 0.1) produce more deterministic responses; higher values (e.g., 0.9) produce more creative or varied outputs.

**Test Oracle**
A mechanism for determining whether a test has passed or failed. In GenAI testing, oracles may include deterministic checks, human evaluation, or LLM-as-judge patterns.

**Token**
A unit of text (word, subword, or character) used by LLMs to process language. Pricing and context limits are typically measured in tokens.

---

## V

**Vector Database**
A database optimized for storing and querying high-dimensional embeddings, enabling efficient semantic similarity search in RAG systems.

---

## Z

**Zero-Shot Prompting**
Asking an LLM to perform a task without providing any examples in the prompt, relying entirely on the model's pre-trained knowledge.
