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

### Addendum: Sebring Meta Finding (2026-05-10)

Important: this addendum is based on Sebring leaderboard snapshots reviewed on the same day.

#### Sebring Leaderboard Snapshot Used

- Ferrari 296 GT3: `2:02.050`, `P7/346`
- Aston Vantage GT3: list shows `oldark.` at `P14` (`2:02.327`) while prior note mentioned `P13`
- Lexus RCF GT3: `2:02.153`, `P17/387`
- Porsche 911 GT3R: headline `2:02.104`, `P29/683`, with known tracker anomaly on displayed `P1-P3`
- Mercedes AMG GT3: `2:02.318`, `P22/451`

#### Sebring Meta Reading Table (Important, as of 2026-05-10)

| Car | Pool | My Time | Rank Used | Percentile | Gap to P1 | Gap to P10 | P10-P50 | P50-P99 | Data Confidence | Important Meta Read (Today) |
| --- | ---: | ---: | --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| Ferrari 296 GT3 | 346 | 2:02.050 | P7 | Top 98.3% | +0.555s | -0.280s | 1.142s | 0.759s | High | Elite conversion; already inside top-10 with margin. |
| Aston Vantage GT3 | 256 | 2:02.327 | P14 (list) | Top 95.3% | +1.638s | +0.374s | 1.187s | 1.169s | High | Broad spread board; high rank-jump potential per tenth. |
| Lexus RCF GT3 | 387 | 2:02.153 | P17 | Top 95.9% | +0.803s | +0.208s | 0.789s | 0.779s | High | Dense but fair structure; near top-10 threshold. |
| Porsche 911 GT3R | 683 | 2:02.104 (headline) / 2:02.153 (table) | Cleaned list (drop shown P1-P3) | ~Top 95.9%* | +0.508s (cleaned) | +0.077s (cleaned) | 0.658s (cleaned) | 0.779s (cleaned) | Medium (anomaly) | After removing bugged P1-P3, pace is top-10-adjacent in this snapshot. |
| Mercedes AMG GT3 | 451 | 2:02.318 | P22 | Top 95.6% | +1.124s | +0.264s | 0.858s | 0.639s | High | Competitive core with moderate compression; steady gains possible. |

*Percentile context uses the headline pool/rank reference; Porsche row is flagged due to tracker anomaly handling.

#### Sebring Interpretation

- Cross-car Sebring percentile band remains tightly high (approximately top `95.3%` to `98.3%`).
- This reinforces Sebring as a strong style fit: technical load transfer, bump management, and rhythm continuity translate well.
- Ferrari is currently the clearest performance anchor (high percentile and top-10 conversion).
- Lexus and AMG are near-cutline boards where small gains can produce immediate rank movement.
- Porsche requires anomaly-aware interpretation, but cleaned deltas still indicate strong competitiveness.

## 2026-05-11

### Session Context

- Track: Imola (Autodromo Enzo e Dino Ferrari)
- Session window: yesterday to today, including a concentrated 2-hour multi-car hotlap block
- Cars run in the same block: Ferrari 296 GT3, Corvette Z06 GT3R, Mercedes AMG GT3, Porsche 911 GT3R
- Goal: validate whether return pace after long break aligns with current Spa/Sebring/Barcelona training transfer

### Timeline Snapshot (Yesterday -> Today)

- Ferrari progression sequence captured:
  - `1:43.940` (55-lap session)
  - `1:43.823` (short 4-lap return)
  - `1:43.757` (same-day improvement)
- Same-day multi-car bests:
  - Ferrari 296 GT3: `1:43.757`
  - Corvette Z06 GT3R: `1:44.044`
  - Mercedes AMG GT3: `1:44.183`
  - Porsche 911 GT3R: `1:44.294`

### Imola Meta Reading Table (Important, as of 2026-05-11)

| Car | Pool | My Time | Rank | Percentile | Gap to P1 | Gap to P10 | P10-P50 | P50-P99 | Important Meta Read (Today) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Ferrari 296 GT3 | 418 | 1:43.757 | P17 | Top 96.2% | +1.321s | +0.179s | 0.667s | 0.681s | Strongest result of the block; dense board and near top-10 threshold. |
| Porsche 911 GT3R | 603 | 1:44.294 | P45 | Top 92.7% | +1.836s | +0.625s | 0.786s | 0.455s | Deep pool with tight lower top-100 compression; harder to gain rank quickly. |
| Corvette Z06 GT3R | 187 | 1:44.044 | P17 | Top 91.4% | +1.450s | +0.358s | 1.357s | 1.770s | Wider spread profile; medium gain can produce larger position jumps. |
| Mercedes AMG GT3 | 414 | 1:44.183 | P36 | Top 91.5% | +1.327s | +0.758s | 1.030s | 0.541s | Competitive board with meaningful top-10 gap; requires larger extraction step. |

### Additional Ferrari Compression Confirmation (Imola)

- `P3 = 1:43.100`, `P28 = 1:43.973` -> `0.873s` across 26 positions (25 gaps).
- This is approximately `0.035s` per position in that upper cluster.
- Interpretation: tiny execution changes can move multiple rank slots in one session.

### What Changed in My Understanding Today

1. Return pace at Imola after a long break remains highly competitive, confirming strong training transfer from Spa/Sebring/Barcelona.
2. Ferrari continues to function as the highest-confidence benchmark car in dense, paid-platform leaderboard conditions.
3. Imola remains a track-character fit: technical flow with recoverable chains, unlike Barcelona's higher error-propagation sequences.
4. Cross-car spread in same-day testing is structured, not random, indicating stable adaptation and consistent technique baseline.

### Practical Next Step

1. Prioritize Ferrari for near-term rank conversion (`+0.179s` to top 10).
2. Use Corvette as secondary ROI board for position gain efficiency.
3. Treat Porsche and AMG as deeper extraction projects focused on sector-specific hotlap commitment.

## 2026-05-21

### Session Context

- Track: Imola (Autodromo Enzo e Dino Ferrari)
- Race car: Ferrari 296 GT3
- Hotlap car after race: Aston Martin Vantage GT3
- Race format: full ELMS-style grid, damage ON, tyre warmers OFF, changing weather
- Real-life constraint: race completed across multiple days due to full-time work; maximum 2 stints per day
- Goal: validate endurance race execution, mixed-weather tyre strategy, and post-race hotlap transfer

