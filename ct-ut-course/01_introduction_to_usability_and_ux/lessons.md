# Chapter 1 — Introduction to Usability and User Experience: Lessons

---

## 1.1 What Is Usability?

### ISO 9241-11 Definition

The official definition from ISO 9241-11 states:

> **Usability** is the extent to which a product can be used by specified users to achieve specified goals with **effectiveness, efficiency, and satisfaction** in a specified context of use.

**Three Key Components:**

**1. Effectiveness**
- The accuracy and completeness with which users achieve their goals
- Example: A user successfully completes a purchase without errors
- Measured by: task success rate, error rate, quality of output

**2. Efficiency**
- The resources expended in relation to the accuracy and completeness with which users achieve goals
- Example: Completing a task in 2 minutes instead of 10 minutes
- Measured by: time on task, number of steps, clicks, mental effort

**3. Satisfaction**
- The freedom from discomfort and positive attitudes towards the use of the product
- Example: A user feels confident and enjoys using the application
- Measured by: questionnaires, interviews, satisfaction ratings

**Specified Context of Use:**
- Usability is always relative to the user, their goals, and the environment
- A banking app may be usable for adults but not for children
- A medical device must be usable under stressful emergency conditions

### Why Usability Matters

**Business Benefits:**
- Increased productivity (efficient users accomplish more)
- Reduced training costs (learnable systems need less training)
- Fewer errors (effective systems reduce mistakes)
- Higher customer satisfaction (satisfied users stay and recommend)
- Reduced support costs (fewer help desk calls)

**Safety-Critical Benefits:**
- In medical devices, poor usability can cause patient harm
- In aviation, cockpit design affects flight safety
- In industrial systems, clear interfaces prevent accidents

---

## 1.2 What Is User Experience (UX)?

### Definition

**User Experience (UX)** is broader than usability. ISO 9241-210 defines UX as:

> A person's perceptions and responses resulting from the use and/or anticipated use of a product, system, or service.

### Usability vs. User Experience

| Aspect | Usability | User Experience |
|--------|-----------|-----------------|
| Scope | Task completion | Entire interaction journey |
| Focus | Effectiveness, efficiency, satisfaction | Emotions, attitudes, perceptions |
| Timing | During use | Before, during, and after use |
| Measurement | Task metrics, error rates | Satisfaction, loyalty, brand perception |
| Example | "I completed the checkout" | "I felt confident and trusted the brand" |

**Key Insight:** Usability is a component of UX, but UX also includes branding, aesthetics, emotional response, and the entire customer journey.

### The UX Honeycomb (Peter Morville)

The UX Honeycomb identifies seven facets of UX:

```
         Useful
        /      \
   Desirable    Usable
      |          |
   Accessible  Credible
        \      /
        Findable
           |
        Valuable
```

**Useful:** Does the product fulfill a need?
**Usable:** Can users accomplish tasks easily?
**Desirable:** Do users want to use it? (aesthetics, brand)
**Findable:** Can users find what they need?
**Accessible:** Can people with disabilities use it?
**Credible:** Do users trust the product?
**Valuable:** Does it deliver value to the business and users?

**Key Point:** Accessibility is explicitly listed as one of the seven facets, highlighting its importance in UX.

---

## 1.3 ISO 25010 Quality Model

### Overview

ISO 25010 replaces ISO 9126 and defines software quality through eight characteristics:

```
Software Quality
|-- Functional Suitability
|-- Performance Efficiency
|-- Compatibility
|-- Usability
|-- Reliability
|-- Security
|-- Maintainability
|-- Portability
```

### Usability Sub-Characteristics (ISO 25010)

**1. Appropriateness Recognizability:**
- Users can recognize whether the product is appropriate for their needs
- Example: Clear product descriptions, trial modes

**2. Learnability:**
- Degree to which the product can be used by specified users to achieve specified goals of learning to use the product
- Example: Tutorials, progressive disclosure, intuitive icons

**3. Operability:**
- Degree to which the product has attributes that make it easy to operate and control
- Example: Clear controls, undo functionality, defaults

**4. User Error Protection:**
- Degree to which the system protects users against making errors
- Example: Confirmation dialogs, input validation, error prevention

**5. User Interface Aesthetics:**
- Degree to which the user interface enables pleasing and satisfying interaction
- Example: Consistent visual design, pleasant color schemes

**6. Accessibility:**
- Degree to which the product can be used by people with the widest range of characteristics and capabilities
- Example: Screen reader support, keyboard navigation, high contrast

### Relationship to Testing

Each sub-characteristic can be tested:
- Learnability: Measure time for first-time users to complete tasks
- Operability: Count steps needed for common operations
- User Error Protection: Attempt to make errors and see if the system prevents or helps recover from them
- Accessibility: Test with assistive technologies and WCAG guidelines

---

## 1.4 Key Usability Principles

### Nielsen's 10 Usability Heuristics

Jakob Nielsen's heuristics are the most widely used principles for evaluating interfaces:

**1. Visibility of System Status:**
- The system should always keep users informed about what is going on
- Example: Progress bars, loading indicators, confirmation messages

**2. Match Between System and the Real World:**
- Use language and concepts familiar to users
- Example: "Shopping cart" instead of "transaction buffer"

**3. User Control and Freedom:**
- Users need clearly marked "emergency exits" to leave unwanted states
- Example: Undo, cancel, back buttons

