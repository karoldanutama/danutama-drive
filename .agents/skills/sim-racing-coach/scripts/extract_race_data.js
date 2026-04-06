#!/usr/bin/env node
'use strict';

const fs = require('fs');

const filePath = process.argv[2];
const carNumber = process.argv[3];

if (!filePath || !carNumber) {
  console.error('Usage: node extract_race_data.js <filePath> <carNumber>');
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');
const cleanContent = content.replace(/^\uFEFF/, '');
const lines = cleanContent.split(/\r?\n/);

if (lines.length === 0) {
  console.error('File is empty');
  process.exit(1);
}

const headers = lines[0].split(';').map(h => h.trim());
const results = [];

for (let i = 1; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  const cols = line.split(';');
  const row = {};
  headers.forEach((header, index) => {
    row[header] = cols[index] !== undefined ? cols[index].trim() : '';
  });

  if (row['NUMBER'] === carNumber) {
    results.push({
      lap: row['LAP_NUMBER'],
      stint: row['DRIVER_NUMBER'],
      time: row['LAP_TIME'],
      driver: row['DRIVER_NAME'],
      s1: row['S1'],
      s2: row['S2'],
      s3: row['S3'],
      flag: row['FLAG_AT_FL'],
      pit_time: row['PIT_TIME'] || null,
      class: row['CLASS'],
      team: row['TEAM'],
      manufacturer: row['MANUFACTURER']
    });
  }
}

if (results.length === 0) {
  console.log(JSON.stringify({ error: `No data found for car #${carNumber}` }));
} else {
  console.log(JSON.stringify(results, null, 2));
}
