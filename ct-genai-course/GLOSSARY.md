# 📖 CT-GenAI Glossary

Key terms and definitions aligned with the ISTQB CT-GenAI v1.1 syllabus and industry standard usage.

---

## ⭐ A

**Adversarial Testing**
Testing that deliberately introduces perturbations, edge cases, or misleading inputs to evaluate the robustness and security of an AI model.

**AI (Artificial Intelligence)**
The simulation of human intelligence processes by computer systems, including learning, reasoning, and self-correction.

**Anonymization**
The process of removing or obfuscating personally identifiable information (PII) from data so that individuals cannot be re-identified.

---

## ⭐ B

**Bias (in AI)**
Systematic and repeatable errors in a model that create unfair outcomes, such as privileging one group over another. Can arise from training data, algorithm design, or human decision-making.

**Black-Box Testing (of AI)**
Testing an AI system without knowledge of its internal structure, training data, or model architecture — focusing on inputs and outputs.

---

## ⭐ C

**Chain-of-Thought (CoT) Prompting**
A prompt engineering technique that encourages the LLM to explain its reasoning step-by-step before delivering the final answer, improving accuracy on complex tasks.

**Context Window**
The maximum amount of text (tokens) an LLM can process in a single prompt, including both input and output. Exceeding this limit causes truncation or errors.

---

## ⭐ D

**Discriminative Model**
A type of ML model that learns the boundary between classes or predicts labels based on input features (e.g., logistic regression, SVMs, traditional classifiers). Contrast with **Generative Model**.

---

## ⭐ E

**Embedding**
A numerical vector representation of text (or other data) in a high-dimensional space, where semantically similar items are closer together. Used in RAG and semantic search.

**Emergent Behavior**
Capabilities that arise in large models that were not explicitly trained for, sometimes unpredictably.

**EU AI Act**
European Union regulation establishing a risk-based framework for AI systems, with specific obligations for high-risk applications.

---

## ⭐ F

**Few-Shot Prompting**
Providing a small number of examples (typically 1-5) within the prompt to demonstrate the desired pattern, format, or reasoning style.

**Fine-Tuning**
The process of further training a pre-trained foundation model on a domain-specific dataset to adapt its behavior, tone, or knowledge for a specific task.

**Foundation Model**
A large-scale, general-purpose AI model trained on broad data that can be adapted to a wide range of downstream tasks (e.g., GPT-4, Llama, Claude).

---

## ⭐ G

**Generative AI (GenAI)**
AI systems capable of generating new content — including text, images, code, audio, or video — based on patterns learned from training data.

**Generative Model**
A model that learns the joint probability distribution of data and can generate new samples that resemble the training data (e.g., GPT, diffusion models, GANs).

**Guardrails**
Technical and policy controls that constrain model outputs to prevent harmful, biased, or off-topic responses.

---

## ⭐ H

**Hallucination**
A phenomenon where an LLM generates plausible-sounding but factually incorrect, irrelevant, or nonsensical content. A critical risk in testing applications.

**Human-in-the-Loop (HITL)**
An approach where human reviewers validate, correct, or approve AI-generated outputs before they are used in production or testing.

**Hyperparameter**
A configuration variable that governs the training process itself (e.g., learning rate, batch size, temperature) and is set before training begins.

---

## ⭐ I

**Inference**
The process of using a trained model to make predictions or generate outputs from new input data.

**In-Context Learning**
The ability of LLMs to learn patterns from examples provided directly in the prompt, without updating model weights.

---

## ⭐ L

**Large Language Model (LLM)**
A foundation model trained on vast text corpora to understand and generate human language. Examples include GPT-4, Claude, Llama, and Gemini.

**LLMOps**
The set of practices and tools for operationalizing LLMs, including data management, prompt versioning, model evaluation, deployment, monitoring, and governance.

---

## ⭐ M

**Model Drift**
The degradation of a model's performance over time due to changes in the underlying data distribution (data drift) or relationship between inputs and outputs (concept drift).

---

## ⭐ P

**Prompt**
The input text provided to an LLM to elicit a desired response or behavior.

**Prompt Engineering**
The practice of designing, refining, and optimizing prompts to achieve reliable, accurate, and useful outputs from LLMs.

**Prompt Injection**
An attack where malicious input is crafted to override the intended prompt instructions and manipulate model behavior.

---

## ⭐ R

**RAG (Retrieval-Augmented Generation)**
An architecture that enhances LLM responses by retrieving relevant documents or data from an external knowledge base and incorporating them into the prompt.

**Reasoning Error**
A mistake in the logical steps an LLM takes to arrive at an answer, distinct from factual hallucinations.

**Regression Testing (for AI)**
Re-testing AI-powered functionality after model updates, prompt changes, or retraining to ensure no degradation in behavior.

---

## ⭐ S

**System Prompt**
A hidden or meta-level instruction that sets the overall behavior, role, or constraints for an LLM session, separate from user queries.

