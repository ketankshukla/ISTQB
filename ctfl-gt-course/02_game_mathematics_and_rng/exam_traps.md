# Chapter 2 — Game Mathematics and RNG Testing: Exam Traps

## Trap 1: Confusing Theoretical RTP with Actual RTP

**Trap:** Theoretical RTP is a mathematical calculation. Actual RTP fluctuates over time and approaches theoretical only over millions of plays.

**Example question:**
> A slot game advertises 96% RTP. After 1,000 spins, a player has received 88% RTP. This means:
>
> A. The game is rigged and does not meet the advertised RTP
> B. The game is defective and should be withdrawn
> C. Short-term variance is expected; 96% is a long-term theoretical value
> D. The player should demand a refund from the operator

**Correct answer:** C — Short-term results vary widely. RTP converges to theoretical only over very large numbers of plays.

---

## Trap 2: Thinking Previous Outcomes Affect Future Outcomes

**Trap:** In games with independent events (most gambling), previous outcomes do not influence future outcomes. This is the Gambler's Fallacy.

**Example question:**
> A roulette wheel has landed on red 8 times in a row. The probability of red on the next spin is:
>
> A. Higher than usual because red is "hot"
> B. Lower than usual because black is "due"
> C. The same as always (approximately 18/37 for European roulette)
> D. Impossible to determine

**Correct answer:** C — Each spin is independent. Previous outcomes do not change the probability.

---

## Trap 3: Confusing Uniformity with Randomness

**Trap:** An RNG must be both random AND uniform. A sequence can be non-uniform but still random, or uniform but predictable.

**Example question:**
> An RNG produces the sequence: 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6... This sequence is:
>
> A. Random because each number appears equally often
> B. Uniform but not random because it follows a repeating pattern
> C. Both random and uniform
> D. Neither random nor uniform

**Correct answer:** B — The sequence is perfectly uniform (each number appears equally) but completely predictable, therefore not random.

---

## Trap 4: Calculating RTP Without Accounting for All Combinations

**Trap:** To calculate RTP, you must account for ALL winning combinations and their probabilities, not just the highest-paying ones.

**Example question:**
> A tester calculates RTP by only including the top 3 jackpots in the paytable. The calculated RTP is 45%. What is wrong?
>
> A. The game has a 45% RTP
> B. The tester forgot to include smaller wins, bonus features, and other payouts
> C. 45% RTP is normal for slot machines
> D. The tester used the wrong formula

**Correct answer:** B — All winning combinations must be included in RTP calculation, not just jackpots.

---

## Trap 5: Thinking PRNGs Are Not Suitable for Gambling

**Trap:** Properly implemented PRNGs are widely used and suitable for gambling if they are cryptographically secure and properly seeded.

**Example question:**
> Which statement about PRNGs in gambling is TRUE?
>
> A. PRNGs should never be used in gambling; only hardware RNGs are acceptable
> B. PRNGs are suitable if they are cryptographically secure, properly seeded, and pass statistical tests
> C. PRNGs are always predictable and therefore unfair
> D. PRNGs are only used in free-to-play games, not real-money games

**Correct answer:** B — CSPRNGs with proper seeding and statistical validation are standard in regulated online gambling.