### Ferrari 296 GT3 Race Phase Summary

The race should be interpreted by weather phase rather than as a single stint average.

| Phase | Laps Used | Best | Median | Avg | Std Dev | Read |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Stint 1 dry early | 13 | 1:44.529 | 1:45.003 | 1:44.991 | 0.216s | Excellent dry race pace and consistency. |
| Stint 1 drizzle transition | 4 | 1:45.283 | 1:46.092 | 1:46.126 | 0.626s | Grip loss begins, still controlled. |
| Stint 2 dry/cooling before damp | 7 | 1:45.814 | 1:46.155 | 1:46.285 | 0.374s | Slower tyre/traffic phase, stable. |
| Stint 2 damp transition | 8 | 1:47.975 | 1:49.692 | 1:49.478 | 1.065s | Transition phase, high uncertainty. |
| Stint 3 full wet stabilized | 15 | 1:58.841 | 2:00.654 | 2:00.792 | 1.353s | Wet pace stabilized after adaptation. |
| Stint 4 drying damp | 7 | 1:51.897 | 1:53.369 | 1:53.161 | 0.785s | Drying-line recovery phase. |
| Stint 5 dry/cold recovery | 12 | 1:44.369 | 1:45.715 | 1:45.847 | 0.811s | Pace returned, but cold-tyre risk remained. |

### ELMS Reference Context: Car 55 Spirit of Race Ferrari LMGT3

Car `55` from `data/elms/2025/imola/23_Analysis_Race.csv` was used as a real-world race benchmark.

| Driver | Best | Median | Avg | Std Dev | Theoretical |
| --- | ---: | ---: | ---: | ---: | ---: |
| David PEREL | 1:44.066 | 1:44.704 | 1:44.737 | 0.500s | 1:43.927 |
| Matthew GRIFFIN | 1:44.300 | 1:45.935 | 1:46.975 | 3.374s | 1:43.889 |
| Duncan CAMERON | 1:46.472 | 1:48.102 | 1:48.535 | 1.814s | 1:46.099 |

Comparison note:

- My strongest dry race phase median: `1:45.003`
- David Perel race median: `1:44.704`
- Raw median gap: `+0.299s`
- This is not a direct skill equivalence claim because sim conditions, hardware, and real-world race variables differ. It is a useful endurance-pace reference showing that the dry Ferrari race phase was close to a real ELMS Ferrari LMGT3 race median.

### Weather Strategy Learning

Key race decisions:

- Stint 1 was short-stinted partly due to needing to save/pause the game, not because fuel required it. Full fuel could likely have reached roughly lap 28, but the stop occurred around lap 21.
- Drizzle arrived later, so the early stop accidentally created strategic flexibility.
- Stayed on dry tyres initially because AI also stayed out and the track was not yet wet enough to justify the crossover.
- Switched to wets at lap 42; AI switched later around laps 46-48 and lost roughly `5-7s/lap` during the delay.
- Finished 3 laps ahead of P2, mostly through better wet crossover timing and lower risk execution.

Drying-track strategy:

- Delayed switch from wets to mediums until lap 82 while AI began changing around laps 77-78.
- Rationale: track was still too damp/cold, so wets could be abused until approaching their overheat threshold (~75C) while waiting for the dry line to open.
- Early medium switch would likely have created 6-7 compromised laps on cold slicks and an incomplete dry line.
- Delayed lap 82 switch compressed the slick transition cost to roughly 2 laps, despite a cold-tyre spin on the out phase.

Core principle reinforced:

- The correct crossover is not when a tyre is theoretically faster; it is when the whole system is ready: tyre, track surface, dry line, temperature, and race-risk profile.

### Aston Vantage GT3 Imola Hotlap

Post-race hotlap result:

- Aston Martin Vantage GT3: `1:43.824`, `P6/213`
- Percentile: top `97.7%`
- Gap to P1: `+1.256s`
- Gap to P3: `+0.650s`
- Gap to P5: `+0.029s`
- Gap to P10: `-0.182s` (inside top 10)

Compression snapshot:

- `P10 = 1:44.006`
- `P50 = 1:45.531`
- `P99 = 1:46.904`
- `P10-P50 = 1.525s`
- `P50-P99 = 1.373s`
- `P10-P99 = 2.898s`

Interpretation:

- Aston board is much wider than Ferrari-style dense boards, so rank is easier to convert once pace is strong.
- Result still matters because `P6/213` after a long mixed-weather race indicates excellent post-race adaptation and front-engine compatibility.
- This weakens the hypothesis that Imola is generally limiting front-engine extraction. The issue appears more AMG-specific than front-engine-specific.

### What Changed in My Understanding Today

1. Ferrari race pace at Imola is close to a real ELMS Ferrari LMGT3 race reference in dry phase median, especially considering warmers OFF and mixed-weather conditions.
2. Mixed-weather strategy remains a core strength: wet crossover timing and delayed slick crossover both produced race-winning margin.
3. Distributed endurance execution is valid for current life constraints; repeated cold re-entry into race context is itself a useful skill.
4. Aston result proves front-engine cars can be extracted well at Imola; AMG remains the specific translation problem.
5. Imola continues to fit the driver archetype: technical flow, recoverable sequences, and high reward for rhythm plus strategic patience.

## 2026-05-23

### Session Context

- Track: Imola (Autodromo Enzo e Dino Ferrari)
- Scope: post-`2026-05-21` leaderboard re-evaluation using a broader GT3 sample
- Cars analyzed: Ferrari 296 GT3, McLaren 720S GT3, Aston Martin Vantage GT3, Porsche 911 GT3R, Corvette Z06 GT3R, Mercedes AMG GT3 Evo, BMW M4 GT3
- Driver tag: `oldark.`
- Goal: replace the incomplete May 21 front-engine read with a full cross-car matrix and identify the real translation pattern

### Data Hygiene Notes

- Aston Martin board contains a garbage `0:55.930` entry and must be read as a cleaned board, not raw headline rank.
- Multiple boards still contain old split-format anomalies (`30xxx / 37xxx / 36xxx` style sectors), so sector percentile tables are less trustworthy than direct window comparison and cross-car self-comparison.

