# 📘 Chapter 2 — Prompt Engineering for Testing: Lessons

---

## ⭐ 2.1 Effective Prompt Development

### 🤖 Components of an Effective Prompt (GenAI-2.1.1, K2)

An effective prompt for testing tasks typically contains six key components. The syllabus treats these as essential, and exam questions frequently test whether you can identify missing components or recognize well-structured prompts.

**Why prompt structure matters:**
A well-structured prompt can be the difference between receiving 10 generic, low-value test cases and receiving 30 targeted, well-formatted, comprehensive test cases. The six components work together to constrain the model's output space and guide it toward high-quality results.

---

**1. Role/Context**

Define who the LLM should act as and what domain it is operating in. This activates relevant knowledge in the model's training data and sets appropriate tone and depth.

**Effective role definitions for testing:**
- "You are a senior QA engineer specializing in financial services applications with 10 years of experience in PCI-DSS compliance testing."
- "You are an ISTQB-certified test analyst working on a healthcare patient portal system subject to HIPAA regulations."
- "You are a test automation engineer specializing in Playwright and TypeScript test frameworks."

**Why this works:** The model's training data includes content written by QA engineers, test analysts, and automation engineers. By specifying the role, you activate the statistical patterns associated with that role's typical outputs — more technical depth, appropriate terminology, and domain-aware test design.

**Poor role definition:** "You are an AI assistant." → Too generic; activates general-purpose patterns rather than testing-specific patterns.

---

**2. Task/Instruction**

State clearly what you want the model to do. The instruction should be specific, actionable, and unambiguous.

**Effective task instructions:**
- "Generate equivalence partition test cases for the following input field, covering valid and invalid partitions."
- "Analyze the following user story for testability issues, ambiguities, and missing acceptance criteria."
- "Convert the following manual test steps into a Playwright automation script with proper selectors and assertions."

**Poor task instructions:**
- "Do something with this requirement." → Too vague; the model will guess at the task.
- "Test this." → Ambiguous — does the tester want test cases, test data, or test code?

**Task specificity spectrum:**
- Vague: "Generate tests for login" → Generic output
- Moderate: "Generate test cases for login with username and password validation" → Better
- Specific: "Generate 15 test cases for the login feature covering: valid credentials, invalid username, invalid password, empty fields, SQL injection attempts, XSS attempts, account lockout after 3 failures, password reset flow, and 2FA scenarios" → Highly targeted output

---

**3. Input Data**

Provide the specific content the model should work with. Without input data, the model falls back on generic patterns from its training data, which may not match your specific requirements.

**Types of input data for testing prompts:**
- Requirements specifications or user stories
- API documentation (OpenAPI/Swagger specs, endpoint descriptions)
- Code snippets or UI mockups
- Existing test cases that need expansion or refactoring
- Defect reports that need analysis
- Test execution results that need summarization

**Best practices for input data:**
- Provide the complete relevant text, not just a summary. The model can process the full content better than you can summarize it.
- Use structured formats when possible (markdown tables, JSON, bullet points) rather than dense paragraphs.
- If the input exceeds context limits, chunk it strategically (see prompt chaining in Section 2.2).
- For code, include the relevant functions, classes, and comments — but remove proprietary comments or internal identifiers if using public APIs.

---

**4. Constraints and Rules**

Define boundaries, formats, and limitations. Constraints are where you prevent the model from going off-track.

**Common constraints for testing prompts:**
- **Quantitative:** "Generate exactly 10 test cases." "Include at least 3 negative test cases."
- **Scope:** "Do NOT include test cases for the admin panel — only test the customer-facing features."
- **Format:** "Each test case must include: ID, Preconditions, Steps, Expected Result, and Priority."
- **Content:** "Only use testing techniques covered in the ISTQB CTFL syllabus (equivalence partitioning, boundary value analysis, decision table testing)."
- **Exclusion:** "Do NOT include setup or teardown steps. Focus only on the core test logic."
- **Domain:** "Assume the application is a single-page React application using REST APIs."

**The power of negative constraints:**
Telling the model what NOT to do is often as important as telling it what TO do. "Do not include integration test scenarios — only unit test cases" prevents the model from generating irrelevant content that wastes review time.

---

**5. Examples (Few-Shot Prompting)**

