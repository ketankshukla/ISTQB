# Chapter 1 — Practice Questions

15 original ISTQB-style questions covering Chapter 1 learning objectives. Each question is tagged with its LO and K-level.

**Instructions:** Select the single best answer unless otherwise stated. After attempting all questions, check your answers against the rationales at the end of this file.

---

## Questions

### Q1 (GenAI-1.1.1, K1)

Which of the following BEST describes machine learning?

A. A set of explicitly programmed rules that process input data
B. A subset of AI where systems learn patterns from data rather than being explicitly programmed
C. A technique for generating realistic images and text from random noise
D. A process for manually labeling all possible inputs and outputs before deployment

---

### Q2 (GenAI-1.1.2, K2)

A team uses a model to classify test cases as "high risk" or "low risk" based on historical defect data. Another team uses a model to generate new test cases from requirement descriptions.

Which statement correctly classifies these two models?

A. Both are generative models because they both use AI
B. The risk classifier is discriminative; the test case generator is generative
C. The risk classifier is generative; the test case generator is discriminative
D. Both are discriminative models because they both process text

---

### Q3 (GenAI-1.1.3, K2)

Which of the following is a key characteristic of large language models (LLMs)?

A. They can only process fixed-length input of exactly 100 tokens
B. They generate content by predicting the most likely next token in a sequence
C. They require complete retraining for every new prompt
D. They execute code directly to verify the correctness of their outputs

---

### Q4 (GenAI-1.2.1, K1)

Which of the following is a valid capability of generative AI in software testing?

A. Guaranteeing 100% code coverage through automated test generation
B. Replacing human testers in regulatory compliance audits
C. Generating synthetic test data for boundary value scenarios
D. Executing tests directly against production environments without approval

---

### Q5 (GenAI-1.2.2, K2)

A test team has started using an LLM to generate test cases. Initially, the outputs are vague and miss important boundary conditions. The team adds detailed requirements, examples of well-written test cases, and explicit constraints to their prompts. Over two weeks, the quality improves significantly.

Which core principle of leveraging GenAI in testing does this illustrate?

A. GenAI should always be used with zero human oversight
B. Prompts should be written once and never changed
C. Iterative refinement and rich context improve GenAI outputs
D. LLMs automatically improve their models after each prompt

---

### Q6 (GenAI-1.3.1, K2)

An LLM is asked to generate API test scripts for a new payment gateway. The model produces code that references a function called `processPaymentV3()` which does not exist in the actual API documentation.

This is an example of which limitation of generative AI?

A. Context window constraint
B. Hallucination
C. Temperature instability
D. Knowledge cutoff

---

### Q7 (GenAI-1.3.2, K1)

Which of the following BEST explains why human oversight is required when using generative AI for testing?

A. LLMs are too expensive to run without human monitoring
B. Testers remain accountable for test quality and must validate generated artifacts
C. Human oversight is only required for regulatory compliance in the EU
D. LLMs cannot generate text without a human pressing the send button

---

### Q8 (GenAI-1.1.2, K2)

Which statement BEST describes the difference between discriminative and generative models?

A. Discriminative models are trained on labeled data; generative models are trained on unlabeled data
B. Discriminative models predict labels or classifications; generative models create new content
C. Discriminative models use neural networks; generative models use decision trees
D. Discriminative models are faster; generative models are more accurate

---

### Q9 (GenAI-1.1.3, K2)

A tester sets the temperature parameter to 0.9 when asking an LLM to generate test data values.

What is the MOST likely effect of this setting?

A. The output will be highly deterministic and repeatable
B. The output will be more varied and creative
C. The model will refuse to generate any test data
D. The output will always be factually correct

---

### Q10 (GenAI-1.2.1, K1)

In which testing activity is generative AI LEAST likely to provide value?

A. Drafting bug reports from observed failure descriptions
B. Making the final go/no-go release decision based on test results
C. Generating BDD scenarios from natural language requirements
D. Creating SQL queries to validate database state after tests

---

### Q11 (GenAI-1.3.1, K2)

An LLM is asked to analyze a 500-page system requirements specification and generate a complete test plan in a single prompt. The model truncates the output and misses several key requirements.

Which limitation is primarily responsible?

