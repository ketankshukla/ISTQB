# CT-GenAI v1.1 Exam Strategy

## Exam Format at a Glance

| Parameter | Value |
|-----------|-------|
| Total questions | 40 |
| Duration | 60 minutes |
| Pass mark | 65% (30 points out of 46) |
| Question types | Single best answer (majority); some "choose N of M" |
| Materials allowed | None (closed book) |
| Negative marking | No |

---

## Chapter Weighting (approximate)

| Chapter | Focus | Estimated Weight |
|---------|-------|------------------|
| 1 — Introduction to GenAI for Testing | Foundations, concepts, capabilities, limitations | ~15-20% |
| 2 — Prompt Engineering | Prompt patterns, refinement, evaluation | ~25-30% |
| 3 — Managing Risks | Hallucinations, bias, privacy, security, regulations | ~20-25% |
| 4 — LLM-Powered Solutions | Architecture, RAG, fine-tuning, LLMOps | ~20-25% |
| 5 — Deploying and Integrating GenAI | Roadmap, change management, adoption | ~10-15% |

**Key insight:** Chapters 2 and 3 together account for roughly half the exam. Master prompt engineering patterns and risk mitigations and you have a strong floor.

---

## K-Level Question Patterns

### K1 (Remember)

- Tests recall of facts, definitions, and lists
- Pattern: "Which of the following is a characteristic of...?" or "What is the definition of X?"
- Strategy: Pure memorization. Use mnemonics and flashcards for terms like "hallucination," "RAG," "fine-tuning," "zero-shot prompting."

### K2 (Understand)

- Tests comprehension and the ability to explain, classify, compare, or give examples
- Pattern: "Which statement BEST describes..." or "What is the MAIN difference between X and Y?"
- Strategy: Focus on distinctions (e.g., zero-shot vs few-shot prompting, fine-tuning vs RAG, discriminative vs generative models). Know why things matter, not just what they are.

### K3 (Apply)

- Tests the ability to use a technique or procedure in a given scenario
- Pattern: Provides a testing scenario and asks you to select the best prompt, identify the risk, or recommend an architecture
- Strategy: Practice the decision frameworks until automatic. These questions cannot be answered by elimination alone — you must be able to apply the concept.

---

## Time Budgeting

- **Available:** 60 minutes for 40 questions = 90 seconds per question
- **K1/K2 questions:** Aim for 45-60 seconds each. These are read-and-recognize.
- **K3 scenario questions:** Budget 2-3 minutes each. You may need to analyze a prompt, evaluate GenAI output, or compare architectures.
- **"Choose N" questions:** Budget 2 minutes. You must evaluate every option.
- **Bank time early.** Rush through easy K1 questions to accumulate buffer for scenario-based K3 questions.

---

## Distractor Patterns Common in CT-GenAI

1. **Overstating GenAI capabilities.** Answers that claim GenAI can "guarantee" test coverage, "eliminate" human testers, or "fully replace" manual test design are almost always wrong.

2. **Confusing discriminative and generative models.** Discriminative models classify or predict; generative models create new content. Watch for answers that attribute generative behavior to discriminative models.

3. **Recommending no human oversight.** The syllabus consistently emphasizes human-in-the-loop. Any answer that removes human review entirely is likely incorrect.

4. **Ignoring context window limits.** Answers that suggest dumping an entire large codebase into a single prompt without chunking or retrieval show poor understanding of LLM constraints.

5. **Treating hallucinations as minor issues.** The syllabus treats hallucinations as a critical risk requiring active mitigation, not something that can be ignored.

---

## Specific Tactics

### For Prompt Engineering Questions
- If asked which prompt technique is best, look for answers that include **context, constraints, and expected output format**.
- Chain-of-thought is appropriate for reasoning tasks; few-shot is appropriate when examples help clarify the pattern.
- "Evaluate and refine" is the standard iterative cycle — single-shot without review is usually wrong.

### For Risk Management Questions
- Privacy risks are mitigated by **anonymization, data minimization, on-premise deployment, and contractual controls** — not by "trusting the vendor."
- Bias is addressed by **diverse training data, fairness metrics, and human review** — not by simply "using a better model."
- Regulatory compliance (EU AI Act, etc.) requires **documentation, transparency, and risk classification** — not just "following best practices."

### For Architecture Questions
- RAG is preferred when the knowledge base changes frequently or must remain private.
- Fine-tuning is preferred when the model needs specialized behavior or tone on a stable domain.
- LLMOps covers the full lifecycle: data management, model training, evaluation, deployment, monitoring, and governance.

---

## Day-Before Checklist

- [ ] Review all `exam_traps.md` files (one per chapter)
- [ ] Skim `GLOSSARY.md` for any terms you still hesitate on
- [ ] Re-read the summaries in each chapter `README.md`
- [ ] Do 10 quick K1 questions to build confidence
- [ ] Sleep 7+ hours

## Exam Day

- Arrive 15 minutes early (or launch the online exam platform early)
- Bring only required ID; no notes, no phone
- Use the full reading time to skim the full question set if allowed
- Mark uncertain questions for review; never leave a question blank (no negative marking)
- In the last 5 minutes, ensure every question has an answer selected
