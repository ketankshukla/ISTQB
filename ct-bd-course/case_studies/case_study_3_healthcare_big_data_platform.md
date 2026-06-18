# 📂 Case Study 3 — Healthcare Big Data Platform

## ⭐ Context

You are the Test Architect for HealthData, building a Big Data platform to integrate electronic health records (EHR), medical imaging, and genomics data for research and clinical decision support.

**Data Sources:**
- EHR system: 10 million patients, structured data (diagnoses, medications, lab results)
- PACS (imaging): 50 million images (DICOM format), 2PB storage
- Genomics: 100,000 whole-genome sequences, 30PB storage
- Wearables: Real-time streams from 500,000 devices

**Use Cases:**
- Clinical decision support (real-time alerts)
- Population health analytics
- Genomic research (variant analysis)
- Drug interaction detection

**Constraints:**
- HIPAA compliance required
- Data cannot leave encrypted enclave
- Latency < 2 seconds for clinical alerts
- 99.99% uptime required

---

## ♟️ Task 1: Architecture Testing Strategy

**Question:** Design a test strategy for the healthcare Big Data platform.

**Model Answer:**

**Architecture Overview:**
```
EHR → Kafka → Spark Streaming → HBase (real-time alerts)
     → HDFS → Spark Batch → Hive (analytics)
PACS → HDFS → Spark → Object Store (archival)
Genomics → HDFS → Spark/GATK → Variant DB
Wearables → Kafka → Spark Streaming → HBase
```

**Test Strategy by Layer:**

| Layer | Test Focus | Methods |
|-------|-----------|---------|
| Ingestion | Completeness, HIPAA encryption, schema validation | Row counts, encryption audit, schema registry tests |
| Real-time processing | Latency, alert correctness, fault tolerance | Injected test events with known outcomes, kill node tests |
| Batch processing | Transformation accuracy, genomic algorithm correctness | Known-variant test sets, clinical expert validation |
| Storage | Data integrity, encryption, access control | Checksums, penetration testing, audit logs |
| Consumption | Report accuracy, API correctness, data freshness | Reconciliation with source, SLA monitoring |

**Specialized Testing:**

1. **Genomic Testing:**
   - Use known benchmark datasets (GIAB — Genome in a Bottle)
   - Validate variant calling against gold standard
   - Test: Known variants must be detected; false positives < 1%

2. **Medical Image Testing:**
   - Validate DICOM metadata extraction
   - Test image de-identification (burned-in annotations removed)
   - Verify no PHI in image headers after de-identification

3. **HIPAA Compliance Testing:**
   - Access control: Verify role-based access
   - Encryption: Verify data encrypted at rest and in transit
   - Audit: Verify all access logged
   - De-identification: Verify Safe Harbor rules applied

---

## ⭐ Task 2: Real-Time Alert Testing

**Question:** A clinical alert system must flag potential drug interactions within 2 seconds of medication order entry. Design tests.

**Model Answer:**

**Test Scenarios:**

| Scenario | Input | Expected Alert | Latency Requirement |
|----------|-------|----------------|---------------------|
| Known interaction | Order warfarin + aspirin | HIGH: Major interaction | < 2 seconds |
| No interaction | Order amoxicillin | None | < 2 seconds |
| Allergy match | Order penicillin (patient allergic) | CRITICAL: Allergy | < 1 second |
| Dose alert | Order 10x normal dose of insulin | HIGH: Dose exceeds max | < 2 seconds |
| Duplicate therapy | Order two ACE inhibitors | MEDIUM: Duplicate class | < 2 seconds |
| Complex case | 5 medications, 1 interaction | HIGH: Specific pair flagged | < 2 seconds |

**Performance Test Design:**

1. **Baseline latency:**
   - Inject 1,000 medication orders
   - Measure alert latency for each
   - Report: P50, P95, P99 latencies
   - Requirement: P99 < 2 seconds

2. **Load test:**
   - Simulate 10 hospitals, 1,000 concurrent orders/minute
   - Measure if latency degrades under load
   - Requirement: P99 < 2 seconds at peak load

3. **Fault tolerance:**
   - Kill one Kafka broker during test
   - Verify: No alerts lost, latency may increase but stays < 5 seconds
   - Recovery: When broker restarts, system resumes normal latency

4. **Data freshness:**
   - Add new drug interaction to knowledge base
   - Verify alert system picks up change within 5 minutes
   - Test: Order new interacting combination → alert fires