A. Hallucination
B. Knowledge cutoff
C. Context window constraint
D. Bias in training data

---

### Q12 (GenAI-1.2.2, K2)

A test manager proposes using a public LLM API to analyze production bug reports that contain customer names, email addresses, and account numbers. The manager argues this will improve test prioritization.

Which principle of leveraging GenAI in testing is being violated?

A. Iterative refinement
B. Privacy and security first
C. Measure and validate
D. Know the model's limits

---

### Q13 (GenAI-1.1.1, K1)

Which type of machine learning uses labeled input-output pairs during training?

A. Unsupervised learning
B. Reinforcement learning
C. Supervised learning
D. Transfer learning

---

### Q14 (GenAI-1.3.1, K2)

A tester notices that an LLM consistently generates test cases that assume all users have high-speed internet and modern browsers. This leads to missing compatibility tests for low-bandwidth scenarios.

Which limitation does this BEST illustrate?

A. Hallucination
B. Reasoning error
C. Bias in training data
D. Context window constraint

---

### Q15 (GenAI-1.2.1, K1)

Which of the following activities can generative AI support in test automation?

A. Automatically deploying tests to production without CI/CD approval
B. Generating Selenium or Playwright code from natural language test descriptions
C. Guaranteeing that all generated code is free of defects
D. Eliminating the need for test environment configuration

---

### Q16 (GenAI-1.1.1, K1)

Which of the following BEST describes deep learning?

A. A programming paradigm where developers write explicit if-then rules for AI behavior
B. A subset of machine learning using neural networks with multiple layers that learn hierarchical representations
C. A technique for manually labeling every possible input-output pair in a dataset
D. A method for compressing large datasets into smaller summary statistics

---

### Q17 (GenAI-1.1.3, K2)

A tester needs to analyze a user requirements document that is approximately 120,000 words long. The tester wants to ask an LLM to identify all testable requirements in a single prompt.

Which limitation is MOST relevant to this task?

A. Hallucination
B. Context window constraint
C. Non-determinism
D. Bias in training data

---

### Q18 (GenAI-1.2.2, K2)

A test team has been using an LLM to generate API test scripts. The team lead notices that some generated scripts reference deprecated API endpoints that were removed in the latest framework version (released two months ago).

Which core principle of using GenAI in testing does this situation MOST directly illustrate the importance of?

A. Know the model's limits (knowledge cutoff)
B. Privacy and security first
C. Iterative refinement
D. Human-in-the-loop

---

### Q19 (GenAI-1.3.1, K2)

An LLM is asked to generate test cases for a form with three fields: Age (18-65), Income ($0-$500,000), and Employment Status (Employed, Self-Employed, Unemployed, Student, Retired). The model generates test cases that cover Age boundary values and Income boundary values but generates no test cases combining multiple fields.

Which limitation is PRIMARILY demonstrated?

A. Hallucination
B. Reasoning error (combinatorial oversight)
C. Context window constraint
D. Bias

---

### Q20 (GenAI-1.2.1, K1)

Which of the following is a VALID capability of generative AI in defect reporting?

A. Automatically fixing production defects without human approval
B. Drafting bug reports from observed failure descriptions and screenshots
C. Guaranteeing that all drafted bug reports are 100% accurate
D. Replacing the need for a defect tracking system

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** Machine learning is defined as a subset of AI where systems learn patterns from data rather than following explicitly programmed rules. A describes traditional programming. C describes generative AI, which is a specific application of ML, not ML itself. D is incorrect because manual labeling of all inputs is impossible and not how ML works.

### Q2
**Answer: B**

**Rationale:** Classifying test cases into categories (high risk vs low risk) is a discriminative task — predicting a label. Generating new test cases from requirements is a generative task — creating new content. A is wrong because not all AI is generative. C reverses the classifications. D is wrong because processing text does not make a model discriminative.

### Q3
**Answer: B**

**Rationale:** LLMs generate content by predicting the next token in a sequence given prior context. A is wrong because context windows vary by model (e.g., 4K to 200K+ tokens). C is wrong because in-context learning allows adaptation without retraining. D is wrong because LLMs do not execute code; they generate text that may represent code.

### Q4
**Answer: C**

