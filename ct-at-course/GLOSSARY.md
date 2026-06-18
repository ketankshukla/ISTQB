# 📖 CT-AT Glossary

Key terms and definitions for the CT-AT exam, organized by chapter relevance.

---

## 🏗️ Agile Fundamentals

**Agile**
A set of values and principles for software development that emphasizes iterative delivery, customer collaboration, and responding to change.

**Agile Manifesto**
A declaration of four values and twelve principles for agile software development, created in 2001.

**Agile Values**
The four core values of the Agile Manifesto:
1. Individuals and interactions over processes and tools
2. Working software over comprehensive documentation
3. Customer collaboration over contract negotiation
4. Responding to change over following a plan

**Agile Principles**
Twelve principles underlying the Agile Manifesto, including delivering working software frequently, welcoming changing requirements, and promoting sustainable development.

**Scrum**
An agile framework using time-boxed iterations (sprints), defined roles (Product Owner, Scrum Master, Development Team), and ceremonies (Sprint Planning, Daily Standup, Sprint Review, Sprint Retrospective).

**Sprint**
A time-boxed iteration in Scrum, typically 1-4 weeks, during which a potentially releasable product increment is created.

**Kanban**
An agile method that visualizes workflow on a board, limits work in progress (WIP), and optimizes flow.

**Extreme Programming (XP)**
An agile methodology emphasizing technical practices: pair programming, test-driven development, continuous integration, and refactoring.

**User Story**
A short, simple description of a feature told from the perspective of the end user. Format: "As a [role], I want [feature], so that [benefit]."

**Product Backlog**
An ordered list of everything that might be needed in the product, managed by the Product Owner.

**Sprint Backlog**
The set of product backlog items selected for the sprint plus the plan for delivering them.

**Definition of Done (DoD)**
A shared understanding of what it means for work to be complete. In agile testing, the DoD should include testing criteria.

**Definition of Ready (DoR)**
Criteria that a user story must meet before the team can start working on it.

**Retrospective**
A team meeting held at the end of each sprint to reflect on what went well, what could be improved, and action items.

**Daily Standup / Daily Scrum**
A short daily meeting (typically 15 minutes) where team members share what they did yesterday, what they plan today, and any impediments.

**Product Owner**
The role in Scrum responsible for maximizing value by managing the product backlog and prioritizing work.

**Scrum Master**
The role in Scrum responsible for ensuring the team follows Scrum practices, removing impediments, and facilitating meetings.

**Development Team**
In Scrum, the cross-functional team of professionals who do the work to deliver a potentially releasable increment.

**Velocity**
A measure of the amount of work a team can complete during a sprint, typically measured in story points.

**Story Point**
A unit of measure for expressing the overall effort required to implement a user story.

**Burndown Chart**
A visual representation of work left to do versus time. Used to track sprint progress.

**Information Radiator**
A highly visible display of project information that passively informs anyone who looks at it (e.g., task board, build status monitor).

---

## 🏃 Agile Testing

**Agile Testing**
Testing practices that follow the principles of agile software development, emphasizing continuous testing, collaboration, and adapting to change.

**Whole-Team Approach**
The concept that quality is the responsibility of the entire team, not just testers. Everyone contributes to testing activities.

**Tester in Agile**
A role that includes: collaborating with the team, designing and executing tests, automating tests, coaching on quality, and performing exploratory testing.

**Acceptance Criteria**
Conditions that a user story must satisfy to be accepted by the Product Owner. Often written as "Given/When/Then" scenarios.

**Test-First Approach**
Writing tests before implementation, including TDD (unit level), ATDD (acceptance level), and BDD (behavioral level).

**Regression Testing in Agile**
Running automated regression tests frequently to ensure changes do not break existing functionality.

**Collaborative Testing**
Testing activities performed collaboratively by testers, developers, and business representatives.

**Session-Based Test Management (SBTM)**
A structured approach to exploratory testing with defined time-boxed sessions, charters, and debriefs.

**Test Charter**
A statement of what to test during an exploratory testing session, including scope and approach.

**Continuous Testing**
The practice of executing automated tests as part of the software delivery pipeline to obtain immediate feedback on business risks.

---

## 🎯 Testing Techniques

**Behavior-Driven Development (BDD)**
A collaborative approach where behaviors of the system are specified in a ubiquitous language (Given/When/Then) shared by technical and non-technical stakeholders.

**Acceptance Test-Driven Development (ATDD)**
A practice where the team collaboratively writes acceptance tests before implementation, clarifying requirements and driving development.

**Test-Driven Development (TDD)**
A development practice where a failing unit test is written first, then minimal code to pass it, then refactoring.

**Red-Green-Refactor**
The TDD cycle: write a failing test (red), write code to pass (green), refactor while keeping tests green.

**Exploratory Testing**
Simultaneous learning, test design, and test execution. Testers explore the application while designing and running tests.

**Test Automation Pyramid**
A model showing the ideal distribution of automated tests: many unit tests at the base, fewer integration tests, and few UI tests at the top.

**Ice Cream Cone Anti-Pattern**
An inverted test pyramid where most tests are at the UI level, leading to slow, brittle automation.

**Pair Testing**
Two people testing together, often a tester and a developer, sharing ideas and perspectives.

**Test Quadrants (Agile Testing Quadrants)**
A model by Brian Marick categorizing tests by whether they support the team or critique the product, and whether they are business-facing or technology-facing.

---

## 🛠️ Automation and Tools

**Continuous Integration (CI)**
The practice of merging all developers' working copies to a shared mainline several times a day, with automated builds and tests.

**Continuous Delivery (CD)**
An extension of CI where software can be released to production at any time through automated deployment pipelines.

**Continuous Deployment**
Automatically deploying every change that passes automated tests to production.

**DevOps**
A cultural and professional movement that emphasizes collaboration between software development and IT operations.

**Test Management Tool**
Software that supports test planning, test case management, execution tracking, and reporting.

**Test Automation Framework**
A structured set of guidelines, tools, and libraries used to automate testing.

**Information Radiator**
A visible display that shows project status, build health, or test results without requiring someone to ask.

---

## ⭐ Scaling and Advanced Topics

**SAFe (Scaled Agile Framework)**
A framework for scaling agile practices to large organizations with multiple teams.

**LeSS (Large-Scale Scrum)**
A framework for scaling Scrum to multiple teams working on the same product.

**Nexus**
A framework for scaling Scrum, focused on integration issues between teams.

**Release Train**
In SAFe, a long-lived team of agile teams that plans, commits, and executes together.

**Program Increment (PI)**
In SAFe, a timebox (typically 8-12 weeks) during which an Agile Release Train delivers incremental value.

**Lean**
A methodology focused on eliminating waste, optimizing flow, and delivering value to the customer.

**Value Stream Mapping**
A lean technique for visualizing the steps in a process to identify waste and optimize flow.

---

## ⭐ Abbreviations

| Abbreviation | Meaning |
|-------------|---------|
| AT | Agile Testing |
| ATDD | Acceptance Test-Driven Development |
| BDD | Behavior-Driven Development |
| CI | Continuous Integration |
| CD | Continuous Delivery |
| CD | Continuous Deployment |
| DoD | Definition of Done |
| DoR | Definition of Ready |
| PI | Program Increment |
| SAFe | Scaled Agile Framework |
| SBTM | Session-Based Test Management |
| TDD | Test-Driven Development |
| WIP | Work In Progress |
| XP | Extreme Programming |
