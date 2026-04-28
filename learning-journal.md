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

- Average pace: ~2:21.54
- Best lap: 2:21.073
- Consistency (std dev): ~0.28s

296 reference (cleaned overall):

- Average pace: ~2:21.31
- Best lap: 2:20.484
- Consistency (std dev): ~0.49s

Takeaway:

- AMG is currently ~0.22s/lap slower on average vs 296 reference, but significantly more consistent in this run.
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
4. Pace target: preserve metronome consistency and reduce average from ~2:21.5x toward ~2:21.2x.
