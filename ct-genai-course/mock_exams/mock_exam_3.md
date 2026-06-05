# CT-GenAI Mock Exam 3

**Instructions:**
- 40 questions
- 60 minutes
- Select the single best answer for each question unless otherwise stated
- Closed book — no notes or references
- No negative marking; answer every question

---

## Questions

### Q1

Which statement BEST describes supervised learning?

A. The model learns from unlabeled data by finding hidden patterns
B. The model learns from labeled input-output pairs
C. The model learns by interacting with an environment and receiving rewards
D. The model does not require any data to make predictions

### Q2

A test team uses an LLM to prioritize regression tests. The model consistently prioritizes tests written by the most senior team members and deprioritizes tests from newer testers, even when the newer tests cover high-risk areas.

Which risk does this BEST illustrate?

A. Hallucination
B. Reasoning error
C. Bias
D. Security vulnerability

### Q3

Which technique involves breaking a complex testing task into a sequence of simpler prompts, where the output of one stage becomes input to the next?

A. Few-shot prompting
B. Chain-of-thought prompting
C. Prompt chaining
D. System prompting

### Q4

An organization wants to analyze production error logs with an LLM to identify patterns. The logs contain user IDs and transaction references.

Which mitigation is MOST important before sending logs to a public LLM API?

A. Increase the temperature to mask identifiers
B. Remove or tokenize all personally identifiable information and sensitive references
C. Share only the most recent 10 log entries
D. Trust the LLM provider's privacy policy without verification

### Q5

In a RAG system, why are documents converted into embeddings before storage?

A. To compress the documents for faster LLM training
B. To enable semantic similarity search in the vector database
C. To encrypt the documents for security
D. To automatically summarize the documents

### Q6

Which statement accurately compares fine-tuning and RAG?

A. Fine-tuning changes model weights; RAG retrieves documents and includes them in prompts without changing weights
B. RAG and fine-tuning are identical approaches with different names
C. RAG requires retraining the model every time a document is added
D. Fine-tuning does not require any training data

### Q7

A tester evaluates LLM-generated BDD scenarios and finds that some use "Given-When-Then" while others use "Given-And-When-Then-And." The team's standard requires the first format.

Which evaluation criterion is violated?

A. Correctness
B. Consistency
C. Completeness
D. Relevance

### Q8

Which regulation imposes specific obligations on high-risk AI systems, including requirements for risk management, data governance, and human oversight?

A. GDPR
B. ISO/IEC 42001
C. EU AI Act
D. NIST Cybersecurity Framework

### Q9

A testing team wants an LLM to generate test cases for a banking feature. The prompt provides the feature description but no format guidance. The outputs vary between paragraph descriptions, bullet lists, and tables.

Which prompt component is MOST likely missing?

A. Role definition
B. Expected output format
C. Model temperature specification
D. API endpoint details

### Q10

Which LLMOps activity ensures that different versions of prompts can be compared, rolled back, and audited over time?

A. Red teaming
B. Prompt versioning
C. Cost management
D. Model distillation

### Q11

An LLM is asked to summarize a testing standard and states: "ISTQB CT-GenAI v1.1 requires all test cases to be generated entirely by AI without human review."

Which limitation does this illustrate?

A. Context window constraint
B. Hallucination
C. Bias
D. Temperature error

### Q12

Which approach BEST balances environmental responsibility with effective use of GenAI in testing?

A. Use the largest model for every task and run each prompt multiple times
B. Select appropriately sized models, cache responses, and use renewable-energy providers
C. Avoid all caching to ensure outputs are always fresh
D. Run models on personal laptops to avoid data center energy use

### Q13

In which phase of GenAI adoption would an organization evaluate its current testing tools, skills, and data availability?

A. Assessment and Foundation
B. Pilot and Experimentation
C. Scaling and Integration
D. Optimization and Maturity

### Q14

A test director wants to reduce resistance from testers who believe GenAI will make their existing skills obsolete.

Which strategy is MOST effective?

