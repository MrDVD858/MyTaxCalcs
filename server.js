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

// ── CANONICAL REDIRECT (FULLY REPAIRED WITH INDEX ACCESSOR) ─────────────────
app.use((req, res, next) => {
  const host = req.headers['x-forwarded-host'] || req.headers.host || '';
  const proto = req.headers['x-forwarded-proto'] || req.protocol;
 const cleanHost = host.split(':');

  const needsHttps = proto !== 'https';
  const needsNonWww = cleanHost.startsWith('www.');

  if (process.env.NODE_ENV === 'production' && (needsHttps || needsNonWww)) {
    return res.redirect(301, `https://mytaxcalcs.com${req.originalUrl}`);
  }
  next();
});

app.use(express.static(path.join(__dirname, "public")));

// Canonical URL generator middleware
app.use((req, res, next) => {
  res.locals.canonical = `https://mytaxcalcs.com${req.path === '/' ? '' : req.path}`;
  next();
});

// ── HOMEPAGE ROUTE ───────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Free Tax Calculators & Guides 2025 | MyTaxCalcs",
    metaDescription: "Free financial and tax calculators. Estimate income tax, payroll deductions, self-employment FICA obligations, capital gains, sales tax, and tax refunds instantly.",
    ogTitle: "Free Tax Calculators & Guides 2025 | MyTaxCalcs",
    ogDescription: "Accurate financial tools to model tax liability profiles, deductions, brackets, and refunds instantly.",
    canonical: "https://mytaxcalcs.com"
  });
});

// ── DYNAMIC BLOG SYSTEM ROUTES ───────────────────────────────────────────────
app.get("/blog", (req, res) => {
  res.render("blog", {
    pageTitle: "MyTaxCalcs Editorial Blog | IRS Insights",
    metaDescription: "Expert legal interpretations, policy reviews, inflation adjustments, and clear tracking of official IRS releases.",
    ogTitle: "MyTaxCalcs Editorial Blog | IRS Insights",
    ogDescription: "Expert legal interpretations, policy reviews, and tracking of official IRS updates.",
    canonical: `https://mytaxcalcs.com${req.path}`,
    posts: blogPosts,
    blogposts: blogPosts // Fallback variable for legacy view bindings
  });
});

app.get("/blog/:slug", (req, res) => {
  const post = blogPosts.find((p) => p.slug === req.params.slug);
  if (!post) {
    return res.status(404).render("404", { 
      pageTitle: "Page Not Found",
      canonical: `https://mytaxcalcs.com${req.path}`
    });
  }
  res.render("blog-post", { 
    post,
    canonical: `https://mytaxcalcs.com${req.path}`
  });
});

// ── CORE INTERACTIVE CALCULATORS ─────────────────────────────────────────────

// Federal Income Tax
app.get("/income-tax-calculator", (req, res) => {
  res.render("income-tax-calculator", {
    pageTitle: "Free Income Tax Calculator 2025 | MyTaxCalcs",
    metaDescription: "Estimate your 2025 progressive federal tax brackets, taxable deductions, and net marginal liability thresholds instantly.",
    ogTitle: "Free Income Tax Calculator 2025 | MyTaxCalcs",
    ogDescription: "Model your annualized gross salaries to see effective versus marginal progressive parameters.",
    canonical: `https://mytaxcalcs.com${req.path}`,
    result: null,
    form: {}
  });
});

app.post("/income-tax-calculator", (req, res) => {
  const result = calculateFederalIncomeTax(req.body);
  res.render("income-tax-calculator", {
    pageTitle: "Income Tax Estimate Results | MyTaxCalcs",
    metaDescription: "Review your comprehensive annualized federal tax assessment profiles.",
    ogTitle: "Income Tax Estimate Results | MyTaxCalcs",
    ogDescription: "Review your comprehensive annualized federal tax assessment profiles.",
    canonical: `https://mytaxcalcs.com${req.path}`,
    result,
    form: req.body
  });
});

// Tax Refund Calculator
app.get("/tax-refund-calculator", (req, res) => {
  res.render("tax-refund-calculator", {
    pageTitle: "Free Tax Refund Calculator 2025 | MyTaxCalcs",
    metaDescription: "Free tax refund calculator for 2025. Estimate your federal tax refund or amount owed using income, deductions, withholding, estimated payments, and credits.",
    ogTitle: "Free Tax Refund Calculator 2025 | MyTaxCalcs",
    ogDescription: "Estimate your federal tax refund or amount owed using income, deductions, credits, and withholding.",
    canonical: `https://mytaxcalcs.com${req.path}`,
    result: null,
    form: {}
  });
});

