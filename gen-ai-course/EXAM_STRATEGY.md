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

---

## Expanded Chapter-Specific Tactics

**Chapter 1 — Introduction to GenAI (~15-20%, ~6-8 questions)**
- Focus on discriminative vs. generative distinction — this appears in 2-3 questions per exam
- Know the six core principles of using GenAI in testing cold: human-in-the-loop, iterative refinement, context matters, know limits, privacy first, measure and validate
- Limitations are tested as "which limitation is MOST relevant in this scenario?" Match the scenario to the specific limitation (hallucination, knowledge cutoff, context window, non-determinism, reasoning error, bias, lack of understanding)
- Temperature questions: know the ranges and when to use each. Low (0.0-0.2) for deterministic artifacts; high (0.6-0.9) only for brainstorming with heavy review
- Common trap: treating all transformer models as generative. BERT is discriminative in typical usage.

**Chapter 2 — Prompt Engineering (~25-30%, ~10-12 questions)**
- This is the highest-weighted chapter. Expect 10-12 questions. Master this chapter and you have a strong floor for passing.
- Know the six components of effective prompts: role, task, input, constraints, examples, format. You will be asked to identify missing components or recognize well-structured prompts.
- Technique selection is heavily tested: "Which technique is MOST appropriate for this task?" Match complexity to technique:
  - Simple/common task with standard domain → Zero-shot
  - Specific output format needed (template, JSON, Gherkin) → Few-shot with format examples
  - Multi-step reasoning, complex conditions, coverage analysis → CoT
  - Large document exceeds context window → Prompt chaining or chunking
  - Consistent behavior across multiple related tasks → System prompt
- Evaluation criteria: know the six criteria (correctness, completeness, consistency, relevance, feasibility, absence of hallucinations) and be able to identify which is violated in a scenario
- Refinement strategies: match problems to solutions:
  - Too vague → Add constraints, quantitative targets, scope boundaries
  - Off-topic → Strengthen role, restate task, add exclusion criteria
  - Misses edge cases → Explicitly request negatives, use CoT, few-shot with edge examples
  - Format inconsistent → Provide template/schema, show complete examples
  - Hallucinations → Add reference docs, constrain to provided content, lower temperature, use RAG

**Chapter 3 — Managing Risks (~20-25%, ~8-10 questions)**
- Risk identification: "What is the PRIMARY risk in this scenario?" Distinguish hallucination from reasoning error from bias from privacy from security.
- Mitigation matching: "Which mitigation is MOST effective for this risk?" Ensure the mitigation addresses the PRIMARY risk, not a secondary one.
- Privacy vs. security: know the difference. Privacy = data protection (PII, GDPR, training data retention). Security = attacks and vulnerabilities (prompt injection, model inversion, supply chain).
- Regulations: know which regulation applies to which scenario:
  - GDPR → EU data protection, data minimization, DPIA for high-risk processing
  - HIPAA → US health information protection
  - PCI-DSS → Payment card data security
  - EU AI Act → High-risk AI systems (biometric, credit scoring, medical devices)
- Environmental impact: know strategies to reduce it (smaller models for appropriate tasks, caching, batching, prompt optimization, green hosting)

**Chapter 4 — LLM-Powered Solutions (~15-20%, ~6-8 questions)**
- Architecture selection is the key skill: "Which architecture is MOST appropriate for this scenario?"
- Decision framework (memorize this):
  1. Data sensitivity: sensitive (health, finance, PII, proprietary) → on-premise or private endpoint
  2. Knowledge volatility: frequently changing → RAG; stable → fine-tuning
  3. Budget and expertise: no ML team + limited budget → public API; large budget + ML team → on-premise or fine-tuning
  4. Speed vs. quality: need both → hybrid/multi-model