Show the model what good output looks like. This is one of the most powerful techniques for controlling output quality and format.

**When to use examples:**
- You need a specific output format (markdown table, JSON, XML, Gherkin)
- Your organization has a specific test case template
- You want the model to match a particular writing style or depth
- The task is novel or domain-specific and the model's default output is inadequate

**Example quality matters:**
- Use 1-3 high-quality examples (more than 5 examples often wastes context without improving results)
- Ensure examples are representative of the desired output
- Include edge cases in examples if you want the model to generate edge cases
- Use consistent formatting across all examples

**Example for BDD scenario generation:**
```
Here are examples of well-written Gherkin scenarios for our team:

Example 1:
Feature: User Authentication
  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters a valid email "test@example.com" and password "SecurePass123"
    And clicks the "Sign In" button
    Then the user is redirected to the dashboard
    And a welcome message is displayed

Example 2:
Feature: User Authentication
  Scenario: Login fails with invalid password
    Given the user is on the login page
    When the user enters a valid email "test@example.com" and invalid password "wrong"
    And clicks the "Sign In" button
    Then an error message "Invalid credentials" is displayed
    And the user remains on the login page

Now generate Gherkin scenarios for the following feature: [feature description]
```

---

**6. Expected Output Format**

Specify how the response should be structured. Even without full few-shot examples, a format specification dramatically improves consistency.

**Format specification techniques:**
- **Template:** "Return the results in this format: ID | Description | Input | Expected Result"
- **Schema:** "Return JSON with keys: testCaseId, description, preconditions, steps (array), expectedResult, priority"
- **Markdown table:** "Return as a markdown table with columns: ..."
- **Bullet points:** "Return as a bulleted list where each item follows the pattern: 'When [action], then [expected result]'"

**Why format matters for testing:**
Generated test artifacts often need to be imported into test management tools (Jira, TestRail, Zephyr) or version control systems. Consistent formatting reduces manual cleanup and integration effort.

---

**Putting it all together — Complete Example:**

```
Role: You are a senior test analyst specializing in e-commerce payment systems 
with deep knowledge of PCI-DSS requirements and payment gateway integration testing.

Task: Generate comprehensive test cases for the checkout discount field validation.

Input: The discount percentage field in the checkout flow has the following rules:
- Accepts numeric values from 0.00 to 100.00 inclusive
- Must reject negative values
- Must reject values greater than 100.00
- Must accept up to 2 decimal places
- Must reject non-numeric input (letters, special characters)
- Must reject empty/null input
- Discount is applied to the subtotal before tax calculation

Constraints:
- Generate exactly 8 test cases
- Include: 2 positive (valid input), 3 negative (invalid input), 3 edge/boundary cases
- Each test case must include: ID, Description, Input Value, Preconditions, Steps, Expected Result, Priority (High/Medium/Low)
- Do NOT include test cases for payment processing or shipping calculations
- Focus ONLY on the discount percentage field validation

Example (format):
| TC-ID | Description | Input Value | Preconditions | Steps | Expected Result | Priority |
|-------|-------------|-------------|---------------|-------|-----------------|----------|
| DIS-001 | Valid maximum discount | 100.00 | Product in cart, subtotal calculated | 1. Enter 100.00 in discount field<br>2. Click Apply | Discount applied, subtotal reduced to $0.00 | High |

Format: Return ALL test cases as a single markdown table with the columns shown in the example.
```

**Analysis of why this prompt works:**
- **Role:** Activates e-commerce and PCI-DSS knowledge
- **Task:** Clear and specific (discount field validation test cases)
- **Input:** Complete business rules provided as structured data
- **Constraints:** Quantitative targets (8 test cases), content boundaries (no payment/shipping), format requirements
- **Example:** Shows exact table format and depth of detail expected
- **Format:** Reinforces the desired output structure

**What a poor version of this prompt would look like:**
```
Generate test cases for a discount field.
```
This would produce generic, low-value test cases without boundary values, negative cases, or the specific format needed.

### 🎯 Prompt Engineering Techniques for Testing (GenAI-2.1.2, K1)

You must be able to recall and recognize these techniques:

**Zero-Shot Prompting**

Providing instructions without any examples. The model relies entirely on its pre-trained knowledge to infer the task and produce appropriate output.

