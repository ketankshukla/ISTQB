# Chapter 3 — Managing Risks of GenAI: Lessons

---

## 3.1 Hallucinations, Reasoning Errors, and Biases

### Understanding Hallucinations (GenAI-3.1.1, K2)

A **hallucination** occurs when an LLM generates content that appears plausible and confident but is factually incorrect, nonsensical, or unrelated to the input. Hallucinations are one of the most significant risks when using GenAI for testing.

**Types of hallucinations:**

- **Factual hallucination:** Inventing facts, APIs, requirements, or standards that don't exist. Example: A model generates a test case for a "loyalty points feature" that is not in the specification.
- **Source hallucination:** Citing non-existent documents, URLs, or research papers. Example: Referencing "ISO/IEC 29199" as a testing standard.
- **Logical hallucination:** Producing internally inconsistent reasoning. Example: Stating a field accepts values 0-100, then generating a test case with input 150 as "valid."
- **Visual/confabulation:** Filling in gaps in knowledge with fabricated but plausible-sounding details.

**Why hallucinations matter in testing:**
- Generated test cases may cover non-existent features, creating false confidence.
- Test oracles (expected results) may be incorrect, leading to false passes or failures.
- Automated scripts may reference non-existent APIs or objects, wasting debugging time.
- Reports and documentation may contain inaccurate claims about system behavior.

### Understanding Reasoning Errors (GenAI-3.1.1, K2)

**Reasoning errors** are mistakes in the logical steps an LLM takes to arrive at an answer, distinct from factual hallucinations.

**Common reasoning errors:**

- **Arithmetic errors:** LLMs struggle with precise math. A model might incorrectly calculate boundary values or coverage percentages.
- **Logical fallacies:** Drawing incorrect conclusions from premises. Example: "All boundary values should be tested; 5 is a boundary value; therefore all inputs of 5 should be tested" — ignoring that 5 may not be a boundary for every field.
- **Conditional logic errors:** Misinterpreting nested IF/THEN/ELSE structures when generating test cases.
- **Temporal reasoning errors:** Misunderstanding sequences, deadlines, or state transitions.
- **Spatial reasoning errors:** Difficulty with layout, coordinates, or physical relationships.

**Why reasoning errors matter in testing:**
- Test case logic may be flawed even when individual steps look correct.
- Coverage calculations may be inaccurate.
- Risk assessments may misweight factors.

### Understanding Bias (GenAI-3.1.1, K2)

**Bias** in GenAI refers to systematic and repeatable tendencies in model outputs that produce unfair, skewed, or unrepresentative results.

**Sources of bias:**

- **Training data bias:** Internet text reflects historical and societal biases. Underrepresented groups, languages, or domains produce weaker results.
- **Algorithmic bias:** Model architecture and optimization choices may amplify existing patterns.
- **Human bias:** Prompt writers may unconsciously introduce bias through framing, examples, or constraints.
- **Feedback loop bias:** When model outputs are reused as training data, errors and biases can reinforce themselves.

**Manifestations in testing:**
- **Test data bias:** Generated test data may overrepresent certain demographics, languages, or scenarios.
- **Requirement interpretation bias:** The model may interpret ambiguous requirements in ways that favor certain user groups.
- **Prioritization bias:** Risk assessments may undervalue features used by minority user segments.
- **Language bias:** Non-English requirements or test data may be processed less accurately.

### Mitigations for Hallucinations, Reasoning Errors, and Biases (GenAI-3.1.2, K2)

**Mitigating Hallucinations:**

1. **Retrieval-Augmented Generation (RAG):** Ground the model's responses in verified documents rather than parametric knowledge.
2. **Source grounding:** Require the model to cite specific passages from provided documents.
3. **Human-in-the-loop validation:** All outputs must be reviewed by domain experts before use.
4. **Self-consistency checks:** Run the same prompt multiple times and compare outputs for consistency.
5. **Constrained generation:** Add rules like "Only use APIs and functions explicitly listed in the provided documentation."
6. **Lower temperature:** Reduce randomness for factual tasks.
7. **Smaller, verifiable tasks:** Break large generation tasks into smaller chunks where each output is easier to verify.

**Mitigating Reasoning Errors:**