**4. Consistency and Standards:**
- Users should not have to wonder whether different words, situations, or actions mean the same thing
- Example: "Submit" button should always be in the same place

**5. Error Prevention:**
- Better than good error messages is a careful design that prevents a problem from occurring
- Example: Disabling submit until form is valid

**6. Recognition Rather Than Recall:**
- Minimize the user's memory load by making objects, actions, and options visible
- Example: Menu items visible rather than requiring memorization of commands

**7. Flexibility and Efficiency of Use:**
- Allow users to tailor frequent actions and provide accelerators for experts
- Example: Keyboard shortcuts, customizable dashboards

**8. Aesthetic and Minimalist Design:**
- Dialogues should not contain information that is irrelevant or rarely needed
- Example: Clean forms without unnecessary fields

**9. Help Users Recognize, Diagnose, and Recover from Errors:**
- Error messages should be expressed in plain language, precisely indicate the problem, and suggest a solution
- Example: "Password must be at least 8 characters" instead of "Error 42"

**10. Help and Documentation:**
- Any such information should be easy to search, focused on the user's task, and provide concrete steps
- Example: Context-sensitive help, searchable FAQs

### Shneiderman's Eight Golden Rules

1. Strive for consistency
2. Enable frequent users to use shortcuts
3. Offer informative feedback
4. Design dialogues to yield closure
5. Offer error prevention and simple error handling
6. Permit easy reversal of actions (undo)
7. Support internal locus of control (user feels in charge)
8. Reduce short-term memory load

### Norman's Design Principles

**Don Norman's key concepts:**

**Affordances:**
- Properties of an object that suggest how it can be used
- Example: A chair affords sitting; a button affords pressing
- Digital example: A raised button graphic suggests clicking

**Signifiers:**
- Signals that indicate what actions are possible
- Example: A label "Click here" is a signifier
- Good design makes affordances visible through signifiers

**Mapping:**
- The relationship between controls and their effects
- Example: Stove controls arranged in the same layout as burners
- Natural mapping reduces cognitive load

**Feedback:**
- Sending information back to the user about what action has been done
- Example: Button changes color when clicked, sound on completion

**Constraints:**
- Limiting the possible actions to guide the user
- Example: A date picker prevents invalid dates

---

## 1.5 Cognitive Aspects of Usability

### Cognitive Load

**Cognitive load** is the amount of mental effort required to use a system. Three types:

**1. Intrinsic Cognitive Load:**
- Inherent difficulty of the task itself
- Cannot be reduced by design (e.g., complex tax form is inherently complex)

**2. Extraneous Cognitive Load:**
- Mental effort caused by poor design
- Can be reduced by better design (e.g., unclear navigation, unnecessary steps)

**3. Germane Cognitive Load:**
- Effort devoted to understanding and learning
- Desirable — we want users to focus on their goal, not on using the interface

**Design Implications:**
- Reduce extraneous load (simplify navigation, use clear labels)
- Support germane load (provide helpful context, progressive disclosure)

### Mental Models

**Mental model:** The user's internal representation of how a system works.

**Key Principle:** Good UX aligns the system's behavior with users' mental models.

**Example:**
- Mental model: "The trash can deletes files"
- System model: Files in trash can be restored
- Problem: If "empty trash" permanently deletes without warning, the system violates the mental model

### Memory and Recognition

**Recognition is easier than recall:**
- Users recognize what they see more easily than they remember what to do
- Design implication: Use visible menus instead of command-line interfaces for casual users

**Short-term memory limitations:**
- Humans can hold 7 ± 2 items in short-term memory
- Design implication: Keep options visible, chunk information

---

## Worked Examples

### Worked Example 1: Identifying Usability Components

**Scenario:** A user attempts to book a flight on a travel website.

| Observation | Usability Component |
|-------------|---------------------|
| User completes the booking successfully | Effectiveness |
| User completes the booking in 3 minutes | Efficiency |
| User says "That was easy and pleasant" | Satisfaction |
| User cannot find the search button | Effectiveness (failure) |
| User takes 15 minutes due to confusing navigation | Efficiency (poor) |
| User feels frustrated and anxious | Satisfaction (poor) |

### Worked Example 2: Applying Nielsen's Heuristics

**Scenario:** Evaluate a login form.

| Heuristic | Observation | Rating |
|-----------|-------------|--------|
| Visibility of status | No loading indicator during login attempt | Violation |
| Match with real world | "Authenticate" button instead of "Sign In" | Violation |
| User control | No "Forgot password?" link | Violation |
| Consistency | Submit button in different place than other forms | Violation |
| Error prevention | Password field accepts any input without guidance | Violation |
| Recognition | No "Show password" option | Minor issue |
| Flexibility | No "Remember me" checkbox | Minor issue |
| Minimalist design | Form has 5 unnecessary fields | Violation |
| Error recovery | Error message: "Authentication failed" | Violation |
| Help | No help text for password requirements | Violation |

**Conclusion:** The login form has serious usability problems across most heuristics.

### Worked Example 3: Mental Model Analysis

**Scenario:** A file sync application shows a cloud icon that turns red when files are out of sync.

**User Mental Model:** "Red means danger or error. My files are in danger!"

**System Model:** Red simply means "not synced yet — sync in progress"

**Problem:** The color choice conflicts with the mental model. Users panic when they see red.

**Solution:** Use a neutral color (blue or gray) with a progress indicator for "syncing." Reserve red for actual errors.
