# Chapter 2 — Practice Questions

20 original ISTQB-style questions covering Chapter 2 learning objectives. Each question is tagged with its LO and K-level.

**Instructions:** Select the single best answer unless otherwise stated. After attempting all questions, check your answers against the rationales at the end of this file.

---

## Questions

### Q1 (GenAI-2.1.1, K2)

A tester wants an LLM to generate API test cases for a user registration endpoint. The tester provides the endpoint URL but receives generic test cases that do not cover the specific validation rules.

Which prompt component is MOST likely missing?

A. System prompt
B. Constraints and rules
C. Temperature setting
D. Model version specification

---

### Q2 (GenAI-2.1.2, K1)

Which prompt engineering technique involves providing 2-3 examples of desired input-output pairs within the prompt?

A. Zero-shot prompting
B. Few-shot prompting
C. Chain-of-thought prompting
D. Prompt chaining

---

### Q3 (GenAI-2.2.1, K3)

A team needs to generate test cases for a complex insurance premium calculation with nested conditional rules. The initial zero-shot prompt produces superficial test cases that miss several condition combinations.

Which technique is MOST appropriate to improve coverage?

A. Increase the temperature to 1.0
B. Switch to chain-of-thought prompting to reason through conditions step-by-step
C. Reduce the context window size
D. Remove all constraints from the prompt

---

### Q4 (GenAI-2.2.2, K3)

A tester needs to generate Gherkin scenarios from a detailed user story. The output must follow the team's exact format: Feature, Background, and multiple Scenarios with Given-When-Then structure.

Which approach is MOST likely to produce correctly formatted output?

A. Zero-shot prompting with a simple instruction
B. Few-shot prompting showing two examples in the exact team format
C. Asking the model to improvise the format
D. System prompt with no format guidance

---

### Q5 (GenAI-2.3.1, K2)

An LLM generated 20 test cases for a flight booking system. The tester reviews them and finds that all test cases assume the user has a valid passport. The system also supports national ID cards, but no test cases cover this.

Which evaluation criterion has the generated output failed?

A. Consistency
B. Completeness
C. Feasibility
D. Absence of hallucinations

---

### Q6 (GenAI-2.3.2, K2)

After evaluating an LLM's test case generation, a tester notices the output frequently invents requirements not present in the specification. The tester decides to refine the prompt.

Which refinement is MOST likely to reduce this problem?

A. Increase temperature to encourage more creative outputs
B. Add the constraint: "Only generate test cases for requirements explicitly stated in the provided document"
C. Remove all input data to force the model to rely on general knowledge
D. Shorten the prompt to reduce confusion

---

### Q7 (GenAI-2.1.1, K2)

Which of the following is a valid component of an effective prompt for testing tasks?

A. Model training data provenance
B. Role and context definition
C. The LLM's parameter count
D. The vendor's stock price

---

### Q8 (GenAI-2.2.1, K3)

A test team wants to analyze a 200-page requirements document for ambiguities. The document exceeds the LLM's context window.

Which technique is MOST appropriate?

A. Fine-tuning the model on the document
B. Prompt chaining: first summarize sections, then analyze summaries, then consolidate findings
C. Increasing the temperature to compress the document
D. Switching to a discriminative model

---

### Q9 (GenAI-2.1.2, K1)

Which prompt engineering technique encourages an LLM to explain its reasoning before giving a final answer?

A. Zero-shot prompting
B. Few-shot prompting
C. Chain-of-thought prompting
D. Temperature tuning

---

### Q10 (GenAI-2.2.2, K3)

A tester needs to generate boundary value test cases for an age verification field that accepts ages 18 to 120. The tester wants the exact format: "Input: [value] | Expected: [result] | Type: [boundary type]."

What is the MOST effective approach?

A. Zero-shot prompting asking for boundary values
B. Few-shot prompting with one example in the exact format requested
C. Chain-of-thought prompting asking the model to explain boundary value theory
D. System prompt that says "be creative with formatting"

---

### Q11 (GenAI-2.3.1, K2)

A generated test automation script uses method names that vary between camelCase and snake_case, and sometimes mixes both within the same class.

