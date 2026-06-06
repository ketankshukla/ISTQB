# Chapter 4 — Non-Functional Game Testing: Lessons

---

## 4.1 Performance Testing

### Frame Rate (FPS)

| Target | Scenario | Test |
|--------|----------|------|
| **60 FPS** | Action games, competitive multiplayer | Stress test with max enemies/particles |
| **30 FPS** | RPG, story-driven, console | Verify consistent in all areas |
| **90+ FPS** | VR | Critical for comfort; test min spec hardware |

### Frame Time

- More stable than FPS as a metric
- Target: consistent 16.6ms per frame (60 FPS)
- Spikes > 50ms are noticeable to players

### Loading Times

| Type | Target | Test |
|------|--------|------|
| **Boot to title** | < 30 sec | Cold start |
| **Title to gameplay** | < 10 sec | After pressing start |
| **Level load** | < 5 sec | Between levels |
| **Checkpoint load** | < 3 sec | After death |
| **Fast travel** | < 5 sec | World map teleport |

### Stress Testing

| Scenario | Method |
|----------|--------|
| **Max particles** | Trigger all explosions simultaneously |
| **Crowd scene** | Spawn maximum NPCs |
| **UI overload** | Open all menus and HUD elements |
| **Streaming** | Run through world at max speed |

---

## 4.2 Stability Testing

### Crash Testing

| Trigger | Test |
|---------|------|
| **Long play session** | 4+ hours continuous play |
| **Rapid scene changes** | Fast travel repeatedly |
| **Memory pressure** | Open/close levels rapidly |
| **Edge case inputs** | Invalid save files, corrupted data |

### Memory Leak Detection

| Method | Tool | Output |
|--------|------|--------|
| **Heap profiling** | Visual Studio, Instruments | Memory growth over time |
| **Asset tracking** | Custom tools | Unloaded assets still in memory |
| **Snapshot comparison** | Unity Profiler, Unreal Insights | Delta between snapshots |

### Recovery

| Scenario | Expected |
|----------|----------|
| **Crash during gameplay** | Auto-save recovery, no progress loss |
| **Crash during save** | Backup restore, no corrupt save |
| **Crash during multiplayer** | Reconnect option, state preserved |

---

## 4.3 Compatibility Testing

### Hardware

| Aspect | Variations |
|--------|-----------|
| **GPU** | Min spec, recommended, high-end |
| **CPU** | Dual-core, quad-core, many-core |
| **RAM** | Min, recommended |
| **Storage** | HDD, SSD |
| **Controllers** | Xbox, PlayStation, keyboard/mouse, third-party |

### OS and Drivers

| Component | Versions |
|-----------|----------|
| **Windows** | Minimum supported, latest |
| **macOS** | Supported versions |
| **iOS/Android** | Min SDK, latest |
| **GPU drivers** | Min recommended, latest |

### Resolution and Display

| Test | Variations |
|------|-----------|
| **Resolution** | 720p, 1080p, 1440p, 4K |
| **Aspect ratio** | 16:9, 21:9, 4:3 |
| **Refresh rate** | 60Hz, 120Hz, 144Hz, VRR |
| **HDR** | On/off, different peak brightness |

---

## 4.4 Accessibility Testing

### Visual

| Feature | Test |
|---------|------|
| **Colorblind modes** | Deuteranopia, protanopia, tritanopia |
| **Text size** | Small, medium, large |
| **Contrast** | Sufficient for low vision |
| **Subtitle options** | Size, background, speaker labels |

### Motor

| Feature | Test |
|---------|------|
| **Remappable controls** | All actions reassignable |
| **Toggle vs hold** | Sprint, aim, crouch |
| **Adjustable difficulty** | Affects timing requirements |
| **Single-hand play** | Feasible for all critical paths |

### Cognitive

| Feature | Test |
|---------|------|
| **Tutorial clarity** | Step-by-step with no time pressure |
| **Pause functionality** | Available at all times |
| **HUD customization** | Reduce clutter |
| **Text-to-speech** | Menus and subtitles |

---

## 4.5 Localization Testing

### Text

| Check | Method |
|-------|--------|
| **Truncation** | Longest translation strings |
| **Font support** | All language characters render |
| **RTL (right-to-left)** | Arabic, Hebrew layout |
| **Text expansion** | German can be 30% longer than English |

### Audio

| Check | Method |
|-------|--------|
| **Dubbed VO** | Lip sync, emotion match |
| **Subtitle sync** | Text matches spoken dialogue |
| **Audio levels** | Consistent across languages |

### Cultural

| Check | Method |
|-------|--------|
| **Symbols** | No offensive imagery |
| **References** | Culturally appropriate |
| **Regulations** | Content rating compliance per region |
| **Date/currency** | Local formats |

---

## 4.6 Audio-Visual Synchronization

| Element | Sync Test |
|---------|-----------|
| **Footsteps** | Sound matches animation frame |
| **Gunshots** | Audio matches muzzle flash |
| **Dialogue** | Lip movement matches spoken words |
| **Cutscenes** | Audio and video in sync throughout |
| **Music cues** | Triggered at correct gameplay moment |

---

## Worked Examples

### Worked Example 1: Performance Budget

**Scenario:** Action game targeting 60 FPS on console.

| Component | Budget | Test |
|-----------|--------|------|
| **Rendering** | 8ms | Max enemies + effects |
| **Physics** | 3ms | Max debris + ragdolls |
| **AI** | 2ms | Max active NPCs |
| **Audio** | 1ms | All channels active |
| **Overhead** | 2.6ms | System, streaming |
| **Total** | 16.6ms | = 60 FPS |

### Worked Example 2: Compatibility Matrix

**Scenario:** PC game minimum and recommended specs.

| Config | GPU | CPU | RAM | Expected |
|--------|-----|-----|-----|----------|
| Minimum | GTX 1060 | i5-4590 | 8GB | 30 FPS, low settings |
| Recommended | RTX 3060 | i7-9700 | 16GB | 60 FPS, high settings |
| High-end | RTX 4090 | i9-13900 | 32GB | 120 FPS, ultra + ray tracing |

### Worked Example 3: Accessibility Checklist

**Scenario:** Evaluate an action game for accessibility.

| Category | Feature | Status |
|----------|---------|--------|
| Visual | Colorblind mode | Pass |
| Visual | Subtitle size options | Pass |
| Motor | Remappable controls | Pass |
| Motor | Toggle sprint | Missing — needs implementation |
| Cognitive | Adjustable game speed | Pass |
| Cognitive | Pause anytime | Pass |
