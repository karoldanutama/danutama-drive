#!/usr/bin/env node
'use strict';

/**
 * extract_sim_data.js
 *
 * Parses a simple sim racing lap time table with columns: Lap, Time, Stint
 * Accepts tab- or comma-separated input from a file argument or stdin.
 *
 * Usage:
 *   node extract_sim_data.js <filePath>
 *   echo "<data>" | node extract_sim_data.js
 *
 * Filtering logic:
 *   1. Lap 1 of the race       — overall out-lap, discarded
 *   2. First lap of each stint — pit out-lap, discarded
 *   3. Last lap of each stint  — pit in-lap, discarded (including final stint)
 *   4. IQR outlier filter      — applied if >= 8 clean laps remain (1.5x multiplier)
 */

const fs = require('fs');

const IQR_MIN_SAMPLE = 8;

function timeToSeconds(t) {
  if (!t || t.trim() === '') return null;
  const parts = t.trim().split(':');
  if (parts.length === 2) {
    return parseFloat(parts[0]) * 60 + parseFloat(parts[1]);
  }
  if (parts.length === 3) {
    return parseFloat(parts[0]) * 3600 + parseFloat(parts[1]) * 60 + parseFloat(parts[2]);
  }
  const n = parseFloat(t);
  return isNaN(n) ? null : n;
}

function computeIQR(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const q1 = sorted[Math.floor(sorted.length * 0.25)];
  const q3 = sorted[Math.floor(sorted.length * 0.75)];
  const iqr = q3 - q1;
  return { q1, q3, iqr, lower: q1 - 1.5 * iqr, upper: q3 + 1.5 * iqr };
}

function readInput() {
  const filePath = process.argv[2];
  if (filePath) {
    return fs.readFileSync(filePath, 'utf8');
  }
  // Read from stdin
  return fs.readFileSync('/dev/stdin', 'utf8');
}

const raw = readInput().replace(/^\uFEFF/, '').trim();
const lines = raw.split(/\r?\n/).filter(l => l.trim());

if (lines.length < 2) {
  console.error('Error: input must have a header row and at least one data row');
  process.exit(1);
}

// Detect delimiter from header line
const header = lines[0];
const delimiter = header.includes('\t') ? '\t' : ',';
const cols = header.split(delimiter).map(h => h.trim().toLowerCase());

const lapIdx   = cols.findIndex(c => c === 'lap');
const timeIdx  = cols.findIndex(c => c === 'time');
const stintIdx = cols.findIndex(c => c === 'stint');

if (lapIdx === -1 || timeIdx === -1 || stintIdx === -1) {
  console.error(`Error: could not find required columns (Lap, Time, Stint). Found: ${cols.join(', ')}`);
  process.exit(1);
}

// Parse all laps
const allLaps = [];
for (let i = 1; i < lines.length; i++) {
  const parts = lines[i].split(delimiter).map(p => p.trim());
  const lap   = parseInt(parts[lapIdx], 10);
  const time  = parts[timeIdx];
  const stint = parseInt(parts[stintIdx], 10);
  if (isNaN(lap) || isNaN(stint) || !time) continue;
  allLaps.push({ lap, time, stint, time_seconds: timeToSeconds(time) });
}

if (allLaps.length === 0) {
  console.log(JSON.stringify({ error: 'No valid laps parsed from input' }));
  process.exit(0);
}

// Group laps by stint to identify first/last of each stint
const stintMap = {};
for (const l of allLaps) {
  if (!stintMap[l.stint]) stintMap[l.stint] = [];
  stintMap[l.stint].push(l);
}

// Build set of dirty lap numbers: first + last of every stint, plus overall lap 1
const dirtyLaps = new Set();
for (const [, laps] of Object.entries(stintMap)) {
  dirtyLaps.add(laps[0].lap);                    // first of stint (out-lap)
  dirtyLaps.add(laps[laps.length - 1].lap);      // last of stint (in-lap or final lap)
}
dirtyLaps.add(allLaps[0].lap);                   // overall lap 1 (redundant but explicit)

const cleanLaps = allLaps.filter(l => !dirtyLaps.has(l.lap));

// IQR filtering
let filteredLaps = cleanLaps;
let iqrApplied = false;
let iqrStats = null;

if (cleanLaps.length >= IQR_MIN_SAMPLE) {
  const times = cleanLaps.map(l => l.time_seconds).filter(t => t !== null);
  const { lower, upper, q1, q3, iqr } = computeIQR(times);
  iqrStats = {
    q1: +q1.toFixed(3),
    q3: +q3.toFixed(3),
    iqr: +iqr.toFixed(3),
    lower: +lower.toFixed(3),
    upper: +upper.toFixed(3),
  };
  filteredLaps = cleanLaps.filter(l => {
    const t = l.time_seconds;
    return t !== null && t >= lower && t <= upper;
  });
  iqrApplied = true;
}

const output = {
  total_laps_raw: allLaps.length,
  clean_laps_pre_iqr: cleanLaps.length,
  clean_laps_post_iqr: filteredLaps.length,
  iqr_applied: iqrApplied,
  iqr_min_sample: IQR_MIN_SAMPLE,
  iqr_stats: iqrStats,
  discarded_lap_numbers: [...dirtyLaps].sort((a, b) => a - b),
  laps: filteredLaps,
};

console.log(JSON.stringify(output, null, 2));
