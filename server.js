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
app.use((req, res, next) => {
  res.locals.canonical = `https://mytaxcalcs.com${req.path === '/' ? '' : req.path}`;
  next();
});

// ── HOME ──────────────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "MyTaxCalcs - Free Tax Calculators",
    metaDescription: "Free U.S. tax calculators for income tax, state income tax, sales tax, self-employment tax, and capital gains tax. Estimate your 2025 federal tax instantly.",
    ogTitle: "MyTaxCalcs - Free U.S. Tax Calculators",
    ogDescription: "Free calculators for federal income tax, state tax, sales tax, self-employment tax, and capital gains planning.",
    states
  });
});

// ── CALCULATOR HUB ────────────────────────────────────────────────────────────
app.get("/calculators", (req, res) => {
  res.render("calculators", {
    pageTitle: "Tax Calculators | MyTaxCalcs",
    metaDescription: "Browse all free U.S. tax calculators: income tax, self-employment, capital gains, sales tax, payroll, and refund estimators.",
    ogTitle: "Free Tax Calculators | MyTaxCalcs",
    ogDescription: "Browse all free U.S. tax calculators: income, self-employment, capital gains, sales tax, payroll, and refund.",
    states
  });
});

// ── STATES HUB ───────────────────────────────────────────────────────────────
app.get("/states", (req, res) => {
  res.render("states", {
    pageTitle: "State Income Tax Calculators for All 50 States | MyTaxCalcs",
    metaDescription: "Free state income tax calculators for all 50 U.S. states. Estimate your 2025 federal income tax and review state-specific tax rates and rules.",
    ogTitle: "State Income Tax Calculators - All 50 States | MyTaxCalcs",
    ogDescription: "Free income tax calculators for all 50 states. Estimate federal tax and review state income tax rates for 2025.",
    states
  });
});

// ── INCOME TAX ────────────────────────────────────────────────────────────────
app.get("/income-tax-calculator", (req, res) => {
  res.render("income-tax-calculator", {
    pageTitle: "Free Income Tax Calculator 2025 | MyTaxCalcs",
    metaDescription: "Free federal income tax calculator for 2025. Estimate taxable income, federal tax owed, refund or amount owed, effective tax rate, and marginal tax rate.",
    ogTitle: "Free Income Tax Calculator 2025 | MyTaxCalcs",
    ogDescription: "Estimate your 2025 federal income tax, taxable income, refund, effective tax rate, and marginal tax rate for free.",
    states,
    result: null,
    form: {}
  });
});