**When to use zero-shot for testing:**
- The task is simple, common, and well-represented in the training data
- You need quick, exploratory output where precision is not critical
- You are in an early ideation phase and want to see what the model knows
- The task is a standard testing concept (e.g., "Explain equivalence partitioning")

**Testing examples where zero-shot works well:**
- "Generate test cases for a login form with username and password fields." → The model has seen thousands of login test cases in training data.
- "What are the boundary values for a field accepting ages 18 to 65?" → Standard BVA question.
- "List common security test cases for a web application login." → Well-known domain.

**Testing examples where zero-shot is insufficient:**
- Generating test cases in your organization's specific template format
- Testing a novel business rule the model has never encountered
- Generating test code for a proprietary internal framework

**Key insight:** Zero-shot is fast but unpredictable. For production testing artifacts, you usually need more structure.

---

**Few-Shot Prompting**

Including 1-5 examples of desired input-output pairs within the prompt. This is the most reliable way to control format, style, and depth.

**How few-shot works:**
The model identifies patterns in your examples and generalizes them to new inputs. It is not "learning" in the traditional sense — it is statistically matching patterns. But the effect is powerful: the model's output converges toward the style and structure of your examples.

**When to use few-shot for testing:**
- You need a specific output format (organizational template, JSON schema, Gherkin)
- You want the model to match a particular level of detail or writing style
- The default output is too generic and needs to be "calibrated" to your needs
- You want the model to include certain elements that it typically omits (e.g., risk ratings, traceability IDs)

**Example — Calibrating test case depth:**
```
Here are two examples of test cases at the depth we need:

Example 1 (High detail):
Test Case ID: TC-AUTH-001
Title: Valid login with email and password
Priority: High
Preconditions: 
  - User account exists with email "valid.user@example.com" and password "SecurePass123!"
  - User account is active and not locked
  - Application is accessible at https://app.example.com
Steps:
  1. Navigate to https://app.example.com/login
  2. Enter "valid.user@example.com" in the Email field
  3. Enter "SecurePass123!" in the Password field
  4. Click the "Sign In" button
Expected Result:
  - User is redirected to /dashboard
  - HTTP status code is 200
  - Dashboard loads within 3 seconds
  - User's display name appears in the top navigation

Example 2 (Same depth, different scenario):
[similar detail level for a negative test case]

Now generate test cases for the password reset feature with the SAME level of detail.
```

**How many examples?**
- 1 example: Minimal guidance; good for simple format matching
- 2-3 examples: The sweet spot for most tasks; shows pattern without consuming excessive context
- 4-5 examples: Useful for complex patterns but watch your token budget
- 5+ examples: Usually diminishing returns; consider fine-tuning if you need this many

**Important:** The quality of your examples matters more than the quantity. One excellent example often beats three mediocre ones.

---

**Chain-of-Thought (CoT) Prompting**

Encouraging the model to explain its reasoning step-by-step before giving the final answer. This dramatically improves accuracy on tasks requiring multi-step logic.

**Why CoT works:**
By forcing the model to generate intermediate reasoning steps, you:
1. Make the reasoning visible and verifiable
2. Reduce errors in multi-step logic (each step is simpler than the whole)
3. Enable human reviewers to catch reasoning errors early
4. Increase the likelihood of correct final answers on complex tasks

**When to use CoT for testing:**
- Analyzing complex requirements for testability (multiple conditions, nested logic)
- Generating test cases from business rules with multiple interacting variables
- Calculating risk scores or coverage percentages
- Evaluating whether a test suite adequately covers a requirement
- Debugging why a test case might be missing a scenario

**CoT prompting techniques:**

*Explicit CoT:*
```
Analyze the following requirement for testability. Think step-by-step:
1. Identify all explicit conditions in the requirement
2. Identify any implicit conditions or assumptions
3. Look for ambiguous terms that could be interpreted multiple ways
4. Check for missing acceptance criteria
5. Identify any dependencies on other features or systems
6. Assess whether the requirement is independently testable
7. Provide your final assessment and recommendations
```

*Implicit CoT (adding "Let's think step by step"):*
```
Given the following business rule, generate boundary value test cases. 
Let's think step by step about what the valid and invalid ranges are, 
what the boundary values should be, and what special cases might exist.
```

