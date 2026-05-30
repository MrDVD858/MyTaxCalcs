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

// ── CANONICAL REDIRECT ───────────────────────────────────────────────────────
app.use((req, res, next) => {
  const host = req.headers['x-forwarded-host'] || req.headers.host || '';
  const proto = req.headers['x-forwarded-proto'] || req.protocol;

  const cleanHost = host.split(':')[0] || '';  // FIX: was assigning array instead of string

  const needsHttps = proto !== 'https';
  const needsNonWww = cleanHost.startsWith('www.');

  if (process.env.NODE_ENV === 'production' && (needsHttps || needsNonWww)) {
    return res.redirect(301, `https://mytaxcalcs.com${req.originalUrl}`);
  }
  next();
});

app.use(express.static(path.join(__dirname, "public")));

// ── ROUTES ───────────────────────────────────────────────────────────────────

app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Free Tax Calculators & Guides 2025 | MyTaxCalcs",
    metaDescription: "Free financial and tax calculators.",
    ogTitle: "Free Tax Calculators & Guides 2025 | MyTaxCalcs",
    ogDescription: "Accurate financial tools to model tax liability profiles.",
    canonical: "https://mytaxcalcs.com"
  });
});

// ── BLOG ─────────────────────────────────────────────────────────────────────

app.get("/blog", (req, res) => {
  res.render("blog", {
    pageTitle: "MyTaxCalcs Editorial Blog",
    metaDescription: "Expert tax insights and legal interpretations.",
    ogTitle: "MyTaxCalcs Editorial Blog",
    ogDescription: "Expert tax interpretations and policy reviews.",
    canonical: "https://mytaxcalcs.com/blog",
    posts: blogPosts,
    blogposts: blogPosts
  });
});

app.get("/blog/:slug", (req, res) => {
  const post = blogPosts.find(p => p.slug === req.params.slug);
  if (!post) {
    return res.status(404).render("404", { pageTitle: "Post Not Found" });
  }
  res.render("blog-post", {
    pageTitle: post.title,
    metaDescription: post.metaDescription,
    ogTitle: post.ogTitle,
    ogDescription: post.ogDescription,
    canonical: `https://mytaxcalcs.com/blog/${post.slug}`,
    post: post,
    posts: blogPosts
  });
});

// ── CALCULATORS ──────────────────────────────────────────────────────────────

app.get("/income-tax-calculator", (req, res) => {
  res.render("income-tax-calculator", {
    pageTitle: "Income Tax Calculator 2025",
    metaDescription: "Estimate federal tax brackets and liabilities.",
    ogTitle: "Income Tax Calculator 2025",
    ogDescription: "Model your annualized gross salaries.",
    canonical: "https://mytaxcalcs.com/income-tax-calculator",
    result: null,
    form: {}
  });
});

app.post("/income-tax-calculator", (req, res) => {
  const result = calculateFederalIncomeTax(req.body);
  res.render("income-tax-calculator", {
    pageTitle: "Income Tax Estimate Results",
    metaDescription: "Review your tax assessment profiles.",
    ogTitle: "Income Tax Estimate Results",
    ogDescription: "Review your tax assessment profiles.",
    canonical: "https://mytaxcalcs.com/income-tax-calculator",
    result,
    form: req.body
  });
});

// ── STATIC & CATCH-ALL PAGES ─────────────────────────────────────────────────

app.get("/:page", (req, res, next) => {
  const page = req.params.page;
  const staticPages = ["about", "contact", "privacy-policy", "terms", "disclaimer", "calculators", "states"];
  if (staticPages.includes(page)) {
    return res.render(page, {
      pageTitle: `${page.charAt(0).toUpperCase() + page.slice(1)} | MyTaxCalcs`,
      canonical: `https://mytaxcalcs.com/${page}`,
      states: states,
      posts: blogPosts,
      blogposts: blogPosts
    });
  }
  next();
});

// ── 404 ──────────────────────────────────────────────────────────────────────

app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
