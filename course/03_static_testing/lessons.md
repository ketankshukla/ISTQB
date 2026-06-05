# Chapter 3 — Static Testing: Lessons

---

## 3.1 Static Testing Basics

### Work Products Examinable by Static Testing (FL-3.1.1, K1)

Static testing examines work products WITHOUT executing the software. Almost any work product that can be read by a human or analyzed by a tool can be subjected to static testing:

**Specifications and requirements:**
- Business requirements documents
- Functional and non-functional specifications
- User stories and acceptance criteria
- Use cases and user scenarios

**Design and architecture:**
- System and software design documents
- Architecture diagrams and data flow descriptions
- Interface specifications and API contracts
- Database schemas

**Code:**
- Source code (any language)
- Automated test scripts
- Infrastructure-as-code files

**Test artifacts:**
- Test plans
- Test cases and test procedures
- Test charters

**Other work products:**
- Project plans and schedules
- Contracts and legal documents
- User manuals and help pages
- Web pages and content
- Configuration files

**Key point:** Static testing applies to work products that CANNOT be tested dynamically (you cannot "execute" a requirements document or a test plan). This gives static testing a unique and complementary role alongside dynamic testing.

### The Value of Static Testing (FL-3.1.2, K2)

Static testing provides significant value to a project:

**1. Early defect detection:**
- Defects can be found before code exists (in requirements and designs)
- This is the ultimate shift-left — finding defects before they are coded saves enormous rework

**2. Low cost of defect removal:**
- Fixing a requirements defect found during a review costs far less than fixing it after it has been coded, tested, and deployed
- No test environment, no test data, no debugging needed — just correcting the document

**3. Finds defects that dynamic testing cannot:**
- Ambiguities, contradictions, and omissions in requirements
- Design inconsistencies
- Deviations from standards and conventions
- Unreachable code (dead code)
- Missing or incorrect comments/documentation
- Violations of coding standards

**4. Improved communication:**
- Reviews bring stakeholders together to discuss the work product
- This builds shared understanding and catches misunderstandings early

**5. Reduced dynamic testing cost:**
- Fewer defects in requirements and design means fewer defects propagate to code
- Fewer defects in code means less time spent in dynamic testing finding and re-testing them

**6. Prevention over detection:**
- Static testing can prevent defects from ever entering the code (by catching them in specs)
- Dynamic testing can only detect defects after they exist in executable form

### Comparing Static and Dynamic Testing (FL-3.1.3, K2)

| Aspect | Static Testing | Dynamic Testing |
|--------|---------------|-----------------|
| Execution | Does NOT execute the software | DOES execute the software |
| What it finds | Defects in work products directly | Failures caused by defects during runtime |
| When applicable | From the earliest lifecycle phase (requirements) | Only after executable code or model exists |
| Work products | Any readable artifact (specs, designs, code, tests, plans, manuals) | Only executable artifacts (code, prototypes) |
| Techniques | Reviews (informal, walkthrough, technical, inspection) + static analysis tools | Test techniques (EP, BVA, etc.) executed against running software |
| Defect types found | Ambiguities, omissions, contradictions, standard deviations, dead code, maintainability issues | Functional errors, performance issues, security vulnerabilities during execution |

**What they share:**
- Both aim to identify defects and improve quality
- Both require planning, preparation, and reporting
- Both benefit from tool support
- Both are complementary — neither alone is sufficient

**Key distinction for the exam:** Static testing finds DEFECTS directly in work products. Dynamic testing finds FAILURES (the symptoms) during execution, which are then traced back to defects.

---

## 3.2 Feedback and Review Process

### Benefits of Early and Frequent Stakeholder Feedback (FL-3.2.1, K1)

Getting feedback from stakeholders early and often through reviews provides:

- **Reduced risk of misunderstanding requirements:** Catching ambiguities and incorrect assumptions before development starts
- **Faster course correction:** If something is heading in the wrong direction, early feedback allows changes before significant investment
- **Increased stakeholder engagement:** Stakeholders who review work products feel more ownership and are less likely to reject the final product
- **Improved communication:** Regular review touchpoints maintain alignment between the team and stakeholders
- **Fewer late-stage surprises:** Consistent feedback reduces the likelihood of major rework during acceptance testing
- **Clearer acceptance criteria:** Feedback on early drafts helps refine what "done" means

### The Review Process Activities (FL-3.2.2, K2)

A formal review process (especially for technical reviews and inspections) consists of these activities:

**1. Planning**
- Define the scope and objectives of the review
- Estimate effort and time needed
- Select participants and assign roles
- Define entry and exit criteria
- Distribute the work product and related materials

**2. Review initiation (kick-off)**
- Ensure participants have access to the work product
- Explain objectives, process, and roles
- Verify entry criteria are met (e.g., the document is complete enough to review)
- Answer any questions about the process

**3. Individual review (preparation)**
- Each reviewer examines the work product individually BEFORE the review meeting
- Reviewers note potential defects, questions, and suggestions
- This is where most defects are actually found — not during the meeting itself

**4. Communication and analysis (review meeting)**
- Reviewers discuss their findings
- Potential defects are analyzed — are they real defects or misunderstandings?
- Decisions are made: accept, revise, reject the work product
- Defects are logged and assigned

