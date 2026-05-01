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

app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "MyTaxCalcs - Free Tax Calculators",
    states
  });
});

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

app.get("/calculators", (req, res) => {
  res.render("calculators", {
    pageTitle: "Tax Calculators",
    states
  });
});

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
  res.render("about", {
    pageTitle: "About MyTaxCalcs"
  });
});

// Add this route to server.js before app.listen()

app.get("/sitemap.xml", (req, res) => {
  const baseUrl = "https://mytaxcalcs.com";

  const staticPages = [
    "",
    "/calculators",
    "/income-tax-calculator",
    "/self-employment-tax-calculator",
    "/capital-gains-tax-calculator",
    "/sales-tax-calculator",
    "/payroll-tax-calculator",
    "/tax-refund-calculator",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
  ];

  const stateUrls = states.map(
    (s) => `/${s.slug}-income-tax-calculator`
  );

  const allUrls = [...staticPages, ...stateUrls];

  const urls = allUrls
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === "" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.header("Content-Type", "application/xml");
  res.send(xml);
});

// Add this route to server.js before app.listen()
// Place it near the sitemap route

app.get("/ads.txt", (req, res) => {
  res.header("Content-Type", "text/plain");
  res.send("google.com, pub-5193834725888549, DIRECT, f08c47fec0942fa0");
});

app.listen(PORT, () => {
  console.log(`MyTaxCalcs running at http://localhost:${PORT}`);
});