### Imola Multi-Car Matrix (Important, as of 2026-05-23)

| Car | Pool | My Time | Rank Used | Percentile | Gap to P1 | Gap to P10 | Sector Split | Important Read (Today) |
| --- | ---: | ---: | --- | ---: | ---: | ---: | --- | --- |
| McLaren 720S GT3 | 310 | 1:43.597 | P6 | Top 98.1% | +1.163s | -0.118s | 21.524 / 33.882 / 48.191 | Best complete result in the sample; strong board, real top-10 margin, best total extraction. |
| Ferrari 296 GT3 | 411 | 1:43.757 | P16 | Top 96.1% | +1.681s | +0.189s | 21.509 / 33.917 / 48.331 | Still the strongest dense-board benchmark; rank looks worse than the lap quality because the board is deeper and tighter. |
| Aston Martin Vantage GT3 | 208 raw / 207 cleaned | 1:43.824 | Clean P6 | Top 97.1%* | +1.256s** | -0.182s | 21.453 / 33.930 / 48.441 | Strong result, but the board is dirty and softer than Ferrari/McLaren; good evidence of compatibility, not a universal front-engine solution. |
| Corvette Z06 GT3R | 178 | 1:43.849 | P14 | Top 92.7% | +2.051s | +0.173s | 21.540 / 33.957 / 48.352 | One-lap pace is solid, but small-pool rank flatters the result compared with Ferrari/McLaren. |
| Mercedes AMG GT3 Evo | 429 | 1:44.066 | P31 | Top 92.8% | +1.844s | +0.409s | 21.474 / 34.169 / 48.423 | Not an isolated AMG problem anymore; heavy front-engine mid-lap loss remains unresolved. |
| BMW M4 GT3 | 528 | 1:44.084 | P32 | Top 93.9% | +1.490s | +0.259s | 21.575 / 34.035 / 48.474 | Same family problem as AMG: acceptable launch, then time lost through the middle and never recovered. |
| Porsche 911 GT3R | 602 | 1:44.294 | P40 | Top 93.4% | +1.836s | +0.575s | 21.734 / 33.968 / 48.592 | Separate issue from the front-engine cars; weakest sector 1 and weakest sector 3 in the sample. |

\* Aston percentile uses cleaned position logic after removing the garbage lap.

\** Aston `P1` gap uses the real GT3 benchmark lap, not the garbage entry.

### Cross-Car Sector Read

Own lap splits from the seven-car sample:

- Ferrari 296 GT3: `21.509 / 33.917 / 48.331`
- McLaren 720S GT3: `21.524 / 33.882 / 48.191`
- Aston Martin Vantage GT3: `21.453 / 33.930 / 48.441`
- Corvette Z06 GT3R: `21.540 / 33.957 / 48.352`
- Mercedes AMG GT3 Evo: `21.474 / 34.169 / 48.423`
- BMW M4 GT3: `21.575 / 34.035 / 48.474`
- Porsche 911 GT3R: `21.734 / 33.968 / 48.592`

Sector spread inside the sample:

- `S1` spread: `0.281s` (`21.453` Aston -> `21.734` Porsche)
- `S2` spread: `0.287s` (`33.882` McLaren -> `34.169` AMG)
- `S3` spread: `0.401s` (`48.191` McLaren -> `48.592` Porsche)

Direct read:

- Sector 3 remains the biggest shared weakness across the sample.
- The Porsche is the clearest failure to finish the lap: worst `S1` and worst `S3`.
- AMG and BMW do not fail in `S1`; both are still competitive there.
- AMG and BMW lose their time primarily in `S2`, then fail to recover enough in `S3`.

### Updated Reading

The May 21 Aston-only interpretation was incomplete.

Old reading:

- Aston suggested the front-engine problem might be AMG-specific.

Updated reading:

- That was too optimistic.
- Aston is the exception, not the general rule.
- AMG `1:44.066` and BMW `1:44.084` are essentially the same result on serious boards.
- That is not coincidence. That is a family-level pattern.

Corrected conclusion:

- The real issue is not generic front-engine incompetence.
- The real issue is heavier front-engine GT3 translation at Imola.
- More specifically: the limiting pattern is not planted rear in isolation, but cars that stay too front-safe and too slow to rotate through entry-to-mid phase even after brake bias is moved rearward into the preferred window.
- Aston remains important because it proves the original blanket theory was too crude.
- But the broader sample shows the unresolved weakness is real in the heavier front-engine cars, especially through the middle phase of the lap.

### Car-Family Interpretation

1. Mid-engine reference group: Ferrari, McLaren
   - Still the cleanest proof of level.
   - Fastest combined extraction and best total lap completion.
2. Light/friendlier front-engine exception: Aston Martin
   - Good compatibility.
   - Useful proof that front-engine alone is not the problem.
3. Heavy front-engine problem group: Mercedes AMG GT3 Evo, BMW M4 GT3
   - Both launch the lap well enough.
   - Both lose too much time in sector 2.
   - Neither recovers enough in sector 3.
   - Rear stability itself is not the problem; the problem is insufficient rotation authority before the rear support becomes useful.
4. Separate rear-engine issue: Porsche 911 GT3R
   - Different problem profile from AMG/BMW.
   - Loses immediately in `S1`, then also fails to cash out `S3`.

### Overlap-Group Percentile Check

Additional overlap sample reviewed across Vantage, AMG, and Ferrari leaderboards:

| Player | Vantage Pct. | AMG Pct. | Ferrari Pct. | Avg Pct. |
| --- | ---: | ---: | ---: | ---: |
| theero_58565 | 95.8% | 94.4% | 99.8% | 96.7% |
| oldark. | 97.7% | 92.1% | 96.6% | 95.5% |
| aneck | 95.3% | 97.2% | 76.5% | 89.7% |
| kaanuu46 | 56.8% | 97.0% | 99.5% | 84.4% |
| logieuk | 87.8% | 77.9% | 77.7% | 81.1% |
| sir_cedricar99 | 76.1% | 83.3% | 78.2% | 79.2% |
| shorty_m. | 73.2% | 81.4% | 82.3% | 79.0% |

Read:

- My cross-car percentile in this overlap group is second-best by average, behind only `theero_58565`.
- More important than average: the floor remains high. My weakest board in that sample is still `92.1%`.
- Several other drivers show one strong board and one collapse. I do not.
- This reinforces the earlier conclusion that cross-car one-lap transfer is real, not accidental.