**5. Fixing and reporting**
- The author fixes identified defects
- Metrics are collected (number of defects found, effort spent, etc.)
- The status of the work product is updated
- If needed, a re-review is performed to verify fixes (especially in inspections)

### Review Roles and Responsibilities (FL-3.2.3, K1)

| Role | Responsibilities |
|------|-----------------|
| **Author** | Creates the work product under review; fixes defects found |
| **Management** | Responsible for review planning; decides on execution; allocates time and budget |
| **Facilitator (moderator)** | Leads the review meeting; mediates between viewpoints; ensures the process is followed |
| **Review leader** | Takes overall responsibility for the review; decides who is involved and organizes the logistics |
| **Reviewers** | Examine the work product and identify potential defects, questions, or suggestions |
| **Scribe (recorder)** | Documents defects, decisions, and action items during the review meeting |

In practice, one person may fill multiple roles (except that the author should not also be the moderator or the only reviewer).

### Review Types (FL-3.2.4, K2)

The CTFL v4.0 syllabus defines four review types, ranging from informal to highly formal:

#### Informal Review

| Aspect | Description |
|--------|-------------|
| Formality | Lowest — no formal process |
| Process | Buddy check, pair programming, ad hoc reading |
| Roles | Minimal — reviewer(s) and author |
| Documentation | Little or none; findings communicated verbally |
| Purpose | Quick feedback, catching obvious issues |
| Meeting | Optional (often just a conversation) |

#### Walkthrough

| Aspect | Description |
|--------|-------------|
| Formality | Low to moderate |
| Process | Author leads/guides participants through the work product |
| Roles | Author presents; reviewers ask questions and note issues |
| Documentation | Varies — may produce a list of issues |
| Purpose | Learning, gaining understanding, finding defects |
| Key feature | **Author-led** — the author walks through the material |
| Meeting | Yes, led by the author |

#### Technical Review

| Aspect | Description |
|--------|-------------|
| Formality | Moderate to high |
| Process | Technically qualified reviewers examine the work product for conformance to standards, specifications, and best practices |
| Roles | Facilitator (ideally not the author), reviewers with technical expertise, scribe |
| Documentation | Documented defect list, review report |
| Purpose | Gaining consensus, finding defects, evaluating quality |
| Key feature | **Peer-led by technical experts** (not necessarily the author) |
| Meeting | Yes, facilitated by a trained moderator or technical lead |

#### Inspection

| Aspect | Description |
|--------|-------------|
| Formality | Highest — most formal review type |
| Process | Follows a defined, repeatable process with rules, checklists, entry/exit criteria, and metrics |
| Roles | Trained moderator (NOT the author), author, reviewers, scribe, review leader |
| Documentation | Formal defect log, metrics, process improvement data |
| Purpose | Finding defects efficiently; collecting metrics for process improvement |
| Key features | **Moderator-led**; formal entry/exit criteria; individual preparation is mandatory; follow-up verifies fixes; metrics collected for process improvement |
| Meeting | Yes, moderated formally |

### Comparison Table

| Feature | Informal | Walkthrough | Technical Review | Inspection |
|---------|----------|-------------|-----------------|------------|
| Led by | No leader | Author | Facilitator/peers | Trained moderator |
| Individual prep | Optional | Optional | Recommended | Mandatory |
| Entry/exit criteria | No | No | Sometimes | Yes (formal) |
| Metrics collected | No | No | Sometimes | Yes |
| Follow-up on fixes | No | No | Sometimes | Yes (formal) |
| Main purpose | Quick check | Understanding + defects | Technical quality + consensus | Maximum defect detection + process improvement |

### Mnemonic for Review Types: "I Walk To Inspect"

- **I**nformal — least formal, buddy check
- **W**alkthrough — author walks you through
- **T**echnical review — technical experts review
- **I**nspection — most formal, moderator-led, metrics

### Success Factors for Reviews (FL-3.2.5, K1)

For reviews to be effective, the following factors contribute to success:

- **Clear objectives:** Everyone knows what the review aims to achieve
- **The right people involved:** Reviewers have the appropriate expertise and perspective
- **Defects are welcomed, not punished:** A culture where finding defects is seen as valuable, not as criticism of the author
- **Adequate time and resources:** Reviewers are given sufficient time for individual preparation
- **Management support:** Management allocates time for reviews and values their contribution
- **Small chunks:** Reviewing smaller work products is more effective than reviewing very large documents
- **Training:** Participants (especially moderators) are trained in the review process
- **Checklists:** Using review checklists helps ensure consistent, thorough coverage
- **Follow-up:** Action items and defect fixes are tracked to completion
- **Process improvement:** Review metrics are used to improve both the review process and the development process

---

## Cross-References

- Static testing (reviews) is the primary mechanism for shift-left (Section 2.1.5)
- The review process activities parallel the general test process activities (Chapter 1.4)
- Defects found in reviews use the same error-defect-failure model (Chapter 1.2)
- Inspection metrics feed into test monitoring and control (Chapter 5.3)
- Checklists used in reviews relate to checklist-based testing (Chapter 4.4)
