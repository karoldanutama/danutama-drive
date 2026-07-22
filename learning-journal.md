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

### Mustang Race-Stint Follow-Up

The Mustang was then tested in an offline race at Imola against `95%` AI with a full WEC-style grid.

Mustang race sample (laps `2-26`):

- Best: `1:43.804`
- Median: `1:45.097`
- Avg: `1:45.956`

Raw interpretation:

- The full sample is too dirty to read as pure race pace.
- Traffic/contact contamination hit laps `9`, `18`, `23`, `25`, and `26`.
- Driver-overpush errors hit laps `6`, `7`, `10`, `11`, and `24`.
- So the stint felt messy because it was messy; traffic was a real problem, but it was not the only problem.

Cleaner usable race band:

- Laps used: `2`, `3`, `4`, `5`, `8`, `12`, `13`, `14`, `15`, `16`, `17`, `19`, `20`, `21`, `22`
- Best: `1:43.804`
- Median: `1:44.850`
- Avg: `1:44.729`

Settled race window:

- Laps used: `13`, `14`, `15`, `16`, `17`, `19`, `20`, `22`
- Best: `1:44.612`
- Median: `1:44.874`
- Avg: `1:44.864`

Direct read:

- The Mustang clearly has real race pace, not just hotlap pace.
- Once the stint stabilized, the car sat in a repeatable mid-`1:44` band.
- There is no meaningful tyre-cliff signal here; the main distortions were mistakes and traffic, not tyre collapse.
- The car remains competitive in race context, but it is easier to destabilize than BMW when overpushed through the chicanes.

### Mustang vs BMW and Ferrari in Race Context

Against the current Imola references:

- BMW opening race window (`2-16`): best `1:44.449`, median `1:44.835`, avg `1:44.759`
- Ferrari dry-early reference: best `1:44.529`, median `1:45.003`, avg `1:44.991`
- Mustang usable race band: best `1:43.804`, median `1:44.850`, avg `1:44.729`

Interpretation:

- Mustang and BMW are basically in the same real race-pace band at Imola.
- Mustang did not produce a clean median advantage over BMW; the two cars are effectively level on repeatable race pace here.
- Mustang showed a stronger single-lap peak, but BMW still looks calmer and cheaper when the race gets messy.
- Mustang looks slightly stronger than the current Ferrari dry-early median, but the Ferrari sample lived under harder ELMS-style faster-class traffic, so that is not clean proof of superiority.
- The strongest defensible claim is that Mustang belongs in the same serious race-pace group as BMW and Ferrari, not that it has definitively beaten both.

### What Changed in My Understanding Today

1. Mustang is now confirmed as a real top-`5%` Imola platform, not just a near-cutoff flirtation.
2. The small `0.063s` gain mattered because the local board is compressed; this was meaningful conversion, not cosmetic improvement.
3. The car's remaining weakness is late-lap completion, not basic pace access.
4. The Mustang continues to support the narrower interpretation that the true Imola outlier is AMG, not front-engine architecture in general.
5. The AMG-vs-Mustang comparison corrected an earlier overstatement: relative to each leaderboard, my final competitive level is much closer than the raw lap-time gap suggests.
6. The better description of AMG is no longer "far lower ceiling" but "similar percentile ceiling on a slower board, with much worse access cost."
7. The deepest AMG problem at Imola is now clearer: not just pace access, but low error legibility and weak real-time interpretability.
8. Mustang race testing confirms the car is not just hotlap-friendly; it carries real race pace in a repeatable mid-`1:44` band.
9. Mustang appears to match BMW closely in race pace while remaining more punishable if I overpush the chicanes.
10. The honest Mustang vs Ferrari race comparison remains traffic-adjusted; current data supports same-tier pace, not a clean superiority claim.

### Practical Rule Update

- For Mustang at Imola, stop spending attention on whether the car belongs in the viable group. It does.
- The next useful question is where sector 3 is being wasted and whether that loss comes from caution, line shape, or throttle timing.
- For difficult hotlap platforms, add a separate fit metric beyond raw pace and percentile: error legibility.
- A car that gives unclear loss signals can still be competitively viable, but it will carry extra physical, psychological, and learning cost.
- For Mustang in race trim, separate two failure types before judging the stint: traffic contamination versus self-inflicted chicane overpush.

### Next Analysis Step

1. Compare AMG sector-3 loss corner-by-corner against Mustang, Ferrari, and McLaren references across Acque Minerali, Variante Alta, and the Rivazza complex.
2. Separate AMG Imola evaluation into two layers: leaderboard-relative ceiling versus error-legibility / convergence cost.
3. Run a cleaner matched-context Mustang vs BMW race comparison before declaring a true race-pace winner between those two cars.

## 2026-05-30

### Session Context

- Track: Imola (Autodromo Enzo e Dino Ferrari)
- Scope: control-model clarification plus matched-context dry race comparison
- Cars reviewed today: Mercedes AMG GT3 Evo, Ferrari 296 GT3, McLaren 720S GT3, BMW M4 GT3, Ford Mustang GT3
- Goal: identify the real missing cue in the AMG, and compare Ferrari vs McLaren race pace using the last clean pre-backmarker window

### Control-Model Clarification: The Missing AMG Cue

Today clarified the exact entry cue my driving model depends on.

Native rotation sequence:

- release the brake until only a small residual pressure remains,
- ask the car to begin rotating before needing much steering angle,
- hold that small brake pressure for a brief moment while the rear starts to yaw,
- if the rear begins rotating enough, release the brake quickly,
- then let steering take over a car that is already entering.

This is most obvious at:

- Tamburello
- Villeneuve
- Piratella

Critical subjective update:

- A year ago, rear movement under braking felt dangerous.
- Now, if the rear gives no small wiggle or rotation cue at all, the entry feels wrong and uncomfortable.

This sharpened the real AMG problem:

- even at very rearward hotlap brake bias (`44%`), the rear still feels planted and silent,
- the expected entry-rotation cue never arrives,
- so I wait for a cue that never comes,
- that delay causes either late turn-in or overbraking,
- and the corner is already compromised before steering has a fair chance to work.

Important workaround discovery:

- when I released the brake earlier in the AMG without waiting for the cue, the lap worked and produced the `1:43.911`,
- but it felt wrong because it bypassed my normal feedback-based release timing.

Corrected interpretation:

- my native model is feedback-triggered release,
- the AMG workaround is prediction-triggered release,
- that is why the car can still be competitive while feeling alien and expensive.

### Ferrari vs McLaren Race Comparison: Use Laps `2-20`

Today also clarified the correct comparison window for the Ferrari and McLaren dry races.

Reason for the cutoff:

- from lap `21` onward, LMGT3 backmarker overlap began,
- after that point, traffic timing and traffic location on the lap distort pace too heavily,
- overlapping on a straight versus right before Variante Alta can easily swing `0.5-0.7s`.

So the last mostly comparable dry-race window is:

- laps `2-20`

#### Ferrari 296 GT3 (`2-20`)

Raw:

- Best: `1:44.593`
- Median: `1:45.073`
- Avg: `1:45.731`

Removing the obvious junk lap `17` (`1:53.269`):

- Best: `1:44.593`
- Median: `1:45.066`
- Avg: `1:45.312`

#### McLaren 720S GT3 (`2-20`)

Raw:

- Best: `1:44.533`
- Median: `1:44.934`
- Avg: `1:45.200`

Removing the obvious junk lap `11` (`1:49.346`):

- Best: `1:44.533`
- Median: `1:44.933`
- Avg: `1:44.970`

Matched-window conclusion:

- McLaren beat Ferrari by about `0.133s` on median in the clean-ish pre-backmarker window.
- Best-lap difference was only `0.060s`, so the bigger separation is not peak pace but usable race-window pace.
- That makes the McLaren the strongest current matched-context race sample at Imola.

### Ferrari Late-Stint Traffic Clarification

The Ferrari late phase (`21+`) was examined with replay context.

Important traffic notes:

- lap `21`: rhythm broken by traffic
- lap `22`: Variante Alta queue and overlapping backmarkers
- lap `23`: Tamburello snap while trying to regain pace after the traffic interruption
- lap `24`: Piratella inside overlap plus LMP2 traffic
- lap `27`: Rivazza inside overlap

Operational read:

- the late Ferrari phase is too traffic-poisoned to use as a clean tyre-only sample,
- lap `23` was still a driver mistake, but best classified as traffic-triggered overpush rather than a standalone clean-air error,
- laps `25-26` (`1:45.123`, `1:45.110`) prove the baseline pace was still there once the traffic released.

Corrected Ferrari conclusion:

- the full-dry Ferrari did not show a major late-stint tyre collapse,
- the visible late drop was heavily inflated by traffic timing and rhythm disruption,
- the true late dry fade is probably modest rather than catastrophic.

### Updated Race-Pace Read

Current Imola race evidence now points to three separate strengths:

- McLaren = strongest matched clean race pace
- BMW = calmest and cheapest repeatable race platform
- Mustang = very close to BMW on race pace, but more punishable when overpushed through kerb-to-asphalt chicane transitions

Ferrari remains competitive, but in current full-dry race evidence:

- slower than McLaren in the comparable `2-20` window,
- and more timing-sensitive to traffic interruption than the simpler raw pace tables first suggested.

### What Changed in My Understanding Today

1. The AMG problem is now much more precise: the missing piece is not rear grip in general, but the missing rear-rotation cue during brake release.
2. My preferred entry model is not generic trail-braking; it is residual-brake yaw confirmation followed by a quick release handoff to steering.
3. The AMG fast-lap workaround exists, but it requires prediction-triggered release rather than my native feedback-triggered release.
4. Ferrari vs McLaren race pace should only be compared cleanly through laps `2-20`; after that, traffic timing makes the comparison too dirty.
5. In that matched window, McLaren currently beats Ferrari by about `0.13s` on median.
6. The Ferrari late-stint slowdown in the full-dry run was overstated by traffic timing and rhythm disruption.
7. Traffic timing is now a distinct comparison layer, separate from traffic density and separate from raw pace.

### Practical Rule Update

- For AMG, do not keep waiting for the native rear-rotation cue if it is not coming; that delay is itself the mistake.
- For race-stint comparison, separate traffic density from traffic timing and traffic location on the lap.
- After obstructed laps, the next lap should be a rhythm-rebuild lap, not an immediate recovery lap.

### Next Analysis Step

1. Re-run BMW and Mustang in a strict laps-`2-20` comparable dry window if possible.
2. Test whether the AMG prediction-triggered release model can be made repeatable without the same physical and psychological cost.

## 2026-06-05

### Session Context

- Track: Imola (Autodromo Enzo e Dino Ferrari)
- Scope: cleanest Ferrari-vs-Mustang race comparison plus multiclass traffic-loss structure
- Cars reviewed today: Ferrari 296 GT3, Ford Mustang GT3
- Goal: compare peak clean race pace, understand Mustang tyre-carry cost, and classify the real cost of the Tosa traffic trap

### Ferrari 296 GT3: Fastest-Ever Clean Race Pace

Today produced the strongest Ferrari race-pace sample so far at Imola.

Raw sample (`2-27`):

- Best: `1:44.430`
- Median: `1:45.118`
- Avg: `1:46.427`

The raw sample is too dirty because of:

- lap `2` warm-up effect (`1:49.866`)
- lap `23` junk traffic event (`2:06.174`)
- several traffic-affected laps in the second half

Best usable Ferrari race window:

- laps `3-8`, `13-20`
- Best: `1:44.430`
- Median: `1:44.889`
- Avg: `1:44.860`

Conservative variant including lap `10` as still usable:

- Median: `1:44.916`
- Avg: `1:44.908`

Direct read:

- This is the strongest Ferrari race pace I have yet produced at Imola.
- The car held a stable high-`1:44.8` to low-`1:44.9` clean band.
- That is a serious race-pace result, not just a one-lap spike.

### Mustang GT3: Stint 1 Pace vs Stint 2 Carried Tyres

Fresh-tyre / first-stint race sample:

- Best usable window: laps `2-8`, `10`, `12-18`, `21`, `23-26`
- Best: `1:44.138`
- Median: `1:44.639`
- Avg: `1:44.696`

Direct comparison versus Ferrari clean race window:

- Ferrari median: `1:44.889`
- Mustang median: `1:44.639`
- Mustang advantage: about `0.250s`

Best-lap comparison:

- Ferrari best: `1:44.430`
- Mustang best: `1:44.138`
- Mustang advantage: `0.292s`

Important conclusion:

- In current clean race evidence, the Mustang still beats the Ferrari on both repeatable median pace and peak race lap.

Stint 2 on the same tyres (no tyre change):

- Ignoring the out-lap effects and the Variante Alta spin lap `52`
- Best: `1:45.162`
- Median: `1:45.620`
- Avg: `1:45.647`

Tyre-carry read:

- Mustang stint-2 median loss versus the best stint-1 window: about `+0.98s`
- That is a major drop, much worse than the light single-stint fade seen in Ferrari or BMW reference windows.
- So the Mustang is very fast on the good tyre window, but much more vulnerable once the set is carried forward.

### Tosa Traffic Trap: Sequence-Kill Loss

Today also clarified one of the worst multiclass scenarios at Imola.

Compression-trap structure:

- just overlapped one LMGT3,
- two more LMGT3 still ahead into Tosa,
- three LMP2 behind closing fast,
- braking point must move earlier for the GT3s ahead,
- but braking early increases prototype threat from behind.

This is not a normal local traffic loss.

Correct interpretation:

- a compromise at Tosa is not just a Tosa loss,
- it poisons Tosa exit speed,
- then hurts the run to Piratella,
- then removes clean overlap chance before Acque Minerali,
- then leaves Rivazza as the last desperate attack point.

Working term:

- sequence-kill traffic loss

Practical magnitude:

- one bad Tosa traffic concession can realistically become a `1.5-2.0s` chain loss across the whole Tosa -> Piratella -> Acque Minerali -> Rivazza sequence.

That means some late-race lap losses are not corner-local mistakes or simple tyre fade.
They are chain-propagation events.

### What Changed in My Understanding Today

1. My strongest-ever Ferrari Imola race pace now sits in a repeatable `1:44.89`-ish clean band, with a best of `1:44.430`.
2. Even against that best Ferrari race sample, the Mustang still comes out faster on clean repeatable race pace by about `0.25s`.
3. The Mustang's real weakness is not only chicane sensitivity; it is also severe pace loss once tyres are reused into a second stint.
4. A bad multiclass event at Tosa should not be treated as a one-corner loss; it can kill the entire middle-to-final sector sequence.
5. Some of the ugliest Imola race laps are better explained as sequence-kill traffic losses than as pure driver error or tyre collapse.

### Practical Rule Update

- For race comparisons, separate fresh-tyre peak pace from carried-tyre pace; some cars change category completely once stint 2 begins.
- At Imola, flag Tosa traffic traps separately from generic traffic because the downstream cost is disproportionately large.
- When Tosa is poisoned by multiclass compression, shift the target from pace to survival and sequence damage limitation.

### Next Analysis Step

1. Run a Ferrari second-stint carried-tyre sample at Imola for a direct tyre-carry comparison against the Mustang.
2. Rebuild the current Imola race map using two axes instead of one: fresh-tyre race pace and carried-tyre race pace.

## 2026-06-06

### Session Context

- Track: Imola (Autodromo Enzo e Dino Ferrari)
- Scope: correction of the Ferrari vs Mustang race comparison using the same grid structure
- Cars reviewed today: Ferrari 296 GT3, Ford Mustang GT3
- Goal: replace the old ELMS-vs-WEC mismatch with a direct same-setup full-stint comparison

### Setup Correction

The earlier June 5 Ferrari-vs-Mustang comparison was not fully clean because the race formats were different:

- Ferrari sample: full ELMS-style grid (`21-22` LMP2, `11` LMP3, `13` LMGT3)
- Mustang sample: full WEC-style grid (`18` Hypercars, `18` LMGT3)

That meant the earlier conclusion overstated the Ferrari deficit.

Today a Ferrari 296 GT3 run was completed on the same WEC-style race setup used for the Mustang reference.

### Ferrari vs Mustang: Same-Setup Full-Stint Read

Ferrari full WEC-style first stint (`2-27`):

- Best: `1:44.370`
- Median: `1:44.979`
- Avg: `1:45.255`

Mustang WEC-style first stint (`2-26`):

- Best: `1:44.138`
- Median: `1:44.921`
- Avg: `1:45.067`

Raw full-stint comparison:

- Median gap to Mustang: `0.058s`
- Average gap to Mustang: `0.188s`
- Best-lap gap to Mustang: `0.232s`

Single-worst-lap-cleaned check:

