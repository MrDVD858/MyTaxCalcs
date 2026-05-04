const express = require("express");
const path = require("path");
require("dotenv").config();

const states = require("./data/states");
const { calculateTaxRefund } = require("./calculators/taxRefund");
const { calculatePayrollTax } = require("./calculators/payrollTax");
const { calculateSalesTax } = require("./calculators/salesTax");
const { calculateFederalIncomeTax } = require("./calculators/federalIncomeTax");
const { calculateSelfEmploymentTax } = require("./calculators/selfEmploymentTax");
const { calculateCapitalGainsTax } = require("./calculators/capitalGainsTax");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ── HOME ──────────────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "MyTaxCalcs - Free Tax Calculators",
    states
  });
});

// ── CALCULATOR HUB ────────────────────────────────────────────────────────────
app.get("/calculators", (req, res) => {
  res.render("calculators", {
    pageTitle: "Tax Calculators",
    states
  });
});

// ── INCOME TAX ────────────────────────────────────────────────────────────────
app.get("/income-tax-calculator", (req, res) => {
  res.render("income-tax-calculator", {
    pageTitle: "Free Income Tax Calculator",
    states,
    result: null,
    form: {}
  });
});

app.post("/income-tax-calculator", (req, res) => {
  const result = calculateFederalIncomeTax(req.body);
  res.render("income-tax-calculator", {
    pageTitle: "Free Income Tax Calculator",
    states,
    result,
    form: req.body
  });
});

// ── STATE INCOME TAX ──────────────────────────────────────────────────────────
app.get("/:stateSlug-income-tax-calculator", (req, res) => {
  const state = states.find((s) => s.slug === req.params.stateSlug);
  if (!state) {
    return res.status(404).send("State calculator not found.");
  }
  res.render("state-income-tax-calculator", {
    pageTitle: `${state.name} Income Tax Calculator`,
    state,
    states,
    result: null,
    form: {}
  });
});

app.post("/:stateSlug-income-tax-calculator", (req, res) => {
  const state = states.find((s) => s.slug === req.params.stateSlug);
  if (!state) {
    return res.status(404).send("State calculator not found.");
  }
  const result = calculateFederalIncomeTax(req.body);
  res.render("state-income-tax-calculator", {
    pageTitle: `${state.name} Income Tax Calculator`,
    state,
    states,
    result,
    form: req.body
  });
});

// ── SELF-EMPLOYMENT TAX ───────────────────────────────────────────────────────
app.get("/self-employment-tax-calculator", (req, res) => {
  res.render("self-employment-tax-calculator", {
    pageTitle: "Self-Employment Tax Calculator",
    result: null,
    form: {}
  });
});

app.post("/self-employment-tax-calculator", (req, res) => {
  const result = calculateSelfEmploymentTax(req.body);
  res.render("self-employment-tax-calculator", {
    pageTitle: "Self-Employment Tax Calculator",
    result,
    form: req.body
  });
});

// ── CAPITAL GAINS TAX ─────────────────────────────────────────────────────────
app.get("/capital-gains-tax-calculator", (req, res) => {
  res.render("capital-gains-tax-calculator", {
    pageTitle: "Capital Gains Tax Calculator",
    result: null,
    form: {}
  });
});

app.post("/capital-gains-tax-calculator", (req, res) => {
  const result = calculateCapitalGainsTax(req.body);
  res.render("capital-gains-tax-calculator", {
    pageTitle: "Capital Gains Tax Calculator",
    result,
    form: req.body
  });
});

// ── SALES TAX ─────────────────────────────────────────────────────────────────
app.get("/sales-tax-calculator", (req, res) => {
  res.render("sales-tax-calculator", {
    pageTitle: "Sales Tax Calculator",
    result: null,
    form: {}
  });
});

app.post("/sales-tax-calculator", (req, res) => {
  const result = calculateSalesTax(req.body);
  res.render("sales-tax-calculator", {
    pageTitle: "Sales Tax Calculator",
    result,
    form: req.body
  });
});

// ── PAYROLL TAX ───────────────────────────────────────────────────────────────
app.get("/payroll-tax-calculator", (req, res) => {
  res.render("payroll-tax-calculator", {
    pageTitle: "Payroll Tax Calculator",
    result: null,
    form: {}
  });
});

