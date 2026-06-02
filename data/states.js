// data/states.js
const states = [
  {
    name: "Alabama", abbr: "AL", slug: "alabama", hasIncomeTax: true,
    topRate: 5, bottomRate: 2, brackets: "2%–5%",
    salesTax: "9.25%", filingDeadline: "April 15",
    keyFacts: [
      "Deduction allowed for federal income taxes paid — rare among states",
      "County and municipal occupational taxes apply in many cities",
      "Standard deduction phases out at higher income levels",
      "Top 5% rate kicks in at just $3,000 for single filers"
    ],
    note: "Alabama has a graduated income tax with rates from 2% to 5%. The state also allows deductions for federal income taxes paid.",
    noTaxNote: null,
    overview: "Alabama has a graduated state income tax with three brackets ranging from 2% to 5%. Single filers pay 2% on income up to $500, 4% on income from $501 to $3,000, and 5% on income above $3,000. Married filers have slightly wider brackets, with the 5% top rate kicking in above $6,000. Alabama allows a standard deduction that phases out at higher income levels, and the state also permits a deduction for federal income taxes paid — a relatively rare benefit that can meaningfully reduce your Alabama taxable income. Residents should also factor in county and municipal occupational taxes that apply in many parts of the state.",
    revenueUrl: { label: "Alabama Department of Revenue", url: "https://www.revenue.alabama.gov/" }
  },
  {
    name: "Alaska", abbr: "AK", slug: "alaska", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    salesTax: "0% state (local varies)", filingDeadline: "April 15 (federal only)",
    keyFacts: [
      "No state income tax and no statewide sales tax",
      "Annual Permanent Fund Dividend paid to eligible residents — federally taxable",
      "Some municipalities impose local sales taxes up to 7.5%",
      "Federal income tax is the primary income tax burden for residents"
    ],
    note: null,
    noTaxNote: "Alaska has no state income tax. Residents may even receive an annual Permanent Fund Dividend from the state.",
    overview: "Alaska is one of only nine states with no broad-based state income tax, meaning residents pay no tax on wages, salaries, or most personal income at the state level. Beyond that, Alaska is the only state with no statewide sales tax, though some municipalities impose local sales taxes. Eligible residents may also receive an annual Permanent Fund Dividend — a payment funded by state oil revenues — which is itself subject to federal income tax. Alaska residents still owe federal income tax based on the same brackets that apply nationwide, making federal tax planning the primary focus for most Alaskans.",
    revenueUrl: { label: "Alaska Department of Revenue", url: "https://www.tax.alaska.gov/" }
  },
  {
    name: "Arizona", abbr: "AZ", slug: "arizona", hasIncomeTax: true,
    topRate: 2.5, bottomRate: 2.5, brackets: "2.5% flat",
    salesTax: "8.37%", filingDeadline: "April 15",
    keyFacts: [
      "Flat 2.5% rate — one of the lowest flat rates in the country",
      "Replaced previous graduated system via Proposition 132 in 2023",
      "Standard deduction mirrors the federal amount",
      "No tax on Social Security income for most residents"
    ],
    note: "Arizona uses a flat income tax rate of 2.5% for all taxpayers, one of the lowest flat rates in the country.",
    noTaxNote: null,
    overview: "Arizona has a flat state income tax rate of 2.5% on all taxable income as of 2023, following the passage of Proposition 132. This replaced the previous graduated bracket system and makes Arizona one of the simpler states for income tax calculation. The standard deduction for Arizona residents is $13,850 for single filers and $27,700 for married couples filing jointly. Arizona also allows personal exemptions and a range of deductions and credits, including for dependents and charitable contributions made to qualifying organizations in the state.",
    revenueUrl: { label: "Arizona Department of Revenue", url: "https://azdor.gov/" }
  },
  {
    name: "Arkansas", abbr: "AR", slug: "arkansas", hasIncomeTax: true,
    topRate: 4.4, bottomRate: 2, brackets: "2%–4.4%",
    salesTax: "9.46%", filingDeadline: "April 15",
    keyFacts: [
      "Top rate has dropped from 5.9% in recent years as part of ongoing tax reform",
      "Deduction allowed for federal income taxes paid",
      "Low-income tax credit available for qualifying residents",
      "State standard deduction: $2,200 single / $4,400 married"
    ],
    note: "Arkansas has a graduated income tax with rates from 2% to 4.4%. The state has been reducing its top rate in recent years.",
    noTaxNote: null,
    overview: "Arkansas uses a graduated income tax system with rates ranging from 2% to 4.4% for most filers in 2025, following a series of tax cuts enacted in recent years. The top marginal rate applies to income above $89,600. Arkansas offers a low-income tax credit for residents earning below certain thresholds, and the state allows deductions for federal income taxes paid, which can reduce Arkansas taxable income for many filers. The standard deduction in Arkansas is $2,200 for single filers and $4,400 for married couples filing jointly.",
    revenueUrl: { label: "Arkansas Department of Finance and Administration", url: "https://www.dfa.arkansas.gov/income-tax/" }
  },
  {
    name: "California", abbr: "CA", slug: "california", hasIncomeTax: true,
    topRate: 13.3, bottomRate: 1, brackets: "1%–13.3%",
    salesTax: "8.85%", filingDeadline: "April 15",
    keyFacts: [
      "Highest top marginal state income tax rate in the country at 13.3%",
      "Very low standard deduction: $5,202 single / $10,404 married",
      "Capital gains taxed as ordinary income — no preferential rate",
      "Social Security income is fully exempt from California state tax"
    ],
    note: "California has the highest top marginal income tax rate in the country at 13.3%. It uses a graduated rate system with 9 brackets.",
    noTaxNote: null,
    overview: "California has the highest top marginal state income tax rate in the country at 13.3%, applied to income above $1 million for single filers. The state uses nine graduated brackets ranging from 1% to 13.3%. Here is how the 2025 California income tax brackets work for single filers: 1% on income up to $10,756; 2% on $10,757–$25,499; 4% on $25,500–$40,245; 6% on $40,246–$55,866; 8% on $55,867–$70,606; 9.3% on $70,607–$360,659; 10.3% on $360,660–$432,787; 11.3% on $432,788–$721,314; 12.3% on $721,315–$999,999; and 13.3% on income above $1,000,000. Married couples filing jointly have thresholds at roughly double these amounts up to the millionaire surcharge. California's standard deduction is notably low at just $5,202 for single filers and $10,404 for married couples — meaning most residents pay state income tax on a larger share of their earnings than in states with higher deductions. To illustrate with a real example: a single Californian earning $80,000 in taxable income owes approximately $4,992 in state income tax — an effective rate of about 6.2%, even though their highest dollar is taxed at 9.3%. California does not conform to many federal tax deductions, including the federal standard deduction, so residents must use California-specific rules when filing Form 540. The state fully taxes capital gains as ordinary income and does not offer a separate lower rate for long-term gains. Social Security benefits are exempt from California state income tax regardless of income level, which is a meaningful benefit for retirees.",
    revenueUrl: { label: "California Franchise Tax Board", url: "https://www.ftb.ca.gov/" }
  },
  {
    name: "Colorado", abbr: "CO", slug: "colorado", hasIncomeTax: true,
    topRate: 4.4, bottomRate: 4.4, brackets: "4.4% flat",
    salesTax: "7.81%", filingDeadline: "April 15",
    keyFacts: [
      "Flat 4.4% rate starting from federal AGI — simple calculation",
      "TABOR provision can trigger refunds when state revenue exceeds limits",
      "No separate state standard deduction — piggybacks on federal AGI",
      "Pension income may qualify for partial subtraction for seniors"
    ],
    note: "Colorado uses a flat income tax rate of 4.4% for all taxpayers.",
    noTaxNote: null,
    overview: "Colorado has a flat state income tax rate of 4.4% on all federal taxable income, making it one of the more straightforward states for income tax planning. Because Colorado starts with federal adjusted gross income and makes limited modifications, residents generally find state tax preparation simpler than in states with their own complex bracket systems. Colorado also offers a Taxpayer's Bill of Rights (TABOR) provision that can trigger refunds when state revenue exceeds a defined limit. The state does not allow a separate standard deduction — it piggybacks on the federal AGI instead.",
    revenueUrl: { label: "Colorado Department of Revenue", url: "https://tax.colorado.gov/" }
  },
  {
    name: "Connecticut", abbr: "CT", slug: "connecticut", hasIncomeTax: true,
    topRate: 6.99, bottomRate: 3, brackets: "3%–6.99%",
    salesTax: "6.35%", filingDeadline: "April 15",
    keyFacts: [
      "Property tax credit of up to $300 for homeowners and renters",
      "Social Security income may be partially taxable at state level",
      "Credit available for income taxes paid to other states",
      "Personal exemptions phase out at higher income levels"
    ],
    note: "Connecticut has a graduated income tax with rates from 3% to 6.99% across 7 brackets.",
    noTaxNote: null,
    overview: "Connecticut uses a graduated income tax with rates ranging from 3% to 6.99%. Single filers pay 3% on income up to $10,000 and reach the top 6.99% rate on income above $500,000. Connecticut provides a property tax credit of up to $300 for eligible homeowners and renters, and offers a credit for income taxes paid to other states. The state also has its own standard deduction and personal exemption, though these phase out at higher income levels. Connecticut residents should also be aware that Social Security income may be partially taxable at the state level depending on filing status and income.",
    revenueUrl: { label: "Connecticut Department of Revenue Services", url: "https://portal.ct.gov/DRS" }
  },
  {
    name: "Delaware", abbr: "DE", slug: "delaware", hasIncomeTax: true,
    topRate: 6.6, bottomRate: 2.2, brackets: "2.2%–6.6%",
    salesTax: "0%", filingDeadline: "April 30",
    keyFacts: [
      "No state sales tax — a significant benefit for residents",
      "Pension exclusion of up to $12,500 for residents 60 and older",
      "First $2,000 of income is exempt from state tax",
      "Top 6.6% rate applies to income above $60,000"
    ],
    note: "Delaware has a graduated income tax with rates from 2.2% to 6.6%. Delaware has no state sales tax.",
    noTaxNote: null,
    overview: "Delaware imposes a graduated state income tax with six brackets ranging from 0% to 6.6%. Income up to $2,000 is exempt, and the top rate of 6.6% applies to income above $60,000. Delaware is known as a tax-friendly state for retirees — there is no sales tax statewide, and the state offers a significant pension exclusion of up to $12,500 for residents 60 and older. The standard deduction is $3,250 for single filers and $6,500 for married couples filing jointly. Delaware also allows a personal credit of $110 per exemption claimed.",
    revenueUrl: { label: "Delaware Division of Revenue", url: "https://revenue.delaware.gov/" }
  },
  {
    name: "Florida", abbr: "FL", slug: "florida", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    salesTax: "7.02%", filingDeadline: "April 15 (federal only)",
    keyFacts: [
      "No state income tax — constitutionally protected",
      "All retirement income including Social Security, IRA, and 401(k) is state-tax-free",
      "No estate or inheritance tax at the state level",
      "Homestead Exemption reduces assessed home value by up to $50,000 for property tax"
    ],
    note: null,
    noTaxNote: "Florida has no state income tax, making it one of the most tax-friendly states for residents and retirees.",
    overview: "Florida has no state income tax on wages, salaries, retirement income, or investment income — making it one of the most financially attractive states for residents, especially retirees and high earners relocating from states like New York or California. Florida is one of only nine states with no broad-based personal income tax, and it has maintained this status constitutionally, making it unlikely to change. To put the savings in perspective: a Florida resident earning $100,000 per year pays $0 in state income tax. That same resident living in California would owe approximately $7,000 or more in state income tax annually. Over a 20-year retirement, this difference can amount to hundreds of thousands of dollars. Florida funds its government primarily through a 6% statewide sales tax, with many counties adding a local surtax that brings combined rates to 7% or higher. Property taxes in Florida are moderate by national standards and homeowners can benefit from the Homestead Exemption, which reduces the assessed value of a primary residence by up to $50,000 for property tax purposes. Florida also has no estate or inheritance tax at the state level, which is a significant benefit for wealth transfer planning. Social Security benefits, pension income, IRA distributions, and 401(k) withdrawals are all free of state income tax in Florida. Federal income tax still applies to all taxable income for Florida residents, using the same brackets and rules as every other state.",
    revenueUrl: { label: "Florida Department of Revenue", url: "https://floridarevenue.com/" }
  },
  {
    name: "Georgia", abbr: "GA", slug: "georgia", hasIncomeTax: true,
    topRate: 5.49, bottomRate: 5.49, brackets: "5.49% flat",
    salesTax: "7.39%", filingDeadline: "April 15",
    keyFacts: [
      "Rate scheduled to gradually decline to 4.99% over coming years",
      "Retirement income exclusion of up to $65,000 per person for residents 65+",
      "Standard deduction: $5,400 single / $7,100 married",
      "Personal exemption of $2,700 per taxpayer, $3,000 per dependent"
    ],
    note: "Georgia moved to a flat income tax rate of 5.49% in 2024, with the rate set to gradually decline in future years.",
    noTaxNote: null,
    overview: "Georgia uses a flat income tax rate of 5.49% for 2024, with the rate scheduled to gradually decrease to 4.99% over time under legislation enacted in recent years. Georgia allows a standard deduction of $5,400 for single filers and $7,100 for married couples filing jointly. The state also provides a personal exemption of $2,700 per person and a $3,000 exemption per dependent. Georgia taxes most retirement income but offers a retirement income exclusion of up to $65,000 per person for residents 65 and older, making it increasingly attractive for retirees.",
    revenueUrl: { label: "Georgia Department of Revenue", url: "https://dor.georgia.gov/" }
  },
  {
    name: "Hawaii", abbr: "HI", slug: "hawaii", hasIncomeTax: true,
    topRate: 11, bottomRate: 1.4, brackets: "1.4%–11%",
    salesTax: "4.44%", filingDeadline: "April 20",
    keyFacts: [
      "Second-highest top state income tax rate in the country at 11%",
      "Very low standard deduction: $2,200 single / $4,400 married",
      "General Excise Tax (4%–4.5%) functions like a sales tax",
      "Does not conform to many federal tax provisions"
    ],
    note: "Hawaii has the highest top marginal income tax rate in the country at 11%, with 12 graduated brackets.",
    noTaxNote: null,
    overview: "Hawaii has the highest top marginal state income tax rate among all states at 11%, which applies to income above $200,000 for single filers. Hawaii uses a graduated system with twelve brackets beginning at 1.4% on income up to $2,400. The standard deduction in Hawaii is $2,200 for single filers and $4,400 for married couples — among the lowest in the country. Hawaii does not conform to many federal tax provisions, so residents must recalculate certain items under state rules. Hawaii also imposes a General Excise Tax in lieu of a traditional sales tax, which is effectively passed on to consumers at rates ranging from 4% to 4.5%.",
    revenueUrl: { label: "Hawaii Department of Taxation", url: "https://tax.hawaii.gov/" }
  },
  {
    name: "Idaho", abbr: "ID", slug: "idaho", hasIncomeTax: true,
    topRate: 5.8, bottomRate: 5.8, brackets: "5.8% flat",
    salesTax: "6.03%", filingDeadline: "April 15",
    keyFacts: [
      "Flat 5.8% rate following recent legislative simplification",
      "Grocery credit of $120 per person offsets sales tax on food",
      "Social Security exempt from state income tax for most filers",
      "Conforms broadly to federal income definitions"
    ],
    note: "Idaho moved to a flat income tax rate of 5.8% in 2023.",
    noTaxNote: null,
    overview: "Idaho has a flat state income tax rate of 5.8% on all taxable income for 2025, following recent legislative changes that simplified the state's previous graduated bracket structure. Idaho generally conforms to federal definitions of income and deductions, making state tax preparation relatively straightforward for most residents. The state offers a grocery credit — a refundable credit that helps offset the sales tax paid on food — of $120 per person including dependents. Idaho also allows a deduction for retirement income for qualifying residents, and Social Security benefits are exempt from state income tax for most filers.",
    revenueUrl: { label: "Idaho State Tax Commission", url: "https://tax.idaho.gov/" }
  },
  {
    name: "Illinois", abbr: "IL", slug: "illinois", hasIncomeTax: true,
    topRate: 4.95, bottomRate: 4.95, brackets: "4.95% flat",
    salesTax: "8.86%", filingDeadline: "April 15",
    keyFacts: [
      "Most retirement income — Social Security, pensions, 401(k), IRA — fully exempt",
      "No standard deduction, but $2,425 personal exemption per return",
      "Property taxes among the highest in the nation, especially in Chicago metro",
      "Combined state and local sales tax burden is significant"
    ],
    note: "Illinois uses a flat income tax rate of 4.95% for all taxpayers.",
    noTaxNote: null,
    overview: "Illinois imposes a flat income tax rate of 4.95% on all net income, regardless of filing status or income level. Illinois does not allow a standard deduction or graduated brackets, but it does provide a personal exemption of $2,425 per return. One notable feature of Illinois tax law is that most retirement income — including Social Security, pension income, and distributions from qualified retirement plans like 401(k)s and IRAs — is fully exempt from state income tax. Illinois has a relatively high combined state and local sales tax burden, and property taxes are among the highest in the nation, particularly in the Chicago metro area.",
    revenueUrl: { label: "Illinois Department of Revenue", url: "https://tax.illinois.gov/" }
  },
  {
    name: "Indiana", abbr: "IN", slug: "indiana", hasIncomeTax: true,
    topRate: 3.05, bottomRate: 3.05, brackets: "3.05% flat",
    salesTax: "7.00%", filingDeadline: "April 15",
    keyFacts: [
      "County income taxes vary from 0.5% to 3.38% on top of the state rate",
      "Rate reductions scheduled in future years under ongoing reform",
      "$1,000 personal exemption per taxpayer plus exemptions for dependents",
      "Additional $1,000 exemption for residents over 65, blind, or disabled"
    ],
    note: "Indiana uses a flat income tax rate of 3.05% for all taxpayers, with additional county-level taxes varying by location.",
    noTaxNote: null,
    overview: "Indiana uses a flat state income tax rate of 3.05% for 2024, with reductions scheduled in future years as part of ongoing tax reform legislation. Indiana also allows county income taxes, which vary by county and generally range from 0.5% to 3.38%, meaning your total Indiana income tax rate depends on where you live. Indiana provides a $1,000 personal exemption per taxpayer and an additional exemption for dependents. The state also offers a $1,000 exemption for residents over 65 and for those who are blind or disabled. Indiana generally conforms to federal adjusted gross income with certain modifications.",
    revenueUrl: { label: "Indiana Department of Revenue", url: "https://www.in.gov/dor/" }
  },
  {
    name: "Iowa", abbr: "IA", slug: "iowa", hasIncomeTax: true,
    topRate: 3.8, bottomRate: 3.8, brackets: "3.8% flat",
    salesTax: "6.94%", filingDeadline: "April 30",
    keyFacts: [
      "Rate has dropped dramatically from prior years under multi-year reform",
      "Social Security income fully exempt from state income tax",
      "Retirement income exemption available for residents 55 and older",
      "Rate expected to continue declining through 2026"
    ],
    note: "Iowa moved to a flat income tax rate of 3.8% in 2025 as part of a multi-year tax reform effort.",
    noTaxNote: null,
    overview: "Iowa has a flat income tax rate of 3.8% for 2025, down significantly from prior years as the state phases in tax cuts through 2026. Iowa previously used a complex graduated system with many brackets, but reforms signed in 2022 are simplifying the system considerably. Iowa exempts Social Security income from state income tax and offers retirement income exemptions for qualifying taxpayers 55 and older. The state allows a standard deduction of $2,210 for single filers and $5,450 for married couples filing jointly. Iowa also permits deductions for federal income taxes paid under certain circumstances.",
    revenueUrl: { label: "Iowa Department of Revenue", url: "https://tax.iowa.gov/" }
  },
  {
    name: "Kansas", abbr: "KS", slug: "kansas", hasIncomeTax: true,
    topRate: 5.7, bottomRate: 3.1, brackets: "3.1%–5.7%",
    salesTax: "8.69%", filingDeadline: "April 15",
    keyFacts: [
      "Just two brackets: 3.1% up to $15,000 and 5.7% above for single filers",
      "Social Security exempt for residents with AGI below $75,000",
      "Military retirement pay fully exempt from state income tax",
      "Food sales tax credit offsets grocery tax burden"
    ],
    note: "Kansas has a two-bracket graduated income tax with rates of 3.1% and 5.7%.",
    noTaxNote: null,
    overview: "Kansas imposes income tax using two brackets: 3.1% on income up to $15,000 for single filers and 5.7% on income above that threshold. Married couples filing jointly pay 3.1% on income up to $30,000 and 5.7% above that. Kansas offers a standard deduction of $3,500 for single filers and $8,000 for married couples. Social Security income is exempt from Kansas state income tax for residents with federal adjusted gross income below $75,000. Kansas also provides a food sales tax credit to offset the burden of the state's sales tax on groceries, and military retirement pay is fully exempt from state income tax.",
    revenueUrl: { label: "Kansas Department of Revenue", url: "https://www.ksrevenue.gov/" }
  },
  {
    name: "Kentucky", abbr: "KY", slug: "kentucky", hasIncomeTax: true,
    topRate: 4, bottomRate: 4, brackets: "4.0% flat",
    salesTax: "6.00%", filingDeadline: "April 15",
    keyFacts: [
      "Rate reduced from 4.5% to 4.0% in 2024 with further cuts planned",
      "Up to $31,110 of pension and retirement income exempt",
      "Social Security benefits fully exempt from state tax",
      "Local occupational taxes apply in many counties and cities"
    ],
    note: "Kentucky uses a flat income tax rate of 4.0% for all taxpayers.",
    noTaxNote: null,
    overview: "Kentucky has a flat state income tax rate of 4.0% for 2024, reduced from 4.5% in 2023 as part of a legislative plan to gradually lower the rate over time. Kentucky does not use graduated brackets, making calculations straightforward. The state provides a standard deduction of $3,160 for all filers and a personal credit of $10 per exemption. Kentucky exempts up to $31,110 of pension and retirement income from state income tax for qualifying residents, and Social Security benefits are fully exempt. The state also imposes a limited liability entity tax on businesses and a local occupational tax in many counties and cities.",
    revenueUrl: { label: "Kentucky Department of Revenue", url: "https://revenue.ky.gov/" }
  },
  {
    name: "Louisiana", abbr: "LA", slug: "louisiana", hasIncomeTax: true,
    topRate: 4.25, bottomRate: 1.85, brackets: "1.85%–4.25%",
    salesTax: "9.56%", filingDeadline: "May 15",
    keyFacts: [
      "Deduction allowed for federal income taxes paid — rare benefit",
      "Most retirement income including Social Security and military pay fully exempt",
      "Personal exemption: $4,500 single / $9,000 married",
      "Highest average combined sales tax rate in the nation"
    ],
    note: "Louisiana has a graduated income tax with rates from 1.85% to 4.25% across 3 brackets.",
    noTaxNote: null,
    overview: "Louisiana uses a graduated income tax with rates of 1.85% on income up to $12,500, 3.5% on income from $12,501 to $50,000, and 4.25% on income above $50,000 for single filers. Louisiana allows a deduction for federal income taxes paid, which is one of the few states to offer this benefit and can substantially reduce your Louisiana taxable income. The state also provides a personal exemption of $4,500 for single filers and $9,000 for married couples. Louisiana exempts most retirement income, including Social Security, teacher retirement, and military retirement pay, from state income tax.",
    revenueUrl: { label: "Louisiana Department of Revenue", url: "https://revenue.louisiana.gov/" }
  },
  {
    name: "Maine", abbr: "ME", slug: "maine", hasIncomeTax: true,
    topRate: 7.15, bottomRate: 5.8, brackets: "5.8%–7.15%",
    salesTax: "5.50%", filingDeadline: "April 15",
    keyFacts: [
      "Three brackets all starting at 5.8% or higher",
      "Standard deduction equals the federal standard deduction amount",
      "Property tax fairness credit available for low/moderate income residents",
      "Social Security partially taxable — exemption for lower-income retirees"
    ],
    note: "Maine has a graduated income tax with rates from 5.8% to 7.15% across 3 brackets.",
    noTaxNote: null,
    overview: "Maine uses a graduated income tax with three brackets for 2025: 5.8% on income up to $24,500 for single filers, 6.75% on income from $24,501 to $58,050, and 7.15% on income above $58,050. Maine provides a standard deduction equal to the federal standard deduction and also conforms closely to federal definitions of income and deductions. The state offers a property tax fairness credit for lower- and moderate-income residents and a sales tax fairness credit as well. Maine partially taxes Social Security benefits using the same method as the federal government, but offers an exemption for lower-income retirees.",
    revenueUrl: { label: "Maine Revenue Services", url: "https://www.maine.gov/revenue/" }
  },
  {
    name: "Maryland", abbr: "MD", slug: "maryland", hasIncomeTax: true,
    topRate: 5.75, bottomRate: 2, brackets: "2%–5.75%",
    salesTax: "6.00%", filingDeadline: "April 15",
    keyFacts: [
      "County and Baltimore City local income taxes add 2.25%–3.2% on top of state rate",
      "Additional 1.75% surtax on income above $100,000 for single filers",
      "Property taxes among the highest in the Mid-Atlantic region",
      "First $35,000 of military retirement pay exempt for qualifying residents"
    ],
    note: "Maryland has a graduated income tax with rates from 2% to 5.75%, plus local income taxes that vary by county.",
    noTaxNote: null,
    overview: "Maryland has a graduated state income tax with eight brackets ranging from 2% to 5.75%, plus an additional 1.75% surtax on income above $100,000 for single filers. Beyond state income tax, Maryland counties and Baltimore City each impose a local income tax ranging from 2.25% to 3.2%, making Maryland's combined state and local income tax one of the higher burdens in the country. Maryland provides a standard deduction of 15% of adjusted gross income, with a minimum of $1,700 and a maximum of $2,550 for single filers. The state exempts the first $35,000 of military retirement pay for qualifying residents.",
    revenueUrl: { label: "Maryland Comptroller", url: "https://www.marylandtaxes.gov/" }
  },
  {
    name: "Massachusetts", abbr: "MA", slug: "massachusetts", hasIncomeTax: true,
    topRate: 9, bottomRate: 5, brackets: "5%–9%",
    salesTax: "6.25%", filingDeadline: "April 15",
    keyFacts: [
      "Flat 5% rate on most income; 9% effective top rate above $1 million (Fair Share Amendment)",
      "Short-term capital gains taxed at higher 8.5% rate",
      "Social Security benefits not taxed at state level",
      "Personal exemption: $4,400 single / $8,800 married"
    ],
    note: "Massachusetts uses a flat 5% income tax rate for most income, with a 4% surtax on income over $1 million.",
    noTaxNote: null,
    overview: "Massachusetts imposes a flat income tax rate of 5% on most income, with a higher surtax of 4% on income above $1 million, making the effective top rate 9% for very high earners under the Fair Share Amendment passed in 2022. Massachusetts taxes most income at the flat rate, including wages, interest, dividends, and long-term capital gains. Short-term capital gains are taxed at 8.5%. Massachusetts allows a personal exemption of $4,400 for single filers and $8,800 for married couples. The state does not tax Social Security benefits, and certain pension income for state and municipal employees is exempt.",
    revenueUrl: { label: "Massachusetts Department of Revenue", url: "https://www.mass.gov/orgs/massachusetts-department-of-revenue" }
  },
  {
    name: "Michigan", abbr: "MI", slug: "michigan", hasIncomeTax: true,
    topRate: 4.05, bottomRate: 4.05, brackets: "4.05% flat",
    salesTax: "6.00%", filingDeadline: "April 15",
    keyFacts: [
      "Rate adjusted slightly based on state revenue triggers in law",
      "Social Security benefits fully exempt from state income tax",
      "Pension exemption varies by birth year — most favorable for those born before 1946",
      "Detroit charges additional 2.4% city income tax on residents"
    ],
    note: "Michigan uses a flat income tax rate of 4.05% for all taxpayers, with additional city income taxes in some areas.",
    noTaxNote: null,
    overview: "Michigan uses a flat income tax rate of 4.05% for 2024, adjusted slightly from previous years based on revenue triggers in state law. Michigan provides a personal exemption of $5,600 per taxpayer and dependent, which reduces taxable income for most residents. The state exempts Social Security benefits from income tax and offers varying levels of pension exemption depending on the taxpayer's birth year, with residents born before 1946 receiving the most favorable treatment. Michigan cities may also impose a local income tax — Detroit charges 2.4% on residents and 1.2% on nonresidents — so your total tax burden depends on where you live and work.",
    revenueUrl: { label: "Michigan Department of Treasury", url: "https://www.michigan.gov/taxes" }
  },
  {
    name: "Minnesota", abbr: "MN", slug: "minnesota", hasIncomeTax: true,
    topRate: 9.85, bottomRate: 5.35, brackets: "5.35%–9.85%",
    salesTax: "7.49%", filingDeadline: "April 15",
    keyFacts: [
      "Top 9.85% rate on income above $183,340 for single filers",
      "Social Security partially taxable for higher-income residents",
      "Standard deduction equal to the federal standard deduction",
      "Renter's property tax credit available for qualifying residents"
    ],
    note: "Minnesota has a graduated income tax with rates from 5.35% to 9.85% across 4 brackets.",
    noTaxNote: null,
    overview: "Minnesota has a graduated state income tax with four brackets ranging from 5.35% to 9.85% for 2025. Single filers enter the top 9.85% bracket on income above $183,340, making Minnesota one of the higher-tax states in the country. Minnesota provides a standard deduction equal to the federal standard deduction and also offers a dependent exemption credit. The state taxes a portion of Social Security income for higher-income residents, though lower-income retirees may qualify for a partial subtraction. Minnesota also offers education-related credits and a renter's property tax credit for qualifying residents.",
    revenueUrl: { label: "Minnesota Department of Revenue", url: "https://www.revenue.state.mn.us/" }
  },
  {
    name: "Mississippi", abbr: "MS", slug: "mississippi", hasIncomeTax: true,
    topRate: 4.7, bottomRate: 4.7, brackets: "4.7% flat",
    salesTax: "7.07%", filingDeadline: "April 15",
    keyFacts: [
      "Rate dropping to 4% by 2026 under phased tax cut legislation",
      "Social Security, most pensions, and military retirement fully exempt",
      "Generous standard deduction and personal exemption for a low-cost state",
      "Among the most retirement-friendly tax climates in the South"
    ],
    note: "Mississippi moved to a flat income tax rate of 4.7% in 2024, with the rate set to decline further in coming years.",
    noTaxNote: null,
    overview: "Mississippi has a flat income tax rate of 4.7% for 2024, reduced from 5% as part of a phased tax cut that will lower the rate to 4% by 2026. The state provides a standard deduction of $2,300 for single filers and $4,600 for married couples filing jointly, plus a personal exemption of $6,000 for single filers and $12,000 for married couples. Mississippi fully exempts Social Security income, most retirement income including public and private pensions, and military retirement pay from state income tax. Mississippi's relatively low cost of living and modest tax burden make it an attractive state for retirees on fixed incomes.",
    revenueUrl: { label: "Mississippi Department of Revenue", url: "https://www.dor.ms.gov/" }
  },
  {
    name: "Missouri", abbr: "MO", slug: "missouri", hasIncomeTax: true,
    topRate: 4.8, bottomRate: 2, brackets: "2%–4.8%",
    salesTax: "8.29%", filingDeadline: "April 15",
    keyFacts: [
      "Top rate applies to income above just $9,000 for single filers",
      "Deduction for federal income taxes paid up to $5,000 single / $10,000 married",
      "Social Security and public pension income fully exempt",
      "Military retirement pay fully exempt from state income tax"
    ],
    note: "Missouri has a graduated income tax with rates from 2% to 4.8%, with the top rate applying to income above $9,000.",
    noTaxNote: null,
    overview: "Missouri uses a graduated income tax system with rates starting at 2% and reaching a top rate of 4.8% for 2024 on income above $9,000, following a series of phased tax reductions. Missouri allows a deduction for federal income taxes paid, up to $5,000 for single filers and $10,000 for married couples, which can meaningfully reduce state taxable income. The state provides a standard deduction equal to the federal standard deduction. Missouri fully exempts Social Security benefits and 100% of public pension income for qualifying retirees. Military retirement pay is also fully exempt from Missouri state income tax.",
    revenueUrl: { label: "Missouri Department of Revenue", url: "https://dor.mo.gov/" }
  },
  {
    name: "Montana", abbr: "MT", slug: "montana", hasIncomeTax: true,
    topRate: 6.75, bottomRate: 1, brackets: "1%–6.75%",
    salesTax: "0%", filingDeadline: "April 15",
    keyFacts: [
      "No state sales tax",
      "Standard deduction is 20% of AGI with a cap — more generous than most states",
      "2% capital gains credit on qualifying net long-term gains",
      "Social Security exempt below certain income thresholds"
    ],
    note: "Montana has a graduated income tax with rates from 1% to 6.75% following a 2021 simplification of its tax code.",
    noTaxNote: null,
    overview: "Montana imposes a graduated income tax with rates ranging from 1% to 6.75% for 2024, following a 2021 reform that simplified the previous seven-bracket system. Single filers reach the top 6.75% rate on income above $20,500. Montana provides a standard deduction of 20% of adjusted gross income, with a minimum of $4,930 and a maximum of $9,860 for single filers. Montana allows a credit for income taxes paid to other states and provides a capital gains credit equal to 2% of qualifying net long-term capital gains. The state does not tax Social Security income below certain thresholds.",
    revenueUrl: { label: "Montana Department of Revenue", url: "https://mtrevenue.gov/" }
  },
  {
    name: "Nebraska", abbr: "NE", slug: "nebraska", hasIncomeTax: true,
    topRate: 5.84, bottomRate: 2.46, brackets: "2.46%–5.84%",
    salesTax: "6.94%", filingDeadline: "April 15",
    keyFacts: [
      "Rates set to continue declining toward a 3.99% flat rate by 2027",
      "Social Security exempt for AGI below $44,460 single / $59,100 married",
      "Standard deduction equals the federal standard deduction",
      "Most other retirement income including IRA and private pensions taxed"
    ],
    note: "Nebraska has a graduated income tax with rates from 2.46% to 5.84%, with further reductions planned.",
    noTaxNote: null,
    overview: "Nebraska uses a graduated income tax with four brackets ranging from 2.46% to 5.84% for 2024, with rates scheduled to continue decreasing under legislation that targets a 3.99% flat rate by 2027. Nebraska provides a standard deduction equal to the federal standard deduction and conforms closely to federal income definitions. The state exempts Social Security income from state income tax for residents with federal AGI below $44,460 for single filers and $59,100 for married couples, with a partial exemption available above those thresholds. Nebraska taxes most other retirement income, including IRA distributions and private pensions.",
    revenueUrl: { label: "Nebraska Department of Revenue", url: "https://revenue.nebraska.gov/" }
  },
  {
    name: "Nevada", abbr: "NV", slug: "nevada", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    salesTax: "8.23%", filingDeadline: "April 15 (federal only)",
    keyFacts: [
      "No state income tax — funded by gaming, sales taxes, and business fees",
      "No inheritance or estate tax at the state level",
      "Combined sales tax rate among the higher in the West",
      "No filing requirement for state income tax return"
    ],
    note: null,
    noTaxNote: "Nevada has no state income tax, relying instead on gaming and sales taxes for state revenue.",
    overview: "Nevada has no state income tax on personal income, making it one of seven states to offer this benefit. Nevada funds its state government primarily through gaming taxes, sales taxes, and various business fees rather than a personal income tax. The statewide sales tax rate is 6.85%, with local additions bringing the combined rate as high as 8.265% in some areas. Nevada residents still owe federal income tax on all taxable income. The absence of a state income tax is a significant financial benefit, particularly for high earners and retirees, and has contributed to Nevada's reputation as one of the more tax-friendly states in the western United States.",
    revenueUrl: { label: "Nevada Department of Taxation", url: "https://tax.nv.gov/" }
  },
  {
    name: "New Hampshire", abbr: "NH", slug: "new-hampshire", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    salesTax: "0%", filingDeadline: "April 15 (federal only)",
    keyFacts: [
      "No tax on wages or salaries — interest/dividend tax being phased out",
      "No state sales tax",
      "Property taxes among the highest in the country",
      "No capital gains tax at the state level"
    ],
    note: null,
    noTaxNote: "New Hampshire has no broad-based income tax on wages. A tax on interest and dividends is being phased out.",
    overview: "New Hampshire does not impose a broad-based state income tax on wages or salaries. Historically, New Hampshire taxed interest and dividend income, but this tax is being phased out and is scheduled for full repeal. New Hampshire residents who earn investment income should verify the current status for their tax year. The state has no sales tax and no capital gains tax at the state level. New Hampshire relies heavily on property taxes to fund local governments, and property tax rates are among the highest in the country. Federal income tax applies to all taxable income regardless of state residency.",
    revenueUrl: { label: "New Hampshire Department of Revenue Administration", url: "https://www.revenue.nh.gov/" }
  },
  {
    name: "New Jersey", abbr: "NJ", slug: "new-jersey", hasIncomeTax: true,
    topRate: 10.75, bottomRate: 1.4, brackets: "1.4%–10.75%",
    salesTax: "6.60%", filingDeadline: "April 15",
    keyFacts: [
      "Property taxes average over $9,000/year — highest in the nation",
      "Social Security and Railroad Retirement benefits fully exempt",
      "Property tax deduction/credit up to $1,500 for homeowners and renters",
      "No standard deduction for single filers, but personal exemptions available"
    ],
    note: "New Jersey has a graduated income tax with rates from 1.4% to 10.75% across 7 brackets.",
    noTaxNote: null,
    overview: "New Jersey has one of the most progressive income tax systems in the country, with seven brackets ranging from 1.4% to 10.75% for 2025. Here is how the brackets apply to single filers: 1.4% on income up to $20,000; 1.75% on $20,001–$35,000; 3.5% on $35,001–$40,000; 5.525% on $40,001–$75,000; 6.37% on $75,001–$500,000; 8.97% on $500,001–$1,000,000; and 10.75% on income above $1,000,000. Married couples filing jointly have different bracket thresholds. To illustrate with a real example: a single New Jersey filer earning $60,000 in taxable income owes approximately $2,202 in state income tax — an effective rate of about 3.7%, even though dollars above $40,000 are taxed at 5.525%. New Jersey provides a property tax credit of up to $1,500 for homeowners and renters, and exempts Social Security and Railroad Retirement benefits from state income tax. The state does not provide a standard deduction for single filers, but does offer personal exemptions of $1,000 per taxpayer and various credits. New Jersey is notable for having some of the highest property taxes in the nation, averaging over $9,000 per year statewide, which is important context when evaluating overall tax burden. Military retirement pay is fully exempt for New Jersey residents.",
    revenueUrl: { label: "New Jersey Division of Taxation", url: "https://www.njtaxation.org/" }
  },
  {
    name: "New Mexico", abbr: "NM", slug: "new-mexico", hasIncomeTax: true,
    topRate: 5.9, bottomRate: 1.7, brackets: "1.7%–5.9%",
    salesTax: "7.83%", filingDeadline: "April 15",
    keyFacts: [
      "Social Security exempt for income below $100,000 single / $150,000 married",
      "Working families tax credit modeled on federal EITC",
      "Standard deduction equals the federal standard deduction",
      "Low-income comprehensive tax rebate available for qualifying residents"
    ],
    note: "New Mexico has a graduated income tax with rates from 1.7% to 5.9% across 5 brackets.",
    noTaxNote: null,
    overview: "New Mexico uses a graduated income tax with five brackets ranging from 1.7% to 5.9% for 2024. Single filers reach the top rate on income above $157,000. New Mexico provides a standard deduction equal to the federal standard deduction and conforms broadly to federal income definitions. Social Security benefits are generally exempt from New Mexico income tax for residents with income below $100,000 for single filers and $150,000 for married couples. New Mexico also offers a low-income comprehensive tax rebate and a working families tax credit modeled on the federal Earned Income Tax Credit.",
    revenueUrl: { label: "New Mexico Taxation and Revenue Department", url: "https://www.tax.newmexico.gov/" }
  },
  {
    name: "New York", abbr: "NY", slug: "new-york", hasIncomeTax: true,
    topRate: 10.9, bottomRate: 4, brackets: "4%–10.9%",
    salesTax: "8.53%", filingDeadline: "April 15",
    keyFacts: [
      "NYC residents pay an additional city income tax of 3.078%–3.876%",
      "Metropolitan Commuter Transportation Mobility Tax applies in NYC metro area",
      "Top 10.9% rate applies to income above $25 million",
      "Social Security exempt; most pension income from NY public employment exempt"
    ],
    note: "New York has a graduated income tax with rates from 4% to 10.9% and additional New York City taxes for city residents.",
    noTaxNote: null,
    overview: "New York has a graduated state income tax with nine brackets ranging from 4% to 10.9% for 2024. For single filers, the 4% rate applies to income up to $17,150, while the 10.9% top rate applies to income above $25 million. New York City residents face additional city income taxes ranging from 3.078% to 3.876%, making the combined state and city burden one of the highest in the country. Yonkers also imposes a local surcharge. New York provides a standard deduction of $8,000 for single filers and $16,050 for married couples. Social Security income is fully exempt. New York offers a resident credit for taxes paid to other states and provides various credits including an Earned Income Credit equal to 30% of the federal credit.",
    revenueUrl: { label: "New York State Department of Taxation and Finance", url: "https://www.tax.ny.gov/" }
  },
  {
    name: "North Carolina", abbr: "NC", slug: "north-carolina", hasIncomeTax: true,
    topRate: 4.5, bottomRate: 4.5, brackets: "4.5% flat",
    salesTax: "6.99%", filingDeadline: "April 15",
    keyFacts: [
      "Flat rate scheduled to drop to 3.99% by 2026 and potentially lower thereafter",
      "Standard deduction: $10,750 single / $21,500 married — relatively generous",
      "Military retirement pay fully exempt from state income tax",
      "Social Security exempt; most other retirement income taxable"
    ],
    note: "North Carolina uses a flat income tax rate of 4.5% for all taxpayers, with further reductions planned.",
    noTaxNote: null,
    overview: "North Carolina has a flat income tax rate of 4.5% for 2024, with further reductions scheduled toward 3.99% by 2026 under legislation passed in 2021. North Carolina provides a standard deduction of $10,750 for single filers and $21,500 for married couples filing jointly — one of the more generous state deductions in the country. The state exempts military retirement pay, Social Security, and railroad retirement benefits from income tax. Most other retirement income, including private pensions and IRA distributions, is taxable at the flat rate. North Carolina residents also benefit from a child deduction of $500 per qualifying child.",
    revenueUrl: { label: "North Carolina Department of Revenue", url: "https://www.ncdor.gov/" }
  },
  {
    name: "North Dakota", abbr: "ND", slug: "north-dakota", hasIncomeTax: true,
    topRate: 2.5, bottomRate: 1.1, brackets: "1.1%–2.5%",
    salesTax: "6.97%", filingDeadline: "April 15",
    keyFacts: [
      "One of the lowest top marginal income tax rates among states with income tax",
      "Single filers with income below $44,725 owe no state income tax",
      "Conforms broadly to federal income definitions",
      "No tax on Social Security income"
    ],
    note: "North Dakota has a graduated income tax with rates from 1.1% to 2.5%, among the lowest in the country.",
    noTaxNote: null,
    overview: "North Dakota has one of the lowest income tax burdens in the country, with graduated rates ranging from 1.1% to 2.5% for 2024. The 2.5% top rate applies to income above $225,975 for single filers. Importantly, North Dakota eliminated income tax for single filers with taxable income below $44,725 and for married filers below $74,750 as of 2024, effectively eliminating state income taxes for most lower- and middle-income residents. North Dakota conforms closely to federal income definitions and does not impose a tax on Social Security income.",
    revenueUrl: { label: "North Dakota Office of State Tax Commissioner", url: "https://www.nd.gov/tax/" }
  },
  {
    name: "Ohio", abbr: "OH", slug: "ohio", hasIncomeTax: true,
    topRate: 3.5, bottomRate: 0, brackets: "0%–3.5%",
    salesTax: "7.24%", filingDeadline: "April 15",
    keyFacts: [
      "Income below $26,050 is exempt from state income tax",
      "Municipal income taxes vary significantly — many cities charge 1%–3%",
      "Business income deduction allows first $250,000 of business income tax-free",
      "Social Security exempt; retirement income credit available for seniors"
    ],
    note: "Ohio has a graduated income tax with rates from 0% to 3.5%. The state also has municipal income taxes in many cities.",
    noTaxNote: null,
    overview: "Ohio has a graduated state income tax with the lowest bracket starting at 0% — income up to $26,050 is fully exempt. Rates increase progressively to a top rate of 3.5% on income above $115,300 for 2024. Ohio also imposes municipal income taxes, which vary widely by city but commonly range from 1% to 3% in urban areas. Municipal taxes can be a significant part of Ohio residents' total income tax burden. Ohio provides a business income deduction that allows the first $250,000 of business income to be taxed at a flat 3% rather than regular rates. Social Security benefits are exempt from Ohio state income tax, and the state provides a retirement income credit for seniors.",
    revenueUrl: { label: "Ohio Department of Taxation", url: "https://tax.ohio.gov/" }
  },
  {
    name: "Oklahoma", abbr: "OK", slug: "oklahoma", hasIncomeTax: true,
    topRate: 4.75, bottomRate: 0.25, brackets: "0.25%–4.75%",
    salesTax: "8.99%", filingDeadline: "April 15",
    keyFacts: [
      "Top 4.75% rate on income above $7,200 for single filers",
      "Federal AGI is the starting point with Oklahoma-specific modifications",
      "Military retirement pay fully exempt from state income tax",
      "Social Security exempt from state income tax"
    ],
    note: "Oklahoma has a graduated income tax with rates from 0.25% to 4.75% across 6 brackets.",
    noTaxNote: null,
    overview: "Oklahoma has a graduated income tax with six brackets ranging from 0.25% to 4.75% for 2024. The top rate of 4.75% applies to income above $7,200 for single filers and $12,200 for married couples filing jointly — thresholds that have not been adjusted for inflation, meaning most Oklahoma taxpayers pay the top rate on the bulk of their income. Oklahoma uses federal AGI as its starting point with a handful of state-specific modifications. The state fully exempts Social Security income and military retirement pay from state income tax. Oklahoma also offers a credit for child care expenses and an Earned Income Credit equal to 5% of the federal credit.",
    revenueUrl: { label: "Oklahoma Tax Commission", url: "https://oklahoma.gov/tax.html" }
  },
  {
    name: "Oregon", abbr: "OR", slug: "oregon", hasIncomeTax: true,
    topRate: 9.9, bottomRate: 4.75, brackets: "4.75%–9.9%",
    salesTax: "0%", filingDeadline: "April 15",
    keyFacts: [
      "No state sales tax — significant benefit for purchasing",
      "Top 9.9% rate on income above $125,000 for single filers",
      "Federal tax deduction allowed up to $6,950 for single filers",
      "Statewide transit tax of 0.1% and local transit taxes apply in Portland metro"
    ],
    note: "Oregon has a graduated income tax with rates from 4.75% to 9.9% and no state sales tax.",
    noTaxNote: null,
    overview: "Oregon has a graduated income tax with four brackets ranging from 4.75% to 9.9% for 2024. Single filers reach the top 9.9% rate on income above $125,000, and married couples reach it above $250,000. Oregon has no state sales tax, which partially offsets the relatively high income tax rates. Oregon allows a deduction for federal income taxes paid, up to $6,950 for single filers and $13,900 for married couples. Oregon also imposes a statewide transit tax of 0.1% on wages and additional local transit taxes in the Portland metro area. The state personal exemption credit is $236 per exemption.",
    revenueUrl: { label: "Oregon Department of Revenue", url: "https://www.oregon.gov/dor/" }
  },
  {
    name: "Pennsylvania", abbr: "PA", slug: "pennsylvania", hasIncomeTax: true,
    topRate: 3.07, bottomRate: 3.07, brackets: "3.07% flat",
    salesTax: "6.34%", filingDeadline: "April 15",
    keyFacts: [
      "One of the lowest flat income tax rates in the country at 3.07%",
      "No standard deduction and no personal exemption",
      "Most retirement income — Social Security, pensions, IRA, 401(k) — fully exempt",
      "Local Earned Income Taxes vary widely by municipality, commonly 1%–3%"
    ],
    note: "Pennsylvania uses a flat income tax rate of 3.07% for all taxpayers, one of the lowest flat rates in the country.",
    noTaxNote: null,
    overview: "Pennsylvania imposes a flat income tax rate of 3.07% on all taxable compensation and net income — one of the lowest flat rates in the country. Pennsylvania does not allow a standard deduction or personal exemption, but its rate is low enough that most residents still have a modest state tax burden. One of Pennsylvania's most significant tax benefits is its treatment of retirement income: Social Security, pension payments, IRA distributions, and 401(k) withdrawals are all fully exempt from state income tax, making it extremely retirement-friendly. Most Pennsylvania municipalities also levy a local Earned Income Tax, typically 1% in most areas but as high as 3.8% in Philadelphia, which adds to residents' total local tax burden.",
    revenueUrl: { label: "Pennsylvania Department of Revenue", url: "https://www.revenue.pa.gov/" }
  },
  {
    name: "Rhode Island", abbr: "RI", slug: "rhode-island", hasIncomeTax: true,
    topRate: 5.99, bottomRate: 3.75, brackets: "3.75%–5.99%",
    salesTax: "7.00%", filingDeadline: "April 15",
    keyFacts: [
      "Three brackets with top rate of 5.99% on income above $176,050 for single filers",
      "Standard deduction and exemptions phase out at higher income levels",
      "Social Security exempt for lower-income residents",
      "Credit available for income taxes paid to other states"
    ],
    note: "Rhode Island has a graduated income tax with rates from 3.75% to 5.99% across 3 brackets.",
    noTaxNote: null,
    overview: "Rhode Island has a graduated income tax with three brackets ranging from 3.75% to 5.99% for 2024. The top 5.99% rate applies to income above $176,050 for single filers. Rhode Island provides a standard deduction and personal exemption, though both phase out at higher income levels. The state exempts Social Security income for residents below certain income thresholds, and provides a credit for income taxes paid to other states — useful for Rhode Island residents who commute to Massachusetts. The state also offers an Earned Income Credit equal to 16% of the federal credit.",
    revenueUrl: { label: "Rhode Island Division of Taxation", url: "https://tax.ri.gov/" }
  },
  {
    name: "South Carolina", abbr: "SC", slug: "south-carolina", hasIncomeTax: true,
    topRate: 6.2, bottomRate: 0, brackets: "0%–6.2%",
    salesTax: "7.46%", filingDeadline: "April 15",
    keyFacts: [
      "Rate dropping from 7% to 6.2% as part of phased reductions through 2027",
      "Deduction of up to $15,000 for qualifying retirement income for residents 65+",
      "Social Security fully exempt from state income tax",
      "Active duty military pay exempt; part of military retirement also deductible"
    ],
    note: "South Carolina has a graduated income tax with rates from 0% to 6.2%, with the top rate decreasing in recent years.",
    noTaxNote: null,
    overview: "South Carolina uses a graduated income tax system with rates ranging from 0% to 6.2% for 2024, down from 7% under a phased reduction plan that continues through 2027. The bottom bracket (0%) covers income up to $3,460, and the top rate applies to income above $17,330 for single filers. South Carolina fully exempts Social Security income from state taxes. Residents 65 and older may deduct up to $15,000 of retirement income annually. Active duty military pay is exempt, and a portion of military retirement income may also be deducted. South Carolina conforms broadly to federal income definitions and allows the federal standard deduction.",
    revenueUrl: { label: "South Carolina Department of Revenue", url: "https://dor.sc.gov/" }
  },
  {
    name: "South Dakota", abbr: "SD", slug: "south-dakota", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    salesTax: "6.40%", filingDeadline: "April 15 (federal only)",
    keyFacts: [
      "No state income tax",
      "No inheritance or estate tax",
      "Favorable trust laws make it popular for wealth planning",
      "Sales tax is the primary state revenue source"
    ],
    note: null,
    noTaxNote: "South Dakota has no state income tax and no inheritance tax, making it one of the most tax-friendly states.",
    overview: "South Dakota has no state income tax on personal income, making it one of seven states to offer this benefit. South Dakota also has no inheritance or estate tax and is known for its favorable trust and LLC laws, making it a popular destination for wealth and estate planning. The state funds its government primarily through a state sales tax and various business licenses. South Dakota residents still owe federal income tax on all taxable income. The combination of no income tax, no estate tax, and low overall government burden makes South Dakota consistently ranked among the most tax-friendly states in the nation.",
    revenueUrl: { label: "South Dakota Department of Revenue", url: "https://dor.sd.gov/" }
  },
  {
    name: "Tennessee", abbr: "TN", slug: "tennessee", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    salesTax: "9.55%", filingDeadline: "April 15 (federal only)",
    keyFacts: [
      "No state income tax on wages or salaries",
      "Hall Income Tax on investment income fully repealed as of 2021",
      "Highest average combined sales tax rate in the nation alongside Louisiana",
      "No state estate or inheritance tax"
    ],
    note: null,
    noTaxNote: "Tennessee has no state income tax on wages or salaries. The Hall Income Tax on investment income was fully repealed in 2021.",
    overview: "Tennessee has no state income tax on wages, salaries, or most personal income as of 2021, following the full repeal of the Hall Income Tax that previously applied to investment income. Residents owe no state income tax on earned income of any kind, making Tennessee one of the most income-tax-friendly states. However, Tennessee does have one of the highest combined state and local sales tax rates in the country, averaging around 9.55%. The state also has no estate or inheritance tax. Federal income tax still applies to all taxable income for Tennessee residents.",
    revenueUrl: { label: "Tennessee Department of Revenue", url: "https://www.tn.gov/revenue.html" }
  },
  {
    name: "Texas", abbr: "TX", slug: "texas", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    salesTax: "8.20%", filingDeadline: "April 15 (federal only)",
    keyFacts: [
      "No state income tax — constitutionally prohibited",
      "Property taxes among the highest in the nation",
      "No state estate or inheritance tax",
      "Homestead exemption reduces property tax burden for primary residences"
    ],
    note: null,
    noTaxNote: "Texas has no state income tax. The Texas Constitution prohibits a personal income tax without voter approval.",
    overview: "Texas has no state income tax on personal income — and the Texas Constitution requires a statewide voter referendum to impose one, making this status extremely durable. Texas funds its state government primarily through sales taxes, property taxes, and various business taxes. While residents benefit greatly from no income tax, Texas has some of the highest property tax rates in the nation, which can be significant for homeowners. A Homestead Exemption reduces the taxable value of a primary residence by at least $100,000 for school district taxes. There is no estate or inheritance tax at the state level. Federal income tax still applies to all taxable income for Texas residents.",
    revenueUrl: { label: "Texas Comptroller of Public Accounts", url: "https://comptroller.texas.gov/" }
  },
  {
    name: "Utah", abbr: "UT", slug: "utah", hasIncomeTax: true,
    topRate: 4.55, bottomRate: 4.55, brackets: "4.55% flat",
    salesTax: "7.19%", filingDeadline: "April 15",
    keyFacts: [
      "Flat 4.55% rate starting from federal taxable income",
      "Taxpayer tax credit of $78 per exemption instead of a traditional deduction",
      "Social Security taxable for higher earners but credit available for lower-income retirees",
      "Closely conforms to federal income definitions"
    ],
    note: "Utah uses a flat income tax rate of 4.55% for all taxpayers.",
    noTaxNote: null,
    overview: "Utah has a flat state income tax rate of 4.55% for 2024 on all taxable income. Utah provides a nonrefundable taxpayer tax credit of $78 per exemption rather than a traditional standard deduction, and provides a 6% credit on the federal standard deduction amount, effectively functioning similarly to a deduction. Utah taxes Social Security income for higher-income residents but provides a credit for lower-income retirees that can eliminate or reduce state tax on those benefits. Utah conforms closely to federal income definitions with limited modifications, making it relatively straightforward for most residents to calculate their state income tax using their federal return as a starting point.",
    revenueUrl: { label: "Utah State Tax Commission", url: "https://tax.utah.gov/" }
  },
  {
    name: "Vermont", abbr: "VT", slug: "vermont", hasIncomeTax: true,
    topRate: 8.75, bottomRate: 3.35, brackets: "3.35%–8.75%",
    salesTax: "6.36%", filingDeadline: "April 15",
    keyFacts: [
      "Top 8.75% rate on income above $213,150 for single filers",
      "Standard deduction equals the federal standard deduction",
      "Social Security taxable but exemption available for lower-income residents",
      "Income-tested property tax adjustments for qualifying homeowners and renters"
    ],
    note: "Vermont has a graduated income tax with rates from 3.35% to 8.75% across 4 brackets.",
    noTaxNote: null,
    overview: "Vermont uses a graduated income tax with four brackets ranging from 3.35% to 8.75% for 2024. Single filers reach the top 8.75% rate on income above $213,150. Vermont generally conforms to federal adjusted gross income and provides a standard deduction equal to the federal amount. The state taxes Social Security income but offers an exemption for lower-income residents. Vermont also has a meals and rooms tax and a 6% general sales tax. Vermont offers income-tested property tax adjustments for qualifying homeowners and renters, which can provide meaningful relief for lower- and moderate-income residents.",
    revenueUrl: { label: "Vermont Department of Taxes", url: "https://tax.vermont.gov/" }
  },
  {
    name: "Virginia", abbr: "VA", slug: "virginia", hasIncomeTax: true,
    topRate: 5.75, bottomRate: 2, brackets: "2%–5.75%",
    salesTax: "5.77%", filingDeadline: "May 1",
    keyFacts: [
      "Top 5.75% bracket reached at just $17,001 — not indexed for inflation",
      "Standard deduction: $8,000 single / $16,000 married (recently increased)",
      "Social Security and military retirement income fully exempt",
      "Refundable Earned Income Tax Credit equal to 15% of the federal credit"
    ],
    note: "Virginia has a graduated income tax with rates from 2% to 5.75% across 4 brackets.",
    noTaxNote: null,
    overview: "Virginia uses a graduated income tax with four brackets ranging from 2% to 5.75% for 2024. The brackets for single filers are: 2% on income up to $3,000; 3% on $3,001–$5,000; 5% on $5,001–$17,000; and 5.75% on income above $17,000. Virginia has not indexed its brackets for inflation, which means most taxpayers fall into the top 5.75% bracket relatively quickly — a single filer earning just $17,001 already pays the top rate on their last dollar of income. To illustrate with a real example: a single Virginia filer earning $60,000 in taxable income owes approximately $3,249 in state income tax — an effective rate of about 5.4%. Virginia provides a standard deduction of $8,000 for single filers and $16,000 for married couples filing jointly, significantly increased in recent years. The personal exemption is $930 per taxpayer and dependent. Virginia fully exempts Social Security income from state income tax, and provides an age deduction of $12,000 for residents 65 and older with income below certain thresholds. Active duty military pay earned outside Virginia is generally exempt, and Virginia provides a subtraction for military retirement income as well. Virginia also offers a refundable Earned Income Tax Credit equal to 15% of the federal credit, providing meaningful relief for lower-income working families.",
    revenueUrl: { label: "Virginia Department of Taxation", url: "https://www.tax.virginia.gov/" }
  },
  {
    name: "Washington", abbr: "WA", slug: "washington", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    salesTax: "9.38%", filingDeadline: "April 15 (federal only)",
    keyFacts: [
      "No state income tax on wages or salaries",
      "7% capital gains tax on long-term gains above $250,000 (upheld 2023)",
      "State sales tax 6.5% with local additions up to 10.4% in some areas",
      "Business and Occupation tax applies to business gross receipts"
    ],
    note: null,
    noTaxNote: "Washington has no state income tax. The state has one of the highest sales tax rates in the country and recently introduced a capital gains tax.",
    overview: "Washington State has no state income tax on wages, salaries, or most personal income. Washington does impose a 7% capital gains tax on the sale of long-term capital assets exceeding $250,000 per year, upheld by the Washington Supreme Court in 2023. The state funds its government primarily through a 6.5% state sales tax, with local additions bringing combined rates as high as 10.4% in some areas. Washington also imposes a Business and Occupation tax on business gross receipts. Washington residents owe federal income tax on all taxable income. The absence of a broad-based income tax makes Washington attractive for high earners, though the sales tax burden is notable.",
    revenueUrl: { label: "Washington State Department of Revenue", url: "https://dor.wa.gov/" }
  },
  {
    name: "West Virginia", abbr: "WV", slug: "west-virginia", hasIncomeTax: true,
    topRate: 5.12, bottomRate: 2.36, brackets: "2.36%–5.12%",
    salesTax: "6.59%", filingDeadline: "April 15",
    keyFacts: [
      "Rates have been declining and further cuts are expected",
      "Social Security fully exempt from state income tax",
      "Significant exemption for military and public pension income",
      "Standard deduction: $20,000 for both single and married filers"
    ],
    note: "West Virginia has a graduated income tax with rates from 2.36% to 5.12% and has been reducing its rates.",
    noTaxNote: null,
    overview: "West Virginia uses a graduated income tax with five brackets ranging from 2.36% to 5.12% for 2024, following recent rate reductions. The state is phasing in further tax cuts and may move toward a flat or reduced rate structure in coming years. West Virginia provides a standard deduction of $20,000 for single filers and $20,000 for married couples. The state fully exempts Social Security income from state income tax and provides a significant exemption for military retirement pay and certain public pension income. West Virginia taxes most other retirement income, and the state also offers a credit for income taxes paid to other states.",
    revenueUrl: { label: "West Virginia State Tax Division", url: "https://tax.wv.gov/" }
  },
  {
    name: "Wisconsin", abbr: "WI", slug: "wisconsin", hasIncomeTax: true,
    topRate: 7.65, bottomRate: 3.54, brackets: "3.54%–7.65%",
    salesTax: "5.43%", filingDeadline: "April 15",
    keyFacts: [
      "Top 7.65% rate on income above $304,170 for single filers",
      "Standard deduction phases out above $16,000 income for single filers",
      "Social Security partially taxable; partial subtraction for lower-income retirees",
      "529 college savings contributions deductible from Wisconsin income"
    ],
    note: "Wisconsin has a graduated income tax with rates from 3.54% to 7.65% across 4 brackets.",
    noTaxNote: null,
    overview: "Wisconsin uses a graduated income tax with four brackets ranging from 3.5% to 7.65% for 2024. Single filers pay 3.5% on income up to $13,810 and reach the top 7.65% rate on income above $304,170. Wisconsin provides a standard deduction that phases out at higher income levels — $12,110 for single filers with income below $16,000, phasing to zero above $110,770. The state taxes Social Security income but provides a partial subtraction for lower-income retirees. Wisconsin allows a deduction for contributions to Wisconsin 529 college savings accounts and offers a homestead credit for lower-income residents who own or rent their home.",
    revenueUrl: { label: "Wisconsin Department of Revenue", url: "https://www.revenue.wi.gov/" }
  },
  {
    name: "Wyoming", abbr: "WY", slug: "wyoming", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    salesTax: "5.36%", filingDeadline: "April 15 (federal only)",
    keyFacts: [
      "No state income tax, no corporate income tax, no inheritance or estate tax",
      "Property taxes among the lowest in the nation",
      "Favorable trust and LLC laws popular for wealth planning",
      "State funded primarily through mineral extraction revenues"
    ],
    note: null,
    noTaxNote: "Wyoming has no state income tax. The state relies on mineral severance taxes and federal revenue sharing.",
    overview: "Wyoming has no state income tax on personal income, making it one of seven states to offer this benefit. Wyoming is one of the most tax-friendly states overall — it has no corporate income tax, no inheritance tax, and no estate tax, and its property taxes are among the lowest in the nation. The state funds its government primarily through mineral extraction revenues and a 4% state sales tax, with local additions bringing combined rates up to 6% in some areas. Wyoming's tax environment, combined with its favorable trust and LLC laws, makes it popular for wealth planning and business structuring. Residents still owe federal income tax on all taxable income.",
    revenueUrl: { label: "Wyoming Department of Revenue", url: "https://revenue.wyo.gov/" }
  }
];

module.exports = states;
