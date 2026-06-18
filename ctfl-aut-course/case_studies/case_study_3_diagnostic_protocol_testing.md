# 📂 Case Study 3 — Diagnostic Protocol Testing

## 🎬 Scenario

A vehicle diagnostic system implements UDS (Unified Diagnostic Services) over CAN. It must support:
- DTC reading and clearing
- ECU identification
- Software download (flashing)
- Routine control (test sequences)
- Security access (seed/key authentication)

## ❓ Questions

1. What test types apply to diagnostic protocols?
2. How should security access be tested?
3. What flash programming tests are needed?
4. How should DTC functionality be verified?

## ✔️ Model Answers

### 🔷 Q1
Test types:
- **Protocol conformance:** Verify UDS specification compliance
- **Boundary testing:** Invalid service IDs, out-of-range parameters
- **Timing tests:** Response time, timeout handling
- **Error handling:** Incorrect sequence, invalid states
- **Robustness:** Corrupted messages, bus-off recovery

### 🔷 Q2
Security access testing:
- Valid seed/key authentication sequence
- Invalid key rejection and retry counting
- Brute force protection (delay, lockout)
- Timing attack resistance
- Session timeout after authentication
- Privilege escalation attempts

### 🔷 Q3
Flash programming tests:
- Valid download sequence (request, transfer, verify)
- Interrupted download recovery
- Incorrect block sequence handling
- Memory write protection verification
- Checksum/crc validation
- Rollback to previous version

### 🔷 Q4
DTC verification:
- DTC setting on fault injection
- DTC clearing with correct conditions
- Snapshot data recording
- Extended data availability
- Permanent DTC handling (OBD requirements)
- DTC status byte transitions
