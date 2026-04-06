---
name: sim-racing-coach
description: Use this skill when analyzing real-world motorsport race data (ELMS, WEC, etc.) to benchmark against sim racing performance. Trigger when the user provides a CSV race analysis file and wants to extract lap time data for a specific car number, or when comparing professional race pace against sim data.
---

# Sim Racing Coach — Real-World Data Extraction

This skill provides access to real-world race timing data from series like ELMS and WEC. Use it to extract lap times for a specific car and benchmark against the user's sim racing performance.

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

### 1. Extract the data
```bash
node .agents/skills/sim-racing-coach/scripts/extract_race_data.js <filePath> <carNumber>
```

### 2. Filter dirty laps
The script automatically discards:
- Laps under FCY or SC (`flag` is `FCY` or `SF`)
- Pit entry/exit laps (`pit_time` not null, or `CROSSING_FINISH_LINE_IN_PIT` = `B`)
- Out-laps (first lap of each stint)

### 3. IQR outlier filtering
After the flag/pit filter, if **8 or more** clean laps remain, the script applies IQR filtering (1.5× multiplier):
- Converts all clean lap times to seconds
- Computes Q1 (25th percentile) and Q3 (75th percentile)
- IQR = Q3 − Q1; bounds = `[Q1 − 1.5×IQR, Q3 + 1.5×IQR]`
- Laps outside bounds are discarded

If fewer than 8 clean laps exist, IQR is skipped (`iqr_applied: false`). This prevents over-filtering short stints.

The output includes `iqr_applied`, `iqr_stats` (q1, q3, iqr, lower, upper in seconds), `clean_laps_pre_iqr`, and `clean_laps_post_iqr` for full transparency.

### 4. Compute benchmarks
- **Best lap**: minimum `time`
- **Median lap**: middle value of sorted clean laps
- **Average lap**: mean of clean lap times
- **Sector bests**: minimum of each `s1`, `s2`, `s3` independently (theoretical best)
- **Consistency**: standard deviation of clean lap times in seconds

### 4. Compare against user sim data
```
BENCHMARK — Car #XX | <Team> | <Class> @ <Circuit>
Driver(s): <names>

Best lap:    2:04.056
Median lap:  2:05.500
Avg lap:     2:05.800
Best S1:     35.195  Best S2:  56.927  Best S3:  31.730
Theoretical: 2:03.852

USER SIM DATA
Best lap:    2:20.748
Gap:         +16.692s  (+13.4%)
```

### 5. Sector gap analysis
State which sectors contribute the most to the gap. Do not diagnose inputs without telemetry data — note what additional data would be required.

---

## Data file conventions

Real-world timing CSVs are stored under:
```
data/<series>/<year>/<circuit>/<filename>.csv
```

Example:
```
data/elms/2025/spa/23_Analysis_Race.csv
```
