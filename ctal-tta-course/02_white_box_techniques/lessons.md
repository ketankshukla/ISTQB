# 📘 Chapter 2 — White-Box Test Techniques: Lessons

---

## ⭐ 2.1 Control Flow Testing

### 🔷 Control Flow Graphs (CFG)

A control flow graph represents the flow of control through a program. It shows all paths that might be traversed through a program during its execution.

**Components:**
- **Node:** Represents one or more sequential statements (no branching within a node)
- **Edge:** Represents flow of control from one node to another
- **Decision node:** A node containing a condition that branches (e.g., if, while, for)
- **Junction node:** A point where multiple paths merge
- **Start node:** The entry point of the program or function
- **End node:** The exit point

### 🔷 Drawing a Control Flow Graph

**Example Code:**
```
1: function calculateDiscount(orderAmount, isVIP) {
2:     discount = 0;
3:     if (orderAmount > 100) {
4:         discount = 10;
5:     }
6:     if (isVIP == true) {
7:         discount = discount + 5;
8:     }
9:     return discount;
10: }
```

**CFG:**
```
[Start]
   |
[Node 1: discount = 0]
   |
[Decision: orderAmount > 100?] --True--> [Node 2: discount = 10]
   |False|                              |
   |<-------------------------------------|
   |
[Decision: isVIP == true?] --True--> [Node 3: discount = discount + 5]
   |False|                                |
   |<-------------------------------------|
   |
[Node 4: return discount]
   |
[End]
```

---

## 📊 2.2 Code Coverage Measures

### 📊 Statement Coverage

**Definition:** Every executable statement in the code is executed at least once.

**Formula:**
```
Statement Coverage = (Number of executed statements / Total number of executable statements) x 100%
```

**Example:**
```
1: function getGrade(score) {
2:     if (score >= 90) {
3:         return "A";
4:     }
5:     if (score >= 80) {
6:         return "B";
7:     }
8:     return "C";
9: }
```

**Total executable statements:** 6 (lines 2, 3, 5, 6, 8 — but lines 2, 5 are decisions, lines 3, 6, 8 are return statements). Actually, let's count more carefully:
- Line 2: if (score >= 90) — executable
- Line 3: return "A" — executable
- Line 5: if (score >= 80) — executable
- Line 6: return "B" — executable
- Line 8: return "C" — executable

Total = 5 executable statements.

**Test case 1:** score = 95
- Executed: lines 2, 3
- Coverage = 2/5 = 40%

**Test case 2:** score = 85
- Executed: lines 2, 5, 6
- Combined with TC1: lines 2, 3, 5, 6
- Coverage = 4/5 = 80%

**Test case 3:** score = 75
- Executed: lines 2, 5, 8
- Combined with TC1+TC2: lines 2, 3, 5, 6, 8
- Coverage = 5/5 = 100%

**Minimum test cases for 100% statement coverage: 3**

---

### 📊 Branch Coverage (Decision Coverage)

**Definition:** Every decision in the code has taken all possible outcomes (true and false) at least once.

**Formula:**
```
Branch Coverage = (Number of executed branches / Total number of branches) x 100%
```

**Example (same getGrade function):**

Decisions:
1. `score >= 90` → True branch (return "A"), False branch (continue)
2. `score >= 80` → True branch (return "B"), False branch (return "C")

Total branches = 4

**Test case 1:** score = 95
- Decision 1: True (return "A")
- Decision 2: Not reached
- Branches covered: 1/4

**Test case 2:** score = 85
- Decision 1: False
- Decision 2: True (return "B")
- Branches covered: 2/4 (decision 1 false, decision 2 true)

**Test case 3:** score = 75
- Decision 1: False
- Decision 2: False (return "C")
- Branches covered: 2/4 (decision 1 false already covered, decision 2 false)

**Combined coverage:**
- Decision 1: True (TC1), False (TC2, TC3) ✓
- Decision 2: True (TC2), False (TC3) ✓
- Total branches covered: 4/4 = 100%

**Minimum test cases for 100% branch coverage: 3** (but sometimes 2 if one test case covers multiple new branches)

Actually, can we do it in 2?
- TC1: score = 95 → D1 True, D2 not reached
- TC2: score = 75 → D1 False, D2 False
- This covers: D1 True, D1 False, D2 False — but D2 True is missing!

So we need at least 3 test cases, OR:
- TC1: score = 95 → D1 True
- TC2: score = 85 → D1 False, D2 True
- TC3: score = 75 → D1 False, D2 False

Wait, D1 False is covered by both TC2 and TC3. Can we optimize?

Actually with 3 test cases: 95, 85, 75 we get 100% branch coverage.

With 2 test cases: Is it possible?
- TC1: score = 95 → D1 True
- TC2: score = 75 → D1 False, D2 False
- Missing: D2 True

No, 2 test cases cannot achieve 100% branch coverage for this code. Minimum is 3.

---

### 📊 Path Coverage

**Definition:** Every possible path through the code is executed at least once.

**Example (getGrade function):**

