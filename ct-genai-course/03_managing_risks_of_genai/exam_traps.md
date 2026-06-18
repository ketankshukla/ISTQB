# 🪤 Chapter 3 — Exam Traps

## 🪤 Trap 1: Treating Hallucinations as Rare

**Trap:** Answers suggesting hallucinations are "minor" or "only occur in large models" or "can be ignored with good prompting."

**Defense:** Hallucinations are pervasive across LLMs of all sizes and remain an unsolved research problem. The syllabus treats them as a critical risk requiring active mitigation, not something prompt engineering alone eliminates.

## 🪤 Trap 2: Confusing Reasoning Errors with Hallucinations

**Trap:** Answers that use "hallucination" to describe arithmetic mistakes or logical fallacies.

**Defense:** Reasoning errors are mistakes in logic or calculation. Hallucinations are fabricated facts or sources. They are distinct risks with different mitigations. The syllabus tests whether you can distinguish them.

## 🪤 Trap 3: Over-Simplifying Bias Mitigation

**Trap:** Answers that suggest bias can be "eliminated" by using a "better" or "bigger" model.

**Defense:** Bias is a systemic issue requiring ongoing attention: diverse data, inclusive prompts, fairness metrics, diverse review teams, and adversarial testing. No model size eliminates bias.

## 🪤 Trap 4: Privacy vs Security Confusion

**Trap:** Answers that treat privacy and security as the same thing or suggest the same mitigations for both.

**Defense:** Privacy is about protecting personal/sensitive data from unauthorized disclosure. Security is about protecting systems from attacks (prompt injection, data breaches, etc.). Some mitigations overlap (encryption, access control), but many are distinct (anonymization for privacy; input validation for security).

## 🪤 Trap 5: Ignoring Environmental Impact

**Trap:** Answers that dismiss energy consumption as irrelevant to testing or claim it is "negligible" for any LLM use.

**Defense:** The syllabus explicitly includes environmental impact as a risk area. At scale, inference energy matters. The correct answer will acknowledge this and suggest efficiency strategies.

## 🪤 Trap 6: Confusing Regulations

**Trap:** Answers that attribute specific requirements from the EU AI Act to ISO standards, or vice versa.

**Defense:** Know the scopes: EU AI Act = risk-based regulation with legal penalties. ISO 42001 = AI management system standard. ISO 25059 = AI quality model. NIST AI RMF = US risk management guidance. OWASP LLM Top 10 = security risks. Don't mix them up.

## 🪤 Trap 7: Thinking Regulations Don't Apply to Testing

**Trap:** Answers suggesting that because GenAI is "only used for testing," regulatory requirements don't apply.

**Defense:** If testing artifacts influence release decisions for high-risk systems, the GenAI used to create them may fall under regulatory scope. Documentation, transparency, and human oversight requirements apply to testing use cases too.
