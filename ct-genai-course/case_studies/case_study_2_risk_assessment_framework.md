# 📂 Case Study 2 — GenAI Risk Assessment for a Banking Testing Team

## ⭐ Context

A major European bank called "EuroBank" with 15 million customers is evaluating the use of GenAI to support testing of its mobile banking application. The application handles:

- Account balances and transaction history (real-time and historical)
- Domestic SEPA and international SWIFT wire transfers (up to €500,000 per transaction)
- Bill payments and scheduled transfers
- Biometric authentication (fingerprint, face recognition) for login and high-value transactions
- Integration with third-party payment providers (PayPal, Stripe, Klarna)
- Credit scoring integration for loan applications within the app
- Investment portfolio tracking and trading

EuroBank's testing organization has 45 testers across 6 squads. The test team proposes using a public LLM API (ChatGPT Enterprise) for:
1. Generating test cases from 200+ regulatory requirement documents (GDPR, PSD2, MiFID II, PCI-DSS)
2. Creating synthetic customer data for test environments (need 50,000 realistic but fictional customer profiles)
3. Drafting defect reports from failure descriptions and crash logs
4. Analyzing test coverage gaps across the 6 squads

EuroBank operates under strict regulatory requirements including GDPR, PCI-DSS, PSD2, MiFID II, and the EU AI Act. Internal policy prohibits sharing customer data with third-party services. The bank has a €2M annual budget for testing tool innovation.

---

## ⭐ Tasks

### ⚠️ Task 1: Risk Identification (Chapter 3)

For each of the four proposed use cases, identify the PRIMARY risk category (hallucination, reasoning error, bias, privacy, security, environmental) and explain why it is the primary concern for that use case. Also identify a SECONDARY risk for each use case.

### ♟️ Task 2: Architecture and Mitigation Strategy (Chapters 3 and 4)

For the two highest-risk use cases identified in Task 1, propose:
- An architectural approach (direct API, RAG, fine-tuned model, on-premise, hybrid)
- Specific mitigations for the primary risk (at least 3 mitigations per use case)
- Additional governance measures needed
- Estimated cost and timeline for implementation

### 🔷 Task 3: Regulatory Compliance (Chapter 3)

EuroBank must comply with GDPR, PCI-DSS, PSD2, MiFID II, and the EU AI Act. For each regulation, identify at least one specific requirement that affects how the test team can use GenAI. Explain how the team's proposed use cases might need to change to achieve compliance, and which use cases should be PROHIBITED outright under certain regulations.

### 🗂️ Task 4: Change Management (Chapter 5)

The head of testing wants to roll out GenAI tools to all 45 testers within 3 months. Identify at least three risks with this timeline and propose a more realistic phased approach.

---

## ✔️ Model Answers

### ✔️ Task 1 Model Answer