app.post("/payroll-tax-calculator", (req, res) => {
  const result = calculatePayrollTax(req.body);
  res.render("payroll-tax-calculator", {
    pageTitle: "Payroll Tax Calculator",
    result,
    form: req.body
  });
});

// ── TAX REFUND ────────────────────────────────────────────────────────────────
app.get("/tax-refund-calculator", (req, res) => {
  res.render("tax-refund-calculator", {
    pageTitle: "Tax Refund Calculator",
    result: null,
    form: {}
  });
});

app.post("/tax-refund-calculator", (req, res) => {
  const result = calculateTaxRefund(req.body);
  res.render("tax-refund-calculator", {
    pageTitle: "Tax Refund Calculator",
    result,
    form: req.body
  });
});

// ── SEO GUIDES: TAX BRACKETS ──────────────────────────────────────────────────
app.get("/tax-brackets-2025", (req, res) => {
  res.render("tax-brackets-2025", {
    pageTitle: "2025 Federal Income Tax Brackets: Every Rate and Threshold"
  });
});

app.get("/tax-brackets-2026", (req, res) => {
  res.render("tax-brackets-2026", {
    pageTitle: "2026 Tax Brackets: Projected Federal Income Tax Thresholds"
  });
});

// ── SEO GUIDES: STANDARD DEDUCTION ───────────────────────────────────────────
app.get("/standard-deduction-2025", (req, res) => {
  res.render("standard-deduction-2025", {
    pageTitle: "Standard Deduction 2025: Amounts, Rules, and How It Works"
  });
});

app.get("/standard-deduction-2026", (req, res) => {
  res.render("standard-deduction-2026", {
    pageTitle: "Standard Deduction 2026: Projected Amounts by Filing Status"
  });
});

app.get("/standard-deduction-vs-itemized", (req, res) => {
  res.render("standard-deduction-vs-itemized", {
    pageTitle: "Standard Deduction vs Itemized Deductions: Which Saves More?"
  });
});

// ── SEO GUIDES: CAPITAL GAINS ─────────────────────────────────────────────────
app.get("/capital-gains-tax-rates-2025", (req, res) => {
  res.render("capital-gains-tax-rates-2025", {
    pageTitle: "Capital Gains Tax Rates 2025: Long-Term, Short-Term, and NIIT"
  });
});

app.get("/capital-gains-tax-rates-2026", (req, res) => {
  res.render("capital-gains-tax-rates-2026", {
    pageTitle: "Capital Gains Tax Rates 2026: Projected Rates and Thresholds"
  });
});

// ── SEO GUIDES: FICA AND SELF-EMPLOYMENT ──────────────────────────────────────
app.get("/fica-tax-rate-2025", (req, res) => {
  res.render("fica-tax-rate-2025", {
    pageTitle: "FICA Tax Rate 2025: Social Security and Medicare Rates"
  });
});

app.get("/self-employment-tax-rate-2025", (req, res) => {
  res.render("self-employment-tax-rate-2025", {
    pageTitle: "Self-Employment Tax Rate 2025: 15.3% Explained"
  });
});

// ── SEO GUIDES: PAYMENTS AND DEADLINES ───────────────────────────────────────
app.get("/quarterly-estimated-taxes", (req, res) => {
  res.render("quarterly-estimated-taxes", {
    pageTitle: "Quarterly Estimated Taxes: Due Dates, Rules, and How to Pay"
  });
});

app.get("/tax-filing-deadline-2026", (req, res) => {
  res.render("tax-filing-deadline-2026", {
    pageTitle: "Tax Filing Deadline 2026: All Key Dates Explained"
  });
});

// ── SEO GUIDES: INCOME AND EMPLOYMENT ────────────────────────────────────────
app.get("/w2-vs-1099", (req, res) => {
  res.render("w2-vs-1099", {
    pageTitle: "W-2 vs 1099: Tax Differences Explained"
  });
});

// ── SEO GUIDES: INVESTMENT AND RETIREMENT ────────────────────────────────────
app.get("/roth-ira-conversion-tax", (req, res) => {
  res.render("roth-ira-conversion-tax", {
    pageTitle: "Roth IRA Conversion Tax: How It Works and When to Convert"
  });
});

