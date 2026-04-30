# Driver Profile — Snapshot: April 2026

## Background

* Started sim racing in 2011 with Logitech Driving Force GT (casual: F1 series, NFS Shift series)
* On-off hobby until 2025 — approximately 14 years of accumulated wheel/pedal muscle memory
* March 2025: restarted seriously — purchased Playseat Challenge (previously desk clamp), began with Assetto Corsa Competizione
* May 2025: switched to Le Mans Ultimate (LMU, rFactor2 engine)
* September 2025: LMU released LMP3 cars (first ELMS DLC). Attempted LMP3 which has no ABS — discovered that 45kg at 100% input caused immediate lockups. Recalibrated effective brake ceiling to ~70% of 45kg to manage lockup threshold. Returning to GT3 afterwards produced significantly improved trail-braking feel — foot had been reprogrammed to modulate within a narrower, more precise pressure window. Accidental but significant brake modulation training event.
* April 2026: ~1 year into hardcore GT3 sim racing; Year 1 of LMU specifically
* Sim racing is a hobby (not full-time): 40 hrs/week job, family, age 36

Key distinction: not a beginner. 14 years of casual exposure built foundational car control intuition. The 2025 restart represents Year 1 of physics-accurate, race-focused sim practice — not Year 1 of sim racing overall.

## Driver Development Timeline

| Period | Event | Significance |
| --- | --- | --- |
| 2011–2024 | Casual sim racing, Logitech DFGT, F1/NFS series | Built foundational car control intuition over 14 years |
| March 2025 | Restarted seriously on ACC, Playseat Challenge purchased | Year 1 of structured practice begins |
| May 2025 | Switched from ACC to LMU (rFactor2 engine) | Fundamental braking technique reset — unlearned 100% threshold braking, began trail-braking development |
| May–September 2025 | Imola as primary home circuit, ~5 months | Trail-braking foundation built; race pace methodology established; multi-car testing approach adopted |
| September 2025 | LMP3 DLC released, attempted without ABS | Accidental brake modulation training — recalibrated foot from 45kg ceiling to ~30kg effective ceiling under lockup management; returning to GT3 produced measurably improved trail-braking precision |
| Late 2025 | Expanded to Spa-Francorchamps | Momentum management, traffic reading, multi-class racing exposure |
| Early 2026 | Sebring International Raceway | Bump absorption, left-right balance, cross-car consistency confirmed across 4 GT3 architectures within 0.277s |
| April 2026 | Barcelona Circuit de Catalunya | FL thermal management under constraint, ABS settings impact confirmed via controlled race experiments, mixed weather endurance strategy development |
| April 2026 | 3-hour solo mixed weather endurance race, Barcelona | First long-format endurance race attempt — stint structure, tyre allocation strategy, weather transition management |
| April 2026 | Spa GT3 setup/style consolidation (AMG and Ferrari) | Identified phase-separated control model: entry rotation managed via BB/diff choices, planted rear demanded from apex onward; confirmed through race median/sigma patterns |

## Methodology

* Primary practice mode: offline races (not hotlap sessions)
* Hotlap data is never used for self-assessment — race pace is the only metric that counts
* Every session is verified in an offline race before conclusions are drawn
* Multi-car testing used deliberately to build adaptive car understanding, not to find a single optimal setup
* Stint structure: 1–2 stints per day maximum, with 15-minute rest between stints
* Session logging: lap times recorded per stint in spreadsheet; trend graphs used to identify degradation patterns and ABS/setup effects

## Hardware

* Wheel: Moza R9
* Pedals: SRP Lite Load Cell — brake capped at 45kg
* Rig: Playseat Challenge
* Environment: air-conditioned room (no physical heat, fatigue, or g-force stress)

## Known Hardware Constraints and Interpretation Adjustments

* **45kg brake cap**: real GT3 drivers apply 80–120kg at heavy-braking zones. The cap forces earlier, more linear braking — estimated pace cost of ~1.0s per lap at Spa (heavy-braking track). Tracks with lighter brake demands will show a smaller gap.
* **No g-forces / vibration / heat**: consistency metrics (std dev) are inflated vs real-world equivalent. A 0.24s std dev in sim under AC conditions would likely translate to 0.5–0.8s std dev in a real race car.
* **Adjusted comparison rule**: when comparing to real ELMS/WEC data, add ~1.5s to sim median for a honest real-world equivalent (1.0s brake + 0.5s comfort/fatigue).
* **Mid-engine brake modulation**: 45kg cap constrains mid-engine cars (Ferrari, McLaren) less severely in hotlap context but becomes significant in race stints where repeated precise modulation is required. T7-T8 Wurth chicane type corners are most affected.

