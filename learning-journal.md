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

## 2026-05-10

### Session Context

- Track: Circuit de Barcelona-Catalunya
- Scope: Coach Dave hotlap leaderboards meta analysis (GT3 multi-car)
- Cars analyzed: Ferrari 296, McLaren 720S, Aston Vantage, Lexus RCF, Corvette Z06 GT3R, Porsche 911 GT3R
- Driver tag: `oldark.`
- Goal: determine whether rank consistency with different lap times reflects driving inconsistency or leaderboard ecosystem effects

### Data Snapshot Used

- Ferrari 296 GT3: `1:42.434`, `P28/399`
- McLaren 720S GT3: `1:43.206`, `P13/264`
- Aston Vantage GT3: `1:43.083`, `P13/235`
- Lexus RCF GT3: `1:42.819`, `P22/353`
- Corvette Z06 GT3R: `1:42.788`, `P9/153`
- Porsche 911 GT3R: `1:43.386`, `P44/553`

### Meta Reading Table (Important, as of 2026-05-10)

Important: this table reflects only the leaderboard snapshots available today in this journal session.

| Car | Pool | My Time | Rank | Percentile | Gap to P1 | Gap to P10 | P10-P50 | P50-P99 | Pro Presence (Known Today) | Important Meta Read (Today) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |
| Ferrari 296 GT3 | 399 | 1:42.434 | P28 | Top 93.0% | +1.059s | +0.314s | 0.721s | 0.561s | Yes (`jardier` in top 10) | Meta-heavy board: high adoption + tight density + known high-level front pack. |
| McLaren 720S GT3 | 264 | 1:43.206 | P13 | Top 95.1% | +1.331s | +0.054s | 1.044s | 0.815s | Yes (`jardier` in top 10) | Near pro-adjacent cutline; only hundredths needed for top-10. |
| Aston Vantage GT3 | 235 | 1:43.083 | P13 | Top 94.5% | +1.500s | +0.312s | 1.205s | 0.961s | Not confirmed in this snapshot | Broad spread; good rank ROI with moderate pace gain. |
| Lexus RCF GT3 | 353 | 1:42.819 | P22 | Top 93.8% | +1.120s | +0.333s | 0.708s | 0.606s | Not confirmed in this snapshot | Dense serious board; many optimized laps in upper-midfield. |
| Corvette Z06 GT3R | 153 | 1:42.788 | P9 | Top 94.1% | +1.638s | -0.466s | 1.431s | 1.340s* | Not confirmed in this snapshot | Best pace-to-rank conversion; smaller pool with wider spread. |
| Porsche 911 GT3R | 553 | 1:43.386 | P44 | Top 92.0% | +2.084s | +0.754s | 0.824s | 0.439s | Not confirmed in this snapshot | Deepest shark tank; largest pool and toughest top-10 access. |

*Note: Corvette table in the source snapshot ends at P99 row display; `P50-P99` computed from the last available row in that snapshot.

### Key Finding

Consistent position band across cars is real. Absolute lap times vary, but relative competitiveness remains stable.

- Percentile cluster across all six cars is approximately top `92%` to `95%`.
- This supports a stable cross-car driver baseline at Barcelona despite different raw times.
- Main variance source is leaderboard distribution and field quality, not major swings in core pace level.

### Distribution and Compression Learning

Two compression bands were kept for interpretation:

- `P10-P50`: competitive-core density
- `P50-P99`: long-tail/upper-mid spread

Observed pattern:

- Ferrari and Lexus show tighter competitive-core spacing (`P10-P50` around ~0.7s), indicating dense optimized pace clusters.
- Porsche has the deepest participation pool and remains tightly packed in upper-midfield despite larger absolute gaps to P1/P10.
- Corvette shows the widest spread profile among sampled boards, enabling better rank conversion for similar pace quality.
- McLaren and Aston sit in a mixed profile: decent pool depth with broader spread than Ferrari/Lexus.

Ferrari compression confirmation from current snapshot:

- `P10 = 1:42.120`, `P99 = 1:43.402`, so `P10-P99 = 1.282s`.
- Equivalent density from `P10` to `P99` is about `7.0 drivers per 100 ms` on average.
- Local clustering can feel higher (roughly `8-9 drivers per 100 ms`) in specific pockets.

### Pro-Presence and Field-Quality Adjustment

Known real-driver presence changed interpretation of rank quality.

- `jardier` (Jaroslav Honzik) appears in at least:
  - McLaren leaderboard (`P9`, `1:43.103`)
  - Ferrari leaderboard (`P6`, `1:41.913`)
- This means top-10 thresholds in those boards are not purely community-amateur references.

Implication:

- McLaren `P13` at `1:43.206` is not just near top-10 numerically; it is near a pro-adjacent cutline.
- Ferrari rank should be interpreted through field density plus top-end quality, not rank number alone.

### Car-By-Car Meta Read (Barcelona)

1. Ferrari 296 GT3
   - High-adoption and high-density board behavior.
   - Strong raw pace in this sample but rank is suppressed by crowding and mature setup meta.
