# 📝 CT-GenAI Mock Exam 1

**Instructions:**
- 40 questions
- 60 minutes
- Select the single best answer for each question
- Closed book — no notes or references
- No negative marking; answer every question

---

## ❓ Questions

### 🔷 Q1

Which of the following BEST describes the primary difference between discriminative and generative models?

A. Discriminative models require more training data
B. Discriminative models predict labels or classifications; generative models create new content
C. Generative models are always based on neural networks
D. Discriminative models are only used for image recognition

### 🔷 Q2

A test team uses an LLM to generate test cases for a loan application system. The model consistently generates test cases assuming the applicant is employed full-time with a stable salary. No test cases cover gig workers, part-time employees, or unemployed applicants.

Which risk does this BEST illustrate?

A. Hallucination
B. Reasoning error
C. Bias
D. Security vulnerability

### 🔷 Q3

Which prompt engineering technique involves providing 2-3 examples of desired input-output pairs to guide the model's response?

A. Zero-shot prompting
B. Few-shot prompting
C. Chain-of-thought prompting
D. Prompt chaining

### 🔷 Q4

An organization wants to use a public LLM API to analyze internal system logs that may contain IP addresses and user IDs.

Which mitigation BEST protects privacy?

A. Trust the LLM provider's encryption promises
B. Anonymize or remove identifiers before sending data to the API
C. Increase the temperature to randomize the data
D. Share only logs from non-production environments

### 🔷 Q5

In a RAG architecture, what is the purpose of the embedding model?

A. To fine-tune the LLM on domain-specific data
B. To convert documents into high-dimensional vectors for similarity search
C. To encrypt sensitive data before storage
D. To reduce the size of the LLM for faster inference

### 🔷 Q6

Which statement about fine-tuning is TRUE?

A. Fine-tuning updates the LLM's internal weights using domain-specific data
B. Fine-tuning is the same as RAG
C. Fine-tuning requires no training data
D. Fine-tuning eliminates the need for human oversight

### 🔷 Q7

A tester notices that an LLM-generated test script contains method names that switch between camelCase and snake_case within the same file.

Which evaluation criterion is violated?

A. Correctness
B. Consistency
C. Relevance
D. Feasibility

### 🔷 Q8

Which regulation establishes a risk-based framework for AI systems in the European Union?

A. ISO/IEC 42001
B. GDPR
C. EU AI Act
D. NIST AI RMF

### 🔷 Q9

A test team needs to generate boundary value test cases for a field accepting integer values from 10 to 1000. The model is asked to generate test cases without any examples.

Which prompt engineering technique is being used?

A. Few-shot prompting
B. Chain-of-thought prompting
C. Zero-shot prompting
D. System prompting

### 🔷 Q10

Which of the following is a key component of LLMOps?

A. Eliminating all human reviewers from the process
B. Prompt versioning, model evaluation, and output monitoring
C. Using a single LLM for all organizational tasks
D. Avoiding documentation to reduce overhead

### 🔷 Q11

An LLM generates a test case that references a non-existent API endpoint called `/v3/processOrder`. The actual endpoint is `/v2/processOrder`.

Which limitation does this illustrate?

A. Context window constraint
B. Hallucination
C. Bias
D. Reasoning error

### 🔷 Q12

Which strategy BEST reduces the environmental impact of using GenAI for testing?

A. Always use the largest available foundation model
B. Cache common responses and use smaller models when adequate
C. Run every prompt three times and select the best output
D. Disable all output filtering to reduce computation

### 🔷 Q13

In which phase of GenAI adoption should an organization run controlled experiments with 1-2 well-defined testing tasks?

A. Assessment and Foundation
B. Pilot and Experimentation
C. Scaling and Integration
D. Optimization and Maturity

### 🔷 Q14

A test manager is introducing GenAI to a team of experienced manual testers. Several testers express concern that AI will replace them.

Which change management strategy is MOST effective?