Which evaluation criterion is violated?

A. Correctness
B. Consistency
C. Relevance
D. Feasibility

---

### Q12 (GenAI-2.3.2, K2)

A tester receives test cases from an LLM that are generally correct but consistently omit negative test scenarios. The tester wants to refine the prompt.

Which refinement is MOST appropriate?

A. Add: "For each positive test case, generate a corresponding negative test case"
B. Lower the temperature to 0.0
C. Remove all examples from the prompt
D. Ask the model to generate fewer test cases overall

---

### Q13 (GenAI-2.1.1, K2)

Which of the following is LEAST important when crafting an effective prompt for generating test cases?

A. Defining the role and expertise level of the AI
B. Specifying the output format and structure
C. Including the organization's quarterly revenue figures
D. Providing the requirements or user stories to be tested

---

### Q14 (GenAI-2.2.1, K3)

A team needs to generate consistent test data in a specific JSON schema for 100 records. The schema includes nested objects and enumerated values.

Which combination of techniques is MOST appropriate?

A. Zero-shot with high temperature
B. Few-shot with one complete example plus explicit schema constraints
C. Chain-of-thought without any format specification
D. System prompt only, with no task description

---

### Q15 (GenAI-2.1.2, K1)

In prompt chaining, what is the relationship between individual prompts?

A. Each prompt is independent and random
B. The output of one prompt serves as input to the next
C. All prompts are submitted simultaneously to different models
D. Prompts are combined into a single prompt automatically

---

### Q16 (GenAI-2.3.1, K2)

An LLM generates a test plan that references a non-existent testing standard called "ISO/IEC 29199." The rest of the plan is well-structured and relevant.

Which evaluation issue does this represent?

A. Consistency failure
B. Hallucination
C. Relevance failure
D. Feasibility failure

---

### Q17 (GenAI-2.2.2, K3)

A test manager wants to use an LLM to prioritize regression tests based on code change impact, failure history, and business criticality.

Which prompt pattern is MOST appropriate?

A. Simple zero-shot: "Prioritize these tests"
B. Chain-of-thought: "Step 1: Analyze code change impact. Step 2: Review failure history. Step 3: Assess business criticality. Step 4: Calculate priority score and rank."
C. Few-shot with examples of low-priority tests only
D. System prompt: "You are a poet"

---

### Q18 (GenAI-2.3.2, K2)

After receiving test case steps that are ambiguous (e.g., "enter valid data" without specifics), a tester refines the prompt.

Which refinement is MOST likely to improve specificity?

A. Add: "Replace vague terms like 'valid data' with concrete examples such as 'username: jsmith, password: Test123!'"
B. Increase temperature to 0.9
C. Remove the input data section entirely
D. Shorten the expected output format

---

### Q19 (GenAI-2.1.1, K2)

A prompt instructs an LLM to "generate test cases for a login feature." The output includes UI layout suggestions, security architecture recommendations, and marketing copy — but only 2 actual test cases.

What is the primary weakness in this prompt?

A. The temperature is too low
B. The task is not specific enough; constraints and exclusions are missing
C. The model needs fine-tuning
D. Zero-shot prompting is never appropriate

---

### Q20 (GenAI-2.2.1, K3)

A tester needs to generate both positive and negative API test cases for an endpoint with 5 input parameters, each having multiple valid and invalid ranges.

Which approach is MOST likely to achieve comprehensive coverage?

A. A single zero-shot prompt requesting all test cases at once
B. Prompt chaining: Step 1 identify parameters and ranges, Step 2 generate positive cases, Step 3 generate negative cases, Step 4 review for coverage gaps
C. A single prompt with temperature set to maximum
D. Removing constraints to let the model be more creative

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** The test cases are generic because the specific validation rules (constraints) were not provided. Without constraints, the LLM falls back on general knowledge. A system prompt helps but wouldn't solve the specificity issue. Temperature and model version don't address the root cause.

### Q2
**Answer: B**

**Rationale:** Few-shot prompting is defined as providing examples within the prompt. Zero-shot provides no examples. CoT involves reasoning steps. Prompt chaining sequences multiple prompts.

