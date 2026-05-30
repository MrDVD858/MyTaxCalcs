const fs = require('fs');
const content = fs.readFileSync('views/tax-refund-calculator.ejs', 'utf8');

// Find the ad-zone div
const start = content.indexOf('ad-zone-label');
const chunk = content.slice(start - 50, start + 600);

// Print as JSON so we see every whitespace character exactly
console.log(JSON.stringify(chunk));
