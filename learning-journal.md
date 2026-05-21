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
