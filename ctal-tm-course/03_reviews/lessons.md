# 📘 Chapter 3 — Reviews: Lessons

---

## 🧪 3.1 Types of Reviews

### 🔎 Why Reviews Matter

Reviews (static testing) find defects early in the lifecycle when they are cheaper to fix. A defect found in requirements review costs 10-100x less to fix than one found in production.

### 🧪 Review Types

**1. Informal Review**

**Characteristics:**
- No formal process
- No written procedures or entry/exit criteria
- Can be as simple as a colleague reading a document and providing feedback
- No trained moderator required
- May not produce documented results

**When to use:**
- Quick feedback needed
- Low-risk documents
- Early drafts
- Tight schedule

**Example:** A developer asks a peer to review a user story before sprint planning.

---

**2. Walkthrough**

**Characteristics:**
- Led by the author of the document
- The author presents the document to reviewers
- Reviewers ask questions and make comments
- May include scenarios and simulated execution
- Can serve educational purposes (teaching the system to reviewers)

**Roles:**
- **Author:** Presents the document, answers questions
- **Reviewers:** Ask questions, identify issues, suggest improvements
- **Scribe (optional):** Records issues and decisions

**When to use:**
- When the author wants to gather diverse feedback
- For complex documents that benefit from discussion
- For educational purposes (new team members learning the system)
- When alternative approaches need to be evaluated

**Example:** A business analyst walks the development team through requirements to ensure shared understanding.

---

**3. Technical Review**

**Characteristics:**
- More formal than walkthrough
- Led by a trained moderator (not the author)
- Specific reviewers with relevant technical expertise
- Defined entry criteria (document must be complete enough to review)
- Documented results and defect log
- No management attendance (prevents pressure on reviewers)

**Roles:**
- **Moderator:** Plans, leads, and follows up on the review
- **Author:** Answers questions, clarifies intent
- **Reviewers:** Examine the document before the meeting, identify defects
- **Scribe:** Records defects and decisions

**When to use:**
- Technical documents (design, architecture, test plans)
- When objective technical assessment is needed
- When consensus on technical approach is required
- Documents that affect multiple teams

**Example:** A technical review of a system architecture document involving architects from different teams.

---

**4. Inspection**

**Characteristics:**
- The most formal type of review
- Led by a trained, independent moderator
- Uses defined rules and checklists
- Has formal entry and exit criteria
- Reviewers individually examine the document before the meeting
- Metrics are collected (defect density, review rate)
- Management does not attend the review meeting
- Author cannot dispute the finding of a defect (only its classification)
- Process improvement feedback is collected

**Roles:**
- **Moderator:** Trained facilitator; plans, leads, and follows up
- **Author:** Provides the document, answers questions
- **Reviewers:** Individually examine the document using checklists
- **Scribe:** Records all defects
- **Manager (not attending):** Receives summary results; ensures resources

**When to use:**
- Critical documents (safety-critical systems, regulatory submissions)
- When maximum defect detection is needed
- When process improvement data is valuable
- High-risk or high-cost-of-failure situations

**Example:** Inspection of safety-critical software requirements for an aircraft control system.

### 🧪 Comparison of Review Types

| Characteristic | Informal | Walkthrough | Technical Review | Inspection |
|----------------|----------|-------------|-----------------|------------|
| Planning | None | Some | Yes | Yes |
| Moderator | No | Author | Yes (trained) | Yes (trained, independent) |
| Preparation | None | Optional | Required | Required (individual) |
| Checklists | No | No | Maybe | Yes |
| Entry criteria | No | No | Yes | Yes |
| Exit criteria | No | No | Yes | Yes |
| Management attendance | Maybe | Maybe | No | No |
| Metrics collected | No | No | Maybe | Yes |
| Defect logging | Informal | Informal | Yes | Yes |
| Process improvement | No | No | Maybe | Yes |

---

## 🔎 3.2 The Review Process

### 🗓️ Stage 1: Planning

**Activities:**
- Define review objectives
- Select the document to be reviewed
- Select review type based on document importance and risk
- Select reviewers with appropriate expertise
- Schedule the review meeting (if applicable)
- Distribute the document and checklists
- Define entry criteria

**Entry Criteria Examples:**
- Document is complete and self-contained
- Document has been checked for spelling and grammar
- Previous review comments have been addressed (for re-reviews)
- Author is available to answer questions

### 🔎 Stage 2: Preparation (Individual Review)

**Activities:**
- Each reviewer examines the document independently
- Use checklists to guide examination
- Identify potential defects
- Note questions and comments
- Estimate time spent (for metrics)

**Checklists:**
- Requirements review: completeness, consistency, testability, traceability
- Design review: correctness, consistency, modularity, error handling
- Code review: coding standards, complexity, error handling, comments
- Test plan review: coverage, feasibility, completeness

### 🔎 Stage 3: Review Meeting

**Activities:**
- Moderator opens the meeting
- Author presents context (briefly)
- Reviewers discuss issues found during preparation
- New issues may be identified during discussion
- Scribe records all defects
- Do NOT try to solve defects in the meeting (identify only)
- Moderator ensures the meeting stays focused and on time
- Management is NOT present (for formal reviews)

**Meeting Duration:**
- Typically 1-2 hours maximum
- Review rate: 1-5 pages per hour for detailed reviews
- Longer meetings lead to reduced effectiveness

### 🔷 Stage 4: Rework

**Activities:**
- Author fixes identified defects
- Author may need to consult with reviewers for clarification
- Author documents changes made

