const express = require("express");
const path = require("path");
require("dotenv").config();

const states = require("./data/states");
const { calculateFederalIncomeTax } = require("./calculators/federalIncomeTax");
const { calculateSelfEmploymentTax } = require("./calculators/selfEmploymentTax");

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


app.listen(PORT, () => {
  console.log(`MyTaxCalcs running at http://localhost:${PORT}`);
});
