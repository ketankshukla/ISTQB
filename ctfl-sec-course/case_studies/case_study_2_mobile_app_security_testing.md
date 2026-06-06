# Case Study 2 — Mobile App Security Testing

## Scenario

A healthcare app stores patient data and communicates with a cloud API. It must comply with HIPAA. The app:
- Stores data locally on device
- Uses biometric authentication
- Syncs with cloud API over HTTPS
- Uses third-party SDKs for analytics

## Questions

1. What mobile-specific security risks must be tested?
2. How should local data storage be tested?
3. What third-party risks need assessment?
4. How does HIPAA compliance affect testing?

## Model Answers

### Q1
Mobile-specific risks:
- **Insecure data storage** — Local database encryption
- **Weak cryptography** — Hardcoded keys, weak algorithms
- **Insecure communication** — Certificate pinning validation
- **Insufficient authentication** — Biometric bypass, root detection
- **Code tampering** — Reverse engineering, runtime manipulation
- **Extraneous functionality** — Hidden debug endpoints

### Q2
Local storage testing:
- Verify SQLite/database encryption (AES-256)
- Check for sensitive data in logs, clipboard, caches
- Verify no data in backups without encryption
- Test app data after uninstall (should be removed)
- Check shared preferences for sensitive values
- Verify screenshot prevention in sensitive screens

### Q3
Third-party risk assessment:
- SDK permissions review (excessive permissions?)
- Data sharing practices (what data goes to analytics?)
- Known vulnerabilities in SDKs (CVE checks)
- Network traffic analysis (is data sent to unexpected domains?)
- Update policies (how quickly are SDKs patched?)

### Q4
HIPAA compliance testing:
- Encryption at rest and in transit (verified)
- Access controls (role-based, minimum necessary)
- Audit logging (all access to PHI)
- Session timeout after inactivity
- Data integrity verification
- Breach notification readiness