- Ferrari without lap `23`: median `1:44.973`
- Mustang without lap `22`: median `1:44.850`
- Gap: `0.123s`

Corrected conclusion:

- Mustang still comes out ahead.
- But the advantage is now small, not large.
- The honest same-setup full-stint gap is roughly `0.06s` to `0.12s` on median, depending on how strictly the worst single-lap junk is removed.

### What Changed in My Understanding Today

1. The old June 5 Ferrari-vs-Mustang comparison was too harsh because it mixed ELMS and WEC traffic environments.
2. On the same WEC-style race setup, Ferrari and Mustang are much closer than the earlier `0.25s` clean-window comparison suggested.
3. Mustang still holds the edge, but only slightly on full-stint repeatable race pace.
4. Ferrari and Mustang now belong even more clearly in the same real race-pace tier at Imola.

### Practical Rule Update

- Do not promote a cross-car race conclusion to "real" unless the grid structure and faster-class traffic model are matched.
- Keep two separate Ferrari-vs-Mustang reads in mind: clean-window potential and same-setup full-stint race pace.

### Addendum: Stronger Field, Fewer Late Backmarkers

Another important context correction emerged after the same-setup Ferrari rerun.

ELMS-style Ferrari run:

- AI strength: `95%`
- Qualifying gap to the field: about `2.5s`

WEC-style Ferrari run:

- AI strength: `98%`
- Qualifying gap to the field: about `1.3s`

Interpretation:

- In the ELMS run, being much faster than the LMGT3 field meant reaching backmarkers earlier and in greater volume.
- In the WEC run, the stronger field stayed with me longer, so fewer backmarker interactions had accumulated by the late-stint phase.
- That means the WEC Ferrari sample may have had faster individual traffic, but less total late-stint traffic poison.

Corrected practical read:

- stronger field can sometimes produce a cleaner stint if it delays the onset and volume of backmarker overlap,
- so a higher AI percentage does not automatically mean dirtier lap-time context.

### Next Analysis Step

1. Revisit the current Imola race map with the corrected same-setup Ferrari result.
2. Add a same-setup McLaren vs BMW vs Ferrari vs Mustang comparison if matching runs become available.

## 2026-06-07

### Session Context

- Track: Imola (Autodromo Enzo e Dino Ferrari)
- Scope: continuation of the June 6 Ferrari vs Mustang race comparison
- Cars reviewed today: Ferrari 296 GT3, Ford Mustang GT3
- Goal: compare both cars specifically on carried tyres in stint 2 with no tyre change

### Carried-Tyre Comparison: Ferrari vs Mustang

The June 6 read established that on the same WEC-style race setup, the Mustang still held a small edge over Ferrari in full first-stint pace.

Today extended that comparison into stint 2 with no tyre change.

#### Ferrari 296 GT3 stint 2

Raw stint 2:

- Best: `1:45.045`
- Median: `1:45.593`
- Avg: `1:46.427`

Removing the obvious spin/contact lap `42`:

- Median: `1:45.575`
- Avg: `1:45.741`

Clean-ish carried-tyre window:

- Best: `1:45.045`
- Median: `1:45.460`
- Avg: `1:45.545`

#### Ford Mustang GT3 stint 2

Raw stint 2:

- Best: `1:45.162`
- Median: `1:45.812`
- Avg: `1:46.481`

Removing the out-lap effect and the Variante Alta spin lap `52`:

- Median: `1:45.723`
- Avg: `1:46.075`

Clean-ish carried-tyre window:

- Best: `1:45.162`
- Median: `1:45.717`
- Avg: `1:46.043`

### Interpretation

Direct read:

- On used tyres, the Ferrari is the more survivable platform.
- Ferrari beats Mustang on best lap, median pace, and average pace in stint 2.
- The clean-ish median gap is about `0.26s` in Ferrari's favor.
- The clean-ish average gap is about `0.50s` in Ferrari's favor.

This creates an important phase split:

- fresh tyres / stint 1: Mustang has the higher race ceiling
- used tyres / stint 2: Ferrari becomes the safer and more sustainable race platform

Corrected model:

- Mustang wins on fresh-tyre pace access and outright race speed
- Ferrari wins once the tyres are carried and the margin for rear-transient mistakes gets smaller

### Why The Order Flips

The likely mechanism is not mysterious.

Ferrari on used tyres:

- still gives the familiar rotation model,
- remains readable in the brake-release phase,
- and lets the lap stay alive even when the peak edge has dulled.

Mustang on used tyres:

- loses more of its rear grip reserve,
- becomes more punishable over kerb-to-asphalt transitions,
- and charges a higher penalty for small chicane or transient mistakes.

That means the Mustang's weakness is not only absolute degradation, but degradation plus sensitivity.

### Electronics Context On Used Tyres

An important missing variable in the Ferrari used-tyre stints was the electronics change.

For stints `2` and `4`, the Ferrari maps were adjusted to:

- lateral TC: `5 -> 6`
- longitudinal TC: `3 -> 4`

Practical effect:

- more confidence to pick up throttle earlier,
- better rear trust in traction-sensitive exits,
- less hesitation in the exact corners where a tired rear would otherwise make the car feel brittle.

Most obvious examples:

- Villeneuve exit
- Piratella exit
- Rivazza exit

Corrected interpretation:

- Ferrari's used-tyre advantage is real,
- but it was not pure passive platform superiority alone,
- it was Ferrari plus the correct degraded-tyre electronics support.

That matters because it turns the result from a vague preference into an actionable rule:

- the Ferrari remains highly survivable on old tyres,
- and the right TC increase helps preserve that survivability by protecting throttle confidence.

### What Changed in My Understanding Today

1. Ferrari and Mustang should not be ranked on one single Imola race axis.
2. Mustang still leads on fresh-tyre race pace.
3. Ferrari clearly leads on carried-tyre survivability.
4. The phase of the stint changes which car is the better platform.
5. What looked like a simple Ferrari-vs-Mustang pace question is really a two-phase platform question.
6. Part of Ferrari's used-tyre success came from good in-stint electronics adaptation, not tyre behavior alone.

### Practical Rule Update

- For Imola race comparison, separate fresh-tyre pace from carried-tyre pace before declaring one car better overall.
- Treat Mustang's second-stint behavior as a specific weakness to monitor whenever tyres are reused.
- Treat Ferrari's used-tyre stability as a real strategic advantage, not just a consolation trait.
- On the Ferrari, consider small TC increases as a valid used-tyre survival tool rather than a defeatist compromise.

### Addendum: Attacking Car vs Enduring Car

An additional clarification emerged from comparing the subjective feel of both cars across the two stints.

Mustang on fresh tyres:

- can reach `1:44.1x` race laps much more naturally,
- gives a higher first-stint cashout,
- and accesses its peak race speed without needing Ferrari-level overreach.

Ferrari on fresh tyres:

- can still produce serious race pace,
- but the very fast laps feel more expensive and closer to quasi-quali effort even on race fuel.

Corrected shorthand:

- Mustang = attacking race car
- Ferrari = enduring race car

Meaning:

- Mustang is the better platform when the tyre is alive and the goal is to cash out first-stint pace.
- Ferrari is the better platform when the tyre is tired and the goal is to keep the stint alive without the platform turning brittle.

- Ferrari's enduring-car advantage is strongest when the electronics are also moved into the more protective used-tyre window.

### Continuation: Ferrari Stints 3 and 4

The race was then continued with:

- stint `3`: new tyres, but more sporadic traffic
- stint `4`: no tyre change, only refuel to about `66%` because the race was ending
- stints `3` and `4` were driven back-to-back, so fatigue became part of the read

#### Stint 3: Tyre Reset and Pace Reactivation

Raw stint `3` (`58-83`):

- Best: `1:44.377`
- Median: `1:45.171`
- Avg: `1:45.678`

Raw numbers are inflated by:

- out-lap effect at `58`
- major disruption/spin event at lap `65`
- additional sporadic traffic laps

Clean-ish stint-3 window:

- Best: `1:44.377`
- Median: `1:44.854`
- Avg: `1:45.092`

Late strong phase of stint `3`:

- laps `71-83`
- Median: `1:44.792`
- Avg: `1:44.854`

Important correction:

- lap `62` (`1:44.377`) already proved the pace was there early in the stint
- but the pace did not stay uninterrupted because laps `63-70` were broken by traffic and the lap `65` spin
- so lap `62` is better read as pace proof, while lap `71` is the real pace stabilization point

Lap `65` classification:

- attempted LMGT3 overlap around Rivazza 1 from the outside,
- LMGT3 defended inside,
- Hypercar pressure existed from behind,
- contact occurred and the Ferrari spun

Best label:

- high-risk overlap conflict under prototype pressure

Most important positive:

- after the spin, emotional recovery mode did not take over
- the stint was rejoined cleanly enough that pace later stabilized again

#### Stint 4: Used Tyres, Reduced Fuel, Still Stable

Raw stint `4` (`86-101`):

- Best: `1:44.938`
- Median: `1:45.393`
- Avg: `1:45.699`

Removing the worst obvious outlier:

- Median: `1:45.382`
- Avg: `1:45.517`

Clean-ish stint-4 window:

- Best: `1:44.938`
- Median: `1:45.336`
- Avg: `1:45.319`

Direct comparison versus stint `3` clean-ish pace:

- stint `3` median: `1:44.854`
- stint `4` median: `1:45.336`
- carried-tyre loss: about `+0.482s`

Interpretation:

- the Ferrari slowed, but in a very normal and survivable way
- this is a far smaller loss than the Mustang's carried-tyre second-stint drop
- reduced fuel and tyre age partially offset each other, while fatigue likely added back some cost

#### Training Value: Deliberate Tyre Constraint

This was the first time only `2` tyre sets were used for a `3h` race despite having about `4.5` sets available.

That means the session should be read not just as a race result, but as deliberate skill training in:

- carried-tyre platform management
- electronics adaptation
- strategic tyre-use math
- emotional containment after bad traffic events
- maintaining pace after a stint has already been compromised

Stint-4 strategic math:

- if the used-tyre pace loss is about `+0.3s/lap` over `16` laps, that is roughly `4.8s`
- if a tyre change costs about `12s`, staying out is still the correct strategic call

So the Ferrari was not just surviving stint `4`; it was making the reduced-tyre strategy mathematically correct.

### Next Analysis Step

1. Rebuild the current Imola race map using two separate rankings: fresh-tyre pace and carried-tyre pace.
2. Check whether McLaren behaves more like Ferrari or Mustang in a no-tyre-change second stint.

## 2026-06-08

### Session Context

- Track: Imola (Autodromo Enzo e Dino Ferrari)
- Scope: Mustang stint-2 reassessment after applying degraded-tyre setup corrections
- Car focus: Ford Mustang GT3
- Goal: determine why the second Mustang carried-tyre stint improved so much versus the earlier run

### New Mustang Result: Better Second-Stint Pace

The new Mustang run showed a large improvement in stint `2` pace retention.

Fresh-tyre stint `1` (clean-ish):

- Best: `1:44.348`
- Median: `1:44.630`
- Avg: `1:44.664`

Used-tyre stint `2` (clean-ish):

- Best: `1:44.632`
- Median: `1:45.335`
- Avg: `1:45.241`

Compared with the earlier Mustang carried-tyre reference:

- old clean-ish stint `2` median: `1:45.717`
- new clean-ish stint `2` median: `1:45.335`
- improvement: about `0.382s`

Direct read:

- the biggest gain was not on fresh tyres,
- the biggest gain was learning how to keep the Mustang alive once the tyres were already used.

### What Changed: BB and TC Corrections

Two important changes were made for the Mustang used-tyre phase:

- brake bias: `47 -> 46`
- lateral TC: `5 -> 7`

What the rearward BB did:

- restored entry rotation,
- reduced the aged-front reluctance,
- and helped prevent the car from becoming too front-safe as the stint aged.

What the higher lateral TC did:

- increased rear confidence on loaded exits,
- reduced hesitation in traction-sensitive sway/reload zones,
- and made earlier throttle pickup safer at:
  - Villeneuve exit
  - Piratella exit
  - Tamburello exit

### Why Higher TC Made The Car Faster

The important lesson is that higher TC did not make the car faster by magic.
It made the car faster by improving confidence.

In this case, lower TC may have been better on paper, but worse in practice because it caused:

- more hesitation,
- later throttle pickup,
- less trust in the rear on reload,
- and smaller exits.

So the real chain was:

- more support -> more trust -> earlier usable throttle -> faster exits -> better stint pace

Corrected interpretation:

- on aged Mustang tyres, the fastest map was not the least interventionist one,
- it was the map that gave enough rear support to stop the driver from second-guessing the car.

### Ferrari vs Mustang Used-Tyre Read: Updated

This newer Mustang stint `2` changes the old Ferrari advantage story.

Ferrari clean-ish carried-tyre median:

- `1:45.460`

New Mustang clean-ish carried-tyre median:

- `1:45.335`

Meaning:

- Ferrari still looks like the more naturally survivable used-tyre platform.
- But with the correct BB and TC corrections, the Mustang can now match that phase much more closely and may even edge it slightly on delivered pace.

So the refined split is:

- Ferrari = easier enduring platform
- Mustang = no longer clearly worse on used-tyre pace once managed correctly

### What Changed in My Understanding Today

1. The biggest recent Mustang development was not fresh-tyre pace, but second-stint management.
2. Rearward BB on worn tyres was a real entry-rotation fix, not just a feel preference.
3. Higher lateral TC can be faster when the limiting factor is confidence rather than raw intervention cost.
4. The Mustang's carried-tyre weakness is manageable if the platform is re-centered correctly.
5. Ferrari still feels more naturally survivable, but the delivered pace gap on used tyres is now much smaller than before.

### Practical Rule Update

- On aged tyres, do not assume lower TC is always faster; first ask whether hesitation is the real limiter.
- For front-engine cars on worn tyres, use BB and TC together: BB to restore entry rotation, TC to preserve exit trust.
- Separate "natural survivability" from "delivered pace after adaptation" when judging old-tyre platforms.

### Next Analysis Step

1. Test whether the same BB/TC logic also improves the Mustang late in stint `1`, not just in stint `2`.
2. Compare whether McLaren or BMW respond more like Ferrari or Mustang to this same worn-tyre support logic.

## 2026-06-10

### Session Context

- Track: Spa-Francorchamps
- Cars reviewed: Ford Mustang LMGT3, Ferrari 296 LMGT3
- Driver tag: `oldark.`
- Goal: re-anchor current Spa fit against the latest leaderboard state and the current LMU BOP

### Mustang Spa Read

Current Mustang leaderboard result:

- Ford Mustang LMGT3: `2:19.457`, `P23/592`
- Percentile: top `96.1%`
- Gap to top `5%`: about `0.150s`
- Gap to top `10%`: about `0.544s`

Sector read:

- `S1 37.946` is near top-`5%` pace
- `S2 62.473` is the main leak
- `S3 39.038` is excellent

Direct read:

- The Mustang is still a viable Spa platform.
- The loss is concentrated in the middle sector, not in the opening or finishing segments.
- This matches the earlier Spa note that the main work is in the loaded middle sequence after Kemmel, not at Blanchimont or the Bus Stop.

### Ferrari Spa Read

Current Ferrari leaderboard result:

- Ferrari 296 LMGT3: `2:19.635`, `P23/592`
- Percentile: top `96.1%`
- Gap to top `5%`: about `0.150s`
- Gap to top `10%`: about `0.544s`

Sector read:

- `S1 37.804` is strong
- `S2 62.444` is strong
- `S3 39.387` is the weak point in the final comparison

Direct read:

- Ferrari remains strong, but the Mustang currently has the edge.
- The gap is not a collapse; it is a small same-tier separation.

### Cross-Car Conclusion

Current Spa conclusion:

- Mustang is now the current Spa reference, not the old Ferrari hotlap.
- Ferrari is still competitive, but the old Spa Ferrari benchmark is historical only.
- The present gap is small enough to keep both cars in the same serious pace tier.

### BOP Context

Current Spa LMU BOP reinforces the shift:

- Mustang LMGT3: `1475 kg`, `711 MJ`, `0.0%` power delta, rear wing range `0.0-7.0`
- Ferrari 296 LMGT3: `1477 kg`, `672 MJ`, `0.0%` power delta, rear wing range `0.6-4.5`

Interpretation:

- The Mustang has a wider usable aero window and more energy allowance.
- Power curve staging is flat for both cars at Spa (`Stage 1` and `Stage 2` both at `200 kph`, `0.0%` delta on Mustang).
- This makes the Mustang the more adaptable current Spa package in my hands.

### Practice Signal

98% AI practice note:

- Augusto Farfus in the BMW M4 GT3 was only `0.3s` behind in a practice session.

Read:

