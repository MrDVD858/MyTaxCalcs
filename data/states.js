// data/states.js
const states = [
  {
    "name": "Alabama",
    "abbr": "AL",
    "slug": "alabama",
    "hasIncomeTax": true,
    "topRate": 5,
    "bottomRate": 2,
    "brackets": "2%–5%",
    "note": "Alabama has a graduated income tax with rates from 2% to 5%. The state also allows deductions for federal income taxes paid.",
    "noTaxNote": null,
    "overview": "Alabama has a graduated state income tax with three brackets ranging from 2% to 5%. Single filers pay 2% on income up to $500, 4% on income from $501 to $3,000, and 5% on income above $3,000. Married filers have slightly wider brackets, with the 5% top rate kicking in above $6,000. Alabama allows a standard deduction that phases out at higher income levels, and the state also permits a deduction for federal income taxes paid — a relatively rare benefit that can meaningfully reduce your Alabama taxable income. Residents should also factor in county and municipal occupational taxes that apply in many parts of the state.",
    "salesTax": "9.22%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Deduct federal income taxes paid from Alabama taxable income",
      "Standard deduction phases out above $30,000 (single) / $60,000 (joint)",
      "County occupational taxes apply in Jefferson and other counties",
      "No tax on Social Security benefits"
    ],
    "revenueUrl": {
      "label": "Alabama Department of Revenue",
      "url": "https://www.revenue.alabama.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 500,
        "rate": 2
      },
      {
        "min": 500,
        "max": 3000,
        "rate": 4
      },
      {
        "min": 3000,
        "max": null,
        "rate": 5
      }
    ]
  },
  {
    "name": "Alaska",
    "abbr": "AK",
    "slug": "alaska",
    "hasIncomeTax": false,
    "topRate": 0,
    "bottomRate": 0,
    "brackets": "None",
    "note": null,
    "noTaxNote": "Alaska has no state income tax. Residents may even receive an annual Permanent Fund Dividend from the state.",
    "overview": "Alaska is one of only nine states with no broad-based state income tax, meaning residents pay no tax on wages, salaries, or most personal income at the state level. Beyond that, Alaska is the only state with no statewide sales tax, though some municipalities impose local sales taxes. Eligible residents may also receive an annual Permanent Fund Dividend — a payment funded by state oil revenues — which is itself subject to federal income tax. Alaska residents still owe federal income tax based on the same brackets that apply nationwide, making federal tax planning the primary focus for most Alaskans.",
    "salesTax": "1.76%",
    "filingDeadline": "N/A (no state income tax)",
    "keyFacts": [
      "No state income tax and no statewide sales tax",
      "Annual Permanent Fund Dividend is federally taxable",
      "Some municipalities impose local sales taxes up to 7.5%",
      "No state estate, inheritance, or corporate income tax"
    ],
    "revenueUrl": {
      "label": "Alaska Department of Revenue",
      "url": "https://www.tax.alaska.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "Arizona",
    "abbr": "AZ",
    "slug": "arizona",
    "hasIncomeTax": true,
    "topRate": 2.5,
    "bottomRate": 2.5,
    "brackets": "2.5% flat",
    "note": "Arizona uses a flat income tax rate of 2.5% for all taxpayers, one of the lowest flat rates in the country.",
    "noTaxNote": null,
    "overview": "Arizona has a flat state income tax rate of 2.5% on all taxable income as of 2023, following the passage of Proposition 132. This replaced the previous graduated bracket system and makes Arizona one of the simpler states for income tax calculation. The standard deduction for Arizona residents is $13,850 for single filers and $27,700 for married couples filing jointly. Arizona also allows personal exemptions and a range of deductions and credits, including for dependents and charitable contributions made to qualifying organizations in the state.",
    "salesTax": "8.37%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Flat 2.5% rate — one of the lowest flat rates in the U.S.",
      "Conforms closely to federal adjusted gross income as starting point",
      "Arizona does not tax Social Security benefits",
      "No city income tax, but transaction privilege tax applies to businesses"
    ],
    "revenueUrl": {
      "label": "Arizona Department of Revenue",
      "url": "https://azdor.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "Arkansas",
    "abbr": "AR",
    "slug": "arkansas",
    "hasIncomeTax": true,
    "topRate": 4.4,
    "bottomRate": 2,
    "brackets": "2%–4.4%",
    "note": "Arkansas has a graduated income tax with rates from 2% to 4.4%. The state has been reducing its top rate in recent years.",
    "noTaxNote": null,
    "overview": "Arkansas uses a graduated income tax system with rates ranging from 2% to 4.4% for most filers in 2025, following a series of tax cuts enacted in recent years. The top marginal rate applies to income above $89,600. Arkansas offers a low-income tax credit for residents earning below certain thresholds, and the state allows deductions for federal income taxes paid, which can reduce Arkansas taxable income for many filers. The standard deduction in Arkansas is $2,200 for single filers and $4,400 for married couples filing jointly.",
    "salesTax": "9.44%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Top rate dropped to 3.9% as of 2024 (was 4.4%)",
      "Social Security benefits are exempt from state income tax",
      "Military retirement pay fully exempt",
      "Low-income tax tables apply to income under $22,200"
    ],
    "revenueUrl": {
      "label": "Arkansas Department of Finance and Administration",
      "url": "https://www.dfa.arkansas.gov/income-tax/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 5099,
        "rate": 2
      },
      {
        "min": 5100,
        "max": 10299,
        "rate": 3
      },
      {
        "min": 10300,
        "max": 14699,
        "rate": 3.4
      },
      {
        "min": 14700,
        "max": 24299,
        "rate": 3.9
      },
      {
        "min": 24300,
        "max": 89600,
        "rate": 4.4
      },
      {
        "min": 89600,
        "max": null,
        "rate": 4.4
      }
    ]
  },
  {
    "name": "California",
    "abbr": "CA",
    "slug": "california",
    "hasIncomeTax": true,
    "topRate": 13.3,
    "bottomRate": 1,
    "brackets": "1%–13.3%",
    "note": "California has the highest top marginal income tax rate in the country at 13.3%. It uses a graduated rate system with 9 brackets.",
    "noTaxNote": null,
    "overview": "California has the highest top marginal state income tax rate in the country at 13.3%, applied to income above $1 million for single filers. The state uses nine graduated brackets ranging from 1% to 13.3%. Here is how the 2025 California income tax brackets work for single filers: 1% on income up to $10,756; 2% on $10,757–$25,499; 4% on $25,500–$40,245; 6% on $40,246–$55,866; 8% on $55,867–$70,606; 9.3% on $70,607–$360,659; 10.3% on $360,660–$432,787; 11.3% on $432,788–$721,314; 12.3% on $721,315–$999,999; and 13.3% on income above $1,000,000. Married couples filing jointly have thresholds at roughly double these amounts up to the millionaire surcharge. California's standard deduction is notably low at just $5,202 for single filers and $10,404 for married couples — meaning most residents pay state income tax on a larger share of their earnings than in states with higher deductions. To illustrate with a real example: a single Californian earning $80,000 in taxable income owes approximately $4,992 in state income tax — an effective rate of about 6.2%, even though their highest dollar is taxed at 9.3%. California does not conform to many federal tax deductions, including the federal standard deduction, so residents must use California-specific rules when filing Form 540. The state fully taxes capital gains as ordinary income and does not offer a separate lower rate for long-term gains. Social Security benefits are exempt from California state income tax regardless of income level, which is a meaningful benefit for retirees.",
    "salesTax": "8.82%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Highest top marginal rate in the U.S. at 13.3%",
      "1% Mental Health Services Tax on income above $1 million",
      "California does not fully conform to federal tax law changes",
      "No deduction for federal income taxes paid"
    ],
    "revenueUrl": {
      "label": "California Franchise Tax Board",
      "url": "https://www.ftb.ca.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 10756,
        "rate": 1
      },
      {
        "min": 10756,
        "max": 25499,
        "rate": 2
      },
      {
        "min": 25499,
        "max": 40245,
        "rate": 4
      },
      {
        "min": 40245,
        "max": 55866,
        "rate": 6
      },
      {
        "min": 55866,
        "max": 70606,
        "rate": 8
      },
      {
        "min": 70606,
        "max": 360659,
        "rate": 9.3
      },
      {
        "min": 360659,
        "max": 432787,
        "rate": 10.3
      },
      {
        "min": 432787,
        "max": 721314,
        "rate": 11.3
      },
      {
        "min": 721314,
        "max": 999999,
        "rate": 12.3
      },
      {
        "min": 999999,
        "max": null,
        "rate": 13.3
      }
    ]
  },
  {
    "name": "Colorado",
    "abbr": "CO",
    "slug": "colorado",
    "hasIncomeTax": true,
    "topRate": 4.4,
    "bottomRate": 4.4,
    "brackets": "4.4% flat",
    "note": "Colorado uses a flat income tax rate of 4.4% for all taxpayers.",
    "noTaxNote": null,
    "overview": "Colorado has a flat state income tax rate of 4.4% on all federal taxable income, making it one of the more straightforward states for income tax planning. Because Colorado starts with federal adjusted gross income and makes limited modifications, residents generally find state tax preparation simpler than in states with their own complex bracket systems. Colorado also offers a Taxpayer's Bill of Rights (TABOR) provision that can trigger refunds when state revenue exceeds a defined limit. The state does not allow a separate standard deduction — it piggybacks on the federal AGI instead.",
    "salesTax": "7.77%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Flat 4.4% rate, reduced from 4.55% in 2022",
      "TABOR refunds may further reduce effective state tax burden",
      "Pension income exemptions available for those 55 and older",
      "Starts from federal taxable income with limited modifications"
    ],
    "revenueUrl": {
      "label": "Colorado Department of Revenue",
      "url": "https://tax.colorado.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "Connecticut",
    "abbr": "CT",
    "slug": "connecticut",
    "hasIncomeTax": true,
    "topRate": 6.99,
    "bottomRate": 3,
    "brackets": "3%–6.99%",
    "note": "Connecticut has a graduated income tax with rates from 3% to 6.99% across 7 brackets.",
    "noTaxNote": null,
    "overview": "Connecticut uses a graduated income tax with rates ranging from 3% to 6.99%. Single filers pay 3% on income up to $10,000 and reach the top 6.99% rate on income above $500,000. Connecticut provides a property tax credit of up to $300 for eligible homeowners and renters, and offers a credit for income taxes paid to other states. The state also has its own standard deduction and personal exemption, though these phase out at higher income levels. Connecticut residents should also be aware that Social Security income may be partially taxable at the state level depending on filing status and income.",
    "salesTax": "6.35%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Exempts 75% of Social Security benefits at higher income levels",
      "Pension and annuity income has a 10%–100% exemption based on income",
      "Pass-through entity tax (PTET) allows workaround for SALT cap",
      "No local income taxes beyond the state rate"
    ],
    "revenueUrl": {
      "label": "Connecticut Department of Revenue Services",
      "url": "https://portal.ct.gov/DRS"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 10000,
        "rate": 3
      },
      {
        "min": 10000,
        "max": 50000,
        "rate": 5
      },
      {
        "min": 50000,
        "max": 100000,
        "rate": 5.5
      },
      {
        "min": 100000,
        "max": 200000,
        "rate": 6
      },
      {
        "min": 200000,
        "max": 250000,
        "rate": 6.5
      },
      {
        "min": 250000,
        "max": 500000,
        "rate": 6.9
      },
      {
        "min": 500000,
        "max": null,
        "rate": 6.99
      }
    ]
  },
  {
    "name": "Delaware",
    "abbr": "DE",
    "slug": "delaware",
    "hasIncomeTax": true,
    "topRate": 6.6,
    "bottomRate": 2.2,
    "brackets": "2.2%–6.6%",
    "note": "Delaware has a graduated income tax with rates from 2.2% to 6.6%. Delaware has no state sales tax.",
    "noTaxNote": null,
    "overview": "Delaware imposes a graduated state income tax with six brackets ranging from 0% to 6.6%. Income up to $2,000 is exempt, and the top rate of 6.6% applies to income above $60,000. Delaware is known as a tax-friendly state for retirees — there is no sales tax statewide, and the state offers a significant pension exclusion of up to $12,500 for residents 60 and older. The standard deduction is $3,250 for single filers and $6,500 for married couples filing jointly. Delaware also allows a personal credit of $110 per exemption claimed.",
    "salesTax": "0%",
    "filingDeadline": "April 30",
    "keyFacts": [
      "No state or local sales tax — major shopping draw",
      "Pension exclusion: up to $12,500 for those 60 and older",
      "Delaware filing deadline is April 30, not April 15",
      "City of Wilmington imposes a separate 1.25% earned income tax"
    ],
    "revenueUrl": {
      "label": "Delaware Division of Revenue",
      "url": "https://revenue.delaware.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 2000,
        "rate": 0
      },
      {
        "min": 2000,
        "max": 5000,
        "rate": 2.2
      },
      {
        "min": 5000,
        "max": 10000,
        "rate": 3.9
      },
      {
        "min": 10000,
        "max": 20000,
        "rate": 4.8
      },
      {
        "min": 20000,
        "max": 25000,
        "rate": 5.2
      },
      {
        "min": 25000,
        "max": 60000,
        "rate": 5.55
      },
      {
        "min": 60000,
        "max": null,
        "rate": 6.6
      }
    ]
  },
  {
    "name": "Florida",
    "abbr": "FL",
    "slug": "florida",
    "hasIncomeTax": false,
    "topRate": 0,
    "bottomRate": 0,
    "brackets": "None",
    "note": null,
    "noTaxNote": "Florida has no state income tax, making it one of the most tax-friendly states for residents and retirees.",
    "overview": "Florida has no state income tax on wages, salaries, retirement income, or investment income — making it one of the most financially attractive states for residents, especially retirees and high earners relocating from states like New York or California. Florida is one of only nine states with no broad-based personal income tax, and it has maintained this status constitutionally, making it unlikely to change. To put the savings in perspective: a Florida resident earning $100,000 per year pays $0 in state income tax. That same resident living in California would owe approximately $7,000 or more in state income tax annually. Over a 20-year retirement, this difference can amount to hundreds of thousands of dollars. Florida funds its government primarily through a 6% statewide sales tax, with many counties adding a local surtax that brings combined rates to 7% or higher. Property taxes in Florida are moderate by national standards and homeowners can benefit from the Homestead Exemption, which reduces the assessed value of a primary residence by up to $50,000 for property tax purposes. Florida also has no estate or inheritance tax at the state level, which is a significant benefit for wealth transfer planning. Social Security benefits, pension income, IRA distributions, and 401(k) withdrawals are all free of state income tax in Florida. Federal income tax still applies to all taxable income for Florida residents, using the same brackets and rules as every other state.",
    "salesTax": "7.01%",
    "filingDeadline": "N/A (no state income tax)",
    "keyFacts": [
      "No state income tax on personal income",
      "Homestead exemption reduces property taxes for primary residents",
      "No state estate or inheritance tax",
      "Intangibles tax was eliminated in 2007"
    ],
    "revenueUrl": {
      "label": "Florida Department of Revenue",
      "url": "https://floridarevenue.com/"
    },
    "bracketRows": null
  },
  {
    "name": "Georgia",
    "abbr": "GA",
    "slug": "georgia",
    "hasIncomeTax": true,
    "topRate": 5.49,
    "bottomRate": 5.49,
    "brackets": "5.49% flat",
    "note": "Georgia moved to a flat income tax rate of 5.49% in 2024, with the rate set to gradually decline in future years.",
    "noTaxNote": null,
    "overview": "Georgia uses a flat income tax rate of 5.49% for 2024, with the rate scheduled to gradually decrease to 4.99% over time under legislation enacted in recent years. Georgia allows a standard deduction of $5,400 for single filers and $7,100 for married couples filing jointly. The state also provides a personal exemption of $2,700 per person and a $3,000 exemption per dependent. Georgia taxes most retirement income but offers a retirement income exclusion of up to $65,000 per person for residents 65 and older, making it increasingly attractive for retirees.",
    "salesTax": "7.36%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Flat 5.49% rate as of 2024, dropping further each year toward 4.99%",
      "Retirement income exclusion: up to $65,000 per person age 65+",
      "Social Security benefits are exempt",
      "Standard deduction: $5,400 single / $7,100 joint (2025)"
    ],
    "revenueUrl": {
      "label": "Georgia Department of Revenue",
      "url": "https://dor.georgia.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "Hawaii",
    "abbr": "HI",
    "slug": "hawaii",
    "hasIncomeTax": true,
    "topRate": 11,
    "bottomRate": 1.4,
    "brackets": "1.4%–11%",
    "note": "Hawaii has the highest top marginal income tax rate in the country at 11%, with 12 graduated brackets.",
    "noTaxNote": null,
    "overview": "Hawaii has the highest top marginal state income tax rate among all states at 11%, which applies to income above $200,000 for single filers. Hawaii uses a graduated system with twelve brackets beginning at 1.4% on income up to $2,400. The standard deduction in Hawaii is $2,200 for single filers and $4,400 for married couples — among the lowest in the country. Hawaii does not conform to many federal tax provisions, so residents must recalculate certain items under state rules. Hawaii also imposes a General Excise Tax in lieu of a traditional sales tax, which is effectively passed on to consumers at rates ranging from 4% to 4.5%.",
    "salesTax": "4.44%",
    "filingDeadline": "April 20",
    "keyFacts": [
      "Hawaii filing deadline is April 20, not April 15",
      "Second highest top rate in the U.S. at 11%",
      "General Excise Tax (GET) applies at 4% — functions like a sales tax",
      "Pension income exclusion available for government retirees"
    ],
    "revenueUrl": {
      "label": "Hawaii Department of Taxation",
      "url": "https://tax.hawaii.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 2400,
        "rate": 1.4
      },
      {
        "min": 2400,
        "max": 4800,
        "rate": 3.2
      },
      {
        "min": 4800,
        "max": 9600,
        "rate": 5.5
      },
      {
        "min": 9600,
        "max": 14400,
        "rate": 6.4
      },
      {
        "min": 14400,
        "max": 19200,
        "rate": 6.8
      },
      {
        "min": 19200,
        "max": 24000,
        "rate": 7.2
      },
      {
        "min": 24000,
        "max": 36000,
        "rate": 7.6
      },
      {
        "min": 36000,
        "max": 48000,
        "rate": 7.9
      },
      {
        "min": 48000,
        "max": 150000,
        "rate": 8.25
      },
      {
        "min": 150000,
        "max": 175000,
        "rate": 9
      },
      {
        "min": 175000,
        "max": 200000,
        "rate": 10
      },
      {
        "min": 200000,
        "max": null,
        "rate": 11
      }
    ]
  },
  {
    "name": "Idaho",
    "abbr": "ID",
    "slug": "idaho",
    "hasIncomeTax": true,
    "topRate": 5.8,
    "bottomRate": 5.8,
    "brackets": "5.8% flat",
    "note": "Idaho moved to a flat income tax rate of 5.8% in 2023.",
    "noTaxNote": null,
    "overview": "Idaho has a flat state income tax rate of 5.8% on all taxable income for 2025, following recent legislative changes that simplified the state's previous graduated bracket structure. Idaho generally conforms to federal definitions of income and deductions, making state tax preparation relatively straightforward for most residents. The state offers a grocery credit — a refundable credit that helps offset the sales tax paid on food — of $120 per person including dependents. Idaho also allows a deduction for retirement income for qualifying residents, and Social Security benefits are exempt from state income tax for most filers.",
    "salesTax": "6.02%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Flat 5.8% rate as of 2023, down from graduated brackets",
      "Social Security benefits are fully taxable by Idaho",
      "Grocery credit offsets sales tax paid on food",
      "Military retirement pay is partially exempt"
    ],
    "revenueUrl": {
      "label": "Idaho State Tax Commission",
      "url": "https://tax.idaho.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "Illinois",
    "abbr": "IL",
    "slug": "illinois",
    "hasIncomeTax": true,
    "topRate": 4.95,
    "bottomRate": 4.95,
    "brackets": "4.95% flat",
    "note": "Illinois uses a flat income tax rate of 4.95% for all taxpayers.",
    "noTaxNote": null,
    "overview": "Illinois imposes a flat income tax rate of 4.95% on all net income for individuals, regardless of income level or filing status. Unlike most states, Illinois does not use graduated brackets -- every dollar of net income above the personal exemption is taxed at the same 4.95% rate whether you earn $30,000 or $300,000. Illinois does not allow a standard deduction. Instead, the state provides a personal exemption of $2,425 per return for tax year 2025 (single filers and married filing separately), $4,850 for married couples filing jointly, and $2,425 per dependent. These exemptions are modest compared to the federal standard deduction, meaning Illinois residents pay state income tax on a larger share of their income than the federal exemption alone would suggest. One of the most significant features of Illinois tax law is its broad retirement income exemption. Social Security benefits, pension income from qualified government and private pension plans, distributions from 401(k) and 403(b) plans, traditional IRA withdrawals, and military retirement pay are all fully exempt from Illinois state income tax regardless of the amount. This makes Illinois considerably more favorable for retirees than the flat rate alone implies -- a retiree living entirely on Social Security and IRA distributions pays zero Illinois state income tax. To illustrate: a single Illinois resident earning $70,000 in wages has net income after the $2,425 personal exemption of $67,575. At 4.95%, state income tax owed is approximately $3,345 -- an effective rate of about 4.78% on gross income. Illinois has a combined state and local sales tax burden that ranks among the highest in the nation. The state rate is 6.25%, but Chicago and collar county municipalities commonly add local rates pushing the combined rate to 10% or above. Property taxes in Illinois are also among the highest nationally, particularly in the Chicago metropolitan area where effective rates often exceed 2% of assessed value annually.",
    "salesTax": "8.82%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Flat 4.95% rate — constitutionally prohibited from using graduated rates",
      "Social Security, pension, and retirement income are fully exempt",
      "No deduction for federal income taxes paid",
      "Chicago and other municipalities impose additional taxes"
    ],
    "revenueUrl": {
      "label": "Illinois Department of Revenue",
      "url": "https://tax.illinois.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "Indiana",
    "abbr": "IN",
    "slug": "indiana",
    "hasIncomeTax": true,
    "topRate": 3.05,
    "bottomRate": 3.05,
    "brackets": "3.05% flat",
    "note": "Indiana uses a flat income tax rate of 3.05% for all taxpayers, with additional county-level taxes varying by location.",
    "noTaxNote": null,
    "overview": "Indiana uses a flat state income tax rate of 3.05% for 2024, with reductions scheduled in future years as part of ongoing tax reform legislation. Indiana also allows county income taxes, which vary by county and generally range from 0.5% to 3.38%, meaning your total Indiana income tax rate depends on where you live. Indiana provides a $1,000 personal exemption per taxpayer and an additional exemption for dependents. The state also offers a $1,000 exemption for residents over 65 and for those who are blind or disabled. Indiana generally conforms to federal adjusted gross income with certain modifications.",
    "salesTax": "7%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Flat 3.05% rate, decreasing toward 2.9% by 2026",
      "County income taxes range from 0.5% to 3.38% on top of state rate",
      "Social Security benefits are exempt",
      "Military pay earned outside Indiana is exempt"
    ],
    "revenueUrl": {
      "label": "Indiana Department of Revenue",
      "url": "https://www.in.gov/dor/"
    },
    "bracketRows": null
  },
  {
    "name": "Iowa",
    "abbr": "IA",
    "slug": "iowa",
    "hasIncomeTax": true,
    "topRate": 3.8,
    "bottomRate": 3.8,
    "brackets": "3.8% flat",
    "note": "Iowa moved to a flat income tax rate of 3.8% in 2025 as part of a multi-year tax reform effort.",
    "noTaxNote": null,
    "overview": "Iowa has a flat income tax rate of 3.8% for 2025, down significantly from prior years as the state phases in tax cuts through 2026. Iowa previously used a complex graduated system with many brackets, but reforms signed in 2022 are simplifying the system considerably. Iowa exempts Social Security income from state income tax and offers retirement income exemptions for qualifying taxpayers 55 and older. The state allows a standard deduction of $2,210 for single filers and $5,450 for married couples filing jointly. Iowa also permits deductions for federal income taxes paid under certain circumstances.",
    "salesTax": "6.94%",
    "filingDeadline": "April 30",
    "keyFacts": [
      "Iowa filing deadline is April 30, not April 15",
      "Flat 3.8% rate in 2025, phasing down to 3.5% by 2026",
      "Retirement income (pension, 401k, IRA) is fully exempt starting 2023",
      "Social Security exempt for most filers"
    ],
    "revenueUrl": {
      "label": "Iowa Department of Revenue",
      "url": "https://tax.iowa.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "Kansas",
    "abbr": "KS",
    "slug": "kansas",
    "hasIncomeTax": true,
    "topRate": 5.7,
    "bottomRate": 3.1,
    "brackets": "3.1%–5.7%",
    "note": "Kansas has a two-bracket graduated income tax with rates of 3.1% and 5.7%.",
    "noTaxNote": null,
    "overview": "Kansas imposes income tax using two brackets: 3.1% on income up to $15,000 for single filers and 5.7% on income above that threshold. Married couples filing jointly pay 3.1% on income up to $30,000 and 5.7% above that. Kansas offers a standard deduction of $3,500 for single filers and $8,000 for married couples. Social Security income is exempt from Kansas state income tax for residents with federal adjusted gross income below $75,000. Kansas also provides a food sales tax credit to offset the burden of the state's sales tax on groceries, and military retirement pay is fully exempt from state income tax.",
    "salesTax": "8.68%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Social Security is exempt from Kansas income tax",
      "Public pension income is exempt; private pensions are partially exempt",
      "Kansas has some of the highest combined sales tax rates in the U.S.",
      "No local income taxes beyond the state rate"
    ],
    "revenueUrl": {
      "label": "Kansas Department of Revenue",
      "url": "https://www.ksrevenue.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 15000,
        "rate": 3.1
      },
      {
        "min": 15000,
        "max": null,
        "rate": 5.7
      }
    ]
  },
  {
    "name": "Kentucky",
    "abbr": "KY",
    "slug": "kentucky",
    "hasIncomeTax": true,
    "topRate": 4,
    "bottomRate": 4,
    "brackets": "4.0% flat",
    "note": "Kentucky uses a flat income tax rate of 4.0% for all taxpayers.",
    "noTaxNote": null,
    "overview": "Kentucky has a flat state income tax rate of 4.0% for 2024, reduced from 4.5% in 2023 as part of a legislative plan to gradually lower the rate over time. Kentucky does not use graduated brackets, making calculations straightforward. The state provides a standard deduction of $3,160 for all filers and a personal credit of $10 per exemption. Kentucky exempts up to $31,110 of pension and retirement income from state income tax for qualifying residents, and Social Security benefits are fully exempt. The state also imposes a limited liability entity tax on businesses and a local occupational tax in many counties and cities.",
    "salesTax": "6%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Flat 4.0% rate as of 2024, down from 4.5%",
      "$31,110 retirement income exclusion (pension, IRA, 401k)",
      "Social Security benefits are exempt",
      "Local occupational taxes apply in many cities and counties"
    ],
    "revenueUrl": {
      "label": "Kentucky Department of Revenue",
      "url": "https://revenue.ky.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "Louisiana",
    "abbr": "LA",
    "slug": "louisiana",
    "hasIncomeTax": true,
    "topRate": 4.25,
    "bottomRate": 1.85,
    "brackets": "1.85%–4.25%",
    "note": "Louisiana has a graduated income tax with rates from 1.85% to 4.25% across 3 brackets.",
    "noTaxNote": null,
    "overview": "Louisiana uses a graduated income tax with rates of 1.85% on income up to $12,500, 3.5% on income from $12,501 to $50,000, and 4.25% on income above $50,000 for single filers. Louisiana allows a deduction for federal income taxes paid, which is one of the few states to offer this benefit and can substantially reduce your Louisiana taxable income. The state also provides a personal exemption of $4,500 for single filers and $9,000 for married couples. Louisiana exempts most retirement income, including Social Security, teacher retirement, and military retirement pay, from state income tax.",
    "salesTax": "9.56%",
    "filingDeadline": "May 15",
    "keyFacts": [
      "Louisiana filing deadline is May 15 for most filers",
      "Federal income taxes paid are deductible from Louisiana income",
      "Highest combined sales tax rate in the U.S. on average",
      "Significant exemptions for retirement income from government pensions"
    ],
    "revenueUrl": {
      "label": "Louisiana Department of Revenue",
      "url": "https://revenue.louisiana.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 12500,
        "rate": 1.85
      },
      {
        "min": 12500,
        "max": 50000,
        "rate": 3.5
      },
      {
        "min": 50000,
        "max": null,
        "rate": 4.25
      }
    ]
  },
  {
    "name": "Maine",
    "abbr": "ME",
    "slug": "maine",
    "hasIncomeTax": true,
    "topRate": 7.15,
    "bottomRate": 5.8,
    "brackets": "5.8%–7.15%",
    "note": "Maine has a graduated income tax with rates from 5.8% to 7.15% across 3 brackets.",
    "noTaxNote": null,
    "overview": "Maine uses a graduated income tax with three brackets for 2025: 5.8% on income up to $24,500 for single filers, 6.75% on income from $24,501 to $58,050, and 7.15% on income above $58,050. Maine provides a standard deduction equal to the federal standard deduction and also conforms closely to federal definitions of income and deductions. The state offers a property tax fairness credit for lower- and moderate-income residents and a sales tax fairness credit as well. Maine partially taxes Social Security benefits using the same method as the federal government, but offers an exemption for lower-income retirees.",
    "salesTax": "5.5%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Top rate of 7.15% kicks in above $58,050 (single) / $116,100 (joint)",
      "Pension income deduction: up to $10,000 for eligible retirees",
      "Social Security exempt if federal AGI is below $75,000 (single)",
      "No local income taxes beyond the state rate"
    ],
    "revenueUrl": {
      "label": "Maine Revenue Services",
      "url": "https://www.maine.gov/revenue/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 24500,
        "rate": 5.8
      },
      {
        "min": 24500,
        "max": 58050,
        "rate": 6.75
      },
      {
        "min": 58050,
        "max": null,
        "rate": 7.15
      }
    ]
  },
  {
    "name": "Maryland",
    "abbr": "MD",
    "slug": "maryland",
    "hasIncomeTax": true,
    "topRate": 5.75,
    "bottomRate": 2,
    "brackets": "2%–5.75%",
    "note": "Maryland has a graduated income tax with rates from 2% to 5.75%, plus local income taxes that vary by county.",
    "noTaxNote": null,
    "overview": "Maryland has a graduated state income tax with eight brackets ranging from 2% to 5.75%, plus an additional 1.75% surtax on income above $100,000 for single filers. Beyond state income tax, Maryland counties and Baltimore City each impose a local income tax ranging from 2.25% to 3.2%, making Maryland's combined state and local income tax one of the higher burdens in the country. Maryland provides a standard deduction of 15% of adjusted gross income, with a minimum of $1,700 and a maximum of $2,550 for single filers. The state exempts the first $35,000 of military retirement pay for qualifying residents.",
    "salesTax": "6%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "County income taxes add 2.25%–3.20% on top of state rate",
      "Retirement income exclusion up to $38,400 for those 65+",
      "Social Security benefits are exempt",
      "No deduction for federal income taxes paid"
    ],
    "revenueUrl": {
      "label": "Maryland Comptroller",
      "url": "https://www.marylandtaxes.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 1000,
        "rate": 2
      },
      {
        "min": 1000,
        "max": 2000,
        "rate": 3
      },
      {
        "min": 2000,
        "max": 3000,
        "rate": 4
      },
      {
        "min": 3000,
        "max": 100000,
        "rate": 4.75
      },
      {
        "min": 100000,
        "max": 125000,
        "rate": 5
      },
      {
        "min": 125000,
        "max": 150000,
        "rate": 5.25
      },
      {
        "min": 150000,
        "max": 250000,
        "rate": 5.5
      },
      {
        "min": 250000,
        "max": null,
        "rate": 5.75
      }
    ]
  },
  {
    "name": "Massachusetts",
    "abbr": "MA",
    "slug": "massachusetts",
    "hasIncomeTax": true,
    "topRate": 9,
    "bottomRate": 5,
    "brackets": "5%–9%",
    "note": "Massachusetts uses a flat 5% income tax rate for most income, with a 4% surtax on income over $1 million.",
    "noTaxNote": null,
    "overview": "Massachusetts imposes a flat income tax rate of 5% on most income, with a higher surtax of 4% on income above $1 million, making the effective top rate 9% for very high earners under the Fair Share Amendment passed in 2022. Massachusetts taxes most income at the flat rate, including wages, interest, dividends, and long-term capital gains. Short-term capital gains are taxed at 8.5%. Massachusetts allows a personal exemption of $4,400 for single filers and $8,800 for married couples. The state does not tax Social Security benefits, and certain pension income for state and municipal employees is exempt.",
    "salesTax": "6.25%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Flat 5% rate, plus 4% surtax on income above $1 million (Millionaires Tax)",
      "Long-term capital gains taxed at same 5% rate (not 12%)",
      "Social Security is exempt; most pension income is not",
      "Interest and dividends short-term are taxed at 12% rate"
    ],
    "revenueUrl": {
      "label": "Massachusetts Department of Revenue",
      "url": "https://www.mass.gov/orgs/massachusetts-department-of-revenue"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 1000000,
        "rate": 5
      },
      {
        "min": 1000000,
        "max": null,
        "rate": 9
      }
    ]
  },
  {
    "name": "Michigan",
    "abbr": "MI",
    "slug": "michigan",
    "hasIncomeTax": true,
    "topRate": 4.05,
    "bottomRate": 4.05,
    "brackets": "4.05% flat",
    "note": "Michigan uses a flat income tax rate of 4.05% for all taxpayers, with additional city income taxes in some areas.",
    "noTaxNote": null,
    "overview": "Michigan uses a flat income tax rate of 4.05% for 2024, adjusted slightly from previous years based on revenue triggers in state law. Michigan provides a personal exemption of $5,600 per taxpayer and dependent, which reduces taxable income for most residents. The state exempts Social Security benefits from income tax and offers varying levels of pension exemption depending on the taxpayer's birth year, with residents born before 1946 receiving the most favorable treatment. Michigan cities may also impose a local income tax — Detroit charges 2.4% on residents and 1.2% on nonresidents — so your total tax burden depends on where you live and work.",
    "salesTax": "6%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Flat 4.05% rate (reduced temporarily from 4.25%)",
      "Retirement income exemption varies based on birth year",
      "City income taxes in Detroit (2.4%) and other cities",
      "Social Security benefits are exempt"
    ],
    "revenueUrl": {
      "label": "Michigan Department of Treasury",
      "url": "https://www.michigan.gov/taxes"
    },
    "bracketRows": null
  },
  {
    "name": "Minnesota",
    "abbr": "MN",
    "slug": "minnesota",
    "hasIncomeTax": true,
    "topRate": 9.85,
    "bottomRate": 5.35,
    "brackets": "5.35%–9.85%",
    "note": "Minnesota has a graduated income tax with rates from 5.35% to 9.85% across 4 brackets.",
    "noTaxNote": null,
    "overview": "Minnesota has a graduated state income tax with four brackets ranging from 5.35% to 9.85% for 2025. Single filers enter the top 9.85% bracket on income above $183,340, making Minnesota one of the higher-tax states in the country. Minnesota provides a standard deduction equal to the federal standard deduction and also offers a dependent exemption credit. The state taxes a portion of Social Security income for higher-income residents, though lower-income retirees may qualify for a partial subtraction. Minnesota also offers education-related credits and a renter's property tax credit for qualifying residents.",
    "salesTax": "7.49%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Top rate of 9.85% on income above $183,341 (single) / $258,264 (joint)",
      "Social Security benefits may be partially taxable depending on income",
      "Working Family Credit available for low-to-moderate income earners",
      "No deduction for federal income taxes paid"
    ],
    "revenueUrl": {
      "label": "Minnesota Department of Revenue",
      "url": "https://www.revenue.state.mn.us/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 31690,
        "rate": 5.35
      },
      {
        "min": 31690,
        "max": 104090,
        "rate": 6.8
      },
      {
        "min": 104090,
        "max": 183340,
        "rate": 7.85
      },
      {
        "min": 183340,
        "max": null,
        "rate": 9.85
      }
    ]
  },
  {
    "name": "Mississippi",
    "abbr": "MS",
    "slug": "mississippi",
    "hasIncomeTax": true,
    "topRate": 4.7,
    "bottomRate": 4.7,
    "brackets": "4.7% flat",
    "note": "Mississippi moved to a flat income tax rate of 4.7% in 2024, with the rate set to decline further in coming years.",
    "noTaxNote": null,
    "overview": "Mississippi has a flat income tax rate of 4.7% for 2024, reduced from 5% as part of a phased tax cut that will lower the rate to 4% by 2026. The state provides a standard deduction of $2,300 for single filers and $4,600 for married couples filing jointly, plus a personal exemption of $6,000 for single filers and $12,000 for married couples. Mississippi fully exempts Social Security income, most retirement income including public and private pensions, and military retirement pay from state income tax. Mississippi's relatively low cost of living and modest tax burden make it an attractive state for retirees on fixed incomes.",
    "salesTax": "7.07%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Flat 4.7% rate in 2025, phasing down to 4.0% by 2026",
      "Retirement income from qualified plans is fully exempt",
      "Social Security benefits are exempt",
      "No tax on qualified distributions from retirement accounts"
    ],
    "revenueUrl": {
      "label": "Mississippi Department of Revenue",
      "url": "https://www.dor.ms.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "Missouri",
    "abbr": "MO",
    "slug": "missouri",
    "hasIncomeTax": true,
    "topRate": 4.8,
    "bottomRate": 2,
    "brackets": "2%–4.8%",
    "note": "Missouri has a graduated income tax with rates from 2% to 4.8%, with the top rate applying to income above $9,000.",
    "noTaxNote": null,
    "overview": "Missouri uses a graduated income tax system with rates starting at 2% and reaching a top rate of 4.8% for 2024 on income above $9,000, following a series of phased tax reductions. Missouri allows a deduction for federal income taxes paid, up to $5,000 for single filers and $10,000 for married couples, which can meaningfully reduce state taxable income. The state provides a standard deduction equal to the federal standard deduction. Missouri fully exempts Social Security benefits and 100% of public pension income for qualifying retirees. Military retirement pay is also fully exempt from Missouri state income tax.",
    "salesTax": "8.28%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Top rate of 4.8%, reduced from 5.3% in recent years",
      "Social Security benefits are exempt for lower-income filers",
      "Federal income taxes paid are deductible (up to $10,000 single / $20,000 joint)",
      "Public pension income is partially exempt"
    ],
    "revenueUrl": {
      "label": "Missouri Department of Revenue",
      "url": "https://dor.mo.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 1207,
        "rate": 0
      },
      {
        "min": 1207,
        "max": 2414,
        "rate": 2
      },
      {
        "min": 2414,
        "max": 3621,
        "rate": 2.5
      },
      {
        "min": 3621,
        "max": 4828,
        "rate": 3
      },
      {
        "min": 4828,
        "max": 6035,
        "rate": 3.5
      },
      {
        "min": 6035,
        "max": 7242,
        "rate": 4
      },
      {
        "min": 7242,
        "max": 8449,
        "rate": 4.5
      },
      {
        "min": 8449,
        "max": 9999,
        "rate": 4.8
      },
      {
        "min": 9999,
        "max": null,
        "rate": 4.8
      }
    ]
  },
  {
    "name": "Montana",
    "abbr": "MT",
    "slug": "montana",
    "hasIncomeTax": true,
    "topRate": 6.75,
    "bottomRate": 1,
    "brackets": "1%–6.75%",
    "note": "Montana has a graduated income tax with rates from 1% to 6.75% following a 2021 simplification of its tax code.",
    "noTaxNote": null,
    "overview": "Montana imposes a graduated income tax with rates ranging from 1% to 6.75% for 2024, following a 2021 reform that simplified the previous seven-bracket system. Single filers reach the top 6.75% rate on income above $20,500. Montana provides a standard deduction of 20% of adjusted gross income, with a minimum of $4,930 and a maximum of $9,860 for single filers. Montana allows a credit for income taxes paid to other states and provides a capital gains credit equal to 2% of qualifying net long-term capital gains. The state does not tax Social Security income below certain thresholds.",
    "salesTax": "0%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "No state sales tax — one of only five states without one",
      "Flat 5.9% rate starting 2024 (was graduated up to 6.75%)",
      "Pension income exemption up to $4,370 for eligible retirees",
      "Capital gains taxed at a reduced rate with 2% credit"
    ],
    "revenueUrl": {
      "label": "Montana Department of Revenue",
      "url": "https://mtrevenue.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 3600,
        "rate": 1
      },
      {
        "min": 3600,
        "max": 6300,
        "rate": 2
      },
      {
        "min": 6300,
        "max": 9700,
        "rate": 3
      },
      {
        "min": 9700,
        "max": 13000,
        "rate": 4
      },
      {
        "min": 13000,
        "max": 16800,
        "rate": 5
      },
      {
        "min": 16800,
        "max": 20500,
        "rate": 6
      },
      {
        "min": 20500,
        "max": null,
        "rate": 6.75
      }
    ]
  },
  {
    "name": "Nebraska",
    "abbr": "NE",
    "slug": "nebraska",
    "hasIncomeTax": true,
    "topRate": 5.84,
    "bottomRate": 2.46,
    "brackets": "2.46%–5.84%",
    "note": "Nebraska has a graduated income tax with rates from 2.46% to 5.84%, with further reductions planned.",
    "noTaxNote": null,
    "overview": "Nebraska uses a graduated income tax with four brackets ranging from 2.46% to 5.84% for 2024, with rates scheduled to continue decreasing under legislation that targets a 3.99% flat rate by 2027. Nebraska provides a standard deduction equal to the federal standard deduction and conforms closely to federal income definitions. The state exempts Social Security income from state income tax for residents with federal AGI below $44,460 for single filers and $59,100 for married couples, with a partial exemption available above those thresholds. Nebraska taxes most other retirement income, including IRA distributions and private pensions.",
    "salesTax": "6.94%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Top rate dropping toward 3.99% by 2027",
      "Social Security benefits are exempt starting 2025",
      "Military retirement pay is fully exempt",
      "No deduction for federal income taxes paid"
    ],
    "revenueUrl": {
      "label": "Nebraska Department of Revenue",
      "url": "https://revenue.nebraska.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 3700,
        "rate": 2.46
      },
      {
        "min": 3700,
        "max": 22170,
        "rate": 3.51
      },
      {
        "min": 22170,
        "max": 35730,
        "rate": 5.01
      },
      {
        "min": 35730,
        "max": null,
        "rate": 5.84
      }
    ]
  },
  {
    "name": "Nevada",
    "abbr": "NV",
    "slug": "nevada",
    "hasIncomeTax": false,
    "topRate": 0,
    "bottomRate": 0,
    "brackets": "None",
    "note": null,
    "noTaxNote": "Nevada has no state income tax, relying instead on gaming and sales taxes for state revenue.",
    "overview": "Nevada has no state income tax on personal income, making it one of seven states to offer this benefit. Nevada funds its state government primarily through gaming taxes, sales taxes, and various business fees rather than a personal income tax. The statewide sales tax rate is 6.85%, with local additions bringing the combined rate as high as 8.265% in some areas. Nevada residents still owe federal income tax on all taxable income. The absence of a state income tax is a significant financial benefit, particularly for high earners and retirees, and has contributed to Nevada's reputation as one of the more tax-friendly states in the western United States.",
    "salesTax": "8.23%",
    "filingDeadline": "N/A (no state income tax)",
    "keyFacts": [
      "No state income tax on personal income",
      "Commerce Tax applies to businesses with over $4 million revenue",
      "No state estate or inheritance tax",
      "Property tax rates are among the lowest in the West"
    ],
    "revenueUrl": {
      "label": "Nevada Department of Taxation",
      "url": "https://tax.nv.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "New Hampshire",
    "abbr": "NH",
    "slug": "new-hampshire",
    "hasIncomeTax": false,
    "topRate": 0,
    "bottomRate": 0,
    "brackets": "None",
    "note": null,
    "noTaxNote": "New Hampshire has no broad-based income tax on wages. A tax on interest and dividends is being phased out.",
    "overview": "New Hampshire does not impose a broad-based state income tax on wages or salaries. Historically, New Hampshire taxed interest and dividend income, but this tax is being phased out and is scheduled for full repeal. New Hampshire residents who earn investment income should verify the current status for their tax year. The state has no sales tax and no capital gains tax at the state level. New Hampshire relies heavily on property taxes to fund local governments, and property tax rates are among the highest in the country. Federal income tax applies to all taxable income regardless of state residency.",
    "salesTax": "0%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "No state income tax on wages — only interest and dividends taxed",
      "Interest and Dividend Tax eliminated starting January 1, 2025",
      "No statewide sales tax",
      "No estate or inheritance tax"
    ],
    "revenueUrl": {
      "label": "New Hampshire Department of Revenue Administration",
      "url": "https://www.revenue.nh.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "New Jersey",
    "abbr": "NJ",
    "slug": "new-jersey",
    "hasIncomeTax": true,
    "topRate": 10.75,
    "bottomRate": 1.4,
    "brackets": "1.4%–10.75%",
    "note": "New Jersey has a graduated income tax with rates from 1.4% to 10.75% across 7 brackets.",
    "noTaxNote": null,
    "overview": "New Jersey has one of the most progressive income tax systems in the country, with seven brackets ranging from 1.4% to 10.75% for 2025. Here is how the brackets apply to single filers: 1.4% on income up to $20,000; 1.75% on $20,001–$35,000; 3.5% on $35,001–$40,000; 5.525% on $40,001–$75,000; 6.37% on $75,001–$500,000; 8.97% on $500,001–$1,000,000; and 10.75% on income above $1,000,000. Married couples filing jointly have different bracket thresholds. To illustrate with a real example: a single New Jersey filer earning $60,000 in taxable income owes approximately $2,202 in state income tax — an effective rate of about 3.7%, even though dollars above $40,000 are taxed at 5.525%. New Jersey provides a property tax credit of up to $1,500 for homeowners and renters, and exempts Social Security and Railroad Retirement benefits from state income tax. The state does not provide a standard deduction for single filers, but does offer personal exemptions of $1,000 per taxpayer and various credits. New Jersey is notable for having some of the highest property taxes in the nation, averaging over $9,000 per year statewide, which is important context when evaluating overall tax burden. Military retirement pay is fully exempt for New Jersey residents.",
    "salesTax": "6.60%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Top rate of 10.75% on income above $1 million",
      "Retirement income exclusion up to $100,000 (joint) for those 62+",
      "Property Tax Deduction/Credit available for homeowners and renters",
      "New Jersey does not allow deductions for federal taxes paid"
    ],
    "revenueUrl": {
      "label": "New Jersey Division of Taxation",
      "url": "https://www.njtaxation.org/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 20000,
        "rate": 1.4
      },
      {
        "min": 20000,
        "max": 35000,
        "rate": 1.75
      },
      {
        "min": 35000,
        "max": 40000,
        "rate": 3.5
      },
      {
        "min": 40000,
        "max": 75000,
        "rate": 5.525
      },
      {
        "min": 75000,
        "max": 500000,
        "rate": 6.37
      },
      {
        "min": 500000,
        "max": 1000000,
        "rate": 8.97
      },
      {
        "min": 1000000,
        "max": null,
        "rate": 10.75
      }
    ]
  },
  {
    "name": "New Mexico",
    "abbr": "NM",
    "slug": "new-mexico",
    "hasIncomeTax": true,
    "topRate": 5.9,
    "bottomRate": 1.7,
    "brackets": "1.7%–5.9%",
    "note": "New Mexico has a graduated income tax with rates from 1.7% to 5.9% across 5 brackets.",
    "noTaxNote": null,
    "overview": "New Mexico uses a graduated income tax with five brackets ranging from 1.7% to 5.9% for 2024. Single filers reach the top rate on income above $157,000. New Mexico provides a standard deduction equal to the federal standard deduction and conforms broadly to federal income definitions. Social Security benefits are generally exempt from New Mexico income tax for residents with income below $100,000 for single filers and $150,000 for married couples. New Mexico also offers a low-income comprehensive tax rebate and a working families tax credit modeled on the federal Earned Income Tax Credit.",
    "salesTax": "7.82%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Social Security exempt for those with income below $100,000 (single)",
      "Low-income comprehensive tax rebate available",
      "Gross Receipts Tax (GRT) replaces traditional sales tax",
      "Military retirement pay is fully exempt"
    ],
    "revenueUrl": {
      "label": "New Mexico Taxation and Revenue Department",
      "url": "https://www.tax.newmexico.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 5500,
        "rate": 1.7
      },
      {
        "min": 5500,
        "max": 11000,
        "rate": 3.2
      },
      {
        "min": 11000,
        "max": 16000,
        "rate": 4.7
      },
      {
        "min": 16000,
        "max": 210000,
        "rate": 4.9
      },
      {
        "min": 210000,
        "max": null,
        "rate": 5.9
      }
    ]
  },
  {
    "name": "New York",
    "abbr": "NY",
    "slug": "new-york",
    "hasIncomeTax": true,
    "topRate": 10.9,
    "bottomRate": 4,
    "brackets": "4%–10.9%",
    "note": "New York has a graduated income tax with rates from 4% to 10.9% across 9 brackets. NYC residents pay additional city income tax.",
    "noTaxNote": null,
    "overview": "New York has a graduated state income tax with nine brackets ranging from 4% to 10.9% for 2025. Here is how the brackets apply to single filers: 4% on income up to $8,500; 4.5% on $8,501–$11,700; 5.25% on $11,701–$13,900; 5.85% on $13,901–$21,400; 6.25% on $21,401–$80,650; 6.85% on $80,651–$215,400; 9.65% on $215,401–$1,077,550; 10.3% on $1,077,551–$5,000,000; and 10.9% on income above $5,000,000. Married couples filing jointly have higher bracket thresholds for most rates. To illustrate with a real example: a single New York State filer earning $75,000 in taxable income owes approximately $3,895 in state income tax — an effective rate of about 5.2%. New York City residents face an additional city income tax of 3.078% to 3.876% on top of state tax, and Yonkers residents pay an additional surcharge. For a NYC resident earning $75,000, the combined state and city income tax can exceed $6,500 annually. New York provides a standard deduction of $8,000 for single filers and $16,050 for married couples filing jointly. Social Security income is fully exempt from New York State income tax regardless of income level. New York offers a pension and annuity income exclusion of up to $20,000 for residents 59½ and older, and all government pensions — federal, state, and local — are fully exempt. New York also provides a school tax relief (STAR) credit for qualifying homeowners to help offset property tax burdens.",
    "salesTax": "8.52%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "New York City residents pay an additional 3.078%–3.876% city tax",
      "Top combined state+city rate of 14.776% is among the highest in the U.S.",
      "Pension income from NY government employment is fully exempt",
      "Social Security benefits are fully exempt"
    ],
    "revenueUrl": {
      "label": "New York State Department of Taxation and Finance",
      "url": "https://www.tax.ny.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 17150,
        "rate": 4
      },
      {
        "min": 17150,
        "max": 23600,
        "rate": 4.5
      },
      {
        "min": 23600,
        "max": 27900,
        "rate": 5.25
      },
      {
        "min": 27900,
        "max": 161550,
        "rate": 5.85
      },
      {
        "min": 161550,
        "max": 323200,
        "rate": 6.25
      },
      {
        "min": 323200,
        "max": 2155350,
        "rate": 6.85
      },
      {
        "min": 2155350,
        "max": 5000000,
        "rate": 9.65
      },
      {
        "min": 5000000,
        "max": 25000000,
        "rate": 10.3
      },
      {
        "min": 25000000,
        "max": null,
        "rate": 10.9
      }
    ]
  },
  {
    "name": "North Carolina",
    "abbr": "NC",
    "slug": "north-carolina",
    "hasIncomeTax": true,
    "topRate": 4.5,
    "bottomRate": 4.5,
    "brackets": "4.5% flat",
    "note": "North Carolina uses a flat income tax rate of 4.5% for all taxpayers, with further reductions planned.",
    "noTaxNote": null,
    "overview": "North Carolina has a flat state income tax rate of 4.5% for 2024, reduced from 4.75% as part of ongoing legislation that will lower the rate to 3.99% by 2026. North Carolina provides a standard deduction of $10,750 for single filers and $21,500 for married couples filing jointly. The state taxes most retirement income but exempts Social Security benefits and provides a $4,000 exclusion for other qualifying retirement income. North Carolina does not allow a deduction for federal income taxes paid. The state's flat tax and increasing standard deduction make it relatively straightforward for most residents to estimate their state income tax liability.",
    "salesTax": "6.99%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Flat 4.5% rate in 2025, phasing down to 3.99% by 2026",
      "Bailey settlement exempts certain government retirees from state tax",
      "Social Security benefits are exempt",
      "No deduction for federal income taxes paid"
    ],
    "revenueUrl": {
      "label": "North Carolina Department of Revenue",
      "url": "https://www.ncdor.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "North Dakota",
    "abbr": "ND",
    "slug": "north-dakota",
    "hasIncomeTax": true,
    "topRate": 2.5,
    "bottomRate": 1.1,
    "brackets": "1.1%–2.5%",
    "note": "North Dakota has one of the lowest income tax burdens in the country, with rates from 1.1% to 2.5%.",
    "noTaxNote": null,
    "overview": "North Dakota uses a graduated income tax with five brackets ranging from 1.1% to 2.5% for 2024, making it one of the lowest-tax states for income. Single filers reach the top 2.5% rate on income above $225,000. North Dakota provides a standard deduction equal to the federal standard deduction and conforms closely to federal income definitions. The state exempts Social Security income from state income tax and offers a credit for income taxes paid to other states. North Dakota also provides an exemption for military retirement pay and an incentive for residents who serve in the National Guard.",
    "salesTax": "6.96%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Flat 2.5% rate — one of the lowest income tax rates in the U.S.",
      "Social Security may be partially exempt depending on income",
      "Military pay earned out of state is exempt",
      "No local income taxes beyond the state rate"
    ],
    "revenueUrl": {
      "label": "North Dakota Office of State Tax Commissioner",
      "url": "https://www.tax.nd.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 44725,
        "rate": 0
      },
      {
        "min": 44725,
        "max": 225975,
        "rate": 1.95
      },
      {
        "min": 225975,
        "max": null,
        "rate": 2.5
      }
    ]
  },
  {
    "name": "Ohio",
    "abbr": "OH",
    "slug": "ohio",
    "hasIncomeTax": true,
    "topRate": 3.5,
    "bottomRate": 0,
    "brackets": "0%–3.5%",
    "note": "Ohio has a graduated income tax with rates from 0% to 3.5%, plus municipal income taxes that vary by city.",
    "noTaxNote": null,
    "overview": "Ohio uses a graduated income tax with three brackets for 2024: 0% on income up to $26,050, 2.75% on income from $26,051 to $100,000, and 3.5% on income above $100,000. Ohio also allows municipalities to impose a local income tax, and many cities including Columbus, Cleveland, and Cincinnati charge between 2% and 3%, so your actual total income tax burden depends significantly on where you live and work. Ohio provides a personal and dependent exemption credit of $40 per exemption and a lump-sum retirement credit for qualifying retirees. Social Security income is fully exempt from Ohio income tax.",
    "salesTax": "7.22%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "No tax on income below $26,050; top rate 3.5% above $92,150",
      "RITA and CCA municipal income taxes apply in many cities",
      "Social Security benefits are exempt",
      "Business income deduction allows 3% flat rate on pass-through income"
    ],
    "revenueUrl": {
      "label": "Ohio Department of Taxation",
      "url": "https://tax.ohio.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 26050,
        "rate": 0
      },
      {
        "min": 26050,
        "max": 100000,
        "rate": 2.75
      },
      {
        "min": 100000,
        "max": 115300,
        "rate": 3.226
      },
      {
        "min": 115300,
        "max": null,
        "rate": 3.5
      }
    ]
  },
  {
    "name": "Oklahoma",
    "abbr": "OK",
    "slug": "oklahoma",
    "hasIncomeTax": true,
    "topRate": 4.75,
    "bottomRate": 0.25,
    "brackets": "0.25%–4.75%",
    "note": "Oklahoma has a graduated income tax with rates from 0.25% to 4.75% across 5 brackets.",
    "noTaxNote": null,
    "overview": "Oklahoma imposes a graduated income tax with five brackets ranging from 0.25% to 4.75% for 2024. Single filers pay the top rate on income above $7,200. Oklahoma provides a standard deduction of $6,350 for single filers and $12,700 for married couples filing jointly. The state offers a credit for income taxes paid to other states and provides an exemption for Social Security income, military retirement pay, and a portion of other retirement income. Oklahoma also allows a deduction for contributions to the state's 529 college savings plan.",
    "salesTax": "8.98%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Top rate of 4.75% on income above $7,200 (single) / $12,200 (joint)",
      "Retirement income from qualified plans is partially exempt",
      "Social Security benefits are exempt",
      "Oklahoma allows itemized deductions even if not itemizing federally"
    ],
    "revenueUrl": {
      "label": "Oklahoma Tax Commission",
      "url": "https://oklahoma.gov/tax.html"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 1000,
        "rate": 0.25
      },
      {
        "min": 1000,
        "max": 2500,
        "rate": 0.75
      },
      {
        "min": 2500,
        "max": 3750,
        "rate": 1.75
      },
      {
        "min": 3750,
        "max": 4900,
        "rate": 2.75
      },
      {
        "min": 4900,
        "max": 7200,
        "rate": 3.75
      },
      {
        "min": 7200,
        "max": null,
        "rate": 4.75
      }
    ]
  },
  {
    "name": "Oregon",
    "abbr": "OR",
    "slug": "oregon",
    "hasIncomeTax": true,
    "topRate": 9.9,
    "bottomRate": 4.75,
    "brackets": "4.75%–9.9%",
    "note": "Oregon has a graduated income tax with rates from 4.75% to 9.9% across 4 brackets. Oregon has no sales tax.",
    "noTaxNote": null,
    "overview": "Oregon has a graduated state income tax with four brackets ranging from 4.75% to 9.9% for 2024. Single filers pay 4.75% on income up to $18,400 and reach the top 9.9% rate on income above $250,000. Portland and surrounding Multnomah County impose additional local income taxes, including a Metro Supportive Housing Services Tax and a Preschool for All Tax on income above certain thresholds. Oregon does not have a state sales tax. The state provides a standard deduction of $2,420 for single filers and $4,865 for married couples. Oregon fully taxes Social Security income but allows a credit for lower-income seniors.",
    "salesTax": "0%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "No statewide sales tax — one of only five states without one",
      "Top rate of 9.9% on income above $125,000 (single) / $250,000 (joint)",
      "Oregon does not conform to all federal deductions",
      "Statewide Transit Tax (0.1%) withheld on wages"
    ],
    "revenueUrl": {
      "label": "Oregon Department of Revenue",
      "url": "https://www.oregon.gov/dor/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 4050,
        "rate": 4.75
      },
      {
        "min": 4050,
        "max": 10200,
        "rate": 6.75
      },
      {
        "min": 10200,
        "max": 125000,
        "rate": 8.75
      },
      {
        "min": 125000,
        "max": null,
        "rate": 9.9
      }
    ]
  },
  {
    "name": "Pennsylvania",
    "abbr": "PA",
    "slug": "pennsylvania",
    "hasIncomeTax": true,
    "topRate": 3.07,
    "bottomRate": 3.07,
    "brackets": "3.07% flat",
    "note": "Pennsylvania uses a flat income tax rate of 3.07% for all taxpayers, with additional local earned income taxes in most municipalities.",
    "noTaxNote": null,
    "overview": "Pennsylvania uses a flat income tax rate of 3.07% on all taxable income, one of the lower flat rates among states that use this approach. Pennsylvania has a relatively narrow definition of taxable income — many types of income taxable federally, such as Social Security benefits and most retirement income including pensions and 401(k) distributions, are not taxed at the state level. Pennsylvania allows no standard deduction or personal exemption, but the narrow tax base effectively reduces the burden for many residents. Local earned income taxes also apply in most Pennsylvania municipalities, typically ranging from 1% to 3%.",
    "salesTax": "6.34%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Flat 3.07% rate — unchanged for decades",
      "Retirement income (pensions, 401k, IRA distributions) is fully exempt",
      "Social Security benefits are fully exempt",
      "Philadelphia and Pittsburgh impose local earned income taxes"
    ],
    "revenueUrl": {
      "label": "Pennsylvania Department of Revenue",
      "url": "https://www.revenue.pa.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "Rhode Island",
    "abbr": "RI",
    "slug": "rhode-island",
    "hasIncomeTax": true,
    "topRate": 5.99,
    "bottomRate": 3.75,
    "brackets": "3.75%–5.99%",
    "note": "Rhode Island has a graduated income tax with rates from 3.75% to 5.99% across 3 brackets.",
    "noTaxNote": null,
    "overview": "Rhode Island uses a graduated income tax with three brackets ranging from 3.75% to 5.99% for 2024. Single filers pay 3.75% on income up to $73,450, 4.75% on income from $73,451 to $166,950, and 5.99% on income above $166,950. Rhode Island provides a standard deduction of $10,550 for single filers and $21,150 for married couples, and also allows a personal exemption credit of $500 per exemption, which phases out at higher incomes. The state taxes Social Security income for residents above certain income thresholds. Rhode Island offers a property tax relief credit for qualifying lower-income homeowners and renters.",
    "salesTax": "7%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Top rate of 5.99% on income above $166,950 (single)",
      "Retirement income exemption up to $20,000 for those 65+",
      "Social Security may be exempt depending on income",
      "No local income taxes beyond the state rate"
    ],
    "revenueUrl": {
      "label": "Rhode Island Division of Taxation",
      "url": "https://tax.ri.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 73450,
        "rate": 3.75
      },
      {
        "min": 73450,
        "max": 176050,
        "rate": 4.75
      },
      {
        "min": 176050,
        "max": null,
        "rate": 5.99
      }
    ]
  },
  {
    "name": "South Carolina",
    "abbr": "SC",
    "slug": "south-carolina",
    "hasIncomeTax": true,
    "topRate": 6.4,
    "bottomRate": 3,
    "brackets": "3%–6.4%",
    "note": "South Carolina has a graduated income tax with rates from 3% to 6.4%, with further reductions planned.",
    "noTaxNote": null,
    "overview": "South Carolina uses a graduated income tax system with a top rate of 6.4% for 2024, scheduled to continue declining in future years. The state provides a deduction of 44% of net capital gains from its income tax, making it attractive for investors. South Carolina allows a standard deduction of $13,850 for single filers and $27,700 for married couples. The state fully exempts Social Security income and offers a retirement income deduction of up to $10,000 for residents 65 and older. Military retirement pay is fully exempt from South Carolina state income tax.",
    "salesTax": "7.44%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Top rate of 6.2% phasing down to 6.0% over time",
      "Retirement income deduction: up to $15,000 for those 65+ (or $3,000 under 65)",
      "Social Security benefits are fully exempt",
      "Military retirement pay fully exempt"
    ],
    "revenueUrl": {
      "label": "South Carolina Department of Revenue",
      "url": "https://dor.sc.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 3460,
        "rate": 0
      },
      {
        "min": 3460,
        "max": 6890,
        "rate": 3
      },
      {
        "min": 6890,
        "max": 10320,
        "rate": 4
      },
      {
        "min": 10320,
        "max": 13750,
        "rate": 5
      },
      {
        "min": 13750,
        "max": 17180,
        "rate": 6
      },
      {
        "min": 17180,
        "max": null,
        "rate": 6.2
      }
    ]
  },
  {
    "name": "South Dakota",
    "abbr": "SD",
    "slug": "south-dakota",
    "hasIncomeTax": false,
    "topRate": 0,
    "bottomRate": 0,
    "brackets": "None",
    "note": null,
    "noTaxNote": "South Dakota has no state income tax, making it one of the most tax-friendly states in the country.",
    "overview": "South Dakota has no state income tax, making it one of seven states to offer this benefit to residents. South Dakota funds its government primarily through a 4.5% state sales tax, which counties and municipalities may supplement with local additions. The state has no estate tax or inheritance tax, further enhancing its appeal for retirees and high-net-worth individuals. South Dakota is frequently used as a domicile state for trust planning due to its favorable trust laws and lack of income tax on trust income. Residents still owe federal income tax on all taxable income, but the absence of a state income tax represents meaningful savings, particularly for high earners.",
    "salesTax": "6.11%",
    "filingDeadline": "N/A (no state income tax)",
    "keyFacts": [
      "No state income tax on personal income",
      "No corporate income tax and no personal property tax",
      "Trust and LLC laws make it popular for wealth structuring",
      "No state estate or inheritance tax"
    ],
    "revenueUrl": {
      "label": "South Dakota Department of Revenue",
      "url": "https://dor.sd.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "Tennessee",
    "abbr": "TN",
    "slug": "tennessee",
    "hasIncomeTax": false,
    "topRate": 0,
    "bottomRate": 0,
    "brackets": "None",
    "note": null,
    "noTaxNote": "Tennessee has no state income tax. The former Hall Income Tax on dividends and interest was fully repealed in 2021.",
    "overview": "Tennessee eliminated its income tax on wages and salaries and fully repealed its tax on investment income — the Hall Income Tax — as of January 1, 2021. Tennessee now has no state income tax of any kind on personal income. The state funds its government primarily through a 7% statewide sales tax, one of the highest base rates in the country, with local additions bringing combined rates as high as 9.75% in some areas. Tennessee has no estate or inheritance tax. Residents owe federal income tax on all taxable income, but the absence of a state income tax is a significant benefit, particularly for high earners and retirees.",
    "salesTax": "9.55%",
    "filingDeadline": "N/A (no state income tax)",
    "keyFacts": [
      "No state income tax on wages or salaries as of 2022",
      "Hall Income Tax (on dividends/interest) fully eliminated in 2022",
      "Has one of the highest combined sales tax rates in the U.S.",
      "No state estate or inheritance tax"
    ],
    "revenueUrl": {
      "label": "Tennessee Department of Revenue",
      "url": "https://www.tn.gov/revenue.html"
    },
    "bracketRows": null
  },
  {
    "name": "Texas",
    "abbr": "TX",
    "slug": "texas",
    "hasIncomeTax": false,
    "topRate": 0,
    "bottomRate": 0,
    "brackets": "None",
    "note": null,
    "noTaxNote": "Texas has no state income tax. It is one of the most populous states without a personal income tax.",
    "overview": "Texas has no state income tax on personal income, making it one of seven states with this advantage and by far the most populous. Texas is the largest U.S. state by population without a state income tax, and this benefit attracts significant domestic migration from high-tax states like California and New York. To illustrate the financial impact: a Texas resident earning $100,000 pays $0 in state income tax. That same person living in California would owe approximately $7,000 or more in state income tax each year — a difference that compounds dramatically over time. Texas funds its state government primarily through a 6.25% state sales tax, with local additions bringing combined rates up to 8.25% in many areas. Property taxes in Texas are among the highest in the nation, averaging around 1.6% to 1.8% of assessed value annually, which is an important consideration for homeowners. A home valued at $350,000 in Texas might carry a property tax bill of $5,600 to $6,300 per year, depending on location. Texas residents owe federal income tax on all taxable income at the same rates as all other U.S. taxpayers. Texas has no estate tax or inheritance tax, making it an attractive state for retirement and wealth planning. The Texas Homestead Exemption reduces the taxable value of a primary residence by $100,000 for school district taxes, providing meaningful property tax relief for homeowners.",
    "salesTax": "8.19%",
    "filingDeadline": "N/A (no state income tax)",
    "keyFacts": [
      "No state income tax on personal income",
      "Franchise (margin) tax applies to most businesses",
      "Property taxes are among the highest in the U.S.",
      "No state estate or inheritance tax"
    ],
    "revenueUrl": {
      "label": "Texas Comptroller of Public Accounts",
      "url": "https://comptroller.texas.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "Utah",
    "abbr": "UT",
    "slug": "utah",
    "hasIncomeTax": true,
    "topRate": 4.55,
    "bottomRate": 4.55,
    "brackets": "4.55% flat",
    "note": "Utah uses a flat income tax rate of 4.55% for all taxpayers.",
    "noTaxNote": null,
    "overview": "Utah has a flat state income tax rate of 4.55% for 2024 on all taxable income. Utah provides a nonrefundable taxpayer tax credit of $78 per exemption rather than a traditional standard deduction, and provides a 6% credit on the federal standard deduction amount, effectively functioning similarly to a deduction. Utah taxes Social Security income for higher-income residents but provides a credit for lower-income retirees that can eliminate or reduce state tax on those benefits. Utah conforms closely to federal income definitions with limited modifications, making it relatively straightforward for most residents to calculate their state income tax using their federal return as a starting point.",
    "salesTax": "7.19%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Flat 4.55% rate with a nonrefundable tax credit system",
      "Social Security may be partially exempt based on income",
      "Retirement tax credit of up to $450 per person for those 65+",
      "Utah does not allow a deduction for federal income taxes paid"
    ],
    "revenueUrl": {
      "label": "Utah State Tax Commission",
      "url": "https://tax.utah.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "Vermont",
    "abbr": "VT",
    "slug": "vermont",
    "hasIncomeTax": true,
    "topRate": 8.75,
    "bottomRate": 3.35,
    "brackets": "3.35%–8.75%",
    "note": "Vermont has a graduated income tax with rates from 3.35% to 8.75% across 4 brackets.",
    "noTaxNote": null,
    "overview": "Vermont uses a graduated income tax with four brackets ranging from 3.35% to 8.75% for 2024. Single filers reach the top 8.75% rate on income above $213,150. Vermont generally conforms to federal adjusted gross income and provides a standard deduction equal to the federal amount. The state taxes Social Security income but offers an exemption for lower-income residents. Vermont also has a meals and rooms tax and a 6% general sales tax. Vermont offers income-tested property tax adjustments for qualifying homeowners and renters, which can provide meaningful relief for lower- and moderate-income residents.",
    "salesTax": "6.24%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Top rate of 8.75% on income above $204,000 (single)",
      "Social Security is partially exempt for lower-income filers",
      "No deduction for federal income taxes paid",
      "No local income taxes beyond state and school district rates"
    ],
    "revenueUrl": {
      "label": "Vermont Department of Taxes",
      "url": "https://tax.vermont.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 45400,
        "rate": 3.35
      },
      {
        "min": 45400,
        "max": 110050,
        "rate": 6.6
      },
      {
        "min": 110050,
        "max": 213150,
        "rate": 7.6
      },
      {
        "min": 213150,
        "max": null,
        "rate": 8.75
      }
    ]
  },
  {
    "name": "Virginia",
    "abbr": "VA",
    "slug": "virginia",
    "hasIncomeTax": true,
    "topRate": 5.75,
    "bottomRate": 2,
    "brackets": "2%–5.75%",
    "note": "Virginia has a graduated income tax with rates from 2% to 5.75% across 4 brackets.",
    "noTaxNote": null,
    "overview": "Virginia uses a graduated income tax with four brackets ranging from 2% to 5.75% for 2024. The brackets for single filers are: 2% on income up to $3,000; 3% on $3,001–$5,000; 5% on $5,001–$17,000; and 5.75% on income above $17,000. Virginia has not indexed its brackets for inflation, which means most taxpayers fall into the top 5.75% bracket relatively quickly — a single filer earning just $17,001 already pays the top rate on their last dollar of income. To illustrate with a real example: a single Virginia filer earning $60,000 in taxable income owes approximately $3,249 in state income tax — an effective rate of about 5.4%. Virginia provides a standard deduction of $8,000 for single filers and $16,000 for married couples filing jointly, significantly increased in recent years. The personal exemption is $930 per taxpayer and dependent. Virginia fully exempts Social Security income from state income tax, and provides an age deduction of $12,000 for residents 65 and older with income below certain thresholds. Active duty military pay earned outside Virginia is generally exempt, and Virginia provides a subtraction for military retirement income as well. Virginia also offers a refundable Earned Income Tax Credit equal to 15% of the federal credit, providing meaningful relief for lower-income working families.",
    "salesTax": "5.75%",
    "filingDeadline": "May 1",
    "keyFacts": [
      "Virginia filing deadline is May 1, not April 15",
      "Top rate of 5.75% on income above $17,000",
      "Age deduction: up to $12,000 for those 65+ (income-limited)",
      "No deduction for federal income taxes paid"
    ],
    "revenueUrl": {
      "label": "Virginia Department of Taxation",
      "url": "https://www.tax.virginia.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 3000,
        "rate": 2
      },
      {
        "min": 3000,
        "max": 5000,
        "rate": 3
      },
      {
        "min": 5000,
        "max": 17000,
        "rate": 5
      },
      {
        "min": 17000,
        "max": null,
        "rate": 5.75
      }
    ]
  },
  {
    "name": "Washington",
    "abbr": "WA",
    "slug": "washington",
    "hasIncomeTax": false,
    "topRate": 0,
    "bottomRate": 0,
    "brackets": "None",
    "note": null,
    "noTaxNote": "Washington has no state income tax. The state has one of the highest sales tax rates in the country and recently introduced a capital gains tax.",
    "overview": "Washington State has no state income tax on wages, salaries, or most personal income. Washington does impose a 7% capital gains tax on the sale of long-term capital assets exceeding $250,000 per year, upheld by the Washington Supreme Court in 2023. The state funds its government primarily through a 6.5% state sales tax, with local additions bringing combined rates as high as 10.4% in some areas. Washington also imposes a Business and Occupation tax on business gross receipts. Washington residents owe federal income tax on all taxable income. The absence of a broad-based income tax makes Washington attractive for high earners, though the sales tax burden is notable.",
    "salesTax": "9.38%",
    "filingDeadline": "N/A (no state income tax)",
    "keyFacts": [
      "No state income tax on wages or salaries",
      "7% capital gains tax on gains above $270,000 (2025 threshold)",
      "Long-Term Care Trust Act imposes 0.58% payroll tax",
      "Business & Occupation (B&O) tax applies to gross receipts"
    ],
    "revenueUrl": {
      "label": "Washington State Department of Revenue",
      "url": "https://dor.wa.gov/"
    },
    "bracketRows": null
  },
  {
    "name": "West Virginia",
    "abbr": "WV",
    "slug": "west-virginia",
    "hasIncomeTax": true,
    "topRate": 5.12,
    "bottomRate": 2.36,
    "brackets": "2.36%–5.12%",
    "note": "West Virginia has a graduated income tax with rates from 2.36% to 5.12% and has been reducing its rates.",
    "noTaxNote": null,
    "overview": "West Virginia uses a graduated income tax with five brackets ranging from 2.36% to 5.12% for 2024, following recent rate reductions. The state is phasing in further tax cuts and may move toward a flat or reduced rate structure in coming years. West Virginia provides a standard deduction of $20,000 for single filers and $20,000 for married couples. The state fully exempts Social Security income from state income tax and provides a significant exemption for military retirement pay and certain public pension income. West Virginia taxes most other retirement income, and the state also offers a credit for income taxes paid to other states.",
    "salesTax": "6.52%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Top rate dropping toward 3% by 2028 under recent legislation",
      "Social Security benefits are fully exempt",
      "Public pension income is fully exempt",
      "No local income taxes beyond the state rate"
    ],
    "revenueUrl": {
      "label": "West Virginia State Tax Division",
      "url": "https://tax.wv.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 10000,
        "rate": 2.36
      },
      {
        "min": 10000,
        "max": 25000,
        "rate": 3.15
      },
      {
        "min": 25000,
        "max": 40000,
        "rate": 3.54
      },
      {
        "min": 40000,
        "max": 60000,
        "rate": 4.72
      },
      {
        "min": 60000,
        "max": null,
        "rate": 5.12
      }
    ]
  },
  {
    "name": "Wisconsin",
    "abbr": "WI",
    "slug": "wisconsin",
    "hasIncomeTax": true,
    "topRate": 7.65,
    "bottomRate": 3.54,
    "brackets": "3.54%–7.65%",
    "note": "Wisconsin has a graduated income tax with rates from 3.54% to 7.65% across 4 brackets.",
    "noTaxNote": null,
    "overview": "Wisconsin uses a graduated income tax with four brackets ranging from 3.5% to 7.65% for 2024. Single filers pay 3.5% on income up to $13,810 and reach the top 7.65% rate on income above $304,170. Wisconsin provides a standard deduction that phases out at higher income levels — $12,110 for single filers with income below $16,000, phasing to zero above $110,770. The state taxes Social Security income but provides a partial subtraction for lower-income retirees. Wisconsin allows a deduction for contributions to Wisconsin 529 college savings accounts and offers a homestead credit for lower-income residents who own or rent their home.",
    "salesTax": "5.43%",
    "filingDeadline": "April 15",
    "keyFacts": [
      "Top rate of 7.65% on income above $315,310 (joint)",
      "Retirement income is generally taxable, unlike many neighboring states",
      "Social Security is exempt for most filers based on income",
      "Long-term capital gains may qualify for a 30% exclusion"
    ],
    "revenueUrl": {
      "label": "Wisconsin Department of Revenue",
      "url": "https://www.revenue.wi.gov/"
    },
    "bracketRows": [
      {
        "min": 0,
        "max": 13810,
        "rate": 3.54
      },
      {
        "min": 13810,
        "max": 27630,
        "rate": 4.65
      },
      {
        "min": 27630,
        "max": 304170,
        "rate": 5.3
      },
      {
        "min": 304170,
        "max": null,
        "rate": 7.65
      }
    ]
  },
  {
    "name": "Wyoming",
    "abbr": "WY",
    "slug": "wyoming",
    "hasIncomeTax": false,
    "topRate": 0,
    "bottomRate": 0,
    "brackets": "None",
    "note": null,
    "noTaxNote": "Wyoming has no state income tax. The state relies on mineral severance taxes and federal revenue sharing.",
    "overview": "Wyoming has no state income tax on personal income, making it one of seven states to offer this benefit. Wyoming is one of the most tax-friendly states overall — it has no corporate income tax, no inheritance tax, and no estate tax, and its property taxes are among the lowest in the nation. The state funds its government primarily through mineral extraction revenues and a 4% state sales tax, with local additions bringing combined rates up to 6% in some areas. Wyoming's tax environment, combined with its favorable trust and LLC laws, makes it popular for wealth planning and business structuring. Residents still owe federal income tax on all taxable income.",
    "salesTax": "5.36%",
    "filingDeadline": "N/A (no state income tax)",
    "keyFacts": [
      "No state income tax on personal income",
      "No corporate income tax or business income tax",
      "Property taxes among the lowest in the nation",
      "Popular for LLC and trust formation due to favorable laws"
    ],
    "revenueUrl": {
      "label": "Wyoming Department of Revenue",
      "url": "https://revenue.wyo.gov/"
    },
    "bracketRows": null
  }
];

module.exports = states;
