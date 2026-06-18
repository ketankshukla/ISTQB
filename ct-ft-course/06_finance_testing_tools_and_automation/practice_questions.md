# ❓ Chapter 6 — Finance Testing Tools and Automation: Practice Questions

---

### 🔷 Q1 (FT-6.1, K2)

Production financial data used in testing must be:

A. Copied exactly for realism
B. Masked or anonymized to protect sensitive information
C. Shared with all team members
D. Stored without encryption

---

### 🔷 Q2 (FT-6.2, K2)

Historical market data replay is used for:

A. Generating new trading strategies
B. Regression testing and reproducing past market conditions
C. Replacing live trading permanently
D. Social media analysis

---

### 🔷 Q3 (FT-6.3, K2)

A reconciliation tool identifies a "break" when:

A. Systems match perfectly
B. Two records do not match within defined tolerances
C. A trade is profitable
D. A user logs out

---

### 🔷 Q4 (FT-6.4, K2)

FIX protocol is primarily used for:

A. Web browsing
B. Electronic trading communication
C. Email messaging
D. Video streaming

---

### 🔷 Q5 (FT-6.1, K2)

Synthetic test data generation is preferred when:

A. The team has access to all production data
B. Privacy regulations prevent using real customer data
C. Only manual testing is performed
D. The system has no calculations

---

### 🔷 Q6 (FT-6.2, K2)

A market data simulator that generates prices based on statistical models is:

A. A historical replay tool
B. A synthetic data generator
C. A reconciliation engine
D. A payment gateway

---

### 🔷 Q7 (FT-6.3, K2)

Duco is an example of a:

A. Unit testing framework
B. Cloud-based reconciliation platform
C. Market data feed
D. Trading exchange

---

### 🔷 Q8 (FT-6.4, K2)

QuickFIX is:

A. A performance testing tool
B. An open-source FIX protocol engine for testing
C. A database management system
D. A UI automation tool

---

### 🔷 Q9 (FT-6.5, K2)

Golden source comparison in finance testing means:

A. Comparing system output against a trusted reference calculation
B. Testing with only gold-colored UI elements
C. Comparing two test environments
D. Using only production data

---

### 🔷 Q10 (FT-6.6, K2)

In a regulated CI/CD pipeline, production deployment should:

A. Be automatic after all tests pass
B. Require approval from a person separate from the developer
C. Only happen on Fridays
D. Skip testing to save time

---

### 🔷 Q11 (FT-6.1, K2)

Referential integrity in test data means:

A. Data looks realistic
B. Relationships between tables are preserved (e.g., customer to transactions)
C. Data is encrypted
D. Data is compressed

---

### 🔷 Q12 (FT-6.2, K2)

Stress testing a trading algorithm with a scenario simulator models:

A. Normal market conditions
B. Extreme events like flash crashes or high volatility
C. Average daily volume
D. Employee login behavior

---

### 🔷 Q13 (FT-6.3, K2)

Manual matching in reconciliation is required when:

A. Systems match automatically
B. Breaks cannot be resolved by automated rules
C. There are no transactions
D. The system is offline

---

### 🔷 Q14 (FT-6.4, K2)

In FIX protocol, message type "D" represents:

A. Logon
B. New Order - Single
C. Execution Report
D. Heartbeat

---

### 🔷 Q15 (FT-6.5, K2)

Round-trip testing in finance systems verifies:

A. Only the user interface
B. A complete transaction lifecycle from initiation to settlement
C. Only the database connection
D. Only the login process

---

### 🔷 Q16 (FT-6.6, K2)

A quality gate in a regulated CI/CD pipeline might require:

A. Only that the build compiles
B. All calculation tests pass, no critical vulnerabilities, and code review complete
C. Only that the UI looks good
D. Only that the deployment is fast

---

### 🔷 Q17 (FT-6.1, K2)

Which tool is commonly used for data masking?

A. JMeter
B. Delphix
C. Selenium
D. Cucumber

---

### 🔷 Q18 (FT-6.2, K2)

Backtesting a trading strategy means:

A. Testing it on future data
B. Testing it against historical data to evaluate past performance
C. Testing only the backend
D. Testing only during market hours

---

### 🔷 Q19 (FT-6.3, K2)

A tolerance match in reconciliation accepts records when:

A. They are identical in all fields
B. They match within a defined acceptable difference (e.g., $0.01)
C. They have the same date
D. They have the same user ID

---

### 🔷 Q20 (FT-6.4, K2)

FIX session recovery after a network interruption involves:

A. Restarting the application
B. Resend Request messages to fill gaps in sequence numbers
C. Ignoring missing messages
D. Creating a new session

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**
**Rationale:** Production data must be masked/anonymized for privacy and security.

### 🔷 Q2
**Answer: B**
**Rationale:** Historical replay reproduces actual past market conditions for regression.

### 🔷 Q3
**Answer: B**
**Rationale:** A break occurs when records don't match within defined tolerances.

### 🔷 Q4
**Answer: B**
**Rationale:** FIX is the standard protocol for electronic trading.

### 🔷 Q5
**Answer: B**
**Rationale:** Synthetic data avoids privacy issues with real customer data.

### 🔷 Q6
**Answer: B**
**Rationale:** Synthetic generators create prices from statistical models, not historical data.

### 🔷 Q7
**Answer: B**
**Rationale:** Duco is a cloud-based reconciliation platform.

### 🔷 Q8
**Answer: B**
**Rationale:** QuickFIX is an open-source FIX engine.

### 🔷 Q9
**Answer: A**
**Rationale:** Golden source = trusted reference for comparison.

### 🔷 Q10
**Answer: B**
**Rationale:** Regulated environments require separate approval for production deployment.

### 🔷 Q11
**Answer: B**
**Rationale:** Referential integrity preserves relationships between related tables.

### 🔷 Q12
**Answer: B**
**Rationale:** Scenario simulators model extreme events for stress testing.

### 🔷 Q13
**Answer: B**
**Rationale:** Manual matching resolves breaks that automated rules can't handle.

### 🔷 Q14
**Answer: B**
**Rationale:** FIX msg type 35=D is New Order - Single.

### 🔷 Q15
**Answer: B**
**Rationale:** Round-trip testing covers the full transaction lifecycle.

### 🔷 Q16
**Answer: B**
**Rationale:** Quality gates in regulated pipelines include tests, security, and reviews.

### 🔷 Q17
**Answer: B**
**Rationale:** Delphix is a data masking and virtualization tool.

### 🔷 Q18
**Answer: B**
**Rationale:** Backtesting evaluates strategy against historical data.

### 🔷 Q19
**Answer: B**
**Rationale:** Tolerance match accepts records within a defined acceptable difference.

### 🔷 Q20
**Answer: B**
**Rationale:** FIX recovery uses Resend Request to fill sequence gaps.