- That is a strong pro-adjacent signal.
- It does not equal a direct leaderboard comparison, but it confirms the Mustang pace is real.

### BMW Spa Read

Current BMW leaderboard result:

- BMW M4 LMGT3: `2:19.745`, `P40/989`
- Percentile: top `~95%`

Sector read:

- `S1 37.685` is excellent
- `S2 62.930` is the main loss
- `S3 39.130` is not the main problem

Direct read:

- The BMW is not failing outright; it is losing the lap in the middle.
- That matches the feeling of the car wanting to go straight and resisting rotation.
- The lap is there, but it needs a more committed entry and more brake-led rotation than the Mustang.

### Baldwin Match

James Baldwin’s BMW vs McLaren description matches my experience:

- BMW = stable entry, understeery mid-corner, strong straight-line/high-speed/bump car
- BMW needs harder entry and more trail-brake rotation
- McLaren-style slow-in/rotate/coast is not the BMW’s natural solution

Interpretation for my driving:

- The BMW is not asking for patience in the middle of the corner.
- It is asking for a harder attack on entry and a shorter coasting phase.
- If I drive it like a mid-engine car, it will feel like it just wants to go straight.

### What Changed in My Understanding Today

1. The Mustang is now my current Spa reference car.
2. Ferrari used to be the Spa benchmark, but that comparison is historical now.
3. The Mustang’s Spa weakness is mainly middle-sector completion, not entry or finish.
4. Current BOP supports the Mustang as a strong, flexible Spa platform.
5. The pro-pace reference against Farfus suggests the current Mustang pace is legitimately serious, not a board artifact.
6. BMW’s Spa weakness is rotation authority, not raw stability, and Baldwin’s explanation matches my own feel.

## 2026-06-11

### Session Context

- Track: Spa-Francorchamps
- Cars reviewed: Aston Martin Vantage GT3, Mercedes-AMG GT3
- Driver tag: `oldark.`
- Goal: place the Aston and Mercedes against the current Mustang, Ferrari, and BMW Spa references

### Aston Spa Read

Current Aston leaderboard result:

- Aston Martin Vantage GT3: `2:19.850`, `P17/343`
- Percentile: top `~95%`

Sector read:

- `S1 37.887` is strong
- `S2 62.969` is the main leak
- `S3 38.994` is fine

Direct read:

- The Aston is genuinely competitive at Spa, but it is not the cleanest match for my current reference pace.
- It sits between the Mustang and BMW on my feel: better than the BMW for certainty, less complete than the Mustang in sector 2.
- It confirms the Spa picture is not just a single-car story.

### Mercedes Spa Read

Current Mercedes leaderboard result:

- Mercedes-AMG GT3: `2:19.901`, `P28/656`
- Percentile: top `~95.7%`
- Gap to top `5%`: about `0.152s`

Sector read:

- `S1 37.913` is right on the top-`5%` line
- `S2 62.637` is the main leak, but only slightly outside top `5%`
- `S3 39.351` is also basically top-`5%` pace

Direct read:

- The Mercedes is a balanced Spa car in my hands rather than a spiky one.
- It does not have a single disastrous sector; the whole lap sits near the top-`5%` cut.
- Compared with the Aston, it is slightly slower on raw time but stronger on board density context.

### What Changed in My Understanding Today

1. The Aston is viable at Spa and not just a niche alternative.
2. The Mercedes is also viable at Spa and reads as a balanced top-`5%` car rather than a volatile one.
3. Aston and Mercedes both support the idea that the current Spa picture is broader than a simple front-engine versus mid-engine split.
4. The Mustang still holds as my current reference because it remains the cleanest complete match, especially through the middle of the lap.

## 2026-06-12

### Session Context

- Track: Spa-Francorchamps
- Car: Ferrari 296 GT3
- Session type: race simulation against `98%` AI, full ELMS grid
- Grid mix: `21` LMP2, `10` LMP3, `13` LMGT3
- Driver tag: `oldark.`
- Goal: re-check Ferrari Spa race pace in a full multiclass context

### Main Result

The surprising part today was not one single lap. It was how often sub-`2:21` pace kept appearing in a real race run.

Current race sample:

- Stint `1` best: `2:20.289`
- Stint `1` median: `2:20.855`
- Stint `2` best: `2:20.768`
- Stint `2` median: `2:21.431`

Important race context:

- No tyre change between stints
- No meaningful rest between stints apart from pitlane time and the stop-go penalty

Direct read:

- Ferrari Spa race pace is stronger than I had mentally updated for.
- Sub-`2:21` is no longer a rare peak lap in race trim; it is part of the usable pace window.
- The pace survived traffic, used tyres, and continuous physical carryover.

### Comparison with the Previous Spa Ferrari Race

April reference using the same race setup:

- Tyres were changed between stint `1` and stint `2`
- Stint `1` cleaned median: `2:21.221`
- Stint `2` cleaned median: `2:21.197`

Today:

- Stint `1` median improved to `2:20.855`
- Stint `2` median was `2:21.431` despite no tyre change and no real reset

Interpretation:

- Current stint `1` is clearly stronger than the April reference.
- Current stint `2` is only slightly slower than the old tyre-changed reference, which is a very good sign.
- That makes today more meaningful than the older race, not less.

### What Changed in My Understanding Today

1. Ferrari is not just my Spa hotlap car; it is now a real Spa race platform for me.
2. My Ferrari Spa pace floor is stronger than I had assumed, because low-`2:21s` and sub-`2:21s` now appear repeatedly in race trim.
3. The current pace is durable: it survived used tyres, multiclass traffic, and no proper recovery break between stints.
4. The biggest surprise is not the best lap itself, but how normal that pace band has started to feel in the middle of a race run.

## 2026-06-16

### Session Context

- Track: Spa-Francorchamps
- Cars reviewed: Ferrari 296 GT3, Corvette Z06 GT3R, Mercedes-AMG GT3
- Session type: race simulations against `98%` AI, full ELMS grid
- Track temp: `21°C` (hotter than the June 12-13 `15°C` baseline)
- Driver tag: `oldark.`
- Goal: validate Ferrari race pace consistency, debut the Corvette in race trim, and confirm the AMG race-cost hypothesis

### Ferrari 296 GT3: Pace Still Climbing

Today's Ferrari result against the same race setup:

- Best: `2:20.288`
- Clean median (excluding LMP2 windows at laps `8-9`, `16-19`): `2:20.817`

Comparison against the June 12 reference:

- June 12 best: `2:20.289` — today's best is identical within `1 ms`
- June 12 median: `2:20.855` — today's median is `0.038s` faster

This happened on a `21°C` track vs the June 12 `15°C` baseline, with additional restraint because family was sleeping.

Direct read:

- The Ferrari Spa race ceiling is now locked in. Best laps across June 12 and today are essentially the same number.
- The median continues to improve even on a hotter, grippier track.
- Recovery after LMP2 windows was clean: laps `10` and `20` immediately after traffic were `2:20.536` and `2:20.594`.
- Three data points now confirm the climb: April `2:21.221` → June 12 `2:20.855` → today `2:20.817`. Gain of `0.404s` from April.

### Corvette Z06 GT3R: Fastest Spa Race Median Today

The Corvette is mid-engine, not front-engine as I had briefly misremembered. First serious Corvette Spa race stint:

- Best: `2:20.297`
- Clean median (excluding same LMP2 windows): `2:20.697`

Direct comparison against Ferrari today:

- Corvette is `0.120s` faster on clean median
- Best laps within `0.009s` of each other
- Recovery after traffic was strong: `2:20.536` and `2:20.594`

Direct read:

- The Corvette just produced my fastest Spa race median of the day.
- The mid-engine dance works in full race trim, not just in qualifying.
- The Corvette now belongs as a real second Spa race platform alongside the Ferrari.

### Mercedes-AMG GT3: The Race-Cost Hypothesis Confirmed

The AMG was tested in the same race format. The result validated every concern from the last two months.

Race stats:

- Best: `2:20.856`
- Clean median: `2:21.173`
- Only `4/13` race laps were under `2:21.000`

Comparison against Ferrari and Corvette today:

- AMG best is `0.568s` slower than Ferrari best
- AMG median is `0.356s` slower than Ferrari median, `0.476s` slower than Corvette median

But the stopwatch gap is not the real story.

Race-margin cost:

- In Ferrari and Corvette, the gap to P2 AI was `12-14s` after `10` laps.
- In the AMG, the gap was only `6-7s` by lap `9`.
- That is a `0.5-0.7s` handicap per lap in net race advantage compounding over a stint.

The chain that makes the AMG dangerous rather than just slower:

1. Natural race pace is `0.26s/lap` slower than Ferrari
2. AI starts pulling ahead — the gap shrinks from `12s` to `6s`
3. I feel pressure to match pace
4. Overpush narrows an already-narrow control window
5. LMP2 traffic arrives at exactly the wrong moment
6. The window collapses — crash or spin

I stopped the AMG race at lap `9` because overpushing during the LMP2 catch-up window sent me off.

### Spa S2: The Missing Sector

During the AMG race, I noticed:

- I never got a single purple sector in `S2`
- The `98%` AI caught me by `0.1-0.2s` from No Name to Stavelot exit
- This is the heart of the Les Combes → Pouhon → Fagnes → Stavelot chain

The specific problem is clearer now:

- Imola front-engine weakness is brake-phase (rotation married to deceleration)
- Spa front-engine weakness is coast-phase (rotation demanded long after brake release)
- Pouhon, Fagnes, and Stavelot are long-radius or flick corners where coasting kills the car
- James Baldwin was right: no time for coasting in front-engine cars

### Core Insight: Dance vs Brute Force

The feel distinction between car families is now precise:

- Ferrari and Corvette: I lead, the car follows, there is rhythm — a conversation
- AMG at Spa `S2`: I command, the car must obey, there is no rhythm — a monologue

The dance works because the car speaks back. Brute force works but is tiring, less repeatable, and feels unnatural to a rotation-led driver whose entire model depends on reading the car's response.

### Hotter Track Confirmation

Track `21°C` vs baseline `15°C` did not meaningfully hurt pace. Ferrari still improved its median. The Corvette produced its fastest race stint. This suggests my Spa pace is now robust across a usable temperature range, not fragile to small condition changes.

### What Changed in My Understanding Today

1. Ferrari Spa race pace is still climbing, not settling — the median improved again on a hotter track.
2. The Corvette Z06 GT3R is not just a qualifying car; it is a real Spa race platform that was actually faster than the Ferrari today.
3. The AMG race-cost hypothesis is no longer a theory: the car forces overpush, the overpush collides with traffic, and the stint ends in a crash.
4. The AMG's real problem is not just raw pace — it is that the car demands `100%` effort for a result that Ferrari gives at `95%`.
5. Baldwin's "no coasting" rule is correct and now confirmed by my own data: front-engine cars at Spa `S2` lose time the moment you wait for a rotation cue that never arrives.
6. The car-family split is now best described as dance (Ferrari, Corvette) vs brute force (AMG at Spa), with Mustang/BMW/Aston sitting in between.
7. Spa race pace is robust to track temperature variation within the `15-21°C` range.

## 2026-06-21

### Session Context

**Context:** Mercedes-AMG Motorsport Virtual Championship (AMG VC) Season 02 — LMU Path, Hot Lap qualification phase. Entered at wife's request (Mercedes-AMG fan). Target: Division 2 raffle slot.

**Track:** Circuit de Spa-Francorchamps
**Car:** Mercedes-AMG GT3 (LMGT3), fixed setup
**Condition:** High grip, ~31°C track temp
**Best lap:** 2:20.293 (improved from 2:20.436 previous session)
**Lap count:** 21+ laps across sessions

---

### Setup Adaptation — Fixed Setup Constraints

Default AMG VC fixed setup sat completely outside my natural operating window. Key compensations applied through in-race adjustable parameters only:

| Parameter | Default | My Setting | Reason |
|---|---|---|---|
| Brake Bias | 50.5% | 46.5% | Unlock entry rotation — default produces chronic understeer |
| Brake Pressure | ~95% | 92% | Manage front saturation with 45kg brake cap |
| TC | 5 | 1 | Car completing corners properly now, TC intervention unnecessary |
| TC Cut | 5 | 1 | Same as above |
| TC Slip Angle | 5 | 2 | Reduce intrusion during rotation phase |
| Wheel Range | 540° | 380° | Reduce physical lock requirement at Bruxelles, keep hands in control zone |

**Diff preload** is fixed at 90Nm vs my usual 40Nm open setup preference. Compensated via steering lock reduction — snappier ratio means less hand travel needed to generate yaw that the locked diff refuses to provide naturally. Net effect: front axle does the rotation work that diff assistance would normally contribute.

**Bruxelles specifically:** At 540° range, full lock entry required wrists near physical limit on Playseat Challenge against R9 FFB resistance. At 380°, same corner now sits at ~120-130° of hand travel. Combined with trail brake for yaw generation — car is pointed before max lock is needed.

**Exit behaviour:** Smooth throttle application from mid-engine background transfers cleanly. AMG's planted rear, which costs rotation on entry, becomes cooperative under power. The same rear stability that frustrates entry phase rewards clean progressive throttle on exit.

---

### Technique Translation Notes

The AMG inverts my natural technique loop almost entirely:

- **Mid-engine default:** Load brake → weight transfers forward → rear lightens → car rotates → release → rear settles → throttle
- **AMG reality:** Car doesn't rotate through brake release. Needs steering commitment first, then power to drive rear out. Front-heavy, stable platform by design.

Every corner entry requires fighting muscle memory built across Ferrari, McLaren, Corvette sessions. Not a skill gap — a translation problem. Translation problems are harder because they live below conscious thought level.

**Convergence cost:** High. Took many laps to find 0.143s improvement in final session. Consistent with AMG's pattern from Imola testing — narrow operating window means final tenths require disproportionate lap investment.

**Current assessment:** 2:20.293 feels like extractable ceiling on this platform given constraints (45kg brake cap, fixed setup, 90Nm diff, Playseat Challenge geometry).

---

### Field Context — AMG VC LMU Leaderboard (Snapshot: June 19, 2026)

**My position:** P25/49 valid entries — 2:20.436 at time of snapshot (since improved to 2:20.293, result pending update)

**Field structure:**
- Top 5 within 0.481s of each other (2:18.828–2:19.309) — elite cluster
- P6–P24: 18 drivers in 1.072s window — densest zone, I sit at bottom edge
- P36 cut (Division 1 boundary): 2:21.496 — 1.060s buffer below me
- Division 2 raffle: comfortably within range

**Confirmed esports professionals in field:**
- **P1 Mikhail Statsenko** — Virtus.pro, Logitech G Challenge 2021 champion, SRO Esports Sprint EU 2023 runner-up, 40 SimGrid starts
- **P3 Tobias Sievert** — 15 y/o esports driver for Referox/XClusive Esports, LFM Pro competitor, ONID ELMS participant
- **P12 Christ Tiansen** — Indonesian competitive sim racer, Toyota Gazoo Racing GT Cup Indonesia, active SimGrid/Studio-397

This is not a fan competition. Manufacturer-branded events attract professional and semi-professional esports drivers specifically. The 1.6s gap to P1 is a professional ceiling, not a training gap.

**Strategic target:** Division 2 raffle. No attempt to chase Division 1 — fixed setup removes key compensatory levers, and sprint format (Race Days 2, 3, 6 are 2x20min) partially neutralises tyre management advantage.

---

### Sim Cafe Session — June 20, 2026

**Venue:** Local sim racing cafe
**Hardware:** Simagic Alpha Mini 9Nm, Simagic GT Neo wheel, SimJack pedals (70-80kg brake), triple monitor, solid rig
**Duration:** ~1 hour
**Best lap:** 2:20.8

**Key finding:** Slower than home rig despite objectively superior hardware. Sub 2:21 achieved in under 1 hour on completely unfamiliar setup.

**Interpretation:** Deep hardware-specific adaptation to home rig (R9 FFB character, 45kg brake calibration, Playseat geometry) means transplanting to better hardware produces a regression in the short term. Muscle memory is calibrated to constraints, not to ideal hardware. Estimate 3-4 additional hours to optimise to 2:19.8–2:20.1 range on cafe hardware — consistent with standard convergence curve extended 1.5x for unfamiliar platform.

**Implication:** Transferable technique foundation is solid — the rapid sub-2:21 adaptation confirms this. Home rig ceiling is real and hardware-specific, not technique-limited.

---

### Hardware Notes

Current rig: Moza R9, SRP Lite load cell (45kg cap), Playseat Challenge, Moza KS wheel (primary), ultrawide + secondary monitor. Air-conditioned room.