app.post("/income-tax-calculator", (req, res) => {
  const result = calculateFederalIncomeTax(req.body);
  res.render("income-tax-calculator", {
    pageTitle: "Free Income Tax Calculator 2025 | MyTaxCalcs",
    metaDescription: "Free federal income tax calculator for 2025. Estimate taxable income, federal tax owed, refund or amount owed, effective tax rate, and marginal tax rate.",
    ogTitle: "Free Income Tax Calculator 2025 | MyTaxCalcs",
    ogDescription: "Estimate your 2025 federal income tax, taxable income, refund, effective tax rate, and marginal tax rate for free.",
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
  const stateTaxNote = state.hasIncomeTax
    ? `State income tax rate range: ${state.brackets}.`
    : `${state.name} has no broad-based state income tax.`;
  res.render("state-income-tax-calculator", {
    pageTitle: `${state.name} Income Tax Calculator 2025 | MyTaxCalcs`,
    metaDescription: `Free ${state.name} income tax calculator for 2025. ${stateTaxNote} Estimate your federal income tax instantly.`,
    ogTitle: `${state.name} Income Tax Calculator 2025 | MyTaxCalcs`,
    ogDescription: `Free ${state.name} income tax calculator. Estimate your 2025 federal income tax and review state tax information.`,
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
  const stateTaxNote = state.hasIncomeTax
    ? `State income tax rate range: ${state.brackets}.`
    : `${state.name} has no broad-based state income tax.`;
  const result = calculateFederalIncomeTax(req.body);
  res.render("state-income-tax-calculator", {
    pageTitle: `${state.name} Income Tax Calculator 2025 | MyTaxCalcs`,
    metaDescription: `Free ${state.name} income tax calculator for 2025. ${stateTaxNote} Estimate your federal income tax instantly.`,
    ogTitle: `${state.name} Income Tax Calculator 2025 | MyTaxCalcs`,
    ogDescription: `Free ${state.name} income tax calculator. Estimate your 2025 federal income tax and review state tax information.`,
    state,
    states,
    result,
    form: req.body
  });
});

// ── SELF-EMPLOYMENT TAX ───────────────────────────────────────────────────────
app.get("/self-employment-tax-calculator", (req, res) => {
  res.render("self-employment-tax-calculator", {
    pageTitle: "Self-Employment Tax Calculator 2025 | MyTaxCalcs",
    metaDescription: "Free self-employment tax calculator for 2025. Estimate Social Security and Medicare taxes for freelancers, contractors, and gig workers.",
    ogTitle: "Self-Employment Tax Calculator 2025 | MyTaxCalcs",
    ogDescription: "Estimate your 2025 self-employment tax — Social Security and Medicare — for freelance and contractor income.",
    result: null,
    form: {}
  });
});

app.post("/self-employment-tax-calculator", (req, res) => {
  const result = calculateSelfEmploymentTax(req.body);
  res.render("self-employment-tax-calculator", {
    pageTitle: "Self-Employment Tax Calculator 2025 | MyTaxCalcs",
    metaDescription: "Free self-employment tax calculator for 2025. Estimate Social Security and Medicare taxes for freelancers, contractors, and gig workers.",
    ogTitle: "Self-Employment Tax Calculator 2025 | MyTaxCalcs",
    ogDescription: "Estimate your 2025 self-employment tax — Social Security and Medicare — for freelance and contractor income.",
    result,
    form: req.body
  });
});

// ── CAPITAL GAINS TAX ─────────────────────────────────────────────────────────
app.get("/capital-gains-tax-calculator", (req, res) => {
  res.render("capital-gains-tax-calculator", {
    pageTitle: "Capital Gains Tax Calculator 2025 | MyTaxCalcs",
    metaDescription: "Free capital gains tax calculator for 2025. Estimate short-term and long-term tax on stocks, crypto, real estate, and other asset sales.",
    ogTitle: "Capital Gains Tax Calculator 2025 | MyTaxCalcs",
    ogDescription: "Estimate short-term and long-term capital gains tax on stocks, crypto, and real estate for 2025.",
    result: null,
    form: {}
  });
});

app.post("/capital-gains-tax-calculator", (req, res) => {
  const result = calculateCapitalGainsTax(req.body);
  res.render("capital-gains-tax-calculator", {
    pageTitle: "Capital Gains Tax Calculator 2025 | MyTaxCalcs",
    metaDescription: "Free capital gains tax calculator for 2025. Estimate short-term and long-term tax on stocks, crypto, real estate, and other asset sales.",
    ogTitle: "Capital Gains Tax Calculator 2025 | MyTaxCalcs",
    ogDescription: "Estimate short-term and long-term capital gains tax on stocks, crypto, and real estate for 2025.",
    result,
    form: req.body
  });
});

// ── SALES TAX ─────────────────────────────────────────────────────────────────
app.get("/sales-tax-calculator", (req, res) => {
  res.render("sales-tax-calculator", {
    pageTitle: "Sales Tax Calculator | MyTaxCalcs",
    metaDescription: "Free sales tax calculator. Estimate sales tax, combined tax rate, discount amount, and final purchase total for any U.S. state.",
    ogTitle: "Sales Tax Calculator | MyTaxCalcs",
    ogDescription: "Estimate sales tax and final purchase total for any U.S. state. Free and instant.",
    result: null,
    form: {}
  });
});

app.post("/sales-tax-calculator", (req, res) => {
  const result = calculateSalesTax(req.body);
  res.render("sales-tax-calculator", {
    pageTitle: "Sales Tax Calculator | MyTaxCalcs",
    metaDescription: "Free sales tax calculator. Estimate sales tax, combined tax rate, discount amount, and final purchase total for any U.S. state.",
    ogTitle: "Sales Tax Calculator | MyTaxCalcs",
    ogDescription: "Estimate sales tax and final purchase total for any U.S. state. Free and instant.",
    result,
    form: req.body
  });
});

// ── PAYROLL TAX ───────────────────────────────────────────────────────────────
app.get("/payroll-tax-calculator", (req, res) => {
  res.render("payroll-tax-calculator", {
    pageTitle: "Payroll Tax Calculator 2025 | MyTaxCalcs",
    metaDescription: "Free payroll tax calculator for 2025. Estimate paycheck withholding, Social Security, Medicare, state withholding, and net take-home pay.",
    ogTitle: "Payroll Tax Calculator 2025 | MyTaxCalcs",
    ogDescription: "Estimate paycheck withholding, FICA taxes, and net take-home pay for 2025.",
    result: null,
    form: {}
  });
});

app.post("/payroll-tax-calculator", (req, res) => {
  const result = calculatePayrollTax(req.body);
  res.render("payroll-tax-calculator", {
    pageTitle: "Payroll Tax Calculator 2025 | MyTaxCalcs",
    metaDescription: "Free payroll tax calculator for 2025. Estimate paycheck withholding, Social Security, Medicare, state withholding, and net take-home pay.",
    ogTitle: "Payroll Tax Calculator 2025 | MyTaxCalcs",
    ogDescription: "Estimate paycheck withholding, FICA taxes, and net take-home pay for 2025.",
    result,
    form: req.body
  });
});

// ── TAX REFUND ────────────────────────────────────────────────────────────────
app.get("/tax-refund-calculator", (req, res) => {
  res.render("tax-refund-calculator", {
    pageTitle: "Tax Refund Calculator 2025 | MyTaxCalcs",
    metaDescription: "Free tax refund calculator for 2025. Estimate your federal refund or amount owed using income, deductions, credits, and withholding.",
    ogTitle: "Tax Refund Calculator 2025 | MyTaxCalcs",
    ogDescription: "Estimate your 2025 federal tax refund or balance owed based on income, deductions, and withholding.",
    result: null,
    form: {}
  });
});

app.post("/tax-refund-calculator", (req, res) => {
  const result = calculateTaxRefund(req.body);
  res.render("tax-refund-calculator", {
    pageTitle: "Tax Refund Calculator 2025 | MyTaxCalcs",
    metaDescription: "Free tax refund calculator for 2025. Estimate your federal refund or amount owed using income, deductions, credits, and withholding.",
    ogTitle: "Tax Refund Calculator 2025 | MyTaxCalcs",
    ogDescription: "Estimate your 2025 federal tax refund or balance owed based on income, deductions, and withholding.",
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

app.get("/401k-contribution-limits-2025", (req, res) => {
  res.render("401k-contribution-limits-2025", {
    pageTitle: "401(k) Contribution Limits 2025: Employee and Employer Limits"
  });
});

app.get("/hsa-contribution-limits-2025", (req, res) => {
  res.render("hsa-contribution-limits-2025", {
    pageTitle: "HSA Contribution Limits 2025: Rules, Tax Benefits, and How It Works"
  });
});

// ── SEO GUIDES: CREDITS ───────────────────────────────────────────────────────
app.get("/child-tax-credit-2025", (req, res) => {
  res.render("child-tax-credit-2025", {
    pageTitle: "Child Tax Credit 2025: Amount, Rules, and Who Qualifies"
  });
});

// ── SEO GUIDES: TAX CONCEPTS ─────────────────────────────────────────────────
app.get("/marginal-vs-effective-tax-rate", (req, res) => {
  res.render("marginal-vs-effective-tax-rate", {
    pageTitle: "Marginal vs Effective Tax Rate: What's the Difference?"
  });
});

app.get("/bonus-tax-rate-2025", (req, res) => {
  res.render("bonus-tax-rate-2025", {
    pageTitle: "Bonus Tax Rate 2025: How Bonuses Are Taxed and What to Expect"
  });
});

// ── SEO GUIDES: TAX HELP ──────────────────────────────────────────────────────
app.get("/irs-payment-plan-guide", (req, res) => {
  res.render("irs-payment-plan-guide", {
    pageTitle: "IRS Payment Plan: How to Set Up an Installment Agreement in 2025"
  });
});

app.get("/tax-extension-2026", (req, res) => {
  res.render("tax-extension-2026", {
    pageTitle: "Tax Extension 2026: How to File for an Extension and What It Means"
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

  const guidePages = [
    { path: "",                                 priority: "1.0", freq: "weekly"  },
    { path: "/calculators",                     priority: "0.9", freq: "monthly" },
    { path: "/income-tax-calculator",           priority: "0.9", freq: "monthly" },
    { path: "/tax-refund-calculator",           priority: "0.9", freq: "monthly" },
    { path: "/self-employment-tax-calculator",  priority: "0.8", freq: "monthly" },
    { path: "/capital-gains-tax-calculator",    priority: "0.8", freq: "monthly" },
    { path: "/sales-tax-calculator",            priority: "0.8", freq: "monthly" },
    { path: "/payroll-tax-calculator",          priority: "0.8", freq: "monthly" },
    // Tax brackets
    { path: "/tax-brackets-2025",               priority: "0.9", freq: "monthly" },
    { path: "/tax-brackets-2026",               priority: "0.8", freq: "monthly" },
    // Standard deduction
    { path: "/standard-deduction-2025",         priority: "0.9", freq: "monthly" },
    { path: "/standard-deduction-2026",         priority: "0.8", freq: "monthly" },
    { path: "/standard-deduction-vs-itemized",  priority: "0.8", freq: "yearly"  },
    // Capital gains
    { path: "/capital-gains-tax-rates-2025",    priority: "0.8", freq: "monthly" },
    { path: "/capital-gains-tax-rates-2026",    priority: "0.8", freq: "monthly" },
    // FICA and self-employment
    { path: "/fica-tax-rate-2025",              priority: "0.8", freq: "monthly" },
    { path: "/self-employment-tax-rate-2025",   priority: "0.8", freq: "monthly" },
    // Payments and deadlines
    { path: "/quarterly-estimated-taxes",       priority: "0.8", freq: "monthly" },
    { path: "/tax-filing-deadline-2026",        priority: "0.9", freq: "monthly" },
    { path: "/tax-extension-2026",              priority: "0.9", freq: "monthly" },
    // Income and employment
    { path: "/w2-vs-1099",                      priority: "0.8", freq: "yearly"  },
    { path: "/bonus-tax-rate-2025",             priority: "0.8", freq: "monthly" },
    // Investment and retirement
    { path: "/roth-ira-conversion-tax",         priority: "0.8", freq: "yearly"  },
    { path: "/401k-contribution-limits-2025",   priority: "0.8", freq: "monthly" },
    { path: "/hsa-contribution-limits-2025",    priority: "0.8", freq: "monthly" },
    // Credits
    { path: "/child-tax-credit-2025",           priority: "0.8", freq: "monthly" },
    // Tax concepts
    { path: "/marginal-vs-effective-tax-rate",  priority: "0.8", freq: "yearly"  },
    // Tax help
    { path: "/irs-payment-plan-guide",          priority: "0.8", freq: "monthly" },
    // Static
    { path: "/states",                           priority: "0.9", freq: "monthly" },
    { path: "/about",                           priority: "0.5", freq: "monthly" },
    { path: "/contact",                         priority: "0.5", freq: "monthly" },
    { path: "/privacy-policy",                  priority: "0.3", freq: "yearly"  },
    { path: "/terms",                           priority: "0.3", freq: "yearly"  },
    { path: "/disclaimer",                      priority: "0.3", freq: "yearly"  },
  ];

  const stateUrls = states.map((s) => ({
    path: `/${s.slug}-income-tax-calculator`,
    priority: "0.7",
    freq: "monthly"
  }));

  const allUrls = [...guidePages, ...stateUrls];
  const today = new Date().toISOString().split('T')[0];
  const urls = allUrls
    .map((page) => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${today}</lastmod>
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