## LMU-Specific Notes

* Successfully unlearned ACC's 100% threshold braking habit. In ACC, braking 100% all the way to the apex is viable; in LMU's rFactor2 tyre model, this produces massive understeer and tyre degradation.
* LMU requires progressive brake release and trail-braking — now internalized after ~1 year of race practice.
* Tyre degradation analysis should always be interpreted in race stint context (multi-lap races), not isolated tyre tests.
* Corvette Z06 GT3R often shows the highest variance in my hands (eg. ~0.5s std dev in Spa race stints) — likely due to American weight distribution demanding heavier brake modulation that the 45kg cap constrains most severely.
* Tyre warmers are set OFF across all circuits for realism. New tyre starting temperature is ~23°C (ambient). Full operating window requires 4–5 laps, creating a meaningful pace cost on every tyre change.
* Traffic in race conditions acts as a passive tyre cooling mechanism — forced lift/coast laps behind slower cars measurably reduce FL temperature and can delay or partially reset the thermal cliff. This effect is confirmed across multiple Barcelona stints.
* LMP3 crossover effect (September 2025): brief LMP3 experience without ABS recalibrated brake modulation precision. The narrower lockup-free window in LMP3 trained finer pedal resolution that transferred directly to improved GT3 trail-braking release. Recognized in retrospect as one of the most significant single development events of Year 1.

## ABS Settings — Learnings

* ABS maps in LMU control front-rear threshold distribution and peak activation timing.
* **ABS 9** (rear sensitive, early activation, little slip): preferred race setting at Barcelona. Produces stable, consistent lap-to-lap pace, lower cognitive load, and delayed FL thermal cliff. Recommended for circuits with sustained right-hand loading.
* **ABS 8** (rear sensitive, medium activation): produces faster peak laps (confirmed 1:43.092 vs ~1:43.9 median) but at the cost of higher variance, earlier FL thermal cliff, greater cognitive exhaustion, and increased crash risk late in stints. Not recommended for race conditions.
* General principle: earlier ABS activation reduces front tyre heat generation per braking event. Over 30+ lap stints this compounds significantly.

## Car Traits (Spa, Race Context)

* Porsche 911 GT3R: momentum-sensitive in traffic. Dirty air / off-line yields reduce front confidence and delay recommitment; small exit compromises can turn into an unrecoverable lap loss.
* Ferrari 296 GT3: front-tyre temperature state is the main limiter. FL tends to run hotter than FR; once FL spikes (eg. 91C+ after Les Combes-Malmedy), the understeer debt can persist to Fagnes unless driving is reset to reduce scrub.
* McLaren 720S GT3: tends to give a wider lap-to-lap confidence window (tighter spread) in Spa stint-1 race pace.

## Car Traits (Barcelona, Race Context)

* Ferrari 296 GT3: FL thermal management is the defining challenge. Cliff arrives at approximately lap 17 in dry conditions. Campsa is the primary FL temperature indicator — increased lift requirement there signals imminent cliff. T3 is the first corner to become undriveable once FL is over threshold. Brake bias already at 48% (practical limit); tyre warmers off; ABS 9 confirmed optimal. No remaining setup dials — management is purely through driving inputs and line choices.
* Mid-engine cars (Ferrari, McLaren): brake scrub while turning at Campsa is a guaranteed rear rotation. Braking and turning inputs must be strictly separated at that corner.
* Key Barcelona tyre insight: FL temperature at T4 entry is ~93°C early stint, dropping to ~90.5°C late stint — partially explained by fuel burn (~15–20kg over 32 laps) reducing tyre load. This means the FL becomes slightly more manageable in the final third of a stint independent of driving inputs.
* Traffic as tyre service: confirmed across multiple stints. Forced cooldown laps behind backmarkers measurably reset FL temperature. Post-traffic laps consistently faster than pre-traffic equivalent laps. Effect is reliable enough to inform deliberate stint management strategy.

## Circuit Character Notes

* **Sebring**: balanced left-right loading, bumpy surface acts as natural tyre temperature regulator. Long straights after sustained right-handers (Gendebien, Sunset) allow FL recovery. Ferrari FL melts at Gendebien/Sunset but straight provides sufficient cooling before next demand. Consistent pace achievable across multiple GT3 cars within ~0.3s of each other — circuit suits current driving style well.
* **Barcelona**: relentless right-hand bias with minimal FL recovery between corners. T5 (Seat), Campsa, and T13-T15 final complex create continuous FL loading. Only genuine FL rest is T9 hairpin (left) and front straight — insufficient for meaningful thermal recovery. Circuit demands simultaneous restraint (mid-lap) and full commitment (T13-T15) creating split-personality requirement every lap. Overtaking extremely difficult — T1 is only realistic zone. Hotlap pace (1:42.4) to race median (~1:43.9) gap of ~1.3s is within normal GT3 range. T7-T8 Wurth chicane requires exactly ~50% brake pressure — too much causes momentum loss/understeer, too little causes excessive rear unload. Inside kerbs at T7 cause immediate over-rotation. T8 exit requires weight fully transferred, steering neutral, and car settled before any throttle application — premature throttle is a guaranteed gravel visit.
* **Imola**: balanced circuit, tyre degradation significantly lower than Barcelona despite similar lap times. Double stint tyres viable with negligible pace loss. Left-right balance and corner duration profile suit the Ferrari well. Home circuit — ~5 months of primary development here in 2025.