Wheel collection: Moza KS, PXN GT One, DIY Arduino wheel (self-coded firmware, self-soldered, outsourced frame + 3D printed enclosures), second DIY (locally sourced), Moza ES with formula rim.

## 2026-06-29

**Context:** Mercedes-AMG Motorsport Virtual Championship (AMG VC) Season 02 — LMU Path, Hot Lap qualification phase. Continued practice despite "ceiling" assessment from June 21 session — driven by curiosity and educational purpose, not competitive necessity.

**Track:** Circuit de Spa-Francorchamps
**Car:** Mercedes-AMG GT3 (LMGT3), fixed setup
**Condition:** 0% rain, 28°C ambient, 33°C track temp
**Best lap:** 2:20.097 (improved from 2:20.294 — previous best)
**Total lap count to date:** 85+ laps across all AMG sessions

---

### Leaderboard Status (June 29, 2026)

**Position:** ~P57/127 valid entries (leaderboard delayed 1 day, actual position pending update)
**Division 1 cut:** P36 — Mikołaj Komasa at 2:19.594
**Buffer to Division 1:** +0.503s ✅ — safe, no hotlap anxiety required
**Strategic status:** Stop hotlapping. Stay in raffle pool. Confirm Discord by August 1st at 04:59 AM WIB.

**Field growth:** 127 valid entries (up from 95 nine days ago). Raffle pool now 91 drivers for 72 slots — approximately 78% draw probability per split. First time oversubscribed.

**Indonesian standings:**

| 🇮🇩 Rank | Global | Driver | Time |
|---|---|---|---|
| 1 | P6 | Christ Tiansen | 2:18.832 |
| 2 | ~P57 | Karol Danutama | 2:20.097 |
| 3 | P65 | Fathur Rahman | 2:20.533 |
| 4 | P100 | Joshua Ivan Mulyono | 2:22.238 |
| 5 | P104 | Ilham Al-Farisi | 2:22.623 |

---

### Key Discovery — No Name Corner: Gear Selection

**The finding:** Staying in 3rd gear through No Name (and not downshifting to 2nd at Pouhon) unlocked 0.150s+ in SQ5 alone. Simple gear selection change produced disproportionate time gain.

**Why it worked — the cascade mechanism:**

Downshifting to 2nd at No Name triggered a six-step cascade:

1. **RPM overshoot** — 6676 RPM vs reference 5657 RPM (+1019 RPM)
2. **Engine braking excess** — higher RPM = more engine braking resistance on N/A engine
3. **Diff amplification** — 90Nm locked diff transmits engine braking spike rigidly to both rear wheels with zero absorption
4. **Brake compensation** — foot reacts to unexpected deceleration with excess pressure (49.15% vs reference 3.06%)
5. **Entry speed loss** — combined deceleration scrubs 8 km/h (136 km/h vs reference 144 km/h)
6. **Line compromise** — 15% excess steering angle, late apex, exit 6m behind reference

**Staying in 3rd reversed the entire cascade simultaneously:**
- RPM matched reference (5292 vs 5657 — close, not perfect)
- Engine braking normalized
- Diff undisturbed
- Brake peak dropped to 26.75%
- Entry speed maintained at 136 km/h
- Steering angle reduced 15%
- Exit moved 4m earlier vs previous lap

**Telemetry confirmation (Coach Dave Delta+):**

| Metric | Previous (2:20.294) | Today (2:20.097) | Reference |
|---|---|---|---|
| SQ5 delta | +0.225s | +0.075s | 0.000s |
| Gear at No Name | 2nd | 3rd | 3rd |
| RPM | 6676 | 5292 | 5657 |
| Brake peak | 49.15% | 26.75% | 3.06% |
| Entry speed | 135.2 km/h | 136.0 km/h | 144.0 km/h |
| Steering vs ref | +13% | +15% | baseline |
| Exit position | 6m after ref | 2m before ref | baseline |

---

### Root Cause Analysis — Why This Was Masked on Ferrari

The lazy late downshift habit existed on Ferrari, McLaren, Corvette for months without consequence. Three simultaneous masking mechanisms:

**Mask 1 — Low diff preload (40Nm vs AMG 90Nm):**
Ferrari's diff partially slips internally to absorb the RPM overshoot torque spike. The spike is attenuated before reaching the contact patches. The cascade breaks at Step 2 — diff never amplifies it.

**Mask 2 — Twin turbo lag:**
Ferrari's twin turbo creates a brief window between clutch re-engagement and torque arrival. The drivetrain settles before boost builds. The AMG's N/A engine delivers torque instantly on clutch re-engagement — no settling window, no buffer.

**Mask 3 — Mid-engine weight distribution:**
Ferrari's balanced mass centroid means the rear doesn't lighten as dramatically under braking. More rear grip budget available. The diff spike is a smaller percentage of available traction and gets absorbed without overwhelming the contact patch.

**All three masks simultaneously active on Ferrari = cascade never gets past Step 2.**

**Implication for Ferrari pace:** The same lazy downshift habit is almost certainly present on Ferrari laps but invisible. Fixing downshift timing on Ferrari should unlock 0.2-0.3s that has been hidden by the car's forgiveness. CDA P24 (2:19.635) may not be the actual ceiling.

---

### Diff Preload vs Downshift — The Physics

High diff preload amplifies every drivetrain input and transmits it directly to contact patches with no internal absorption. The relationship:

- **Low preload (40Nm):** Diff slips partially under torque spike → energy absorbed internally → tyre sees attenuated impulse → chassis smooth
- **High preload (90Nm):** Diff rigid under torque spike → full energy transmitted → both tyres see full simultaneous impulse → chassis reacts harshly

Under lateral load (mid-corner), the tyre friction circle is already near capacity for cornering. Any additional longitudinal demand from a diff torque spike exceeds the available budget — either understeer or oversteer results depending on exact timing and load state.

**The downshift timing principle:**
Complete downshift while mostly straight (low lateral load) = full grip budget available to absorb longitudinal impulse = neutral chassis response.
Complete downshift mid-corner (high lateral load) = minimal grip budget remaining = impulse exceeds budget = chassis disturbance.

---

### Technique Habit Discovered — Late Downshift Pattern

Natural downshift timing derived from Ferrari/Corvette background: very late, close to apex, sometimes simultaneous with initial throttle application on exit.

This habit was **functionally correct on turbocharged mid-engine cars** because:
- Turbo lag buffered the exit torque spike
- Low diff preload absorbed the entry/mid-corner spike
- Mid-engine grip budget accommodated the residual disturbance

The same habit is **actively harmful on the AMG** because all three buffers are absent.

**Correction applied:** Stay in 3rd at No Name and Pouhon rather than downshifting to 2nd. Eliminates the problematic input entirely rather than attempting to retime it. Appropriate for current hardware and technique stage — Playseat Challenge geometry makes early heel-toe downshifts difficult to execute consistently.

**Future work:** When returning to Ferrari, test early downshift timing (complete before lateral load builds) vs current late habit. Expected gain: 0.2-0.3s based on cascade analysis.

---

### Remaining Gap Analysis — No Name

Current gap to reference at No Name:
- Entry speed: 136 km/h vs reference 144 km/h — **8 km/h deficit**
- Braking point: 7m earlier than reference
- Gear: matched ✅
- Brake pressure: normalized ✅

**Next target:** Brake 3-4m later, carry 2-3 km/h more entry speed. Estimated gain: ~0.05-0.075s in SQ5.

---

### Broader Insight — Forgiving Cars Hide Technique Ceilings

A forgiving car doesn't just help slow drivers go faster. It prevents fast drivers from discovering their technique ceiling.

Ferrari's combination of low diff preload, turbo lag, and mid-engine balance was masking a fundamental downshift timing flaw for months. The flaw was invisible because the car absorbed every consequence before it produced feedback.

The AMG removed all three masks simultaneously. Every imprecise downshift was immediately punished. The car was brutally honest where Ferrari was kindly dishonest.

**The AMG VC was not just a competition. It was the most effective diagnostic tool I've used in 14 years of sim racing — applied involuntarily, at midnight, against Virtus.pro professionals, because my wife likes the logo.**

---

### Current Ceiling Assessment (Revised)

Previous assessment (June 21): 2:20.294 felt like extractable ceiling.
Revised assessment (June 29): **2:20.097 — new ceiling, but wall has moved.**

The previous "ceiling" was the ceiling of the technique state at that time. The gear discovery moved the wall. Further walls likely exist — braking point at No Name, other corners with similar downshift cascade patterns not yet identified.

**Estimated remaining time in lap:** 0.1-0.2s from braking point optimization at No Name and potential similar discoveries at other corners. Sub-2:20 not ruled out but requires dedicated analysis.

---

### Hardware Note

45-lap hotlap session count now highest in visible AMG VC field (85+ total). Consistent with systematic methodology over raw pace extraction. The lap count reflects convergence investment not visible in the final time.

## 2026-07-02

**Context:** Post-diagnostic validation phase. Following the June 29 gear cascade discovery (No Name, Pouhon), shifted from pure hotlap diagnostics to race-pace validation under sustained conditions. Goal: test whether fixes hold under fatigue, tyre wear, and repeated attempts rather than single flying laps.

**AI Strength Note:** Sessions below run at **100% AI**, not the usual 95% AI standard used in prior journal entries (April Spa baselines, cross-car comparisons). Not directly comparable to earlier benchmarks without adjustment. Decision pending on whether 100% becomes new standard or reverts to 95% for continuity.

---

### AMG VC Leaderboard — Field Update (July 1 sync, N=144)

**Position:** P53/144 — 2:20.022 (unchanged, holding steady)
**Division 1 cut:** P36 — Marceau Williams 2:19.537
**Buffer:** +0.485s ✅ — stable, no action required

**Distribution re-test:** Ran bimodality check on updated field (N=144 vs N=139 nine days prior). Sarle's bimodality coefficient dropped to **0.431** (below 0.555 threshold) — the July 1 "M-shape" flattened into a right-skewed unimodal distribution as the remaining ~70 unposted registrants filled in the middle rather than adding a second discrete mode. **Correction to earlier hypothesis:** the apparent bimodality on the earlier snapshot was likely a timing/sampling artifact (competitive tier front-loads laps and finishes early; casual tier trickles in later), not evidence of two genuinely separate populations colliding.

**What survived the correction:** the *median* itself. AMG VC median (2:20.7, ~P72) crossed against two independent global populations:
- CDA AMG leaderboard: top 100 of ~700 = 2:20.8 → AMG VC median sits inside CDA's top 14%
- TrackTitan AMG leaderboard: top 100 of 1374 (Jakub Sehy Sehnal) = 2:20.281 → AMG VC median sits just outside TrackTitan's top 100, roughly top 8-10%

Conclusion: the *shape* argument for "two discrete tiers" is weaker than first thought, but the *median* argument for "this field is not a representative casual population" stands independently and is arguably the cleaner piece of evidence — it doesn't depend on curve-fitting or bin selection.

**Direct research corroboration (unaffected by distribution correction):** confirmed competitive/professional backgrounds for drivers clustered specifically in the P37–P65 zone — ACC Italia M2 champion (Nevi), esports team CEO/Twitch streamer (Sicuro), Odyssey Racing League podium (Emre), active LMU championship leader (Ponchiardi), LUMH esports driver (Franchi), signed Ventauri LMU professional age 17 (Rafter), LFM Simverse Pro Series top-10 finishers (Schuardt P9, Naskidashvili P6), LMU Le Mans 6H race winner (Butzin), full-time Mercedes-AMG content creator/podcast co-host (Clarkson). National flag census: Italy (19 declared) and Germany (18 declared) are the largest contingents, both with median field position around P52–P58 — dense concentration in the competitive-to-semi-professional zone, not spread evenly across the field.

**Indonesian contingent (10 total, 8 declared + 2 undeclared by research):**

| Rank 🇮🇩 | Global | Driver | Time |
|---|---|---|---|
| 1 | P6 | Christ Tiansen | 2:18.832 |
| 2 | P53 | Karol Danutama | 2:20.022 |
| 3 | P68 | Fathur Rahman | 2:20.533 |
| 4 | P89 | Fauzan Triyogi (undeclared flag) | 2:21.282 |
| 5 | P107 | Leonaldo Ferdinand (undeclared flag) | 2:21.977 |
| 6 | P115 | Joshua Ivan Mulyono | 2:22.238 |
| 7 | P117 | Dandy Maulana | 2:22.296 |
| 8 | P122 | Ilham Al-Farisi | 2:22.623 |
| 9 | P139 | Johanes Isaac | 2:25.297 |
| 10 | P144 | Teofilus Titan | 2:35.354 |

Fathur Rahman confirmed as regional champion of PALU (Pejuang Lingkar Utara — Indonesian rFactor2 community nickname for the Nordschleife). All three fastest Indonesians (Tiansen, self, Fathur) have genuine competitive backgrounds — no purely casual entry near the top of the national contingent, mirroring the global pattern at national scale.

**Field taxonomy (revised, evidence-based rather than distribution-shape-based):**
- Platinum — professional esports, full-time or team-contracted (P1–~P20)
- Gold     — semi-pro/league-competitive, 20-40hrs/week, team or league affiliation (~P20–P65)
- *** self-assessed position: bottom of Gold, on Silver/Bronze resources ***
- Silver   — serious community racers, no team infrastructure (~P65–P100)
- Bronze/Am — casual, fan entries, low lap count (P100+)

Cross-referenced against personal CDA position (P28/~700, top ~4%) and TrackTitan position (P60/1374, top ~4.4%) — two independent large-sample platforms agree closely on percentile, corroborating placement in Gold tier rather than platform-specific noise.

---

### Personal Context Note

First-ever online, human-competitive leaderboard entered in sim racing. 18 months of prior practice (documented in this journal) was entirely against AI opponents with zero external validation. AMG VC hotlap qualification was the first real-world check against a live population — result landed inside Gold tier on first attempt.

---

### AMG vs Ferrari — Fixed Setup Practice Session Comparison

**AMG quali-sim sessions (3 x 15min, attack laps only, cooldown laps excluded as intentional tyre-preservation, not mistakes):**

n=8 clean attack laps across 3 sessions
Mean: 2:20.499 | Best: 2:20.242 | Range: 0.885s | StdDev: 0.287

**Ferrari quali-sim sessions (2 sessions, fixed setup, not attacking laps hard — casual effort):**

n=3 clean attack laps
Mean: 2:20.109 | Best: 2:20.032 | Range: 0.131s | StdDev: 0.069

**Key finding — consistency gap dwarfs pace gap:**

Mean pace delta: 0.389s (consistent with prior fixed-setup penalty estimates of 0.2-0.4s)
**Variance delta: ~4x higher standard deviation on AMG (0.287 vs 0.069)**

Ferrari's three attempts across two separate sessions landed within 0.131s of each other — near machine-repeatable. AMG's eight attempts spread across 0.885s despite no single lap being a clear mistake. This is the sharper and more actionable finding than the mean gap: the AMG's narrow operating window (documented extensively in prior entries — diff preload, downshift timing, brake trace sensitivity) doesn't just cost average pace, it makes outcome unpredictable on a lap-by-lap basis even under nominally consistent inputs.

**Implication for Race Day 1 (45min, mandatory pit stop, ~18-20 laps):** consistency, not peak pace, is the leverage point remaining. A driver with AMG's variance profile racing 20 laps is more exposed to a bad-variance lap costing real positions than a driver with Ferrari-like repeatability running the same average pace.

**Fuel-adjusted cross-car sanity check:** Ferrari race-sim lap (2:20.199, lap 2, ~79L fuel, used tyres, not attacking) essentially matched AMG's best deliberate qualifying attack lap of the day (2:20.242, ~20L fuel, dedicated push). Ferrari carrying ~4x fuel mass, on a lap not being pushed, still matched AMG's best effort. Confirms — via yet another independent method — that the AMG's technique/car mismatch cost is real and substantial, not an artifact of any single measurement approach.

---

### Race Simulation — 45min AMG, Mandatory Pit, No Tyre Change

First full race-length simulation. Pit stop taken per regulation (Article 9.1) but tyres NOT changed — same physical set used for entire 45 minutes, allowing isolation of pure tyre-age effect independent of compound change.

**Stint 1 (Laps 1–11, pre-pit):**
Clean racing laps (2–10): mean 2:21.283, best 2:20.763 (lap 2), worst 2:22.300 (lap 10)
Degradation: +1.537s over laps 2→10 (~0.192s/lap average), but lap-to-lap deltas noisy/non-monotonic (+0.322, +0.168, −0.114, +0.613, −0.334, −0.356, +1.236) — no clean tyre-cliff signature like the Ferrari FL thermal cliff documented in April testing. Looks more like the same lap-to-lap variance problem found in quali-sim sessions, layered on top of mild degradation, than a discrete cliff event.
Track temp: 32.0°C → 33.3°C (+1.3°C)

