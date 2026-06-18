# 📖 CTAL-TAE Glossary

Key terms and definitions for the CTAL-TAE exam, organized by chapter relevance.

---

## ⚙️ General Test Automation Terms

**Test Automation (TA)**
The use of software to perform or support test activities, including test design, test execution, test data generation, and test result comparison.

**Automated Testing**
The execution of tests by a tool instead of a human. A subset of test automation.

**Test Automation Engineer (TAE)**
A person responsible for designing, developing, and maintaining test automation solutions.

**Test Automation Solution (TAS)**
The complete implementation of test automation for a specific project or product, including tools, scripts, testware, and infrastructure.

**Test Automation Architecture (TAA)**
The conceptual design of the test automation solution, defining its structure, components, interfaces, and relationships.

**System Under Test (SUT)**
 The system being tested.

**Testware**
Artifacts produced during the test process required to plan, design, and execute tests, including test scripts, test data, test harnesses, and expected results.

---

## 🌟 Chapter 1: Introduction

**Return on Investment (ROI)**
A measure of the profitability of an investment, calculated as (Benefits - Costs) / Costs.

**Test Automation Pyramid**
A model showing the ideal distribution of automated tests across unit, integration, and UI levels, with the majority at the unit level.

**Ice Cream Cone Anti-Pattern**
An inverted test pyramid where most tests are at the UI level, leading to slow, brittle automation.

**Test Tool**
A software product that supports one or more test activities.

**Capture/Replay**
A test automation approach where user actions are recorded and can be played back. Considered outdated for production automation.

---

## ⭐ Chapter 2: Preparation

**Proof of Concept (PoC)**
A limited exercise to verify that a tool or approach is technically feasible in the target environment.

**Proof of Value (PoV)**
An exercise to demonstrate that a tool or approach delivers business value and solves the intended problem.

**Total Cost of Ownership (TCO)**
The full cost of acquiring, implementing, and maintaining a tool over its lifetime, including licensing, training, infrastructure, and maintenance.

**Pilot Project**
A small, real project used to evaluate a test automation approach before full-scale adoption.

**Vendor Lock-in**
Dependency on a single vendor's technology, making it difficult or costly to switch to alternatives.

**Test Automation Requirements**
The documented needs and constraints for a test automation solution, including scope, objectives, and constraints.

**Compatibility**
The ability of a test tool to work with the SUT's technology stack, operating system, and environment.

**Interoperability**
The ability of a test tool to exchange and use information with other tools in the toolchain.

---

## ⭐ Chapter 3: Architecture

**Test Generation Layer**
The TAA layer responsible for creating or selecting test cases, including manual, model-based, or data-driven generation.

**Test Definition Layer**
The TAA layer that defines test cases in a format that can be executed, often using a domain-specific language or test framework.

**Test Execution Layer**
The TAA layer that runs the test cases against the SUT and captures results.

**Test Adaptation Layer**
The TAA layer that interfaces with the SUT, handling communication, synchronization, and abstraction of SUT-specific details.

**Abstraction Layer**
A design pattern that hides implementation details, exposing only the necessary functionality to higher layers.

**Separation of Concerns**
A design principle that divides a system into distinct sections, each addressing a separate concern.

**Test Harness**
The collection of stubs and drivers needed to execute a test.

**Test Stub**
A skeletal or special-purpose implementation of a software component, used to develop or test a component that calls or is otherwise dependent on it.

**Test Driver**
A software component or test tool that replaces a component that takes care of the control and/or the calling of a component or system.

**Simulator**
A device, computer program, or system used during testing that behaves or operates like a given system.

**Interface (in TAA)**
A point of interaction between two layers or between the TAS and the SUT.

---

## 🎨 Chapter 4: Design and Development

**Data-Driven Framework**
A test automation framework where test logic is separated from test data, allowing the same test to run with multiple data sets.

**Keyword-Driven Framework**
A test automation framework where tests are written using action words (keywords) that map to implementation code.

**Hybrid Framework**
A test automation framework that combines multiple approaches (e.g., data-driven + keyword-driven + modular).

**Page Object Model (POM)**
A design pattern that creates an object repository for web UI elements, separating locators from test logic.

**Fixture**
The fixed state of a set of objects used as a baseline for running tests, including setup and teardown.

**Test Data**
Data needed to execute tests, including inputs, expected results, and database states.

**Test Data Management**
The process of creating, maintaining, and provisioning test data for automated tests.

**Test Script**
 A set of instructions for the execution of a test case by a test tool.

**Error Handling**
The process of anticipating, detecting, and resolving errors in test scripts.

**Logging**
The recording of test execution details for debugging and audit purposes.

---

## 📝 Chapter 5: Deployment and Reporting

**Deployment (of TAS)**
The process of installing, configuring, and making the test automation solution operational.

**Pilot Deployment**
Deploying the TAS to a limited scope to validate it before full deployment.

**Big-Bang Deployment**
Deploying the TAS to all users simultaneously.

**Incremental Deployment**
Deploying the TAS gradually, adding features or users over time.

**Test Effectiveness**
The extent to which tests achieve their intended objectives, often measured by defect detection.

**Test Efficiency**
The ratio of test resources used to the value delivered, often measured by cost per defect found.

**Flakiness**
The property of a test that produces inconsistent results (pass/fail) without changes to the SUT.

**Code Coverage**
The degree to which specified coverage items have been exercised by a test suite.

**Requirement Coverage**
The percentage of requirements that have been tested.

**Dashboard**
A visual display of key metrics and status information for stakeholders.

**KPI (Key Performance Indicator)**
A measurable value that demonstrates how effectively objectives are being achieved.

---

## 🤖 Chapter 6: Transition and Maintenance

**Transition (to Test Automation)**
The process of moving from manual testing to automated testing or from one TAS to another.

**Maintenance**
The process of modifying a TAS to keep it operational and effective.

**Corrective Maintenance**
Maintenance performed to fix defects in the TAS.

**Adaptive Maintenance**
Maintenance performed to adapt the TAS to changes in the SUT or environment.

**Perfective Maintenance**
Maintenance performed to improve the TAS (e.g., performance, maintainability, new features).

**Regression Test Suite**
The set of automated tests executed to verify that existing functionality still works after changes.

**Smoke Test**
A subset of tests that verify critical functionality, typically run on every build.

**Test Retirement**
The process of removing tests or a TAS from active use when they are no longer needed.

**Test Obsolescence**
The state where a test or TAS is no longer useful due to SUT changes or tool deprecation.

**Legacy Automation**
An existing automated test suite that is difficult to maintain, often using outdated tools or practices.

**Migration**
The process of moving tests or a TAS from one tool, framework, or technology to another.

---

## ⭐ Abbreviations

| Abbreviation | Meaning |
|-------------|---------|
| TAE | Test Automation Engineer |
| TAS | Test Automation Solution |
| TAA | Test Automation Architecture |
| SUT | System Under Test |
| PoC | Proof of Concept |
| PoV | Proof of Value |
| TCO | Total Cost of Ownership |
| ROI | Return on Investment |
| KPI | Key Performance Indicator |
| POM | Page Object Model |
| CI/CD | Continuous Integration / Continuous Delivery |
| SAST | Static Application Security Testing |
| DAST | Dynamic Application Security Testing |
| API | Application Programming Interface |
| UI | User Interface |
| SBTM | Session-Based Test Management |
| IaC | Infrastructure as Code |
| DSL | Domain-Specific Language |
