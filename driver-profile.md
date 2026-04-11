# Driver Profile — Snapshot: April 2026

## Background

- Started sim racing in 2011 with Logitech Driving Force GT (casual: F1 series, NFS Shift series)
- On-off hobby until 2025 — approximately 14 years of accumulated wheel/pedal muscle memory
- March 2025: restarted seriously — purchased Playseat Challenge (previously desk clamp), began with Assetto Corsa Competizione
- May 2025: switched to Le Mans Ultimate (LMU, rFactor2 engine)
- April 2026: ~1 year into hardcore GT3 sim racing; Year 1 of LMU specifically
- Sim racing is a hobby (not full-time): 40 hrs/week job, family, age 36

Key distinction: not a beginner. 14 years of casual exposure built foundational car control intuition. The 2025 restart represents Year 1 of physics-accurate, race-focused sim practice — not Year 1 of sim racing overall.

## Methodology

- Primary practice mode: offline races (not hotlap sessions)
- Hotlap data is never used for self-assessment — race pace is the only metric that counts
- Every session is verified in an offline race before conclusions are drawn
- Multi-car testing used deliberately to build adaptive car understanding, not to find a single optimal setup

## Hardware

- Wheel: Moza R9
- Pedals: SRP Lite Load Cell — brake capped at 45kg
- Rig: Playseat Challenge
- Environment: air-conditioned room (no physical heat, fatigue, or g-force stress)

## Known Hardware Constraints and Interpretation Adjustments

- **45kg brake cap**: real GT3 drivers apply 80–120kg at heavy-braking zones. The cap forces earlier, more linear braking — estimated pace cost of ~1.0s per lap at Spa (heavy-braking track). Tracks with lighter brake demands will show a smaller gap.
- **No g-forces / vibration / heat**: consistency metrics (std dev) are inflated vs real-world equivalent. A 0.24s std dev in sim under AC conditions would likely translate to 0.5–0.8s std dev in a real race car.
- **Adjusted comparison rule**: when comparing to real ELMS/WEC data, add ~1.5s to sim median for a honest real-world equivalent (1.0s brake + 0.5s comfort/fatigue).

## LMU-Specific Notes

- Successfully unlearned ACC's 100% threshold braking habit. In ACC, braking 100% all the way to the apex is viable; in LMU's rFactor2 tyre model, this produces massive understeer and tyre degradation.
- LMU requires progressive brake release and trail-braking — now internalized after ~1 year of race practice.
- Tyre degradation analysis should always be interpreted in race stint context (multi-lap races), not isolated tyre tests.
- Corvette Z06 GT3R often shows the highest variance in my hands (eg. ~0.5s std dev in Spa race stints) — likely due to American weight distribution demanding heavier brake modulation that the 45kg cap constrains most severely.

## Car Traits (Spa, Race Context)

- Porsche 911 GT3R: momentum-sensitive in traffic. Dirty air / off-line yields reduce front confidence and delay recommitment; small exit compromises can turn into an unrecoverable lap loss.
- Ferrari 296 GT3: front-tyre temperature state is the main limiter. FL tends to run hotter than FR; once FL spikes (eg. 91C+ after Les Combes-Malmedy), the understeer debt can persist to Fagnes unless driving is reset to reduce scrub.
- McLaren 720S GT3: tends to give a wider lap-to-lap confidence window (tighter spread) in Spa stint-1 race pace.

## Pace Reference — Spa-Franchorchamps (April 2026, 95% AI, Race Conditions)

All data from offline races. Median is the reliable pace indicator; best-to-median gap is typically < 0.5s in clean runs. It can widen with traffic, mistakes, or unusual tyre warm-up conditions.

| Car | Best | Median | Average | Std Dev | Clean Laps |
|-----|------|--------|---------|---------|-----------|
| Porsche 911 GT3R | 2:20.761 | 2:20.943 | 2:21.008 | 0.24s | 18 |
| McLaren 720S GT3 | 2:20.637 | 2:21.187 | 2:21.239 | 0.24s | 19 |
| Ferrari 296 GT3 | 2:21.095 | 2:21.628 | 2:21.599 | 0.27s | 18 |
| Aston Martin Vantage GT3 | 2:21.015 | 2:21.849 | 2:21.881 | 0.38s | 31 |
| Corvette Z06 GT3R | 2:20.790 | 2:21.769 | 2:21.744 | 0.52s | 31 |

Additional reference (same ELMS schedule, same setup/fuel/AI, tyre warmers OFF, started on a used quali set ~90%):

| Car | Best | Median | Average | Std Dev | Clean Laps |
|-----|------|--------|---------|---------|-----------|
| Ferrari 296 GT3 | 2:20.743 | 2:21.221 | 2:21.276 | 0.34s | 17 |

Note: warmers OFF changes the first laps materially (starting around 40C vs ~70C with warmers). It can reduce early over-driving/scrub and improve stint-wide race pace even if peak grip is slightly lower.

Additional reference (McLaren 720S GT3, stint 1 only):

| Car | Best | Median | Average | Std Dev | Clean Laps |
|-----|------|--------|---------|---------|-----------|
| McLaren 720S GT3 | 2:20.637 | 2:21.298 | 2:21.291 | 0.29s | 19 |

Multi-stint note (911 GT3R, Spa): reusing tyres for stint 2 can shift median race pace by ~+1.25s/lap vs the new-tyre stint, amplified by multi-class traffic.

**ELMS benchmark for reference** — Car #85 (Iron Dames, Porsche 911 GT3R) @ Spa 2025:
- Best: 2:19.907 | Median: 2:21.738 | Average: 2:21.672 | Std dev: 1.03s (multi-driver, race conditions)
- Sim median (Porsche) vs ELMS median: −0.795s (sim faster before hardware adjustment)
- Hardware-adjusted gap: sim is approximately on par with, or marginally slower than, ELMS pace
