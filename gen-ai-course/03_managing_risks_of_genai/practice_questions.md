# Chapter 3 — Practice Questions

18 original ISTQB-style questions covering Chapter 3 learning objectives. Each question is tagged with its LO and K-level.

**Instructions:** Select the single best answer unless otherwise stated. After attempting all questions, check your answers against the rationales at the end of this file.

---

## Questions

### Q1 (GenAI-3.1.1, K2)

An LLM generates a test case that references a database table called `customer_profile_v2`. The actual database only contains `customer_profile`. The model confidently asserts that `v2` was added in the last release.

Which type of risk does this BEST illustrate?

A. Reasoning error
B. Hallucination
C. Bias
D. Privacy breach

---

### Q2 (GenAI-3.1.2, K2)

A test team wants to reduce hallucinations in generated test cases. Which mitigation is MOST effective?

A. Increase the temperature to encourage more creative outputs
B. Use retrieval-augmented generation grounded in verified requirement documents
C. Remove all constraints from prompts to give the model more freedom
D. Use a smaller model because smaller models never hallucinate

---

### Q3 (GenAI-3.1.1, K2)

An LLM is asked to calculate the boundary values for a field accepting ages 18 to 65. It generates test cases for 17, 18, 41, 65, and 70 but states that 41 is the minimum boundary value.

Which type of risk does this illustrate?

A. Hallucination
B. Reasoning error
C. Bias
D. Privacy breach

---

### Q4 (GenAI-3.1.2, K2)

A team notices that generated user personas consistently represent young, urban, tech-savvy individuals, missing older users and rural populations. The team wants to address this.

Which mitigation is MOST appropriate?

A. Switch to a different LLM provider
B. Review prompts for inclusive language and explicitly request diverse user profiles
C. Increase the temperature to generate more random personas
D. Stop using GenAI for persona generation entirely

---

### Q5 (GenAI-3.2.1, K2)

A tester copies 50 real customer records — including names, emails, and phone numbers — into a public LLM chat interface to generate test data.

Which risk is PRIMARILY being introduced?

A. Hallucination
B. Data privacy breach
C. Energy consumption
D. Reasoning error

---

### Q6 (GenAI-3.2.2, K2)

An organization wants to use a public LLM API to analyze internal bug reports. Which mitigation BEST protects sensitive data?

A. Minimize the data shared and anonymize all personally identifiable information before sending
B. Trust the LLM provider's privacy policy without verification
C. Increase the temperature so the model forgets the data faster
D. Share only high-severity bug reports, assuming low-severity ones are not sensitive

---

### Q7 (GenAI-3.3.1, K2)

Which statement BEST describes the environmental impact of using large language models?

A. LLM inference has no environmental impact because it runs in the cloud
B. Training and inference both consume significant energy, and scale of use matters
C. Only model training is energy-intensive; individual queries are negligible
D. Environmental impact is only relevant for on-premise GPU clusters

---

### Q8 (GenAI-3.3.2, K2)

A test team runs thousands of similar prompts daily to generate test data. Which strategy BEST reduces environmental impact without sacrificing quality?

A. Switch to the largest available model for all prompts
B. Cache common responses and batch process requests
C. Increase temperature to reduce computation per query
D. Run each prompt on a separate server for parallel processing

---

### Q9 (GenAI-3.4.1, K1)

Which regulation establishes a risk-based framework for AI systems in the European Union, with specific obligations for high-risk applications?

A. ISO/IEC 42001
B. EU AI Act
C. NIST AI Risk Management Framework
D. OWASP LLM Top 10

---

### Q10 (GenAI-3.4.2, K2)

Under the EU AI Act, a testing team uses GenAI to generate test cases for a medical device software component.

Which obligation is MOST likely to apply?

A. No obligations apply because the AI is only used for testing
B. Documentation of human oversight and validation of AI-generated artifacts
C. Complete prohibition of all AI use in healthcare
D. Exemption from all data governance requirements

---

### Q11 (GenAI-3.1.1, K2)

An LLM generates test cases for a loan approval system. All generated test cases assume the applicant has a credit score above 700. No test cases cover applicants with lower scores or no credit history.

Which risk does this BEST illustrate?

A. Hallucination
B. Reasoning error
C. Bias
D. Security vulnerability

---

### Q12 (GenAI-3.2.2, K2)

Which of the following is a valid security mitigation when integrating LLMs into testing tools?

A. Trust all LLM outputs because models are trained on safe data
B. Treat LLM outputs as untrusted content and sanitize before rendering or execution
C. Allow LLMs to write directly to production test databases without review
D. Share API keys in prompts so the model can access internal systems

---

### Q13 (GenAI-3.1.2, K2)

A team wants to mitigate reasoning errors when using an LLM to calculate risk scores from multiple weighted factors. Which approach is MOST effective?

A. Use chain-of-thought prompting to make reasoning steps explicit and verifiable
B. Increase the context window to the maximum available
C. Switch to zero-shot prompting for simplicity
D. Ask the model to generate risk scores without explaining the calculation

---

### Q14 (GenAI-3.4.1, K1)

Which standard provides an AI-specific quality model extending ISO 25010, defining characteristics such as accuracy, robustness, and fairness?

A. ISO/IEC 42001
B. ISO/IEC 25059
C. IEEE 2857-2024
D. EU AI Act

