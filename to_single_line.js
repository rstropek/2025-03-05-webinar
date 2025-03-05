#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Check if a filename was provided as an argument
if (process.argv.length < 3) {
  console.error('Usage: node to_single_line.js <filename>');
  process.exit(1);
}

// Get the filename from command line arguments
const filename = process.argv[2];

try {
  // Read the file content
  const content = fs.readFileSync(filename, 'utf8');
  
  // Replace all newlines with the literal string "\n"
  const singleLine = content.replace(/\n/g, '\\n');
  
  // Output the result to console
  console.log(singleLine);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
