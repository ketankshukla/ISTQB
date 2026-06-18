# 📘 Chapter 2 — Usability Testing Process: Lessons

---

## 🧪 2.1 Types of Usability Testing

### 🖱️ Formative Usability Testing

**Definition:** Testing conducted during the design and development phases to identify and fix usability problems early.

**Purpose:**
- Discover usability issues before the product is finalized
- Inform design decisions
- Iterate and improve the user interface

**Characteristics:**
- Conducted early and repeatedly
- Fewer participants (3-8 per round)
- Focus on finding problems, not measuring metrics
- Qualitative data is often most valuable
- May use low-fidelity prototypes (paper, wireframes)

**When to Use:**
- During design phase
- After major design changes
- Before significant development investment

### 🖱️ Summative Usability Testing

**Definition:** Testing conducted on the final (or near-final) product to evaluate it against defined criteria.

**Purpose:**
- Measure usability against benchmarks
- Compare against competitors or previous versions
- Validate that the product meets usability requirements
- Generate quantitative metrics for reporting

**Characteristics:**
- Conducted late in development
- More participants (15-30+)
- Focus on measurement and comparison
- Quantitative data is primary
- Uses high-fidelity, functional prototypes or final product

**When to Use:**
- Before release
- For regulatory compliance
- To validate design improvements

### 🔷 Comparison

| Aspect | Formative | Summative |
|--------|-----------|-----------|
| Timing | During development | Near completion |
| Goal | Find and fix problems | Measure and validate |
| Participants | Few (3-8) | Many (15-30+) |
| Data type | Primarily qualitative | Primarily quantitative |
| Prototype fidelity | Low to medium | High |
| Output | Problem list, design recommendations | Metrics, benchmark comparison |

---

## 🗓️ 2.2 Planning the Test

### 🎯 Define Test Objectives

**Example Objectives:**
- "Identify navigation problems in the checkout process"
- "Measure task success rate for first-time users"
- "Compare the new design to the old design"
- "Evaluate whether users understand the new feature"

**Good objectives are:**
- Specific (not "test the app")
- Measurable (can be evaluated)
- Relevant (aligned with business goals)
- Time-bound (within the test scope)

### 🔷 Define Scope and Method

**Questions to Answer:**
- What parts of the product will be tested?
- What user tasks will be evaluated?
- What methods will be used (lab test, remote, unmoderated)?
- What metrics will be collected?

**Method Selection Criteria:**

| Method | Best For | Limitations |
|--------|----------|-------------|
| In-person moderated | Complex tasks, deep insights | Expensive, scheduling |
| Remote moderated | Geographic diversity, natural environment | Less control over environment |
| Remote unmoderated | Large sample, quantitative data | No probing, limited context |
| Guerrilla testing | Quick feedback, low budget | Limited rigor |

### 🔷 Define the User Profile

**Who Should Be Tested?**
- Representative of the actual user population
- Include diverse skill levels (novice to expert)
- Include users with different backgrounds
- Consider accessibility needs

**Screening Criteria:**
- Demographics (age, education, profession)
- Experience level (with similar products, with this domain)
- Technical proficiency
- Accessibility needs (if relevant)

### 🔷 Determine Sample Size