A. Announce that manual testing will be eliminated in six months
B. Emphasize that GenAI augments their expertise and involve them in pilot design
C. Ignore the concerns and mandate tool usage
D. Transfer all concerned testers to other departments

### 🔷 Q15

Which architectural approach is BEST when an organization needs to trace generated test case answers back to specific requirement documents?

A. Fine-tuning on all requirement documents
B. Retrieval-Augmented Generation (RAG)
C. Zero-shot prompting with no document references
D. Direct API calls to a general-purpose LLM

### 🔷 Q16

A prompt asks an LLM to "generate test cases for a login feature." The output includes UI design suggestions, security architecture advice, and only 1 actual test case.

What is the primary weakness of this prompt?

A. The model needs fine-tuning
B. The task is not specific enough and lacks constraints
C. The temperature is too low
D. Zero-shot prompting is inappropriate for all tasks

### 🔷 Q17

Which of the following is a valid mitigation for reasoning errors when using an LLM to calculate risk scores?

A. Increase the temperature to 1.0
B. Use chain-of-thought prompting to make reasoning steps explicit
C. Remove all constraints from the prompt
D. Use a smaller model to reduce complexity

### 🔷 Q18

An attacker places hidden instructions in a requirements document that is uploaded to a testing team's RAG system. When testers query the system, the LLM leaks internal API credentials.

Which security risk does this illustrate?

A. Direct prompt injection
B. Indirect prompt injection
C. Model inversion
D. Data poisoning

### 🔷 Q19

Which statement about the EU AI Act is TRUE?

A. It only applies to AI systems developed in the United States
B. It classifies AI systems by risk level and imposes obligations on high-risk systems
C. It prohibits all use of AI in healthcare
D. It replaces all existing ISO standards for software quality

### 🔷 Q20

A testing team runs thousands of prompts daily. Which LLMOps activity would help identify if prompt lengths have grown unexpectedly, causing costs to increase?

A. Red teaming
B. Prompt versioning and length tracking
C. Model fine-tuning
D. Adversarial testing

### 🔷 Q21

Which of the following is a characteristic of a foundation model?

A. It is trained for one specific testing task only
B. It is a large, general-purpose model pre-trained on broad data and adaptable to many tasks
C. It cannot be used without immediate fine-tuning
D. It has no context window limitations

### 🔷 Q22

A team wants to reduce hallucinations in generated test oracles. Which approach is MOST effective?

A. Increase the temperature to encourage diverse outputs
B. Use RAG grounded in verified requirement documents
C. Remove all examples from prompts
D. Use the smallest available LLM

### 🔷 Q23

Which of the following BEST explains why human oversight is required when using GenAI for testing?

A. LLMs are too slow without human monitoring
B. Testers remain accountable for quality and must validate generated artifacts
C. Human oversight is only needed for the first month of use
D. LLMs cannot generate text longer than 100 words

### 🔷 Q24

A test organization is adopting GenAI. Which activity belongs in the Assessment phase?

A. Deploying LLM APIs to all testers
B. Evaluating current testing processes, pain points, and data availability
C. Eliminating all manual test design processes
D. Fine-tuning a custom model on proprietary test data

### 🔷 Q25

Which architectural approach is MOST appropriate for a regulated healthcare organization that cannot allow patient data to leave its data center?

A. Public LLM API with encrypted connections
B. On-premise deployment of an open-weight model
C. RAG using a third-party vector database
D. Fine-tuning a public model via a cloud API on patient data

### 🔷 Q26

A generated test case states: "Enter invalid email format 'user@' and verify the system accepts it with a warning."

Which types of problems are present? (Choose the TWO that apply)

A. Hallucination
B. Incorrect expected result
C. Context window violation
D. Privacy breach

### 🔷 Q27

Which of the following is a valid strategy for managing change when adopting GenAI in testing?

A. Mandate immediate full adoption with no training
B. Provide prompt engineering training and redefine career paths to show GenAI as a skill enhancer
C. Keep the initiative secret until it is fully deployed
D. Eliminate all testers who express skepticism