Reference quality note:

- `theero_58565` is not anonymous leaderboard filler. SimGrid profile snapshot shows active organized racing with meaningful volume and race results.
- That makes finishing behind him in overlap-average less concerning and makes the comparison itself more credible.

### Convergence Cost Read

The strongest additional insight from today is not just final lap time, but the cost required to produce it.

McLaren 720S GT3 progression to `1:43.597`:

- Stint 1 representative sequence: `1:47.888 -> 1:44.656 -> 1:43.879`
- Stint 2 representative sequence: `1:43.976 / 1:43.984 / 1:43.904 / 1:43.597`
- Practical read: the car converged quickly. Competitive pace was available almost immediately and the final PB arrived within roughly ten real hotlap attempts.

Mercedes AMG GT3 Evo progression to `1:44.066`:

- Session tracker blocks reviewed today: `20 / 5 / 15`, `17 / 5 / 12`, `20 / 4 / 16`
- Interpreted total: roughly `57` laps, `14` valid, `43` invalid before reaching the PB.
- Practical read: the lap exists, but the extraction cost is massive. The valid operating window is narrow and the car demands repeated overreach before the final number appears.

BMW M4 GT3 progression to `1:44.084`:

- Session tracker block reviewed today: `16 / 7 / 9`
- Practical read: easier to access than AMG, but still much more expensive than McLaren. The lap comes with friction rather than fluency.

Operational takeaway:

- Final lap time alone is incomplete.
- Low-cost pace indicates natural fit and accessible extraction.
- High-cost pace indicates a forced lap, narrower window, and weaker repeatability.
- On this measure, McLaren is a natural Imola platform for me; AMG is a grind; BMW sits in between but still on the expensive side.

### Brake Bias Signature Clarification

Current hotlap BB ranges across the same Imola platform set:

- Ferrari 296 GT3: around `47%`
- McLaren 720S GT3: around `44-45%`
- Mercedes AMG GT3 Evo: around `45%`
- Aston Martin Vantage GT3: around `45-46%`
- BMW M4 GT3: around `45%`

Interpretation:

- This is a consistent signature, not random preference. I usually move BB roughly `2-3%` rearward from Coach Dave aggressive qualifying setups.
- The purpose is to unlock entry rotation during brake release, not to create instability for its own sake.
- Moving back toward a more forward BB setting makes entry feel uneasy and uncomfortable, which confirms that the rearward shift is a corrective tool rather than a flirtation with rear looseness.
- This also sharpens the platform-fit conclusion: the preferred car is one that rotates once BB is moved into this rearward window, then stays planted from apex onward. The bad-fit car is one that still feels inert after the BB correction.

### What Changed in My Understanding Today

1. The May 21 Aston result did not solve the front-engine question; it only proved the question had been framed too simply.
2. AMG is not an isolated translation problem at Imola; BMW reproduces the same heavier front-engine weakness.
3. The main heavy front-engine issue is not first-corner bravery but mid-lap rotation/repositioning loss.
4. Porsche remains a separate problem because its weakness starts earlier and ends worse.
5. McLaren now stands as the strongest single hotlap proof of current Imola extraction, with Ferrari still the strongest dense-board benchmark.
6. My overlap-group percentile floor is strong enough to confirm real cross-car hotlap competence, not just isolated car spikes.
7. Lap-count-to-PB is a useful secondary metric because it reveals whether pace was accessed naturally or dragged out through overpush.
8. The heavier front-engine cars are not just slower for me at Imola; they are more expensive to extract.
9. The better phrasing of the problem is now clear: I do not dislike planted rear cars in general; I dislike cars that lock the rear down before the car has finished rotating.

### Practical Rule Update

- For Imola hotlap self-diagnosis, use this decision tree:
  1. If `S1` is weak, suspect commitment/reference problem (most visible in Porsche).
  2. If `S1` is fine but `S2` inflates, suspect heavy front-engine rotation/repositioning loss (AMG/BMW pattern).
  3. If the lap is alive through `S2` but dies late, treat `S3` cash-out as the primary limiter (shared pattern across the whole sample).

### Next Analysis Step

1. Build a corner-phase map for heavy front-engine Imola loss, focusing on where AMG and BMW begin bleeding time versus Ferrari/McLaren.
2. Separate the heavy front-engine problem into entry rotation loss vs direction-change repositioning loss vs final-sector exit caution.

## 2026-05-24

### Session Context

- Track: Imola (Autodromo Enzo e Dino Ferrari)
- Scope: correction pass on the May 23 hotlap interpretation using fresh BMW data plus short race-stint references
- Cars reviewed today: BMW M4 GT3, Mercedes AMG GT3 Evo, McLaren 720S GT3, Ferrari 296 GT3
- Goal: determine whether BMW really belongs with AMG in the same problem bucket, and separate raw lap delta from control-window quality

### BMW Re-Test: Immediate Read

Fresh BMW hotlap sequence posted today:

- Prep / junk laps not useful for pace read: `1:54.346`, `1:59.165`
- Usable attack laps: `1:44.604`, `1:48.584`, `1:44.635`, `1:43.972`

Leaderboard result:

- BMW M4 GT3: `1:43.972`, `P23/521`
- Percentile: top `95.8%`
- Gap to P1: `+1.378s`
- Gap to P10: `+0.231s`
- Gap to current top `2.5%` cut (`1:43.824`): `+0.148s`

Important read:

- This result is materially better than the earlier BMW interpretation suggested.
- The car re-entered the pace window immediately after a reset (`1:44.604` in run 1, `1:44.635` in run 2).
- The PB (`1:43.972`) arrived quickly, not after an AMG-style grind.
- That means BMW is not an AMG-level hostile platform at Imola.

### Correction to the May 23 Fit Map

The earlier BMW wording was too crude.

Old tendency:

- BMW was grouped too closely with AMG as part of one heavy front-engine extraction problem.

Corrected read:

- AMG remains the real high-cost outlier.
- BMW is more readable, more reacquirable, and more coachable than AMG.
- BMW may still be underexplored, but the current data no longer supports calling it simply dull or fundamentally capped.
- The honest label is: promising but not yet fully mapped.

