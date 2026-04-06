#!/usr/bin/env node
'use strict';

const fs = require('fs');

const filePath = process.argv[2];
const carNumber = process.argv[3];

if (!filePath || !carNumber) {
  console.error('Usage: node extract_race_data.js <filePath> <carNumber>');
  process.exit(1);
}

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

const IQR_MIN_SAMPLE = 8;

const content = fs.readFileSync(filePath, 'utf8');
const cleanContent = content.replace(/^\uFEFF/, '');
const lines = cleanContent.split(/\r?\n/);

if (lines.length === 0) {
  console.error('File is empty');
  process.exit(1);
}

const headers = lines[0].split(';').map(h => h.trim());
const allLaps = [];

for (let i = 1; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  const cols = line.split(';');
  const row = {};
  headers.forEach((header, index) => {
    row[header] = cols[index] !== undefined ? cols[index].trim() : '';
  });

  if (row['NUMBER'] !== carNumber) continue;

  allLaps.push({
    lap: row['LAP_NUMBER'],
    stint: row['DRIVER_NUMBER'],
    time: row['LAP_TIME'],
    driver: row['DRIVER_NAME'],
    s1: row['S1'],
    s2: row['S2'],
    s3: row['S3'],
    flag: row['FLAG_AT_FL'],
    pit_time: row['PIT_TIME'] || null,
    crossing_finish_in_pit: row['CROSSING_FINISH_LINE_IN_PIT'] || '',
    class: row['CLASS'],
    team: row['TEAM'],
    manufacturer: row['MANUFACTURER'],
  });
}

if (allLaps.length === 0) {
  console.log(JSON.stringify({ error: `No data found for car #${carNumber}` }));
  process.exit(0);
}

// Step 1: Filter dirty laps — FCY, SC, pit entry/exit laps, and out-laps (first lap of each stint)
const seenStints = new Set();
const cleanLaps = allLaps.filter(lap => {
  if (lap.flag === 'FCY' || lap.flag === 'SF') return false;
  if (lap.pit_time && lap.pit_time !== '') return false;
  if (lap.crossing_finish_in_pit === 'B') return false;

  // Discard out-lap: first lap seen per stint
  if (!seenStints.has(lap.stint)) {
    seenStints.add(lap.stint);
    return false;
  }
  return true;
});

// Step 2: IQR filtering — only applied when >= IQR_MIN_SAMPLE clean laps exist
let filteredLaps = cleanLaps;
let iqrApplied = false;
let iqrStats = null;

if (cleanLaps.length >= IQR_MIN_SAMPLE) {
  const times = cleanLaps.map(l => timeToSeconds(l.time)).filter(t => t !== null);
  const { lower, upper, q1, q3, iqr } = computeIQR(times);
  iqrStats = {
    q1: +q1.toFixed(3),
    q3: +q3.toFixed(3),
    iqr: +iqr.toFixed(3),
    lower: +lower.toFixed(3),
    upper: +upper.toFixed(3),
  };
  filteredLaps = cleanLaps.filter(l => {
    const t = timeToSeconds(l.time);
    return t !== null && t >= lower && t <= upper;
  });
  iqrApplied = true;
}

// Build output — strip internal field, add time_seconds for convenience
const laps = filteredLaps.map(({ crossing_finish_in_pit, ...lap }) => ({
  ...lap,
  time_seconds: timeToSeconds(lap.time),
}));

const output = {
  car: carNumber,
  total_laps_raw: allLaps.length,
  clean_laps_pre_iqr: cleanLaps.length,
  clean_laps_post_iqr: laps.length,
  iqr_applied: iqrApplied,
  iqr_min_sample: IQR_MIN_SAMPLE,
  iqr_stats: iqrStats,
  laps,
};

console.log(JSON.stringify(output, null, 2));
