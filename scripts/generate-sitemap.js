const fs = require("fs");
const path = require("path");
const states = require("../data/states");

const baseUrl = "https://mytaxcalcs.com";

const staticUrls = [
  "/",
  "/income-tax-calculator",
  "/self-employment-tax-calculator",
  "/capital-gains-tax-calculator",
  "/sales-tax-calculator",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/disclaimer"
];

const stateUrls = states.map((state) => `/${state.slug}-income-tax-calculator`);

const allUrls = [...staticUrls, ...stateUrls];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map((url) => {
    return `  <url>
    <loc>${baseUrl}${url}</loc>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

const outputPath = path.join(__dirname, "..", "public", "sitemap.xml");

fs.writeFileSync(outputPath, sitemap, "utf8");

console.log(`Sitemap generated with ${allUrls.length} URLs.`);
console.log(`Saved to: ${outputPath}`);