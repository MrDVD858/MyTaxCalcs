const fs = require('fs');
const content = fs.readFileSync('views/tax-refund-calculator.ejs', 'utf8');

const insPos = content.indexOf('<ins class="adsbygoogle"');
// Show 60 chars before so we see the indentation clearly
const chunk = content.slice(insPos - 60, insPos + 350);
console.log(JSON.stringify(chunk));
