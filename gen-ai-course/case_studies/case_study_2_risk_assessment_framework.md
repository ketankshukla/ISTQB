# Case Study 2 — GenAI Risk Assessment for a Banking Testing Team

## Context

A major bank is evaluating the use of GenAI to support testing of its mobile banking application. The application handles:

- Account balances and transaction history
- Domestic and international wire transfers
- Bill payments and scheduled transfers
- Biometric authentication (fingerprint, face recognition)
- Integration with third-party payment providers

The test team proposes using a public LLM API for:
1. Generating test cases from regulatory requirement documents
2. Creating synthetic customer data for test environments
3. Drafting defect reports from failure descriptions
4. Analyzing test coverage gaps

The bank operates under strict regulatory requirements including GDPR, PCI-DSS, and the EU AI Act. Internal policy prohibits sharing customer data with third-party services.

---

## Tasks

### Task 1: Risk Identification (Chapter 3)

For each of the four proposed use cases, identify the PRIMARY risk category (hallucination, reasoning error, bias, privacy, security, or environmental) and explain why it is the primary concern for that use case.

### Task 2: Mitigation Strategy (Chapters 3 and 4)

For the two highest-risk use cases identified in Task 1, propose:
- An architectural approach (direct API, RAG, fine-tuned model, on-premise)
- Specific mitigations for the primary risk
- Any additional governance measures needed

### Task 3: Regulatory Compliance (Chapter 3)

The bank must comply with GDPR, PCI-DSS, and the EU AI Act. For each regulation, identify at least one specific requirement that affects how the test team can use GenAI. Explain how the team's proposed use cases might need to change to achieve compliance.

---

## Model Answers

### Task 1 Model Answer

| Use Case | Primary Risk | Explanation |
|----------|--------------|-------------|
| 1. Test cases from regulatory docs | **Hallucination** | Regulatory requirements must be interpreted precisely. A hallucinated requirement or misread compliance rule could lead to missing mandatory tests, exposing the bank to regulatory penalties. |
| 2. Synthetic customer data | **Privacy/Security** | Even "synthetic" data generation can accidentally reproduce real customer patterns if the prompt includes real data or the model memorized training data. Also, entering real data into prompts for "examples" would violate policy. |
| 3. Drafting defect reports | **Privacy** | Defect descriptions may contain account numbers, transaction IDs, or screenshots with PII. Public LLM APIs could retain this data. |
| 4. Coverage gap analysis | **Reasoning error** | Coverage analysis requires logical reasoning about requirements, existing tests, and gaps. LLMs may miscalculate coverage percentages or miss subtle gaps in conditional logic. |

**Note:** All use cases have multiple risks, but the table identifies the primary concern for each.

### Task 2 Model Answer

**Highest Risk: Use Case 2 — Synthetic Customer Data**

- **Architecture:** On-premise deployment of an open-weight model (e.g., Llama) or internal private cloud instance. This ensures no data leaves the bank's infrastructure.
- **Mitigations:**
  - Generate synthetic data using statistically informed rules rather than feeding real records into the model
  - Apply differential privacy techniques to ensure synthetic records cannot be linked to real individuals
  - Validate generated data against organizational data governance policies
  - Conduct re-identification risk assessments
- **Governance:**
  - Data governance committee approval for any AI-generated test data
  - Annual audit of synthetic data generation processes
  - Documentation of generation parameters and validation steps

**Second Highest Risk: Use Case 1 — Test Cases from Regulatory Docs**

- **Architecture:** RAG with an on-premise or private endpoint LLM. The regulatory documents are chunked, embedded, and stored in a bank-controlled vector database.
- **Mitigations:**
  - Ground all generated test cases in specific paragraphs from the retrieved regulatory documents
  - Require human legal/compliance review of all AI-generated regulatory test cases
  - Maintain a traceability matrix linking each test case to its source regulatory clause
  - Use lower temperature settings for deterministic interpretation
- **Governance:**
  - Compliance officer sign-off on test case interpretations
  - Version control for regulatory documents and associated prompts
  - Quarterly review of model outputs against regulatory updates

### Task 3 Model Answer

**GDPR:**
- **Requirement:** Personal data must not be processed without lawful basis; data minimization applies.
- **Impact on testing:** The test team must ensure no customer PII enters LLM prompts. Even "anonymized" data may be re-identifiable. Synthetic data generation must be validated to ensure no GDPR-covered information is present.
- **Change:** All prompts must be reviewed for PII before submission. A pre-prompt sanitization step must be implemented.

**PCI-DSS:**
- **Requirement:** Cardholder data (PAN, CVV, etc.) must be protected; access must be restricted.
- **Impact on testing:** No payment card data can be included in prompts, synthetic data, or model training. Screenshots or logs containing card data must be excluded from any LLM processing.
- **Change:** Implement automated redaction of PCI-sensitive fields before any content is processed by LLMs. Use tokenized or randomly generated card numbers for all test scenarios.

**EU AI Act:**
- **Requirement:** High-risk AI systems (including biometric identification and credit scoring) must meet risk management, data governance, transparency, and human oversight obligations.
- **Impact on testing:** The biometric authentication feature makes this a high-risk system. Test cases generated by AI for biometric features must be documented, validated by humans, and traceable. The AI used to generate these tests may itself need to be documented as part of the AI system lifecycle.
- **Change:** Establish a register of AI use in testing. Ensure human oversight for all AI-generated test artifacts related to high-risk features. Document limitations and risks of the GenAI approach.
