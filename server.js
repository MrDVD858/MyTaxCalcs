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

// ── FIXED CANONICAL REDIRECT ────────────────────────────────────────────────
app.use((req, res, next) => {
  const host = req.headers['x-forwarded-host'] || req.headers.host || '';
  const proto = req.headers['x-forwarded-proto'] || req.protocol;
  
  // FIXED: Using index ensures we have a string, not an array
  const cleanHost = host.split(':'); 

  const needsHttps = proto !== 'https';
  const needsNonWww = cleanHost.startsWith('www.');

  if (process.env.NODE_ENV === 'production' && (needsHttps || needsNonWww)) {
    return res.redirect(301, `https://mytaxcalcs.com${req.originalUrl}`);
  }
  next();
});

app.use(express.static(path.join(__dirname, "public")));

// ── ROUTES ──────────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Free Tax Calculators & Guides 2025 | MyTaxCalcs",
    canonical: "https://mytaxcalcs.com"
  });
});

app.get("/blog", (req, res) => {
  res.render("blog", {
    pageTitle: "MyTaxCalcs Editorial Blog",
    canonical: "https://mytaxcalcs.com/blog",
    posts: blogPosts,
    blogposts: blogPosts
  });
});

// 404 Fallback
app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