A. Announce that all manual test design skills are no longer valued
B. Redefine roles to show how GenAI expertise enhances career value and create advancement paths
C. Ignore the resistance and mandate tool adoption
D. Replace resistant testers with contractors who already know GenAI

### Q15

Which architectural approach is BEST when an organization needs sub-second responses from a test assistant used during live exploratory testing sessions?

A. The largest available foundation model with maximum context window
B. Smaller, optimized models with response caching
C. A complex ensemble of five different models
D. On-premise deployment of a 70B parameter model without GPU acceleration

### Q16

A prompt includes: "You are a test analyst. Generate test cases for the login feature. The login form has username and password fields."

Which components are present, and which is MISSING?

A. All six components are present
B. Role, task, and input are present; constraints, examples, and format are missing
C. Only the task is present
D. The system prompt is present but the user prompt is missing

### Q17

An LLM generates a risk assessment stating that a feature with 1,000 daily users and no safety implications is "high risk" while a feature handling financial transactions for 10,000 users is "low risk."

Which limitation does this illustrate?

A. Hallucination
B. Reasoning error
C. Bias
D. Context window constraint

### Q18

A testing team integrates an LLM into their test management tool. A user uploads a bug report containing hidden instructions that cause the LLM to output the contents of the test database schema.

Which security risk does this illustrate?

A. Direct prompt injection
B. Indirect prompt injection
C. Model inversion
D. Supply chain attack

### Q19

Which statement about ISO/IEC 25059 is TRUE?

A. It is a European Union regulation
B. It extends ISO 25010 with AI-specific quality characteristics such as accuracy, robustness, and fairness
C. It replaces the ISTQB certification scheme
D. It only applies to discriminative models, not generative models

### Q20

A test team notices that the quality of LLM-generated test cases has degraded over the past month, though the prompts have not changed.

Which LLMOps activity should be investigated FIRST?

A. Prompt versioning to confirm no changes were accidentally introduced
B. Model evaluation to check for output drift or degradation
C. Cost analysis to see if a cheaper model was substituted
D. Red teaming to test for new adversarial vulnerabilities

### Q21

What is a foundation model?

A. A small model trained for one specific task
B. A large, general-purpose model pre-trained on broad data and adaptable to many downstream tasks
C. A model that requires immediate fine-tuning before any use
D. A model with no limitations on context window or knowledge

### Q22

A team needs to ensure their LLM-powered test assistant has current knowledge of their API, which changes every two weeks.

Which approach is MOST appropriate?

A. Fine-tune the model on the API documentation every two weeks
B. Use Retrieval-Augmented Generation with automated re-ingestion of updated documentation
C. Zero-shot prompting without any document access
D. Train a custom model from scratch on the API specification

### Q23

Which of the following is a PRIMARY reason that organizations must govern their use of GenAI in testing?

A. GenAI tools are always free and unlimited
B. Uncontrolled use can lead to data privacy breaches, inconsistent quality, and regulatory non-compliance
C. Governance is only required for on-premise deployments
D. LLM providers handle all governance automatically

### Q24

Which activity is MOST characteristic of the Maturity phase of GenAI adoption?

A. Evaluating current testing processes and capabilities
B. Running the first pilot with a single test module
C. Considering domain specialization and cross-team sharing of best practices
D. Selecting the initial LLM API provider

### Q25

A healthcare organization must ensure NO patient data leaves its infrastructure when using GenAI for testing.

Which architectural approach is MOST appropriate?

A. Public LLM API with data encryption
B. On-premise deployment of an open-weight model
C. RAG using a third-party vector database in the cloud
D. Fine-tuning a public model via cloud API on anonymized patient data

### Q26

Which TWO risks are MOST relevant when using a public LLM API to draft defect reports from production failures? (Choose TWO)

A. Defect descriptions may contain PII or sensitive system information
B. The LLM will automatically fix the defects
C. Public APIs may retain prompts for future model training
D. Defect reports always have perfect grammar

### Q27

Which change management principle BEST supports testers during GenAI adoption?

