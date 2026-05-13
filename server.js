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
  const host = req.headers['x-forwarded-host'] || req.headers.host || '';
  if (host.startsWith('www.')) {
    return res.redirect(301, 'https://mytaxcalcs.com' + req.url);
  }
  next();
});
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
    pageTitle: "2025 Federal Income Tax Brackets: Every Rate and Threshold",
    metaDescription: "2025 federal income tax brackets for all filing statuses. Single filers pay 10% up to $11,925, up to 37% above $626,350. See every bracket, rate, and threshold.",
    ogTitle: "2025 Federal Tax Brackets: Every Rate and Threshold | MyTaxCalcs",
    ogDescription: "Official 2025 federal income tax brackets for single, married jointly, head of household, and married separately filers."
  });
});

app.get("/tax-brackets-2026", (req, res) => {
  res.render("tax-brackets-2026", {
    pageTitle: "2026 Tax Brackets: Projected Federal Income Tax Thresholds",
    metaDescription: "Projected 2026 federal income tax brackets for all filing statuses. See estimated inflation-adjusted thresholds for single, married, and head of household filers.",
    ogTitle: "2026 Tax Brackets: Projected Rates and Thresholds | MyTaxCalcs",
    ogDescription: "Estimated 2026 federal income tax brackets adjusted for inflation. See projected thresholds for all filing statuses."
  });
});

// ── SEO GUIDES: STANDARD DEDUCTION ───────────────────────────────────────────
app.get("/standard-deduction-2025", (req, res) => {
  res.render("standard-deduction-2025", {
    pageTitle: "Standard Deduction 2025: Amounts, Rules, and How It Works",
    metaDescription: "2025 standard deduction amounts: $15,000 for single filers, $30,000 for married filing jointly, $22,500 for head of household. Learn how it reduces your taxable income.",
    ogTitle: "Standard Deduction 2025: Amounts by Filing Status | MyTaxCalcs",
    ogDescription: "2025 standard deduction is $15,000 single, $30,000 married jointly, $22,500 head of household. See how it reduces your taxable income."
  });
});

app.get("/standard-deduction-2026", (req, res) => {
  res.render("standard-deduction-2026", {
    pageTitle: "Standard Deduction 2026: Projected Amounts by Filing Status",
    metaDescription: "Projected 2026 standard deduction amounts by filing status. See estimated inflation adjustments for single, married filing jointly, and head of household filers.",
    ogTitle: "Standard Deduction 2026: Projected Amounts | MyTaxCalcs",
    ogDescription: "Estimated 2026 standard deduction amounts for all filing statuses, adjusted for inflation from 2025 figures."
  });
});

app.get("/standard-deduction-vs-itemized", (req, res) => {
  res.render("standard-deduction-vs-itemized", {
    pageTitle: "Standard Deduction vs Itemized Deductions: Which Saves More?",
    metaDescription: "Standard deduction vs itemized deductions: which reduces your tax bill more? Learn when each makes sense, what you can itemize, and how to decide for 2025.",
    ogTitle: "Standard vs Itemized Deductions: Which Saves More? | MyTaxCalcs",
    ogDescription: "Compare standard and itemized deductions for 2025. Learn when itemizing beats the standard deduction and what expenses qualify."
  });
});

// ── SEO GUIDES: CAPITAL GAINS ─────────────────────────────────────────────────
app.get("/capital-gains-tax-rates-2025", (req, res) => {
  res.render("capital-gains-tax-rates-2025", {
    pageTitle: "Capital Gains Tax Rates 2025: Long-Term, Short-Term, and NIIT",
    metaDescription: "2025 capital gains tax rates: 0%, 15%, or 20% for long-term gains depending on income. Short-term gains taxed as ordinary income. See all thresholds by filing status.",
    ogTitle: "Capital Gains Tax Rates 2025: All Rates and Thresholds | MyTaxCalcs",
    ogDescription: "2025 long-term capital gains rates are 0%, 15%, or 20% based on income. See thresholds for all filing statuses and the 3.8% NIIT."
  });
});