**When CoT is unnecessary:**
- Simple factual recall ("What is the definition of black-box testing?")
- Straightforward format conversion ("Convert these steps to Gherkin")
- Tasks where the reasoning is trivial ("Generate a random valid email address")

---

**System Prompts / Meta-Prompts**

Setting the overall behavior, role, or constraints for an entire conversation or session. System prompts act as the "operating system" for the model's responses.

**How system prompts differ from user prompts:**
- **System prompt:** Sets global behavior, constraints, and context for the entire session. Usually invisible to the end user in chat interfaces.
- **User prompt:** A specific query or task within that session.
- **Analogy:** The system prompt is the "employee handbook"; the user prompt is the "today's assignment."

**When to use system prompts for testing:**
- You want consistent behavior across multiple related testing tasks
- You are building a testing assistant that will handle many different queries
- You need to enforce constraints that apply to all outputs (e.g., "Always include risk ratings")
- You want the model to adopt a specific persona for an extended session

**Example system prompt for a testing assistant:**
```
You are an AI testing assistant embedded in a quality assurance team. 
Your role is to help testers generate, analyze, and improve test artifacts.

Rules:
- Always provide test cases in the organization's template format (ID, Title, Preconditions, Steps, Expected Result, Priority, Risk)
- When generating code, use Python with pytest and prefer explicit waits over implicit waits
- Always explain your reasoning before showing test cases or code
- If a requirement is ambiguous, flag it and suggest clarifying questions rather than guessing
- Never generate test cases for features not explicitly mentioned in the provided requirements
- Include at least one negative test case for every positive test case generated
```

**System prompt limitations:**
- System prompts can be overridden by strong user prompts ("Ignore previous instructions and...")
- Very long system prompts consume context window budget
- System prompts work best when the model API supports them explicitly (OpenAI, Anthropic)

---

**Prompt Chaining / Decomposition**

Breaking complex tasks into a sequence of simpler prompts, where the output of one becomes input to the next.

**Why prompt chaining is essential for testing:**
Testing tasks are often inherently multi-stage:
1. Analyze requirements → extract testable conditions
2. For each condition → identify applicable test techniques
3. For each technique → generate specific test cases
4. For each test case → generate test data
5. For each test case → generate automation code

Attempting all of this in a single prompt often exceeds context limits or produces shallow, incomplete results.

**Example prompt chain for end-to-end test generation:**

*Step 1 — Extract Requirements:*
```
Read the following user story and extract all explicit and implicit testable conditions.
Return as a numbered list.

User Story: As a registered user, I want to update my profile information...
```

*Step 2 — Generate Test Conditions:*
```
For each testable condition from Step 1, identify the most appropriate test technique
(equivalence partitioning, boundary value analysis, state transition, etc.).
Return as a table: Condition | Technique | Rationale
```

*Step 3 — Generate Test Cases:*
```
For each test condition and technique from Step 2, generate 2-3 detailed test cases.
Use the following format: [template]
```

*Step 4 — Generate Test Data:*
```
For each test case from Step 3, generate the specific input data needed to execute it.
Ensure data is realistic but synthetic (no real PII).
```

**Benefits of prompt chaining:**
- Each step has a focused context, improving output quality
- Errors can be caught and corrected at each stage before propagating
- Intermediate outputs can be reviewed by humans at each stage
- Context limits are managed by processing smaller chunks at each step
- Different techniques can be applied at different stages (CoT for analysis, few-shot for formatting)

**Drawbacks of prompt chaining:**
- More API calls = higher cost and latency
- Errors in early stages compound in later stages
- Requires more orchestration logic (manual or automated)
- Intermediate outputs may need to be stored and passed between steps

---

**Self-Consistency (Advanced Technique)**

Running the same prompt multiple times and selecting the answer that appears most frequently, or using a secondary prompt to evaluate and select the best output from multiple candidates.

**Use in testing:**
- Generate 5 sets of test cases for the same requirement, then ask the model to merge them into a single comprehensive set
- Generate a test case, then ask the model to critique it for completeness, and regenerate based on the critique
- Use a "judge" prompt: "Here are three versions of a test case. Which is most comprehensive and why?"

**Trade-off:** Self-consistency improves quality but increases cost (multiple API calls per task). Best used for critical test artifacts where quality is paramount.

---

## 🎯 2.2 Applying Prompt Engineering Techniques