A. Eliminate all training budgets to fund tool purchases
B. Involve testers in pilot design, provide hands-on training, and celebrate early wins
C. Keep pilots secret to avoid raising expectations
D. Transfer all testers to development roles

### Q28

What is the primary purpose of chain-of-thought prompting?

A. To reduce the number of tokens in the prompt
B. To encourage the LLM to show its reasoning step-by-step before giving a final answer
C. To encrypt the communication between user and model
D. To automatically fine-tune the model during inference

### Q29

An organization uses GenAI to generate test plans. Which risk is MOST important to monitor?

A. Test plans are always too short
B. Generated plans may reference non-existent standards or requirements (hallucinations)
C. GenAI cannot generate text in plan format
D. Test plans require no human review

### Q30

Which statement about LLM context windows is TRUE?

A. Context windows are unlimited in all modern LLMs
B. Exceeding the context window causes truncation or errors
C. Context windows only apply to training, not inference
D. Context window size has no impact on prompt design

### Q31

In LLMOps, what does A/B testing of prompt variants help determine?

A. Which prompt produces better quality outputs for a specific testing task
B. The exact number of neurons in the LLM
C. The office location with the best internet speed
D. The programming language the LLM was written in

### Q32

An organization has proprietary testing terminology and strict output format requirements that are stable over time. They have 5,000 example test artifacts.

Which approach is MOST appropriate?

A. RAG with daily document updates
B. Fine-tuning a foundation model on the 5,000 examples
C. Zero-shot prompting for each new request
D. Manual test case writing without AI

### Q33

Which principle of leveraging GenAI in testing addresses the need to protect sensitive data?

A. Iterative refinement
B. Privacy and security first
C. Context matters
D. Measure and validate

### Q34

A testing team needs to generate test cases for a feature described in a 50-page specification. The specification fits within the LLM's context window.

Which technique is MOST appropriate?

A. Prompt chaining to break the specification into sections
B. Including the full specification in a single prompt with clear task instructions
C. Fine-tuning the model on the specification
D. Building a custom model specifically for this feature

### Q35

Which is a valid reason to choose fine-tuning over RAG?

A. The knowledge base changes daily and traceability is required
B. The domain is highly specialized, stable, and a large labeled dataset is available
C. The organization needs the lowest possible upfront cost
D. The organization needs to cite source documents for every output

### Q36

A tester receives LLM-generated test cases that include steps like "Verify the system works correctly" without specific expected results.

Which prompt refinement is MOST likely to solve this?

A. Add: "Each test case must include a specific, measurable expected result, e.g., 'Expected: Error message "Invalid date format" is displayed in red below the field'"
B. Increase the temperature to 1.0
C. Remove the format specification
D. Ask for fewer test cases

### Q37

Which framework is a US guidance document with four core functions (Govern, Map, Measure, Manage) for managing AI risks?

A. EU AI Act
B. ISO/IEC 42001
C. NIST AI Risk Management Framework
D. OWASP LLM Top 10

### Q38

When scaling GenAI adoption, which governance element is MOST important for maintaining accountability?

A. Allowing any tester to use any public LLM without logging
B. Establishing clear ownership of AI-generated artifact quality and an escalation path for questionable outputs
C. Eliminating all documentation because AI generates it automatically
D. Preventing testers from flagging low-quality AI outputs

### Q39

An LLM is asked to identify boundary values for a date field accepting dates from 2020-01-01 to 2024-12-31. It identifies 2019-12-31 and 2025-01-01 as boundary values but states they are both valid inputs.

Which limitation does this illustrate?

A. Hallucination
B. Reasoning error
C. Bias
D. Privacy breach

### Q40

Which statement BEST aligns with ISTQB principles for communicating GenAI's role in testing?

A. "GenAI eliminates the need for experienced testers"
B. "GenAI is a tool that augments tester expertise; human judgment and accountability remain essential"
C. "Testers should accept all AI outputs without question to save time"
D. "We will replace manual testing with AI-generated automation within three months"