### Q3
**Answer: B**

**Rationale:** Chain-of-thought prompting is ideal for complex conditional logic because it forces step-by-step reasoning through all combinations. Increasing temperature would increase randomness, not coverage. Reducing context or removing constraints would worsen the problem.

### Q4
**Answer: B**

**Rationale:** Few-shot prompting with examples in the exact format is the most reliable way to enforce specific formatting. Zero-shot may produce varied formats. Improvisation and unsystematic system prompts produce inconsistent results.

### Q5
**Answer: B**

**Rationale:** The output misses an alternative valid input type (national ID cards), meaning it is incomplete. The test cases are otherwise consistent and feasible. Hallucination would involve inventing features, not omitting valid ones.

### Q6
**Answer: B**

**Rationale:** Explicitly constraining the model to stated requirements directly addresses hallucinated requirements. Increasing temperature or removing input data would worsen hallucinations. Shortening the prompt is unlikely to help.

### Q7
**Answer: B**

**Rationale:** Role and context definition is a core component of effective prompts. Training data provenance, parameter count, and stock price are irrelevant to prompt effectiveness.

### Q8
**Answer: B**

**Rationale:** Prompt chaining is the standard approach for documents exceeding context windows. Fine-tuning is expensive and unnecessary for one-time analysis. Temperature doesn't compress content. Discriminative models don't solve the length problem.

### Q9
**Answer: C**

**Rationale:** Chain-of-thought prompting explicitly asks the model to show its reasoning. Zero-shot and few-shot don't inherently require reasoning exposition. Temperature tuning is a parameter, not a prompting technique.

### Q10
**Answer: B**

**Rationale:** Few-shot with an example in the exact format is the most reliable way to enforce precise formatting. Zero-shot may approximate but not guarantee the format. CoT would explain theory but not necessarily produce the right format. A "be creative" instruction contradicts the need for consistency.

### Q11
**Answer: B**

**Rationale:** Inconsistent naming conventions violate the consistency criterion. The code may be correct, relevant, and feasible — but the naming inconsistency makes it harder to maintain.

### Q12
**Answer: A**

**Rationale:** Explicitly requesting negative test cases is the most direct and effective refinement. Lowering temperature might make outputs more consistent but won't add missing scenarios. Removing examples or reducing quantity wouldn't address the gap.

### Q13
**Answer: C**

**Rationale:** Organizational revenue figures are irrelevant to test case generation. Role definition, output format, and requirements/user stories are all essential prompt components.

### Q14
**Answer: B**

**Rationale:** Few-shot with a complete example plus schema constraints gives the model both pattern and structure guidance. Zero-shot with high temperature would produce inconsistent and potentially invalid JSON. CoT without format specification might reason well but format poorly. System prompt alone is insufficient.

### Q15
**Answer: B**

**Rationale:** In prompt chaining, the output of one stage feeds into the next. The other options describe behaviors that are not characteristic of prompt chaining.

### Q16
**Answer: B**

**Rationale:** Inventing a non-existent standard is a hallucination. The output is otherwise well-structured (consistent and relevant), and feasibility isn't the issue — factual correctness is.

### Q17
**Answer: B**

**Rationale:** Chain-of-thought is ideal for multi-factor prioritization because it breaks the reasoning into clear steps. Zero-shot lacks the analytical rigor. Few-shot with only low-priority examples would bias results. An irrelevant system prompt provides no value.

### Q18
**Answer: A**

**Rationale:** Providing concrete examples directly addresses vagueness by showing exactly what specificity looks like. Increasing temperature would add randomness, not specificity. Removing data or shortening format would make the problem worse.

### Q19
**Answer: B**

**Rationale:** The prompt is too vague and lacks constraints/exclusions. The model interprets "generate test cases" broadly because boundaries were not set. Temperature, fine-tuning, and zero-shot rejection are not the core issues.

### Q20
**Answer: B**

**Rationale:** Prompt chaining breaks the complex combinatorial problem into manageable stages, enabling systematic coverage. A single zero-shot prompt would likely miss combinations. Maximum temperature increases errors, not coverage. Removing constraints undermines completeness.
