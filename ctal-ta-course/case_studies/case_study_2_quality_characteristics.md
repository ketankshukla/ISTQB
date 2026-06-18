# 📂 Case Study 2 — Quality Characteristics in a Healthcare Application

## ⭐ Context

You are a Senior Test Analyst for MediCare Plus, a healthcare technology company developing a new patient management system. The system must comply with HIPAA regulations and support a large hospital network.

## 📑 System Requirements

**R1: Patient Registration**
- Capture patient demographics, insurance information, and emergency contacts
- Verify insurance eligibility in real-time via third-party payer APIs
- Generate a unique patient ID

**R2: Appointment Scheduling**
- Schedule, reschedule, and cancel appointments
- Send reminders via SMS and email
- Prevent double-booking of providers and rooms

**R3: Electronic Health Records (EHR)**
- Store patient medical history, diagnoses, medications, allergies
- Support structured data entry (SNOMED CT, ICD-10 codes)
- Enable searching and filtering of patient records

**R4: Prescription Management**
- Allow providers to create and renew prescriptions
- Check for drug-drug interactions
- Send prescriptions to pharmacies electronically

**R5: Billing and Claims**
- Generate insurance claims based on services rendered
- Submit claims to payers electronically
- Track claim status and payment

**R6: Reporting and Analytics**
- Generate operational reports (patient volume, revenue, no-shows)
- Support population health analytics
- Export data for research (de-identified)

**R7: Security and Compliance**
- Role-based access control (admin, provider, nurse, billing, patient)
- Audit logging of all data access and modifications
- Data encryption at rest and in transit
- HIPAA compliance documentation

---

## 💎 Task 1: Quality Characteristic Mapping

For each requirement R1-R7, identify the primary ISO 25010 quality characteristic being tested and the appropriate test types.

**Model Answer:**

| Requirement | Primary Quality Characteristic | Test Types |
|---|---|---|
| R1: Patient Registration | **Accuracy** + **Interoperability** | Functional correctness testing, API integration testing, data validation testing |
| R2: Appointment Scheduling | **Accuracy** + **Reliability** (Availability) | Functional testing, concurrency testing (double-booking prevention), notification testing |
| R3: Electronic Health Records | **Accuracy** + **Security** (Confidentiality, Integrity) | Data accuracy testing, access control testing, audit trail verification |
| R4: Prescription Management | **Accuracy** + **Security** (Integrity) | Drug interaction database accuracy, prescription workflow testing, authorization testing |
| R5: Billing and Claims | **Accuracy** + **Interoperability** | Calculation accuracy testing, EDI transaction testing, payer integration testing |
| R6: Reporting and Analytics | **Accuracy** + **Efficiency** | Report accuracy testing (verify totals), query performance testing, data export testing |
| R7: Security and Compliance | **Security** (all sub-characteristics) | Penetration testing, access control testing, encryption verification, audit log review |

---

## 🎨 Task 2: Security Testing Design

Design specific security tests for R7 (Security and Compliance).

**Model Answer:**

**Test 1: Access Control — Role-Based Access**
- **Objective:** Verify users can only access data appropriate to their role
- **Method:** Create test accounts for each role (admin, provider, nurse, billing, patient)
- **Test Cases:**
  - Provider attempts to view billing records → Denied
  - Nurse attempts to modify prescriptions → Denied
  - Billing attempts to view clinical notes → Denied
  - Patient attempts to view another patient's records → Denied
  - Admin attempts all actions → Allowed with audit log

**Test 2: Data Encryption — In Transit**
- **Objective:** Verify data is encrypted during transmission
- **Method:** Use network analysis tool (Wireshark, Burp Suite)
- **Test Cases:**
  - Capture login credentials during authentication → Verify HTTPS/TLS is used
  - Capture patient data during record retrieval → Verify no plaintext PHI in packets
  - Attempt HTTP access → Verify redirect to HTTPS

**Test 3: Audit Logging**
- **Objective:** Verify all data access and modifications are logged
- **Method:** Execute actions and examine audit logs
- **Test Cases:**
  - View patient record → Log shows user, timestamp, patient ID, action = VIEW
  - Modify patient address → Log shows old value, new value, user, timestamp
  - Export report → Log shows user, timestamp, report type, record count
  - Attempt unauthorized access → Log shows failed access attempt with details

**Test 4: Input Validation — SQL Injection**
- **Objective:** Prevent SQL injection attacks on search and data entry fields
- **Method:** Enter malicious SQL in input fields
- **Test Cases:**
  - Search patient: enter `' OR '1'='1` → Verify system rejects or sanitizes
  - Patient ID field: enter `1; DROP TABLE patients--` → Verify system rejects
  - Verify application uses parameterized queries or prepared statements