**Synthetic Data**
Artificially generated data that mimics the statistical properties of real data, used for training or testing when real data is scarce or sensitive.

---

## ⭐ T

**Temperature**
A hyperparameter that controls the randomness of LLM outputs. Lower values (e.g., 0.1) produce more deterministic responses; higher values (e.g., 0.9) produce more creative or varied outputs.

**Test Oracle**
A mechanism for determining whether a test has passed or failed. In GenAI testing, oracles may include deterministic checks, human evaluation, or LLM-as-judge patterns.

**Token**
A unit of text (word, subword, or character) used by LLMs to process language. Pricing and context limits are typically measured in tokens.

---

## ⭐ V

**Vector Database**
A database optimized for storing and querying high-dimensional embeddings, enabling efficient semantic similarity search in RAG systems.

---

## ⭐ Z

**Zero-Shot Prompting**
Asking an LLM to perform a task without providing any examples in the prompt, relying entirely on the model's pre-trained knowledge. Fast but unpredictable. Best for simple, well-represented tasks. For production testing artifacts, usually requires additional structure such as constraints or format specifications.

---

## 🎓 Additional Terms for CT-GenAI Exam Preparation

**Catastrophic Forgetting**
A phenomenon where a fine-tuned model loses previously learned capabilities from its original training. Example: A model fine-tuned on automotive test cases might perform worse on general software testing tasks.

**Constrained Generation**
Techniques that limit what an LLM can output to prevent hallucinations or off-topic responses. Example constraints for testing: "Only reference APIs listed in the Input section" or "Do not include test cases for features not mentioned in the requirements."

**Data Drift**
The degradation of a model's performance over time due to changes in the underlying data distribution. In testing, this means prompts that worked well six months ago may produce lower-quality outputs as models update or domain knowledge evolves.

**Decoder-Only Model**
A transformer architecture that processes input left-to-right and generates output token-by-token. Examples: GPT series. Best for generation tasks. The standard architecture for GenAI in testing.

**Differential Privacy**
A mathematical framework for sharing information about a dataset while withholding information about individuals. Used in synthetic data generation to prevent re-identification. Adds calibrated noise to data or queries.

**Encoder-Only Model**
A transformer architecture that processes input bidirectionally for understanding tasks. Example: BERT. Typically used discriminatively (classification, named entity recognition) even though the architecture can support generation.

**Environmental Impact (of AI)**
The energy consumption and carbon emissions associated with training and running large AI models. Testing teams can reduce impact by using smaller models for appropriate tasks, caching results, and optimizing prompts to reduce token usage.

**Feedback Loop Bias**
When model outputs are reused as training data, errors and biases can reinforce themselves over time. In testing, if biased AI-generated test cases are accepted and later used to fine-tune models, the bias becomes embedded.

**Foundation Model vs. Application Model**
A foundation model is the general-purpose base (e.g., GPT-4). An application model is a fine-tuned or adapted version for a specific domain. Testing teams typically start with foundation models via APIs before considering domain adaptation.

**Guardrails (Technical)**
Technical controls that constrain model outputs. Examples: output filters, constrained decoding, content policies, and input validation. In testing systems, guardrails prevent the generation of dangerous test cases or exposure of sensitive information.

**Hallucination Types**
- **Factual:** Inventing requirements, APIs, or standards that do not exist
- **Source:** Citing non-existent documents or research papers
- **Logical:** Producing internally inconsistent reasoning (e.g., stating a field accepts 0-100 then generating a test case for 150 as valid)
- **Code:** Generating syntactically valid code that references non-existent methods or libraries

**HIPAA (Health Insurance Portability and Accountability Act)**
US legislation protecting patient health information privacy and security. Testing teams in healthcare must ensure no PHI enters LLM prompts without Business Associate Agreements and proper safeguards.

**ISO 42001**
An international standard for AI management systems. Provides a framework for establishing, implementing, maintaining, and continually improving AI management systems within organizations. Relevant for organizations adopting GenAI at scale.

**Knowledge Cutoff**
The date beyond which an LLM has no training data. A model with a January 2024 cutoff does not know about features, frameworks, or regulations released after that date. Always provide current documentation in prompts for testing tasks.

**LLM-as-Judge**
Using one LLM to evaluate or score the outputs of another LLM. Useful for initial quality screening but requires validation against human judgment. Not a substitute for human review in safety-critical testing.

**LoRA (Low-Rank Adaptation)**
A parameter-efficient fine-tuning technique that updates only a small number of parameters rather than the entire model. Makes fine-tuning feasible on smaller hardware. Testing teams might use LoRA to adapt a model to their specific test case formats.

**Model Inversion Attack**
A technique to reconstruct training data from model outputs. A privacy risk when models are fine-tuned on proprietary test cases or code. Organizations should assess this risk before fine-tuning on sensitive testing artifacts.

