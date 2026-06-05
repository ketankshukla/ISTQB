# Mock Exam 1 — Answers and Rationales

---

## Answer Key

| Q | Answer | Q | Answer | Q | Answer | Q | Answer |
|---|--------|---|--------|---|--------|---|--------|
| 1 | B | 11 | B | 21 | B | 31 | B |
| 2 | C | 12 | B | 22 | B | 32 | B |
| 3 | B | 13 | B | 23 | B | 33 | B |
| 4 | B | 14 | B | 24 | B | 34 | B |
| 5 | B | 15 | B | 25 | B | 35 | B |
| 6 | A | 16 | B | 26 | A, B | 36 | A |
| 7 | B | 17 | B | 27 | B | 37 | B |
| 8 | C | 18 | B | 28 | B | 38 | B |
| 9 | C | 19 | B | 29 | A | 39 | B |
| 10 | B | 20 | B | 30 | C | 40 | B |

---

## Rationales

### Q1
**B.** Discriminative models classify or predict labels; generative models create new content. This is the fundamental distinction.

### Q2
**C.** Systematically favoring full-time employees reflects bias in training data or interpretation. Hallucination would involve inventing employment rules. Reasoning error would involve logical mistakes about real rules.

### Q3
**B.** Few-shot prompting provides examples within the prompt. Zero-shot provides none. CoT involves reasoning steps. Prompt chaining sequences multiple prompts.

### Q4
**B.** Anonymization and data minimization are core privacy mitigations. Trusting promises, randomizing with temperature, and selective sharing are not valid protections.

### Q5
**B.** The embedding model converts text to vectors for similarity search. Fine-tuning updates model weights. Encryption and model compression are unrelated to embeddings.

### Q6
**A.** Fine-tuning updates internal weights. RAG does not. Fine-tuning requires training data. Human oversight remains essential.

### Q7
**B.** Inconsistent naming conventions violate consistency. The code may be correct, relevant, and feasible — but inconsistent.

### Q8
**C.** The EU AI Act establishes a risk-based framework. ISO 42001 is a management standard. GDPR is data protection. NIST AI RMF is US guidance.

### Q9
**C.** Generating without examples is zero-shot prompting. Few-shot requires examples. CoT requires reasoning steps. System prompting sets session behavior.

### Q10
**B.** Prompt versioning, evaluation, and monitoring are core LLMOps. Eliminating humans, using a single model, and avoiding documentation are incorrect.

### Q11
**B.** Inventing a non-existent endpoint is hallucination. Context window causes truncation. Bias involves systematic skew. Reasoning error involves logic mistakes.

### Q12
**B.** Caching and right-sizing reduce environmental impact. Larger models and multiple runs increase impact. Disabling filtering is unsafe.

### Q13
**B.** Pilot is for controlled experiments. Assessment is for analysis. Scaling is for broader rollout. Maturity is for optimization.

### Q14
**B.** Involving testers and emphasizing augmentation is effective change management. Mandates, threats, and transfers are poor practices.

### Q15
**B.** RAG provides provenance via retrieved chunks. Fine-tuning embeds knowledge opaquely. Zero-shot and direct API lack document tracing.

### Q16
**B.** The prompt is too vague and lacks constraints. Fine-tuning isn't the issue. Temperature affects randomness, not scope. Zero-shot can work with specificity.

### Q17
**B.** CoT makes reasoning explicit and verifiable. Higher temperature, removing constraints, and smaller models don't improve reasoning accuracy.

### Q18
**B.** Hidden instructions in retrieved documents is indirect prompt injection. Direct injection is attacker-provided prompts. Model inversion extracts training data. Data poisoning affects training.

### Q19
**B.** The EU AI Act classifies by risk level and imposes high-risk obligations. It is EU-specific, doesn't prohibit healthcare AI, and doesn't replace ISO standards.

### Q20
**B.** Prompt versioning and length tracking directly investigate cost drivers. Red teaming, fine-tuning, and adversarial testing address different concerns.

### Q21
**B.** Foundation models are large, general-purpose, and adaptable. They are not task-specific, do require fine-tuning for specialization, and do have context limits.

### Q22
**B.** RAG grounds responses in verified documents, reducing hallucinations. Higher temperature increases randomness. Removing examples and using smaller models don't address hallucinations.

### Q23
**B.** Testers remain accountable for quality. Speed, first-month-only oversight, and word limits are incorrect reasons.

### Q24
**B.** Assessment evaluates readiness. Deployment, elimination of manual processes, and fine-tuning are later activities.

### Q25
**B.** On-premise keeps data in-house. Public APIs, third-party RAG, and cloud fine-tuning all risk data leaving the data center.

### Q26
**A, B.** Expecting an invalid email to be accepted is an incorrect expected result (correctness). Inventing system behavior that doesn't exist could be considered hallucination. No context window or privacy issues are shown.

### Q27
**B.** Training and career path redefinition are constructive. Mandates, secrecy, and elimination are poor change management.

### Q28
**B.** System prompts set session behavior and constraints. User prompts are specific queries. Encryption and training data storage are unrelated.

### Q29
**A.** Synthetic data can reproduce real patterns. B, C, and D are false statements.

### Q30
**C.** Higher temperature increases variability and creativity. Lower temperature increases determinism. Temperature does affect output style.

### Q31
**B.** Red teaming is adversarial testing. Parameter reduction, eliminating humans, and auto-fine-tuning are not red teaming.

### Q32
**B.** Frequent changes require frequent retraining, which is costly. The model can generate text. Context windows exist in fine-tuned models. RAG handles updates well.

### Q33
**B.** Iterative refinement and rich context are core principles. No human review, static prompts, and automatic model improvement are incorrect.

### Q34
**B.** RAG with live ingestion handles frequently updated wikis. Annual fine-tuning dumps are stale. Zero-shot without documents lacks knowledge. Custom models are overkill.

### Q35
**B.** On-premise provides data control. It requires expertise, doesn't guarantee quality, and doesn't eliminate update needs.

### Q36
**A.** Explicitly requesting negative scenarios is direct and effective. Higher temperature, removing constraints, and reducing quantity don't address the gap.

### Q37
**B.** ISO/IEC 25059 extends ISO 25010 with AI quality characteristics. ISO 42001 is management systems. EU AI Act is regulation. OWASP is security risks.

### Q38
**B.** Accountability and data governance are essential for scaling. Unapproved tools, eliminating docs, and suppressing feedback create unmanaged risk.

### Q39
**B.** Incorrect calculation is a reasoning error. Inventing an endpoint is hallucination. Biased data is bias. Exposing information is a privacy/security issue.

### Q40
**B.** Augmentation and focus on complex validation aligns with ISTQB principles. Replacement messages, elimination, and transfers are incorrect.
