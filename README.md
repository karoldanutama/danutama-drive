# Danutama Drive

Personal workspace for sim racing pace analysis and benchmarking against real-world race data. Includes driver context, curated timing files, and extraction scripts used to compute clean lap statistics.

## What's in here

- `driver-profile.md` — background, hardware constraints, and pace context used to interpret gaps.
- `data/` — ELMS/WEC timing CSVs organized by series/year/circuit.
- `.agents/skills/sim-racing-coach/` — extraction scripts and workflow notes.

## Quick start

### Extract real-world race laps (ELMS/WEC)

```bash
node .agents/skills/sim-racing-coach/scripts/extract_race_data.js <filePath> <carNumber>
```

Example:

```bash
node .agents/skills/sim-racing-coach/scripts/extract_race_data.js data/elms/2025/spa/23_Analysis_Race.csv 23
```

### Extract sim race laps (paste data)

```bash
printf 'Lap\tTime\tStint\n1\t2:37.230\t1\n2\t2:22.394\t1' | node .agents/skills/sim-racing-coach/scripts/extract_sim_data.js
```

Input must include a header row with `Lap`, `Time`, `Stint` columns (tab or comma separated).

## Outputs

Both scripts emit JSON with clean laps and IQR filtering metadata.

- `clean_laps_pre_iqr`, `clean_laps_post_iqr`
- `iqr_applied`, `iqr_stats`
- `laps[]` with `time_seconds`

Use the `laps[]` values to compute best, median, average, and standard deviation.

## Notes

- Sim data is pasted inline and not stored on disk.
- Hardware constraints in `driver-profile.md` should be considered before comparing sim pace to real-world benchmarks.