**Example Test Execution:**
```
Test: Drug interaction alert (warfarin + aspirin)
Injected: 2024-06-15 10:00:00.000
Alert received: 2024-06-15 10:00:01.200
Latency: 1.2 seconds
Requirement: < 2 seconds
Result: PASS
```

---

## 🗃️ Task 3: Genomic Data Processing Test

**Question:** A variant calling pipeline processes whole-genome sequences. How do you test its accuracy?

**Model Answer:**

**Test Dataset:**
- Use NIST GIAB (Genome in a Bottle) benchmark sample
- This is a well-characterized genome with known variants
- "Truth set" of ~5 million known variants

**Accuracy Metrics:**

| Metric | Definition | Target |
|--------|------------|--------|
| Sensitivity (Recall) | True positives / (True positives + False negatives) | > 99% |
| Precision | True positives / (True positives + False positives) | > 99.5% |
| F1 Score | Harmonic mean of precision and recall | > 99% |

**Test Process:**

1. **Run Pipeline:**
   - Input: GIAB raw sequence data (30x coverage)
   - Pipeline: Alignment (BWA-MEM) → Variant calling (GATK HaplotypeCaller) → Filtering (VQSR)
   - Output: VCF file with called variants

2. **Compare to Truth:**
   - Use benchmarking tool (e.g., hap.py)
   - Compare called variants to known truth set
   - Classify: True positive, False positive, False negative

3. **Results Analysis:**

| Variant Type | True Positives | False Positives | False Negatives | Sensitivity | Precision |
|--------------|----------------|-----------------|-----------------|-------------|-----------|
| SNPs | 4,850,000 | 5,000 | 15,000 | 99.69% | 99.90% |
| Indels | 520,000 | 8,000 | 12,000 | 97.75% | 98.49% |

4. **Assessment:**
   - SNP calling: PASS (exceeds 99% sensitivity target)
   - Indel calling: FAIL (97.75% sensitivity below 99% target)

5. **Tuning:**
   - Adjust GATK filtering parameters for indels
   - Re-run test
   - New indel sensitivity: 99.1% → PASS

**Regression Testing:**
- After every pipeline update, run GIAB benchmark
- Compare new results to previous baseline
- Alert if sensitivity or precision drops

---

## 🔒 Task 4: Data Security and Access Control Testing

**Question:** How do you test HIPAA compliance for the platform?

**Model Answer:**

**Access Control Testing:**

| Role | Allowed Access | Test |
|------|---------------|------|
| Physician | Own patients' records | Attempt to access → PASS; Attempt other patients → DENY |
| Nurse | Assigned patients' records | Access assigned → PASS; Access unassigned → DENY |
| Researcher | De-identified aggregates | Access aggregates → PASS; Access PHI → DENY |
| Admin | Audit logs only | Access logs → PASS; Access patient data → DENY |
| Unauthorized | None | Any access → DENY + alert |

**Encryption Testing:**

1. **At rest:**
   - Verify HDFS encryption zones enabled
   - Verify object storage server-side encryption
   - Test: Attempt to read raw HDFS block → encrypted data

2. **In transit:**
   - Verify TLS 1.3 for all connections
   - Verify no unencrypted ports open
   - Test: Packet capture → verify encrypted traffic

3. **In use (confidential computing):**
   - Verify enclave memory encryption
   - Test: Memory dump → encrypted

**Audit Logging Testing:**

| Action | Logged Fields | Verification |
|--------|-------------|--------------|
| Data access | User, timestamp, patient_id, fields accessed, action | Query audit table → all fields present |
| Failed access | User, timestamp, resource, reason | Query audit table → all failed attempts logged |
| Export | User, timestamp, records exported, destination | Verify export logged and approved |

**De-identification Testing:**

1. **Safe Harbor test:**
   - Verify removal of 18 HIPAA identifiers (name, SSN, dates, etc.)
   - Automated scan for remaining identifiers
   - Result: 0 identifiers detected → PASS

2. **Re-identification risk:**
   - Attempt to re-identify using quasi-identifiers (zip code, birth date, gender)
   - Test: With zip+age+gender, can patient be identified?
   - Mitigation: Generalize zip to 3 digits, generalize age to decade

3. **Image de-identification:**
   - DICOM header scrubbing: Verify no PHI in metadata
   - Burned-in text detection: OCR scan for names, dates
   - Result: No PHI detected → PASS

**Quarterly Compliance Audit:**
- Penetration testing
- Access log review for anomalies
- Data lineage verification for all PHI flows
- Employee access review (remove terminated employees)
