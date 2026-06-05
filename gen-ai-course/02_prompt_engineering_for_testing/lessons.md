# Chapter 2 — Prompt Engineering for Testing: Lessons

---

## 2.1 Effective Prompt Development

### Components of an Effective Prompt (GenAI-2.1.1, K2)

An effective prompt for testing tasks typically contains six key components. The syllabus treats these as essential:

**1. Role/Context**
Define who the LLM should act as and what domain it is operating in.
- Example: "You are an experienced test analyst working on a financial services web application."

**2. Task/Instruction**
State clearly what you want the model to do.
- Example: "Generate equivalence partition test cases for the following input field."

**3. Input Data**
Provide the specific content the model should work with.
- Example: Paste the requirement, user story, code snippet, or API specification.

**4. Constraints and Rules**
Define boundaries, formats, and limitations.
- Example: "Each test case must include: ID, preconditions, steps, expected result, and priority. Do not include setup steps."

**5. Examples (when applicable)**
Show the model what good output looks like (few-shot prompting).
- Example: Provide 1-2 sample test cases in the exact format desired.

**6. Expected Output Format**
Specify how the response should be structured.
- Example: "Return the results as a markdown table with columns: ID, Description, Input, Expected Result."

**Putting it together:**
```
Role: You are a senior test analyst specializing in e-commerce systems.
Task: Generate boundary value analysis test cases for a checkout discount field.
Input: The discount percentage field accepts values from 0 to 100 inclusive. It must reject negative values and values over 100.
Constraints: Generate exactly 5 test cases covering min-1, min, nominal, max, max+1. Include preconditions and expected results.
Format: Return as a markdown table with columns: Test Case ID, Input Value, Expected Result, Rationale.
```

### Prompt Engineering Techniques for Testing (GenAI-2.1.2, K1)

You must be able to recall and recognize these techniques:

**Zero-Shot Prompting**
Providing instructions without any examples. Works well for straightforward tasks where the model already has strong domain knowledge.
- Use when: The task is simple, common, and well-represented in the training data.
- Example: "Generate test cases for a login form with username and password fields."

**Few-Shot Prompting**
Including 1-5 examples of desired input-output pairs within the prompt.
- Use when: You need the model to follow a specific pattern, format, or style.
- Example: Provide two test cases in your desired format, then ask for more following the same pattern.

**Chain-of-Thought (CoT) Prompting**
Encouraging the model to explain its reasoning step-by-step before giving the final answer.
- Use when: The task requires multi-step reasoning, logic, or analysis.
- Example: "Analyze the following requirement for testability. Think step-by-step about ambiguities, missing information, and testability issues before providing your final assessment."

**System Prompts / Meta-Prompts**
Setting the overall behavior, role, or constraints for an entire conversation.
- Use when: You want consistent behavior across multiple user queries.
- Example: "You are a test automation expert. Always provide code in Python with pytest assertions. Always explain your reasoning before showing code."

**Prompt Chaining / Decomposition**
Breaking complex tasks into a sequence of simpler prompts, where the output of one becomes input to the next.
- Use when: The task is too complex for a single prompt or exceeds context limits.
- Example: Step 1: Extract all requirements from a document. Step 2: Generate test conditions for each requirement. Step 3: Expand each test condition into detailed test cases.

---

## 2.2 Applying Prompt Engineering Techniques

### Applying Techniques for Test Activities (GenAI-2.2.1, K3)

**Test Case Generation:**
- Start with a zero-shot prompt for simple requirements
- Switch to few-shot when you need specific formatting or complex business rules
- Use CoT when generating test cases from complex conditional logic (e.g., "if the customer is VIP AND order > $500 AND item is in stock...")
- Use prompt chaining for end-to-end test generation: requirements -> test conditions -> test cases -> test data

**Test Data Generation:**
- Zero-shot works for common formats (names, addresses, emails)
- Few-shot is essential when you need data matching specific formats or domain constraints
- Always specify constraints: "Generate 50 records. Include at least 10 with invalid email formats. Include 5 with Unicode characters in names."

**Test Code Generation:**
- System prompt sets the language and framework context
- Few-shot with working code examples dramatically improves output quality
- CoT helps when generating complex page object models or test harnesses
- Always specify: framework version, naming conventions, and assertion style

