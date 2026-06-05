# Chapter 1 — Exam Traps

## Trap 1: Confusing Model Types

**Trap:** Answers that treat all transformer-based models as generative. BERT and similar encoder models are typically used discriminatively (classification, sentiment analysis). GPT-style decoder models are generative.

**Defense:** Always check whether the answer describes prediction/classification (discriminative) or creation of new content (generative). The architecture does not determine the usage pattern. A GPT model asked to "classify this bug as high/medium/low severity" is being used discriminatively in that moment, even though its native capability is generative.

**Example trap question:** "A team uses a BERT model to classify test cases by risk level. Another team uses GPT-4 to generate new test cases from requirements. Which statement is correct?"
- Wrong answer: "BERT is generative and GPT-4 is discriminative because GPT uses transformer architecture differently."
- Correct answer: "Both use transformer architecture, but BERT is being used discriminatively (classification) and GPT-4 is being used generatively (creating new content)."

---

## Trap 2: Overstating GenAI Capabilities

**Trap:** Answers claiming GenAI can "guarantee" test coverage, "fully automate" test design without human review, or "eliminate the need" for testers.

**Defense:** The syllabus consistently frames GenAI as augmenting human testers. Any answer that removes human oversight entirely is almost certainly wrong. Look for absolutist language: "guarantee," "eliminate," "fully replace," "no longer needs."

**Common overstatements to reject:**
- "GenAI can guarantee 100% requirement coverage."
- "Using GenAI eliminates the need for manual testing."
- "GenAI-generated test cases are as reliable as human-written ones without review."
- "An LLM can autonomously execute tests and make release decisions."

---

## Trap 3: Treating Hallucinations as Minor Issues

**Trap:** Answers suggesting hallucinations are "rare" or "easily ignored" or "only affect non-technical content."

**Defense:** Hallucinations are a critical, pervasive risk that affects all LLM outputs. The syllabus emphasizes active mitigation strategies, not dismissal. In testing, hallucinations can produce test cases for non-existent features, incorrect oracles, and fabricated API references — all of which create real risk.

**Wrong answers to watch for:**
- "Hallucinations are rare in modern LLMs."
- "Hallucinations only occur with complex prompts."
- "A well-written prompt eliminates hallucinations entirely."

**Correct position:** Hallucinations are an inherent limitation of LLMs. They can be mitigated (RAG, human review, constrained generation) but not eliminated.

---

## Trap 4: Ignoring Knowledge Cutoffs

**Trap:** Answers assuming an LLM automatically knows about the latest testing tools, recent framework versions, or current organizational context.

**Defense:** LLMs have training cutoffs. They only know what is in their training data or what you provide in the prompt context. For the exam, any answer that assumes an LLM has real-time knowledge, current organizational data, or awareness of post-training developments is incorrect.

**Example:** An answer suggesting "Ask the LLM to generate Selenium 4 syntax — it will know the latest API changes" is wrong if the model's training cutoff predates those changes.

---

## Trap 5: Confusing Non-Determinism with Unreliability

**Trap:** Answers that reject GenAI entirely because outputs vary between runs, or conversely, answers that ignore reproducibility concerns.

**Defense:** Non-determinism is a real characteristic that must be managed. It doesn't make GenAI useless, but it does require attention. The correct answer acknowledges non-determinism as a manageable constraint, not a fatal flaw.

**Wrong extremes:**
- "Non-determinism makes GenAI unsuitable for testing." (Too negative — temperature control and human review manage this.)
- "Non-determinism is not a concern for test artifacts." (Too dismissive — reproducibility matters for audit trails and regression.)

**Correct balance:** "Non-determinism can be managed by using low temperature settings, documenting prompts and model versions, and requiring human review of outputs."

---

## Trap 6: Privacy Blind Spots

**Trap:** Answers that suggest feeding production data with PII into public LLMs to "get better test data."

**Defense:** Privacy and security risks are syllabus priorities. The correct answer will involve anonymization, synthetic data, on-premise models, or organizational approval — never cavalier data sharing.

**Wrong answers:**
- "Upload customer records to a public LLM to generate realistic test data."
- "Share API keys in prompts so the model can access internal systems."
- "Anonymized data is always safe to share with third-party AI providers."

**Correct answers:**
- "Use synthetic data generation instead of sharing real customer records."
- "Anonymize and minimize data before any external AI processing."
- "Use on-premise or private cloud LLM deployments for sensitive data."

---

## Trap 7: Temperature Misunderstanding

**Trap:** Answers that claim high temperature improves accuracy or that low temperature increases creativity.

**Defense:** Low temperature = more deterministic/predictable. High temperature = more random/creative. For test artifacts, you generally want lower temperature to ensure consistency.

**The relationship:**
- Temperature does NOT control accuracy or intelligence
- Temperature controls the probability distribution from which the next token is sampled
- Low temperature makes the model more likely to choose the highest-probability token
- High temperature makes the model more likely to choose lower-probability (more surprising) tokens

**Wrong answer:** "Set temperature to 1.0 for test case generation to get more accurate results."
**Correct answer:** "Set temperature to 0.1-0.3 for test case generation to ensure consistency and reproducibility."

---

## Trap 8: Confusing Lack of Understanding with Stupidity

**Trap:** Answers that claim LLMs "don't understand anything" and are therefore useless for testing.

**Defense:** LLMs do not understand in a human sense, but they are incredibly capable pattern matchers that can produce valuable testing artifacts when properly prompted and reviewed. The correct answer acknowledges both the limitation (no true understanding) and the utility (powerful tool with human oversight).

**Wrong answer:** "LLMs are just random text generators and cannot help with testing."
**Correct answer:** "LLMs are statistical pattern matchers that can generate useful testing artifacts, but all outputs require human validation because the model has no genuine understanding of the system under test."

---

## Trap 9: Treating All LLMs as Identical

**Trap:** Answers that assume all LLMs have the same capabilities, context windows, and limitations.

**Defense:** Different models have different strengths, context windows, knowledge cutoffs, and training data. The syllabus expects you to know that model selection matters.

**Example:** An answer that recommends using "any available LLM" for a task requiring 100K tokens of context is wrong — only models with sufficiently large context windows can handle that task.

---

## Trap 10: Ignoring Bias in Testing Contexts

**Trap:** Answers that treat bias as only a social issue, not a testing quality issue.

**Defense:** Bias in GenAI directly affects testing quality. If generated test data underrepresents certain user demographics, the software may ship with undiscovered defects affecting those users. The syllabus treats bias as a risk to be actively managed in testing.

**Wrong answer:** "Bias is an ethical concern but does not affect test case quality."
**Correct answer:** "Bias can cause generated test cases and test data to underrepresent certain user groups, leading to incomplete testing and potential defects in production for underrepresented users."
