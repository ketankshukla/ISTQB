# Chapter 1 — Agile Principles and Mindset: Lessons

---

## 1.1 The Agile Manifesto

### The Four Values

Created in 2001 by 17 software practitioners, the Agile Manifesto declares four values:

**1. Individuals and interactions over processes and tools**
- People create software, not processes
- Communication and collaboration are more important than rigid procedures
- Tools should support people, not replace interaction

**2. Working software over comprehensive documentation**
- Delivering functional software is the primary measure of progress
- Documentation has value but should not delay delivery
- Just enough documentation — not zero documentation

**3. Customer collaboration over contract negotiation**
- Continuous engagement with customers leads to better products
- Requirements emerge through collaboration, not just upfront specification
- Contracts can still exist but should allow for change

**4. Responding to change over following a plan**
- Change is inevitable and should be embraced
- Plans are valuable but should be adaptable
- Late changes can still deliver competitive advantage

**Critical nuance:** The Manifesto says "over," not "instead of." The items on the right still have value — the items on the left are simply valued MORE.

---

## 1.2 The Twelve Principles

1. **Highest priority is customer satisfaction** through early and continuous delivery
2. **Welcome changing requirements**, even late in development
3. **Deliver working software frequently**, from weeks to months, with shorter timescales preferred
4. **Business people and developers must work together daily** throughout the project
5. **Build projects around motivated individuals** — give them the environment and support they need
6. **Face-to-face conversation** is the most efficient method of conveying information
7. **Working software is the primary measure of progress**
8. **Agile processes promote sustainable development** — maintain a constant pace indefinitely
9. **Continuous attention to technical excellence and good design** enhances agility
10. **Simplicity** — the art of maximizing the amount of work not done — is essential
11. **The best architectures, requirements, and designs emerge from self-organizing teams**
12. **At regular intervals, the team reflects on how to become more effective** and adjusts accordingly

---

## 1.3 Scrum

### Scrum Roles

**Product Owner (PO):**
- Maximizes value by managing the Product Backlog
- Prioritizes backlog items
- Represents stakeholders and customers
- Accepts or rejects work results
- **One person, not a committee**

**Scrum Master (SM):**
- Servant leader for the team
- Facilitates Scrum events
- Removes impediments
- Protects the team from external interference
- Coaches the team on Scrum practices
- **Not a project manager**

**Development Team:**
- Cross-functional (all skills needed to deliver the increment)
- Self-organizing (no one assigns tasks to individuals)
- Typically 3-9 people
- No titles other than "Developer" (everyone contributes)
- Accountable as a team, not individuals

### Scrum Ceremonies

**Sprint Planning:**
- **When:** At the start of each sprint
- **Duration:** Max 2 hours per week of sprint (e.g., 4 hours for 2-week sprint)
- **Purpose:** Decide what will be delivered and how the work will be achieved
- **Output:** Sprint Goal + Sprint Backlog

**Daily Scrum (Daily Standup):**
- **When:** Every day of the sprint, same time, same place
- **Duration:** 15 minutes, time-boxed
- **Purpose:** Inspect progress toward Sprint Goal, adapt Sprint Backlog
- **Three questions:** What did I do yesterday? What will I do today? What impediments do I have?
- **Not a status meeting for management**

**Sprint Review:**
- **When:** At the end of the sprint
- **Duration:** Max 1 hour per week of sprint
- **Purpose:** Demonstrate the increment to stakeholders, gather feedback
- **Inspect the product, adapt the backlog**

**Sprint Retrospective:**
- **When:** After the Sprint Review, before the next Sprint Planning
- **Duration:** Max 1.5 hours per week of sprint
- **Purpose:** Reflect on the sprint, identify improvements
- **Inspect the process, adapt the process**

### Scrum Artifacts

**Product Backlog:**
- Ordered list of everything that might be needed
- Managed by the Product Owner
- Constantly refined and re-prioritized
- Items at the top are more detailed

**Sprint Backlog:**
- Items selected from Product Backlog for the sprint
- Plus the plan for delivering them
- Owned by the Development Team
- Updated throughout the sprint as needed

**Increment:**
- The sum of all Product Backlog items completed during a sprint
- Must be "Done" and usable
- Potentially releasable

### Scrum Metrics

**Velocity:**
- Story points completed per sprint
- Used for planning, not for comparing teams
- Stabilizes over time

**Burndown Chart:**
- Shows remaining work over time
- Ideal line vs. actual progress
- Helps identify if the team is on track

---

## 1.4 Kanban

### Core Principles

**1. Visualize the workflow:**
- Use a Kanban board with columns representing workflow stages
- Each work item is a card on the board
- Everyone can see the current state of work

**2. Limit Work in Progress (WIP):**
- Set maximum number of items allowed in each column
- Prevents bottlenecks and context switching
- Forces the team to finish work before starting new work

**3. Manage flow:**
- Monitor how work moves through the system
- Identify and remove blockers
- Optimize for smooth, predictable flow

**4. Make process policies explicit:**
- Document the rules for moving items between columns
- Everyone understands how work flows

**5. Implement feedback loops:**
- Regular review of metrics and processes
- Continuous improvement