1. **Chain-of-thought prompting:** Force step-by-step reasoning that can be verified.
2. **External tools:** Use calculators, compilers, or test execution environments to verify outputs.
3. **Structured output formats:** Enforce schemas that make logical gaps visible.
4. **Peer review:** Have another tester or LLM evaluate the reasoning.

**Mitigating Bias:**

1. **Diverse test data review:** Manually inspect generated data for representation gaps.
2. **Inclusive prompt design:** Explicitly request coverage of diverse user profiles, languages, and accessibility needs.
3. **Fairness metrics:** Where applicable, measure whether model outputs treat different groups equitably.
4. **Diverse review teams:** Have testers from different backgrounds review GenAI outputs.
5. **Adversarial testing:** Deliberately probe the model with inputs from underrepresented perspectives.
6. **Documentation:** Record known biases and limitations of the GenAI approach being used.

---

## 3.2 Data Privacy and Security Risks

### Understanding Privacy and Security Risks (GenAI-3.2.1, K2)

Using GenAI in testing introduces significant data privacy and security risks that must be actively managed.

**Data Privacy Risks:**

- **Training data retention:** Public LLM APIs may retain and use prompts for future model training. Sensitive data entered into prompts could resurface in other users' outputs.
- **PII exposure:** Test data, bug reports, requirements, or code may contain names, emails, addresses, IDs, or health/financial information.
- **Data sovereignty:** Public cloud LLMs may process data in jurisdictions with different privacy laws.
- **Lack of data governance:** Organizations may lose visibility of what data has been shared with third-party AI providers.
- **Re-identification:** Anonymized data may be re-identified when combined with other data sources or LLM knowledge.

**Security Risks:**

- **Prompt injection:** Attackers craft inputs that override system instructions, potentially causing the model to leak sensitive data or execute unintended actions.
- **Indirect prompt injection:** Malicious content in retrieved documents (e.g., via RAG) manipulates model behavior.
- **Model inversion attacks:** Reconstruction of training data from model outputs.
- **Supply chain risks:** Dependencies on external model providers, APIs, and libraries introduce vulnerabilities.
- **Shadow AI:** Employees using unauthorized public LLMs for work tasks without IT or security oversight.

### Mitigations for Privacy and Security Risks (GenAI-3.2.2, K2)

**Privacy Mitigations:**

1. **Data minimization:** Share only the minimum necessary data with LLMs. Remove PII, credentials, and proprietary code before prompting.
2. **Anonymization and pseudonymization:** Replace real identifiers with synthetic or tokenized values.
3. **Synthetic data:** Use artificially generated data that preserves statistical properties without exposing real information.
4. **On-premise or private cloud deployment:** Run models within the organization's infrastructure to prevent data leaving the environment.
5. **API agreements:** Review and negotiate terms of service to ensure prompts are not used for training.
6. **Data governance policies:** Establish clear organizational rules about what can and cannot be entered into public LLM prompts.
7. **Audit trails:** Log what data is shared with AI systems and for what purposes.

**Security Mitigations:**

1. **Input validation and sanitization:** Filter and validate all inputs to LLM-powered systems.
2. **Output encoding:** Treat LLM outputs as untrusted content; sanitize before rendering in browsers or executing as code.
3. **Principle of least privilege:** Limit what LLM-integrated systems can access or modify.
4. **Guardrails:** Implement technical controls (keyword filters, output classifiers, rate limits) to block harmful outputs.
5. **Red teaming:** Proactively test LLM-integrated systems for prompt injection and other attacks.
6. **Vendor assessment:** Evaluate AI providers' security practices, certifications, and incident history.

---

## 3.3 Energy Consumption and Environmental Impact

### Understanding Environmental Impact (GenAI-3.3.1, K2)

Training and running large AI models consumes significant energy and has environmental implications.

**Key facts:**

- **Training is energy-intensive:** Foundation models require weeks or months of computation on thousands of GPUs, consuming megawatt-hours of electricity.
- **Inference adds up:** While a single query is small, millions of daily queries across an organization create substantial ongoing energy use.
- **Water usage:** Data centers use water for cooling, and some training facilities consume significant freshwater resources.
- **Carbon footprint:** Energy source matters. Data centers powered by fossil fuels have much higher emissions than those using renewable energy.
- **Hardware lifecycle:** GPUs and specialized AI accelerators have manufacturing, transportation, and disposal impacts.

