# CTAL-AT Glossary

## A

**Acceptance Test-Driven Development (ATDD)**
A practice where the whole team collaborates to define acceptance criteria and tests before development begins. Tests are written in a collaborative workshop involving developers, testers, and business representatives.

**Agile Manifesto**
The founding document of agile software development, stating four values: individuals and interactions over processes and tools; working software over comprehensive documentation; customer collaboration over contract negotiation; responding to change over following a plan.

**Agile Testing**
Testing that follows the principles of agile software development: continuous feedback, collaboration, lightweight documentation, and adapting to change.

**Anti-Pattern**
A common response to a recurring problem that is usually ineffective and risks being highly counterproductive. In agile testing, examples include the "ice cream cone" (inverted test pyramid) and "test silos."

**ATDD Workshop**
A collaborative meeting where the team defines acceptance criteria and creates acceptance tests before implementation begins.

**Automation Pyramid (Test Pyramid)**
A model showing the ideal distribution of automated tests: many unit tests at the base, fewer integration tests in the middle, and few end-to-end tests at the top.

## B

**Behavior-Driven Development (BDD)**
An agile practice that encourages collaboration among developers, QA, and non-technical business participants. Tests are written in a natural language format (Given/When/Then) that is understandable by all stakeholders.

**Build Pipeline**
The sequence of automated steps (compile, test, analyze, package) that code goes through in a CI/CD system.

**Burndown Chart**
A graphical representation of work left to do versus time. Used in Scrum to track sprint progress.

## C

**Continuous Delivery (CD)**
A software engineering approach where teams produce software in short cycles, ensuring that the software can be reliably released at any time. Manual approval may be required for production deployment.

**Continuous Deployment**
A software engineering approach where every change that passes automated tests is automatically deployed to production. No manual approval step.

**Continuous Integration (CI)**
The practice of merging all developers' working copies to a shared mainline several times a day, with automated builds and tests.

**Continuous Testing**
The process of executing automated tests as part of the software delivery pipeline to obtain immediate feedback on the business risks associated with a software release candidate.

**Cross-Functional Team**
An agile team that includes all skills necessary to deliver a working product increment: developers, testers, designers, analysts, etc.

## D

**Definition of Done (DoD)**
A shared understanding of what it means for work to be complete. In agile testing, the DoD often includes passing automated tests, code review, and test coverage thresholds.

**Definition of Ready (DoR)**
A checklist that indicates when a user story or feature is ready to be taken into a sprint.

**DevOps**
A set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and provide continuous delivery with high software quality.

## E

**End-to-End (E2E) Test**
A test that verifies a complete user flow through the application, typically involving the UI, backend, and database.

**Exploratory Testing**
A testing approach where the tester simultaneously designs and executes tests, using the information gained while testing to design new and better tests. Emphasized in agile because it adapts to changing requirements.

## G

**Given/When/Then**
The standard BDD format for writing scenarios: Given (preconditions), When (action), Then (expected outcome).

**Green (in TDD)**
The phase where the test passes after minimal implementation is written.

## I

**Ice Cream Cone (Anti-Pattern)**
The inverse of the test pyramid: many end-to-end tests, few unit tests. This creates slow, brittle test suites that are expensive to maintain.

**Integration Test**
A test that verifies the interaction between two or more components or systems.

## K

**Kanban**
An agile methodology that focuses on visualizing work, limiting work in progress (WIP), and maximizing flow. Unlike Scrum, Kanban does not use fixed-length sprints.

## P

**Pair Programming**
An agile practice where two developers work together at one workstation. One writes code while the other reviews each line as it is written.

**Pipeline**
See Build Pipeline.

## R

**Red (in TDD)**
The phase where a new test is written and fails because the functionality does not yet exist.

**Refactor (in TDD)**
The phase where the code is improved (simplified, optimized) while keeping all tests passing.

**Regression Test Suite**
The set of tests that verify existing functionality still works after changes. In agile, regression tests are typically automated and run frequently.

**Retrospective**
An agile ceremony where the team reflects on the past sprint/period and identifies improvements for the next.

## S

**Scrum**
An agile framework for managing complex work, using fixed-length sprints (typically 2 weeks), with ceremonies (stand-up, sprint planning, review, retrospective) and roles (Product Owner, Scrum Master, Development Team).

**Session-Based Test Management (SBTM)**
A structured approach to exploratory testing where testing is organized into uninterrupted sessions with defined charters and time boxes.

**Smoke Test**
A minimal set of tests that verify the basic functionality of the system. Run frequently (often daily or per build) to quickly detect major issues.

**Sprint**
A fixed-length time box (typically 1-4 weeks) in Scrum during which a potentially releasable product increment is created.

**Story Point**
A unit of measure for expressing the overall effort required to fully implement a user story. Used in agile estimation.

## T

**Test-Driven Development (TDD)**
A development practice where tests are written before the code. Cycle: write a failing test (Red), write minimal code to pass (Green), improve the code (Refactor).

**Test-First Development**
An umbrella term for practices where tests are written before implementation, including TDD, BDD, and ATDD.

**Testing Quadrants**
A model (from Brian Marick and Lisa Crispin) that categorizes agile tests into four quadrants based on whether they are business-facing or technology-facing, and whether they support programming or critique the product.

**Three Amigos**
A collaborative practice involving a developer, a tester, and a business analyst/product owner who meet to discuss and define the behavior of a user story before implementation.

## U

**Unit Test**
A test that verifies the behavior of a single unit of code (function, method, class) in isolation from its dependencies.

**User Story**
A brief, simple description of a feature told from the perspective of the user. Format: "As a [type of user], I want [some goal] so that [some reason]."

## V

**Velocity**
A measure of the amount of work a team can complete in a sprint, typically measured in story points.

**Version Control System (VCS)**
A system that records changes to files over time, enabling collaboration and rollback. Examples: Git, SVN.

## W

**Waterfall Model**
A sequential software development process where each phase (requirements, design, implementation, testing, deployment) is completed before the next begins. Contrasts with agile iterative approaches.

**Work in Progress (WIP)**
The number of tasks currently being worked on. Kanban uses WIP limits to encourage focus and reduce multitasking.

## X

**XP (Extreme Programming)**
An agile methodology that emphasizes technical practices: pair programming, TDD, continuous integration, simple design, refactoring.