**6. Improve collaboratively, evolve experimentally:**
- Use the scientific method (hypothesis, experiment, measure)
- Small, incremental changes

### Kanban vs. Scrum

| Aspect | Scrum | Kanban |
|--------|-------|--------|
| Cadence | Fixed sprints (1-4 weeks) | Continuous flow |
| Roles | PO, SM, Dev Team | No prescribed roles |
| Ceremonies | Sprint Planning, Daily, Review, Retro | Optional (no prescribed ceremonies) |
| Change during iteration | No changes to sprint backlog | Changes allowed anytime |
| Metrics | Velocity, burndown | Cycle time, throughput, CFD |
| Best for | Teams that benefit from regular rhythm | Teams with continuous flow of work |

### Key Kanban Metrics

**Cycle Time:** Time from work starting to work being completed
**Lead Time:** Time from work being requested to work being completed
**Throughput:** Number of items completed per time period
**Cumulative Flow Diagram (CFD):** Shows how work accumulates and flows through stages over time

---

## 1.5 Extreme Programming (XP)

### Key Practices

**1. Pair Programming:**
- Two developers work together at one workstation
- One writes code (driver), one reviews (navigator)
- Knowledge sharing, fewer defects, better design

**2. Test-Driven Development (TDD):**
- Write a failing test first
- Write minimal code to pass
- Refactor while keeping tests green

**3. Continuous Integration (CI):**
- Integrate code to mainline multiple times per day
- Automated build and test on every commit
- Fast feedback on integration issues

**4. Refactoring:**
- Improve code structure without changing behavior
- Continuously clean up technical debt
- Keeps code maintainable

**5. Simple Design:**
- Do the simplest thing that could possibly work
- Avoid premature optimization
- YAGNI (You Ain't Gonna Need It)

**6. Collective Code Ownership:**
- Anyone can improve any code
- No "my code" — it's the team's code
- Requires comprehensive test coverage

---

## 1.6 The Tester's Role in Agile

### Core Responsibilities

**1. Collaboration:**
- Participate in sprint planning, daily standups, reviews, retrospectives
- Work closely with developers and Product Owner
- Help clarify requirements and acceptance criteria

**2. Test Design and Execution:**
- Design tests based on user stories and acceptance criteria
- Execute manual and automated tests
- Perform exploratory testing
- Verify the Definition of Done is met

**3. Test Automation:**
- Develop and maintain automated tests
- Integrate tests into the CI/CD pipeline
- Focus automation on the test pyramid (more unit, fewer UI)

**4. Quality Coaching:**
- Coach developers on testing techniques
- Promote whole-team quality mindset
- Help the team understand quality risks

**5. Documentation:**
- Maintain just enough test documentation
- Document test results and defects
- Update living documentation (e.g., BDD scenarios)

### Tester in Daily Activities

| Activity | Tester's Role |
|----------|--------------|
| Sprint Planning | Estimate testing effort, identify testability concerns |
| Daily Standup | Share testing progress, raise blockers |
| Story Refinement | Ask "how will we test this?", define acceptance criteria |
| During Sprint | Test features as they are developed, provide fast feedback |
| Sprint Review | Demonstrate features, gather feedback |
| Retrospective | Suggest quality improvements, reflect on testing process |

### Myths About Testers in Agile

| Myth | Reality |
|------|---------|
| "Testers are not needed in agile" | Testers are essential — their role evolves |
| "Developers do all testing in agile" | Whole-team approach means everyone contributes, but testers bring specialized skills |
| "Agile means no documentation" | Just enough documentation, including test documentation |
| "Testers only test at the end" | Testing happens continuously throughout the sprint |

---

## Worked Examples

### Worked Example 1: Manifesto Values Application

**Scenario:** A manager insists all team communication must go through a formal ticketing system, and face-to-face discussion is discouraged.

**Analysis:**
This violates the first value: "Individuals and interactions over processes and tools."

**Correct approach:**
- Encourage face-to-face communication for complex discussions
- Use tools to support, not replace, interaction
- The ticketing system is valuable but should not be the only channel

### Worked Example 2: Scrum Calculation

**Scenario:** A team runs 2-week sprints. Calculate maximum ceremony times.

**Solution:**
| Ceremony | Calculation | Max Duration |
|----------|-------------|--------------|
| Sprint Planning | 2 hours × 2 weeks | 4 hours |
| Sprint Review | 1 hour × 2 weeks | 2 hours |
| Sprint Retrospective | 1.5 hours × 2 weeks | 3 hours |
| Daily Scrum | 15 minutes × 10 days | 15 minutes each |

### Worked Example 3: Kanban WIP Limit

**Scenario:** A Kanban team has the following board:

```
To Do | In Progress (WIP: 3) | Review (WIP: 2) | Done
  5   |        3           |       2          |  10
```

A team member wants to start a new item. The In Progress column is at its WIP limit.

**Decision:**
- The team member should help complete work in In Progress or Review
- Or help unblock items in Review
- Starting a new item would violate the WIP limit and create a bottleneck

**Lesson:** WIP limits force the team to finish work before starting new work, improving flow.
