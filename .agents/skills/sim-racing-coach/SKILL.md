---
name: sim-racing-coach
description: Use this skill when analyzing real-world motorsport race data (ELMS, WEC, etc.) or the user's personal sim racing lap data, to benchmark performance. Trigger when the user provides a CSV/TSV race file or a sim lap time table and wants lap time analysis, IQR-filtered pace stats, or a comparison between sim and professional pace.
---

# Sim Racing Coach — Data Extraction & Benchmarking

This skill provides tools to extract and clean lap time data from both real-world race timing files (ELMS/WEC) and the user's personal sim racing sessions, enabling direct pace comparison.

---

## Tool: extract_sim_data

Parses a personal sim racing lap time table and filters dirty laps (out-laps, in-laps) before applying IQR outlier filtering.

**Use this when**: the user provides their own lap time data from a sim session (LMU or otherwise).

**Script location** (relative to workspace root): `.agents/skills/sim-racing-coach/scripts/extract_sim_data.js`

**Usage** — data is pasted inline by the user and piped via stdin:
```bash
echo "<pasted data>" | node .agents/skills/sim-racing-coach/scripts/extract_sim_data.js
```

**Input format** — tab- or comma-separated table with three columns (header required). The user pastes this directly into the chat:
```
Lap	Time	Stint
1	2:37.230	1
2	2:22.394	1
...
```

**Filtering logic**:
1. Lap 1 of the race — overall out-lap, discarded
2. First lap of each stint — pit out-lap, discarded
3. Last lap of each stint — pit in-lap or final slow lap, discarded
4. IQR filter (1.5× multiplier) applied if ≥ 8 clean laps remain

**Output** (JSON):
```json
{
  "total_laps_raw": 37,
  "clean_laps_pre_iqr": 33,
  "clean_laps_post_iqr": 31,
  "iqr_applied": true,
  "iqr_min_sample": 8,
  "iqr_stats": { "q1": 141.588, "q3": 142.370, "iqr": 0.782, "lower": 140.415, "upper": 143.543 },
  "discarded_lap_numbers": [1, 16, 17, 37],
  "laps": [
    { "lap": 2, "time": "2:22.394", "stint": 1, "time_seconds": 142.394 }
  ]
}
```

**Sim data files** are not stored on disk. The user pastes them directly into the chat.

---

## Tool: extract_race_data

Extracts all lap data for a given car number from an ELMS/WEC timing CSV file.

**Script location** (relative to skill root): `scripts/extract_race_data.js`

**Usage**:
```bash
node .agents/skills/sim-racing-coach/scripts/extract_race_data.js <filePath> <carNumber>
```

**Arguments**:
- `filePath` — Path to the CSV timing file (semicolon-delimited, BOM-safe)
- `carNumber` — Car number as a string (e.g. `"10"`, `"23"`)

**Output** (JSON array):
```json
[
  {
    "lap": "3",
    "stint": "1",
    "time": "2:04.887",
    "driver": "Ryan CULLEN",
    "s1": "35.385",
    "s2": "57.593",
    "s3": "31.909",
    "flag": "GF",
    "pit_time": null,
    "class": "LMP2",
    "team": "Vector Sport",
    "manufacturer": "Oreca"
  }
]
```

**Flag codes**:
- `GF` — Green Flag (clean racing lap)
- `FCY` — Full Course Yellow (neutralised, discard for pace analysis)
- `SF` — Safety Car (neutralised, discard for pace analysis)
- `FF` — Finish Flag (final lap, may be partial)
- `B` in `CROSSING_FINISH_LINE_IN_PIT` — Pit lap (discard for pace analysis)

---

## Workflow

### For sim data (user's own laps)
The user pastes their lap table inline. Write it to a temp file or pipe it to the script:
```bash
printf '<pasted data>' | node .agents/skills/sim-racing-coach/scripts/extract_sim_data.js
```
Output gives clean laps with `time_seconds`. Compute best, median, average, and std dev from `laps[]`.

### For real-world data (ELMS/WEC benchmark)
```bash
node .agents/skills/sim-racing-coach/scripts/extract_race_data.js <filePath> <carNumber>
```

The script automatically discards:
- Laps under FCY or SC (`flag` is `FCY` or `SF`)
- Pit entry/exit laps (`pit_time` not null, or `CROSSING_FINISH_LINE_IN_PIT` = `B`)
- Out-laps (first lap of each stint)

Then applies IQR filtering if ≥ 8 clean laps remain (same 1.5× multiplier).

### IQR filtering (both scripts)
- Q1 = 25th percentile, Q3 = 75th percentile, IQR = Q3 − Q1
- Bounds: `[Q1 − 1.5×IQR, Q3 + 1.5×IQR]`
- Skipped if fewer than 8 clean laps remain (`iqr_applied: false`)
- Output always includes `iqr_stats`, `clean_laps_pre_iqr`, `clean_laps_post_iqr`

### Compute benchmarks from `laps[]`
- **Best lap**: minimum `time_seconds`
- **Median lap**: middle value of sorted clean laps
- **Average lap**: mean of clean lap times
- **Sector bests** (real-world only): minimum of each `s1`, `s2`, `s3` independently (theoretical best)
- **Consistency**: standard deviation of clean lap times in seconds

### Compare sim vs real-world
```
BENCHMARK — Car #XX | <Team> | <Class> @ <Circuit>
Driver(s): <names>

Best lap:    2:04.056
Median lap:  2:05.500
Avg lap:     2:05.800
Best S1:     35.195  Best S2:  56.927  Best S3:  31.730
Theoretical: 2:03.852

USER SIM DATA
Best lap:    2:21.015
Median lap:  2:21.849
Avg lap:     2:21.900
Std dev:     0.38s
Gap (best):  +16.959s  (+13.7%)
```

### Sector gap analysis
State which sectors contribute the most to the gap. Do not diagnose inputs without telemetry data — note what additional data would be required.

---

## Data file conventions

Real-world timing CSVs:
```
data/<series>/<year>/<circuit>/<filename>.csv
```
Example: `data/elms/2025/spa/23_Analysis_Race.csv`

Sim session data is pasted inline by the user and is not stored on disk.
