# CT-GenAI v1.1 Study Plan

## Target

Pass the CT-GenAI v1.1 exam with 90%+ in 2-3 weeks of focused study (8-12 hours per week).

## Prerequisites

- You must hold the ISTQB CTFL certification before attempting CT-GenAI.
- Familiarity with basic software testing terminology (test levels, test types, test techniques).
- General awareness of AI/ML concepts is helpful but not required — this course covers all needed foundations.

---

## Week 1: Foundations and Prompt Engineering

| Day | Task | Time |
|-----|------|------|
| 1 | Read `01_introduction_to_genai_for_testing/lessons.md` | 1.5h |
| 1 | Read `01_introduction_to_genai_for_testing/exam_traps.md` | 0.5h |
| 2 | Complete `01_introduction_to_genai_for_testing/practice_questions.md` and review rationales | 1h |
| 2 | Read `02_prompt_engineering_for_testing/lessons.md` (Sections 2.1-2.2) | 1.5h |
| 3 | Read `02_prompt_engineering_for_testing/lessons.md` (Section 2.3) | 1.5h |
| 3 | Read `02_prompt_engineering_for_testing/exam_traps.md` | 0.5h |
| 4 | Complete `02_prompt_engineering_for_testing/practice_questions.md` and review rationales | 1.5h |
| 5 | Review all wrong answers from Chapters 1-2; update flashcards | 1h |
| 6-7 | Optional: Hands-on prompt engineering practice with ChatGPT, Claude, or Copilot | 2h |

**Week 1 checkpoint:** You should be able to explain the difference between discriminative and generative models, write an effective zero-shot prompt for test case generation, and evaluate GenAI output quality.

---

## Week 2: Risk Management and LLM Solutions

| Day | Task | Time |
|-----|------|------|
| 8 | Read `03_managing_risks_of_genai/lessons.md` (Sections 3.1-3.2) | 1.5h |
| 9 | Read `03_managing_risks_of_genai/lessons.md` (Sections 3.3-3.4) | 1.5h |
| 9 | Read `03_managing_risks_of_genai/exam_traps.md` | 0.5h |
| 10 | Complete `03_managing_risks_of_genai/practice_questions.md` and review rationales | 1.5h |
| 11 | Read `04_llm_powered_solutions/lessons.md` (Sections 4.1-4.2) | 1.5h |
| 12 | Read `04_llm_powered_solutions/exam_traps.md` | 0.5h |
| 12 | Complete `04_llm_powered_solutions/practice_questions.md` and review rationales | 1.5h |
| 13 | Review all wrong answers from Chapters 3-4; update flashcards | 1h |
| 14 | Complete `case_studies/case_study_1_prompt_engineering_pipeline.md` | 1h |

**Week 2 checkpoint:** You should be able to identify hallucinations and bias risks, explain data privacy mitigations, describe fine-tuning vs RAG, and select appropriate LLM architectures for testing tasks.

---

## Week 3: Deployment, Integration, and Exam Prep

| Day | Task | Time |
|-----|------|------|
| 15 | Read `05_deploying_and_integrating_genai/lessons.md` | 1.5h |
| 15 | Read `05_deploying_and_integrating_genai/exam_traps.md` | 0.5h |
| 16 | Complete `05_deploying_and_integrating_genai/practice_questions.md` and review rationales | 1.5h |
| 17 | Complete `case_studies/case_study_2_risk_assessment_framework.md` | 1h |
| 18 | Complete `case_studies/case_study_3_org_adoption_roadmap.md` | 1h |
| 19 | Read `EXAM_STRATEGY.md` thoroughly | 0.5h |
| 20 | Mock Exam 1 under timed conditions (60 min); score and review | 2h |
| 21 | Review weak areas from Mock Exam 1; update flashcards | 1h |
| 22 | Mock Exam 2 under timed conditions (60 min); score and review | 2h |
| 23 | Review weak areas from Mock Exam 2 | 1h |
| 24 | Mock Exam 3 under timed conditions (60 min); score and review | 2h |
| 25 | Final review of all exam traps and glossary terms | 1h |

**Week 3 checkpoint:** You should consistently score 85%+ on mock exams and complete them within 50 minutes.

---

## Recommended Pace for Busy Professionals

If you can only dedicate 5-6 hours per week, stretch the plan to 4 weeks:
- Week 1: Chapter 1
- Week 2: Chapter 2
- Week 3: Chapters 3-4
- Week 4: Chapter 5 + mock exams

## Materials Needed

- This self-study course (complete)
- Access to at least one LLM (ChatGPT, Claude, Gemini, or Copilot) for hands-on practice
- Notepad or flashcard app for terms and prompt patterns
- Timer for mock exams
- Optional: ISTQB CT-GenAI v1.1 syllabus (official reference, available from ISTQB)

---

## Detailed Daily Study Guide with Learning Objectives

### Week 1, Day 1 — Chapter 1 Foundations
**Learning objectives by end of day:**
- Define AI, ML, deep learning, and explain their relationships
- Distinguish discriminative from generative models with 3+ testing examples each
- Explain tokens, context window, temperature, in-context learning, and emergent behavior
- List the six core principles of using GenAI in testing