2. McLaren 720S GT3
   - Very close to top-10 cutoff; high rank ROI per small time gain.
   - Presence of Honzik in front pack raises top-10 quality threshold.
3. Aston Vantage GT3
   - Solid rank and broader spread than Ferrari/Lexus.
   - Improvement path likely extraction/commitment rather than pure adaptation deficit.
4. Lexus RCF GT3
   - Strong absolute competitiveness with dense upper band.
   - Requires clean execution to gain each position due to compact spacing.
5. Corvette Z06 GT3R
   - Best position conversion (`P9`) in sample.
   - Smaller pool + wider spread creates favorable rank mechanics once inside top-10.
6. Porsche 911 GT3R
   - Largest pool and hardest ladder depth.
   - Lower visible rank still maps to high percentile; interpreted as shark-tank effect rather than collapse.

### What Changed in My Understanding Today

1. Rank consistency across cars can coexist with larger raw lap-time variance when board distributions differ.
2. Percentile is a more stable performance signal than position for cross-car comparison.
3. Barcelona Ferrari board behaves like a meta-heavy environment: popular, dense, and quality-loaded.
4. Pro-presence in top-10 materially changes how near-cutline results should be valued.
5. A tenth of a second at Barcelona can carry large positional value in compressed bands.

### Practical Rule Update

- For cross-car self-evaluation, prioritize this order:
  1. percentile,
  2. gap to top-10,
  3. compression context (`P10-P50`, `P50-P99`),
  4. pro-presence signal,
  5. raw rank number.

### Next Analysis Step

1. Build a quality-adjusted leaderboard score per car combining percentile, pool size, compression, and pro-presence.
2. Add rank-gain-per-`0.10s` estimate around current rank for each car to optimize training ROI.

### Addendum: Spa Meta Finding (2026-05-10)

Important: this addendum is based on the Spa leaderboard snapshots reviewed later on the same day.

#### Spa Leaderboard Snapshot Used

- Porsche 911 GT3R: `2:20.087`, `P40/853`
- Ferrari 296 GT3: `2:19.812`, `P21/571`
- Aston Vantage GT3: `2:19.901`, `P12/308`
- Corvette Z06 GT3R: `2:19.581`, `P18/337`
- Mercedes AMG GT3: `2:20.175`, `P35/645`

#### Spa Meta Reading Table (Important, as of 2026-05-10)

| Car | Pool | My Time | Rank | Percentile | Gap to P1 | Gap to P10 | P10-P50 | P50-P99 | Important Meta Read (Today) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Ferrari 296 GT3 | 571 | 2:19.812 | P21 | Top 96.5% | +2.095s | +0.338s | 0.774s | 0.515s | Deep and dense board; result is elite despite strong field depth. |
| Aston Vantage GT3 | 308 | 2:19.901 | P12 | Top 96.4% | +1.232s | +0.043s | 1.282s | 1.140s | Highest short-term top-10 ROI; only hundredths needed. |
| Porsche 911 GT3R | 853 | 2:20.087 | P40 | Top 95.4% | +1.986s | +1.085s | 1.221s | 0.644s | Largest shark tank; rank number looks lower but percentile remains very strong. |
| Corvette Z06 GT3R | 337 | 2:19.581 | P18 | Top 95.0% | +2.184s | +0.459s | 1.577s | 0.875s | Wider spread gives decent position gain potential with moderate pace gain. |
| Mercedes AMG GT3 | 645 | 2:20.175 | P35 | Top 94.7% | +2.370s | +0.716s | 0.987s | 0.521s | Large competitive field with tight lower top-100 clustering. |

#### Interpretation Shift vs Barcelona

Spa appears to fit the current driving archetype better in hotlap context:

- Percentile band is tightly clustered around top `94.7%` to `96.5%` across five cars.
- This suggests robust cross-car transfer at Spa even when raw rank differs by pool size.
- Lower-looking ranks in Porsche/AMG are primarily field-depth effects, not a collapse in relative level.

#### Technique Finding: Peak Brake Precision at Spa vs Barcelona

Spa also requires non-peak braking in many corners, but recovery behavior differs by lap context.

- Over-braking in flow corners such as Pouhon causes major local momentum loss, but part of the loss can be partially recovered later through line and commitment phases.
- Over-braking in Barcelona final-sector corners (for example Sabadell/final complex entry) is less recoverable because exit speed is immediately monetized onto the straight.

Operational takeaway:

- Both tracks reward brake modulation and release timing.
- Barcelona punishes small peak-brake errors more severely due to lower recovery opportunity and stronger exit-amplification.

#### Corner-Specific Barcelona Reinforcement

For Repsol, Seat, Wurth, and Campsa, rotation authority depends on precise peak and release timing.

- Too much peak brake overloads front grip and suppresses rotation.
- Too little peak brake fails to generate required yaw/load transfer.
- Fast laps come from correct peak duration plus clean release handoff from braking to turning.
