# Chapter 4 — Reviews: Lessons

---

## 4.1 Review Types

### What is a Review?

A review is a static testing technique where a work product is examined by one or more people to find defects and improve quality. Reviews do not require executing the software.

**The Four Review Types (in order of formality):**

### Informal Review

- **Formality:** Lowest
- **Purpose:** Quick feedback, early defect detection
- **Process:** No formal process. Author asks colleagues for feedback.
- **Documentation:** Minimal or none
- **Participants:** Author + one or more colleagues
- **When to use:** Early drafts, time-critical situations, pair programming

**Example:** A developer asks a teammate to look over a requirements document before the formal review.

### Walkthrough

- **Formality:** Low to medium
- **Purpose:** Educate participants, gain consensus, find defects
- **Process:** Author leads the session, presenting the document and explaining it
- **Documentation:** Meeting notes, action items
- **Participants:** Author + stakeholders (reviewers may include experts from other teams)
- **When to use:** Complex documents, cross-team understanding, training new team members

**Key characteristic:** The AUTHOR leads the walkthrough. The focus is on explanation and understanding, not just defect finding.

**Example:** A business analyst walks the development team through the new requirements document, explaining each feature and answering questions.

### Technical Review

- **Formality:** Medium to high
- **Purpose:** Find defects, evaluate technical quality, ensure conformance to standards
- **Process:** Pre-meeting preparation required. Reviewers examine the document before the meeting.
- **Documentation:** Review report with findings, action items
- **Participants:** Trained reviewers with technical expertise. Author may or may not attend.
- **When to use:** Technical documents (designs, code, test plans), compliance requirements

**Key characteristic:** Reviewers come PREPARED. They have already examined the document and identified issues before the meeting.

**Example:** A technical review of an architecture design document where each reviewer has prepared comments on their assigned sections.

### Inspection

- **Formality:** Highest
- **Purpose:** Find the maximum number of defects, collect metrics, verify standards compliance
- **Process:** Strictly defined process with entry/exit criteria, trained moderators, checklists
- **Documentation:** Full inspection report, metrics (defect density, defect types)
- **Participants:** Trained inspectors, moderator, author, scribe. Author does not defend the work.
- **When to use:** Safety-critical systems, regulatory compliance, high-risk components

**Key characteristics:**
- Entry criteria must be met before inspection begins (document complete, standards followed)
- Author does NOT lead — the moderator leads
- Author does NOT defend — they listen and answer factual questions only
- Checklists are used to guide defect detection
- Metrics are collected and analyzed

**Example:** A formal inspection of safety-critical software code using a defined checklist (data usage, control flow, computation, interfaces) with trained inspectors.

---

## 4.2 Review Process

### The Five Stages of the Review Process

**Stage 1: Planning**
- Define the review objectives
- Select the review type
- Select participants and assign roles
- Allocate time and resources
- Define entry criteria
- Distribute the work product

**Stage 2: Preparation (Individual Review)**
- Each reviewer examines the work product independently
- Reviewers use checklists, standards, and previous defect data
- Defects and questions are logged
- Reviewers prepare comments and questions

**Stage 3: Review Meeting**
- Moderator leads the meeting
- Issues are discussed and clarified (not solved — solutions come later)
- Action items are assigned
- Meeting minutes are recorded
- For inspections: author does not defend; scribe records defects

**Stage 4: Rework**
- Author fixes identified defects
- Author addresses action items
- If major changes are needed, a re-review may be scheduled

**Stage 5: Follow-up**
- Verify that all defects have been fixed
- Verify that action items are complete
- Collect and analyze metrics
- Evaluate whether exit criteria are met
- Decide if another review cycle is needed

**Entry Criteria for Formal Reviews:**
- Document is complete and self-contained
- Document follows organizational standards
- Document has been spell-checked and formatted
- Previous review comments (if any) have been addressed
- Sufficient time is allocated for review

**Exit Criteria for Formal Reviews:**
- All identified defects have been addressed or deferred with approval
- Action items are completed
- Rework has been verified
- Metrics have been collected
- Decision is made: accept, accept with minor changes, or require re-review

---

## 4.3 Roles and Responsibilities

### The Five Review Roles

**1. Manager (Project Manager / Test Manager)**
- Decides whether to conduct the review
- Allocates resources and time
- Ensures review objectives align with project goals
- Monitors review effectiveness
- Does NOT participate in the actual review meeting

**2. Moderator / Leader**
- Plans and organizes the review
- Leads the review meeting
- Ensures the meeting stays focused and productive
- Manages time and keeps to the agenda
- For inspections: ensures the process is followed
- Is trained in the review process

**3. Author**
- Creates the work product being reviewed
- Answers factual questions during the review
- Does NOT defend the work product during formal reviews
- Fixes defects identified during rework
- Provides clarification when needed

**4. Reviewer**
- Examines the work product before the meeting
- Identifies defects, issues, and questions
- Participates in the review meeting
- Provides technical or domain expertise
- May be assigned specific focus areas (e.g., security, performance)

**5. Scribe (Recorder)**
- Records all issues, defects, and action items
- Ensures accurate documentation of the review meeting
- Prepares the review report
- May also be a reviewer

**Role Assignment by Review Type:**

| Role | Informal | Walkthrough | Technical Review | Inspection |
|------|----------|-------------|-----------------|------------|
| Manager | Optional | Optional | Yes | Yes |
| Moderator | Not needed | Author leads | Yes | Trained moderator |
| Author | Yes | Leads | May attend | Attends, does not defend |
| Reviewer | Peer | Stakeholders | Trained reviewers | Trained inspectors |
| Scribe | Not needed | Optional | Yes | Yes |