**Stint 2 (Laps 14–19, post-pit, same tyres):**
Mean 2:21.960, best 2:21.705 (lap 15), worst 2:22.524 (lap 19)
Track temp: 33.9°C → 35.0°C (+1.1°C)

**Cross-stint finding:** Stint 2 mean is **0.677s slower** than Stint 1 mean, despite lighter fuel load in stint 2 (which should partially offset wear/temp effects in the opposite direction). This is a step-change between stints, not a continuation of the gradual within-stint degradation curve — suggests the pit stop itself (tyre cooldown while stationary) may cost more than the raw lap-count on the tyre would predict.

**Open question flagged for further testing:** does a fresh tyre change at the mandatory stop recover most of the 0.677s step-change? If yes, the mandatory pit stop is a genuine strategic lever (worth taking tyres even though not required) rather than a pure compliance formality. Next race-sim session should test tyre-change-at-stop directly against this no-change baseline for a clean comparison.

---

### Ferrari Race Simulation — Abandoned After 2 Laps

Lap 1: 2:23.278 (out-lap, 78.9L fuel)
Lap 2: 2:20.199 (used tyres, 36.0°C track temp)

Session voluntarily ended after 2 laps. Reason: stepping from AMG sessions directly into Ferrari made the contrast in required conscious effort immediately and viscerally obvious — Ferrari felt close to effortless by comparison, to the point that continuing felt pointless relative to returning to AMG work. Not a data point about lap time (though notably: 2:20.199 not-attacking beat 2:20.242 AMG-attacking, on ~4x the fuel load) — a data point about cognitive load accumulation. Confirms the earlier hypothesis directly: AMG requires active conscious override of instinct at every corner due to narrow operating window; Ferrari does not. The fear that AMG grinding would damage or overwrite Ferrari instinct was tested directly and disproven — instinct was fully intact and immediately available, no reacquisition period needed. What AMG work has evidently changed is the *sense* of what effortful driving costs, making the effortless car feel almost jarring by contrast.

---

### Summary — Where Things Stand