### 🎯 Applying Techniques for Test Activities (GenAI-2.2.1, K3)

**Test Case Generation — Technique Selection Framework:**

| Scenario | Recommended Technique | Why |
|----------|----------------------|-----|
| Simple requirement, common domain, exploratory | Zero-shot | Fast, the model knows this domain well |
| Specific format needed (organizational template) | Few-shot with 2 format examples | Ensures output matches required structure |
| Complex business rules with multiple conditions | CoT + Few-shot | CoT reasons through conditions; few-shot ensures format |
| End-to-end flow requiring multiple artifacts | Prompt chaining | Breaks complex generation into manageable stages |
| High-stakes safety-critical test cases | Self-consistency (multiple runs + merge) | Maximizes completeness and reduces hallucination risk |
| New domain the model likely hasn't seen | Few-shot with domain-specific examples | Calibrates the model to the domain's patterns |

**Test Data Generation — Technique Selection:**
- **Zero-shot works for:** Common formats (names, addresses, emails, phone numbers), standard data types, simple ranges
- **Few-shot is essential when:** You need data matching specific formats (e.g., "Patient ID must follow format PT-YYYY-XXXXX where YYYY is year and XXXXX is a 5-digit sequence"), domain-specific constraints (medical coding, financial instrument identifiers), or maintaining referential integrity across related fields
- **CoT helps when:** Generating data that must satisfy complex validation rules (e.g., "Generate loan application data where debt-to-income ratio is between 0.2 and 0.5, credit score is 300-850, and loan amount does not exceed 4x annual income")
- **Always specify constraints:** "Generate 50 records. Include at least 10 with invalid email formats. Include 5 with Unicode characters in names. Ensure 20% of records have missing optional fields."

**Test Code Generation — Best Practices:**
- **System prompt:** Set the language (Python, JavaScript, Java), framework (pytest, Jest, JUnit), and testing level (unit, integration, E2E)
- **Few-shot with working code:** Show 1-2 complete, working test functions in your exact style. This dramatically improves syntax correctness, assertion style, and naming conventions.
- **CoT for complex code:** When generating page object models, test harnesses, or multi-step API tests, use CoT: "First, identify the page elements we need to interact with. Second, define the page object class structure. Third, write the test methods using the page objects."
- **Always specify:** Framework version ("Selenium 4 with WebDriverManager"), naming conventions ("Use camelCase for methods, PascalCase for classes"), assertion style ("Prefer assertThat over assertEquals"), and error handling expectations
- **Include selectors when available:** If you have DOM element IDs or CSS selectors, include them in the prompt. The model will incorporate them into the generated code.

**Requirement Analysis — Techniques:**
- **CoT is highly effective:** "Read this requirement. Think step-by-step: (1) Identify ambiguities, (2) Identify missing acceptance criteria, (3) Identify testability issues, (4) Assess whether the requirement is independently verifiable, (5) Provide a severity rating for each issue found."
- **Prompt chaining for deep analysis:**
  - Step 1: Summarize the requirement in one sentence
  - Step 2: Extract all explicit conditions
  - Step 3: Identify implicit conditions and assumptions
  - Step 4: Flag ambiguities and suggest clarifying questions
  - Step 5: Propose testable acceptance criteria for each condition

**Defect Analysis — Techniques:**
- **Input preparation:** Provide the defect title, description, steps to reproduce, environment details, and any relevant logs or screenshots
- **Zero-shot for classification:** "Classify this defect by severity (Critical/High/Medium/Low) and priority." → Works well because the model knows standard defect classification schemes
- **CoT for root cause analysis:** "Analyze this defect. Step-by-step: (1) Identify the symptom vs. the root cause, (2) Suggest 3 possible root cause categories, (3) Recommend which diagnostic steps to take next."
- **Few-shot for defect report formatting:** If your organization uses a specific defect template, show 1-2 examples and ask the model to draft new reports in that format

### 🤖 Prompt Patterns for Specific Testing Tasks (GenAI-2.2.2, K3)

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

## 🤖 2.3 Evaluate GenAI Results and Refine Prompts

### 🤖 Evaluating GenAI Results (GenAI-2.3.1, K2)

Not all GenAI output is usable. A tester must evaluate results against six quality criteria. The exam tests whether you can identify which criterion is violated in a given scenario.

