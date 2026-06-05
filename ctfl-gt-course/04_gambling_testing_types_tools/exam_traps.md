# Chapter 4 — Gambling Testing Types and Tools: Exam Traps

## Trap 1: Confusing Functional Testing with RNG Testing

**Trap:** Functional testing verifies game mechanics work correctly. RNG testing verifies randomness and statistical properties. They are different but related.

**Example question:**
> A tester verifies that a slot machine pays the correct amount for 5 matching symbols. This is:
>
> A. RNG testing
> B. Functional testing
> C. Performance testing
> D. Security testing

**Correct answer:** B — Verifying correct payouts is functional testing. RNG testing would verify the outcomes are random and match expected probabilities.

---

## Trap 2: Thinking All Gambling Testing Can Be Automated

**Trap:** While much gambling testing can be automated, visual elements, usability, and some complex edge cases still require manual testing.

**Example question:**
> Which of the following is MOST difficult to automate in gambling testing?
>
> A. RTP calculation over 1,000,000 spins
> B. Verification that a bonus feature triggers at the correct frequency
> C. Assessment of whether the game is visually engaging
> D. Verification of paytable correctness

**Correct answer:** C — Visual engagement and subjective user experience are difficult to automate. The others are highly automatable.

---

## Trap 3: Confusing Load Testing with Stress Testing

**Trap:** Load testing tests expected capacity. Stress testing pushes beyond expected capacity to find breaking points.

**Example question:**
> A team simulates 5,000 concurrent players on a new slot game to see if response times remain acceptable. This is:
>
> A. Stress testing
> B. Load testing
> C. Usability testing
> D. Compatibility testing

**Correct answer:** B — Testing expected concurrent load is load testing. Stress testing would use MORE than 5,000 to find the breaking point.

---

## Trap 4: Thinking RTP Verification Requires Few Spins

**Trap:** RTP verification requires a very large sample size. A few hundred or thousand spins are not statistically significant.

**Example question:**
> A tester plays a slot game for 500 spins and calculates an RTP of 102%. They conclude the game is defective. This conclusion is:
>
> A. Correct — any RTP above 100% is a defect
> B. Incorrect — 500 spins is not a statistically significant sample for RTP verification
> C. Correct — the game must pay exactly the advertised RTP every session
> D. Incorrect — RTP above 100% is normal for slot machines

**Correct answer:** B — 500 spins is far too few for reliable RTP verification. Variance is high over small samples. RTP converges only over millions of spins.

---

## Trap 5: Confusing Local and Wide-Area Progressive Jackpots

**Trap:** Local progressives are linked across games on one operator. Wide-area progressives are linked across multiple operators.

**Example question:**
> A progressive jackpot is shared across 20 online casinos operated by different companies. This is:
>
> A. A local progressive
> B. A wide-area progressive
> C. A fixed jackpot
> D. An operator-specific jackpot

**Correct answer:** B — Wide-area progressives span multiple operators. Local progressives are confined to a single operator's platform.
