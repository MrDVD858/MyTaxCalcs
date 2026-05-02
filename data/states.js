const states = [
  {
    name: "Alabama", abbr: "AL", slug: "alabama", hasIncomeTax: true,
    topRate: 5.0, bottomRate: 2.0, brackets: "2%–5%",
    note: "Alabama has a graduated income tax with rates from 2% to 5%. The state also allows deductions for federal income taxes paid.",
    noTaxNote: null
  },
  {
    name: "Alaska", abbr: "AK", slug: "alaska", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "Alaska has no state income tax. Residents may even receive an annual Permanent Fund Dividend from the state."
  },
  {
    name: "Arizona", abbr: "AZ", slug: "arizona", hasIncomeTax: true,
    topRate: 2.5, bottomRate: 2.5, brackets: "2.5% flat",
    note: "Arizona uses a flat income tax rate of 2.5% for all taxpayers, one of the lowest flat rates in the country.",
    noTaxNote: null
  },
  {
    name: "Arkansas", abbr: "AR", slug: "arkansas", hasIncomeTax: true,
    topRate: 4.4, bottomRate: 2.0, brackets: "2%–4.4%",
    note: "Arkansas has a graduated income tax with rates from 2% to 4.4%. The state has been reducing its top rate in recent years.",
    noTaxNote: null
  },
  {
    name: "California", abbr: "CA", slug: "california", hasIncomeTax: true,
    topRate: 13.3, bottomRate: 1.0, brackets: "1%–13.3%",
    note: "California has the highest top marginal income tax rate in the country at 13.3%. It uses a graduated rate system with 9 brackets.",
    noTaxNote: null
  },
  {
    name: "Colorado", abbr: "CO", slug: "colorado", hasIncomeTax: true,
    topRate: 4.4, bottomRate: 4.4, brackets: "4.4% flat",
    note: "Colorado uses a flat income tax rate of 4.4% for all taxpayers.",
    noTaxNote: null
  },
  {
    name: "Connecticut", abbr: "CT", slug: "connecticut", hasIncomeTax: true,
    topRate: 6.99, bottomRate: 3.0, brackets: "3%–6.99%",
    note: "Connecticut has a graduated income tax with rates from 3% to 6.99% across 7 brackets.",
    noTaxNote: null
  },
  {
    name: "Delaware", abbr: "DE", slug: "delaware", hasIncomeTax: true,
    topRate: 6.6, bottomRate: 2.2, brackets: "2.2%–6.6%",
    note: "Delaware has a graduated income tax with rates from 2.2% to 6.6%. Delaware has no state sales tax.",
    noTaxNote: null
  },
  {
    name: "Florida", abbr: "FL", slug: "florida", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "Florida has no state income tax, making it a popular destination for retirees and high earners. The state relies on sales tax and other revenue."
  },
  {
    name: "Georgia", abbr: "GA", slug: "georgia", hasIncomeTax: true,
    topRate: 5.49, bottomRate: 5.49, brackets: "5.49% flat",
    note: "Georgia transitioned to a flat income tax rate of 5.49% and plans to reduce it further in coming years.",
    noTaxNote: null
  },
  {
    name: "Hawaii", abbr: "HI", slug: "hawaii", hasIncomeTax: true,
    topRate: 11.0, bottomRate: 1.4, brackets: "1.4%–11%",
    note: "Hawaii has one of the highest top income tax rates in the country at 11%, with 12 tax brackets.",
    noTaxNote: null
  },
  {
    name: "Idaho", abbr: "ID", slug: "idaho", hasIncomeTax: true,
    topRate: 5.8, bottomRate: 5.8, brackets: "5.8% flat",
    note: "Idaho uses a flat income tax rate of 5.8% for all taxpayers.",
    noTaxNote: null
  },
  {
    name: "Illinois", abbr: "IL", slug: "illinois", hasIncomeTax: true,
    topRate: 4.95, bottomRate: 4.95, brackets: "4.95% flat",
    note: "Illinois uses a flat income tax rate of 4.95% for all taxpayers, as required by the state constitution.",
    noTaxNote: null
  },
  {
    name: "Indiana", abbr: "IN", slug: "indiana", hasIncomeTax: true,
    topRate: 3.05, bottomRate: 3.05, brackets: "3.05% flat",
    note: "Indiana uses a flat income tax rate of 3.05%. Counties in Indiana may also levy local income taxes.",
    noTaxNote: null
  },
  {
    name: "Iowa", abbr: "IA", slug: "iowa", hasIncomeTax: true,
    topRate: 3.8, bottomRate: 3.8, brackets: "3.8% flat",
    note: "Iowa transitioned to a flat income tax rate of 3.8% and plans to reduce it to 3.5% in future years.",
    noTaxNote: null
  },
  {
    name: "Kansas", abbr: "KS", slug: "kansas", hasIncomeTax: true,
    topRate: 5.7, bottomRate: 3.1, brackets: "3.1%–5.7%",
    note: "Kansas has a graduated income tax with rates from 3.1% to 5.7% across 3 brackets.",
    noTaxNote: null
  },
  {
    name: "Kentucky", abbr: "KY", slug: "kentucky", hasIncomeTax: true,
    topRate: 4.0, bottomRate: 4.0, brackets: "4% flat",
    note: "Kentucky uses a flat income tax rate of 4% for all taxpayers.",
    noTaxNote: null
  },
  {
    name: "Louisiana", abbr: "LA", slug: "louisiana", hasIncomeTax: true,
    topRate: 3.0, bottomRate: 1.85, brackets: "1.85%–3%",
    note: "Louisiana has a graduated income tax with rates from 1.85% to 3% across 3 brackets.",
    noTaxNote: null
  },
  {
    name: "Maine", abbr: "ME", slug: "maine", hasIncomeTax: true,
    topRate: 7.15, bottomRate: 5.8, brackets: "5.8%–7.15%",
    note: "Maine has a graduated income tax with rates from 5.8% to 7.15% across 3 brackets.",
    noTaxNote: null
  },
  {
    name: "Maryland", abbr: "MD", slug: "maryland", hasIncomeTax: true,
    topRate: 5.75, bottomRate: 2.0, brackets: "2%–5.75%",
    note: "Maryland has a graduated income tax with rates from 2% to 5.75%. Maryland counties also levy local income taxes.",
    noTaxNote: null
  },
  {
    name: "Massachusetts", abbr: "MA", slug: "massachusetts", hasIncomeTax: true,
    topRate: 9.0, bottomRate: 5.0, brackets: "5%–9%",
    note: "Massachusetts has a flat 5% income tax rate for most income, with a 9% surtax on income over $1 million.",
    noTaxNote: null
  },
  {
    name: "Michigan", abbr: "MI", slug: "michigan", hasIncomeTax: true,
    topRate: 4.25, bottomRate: 4.25, brackets: "4.25% flat",
    note: "Michigan uses a flat income tax rate of 4.25% for all taxpayers. Some cities in Michigan also levy local income taxes.",
    noTaxNote: null
  },
  {
    name: "Minnesota", abbr: "MN", slug: "minnesota", hasIncomeTax: true,
    topRate: 9.85, bottomRate: 5.35, brackets: "5.35%–9.85%",
    note: "Minnesota has a graduated income tax with rates from 5.35% to 9.85% across 4 brackets.",
    noTaxNote: null
  },
  {
    name: "Mississippi", abbr: "MS", slug: "mississippi", hasIncomeTax: true,
    topRate: 4.7, bottomRate: 4.7, brackets: "4.7% flat",
    note: "Mississippi uses a flat income tax rate of 4.7% and plans to phase it out completely by 2030.",
    noTaxNote: null
  },
  {
    name: "Missouri", abbr: "MO", slug: "missouri", hasIncomeTax: true,
    topRate: 4.7, bottomRate: 2.0, brackets: "2%–4.7%",
    note: "Missouri has a graduated income tax with rates from 2% to 4.7% and has been reducing its top rate.",
    noTaxNote: null
  },
  {
    name: "Montana", abbr: "MT", slug: "montana", hasIncomeTax: true,
    topRate: 5.9, bottomRate: 4.7, brackets: "4.7%–5.9%",
    note: "Montana has a graduated income tax with rates from 4.7% to 5.9% across 2 brackets.",
    noTaxNote: null
  },
  {
    name: "Nebraska", abbr: "NE", slug: "nebraska", hasIncomeTax: true,
    topRate: 3.99, bottomRate: 2.46, brackets: "2.46%–3.99%",
    note: "Nebraska has a graduated income tax and has been reducing its rates, with a top rate of 3.99%.",
    noTaxNote: null
  },
  {
    name: "Nevada", abbr: "NV", slug: "nevada", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "Nevada has no state income tax. The state relies heavily on gaming and sales tax revenue."
  },
  {
    name: "New Hampshire", abbr: "NH", slug: "new-hampshire", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "New Hampshire has no broad-based income tax on wages. It previously taxed interest and dividends but that tax was phased out."
  },
  {
    name: "New Jersey", abbr: "NJ", slug: "new-jersey", hasIncomeTax: true,
    topRate: 10.75, bottomRate: 1.4, brackets: "1.4%–10.75%",
    note: "New Jersey has a graduated income tax with rates from 1.4% to 10.75% across 7 brackets.",
    noTaxNote: null
  },
  {
    name: "New Mexico", abbr: "NM", slug: "new-mexico", hasIncomeTax: true,
    topRate: 5.9, bottomRate: 1.7, brackets: "1.7%–5.9%",
    note: "New Mexico has a graduated income tax with rates from 1.7% to 5.9% across 5 brackets.",
    noTaxNote: null
  },
  {
    name: "New York", abbr: "NY", slug: "new-york", hasIncomeTax: true,
    topRate: 10.9, bottomRate: 4.0, brackets: "4%–10.9%",
    note: "New York has a graduated income tax with rates from 4% to 10.9%. New York City residents also pay a separate city income tax.",
    noTaxNote: null
  },
  {
    name: "North Carolina", abbr: "NC", slug: "north-carolina", hasIncomeTax: true,
    topRate: 4.5, bottomRate: 4.5, brackets: "4.5% flat",
    note: "North Carolina uses a flat income tax rate of 4.5% and has been gradually reducing it.",
    noTaxNote: null
  },
  {
    name: "North Dakota", abbr: "ND", slug: "north-dakota", hasIncomeTax: true,
    topRate: 2.5, bottomRate: 1.1, brackets: "1.1%–2.5%",
    note: "North Dakota has one of the lowest income tax rates in the country, with a top rate of just 2.5%.",
    noTaxNote: null
  },
  {
    name: "Ohio", abbr: "OH", slug: "ohio", hasIncomeTax: true,
    topRate: 3.5, bottomRate: 2.75, brackets: "2.75%–3.5%",
    note: "Ohio has a graduated income tax with rates from 2.75% to 3.5%. Many Ohio cities also levy local income taxes.",
    noTaxNote: null
  },
  {
    name: "Oklahoma", abbr: "OK", slug: "oklahoma", hasIncomeTax: true,
    topRate: 4.75, bottomRate: 0.25, brackets: "0.25%–4.75%",
    note: "Oklahoma has a graduated income tax with rates from 0.25% to 4.75% across 6 brackets.",
    noTaxNote: null
  },
  {
    name: "Oregon", abbr: "OR", slug: "oregon", hasIncomeTax: true,
    topRate: 9.9, bottomRate: 4.75, brackets: "4.75%–9.9%",
    note: "Oregon has a graduated income tax with rates from 4.75% to 9.9%. Oregon has no state sales tax.",
    noTaxNote: null
  },
  {
    name: "Pennsylvania", abbr: "PA", slug: "pennsylvania", hasIncomeTax: true,
    topRate: 3.07, bottomRate: 3.07, brackets: "3.07% flat",
    note: "Pennsylvania uses a flat income tax rate of 3.07% for all taxpayers, one of the lowest flat rates in the country.",
    noTaxNote: null
  },
  {
    name: "Rhode Island", abbr: "RI", slug: "rhode-island", hasIncomeTax: true,
    topRate: 5.99, bottomRate: 3.75, brackets: "3.75%–5.99%",
    note: "Rhode Island has a graduated income tax with rates from 3.75% to 5.99% across 3 brackets.",
    noTaxNote: null
  },
  {
    name: "South Carolina", abbr: "SC", slug: "south-carolina", hasIncomeTax: true,
    topRate: 6.2, bottomRate: 3.0, brackets: "3%–6.2%",
    note: "South Carolina has a graduated income tax with rates from 3% to 6.2% and has been reducing its top rate.",
    noTaxNote: null
  },
  {
    name: "South Dakota", abbr: "SD", slug: "south-dakota", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "South Dakota has no state income tax. The state is known for its business-friendly tax environment."
  },
  {
    name: "Tennessee", abbr: "TN", slug: "tennessee", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "Tennessee has no state income tax on wages. It previously taxed investment income but that was fully phased out."
  },
  {
    name: "Texas", abbr: "TX", slug: "texas", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "Texas has no state income tax. The state constitution prohibits a personal income tax. Texas relies on property and sales tax revenue."
  },
  {
    name: "Utah", abbr: "UT", slug: "utah", hasIncomeTax: true,
    topRate: 4.55, bottomRate: 4.55, brackets: "4.55% flat",
    note: "Utah uses a flat income tax rate of 4.55% for all taxpayers.",
    noTaxNote: null
  },
  {
    name: "Vermont", abbr: "VT", slug: "vermont", hasIncomeTax: true,
    topRate: 8.75, bottomRate: 3.35, brackets: "3.35%–8.75%",
    note: "Vermont has a graduated income tax with rates from 3.35% to 8.75% across 4 brackets.",
    noTaxNote: null
  },
  {
    name: "Virginia", abbr: "VA", slug: "virginia", hasIncomeTax: true,
    topRate: 5.75, bottomRate: 2.0, brackets: "2%–5.75%",
    note: "Virginia has a graduated income tax with rates from 2% to 5.75% across 4 brackets.",
    noTaxNote: null
  },
  {
    name: "Washington", abbr: "WA", slug: "washington", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "Washington has no state income tax. The state has one of the highest sales tax rates in the country and recently introduced a capital gains tax."
  },
  {
    name: "West Virginia", abbr: "WV", slug: "west-virginia", hasIncomeTax: true,
    topRate: 5.12, bottomRate: 2.36, brackets: "2.36%–5.12%",
    note: "West Virginia has a graduated income tax with rates from 2.36% to 5.12% and has been reducing its rates.",
    noTaxNote: null
  },
  {
    name: "Wisconsin", abbr: "WI", slug: "wisconsin", hasIncomeTax: true,
    topRate: 7.65, bottomRate: 3.54, brackets: "3.54%–7.65%",
    note: "Wisconsin has a graduated income tax with rates from 3.54% to 7.65% across 4 brackets.",
    noTaxNote: null
  },
  {
    name: "Wyoming", abbr: "WY", slug: "wyoming", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "Wyoming has no state income tax. The state relies on mineral severance taxes and federal revenue sharing."
  }
];

module.exports = states;