app.get("/capital-gains-tax-rates-2026", (req, res) => {
  res.render("capital-gains-tax-rates-2026", {
    pageTitle: "Capital Gains Tax Rates 2026: Projected Rates and Thresholds",
    metaDescription: "Projected 2026 capital gains tax rates and income thresholds. See estimated 0%, 15%, and 20% long-term rate cutoffs for all filing statuses.",
    ogTitle: "Capital Gains Tax Rates 2026: Projected Thresholds | MyTaxCalcs",
    ogDescription: "Estimated 2026 capital gains tax rate thresholds for long-term gains, adjusted for inflation from 2025."
  });
});

// ── SEO GUIDES: FICA AND SELF-EMPLOYMENT ──────────────────────────────────────
app.get("/fica-tax-rate-2025", (req, res) => {
  res.render("fica-tax-rate-2025", {
    pageTitle: "FICA Tax Rate 2025: Social Security and Medicare Rates",
    metaDescription: "2025 FICA tax rates: 6.2% Social Security (up to $176,100) and 1.45% Medicare. Self-employed pay 12.4% + 2.9%. Additional 0.9% Medicare surtax above $200,000.",
    ogTitle: "FICA Tax Rate 2025: Social Security and Medicare | MyTaxCalcs",
    ogDescription: "2025 FICA rates: 6.2% Social Security on wages up to $176,100 and 1.45% Medicare. See rates for employees and self-employed."
  });
});

app.get("/self-employment-tax-rate-2025", (req, res) => {
  res.render("self-employment-tax-rate-2025", {
    pageTitle: "Self-Employment Tax Rate 2025: 15.3% Explained",
    metaDescription: "The 2025 self-employment tax rate is 15.3%: 12.4% Social Security on net earnings up to $176,100 and 2.9% Medicare on all net earnings. Learn how to calculate and deduct it.",
    ogTitle: "Self-Employment Tax Rate 2025: 15.3% Explained | MyTaxCalcs",
    ogDescription: "2025 self-employment tax is 15.3% — 12.4% Social Security plus 2.9% Medicare. Learn how to calculate it and the deduction you can take."
  });
});

// ── SEO GUIDES: PAYMENTS AND DEADLINES ───────────────────────────────────────
app.get("/quarterly-estimated-taxes", (req, res) => {
  res.render("quarterly-estimated-taxes", {
    pageTitle: "Quarterly Estimated Taxes: Due Dates, Rules, and How to Pay",
    metaDescription: "Quarterly estimated tax due dates for 2025: April 15, June 16, September 15, January 15. Learn who must pay, how to calculate, and how to avoid underpayment penalties.",
    ogTitle: "Quarterly Estimated Taxes 2025: Due Dates and How to Pay | MyTaxCalcs",
    ogDescription: "2025 estimated tax deadlines: April 15, June 16, September 15, January 15. Learn who owes estimated taxes and how to calculate each payment."
  });
});

app.get("/tax-filing-deadline-2026", (req, res) => {
  res.render("tax-filing-deadline-2026", {
    pageTitle: "Tax Filing Deadline 2026: All Key Dates Explained",
    metaDescription: "The 2026 federal tax filing deadline is April 15, 2026. Learn about extension deadlines, estimated tax due dates, business filing dates, and state deadline differences.",
    ogTitle: "Tax Filing Deadline 2026: Key Dates and Extensions | MyTaxCalcs",
    ogDescription: "Federal tax filing deadline for 2026 is April 15. See all key dates including extensions, estimated payments, and business returns."
  });
});

// ── SEO GUIDES: INCOME AND EMPLOYMENT ────────────────────────────────────────
app.get("/w2-vs-1099", (req, res) => {
  res.render("w2-vs-1099", {
    pageTitle: "W-2 vs 1099: Tax Differences Explained",
    metaDescription: "W-2 vs 1099: W-2 employees have taxes withheld by employers. 1099 contractors pay self-employment tax and make estimated payments. Learn the key tax differences.",
    ogTitle: "W-2 vs 1099: Tax Differences for Employees and Contractors | MyTaxCalcs",
    ogDescription: "W-2 employees have taxes withheld. 1099 contractors pay self-employment tax and estimated taxes. See the full tax difference between both."
  });
});