app.post("/tax-refund-calculator", (req, res) => {
  const result = calculateTaxRefund(req.body);
  res.render("tax-refund-calculator", {
    pageTitle: "Tax Refund Calculator Results | MyTaxCalcs",
    metaDescription: "Review your detailed refund allocation projections.",
    ogTitle: "Tax Refund Calculator Results | MyTaxCalcs",
    ogDescription: "Review your detailed refund allocation projections.",
    canonical: `https://mytaxcalcs.com${req.path}`,
    result,
    form: req.body
  });
});

// Payroll Tax Calculator
app.get("/payroll-tax-calculator", (req, res) => {
  res.render("payroll-tax-calculator", {
    pageTitle: "Free Payroll Tax Calculator 2025 | MyTaxCalcs",
    metaDescription: "Free payroll tax calculator for 2025. Estimate federal withholding, Social Security tax, Medicare tax, state withholding, and net take-home pay per paycheck.",
    ogTitle: "Free Payroll Tax Calculator 2025 | MyTaxCalcs",
    ogDescription: "Estimate paycheck withholding, Social Security, Medicare, state withholding, and net pay for 2025.",
    canonical: `https://mytaxcalcs.com${req.path}`,
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
    canonical: `https://mytaxcalcs.com${req.path}`,
    result,
    form: req.body
  });
});

// Self Employment Tax
app.get("/self-employment-tax-calculator", (req, res) => {
  res.render("self-employment-tax-calculator", {
    pageTitle: "Free Self-Employment Tax Calculator 2025 | MyTaxCalcs",
    metaDescription: "Free self-employment tax calculator for 2025. Estimate Social Security tax, Medicare tax, total SE tax, deductible half, and quarterly estimated payment for freelancers and contractors.",
    ogTitle: "Free Self-Employment Tax Calculator 2025 | MyTaxCalcs",
    ogDescription: "Estimate Social Security and Medicare tax for freelance, contractor, and gig income in 2025.",
    canonical: `https://mytaxcalcs.com${req.path}`,
    result: null,
    form: {}
  });
});

app.post("/self-employment-tax-calculator", (req, res) => {
  const result = calculateSelfEmploymentTax(req.body);
  res.render("self-employment-tax-calculator", {
    pageTitle: "Self-Employment Tax Estimates | MyTaxCalcs",
    metaDescription: "Review your detailed 1099 independent operational liability configurations.",
    ogTitle: "Self-Employment Tax Estimates | MyTaxCalcs",
    ogDescription: "Review your detailed 1099 independent operational liability configurations.",
    canonical: `https://mytaxcalcs.com${req.path}`,
    result,
    form: req.body
  });
});

// Capital Gains Tax
app.get("/capital-gains-tax-calculator", (req, res) => {
  res.render("capital-gains-tax-calculator", {
    pageTitle: "Capital Gains Tax Calculator 2025 | MyTaxCalcs",
    metaDescription: "Free capital gains tax calculator for 2025. Estimate short-term and long-term federal tax on stocks, crypto, real estate, and other asset sales. Includes NIIT.",
    ogTitle: "Capital Gains Tax Calculator 2025 | MyTaxCalcs",
    ogDescription: "Estimate your 2025 federal capital gains tax on stocks, crypto, real estate, and other assets. Includes Net Investment Income Tax (NIIT).",
    canonical: `https://mytaxcalcs.com${req.path}`,
    result: null,
    form: {}
  });
});

app.post("/capital-gains-tax-calculator", (req, res) => {
  const result = calculateCapitalGainsTax(req.body);
  res.render("capital-gains-tax-calculator", {
    pageTitle: "Capital Gains Tax Results | MyTaxCalcs",
    metaDescription: "Review asset profits and short-term versus preferential long-term margin options.",
    ogTitle: "Capital Gains Tax Results | MyTaxCalcs",
    ogDescription: "Review asset profits and short-term versus preferential long-term margin options.",
    canonical: `https://mytaxcalcs.com${req.path}`,
    result,
    form: req.body
  });
});

