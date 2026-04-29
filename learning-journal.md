# Learning Journal

## 2026-04-28

### Session Context

- Track: Spa-Francorchamps
- Car focus: Mercedes AMG GT3 Evo (comparison baseline: Ferrari 296 GT3)
- Goal: solve rear-light instability at Eau Rouge / Blanchimont and validate race pace consistency

### Key Problem and Diagnosis

Initial symptom was repeatable: rear became unstable when the car hit/landed after kerb compression at Eau Rouge. I first over-focused on ARB changes, but the session showed the issue was mainly aero-platform behavior rather than simple roll stiffness.

Main diagnosis:

- Aggressive setup had high rake and edgy platform behavior in high-speed compression/crest transitions.
- Rear instability was amplified during kerb strike + landing phases (platform event), not only in steady-state cornering.
- The car needed a calmer platform first; rotation tuning should come after stability is secured.

### Setup Learning

The switch from the aggressive Coach Dave setup to the balanced one solved the confidence issue immediately (Eau Rouge became comfortably flat).

Detailed setup comparison (Aggressive -> Balanced) and observed effect:

| Area | Aggressive | Balanced | Interpretation |
| --- | --- | --- | --- |
| Rear ride height | 7.1 cm | 6.2 cm | Major rake reduction. Biggest stabilizer for Eau Rouge compression/crest transition. |
| Front ride height | 5.0 cm | 5.0 cm | Front held constant, so platform shift came from rear drop (cleaner cause/effect). |
| Rake (F:R) | 5.0:7.1 | 5.0:6.2 | Less pitch-sensitive aero platform; reduced sudden rear lightness at kerb landing. |
| Rear ARB | 14 (D4-D4, hard) | 12 (D3-D3) | Softer rear lateral stiffness reduced snap tendency during fast load transfer. |
| Front toe | -0.059 deg (toe-out) | 0.000 deg (neutral) | Less initial high-speed yaw nervousness; calmer turn-in at very high speed. |
| Rear toe | 0.117 deg | 0.117 deg | Stability baseline unchanged; improvement came from platform and ARB changes, not rear toe gain. |
| Front packers | 0.5 cm | 1.0 cm | More front support in compression helped avoid excessive pitch event through Eau Rouge. |
| Front dampers | SB 4 / FB 7 / SR 8 / FR 7 | SB 6 / FB 7 / SR 9 / FR 7 | More front platform control under load, aiding stability when car compresses and unloads. |
| Rear dampers | SB 5 / FB 7 / SR 9 / FR 5 | SB 6 / FB 7 / SR 9 / FR 7 | More rear rebound/bump support in this lower-rake package improved landing composure. |
| Rear wing | 4.0 deg | 4.0 deg | No wing change. Confirms issue was not solved by pure aero level increase. |
| Diff preload | 40 Nm | 40 Nm | No diff change during baseline switch. Confirms stability fix occurred before driveline tuning. |

Most important differences and effects (priority order):

1. Rake reduction (from 5.0/7.1 to 5.0/6.2) stabilized high-speed aero platform.
2. Softer rear ARB (14 -> 12) reduced rear snap tendency over load transitions.
3. Front toe moved to neutral reduced high-speed nervousness.
4. Front/rear damper + front packer package improved compression and landing behavior at Eau Rouge.

What this ruled out:

- ARB alone was not the root fix (front ARB experiments had limited effect before full setup swap).
- Wing and diff were not primary causes in this case because both remained unchanged between the two baseline files.

Core principle reinforced:

- Aero/platform stability first (wing/rake/ride platform), then mechanical balance, then diff and dampers for fine-tuning.

### Driving Style Learning

Subjective feel was very clear and useful:

- AMG feels "hammer" (punchy, rigid, load-and-hold).
- 296/Corvette feel "dancing" (more rotationally expressive and shapeable mid-corner).

Interpretation for adaptation:

- Do not force AMG to behave like a mid-engine car.
- Use cleaner initial steering, straighter brake completion, and smoother early throttle squeeze.
- Prioritize platform settlement over aggressive kerb usage in Eau Rouge complex.

### Pace and Consistency Outcome