---

### Q15 (GenAI-3.2.1, K2)

An attacker embeds hidden instructions in a requirements document uploaded to a testing team's RAG system. When the team queries the system, the LLM follows the hidden instructions and outputs internal API keys.

Which security risk does this illustrate?

A. Direct prompt injection
B. Indirect prompt injection
C. Model inversion attack
D. Data poisoning

---

### Q16 (GenAI-3.3.2, K2)

Which of the following is a valid strategy for reducing the environmental impact of GenAI in testing?

A. Always use the largest available foundation model for every task
B. Use smaller, efficient models when they meet requirements, and cache frequent responses
C. Run every prompt multiple times and select the best output
D. Disable all cooling systems in the data center

---

### Q17 (GenAI-3.4.2, K2)

A testing organization must comply with the EU AI Act. Which activity is MOST important to demonstrate compliance?

A. Keeping detailed records of which AI systems were used, what data was input, how outputs were validated, and who approved them
B. Using only open-source LLMs, which are automatically compliant
C. Avoiding all AI use in testing to eliminate compliance burden
D. Relying solely on vendor compliance certifications without internal documentation

---

### Q18 (GenAI-3.2.2, K2)

Which combination of measures BEST addresses both privacy and security risks when using GenAI for testing?

A. Data minimization + input validation and sanitization
B. Using the largest possible model + high temperature
C. Avoiding documentation + trusting vendor promises
D. Sharing all data freely + disabling output filters

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** Inventing a non-existent database table with false confidence is a factual hallucination. A reasoning error would involve logical mistakes about real tables. Bias would involve systematic skew. Privacy breach would involve exposing data.

### Q2
**Answer: B**

**Rationale:** RAG grounds responses in verified documents, dramatically reducing hallucinations. Increasing temperature or removing constraints worsens hallucinations. Smaller models can still hallucinate.

### Q3
**Answer: B**

**Rationale:** The model correctly identified boundary values (17, 18, 65, 70) but made a reasoning error by mislabeling 41 as the minimum boundary. This is a logical mistake, not a fabricated fact.

### Q4
**Answer: B**

**Rationale:** Inclusive prompt design and explicit requests for diversity directly address representation bias. Switching providers may not solve the issue. Higher temperature adds randomness, not systematic inclusion. Abandoning GenAI is unnecessary when mitigations exist.

### Q5
**Answer: B**

**Rationale:** Copying real PII into a public LLM is a clear data privacy breach. Hallucination, energy consumption, and reasoning errors are unrelated to this action.

### Q6
**Answer: A**

**Rationale:** Data minimization and anonymization are core privacy mitigations. Trusting policies blindly, adjusting temperature, or selective sharing based on severity are not valid privacy protections.

### Q7
**Answer: B**

**Rationale:** Both training and inference consume energy, and cumulative inference at scale is significant. A is false (cloud still uses energy). C understates inference. D is false (cloud also has impact).

### Q8
**Answer: B**

**Rationale:** Caching and batching reduce redundant computation. Using larger models increases impact. Temperature doesn't meaningfully reduce computation. Separate servers increase total resource use.

### Q9
**Answer: B**

**Rationale:** The EU AI Act is the EU regulation establishing a risk-based framework. ISO 42001 is a management system standard. NIST RMF is US guidance. OWASP LLM Top 10 is a security risk list.

### Q10
**Answer: B**

**Rationale:** Medical device software is typically high-risk under the EU AI Act, requiring documentation and human oversight. A is incorrect because testing AI use is not exempt. C is wrong because the Act doesn't prohibit all healthcare AI. D is false — exemptions don't exist.

### Q11
**Answer: C**

**Rationale:** Systematically favoring high-credit applicants reflects bias in training data or prompt interpretation. Hallucination would involve inventing credit rules. Reasoning error would involve incorrect logic about real rules.

### Q12
**Answer: B**

**Rationale:** Treating LLM outputs as untrusted is a fundamental security principle. A, C, and D describe dangerous practices that increase security risk.

### Q13
**Answer: A**

**Rationale:** Chain-of-thought makes reasoning steps explicit, enabling human verification of calculations. Context window, zero-shot simplicity, and unexplained scores don't address reasoning accuracy.

### Q14
**Answer: B**

**Rationale:** ISO/IEC 25059 extends ISO 25010 with AI-specific quality characteristics. ISO 42001 is about AI management systems. IEEE 2857 addresses privacy/security. EU AI Act is regulation.

### Q15
**Answer: B**

**Rationale:** Hidden instructions in retrieved documents manipulating the model is indirect prompt injection. Direct injection involves the attacker providing the prompt directly. Model inversion reconstructs training data. Data poisoning affects training, not runtime RAG.

### Q16
**Answer: B**

**Rationale:** Right-sizing models and caching are valid efficiency strategies. Using the largest model, running multiple times, and disabling cooling are all counterproductive or dangerous.

### Q17
**Answer: A**

**Rationale:** Detailed documentation of AI use, inputs, validation, and approval is essential for regulatory compliance. Open-source doesn't guarantee compliance. Avoiding AI is impractical. Vendor certifications alone are insufficient without internal records.

### Q18
**Answer: A**

**Rationale:** Data minimization addresses privacy; input validation addresses security. This combination correctly targets both risk categories. The other options either worsen risks or provide no protection.
