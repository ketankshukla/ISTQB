# Chapter 3 — Usability Evaluation Methods: Lessons

---

## 3.1 User-Based Evaluation Methods

User-based methods involve actual or representative users interacting with the product.

### Think-Aloud Protocol

**Description:** Participants verbalize their thoughts, feelings, and reasoning while performing tasks.

**How It Works:**
1. Participant is given tasks to complete
2. Participant is instructed to "say everything that comes to mind"
3. Facilitator observes and may ask clarifying questions
4. Session is recorded for later analysis

**Strengths:**
- Reveals user reasoning and mental models
- Identifies confusion points that might not be visible from behavior alone
- Rich qualitative data

**Weaknesses:**
- Can slow task performance (not measuring true efficiency)
- Feels unnatural to some participants
- May cause participants to focus on things they would normally ignore

**Best For:**
- Understanding WHY users struggle
- Identifying mismatches between user expectations and system behavior
- Early-stage formative testing

**Facilitator Tips:**
- "Please keep talking" as a gentle reminder
- Ask "What are you thinking?" if the participant goes silent
- Do not answer questions — instead ask "What would you expect to happen?"

### Co-Discovery

**Description:** Two participants work together on tasks and discuss their thought process naturally.

**How It Works:**
1. Pair of participants is given tasks
2. They collaborate to complete the tasks
3. Their natural conversation reveals reasoning
4. Facilitator observes with minimal intervention

**Strengths:**
- More natural than solo think-aloud (conversation is normal social behavior)
- Participants build on each other's observations
- Less awkward for introverted participants

**Weaknesses:**
- One participant may dominate
- Pair dynamics may not represent individual behavior
- Scheduling is more complex (need two participants at once)

**Best For:**
- Collaborative or social features
- When think-aloud feels too artificial
- Testing with children or less verbal participants

### Retrospective Testing

**Description:** Participants complete tasks silently, then review a recording and comment.

**How It Works:**
1. Participant completes tasks normally (no think-aloud)
2. Immediately afterward, participant watches a recording of their session
3. Participant explains what they were thinking at each point
4. Facilitator asks questions about specific moments

**Strengths:**
- More natural task performance (no verbalization interference)
- Participant can see exactly what they did
- Can pause and discuss specific moments

**Weaknesses:**
- Relies on participant's memory of their thoughts
- Time-consuming (session + review)
- May not capture real-time emotional reactions

**Best For:**
- Tasks where natural speed is important
- When think-aloud significantly changes behavior
- Testing with experts whose workflow should not be disrupted

### Moderated vs. Unmoderated Testing

**Moderated Testing:**
- A facilitator is present (in-person or remote)
- Can ask follow-up questions and probe
- Can adapt the session based on participant behavior
- More expensive and time-consuming
- Better for deep insights

**Unmoderated Testing:**
- Participant completes tasks independently
- Typically done remotely via a testing platform
- Cannot probe or adapt in real-time
- Much faster and cheaper
- Good for large samples and quantitative data

---

## 3.2 Expert-Based Evaluation Methods

Expert-based methods use usability specialists to evaluate the product without users.

### Heuristic Evaluation

**Description:** Experts evaluate an interface against established usability principles (heuristics).

**How It Works:**
1. 3-5 usability experts independently review the interface
2. Each expert identifies violations of the heuristics
3. Experts aggregate their findings
4. Issues are rated by severity

**Heuristics Used:**
- Nielsen's 10 heuristics (most common)
- Shneiderman's 8 golden rules
- Organization-specific heuristics

**Strengths:**
- Fast (1-2 hours per expert)
- Inexpensive (no participant recruitment)
- Can be done early (on prototypes)
- Experts find problems that users might not articulate

**Weaknesses:**
- Does not reflect actual user behavior
- Experts may find issues that real users do not care about
- Cannot measure satisfaction or emotional response
- Number of experts matters (3-5 recommended)

**Best For:**
- Early design evaluation
- Quick checks between user testing rounds
- When user testing is not feasible

### Cognitive Walkthrough

**Description:** Experts simulate a user's problem-solving process at each step of a task to evaluate learnability.

**How It Works:**
1. Define a user profile and task
2. For each step in the task, the expert asks four questions:
   - Will the user try to achieve the right action?
   - Will the user notice the correct action is available?
   - Will the user associate the correct action with the desired effect?
   - If the correct action is performed, will the user see that progress is being made?
3. If any answer is "no," a usability problem is identified

**Strengths:**
- Focuses specifically on learnability
- Identifies why new users might struggle
- Can be done without users
- Good for evaluating first-time use scenarios

**Weaknesses:**
- Time-consuming for complex tasks
- Requires understanding of the target user's knowledge
- May miss issues that only appear with real users
- Focuses on learnability, not efficiency or satisfaction

**Best For:**
- Evaluating new user onboarding
- Testing walk-up-and-use interfaces
- When the primary concern is first-time learnability

### Guideline Review (Guideline-Based Review)

**Description:** Experts evaluate a product against a specific set of documented guidelines or standards.

**How It Works:**
1. Select appropriate guidelines (e.g., ISO 9241, WCAG, platform guidelines)
2. Systematically check each guideline against the product
3. Document violations and their severity

**Common Guidelines:**
- ISO 9241 (usability standards)
- WCAG (accessibility guidelines)
- Apple Human Interface Guidelines
- Google Material Design Guidelines
- Corporate style guides

