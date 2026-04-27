function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

const payPeriods = {
  weekly: 52,
  biweekly: 26,
  semimonthly: 24,
  monthly: 12,
  annual: 1
};

const standardDeductions2026 = {
  single: 16100,
  marriedJoint: 32200,
  marriedSeparate: 16100,
  headHousehold: 24150
};

const federalBrackets2026 = {
  single: [
    { upto: 12400, rate: 0.10 },
    { upto: 50400, rate: 0.12 },
    { upto: 105700, rate: 0.22 },
    { upto: 201775, rate: 0.24 },
    { upto: 256225, rate: 0.32 },
    { upto: 640600, rate: 0.35 },
    { upto: Infinity, rate: 0.37 }
  ],
  marriedJoint: [
    { upto: 24800, rate: 0.10 },
    { upto: 100800, rate: 0.12 },
    { upto: 211400, rate: 0.22 },
    { upto: 403550, rate: 0.24 },
    { upto: 512450, rate: 0.32 },
    { upto: 768700, rate: 0.35 },
    { upto: Infinity, rate: 0.37 }
  ],
  marriedSeparate: [
    { upto: 12400, rate: 0.10 },
    { upto: 50400, rate: 0.12 },
    { upto: 105700, rate: 0.22 },
    { upto: 201775, rate: 0.24 },
    { upto: 256225, rate: 0.32 },
    { upto: 384350, rate: 0.35 },
    { upto: Infinity, rate: 0.37 }
  ],
  headHousehold: [
    { upto: 17700, rate: 0.10 },
    { upto: 67450, rate: 0.12 },
    { upto: 105700, rate: 0.22 },
    { upto: 201750, rate: 0.24 },
    { upto: 256200, rate: 0.32 },
    { upto: 640600, rate: 0.35 },
    { upto: Infinity, rate: 0.37 }
  ]
};

function calculateProgressiveTax(taxableIncome, brackets) {
  let tax = 0;
  let previousLimit = 0;

  for (const bracket of brackets) {
    if (taxableIncome > previousLimit) {
      const taxableAtRate = Math.min(taxableIncome, bracket.upto) - previousLimit;
      tax += taxableAtRate * bracket.rate;
      previousLimit = bracket.upto;
    } else {
      break;
    }
  }

  return tax;
}

function calculatePayrollTax(form) {
  const grossPay = toNumber(form.grossPay);
  const payFrequency = form.payFrequency || "biweekly";
  const filingStatus = form.filingStatus || "single";

  const preTaxDeductions = toNumber(form.preTaxDeductions);
  const postTaxDeductions = toNumber(form.postTaxDeductions);
  const federalExtraWithholding = toNumber(form.federalExtraWithholding);
  const stateTaxRate = toNumber(form.stateTaxRate);
  const ytdWagesBeforeThisPaycheck = toNumber(form.ytdWagesBeforeThisPaycheck);

  const periods = payPeriods[payFrequency] || 26;

  const taxablePay = Math.max(grossPay - preTaxDeductions, 0);
  const annualGrossPay = grossPay * periods;
  const annualTaxablePay = taxablePay * periods;

  const standardDeduction =
    standardDeductions2026[filingStatus] || standardDeductions2026.single;

  const federalTaxableIncome = Math.max(annualTaxablePay - standardDeduction, 0);

  const brackets = federalBrackets2026[filingStatus] || federalBrackets2026.single;
  const estimatedAnnualFederalTax = calculateProgressiveTax(federalTaxableIncome, brackets);

  const estimatedFederalWithholding =
    estimatedAnnualFederalTax / periods + federalExtraWithholding;

  const socialSecurityWageBase = 184500;
  const socialSecurityTaxableThisPaycheck = Math.max(
    Math.min(ytdWagesBeforeThisPaycheck + taxablePay, socialSecurityWageBase) -
      Math.min(ytdWagesBeforeThisPaycheck, socialSecurityWageBase),
    0
  );

  const socialSecurityTax = socialSecurityTaxableThisPaycheck * 0.062;
  const medicareTax = taxablePay * 0.0145;

  const additionalMedicareThreshold = 200000;
  const additionalMedicareTaxableThisPaycheck = Math.max(
    Math.max(ytdWagesBeforeThisPaycheck + taxablePay - additionalMedicareThreshold, 0) -
      Math.max(ytdWagesBeforeThisPaycheck - additionalMedicareThreshold, 0),
    0
  );

  const additionalMedicareTax = additionalMedicareTaxableThisPaycheck * 0.009;

  const stateWithholding = taxablePay * (Math.max(stateTaxRate, 0) / 100);

  const totalTaxes =
    estimatedFederalWithholding +
    socialSecurityTax +
    medicareTax +
    additionalMedicareTax +
    stateWithholding;

  const netPay = grossPay - preTaxDeductions - totalTaxes - postTaxDeductions;

  return {
    taxYear: 2026,
    grossPay,
    payFrequency,
    payPeriods: periods,
    filingStatus,
    preTaxDeductions,
    postTaxDeductions,
    federalExtraWithholding,
    stateTaxRate,
    taxablePay,
    annualGrossPay,
    annualTaxablePay,
    standardDeduction,
    federalTaxableIncome,
    estimatedAnnualFederalTax,
    estimatedFederalWithholding,
    socialSecurityTaxableThisPaycheck,
    socialSecurityTax,
    medicareTax,
    additionalMedicareTax,
    stateWithholding,
    totalTaxes,
    netPay,
    estimatedAnnualNetPay: netPay * periods
  };
}

module.exports = {
  calculatePayrollTax
};
