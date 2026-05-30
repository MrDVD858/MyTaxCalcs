const fs = require('fs');
const c = fs.readFileSync('views/tax-refund-calculator.ejs', 'utf8');
const i = c.indexOf('<ins class="adsbygoogle"');
console.log(JSON.stringify(c.slice(i - 100, i + 400)));
