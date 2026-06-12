const express = require("express");
const path = require("path");
require("dotenv").config();

const states = require("./data/states");
const blogPosts = require("./data/blogPosts");
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

// ── CANONICAL REDIRECT (must be before static files) ──────────────────────────
app.use((req, res, next) => {
  const host = req.headers['x-forwarded-host'] || req.headers.host || '';
  const proto = req.headers['x-forwarded-proto'] || req.protocol;
  const cleanHost = host.split(':')[0] || ''; // strip port if present

  const needsHttps = proto !== 'https';
  const needsNonWww = cleanHost.startsWith('www.');

  if (process.env.NODE_ENV === 'production' && (needsHttps || needsNonWww)) {
    return res.redirect(301, `https://mytaxcalcs.com${req.url}`);
  }
  next();
});

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
    states,
    posts: blogPosts
  });
});

// ── CALCULATOR HUB ────────────────────────────────────────────────────────────
app.get("/calculators", (req, res) => {
  res.render("calculators", {
    pageTitle: "Free Tax Calculators",
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
  const metaDesc = state.hasIncomeTax
    ? `Free ${state.name} income tax calculator for 2025. ${state.name} taxes income at ${state.brackets}. Estimate your federal and state tax instantly.`
    : `Free ${state.name} income tax calculator for 2025. ${state.name} has no state income tax. Estimate your federal income tax instantly.`;
  const ogDesc = state.hasIncomeTax
    ? `${state.name} state income tax rates: ${state.brackets}. Estimate your 2025 federal and ${state.name} income tax free.`
    : `${state.name} has no state income tax. Estimate your 2025 federal income tax with our free calculator.`;
  res.render("state-income-tax-calculator", {
    pageTitle: `${state.name} Income Tax Calculator 2025 | MyTaxCalcs`,
    metaDescription: metaDesc,
    ogTitle: `${state.name} Income Tax Calculator 2025 | MyTaxCalcs`,
    ogDescription: ogDesc,
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
  const metaDesc = state.hasIncomeTax
    ? `Free ${state.name} income tax calculator for 2025. ${state.name} taxes income at ${state.brackets}. Estimate your federal and state tax instantly.`
    : `Free ${state.name} income tax calculator for 2025. ${state.name} has no state income tax. Estimate your federal income tax instantly.`;
  const ogDesc = state.hasIncomeTax
    ? `${state.name} state income tax rates: ${state.brackets}. Estimate your 2025 federal and ${state.name} income tax free.`
    : `${state.name} has no state income tax. Estimate your 2025 federal income tax with our free calculator.`;
  const result = calculateFederalIncomeTax(req.body);
  res.render("state-income-tax-calculator", {
    pageTitle: `${state.name} Income Tax Calculator 2025 | MyTaxCalcs`,
    metaDescription: metaDesc,
    ogTitle: `${state.name} Income Tax Calculator 2025 | MyTaxCalcs`,
    ogDescription: ogDesc,
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
    pageTitle: "2025 Federal Income Tax Brackets: Every Rate and Threshold",
    metaDescription: "2025 federal income tax brackets for all filing statuses. All 7 tax rates and income thresholds, sourced from IRS Revenue Procedure 2024-40.",
    ogTitle: "2025 Federal Income Tax Brackets | MyTaxCalcs",
    ogDescription: "All 7 federal tax rates and income thresholds for 2025 by filing status."
  });
});

app.get("/tax-brackets-2026", (req, res) => {
  res.render("tax-brackets-2026", {
    pageTitle: "2026 Tax Brackets: Projected Federal Income Tax Thresholds",
    metaDescription: "Projected 2026 federal income tax brackets and thresholds by filing status. Plan ahead with estimated inflation-adjusted rates.",
    ogTitle: "2026 Tax Brackets: Projected Thresholds | MyTaxCalcs",
    ogDescription: "Projected 2026 federal income tax brackets and thresholds for all filing statuses."
  });
});

// ── SEO GUIDES: STANDARD DEDUCTION ───────────────────────────────────────────
app.get("/standard-deduction-2025", (req, res) => {
  res.render("standard-deduction-2025", {
    pageTitle: "Standard Deduction 2025: Amounts, Rules, and How It Works",
    metaDescription: "2025 standard deduction amounts by filing status. $15,000 for single filers, $30,000 for married filing jointly. Learn who qualifies and when to itemize.",
    ogTitle: "Standard Deduction 2025: Amounts & Rules | MyTaxCalcs",
    ogDescription: "Official 2025 standard deduction amounts by filing status and who qualifies."
  });
});

app.get("/standard-deduction-2026", (req, res) => {
  res.render("standard-deduction-2026", {
    pageTitle: "Standard Deduction 2026: Projected Amounts by Filing Status",
    metaDescription: "Projected 2026 standard deduction amounts by filing status. Plan ahead with estimated inflation-adjusted figures for next tax year.",
    ogTitle: "Standard Deduction 2026: Projected Amounts | MyTaxCalcs",
    ogDescription: "Projected 2026 standard deduction amounts by filing status for forward tax planning."
  });
});

app.get("/standard-deduction-vs-itemized", (req, res) => {
  res.render("standard-deduction-vs-itemized", {
    pageTitle: "Standard Deduction vs Itemized Deductions: Which Saves More?",
    metaDescription: "Standard deduction vs itemized deductions explained. Learn which method lowers your tax bill more and when it makes sense to switch.",
    ogTitle: "Standard vs Itemized Deductions | MyTaxCalcs",
    ogDescription: "Find out whether the standard deduction or itemizing saves you more on your federal taxes."
  });
});

// ── SEO GUIDES: CAPITAL GAINS ─────────────────────────────────────────────────
app.get("/capital-gains-tax-rates-2025", (req, res) => {
  res.render("capital-gains-tax-rates-2025", {
    pageTitle: "Capital Gains Tax Rates 2025: Long-Term, Short-Term, and NIIT",
    metaDescription: "2025 capital gains tax rates for long-term and short-term gains. Includes NIIT thresholds and income breakpoints by filing status.",
    ogTitle: "Capital Gains Tax Rates 2025 | MyTaxCalcs",
    ogDescription: "Long-term and short-term capital gains tax rates for 2025, including NIIT thresholds."
  });
});

app.get("/capital-gains-tax-rates-2026", (req, res) => {
  res.render("capital-gains-tax-rates-2026", {
    pageTitle: "Capital Gains Tax Rates 2026: Projected Rates and Thresholds",
    metaDescription: "Projected 2026 capital gains tax rates for long-term and short-term gains. Estimated income thresholds by filing status.",
    ogTitle: "Capital Gains Tax Rates 2026: Projected | MyTaxCalcs",
    ogDescription: "Projected 2026 long-term and short-term capital gains tax rates by filing status."
  });
});

// ── SEO GUIDES: FICA AND SELF-EMPLOYMENT ──────────────────────────────────────
app.get("/fica-tax-rate-2025", (req, res) => {
  res.render("fica-tax-rate-2025", {
    pageTitle: "FICA Tax Rate 2025: Social Security and Medicare Rates",
    metaDescription: "2025 FICA tax rates: 6.2% Social Security and 1.45% Medicare for employees. Learn about wage bases, employer matching, and the additional Medicare surtax.",
    ogTitle: "FICA Tax Rate 2025: SS & Medicare Rates | MyTaxCalcs",
    ogDescription: "2025 FICA tax rates for Social Security and Medicare, including wage base limits."
  });
});

app.get("/self-employment-tax-rate-2025", (req, res) => {
  res.render("self-employment-tax-rate-2025", {
    pageTitle: "Self-Employment Tax Rate 2025: 15.3% Explained",
    metaDescription: "How the 15.3% self-employment tax rate works in 2025. Covers Social Security, Medicare, the deductible half, and how to calculate what you owe.",
    ogTitle: "Self-Employment Tax Rate 2025: 15.3% Explained | MyTaxCalcs",
    ogDescription: "How the 15.3% self-employment tax works in 2025 and how to calculate your SE tax bill."
  });
});

// ── SEO GUIDES: PAYMENTS AND DEADLINES ───────────────────────────────────────
app.get("/quarterly-estimated-taxes", (req, res) => {
  res.render("quarterly-estimated-taxes", {
    pageTitle: "Quarterly Estimated Taxes: Due Dates, Rules, and How to Pay",
    metaDescription: "Quarterly estimated tax payment guide for 2025. Covers due dates, safe harbor rules, how to calculate payments, and how to pay the IRS.",
    ogTitle: "Quarterly Estimated Taxes: Due Dates & Rules | MyTaxCalcs",
    ogDescription: "2025 quarterly estimated tax due dates, safe harbor rules, and how to pay the IRS."
  });
});

app.get("/tax-filing-deadline-2026", (req, res) => {
  res.render("tax-filing-deadline-2026", {
    pageTitle: "Tax Filing Deadline 2026: All Key Dates Explained",
    metaDescription: "2026 tax filing deadline is April 15, 2026. Learn about the October 15 extension deadline, estimated tax due dates, and all key IRS dates for 2026.",
    ogTitle: "Tax Filing Deadline 2026: Key Dates | MyTaxCalcs",
    ogDescription: "All key 2026 tax filing deadlines including April 15 original and October 15 extension dates."
  });
});

// ── SEO GUIDES: INCOME AND EMPLOYMENT ────────────────────────────────────────
app.get("/w2-vs-1099", (req, res) => {
  res.render("w2-vs-1099", {
    pageTitle: "W-2 vs 1099: Tax Differences Explained",
    metaDescription: "W-2 vs 1099 tax differences explained. Learn how employee vs contractor status affects withholding, self-employment tax, deductions, and benefits.",
    ogTitle: "W-2 vs 1099: Tax Differences Explained | MyTaxCalcs",
    ogDescription: "How W-2 employee and 1099 contractor status differ for taxes, withholding, and deductions."
  });
});

// ── SEO GUIDES: INVESTMENT AND RETIREMENT ────────────────────────────────────
app.get("/roth-ira-conversion-tax", (req, res) => {
  res.render("roth-ira-conversion-tax", {
    pageTitle: "Roth IRA Conversion Tax: How It Works and When to Convert",
    metaDescription: "How Roth IRA conversions are taxed and when it makes sense to convert. Covers tax treatment, income thresholds, and strategies to minimize the tax hit.",
    ogTitle: "Roth IRA Conversion Tax: How It Works | MyTaxCalcs",
    ogDescription: "How Roth IRA conversions are taxed and the best strategies for deciding when to convert."
  });
});

app.get("/401k-contribution-limits-2025", (req, res) => {
  res.render("401k-contribution-limits-2025", {
    pageTitle: "401(k) Contribution Limits 2025: Employee and Employer Limits",
    metaDescription: "2025 401(k) contribution limits: $23,500 employee limit, $70,000 total limit, $31,000 catch-up limit for ages 50+. Includes Roth 401(k) and employer match rules.",
    ogTitle: "401(k) Contribution Limits 2025 | MyTaxCalcs",
    ogDescription: "2025 401(k) contribution limits for employees and employers, including catch-up rules."
  });
});

app.get("/hsa-contribution-limits-2025", (req, res) => {
  res.render("hsa-contribution-limits-2025", {
    pageTitle: "HSA Contribution Limits 2025: Rules, Tax Benefits, and How It Works",
    metaDescription: "2025 HSA contribution limits: $4,300 for self-only, $8,550 for family coverage. Learn about the triple tax advantage, HDHP requirements, and catch-up contributions.",
    ogTitle: "HSA Contribution Limits 2025 | MyTaxCalcs",
    ogDescription: "2025 HSA contribution limits, HDHP rules, and how the triple tax advantage works."
  });
});

// ── SEO GUIDES: CREDITS ───────────────────────────────────────────────────────
app.get("/child-tax-credit-2025", (req, res) => {
  res.render("child-tax-credit-2025", {
    pageTitle: "Child Tax Credit 2025: Amount, Rules, and Who Qualifies",
    metaDescription: "Child Tax Credit 2025: now permanent at $2,200 per qualifying child under the One Big Beautiful Bill Act. Learn income limits, refundable portion, and how to claim it.",
    ogTitle: "Child Tax Credit 2025: Amount & Rules | MyTaxCalcs",
    ogDescription: "Child Tax Credit is now permanent at $2,200 per child. Learn who qualifies and how to claim it."
  });
});

// ── SEO GUIDES: TAX CONCEPTS ─────────────────────────────────────────────────
app.get("/marginal-vs-effective-tax-rate", (req, res) => {
  res.render("marginal-vs-effective-tax-rate", {
    pageTitle: "Marginal vs Effective Tax Rate: What's the Difference?",
    metaDescription: "Marginal vs effective tax rate explained clearly. Learn what each rate means, how to calculate them, and which one to use when making financial decisions.",
    ogTitle: "Marginal vs Effective Tax Rate | MyTaxCalcs",
    ogDescription: "Clear explanation of marginal vs effective tax rate and when to use each one."
  });
});

app.get("/bonus-tax-rate-2025", (req, res) => {
  res.render("bonus-tax-rate-2025", {
    pageTitle: "Bonus Tax Rate 2025: How Bonuses Are Taxed and What to Expect",
    metaDescription: "How bonuses are taxed in 2025. The IRS flat withholding rate is 22% for most bonuses. Learn the aggregate method, supplemental wage rules, and strategies to reduce the hit.",
    ogTitle: "Bonus Tax Rate 2025: How Bonuses Are Taxed | MyTaxCalcs",
    ogDescription: "How the IRS taxes bonuses in 2025 and strategies to reduce bonus withholding."
  });
});


// ── SEO GUIDES: 2026 FICA, SE TAX, BONUS, CHILD CREDIT, HSA, 401K ────────────
app.get("/fica-tax-rate-2026", (req, res) => {
  res.render("fica-tax-rate-2026", {
    pageTitle: "FICA Tax Rate 2026: Social Security and Medicare Rates",
    metaDescription: "2026 FICA tax rates: Social Security 6.2% on wages up to an estimated $180,400. Medicare 1.45% on all wages. Self-employed pay 15.3%. Projected figures for planning.",
    ogTitle: "FICA Tax Rate 2026: SS & Medicare Rates | MyTaxCalcs",
    ogDescription: "Projected 2026 FICA tax rates for employees, employers, and self-employed. Social Security 6.2%, Medicare 1.45%, projected wage base ~$180,400."
  });
});

app.get("/self-employment-tax-rate-2026", (req, res) => {
  res.render("self-employment-tax-rate-2026", {
    pageTitle: "Self-Employment Tax Rate 2026: 15.3% Explained",
    metaDescription: "The 2026 self-employment tax rate is 15.3%: 12.4% Social Security on net earnings up to ~$180,400 and 2.9% Medicare on all earnings. Projected wage base — official SSA figure due October 2026.",
    ogTitle: "Self-Employment Tax Rate 2026 | MyTaxCalcs",
    ogDescription: "2026 SE tax rate is 15.3% on 92.35% of net earnings. Projected SS wage base ~$180,400."
  });
});

app.get("/bonus-tax-rate-2026", (req, res) => {
  res.render("bonus-tax-rate-2026", {
    pageTitle: "Bonus Tax Rate 2026: How Bonuses Are Taxed and What to Expect",
    metaDescription: "How bonuses are taxed in 2026. The IRS flat withholding rate is 22% for most bonuses. Learn the aggregate method, supplemental wage rules, and strategies to reduce the hit.",
    ogTitle: "Bonus Tax Rate 2026: How Bonuses Are Taxed | MyTaxCalcs",
    ogDescription: "How the IRS taxes bonuses in 2026. Flat rate 22% under $1M, 37% above."
  });
});

app.get("/child-tax-credit-2026", (req, res) => {
  res.render("child-tax-credit-2026", {
    pageTitle: "Child Tax Credit 2026: Amount, Rules, and Who Qualifies",
    metaDescription: "Child Tax Credit 2026: $2,200 per qualifying child under 17, permanent under the One Big Beautiful Bill Act. Learn income limits, refundable portion, and how to claim it.",
    ogTitle: "Child Tax Credit 2026: Amount & Rules | MyTaxCalcs",
    ogDescription: "Child Tax Credit 2026: $2,200 per child permanent under OBBBA. Phase-out at $200K single/$400K MFJ."
  });
});

app.get("/hsa-contribution-limits-2026", (req, res) => {
  res.render("hsa-contribution-limits-2026", {
    pageTitle: "HSA Contribution Limits 2026: Rules, Tax Benefits, and HDHP Requirements",
    metaDescription: "2026 HSA contribution limits: projected $4,400 for self-only and $8,750 for family coverage. Triple tax advantage, HDHP requirements, and catch-up rules explained.",
    ogTitle: "HSA Contribution Limits 2026 | MyTaxCalcs",
    ogDescription: "Projected 2026 HSA limits: $4,400 self-only, $8,750 family. Triple tax advantage explained."
  });
});

app.get("/401k-contribution-limits-2026", (req, res) => {
  res.render("401k-contribution-limits-2026", {
    pageTitle: "401(k) Contribution Limits 2026: Employee and Employer Limits",
    metaDescription: "2026 401(k) contribution limits: employee limit $23,500 unchanged. Total combined limit projected ~$71,000. SECURE 2.0 super catch-up $11,250 for ages 60-63.",
    ogTitle: "401(k) Contribution Limits 2026 | MyTaxCalcs",
    ogDescription: "2026 401(k) employee limit $23,500 unchanged. Combined ~$71,000. IRA $7,000."
  });
});

// ── SEO GUIDES: TAX HELP ──────────────────────────────────────────────────────
app.get("/irs-payment-plan-guide", (req, res) => {
  res.render("irs-payment-plan-guide", {
    pageTitle: "IRS Payment Plan: How to Set Up an Installment Agreement in 2025",
    metaDescription: "How to set up an IRS payment plan in 2025. Covers short-term and long-term installment agreements, eligibility, fees, and how to apply online.",
    ogTitle: "IRS Payment Plan Guide 2025 | MyTaxCalcs",
    ogDescription: "Step-by-step guide to setting up an IRS installment agreement to pay your tax bill over time."
  });
});

app.get("/tax-extension-2026", (req, res) => {
  res.render("tax-extension-2026", {
    pageTitle: "Tax Extension 2026: How to File for an Extension and What It Means",
    metaDescription: "How to file a 2026 tax extension using Form 4868. Extends your filing deadline to October 15 but not your payment deadline. Learn what to do and what to avoid.",
    ogTitle: "Tax Extension 2026: How to File | MyTaxCalcs",
    ogDescription: "How to file a 2026 tax extension with Form 4868 and what an extension does and doesn't cover."
  });
});

// ── BLOG HUB ──────────────────────────────────────────────────────────────────
app.get("/blog", (req, res) => {
  res.render("blog", {
    pageTitle: "Tax Blog: IRS News, Tax Law Changes & Guides | MyTaxCalcs",
    metaDescription: "Stay current with IRS announcements, inflation adjustments, tax law changes, and plain-language tax guides. All content sourced from official IRS publications.",
    ogTitle: "Tax Blog: IRS News & Tax Guides | MyTaxCalcs",
    ogDescription: "IRS announcements, tax law changes, and plain-language guides for 2025 and 2026. All sourced from official IRS publications.",
    posts: blogPosts
  });
});

// ── BLOG POSTS ────────────────────────────────────────────────────────────────
app.get("/blog/:slug", (req, res) => {
  const post = blogPosts.find((p) => p.slug === req.params.slug);
  if (!post) {
    return res.status(404).send("Blog post not found.");
  }
  res.render("blog-post", {
    pageTitle: `${post.title} | MyTaxCalcs`,
    metaDescription: post.metaDescription || post.excerpt,
    ogTitle: post.ogTitle || `${post.title} | MyTaxCalcs`,
    ogDescription: post.ogDescription || post.excerpt,
    post
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
    { path: "/tax-brackets-2025",               priority: "0.9", freq: "monthly" },
    { path: "/tax-brackets-2026",               priority: "0.8", freq: "monthly" },
    { path: "/standard-deduction-2025",         priority: "0.9", freq: "monthly" },
    { path: "/standard-deduction-2026",         priority: "0.8", freq: "monthly" },
    { path: "/standard-deduction-vs-itemized",  priority: "0.8", freq: "yearly"  },
    { path: "/capital-gains-tax-rates-2025",    priority: "0.8", freq: "monthly" },
    { path: "/capital-gains-tax-rates-2026",    priority: "0.8", freq: "monthly" },
    { path: "/fica-tax-rate-2025",              priority: "0.8", freq: "monthly" },
    { path: "/self-employment-tax-rate-2025",   priority: "0.8", freq: "monthly" },
    { path: "/quarterly-estimated-taxes",       priority: "0.8", freq: "monthly" },
    { path: "/tax-filing-deadline-2026",        priority: "0.9", freq: "monthly" },
    { path: "/tax-extension-2026",              priority: "0.9", freq: "monthly" },
    { path: "/w2-vs-1099",                      priority: "0.8", freq: "yearly"  },
    { path: "/bonus-tax-rate-2025",             priority: "0.8", freq: "monthly" },
    { path: "/fica-tax-rate-2026",              priority: "0.8", freq: "monthly" },
    { path: "/self-employment-tax-rate-2026",   priority: "0.8", freq: "monthly" },
    { path: "/bonus-tax-rate-2026",             priority: "0.8", freq: "monthly" },
    { path: "/child-tax-credit-2026",           priority: "0.8", freq: "monthly" },
    { path: "/hsa-contribution-limits-2026",    priority: "0.8", freq: "monthly" },
    { path: "/401k-contribution-limits-2026",   priority: "0.8", freq: "monthly" },
    { path: "/roth-ira-conversion-tax",         priority: "0.8", freq: "yearly"  },
    { path: "/401k-contribution-limits-2025",   priority: "0.8", freq: "monthly" },
    { path: "/hsa-contribution-limits-2025",    priority: "0.8", freq: "monthly" },
    { path: "/child-tax-credit-2025",           priority: "0.8", freq: "monthly" },
    { path: "/marginal-vs-effective-tax-rate",  priority: "0.8", freq: "yearly"  },
    { path: "/irs-payment-plan-guide",          priority: "0.8", freq: "monthly" },
    { path: "/states",                          priority: "0.9", freq: "monthly" },
    { path: "/blog",                            priority: "0.9", freq: "weekly"  },
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

  const blogUrls = blogPosts.map((p) => ({
    path: `/blog/${p.slug}`,
    priority: "0.8",
    freq: "monthly"
  }));

  const allUrls = [...guidePages, ...stateUrls, ...blogUrls];
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

// ── 404 ───────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

// ── START ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`MyTaxCalcs running at http://localhost:${PORT}`);
});