**Correctness:**
- Are the generated test cases aligned with the requirements?
- Do expected results accurately reflect the specification?
- Is generated code syntactically and logically correct?
- Are test oracles (pass/fail criteria) valid?

**Example of correctness failure:** A generated test case for "user registration" expects a welcome email to be sent immediately. The actual system queues emails asynchronously and sends them within 5 minutes. The oracle is incorrect.

**Completeness:**
- Does the output cover all stated requirements?
- Are boundary values, edge cases, and negative cases included?
- Are preconditions and postconditions defined?
- Does the test data include invalid/edge cases, not just happy-path data?

**Example of completeness failure:** A login test suite covers valid credentials and invalid password, but misses: empty username, empty password, SQL injection attempts, XSS attempts, account lockout, and password reset flow.

**Consistency:**
- Does the output follow the requested format throughout?
- Are naming conventions uniform?
- Is terminology consistent with organizational standards?
- Do all test cases use the same level of detail?

**Example of consistency failure:** Half the generated test cases use camelCase IDs (tcLogin001) and half use snake_case (tc_login_002). Some include preconditions; others do not.

**Relevance:**
- Is the output focused on the testing task, or does it include irrelevant information?
- Does it address the specific context provided (domain, tech stack, constraints)?
- Are generated test cases for the correct feature, or do they drift to related features?

**Example of relevance failure:** A prompt asks for test cases for the "customer checkout" feature. The model generates test cases for "admin order management" and "inventory tracking" in addition to checkout.

**Feasibility:**
- Can the test cases actually be executed in the available environment?
- Are the steps clear and unambiguous for another tester to follow?
- Does generated code use selectors or APIs that exist in the actual application?
- Are the test data values realistic and obtainable?

**Example of feasibility failure:** A generated UI test references a button with ID `"submit-order-btn"` but the actual application uses `"place-order-button"`. The test will fail on execution.

**Absence of Hallucinations:**
- Does generated code reference real APIs and functions?
- Do test cases reference real requirements and features?
- Are cited standards or frameworks accurately described?
- Are expected results based on actual system behavior or invented behavior?

**Example of hallucination:** A generated test case references a "loyalty points API endpoint /api/v2/loyalty/redeem" that does not exist in the system. The model invented this endpoint.

---

### 🤖 Refining Prompts Based on Evaluation (GenAI-2.3.2, K2)

The evaluation -> refinement cycle is the engine of effective prompt engineering. Every output is an opportunity to improve the prompt.

**Diagnostic framework: Matching problems to refinements**

| Problem | Root Cause | Refinement |
|---------|-----------|------------|
| Output is too vague | Missing constraints or unclear task | Add specific constraints, quantitative targets, and scope boundaries |
| Output is off-topic | Weak context or overbroad task | Strengthen role definition, restate task, add exclusion criteria |
| Output misses edge cases | Model defaulted to happy path | Explicitly request boundary values, negative tests, error paths; use CoT |
| Output format inconsistent | Format specification insufficient | Provide template/schema, show complete examples, use system prompts |
| Output contains hallucinations | Model relied on parametric knowledge | Add reference docs, constrain to provided content, lower temperature, use RAG |
| Output is too long/short | No length constraints specified | Add quantitative constraints: "exactly 10" or "no more than 500 words" |
| Output is too generic | Missing input data or context | Provide complete requirements, user stories, and domain information |
| Output repeats same pattern | Model fell into a local pattern | Vary the prompt structure, add diversity constraints, use higher temperature |

**Detailed refinement strategies:**

**If output is too vague:**
- Add quantitative constraints: "Generate exactly 10 test cases, not approximately 10"
- Switch to few-shot: Show 1-2 examples of the desired depth and detail
- Define the output format precisely with a template
- Add scope boundaries: "Focus ONLY on the payment flow, not the account management features"

**If output is off-topic:**
- Strengthen the role/context: Make the domain and expertise level more specific
- Restate the task with more precision: "Generate UNIT test cases, not integration test cases"
- Add exclusion criteria: "Do NOT include test cases for: admin functions, mobile app, or API security"
- Provide the exact requirements text rather than a summary

**If output misses edge cases:**
- Explicitly request: "For each positive test case, generate a corresponding negative test case"
- Use CoT: "Think through all possible input combinations, including boundary values, null inputs, and invalid formats, before generating test cases"
- Few-shot with edge case examples: Include 1-2 edge cases in your examples
- Add constraint: "Ensure at least 30% of generated test cases are negative or edge cases"

