# 📘 Chapter 3 — Static Analysis: Lessons

---

## 🔍 3.1 What Is Static Analysis?

**Definition:** Static analysis is the examination of software work products (code, design, documentation) without executing the code.

**What Static Analysis Can Find:**
- Coding standard violations (style, naming conventions)
- Structural issues (unreachable code, unused variables)
- Potential defects (null pointer dereferences, buffer overflows)
- Security vulnerabilities (injection points, weak cryptography)
- Complexity metrics (cyclomatic complexity, nesting depth)
- Maintainability issues (duplicate code, long methods)

**What Static Analysis Cannot Find:**
- Runtime behavior (memory leaks, performance bottlenecks)
- Functional correctness (does the code do what the user wants?)
- UI/UX issues
- Integration problems with external systems
- Timing and concurrency issues

---

## 🧪 3.2 Types of Static Analysis

### 🔷 1. Compilers and Interpreters

Compilers perform static analysis as part of the compilation process:
- Syntax checking
- Type checking
- Unreachable code detection
- Unused variable warnings

**Example:**
```java
int x;          // Compiler warning: x is never used
if (false) {    // Compiler warning: unreachable code
    doSomething();
}
```

### 🔷 2. Linters and Style Checkers

Tools that enforce coding standards and best practices:
- **ESLint:** JavaScript/TypeScript
- **Pylint:** Python
- **RuboCop:** Ruby
- **Checkstyle:** Java

**Checks:**
- Naming conventions
- Indentation and formatting
- Maximum line length
- Forbidden functions

### 📊 3. Metrics Calculators

Tools that calculate code metrics:
- Lines of code (LOC)
- Cyclomatic complexity
- Halstead metrics
- Maintainability index
- Comment ratio

### 🔒 4. Security Scanners (SAST)

Static Application Security Testing tools that find security vulnerabilities:
- **SonarQube** (with security plugins)
- **Checkmarx**
- **Fortify**
- **Veracode**

**Vulnerabilities detected:**
- SQL injection
- Cross-site scripting (XSS)
- Buffer overflows
- Weak cryptography
- Hardcoded credentials
- Insecure deserialization

### 🔷 5. Code Smell Detectors

Tools that identify patterns indicating potential problems:
- Duplicate code
- Long methods
- Large classes
- God objects
- Feature envy
- Dead code

---

## ⭐ 3.3 Cyclomatic Complexity in Depth

### 🔷 Calculation

**Formula:**
```
V(G) = E - N + 2P
```

Where:
- E = number of edges in the control flow graph
- N = number of nodes in the control flow graph
- P = number of connected components (usually 1)

**Alternative formula (for single-component graphs):**
```
V(G) = Number of decision points + 1
```

### 🗂️ Decision Points

A decision point is any statement that can branch:
- `if` statement
- `while` loop
- `for` loop
- `case` or `switch` statement (each case counts)
- `catch` block
- `&&` and `||` in conditions (can count as separate decisions)

**Note:** The `?:` ternary operator is also a decision point.

### 💡 Worked Example

**Code:**
```java
public int calculateShipping(double weight, boolean isExpress) {
    int cost = 5;                       // Node 1
    if (weight > 10) {                  // Decision 1
        cost += 10;                     // Node 2
    }
    if (isExpress) {                    // Decision 2
        cost *= 2;                      // Node 3
    }
    return cost;                        // Node 4
}
```

**Nodes (N):** 4 (including implicit start/end)
**Edges (E):**
- Start → Node 1
- Node 1 → Decision 1 (True → Node 2, False → Decision 2)
- Node 2 → Decision 2
- Decision 2 (True → Node 3, False → Node 4)
- Node 3 → Node 4
- Node 4 → End

Total edges = 7

**Calculation:**
```
V(G) = E - N + 2P = 7 - 5 + 2 = 4
```

Using decision points: 2 decisions + 1 = 3

Wait, let me recount the nodes more carefully including start and end:
- Start node
- Node 1: cost = 5
- Decision 1: weight > 10
- Node 2: cost += 10
- Decision 2: isExpress
- Node 3: cost *= 2
- Node 4: return cost
- End node

N = 8 nodes