Operational update:

- McLaren remains the lowest-cost natural fit.
- Ferrari remains the strongest dense-board benchmark.
- Aston remains cooperative with a strong ceiling.
- BMW now moves out of the AMG bucket and into the "viable, underexplored" bucket.
- AMG remains the expensive platform.

### Why BMW Feels Different from AMG

Subjective difference reported today is technically important.

BMW:

- Easy to trigger ABS, but the correction is obvious: reduce brake pressure and continue the trail phase.
- Mistakes are legible through the pedal.
- The car accepts a cleaner brake release and does not collapse the whole corner immediately.

AMG:

- Front axle feels loaded at first, then falls off abruptly when overloaded.
- Late turn-in, too much brake, or too much steering can make the front go light and push.
- The correction demand moves from the foot into the hands, which increases physical cost and confidence loss.

Blunt distinction:

- BMW punishes the pedal mistake in a readable way.
- AMG punishes the whole corner in a narrower and more expensive way.

### AMG Front-Axle Clarification

The palms-sore feedback after the AMG sessions is useful, not random.

What it likely indicates:

- The AMG front axle is not simply weak.
- It has a narrow peak: strong initial response, poor tolerance once overloaded.
- When the missing yaw is forced with additional steering input, self-aligning torque drops and the wheel goes light as the front saturates.
- Piratella exposes this especially hard because braking, turn-in timing, crest/unload, and front saturation stack together there.

Practical implication:

- AMG is not just slower by a few tenths.
- It is more physically expensive because it asks for more hand input to recover rotation the platform did not give early enough.

### Short Race-Sample Check: McLaren vs Ferrari

Two short opening-stint references were compared today. These samples are too short for tyre-degradation conclusions, but they are valid for opening-window race pace.

McLaren race sample (laps `2-8`, tyre warmers OFF, full ELMS grid):

- Best: `1:44.503`
- Median: `1:44.856`
- Avg: `1:44.865`
- Std dev: `0.28s`

Ferrari strongest race sample (laps `2-10` from strongest first 10 laps):

- Best: `1:44.529`
- Median: `1:44.967`
- Avg: `1:45.062`
- Std dev: `0.50s`

Read:

- McLaren was slightly stronger on repeatable opening-stint pace (`~0.11s` better on median).
- Best laps are effectively equal (`0.026s` difference).
- McLaren opening window was cleaner and required less effort to access.
- Ferrari sample remained strong, but this comparison does not support saying it clearly beat the McLaren in this short race window.

### Core Interpretation Shift

Today sharpened the real distinction between lap time and platform fit.

- A `0.1-0.2s` raw lap gap is small.
- A control-window gap is not small.
- The hands and feet are detecting how much work the platform requires to generate the same lap, not just the final time.

That is why Aston or BMW can feel much better than AMG even when the stopwatch gap is modest.

The better framing is now:

- raw lap time = output
- convergence cost = access to output
- control-window width = repeatability and confidence cost

AMG is the worst car in the current Imola sample on the last two metrics.

### BMW Race Follow-Up: Why the M4 Is Popular

After the hotlap re-test, a BMW M4 GT3 race stint was run at Imola against `95%` AI with a full WEC-style grid:

- `19` Hypercars
- `18` LMGT3

BMW race sample (laps `2-26`):

- Best: `1:44.449`
- Median: `1:44.985`
- Avg: `1:45.339`
- Std dev: `0.96s`

Raw interpretation:

- The raw average and sigma are inflated by traffic-contaminated laps (`1:46.526`, `1:48.489`, `1:47.390`, and other compromised laps in the second half of the stint).
- The real pace signal is the opening clean band before repeated traffic distortion.

BMW opening race window (laps `2-16`):

- Best: `1:44.449`
- Median: `1:44.835`
- Avg: `1:44.759`

Direct read:

- The BMW immediately produced a repeatable `1:44.4-1:44.9` race band.
- This is not one lucky lap. It is a stable operating window.
- The car is easy to place in traffic, easy to recover after minor brake errors, and does not demand heroics to stay near the pace floor.

This explains the popularity directly:

- not because the car is magical,
- but because it gives race pace cheaply.

In this context, "cheaply" means:

- wide operating window,
- low correction cost,
- easy pedal-led recovery,
- repeatable low-`1:44s` without constant overreach.

### Ferrari Comparison Correction: Traffic Difficulty Matters

The first BMW-vs-Ferrari race comparison was incomplete because the traffic environment was not equivalent.

Ferrari reference from `2026-05-21` dry-early phase:

- Best: `1:44.529`
- Median: `1:45.003`
- Avg: `1:44.991`
- Std dev: `0.216s`

But the traffic context was harder:

- Ferrari race: `24+` LMP2 + `13` LMGT3 (ELMS-style grid)
- BMW race: `19` Hypercars + `18` LMGT3 (WEC-style grid)

Practical implication:

- The Ferrari run had materially more faster-class blue-flag interruption pressure.
- That means the Ferrari median is likely slightly understated as a pure-car pace signal.
- Therefore the honest conclusion is not "BMW beat Ferrari."

Corrected conclusion:

- BMW race pace is clearly real.
- BMW race pace looks very accessible.
- Ferrari has not been cleanly beaten because the race contexts were not equally difficult.
- The strongest defensible claim is that BMW currently looks easier to race consistently, not definitively faster.

### Tyre Degradation Read: Ferrari vs BMW

Tyre degradation must be read in race-context windows, not from single-lap spikes.

Important contamination limits:

- Ferrari stint stayed dry only through lap `17`; drizzle began affecting the stint from lap `18` onward.
- BMW stint was heavily affected by multiclass traffic; several slower laps are race-traffic events, not pure tyre decline.

#### Ferrari dry-stint read

Usable dry windows:

- Opening dry window, laps `2-8`:
  - Best: `1:44.529`
  - Median: `1:44.865`
- Mid dry window, laps `9-13`:
  - Best: `1:44.967`
  - Median: `1:45.074`
- Late dry pre-drizzle window, laps `14-17`:
  - Best: `1:45.003`
  - Median: `1:45.213`

Ferrari fade before weather interference:

- Opening median -> late pre-drizzle median: `+0.348s`
- Opening best -> late pre-drizzle best: `+0.474s`