- AMG VC qualifying locked at 2:20.022, buffer to Division 1 healthy (+0.485s) and stable across two leaderboard syncs
- Distribution analysis corrected: bimodality was likely a snapshot-timing artifact, not a true two-population split — but median-based evidence for a competitive-skewed field stands independently and is stronger
- Field research + national flag census provide direct, non-statistical corroboration of "Gold-tier-adjacent" field composition, unaffected by the distribution correction
- Personal calibration cross-checked against two independent large-sample leaderboards (CDA, TrackTitan) — both agree on ~top 4% global percentile
- AMG technique fixes (gear discipline, brake trace) hold up within 0.22s of hotlap PB under race-sim attack conditions — good sign for race day
- **New priority target: reduce AMG lap-to-lap variance (currently ~4x Ferrari's), not chase further peak pace** — this is the more consequential lever for a 20-lap race than qualifying pace
- Pit-stop-without-tyre-change costs ~0.677s per lap in the following stint — worth testing tyre change directly before Race Day 1
- AI strength inconsistency (100% today vs 95% standard) flagged — needs resolution before further race-sim data is treated as comparable to historical baselines

## 2026-07-10

### Session Context

- Track: Spa-Francorchamps
- Car: Mercedes-AMG GT3 (LMGT3), fixed setup (AMG VC)
- Scope: final leaderboard snapshot (qualification closed)
- Goal: place final result in field context and validate the competitive-field hypothesis

### Leaderboard Snapshot (July 10, 2026 — Final)

- Position: **P69/180** — down from P53 as field grew from 144 to 180 entries
- Best lap: `2:20.022` (unchanged since June 29 gear discovery)
- Lap count: **113** — highest in visible top-100
- Division 1 cut: `2:19.305` (Marceau Williams) — hardened `0.232s` from July 2 snapshot
- Buffer to D1: `+0.717s` — comfortable, no action required

### Distribution Analysis

Bracket count (0.5s granularity, N=180):

| Bracket | Count | Pct |
|---|---|---|
| 2:18.0–2:18.4 | 1 | 0.6% |
| 2:18.5–2:18.9 | 21 | 11.7% |
| 2:19.0–2:19.4 | 20 | 11.1% |
| 2:19.5–2:19.9 | 23 | 12.8% |
| **2:20.0–2:20.4** | **27** | **15.0%** ← self |
| 2:20.5–2:20.9 | 17 | 9.4% |
| 2:21.0–2:21.4 | 19 | 10.6% |
| 2:21.5–2:21.9 | 12 | 6.7% |
| 2:22.0–2:22.4 | 14 | 7.8% |
| 2:22.5–2:22.9 | 5 | 2.8% |
| 2:23.0–2:23.4 | 7 | 3.9% |
| 2:23.5–2:23.9 | 4 | 2.2% |
| 2:24.0–2:24.4 | 2 | 1.1% |
| 2:25.0–2:25.4 | 4 | 2.2% |
| 2:25.5+ | 3 | 1.7% |

**Shape characteristic:** right-skewed unimodal — not Gaussian, not bimodal. Classic Pareto-like / lognormal competitive leaderboard signature.

- **Left side:** compressed hard against an asymptotic performance wall. Only 1 driver in `2:18.0–2:18.4`, then 21 immediately appear in `2:18.5–2:18.9`. This is the "elite compression zone" — where each hundredth costs exponentially more.
- **Mode/plateau:** `2:18.5` through `2:20.4` holds **92 of 180 drivers (51%)**. The serious competitive band.
- **Right side:** long sparse tail to `2:35`. No hard floor — casual entries drop in wherever.
- **Self-position:** P69, dead center of the modal bracket (`2:20.0–2:20.4`), sitting at the back edge of the competitive plateau.

### Competitive-Field Hypothesis: Confirmed

The July 2 bimodality correction was about whether two separate populations were colliding. The July 10 data provides the cleanest possible answer: **one distribution, three zones.** The bimodality was a snapshot-timing artifact. The corrected conclusion — "the field is skewed competitive, not two-tier" — is actually strengthened by the full dataset.

Critical evidence:

1. The **mode** at `2:20.0–2:20.4` maps to ~top 4% on both CDA and TrackTitan. A genuinely casual population would have its mode much further right (~2:22–2:24).
2. The **left tail** is compressed against a hard performance ceiling, not a gradual taper. Signature of a field where the slowest entrants are still trying — no gentle slope of casual effort.
3. The **right tail** is sparse and stretched, not a second mode. Casual drivers exist but they are the minority distributed across a wide range, not a distinct population cluster.

**Conclusion:** this is a self-selected, manufacturer-branded competitive field. The median driver here would be top ~10–14% on a public leaderboard. The July 2 finding stands unchallenged — the AMG VC is not a representative sample of the general LMU player base.

### Indonesian Standings (Final, 14 of 180)

| 🇮🇩 Rank | Global | Driver | Time |
|---|---|---|---|
| 1 | P9 | Christ Tiansen | 2:18.832 |
| 2 | P57 | Ahmad Jusmin | 2:19.763 |
| **3** | **P69** | **Karol Danutama** | **2:20.022** |
| 4 | P74 | Rafi Rahadyan | 2:20.109 |
| 5 | P81 | Andhito Rayhan | 2:20.264 |
| 6 | P95 | Fathur Rahman | 2:20.533 |
| 7 | P102 | Muhammad Raziq Aqilla | 2:20.766 |
| 8 | P121 | Fauzan Triyogi | 2:21.282 |
| 9 | P140 | Leonaldo Ferdinand | 2:21.977 |
| 10 | P149 | Joshua Ivan Mulyono | 2:22.238 |
| 11 | P150 | Ilham Al-Farisi | 2:22.266 |
| 12 | P152 | Dandy Maulana | 2:22.296 |
| 13 | P176 | Johanes Isaac | 2:25.297 |
| 14 | P180 | Teofilus Titan | 2:35.354 |

**Read:** Christ Tiansen is a full tier ahead — 1.19s gap, in the `2:18.8` band where only 10 drivers live. Gap to P2 (Jusmin) is `0.259s` — contestable. P3 position on the national board is solid but not secure without improvement. Three new Indonesian entries since July 2 (Jusmin, Rahadyan, Rayhan) shifted the national ranking.

### What Changed in My Understanding Today

1. The final AMG VC field (N=180) is unequivocally a competitive-skewed population, not a casual one. The distribution shape itself is the proof.
2. The July 2 bimodality correction is vindicated: one right-skewed unimodal distribution with three functional zones, not two colliding populations.
3. The modal bracket (2:20.0–2:20.4) holds 27 drivers — the densest competitive cluster in the entire field. Sitting inside it is itself a signal.
4. Rank slippage from P53 to P69 is expected field-growth dilution, not a decline. Time held constant while the field grew 25%.
5. Indonesian #3 still stands, but the gap from P2 to P4 is narrow enough that this could shift with marginal improvement from any of the three nearest drivers.
6. The 113-lap investment remains the highest in the visible top-100 — consistent with the Imola-era finding: lap-count-to-PB is a cost metric, not a pace metric.

## 2026-07-10 (Addendum — Sebring)

### Session Context

- Track: Sebring International Raceway
- Cars: Ferrari 296 GT3, BMW M4 GT3
- Driver tag: `oldark.`
- Scope: CDA leaderboard hotlap session — boredom-driven track switch after AMG VC lock-in
- Goal: re-anchor Sebring pace after months away, and compare plateau position across two different population types

### Ferrari 296 GT3

Current leaderboard result:

- Ferrari 296 GT3: `2:02.149`, **P13/233**
- Percentile: top `5.6%`
- Sectors: `45.775 / 32.687 / 43.687`
- Top 5% cutoff: `2:02.137` — missed by `0.012s`
- Gap to P1 (lwhitehead_, `2:00.208`): `+1.941s`
- Gap to P10: `+0.109s`

**Correction — not a decay, a leaderboard reset:** the earlier `2:02.050` (P7/346) was clocked on March 9, pre-LMU v1.3 patch. Coach Dave reset the Sebring leaderboard post-patch. Research into the v1.3 notes confirms multiple changes affecting Sebring GT3 lap times:

- Ferrari 296 at Sebring: **-15kg** weight penalty (v1.3.0.0) — favorable, should make the car faster
- Global: real road grip profiles changed (v1.3.0.0), default grip increased (v1.3.0.0), curb grip reviewed (v1.3.0.0), track RRBIN surface profiles updated (v1.3.0.0)
- Global: ride height/BoP weight interaction fixed (v1.3.2.0), tyre thermal temperatures revised (v1.3.3), GT3 BOP rebalanced across all tracks (v1.3.3), fuel consumption revised (v1.3.3)
- CDA setups updated (v1.3.2.0, v1.3.3)

Sector comparison against the archived pre-reset lap:

| Sector | Pre-reset (Mar 9) | Post-reset (Today) | Delta |
|---|---|---|---|
| S1 | 45.773 | 45.775 | +0.002 |
| S2 | 32.619 | 32.687 | **+0.068** |
| S3 | 43.658 | 43.687 | +0.029 |
| **Total** | **2:02.050** | **2:02.149** | **+0.099** |

S1 is identical, S3 is close. The `0.068s` loss is in S2 — but the Ferrari is 15kg *lighter* now, so the direction makes the physics explanation harder, not easier. The net effect of multiple simultaneous changes (weight, grip, surface, tyres, BOP) is ambiguous. The only solid conclusion: cross-version comparison is invalid, and the two laps sit on different populations.

### BMW M4 GT3

Current leaderboard result:

- BMW M4 GT3: `2:02.256`, **P13/404**
- Percentile: top `3.2%`
- Sectors: `45.911 / 32.528 / 43.817`
- Top 5% cutoff: `2:02.505` — comfortably inside with `0.249s` buffer
- Gap to P1 (seven070382, `2:00.683`): `+1.573s`
- Gap to P10: `+0.158s`

First Sebring entry on BMW. Immediate P13 on a deeper board (N=404) is the stronger percentile result of the two despite the slightly slower raw lap.

### Sector Comparison

| Sector | Ferrari | BMW | Delta | Winner |
|---|---|---|---|---|
| S1 | 45.775 | 45.911 | +0.136 | Ferrari |
| S2 | 32.687 | 32.528 | **-0.159** | BMW |
| S3 | 43.687 | 43.817 | +0.130 | Ferrari |

BMW loses everywhere except S2 — and wins S2 decisively. S2 at Sebring is the technical middle sector (Hairpin through to Tower Turn), the exact zone where front-engine "heavy rotation" problems should theoretically be worst. Instead, BMW is `0.159s` faster through it. This continues the pattern from Imola (May/June): the front-engine problem is track-specific and car-specific, not universal. The BMW's strengths at Sebring — bump absorption, flow continuity — override the rotation penalty in the middle sector.

### Distribution Analysis

Both leaderboards share the same right-skewed lognormal shape seen in the AMG VC, but with different compression profiles:

**Ferrari 296 GT3 (N=233):**

| Bracket | Count | Pct | |
|---|---|---|---|
| 121.5–122.0 | 5 | 2.1% | |
| **122.0–122.5** | **15** | **6.4%** | ← self |
| 122.5–123.0 | 16 | 6.9% | |
| 123.0–123.5 | 18 | 7.7% | |
| 123.5–124.0 | 23 | 9.9% | ← mode |
| 124.0–124.5 | 26 | 11.2% | ← mode |

**BMW M4 GT3 (N=404):**

| Bracket | Count | Pct | |
|---|---|---|---|
| 121.5–122.0 | 3 | 0.7% | |
| **122.0–122.5** | **13** | **3.2%** | ← self |
| 122.5–123.0 | 34 | 8.4% | |
| 123.0–123.5 | 37 | 9.2% | |
| 123.5–124.0 | 49 | 12.1% | ← mode |
| 124.0–124.5 | 43 | 10.6% | |

### TrackTitan Cross-Platform Verification

The same laps were also submitted to TrackTitan (username: `crazy.youngster`):

**BMW M4 GT3 — TrackTitan:**
- P46/1,139 — top 4.0% raw
- P1: `2:00.683` (identical to CDA's P1 — same driver)

**Ferrari 296 GT3 — TrackTitan:**
- P11/~527 — top 2.1% raw
- P1: `2:01.314` (1.106s slower than CDA P1)

TrackTitan's pools are 2-3x larger than CDA's, but the extra entries are concentrated in the tail. TT's Ferrari P1 is 1.1s slower than CDA's — TT's Ferrari front pack hasn't fully re-populated after the v1.3 leaderboard reset.

### Methodology: The 105% Rule

**This entry marks the adoption of a new analysis standard.** From this point forward, all leaderboard percentiles are reported against the 105%-qualified pool, not the raw entry count.

Rationale: real motorsport uses the 105% rule (Formula 1, WEC, ELMS) to distinguish *competitors* from *entries*. A driver who posts a lap slower than 105% of P1 would not qualify for a race. At the current skill level, the tail is noise — comparing against someone who installed the game, did one lap, and quit is not meaningful. The meaningful pool is the people who can actually drive the car within a qualifying window.

The 105% cut is computed as `P1_lap_time × 1.05`. Every entry above this threshold is a "competitor"; everything below is excluded from the denominator. This produces a cleaner, more honest percentile grounded in the same standard used in real competition.

### Cross-Platform 105%-Qualified Comparison

| | Ferrari 296 | BMW M4 GT3 |
|---|---|---|
| **CDA** | | |
| P1 | 2:00.208 | 2:00.683 |
| 105% cut | 2:06.218 | 2:06.717 |
| Qualified pool | ~163 of 233 | ~309 of 404 |
| My position | P13 | P13 |
| **≤105% percentile** | **top 8.0%** | **top 4.2%** |
| **TrackTitan** | | |
| P1 | 2:01.314 | 2:00.683 |
| 105% cut | 2:07.380 | 2:06.717 |
| Qualified pool | 427 of ~527 | 915 of 1,139 |
| My position | P11 | P46 |
| **≤105% percentile** | **top 2.6%** | **top 5.0%** |

### Why the 105% Filter Matters

Before filtering, Ferrari percentiles ranged from 2.1% to 5.6% — a 3.5pp spread. BMW ranged from 3.2% to 4.0% — a 0.8pp spread. After filtering:

- **BMW:** CDA (4.2%) and TrackTitan (5.0%) converge to within 0.8pp. Two independent platforms, two different populations, two different filtering rules — same answer. This is the strongest validation possible: the pace is real, not a board artifact.

- **Ferrari:** CDA (8.0%) and TrackTitan (2.6%) diverge to a 5.4pp spread. The CDA Ferrari board is unusually sharp (P1 at `2:00.208` — aliens), raising the 105% bar and cutting harder. The TT Ferrari board is softer post-reset (P1 at `2:01.314` — 1.1s slower), lowering the bar and inflating the percentile. The truth is probably between them, but the gap is too wide to trust without a third reference.

### BMW as the Calibration Anchor

BMW is the cleanest cross-platform benchmark because:
1. Both platforms agree on P1 (`2:00.683` on CD**A** ← identical driver, `seven070382`)
2. The 105% cuts are nearly identical (`2:06.717`), so filtering doesn't distort the denominator
3. TrackTitan adds ~700 casuals below the cut, while CDA keeps the pool tight — but filtering removes them from both
4. Two independent platforms converge to the same ~top 5% answer

Ferrari is currently the weakest benchmark post-reset because the 1.1s P1 gap between platforms cascades through every percentile calculation.

### Meta vs Popular: The New Distinction

Same driver, same track, identical P13 rank — but different percentile stories:

- **Meta car** (Ferrari): attracts the performance-chaser minority. Small pool (N=233), sharp front pack (P1 `2:00.208`), tighter tail (no entry worse than ~`2:10`). Everyone who submits is trying.
- **Popular car** (BMW): attracts the masses. Large pool (N=404 CDA, 1,139 TrackTitan), softer top end (P1 `2:00.683` — same driver would be only P2+ on Ferrari), long casual tail (`4:01` on TrackTitan).

Concrete proof: `2:02.500` on BMW is solidly inside top 5%. The same time on Ferrari lands around P18–20 — roughly top 8%. The meta car tax is `0.368s` at the top 5% cutoff.

### Plateau Position Across Populations

The session crystallized an earlier insight through direct comparison:

- On **CDA** (Ferrari and BMW): I sit at the **front edge** of the competitive plateau. Only 12-13 qualified competitors ahead.
- On **AMG VC**: I sit at the **back edge** of the same plateau. 68 qualified competitors ahead in a self-selected championship field.

This is not a contradiction. CDA inflates the raw percentile because the denominator includes casuals — which is why the 105% cut is now mandatory. AMG VC deflates it because the denominator is 180 people who all submitted qualifying laps. Same driver, same hands — different reference groups produce different numbers from the same underlying pace. The 105% filter closes the gap by removing non-competitors from both.

### Practical Rule Update (Major)

From this entry forward, all leaderboard evaluation uses the 105%-qualified pool as the primary metric:

1. **Compute P1 * 1.05** — establish the qualifying threshold.
2. **Count qualified entries** — this is the real denominator.
3. **Compute percentile against qualified pool only.**
4. **Cross-validate against a second platform when available.**

The raw "top X%" number against all entries is no longer considered a meaningful performance signal. It measures mixture ratio of competitors and tourists, not driving quality. The 105%-qualified percentile measures actual competitive standing.

### What Changed in My Understanding Today

1. Meta and popular are distinct forces, not synonyms. A car can be one, both, or neither in a given leaderboard.
2. The Ferrari Sebring board is meta-sharp: smaller pool, harder front pack, less forgiving at the margins.
3. The BMW Sebring board is popular-broad: larger pool, softer top end, easier percentile conversion.
4. Sebring S2 continues to challenge the blanket "front-engine = rotation problem" hypothesis. BMW won S2 by 0.159s through the most technical section of the lap.
5. My CDA plateau position (front edge) vs AMG VC plateau position (back edge) is explained entirely by population selection, not by skill variance between the two sessions.
6. The "same time, different percentile" pattern (Ferrari faster but lower percentile, BMW slower but higher percentile) is the meta-tax effect.
7. The Barcelona-era insight about Ferrari's "high adoption + tight density" profile generalizes beyond Barcelona and beyond Imola. It's a structural property of the car across tracks.
8. The apparent Ferrari Sebring "drop" (2:02.050 → 2:02.149) coincides with a leaderboard reset after LMU v1.3. Multiple physics-relevant changes confirmed. S1 identical, S3 close — all loss in S2 but the -15kg weight change makes the direction ambiguous. Cross-version comparison invalid.
9. **The 105%-qualified percentile is now the standard metric.** Raw percentile against all entries mixes competitors with tourists and is not a meaningful performance signal at the current skill level. BMW proves the approach works: CDA and TrackTitan converge to the same answer (~top 4-5%) after filtering, confirming the pace is real, not noise.

## 2026-07-12

### Session Context

- Track: Sebring International Raceway
- Cars: Ferrari 296 GT3, Mercedes-AMG GT3
- Session type: concentrated ~1hr practice block on each car
- Driver tag: `oldark.`
- Goal: push Ferrari beyond the Jul 10 benchmark, then test the archnemesis (AMG) on the same track immediately after

### Ferrari 296 GT3 — Updated Result

One hour of concentrated practice produced a breakthrough:

- Ferrari 296 GT3: `2:01.927`, **P7/219** — up from P13
- Sectors: `45.780 / 32.625 / 43.522`
- Gain vs Jul 10: **-0.222s** (from `2:02.149`)
- 105% cut: `2:06.218`, qualified pool ~153 of 219
- **≤105% percentile: top 4.6%** (was 8.0% on Jul 10)

Sector delta vs Jul 10:

| Sector | Jul 10 | Jul 12 | Delta |
|---|---|---|---|
| S1 | 45.775 | 45.780 | +0.005 |
| S2 | 32.687 | 32.625 | **-0.062** |
| S3 | 43.687 | 43.522 | **-0.165** |
| **Total** | **2:02.149** | **2:01.927** | **-0.222** |

The `0.165s` S3 gain is 74% of the total lap improvement. This lap is now faster than the archived pre-v1.3 March lap (`2:02.050`), and the S3 delta flipped from `+0.029` slower to `-0.136` faster. S3 went from a relative weakness to a strength in two days.

**Why S3 improved:** Gendebien and Sunset Bend are long, loaded, constant-radius sweepers. The Ferrari's rotation model — brake once, rear lightens and rotates at entry, then steer and squeeze — maps perfectly onto these corners. On Jul 10, the S3 was simply under-driven. One session of committing to the entry rotation unlocked `0.165s` because the car does the work once you trust it.

### Mercedes-AMG GT3 — The Archnemesis Test

Immediately after the Ferrari session, jumped into the AMG on the same track:

- Mercedes-AMG GT3: `2:02.038`, **P8/237**
- Sectors: `45.729 / 32.571 / 43.738`
- 105% cut: `2:06.393`, qualified pool ~161 of 237
- **≤105% percentile: top 5.0%**

First-ever Sebring entry on AMG and it lands P8 — only `0.111s` behind the Ferrari PB set minutes earlier. At Imola in May, the AMG was a `0.309s` deficit to Ferrari and ranked P31. At Sebring, same driver, same day, it's in the same competitive bracket.

### Three-Car Sebring Comparison (CDA, Jul 12)

| Car | Time | S1 | S2 | S3 | Rank | ≤105% |
|---|---|---|---|---|---|---|
| Ferrari 296 | 2:01.927 | 45.780 | 32.625 | 43.522 | P7/219 | 4.6% |
| AMG GT3 | 2:02.038 | **45.729** | 32.571 | 43.738 | P8/237 | 5.0% |
| BMW M4 (Jul 10) | 2:02.256 | 45.911 | **32.528** | 43.817 | P13/404 | 4.2% |

Each car wins a different sector: Ferrari S3, AMG S1, BMW S2. Total spread: **0.329s** across three cars. No car is clearly faster — they all arrive at the same lap through different mechanisms.

The updated Ferrari CDA (4.6%) now sits between the BMW CDA (4.2%) and BMW TrackTitan (5.0%). The cross-platform Ferrari gap collapsed from 5.4pp on Jul 10 to a projected ~2.0pp (assuming similar TT movement). The post-reset divergence is resolving.

### Why the AMG Works at Sebring

Three track-specific mechanisms explain why Sebring neutralizes the AMG's weaknesses:

**1. Bumps force early braking, which removes the entry rotation decision point.**

The AMG's core weakness is rotation through brake release — it won't give the rear-wiggle confirmation cue that the native driving model depends on. At Imola and Spa, smooth surfaces allow deep trail-braking into corners, waiting for a rotation signal that never arrives. At Sebring, the bumps won't let you trail-brake that deep anyway. You brake earlier, settle the car, turn in. By the time the missing rotation cue would normally be the problem, the track has already forced you past that phase. The track removes the decision point the AMG punishes.

**2. The peaky front axle never gets compound-loaded.**

At Imola, Piratella stacks braking + turn-in timing + crest/unload + front saturation all at once — exactly the recipe for the AMG's narrow front-axle peak to fall off a cliff. Sebring's corners don't compound those demands. They are bumpy and technical, but the load transitions are flatter and the crests aren't dramatic. The front axle stays in its window because the window never gets pushed from multiple directions simultaneously.

**3. Exit traction rewards what the AMG does best.**

The same planted rear that refuses to rotate on entry becomes cooperative under power. Sebring has long acceleration zones out of T1, Hairpin, and Tower Turn where the AMG's rear stability allows earlier, harder throttle application. At Spa and Imola, the exits are either too short or too tightly linked to the preceding rotation phase to cash out this advantage. Sebring separates entry from exit cleanly enough that the AMG's natural strength actually pays.

### The Rotation Model Tax in S3

The S3 deficit between Ferrari and the front-engine cars is now explained by a specific mechanism:

- **Ferrari** at Gendebien and Sunset Bend: brake once, turn in, rear lightens and rotates, settle, steer and squeeze. The corner *is* the rotation phase. One invoice, paid at entry.

- **AMG/BMW** at the same corners: the car won't rotate naturally. Driver must brush the brake mid-corner to artificially induce the yaw the Ferrari gives for free at entry. This is the prediction-triggered intervention — same pattern as the AMG Spa No Name fix — not a feedback-triggered release. It works, but it costs time and adds variance: `+0.216s` (AMG), `+0.295s` (BMW) through S3 alone.

The Ferrari S3 gain (`-0.165s`) between Jul 10 and Jul 12 wasn't "driving faster" — it was driving the corners the way the car wants to be driven, without fighting it. The AMG/BMW S3 deficit isn't about lack of pace. It's about paying for every degree of rotation that Ferrari invoices only once at entry.

### The Front-Engine Problem: Track-Specific, Not Universal

The Imola-era conclusion was that "heavy front-engine cars are expensive to extract." Sebring refines this:

- At Imola, S2 is the front-engine killer — Piratella and Acque Minerali stack crest/stunload/brake-phase demands that the rotation model needs but the car won't give.
- At Sebring, S2 is where BMW *wins* — bumps, Tower Turn, technical sweepers reward bump absorption and platform stability, not rotation authority.
- "S2 weakness" was never about sector numbering. It was about whether the sector contains rotation-married, crest-stacked, brake-release-dependent corners. Sebring S2 doesn't.

The refined rule: the front-engine problem is a *corner type* problem, not a *sector label* or *car label* problem. The AMG is hostile when the corner asks for brake-release rotation on a smooth crest. It's cooperative when the corner asks for bump management and exit traction. Same car, same driver — the track decides which personality the car shows.

### What Changed in My Understanding Today

1. Ferrari Sebring S3 is now a strength (43.522), not a weakness. One session of commitment unlocked 0.165s because the rotation model fits Gendebien/Sunset perfectly.
2. The AMG is not a universal problem platform. At Sebring it was P8, 0.111s behind Ferrari — same competitive bracket, not a grind. The track alters the car's personality.
3. Three independent mechanisms explain AMG compatibility at Sebring: bump-forced early braking removes the decision point, flatter load transitions keep the front axle in its window, and long exit zones monetize the AMG's rear stability.
4. The rotation model tax in S3 is now precisely identified: Ferrari pays once at entry for rotation; AMG/BMW pay per corner through mid-corner brake-brushing. The tax is `+0.2-0.3s` through S3 alone.
5. Each car wins a different sector at Sebring — Ferrari S3, AMG S1, BMW S2. No platform is dominant; they all arrive at the same lap by different routes.
6. The front-engine problem is a corner-type problem, not a sector-label or car-label problem. The AMG fails at Piratella-type corners (brake-release rotation on smooth crests) and succeeds at Sebring-type corners (bump management, separated entry/exit phases).
7. The Ferrari cross-platform percentile gap collapsed from 5.4pp to ~2pp in two days. The post-reset divergence is a settling artifact, not a structural discrepancy.
8. BMW S2 dominance at Sebring is not a fluke — the bumps and flow of T3–T7 are the exact terrain where a planted, bump-eating front-engine platform is the fastest tool, not the slowest one.

## 2026-07-13

### Session Context

- Track: Sebring International Raceway
- Cars: BMW M4 GT3 (hotlap), Mercedes-AMG GT3 (race)
- Session type: BMW re-test to close the three-car comparison, then 45-minute offline race on AMG against 98% AI with full ELMS grid (21 LMP2, 13 LMGT3)
- Driver tag: `oldark.`
- Goal: close BMW pace gap to Ferrari/AMG, then validate AMG race performance

### BMW M4 GT3 — Re-Test

Curiosity-driven re-run produced a breakthrough:

- BMW M4 GT3: `2:02.037`, **P6/317** — up from P13/404
- Sectors: `45.784 / 32.559 / 43.694`
- Gain vs Jul 10: **-0.219s** — nearly identical to Ferrari's `-0.222s` on Jul 12
- Board shrunk from 404 to 317 (entries dropped between days)
- 105% cut: `2:06.717`, qualified pool ~261 of 317
- **≤105% percentile: top 2.3%**

Sector delta vs Jul 10:

| Sector | Jul 10 | Jul 13 | Delta |
|---|---|---|---|
| S1 | 45.911 | 45.784 | **-0.127** |
| S2 | 32.528 | 32.559 | +0.031 |
| S3 | 43.817 | 43.694 | **-0.123** |

S1 and S3 did all the work (combined `-0.250s`). S2 actually got slightly worse — but it was already BMW's weapon. The car gave back `0.031s` in its strongest sector and still won the overall war because the other two sectors finally showed up.

### Final Three-Car Sebring Comparison (CDA, Jul 12-13)

| Car | Time | S1 | S2 | S3 | Rank | ≤105% |
|---|---|---|---|---|---|---|
| Ferrari 296 | 2:01.927 | 45.780 | 32.625 | **43.522** | P7/219 | 4.6% |
| **BMW M4** | **2:02.037** | 45.784 | **32.559** | 43.694 | **P6/317** | **2.3%** |
| AMG GT3 | 2:02.038 | **45.729** | 32.571 | 43.738 | P8/237 | 5.0% |

Three cars, three sessions, within **0.111s**. BMW leapfrogged both to the highest rank (P6) and the strongest 105% percentile (2.3%). Each car wins a different sector: Ferrari S3, AMG S1, BMW S2 — they all arrive at the same lap by different mechanisms.

BMW S2 (`32.559`) is still fastest even after regressing — `0.012s` better than AMG's S2. The BMW's S2 baseline is so far ahead of the other cars that a worse version of itself still clears the field.

### AMG GT3 Race Stint

Immediately after the BMW hotlap, jumped into a 45-minute AMG race on the same track. 98% AI, full ELMS grid (21 LMP2, 13 LMGT3), lift-and-coast throughout.

**AMG race stint 1 (fair clean set — 16 laps, excluding only LMP2 blue-flag laps and the Tower overshoot):**

| | Time |
|---|---|
| Best | 2:02.902 |
| Median | 2:03.276 |
| Worst* | 2:04.575 |
| StDev | 0.609s |
| Range | 1.673s |

*excluding traffic, off-track, and incident laps

*Correction from initial analysis:* the earlier `0.262s` stdev and `0.964s` range excluded lap 8 (`2:04.575`) without evidence of traffic contamination. The fair numbers are consistent with historical Ferrari (0.435–0.511s) and Aston (0.657s), not a different category. The AMG's consistency is competitive, not god-tier.

Comparison against historical Sebring race stint 1 (all pre-v1.3, Feb/Mar 2026):

| Car | Best | Median | Worst* | StDev | Range | Δ Med vs AMG |
|---|---|---|---|---|---|---|
| Lexus RCF | 2:03.140 | 2:03.787 | 2:05.080 | 0.493s | 1.940s | +511ms |
| Aston Vantage | 2:02.580 | 2:03.480 | 2:05.576 | 0.657s | 2.996s | +204ms |
| Ferrari 296 | 2:03.286 | 2:03.791 | 2:05.143 | 0.435s | 1.857s | +515ms |
| **AMG GT3** | **2:02.902** | **2:03.276** | **2:04.575** | **0.609s** | **1.673s** | — |

The AMG wins on best and median — the fastest and most repeatable race pace ever recorded at Sebring. The Aston holds the best raw lap (historically the sharpest single-lap race car at Sebring), but the AMG's combination of peak pace and manageable consistency makes it the strongest all-around race platform.

**Strategic note:** AI burned through virtual energy on the final lap and was forced to pit. The pre-pit gap was only `-23s`; post-pit it became `-1:07s`. Lift-and-coast paid out exactly as designed — staying close enough to inherit the gap when the AI blinked.

**Brake fade note:** By lap 21, the AMG's front-heavy platform showed thermal strain — T7 Hairpin became harder to hit, leading to overshoots on laps 22-23 during LMP2 battles. Something to monitor for longer races or hotter ambient conditions.

### The Gendebien Problem — One Corner, That's It

After three months of "AMG is the expensive platform," the entire problem narrows to a single corner: Gendebien 1 entry. The rest of the Sebring lap the car just eats.

- **Imola:** Piratella's crest-stacked compound loading made the AMG feel like a grind every lap.
- **Spa:** Les Combes through Pouhon coast-phase rotation loss forced prediction-triggered release all through S2.
- **Sebring:** Gendebien 1 is the only corner that asks for brake-release rotation on a smooth surface — and it's followed immediately by Gendebien 2 and Le Mans corner, traction zones where the AMG shines. The cost is front-loaded on one corner and the payout arrives immediately after. That's a trade worth making every lap.

### The AMG Duality: Bronze-Friendly Weapon

The AMG is bronze-friendly not because it's slow — a `2:03.276` median just beat every previous Sebring race stint. It's bronze-friendly because it removes an entire failure mode: you cannot lose the rear on exit. Period.

- **Entry:** The car demands a complete translation of the native rotation model. Gendebien 1 is the toll booth.
- **Mid-corner to exit:** Once past apex, it's the safest car on the grid. Stomp the throttle, the rear stays planted. No snap, no hesitation, no correction workload.
- **Net effect:** For a driver whose entire technique is built on brake-release yaw confirmation, the AMG asks for a complete adaptation at entry — but once you're past that phase, it's a sledgehammer you can't break. The trade is entry precision for exit trust, and at Sebring the track geometry makes that trade profitable.

### What Changed in My Understanding Today

1. BMW S2 at Sebring is not just fast — it's so far ahead that even a regressed version still beats Ferrari and AMG through the same sector. The M4's bump absorption advantage is a competitive weapon, not a consolation trait.
2. BMW caught up to Ferrari and AMG in raw pace (`-0.219s` gain) and surpassed both in rank (P6) and 105% percentile (2.3%). The three-car spread is now `0.111s` — essentially identical pace by three different sector routes.
3. The AMG delivered the fastest race stint median ever recorded at Sebring (`2:03.276`), beating all historical sessions across all cars. Consistency is competitive (`0.609s` stdev) but not in a separate category — in the same ballpark as Ferrari and Aston.
4. The AMG's "expensive platform" reputation is entirely track-dependent. At Imola it's a grind. At Spa it's expensive. At Sebring it's the strongest all-around race platform.
5. The AMG's entire Sebring difficulty collapses to one corner: Gendebien 1 entry. Every other corner on the lap either neutralizes its weakness (bumps force early braking) or rewards its strength (exit traction).
6. The AMG is fundamentally a bronze-friendly car: it removes rear instability as a failure mode, making it the safest car on the grid once past apex. The trade is entry rotation, which at Sebring is a single-corner problem followed by immediate payout.
7. The Gendebien 1 → Gendebien 2 → Le Mans sequence perfectly captures the AMG duality: pay the rotation tax once at entry, collect exit traction reward immediately after. At Sebring, that's a winning trade.

## 2026-07-14

### Session Context

- Track: Sebring International Raceway
- Car: Ferrari 296 GT3
- Session type: 45-minute offline race against 98% AI, full ELMS grid (21 LMP2, 13 LMGT3)
- Driver tag: `oldark.`
- Goal: match the AMG's Jul 13 race pace on Ferrari, complete the paired race comparison

### Ferrari 296 GT3 Race Stint

Same race format as the Jul 13 AMG stint. Lift-and-coast throughout.

**Ferrari race stint 1 (17 clean laps, excluding LMP2 blue-flag laps and the Gendebien overshoot):**

| | Time |
|---|---|
| Best | 2:02.443 |
| Median | 2:03.044 |
| Worst* | 2:04.716 |
| StDev | 0.638s |
| Range | 2.273s |

*excluding traffic and incident laps

### Ferrari vs AMG: Paired Race Comparison

Same track, same race format, same AI, consecutive days:

| | Ferrari 296 (Jul 14) | AMG GT3 (Jul 13) | Δ |
|---|---|---|---|
| Best | 2:02.443 | 2:02.902 | -0.459s |
| Median | 2:03.044 | 2:03.276 | **-0.232s** |
| Worst* | 2:04.716 | 2:04.575 | +0.141s |
| StDev | 0.638s | 0.609s | +0.029s |
| Range | 2.273s | 1.673s | +0.600s |

Ferrari wins on peak pace (`-0.459s` on best lap) and median (`-0.232s`). The AMG is marginally tighter on standard deviation (`0.609s` vs `0.638s`) and significantly better on worst-lap containment (`2:04.575` vs `2:04.716`). The pattern echoes the April Imola findings: Ferrari is the attacking car — faster peak, higher variance. AMG is the enduring car — slightly slower, slightly tighter. At Sebring, the Ferrari's pace advantage is decisive enough to make it the faster race platform, even accounting for the wider variance. The April Spa gap (`~0.32s` in AMG's favor on consistency) has narrowed to near-parity.

The combined conclusion from the Jul 12-14 Sebring block: Ferrari is the fastest race car, AMG is the most consistent race car, and BMW has the highest hotlap ceiling — but all three cars are within a credible window of each other, and car choice depends on what the race demands (peak pace vs. error containment).

## 2026-07-15

### Session Context

- Track: Sebring International Raceway
- Car: Porsche 911 GT3R
- Session type: 1.5-hour concentrated hotlap session, 87 laps across 24 stints
- Driver tag: `oldark.`
- Goal: complete the four-car Sebring hotlap sweep and test the Imola whipping boy on a different track

### Porsche 911 GT3R — Result

- Porsche 911 GT3R: `2:01.866`, **P13/383**
- Sectors: `45.641 / 32.614 / 43.611`
- 105% cut: `2:06.768`, qualified pool ~262 of 383
- **≤105% percentile: top 5.0%**

The Imola P40 (worst S1, worst S3) just posted the fastest lap of the entire Sebring block across four platforms. The car that couldn't launch or finish a lap at Imola now wins S1 by `0.088s` over the nearest competitor.

### Updated Four-Car Sebring Comparison (CDA, Jul 12-15)

| Car | Time | S1 | S2 | S3 | Rank | Δ to best |
|---|---|---|---|---|---|---|
| **Porsche 911** | **2:01.866** | **45.641** | 32.614 | 43.611 | P13/383 | — |
| Ferrari 296 | 2:01.927 | 45.780 | 32.625 | **43.522** | P7/219 | +0.061s |
| BMW M4 | 2:02.037 | 45.784 | **32.559** | 43.694 | P6/317 | +0.171s |
| AMG GT3 | 2:02.038 | 45.729 | 32.571 | 43.738 | P8/237 | +0.172s |

Four cars, four sessions, within **0.172s**. The Porsche doesn't win any single sector outright — Ferrari has S3, BMW has S2 — but it's second-best in all three. No weakness. The zero-compromise car at Sebring. The rear-engine platform thrives where the front-engine cars struggle: it rotates *into* the bumps, not against them.

### Convergence Analysis: Refinement, Not Grind

Session progression across 24 stints:

| Milestone | Stint | Time |
|---|---|---|
| First competitive pace | Stint 1 | 2:02.432 |
| Broke into 2:02.0xx | Stint 3 | 2:02.094 |
| Exceeded AMG's best | Stint 7 | 2:02.094 |
| Hit 2:01.9xx | Stint 17 | 2:01.959 |
| Regressed | Stints 22-23 | — |
| Final PB | Stint 24 | 2:01.866 |

The Porsche gave competitive pace immediately — `2:02.432` on stint 1 was already faster than the AMG's best. But the ceiling required 87 laps across 24 separate pit cycles. Each stint reset costs time to find the window again, and the final hundredths didn't appear until the car's rotation model became muscle memory.

Compare convergence patterns at Sebring:

| Car | Early pace (<10 laps) | Final PB | Laps to PB | Session cost |
|---|---|---|---|---|
| Porsche 911 | 2:02.432 | 2:01.866 | 87 | High (refinement) |
| Ferrari 296 | 2:02.149 | 2:01.927 | ~30 over 2 days | Low |
| BMW M4 | 2:02.256 | 2:02.037 | ~30 over 2 days | Low |
| AMG GT3 | 2:02.038 | 2:02.038 | Session unknown | Unknown |

The Porsche is not the AMG. The AMG at Imola was grind — 57 laps for a mediocre P31. The Porsche at Sebring is refinement — 87 laps for the fastest lap of the week. Same lap count, opposite quality of result. The Porsche gives the pace window almost immediately (stint 1) but demands patience to extract the final 0.566s.

### The Imola Reversal

At Imola in May, the Porsche was P40 with the worst S1 (`21.734`) and worst S3 (`48.592`) in a seven-car sample. It was dismissed as "separate rear-engine issue — loses immediately in S1, then fails to cash out S3."

At Sebring, the same car wins S1 (`45.641`, `+0.088s` over AMG), is P2 in S3 (`43.611`), and posts the fastest overall lap. The rear-engine rotation that kills it at Piratella makes it fast at Sebring from lap 1. At Imola, the crest-stacked corners demand rotation the rear-engine car over-delivers — the tail steps out, the driver catches it, the lap dies. At Sebring, the bumps want the car to rotate, and the rear-engine platform gives exactly what the track asks for.

### What This Says About the Driver

Four cars, four winners, all within 0.172s. The truth was never car-limited — the three months of "AMG is the expensive platform" and "heavy front-engine translation problems" and "rotation model mismatch" were identifying *cost*, not *capability*. The question was never "which car can I drive?" It was always "which car costs less to drive — physically, mentally, lap-count-wise?"

The Porsche proved it: a car that was dead last at Imola in May just posted the fastest lap across four platforms at Sebring. Not because the car changed. Because the driver learned enough about his own rotation model, between Imola and now, to extract pace from any platform on any track. The remaining variable is cost — and cost varies by track, not by car.

### What Changed in My Understanding Today

1. The Porsche 911 GT3R at Sebring is not an Imola whale — it's the fastest GT3 platform I've driven on this track, winning S1 and posting the overall best lap.
2. The Imola P40 result was a track-fit problem, not a car problem. Same car, different track, opposite result.
3. The Porsche's convergence pattern is refinement (87 laps for a winning result), not grind (57 laps for a mediocre result like the AMG at Imola). Same lap count, opposite relationship with the car.
4. "Car A is bad" is a fundamentally incomplete statement. Every conclusion from the Imola era needs the suffix "...at Imola." Every car works somewhere. The driver's job is to find where.
5. Four cars, four different sector winners, all within 0.172s — the driver is not car-limited. The three months of analysis identified cost, not capability.
6. The rear-engine platform's rotation model is exactly what Sebring's bumps want — the car rotates *into* the surface, not against it. At Imola, Piratella over-rotates it. Track decides the personality.

## 2026-07-18

### Session Context

- Track: Sebring International Raceway
- Car: Porsche 911 GT3R
- Session type: 45-minute offline race against 98% AI, full ELMS grid (21 LMP2, 13 LMGT3)
- Driver tag: `oldark.`
- Goal: complete the four-car Sebring race comparison, test whether the hotlap pace translates to race conditions

### Porsche 911 GT3R Race Stint

Same race format as the Jul 13 (AMG), Jul 14 (Ferrari) sessions. Lift-and-coast throughout. Session ended prematurely on lap 23 after clipping Sunset corner, breaking the front-right suspension.

**Porsche race stint 1 (15 clean laps, excluding blue flags and broken suspension):**

| | Time |
|---|---|
| Best | 2:02.635 |
| Median | 2:03.035 |
| Worst* | 2:04.583 |
| StDev | 0.456s |
| Range | 1.948s |

*excluding traffic, incident, and broken suspension laps

### Three-Car Race Comparison (Sebring, Jul 13-18)

Same track, same race format, same AI:

| | Porsche 911 | Ferrari 296 | AMG GT3 |
|---|---|---|---|
| Best | 2:02.635 | 2:02.443 | 2:02.902 |
| Median | **2:03.035** | 2:03.044 | 2:03.276 |
| Worst* | 2:04.583 | 2:04.716 | 2:04.575 |
| StDev | **0.456s** | 0.638s | 0.609s |
| Range | 1.948s | 2.273s | 1.673s |

The Porsche wins on median (by `-0.009s` over Ferrari) and consistency (`0.456s` — the tightest of all three cars). Ferrari has the best raw lap. AMG has the best worst-lap containment. Each car wins a different metric — no platform is dominant across all categories.

Hotlap-to-race conversion:

| | Hotlap PB | Race Best | Race Median | Best Δ | Median Δ |
|---|---|---|---|---|---|
| Ferrari | 2:01.927 | 2:02.443 | 2:03.044 | +0.516s | +1.117s |
| Porsche | 2:01.866 | 2:02.635 | 2:03.035 | +0.769s | +1.169s |
| AMG | 2:02.038 | 2:02.902 | 2:03.276 | +0.864s | +1.238s |

Ferrari carries hotlap pace into race trim most efficiently on both best and median delta.

### Why the Porsche Is Popular in Endurance

The `0.456s` standard deviation explains the 911's endurance reputation. That's quali-sim consistency in race trim — set cruise control and the car just repeats. The rear-engine platform rewards discipline: mid-corner rotation feels satisfying through the apex, the rear squats under power on exit, and the lap times stay in a tight band. But push past the edge once — the Sunset corner clip on lap 21 — and the pendulum swings hard. Broken suspension, three hobbled laps, session over.

The AMG is safer but slower — `0.609s` stdev, `2:03.276` median. The Ferrari is faster but looser — `0.638s` stdev, `2:03.044` median. The Porsche threads the needle: fastest repeatable pace, tightest consistency, but charges interest on mistakes. Metronomic until it's not, with a repair bill when you forget.

### What Changed in My Understanding Today

1. The Porsche 911 GT3R delivered the fastest median AND tightest consistency across all three Sebring race comparisons. The hotlap ceiling translated cleanly to race conditions.
2. The Porsche's endurance character is now explained: `0.456s` stdev means metronomic repeatability, but the rear-engine pendulum means mistakes are proportionally expensive. The car rewards discipline and punishes overreach.
3. No single car dominates across all race metrics — Ferrari wins peak pace, Porsche wins consistency and median, AMG wins worst-lap containment. Car choice depends on race demand.
4. The Sunset corner suspension break is the same rear-engine pendulum that makes Piratella hostile at Imola — the rotation that helps in flow corners becomes a weapon against you when you exceed the window.

## 2026-07-19

### Session Context

- Track: Silverstone — two layouts exist
  - **ELMS:** old layout, start/finish before Copse (S1 = start→Copse→Maggotts/Becketts/Chapel, S2 = Hangar→Stowe→Vale→Club, S3 = Hamilton Straight→Abbey→Village→Wellington→Brooklands→Luffield)
  - **WEC:** new layout, start/finish on Hamilton Straight (S1 = Hamilton Straight→Copse/Maggotts, S2 = Becketts/Chapel/Hangar, S3 = Stowe→finish)
- Cars: Ferrari 296 GT3 (both layouts), Mercedes-AMG GT3 (ELMS)
- Driver tag: `oldark.`
- Last visit: December 2025
- Goal: explore new track, cross-check Ferrari vs AMG on ELMS layout, and see whether 7 months of training transferred

### Historical Context

Last Silverstone visits (December 2025):
- Ferrari 296 GT3 ELMS: `2:00.866`
- Mercedes-AMG GT3 ELMS: `2:01.835`

Today's results after 7 months with no Silverstone practice:
- Ferrari 296 GT3 ELMS: `2:00.698` (−0.168s, 22 laps)
- Ferrari 296 GT3 WEC: `2:00.357` (7 laps)
- Mercedes-AMG GT3 ELMS: `2:00.659` (−1.176s, 69 laps)

### Silverstone ELMS — Ferrari 296 GT3

- **Ferrari 296 GT3:** `2:00.698`, **P20/135** (raw) / P19/134 cleaned (excluding bugged `subaris` 1:11.165)
- P1 (real): `lwhitehead_` `1:57.668` (CDA)
- Sectors: `29.147 / 35.018 / 56.533`
- Gap to P1: `+3.030s`
- 105% cut: `2:03.551` — estimated qualified pool ~85-90

Raw percentile: ~14.8% (between 10th and 20th percentile). Weakest result of the three — likely first-session exploration rather than an optimized benchmark.

### Silverstone WEC — Ferrari 296 GT3

- **Ferrari 296 GT3:** `2:00.357`, **P13/196**
- P1: `lwhitehead_` `1:57.875` (CDA)
- Sectors: `35.512 / 49.824 / 35.021`
- Gap to P1: `+2.482s`

| Percentile | Time |
|---|---|
| 1% | 1:59.627 |
| 5% | 2:00.283 |
| 10% | 2:00.881 |
| 50% | 2:04.438 |

Raw percentile: ~6.6% (between 5th and 10th). Strongest result of the day — just 0.074s from top 5%. Achieved in only 7 laps after the ELMS session.

Note: sector times differ between layouts because sectors are divided differently. Total lap time should converge for the same driven line — the 0.341s gap between WEC and ELMS Ferrari laps is session variance, not a layout artifact. But the start/finish position matters psychologically: WEC layout starts at ~260 km/h on Hamilton Straight with a free straight to settle, while ELMS starts approaching Copse braking zone immediately.

### Silverstone ELMS — Mercedes-AMG GT3

- **AMG GT3:** `2:00.659`, **P6/81**
- P1: `lwhitehead_` `1:58.033` (CDA)
- Sectors: `29.180 / 34.883 / 56.596`
- Gap to P1: `+2.626s`

| Percentile | Time |
|---|---|
| 1% | 1:59.669 |
| 5% | 2:00.504 |
| 10% | 2:01.311 |
| 50% | 2:03.515 |

Raw percentile: ~7.4% (between 5th and 10th). Pool is small (81 entries) — one of the thinnest boards observed — so percentile interpretation carries lower confidence. Direct Ferrari-vs-AMG comparison is valid regardless.

**Convergence cost:** 69 laps to produce `2:00.659` vs 22 laps for Ferrari's `2:00.698`. The AMG beat Ferrari by 0.039s — a margin smaller than statistical noise — at a 3:1 lap-count ratio. Same Imola-era pattern: the lap exists, but the platform demands disproportionate investment to access it.

The AMG session was driven by curiosity: can the AMG beat the 296 at Silverstone? Answer: technically yes, but at unsustainable cost. A projected 2:00.3xx felt achievable with more grinding but was abandoned in favor of the WEC layout Ferrari session (which produced a better result in 7 laps anyway).

### Ferrari vs AMG Direct Comparison (ELMS)

| Car | Time | S1 | S2 | S3 | Gap |
|---|---|---|---|---|---|
| AMG GT3 | 2:00.659 | 29.180 | **34.883** | 56.596 | — |
| Ferrari 296 | 2:00.698 | **29.147** | 35.018 | **56.533** | +0.039s |

- S1: Ferrari +0.033s
- S2: **AMG +0.135s** (decisive)
- S3: Ferrari +0.063s

AMG wins the middle sector by a commanding margin and posts the faster lap despite losing both S1 and S3. S2 at Silverstone ELMS contains Hangar Straight → Stowe → Vale → Club — loaded sweepers and traction zones where the AMG's planted rear allows early, committed throttle application on exit. This is the same mechanism observed at Sebring: once past the rotation phase, the AMG's rear stability becomes a weapon rather than a liability.

This continues the Sebring Jul 12 finding: the AMG problem is a **corner-type problem** (brake-release rotation on smooth crests), not a universal platform flaw. Silverstone S2 rewards exit traction — exactly where the AMG's design is an asset, not a liability.

### Transfer Validation

7 months of zero Silverstone practice. The gain from December 2025:
- Ferrari: −0.168s (from `2:00.866`)
- AMG: −1.176s (from `2:01.835`)

The Ferrari delta is pure general development — everything learned at Imola, Spa, and Sebring between April and July transferred without track-specific practice. The AMG delta is even larger because the December 2025 AMG lap predated the entire journal's technique evolution (rotation model, downshift timing, diff preload understanding, prediction-triggered release workaround).

### Physical Cost of Silverstone

Silverstone causes sustained isometric load against the FFB motor with minimal recovery windows. Maggotts/Becketts/Chapel is a continuous ~15-second load cycle — pinned sideways under alternating direction with no straight long enough to fully release tension. The load cell means braking foot pushes against fixed resistance lap after lap with no float.

Result: arms sore from steering torque, throttle and braking foot sore from sustained pedal pressure. 69 AMG laps compounded the cost because the AMG demands additional hand input to compensate for missing rotation cues. Somatic fatigue — body soreness and sleepiness — was the reason Silverstone was abandoned in December 2025 in favor of Sebring. Today confirmed the same pattern.

Silverstone is not a slow track — it's an expensive track, and the currency is your body.

### What Changed in My Understanding Today

1. Silverstone is a new track in the journal — no prior baseline exists.
2. 7 months of training transferred cleanly: Ferrari improved 0.168s without a single lap of Silverstone practice in between.
3. The AMG is faster than Ferrari at Silverstone ELMS (by 0.039s), with the margin coming entirely from S2 flow-corner stability. This continues the pattern that the AMG is not universally hostile — only on corner types that demand brake-release rotation.
4. Silverstone S2 (Hangar/Stowe/Vale/Club) is the AMG's best sector — consistent with the finding that loaded sweepers with strong exit traction zones favor the front-engine planted-rear architecture.
5. The ELMS layout pools are thin (81-135 entries), suggesting WEC-layout leaderboards are preferred for robust percentile analysis.
6. The AMG convergence tax reappeared at Silverstone: 69 laps for a result Ferrari gave in 22. Same pattern as Imola, now replicated on a fourth track.
7. Silverstone is a physically expensive track due to sustained isometric load with few recovery windows. The AMG's additional hand-input cost makes it even more punishing.
8. The December 2025 abandonment of Silverstone was not a pace decision — it was a sustainability decision. The journal's entire trajectory (Spa → Imola → Sebring) was shaped by which tracks allowed training volume without wrecking the body.
9. Even without gravity, sustained FFB tension + load cell pressure + no float windows = real physical fatigue. Sim rig soreness is a legitimate training constraint, not just discomfort.

## 2026-07-20

### Session Context

- Track: Silverstone (ELMS layout)
- Same-day sessions:
  - Ferrari 296 GT3: `16 / 6 / 10`, best `2:00.216`
  - Mercedes-AMG GT3 Evo session 1: `18 / 3 / 15`, best `2:00.660`
  - Mercedes-AMG GT3 Evo session 2: `15 / 4 / 11`, best `2:00.532`
  - Porsche 911 GT3R: `46 / 15 / 31`, best `2:00.446`
- Driver tag: `oldark.`
- Goal: continue Jul 19 Silverstone work and test whether pace survives repeated same-day platform jumps with rest breaks in between

### Progression

| Stint | Laps | Best |
|---|---|---|
| Stint 1 | 5 | 2:00.812 |
| Stint 2 | 7 | 2:00.557 |
| Stint 3 | 1 | — |
| Stint 4 | 3 | **2:00.216** |

Clean descending staircase: `2:00.812` → `2:00.557` → `2:00.216`. No regression between stints. The Ferrari was teachable from lap 1.

### Leaderboard Result

- **Ferrari 296 GT3:** `2:00.216`, **P12/132** (P11 cleaned, excluding bugged `subaris` 1:11.165)
- P1 (real): `lwhitehead_` `1:57.668` (CDA)
- Sectors: `29.110 / 35.032 / 56.074`
- Gap to P1: `+2.548s`

### Day-over-Day Delta

| | Jul 19 | Jul 20 | Delta |
|---|---|---|---|
| Time | 2:00.698 | 2:00.216 | **−0.482s** |
| Rank | P20 | **P12** | +8 |
| S1 | 29.147 | 29.110 | −0.037 |
| S2 | 35.018 | 35.032 | +0.014 |
| S3 | 56.533 | 56.074 | **−0.459** |
| Laps | 22 | 16 | — |

S3 is 95% of the entire improvement. The Ferrari's rotation model activated in S3 — the Abbey/Village/Wellington/Brooklands/Luffield sequence. The car pays the rotation invoice once at entry and the driver cashes out through the exit phase. S1 ticked up slightly, S2 bled a negligible 0.014s.

### Transfer Validation — Part 2

The opening flyer of the session (`2:00.812`, stint 1) was already 0.054s faster than the December 2025 PB (`2:00.866`), which required grinding to reach. The first flying lap of a fresh session cleared a 7-month-old benchmark. Strictly speaking, there was one isolated Ferrari return on `2026-01-12` (`2:01.280`), so Jul 19-20 should be read as the first sustained return since December rather than the literal first visit. That correction does not change the main point: the journal's cumulative effect — everything from Imola, Spa, Sebring, and the AMG VC diagnostic — transferred cleanly back to Silverstone.

### Same-Day Platform Switch Test

Jul 20 functioned as a controlled platform-switch experiment:

1. Ferrari first at noon
2. about 30 minutes rest, then straight into AMG
3. longer break, then back to AMG
4. about 3 hours away plus a nap, then straight into Porsche

Same-day Silverstone ELMS bests:

| Car | Session Totals (Total / Valid / Invalid) | Best |
|---|---:|---:|
| Ferrari 296 GT3 | `16 / 6 / 10` | **2:00.216** |
| Porsche 911 GT3R | `46 / 15 / 31` | **2:00.446** |
| Mercedes-AMG GT3 Evo | `33 / 7 / 26` | **2:00.532** |

Spread from fastest to slowest across the three main platforms: only `0.316s`.

This is the real revelation of the last two days: Silverstone still feels physically expensive, but the old idea that it is a core weak circuit is no longer supported by the stopwatch. The pace now transfers across multiple architectures on the same day, even with long interruptions.

### AMG Follow-Up

AMG session 1 immediately after Ferrari:

- Session totals: `18 / 3 / 15`
- Best: `2:00.660`
- Read: survival problem rather than fluent progression. Too many one-lap aborts from spins/flat-spotted tyres and immediate pit returns.

AMG session 2 after a longer break:

- Session totals: `15 / 4 / 11`
- Best: `2:00.532`
- Stint progression: `2:01.260` → `2:00.677` → `2:00.532`

Important read:

- sub-`2:01` is now a real AMG Silverstone baseline
- but the valid-rate remains terrible (`21.2%` across both AMG sessions)
- the car can reach the number, but it still does not give the number cheaply

This confirms a sharper distinction:

- Ferrari baseline arrives
- AMG baseline is extracted

The gap between Ferrari and AMG on delivered best lap (`0.316s`) is small. The gap in cost of residency inside the pace window is large.

### Porsche Return Shock

After about 3 hours away from the rig, a nap, and a straight jump into a fourth platform, the Porsche produced:

- Session totals: `46 / 15 / 31`
- Best: `2:00.446`, **P9/131**
- Sectors: `29.045 / 35.032 / 56.369`

Historical Porsche Silverstone ELMS PB from 2025:

- `2:01.347`

Improvement:

- `−0.901s`

The strongest signal was not the final lap, but the early re-entry pace:

- Stint 2 already produced `2:01.178`

In 2025, `2:01.3xx` Porsche was a peak event that did not reliably repeat. On Jul 20, `2:01.178` became opening-price pace and the session later reached `2:00.446`.

This means last year's Porsche ceiling became this year's warm-up band.

An additional consistency surprise:

- Porsche hotlap valid-rate in Dec 2025: `104 / 34 / 70` = `32.7%`
- Porsche Jul 20 valid-rate: `46 / 15 / 31` = `32.6%`

So the Porsche did not become easier. The chaos rate stayed the same. The ceiling moved by almost a full second. That points to driver development much more than track familiarity or patch effect.

### Pool Decay Note

The board shrank from 135 (Jul 19) to 132 (Jul 20) — 3 entries dropped between days. Consistent with a board where submissions are sparse and entries can expire. Further evidence that the ELMS layout is not actively maintained by the community.

### What Changed in My Understanding Today

1. The Ferrari took only one session of familiarization before delivering serious pace. Day 2 improvement was large (−0.482s) and concentrated in S3 — the corner type that rewards the native rotation model.
2. The opening flyer beating a 7-month-old PB confirms that the transfer from other tracks is genuine, not session-specific luck.
3. Jul 20 is better read as one continuous same-day platform-switch experiment than as separate isolated sessions. Ferrari, AMG, and Porsche all landed inside a `0.316s` window despite rest breaks, fatigue, and even a nap.
4. Silverstone still carries a real physical toll, but the stopwatch no longer supports calling it a weak circuit. The old subjective read survives; the old performance read does not.
5. The AMG now has a real sub-`2:01` baseline at Silverstone, but it still demands pit-reset-heavy grind to stay there. Ferrari remains the cheapest resident of the pace window.
6. The Porsche result is one of the strongest transfer proofs in the whole journal: after a long break and same-day car swapping, it still produced `2:00.446`, almost a full second faster than the 2025 PB.
7. The Porsche valid-rate staying almost identical to 2025 while the lap time improved by `0.901s` proves the platform did not become easier; the driver became faster.
8. The ELMS board is not just small — it's actively decaying. 132 entries and shrinking reinforces that this layout is a graveyard.

## 2026-07-22

### Session Context

- Track: Silverstone (ELMS layout)
- Car: Porsche 911 GT3R
- Session type: 45-minute offline race simulation against `98%` AI
- Grid: full ELMS field (`LMP2`, `LMP3`, `LMGT3`)
- Driver tag: `oldark.`
- Goal: test whether the Jul 20 Porsche hotlap breakthrough translates into real race pace, and compare against the 2025 Porsche Silverstone race baseline

### Race Stint Read

Lap sample:

- Out-lap: `2:12.578`
- Early clean pace repeatedly appeared in the low-`2:01s` to low-`2:02s`
- Major contamination points:
  - laps `7-9`: LMP2 blue-flag sequence
  - laps `16-17`: more LMP2 blue-flag interruption
  - lap `19`: LMP2 crashes at Maggotts blocked the track

#### Clean-ish race window

Using laps `2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 18, 20, 21, 22`:

- Best: `2:01.482`
- Median: `2:02.061`
- Avg: `2:02.227`

Direct read:

- The Porsche translated hotlap pace into race trim cleanly.
- The car was immediately race-usable; lap `2` was already `2:01.482`.
- Once settled, the stint repeatedly returned to a low-`2:02` operating window.

### Comparison With 2025 Porsche Silverstone Race Pace

Reference 2025 Porsche race sample (same track, older physics/BOP generation):

- Best clean race lap: `2:02.298`
- Clean-ish median: approximately `2:03.2x`

2026 delta:

- Best-lap gain: about `−0.816s`
- Median gain: about `−1.1s`

This is far too large to explain by patch effect alone. The changelog can justify leaderboard reset and some absolute movement, but not a full-second race-median jump on its own. The dominant variable is driver development.

### Late-Stint Read: Tyres, Traffic, or Body?

Subjectively, the Porsche felt like Silverstone tyre degradation started leaning on the car around lap `15`. But the objective late-stint sample is contaminated by three overlapping factors:

1. multiclass traffic and blue flags,
2. the lap-`19` LMP2 crash blockage,
3. driver fatigue.

Most important subjective note:

- from about lap `18` onward, full-body fatigue was obvious and sweating increased significantly.

Correct interpretation:

- tyre-age onset is plausible,
- but this stint does **not** isolate tyre degradation cleanly,
- so the late-stint slowdown should be classified as a whole-system phase (traffic + body + possible tyre fade), not as pure tyre evidence.

### Porsche Race Character at Silverstone

What the stint reinforced:

- Porsche is hard to tame at Silverstone,
- but once inside the window it gives a special kind of comfort and stability,
- race pace and subjective ease are unusually strong while the tyres are alive.

This sharpens the Porsche read relative to AMG and Ferrari:

- Ferrari gives pace cheapest,
- AMG makes pace expensive to access,
- Porsche is hard to unlock, but once unlocked it gives a very stable and confidence-rich race window.

### What Changed in My Understanding Today

1. The Jul 20 Porsche hotlap result was real; the pace converted into race trim immediately.
2. Silverstone Porsche race pace improved by roughly a full second on median versus the 2025 baseline, which strongly supports genuine driver growth rather than patch-only explanation.
3. The Porsche's race comfort at Silverstone is exceptional once the car is inside its window; subjective stability and repeatability are a major strength.
4. The late-stint slowdown in this run cannot be cleanly assigned to tyre degradation because traffic, blocked track, and driver fatigue all overlapped.
5. Silverstone remains physically expensive enough that fatigue itself is now a meaningful analytical variable, not just background discomfort.
