const fs = require('fs');
const path = require('path');

const CONFIGS = {
  'tax-refund-calculator': {
    slot: '5205436277',
    tryNext: [
      ['/income-tax-calculator',          '\uD83D\uDCB0', 'Income Tax Calculator',       'Estimate your federal tax bill'],
      ['/payroll-tax-calculator',         '\uD83D\uDCBC', 'Payroll Tax Calculator',      'Employer & employee taxes'],
      ['/self-employment-tax-calculator', '\uD83E\uDDFE', 'Self-Employment Tax',         'SE tax + deduction'],
    ]
  },
  'payroll-tax-calculator': {
    slot: '5205436277',
    tryNext: [
      ['/income-tax-calculator',          '\uD83D\uDCB0', 'Income Tax Calculator',       'Estimate your federal tax bill'],
      ['/tax-refund-calculator',          '\uD83D\uDCB5', 'Tax Refund Calculator',       'Will you get a refund?'],
      ['/self-employment-tax-calculator', '\uD83E\uDDFE', 'Self-Employment Tax',         'SE tax + deduction'],
    ]
  },
  'self-employment-tax-calculator': {
    slot: '5205436277',
    tryNext: [
      ['/income-tax-calculator',          '\uD83D\uDCB0', 'Income Tax Calculator',       'Estimate your federal tax bill'],
      ['/tax-refund-calculator',          '\uD83D\uDCB5', 'Tax Refund Calculator',       'Will you get a refund?'],
      ['/payroll-tax-calculator',         '\uD83D\uDCBC', 'Payroll Tax Calculator',      'Employer & employee taxes'],
    ]
  },
  'capital-gains-tax-calculator': {
    slot: '5205436277',
    tryNext: [
      ['/income-tax-calculator',          '\uD83D\uDCB0', 'Income Tax Calculator',       'Estimate your federal tax bill'],
      ['/tax-refund-calculator',          '\uD83D\uDCB5', 'Tax Refund Calculator',       'Will you get a refund?'],
      ['/sales-tax-calculator',           '\uD83D\uDED2', 'Sales Tax Calculator',        'State & local sales tax'],
    ]
  },
  'sales-tax-calculator': {
    slot: '4212978293',
    tryNext: [
      ['/income-tax-calculator',          '\uD83D\uDCB0', 'Income Tax Calculator',       'Estimate your federal tax bill'],
      ['/capital-gains-tax-calculator',   '\uD83D\uDCC8', 'Capital Gains Tax',           'Short & long-term rates'],
      ['/tax-refund-calculator',          '\uD83D\uDCB5', 'Tax Refund Calculator',       'Will you get a refund?'],
    ]
  },
};

function makeCard(href, emoji, name, desc) {
  return [
    `        <a href="${href}" style="display:flex;align-items:center;gap:10px;padding:12px 14px;border:1px solid #e5e7eb;border-radius:10px;text-decoration:none;color:inherit;" onmouseover="this.style.borderColor='#16a34a'" onmouseout="this.style.borderColor='#e5e7eb'">`,
    `          <span style="font-size:1.3rem;">${emoji}</span>`,
    `          <div>`,
    `            <p style="font-size:.8rem;font-weight:700;color:#111827;margin:0 0 2px;">${name}</p>`,
    `            <p style="font-size:.72rem;color:#9ca3af;margin:0;">${desc}</p>`,
    `          </div>`,
    `        </a>`,
  ].join('\r\n');
}

function makeTryNext(links) {
  const cards = links.map(l => makeCard(...l)).join('\r\n');
  return [
    `      <div style="margin:0 0 24px;padding:16px 0;border-bottom:1px solid #e5e7eb;">`,
    `        <p style="font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#16a34a;margin:0 0 10px;">Try next</p>`,
    `        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">`,
    cards,
    `        </div>`,
    `      </div>`,
  ].join('\r\n');
}

const viewsDir = path.join(__dirname, 'views');