## Driver Archetype (April 2026 Assessment)

**Style:** Smooth progressive trail-braker. Not a late-braker — strength is in the brake release phase and weight transfer management rather than peak braking force. Consistent across multiple GT3 architectures (front, mid, rear engine) within 0.3s at familiar circuits.

**Control model (newly identified):** Rotation-led, phase-separated corner execution. Entry yaw is intentionally generated and managed during brake release (often with rearward BB and lower diff preload than baseline), then rear platform is stabilized from mid-corner to exit for early, decisive throttle commitment. Practical shorthand: "control rear drift on entry, demand planted rear from apex onward."

**Primary strengths:**
- Tyre thermal management and degradation reading under race conditions
- Pattern recognition at corner-specific level (Campsa as FL gauge, cliff lap identification)
- Cross-car adaptability — 8+ GT3 cars driven competitively in Year 1
- Race pace consistency over long stints, particularly in degrading conditions
- Mixed conditions and weather transition awareness
- Setup-to-style translation: reliably identifies when baseline setups are too front-safe and re-centers balance through BB/diff changes without triggering instability

**Primary development areas:**
- Hotlap extraction — race pace muscle memory occasionally carries unnecessary caution into fresh-tyre hotlap context (confirmed by Coach Dave S1 feedback at Barcelona)
- S1 commitment on circuits where T1 braking reference is the primary time source
- Context maps under low grip: maintain same rotation model while preparing pre-defined safer BB/diff presets for cold, wet, and late-stint rear-limited phases

**Real-world comparable drivers:** Carlos Sainz (race management, tyre reading, Ferrari affinity), Alain Prost (minimum necessary approach, patience before commitment), Nicklas Nielsen (endurance context, Ferrari GT3 thermal management specialist)

**Natural circuit profile:** performs above archetype average at bump-sensitive, technically demanding circuits (Sebring, Imola). Performs at archetype level at thermally demanding right-biased circuits (Barcelona). Untested at high-speed commitment circuits (CTMP, Le Mans).

**Archetype summary:** Built for endurance racing. Greatest strengths emerge in the second half of long stints when degradation separates drivers. Sprint racing and pure hotlap extraction remain the development frontier.

### Setup Preference Signature (GT3, current)

- Frequently runs more rearward brake bias than shared baselines (for example, 49 -> 46) to restore entry rotation authority.
- Frequently lowers diff preload from conservative defaults (for example, 80 Nm -> 40 Nm) to improve mid-corner yaw response.
- Uses these changes as entry-phase tools, while preserving planted rear behavior from apex to exit through input discipline.
- Validates every change in race-stint metrics (median and sigma), not one-lap feel alone.

## Hotlap Leaderboard Reference (Coach Dave Delta, April 2026)

### Circuit de Barcelona

| Car | Best | Position | Percentile | Pool |
| --- | --- | --- | --- | --- |
| Ferrari 296 GT3 | 1:42.434 | P26 | Top 7% | 359 |
| Mercedes AMG GT3 Evo | 1:43.305 | P28 | Top 10% | 310 |
| Corvette Z06 GT3R | ~1:43.0+ | P10 | Top 8% | 132 |

Note: Barcelona leaderboard is extremely compressed. P7–P100 on the Ferrari covered by ~2.1 seconds. Positional rank is less meaningful than percentile. Alien tier (P1–P6) separated by ~0.5s gap from the main cluster. P8 reference: Jaroslav Honzik (real Clio Cup and KTM X-Bow GT driver) at 1:42.064.

### Autodromo Enzo e Dino Ferrari (Imola)

| Car | Best | Position | Percentile | Pool |
| --- | --- | --- | --- | --- |
| Ferrari 296 GT3 | 1:44.094 | P17 | Top 5% | 323 |
| Porsche 911 GT3R | 1:44.381 | P43 | Top 7% | 625 |
| Mercedes AMG GT3 Evo | 1:44.248 | P35 | Top 10% | 349 |
| Ford Mustang GT3 | 1:44.218 | P20 | Top 10% | 203 |

