# ❓ Chapter 4 — Gambling Testing Types and Tools: Practice Questions

---

### 🔷 Q1 (GT-4.1, K2)

A tester verifies that a blackjack game correctly pays 3:2 for a natural blackjack. This is:

A. RNG testing
B. Functional testing
C. Performance testing
D. Security testing

---

### 🔷 Q2 (GT-4.1, K2)

Which test verifies that a slot machine's bonus feature triggers at the frequency specified in the PAR sheet?

A. RNG testing
B. Game math verification
C. Functional testing
D. All of the above

---

### 🔷 Q3 (GT-4.2, K2)

Simulating 10,000 concurrent players on a sports betting platform to verify response times is:

A. Unit testing
B. Load testing
C. Static analysis
D. Usability testing

---

### 🔷 Q4 (GT-4.1, K2)

Verifying that a progressive jackpot meter increases by 1% of each qualifying bet is:

A. Functional testing
B. Performance testing
C. Compliance testing
D. Security testing

---

### 🔷 Q5 (GT-4.3, K2)

Which tool is MOST appropriate for verifying the statistical randomness of an RNG?

A. A UI automation framework
B. A statistical test suite such as Diehard or NIST SP 800-22
C. A spreadsheet calculator
D. A code linter

---

### 🔷 Q6 (GT-4.2, K2)

Testing whether a gambling website is usable by players with visual impairments is:

A. Functional testing
B. Accessibility / Usability testing
C. Security testing
D. Load testing

---

### 🔷 Q7 (GT-4.1, K2)

A progressive jackpot shared across multiple operators is called:

A. A fixed jackpot
B. A local progressive
C. A wide-area progressive
D. An operator jackpot

---

### 🔷 Q8 (GT-4.5, K2)

Which of the following is MOST suitable for automation in gambling testing?

A. Assessing visual appeal of a slot game
B. Verifying correct payout calculations across thousands of spins
C. Evaluating whether a game is fun to play
D. Judging the quality of customer support responses

---

### 🔷 Q9 (GT-4.3, K2)

A tester plays 2,000 spins on a slot game and calculates an RTP of 91%. The advertised RTP is 96%. The tester should:

A. Immediately report the game as defective
B. Recognize that 2,000 spins is too small a sample for reliable RTP verification
C. Conclude the game is cheating players
D. Demand the game be removed from the platform

---

### 🔷 Q10 (GT-4.2, K2)

Which non-functional test is MOST important before launching a new in-play sports betting feature?

A. Checking spelling in the user interface
B. Verifying sub-second odds update latency under load
C. Testing the login page on a desktop browser
D. Verifying the color scheme matches brand guidelines

---

### 🔷 Q11 (GT-4.1, K2)

Verifying that a poker game correctly creates side pots when multiple players are all-in for different amounts is:

A. Game mechanics testing
B. Security testing
C. Performance testing
D. Compatibility testing

---

### 🔷 Q12 (GT-4.4, K2)

Which tool is used to test the APIs that deliver live sports odds to a betting platform?

A. PAR sheet analyzer
B. API testing tool such as Postman or REST Assured
C. RNG statistical test suite
D. Reel strip analyzer

---

### 🔷 Q13 (GT-4.2, K2)

Running a slot game continuously for 72 hours to verify no memory leaks occur is:

A. Load testing
B. Stress testing
C. Endurance testing
D. Functional testing

---

### 🔷 Q14 (GT-4.1, K2)

Which of the following is a functional test specific to live dealer games?

A. Verifying the video stream synchronizes with game actions
B. Testing database query performance
C. Running penetration tests on the payment gateway
D. Measuring page load time on mobile devices

---

### 🔷 Q15 (GT-4.5, K2)

When automating regression tests for a slot game, the MOST important consideration is:

A. The game must use real money for accurate testing
B. The ability to inject controlled RNG outputs for reproducible test scenarios
C. Tests should only run during business hours
D. Automation is not useful for gambling games

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** Verifying correct payouts for specific game outcomes is functional testing.

### 🔷 Q2
**Answer: D**

**Rationale:** Bonus trigger frequency is part of the game math (PAR sheet), relies on RNG outputs, and is verified through functional gameplay testing.

### 🔷 Q3
**Answer: B**

**Rationale:** Simulating expected concurrent user load to verify performance is load testing.

### 🔷 Q4
**Answer: A**

**Rationale:** Jackpot increment behavior is a game mechanic verified through functional testing.

### 🔷 Q5
**Answer: B**

**Rationale:** Statistical test suites (Diehard, NIST) are designed specifically for RNG randomness verification.

### 🔷 Q6
**Answer: B**

**Rationale:** Testing for players with visual impairments is accessibility/usability testing.

### 🔷 Q7
**Answer: C**

**Rationale:** Wide-area progressives span multiple operators. Local progressives are confined to one operator.

### 🔷 Q8
**Answer: B**

**Rationale:** Payout calculations across large numbers of spins are highly automatable. Visual appeal, fun, and support quality require human judgment.

### 🔷 Q9
**Answer: B**

**Rationale:** 2,000 spins is insufficient for reliable RTP verification. Statistical variance is high over small samples.

### 🔷 Q10
**Answer: B**

**Rationale:** In-play betting requires real-time odds updates. Sub-second latency is critical for the product's viability.

### 🔷 Q11
**Answer: A**

**Rationale:** Side pot creation is a core game mechanic in poker. Verifying it is functional testing.

### 🔷 Q12
**Answer: B**

**Rationale:** API testing tools verify request/response correctness for odds feeds and betting APIs.

### 🔷 Q13
**Answer: C**

**Rationale:** Extended continuous operation to verify stability is endurance testing.

### 🔷 Q14
**Answer: A**

**Rationale:** Video stream synchronization with game actions is unique to live dealer games.

### 🔷 Q15
**Answer: B**

**Rationale:** Injecting controlled RNG outputs allows deterministic, reproducible test scenarios.