Read:

- This is clear but mild dry-stint degradation.
- There is no Barcelona-style cliff.
- The car remains healthy through the dry phase, but the sharp edge fades gradually.

#### BMW dry race-window read

Cleanest usable race windows inside the traffic-heavy stint:

- Opening clear window, laps `2-8`:
  - Best: `1:44.449`
  - Median: `1:44.537`
- Recovered clear window, laps `12-16`:
  - Best: `1:44.566`
  - Median: `1:44.835`

BMW fade across the clean windows:

- Opening median -> recovered median: `+0.298s`
- Opening best -> recovered best: `+0.117s`

Read:

- BMW also shows mild degradation, not a meaningful tyre cliff.
- The car stays in the low-`1:44` to high-`1:44` band very easily.
- Heavy traffic may understate true wear slightly because interrupted laps can also cool the tyres.

#### Direct comparison

Honest read:

- Ferrari mild dry fade: about `+0.35s` on median before drizzle.
- BMW mild clean-window fade: about `+0.30s` on median before traffic fully dominates the sample.

Conclusion:

- Both cars degrade lightly at Imola.
- Neither car shows a serious tyre-management weakness in these samples.
- The difference between Ferrari and BMW here is smaller in tyre wear than in driver workload.
- BMW's current advantage is not clearly better tyre life; it is easier access to repeatable pace.

### What Changed in My Understanding Today

1. The May 23 BMW conclusion was too harsh; the fresh BMW re-test shows fast reacquisition and real ceiling.
2. BMW does not belong in the same severity bucket as AMG at Imola.
3. BMW's failure mode is readable through the brake pedal and trail-brake correction, which makes it coachable.
4. AMG's problem is not just pace loss but a narrow, peaky front axle that becomes physically expensive when overloaded.
5. McLaren remains the cleanest proof of natural Imola fit in both hotlap extraction and short opening-stint race pace.
6. Ferrari remains a high-level benchmark, but the short race sample today did not beat the McLaren sample.
7. The correct comparison between cars is no longer just best-lap delta; it must include convergence cost and window width.
8. BMW now has race evidence behind the hotlap impression: the M4 is popular because it gives repeatable pace with low correction cost.
9. Ferrari vs BMW race comparison must be traffic-adjusted; the Ferrari ELMS sample lived under heavier blue-flag load.
10. Tyre degradation between Ferrari and BMW at Imola looks broadly similar; the meaningful difference is platform usability, not tyre collapse behavior.

### Practical Rule Update

- For future Imola car classification, judge each platform on three layers:
  1. valid best lap,
  2. number of meaningful flyers needed to access it,
  3. how quickly the pace window can be re-entered after a reset or mistake.
- For race-phase comparison across classes, add a fourth layer:
  4. faster-class traffic density before treating median pace as directly comparable.

### Next Analysis Step

1. Run a cleaner matched-context Ferrari vs BMW race comparison with similar multiclass density before declaring a true race-pace winner.
2. Build a corner-phase comparison for AMG vs BMW at Piratella, Acque Minerali, and the Rivazza complex to separate brake-limited loss from steering-overload loss.

## 2026-05-25

### Session Context

- Track: Imola (Autodromo Enzo e Dino Ferrari)
- Car focus: Lexus RCF GT3
- Driver tag: `oldark.`
- Goal: test whether Lexus is only generally competitive or actually capable of entering the dense top-end Imola cluster

### Leaderboard Result

Current Lexus Imola result:

- Lexus RCF GT3: `1:43.468`, `P21/488`
- Percentile: top `95.7%`
- Top `5%` cutoff from the board: approximately `1:43.509`
- Margin inside top `5%`: about `0.041s`

Important board hygiene note:

- The headline `P1` lap (`1:37.633`) is garbage and should not be used as a real benchmark.
- Old split-format anomalies still exist on this board, so nearby-window comparison is more trustworthy than the raw top row.

### Competitive-Zone Confirmation

The main result today is not the absolute rank number. The main result is where the lap sits inside the board structure.

Nearby competitive band:

- `P13 = 1:43.100`
- `P24 = 1:43.492`
- Only `0.392s` covers twelve positions

Direct read:

- This is not an empty leaderboard region.
- The Lexus lap sits inside a compressed, genuinely competitive cluster.
- At this level, each few hundredths can move several positions.

So the honest classification is:

- highly competitive on this board,
- not yet elite,
- but clearly operating in the serious zone rather than the fringe.

### Practice-Session Progression Read

Useful progression snapshots posted today:

- lap `15`: `1:44.005`
- lap `17`: `1:44.007`
- lap `18`: `1:43.799`
- lap `19`: `1:43.719`
- lap `45`: `1:43.584`
- lap `46`: `1:43.468`

Critical interpretation:

- If the target had been raw lap time only, the session was already successful by roughly lap `7` when the Lexus first reached the `1:43.8` zone.
- The long session length came from leaderboard optimization, not from basic platform discovery.

This sharply separates the Lexus session from the AMG grind.

Lexus grind:

- pace arrived early,
- the car was already working,
- the later laps were spent refining within a compressed board.

AMG grind:

- pace was harder to access,
- the platform itself resisted the preferred control loop,
- the later laps were still partly about making the car obey.

Blunt distinction:

- Lexus = competitive grind
- AMG = platform grind

They can consume similar lap counts, but they are not the same problem.

### Sector Read

Current Lexus lap split:

- `S1 = 21.492`
- `S2 = 33.802`
- `S3 = 48.174`

Reference against the current `P10` Lexus lap (`1:42.927`, `21.411 / 33.771 / 47.745`):

- `S1`: `+0.081s`
- `S2`: `+0.031s`
- `S3`: `+0.429s`

The meaning is obvious:

- Lexus pace is already competitive in sectors 1 and 2.
- Sector 3 is the real leak.
- This is not a general-lap weakness. It is a lap-completion weakness.

### Ceiling vs Cost

Today also changed the read relative to the McLaren.

- The Lexus was already quicker than the previous McLaren benchmark even with a sub-optimal sector 3.
- That means the Lexus ceiling is not hypothetical. It is already visible.

Corrected platform read:

- McLaren still looks lower-cost and easier to converge.
- Lexus may carry the higher one-lap ceiling at Imola if sector 3 is cleaned up without damaging sectors 1 and 2.