---

## 4.4 Success Factors

### What Makes Reviews Effective?

**1. Appropriate Review Type**
- Match the review type to the risk, formality needs, and time available
- Don't use an inspection for a low-risk draft document
- Don't use an informal review for safety-critical code

**2. Clear Objectives**
- Define what the review should achieve (find defects, gain consensus, train)
- Communicate objectives to all participants

**3. Trained Participants**
- Reviewers should be trained in the review process and in defect detection
- Moderators should be trained in facilitation
- Authors should understand their role

**4. Adequate Preparation Time**
- Reviewers need sufficient time to examine the document before the meeting
- Rule of thumb: 1-2 hours of preparation per 20 pages

**5. Focus on Defects, Not Solutions**
- The review meeting identifies WHAT is wrong, not HOW to fix it
- Solutions are discussed during rework, not during the meeting
- This keeps the meeting focused and efficient

**6. Manageable Size**
- Review documents in small chunks (typically 20-50 pages)
- Keep review meetings to 2 hours maximum
- Limit the number of reviewers (typically 3-7 for formal reviews)

**7. Checklists**
- Use checklists tailored to the document type
- Checklists help reviewers focus on common defect types
- Update checklists based on past defect data

**8. psychological Safety**
- Create an environment where reviewers feel safe to raise issues
- Reviews are about improving the product, not criticizing the author
- Avoid blame and personal criticism

**9. Metrics and Feedback**
- Collect metrics (defects found, defect density, preparation time)
- Analyze trends to improve the review process
- Provide feedback to reviewers and authors

**10. Follow-Up**
- Ensure all defects are addressed
- Verify rework quality
- Close the review loop

### Common Review Pitfalls

| Pitfall | Impact | Solution |
|---------|--------|----------|
| Author defends work | Meeting becomes argumentative | Remind author to listen; focus on the document |
| Reviewers unprepared | Meeting wastes time rescanning the document | Set preparation time requirements; verify readiness |
| Meeting drifts into problem-solving | Meeting exceeds time; fewer defects found | Table solutions for later; moderator keeps focus |
| Too many reviewers | Discussion becomes chaotic; time overruns | Limit to 3-7 reviewers |
| Reviewing immature documents | Wastes time on incomplete work | Enforce entry criteria |
| Personal criticism | Author becomes defensive; morale drops | Focus on the document, not the person |
| No follow-up | Defects are never fixed; quality doesn't improve | Assign action items with owners and deadlines |

---

## Worked Examples — Applying Chapter 4 Concepts

### Worked Example 1: Selecting Review Types

**Scenario:** A software project has the following documents ready for review. Select the most appropriate review type for each.

**A. A first draft of requirements for an internal reporting tool (low risk, tight deadline)**
- **Answer:** Informal review. Low risk + tight deadline = minimal process needed. Quick peer feedback is sufficient.

**B. The detailed design document for a payment processing module (high risk, regulatory requirements)**
- **Answer:** Inspection. High risk + regulatory requirements demand maximum formality, checklists, metrics, and trained inspectors.

**C. A test plan for a new feature, to be shared with the development team for alignment**
- **Answer:** Walkthrough. The purpose is education and consensus — the test lead (author) explains the plan to developers and answers questions.

**D. Code for a complex algorithm that has had defects in previous releases**
- **Answer:** Technical review. Technical expertise is needed to evaluate the algorithm. Reviewers prepare individually before the meeting.

---

### Worked Example 2: Review Process Application

**Scenario:** A team is conducting an inspection of a requirements document for a medical device. During the inspection meeting, the author starts explaining why each identified issue is not really a problem.

**Task:** Identify what is going wrong and what the moderator should do.

**Answer:**
1. **What is wrong:** The author is defending the document, which is inappropriate for an inspection. In inspections, the author listens, answers factual questions, and does not defend.
2. **Impact:** The meeting will become unproductive, argumentative, and will take longer. Defects may be missed because the author is justifying rather than acknowledging them.
3. **What the moderator should do:**
   - Politely remind the author of their role: "Let's record all issues first. The author will address them during rework."
   - Redirect the conversation: "Thank you for that context. Let's note this as a clarification needed and move to the next item."
   - If the author persists, take a break and speak with them privately
   - Escalate to the manager if necessary

---

### Worked Example 3: Review Roles in Action

**Scenario:** A formal inspection of an architecture document is planned. The team has:
- A senior developer who wrote the document
- A security architect
- A performance specialist
- A database administrator
- A project manager
- The QA lead

**Task:** Assign review roles and explain why.

**Answer:**

| Person | Role | Why |
|--------|------|-----|
| QA Lead | Moderator | Trained in inspection process; neutral; facilitates effectively |
| Senior Developer | Author | Created the document; answers questions; fixes defects later |
| Security Architect | Reviewer (security focus) | Examines architecture for security vulnerabilities and controls |
| Performance Specialist | Reviewer (performance focus) | Examines architecture for scalability, bottlenecks, efficiency |
| Database Administrator | Reviewer (data focus) | Examines data model, storage, replication, backup strategies |
| Project Manager | Manager | Decides whether to conduct the review; allocates resources; receives metrics |

**Scribe:** Could be the QA Lead (moderator) or a separate person. If the QA Lead moderates, a scribe should be assigned.

**Note:** The project manager does NOT participate in the inspection meeting. They decide that the inspection should happen, ensure resources are available, and review the metrics afterward.
