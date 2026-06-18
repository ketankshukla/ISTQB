# ♟️ CT-API Exam Strategy

This document contains tactics, time management advice, and trap-avoidance strategies for the CT-API exam.

---

## 🎓 Exam Format Overview

| Parameter | Value |
|-----------|-------|
| Questions | 40 multiple choice |
| Duration | 90 minutes |
| Pass mark | 65% (26 correct) |
| Question style | Single best answer |
| Book type | Closed book |

---

## ⭐ Time Budget

| Strategy | Time |
|----------|------|
| Total time | 90 minutes |
| Per question (average) | 2 minutes |
| Time for 40 questions | 80 minutes |
| Buffer for review | 10 minutes |

**Tactic:** If a question takes more than 3 minutes, flag it and move on. Return during the buffer time.

---

## ⭐ Chapter Weighting and Focus Areas

| Chapter | Weight | Approx. Questions | Key Focus |
|---------|--------|-------------------|-----------|
| 1. Introduction to API Testing | ~10% | ~4 | API types, HTTP, REST, SOAP, GraphQL |
| 2. API Test Analysis and Design | ~20% | ~8 | Test design techniques applied to APIs |
| 3. API Test Implementation and Execution | ~25% | ~10 | Test scripts, data, environments, defects |
| 4. API Test Automation | ~20% | ~8 | Frameworks, CI/CD, maintainability |
| 5. API Security and Performance Testing | ~15% | ~6 | Auth, injection, load, stress |
| 6. Contract Testing and Advanced Topics | ~10% | ~4 | Consumer-driven contracts, schema validation |

**Study priority:** Chapters 2 and 3 carry the most weight and require the deepest understanding.

---

## 🪜 K-Level Patterns

| K-Level | Definition | How It Appears | Strategy |
|---------|-----------|----------------|----------|
| K2 | Understand, explain | "Which of the following is...?" "What is the purpose of...?" | Recall concepts accurately |
| K3 | Apply | "Given a scenario, which approach is best?" | Map the scenario to the concept |
| K4 | Analyze | "Analyze the API and recommend..." | Evaluate trade-offs, eliminate weaker options |

**Tip:** K3 and K4 questions often present realistic API scenarios. The "best" answer may not be perfect — it is the most appropriate among the options.

---

## 🎓 Chapter-Specific Tactics

### 🌟 Chapter 1: Introduction to API Testing
- Know the differences between REST, SOAP, and GraphQL
- Understand HTTP methods and their appropriate use
- Memorize common status codes and their meanings
- Know API architecture patterns (monolith, microservices)

### 🔬 Chapter 2: API Test Analysis and Design
- Apply equivalence partitioning and boundary value to API parameters
- Understand how to derive test conditions from API specifications
- Know state transition testing for APIs with sessions
- Understand positive vs. negative testing for APIs

### 🔌 Chapter 3: API Test Implementation and Execution
- Know how to set up test environments for APIs
- Understand test data strategies (static, dynamic, generated)
- Know how to report and track API defects
- Understand the difference between API errors and test script errors

### ⚙️ Chapter 4: API Test Automation
- Know common API automation frameworks (REST Assured, Supertest, Requests)
- Understand data-driven testing for APIs
- Know CI/CD integration patterns for API tests
- Understand maintainability patterns for API automation

### ⚡ Chapter 5: API Security and Performance Testing
- Know authentication mechanisms (Basic, Bearer, OAuth2, API keys)
- Understand common API vulnerabilities (SQL injection, XSS, broken auth)
- Know performance test types for APIs (load, stress, soak, spike)
- Understand rate limiting and throttling testing

### 🔷 Chapter 6: Contract Testing and Advanced Topics
- Understand consumer-driven contract testing
- Know schema validation (JSON Schema, XML Schema, WSDL)
- Understand API versioning and backward compatibility testing
- Know API documentation tools (Swagger/OpenAPI)

---

## ⭐ Distractor Patterns

| Pattern | Example | How to Spot It |
|---------|---------|--------------|
| Absolute language | "Always use POST for all API operations" | Real answers use qualifiers like "typically," "usually" |
| Outdated practices | "SOAP is the only standard for web APIs" | REST and GraphQL are modern alternatives |
| Right concept, wrong context | Suggesting UI tests for API backend validation | Match the technique to the testing goal |
| True statement, but not the BEST answer | Multiple options are correct; pick the most complete | Read ALL options before selecting |
| Confusing similar terms | "Authentication" vs. "Authorization" | Know the precise definitions |

---

## 🎓 Before the Exam

**1 Week Before:**
- Re-read all `exam_traps.md` files
- Re-do all questions you previously missed
- Take Mock Exam 3 under timed conditions

**1 Day Before:**
- Light review only — no new material
- Review glossary terms
- Read the `exam_traps.md` summaries
- Get 7-8 hours of sleep

**Morning Of:**
- Eat a balanced breakfast
- Arrive early / set up your exam space
- Bring ID, water, and confidence

---

## 🎓 During the Exam

**Question Reading:**
1. Read the question stem completely
2. Identify what is being asked (best approach, first step, most appropriate)
3. Read all four options before selecting
4. Eliminate clearly wrong answers first
5. Choose the best remaining answer

**Scenario Questions:**
- Underline key facts: API type, authentication method, constraints
- Identify the chapter/concept being tested
- Eliminate answers that contradict the scenario
- Pick the most appropriate answer (not the perfect one)

**Flagging Strategy:**
- Flag questions you are uncertain about
- Never leave a question blank (there is no negative marking)
- Use the 10-minute buffer to review flagged questions
- Change an answer only if you find clear evidence — first instinct is often correct

---

## 🎓 Post-Exam

Whether you pass or not:
- Note which questions were difficult
- Identify weak chapters for future study
- Update the `PROGRESS_TRACKER.md` with your score

If you did not pass, use the feedback report to target your weak areas and re-take.