**Test 5: Session Management**
- **Objective:** Verify sessions expire and are protected
- **Method:** Test session behavior
- **Test Cases:**
  - Log in, leave idle for 15 minutes → Verify automatic logout
  - Copy session cookie to different browser → Verify session is invalidated
  - Log out, click back button → Verify sensitive data is not cached
  - Concurrent login from different locations → Verify policy is enforced

---

## ⭐ Task 3: Reliability and Efficiency Testing

Design tests for the appointment scheduling system (R2) under peak load.

**Model Answer:**

**Context:** The system must handle the first day of flu season when 500 patients call simultaneously to schedule appointments.

**Reliability Tests:**

**Test 1: Concurrency — Double-Booking Prevention**
- Simulate 50 users attempting to book the same time slot simultaneously
- Expected: Exactly 1 booking succeeds; 49 receive "slot unavailable" message
- Verify no double-bookings in database

**Test 2: Fault Tolerance — Database Failure**
- During active scheduling, simulate primary database failure
- Expected: System switches to secondary database without data loss
- Verify all transactions completed or rolled back cleanly
- Verify no appointments are lost

**Test 3: Recoverability — System Crash During Peak Load**
- Simulate 200 concurrent users scheduling appointments
- Force system restart mid-transaction
- Expected: System recovers; incomplete transactions are rolled back
- Verify data consistency after recovery
- Verify no orphaned records

**Efficiency Tests:**

**Test 1: Response Time Under Load**
- Load: 500 concurrent users scheduling appointments
- Expected: 95% of scheduling transactions complete within 3 seconds
- Measure: Average response time, 95th percentile, 99th percentile
- Fail if: > 5% of transactions exceed 3 seconds

**Test 2: Resource Utilization**
- Monitor CPU, memory, database connections, network I/O during peak load
- Expected: CPU < 80%, Memory < 8GB, DB connections < 80% of pool
- Identify bottlenecks (slow queries, blocking calls, memory leaks)

**Test 3: Endurance — Sustained Load**
- Run 200 concurrent users for 8 hours continuously
- Monitor for: memory leaks, connection pool exhaustion, log disk space
- Expected: System remains stable throughout; no degradation in response time

---

## ⭐ Task 4: Interoperability Testing

Design tests for R1 (insurance eligibility verification) and R5 (claims submission) integrations.

**Model Answer:**

**Test 1: API Contract Compliance**
- Verify request format matches payer API specification (SOAP/XML or REST/JSON)
- Verify response handling for all payer response types (eligible, ineligible, error, timeout)
- Test with sample requests and verify correct parsing of responses

**Test 2: Data Format Validation**
- Verify patient demographics map correctly to payer-required fields
- Verify insurance ID formats are transmitted correctly (may include dashes, letters)
- Verify date formats comply with payer expectations (MM/DD/YYYY vs. YYYY-MM-DD)

**Test 3: Error Handling**
- Simulate payer API unavailability → Verify system shows appropriate message to user
- Simulate timeout → Verify system retries with exponential backoff
- Simulate invalid response → Verify system logs error and continues operation
- Simulate payer rejecting claim → Verify system displays rejection reason and allows correction

**Test 4: Version Compatibility**
- Test with current payer API version
- Test with previous payer API version (if supported)
- Verify graceful handling if payer deploys new API version unexpectedly

**Test 5: Transaction Volume**
- Submit 1000 claims in batch
- Verify all claims are accepted by payer
- Verify claim status tracking updates correctly for all submissions
- Verify no duplicate submissions occur due to retry logic

---

## ♟️ Task 5: Risk-Based Testing Strategy

The go-live date is fixed and cannot be moved. You have time to execute only 70% of planned tests. Prioritize your testing.

**Model Answer:**

**Priority 1 — Critical (Must Test):**
1. Security — Access control and PHI protection (HIPAA violation risk = legal/financial)
2. Accuracy — Prescription drug interactions (patient safety risk)
3. Accuracy — Billing calculations (financial compliance risk)
4. Reliability — Concurrent scheduling (operational risk — system cannot function without this)

**Priority 2 — High (Should Test):**
5. Interoperability — Insurance eligibility and claims (revenue cycle risk)
6. Accuracy — Patient record data integrity (clinical risk)
7. Security — Audit logging (compliance risk)
8. Efficiency — Response time under expected load (user experience risk)

**Priority 3 — Medium (Can Test If Time):**
9. Suitability — Reporting features meet user needs
10. Portability — Cross-browser compatibility
11. Maintainability — System diagnostics and monitoring
12. Usability — Workflow efficiency for nurses

**Priority 4 — Low (Defer or Monitor in Production):**
13. Advanced analytics performance with large datasets
14. Mobile responsiveness (if primarily desktop use)
15. Cosmetic UI elements
16. Edge cases in rare insurance plan types

**Justification:** In healthcare, patient safety and regulatory compliance are non-negotiable. Financial accuracy is legally required. Operational core functionality (scheduling) must work. Lower-priority items can be addressed post-launch with monitoring and rapid response.
