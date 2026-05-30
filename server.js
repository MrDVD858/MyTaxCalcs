const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ── BULLETPROOF CANONICAL REDIRECT ──────────────────────────────────────────
app.use((req, res, next) => {
  // 1. Force the host to be a string, or default to empty
  const host = (req.headers['x-forwarded-host'] || req.headers.host || '').toString();
  const proto = (req.headers['x-forwarded-proto'] || req.protocol || 'http').toString();

  // 2. Safely extract the domain
  const hostParts = host.split(':');
  const cleanHost = hostParts || '';

  // 3. Logic checks
  const needsHttps = proto !== 'https';
  const needsNonWww = cleanHost.startsWith('www.');

  if (process.env.NODE_ENV === 'production' && (needsHttps || needsNonWww)) {
    return res.redirect(301, `https://mytaxcalcs.com${req.originalUrl}`);
  }
  next();
});

app.use(express.static(path.join(__dirname, "public")));

// ── MINIMAL ROUTES FOR TESTING ──────────────────────────────────────────────
app.get("/", (req, res) => {
  res.send("Server is running correctly.");
});

app.get("/blog", (req, res) => {
  res.send("Blog page is now accessible.");
});

// 404 Fallback
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