- RAG vs. fine-tuning is frequently tested: RAG retrieves dynamically (good for changing docs); fine-tuning embeds knowledge in weights (good for stable, proprietary knowledge)
- LLMOps components: prompt versioning, output quality monitoring, cost tracking, A/B testing of prompt variants, model performance monitoring
- On-premise trade-offs: full data control but requires hardware, expertise, and has capability gap vs. latest commercial APIs

**Chapter 5 — Deployment and Integration (~10-15%, ~4-6 questions)**
- Roadmap sequencing: know the four phases and what happens in each:
  1. Assessment (current state, capability, use case prioritization, risk review)
  2. Pilot (controlled experiments, tool evaluation, metrics, go/no-go gates)
  3. Scaling (integration, standardization, training, governance, monitoring)
  4. Maturity (advanced use cases, domain specialization, compliance, sustainability)
- Change management: identify strategies for resistance (communication, training, involvement), skill diversity (tiered training, pairing), and role anxiety (reframe narrative, create new career paths)
- Governance: know what policies are needed (data sharing, validation, model selection, cost approval, incident response)
- The correct answer will always show phased, governed adoption with compliance checkpoints — never "deploy to everyone immediately"
- Common trap: skipping the pilot phase or treating technology rollout as sufficient without change management

---

## Advanced Time Management

**The 40-Question Math:**
- 40 questions × 1.5 minutes average = 60 minutes exactly
- You need buffer time for scenario questions and review
- Actual budget: ~1.3 minutes per question average, with more time for K3

**Recommended pacing:**
- Minutes 0-15: Answer all K1 questions and easy K2 questions (aim for 12-15 questions). Build confidence and bank time.
- Minutes 15-45: Tackle K2 understanding and K3 application questions (aim for 18-20 questions). These require more thought.
- Minutes 45-55: Handle the most complex scenario-based questions and any questions you marked for review.
- Minutes 55-60: Final pass — ensure every question is answered. Check for mis-bubbled answers.

**Critical rule:** If a question takes more than 3 minutes, MARK IT and move on immediately. You cannot afford to spend 5 minutes on one question and then rush through 5 others. Come back only if you have time at the end.

**Guessing strategy:**
- There is NO penalty for wrong answers. ALWAYS answer every question.
- If you must guess, use this hierarchy to eliminate wrong answers:
  1. Eliminate answers with absolute language ("always," "never," "guarantee," "eliminate")
  2. Eliminate answers that remove human oversight entirely
  3. Eliminate answers that overstate GenAI capabilities
  4. Eliminate answers that ignore privacy/security
  5. Between remaining options, choose the one that includes nuance, acknowledges limitations, or includes human review — the syllabus favors responsible AI use

---

## Day-Before Preparation (Expanded)

**The Day Before the Exam:**
- [ ] Review all exam_traps.md files (one per chapter) — focus on the most common traps (1 hour)
- [ ] Skim GLOSSARY.md for any terms you still hesitate on (30 minutes)
- [ ] Re-read the summaries in each chapter README.md (30 minutes)
- [ ] Review worked examples from all chapters, focusing on the reasoning process (1 hour)
- [ ] Do 10-15 practice questions under timed conditions to get into exam rhythm (20 minutes)
- [ ] Review the six components of effective prompts and the six quality criteria one final time (10 minutes)
- [ ] Review architecture decision framework (data sensitivity → knowledge volatility → budget/expertise) (10 minutes)
- [ ] Confirm exam time, location/URL, and ID requirements
- [ ] Prepare snacks and water for exam day
- [ ] Get 7-8 hours of sleep

**Morning of the Exam:**
- [ ] Eat a balanced breakfast with protein and complex carbs (avoid sugar crash)
- [ ] Arrive 15 minutes early / log in 15 minutes early for online proctoring
- [ ] Do 3-5 easy K1 practice questions to warm up your brain
- [ ] Use the restroom before starting
- [ ] Take deep breaths — remind yourself: you have prepared thoroughly, the exam is passable with solid preparation, and you have the knowledge to succeed