for (const [name, cfg] of Object.entries(CONFIGS)) {
  const filepath = path.join(viewsDir, `${name}.ejs`);
  if (!fs.existsSync(filepath)) { console.log(`SKIP: ${name}.ejs not found`); continue; }

  let content = fs.readFileSync(filepath, 'utf8');

  if (content.includes('IntersectionObserver')) {
    console.log(`  ALREADY DONE: ${name}.ejs`);
    continue;
  }

  const original = content;

  // Change 1: min-height bump (idempotent)
  content = content.replace(/(\.ad-zone\{[^}]*min-height:)\s*\d+px/g, '$1120px');
  content = content.replace(/(\.ad-zone \{ [^}]*min-height:)\s*\d+px/g, '$1 120px');

  // Change 2+3: locate the slot, find the <ins line above it, find </div> after push, replace the whole block
  const pushMarker = `<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>`;
  let replaced = false;

  const slotPos = content.indexOf(`data-ad-slot="${cfg.slot}"`);
  if (slotPos === -1) {
    console.log(`  WARNING: slot ${cfg.slot} not found in ${name}.ejs`);
    continue;
  }

  // Find <ins line: search backwards from slotPos for a line starting with whitespace + <ins
  const beforeSlot = content.slice(0, slotPos);
  const insPos = beforeSlot.lastIndexOf('<ins ');
  if (insPos === -1) { console.log(`  WARNING: <ins not found before slot in ${name}.ejs`); continue; }

  // Find start of the <ins line (beginning of that line)
  const lineStart = beforeSlot.lastIndexOf('\n', insPos) + 1;

  // Capture the indentation of that line
  const lineText = content.slice(lineStart);
  const indentMatch = lineText.match(/^([ \t]+)<ins/);
  const indent = indentMatch ? indentMatch[1] : '        ';
  const outerIndent = indent.slice(0, Math.max(0, indent.length - 2));

  // Find push marker after slotPos
  const pushPos = content.indexOf(pushMarker, slotPos);
  if (pushPos === -1) { console.log(`  WARNING: push marker not found after slot in ${name}.ejs`); continue; }

  // Find end of push line
  const pushLineEnd = content.indexOf('\n', pushPos) + 1;

  // Find the closing </div> line after the push
  const closeDivPos = content.indexOf('</div>', pushLineEnd - 1);
  const closeDivEnd = closeDivPos + '</div>'.length;

  // Build replacement
  const lazyBlock = [
    `${indent}<ins class="adsbygoogle" style="display:block" id="ad-slot-1"`,
    `${indent}  data-ad-client="ca-pub-5193834725888549"`,
    `${indent}  data-ad-slot="${cfg.slot}"`,
    `${indent}  data-ad-format="auto"`,
    `${indent}  data-full-width-responsive="true"></ins>`,
    `${indent}<script>`,
    `${indent}  (function() {`,
    `${indent}    var ins = document.getElementById('ad-slot-1');`,
    `${indent}    if (!ins) return;`,
    `${indent}    var obs = new IntersectionObserver(function(entries) {`,
    `${indent}      if (entries[0].isIntersecting) {`,
    `${indent}        (adsbygoogle = window.adsbygoogle || []).push({});`,
    `${indent}        obs.disconnect();`,
    `${indent}      }`,
    `${indent}    }, { rootMargin: '200px' });`,
    `${indent}    obs.observe(ins);`,
    `${indent}  })();`,
    `${indent}</script>`,
    `${outerIndent}</div>`,
    ``,
    makeTryNext(cfg.tryNext),
  ].join('\r\n');

  content = content.slice(0, lineStart) + lazyBlock + content.slice(closeDivEnd);
  replaced = true;
  console.log(`  OK: Patched ${name}.ejs`);

  fs.writeFileSync(filepath, content, 'utf8');
  console.log(`  Saved: ${name}.ejs`);
}

console.log('\nDone. Commit and push when ready.');