Paths:
1. score >= 90 → return "A" (D1=True, D2 not reached)
2. score < 90 AND score >= 80 → return "B" (D1=False, D2=True)
3. score < 80 → return "C" (D1=False, D2=False)

Total paths = 3

**Minimum test cases for 100% path coverage: 3**

**Note:** Path coverage can be impractical for complex code due to exponential growth of paths.

---

### 📊 Coverage Hierarchy

```
Path Coverage (strongest)
    ↑
Branch Coverage
    ↑
Statement Coverage (weakest)
```

**Key insight:**
- 100% path coverage implies 100% branch coverage
- 100% branch coverage implies 100% statement coverage
- The reverse is NOT true

**Example:** A code snippet with a decision.
- Statement coverage may execute the decision but only take one branch
- Branch coverage requires both branches to be taken
- Path coverage requires all combinations of branches through the entire program

---

## ⭐ 2.3 Cyclomatic Complexity

### 🔷 Definition

Cyclomatic complexity is a measure of the structural complexity of code. It measures the number of linearly independent paths through a program.

### 🔷 Calculation Methods

**Method 1: Using the graph formula**
```
V(G) = E - N + 2P
```
Where:
- E = number of edges in the control flow graph
- N = number of nodes in the control flow graph
- P = number of connected components (usually 1 for a single function)

**Method 2: Using decision points**
```
V(G) = Number of decision points + 1
```
Or more precisely:
```
V(G) = Number of predicate nodes (nodes with out-degree > 1) + 1
```

**Method 3: Using regions in a planar graph**
```
V(G) = Number of regions in the control flow graph
```

### 💡 Worked Example

**Code:**
```
function calculateFee(amount, isRush) {
    fee = 10;
    if (amount > 100) {
        fee = fee + 5;
    }
    if (isRush == true) {
        fee = fee + 10;
    }
    return fee;
}
```

**Control Flow Graph:**
```
Node 1: fee = 10
Node 2: decision (amount > 100?)
Node 3: fee = fee + 5
Node 4: decision (isRush == true?)
Node 5: fee = fee + 10
Node 6: return fee
```

**Edges:**
- 1 → 2
- 2 → 3 (True)
- 2 → 4 (False)
- 3 → 4
- 4 → 5 (True)
- 4 → 6 (False)
- 5 → 6

Total edges (E) = 7
Total nodes (N) = 6
Connected components (P) = 1

**Calculation:**
```
V(G) = E - N + 2P = 7 - 6 + 2(1) = 3
```

**Using decision points:**
- Decision 1: amount > 100
- Decision 2: isRush == true
- V(G) = 2 + 1 = 3

**Interpretation:**
- Cyclomatic complexity = 3 means there are 3 linearly independent paths
- This means minimum 3 test cases are needed for path coverage

### 🔷 Complexity Interpretation

| Complexity | Risk Level | Action |
|-----------|-----------|--------|
| 1-10 | Low | Simple, easy to test |
| 11-20 | Moderate | More complex, careful testing needed |
| 21-50 | High | Complex, thorough testing required, consider refactoring |
| 50+ | Very High | Very complex, high defect risk, refactor recommended |

---

## 🗃️ 2.4 Data Flow Testing

### 🔷 Definitions

**Definition (DEF):** A location where a variable is assigned a value.
```
x = 5;        // DEF of x
read(x);      // DEF of x (from user input)
```

**Use (USE):** A location where a variable's value is accessed.
```
y = x + 1;    // USE of x
print(x);     // USE of x
if (x > 0)    // USE of x (predicate use)
```

**Definition-Use Pair (DU Pair):** A pair of locations where a variable is defined and then later used, with no intervening redefinition.

### 🧪 Types of Uses

**1. Computation Use (C-use):** The variable is used in a computation or output.
```
y = x + 1;    // C-use of x
print(x);     // C-use of x
```

**2. Predicate Use (P-use):** The variable is used in a condition.
```
if (x > 0)    // P-use of x
while (x < 10) // P-use of x
```

### 📊 Data Flow Coverage Criteria

**All-Defs Coverage:** Every definition of every variable is exercised at least once.

**All-Uses Coverage:** Every definition-use pair is exercised at least once.

**All-DU-Paths Coverage:** Every simple path from every definition to every use is exercised.

### 💡 Worked Example

**Code:**
```
1: function getMax(a, b) {
2:     max = a;        // DEF of max
3:     if (b > max) {  // P-use of b, P-use of max
4:         max = b;    // DEF of max
5:     }
6:     return max;     // C-use of max
7: }
```

**Variables and their DEF/USE:**

**Variable: max**
- DEF at line 2
- DEF at line 4
- P-use at line 3
- C-use at line 6

**DU Pairs for max:**
- DEF(2) → P-use(3): max defined at line 2, used in condition at line 3
- DEF(2) → C-use(6): max defined at line 2, used in return at line 6 (if not overwritten at line 4)
- DEF(4) → C-use(6): max defined at line 4, used in return at line 6

**Test cases for All-Uses coverage:**
- TC1: a=5, b=3 → DEF(2) used at P-use(3) [b > max is false], then C-use(6) [max=5]
  - Covers: DEF(2) → P-use(3) and DEF(2) → C-use(6)
