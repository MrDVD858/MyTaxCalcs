const fs = require('fs');
const overviews = JSON.parse(fs.readFileSync('./states_overview.json', 'utf8'));

// Read states.js - user needs to provide path
const statesPath = process.argv[2];
if (!statesPath) {
  console.log('Usage: node add_overviews.js /path/to/states.js');
  process.exit(1);
}

let content = fs.readFileSync(statesPath, 'utf8');

// For each state, find its slug and inject overview field
Object.entries(overviews).forEach(([slug, overview]) => {
  // Match the slug line and add overview after it
  const escapedSlug = slug.replace(/-/g, '\\-');
  const regex = new RegExp(`(slug:\\s*["']${escapedSlug}["'][^}]*?)(\n\\s*[},])`, 's');
  const replacement = `$1,\n    overview: ${JSON.stringify(overview)}$2`;
  const newContent = content.replace(regex, replacement);
  if (newContent !== content) {
    content = newContent;
    console.log(`✓ Added overview for ${slug}`);
  } else {
    console.log(`✗ Could not find slug: ${slug}`);
  }
});

fs.writeFileSync(statesPath + '.updated.js', content);
console.log('\nDone! Updated file saved as:', statesPath + '.updated.js');
