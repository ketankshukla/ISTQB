# Chapter 1 — Exam Traps

## Trap 1: Confusing Model Types

**Trap:** Answers that treat all transformer-based models as generative. BERT and similar encoder models are typically used discriminatively (classification, sentiment analysis). GPT-style decoder models are generative.

**Defense:** Always check whether the answer describes prediction/classification (discriminative) or creation of new content (generative).

## Trap 2: Overstating GenAI Capabilities

**Trap:** Answers claiming GenAI can "guarantee" test coverage, "fully automate" test design without human review, or "eliminate the need" for testers.

**Defense:** The syllabus consistently frames GenAI as augmenting human testers. Any answer that removes human oversight entirely is almost certainly wrong.

## Trap 3: Treating Hallucinations as Minor Issues

**Trap:** Answers suggesting hallucinations are "rare" or "easily ignored" or "only affect non-technical content."

**Defense:** Hallucinations are a critical, pervasive risk. The syllabus emphasizes active mitigation strategies, not dismissal.

## Trap 4: Ignoring Knowledge Cutoffs

**Trap:** Answers assuming an LLM automatically knows about the latest testing tools, recent framework versions, or current organizational context.

**Defense:** LLMs have training cutoffs. They only know what is in their training data or what you provide in the prompt context.

## Trap 5: Confusing Non-Determinism with Unreliability

**Trap:** Answers that reject GenAI entirely because outputs vary between runs, or conversely, answers that ignore reproducibility concerns.

**Defense:** Non-determinism is a real characteristic that must be managed (e.g., via temperature=0 for consistency, or human review for validation). It doesn't make GenAI useless, but it does require attention.

## Trap 6: Privacy Blind Spots

**Trap:** Answers that suggest feeding production data with PII into public LLMs to "get better test data."

**Defense:** Privacy and security risks are syllabus priorities. The correct answer will involve anonymization, synthetic data, on-premise models, or organizational approval — never cavalier data sharing.

## Trap 7: Temperature Misunderstanding

**Trap:** Answers that claim high temperature improves accuracy or that low temperature increases creativity.

**Defense:** Low temperature = more deterministic/predictable. High temperature = more random/creative. For test artifacts, you generally want lower temperature to ensure consistency.