**Why this matters for testing:**
- Organizations adopting GenAI at scale must consider sustainability in their AI strategy.
- Test teams using GenAI contribute to organizational energy use and should optimize their consumption.
- Some jurisdictions are introducing sustainability reporting requirements for AI systems.

### Strategies to Reduce Environmental Impact (GenAI-3.3.2, K2)

1. **Right-size models:** Use smaller, more efficient models when they meet the task requirements. Not every testing task requires the largest available LLM.
2. **Efficient prompting:** Shorter, well-crafted prompts reduce token count and inference cost/energy.
3. **Caching:** Cache common LLM responses to avoid redundant inference for identical or similar prompts.
4. **Batch processing:** Group multiple prompts into batches rather than sending individual requests.
5. **Selective use:** Apply GenAI where it adds clear value; use traditional methods for simple, well-understood tasks.
6. **Green hosting:** Choose AI providers and data centers with renewable energy commitments.
7. **Model quantization and distillation:** Use compressed or distilled models that require less compute for inference.
8. **Lifecycle management:** Retire underutilized models and consolidate AI services to reduce redundant infrastructure.

---

## 3.4 AI Regulations, Standards, and Best Practice Frameworks

### Recalling Key Regulations and Standards (GenAI-3.4.1, K1)

You must be able to recall the following frameworks and their relevance to GenAI in testing:

**EU AI Act:**
- European Union regulation establishing a risk-based framework for AI systems
- Classifies AI systems by risk level: minimal, limited, high, unacceptable
- High-risk systems (including many used in critical infrastructure, finance, and employment) have specific obligations: risk management, data governance, transparency, human oversight, accuracy, and cybersecurity
- Testing AI systems may itself be subject to transparency and documentation requirements

**ISO/IEC 42001:**
- International standard for AI management systems
- Provides a framework for organizations to manage AI risks and opportunities responsibly
- Covers governance, data quality, model development, and continuous monitoring

**ISO/IEC 25059 (SQuAIRE for AI):**
- Quality model for AI systems, extending ISO 25010
- Defines AI-specific quality characteristics including: accuracy, robustness, fairness, explainability, and autonomy
- Relevant for defining what "quality" means when testing AI-based systems

**NIST AI Risk Management Framework (RMF):**
- US framework for managing risks in AI systems
- Four core functions: Govern, Map, Measure, Manage
- Emphasizes trustworthiness, transparency, and accountability

**IEEE Standards:**
- IEEE 2857-2024: Privacy and security considerations for AI
- IEEE 7000-2021: Addressing ethical concerns in system design

**Industry Frameworks:**
- **OWASP LLM Top 10:** Security risks specific to LLM applications (prompt injection, insecure output handling, training data poisoning, etc.)
- **Partnership on AI Tenets:** Industry best practices for responsible AI development and deployment

### How Regulations Affect GenAI Use in Testing (GenAI-3.4.2, K2)

**Documentation and traceability:**
Regulations increasingly require that organizations document:
- What AI systems are used in testing
- What data was used as input
- How outputs were validated
- Who reviewed and approved AI-generated artifacts
- Known limitations and risks of the AI approach

**Human oversight mandates:**
High-risk applications often require meaningful human review of AI outputs before decisions are finalized. In testing, this means human testers must review and approve all GenAI-generated test cases, oracles, and reports.

**Transparency requirements:**
Organizations may need to disclose when AI was used to generate testing artifacts. This affects test documentation, audit trails, and stakeholder communication.

**Data governance:**
Regulations require knowing where data came from, how it was processed, and who had access. When GenAI is used in testing, this applies to prompts, training data (if fine-tuning), and retrieved documents (if using RAG).

**Risk management integration:**
AI risk must be integrated into broader organizational risk management. Testing teams must assess and document the risks of using GenAI, including hallucinations, bias, privacy breaches, and security vulnerabilities.

**Consequences of non-compliance:**
- Fines (EU AI Act penalties can reach 6% of global turnover for prohibited practices)
- Loss of certifications or accreditation
- Reputational damage
- Legal liability if AI-generated defects reach production
