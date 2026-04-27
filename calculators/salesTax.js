function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function calculateSalesTax(form) {
  const purchaseAmount = toNumber(form.purchaseAmount);
  const discountAmount = toNumber(form.discountAmount);
  const stateTaxRate = toNumber(form.stateTaxRate);
  const localTaxRate = toNumber(form.localTaxRate);

  const taxableAmount = Math.max(purchaseAmount - discountAmount, 0);

  const combinedTaxRate = Math.max(stateTaxRate + localTaxRate, 0);

  const salesTax = taxableAmount * (combinedTaxRate / 100);

  const finalTotal = taxableAmount + salesTax;

  return {
    purchaseAmount,
    discountAmount,
    taxableAmount,
    stateTaxRate,
    localTaxRate,
    combinedTaxRate,
    salesTax,
    finalTotal
  };
}

module.exports = {
  calculateSalesTax
};