AMG stint (cleaned):

- Median pace: ~2:21.53
- Best lap: 2:21.073
- Consistency (std dev): ~0.28s

296 reference (cleaned overall):

- Median pace: ~2:21.21
- Best lap: 2:20.484
- Consistency (std dev): ~0.49s

Takeaway:

- AMG is currently ~0.32s/lap slower on median vs 296 reference, but significantly more consistent in this run.
- This validates the balanced AMG setup as race-usable now.

### What Changed in My Understanding Today

1. High rake is not free downforce forever; beyond a window it increases pitch sensitivity and can create sudden rear-light behavior in compressions/crests.
2. ARB is not the first lever for this Spa symptom; platform tools (rake/wing) matter more.
3. A stable setup that feels less "fast" can produce better race execution through confidence and repeatability.
4. Car personality mismatch is real: adaptation target is technique translation, not setup over-correction.

### Next Session Plan

1. Keep balanced AMG setup as baseline.
2. Run micro A/B only (one change at a time):
   - Diff preload 40 -> 35 Nm (then 30 only if exits remain stable)
   - Rear toe-in one step lower if searching for minor pace
3. Evaluation criteria:
   - Eau Rouge landing stability
   - Pouhon delta repeatability lap-to-lap
   - Exit traction at La Source / Bus Stop / Bruxelles
4. Pace target: preserve metronome consistency and reduce median from ~2:21.5x toward ~2:21.2x.

## 2026-04-29

### Session Context

- Track: Spa-Francorchamps
- Car: Mercedes AMG GT3 Evo
- Starting point: continued saved race state into stint 2 with no tyre change
- Goal: validate worn-tyre behavior and test in-stint balance tools under traffic variance

### Stint 2 Conditions and Inputs

- Tyres: no change from stint 1 (used set carried over)
- Traffic: more sporadic vs stint 1
- In-stint setup changes:
  - Brake bias: 46 -> 45
  - TC lateral/slip map: reduced from 5/6 range to 3

Reason for changes:

- Mid-corner rotation felt degraded on worn tyres, most severe at Stavelot 1 entry-to-apex phase.
- Car felt reluctant to rotate; rearward BB and lower TC were used to recover yaw response.

### Pace Outcome

Stint 1 clean reference (same race):

- Median: 2:21.527
- Best: 2:21.073
- Std dev: 0.280

Stint 2 (no tyre change, cleaned):

- Median: 2:22.919
- Best: 2:22.193
- Std dev: 0.585

Delta (stint 2 vs stint 1):

- Median loss: +1.392s/lap
- Variance increase: std dev approximately doubled

### Interpretation

Primary finding:

- Pace drop is consistent with expected used-tyre second-stint degradation, not a sudden setup failure.

Secondary findings:

- In-stint BB and TC changes likely improved rotation feel but could not offset baseline tyre grip loss.
- TC reduction helped free rotation but likely increased instability risk on exits, contributing to higher variance.
- Stavelot 1 was the clearest corner-level indicator of front-limited rotation on worn tyres.

### Driver/Car Character Learning

- AMG remains a "set then send" car: once platform is settled, throttle commitment is strong (No Name/Pouhon phase behavior).
- Compared to Ferrari/Corvette, AMG rewards decisive power application more, but carries higher physical demand through steering torque and correction workload.
- Practical race decision validated: AMG is excellent for learning platform commitment, while Porsche/Ferrari remain preferred race tools for lower fatigue cost.

### Practical Rules Captured Today

1. On worn tyres, diagnose the problem first:
   - If exit traction is the issue, increase TC.
   - If mid-corner rotation is the issue, reduce TC carefully and/or move BB rearward.
2. For Stavelot 1 "won't turn" symptom, BB -1 is an effective first in-stint response.
3. Keep TC adjustments incremental on worn tyres (one step at a time) to avoid trading push for snap/variance.

### Next Test Plan

1. Repeat same format with fresh tyres for stint 2 to isolate tyre-age effect.
2. Keep balanced baseline fixed; test BB 46 vs 45 first before larger TC changes.
3. Compare stint-2 median and sigma directly against this run to quantify pure tyre reset benefit.