Edges:
- Start → Node 1
- Node 1 → Decision 1
- Decision 1 True → Node 2
- Decision 1 False → Decision 2
- Node 2 → Decision 2
- Decision 2 True → Node 3
- Decision 2 False → Node 4
- Node 3 → Node 4
- Node 4 → End

E = 9 edges

```
V(G) = 9 - 8 + 2(1) = 3
```

Using decision points: 2 + 1 = 3 ✓

### 🔷 Complexity Guidelines

| Complexity | Risk | Action |
|-----------|------|--------|
| 1-10 | Low | Simple, easy to test |
| 11-20 | Moderate | More testing needed, consider simplification |
| 21-50 | High | Complex, significant testing required, refactoring recommended |
| 50+ | Very High | Very complex, high defect risk, refactor |

### 🔷 Nested Complexity

Nested decisions multiply the effective complexity:
```java
if (a > 0) {          // Decision 1
    if (b > 0) {      // Decision 2
        if (c > 0) {  // Decision 3
            // ...
        }
    }
}
```
Cyclomatic complexity = 4 (3 decisions + 1)

But the cognitive complexity (ease of understanding) is much higher due to nesting.

---

## 📊 3.4 Halstead Metrics

### 🔷 Basic Measures

**n1** = number of unique operators (e.g., +, -, *, /, =, if, while)
**n2** = number of unique operands (e.g., variables, constants)
**N1** = total occurrences of operators
**N2** = total occurrences of operands

### 📊 Derived Metrics

**Program Vocabulary:**
```
n = n1 + n2
```

**Program Length:**
```
N = N1 + N2
```

**Volume:**
```
V = N * log2(n)
```
Measures the size of the implementation.

**Difficulty:**
```
D = (n1/2) * (N2/n2)
```
Measures how difficult the code is to understand.

**Effort:**
```
E = D * V
```
Measures the effort required to implement or maintain the code.

**Time to Implement:**
```
T = E / 18 (in seconds)
```

**Bugs Delivered:**
```
B = V / 3000
```
Estimates the number of bugs in the code.

### 💡 Worked Example

**Code:**
```
a = b + c * 2;
```

**Operators:** =, +, *, ; (n1 = 4)
**Operands:** a, b, c, 2 (n2 = 4)
**N1:** = (1), + (1), * (1), ; (1) = 4
**N2:** a (1), b (1), c (1), 2 (1) = 4

**n = 4 + 4 = 8**
**N = 4 + 4 = 8**
**V = 8 * log2(8) = 8 * 3 = 24**
**D = (4/2) * (4/4) = 2 * 1 = 2**
**E = 2 * 24 = 48**

---

## 📊 3.5 Maintainability Metrics

### 🔷 Lines of Code (LOC)

**Physical LOC:** Count of all lines including comments and blank lines.
**Logical LOC:** Count of executable statements.

**Guidelines:**
- Functions should typically be 50-100 physical LOC or less
- Classes should be a few hundred LOC
- Very large files/modules are harder to maintain

### 🔷 Comment Ratio

```
Comment Ratio = (Lines of Comments / Total Lines) * 100%
```

**Guidelines:**
- 10-30% is generally reasonable
- Too few comments = hard to understand
- Too many comments = comments may be outdated or redundant

### 🤖 Maintainability Index

A composite metric combining several factors:

```
MI = 171 - 5.2 * ln(Halstead Volume) - 0.23 * Cyclomatic Complexity - 16.2 * ln(LOC) + 50 * sin(sqrt(2.46 * CommentRatio))
```

**Interpretation:**
- MI > 85: Highly maintainable
- 65 < MI <= 85: Moderately maintainable
- MI <= 65: Difficult to maintain

---

## 🔍 3.6 Static Analysis Tools and Their Use

### 🛠️ Tool Categories

**1. IDE-Integrated:**
- Real-time feedback as code is written
- Examples: Visual Studio IntelliSense, IntelliJ inspections, Eclipse warnings

**2. Build-Integrated:**
- Run as part of the build process
- Examples: SonarQube, ESLint in CI/CD

**3. Standalone:**
- Run independently of development environment
- Examples: PMD, FindBugs, FxCop

### 🔍 Selecting Static Analysis Tools