// ── SEO GUIDES: INVESTMENT AND RETIREMENT ────────────────────────────────────
app.get("/roth-ira-conversion-tax", (req, res) => {
  res.render("roth-ira-conversion-tax", {
    pageTitle: "Roth IRA Conversion Tax: How It Works and When to Convert",
    metaDescription: "Roth IRA conversion tax: the converted amount is added to ordinary income and taxed at your marginal rate. Learn when converting makes sense and how to minimize the tax hit.",
    ogTitle: "Roth IRA Conversion Tax: How It Works | MyTaxCalcs",
    ogDescription: "Converting to a Roth IRA triggers ordinary income tax on the converted amount. Learn how to calculate the tax and when conversion is worth it."
  });
});

app.get("/401k-contribution-limits-2025", (req, res) => {
  res.render("401k-contribution-limits-2025", {
    pageTitle: "401(k) Contribution Limits 2025: Employee and Employer Limits",
    metaDescription: "2025 401(k) contribution limit is $23,500 for employees ($31,000 with catch-up if age 50+). Total limit including employer contributions is $70,000. See all 2025 limits.",
    ogTitle: "401(k) Contribution Limits 2025: Employee and Employer | MyTaxCalcs",
    ogDescription: "2025 401(k) limit: $23,500 employee, $31,000 with catch-up (age 50+), $70,000 total with employer. See all contribution limits and rules."
  });
});

app.get("/hsa-contribution-limits-2025", (req, res) => {
  res.render("hsa-contribution-limits-2025", {
    pageTitle: "HSA Contribution Limits 2025: Rules, Tax Benefits, and How It Works",
    metaDescription: "2025 HSA contribution limits: $4,300 for self-only coverage, $8,550 for family coverage, plus $1,000 catch-up if age 55+. Learn HSA tax benefits and eligibility rules.",
    ogTitle: "HSA Contribution Limits 2025: Limits and Tax Benefits | MyTaxCalcs",
    ogDescription: "2025 HSA limits: $4,300 self-only, $8,550 family, $1,000 catch-up age 55+. Learn the triple tax benefit and HDHP eligibility requirements."
  });
});

// ── SEO GUIDES: CREDITS ───────────────────────────────────────────────────────
app.get("/child-tax-credit-2025", (req, res) => {
  res.render("child-tax-credit-2025", {
    pageTitle: "Child Tax Credit 2025: Amount, Rules, and Who Qualifies",
    metaDescription: "The 2025 child tax credit is up to $2,000 per qualifying child under 17. Up to $1,700 is refundable. Learn income phase-out limits and how to claim it.",
    ogTitle: "Child Tax Credit 2025: Amount and Who Qualifies | MyTaxCalcs",
    ogDescription: "2025 child tax credit: up to $2,000 per child under 17, up to $1,700 refundable. See income phase-outs and eligibility rules."
  });
});

// ── SEO GUIDES: TAX CONCEPTS ─────────────────────────────────────────────────
app.get("/marginal-vs-effective-tax-rate", (req, res) => {
  res.render("marginal-vs-effective-tax-rate", {
    pageTitle: "Marginal vs Effective Tax Rate: What's the Difference?",
    metaDescription: "Marginal tax rate is the rate on your last dollar of income. Effective tax rate is your total tax divided by total income. Learn the difference and why it matters.",
    ogTitle: "Marginal vs Effective Tax Rate: Key Differences | MyTaxCalcs",
    ogDescription: "Your marginal rate applies to the last dollar earned. Your effective rate is what you actually pay overall. Learn how progressive brackets make them different."
  });
});

