# CT-SEC Mock Exam 2

**Instructions:**
- 40 questions, 60 minutes, single best answer, no negative marking

---

### Q1

Which OWASP category involves sending untrusted data to interpreters?

A. Broken Access Control
B. Cryptographic Failures
C. Injection
D. Security Misconfiguration

---

### Q2

A data warehouse applies schema:

A. Before writing data
B. When reading data
C. During backup
D. Only for unstructured data

---

### Q3

An intrusion detection system (IDS) that alerts on suspicious activity is a:

A. Preventive control
B. Detective control
C. Corrective control
D. Deterrent control

---

### Q4

A backup system used to restore data after a ransomware attack is a:

A. Preventive control
B. Detective control
C. Corrective control
D. Deterrent control

---

### Q5

"All passwords must be hashed with bcrypt before storage" is:

A. A functional requirement
B. A security requirement
C. A performance requirement
D. A usability requirement

---

### Q6

Shift-left security means:

A. Moving security testing to the right side of the timeline
B. Integrating security activities earlier in the SDLC
C. Only testing after production deployment
D. Removing security from development

---

### Q7

In Hadoop, YARN is responsible for:

A. Storing data blocks
B. Managing cluster resources and scheduling jobs
C. Defining the file system namespace
D. Running SQL queries

---

### Q8

A DataFrame in Spark is:

A. A mutable distributed collection of objects
B. A distributed collection of data organized into named columns with a schema
C. A single-machine data structure
D. A type of NoSQL database

---

### Q9

Which is an example of a row-level validation rule?

A. customer_age must be between 0 and 120
B. order_total must equal SUM(line_item.amount)
C. customer_id must be unique
D. status must be in ('active', 'inactive')

---

### Q10

Data cleansing should be tested by verifying:

A. Only that bad data is fixed
B. That bad data is corrected AND good data is not corrupted
C. Only the number of records changed
D. The speed of the cleansing job

---

### Q11

A P95 response time of 3 seconds means:

A. 95% of requests completed in less than 3 seconds
B. The average response time is 3 seconds
C. The slowest request took 3 seconds
D. 95 requests took 3 seconds

---

### Q12

For a critical field like transaction_id, the completeness threshold should typically be:

A. 50%
B. 80%
C. 95%
D. 99.9% or 100%

---

### Q13

ELT is MOST appropriate when:

A. The target system has limited processing power
B. Raw data needs to be preserved for flexible, on-demand transformation
C. Data quality must be enforced before any loading
D. Only structured data is involved

---

### Q14

Regression testing a Spark job means:

A. Testing with more data than before
B. Verifying that changes to the job do not break existing expected outputs
C. Testing only new features
D. Deleting old test data

---

### Q15

A team observes that response times improve after the first few minutes of a test, even though load is constant. The likely explanation is:

A. The load generator is failing
B. System caches are warming up
C. The database is shrinking
D. Users are leaving the system

---

### Q16

Which is a software tuning approach?

A. Adding more RAM
B. Optimizing a slow database query by adding an index
C. Increasing network bandwidth
D. Buying a faster CPU

---

### Q17

A trend report comparing performance across releases is used to:

A. Track developer productivity
B. Detect performance regressions introduced by new code
C. Measure user satisfaction
D. Calculate marketing ROI

---

### Q18

A performance test that fails the CI/CD pipeline because P95 response time increased by 30% is an example of:

A. A false positive
B. A performance gate preventing regression
C. An incorrect configuration
D. A network issue

---

### Q19

Cloud-based testing is LEAST suitable when:

A. Testing a public-facing website
B. The system is behind strict firewalls with no exceptions for cloud IPs
C. Geographic distribution is needed
D. Very large load is required

---

### Q20

A component isolation test involves:

A. Testing all components simultaneously
B. Testing each component individually to find the source of a performance issue
C. Isolating the test team
D. Removing components from the system

---

### Q21

A valid reason to stop a performance test early is:

A. The test is running too fast
B. The system shows critical errors or becomes unstable
C. The testers want to go home
D. The load generator is working well

---

### Q22

A system shows slow response times, but the application server CPU is only 35%. The database server CPU is 90%. The bottleneck is likely:

A. The application server
B. The database server
C. The network
D. The load generator

---

### Q23

The steady state phase of a performance test is when:

A. The target load is maintained consistently
B. All users are logging in
C. The system is shutting down
D. Only one user is active

---

### Q24

Database lock contention is indicated by:

A. High CPU on the application server
B. High lock wait time and reduced throughput
C. Low network utilization
D. Fast query execution times

---

### Q25

A SQL injection vulnerability has CVSS 9.8, is publicly accessible, and no patch exists. The risk treatment should be:

A. Accept the risk
B. Mitigate immediately with WAF rules, input validation, and code fix
C. Transfer to insurance
D. Ignore until patch available

---

### Q26

A SAST tool flags 500 "SQL injection" findings. The FIRST step should be:

A. Fix all 500 immediately
B. Triage to identify true positives, false positives, and duplicates
C. Ignore all findings
D. Replace the SAST tool

---

### Q27

Verification testing after applying a WAF rule should confirm:

A. Only that the WAF is running
B. That attacks are blocked AND legitimate traffic works
C. That the application code was fixed
D. That logs are being generated

---

### Q28

Which is MORE dangerous to security posture?

A. False positives
B. False negatives
C. They are equally dangerous
D. Neither is dangerous

---

### Q29

A CVSS scope of "Changed" means:

A. The vulnerability only affects the vulnerable component
B. The vulnerability can affect resources beyond the vulnerable component's authority
C. The vulnerability has been patched
D. The vulnerability is in a test environment

---

### Q30

The executive summary of a security report should:

A. Include every technical detail
B. Provide a high-level overview of risk posture for leadership
C. Only list tool names used
D. Be omitted to save time

---

### Q31

To reduce false positives from SAST tools:

A. Accept all findings as real
B. Tune rules, verify manually, and maintain a whitelist
C. Never use SAST tools
D. Only scan production code

---

### Q32

Nmap is primarily used for:

A. Source code analysis
B. Network discovery and port scanning
C. Database encryption
D. Web application fuzzing

---

### Q33

IAST is characterized by:

A. Analyzing source code without execution
B. Testing running applications from the outside
C. Instrumenting running code to observe behavior during dynamic testing
D. Scanning only network ports

---

### Q34

A security gate in CI/CD should:

A. Always pass regardless of findings
B. Block deployment if critical security thresholds are not met
C. Only run manually
D. Only check code style

---

### Q35

GitLeaks is used to:

A. Scan git history for committed secrets and credentials
B. Test SQL injection
C. Scan network ports
D. Analyze Java bytecode

---

### Q36

Container image scanning in CI/CD is used to:

A. Improve container performance
B. Detect known CVEs in base images before deployment
C. Reduce container size
D. Add container labels

---

### Q37

Passive scanning in DAST:

A. Sends attack payloads to every endpoint
B. Analyzes traffic without sending additional attack payloads
C. Only works on HTTPS
D. Requires source code access

---

### Q38

Burp Suite is commonly used for:

A. Network port scanning
B. Web application security testing
C. Source code compilation
D. Database optimization

---

### Q39

The PRIMARY limitation of SAST is:

A. It requires a running application
B. High false positive rate and inability to find runtime issues
C. It only works for web applications
D. It is too fast

---

### Q40

Which statement about security testing is TRUE?

A. Security testing should only be done once before production release
B. Security testing should be integrated throughout the development lifecycle
C. Security testing replaces functional testing
D. Security testing requires production data at all times

---

## End of Mock Exam 2
