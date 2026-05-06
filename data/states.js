const states = [
  {
    name: "Alabama", abbr: "AL", slug: "alabama", hasIncomeTax: true,
    topRate: 5.0, bottomRate: 2.0, brackets: "2%–5%",
    note: "Alabama has a graduated income tax with rates from 2% to 5%. The state also allows deductions for federal income taxes paid.",
    noTaxNote: null,
    overview: "Alabama has a graduated state income tax with three brackets ranging from 2% to 5%. Single filers pay 2% on income up to $500, 4% on income from $501 to $3,000, and 5% on income above $3,000. Married filers have slightly wider brackets, with the 5% top rate kicking in above $6,000. Alabama allows a standard deduction that phases out at higher income levels, and the state also permits a deduction for federal income taxes paid — a relatively rare benefit that can meaningfully reduce your Alabama taxable income. Residents should also factor in county and municipal occupational taxes that apply in many parts of the state."
  },
  {
    name: "Alaska", abbr: "AK", slug: "alaska", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "Alaska has no state income tax. Residents may even receive an annual Permanent Fund Dividend from the state.",
    overview: "Alaska is one of only nine states with no broad-based state income tax, meaning residents pay no tax on wages, salaries, or most personal income at the state level. Beyond that, Alaska is the only state with no statewide sales tax, though some municipalities impose local sales taxes. Eligible residents may also receive an annual Permanent Fund Dividend — a payment funded by state oil revenues — which is itself subject to federal income tax. Alaska residents still owe federal income tax based on the same brackets that apply nationwide, making federal tax planning the primary focus for most Alaskans."
  },
  {
    name: "Arizona", abbr: "AZ", slug: "arizona", hasIncomeTax: true,
    topRate: 2.5, bottomRate: 2.5, brackets: "2.5% flat",
    note: "Arizona uses a flat income tax rate of 2.5% for all taxpayers, one of the lowest flat rates in the country.",
    noTaxNote: null,
    overview: "Arizona has a flat state income tax rate of 2.5% on all taxable income as of 2023, following the passage of Proposition 132. This replaced the previous graduated bracket system and makes Arizona one of the simpler states for income tax calculation. The standard deduction for Arizona residents is $13,850 for single filers and $27,700 for married couples filing jointly. Arizona also allows personal exemptions and a range of deductions and credits, including for dependents and charitable contributions made to qualifying organizations in the state."
  },
  {
    name: "Arkansas", abbr: "AR", slug: "arkansas", hasIncomeTax: true,
    topRate: 4.4, bottomRate: 2.0, brackets: "2%–4.4%",
    note: "Arkansas has a graduated income tax with rates from 2% to 4.4%. The state has been reducing its top rate in recent years.",
    noTaxNote: null,
    overview: "Arkansas uses a graduated income tax system with rates ranging from 2% to 4.4% for most filers in 2025, following a series of tax cuts enacted in recent years. The top marginal rate applies to income above $89,600. Arkansas offers a low-income tax credit for residents earning below certain thresholds, and the state allows deductions for federal income taxes paid, which can reduce Arkansas taxable income for many filers. The standard deduction in Arkansas is $2,200 for single filers and $4,400 for married couples filing jointly."
  },
  {
    name: "California", abbr: "CA", slug: "california", hasIncomeTax: true,
    topRate: 13.3, bottomRate: 1.0, brackets: "1%–13.3%",
    note: "California has the highest top marginal income tax rate in the country at 13.3%. It uses a graduated rate system with 9 brackets.",
    noTaxNote: null,
    overview: "California has the highest top marginal state income tax rate in the country at 13.3%, which applies to income above $1 million for single filers. The state uses a graduated system with nine brackets ranging from 1% to 13.3%. Single filers begin paying tax at 1% on income up to $10,756 and reach the 9.3% bracket at income above $67,149. California's standard deduction is notably low — just $5,202 for single filers and $10,404 for married couples — meaning most residents pay state income tax on a larger portion of their earnings than in states with higher deductions."
  },
  {
    name: "Colorado", abbr: "CO", slug: "colorado", hasIncomeTax: true,
    topRate: 4.4, bottomRate: 4.4, brackets: "4.4% flat",
    note: "Colorado uses a flat income tax rate of 4.4% for all taxpayers.",
    noTaxNote: null,
    overview: "Colorado has a flat state income tax rate of 4.4% on all federal taxable income, making it one of the more straightforward states for income tax planning. Because Colorado starts with federal adjusted gross income and makes limited modifications, residents generally find state tax preparation simpler than in states with their own complex bracket systems. Colorado also offers a Taxpayer's Bill of Rights (TABOR) provision that can trigger refunds when state revenue exceeds a defined limit. The state does not allow a separate standard deduction — it piggybacks on the federal AGI instead."
  },
  {
    name: "Connecticut", abbr: "CT", slug: "connecticut", hasIncomeTax: true,
    topRate: 6.99, bottomRate: 3.0, brackets: "3%–6.99%",
    note: "Connecticut has a graduated income tax with rates from 3% to 6.99% across 7 brackets.",
    noTaxNote: null,
    overview: "Connecticut uses a graduated income tax with rates ranging from 3% to 6.99%. Single filers pay 3% on income up to $10,000 and reach the top 6.99% rate on income above $500,000. Connecticut provides a property tax credit of up to $300 for eligible homeowners and renters, and offers a credit for income taxes paid to other states. The state also has its own standard deduction and personal exemption, though these phase out at higher income levels. Connecticut residents should also be aware that Social Security income may be partially taxable at the state level depending on filing status and income."
  },
  {
    name: "Delaware", abbr: "DE", slug: "delaware", hasIncomeTax: true,
    topRate: 6.6, bottomRate: 2.2, brackets: "2.2%–6.6%",
    note: "Delaware has a graduated income tax with rates from 2.2% to 6.6%. Delaware has no state sales tax.",
    noTaxNote: null,
    overview: "Delaware imposes a graduated state income tax with six brackets ranging from 0% to 6.6%. Income up to $2,000 is exempt, and the top rate of 6.6% applies to income above $60,000. Delaware is known as a tax-friendly state for retirees — there is no sales tax statewide, and the state offers a significant pension exclusion of up to $12,500 for residents 60 and older. The standard deduction is $3,250 for single filers and $6,500 for married couples filing jointly. Delaware also allows a personal credit of $110 per exemption claimed."
  },
  {
    name: "Florida", abbr: "FL", slug: "florida", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "Florida has no state income tax, making it one of the most tax-friendly states for residents and retirees.",
    overview: "Florida has no state income tax on wages, salaries, or most personal income, making it one of the most tax-friendly states for residents. The absence of a state income tax means Florida residents keep a larger share of their earnings compared to residents of high-tax states. Florida does impose a sales tax of 6% statewide, and many counties add a local surtax on top of that. Property taxes in Florida vary by county but are generally moderate. Florida residents still owe federal income tax, and retirement income such as Social Security, pensions, and IRA withdrawals is taxed only at the federal level."
  },
  {
    name: "Georgia", abbr: "GA", slug: "georgia", hasIncomeTax: true,
    topRate: 5.49, bottomRate: 5.49, brackets: "5.49% flat",
    note: "Georgia moved to a flat income tax rate of 5.49% in 2024, with the rate set to gradually decline in future years.",
    noTaxNote: null,
    overview: "Georgia uses a flat income tax rate of 5.49% for 2024, with the rate scheduled to gradually decrease to 4.99% over time under legislation enacted in recent years. Georgia allows a standard deduction of $5,400 for single filers and $7,100 for married couples filing jointly. The state also provides a personal exemption of $2,700 per person and a $3,000 exemption per dependent. Georgia taxes most retirement income but offers a retirement income exclusion of up to $65,000 per person for residents 65 and older, making it increasingly attractive for retirees."
  },
  {
    name: "Hawaii", abbr: "HI", slug: "hawaii", hasIncomeTax: true,
    topRate: 11.0, bottomRate: 1.4, brackets: "1.4%–11%",
    note: "Hawaii has the highest top marginal income tax rate in the country at 11%, with 12 graduated brackets.",
    noTaxNote: null,
    overview: "Hawaii has the highest top marginal state income tax rate among all states at 11%, which applies to income above $200,000 for single filers. Hawaii uses a graduated system with twelve brackets beginning at 1.4% on income up to $2,400. The standard deduction in Hawaii is $2,200 for single filers and $4,400 for married couples — among the lowest in the country. Hawaii does not conform to many federal tax provisions, so residents must recalculate certain items under state rules. Hawaii also imposes a General Excise Tax in lieu of a traditional sales tax, which is effectively passed on to consumers at rates ranging from 4% to 4.5%."
  },
  {
    name: "Idaho", abbr: "ID", slug: "idaho", hasIncomeTax: true,
    topRate: 5.8, bottomRate: 5.8, brackets: "5.8% flat",
    note: "Idaho moved to a flat income tax rate of 5.8% in 2023.",
    noTaxNote: null,
    overview: "Idaho has a flat state income tax rate of 5.8% on all taxable income for 2025, following recent legislative changes that simplified the state's previous graduated bracket structure. Idaho generally conforms to federal definitions of income and deductions, making state tax preparation relatively straightforward for most residents. The state offers a grocery credit — a refundable credit that helps offset the sales tax paid on food — of $120 per person including dependents. Idaho also allows a deduction for retirement income for qualifying residents, and Social Security benefits are exempt from state income tax for most filers."
  },
  {
    name: "Illinois", abbr: "IL", slug: "illinois", hasIncomeTax: true,
    topRate: 4.95, bottomRate: 4.95, brackets: "4.95% flat",
    note: "Illinois uses a flat income tax rate of 4.95% for all taxpayers.",
    noTaxNote: null,
    overview: "Illinois imposes a flat income tax rate of 4.95% on all net income, regardless of filing status or income level. Illinois does not allow a standard deduction or graduated brackets, but it does provide a personal exemption of $2,425 per return. One notable feature of Illinois tax law is that most retirement income — including Social Security, pension income, and distributions from qualified retirement plans like 401(k)s and IRAs — is fully exempt from state income tax. Illinois has a relatively high combined state and local sales tax burden, and property taxes are among the highest in the nation, particularly in the Chicago metro area."
  },
  {
    name: "Indiana", abbr: "IN", slug: "indiana", hasIncomeTax: true,
    topRate: 3.05, bottomRate: 3.05, brackets: "3.05% flat",
    note: "Indiana uses a flat income tax rate of 3.05% for all taxpayers, with additional county-level taxes varying by location.",
    noTaxNote: null,
    overview: "Indiana uses a flat state income tax rate of 3.05% for 2024, with reductions scheduled in future years as part of ongoing tax reform legislation. Indiana also allows county income taxes, which vary by county and generally range from 0.5% to 3.38%, meaning your total Indiana income tax rate depends on where you live. Indiana provides a $1,000 personal exemption per taxpayer and an additional exemption for dependents. The state also offers a $1,000 exemption for residents over 65 and for those who are blind or disabled. Indiana generally conforms to federal adjusted gross income with certain modifications."
  },
  {
    name: "Iowa", abbr: "IA", slug: "iowa", hasIncomeTax: true,
    topRate: 3.8, bottomRate: 3.8, brackets: "3.8% flat",
    note: "Iowa moved to a flat income tax rate of 3.8% in 2025 as part of a multi-year tax reform effort.",
    noTaxNote: null,
    overview: "Iowa has a flat income tax rate of 3.8% for 2025, down significantly from prior years as the state phases in tax cuts through 2026. Iowa previously used a complex graduated system with many brackets, but reforms signed in 2022 are simplifying the system considerably. Iowa exempts Social Security income from state income tax and offers retirement income exemptions for qualifying taxpayers 55 and older. The state allows a standard deduction of $2,210 for single filers and $5,450 for married couples filing jointly. Iowa also permits deductions for federal income taxes paid under certain circumstances."
  },
  {
    name: "Kansas", abbr: "KS", slug: "kansas", hasIncomeTax: true,
    topRate: 5.7, bottomRate: 3.1, brackets: "3.1%–5.7%",
    note: "Kansas has a two-bracket graduated income tax with rates of 3.1% and 5.7%.",
    noTaxNote: null,
    overview: "Kansas imposes income tax using two brackets: 3.1% on income up to $15,000 for single filers and 5.7% on income above that threshold. Married couples filing jointly pay 3.1% on income up to $30,000 and 5.7% above that. Kansas offers a standard deduction of $3,500 for single filers and $8,000 for married couples. Social Security income is exempt from Kansas state income tax for residents with federal adjusted gross income below $75,000. Kansas also provides a food sales tax credit to offset the burden of the state's sales tax on groceries, and military retirement pay is fully exempt from state income tax."
  },
  {
    name: "Kentucky", abbr: "KY", slug: "kentucky", hasIncomeTax: true,
    topRate: 4.0, bottomRate: 4.0, brackets: "4.0% flat",
    note: "Kentucky uses a flat income tax rate of 4.0% for all taxpayers.",
    noTaxNote: null,
    overview: "Kentucky has a flat state income tax rate of 4.0% for 2024, reduced from 4.5% in 2023 as part of a legislative plan to gradually lower the rate over time. Kentucky does not use graduated brackets, making calculations straightforward. The state provides a standard deduction of $3,160 for all filers and a personal credit of $10 per exemption. Kentucky exempts up to $31,110 of pension and retirement income from state income tax for qualifying residents, and Social Security benefits are fully exempt. The state also imposes a limited liability entity tax on businesses and a local occupational tax in many counties and cities."
  },
  {
    name: "Louisiana", abbr: "LA", slug: "louisiana", hasIncomeTax: true,
    topRate: 4.25, bottomRate: 1.85, brackets: "1.85%–4.25%",
    note: "Louisiana has a graduated income tax with rates from 1.85% to 4.25% across 3 brackets.",
    noTaxNote: null,
    overview: "Louisiana uses a graduated income tax with rates of 1.85% on income up to $12,500, 3.5% on income from $12,501 to $50,000, and 4.25% on income above $50,000 for single filers. Louisiana allows a deduction for federal income taxes paid, which is one of the few states to offer this benefit and can substantially reduce your Louisiana taxable income. The state also provides a personal exemption of $4,500 for single filers and $9,000 for married couples. Louisiana exempts most retirement income, including Social Security, teacher retirement, and military retirement pay, from state income tax."
  },
  {
    name: "Maine", abbr: "ME", slug: "maine", hasIncomeTax: true,
    topRate: 7.15, bottomRate: 5.8, brackets: "5.8%–7.15%",
    note: "Maine has a graduated income tax with rates from 5.8% to 7.15% across 3 brackets.",
    noTaxNote: null,
    overview: "Maine uses a graduated income tax with three brackets for 2025: 5.8% on income up to $24,500 for single filers, 6.75% on income from $24,501 to $58,050, and 7.15% on income above $58,050. Maine provides a standard deduction equal to the federal standard deduction and also conforms closely to federal definitions of income and deductions. The state offers a property tax fairness credit for lower- and moderate-income residents and a sales tax fairness credit as well. Maine partially taxes Social Security benefits using the same method as the federal government, but offers an exemption for lower-income retirees."
  },
  {
    name: "Maryland", abbr: "MD", slug: "maryland", hasIncomeTax: true,
    topRate: 5.75, bottomRate: 2.0, brackets: "2%–5.75%",
    note: "Maryland has a graduated income tax with rates from 2% to 5.75%, plus local income taxes that vary by county.",
    noTaxNote: null,
    overview: "Maryland has a graduated state income tax with eight brackets ranging from 2% to 5.75%, plus an additional 1.75% surtax on income above $100,000 for single filers. Beyond state income tax, Maryland counties and Baltimore City each impose a local income tax ranging from 2.25% to 3.2%, making Maryland's combined state and local income tax one of the higher burdens in the country. Maryland provides a standard deduction of 15% of adjusted gross income, with a minimum of $1,700 and a maximum of $2,550 for single filers. The state exempts the first $35,000 of military retirement pay for qualifying residents."
  },
  {
    name: "Massachusetts", abbr: "MA", slug: "massachusetts", hasIncomeTax: true,
    topRate: 9.0, bottomRate: 5.0, brackets: "5%–9%",
    note: "Massachusetts uses a flat 5% income tax rate for most income, with a 4% surtax on income over $1 million.",
    noTaxNote: null,
    overview: "Massachusetts imposes a flat income tax rate of 5% on most income, with a higher surtax of 4% on income above $1 million, making the effective top rate 9% for very high earners under the Fair Share Amendment passed in 2022. Massachusetts taxes most income at the flat rate, including wages, interest, dividends, and long-term capital gains. Short-term capital gains are taxed at 8.5%. Massachusetts allows a personal exemption of $4,400 for single filers and $8,800 for married couples. The state does not tax Social Security benefits, and certain pension income for state and municipal employees is exempt."
  },
  {
    name: "Michigan", abbr: "MI", slug: "michigan", hasIncomeTax: true,
    topRate: 4.05, bottomRate: 4.05, brackets: "4.05% flat",
    note: "Michigan uses a flat income tax rate of 4.05% for all taxpayers, with additional city income taxes in some areas.",
    noTaxNote: null,
    overview: "Michigan uses a flat income tax rate of 4.05% for 2024, adjusted slightly from previous years based on revenue triggers in state law. Michigan provides a personal exemption of $5,600 per taxpayer and dependent, which reduces taxable income for most residents. The state exempts Social Security benefits from income tax and offers varying levels of pension exemption depending on the taxpayer's birth year, with residents born before 1946 receiving the most favorable treatment. Michigan cities may also impose a local income tax — Detroit charges 2.4% on residents and 1.2% on nonresidents — so your total tax burden depends on where you live and work."
  },
  {
    name: "Minnesota", abbr: "MN", slug: "minnesota", hasIncomeTax: true,
    topRate: 9.85, bottomRate: 5.35, brackets: "5.35%–9.85%",
    note: "Minnesota has a graduated income tax with rates from 5.35% to 9.85% across 4 brackets.",
    noTaxNote: null,
    overview: "Minnesota has a graduated state income tax with four brackets ranging from 5.35% to 9.85% for 2025. Single filers enter the top 9.85% bracket on income above $183,340, making Minnesota one of the higher-tax states in the country. Minnesota provides a standard deduction equal to the federal standard deduction and also offers a dependent exemption credit. The state taxes a portion of Social Security income for higher-income residents, though lower-income retirees may qualify for a partial subtraction. Minnesota also offers education-related credits and a renter's property tax credit for qualifying residents."
  },
  {
    name: "Mississippi", abbr: "MS", slug: "mississippi", hasIncomeTax: true,
    topRate: 4.7, bottomRate: 4.7, brackets: "4.7% flat",
    note: "Mississippi moved to a flat income tax rate of 4.7% in 2024, with the rate set to decline further in coming years.",
    noTaxNote: null,
    overview: "Mississippi has a flat income tax rate of 4.7% for 2024, reduced from 5% as part of a phased tax cut that will lower the rate to 4% by 2026. The state provides a standard deduction of $2,300 for single filers and $4,600 for married couples filing jointly, plus a personal exemption of $6,000 for single filers and $12,000 for married couples. Mississippi fully exempts Social Security income, most retirement income including public and private pensions, and military retirement pay from state income tax. Mississippi's relatively low cost of living and modest tax burden make it an attractive state for retirees on fixed incomes."
  },
  {
    name: "Missouri", abbr: "MO", slug: "missouri", hasIncomeTax: true,
    topRate: 4.8, bottomRate: 2.0, brackets: "2%–4.8%",
    note: "Missouri has a graduated income tax with rates from 2% to 4.8%, with the top rate applying to income above $9,000.",
    noTaxNote: null,
    overview: "Missouri uses a graduated income tax system with rates starting at 2% and reaching a top rate of 4.8% for 2024 on income above $9,000, following a series of phased tax reductions. Missouri allows a deduction for federal income taxes paid, up to $5,000 for single filers and $10,000 for married couples, which can meaningfully reduce state taxable income. The state provides a standard deduction equal to the federal standard deduction. Missouri fully exempts Social Security benefits and 100% of public pension income for qualifying retirees. Military retirement pay is also fully exempt from Missouri state income tax."
  },
  {
    name: "Montana", abbr: "MT", slug: "montana", hasIncomeTax: true,
    topRate: 6.75, bottomRate: 1.0, brackets: "1%–6.75%",
    note: "Montana has a graduated income tax with rates from 1% to 6.75% following a 2021 simplification of its tax code.",
    noTaxNote: null,
    overview: "Montana imposes a graduated income tax with rates ranging from 1% to 6.75% for 2024, following a 2021 reform that simplified the previous seven-bracket system. Single filers reach the top 6.75% rate on income above $20,500. Montana provides a standard deduction of 20% of adjusted gross income, with a minimum of $4,930 and a maximum of $9,860 for single filers. Montana allows a credit for income taxes paid to other states and provides a capital gains credit equal to 2% of qualifying net long-term capital gains. The state does not tax Social Security income below certain thresholds."
  },
  {
    name: "Nebraska", abbr: "NE", slug: "nebraska", hasIncomeTax: true,
    topRate: 5.84, bottomRate: 2.46, brackets: "2.46%–5.84%",
    note: "Nebraska has a graduated income tax with rates from 2.46% to 5.84%, with further reductions planned.",
    noTaxNote: null,
    overview: "Nebraska uses a graduated income tax with four brackets ranging from 2.46% to 5.84% for 2024, with rates scheduled to continue decreasing under legislation that targets a 3.99% flat rate by 2027. Nebraska provides a standard deduction equal to the federal standard deduction and conforms closely to federal income definitions. The state exempts Social Security income from state income tax for residents with federal AGI below $44,460 for single filers and $59,100 for married couples, with a partial exemption available above those thresholds. Nebraska taxes most other retirement income, including IRA distributions and private pensions."
  },
  {
    name: "Nevada", abbr: "NV", slug: "nevada", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "Nevada has no state income tax, relying instead on gaming and sales taxes for state revenue.",
    overview: "Nevada has no state income tax on personal income, making it one of seven states to offer this benefit. Nevada funds its state government primarily through gaming taxes, sales taxes, and various business fees rather than a personal income tax. The statewide sales tax rate is 6.85%, with local additions bringing the combined rate as high as 8.265% in some areas. Nevada residents still owe federal income tax on all taxable income. The absence of a state income tax is a significant financial benefit, particularly for high earners and retirees, and has contributed to Nevada's reputation as one of the more tax-friendly states in the western United States."
  },
  {
    name: "New Hampshire", abbr: "NH", slug: "new-hampshire", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "New Hampshire has no broad-based income tax on wages. A tax on interest and dividends is being phased out.",
    overview: "New Hampshire does not impose a broad-based state income tax on wages or salaries. Historically, New Hampshire taxed interest and dividend income, but this tax is being phased out and is scheduled for full repeal. New Hampshire residents who earn investment income should verify the current status for their tax year. The state has no sales tax and no capital gains tax at the state level. New Hampshire relies heavily on property taxes to fund local governments, and property tax rates are among the highest in the country. Federal income tax applies to all taxable income regardless of state residency."
  },
  {
    name: "New Jersey", abbr: "NJ", slug: "new-jersey", hasIncomeTax: true,
    topRate: 10.75, bottomRate: 1.4, brackets: "1.4%–10.75%",
    note: "New Jersey has a graduated income tax with rates from 1.4% to 10.75% across 7 brackets.",
    noTaxNote: null,
    overview: "New Jersey has a graduated income tax with seven brackets ranging from 1.4% to 10.75% for 2025. Single filers pay 1.4% on income up to $20,000 and enter the top 10.75% bracket on income above $1 million. New Jersey provides a property tax credit of up to $1,500 for homeowners and renters, and exempts Social Security and Railroad Retirement benefits from state income tax. The state does not provide a standard deduction for single filers, but does offer personal exemptions and various credits. New Jersey's high property taxes and relatively high income tax rates make it one of the higher overall tax burden states in the country."
  },
  {
    name: "New Mexico", abbr: "NM", slug: "new-mexico", hasIncomeTax: true,
    topRate: 5.9, bottomRate: 1.7, brackets: "1.7%–5.9%",
    note: "New Mexico has a graduated income tax with rates from 1.7% to 5.9% across 5 brackets.",
    noTaxNote: null,
    overview: "New Mexico uses a graduated income tax with five brackets ranging from 1.7% to 5.9% for 2024. Single filers reach the top rate on income above $157,000. New Mexico provides a standard deduction equal to the federal standard deduction and conforms broadly to federal income definitions. Social Security benefits are generally exempt from New Mexico income tax for residents with income below $100,000 for single filers and $150,000 for married couples. New Mexico also offers a low-income comprehensive tax rebate and a working families tax credit modeled on the federal Earned Income Tax Credit."
  },
  {
    name: "New York", abbr: "NY", slug: "new-york", hasIncomeTax: true,
    topRate: 10.9, bottomRate: 4.0, brackets: "4%–10.9%",
    note: "New York has a graduated income tax with rates from 4% to 10.9% across 9 brackets. NYC residents pay additional city income tax.",
    noTaxNote: null,
    overview: "New York has a graduated state income tax with nine brackets ranging from 4% to 10.9% for 2024. Single filers begin paying at 4% on income up to $8,500 and reach the top 10.9% bracket on income above $25 million. New York City residents pay an additional city income tax of 3.078% to 3.876%, and Yonkers adds a surcharge as well, making New York one of the highest combined income tax burden states in the country. New York provides a standard deduction of $8,000 for single filers and $16,050 for married couples. Social Security income is fully exempt, and there is a pension exclusion of up to $20,000 for qualifying retirees."
  },
  {
    name: "North Carolina", abbr: "NC", slug: "north-carolina", hasIncomeTax: true,
    topRate: 4.5, bottomRate: 4.5, brackets: "4.5% flat",
    note: "North Carolina uses a flat income tax rate of 4.5% for all taxpayers, with further reductions planned.",
    noTaxNote: null,
    overview: "North Carolina has a flat state income tax rate of 4.5% for 2024, reduced from 4.75% as part of ongoing legislation that will lower the rate to 3.99% by 2026. North Carolina provides a standard deduction of $10,750 for single filers and $21,500 for married couples filing jointly. The state taxes most retirement income but exempts Social Security benefits and provides a $4,000 exclusion for other qualifying retirement income. North Carolina does not allow a deduction for federal income taxes paid. The state's flat tax and increasing standard deduction make it relatively straightforward for most residents to estimate their state income tax liability."
  },
  {
    name: "North Dakota", abbr: "ND", slug: "north-dakota", hasIncomeTax: true,
    topRate: 2.5, bottomRate: 1.1, brackets: "1.1%–2.5%",
    note: "North Dakota has one of the lowest income tax burdens in the country, with rates from 1.1% to 2.5%.",
    noTaxNote: null,
    overview: "North Dakota uses a graduated income tax with five brackets ranging from 1.1% to 2.5% for 2024, making it one of the lowest-tax states for income. Single filers reach the top 2.5% rate on income above $225,000. North Dakota provides a standard deduction equal to the federal standard deduction and conforms closely to federal income definitions. The state exempts Social Security income from state income tax and offers a credit for income taxes paid to other states. North Dakota also provides an exemption for military retirement pay and an incentive for residents who serve in the National Guard."
  },
  {
    name: "Ohio", abbr: "OH", slug: "ohio", hasIncomeTax: true,
    topRate: 3.5, bottomRate: 0, brackets: "0%–3.5%",
    note: "Ohio has a graduated income tax with rates from 0% to 3.5%, plus municipal income taxes that vary by city.",
    noTaxNote: null,
    overview: "Ohio uses a graduated income tax with three brackets for 2024: 0% on income up to $26,050, 2.75% on income from $26,051 to $100,000, and 3.5% on income above $100,000. Ohio also allows municipalities to impose a local income tax, and many cities including Columbus, Cleveland, and Cincinnati charge between 2% and 3%, so your actual total income tax burden depends significantly on where you live and work. Ohio provides a personal and dependent exemption credit of $40 per exemption and a lump-sum retirement credit for qualifying retirees. Social Security income is fully exempt from Ohio income tax."
  },
  {
    name: "Oklahoma", abbr: "OK", slug: "oklahoma", hasIncomeTax: true,
    topRate: 4.75, bottomRate: 0.25, brackets: "0.25%–4.75%",
    note: "Oklahoma has a graduated income tax with rates from 0.25% to 4.75% across 5 brackets.",
    noTaxNote: null,
    overview: "Oklahoma imposes a graduated income tax with five brackets ranging from 0.25% to 4.75% for 2024. Single filers pay the top rate on income above $7,200. Oklahoma provides a standard deduction of $6,350 for single filers and $12,700 for married couples filing jointly. The state offers a credit for income taxes paid to other states and provides an exemption for Social Security income, military retirement pay, and a portion of other retirement income. Oklahoma also allows a deduction for contributions to the state's 529 college savings plan."
  },
  {
    name: "Oregon", abbr: "OR", slug: "oregon", hasIncomeTax: true,
    topRate: 9.9, bottomRate: 4.75, brackets: "4.75%–9.9%",
    note: "Oregon has a graduated income tax with rates from 4.75% to 9.9% across 4 brackets. Oregon has no sales tax.",
    noTaxNote: null,
    overview: "Oregon has a graduated state income tax with four brackets ranging from 4.75% to 9.9% for 2024. Single filers pay 4.75% on income up to $18,400 and reach the top 9.9% rate on income above $250,000. Portland and surrounding Multnomah County impose additional local income taxes, including a Metro Supportive Housing Services Tax and a Preschool for All Tax on income above certain thresholds. Oregon does not have a state sales tax. The state provides a standard deduction of $2,420 for single filers and $4,865 for married couples. Oregon fully taxes Social Security income but allows a credit for lower-income seniors."
  },
  {
    name: "Pennsylvania", abbr: "PA", slug: "pennsylvania", hasIncomeTax: true,
    topRate: 3.07, bottomRate: 3.07, brackets: "3.07% flat",
    note: "Pennsylvania uses a flat income tax rate of 3.07% for all taxpayers, with additional local earned income taxes in most municipalities.",
    noTaxNote: null,
    overview: "Pennsylvania uses a flat income tax rate of 3.07% on all taxable income, one of the lower flat rates among states that use this approach. Pennsylvania has a relatively narrow definition of taxable income — many types of income taxable federally, such as Social Security benefits and most retirement income including pensions and 401(k) distributions, are not taxed at the state level. Pennsylvania allows no standard deduction or personal exemption, but the narrow tax base effectively reduces the burden for many residents. Local earned income taxes also apply in most Pennsylvania municipalities, typically ranging from 1% to 3%."
  },
  {
    name: "Rhode Island", abbr: "RI", slug: "rhode-island", hasIncomeTax: true,
    topRate: 5.99, bottomRate: 3.75, brackets: "3.75%–5.99%",
    note: "Rhode Island has a graduated income tax with rates from 3.75% to 5.99% across 3 brackets.",
    noTaxNote: null,
    overview: "Rhode Island uses a graduated income tax with three brackets ranging from 3.75% to 5.99% for 2024. Single filers pay 3.75% on income up to $73,450, 4.75% on income from $73,451 to $166,950, and 5.99% on income above $166,950. Rhode Island provides a standard deduction of $10,550 for single filers and $21,150 for married couples, and also allows a personal exemption credit of $500 per exemption, which phases out at higher incomes. The state taxes Social Security income for residents above certain income thresholds. Rhode Island offers a property tax relief credit for qualifying lower-income homeowners and renters."
  },
  {
    name: "South Carolina", abbr: "SC", slug: "south-carolina", hasIncomeTax: true,
    topRate: 6.4, bottomRate: 3.0, brackets: "3%–6.4%",
    note: "South Carolina has a graduated income tax with rates from 3% to 6.4%, with further reductions planned.",
    noTaxNote: null,
    overview: "South Carolina uses a graduated income tax system with a top rate of 6.4% for 2024, scheduled to continue declining in future years. The state provides a deduction of 44% of net capital gains from its income tax, making it attractive for investors. South Carolina allows a standard deduction of $13,850 for single filers and $27,700 for married couples. The state fully exempts Social Security income and offers a retirement income deduction of up to $10,000 for residents 65 and older. Military retirement pay is fully exempt from South Carolina state income tax."
  },
  {
    name: "South Dakota", abbr: "SD", slug: "south-dakota", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "South Dakota has no state income tax, making it one of the most tax-friendly states in the country.",
    overview: "South Dakota has no state income tax, making it one of seven states to offer this benefit to residents. South Dakota funds its government primarily through a 4.5% state sales tax, which counties and municipalities may supplement with local additions. The state has no estate tax or inheritance tax, further enhancing its appeal for retirees and high-net-worth individuals. South Dakota is frequently used as a domicile state for trust planning due to its favorable trust laws and lack of income tax on trust income. Residents still owe federal income tax on all taxable income, but the absence of a state income tax represents meaningful savings, particularly for high earners."
  },
  {
    name: "Tennessee", abbr: "TN", slug: "tennessee", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "Tennessee has no state income tax. The former Hall Income Tax on dividends and interest was fully repealed in 2021.",
    overview: "Tennessee eliminated its income tax on wages and salaries and fully repealed its tax on investment income — the Hall Income Tax — as of January 1, 2021. Tennessee now has no state income tax of any kind on personal income. The state funds its government primarily through a 7% statewide sales tax, one of the highest base rates in the country, with local additions bringing combined rates as high as 9.75% in some areas. Tennessee has no estate or inheritance tax. Residents owe federal income tax on all taxable income, but the absence of a state income tax is a significant benefit, particularly for high earners and retirees."
  },
  {
    name: "Texas", abbr: "TX", slug: "texas", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "Texas has no state income tax. It is one of the most populous states without a personal income tax.",
    overview: "Texas has no state income tax on personal income, making it one of seven states to offer this advantage. Texas is the largest U.S. state by population without a state income tax, and this benefit attracts significant domestic migration from high-tax states. Texas funds its state government primarily through a 6.25% state sales tax, with local additions bringing combined rates up to 8.25% in many areas. Property taxes in Texas are among the highest in the nation, averaging around 1.6% to 1.8% of assessed value, which is an important consideration for homeowners. Texas residents owe federal income tax on all taxable income at the same rates as all other U.S. taxpayers."
  },
  {
    name: "Utah", abbr: "UT", slug: "utah", hasIncomeTax: true,
    topRate: 4.55, bottomRate: 4.55, brackets: "4.55% flat",
    note: "Utah uses a flat income tax rate of 4.55% for all taxpayers.",
    noTaxNote: null,
    overview: "Utah has a flat state income tax rate of 4.55% for 2024 on all taxable income. Utah provides a nonrefundable taxpayer tax credit of $78 per exemption rather than a traditional standard deduction, and provides a 6% credit on the federal standard deduction amount, effectively functioning similarly to a deduction. Utah taxes Social Security income for higher-income residents but provides a credit for lower-income retirees that can eliminate or reduce state tax on those benefits. Utah conforms closely to federal income definitions with limited modifications, making it relatively straightforward for most residents to calculate their state income tax using their federal return as a starting point."
  },
  {
    name: "Vermont", abbr: "VT", slug: "vermont", hasIncomeTax: true,
    topRate: 8.75, bottomRate: 3.35, brackets: "3.35%–8.75%",
    note: "Vermont has a graduated income tax with rates from 3.35% to 8.75% across 4 brackets.",
    noTaxNote: null,
    overview: "Vermont uses a graduated income tax with four brackets ranging from 3.35% to 8.75% for 2024. Single filers reach the top 8.75% rate on income above $213,150. Vermont generally conforms to federal adjusted gross income and provides a standard deduction equal to the federal amount. The state taxes Social Security income but offers an exemption for lower-income residents. Vermont also has a meals and rooms tax and a 6% general sales tax. Vermont offers income-tested property tax adjustments for qualifying homeowners and renters, which can provide meaningful relief for lower- and moderate-income residents."
  },
  {
    name: "Virginia", abbr: "VA", slug: "virginia", hasIncomeTax: true,
    topRate: 5.75, bottomRate: 2.0, brackets: "2%–5.75%",
    note: "Virginia has a graduated income tax with rates from 2% to 5.75% across 4 brackets.",
    noTaxNote: null,
    overview: "Virginia uses a graduated income tax with four brackets ranging from 2% to 5.75% for 2024. Single filers pay 2% on income up to $3,000 and reach the top 5.75% rate on income above $17,000. Virginia has not indexed its brackets for inflation, so most taxpayers fall into the top bracket relatively quickly. The state provides a standard deduction of $8,000 for single filers and $16,000 for married couples, significantly increased in recent years. Virginia exempts Social Security income from state tax and provides an age deduction of $12,000 for residents 65 and older with income below certain thresholds. Military pay earned by active duty members stationed outside Virginia is exempt."
  },
  {
    name: "Washington", abbr: "WA", slug: "washington", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "Washington has no state income tax. The state has one of the highest sales tax rates in the country and recently introduced a capital gains tax.",
    overview: "Washington State has no state income tax on wages, salaries, or most personal income. Washington does impose a 7% capital gains tax on the sale of long-term capital assets exceeding $250,000 per year, upheld by the Washington Supreme Court in 2023. The state funds its government primarily through a 6.5% state sales tax, with local additions bringing combined rates as high as 10.4% in some areas. Washington also imposes a Business and Occupation tax on business gross receipts. Washington residents owe federal income tax on all taxable income. The absence of a broad-based income tax makes Washington attractive for high earners, though the sales tax burden is notable."
  },
  {
    name: "West Virginia", abbr: "WV", slug: "west-virginia", hasIncomeTax: true,
    topRate: 5.12, bottomRate: 2.36, brackets: "2.36%–5.12%",
    note: "West Virginia has a graduated income tax with rates from 2.36% to 5.12% and has been reducing its rates.",
    noTaxNote: null,
    overview: "West Virginia uses a graduated income tax with five brackets ranging from 2.36% to 5.12% for 2024, following recent rate reductions. The state is phasing in further tax cuts and may move toward a flat or reduced rate structure in coming years. West Virginia provides a standard deduction of $20,000 for single filers and $20,000 for married couples. The state fully exempts Social Security income from state income tax and provides a significant exemption for military retirement pay and certain public pension income. West Virginia taxes most other retirement income, and the state also offers a credit for income taxes paid to other states."
  },
  {
    name: "Wisconsin", abbr: "WI", slug: "wisconsin", hasIncomeTax: true,
    topRate: 7.65, bottomRate: 3.54, brackets: "3.54%–7.65%",
    note: "Wisconsin has a graduated income tax with rates from 3.54% to 7.65% across 4 brackets.",
    noTaxNote: null,
    overview: "Wisconsin uses a graduated income tax with four brackets ranging from 3.5% to 7.65% for 2024. Single filers pay 3.5% on income up to $13,810 and reach the top 7.65% rate on income above $304,170. Wisconsin provides a standard deduction that phases out at higher income levels — $12,110 for single filers with income below $16,000, phasing to zero above $110,770. The state taxes Social Security income but provides a partial subtraction for lower-income retirees. Wisconsin allows a deduction for contributions to Wisconsin 529 college savings accounts and offers a homestead credit for lower-income residents who own or rent their home."
  },
  {
    name: "Wyoming", abbr: "WY", slug: "wyoming", hasIncomeTax: false,
    topRate: 0, bottomRate: 0, brackets: "None",
    note: null,
    noTaxNote: "Wyoming has no state income tax. The state relies on mineral severance taxes and federal revenue sharing.",
    overview: "Wyoming has no state income tax on personal income, making it one of seven states to offer this benefit. Wyoming is one of the most tax-friendly states overall — it has no corporate income tax, no inheritance tax, and no estate tax, and its property taxes are among the lowest in the nation. The state funds its government primarily through mineral extraction revenues and a 4% state sales tax, with local additions bringing combined rates up to 6% in some areas. Wyoming's tax environment, combined with its favorable trust and LLC laws, makes it popular for wealth planning and business structuring. Residents still owe federal income tax on all taxable income."
  }
];

module.exports = states;
