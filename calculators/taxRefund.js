function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

const standardDeductions2025 = {
  single: 15750,
  marriedJoint: 31500,
  marriedSeparate: 15750,
  headHousehold: 23625
};

const federalBrackets2025 = {
  single: [
    { upto: 11925, rate: 0.10 },
    { upto: 48475, rate: 0.12 },
    { upto: 103350, rate: 0.22 },
    { upto: 197300, rate: 0.24 },
    { upto: 250525, rate: 0.32 },
    { upto: 626350, rate: 0.35 },
    { upto: Infinity, rate: 0.37 }
  ],
  marriedJoint: [
    { upto: 23850, rate: 0.10 },
    { upto: 96950, rate: 0.12 },
    { upto: 206700, rate: 0.22 },
    { upto: 394600, rate: 0.24 },
    { upto: 501050, rate: 0.32 },
    { upto: 751600, rate: 0.35 },
    { upto: Infinity, rate: 0.37 }
  ],
  marriedSeparate: [
    { upto: 11925, rate: 0.10 },
    { upto: 48475, rate: 0.12 },
    { upto: 103350, rate: 0.22 },
    { upto: 197300, rate: 0.24 },
    { upto: 250525, rate: 0.32 },
    { upto: 375800, rate: 0.35 },
    { upto: Infinity, rate: 0.37 }
  ],
  headHousehold: [
    { upto: 17000, rate: 0.10 },
    { upto: 64850, rate: 0.12 },
    { upto: 103350, rate: 0.22 },
    { upto: 197300, rate: 0.24 },
    { upto: 250500, rate: 0.32 },
    { upto: 626350, rate: 0.35 },
    { upto: Infinity, rate: 0.37 }
  ]
};

function calculateProgressiveTax(taxableIncome, brackets) {
  let tax = 0;
  let previousLimit = 0;
  let marginalRate = 0;

  for (const bracket of brackets) {
    if (taxableIncome > previousLimit) {
      const taxableAtRate = Math.min(taxableIncome, bracket.upto) - previousLimit;
      tax += taxableAtRate * bracket.rate;
      marginalRate = bracket.rate;
      previousLimit = bracket.upto;
    } else {
      break;
    }
  }

  return {
    tax,
    marginalRate
  };
}

function calculateTaxRefund(form) {
  const grossIncome = toNumber(form.grossIncome);
  const filingStatus = form.filingStatus || "single";
  const deductionType = form.deductionType || "standard";
  const itemizedDeduction = toNumber(form.itemizedDeduction);

  const federalWithheld = toNumber(form.federalWithheld);
  const estimatedPayments = toNumber(form.estimatedPayments);
  const otherPayments = toNumber(form.otherPayments);

  const nonRefundableCredits = toNumber(form.nonRefundableCredits);
  const refundableCredits = toNumber(form.refundableCredits);

  const standardDeduction =
    standardDeductions2025[filingStatus] || standardDeductions2025.single;

  const deduction =
    deductionType === "itemized"
      ? Math.max(itemizedDeduction, 0)
      : standardDeduction;

  const taxableIncome = Math.max(grossIncome - deduction, 0);

  const brackets = federalBrackets2025[filingStatus] || federalBrackets2025.single;

  const taxCalc = calculateProgressiveTax(taxableIncome, brackets);

  const federalTaxBeforeCredits = taxCalc.tax;
  const federalTaxAfterNonRefundableCredits = Math.max(
    federalTaxBeforeCredits - nonRefundableCredits,
    0
  );

  const totalPayments =
    federalWithheld + estimatedPayments + otherPayments + refundableCredits;

  const refundOrOwed = totalPayments - federalTaxAfterNonRefundableCredits;

  const effectiveTaxRate =
    grossIncome > 0 ? federalTaxAfterNonRefundableCredits / grossIncome : 0;

  return {
    taxYear: 2025,
    grossIncome,
    filingStatus,
    deductionType,
    deduction,
    taxableIncome,
    federalTaxBeforeCredits,
    nonRefundableCredits,
    federalTaxAfterNonRefundableCredits,
    federalWithheld,
    estimatedPayments,
    otherPayments,
    refundableCredits,
    totalPayments,
    refundOrOwed,
    effectiveTaxRate,
    marginalRate: taxCalc.marginalRate
  };
}

module.exports = {
  calculateTaxRefund
};