**Formative Testing:**
- 5 users typically find 85% of usability problems (Nielsen's research)
- 3-8 users per round is typical
- Multiple rounds of testing with fewer users is often better than one round with many

**Summative Testing:**
- Larger samples needed for statistical confidence
- 15-30+ participants depending on variability
- Use power analysis to determine required sample size

---

## ⭐ 2.3 Preparation

### 🎬 Create Test Scenarios and Tasks

**Scenario:**
- A realistic context that sets up the task
- Example: "You need to book a flight from New York to London for a business trip next week."

**Task:**
- The specific action the participant should perform
- Example: "Find and book the cheapest direct flight departing Monday."

**Good Tasks Are:**
- Realistic and relevant to actual user goals
- Specific enough to be evaluated
- Open-ended (not leading the user to specific clicks)
- Ordered logically (from simple to complex)

**Example Task List:**

| Task | Difficulty | What It Tests |
|------|-----------|---------------|
| Create an account | Easy | Registration flow |
| Search for a product | Easy | Search functionality |
| Add item to cart | Easy | Core interaction |
| Apply a discount code | Medium | Form validation, discoverability |
| Complete checkout | Medium | Multi-step process |
| Track an order | Medium | Post-purchase experience |
| Return an item | Hard | Complex workflow |

### 🔷 Prepare the Test Environment

**Lab Testing:**
- Quiet room with minimal distractions
- Comfortable seating and appropriate lighting
- Computer/device with screen recording
- Observation room (one-way mirror or video feed)
- Think-aloud protocol setup

**Remote Testing:**
- Stable internet connection for both parties
- Screen sharing software
- Recording capability
- Backup communication method (phone)

**Materials:**
- Informed consent form
- Pre-test questionnaire (demographics, experience)
- Post-test questionnaire (SUS, task ratings)
- Prototype or test version of the product

### 🔷 Pilot Testing

**Purpose:**
- Verify tasks are clear and achievable
- Check timing estimates
- Ensure technology works
- Refine the script and questions

**Who Should Pilot:**
- Someone not involved in the test design
- Ideally someone similar to target users
- At least one pilot before the first real session

---

## ⭐ 2.4 Execution

### 🔷 Informed Consent

**Before any testing, participants must:**
- Understand the purpose of the test
- Know what data will be collected
- Understand their rights (can stop anytime)
- Sign a consent form
- Be assured their performance is not being judged personally

**Key Points to Communicate:**
- "We are testing the product, not you"
- "There are no right or wrong answers"
- "Your feedback will help us improve the product"
- "You can stop at any time"

### 🎯 Moderation Techniques

**Think-Aloud Protocol:**
- Ask participants to verbalize their thoughts as they work
- "Please speak your thoughts aloud as you work"
- Pros: Reveals reasoning and confusion
- Cons: May slow performance, feels unnatural

**Probing:**
- Ask follow-up questions to understand behavior
- "What are you thinking right now?"
- "What did you expect to happen?"
- Avoid leading questions: "Was that button hard to find?"

**Co-Discovery:**
- Two participants work together and discuss
- Natural conversation reveals thought processes
- Reduces the awkwardness of think-aloud
- Works well for collaborative tasks

**Retrospective Testing:**
- Participant completes tasks silently
- Reviews recording afterward and comments
- More natural task performance
- Requires good memory of thought process

### 🗃️ Data Collection

**Quantitative Data:**
- Task success rate (completed / attempted)
- Time on task
- Number of errors
- Number of clicks/taps
- Satisfaction ratings
- SUS scores

**Qualitative Data:**
- Verbal comments (think-aloud)
- Facial expressions
- Body language
- Confusion points
- Workarounds used
- Expectations vs. reality

**Recording:**
- Screen recording (what they did)
- Audio recording (what they said)
- Video recording (facial expressions, gestures)
- Eye tracking (where they looked — optional)

---

## 🔬 2.5 Analysis

### 🗃️ Analyzing Quantitative Data

**Task Success Rate:**
```
Success Rate = (Number of tasks completed successfully) / (Total tasks attempted) x 100%
```

**Time on Task:**
- Average time across all participants
- Compare against benchmarks or previous versions

**Error Rate:**
```
Error Rate = (Number of errors) / (Number of opportunities for error) x 100%
```

**SUS Scoring:**
- 10 items, 5-point Likert scale
- For odd-numbered items (1, 3, 5, 7, 9): subtract 1 from the response
- For even-numbered items (2, 4, 6, 8, 10): subtract the response from 5
- Multiply the total by 2.5
- Result is a score between 0 and 100
- Average SUS score across all products is ~68

### 🗃️ Analyzing Qualitative Data

**Affinity Diagramming:**
1. Write each observation on a sticky note
2. Group related observations into themes
3. Name each group
4. Identify the most frequent and severe issues

**Severity Ratings:**

| Severity | Description | Example |
|----------|-------------|---------|
| Cosmetic | Minor visual issue | Slight misalignment |
| Minor | Causes brief confusion | Unclear label |
| Major | Significant task difficulty | User needs workaround |
| Critical | Prevents task completion | Dead-end navigation |

**Prioritization:**
- Frequency: How many participants encountered the issue?
- Severity: How much did it impact task completion?
- Ease of fix: How difficult is it to resolve?
- Business impact: Does it affect key user journeys?

---

## 📝 2.6 Reporting

### 📝 Report Structure

**1. Executive Summary:**
- Key findings in 1-2 paragraphs
- Overall usability score or recommendation
- Target audience: stakeholders, management

**2. Methodology:**
- What was tested, when, and with whom
- Test environment and setup
- Methods used

**3. Key Findings:**
- Major usability issues (with severity ratings)
- Positive findings (what worked well)
- Quantitative results (task success, time, SUS)

**4. Detailed Findings:**
- Each issue with:
  - Description
  - Severity
  - Frequency (% of participants affected)
  - Evidence (quotes, screenshots, video clips)
  - Recommendation

**5. Recommendations:**
- Prioritized list of suggested improvements
- Quick wins vs. major redesigns
- Estimated effort

**6. Appendices:**
- Raw data
- Participant demographics
- Test script
- Screenshot examples

### 📝 Audience-Appropriate Reporting

**For Developers:**
- Technical details, specific UI element references
- Screen recordings with timestamps
- Reproduction steps

**For Product Managers:**
- Business impact of issues
- Comparison to competitors
- Prioritized recommendations with effort estimates

**For Executives:**
- High-level summary with key metrics
- SUS score and benchmark comparison
- Business case for recommended changes

---

## 💡 Worked Examples

### 💡 Worked Example 1: Planning a Formative Test

**Product:** Mobile banking app
**Objective:** Identify problems in the bill payment feature
**Method:** In-person moderated think-aloud
**Participants:** 6 first-time users, ages 25-55
**Tasks:**
1. Add a new payee
2. Schedule a one-time payment
3. Set up a recurring payment
4. View payment history
5. Cancel a scheduled payment

**Timeline:**
- Week 1: Plan and recruit
- Week 2: Prepare materials and pilot
- Week 3: Conduct 6 sessions (1 hour each)
- Week 4: Analyze and report

### 💡 Worked Example 2: Severity Rating

**Issue:** "Users could not find the 'Forgot Password' link"

**Analysis:**
- Frequency: 4 out of 6 participants (67%)
- Impact: 2 participants gave up and called support
- Severity: Critical (prevents login for some users)
- Recommendation: Move link below password field with clear styling

**Priority:** High — affects core functionality, high frequency, easy to fix

### 💡 Worked Example 3: SUS Calculation

**Participant responses (1-5 scale):**

| Item | Response | Calculation |
|------|----------|-------------|
| 1 (odd) | 4 | 4 - 1 = 3 |
| 2 (even) | 2 | 5 - 2 = 3 |
| 3 (odd) | 4 | 4 - 1 = 3 |
| 4 (even) | 1 | 5 - 1 = 4 |
| 5 (odd) | 3 | 3 - 1 = 2 |
| 6 (even) | 2 | 5 - 2 = 3 |
| 7 (odd) | 4 | 4 - 1 = 3 |
| 8 (even) | 2 | 5 - 2 = 3 |
| 9 (odd) | 3 | 3 - 1 = 2 |
| 10 (even) | 1 | 5 - 1 = 4 |
| **Total** | | **30** |

**SUS Score:** 30 x 2.5 = 75

**Interpretation:** Above average (68 = average). Good usability but room for improvement.
