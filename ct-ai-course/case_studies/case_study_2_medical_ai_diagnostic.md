# Case Study 2 — Medical AI Diagnostic

## Context

You are the Quality Assurance Lead for MedAI, a healthcare startup developing an AI system to detect skin cancer from photographs.

**System:**
- CNN-based image classifier trained on 50,000 dermatology images
- Classifies images as: benign, suspicious, malignant
- Used by primary care physicians as a screening tool
- 99% accuracy reported by the development team

**Regulatory Environment:**
- FDA Class II medical device (requires clinical validation)
- HIPAA compliance required
- Physicians must be informed it is an AI assistant, not a replacement
- System must explain its recommendations

**Concerns:**
- 99% accuracy seems very high for a screening tool
- Model was trained primarily on light skin tones
- No testing on pediatric patients
- Physician liability if AI misses a cancer

## Task 1: Critiquing the 99% Accuracy Claim

**Question:** Analyze why 99% accuracy may be misleading and what metrics should be used.

**Model Answer:**

**Problems with the 99% Accuracy Claim:**

1. **Class Imbalance:** Skin cancer is rare. If only 1% of images show cancer, a model that always predicts "benign" achieves 99% accuracy while missing 100% of cancers.

2. **Dataset Bias:** Training on primarily light skin tones means the model may perform poorly on darker skin.

3. **Test Set Composition:** If the test set is from the same distribution as training, performance may be inflated.

**Recommended Metrics:**

| Metric | Why It Matters |
|--------|---------------|
| Sensitivity (Recall) | Of actual cancers, what % are detected? Missing cancer is dangerous |
| Specificity | Of benign cases, what % are correctly identified? Avoid unnecessary biopsies |
| PPV (Precision) | Of positive predictions, what % are actually cancer? |
| NPV | Of negative predictions, what % are truly benign? |
| AUC-ROC | Overall discrimination ability |
| Performance by skin tone | Ensure equitable performance |

**Expected Realistic Performance:**
- Sensitivity: 85-95% (must be high)
- Specificity: 70-85% (trade-off with sensitivity)
- PPV: 20-40% (many suspicious lesions are benign)

---

## Task 2: Fairness and Robustness Testing

**Question:** Design comprehensive fairness and robustness tests.

**Model Answer:**

**Fairness Testing:**

| Test Group | Images | Minimum Sensitivity |
|------------|--------|---------------------|
| Light skin (Fitzpatrick I-II) | 5,000 | 90% |
| Medium skin (Fitzpatrick III-IV) | 5,000 | 85% |
| Dark skin (Fitzpatrick V-VI) | 5,000 | 85% |
| Pediatric (< 18 years) | 2,000 | 80% |
| Adult (18-65) | 10,000 | 90% |
| Senior (> 65 years) | 3,000 | 85% |

**Acceptance:** Performance difference between any two groups must be < 10%.

**Robustness Testing:**

| Test Type | Variation | Expected |
|-----------|-----------|----------|
| Image quality | Blur, noise, compression artifacts | Performance drop < 15% |
| Lighting | Underexposed, overexposed, color casts | Performance drop < 15% |
| Camera type | Smartphone, dermoscope, clinical camera | Consistent performance |
| Lesion size | Small (< 5mm), medium, large (> 20mm) | All sizes detected |
| Body location | Face, back, arm, leg | Location-agnostic |
| Adversarial | Small perturbations to image | No misclassification to benign |

---

## Task 3: Test Oracle Design for Medical AI

**Question:** Design test oracles for a system where "correct" diagnosis may be uncertain even for experts.

**Model Answer:**

**Oracle 1: Consensus Panel**
- 3 board-certified dermatologists review each test image
- Majority vote is the "ground truth"
- Images with disagreement are flagged and excluded from pass/fail metrics

**Oracle 2: Histopathology Gold Standard**
- For images where biopsy was performed, histopathology result is the ground truth
- Only used for images with confirmed pathology

**Oracle 3: Metamorphic Relations**
- If original image is cancer, slightly rotated/cropped version should still be cancer
- If a close-up of the lesion is cancer, the full image should also be cancer
- Adding benign background should not change cancer classification

**Oracle 4: Risk Stratification**
- Not just cancer/no cancer
- System outputs: "High confidence malignant," "Suspicious — biopsy recommended," "Likely benign — monitor," "Benign"
- Oracle checks that appropriate action is recommended

---

## Task 4: Explainability Requirements

**Question:** The system must explain its findings to physicians. Design the explainability testing.

**Model Answer:**

**Explanation Format:**

```
Image Analysis Report:

Prediction: Suspicious (65% confidence)
Recommendation: Biopsy recommended

Key visual features detected:
- Asymmetry: Present (contribution: +25%)
- Irregular borders: Present (contribution: +20%)
- Color variation: 3 colors detected (contribution: +15%)
- Diameter: 8mm (contribution: +5%)

Similar cases from training data:
- 12 cases with similar features: 8 malignant, 4 suspicious

Limitations:
- Performance may vary for skin types not well-represented in training data
- This is an AI assistant; clinical judgment should prevail
```

**Explainability Tests:**

| Test | Method | Pass Criteria |
|------|--------|---------------|
| Accuracy | Compare explanation features with model attention maps | Features mentioned are actually used by model |
| Completeness | Check all relevant features are mentioned | No critical features omitted |
| Consistency | Same lesion type produces similar explanations | Physicians can predict explanation structure |
| Actionability | Ask physicians if explanation helps decision-making | > 80% say it is helpful |
| Limitation disclosure | Check if known limitations are stated | All documented limitations appear |

---

## Task 5: Risk Management

**Question:** Identify the highest risks and mitigation strategies.

**Model Answer:**

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Missed cancer (false negative) | Medium | Critical | High sensitivity requirement (> 90%), human review of all negative cases |
| Unnecessary biopsy (false positive) | High | Medium | Clear explanation, physician makes final decision |
| Bias against dark skin | High | Critical | Fairness testing, diverse training data, performance monitoring by group |
| Over-reliance by physicians | Medium | High | Clear labeling as "AI assistant," required physician sign-off |
| Data privacy breach | Low | Critical | HIPAA compliance, encryption, access controls, audit logs |
| Model degradation | Medium | High | Continuous monitoring, scheduled retraining with new data |
| Adversarial attack | Low | High | Input validation, adversarial testing, anomaly detection |

**Testing Strategy:**
- Pre-market: Extensive validation on diverse, representative data
- Post-market: Continuous monitoring of real-world performance
- Regular fairness audits (quarterly)
- Annual comprehensive safety review