Note: all four cars within 0.287 seconds of each other. Porsche S1 top 2.5%, S2 top 1% — two thirds of the lap at alien-tier level.

### Sebring International Raceway

| Car | Best | Position | Percentile | Pool |
| --- | --- | --- | --- | --- |
| Ferrari 296 GT3 | 2:02.050 | P5 | Top 2.5% | 366 |
| Lexus RCF GT3 | 2:02.153 | P18 | Top 5% | 398 |
| Porsche 911 GT3R | 2:02.104 | P28 | Top 5% | 783 |
| Aston Martin Vantage GT3 | 2:02.327 | P13 | Top 5% | 269 |

Note: all four cars within 0.277 seconds of each other. Sebring pace is highly consistent across different GT3 architectures — circuit suits current driving style. Strong results partly reflect natural style-circuit fit; treat as ceiling reference rather than absolute benchmark.

## Pace Reference — Spa-Francorchamps (April 2026, 95% AI, Race Conditions)

All data from offline races. Median is the reliable pace indicator; best-to-median gap is typically < 0.5s in clean runs. It can widen with traffic, mistakes, or unusual tyre warm-up conditions.

| Car | Best | Median | Average | Std Dev | Clean Laps |
| --- | --- | --- | --- | --- | --- |
| Porsche 911 GT3R | 2:20.761 | 2:20.943 | 2:21.008 | 0.24s | 18 |
| McLaren 720S GT3 | 2:20.637 | 2:21.187 | 2:21.239 | 0.24s | 19 |
| Ferrari 296 GT3 | 2:21.095 | 2:21.628 | 2:21.599 | 0.27s | 18 |
| Aston Martin Vantage GT3 | 2:21.015 | 2:21.849 | 2:21.881 | 0.38s | 31 |
| Corvette Z06 GT3R | 2:20.790 | 2:21.769 | 2:21.744 | 0.52s | 31 |

Additional reference (same ELMS schedule, same setup/fuel/AI, tyre warmers OFF, started on a used quali set ~90%):

| Car | Best | Median | Average | Std Dev | Clean Laps |
| --- | --- | --- | --- | --- | --- |
| Ferrari 296 GT3 | 2:20.743 | 2:21.221 | 2:21.276 | 0.34s | 17 |

Note: warmers OFF changes the first laps materially (starting around 40C vs ~70C with warmers). It can reduce early over-driving/scrub and improve stint-wide race pace even if peak grip is slightly lower.

Additional reference (McLaren 720S GT3, stint 1 only):

| Car | Best | Median | Average | Std Dev | Clean Laps |
| --- | --- | --- | --- | --- | --- |
| McLaren 720S GT3 | 2:20.637 | 2:21.298 | 2:21.291 | 0.29s | 19 |

Multi-stint note (911 GT3R, Spa): reusing tyres for stint 2 can shift median race pace by ~+1.25s/lap vs the new-tyre stint, amplified by multi-class traffic.

**ELMS benchmark for reference** — Car #85 (Iron Dames, Porsche 911 GT3R) @ Spa 2025:

* Best: 2:19.907 | Median: 2:21.738 | Average: 2:21.672 | Std dev: 1.03s (multi-driver, race conditions)
* Sim median (Porsche) vs ELMS median: −0.795s (sim faster before hardware adjustment)
* Hardware-adjusted gap: sim is approximately on par with, or marginally slower than, ELMS pace

## Pace Reference — Circuit de Barcelona (April 2026, 95% AI, Race Conditions)

All data from offline races. Warmers OFF. ABS 9 confirmed optimal setting.

| Race | Car | Median (dry) | Cliff Lap | Notes |
| --- | --- | --- | --- | --- |
| Race 1 | Ferrari 296 GT3 | ~1:43.9 | Lap 17 | Rain from lap 20, lap 28 started to get damp and time dropping |
| Race 2 | Ferrari 296 GT3 | ~1:43.9 | Lap 17 | Full dry, traffic cooldown laps 28–29, recovery to 1:43.9 laps 30–32 |
| Race 3 | Ferrari 296 GT3 | ~1:44.3 | Lap 14 | ABS 8 test — higher variance, earlier cliff, spin at Wurth lap 25 |

Hotlap vs race pace gap: ~1.3s (1:42.434 hotlap vs ~1:43.9 race median) — within normal GT3 range.

FL temperature profile: ~93°C at T4 entry early stint → ~90.5°C late stint (fuel burn effect). Cliff threshold approximately 91°C sustained.

Active race: 3-hour solo mixed weather endurance race in progress (April 2026). Stint 2 on wet tyres. Rain forecasted lap 53.