// Sales Tax Calculator
app.get("/sales-tax-calculator", (req, res) => {
  res.render("sales-tax-calculator", {
    pageTitle: "Free Sales Tax Calculator | MyTaxCalcs",
    metaDescription: "Extrapolate gross item invoice parameters or extract baseline pre-tax variables seamlessly.",
    ogTitle: "Free Sales Tax Calculator | MyTaxCalcs",
    ogDescription: "Extrapolate gross item invoice parameters or extract baseline pre-tax variables seamlessly.",
    canonical: `https://mytaxcalcs.com${req.path}`,
    result: null,
    form: {}
  });
});

app.post("/sales-tax-calculator", (req, res) => {
  const result = calculateSalesTax(req.body);
  res.render("sales-tax-calculator", {
    pageTitle: "Sales Tax Computations | MyTaxCalcs",
    metaDescription: "Review gross checkout totals and itemized assessment breakdowns.",
    ogTitle: "Sales Tax Computations | MyTaxCalcs",
    ogDescription: "Review gross checkout totals and itemized assessment breakdowns.",
    canonical: `https://mytaxcalcs.com${req.path}`,
    result,
    form: req.body
  });
});

// ── STATE INCOME TAX CALCULATOR ROUTE WHEEL ──────────────────────────────────
app.get("/:stateSlug-income-tax-calculator", (req, res, next) => {
  const state = states.find((s) => s.slug === req.params.stateSlug);
  if (!state) return next();

  res.render("state-income-tax-calculator", {
    state,
    states,
    result: null,
    form: {},
    canonical: `https://mytaxcalcs.com${req.path}`
  });
});

app.post("/:stateSlug-income-tax-calculator", (req, res, next) => {
  const state = states.find((s) => s.slug === req.params.stateSlug);
  if (!state) return next();

  const result = calculateFederalIncomeTax(req.body);
  res.render("state-income-tax-calculator", {
    state,
    states,
    result,
    form: req.body,
    canonical: `https://mytaxcalcs.com${req.path}`
  });
});

// ── SITEMAP SYSTEM ───────────────────────────────────────────────────────────
app.get("/sitemap.xml", (req, res) => {
  const baseUrl = "https://mytaxcalcs.com";
  
  const guidePages = [
    { path: "",                                 priority: "1.0", freq: "daily"   },
    { path: "/income-tax-calculator",           priority: "0.9", freq: "weekly"  },
    { path: "/tax-refund-calculator",           priority: "0.9", freq: "weekly"  },
    { path: "/self-employment-tax-calculator",  priority: "0.9", freq: "weekly"  },
    { path: "/capital-gains-tax-calculator",    priority: "0.9", freq: "weekly"  },
    { path: "/sales-tax-calculator",            priority: "0.9", freq: "weekly"  },
    { path: "/payroll-tax-calculator",          priority: "0.9", freq: "weekly"  },
    { path: "/about",                           priority: "0.3", freq: "yearly"  },
    { path: "/contact",                         priority: "0.3", freq: "yearly"  },
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
  const today = new Date().toISOString().split('T');
  
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

// ── ADS.TXT ENDPOINT ─────────────────────────────────────────────────────────
app.get("/ads.txt", (req, res) => {
  res.header("Content-Type", "text/plain");
  res.send("google.com, pub-5193834725888549, DIRECT, f08c47fec0942fa0");
});

// ── CATCH-ALL STATIC PAGES & HUBS (SAFELY MOVED TO THE VERY BOTTOM) ──────────
app.get("/:page", (req, res, next) => {
  const page = req.params.page;
  
  const staticPages = [
    "about", "contact", "privacy-policy", "terms", "disclaimer", "calculators", "states"
  ];

  if (staticPages.includes(page)) {
    return res.render(page, {
      pageTitle: `${page.charAt(0).toUpperCase() + page.slice(1).replace('-', ' ')} | MyTaxCalcs`,
      metaDescription: `Free financial metrics and operational rules for ${page}.`,
      ogTitle: `${page.charAt(0).toUpperCase() + page.slice(1).replace('-', ' ')} | MyTaxCalcs`,
      ogDescription: `Free analytical tracking parameters.`,
      canonical: `https://mytaxcalcs.com${req.path}`,
      states: states, 
      posts: blogPosts,
      blogposts: blogPosts
    });
  }
  next();
});

// ── 404 FALLBACK INTERCEPTOR ──────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).render("404", {
    pageTitle: "Page Not Found | MyTaxCalcs",
    canonical: `https://mytaxcalcs.com${req.path}`
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});