**Strengths:**
- Objective criteria (less subjective than heuristics)
- Can be automated for some checks
- Ensures compliance with standards
- Good for accessibility testing

**Weaknesses:**
- May be too rigid
- Does not capture user experience nuances
- Guidelines may conflict with each other
- Some guidelines are outdated

**Best For:**
- Compliance testing
- Accessibility audits
- Ensuring platform consistency

### Pluralistic Walkthrough

**Description:** A review method involving users, developers, and usability specialists working together.

**How It Works:**
1. Group walks through a scenario or prototype together
2. Each participant (user, developer, specialist) contributes their perspective
3. Users explain what they would do
4. Developers explain design rationale
5. Specialists facilitate and identify issues

**Strengths:**
- Multiple perspectives in one session
- Builds empathy between developers and users
- Efficient use of time
- Users contribute real-world perspective

**Weaknesses:**
- Users may be intimidated by experts
- Group dynamics may bias individual opinions
- Less detailed than individual expert reviews
- Can become unfocused

**Best For:**
- Cross-functional team alignment
- Early design discussions
- Building shared understanding

---

## 3.3 Method Comparison and Selection

### Comparison Matrix

| Criterion | Think-Aloud | Heuristic Eval | Cognitive Walkthrough | Guideline Review |
|-----------|-------------|----------------|----------------------|------------------|
| Cost | Medium | Low | Low-Medium | Low |
| Time | Medium | Fast | Medium | Medium |
| Need users | Yes | No | No | No |
| Need experts | No | Yes | Yes | Yes |
| Early design | Yes | Yes | Yes | Yes |
| Late design | Yes | Yes | Yes | Yes |
| Learnability focus | Yes | Yes | Yes | Yes |
| Efficiency focus | Yes | Limited | Limited | Limited |
| Satisfaction focus | Yes | Limited | Limited | Limited |
| Real user data | Yes | No | No | No |

### Selection Guidelines

**Choose User-Based Methods When:**
- You need to understand real user behavior
- You need satisfaction and emotional data
- The product is in late-stage development
- You have budget for participant recruitment
- The user population is specialized or diverse

**Choose Expert-Based Methods When:**
- You need quick, inexpensive feedback
- The product is in early design stages
- You need to evaluate against standards
- You want to catch obvious issues before user testing
- Budget or time is limited

**Combine Methods for Best Results:**
1. Start with heuristic evaluation (quick, inexpensive)
2. Fix obvious problems
3. Conduct think-aloud user testing (validate with real users)
4. Fix remaining issues
5. Conduct summative testing (measure final usability)

---

## Worked Examples

### Worked Example 1: Method Selection

**Scenario:** A startup has a limited budget and needs quick feedback on a mobile app prototype before their next funding round.

**Analysis:**
- Budget constraint → Avoid expensive user recruitment
- Early stage (prototype) → Expert methods work well
- Need quick feedback → Fast method required
- **Recommendation:** Heuristic evaluation (3 experts, 2 hours each = 6 hours total, low cost)

**Follow-up:** After fixing heuristic issues, conduct a small user test (5 users) to validate before the funding presentation.

### Worked Example 2: Cognitive Walkthrough Application

**Scenario:** Evaluate whether a new user can successfully sign up for an account.

**Task:** Create an account on a website

**Step 1: User sees the homepage**
- Will the user try to sign up? Yes — "Sign Up" button is prominent
- Will the user notice it? Yes — large, contrasting button in the header
- Will they associate it with account creation? Yes — label is clear
- Will they see progress? N/A — this is the starting point

**Step 2: User clicks "Sign Up"**
- Will the user try to fill in the form? Yes — obvious form fields
- Will they notice all required fields? Maybe — required fields are marked with red asterisks, but some users may not understand this convention
- **ISSUE IDENTIFIED:** Not all users understand asterisk = required

**Step 3: User fills in the form**
- Will the user know what password is required? Maybe — password requirements are shown below the field, but in small text
- **ISSUE IDENTIFIED:** Password requirements may be missed

**Step 4: User submits the form**
- Will they see that account creation succeeded? Yes — clear confirmation message appears

**Summary:** Two potential learnability issues identified for new users.

### Worked Example 3: Heuristic Evaluation Findings

**Product:** E-commerce checkout process

**Evaluator findings against Nielsen's heuristics:**

| Heuristic | Finding | Severity |
|-----------|---------|----------|
| Visibility of status | No progress indicator showing checkout steps | Major |
| Match with real world | "SKU" used instead of "Product Code" | Minor |
| User control | No way to edit cart from checkout page | Major |
| Consistency | "Continue" button is green on one page, blue on next | Cosmetic |
| Error prevention | Credit card number accepts letters | Major |
| Recognition | Order summary is on a separate page, not visible while entering payment | Major |
| Flexibility | No guest checkout option | Major |
| Minimalist design | Checkout form has 15 fields when 8 would suffice | Minor |
| Error recovery | Generic error: "Payment failed" with no reason given | Critical |
| Help | No explanation of CVV field | Minor |

**Prioritized Issues:**
1. Critical: Payment error gives no reason
2. Major: No progress indicator
3. Major: No cart editing during checkout
4. Major: Credit card validation missing
5. Major: No guest checkout