app.get("/bonus-tax-rate-2025", (req, res) => {
  res.render("bonus-tax-rate-2025", {
    pageTitle: "Bonus Tax Rate 2025: How Bonuses Are Taxed and What to Expect",
    metaDescription: "Bonuses are taxed as ordinary income in 2025. The federal supplemental withholding rate is 22% (37% above $1 million). Learn how bonus withholding works and how to plan ahead.",
    ogTitle: "Bonus Tax Rate 2025: How Bonuses Are Taxed | MyTaxCalcs",
    ogDescription: "2025 bonus withholding rate is 22% federal (37% over $1M). Bonuses are ordinary income — learn how withholding works and what your actual tax bill may be."
  });
});

// ── SEO GUIDES: TAX HELP ──────────────────────────────────────────────────────
app.get("/irs-payment-plan-guide", (req, res) => {
  res.render("irs-payment-plan-guide", {
    pageTitle: "IRS Payment Plan: How to Set Up an Installment Agreement in 2025",
    metaDescription: "Can't pay your tax bill? Set up an IRS payment plan online in minutes. Short-term plans (180 days) are free. Long-term installment agreements have a setup fee. Learn how.",
    ogTitle: "IRS Payment Plan 2025: How to Set Up an Installment Agreement | MyTaxCalcs",
    ogDescription: "Set up an IRS installment agreement online if you can't pay your full tax bill. Learn short-term vs long-term plans, fees, and how to apply."
  });
});

app.get("/tax-extension-2026", (req, res) => {
  res.render("tax-extension-2026", {
    pageTitle: "Tax Extension 2026: How to File for an Extension and What It Means",
    metaDescription: "File a 2026 tax extension using Form 4868 by April 15, 2026 to get 6 more months to file. A tax extension does not extend the time to pay — taxes are still due April 15.",
    ogTitle: "Tax Extension 2026: How to File Form 4868 | MyTaxCalcs",
    ogDescription: "File Form 4868 by April 15, 2026 for a 6-month filing extension. Remember: an extension to file is not an extension to pay — taxes are still due April 15."
  });
});

// ── STATIC PAGES ──────────────────────────────────────────────────────────────
app.get("/privacy-policy", (req, res) => {
  res.render("privacy-policy", {
    pageTitle: "Privacy Policy | MyTaxCalcs",
    metaDescription: "MyTaxCalcs privacy policy. Learn how we collect, use, and protect your information when you use our free tax calculators.",
    ogTitle: "Privacy Policy | MyTaxCalcs",
    ogDescription: "MyTaxCalcs privacy policy — how we handle your data when you use our free tax calculators."
  });
});

app.get("/terms", (req, res) => {
  res.render("terms", {
    pageTitle: "Terms of Use | MyTaxCalcs",
    metaDescription: "MyTaxCalcs terms of use. Our calculators provide estimates only and are not tax, legal, or financial advice.",
    ogTitle: "Terms of Use | MyTaxCalcs",
    ogDescription: "Terms of use for MyTaxCalcs.com. Calculators provide estimates only — not tax, legal, or financial advice."
  });
});

app.get("/disclaimer", (req, res) => {
  res.render("disclaimer", {
    pageTitle: "Tax Disclaimer | MyTaxCalcs",
    metaDescription: "MyTaxCalcs disclaimer. All calculator results are estimates only and should not be used as a substitute for professional tax advice.",
    ogTitle: "Tax Disclaimer | MyTaxCalcs",
    ogDescription: "All MyTaxCalcs results are estimates only and not a substitute for professional tax advice."
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    pageTitle: "Contact MyTaxCalcs",
    metaDescription: "Contact MyTaxCalcs with questions, feedback, or suggestions about our free U.S. tax calculators.",
    ogTitle: "Contact MyTaxCalcs",
    ogDescription: "Get in touch with MyTaxCalcs — questions, feedback, or suggestions welcome."
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: "About MyTaxCalcs",
    metaDescription: "MyTaxCalcs provides free U.S. tax calculators for income tax, state tax, self-employment, capital gains, sales tax, and payroll tax estimates.",
    ogTitle: "About MyTaxCalcs | Free U.S. Tax Calculators",
    ogDescription: "MyTaxCalcs offers free federal and state income tax calculators to help Americans estimate their 2025 tax liability."
  });
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