| Use Case | Primary Risk | Secondary Risk | Explanation |
|----------|--------------|----------------|-------------|
| 1. Test cases from regulatory docs | **Hallucination** | Reasoning error | Regulatory requirements must be interpreted precisely. A hallucinated requirement or misread compliance rule (e.g., inventing a MiFID II reporting obligation that doesn't exist) could lead to missing mandatory tests, exposing the bank to regulatory penalties of up to €20M or 4% of global turnover. |
| 2. Synthetic customer data | **Privacy/Security** | Bias | Even "synthetic" data generation can accidentally reproduce real customer patterns if the prompt includes real data or the model memorized training data. A synthetic profile might be statistically close enough to a real customer to enable re-identification. Secondary: bias in generated data could underrepresent vulnerable customer segments. |
| 3. Drafting defect reports | **Privacy** | Security | Defect descriptions may contain account numbers, transaction IDs, IBANs, or screenshots with PII. Public LLM APIs could retain this data. Secondary: crash logs may contain stack traces revealing internal API structures or security tokens. |
| 4. Coverage gap analysis | **Reasoning error** | Hallucination | Coverage analysis requires logical reasoning about requirements, existing tests, and gaps across 6 squads. LLMs may miscalculate coverage percentages or miss subtle gaps in conditional logic (e.g., not realizing that a PSD2 Strong Customer Authentication requirement is tested in Squad 1 but not Squad 3). |

---

### ✔️ Task 2 Model Answer

**Highest Risk: Use Case 2 — Synthetic Customer Data**

- **Architecture:** On-premise deployment of an open-weight model (e.g., Llama 3 70B) on EuroBank's internal GPU infrastructure, OR a private cloud instance in EuroBank's Azure subscription with no data leaving EU data centers.
- **Why not public API:** Even "synthetic" data generation requires telling the model what real data looks like. The prompt might include data patterns, distributions, or examples that leak information. Public API use is prohibited by internal policy for this data class.

- **Mitigations:**
  1. **Statistical generation rules:** Generate synthetic data using statistically informed rules and distributions calculated from real data by data scientists — never feed real records into the LLM prompt.
  2. **Differential privacy:** Apply differential privacy techniques (adding calibrated noise) to ensure synthetic records cannot be linked to real individuals even by someone with external knowledge.
  3. **Re-identification risk assessment:** Have the data protection officer conduct a re-identification attack simulation on generated data before it is approved for test environments.
  4. **Data governance validation:** Validate generated data against organizational data governance policies (no real names, no real addresses, no sequences that match real IBAN patterns).

- **Governance:**
  - Data governance committee approval required for ANY AI-generated test data
  - Annual third-party audit of synthetic data generation processes
  - Documentation of generation parameters, statistical distributions, and validation steps
  - Mandatory data protection impact assessment (DPIA) under GDPR before deployment

- **Cost/Timeline:** €150K-300K for on-premise GPU infrastructure or private cloud setup; 3-4 months including DPIA and audit.

---

**Second Highest Risk: Use Case 1 — Test Cases from Regulatory Docs**

- **Architecture:** RAG with an on-premise or private endpoint LLM. The 200+ regulatory documents are chunked, embedded, and stored in a bank-controlled vector database within EU data centers. The LLM retrieves relevant regulatory paragraphs and generates test cases grounded in those paragraphs.
- **Why RAG over fine-tuning:** Regulatory documents change frequently (quarterly updates from ESMA, ECB, national regulators). RAG allows updating the knowledge base by simply adding new document chunks. Fine-tuning would require retraining every quarter.

- **Mitigations:**
  1. **Source grounding:** All generated test cases must cite the specific regulatory paragraph and requirement ID that justifies the test case. If no source can be found, the test case is flagged for human review.
  2. **Legal/compliance review:** Every AI-generated regulatory test case must be reviewed and signed off by a compliance officer before inclusion in the test suite.
  3. **Traceability matrix:** Maintain a matrix linking each test case to its source regulatory clause, version of the regulation, and the prompt used to generate it.
  4. **Low temperature:** Use temperature 0.0-0.1 for regulatory interpretation to maximize consistency and reduce hallucination risk.

- **Governance:**
  - Compliance officer sign-off on all regulatory test case interpretations
  - Version control for regulatory documents, embeddings, and associated prompts
  - Quarterly review of model outputs against regulatory updates
  - Register of all AI-generated test artifacts for regulatory audits

- **Cost/Timeline:** €100K-200K for RAG infrastructure (vector DB, embedding pipeline, LLM endpoint); 2-3 months setup plus ongoing maintenance.

---

### ✔️ Task 3 Model Answer

**GDPR:**
- **Requirement:** Personal data must not be processed without lawful basis (Article 6); data minimization applies (Article 5(1)(c)); DPIA required for high-risk processing (Article 35).
- **Impact on testing:** The test team must ensure no customer PII enters LLM prompts. Even "anonymized" data may be re-identifiable under GDPR's high bar. Synthetic data generation must be validated to ensure no GDPR-covered information is present.
- **Changes needed:**
  - Implement automated PII detection and redaction in all prompts
  - Conduct DPIA before using GenAI for any test data generation
  - Use on-premise or EU-resident private models for all testing use cases involving data
- **PROHIBITED:** Use Case 2 (synthetic data generation) via public LLM APIs is prohibited under GDPR without explicit legal basis and DPIA.

**PCI-DSS:**
- **Requirement:** Cardholder data (PAN, CVV, etc.) must be protected (Requirement 3); access must be restricted (Requirement 7); test environments must not use production cardholder data (Requirement 3.4).
- **Impact on testing:** No payment card data can be included in prompts, synthetic data, or model training. Screenshots or logs containing card data must be excluded from any LLM processing.
- **Changes needed:**
  - Implement automated redaction of PCI-sensitive fields before any LLM processing
  - Use only official PCI test card numbers (documented, public, safe)
  - Prohibit screenshot sharing with LLMs for payment flow defects
- **PROHIBITED:** Any use case involving real or production-like card data in LLM prompts is prohibited.

**PSD2:**
- **Requirement:** Strong Customer Authentication (SCA) must be tested for electronic payments. Test data and environments must maintain the same security controls as production for authentication mechanisms.
- **Impact on testing:** AI-generated test cases for SCA flows must be validated by security experts. Biometric authentication test data is particularly sensitive.
- **Changes needed:**
  - All SCA-related test cases must undergo security review
  - Biometric test data must be synthetic and not based on real biometric templates

**MiFID II:**
- **Requirement:** Investment advice and portfolio management records must be accurate and auditable. Algorithmic decision-making must be transparent and explainable.
- **Impact on testing:** Test cases for investment features must be traceable to specific MiFID II obligations. AI-generated test cases must not misrepresent regulatory requirements.
- **Changes needed:**
  - Require source citation for all MiFID II-related test cases
  - Legal review of AI-generated test artifacts for investment testing

**EU AI Act:**
- **Requirement:** High-risk AI systems (including biometric identification and credit scoring) must meet risk management, data governance, transparency, human oversight, accuracy, and cybersecurity obligations (Articles 8-15).
- **Impact on testing:** The biometric authentication and credit scoring features make this a high-risk system under the EU AI Act. The AI used to generate tests for these features may itself need to be documented as part of the AI system lifecycle.
- **Changes needed:**
  - Establish a register of ALL AI use in testing (model versions, prompts, validation steps, human reviewers)
  - Ensure human oversight for all AI-generated test artifacts related to high-risk features
  - Document limitations and risks of the GenAI approach
  - Conduct conformity assessments before deploying AI-generated test artifacts for high-risk features
- **PROHIBITED:** Use Case 3 (drafting defect reports from crash logs) for high-risk features without full human review and traceability is effectively prohibited under the EU AI Act's oversight requirements.

---

### ✔️ Task 4 Model Answer

**Risks with the 3-month rollout timeline:**

1. **Inadequate training:** 45 testers cannot be effectively trained in prompt engineering, output evaluation, and risk awareness in 3 months while maintaining their regular testing duties. Rushing training leads to poor adoption and misuse.
2. **No governance framework:** A 3-month timeline allows no time for developing data sharing policies, validation procedures, model selection criteria, or incident response plans. The organization will face uncontrolled GenAI use.
3. **No pilot validation:** Rolling out to all testers without piloting means any problems (hallucination rates, integration issues, workflow disruptions) affect everyone simultaneously rather than a controlled group.
4. **Compliance gaps:** GDPR DPIA, PCI-DSS review, and EU AI Act conformity assessment cannot be completed in 3 months alongside rollout.
5. **Change resistance:** Testers need time to adapt. A rapid, mandatory rollout creates anxiety and resistance without demonstrating value.

**Recommended phased approach:**

**Phase 1 (Months 1-3): Assessment and Pilot**
- Complete risk assessment, compliance review, and DPIA
- Select 6 testers (1 from each squad) for pilot
- Run 2 controlled pilots: test case generation for non-regulatory features, and status report drafting
- Collect metrics and refine prompts

**Phase 2 (Months 4-6): Expanded Pilot and Governance**
- Expand to 15 testers across 3 squads
- Implement governance framework and data sharing policies
- Complete training for expanded group
- Run pilot for regulatory test case generation with legal review

**Phase 3 (Months 7-9): Scaling**
- Roll out to all 45 testers
- Integrate with Jira and TestRail
- Standardize prompt library
- Implement LLMOps monitoring

**Phase 4 (Months 10-12): Maturity**
- Advanced use cases (coverage analysis, predictive risk scoring)
- Full regulatory compliance documentation
- Cross-squad sharing and optimization