**Flashcard set 1 (create these):**
- "Discriminative vs. Generative — testing examples"
- "What is a token? Why does it matter for testing?"
- "Temperature 0.1 vs. 0.8 — when to use each for testing"
- "Six components of effective prompts" (preview for Week 1, Day 3)

### Week 1, Day 2 — Chapter 1 Practice + Chapter 2 Start
**Learning objectives by end of day:**
- Score 80%+ on Chapter 1 practice questions
- Explain why each wrong answer is wrong (don't just memorize correct answers)
- Identify the six components in example prompts
- Write a basic prompt for test case generation

**Hands-on exercise:**
- Open ChatGPT/Claude. Write a zero-shot prompt to generate 5 test cases for a login feature.
- Evaluate the output against the six quality criteria.
- Refine the prompt once based on what was missing.

### Week 1, Day 3 — Chapter 2 Prompt Techniques
**Learning objectives by end of day:**
- Explain zero-shot, few-shot, CoT, system prompts, and prompt chaining with testing examples
- Match each technique to appropriate testing tasks
- Understand when to use examples vs. when to use reasoning instructions

**Flashcard set 2:**
- "Zero-shot vs. Few-shot — when to use each"
- "CoT prompting — 3 testing scenarios where it helps"
- "System prompt vs. User prompt — analogy and difference"
- "Prompt chaining — 3-step example for test generation"

### Week 1, Day 4 — Chapter 2 Evaluation and Refinement
**Learning objectives by end of day:**
- List and define the six quality criteria for evaluating GenAI outputs
- Match output problems to appropriate refinement strategies
- Understand the iterative refinement cycle

**Hands-on exercise:**
- Take the output from Day 2's prompt. Evaluate it against all six criteria.
- Write a refined prompt that addresses the top 2 problems.
- Generate new output and compare quality.

### Week 1, Day 5 — Chapter 2 Practice + Review
**Learning objectives by end of day:**
- Score 80%+ on Chapter 2 practice questions
- Identify the prompt technique used in scenario-based questions
- Recognize distractor patterns (absolutism, overstatement, technique mismatch)

**Review technique:**
- For every wrong answer, write a 1-sentence explanation of why it's wrong.
- Focus on "Why is B correct and why are A, C, D incorrect?" not just "B is correct."

### Week 1, Days 6-7 — Hands-On Practice + Case Study 1
**Learning objectives by end of weekend:**
- Complete Case Study 1 (e-commerce checkout)
- Write 3 prompts from scratch for different testing tasks
- Evaluate outputs and refine at least one prompt twice
- Build confidence in practical prompt engineering

**Suggested hands-on tasks:**
1. Generate BDD scenarios for a feature of your choice (use few-shot with examples)
2. Analyze a requirement from your work for testability issues (use CoT)
3. Generate synthetic test data with specific constraints

---

### Week 2, Day 8 — Chapter 3 Hallucinations, Reasoning Errors, and Bias
**Learning objectives by end of day:**
- Define and distinguish hallucination, reasoning error, and bias
- Identify at least 3 types of hallucinations in testing contexts
- Explain how bias manifests in testing (test data, requirement interpretation, prioritization)
- Describe the feedback loop of bias

**Flashcard set 3:**
- "Hallucination vs. Reasoning Error — how to tell the difference"
- "4 types of bias in testing"
- "Feedback loop of bias — how it gets worse over time"

### Week 2, Day 9 — Chapter 3 Privacy, Security, and Mitigations
**Learning objectives by end of day:**
- Distinguish privacy risks from security risks
- List 5 privacy risks and 5 security risks in GenAI testing
- Match each risk to appropriate mitigations (at least 3 per risk category)
- Explain RAG, source grounding, and constrained generation as hallucination mitigations

**Critical distinction to master:**
- Privacy = data protection (who can see what)
- Security = attacks and vulnerabilities (what bad actors can do)
- Many exam questions test whether you can tell them apart

### Week 2, Day 10 — Chapter 3 Practice + Regulations
**Learning objectives by end of day:**
- Score 80%+ on Chapter 3 practice questions
- Match regulations to scenarios (GDPR, HIPAA, PCI-DSS, EU AI Act)
- Identify which mitigations address which risks in scenario questions
- Understand environmental impact and reduction strategies

### Week 2, Day 11 — Chapter 4 Architectures
**Learning objectives by end of day:**
- Describe 5 architectural approaches (direct API, RAG, fine-tuning, hybrid, on-premise)
- Match each approach to appropriate testing scenarios
- Explain the RAG pipeline (document ingestion → embedding → vector DB → retrieval → LLM)
- Distinguish RAG from fine-tuning with 3+ differences

**Flashcard set 4:**
- "RAG vs. Fine-tuning — when to use each"
- "Direct API vs. On-premise — trade-offs"
- "Hybrid architecture — example pipeline for testing"
- "5-architecture decision framework"

### Week 2, Day 12 — Chapter 4 LLMOps + Practice
**Learning objectives by end of day:**
- Define LLMOps and list 5+ key practices
- Score 80%+ on Chapter 4 practice questions
- Select appropriate architectures for scenario-based questions

### Week 2, Day 13 — Review Chapters 3-4
**Learning objectives by end of day:**
- Review all wrong answers from Chapters 3-4
- Update flashcards for weak areas
- Complete Case Study 2 (banking risk assessment)

### Week 2, Day 14 — Case Study 1 Deep Dive + Architecture Practice
**Learning objectives by end of day:**
- Re-read Case Study 1 with expanded content
- Practice architecture decisions for 3 different organizational scenarios
- Write architecture justification paragraphs (explain WHY, not just WHAT)

---

### Week 3, Day 15 — Chapter 5 Adoption Roadmap
**Learning objectives by end of day:**
- List the four adoption phases and 3+ activities in each
- Explain why medical device/high-risk features should be LAST in the roadmap
- Define success metrics for each phase
- Describe governance framework components

**Flashcard set 5:**
- "4 adoption phases — activities and deliverables"
- "Why pilot before scaling?"
- "5 governance policies needed for GenAI in testing"
- "Change management strategies for role anxiety"

### Week 3, Day 16 — Chapter 5 Practice
**Learning objectives by end of day:**
- Score 80%+ on Chapter 5 practice questions
- Identify correct roadmap sequencing in scenario questions
- Recognize change management strategies in answer choices

### Week 3, Day 17 — Case Study 2 Deep Dive
**Learning objectives by end of day:**
- Complete Case Study 2 with expanded regulatory content
- Practice identifying primary and secondary risks for multiple use cases
- Write architecture recommendations with justification

### Week 3, Day 18 — Case Study 3 Deep Dive
**Learning objectives by end of day:**
- Complete Case Study 3 with expanded healthcare/FDA content
- Practice phased roadmap design with budget and compliance constraints
- Write FDA inspector response points

### Week 3, Day 19 — Exam Strategy Review
**Learning objectives by end of day:**
- Read EXAM_STRATEGY.md thoroughly
- Memorize the 40-question pacing strategy
- Practice the guessing strategy hierarchy
- Know chapter-specific tactics cold

### Week 3, Days 20-24 — Mock Exams
**Critical instructions for mock exams:**
- Take each mock exam under STRICT timed conditions (60 minutes, no breaks, no reference materials)
- Use only a blank sheet of paper for scratch notes (simulates exam conditions)
- Score immediately after finishing
- For every wrong answer, write: (1) the correct answer, (2) why it's correct, (3) why your answer was wrong, (4) which syllabus section it tests
- Review weak areas before the next mock exam

**Target progression:**
- Mock 1: 70-75% (baseline — don't panic if lower)
- Mock 2: 78-82% (improving — focus on weak chapters)
- Mock 3: 85%+ (exam-ready)

### Week 3, Day 25 — Final Review
**Learning objectives by end of day:**
- Review all exam traps one final time
- Quiz yourself on glossary terms (100 terms in 30 minutes)
- Review all flashcards — focus on cards you got wrong
- Re-read the architecture decision framework and roadmap phases
- Get 8 hours of sleep

---

## Study Techniques That Work

**Active Recall (not re-reading):**
- After reading a section, close the book and explain it out loud
- Use flashcards with questions on the front, explanations (not just definitions) on the back
- Test yourself before looking at answers

**Spaced Repetition:**
- Review flashcards on Day 1, Day 3, Day 7, Day 14, Day 30
- Apps like Anki automate this schedule
- Focus extra time on cards you consistently miss

**Interleaving:**
- Don't study one chapter for 3 hours straight. Mix chapters.
- Example: 30 min Chapter 2 prompts, 30 min Chapter 3 risks, 30 min Chapter 4 architectures
- This builds the ability to distinguish between concepts under pressure

**Teaching Others:**
- Explain concepts to a colleague, friend, or rubber duck
- If you can't explain it simply, you don't understand it well enough
- Focus on explaining WHY, not just WHAT

**Scenario Practice:**
- Create your own exam questions from the course material
- Write a scenario, then write 4 answer choices with one clearly correct and 3 plausible distractors
- This reverse-engineering deepens understanding

---

## Recommended Supplementary Resources

- **ISTQB CT-GenAI v1.1 Syllabus:** The official syllabus is the exam's source of truth. Use this course as the study guide, but reference the syllabus for exact wording of learning objectives.
- **Hands-on LLM Access:** Free tiers of ChatGPT, Claude, or Gemini are sufficient. Practice writing prompts and evaluating outputs.
- **ISTQB Sample Exams:** If available from your national board, use these for additional mock exams.
- **Testing Community:** Join ISTQB study groups or LinkedIn communities for CT-GenAI. Discussing scenarios with peers solidifies understanding.

---

## Final Motivation

The CT-GenAI exam tests practical judgment, not rote memorization. The scenarios are designed to simulate real decisions you will make as a tester using GenAI. Every hour you spend understanding WHY the correct answer is correct — and WHY the distractors are wrong — is an hour well invested.

You are not just studying for an exam. You are building the judgment to use GenAI responsibly and effectively in your testing career. Good luck!