- TC2: a=5, b=10 → DEF(2) used at P-use(3) [b > max is true], DEF(4) used at C-use(6)
  - Covers: DEF(2) → P-use(3) and DEF(4) → C-use(6)

**Minimum test cases for All-Uses coverage: 2**

---

## 📊 2.5 MC/DC (Modified Condition/Decision Coverage)

### 🔷 What Is MC/DC?

Modified Condition/Decision Coverage is a rigorous coverage criterion required for safety-critical systems (DO-178C, ISO 26262). It requires that:

1. Every decision in the program takes all possible outcomes (true/false)
2. Every condition in a decision takes all possible outcomes (true/false)
3. **Each condition independently affects the decision's outcome** — changing only that condition while holding others constant changes the decision result

### 🔷 Why MC/DC?

- More thorough than branch coverage
- Ensures each condition is correctly implemented
- Required for safety-critical software (aviation, automotive, medical)

### 💡 Worked Example

**Decision:** `A AND B`

Truth table:

| Test | A | B | A AND B |
|------|---|---|---------|
| 1 | T | T | T |
| 2 | T | F | F |
| 3 | F | T | F |
| 4 | F | F | F |

**MC/DC requirement:**
- For condition A to independently affect the outcome:
  - A=T, B=T → result T
  - A=F, B=T → result F
  - Changing only A (T→F) changes result (T→F) ✓

- For condition B to independently affect the outcome:
  - A=T, B=T → result T
  - A=T, B=F → result F
  - Changing only B (T→F) changes result (T→F) ✓

**Minimum test cases for MC/DC of `A AND B`:** 3 (tests 1, 2, 3)
- Test 1: A=T, B=T (base case, outcome T)
- Test 2: A=T, B=F (shows B affects outcome)
- Test 3: A=F, B=T (shows A affects outcome)

Note: Test 4 (F,F) is redundant for MC/DC.

**Decision:** `A OR B`

| Test | A | B | A OR B |
|------|---|---|--------|
| 1 | F | F | F |
| 2 | F | T | T |
| 3 | T | F | T |
| 4 | T | T | T |

**MC/DC test cases:** Tests 1, 2, 3

**Decision:** `A AND (B OR C)`

For MC/DC, we need to show each condition independently affects the outcome. This requires more test cases.

For condition A:
- A=T, B=F, C=F → result F (because B OR C = F)
- A=F, B=F, C=F → result F
- Wait, both give F. Need different values.

Let's be more careful:
- A=T, B=T, C=F → B OR C = T, so A AND T = T
- A=F, B=T, C=F → B OR C = T, so F AND T = F
- Changing only A changes outcome from T to F ✓

For condition B:
- A=T, B=T, C=F → result T
- A=T, B=F, C=F → result F (because B OR C = F)
- Changing only B changes outcome from T to F ✓

For condition C:
- A=T, B=F, C=T → result T
- A=T, B=F, C=F → result F
- Changing only C changes outcome from T to F ✓

**MC/DC minimum test cases:** Can be achieved with 4 test cases (n+1 for n conditions, but sometimes can be optimized).

### 📊 Coverage Comparison

| Criterion | Rigor | Test Cases for n conditions |
|-----------|-------|---------------------------|
| Statement | Low | Minimal |
| Branch | Medium | ~2 per decision |
| MC/DC | High | n+1 (for n conditions in a decision) |
| Path | Very High | Exponential |

---

## 🎯 2.6 Selecting White-Box Techniques

### 🎯 When to Use Each Technique

**Statement Coverage:**
- Minimum acceptable coverage for non-critical systems
- Quick to achieve
- Does not guarantee decision outcomes are tested

**Branch Coverage:**
- Recommended standard for most systems
- Ensures both true and false outcomes of decisions
- Good balance of thoroughness and effort

**Path Coverage:**
- Used for small, critical modules
- Impractical for large/complex code
- Often approximated with basis path testing (cyclomatic complexity number of paths)

**Data Flow Coverage:**
- Used when data handling is critical
- Finds defects related to variable initialization and usage
- Good for modules with complex data manipulations

**MC/DC:**
- Required for safety-critical systems (DO-178C, ISO 26262)
- Very thorough but requires many test cases
- Ensures each condition is correctly implemented

### 💡 Worked Examples Summary

**Example 1: Coverage Calculation**

Code with 2 decisions, each with 2 outcomes:
- Statement coverage minimum: all statements executed
- Branch coverage minimum: 2 test cases (if decisions are independent)
- Path coverage minimum: up to 4 test cases (2x2)
- Cyclomatic complexity: 3 (2 decisions + 1)

**Example 2: Cyclomatic Complexity**

A function with:
- 1 if statement
- 1 for loop
- 1 while loop

Decision points = 3
Cyclomatic complexity = 3 + 1 = 4
Minimum basis paths = 4

**Example 3: MC/DC**

Decision: `(A > 0) AND (B < 10) AND (C == 5)`
- 3 conditions
- MC/DC requires at least 4 test cases (n+1 = 3+1 = 4)
- Each condition must be shown to independently affect the outcome