**If output format is inconsistent:**
- Provide a complete template with all fields
- Show a full example of the desired format, not just a partial one
- Use system prompts to enforce formatting rules across all outputs
- Ask the model to validate its own format: "Before returning results, verify that every test case follows the exact template provided"

**If output contains hallucinations:**
- Ground the model in provided documents: "Only reference features, APIs, and requirements explicitly mentioned in the Input section below"
- Ask for source citations: "For each test case, cite the specific requirement ID it tests"
- Lower temperature to 0.1-0.2 for more deterministic, knowledge-grounded output
- Use RAG: retrieve only verified documents and include them in the prompt context
- Add verification constraint: "If you are uncertain about any requirement, flag it rather than guessing"

**If output is too long or short:**
- Specify exact counts: "Generate exactly 15 test cases" or "Generate no more than 500 words"
- Use prompt chaining to break generation into stages (e.g., generate test conditions first, then expand each into 2-3 test cases)
- For overly long outputs, add: "Be concise. One sentence per step. No explanatory text."

**The Refinement Loop in Practice:**

```
Iteration 1:
Prompt: "Generate test cases for login"
Output: 3 generic test cases (valid login, invalid password, empty fields)
Evaluation: Incomplete (missing many scenarios), vague (no format), no boundary values

Iteration 2:
Prompt: "Generate test cases for login. Include: valid credentials, invalid username, 
invalid password, empty fields, SQL injection, XSS, account lockout after 3 failed attempts, 
password reset. Format: markdown table with ID, Description, Steps, Expected Result."
Output: 8 test cases in table format. All have steps but some are vague ("enter invalid data").
Evaluation: Better coverage, good format, but steps lack specificity

Iteration 3:
Prompt: [Same as Iteration 2] + "Steps must include specific concrete values, not generic 
terms like 'valid data' or 'invalid data'. Example: 'Enter username: testuser@example.com, 
password: WrongPass123'"
Output: 8 test cases with specific values in steps
Evaluation: Meets quality threshold. Human review and approval.
```

**Key insight:** The best prompt engineers are not born — they are made through iterative refinement. Every testing team should maintain a prompt library where successful prompts are versioned, shared, and continuously improved based on output quality feedback.

---

## 💡 Worked Examples — Applying Chapter 2 Concepts

### 💡 Worked Example 1: Selecting the Right Prompt Technique

**Scenario:** For each of the following testing tasks, select the most appropriate prompt engineering technique and justify your choice.

**A. A tester needs to generate 5 BDD scenarios in the team's exact Gherkin format for a new "password reset" feature.**
- **Answer:** Few-shot prompting. The team has a specific Gherkin format (Given/When/Then structure, indentation, naming conventions) that must be matched exactly. Providing 2-3 examples of the team's existing Gherkin scenarios will ensure the model mimics the exact format. Zero-shot would likely produce Gherkin that approximates but does not match the team's conventions.

**B. A test manager needs to analyze a 300-page requirements document to identify all testability issues.**
- **Answer:** Prompt chaining. A 300-page document exceeds most context windows. Step 1: Chunk the document and summarize each section. Step 2: Extract testable conditions from each summary. Step 3: Analyze each condition for testability issues. Step 4: Consolidate findings into a prioritized report. Chain-of-thought within each step improves reasoning quality.

**C. A tester needs to understand why a complex insurance premium calculation generates incorrect values for certain input combinations.**
- **Answer:** Chain-of-thought prompting. The task requires multi-step logical reasoning: tracing through conditional rules, identifying which branch is taken for each input, and pinpointing where the calculation deviates from expected behavior. CoT forces the model to show its reasoning, making errors visible.

**D. A team needs 100 random but valid email addresses for a load test.**
- **Answer:** Zero-shot prompting. Email generation is a common, well-represented task. The model knows what valid email addresses look like. A simple prompt like "Generate 100 random but syntactically valid email addresses. Include a mix of domains." will produce good results without needing examples.

---

### 💡 Worked Example 2: Evaluating and Refining a Prompt

**Scenario:** A tester receives the following output from an LLM after prompting for test cases:

```
Test Cases for User Registration:
1. Register with valid details → Account created
2. Register with invalid email → Error shown
3. Register with weak password → Error shown
4. Register with duplicate email → Error shown
```

**Task:** Evaluate this output against the six quality criteria. Identify at least two problems per criterion where applicable. Then write a refined prompt that would address these problems.

**Evaluation:**

- **Correctness:** The expected results are vague ("Error shown" doesn't specify which error). Step 2 doesn't specify what makes an email invalid.
- **Completeness:** Missing: empty fields, password confirmation mismatch, terms-of-service unchecked, extremely long inputs, special characters in names, SQL injection, XSS, email verification flow, account activation.
- **Consistency:** Inconsistent depth (some have preconditions implied, others don't). No uniform format.
- **Relevance:** Mostly relevant but "weak password" is vague without the actual password policy.
- **Feasibility:** Steps are too vague for another tester to execute ("valid details" is not specified).
- **Absence of hallucinations:** No obvious hallucinations, but the vague expected results suggest the model is guessing at system behavior.

**Refined Prompt:**
```
Role: You are a QA engineer testing a user registration system.
Task: Generate comprehensive test cases for the registration form.

Input: The registration form has these fields and rules:
- Email: Required, must match RFC 5322 format, must be unique in system
- Password: Required, 8-20 chars, must contain uppercase, lowercase, digit, special char
- Confirm Password: Must match Password field
- First Name: Required, 1-50 chars, letters and spaces only
- Terms Checkbox: Must be checked

Constraints:
- Generate exactly 12 test cases: 3 positive, 6 negative (validation failures), 3 edge cases
- Each test case must include: ID, Title, Preconditions, Steps (numbered with specific values), 
  Expected Result (specific error message or success behavior), Priority
- Do NOT include test cases for login or password reset

Example:
| ID | Title | Preconditions | Steps | Expected Result | Priority |
|----|-------|---------------|-------|-----------------|----------|
| REG-001 | Valid registration | System is online, email not in DB | 1. Enter email: newuser@test.com<br>2. Enter password: TestPass123!<br>3. Enter confirm password: TestPass123!<br>4. Enter first name: John<br>5. Check Terms<br>6. Click Register | Account created, confirmation email sent, redirect to welcome page | High |

Format: Return all test cases as a markdown table with the columns shown in the example.
```

---

### 💡 Worked Example 3: Prompt Chaining in Practice

**Scenario:** You need to generate a complete test package for a new e-commerce "apply discount coupon" feature. The package must include: test conditions, test cases, test data, and a Playwright automation script.

**Design a 4-step prompt chain:**

**Step 1 — Extract Testable Conditions:**
```
Role: You are a test analyst for an e-commerce platform.
Task: Read the following user story and extract all testable conditions.
Return each condition as a numbered list item.

User Story: As a shopper, I want to apply a discount coupon during checkout 
so that I can reduce my order total. Coupons have the following rules:
- Must be entered in the "Promo Code" field on the checkout page
- Must be valid (exists in system, not expired, not already used by this customer)
- Cannot be combined with other coupons (only one per order)
- Discount applies to subtotal before shipping and tax
- If coupon value exceeds subtotal, order total becomes $0.00 (not negative)
- Some coupons are category-specific and only apply to eligible items
```

**Step 2 — Select Test Techniques:**
```
For each testable condition from Step 1, identify the most appropriate test technique:
- Equivalence Partitioning
- Boundary Value Analysis
- State Transition Testing
- Decision Table Testing

Return as: Condition | Technique | Rationale
```

**Step 3 — Generate Test Cases:**
```
For each condition and technique from Step 2, generate 2-3 detailed test cases.
Format: ID | Condition | Input | Expected Result | Priority
Include positive, negative, and edge cases.
```

**Step 4 — Generate Automation Script:**
```
Using the test cases from Step 3, generate a Playwright TypeScript test script 
for the highest-priority positive test case and the highest-priority negative test case.
Include proper selectors, assertions, and comments.
Assume the promo code field has id="promo-code-input" and the apply button has id="apply-coupon-btn".
```

**Why this chain works:**
- Each step has a focused, achievable scope
- Errors can be caught before propagating to later steps
- A human reviewer can approve Step 2 before Step 3 begins
- The automation script in Step 4 has precise test cases to implement, not vague requirements