**Rationale:** Generating synthetic test data is a well-established GenAI capability. A overstates capability — 100% coverage cannot be guaranteed. B overstates — human testers are required for compliance audits. D describes an unsafe practice unrelated to GenAI capability.

### Q5
**Answer: C**

**Rationale:** The scenario illustrates iterative refinement (improving prompts over time) and the importance of rich context (adding requirements, examples, constraints). A contradicts the syllabus principle of human oversight. B contradicts iterative refinement. D is factually incorrect — LLMs do not self-update from prompts.

### Q6
**Answer: B**

**Rationale:** Inventing a non-existent function is a classic hallucination — confident, plausible-sounding false information. A (context window) would cause truncation, not invention. C (temperature) affects randomness, not factual accuracy. D (knowledge cutoff) means missing recent info, not inventing APIs.

### Q7
**Answer: B**

**Rationale:** Testers remain accountable for quality and must validate all GenAI outputs. A is incorrect — cost is not the primary reason. C understates the requirement — oversight is needed universally, not just in the EU. D is trivially true but not the reason oversight is required.

### Q8
**Answer: B**

**Rationale:** The core distinction is that discriminative models classify or predict, while generative models create new content. A is partially true but not the defining difference (generative models can also use labeled data). C and D are incorrect generalizations.

### Q9
**Answer: B**

**Rationale:** Higher temperature increases randomness and creativity. Lower temperature makes output more deterministic. C is nonsense. D is false — higher temperature can increase hallucinations.

### Q10
**Answer: B**

**Rationale:** Final release decisions require human judgment considering business, risk, and regulatory factors that GenAI cannot fully assess. A, C, and D are all valid GenAI applications in testing.

### Q11
**Answer: C**

**Rationale:** A 500-page document exceeds most LLM context windows, causing truncation. The model isn't hallucinating (inventing content) — it's simply unable to process the full input. B and D are not relevant to this scenario.

### Q12
**Answer: B**

**Rationale:** Feeding PII into a public LLM API violates the "Privacy and security first" principle. The scenario describes a clear data protection risk that must be mitigated before any GenAI use.

### Q13
**Answer: C**

**Rationale:** Supervised learning explicitly uses labeled input-output pairs. Unsupervised learning uses unlabeled data. Reinforcement learning uses rewards/penalties from environment interaction. Transfer learning reuses pre-trained models but is not defined by labeled pairs.

### Q14
**Answer: C**

**Rationale:** Consistently favoring one user scenario over others reflects bias in the training data (which overrepresents certain conditions). A would involve inventing non-existent requirements. B would involve logical errors in reasoning. D is unrelated.

### Q15
**Answer: B**

**Rationale:** Generating automation code from natural language is a core GenAI capability. A and D overstate autonomy. C overstates quality — generated code always requires human review.

### Q16
**Answer: B**

**Rationale:** Deep learning is defined as a subset of ML that uses neural networks with multiple layers to learn hierarchical data representations. A describes rule-based programming. C describes an impractical manual approach. D describes data compression, which is unrelated to deep learning.

### Q17
**Answer: B**

**Rationale:** A 120,000-word document far exceeds the context window of most LLMs (typically 4K-200K tokens; 120,000 words is approximately 160,000+ tokens). The primary limitation is the context window constraint. Hallucination, non-determinism, and bias are secondary concerns here.

### Q18
**Answer: A**

**Rationale:** The deprecated endpoints indicate the model's training data predates the recent framework release. This directly illustrates the "know the model's limits" principle, specifically the knowledge cutoff limitation. While human-in-the-loop (D) would catch this, the root cause is the model's lack of current knowledge. The tester should have provided current API documentation in the prompt.

### Q19
**Answer: B**

**Rationale:** The model correctly identified individual field boundary values but failed to consider interactions between fields (combinatorial testing). This is a reasoning error — the model did not hallucinate, exceed context, or show bias. It simply failed to reason about the combinatorial space of multi-field interactions.

### Q20
**Answer: B**

**Rationale:** Drafting bug reports from failure descriptions is a well-established GenAI capability. A overstates autonomy (production fixes require human approval). C overstates quality (no output is guaranteed accurate). D overstates capability (defect tracking systems are still needed).