### 🔷 Stage 5: Follow-Up

**Activities:**
- Moderator verifies that all defects have been addressed
- Check that no new defects were introduced during rework
- Collect metrics
- Document lessons learned
- Update checklists if new defect types were identified
- Determine if a re-review is needed

**Exit Criteria:**
- All defects have been addressed or dispositioned
- No critical defects remain
- Rework has been checked
- Metrics have been collected

---

## 🔎 3.3 Test Manager's Role in Reviews

### 🔎 Planning Reviews

The test manager should:
- Advocate for reviews as part of the test approach
- Ensure time and resources are allocated for reviews
- Identify which documents need to be reviewed
- Select appropriate review types based on risk
- Ensure reviewers have appropriate skills

### 🔎 Managing Reviews

The test manager should:
- Track review completion against the schedule
- Ensure review metrics are collected
- Use review metrics to assess document quality
- Ensure review findings are addressed
- Report review status to stakeholders

### 🔎 Participating in Reviews

The test manager may:
- Review test plans, test strategies, and test policies
- Review requirements for testability
- Review designs for test coverage implications
- Ensure testability is considered early

**Testability Review Checklist:**
- Are requirements clear and unambiguous?
- Are acceptance criteria defined?
- Are error conditions specified?
- Are interfaces documented?
- Can each requirement be traced to a test?
- Are non-functional requirements specified with measurable criteria?

---

## 🔎 3.4 Review Metrics

### 🔎 Why Collect Review Metrics?

- Measure review effectiveness
- Identify process improvement opportunities
- Estimate defect removal cost
- Compare review types and approaches
- Justify investment in reviews

### 🔎 Key Review Metrics

**1. Defect Density (in the document):**
```
Defect Density = Number of Defects Found / Size of Document
```
Example: 20 defects in 50 pages = 0.4 defects per page

**2. Review Efficiency (defect detection rate):**
```
Review Efficiency = Number of Defects Found / Review Effort (hours)
```
Example: 20 defects found in 10 hours = 2 defects per hour

**3. Review Rate (speed of review):**
```
Review Rate = Size of Document / Review Effort
```
Example: 50 pages reviewed in 10 hours = 5 pages per hour

**Note:** Review rate that is too high (>10 pages/hour for requirements) may indicate superficial review.

**4. Defect Removal Efficiency:**
```
Defect Removal Efficiency = (Defects Found in Review / Total Defects in Document) × 100
```

**5. Cost per Defect Found:**
```
Cost per Defect = Cost of Review / Number of Defects Found
```

### 📊 Using Metrics to Improve

**If defect density is higher than average:**
- The author may need training
- The development process may need improvement
- More frequent or more formal reviews may be needed

**If review efficiency is low:**
- Checklists may need improvement
- Reviewers may need training
- Documents may not be ready for review

**If review rate is too high:**
- Reviewers are rushing
- Documents may be too large for single review session
- Schedule pressure is reducing review quality

---

## 🔎 3.5 Factors for Successful Reviews

**1. Management Support:**
- Allocate time for reviews in the schedule
- Provide training for moderators and reviewers
- Recognize the value of reviews
- Do not penalize authors for defects found

**2. Appropriate Review Type:**
- Match review formality to document risk
- Don't use inspection for low-risk documents
- Don't use informal review for safety-critical documents

**3. Trained Moderators:**
- Moderator skills are critical for formal reviews
- Training should cover facilitation, conflict resolution, and process

**4. Preparation:**
- Reviewers must examine documents before the meeting
- Unprepared meetings waste time and find fewer defects

**5. Focus on Defects, Not Solutions:**
- Identify defects in the meeting
- Fix defects outside the meeting
- Solution discussions derail the meeting

**6. Manageable Size:**
- Review no more than 1-2 hours of material per session
- For large documents, break into multiple reviews

**7. Checklists:**
- Use checklists tailored to document type
- Update checklists based on lessons learned
- Checklists guide reviewers to common defect types

**8. Psychological Safety:**
- Reviews should not be personal attacks
- Focus on the document, not the author
- Create an atmosphere where issues can be raised without fear

**9. Follow-Up:**
- Ensure defects are actually fixed
- Verify fixes don't introduce new problems
- Collect metrics and improve the process

---

## 💡 Worked Examples

### 💡 Worked Example 1: Selecting Review Type

**Scenario:** A team is developing a new mobile banking app.

**Document 1:** Requirements for funds transfer (financial, regulated, high risk)
- **Recommended review type:** Inspection or technical review
- **Rationale:** High risk, financial impact, regulatory requirements

**Document 2:** UI mockup for the login screen (low risk, visual)
- **Recommended review type:** Informal review or walkthrough
- **Rationale:** Lower risk, visual, benefits from quick feedback

**Document 3:** Security architecture (high risk, technical)
- **Recommended review type:** Technical review or inspection
- **Rationale:** Security is critical, requires deep technical analysis

### 💡 Worked Example 2: Review Metrics Calculation

**Data:**
- Document size: 40 pages
- Review time: 8 hours (2 hours preparation × 4 reviewers)
- Defects found: 16
- Defects fixed: 16

**Metrics:**
- Defect density = 16 / 40 = 0.4 defects per page
- Review efficiency = 16 / 8 = 2 defects per hour
- Review rate = 40 / 8 = 5 pages per hour

**Interpretation:**
- Defect density of 0.4 is moderate — document quality is acceptable but could be improved
- Review efficiency of 2/hour is reasonable
- Review rate of 5 pages/hour is appropriate for a technical review
