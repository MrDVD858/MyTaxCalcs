function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function calculateSelfEmploymentTax(form) {
  const grossIncome = toNumber(form.grossIncome);
  const businessExpenses = toNumber(form.businessExpenses);
  const taxYear = form.taxYear || "2025";

  const socialSecurityWageBase = {
    "2025": 176100,
    "2026": 184500
  };

  const netProfit = Math.max(grossIncome - businessExpenses, 0);

  // IRS generally applies self-employment tax to 92.35% of net earnings
  const seTaxableIncome = netProfit * 0.9235;

  const wageBase = socialSecurityWageBase[taxYear] || socialSecurityWageBase["2025"];

  const socialSecurityTaxableIncome = Math.min(seTaxableIncome, wageBase);
  const socialSecurityTax = socialSecurityTaxableIncome * 0.124;

  const medicareTax = seTaxableIncome * 0.029;

  const totalSelfEmploymentTax = socialSecurityTax + medicareTax;

  const deductibleHalf = totalSelfEmploymentTax / 2;

  const estimatedQuarterlyPayment = totalSelfEmploymentTax / 4;

  return {
    taxYear,
    grossIncome,
    businessExpenses,
    netProfit,
    seTaxableIncome,
    socialSecurityTax,
    medicareTax,
    totalSelfEmploymentTax,
    deductibleHalf,
    estimatedQuarterlyPayment
  };
}

module.exports = {
  calculateSelfEmploymentTax
};