// ── SEO GUIDES: CREDITS ───────────────────────────────────────────────────────
app.get("/child-tax-credit-2025", (req, res) => {
  res.render("child-tax-credit-2025", {
    pageTitle: "Child Tax Credit 2025: Amount, Rules, and Who Qualifies"
  });
});

// ── STATIC PAGES ──────────────────────────────────────────────────────────────
app.get("/privacy-policy", (req, res) => {
  res.render("privacy-policy", { pageTitle: "Privacy Policy" });
});

app.get("/terms", (req, res) => {
  res.render("terms", { pageTitle: "Terms of Use" });
});

app.get("/disclaimer", (req, res) => {
  res.render("disclaimer", { pageTitle: "Tax Disclaimer" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { pageTitle: "Contact" });
});

app.get("/about", (req, res) => {
  res.render("about", { pageTitle: "About MyTaxCalcs" });
});

// ── SITEMAP ───────────────────────────────────────────────────────────────────
app.get("/sitemap.xml", (req, res) => {
  const baseUrl = "https://mytaxcalcs.com";

  const staticPages = [
    { path: "",                                priority: "1.0", freq: "weekly"  },
    { path: "/calculators",                    priority: "0.9", freq: "monthly" },
    { path: "/income-tax-calculator",          priority: "0.9", freq: "monthly" },
    { path: "/tax-refund-calculator",          priority: "0.9", freq: "monthly" },
    { path: "/self-employment-tax-calculator", priority: "0.8", freq: "monthly" },
    { path: "/capital-gains-tax-calculator",   priority: "0.8", freq: "monthly" },
    { path: "/sales-tax-calculator",           priority: "0.8", freq: "monthly" },
    { path: "/payroll-tax-calculator",         priority: "0.8", freq: "monthly" },
    { path: "/tax-brackets-2025",              priority: "0.9", freq: "monthly" },
    { path: "/tax-brackets-2026",              priority: "0.8", freq: "monthly" },
    { path: "/standard-deduction-2025",        priority: "0.9", freq: "monthly" },
    { path: "/standard-deduction-2026",        priority: "0.8", freq: "monthly" },
    { path: "/standard-deduction-vs-itemized", priority: "0.8", freq: "yearly"  },
    { path: "/capital-gains-tax-rates-2025",   priority: "0.8", freq: "monthly" },
    { path: "/capital-gains-tax-rates-2026",   priority: "0.8", freq: "monthly" },
    { path: "/fica-tax-rate-2025",             priority: "0.8", freq: "monthly" },
    { path: "/self-employment-tax-rate-2025",  priority: "0.8", freq: "monthly" },
    { path: "/quarterly-estimated-taxes",      priority: "0.8", freq: "monthly" },
    { path: "/tax-filing-deadline-2026",       priority: "0.9", freq: "monthly" },
    { path: "/w2-vs-1099",                     priority: "0.8", freq: "yearly"  },
    { path: "/roth-ira-conversion-tax",        priority: "0.8", freq: "yearly"  },
    { path: "/child-tax-credit-2025",          priority: "0.8", freq: "monthly" },
    { path: "/about",                          priority: "0.5", freq: "monthly" },
    { path: "/contact",                        priority: "0.5", freq: "monthly" },
    { path: "/privacy-policy",                 priority: "0.3", freq: "yearly"  },
    { path: "/terms",                          priority: "0.3", freq: "yearly"  },
    { path: "/disclaimer",                     priority: "0.3", freq: "yearly"  },
  ];

  const stateUrls = states.map((s) => ({
    path: `/${s.slug}-income-tax-calculator`,
    priority: "0.7",
    freq: "monthly"
  }));

  const allUrls = [...staticPages, ...stateUrls];

  const urls = allUrls
    .map((page) => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <changefreq>${page.freq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`)
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.header("Content-Type", "application/xml");
  res.send(xml);
});

// ── ADS.TXT ───────────────────────────────────────────────────────────────────
app.get("/ads.txt", (req, res) => {
  res.header("Content-Type", "text/plain");
  res.send("google.com, pub-5193834725888549, DIRECT, f08c47fec0942fa0");
});

// ── START ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`MyTaxCalcs running at http://localhost:${PORT}`);
});