**Requirement Analysis:**
- CoT is highly effective: "Read this requirement. Identify ambiguities. Identify missing acceptance criteria. Identify testability issues. Provide a severity rating for each."
- Prompt chaining: First summarize, then analyze, then suggest improvements

**Defect Analysis:**
- Provide the defect title, description, steps to reproduce, and environment
- Ask the model to: classify severity, suggest root cause categories, identify similar defects, or draft reproduction steps

### Prompt Patterns for Specific Testing Tasks (GenAI-2.2.2, K3)

**Pattern: Test Case Expansion**
```
Given the following high-level test condition: [condition]
Expand it into detailed test cases including:
- Preconditions
- Steps (numbered)
- Expected result
- Priority (High/Medium/Low)
Generate at least 3 test cases: one positive, one negative, one edge case.
```

**Pattern: Boundary Value Generation**
```
For the input field [description] with valid range [min] to [max]:
Generate test cases for:
- Minimum valid value
- Maximum valid value
- Just below minimum (min-1)
- Just above maximum (max+1)
- A nominal valid value
Format each as: Input | Expected Result | Rationale
```

**Pattern: Risk-Based Test Prioritization**
```
Given the following test cases and their associated business impact, technical complexity, and failure history:
[data]
Assign a risk score (1-5) to each test case and rank them from highest to lowest risk.
Explain the rationale for the top 3 priorities.
```

**Pattern: BDD Scenario Generation**
```
Given the user story: [story text]
Generate Gherkin scenarios in the format:
Feature: [name]
  Scenario: [title]
    Given [context]
    When [action]
    Then [outcome]
Include at least one happy path, one alternative path, and one error path.
```

---

## 2.3 Evaluate GenAI Results and Refine Prompts

### Evaluating GenAI Results (GenAI-2.3.1, K2)

Not all GenAI output is usable. A tester must evaluate results against quality criteria:

**Correctness:**
- Are the generated test cases aligned with the requirements?
- Do expected results accurately reflect the specification?
- Is generated code syntactically and logically correct?

**Completeness:**
- Does the output cover all stated requirements?
- Are boundary values, edge cases, and negative cases included?
- Are preconditions and postconditions defined?

**Consistency:**
- Does the output follow the requested format throughout?
- Are naming conventions uniform?
- Is terminology consistent with organizational standards?

**Relevance:**
- Is the output focused on the testing task, or does it include irrelevant information?
- Does it address the specific context provided (domain, tech stack, constraints)?

**Feasibility:**
- Can the test cases actually be executed in the available environment?
- Are the steps clear and unambiguous for another tester to follow?

**Absence of Hallucinations:**
- Does generated code reference real APIs and functions?
- Do test cases reference real requirements and features?
- Are cited standards or frameworks accurately described?

### Refining Prompts Based on Evaluation (GenAI-2.3.2, K2)

The evaluation -> refinement cycle is central to effective prompt engineering:

**If output is too vague:**
- Add more specific constraints
- Provide examples (switch to few-shot)
- Define the output format more precisely

**If output is off-topic:**
- Strengthen the role/context definition
- Restate the task more explicitly
- Add exclusion criteria: "Do NOT include..."

**If output misses edge cases:**
- Explicitly request boundary values, negative tests, or error paths
- Use CoT: "Think through all possible input combinations before generating test cases."

**If output format is inconsistent:**
- Provide a template or schema
- Show a complete example of the desired format
- Use system prompts to enforce formatting rules

**If output contains hallucinations:**
- Provide reference documents in the prompt (RAG approach)
- Ask the model to cite sources or flag uncertain claims
- Lower temperature for more deterministic outputs
- Add constraint: "Only reference features explicitly mentioned in the provided requirements."

**If output is too long or short:**
- Specify length constraints: "Generate exactly 10 test cases."
- Use prompt chaining to break generation into stages

**The Refinement Loop:**
1. Draft initial prompt
2. Generate output
3. Evaluate against criteria
4. Identify gaps
5. Refine prompt to address gaps
6. Repeat until output meets quality standards
7. Validate final output with human review
