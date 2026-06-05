# Case Study 3 — Organizational GenAI Adoption Roadmap for a Healthcare Testing Group

## Context

You are the Test Director at a healthcare software company with 120 testers across six product teams. The organization develops:

- Electronic Health Record (EHR) systems
- Patient scheduling and portal applications
- Medical device firmware (FDA-regulated)
- Billing and insurance claim processing

The company wants to adopt GenAI to improve testing efficiency and coverage. However:
- Testers have mixed technical backgrounds (some are former nurses with limited coding experience; others are ISTQB-certified automation engineers).
- The medical device team operates under FDA 21 CFR Part 820 and IEC 62304, requiring extensive documentation and traceability.
- There is no existing AI/ML expertise in the testing organization.
- Recent industry news about AI hallucinations in healthcare has made executives cautious.
- Budget allows for public LLM API subscriptions but not for building an ML engineering team.

---

## Tasks

### Task 1: Phased Roadmap Design (Chapter 5)

Design a four-phase adoption roadmap tailored to this organization's constraints. For each phase, specify:
- Timeline (in months)
- Target teams or products
- Specific use cases to pilot or scale
- Key success metrics
- Governance or compliance checkpoints

### Task 2: Change Management Plan (Chapter 5)

Addressing the specific concerns of this organization, design a change management strategy that includes:
- How to handle the skill diversity across testers
- How to address executive caution about hallucinations
- How to ensure FDA/IEC compliance is maintained
- Communication and training approaches

### Task 3: Architecture and Risk Decisions (Chapters 3 and 4)

For each product area (EHR, patient portal, medical device, billing), recommend an architectural approach and identify the top two risks that must be actively managed. Justify your recommendations based on the context.

---

## Model Answers

### Task 1 Model Answer

**Phase 1: Assessment and Foundation (Months 1-2)**
- **Target:** Billing and insurance team (lowest regulatory risk, well-documented requirements)
- **Use cases:** Test case generation from structured requirements; synthetic test data creation
- **Success metrics:** Time to generate test cases (baseline vs AI-assisted); tester satisfaction survey; hallucination rate in generated test cases
- **Compliance:** Legal review of data sharing with public LLM APIs; approval of anonymization procedures

**Phase 2: Pilot and Experimentation (Months 3-5)**
- **Target:** EHR and patient portal teams (medium risk, high volume of repetitive test design)
- **Use cases:** BDD scenario generation from user stories; regression test prioritization suggestions; draft defect reports
- **Success metrics:** Coverage improvement measured by requirements traceability; reduction in test design time; quality rating of AI outputs by senior testers
- **Compliance:** HIPAA Business Associate Agreement review with LLM provider; human-in-the-loop validation mandatory for all outputs

**Phase 3: Scaling and Integration (Months 6-10)**
- **Target:** All non-medical-device teams
- **Use cases:** Standardized prompt library; integration with Jira and TestRail; automated coverage gap analysis
- **Success metrics:** Adoption rate across teams; consistency of output quality; cost per test artifact
- **Compliance:** Organization-wide AI governance policy approved; quarterly audits of AI-generated artifacts; incident response plan for AI failures

**Phase 4: Maturity and Caution (Months 11-18)**
- **Target:** Medical device team (highest regulatory scrutiny)
- **Use cases:** Limited to non-safety-critical test documentation (test plan drafting, status reporting); NO AI-generated test cases for safety-critical features without extensive validation
- **Success metrics:** FDA audit readiness of AI usage documentation; traceability of all AI-influenced artifacts
- **Compliance:** Full validation of AI tools per FDA software validation guidance; every AI-assisted artifact reviewed and signed off by qualified tester

### Task 2 Model Answer

**Handling Skill Diversity:**
- Create tiered training: "GenAI Awareness" for all testers (2 hours), "Prompt Engineering Fundamentals" for test analysts (1 day), "Advanced GenAI for Test Automation" for automation engineers (2 days).
- Pair experienced testers with less technical colleagues for hands-on practice.
- Build a shared prompt library with pre-approved templates so less technical testers can benefit without writing complex prompts.
- Recognize that former nurses bring domain expertise that GenAI lacks — position them as validators of AI outputs, not victims of automation.

**Addressing Executive Caution:**
- Propose a "crawl, walk, run" approach with explicit gates: no AI use on safety-critical features until Phase 4.
- Present risk data: "Our pilot showed 95% accuracy in billing test case generation with 100% human review. Hallucination rate was 3%, and all were caught by validators."
- Establish a "GenAI Risk Board" with executive, legal, and clinical representatives who approve each phase.
- Create a kill criteria: "If hallucination rate exceeds 5% in a pilot, we pause and redesign before scaling."

**Ensuring FDA/IEC Compliance:**
- Maintain a "validated state" for medical device testing: AI tools are treated as tools subject to validation per FDA guidance.
- All AI-generated content for medical devices must be marked, traced, and human-reviewed.
- Keep a "manual parallel" for safety-critical tests: AI suggests, humans decide, and the decision is documented.
- Engage a regulatory consultant to review the AI validation approach before Phase 4.

**Communication and Training:**
- Monthly town halls with demos of successful pilot outputs
- Internal "GenAI Testing Newsletter" sharing prompt patterns, success stories, and lessons learned
- Anonymous feedback channel for testers to report concerns or bad experiences
- Executive dashboard showing metrics: time saved, quality maintained, costs controlled

### Task 3 Model Answer

| Product Area | Recommended Architecture | Top Risk 1 | Top Risk 2 |
|--------------|------------------------|------------|------------|
| **EHR** | Private API endpoint or RAG with on-premise vector DB | **Privacy (HIPAA):** Patient data must never enter public LLMs. Even de-identified data can be re-identified in EHR contexts. | **Hallucination:** Incorrect test cases for clinical workflows could miss critical safety checks. |
| **Patient Portal** | RAG with internal knowledge base | **Security:** Portal integrates with authentication and payment systems; prompt injection could manipulate test scenarios. | **Bias:** Generated test data may underrepresent patients with disabilities or non-English speakers. |
| **Medical Device** | Minimal GenAI use; on-premise only if any use is approved | **Regulatory (FDA):** AI-generated test artifacts for safety-critical features may not meet validation requirements without extensive documentation. | **Hallucination:** Any incorrect test case for device firmware could miss a failure mode with patient safety implications. |
| **Billing** | Public API with strict data governance | **Privacy (PCI/PII):** Billing data is highly sensitive; synthetic data generation must be validated. | **Reasoning error:** Incorrect calculations in generated test cases (e.g., tax, copay, insurance splits) may not be caught by non-experts. |

**Justifications:**
- EHR uses private/on-premise due to HIPAA sensitivity and the re-identification risk unique to health data.
- Patient portal uses RAG to ground responses in internal documentation, reducing hallucinations about portal features.
- Medical device minimizes GenAI due to FDA validation burden; any use requires the highest scrutiny.
- Billing is the safest starting point because requirements are rule-based, well-documented, and less safety-critical, but PCI compliance still requires data governance.
