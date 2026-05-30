const fs = require('fs');
const content = fs.readFileSync('views/tax-refund-calculator.ejs', 'utf8');

// Find all occurrences of adsbygoogle ins tag
let idx = 0;
let count = 0;
while (true) {
  const found = content.indexOf('<ins ', idx);
  if (found === -1) break;
  count++;
  console.log('=== ins tag #' + count + ' at position ' + found + ' ===');
  console.log(JSON.stringify(content.slice(found - 100, found + 400)));
  console.log('');
  idx = found + 1;
}
if (count === 0) console.log('No <ins tags found at all!');
