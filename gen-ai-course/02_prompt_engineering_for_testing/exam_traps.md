# Chapter 2 — Exam Traps

## Trap 1: Choosing the Wrong Prompt Technique

**Trap:** Selecting zero-shot for a complex formatting task that clearly needs examples, or using few-shot for a simple factual recall task where examples waste context.

**Defense:** Match the technique to the task complexity. Zero-shot for simple/common tasks. Few-shot for pattern matching and format control. CoT for reasoning tasks. Prompt chaining for tasks that exceed context or require staged processing.

## Trap 2: Ignoring Prompt Components

**Trap:** Answers that propose prompts missing essential components (e.g., no role definition, no constraints, no format specification) as "effective."

**Defense:** Effective prompts contain role, task, input, constraints, examples (when needed), and output format. An answer missing multiple components is poor.

## Trap 3: One-Shot vs Iterative

**Trap:** Answers that treat the first GenAI output as final without evaluation or refinement.

**Defense:** The syllabus emphasizes iterative refinement. Any answer that skips evaluation and refinement is incorrect.

## Trap 4: Over-Engineering Prompts

**Trap:** Answers that add unnecessary complexity (e.g., elaborate CoT for a simple yes/no question) when a simpler technique would suffice.

**Defense:** The best technique is the simplest one that achieves the goal. Efficiency and appropriateness matter.

## Trap 5: Confusing System Prompts with User Prompts

**Trap:** Answers that treat system prompts and user prompts as interchangeable.

**Defense:** System prompts set global behavior and constraints for a session. User prompts are specific queries within that session. They serve different purposes.

## Trap 6: Evaluating Only Surface Features

**Trap:** Answers that evaluate GenAI output only for grammar or formatting while ignoring correctness, completeness, and absence of hallucinations.

**Defense:** Evaluation must cover correctness, completeness, consistency, relevance, feasibility, and absence of hallucinations. Formatting alone is insufficient.

## Trap 7: Temperature Misapplication in Testing

**Trap:** Answers recommending high temperature for test case generation "to get more creative test ideas."

**Defense:** While creativity has value, test artifacts generally need consistency and reproducibility. Lower temperatures are typically preferred for test generation, with human review adding creativity if needed.