**Negative Constraints in Prompting**
Telling the model what NOT to do. Often as important as positive instructions. Example: "Do NOT include test cases for the admin panel. Focus only on customer-facing features."

**On-Premise Deployment**
Running AI models entirely within an organization's own infrastructure. Required for strict data residency, HIPAA, PCI-DSS, or air-gapped environments. Requires GPU hardware and ML engineering expertise. Cost model shifts from per-token (OpEx) to hardware (CapEx).

**PCI-DSS (Payment Card Industry Data Security Standard)**
A standard for organizations that handle credit card data. No cardholder data can be included in LLM prompts. Use only official PCI test card numbers for testing scenarios.

**Prompt Chaining**
Breaking complex tasks into a sequence of simpler prompts where output of one feeds into the next. Essential for testing tasks that exceed context windows or require multi-stage reasoning (requirements → test conditions → test cases → test data).

**Prompt Library**
A curated, version-controlled collection of tested and validated prompts for specific testing tasks. Best practice for organizations scaling GenAI use. Should include: prompt text, expected output format, use case description, quality metrics, and known limitations.

**Prompt Version Control**
Managing prompts with the same rigor as source code. Prompts are stored in Git, changes are reviewed, and versions are tagged. Essential for reproducibility, audit trails, and regression testing of prompt changes.

**Pseudonymization**
Replacing direct identifiers with pseudonyms so individuals cannot be identified without additional information. Weaker than anonymization — re-identification is possible with external data. Not sufficient for all regulatory requirements.

**RAG (Retrieval-Augmented Generation) vs. Fine-Tuning**
- **RAG:** Retrieves knowledge dynamically. Best for frequently changing information (requirements, documentation). No retraining needed.
- **Fine-Tuning:** Embeds knowledge into model weights. Best for stable, proprietary knowledge and consistent formatting. Requires retraining when knowledge changes.

**Reasoning Error vs. Hallucination**
- **Hallucination:** The model invents facts that don't exist (wrong premise)
- **Reasoning Error:** The model uses correct facts but draws incorrect conclusions (flawed logic)
Reasoning errors are harder to detect because the output looks factually grounded.

**Regression Testing (for Prompts)**
Re-testing the same task with a modified prompt to ensure output quality has not degraded. Part of prompt engineering best practices. Essential when updating prompts for production testing workflows.

**Re-identification Risk**
The possibility that anonymized or synthetic data can be linked back to real individuals using external knowledge. A major concern when using LLMs to generate test data, as models trained on public data may enable re-identification.

**Role/Context in Prompting**
The part of a prompt that defines who the LLM should act as and what domain it operates in. Activates relevant knowledge patterns in the model's training data. Effective roles for testing: "You are a senior QA engineer specializing in [domain]."

**Shadow AI**
Unauthorized use of AI tools by employees without IT or organizational approval. One of the fastest-growing security risks. Mitigated through AI governance policies, training, and approved tool catalogs.

**Source Grounding**
Requiring a model to cite specific passages from provided documents. Forces the model to anchor outputs to verified text, reducing hallucinations and improving traceability. Essential for regulatory and compliance testing.

**Synthetic Data Generation**
Creating artificial data that preserves statistical properties without exposing real information. Techniques include: rule-based generation, statistical modeling, GANs, and LLM-based generation with differential privacy. Always validate synthetic data for re-identification risk.

**System Prompt vs. User Prompt**
- **System prompt:** Sets global behavior for the entire session (the "employee handbook")
- **User prompt:** A specific query within that session ("today's assignment")
System prompts are typically invisible to end users and are supported by OpenAI and Anthropic APIs.

**Temperature (Practical Guidance)**
- 0.0-0.2: Highly deterministic. Best for test case generation, test data with fixed schemas, and regulatory test interpretation.
- 0.3-0.5: Moderate diversity. Best for generating varied but correct test scenarios.
- 0.6-0.9: Creative. Best for brainstorming edge cases (with heavy review).
- 1.0+: Very random. Rarely appropriate for testing artifacts.

**Test Data Bias**
When generated test data systematically underrepresents certain demographics, user types, or edge cases. Leads to biased software that works for some users and fails for others. Mitigated through inclusive prompt design and diverse review teams.

**Token Economics**
The relationship between token usage and cost. Input tokens + output tokens = total cost. Strategies to reduce token usage: concise prompts, prompt templates, caching, and smaller models for simpler tasks.

**Traceability Matrix (AI-Enhanced)**
A document linking requirements to test cases. For AI-generated test cases, the traceability matrix should also include: prompt version, model version, generation date, and human reviewer. Essential for regulatory compliance and audit readiness.

**Vector Database**
A database optimized for storing and querying high-dimensional vector embeddings. Core component of RAG architectures. Examples: Pinecone, Weaviate, Chroma, Milvus, pgvector (PostgreSQL extension).