### 🔷 Q28

What is the primary purpose of a system prompt?

A. To provide specific input data for a single query
B. To set overall behavior, role, and constraints for an LLM session
C. To encrypt the conversation between user and model
D. To store the model's training data

### 🔷 Q29

A testing team uses GenAI to generate synthetic test data. Which risk should they actively monitor for?

A. The data may accidentally reproduce patterns from real individuals in the training data
B. Synthetic data always has better coverage than real data
C. Synthetic data eliminates the need for data governance
D. Synthetic data cannot contain any invalid values for negative testing

### 🔷 Q30

Which statement about temperature in LLMs is TRUE?

A. Higher temperature produces more deterministic outputs
B. Lower temperature produces more random outputs
C. Higher temperature increases creativity and variability
D. Temperature has no effect on output style

### 🔷 Q31

In LLMOps, what is the purpose of red teaming?

A. To reduce the model's parameter count
B. To proactively test the model with adversarial inputs to discover harmful behaviors
C. To eliminate all human reviewers from the pipeline
D. To automatically fine-tune the model on user feedback

### 🔷 Q32

A team uses a fine-tuned model for test case generation. The requirements change every two weeks.

What is the PRIMARY disadvantage of using fine-tuning in this scenario?

A. The model cannot generate text
B. The model must be retrained frequently, which is costly and slow
C. Fine-tuned models have no context window
D. RAG cannot handle document updates

### 🔷 Q33

Which of the following is a key principle of leveraging GenAI in testing?

A. GenAI outputs should be used without any human review
B. Iterative refinement and rich context improve GenAI outputs
C. Prompts should never be changed after initial creation
D. LLMs automatically improve their models with each user prompt

### 🔷 Q34

An organization wants to implement a test assistant that answers questions about testing procedures by referencing the latest internal wiki pages.

Which architectural approach is BEST?

A. Fine-tuning a model on last year's wiki dump
B. Retrieval-Augmented Generation (RAG) with live document ingestion
C. Zero-shot prompting without any document access
D. Building a custom model from scratch

### 🔷 Q35

Which of the following is a valid reason to choose on-premise LLM deployment?

A. It requires no technical expertise to maintain
B. It provides full data control for sensitive information
C. It always produces higher quality outputs than public APIs
D. It eliminates the need for model updates

### 🔷 Q36

A test team receives LLM-generated test cases that are generally correct but consistently omit negative scenarios and error paths.

Which prompt refinement is MOST likely to solve this?

A. Add: "For each positive test case, include at least one corresponding negative or error-path test case"
B. Increase the temperature to 0.9
C. Remove the constraints section entirely
D. Ask the model to generate fewer test cases

### 🔷 Q37

Which standard provides an AI-specific quality model that defines characteristics such as accuracy, robustness, and fairness?

A. ISO/IEC 42001
B. ISO/IEC 25059
C. EU AI Act
D. OWASP LLM Top 10

### 🔷 Q38

A testing organization is scaling GenAI use across multiple teams. Which governance measure is MOST important?

A. Allowing each team to choose any LLM without approval
B. Establishing clear accountability for AI-generated artifact quality and data sharing policies
C. Eliminating all documentation because AI generates everything
D. Preventing testers from providing feedback on AI outputs

### 🔷 Q39

Which of the following BEST describes a reasoning error in an LLM output?

A. Inventing a non-existent API endpoint
B. Incorrectly calculating the boundary value for a range
C. Generating biased test data
D. Exposing sensitive information in the output

### 🔷 Q40

A test director wants to communicate the GenAI adoption vision to the testing organization. Which message is MOST aligned with ISTQB principles?

A. "GenAI will replace most testers within two years"
B. "GenAI augments tester expertise, automating routine tasks so testers can focus on complex validation and risk analysis"
C. "We are adopting GenAI to eliminate all manual testing immediately"
D. "Testers who do not use GenAI will be transferred to other departments"
