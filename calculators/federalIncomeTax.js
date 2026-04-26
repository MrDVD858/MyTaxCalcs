function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function calculateFederalIncomeTax(form) {
  const grossIncome = toNumber(form.grossIncome);
  const federalWithheld = toNumber(form.federalWithheld);
  const taxCredits = toNumber(form.taxCredits);
  const deductionType = form.deductionType || "standard";
  const filingStatus = form.filingStatus || "single";

  const standardDeductions = {
    single: 15750,
    marriedJoint: 31500,
    marriedSeparate: 15750,
    headHousehold: 23625
  };

  const brackets = {
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

  const standardDeduction = standardDeductions[filingStatus] || standardDeductions.single;
  const itemizedDeduction = toNumber(form.itemizedDeduction);

  const deduction =
    deductionType === "itemized"
      ? Math.max(itemizedDeduction, 0)
      : standardDeduction;

  const taxableIncome = Math.max(grossIncome - deduction, 0);

  let tax = 0;
  let previousLimit = 0;
  let marginalRate = 0;

  for (const bracket of brackets[filingStatus]) {
    if (taxableIncome > previousLimit) {
      const taxableAtRate = Math.min(taxableIncome, bracket.upto) - previousLimit;
      tax += taxableAtRate * bracket.rate;
      marginalRate = bracket.rate;
      previousLimit = bracket.upto;
    } else {
      break;
    }
  }

  const taxAfterCredits = Math.max(tax - taxCredits, 0);
  const refundOrOwed = federalWithheld - taxAfterCredits;
  const effectiveTaxRate = grossIncome > 0 ? taxAfterCredits / grossIncome : 0;

  return {
    grossIncome,
    deduction,
    taxableIncome,
    federalTaxBeforeCredits: tax,
    federalTaxAfterCredits: taxAfterCredits,
    federalWithheld,
    refundOrOwed,
    effectiveTaxRate,
    marginalRate
  };
}

module.exports = {
  calculateFederalIncomeTax
};