**Criteria:**
- **Language support:** Does it support your programming languages?
- **Rule set:** Does it check the rules you care about?
- **Integration:** Can it integrate with your CI/CD pipeline?
- **False positive rate:** Does it report too many irrelevant issues?
- **Reporting:** Does it provide useful reports and dashboards?
- **Cost:** Commercial vs. open-source

### 🔷 Dealing with Findings

**Severity Levels:**
- **Blocker:** Must fix immediately (security vulnerability, crash)
- **Critical:** Fix before release (major bug, significant security issue)
- **Major:** Fix in next release (code smell, potential bug)
- **Minor:** Fix when convenient (style issue, minor code smell)
- **Info:** Informational only (code metrics, suggestions)

**False Positives:**
- A finding that is not actually a defect
- Common in static analysis due to conservative analysis
- Must be reviewed and marked as "false positive" in the tool
- Too many false positives reduce trust in the tool

**False Negatives:**
- A real defect that the tool did not find
- Static analysis cannot find all defects
- Dynamic testing and manual review are still needed

### 🔍 Static Analysis in the Development Lifecycle

**Phase 1: Development (IDE)**
- Developers see issues as they code
- Immediate feedback, easy to fix

**Phase 2: Code Review**
- Static analysis reports inform code review
- Reviewers focus on issues the tool found

**Phase 3: Build/CI**
- Automated checks prevent issues from being committed
- Build fails if critical issues are found
- Trend tracking over time

**Phase 4: Release**
- Final quality gate before release
- Ensure no critical security vulnerabilities

---

## 🔍 3.7 Limitations of Static Analysis

**1. Cannot Verify Runtime Behavior:**
- Memory leaks, performance, concurrency issues
- Dynamic behavior depends on execution environment

**2. False Positives:**
- Conservative analysis may flag correct code
- Reduces developer trust if too frequent

**3. False Negatives:**
- Cannot find all types of defects
- Some vulnerabilities require runtime context

**4. Configuration Overhead:**
- Rules must be configured for the project
- Thresholds must be calibrated

**5. Language and Framework Limitations:**
- Some languages/frameworks have limited tool support
- Dynamic languages (Python, JavaScript) are harder to analyze statically

---

## 💡 Worked Examples

### 💡 Worked Example 1: Cyclomatic Complexity Calculation

**Code:**
```java
public String classify(int score) {
    if (score >= 90) {          // Decision 1
        return "A";
    } else if (score >= 80) {   // Decision 2
        return "B";
    } else if (score >= 70) {  // Decision 3
        return "C";
    } else {
        return "F";
    }
}
```

**Decision points:** 3 (if, else if, else if)
**Cyclomatic complexity:** 3 + 1 = 4

**Paths to test (basis path testing):**
1. score >= 90 → "A"
2. score = 85 → "B"
3. score = 75 → "C"
4. score = 60 → "F"

Minimum 4 test cases for basis path coverage.

### 💡 Worked Example 2: Static Analysis Finding Classification

**Finding 1:** "Potential null pointer dereference on line 45"
- Severity: Critical
- Action: Fix before release
- Type: Security/reliability defect

**Finding 2:** "Method has 150 lines of code"
- Severity: Major
- Action: Refactor into smaller methods
- Type: Maintainability issue

**Finding 3:** "Missing Javadoc on public method"
- Severity: Minor
- Action: Add documentation
- Type: Documentation issue

**Finding 4:** "Unused import on line 12"
- Severity: Info
- Action: Remove import
- Type: Code cleanliness

### 💡 Worked Example 3: Halstead Metrics

**Code:**
```
x = a + b;
y = x * 2;
if (y > 10) {
    z = y - 5;
}
```

**Operators:** =, +, *, ;, if, >, -, {, } (n1 = 9)
**Operands:** x, a, b, y, 2, 10, z, 5 (n2 = 8)
**N1:** = (3), + (1), * (1), ; (3), if (1), > (1), - (1) = 11
**N2:** x (2), a (1), b (1), y (3), 2 (1), 10 (1), z (1), 5 (1) = 11

**n = 9 + 8 = 17**
**N = 11 + 11 = 22**
**V = 22 * log2(17) ≈ 22 * 4.09 ≈ 90**