This is an important distinction:

- McLaren = easier speed
- Lexus = potentially bigger final reward

### What Changed in My Understanding Today

1. Lexus is not just another viable GT3 at Imola; it is a genuinely competitive board car in my hands.
2. The Lexus session proves that similar lap-count grinds can come from completely different causes: board compression versus bad platform fit.
3. Lexus pace arrived early, so the long session was not about unlocking the car; it was about optimizing rank.
4. Sector 3 is the real limiter on the Lexus, not overall car pace.
5. The Lexus may have a higher ultimate one-lap ceiling than McLaren at Imola, even if McLaren remains the easier car to exploit.
6. Top `5%` on this Lexus board is real, but only just cleared; the result is strong, not dominant.

### Practical Rule Update

- When a car reaches target lap pace early but still takes many more laps to improve rank, classify the session as board-compression grind, not extraction failure.
- For Lexus at Imola, treat sector 3 completion as the next priority before making broader car-fit conclusions.

### Next Analysis Step

1. Isolate the Lexus sector 3 loss corner-by-corner versus the McLaren and Ferrari references.
2. Check whether sector 3 cleanup can be achieved without sacrificing the already-competitive sectors 1 and 2.

## 2026-05-26

### Session Context

- Track: Imola (Autodromo Enzo e Dino Ferrari)
- Car focus: Ford Mustang GT3
- Driver tag: `oldark.`
- Goal: determine whether the Mustang behaves more like the expensive AMG-type front-engine problem or the more cooperative BMW/Lexus group

### Leaderboard Result

Current Mustang Imola result:

- Ford Mustang GT3: `1:43.541`, `P17/315`
- Percentile: top `94.6%`
- Top `10%` cutoff: `1:43.885`
- Top `5%` cutoff: `1:43.539`
- Missed top `5%` by only `0.002s`

Direct read:

- The car is already well inside the competitive zone.
- Missing top `5%` by `0.002s` is statistical noise, not a meaningful gap.
- This is a serious result, not a novelty lap.

### Board Compression Read

The local window around the lap is tightly packed:

- `P15 = 1:43.509`
- `P16 = 1:43.534`
- `P17 = 1:43.541`
- `P18 = 1:43.542`
- `P19 = 1:43.551`
- `P20 = 1:43.568`

Interpretation:

- The Mustang lap sits inside a dense competitive band.
- Multiple positions are covered by only a few hundredths.
- This is already the part of the board where minor execution changes have large rank consequences.

### Data Hygiene Note

The stored sector split attached to the leaderboard PB is clearly broken:

- `21.552 / 38.160 / 43.829`

That is not a usable GT3 Imola split and should be ignored.

Practical rule:

- For this Mustang session, trust the lap time, rank band, and percentile.
- Do not diagnose corner phases from the corrupted sector export.

### Practice-Session Read

Usable practice flyers posted today:

- `1:44.836`
- `1:44.376`
- `1:44.613`
- `1:43.786`
- `1:44.189`
- `1:43.788`
- `1:46.184`
- `1:43.541`

Session numbers:

- Best: `1:43.541`
- Median: `1:44.283`
- Avg: `1:44.414`

Important progression read:

- By lap `5`, the car had already produced `1:43.786`.
- The pace returned later at `1:43.788` and then improved to `1:43.541`.
- One miss (`1:46.184`) did not poison the rest of the session.

This is the key signal:

- the Mustang pace is reacquirable,
- the window is wide enough,
- and the PB did not require a platform-war session.

### Platform Classification

The Mustang now looks much closer to the BMW/Lexus side than to the AMG side.

Meaning:

- competitive pace exists almost immediately,
- the car does not require long obedience work before the lap appears,
- the remaining job is optimization, not survival.

Blunt comparison:

- AMG = hostile grind
- Lexus = compressed-board grind
- Mustang = quick-access competitive platform

That is a completely different behavioral class from the AMG.

### Updated Imola Fit Read

Current one-lap Imola map after the latest sessions:

1. McLaren 720S GT3
   - Lowest-cost access to front-running pace.
2. Ferrari 296 GT3
   - Strongest dense-board benchmark.
3. Lexus RCF GT3
   - High ceiling, but more board-compression grind.
4. Ford Mustang GT3
   - Immediate competitiveness and good reacquisition; clearly viable.
5. BMW M4 GT3
   - Readable and coachable; race-friendly and now clearly separate from AMG.
6. Mercedes AMG GT3 Evo
   - Still the expensive outlier at Imola.

This ordering is not absolute race truth. It is a current hotlap/platform-fit ordering based on pace access, window width, and cost.

### What Changed in My Understanding Today

1. The Mustang is not another heavy front-engine trap at Imola; it is immediately competitive.
2. The front-engine problem at Imola is no longer usefully described as a blanket category.
3. Mustang confirms that front-engine viability depends on whether the car enters the preferred control window quickly, not on engine location alone.
4. The PB structure and the reacquisition behavior matter more than one bad lap in judging platform fit.
5. Missing top `5%` by `0.002s` confirms the Mustang is already operating in the serious competitive band.

### Practical Rule Update

- For Imola front-engine classification, stop using weight distribution labels alone.
- The first filter should be: does the car reach the preferred brake-release rotation window within the first few meaningful flyers?

### Next Analysis Step

1. Compare Mustang race behavior against BMW and Ferrari to see whether the easy hotlap access also survives stint context.
2. Rebuild the heavy front-engine hypothesis using only the true outlier set rather than broad front-engine grouping.

## 2026-05-27

### Session Context

- Track: Imola (Autodromo Enzo e Dino Ferrari)
- Car focus: Ford Mustang GT3
- Driver tag: `oldark.`
- Goal: verify whether the May 26 near-miss was real pace or just a cutoff tease, and check where the remaining loss sits

### Updated Leaderboard Result

Current Mustang Imola result:

- Ford Mustang GT3: `1:43.478`, `P15/313`
- Percentile: top `95.2%`
- Top `5%` cutoff: `1:43.524`
- Margin inside top `5%`: `0.046s`
- Top `2.5%` cutoff: `1:43.067`
- Gap to top `2.5%`: `0.411s`

Direct read:

- The May 26 top-`5%` miss is gone.
- The car is now cleanly inside the target band, not hanging on the edge of it.
- Only `0.063s` was gained versus the prior `1:43.541`, but that was enough to convert a near-miss into a proper top-`5%` result.

### Valid Sector Read

Updated Mustang lap split:

- `S1 = 21.599`
- `S2 = 33.888`
- `S3 = 47.991`

Practical read:

- `S1` is already in the right competitive window.
- `S2` is also good enough.
- `S3` is still the weakest phase relative to the rest of the lap.

Blunt conclusion:

- This is not an entry problem.
- This is not an AMG-style obedience problem.
- The remaining time is in finishing the lap better.

### Progression Confirmation

Additional later-session competitive laps posted today:

- `1:43.937`
- `1:43.972`
- `1:43.757`
- `1:43.596`
- `1:43.478`

Read:

- The pace remained reacquirable after the May 26 session instead of collapsing into random overpush.
- The PB improved through normal refinement, not through a desperate hero lap.
- That confirms the Mustang is a cooperative platform with a usable control window.

### Updated Mustang Classification

The classification from May 26 holds and is now stronger.

- Mustang is not a heavy front-engine trap.
- Mustang is not giving AMG signals.
- Mustang is giving compressed-board competitive signals: pace is available, but the remaining gains are expensive because the board region is tight.

Corrected practical label:

- Mustang = quick-access competitive platform with a sector-3 completion leak

### AMG Comparison Correction

Later on the same day, the Mustang result was compared directly against a fresh AMG Imola leaderboard result:

- Mercedes AMG GT3 Evo: `1:43.911`, `P27/435`
- Percentile: top `93.8%`
- Top `5%` cutoff: `1:43.888`
- Miss to top `5%`: `0.023s`
- Top `2.5%` cutoff: `1:43.493`
- Gap to top `2.5%`: `0.418s`

Direct comparison versus Mustang:

- Mustang: `1:43.478`, `P15/313`, top `95.2%`
- AMG: `1:43.911`, `P27/435`, top `93.8%`
- Raw lap gap: `0.433s` in favor of Mustang

Critical leaderboard-relative correction:

- Mustang top-`2.5%` gap: `0.411s`
- AMG top-`2.5%` gap: `0.418s`
- Mustang top-`1%` gap: `0.694s`
- AMG top-`1%` gap: `0.692s`

Meaning:

- Relative to each board, the final competitive level is almost the same.
- The Mustang is not winning because I collapse in AMG relative to the field.
- The cleaner interpretation is that the AMG board itself is slower by roughly the same amount as my lap delta.
- Therefore the corrected statement is: the Mustang is faster at Imola, but the AMG is not a massive percentile collapse.

### AMG vs Mustang Sector Read

Best valid sectors:

- Mustang: `21.599 / 33.888 / 47.991`
- AMG: `21.590 / 33.850 / 48.471`

Direct delta (AMG minus Mustang):

- `S1`: `-0.009s`
- `S2`: `-0.038s`
- `S3`: `+0.480s`

Interpretation:

- AMG is no longer clearly losing the lap in the first half.
- In this comparison, AMG is actually slightly better in sectors 1 and 2.
- The whole difference appears in sector 3.
- At Imola, sector 3 here means the run from just before Acque Minerali to the finish line.
- In practical corner terms, that means Acque Minerali, Variante Alta, and the Rivazza complex are carrying the full late-lap tax.
- That means the new transferable-technique conclusion is stronger than expected: entry and early-mid phase discipline are now carrying over, but the AMG still fails to cash out the lap late.

### Error-Legibility Finding

The most important new subjective finding today is not raw pace. It is cockpit interpretability.

AMG subjective pattern:

- The car can produce a competitive final lap, but the source of time loss is often unclear while driving.
- A bad lap can feel non-deterministic: the delta turns against me without an obvious local mistake I can name confidently.
- This creates the feeling that the car is speaking, but in a language I do not parse cleanly.

Working term:

- AMG at Imola is a low-legibility platform.

What that means in practice:

- Mustang usually tells me exactly what I did wrong.
- AMG often makes me investigate after the fact.
- The stress cost comes not only from pace access, but from weak cause-and-effect clarity between input, platform response, and delta outcome.

Rivazza 2 was the clearest example reported today:

- delta was healthy on entry,
- line and apex looked correct,
- throttle pickup felt correct,
- no visible rear escape occurred,
- but the delta still flipped by roughly `0.10s` by exit,
- with only a small kerb/platform shake as the possible clue.

Operational interpretation:

- In better-fit cars, errors are legible in driver-input terms.
- In AMG, losses often arrive as platform-response consequences that are harder to decode in real time.
- That makes the car more tiring, more stressful, and more demotivating even when the final leaderboard result is still respectable.

### What Changed in My Understanding Today

1. Mustang is now confirmed as a real top-`5%` Imola platform, not just a near-cutoff flirtation.
2. The small `0.063s` gain mattered because the local board is compressed; this was meaningful conversion, not cosmetic improvement.
3. The car's remaining weakness is late-lap completion, not basic pace access.
4. The Mustang continues to support the narrower interpretation that the true Imola outlier is AMG, not front-engine architecture in general.
5. The AMG-vs-Mustang comparison corrected an earlier overstatement: relative to each leaderboard, my final competitive level is much closer than the raw lap-time gap suggests.
6. The better description of AMG is no longer "far lower ceiling" but "similar percentile ceiling on a slower board, with much worse access cost."
7. The deepest AMG problem at Imola is now clearer: not just pace access, but low error legibility and weak real-time interpretability.

### Practical Rule Update

- For Mustang at Imola, stop spending attention on whether the car belongs in the viable group. It does.
- The next useful question is where sector 3 is being wasted and whether that loss comes from caution, line shape, or throttle timing.
- For difficult hotlap platforms, add a separate fit metric beyond raw pace and percentile: error legibility.
- A car that gives unclear loss signals can still be competitively viable, but it will carry extra physical, psychological, and learning cost.

### Next Analysis Step

1. Compare AMG sector-3 loss corner-by-corner against Mustang, Ferrari, and McLaren references across Acque Minerali, Variante Alta, and the Rivazza complex.
2. Separate AMG Imola evaluation into two layers: leaderboard-relative ceiling versus error-legibility / convergence cost.
