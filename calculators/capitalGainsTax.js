function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

const ordinaryBrackets2025 = {
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

const longTermCapitalGainsBrackets2025 = {
  single: [
    { upto: 48350, rate: 0.00 },
    { upto: 533400, rate: 0.15 },
    { upto: Infinity, rate: 0.20 }
  ],
  marriedJoint: [
    { upto: 96700, rate: 0.00 },
    { upto: 600050, rate: 0.15 },
    { upto: Infinity, rate: 0.20 }
  ],
  marriedSeparate: [
    { upto: 48350, rate: 0.00 },
    { upto: 300000, rate: 0.15 },
    { upto: Infinity, rate: 0.20 }
  ],
  headHousehold: [
    { upto: 64750, rate: 0.00 },
    { upto: 566700, rate: 0.15 },
    { upto: Infinity, rate: 0.20 }
  ]
};

const niitThresholds = {
  single: 200000,
  marriedJoint: 250000,
  marriedSeparate: 125000,
  headHousehold: 200000
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

function calculateLongTermCapitalGainsTax(otherTaxableIncome, capitalGain, brackets) {
  let remainingGain = capitalGain;
  let tax = 0;
  let previousLimit = 0;

  for (const bracket of brackets) {
    if (remainingGain <= 0) break;

    const bracketStart = previousLimit;
    const bracketEnd = bracket.upto;

    const availableSpace = Math.max(bracketEnd - Math.max(otherTaxableIncome, bracketStart), 0);
    const gainTaxedHere = Math.min(remainingGain, availableSpace);

    tax += gainTaxedHere * bracket.rate;
    remainingGain -= gainTaxedHere;
    previousLimit = bracket.upto;
  }

  return tax;
}

function calculateCapitalGainsTax(form) {
  const salePrice = toNumber(form.salePrice);
  const purchasePrice = toNumber(form.purchasePrice);
  const sellingCosts = toNumber(form.sellingCosts);
  const improvements = toNumber(form.improvements);
  const capitalLosses = toNumber(form.capitalLosses);
  const otherTaxableIncome = toNumber(form.otherTaxableIncome);
  const filingStatus = form.filingStatus || "single";
  const holdingPeriod = form.holdingPeriod || "long";

  const adjustedBasis = purchasePrice + improvements + sellingCosts;
  const grossGain = salePrice - adjustedBasis;
  const netGain = Math.max(grossGain - capitalLosses, 0);

  const ordinaryBrackets = ordinaryBrackets2025[filingStatus] || ordinaryBrackets2025.single;
  const capitalGainsBrackets =
    longTermCapitalGainsBrackets2025[filingStatus] || longTermCapitalGainsBrackets2025.single;

  let estimatedCapitalGainsTax = 0;
  let taxMethod = "";

  if (holdingPeriod === "short") {
    const taxWithoutGain = calculateProgressiveTax(otherTaxableIncome, ordinaryBrackets);
    const taxWithGain = calculateProgressiveTax(otherTaxableIncome + netGain, ordinaryBrackets);
    estimatedCapitalGainsTax = Math.max(taxWithGain - taxWithoutGain, 0);
    taxMethod = "Short-term capital gain estimated using ordinary income tax brackets.";
  } else {
    estimatedCapitalGainsTax = calculateLongTermCapitalGainsTax(
      otherTaxableIncome,
      netGain,
      capitalGainsBrackets
    );
    taxMethod = "Long-term capital gain estimated using 2025 federal long-term capital gains brackets.";
  }

  const niitThreshold = niitThresholds[filingStatus] || niitThresholds.single;
  const estimatedMAGI = otherTaxableIncome + netGain;
  const niitTaxableAmount = Math.max(Math.min(netGain, estimatedMAGI - niitThreshold), 0);
  const estimatedNIIT = niitTaxableAmount * 0.038;

  const totalEstimatedTax = estimatedCapitalGainsTax + estimatedNIIT;
  const effectiveCapitalGainsRate = netGain > 0 ? totalEstimatedTax / netGain : 0;

  return {
    taxYear: 2025,
    salePrice,
    purchasePrice,
    sellingCosts,
    improvements,
    capitalLosses,
    adjustedBasis,
    grossGain,
    netGain,
    otherTaxableIncome,
    filingStatus,
    holdingPeriod,
    estimatedCapitalGainsTax,
    estimatedNIIT,
    totalEstimatedTax,
    effectiveCapitalGainsRate,
    taxMethod
  };
}

module.exports = {
  calculateCapitalGainsTax
};