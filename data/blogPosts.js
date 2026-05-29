// data/blogPosts.js
// All posts sourced from IRS publications and official announcements.

const blogPosts = [
  {
    slug: "how-to-calculate-your-effective-tax-rate",
    title: "How to Calculate Your Effective Tax Rate (And Why It Matters More Than Your Bracket)",
    date: "May 29, 2026",
    dateISO: "2026-05-29",
    author: "MyTaxCalcs Editorial",
    category: "Tax Basics",
    excerpt: "Most people know their tax bracket but confuse it with what they actually pay. Your effective tax rate is the real number — and it's almost always lower than your marginal rate. Here's how to calculate it.",
    metaDescription: "Learn how to calculate your effective federal income tax rate for 2026. Understand the difference between marginal and effective rates, see worked examples, and use the formula to plan smarter.",
    ogTitle: "How to Calculate Your Effective Tax Rate | MyTaxCalcs",
    ogDescription: "Your tax bracket and your effective rate are not the same thing. Learn how to calculate your real tax rate and why it's the number that actually matters for financial planning.",
    content: `
<p>Ask most people what tax rate they pay and they'll tell you their bracket — "I'm in the 22% bracket." But that's not actually what they pay. Thanks to America's progressive tax system, almost no one pays their marginal rate on all of their income. The number that reflects what you truly pay is your <strong>effective tax rate</strong> — and for most people, it's meaningfully lower than their bracket.</p>

<p>Understanding the difference between these two rates, and knowing how to calculate your own, is one of the most practical things you can do for your financial planning.</p>

<h2>Marginal Rate vs. Effective Rate: The Core Difference</h2>
<p>Your <strong>marginal tax rate</strong> is the rate that applies to your last dollar of taxable income — the top bracket you fall into. If you're a single filer with $60,000 in taxable income in 2026, your marginal rate is 22%. But you don't pay 22% on all $60,000.</p>
<p>Your <strong>effective tax rate</strong> is your total federal tax liability divided by your total gross income. It accounts for the fact that the first dollars of your income are taxed at 10%, the next chunk at 12%, and only the income above the 22% threshold is taxed at 22%. The effective rate is always lower than the marginal rate for any taxpayer in a bracket above 10%.</p>

<h2>How the Progressive Bracket System Works</h2>
<p>The 2026 federal tax brackets for single filers:</p>
<table>
  <thead><tr><th>Bracket</th><th>Taxable Income Range</th><th>Tax on This Portion</th></tr></thead>
  <tbody>
    <tr><td>10%</td><td>$0 – $11,925</td><td>$1,192.50</td></tr>
    <tr><td>12%</td><td>$11,926 – $48,475</td><td>$4,386.00</td></tr>
    <tr><td>22%</td><td>$48,476 – $103,350</td><td>$12,092.50</td></tr>
    <tr><td>24%</td><td>$103,351 – $197,300</td><td>$22,548.00</td></tr>
    <tr><td>32%</td><td>$197,301 – $250,525</td><td>$17,031.00</td></tr>
    <tr><td>35%</td><td>$250,526 – $626,350</td><td>$131,509.25</td></tr>
    <tr><td>37%</td><td>Over $626,350</td><td>37% on excess</td></tr>
  </tbody>
</table>
<p>Each bracket only applies to the income <em>within</em> that range — not your entire income. Think of the brackets as filling up like buckets: you fill the 10% bucket first, then the 12% bucket, and so on.</p>

<h2>How to Calculate Your Effective Tax Rate</h2>
<p>The formula is straightforward:</p>
<p><strong>Effective Tax Rate = Total Federal Tax Owed ÷ Gross Income × 100</strong></p>
<p>Note: some people calculate it as total tax divided by <em>taxable income</em> (after deductions) rather than gross income. Both are valid — just be consistent and know which version you're using. The gross income version is more useful for understanding your overall tax burden; the taxable income version shows efficiency of your deduction strategy.</p>

<h2>Worked Example: Single Filer, $75,000 Gross Income</h2>
<table>
  <thead><tr><th>Step</th><th>Amount</th></tr></thead>
  <tbody>
    <tr><td>Gross income</td><td>$75,000</td></tr>
    <tr><td>Standard deduction (2026)</td><td>−$16,100</td></tr>
    <tr><td>Taxable income</td><td>$58,900</td></tr>
    <tr><td>Tax on first $11,925 (10%)</td><td>$1,192.50</td></tr>
    <tr><td>Tax on $11,926–$48,475 (12%)</td><td>$4,386.00</td></tr>
    <tr><td>Tax on $48,476–$58,900 (22%)</td><td>$2,293.28</td></tr>
    <tr><td><strong>Total federal tax</strong></td><td><strong>$7,871.78</strong></td></tr>
    <tr><td>Effective rate (vs. gross income)</td><td><strong>10.5%</strong></td></tr>
    <tr><td>Effective rate (vs. taxable income)</td><td><strong>13.4%</strong></td></tr>
    <tr><td>Marginal rate</td><td>22%</td></tr>
  </tbody>
</table>
<p>This filer is in the 22% bracket but pays an effective rate of only 10.5% on their gross income — less than half their marginal rate.</p>

<h2>Effective Rates Across the Income Spectrum (2026, Single Filer)</h2>
<table>
  <thead><tr><th>Gross Income</th><th>Est. Federal Tax</th><th>Marginal Rate</th><th>Effective Rate</th></tr></thead>
  <tbody>
    <tr><td>$30,000</td><td>~$1,073</td><td>12%</td><td>3.6%</td></tr>
    <tr><td>$60,000</td><td>~$6,308</td><td>22%</td><td>10.5%</td></tr>
    <tr><td>$100,000</td><td>~$14,843</td><td>22%</td><td>14.8%</td></tr>
    <tr><td>$150,000</td><td>~$27,043</td><td>24%</td><td>18.0%</td></tr>
    <tr><td>$250,000</td><td>~$58,303</td><td>32%</td><td>23.3%</td></tr>
    <tr><td>$500,000</td><td>~$150,553</td><td>35%</td><td>30.1%</td></tr>
  </tbody>
</table>
<p>Even at $500,000 in income, a single filer's effective federal rate is 30% — not 35% or 37%. The progressive structure ensures that lower income is always taxed at lower rates first.</p>

<h2>Why Your Effective Rate Is the Number That Matters</h2>
<p>Your marginal rate tells you the cost of earning one more dollar — useful for decisions like whether to take on extra freelance work, convert a traditional IRA to a Roth, or exercise stock options in a given year. Your effective rate tells you what share of your total income actually goes to federal taxes — useful for budgeting, comparing your tax burden year over year, and evaluating whether deductions and credits are making a real difference.</p>
<ul>
  <li><strong>Marginal rate:</strong> "If I earn $10,000 more, what portion goes to taxes?"</li>
  <li><strong>Effective rate:</strong> "Of everything I earned this year, what share went to the federal government?"</li>
</ul>

<h2>How Deductions Lower Your Effective Rate</h2>
<p>Every dollar of deduction reduces your taxable income, which reduces your tax liability, which lowers your effective rate. At the 22% bracket, a $1,000 deduction saves $220 in tax. The 2026 standard deduction of $16,100 for single filers saves roughly $1,610–$2,200 in federal tax compared to having no deduction. This is why maximizing deductions — retirement contributions, HSA contributions, mortgage interest — is one of the most direct ways to lower your effective rate.</p>

<h2>State Taxes and Your Combined Effective Rate</h2>
<p>Federal effective rate is only part of the picture. Most states also impose an income tax. A California resident earning $75,000 faces a California effective rate of roughly 5–6% on top of their federal rate, bringing their combined effective rate to around 16–17%. Use our <a href="/states">state income tax calculators</a> to estimate your state burden alongside federal tax.</p>

<p>Use our <a href="/income-tax-calculator">federal income tax calculator</a> to get your estimated total federal tax — the calculator shows both your effective and marginal rate in the results.</p>
    `,
    relatedLinks: [
      { href: "/income-tax-calculator", label: "Federal Income Tax Calculator" },
      { href: "/tax-brackets-2026", label: "2026 Tax Brackets" },
      { href: "/marginal-vs-effective-tax-rate", label: "Marginal vs. Effective Rate Guide" },
    ],
  },

  {
    slug: "w4-withholding-guide-2026",
    title: "W-4 Withholding Guide 2026: How to Fill It Out and Avoid a Surprise Tax Bill",
    date: "May 29, 2026",
    dateISO: "2026-05-29",
    author: "MyTaxCalcs Editorial",
    category: "Filing Tips",
    excerpt: "Your W-4 determines how much federal tax your employer withholds from every paycheck. Get it wrong and you'll either owe a lump sum at filing or give the IRS an interest-free loan all year. Here's how to get it right in 2026.",
    metaDescription: "How to fill out your W-4 correctly in 2026. Learn what each step means, when to update your W-4, and how to use the IRS withholding estimator to avoid owing money or over-withholding.",
    ogTitle: "W-4 Withholding Guide 2026: How to Fill It Out the Right Way",
    ogDescription: "Your W-4 controls how much tax your employer withholds from each paycheck. Learn how to complete it correctly in 2026 to avoid a tax bill or an unnecessary refund.",
    content: `
<p>Every time you start a new job — or experience a major life change — your employer hands you a Form W-4, Employee's Withholding Certificate. This single form controls how much federal income tax is withheld from each paycheck. Fill it out correctly and your withholding roughly matches your actual tax liability. Get it wrong and you'll either owe a potentially large balance at filing, or overpay all year and wait for a refund you could have kept in your pocket.</p>

<h2>Why the W-4 Matters</h2>
<p>Your employer doesn't know your full financial picture — your spouse's income, your side gig, your deductions, your credits. The W-4 is how you communicate that information so your employer can estimate the right amount to withhold. If you provide inaccurate instructions, the responsibility for the resulting underpayment falls on you — not your employer.</p>

<h2>The Five Steps of the 2026 W-4</h2>

<h3>Step 1 — Personal Information (Required for Everyone)</h3>
<p>Enter your name, address, Social Security number, and filing status. Your filing status here should match what you'll claim on your actual tax return: Single, Married Filing Jointly, or Head of Household. This is the only step that's mandatory.</p>

<h3>Step 2 — Multiple Jobs or Spouse Works (Complete If Applicable)</h3>
<p>If you have more than one job, or if you're married and your spouse also works, this step is critical. Without it, each employer withholds as if your job is your only income — which almost always results in too little withholding overall. You have three options: use the IRS Tax Withholding Estimator (most accurate), use the Multiple Jobs Worksheet on page 3 of the W-4 instructions, or check the box in Step 2(c) if there are exactly two jobs at similar pay rates.</p>

<h3>Step 3 — Claim Dependents (Complete If Applicable)</h3>
<p>If your total income is $400,000 or less (married filing jointly) or $200,000 or less (all other filers), you can claim credits here to reduce your withholding. For each qualifying child under 17, enter $2,200 (the 2026 Child Tax Credit amount). For other dependents, enter $500 per person.</p>

<h3>Step 4 — Other Adjustments (Optional)</h3>
<ul>
  <li><strong>4(a) — Other income:</strong> If you have income not subject to withholding (freelance, investments, rentals), enter the expected annual amount. Your employer will withhold extra to cover it.</li>
  <li><strong>4(b) — Deductions:</strong> If you plan to itemize, or have significant above-the-line deductions, use the Deductions Worksheet on page 3 to reduce withholding. New OBBBA deductions (tips, overtime, senior deduction) belong here too.</li>
  <li><strong>4(c) — Extra withholding:</strong> A flat additional dollar amount per paycheck. Useful if you'd rather ensure you don't owe than optimize monthly cash flow.</li>
</ul>

<h3>Step 5 — Signature (Required)</h3>
<p>Sign and date the form. An unsigned W-4 is invalid and your employer will treat you as Single with no adjustments — usually more withholding than necessary.</p>

<h2>When Should You Update Your W-4?</h2>
<table>
  <thead><tr><th>Life Event</th><th>Effect on Withholding Needed</th></tr></thead>
  <tbody>
    <tr><td>New job or significant raise</td><td>Review for accuracy</td></tr>
    <tr><td>Marriage</td><td>May need adjustment — combined income affects brackets</td></tr>
    <tr><td>Divorce or separation</td><td>Update filing status immediately</td></tr>
    <tr><td>New child or dependent</td><td>Add Child Tax Credit in Step 3 to reduce withholding</td></tr>
    <tr><td>Child turns 17</td><td>Remove the $2,200 credit from Step 3</td></tr>
    <tr><td>Started a side business</td><td>Add expected self-employment income in Step 4(a)</td></tr>
    <tr><td>Bought a home</td><td>May itemize — enter deduction estimate in Step 4(b)</td></tr>
    <tr><td>Large refund or tax bill last year</td><td>Strong signal to rebalance withholding</td></tr>
    <tr><td>Eligible for new OBBBA deductions</td><td>Enter tips/overtime/senior deduction in Step 4(b)</td></tr>
  </tbody>
</table>

<h2>Common W-4 Mistakes</h2>
<ul>
  <li><strong>Claiming "Exempt" when you're not:</strong> You can only claim exempt if you had zero tax liability last year AND expect zero this year. Improperly claiming exempt triggers a penalty.</li>
  <li><strong>Skipping Step 2 with two jobs:</strong> The most common cause of owing at filing for dual-income households.</li>
  <li><strong>Never updating it:</strong> A W-4 from five years ago may be significantly wrong for your current situation.</li>
  <li><strong>Forgetting about side income:</strong> Gig work, freelance, or investment income not covered by withholding needs to either be estimated in Step 4(a) or covered by quarterly estimated payments.</li>
</ul>

<h2>How to Check If Your Withholding Is on Track</h2>
<p>The most accurate tool is the <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener">IRS Tax Withholding Estimator</a> at IRS.gov. It tells you whether your current withholding will result in a refund, a balance owed, or a wash — and suggests the specific W-4 changes to reach your preferred outcome.</p>
<p>You can also use our <a href="/tax-refund-calculator">Tax Refund Calculator</a> for a quick estimate, or our <a href="/income-tax-calculator">Income Tax Calculator</a> to see your full estimated federal tax liability and compare it to what's being withheld from your paychecks.</p>
    `,
    relatedLinks: [
      { href: "/tax-refund-calculator", label: "Tax Refund Calculator" },
      { href: "/income-tax-calculator", label: "Income Tax Calculator" },
      { href: "/payroll-tax-calculator", label: "Payroll Tax Calculator" },
    ],
  },

  {
    slug: "short-term-vs-long-term-capital-gains-2026",
    title: "Short-Term vs. Long-Term Capital Gains: What's the Difference and How Are They Taxed in 2026?",
    date: "May 29, 2026",
    dateISO: "2026-05-29",
    author: "MyTaxCalcs Editorial",
    category: "Investing & Taxes",
    excerpt: "Selling an investment you've held for less than a year triggers short-term capital gains tax — taxed like ordinary income. Hold it for more than a year and you get the much lower long-term rates. Here's how both work in 2026.",
    metaDescription: "Short-term capital gains are taxed as ordinary income (10%–37%). Long-term capital gains get preferential rates of 0%, 15%, or 20% in 2026. Learn the rules, thresholds, and planning strategies.",
    ogTitle: "Short-Term vs. Long-Term Capital Gains Tax 2026 — Full Breakdown",
    ogDescription: "How short-term and long-term capital gains are taxed differently in 2026. See the income thresholds for 0%, 15%, and 20% rates and learn strategies to legally pay less.",
    content: `
<p>When you sell an investment for more than you paid, the profit is a capital gain — and the IRS wants a share of it. But how much you owe depends heavily on one factor: <strong>how long you held the investment before selling</strong>. The tax code draws a sharp line at one year, and crossing it can dramatically reduce the taxes you owe on the same dollar amount of profit.</p>

<h2>The One-Year Rule</h2>
<ul>
  <li><strong>Held 12 months or less:</strong> Short-term capital gain — taxed as ordinary income at your regular bracket rate</li>
  <li><strong>Held more than 12 months:</strong> Long-term capital gain — taxed at preferential lower rates (0%, 15%, or 20%)</li>
</ul>
<p>The one-year threshold is a hard line. Selling one day before the anniversary date costs you the preferential long-term rate. For large gains, that one day can be worth thousands of dollars in additional taxes.</p>

<h2>Short-Term Capital Gains Rates (2026)</h2>
<p>Short-term gains are added to your ordinary income and taxed at your regular federal rate — the same as wages:</p>
<table>
  <thead><tr><th>Taxable Income (Single)</th><th>Short-Term Rate</th></tr></thead>
  <tbody>
    <tr><td>Up to $11,925</td><td>10%</td></tr>
    <tr><td>$11,926 – $48,475</td><td>12%</td></tr>
    <tr><td>$48,476 – $103,350</td><td>22%</td></tr>
    <tr><td>$103,351 – $197,300</td><td>24%</td></tr>
    <tr><td>$197,301 – $250,525</td><td>32%</td></tr>
    <tr><td>$250,526 – $626,350</td><td>35%</td></tr>
    <tr><td>Over $626,350</td><td>37%</td></tr>
  </tbody>
</table>

<h2>Long-Term Capital Gains Rates (2026)</h2>
<table>
  <thead><tr><th>Rate</th><th>Single (Taxable Income)</th><th>Married Filing Jointly</th><th>Head of Household</th></tr></thead>
  <tbody>
    <tr><td><strong>0%</strong></td><td>Up to $48,350</td><td>Up to $96,700</td><td>Up to $64,750</td></tr>
    <tr><td><strong>15%</strong></td><td>$48,351 – $533,400</td><td>$96,701 – $600,050</td><td>$64,751 – $566,700</td></tr>
    <tr><td><strong>20%</strong></td><td>Over $533,400</td><td>Over $600,050</td><td>Over $566,700</td></tr>
  </tbody>
</table>
<p>These thresholds apply to <em>taxable income including the gain</em>. A married couple with $80,000 in wages and the $32,200 standard deduction has $47,800 in taxable income from wages. They can realize up to $48,900 more in long-term gains ($96,700 − $47,800) and pay <em>zero</em> federal capital gains tax.</p>

<h2>Side-by-Side Example: The Cost of Selling Early</h2>
<p>You bought $50,000 of stock now worth $80,000 — a $30,000 gain. You're a single filer with $70,000 in other taxable income (22% bracket).</p>
<table>
  <thead><tr><th></th><th>Sell After 11 Months (Short-Term)</th><th>Sell After 13 Months (Long-Term)</th></tr></thead>
  <tbody>
    <tr><td>Gain amount</td><td>$30,000</td><td>$30,000</td></tr>
    <tr><td>Tax rate</td><td>22%</td><td>15%</td></tr>
    <tr><td>Federal tax on gain</td><td>$6,600</td><td>$4,500</td></tr>
    <tr><td><strong>Tax saved by waiting 2 months</strong></td><td>—</td><td><strong>$2,100</strong></td></tr>
  </tbody>
</table>

<h2>Net Investment Income Tax (NIIT)</h2>
<p>High-income investors face an additional 3.8% NIIT on top of capital gains rates. It applies if MAGI exceeds $200,000 (single) or $250,000 (married jointly). These thresholds are not inflation-adjusted — more taxpayers get caught each year. At the top, high earners effectively face a <strong>23.8% federal rate</strong> on long-term gains.</p>

<h2>Capital Loss Harvesting</h2>
<p>Capital losses offset capital gains dollar-for-dollar. If losses exceed gains, you can deduct up to <strong>$3,000</strong> against ordinary income per year, with remaining losses carrying forward indefinitely. Tax-loss harvesting — selling underperformers to generate losses that offset gains — is a legitimate strategy. Watch the <strong>wash-sale rule</strong>: you can't repurchase a substantially identical investment within 30 days of the sale.</p>

<h2>Special Cases</h2>
<p><strong>Cryptocurrency:</strong> Treated as property. Every sale, trade, or use triggers a gain or loss. Short vs. long-term rules apply identically to crypto as to stocks.</p>
<p><strong>Primary home sales:</strong> Exclude up to $250,000 of gain (single) or $500,000 (married) if you've owned and lived in the home for at least two of the past five years.</p>
<p><strong>Inherited assets:</strong> Receive a stepped-up basis to fair market value at the date of death — effectively eliminating all gain accrued during the original owner's lifetime.</p>

<h2>Planning Strategies</h2>
<ul>
  <li>Hold investments for more than one year whenever feasible</li>
  <li>Harvest losses to offset gains in taxable accounts</li>
  <li>Use IRAs and 401(k)s for high-growth investments — gains grow tax-deferred or tax-free</li>
  <li>Time large sales in lower-income years when the 0% rate may apply</li>
  <li>Donate appreciated assets to charity — avoid gains tax entirely and deduct the full fair market value</li>
</ul>

<p>Use our <a href="/capital-gains-tax-calculator">Capital Gains Tax Calculator</a> to estimate what you'll owe. For your full federal tax picture, try our <a href="/income-tax-calculator">Income Tax Calculator</a>.</p>
    `,
    relatedLinks: [
      { href: "/capital-gains-tax-calculator", label: "Capital Gains Tax Calculator" },
      { href: "/income-tax-calculator", label: "Income Tax Calculator" },
      { href: "/blog/capital-gains-tax-guide-2026", label: "Capital Gains Tax Guide 2026" },
    ],
  },

  {
    slug: "self-employment-tax-guide-2026",
    title: "Self-Employment Tax 2026: What You Owe, How to Calculate It, and How to Reduce It",
    date: "May 29, 2026",
    dateISO: "2026-05-29",
    author: "MyTaxCalcs Editorial",
    category: "Self-Employment",
    excerpt: "Self-employed workers pay a 15.3% self-employment tax on top of income tax — but there are legitimate ways to reduce it. Here's how SE tax works in 2026, how to calculate what you owe, and the deductions that lower your bill.",
    metaDescription: "Self-employment tax is 15.3% on net self-employment income in 2026, up to the $184,500 Social Security wage base. Learn how to calculate it, deduct half of it, and use business expenses to reduce what you owe.",
    ogTitle: "Self-Employment Tax 2026: How to Calculate It and Reduce It",
    ogDescription: "The 15.3% self-employment tax covers Social Security and Medicare for freelancers and sole proprietors. Learn how it's calculated in 2026 and the legal ways to lower your bill.",
    content: `
<p>When you work as a freelancer, independent contractor, sole proprietor, or gig worker, you don't have an employer splitting payroll taxes with you. Instead, you pay <strong>self-employment (SE) tax</strong> — covering both the employee and employer portions of Social Security and Medicare. In 2026, that rate is <strong>15.3%</strong> on your net self-employment income, on top of ordinary federal income tax.</p>

<h2>2026 Self-Employment Tax Rates and Wage Base</h2>
<table>
  <thead><tr><th>Component</th><th>Rate</th><th>Applies To</th></tr></thead>
  <tbody>
    <tr><td>Social Security</td><td>12.4%</td><td>Net SE income up to $184,500</td></tr>
    <tr><td>Medicare</td><td>2.9%</td><td>All net SE income (no cap)</td></tr>
    <tr><td>Additional Medicare</td><td>0.9%</td><td>SE income above $200,000 single / $250,000 married</td></tr>
    <tr><td><strong>Total (under wage base)</strong></td><td><strong>15.3%</strong></td><td>Net SE income up to $184,500</td></tr>
    <tr><td><strong>Total (over wage base)</strong></td><td><strong>2.9%</strong></td><td>Net SE income above $184,500</td></tr>
  </tbody>
</table>

<h2>How to Calculate Your Self-Employment Tax</h2>
<p>The IRS applies SE tax to <strong>92.35% of your net self-employment income</strong> — not the full 100%. This adjustment accounts for the fact that employees don't pay FICA on the employer's share. Step by step:</p>
<ol>
  <li>Net SE income = Gross SE income − business deductions</li>
  <li>SE tax base = Net SE income × 92.35%</li>
  <li>SE tax = SE tax base × 15.3% (on the portion up to $184,500) + 2.9% on any excess</li>
</ol>

<h2>Worked Example: Freelancer Earning $80,000</h2>
<table>
  <thead><tr><th>Step</th><th>Amount</th></tr></thead>
  <tbody>
    <tr><td>Gross freelance income</td><td>$80,000</td></tr>
    <tr><td>Business expenses</td><td>−$12,000</td></tr>
    <tr><td>Net self-employment income</td><td>$68,000</td></tr>
    <tr><td>× 92.35%</td><td>$62,798</td></tr>
    <tr><td>SE tax (15.3%)</td><td>$9,608</td></tr>
    <tr><td>Deductible half of SE tax (reduces income tax)</td><td>−$4,804</td></tr>
  </tbody>
</table>

<h2>The SE Tax Deduction: You Get Half Back</h2>
<p>The IRS allows self-employed individuals to deduct <strong>half of their SE tax</strong> from gross income when calculating income tax. This is an above-the-line deduction — it reduces your AGI without needing to itemize. In the example above, the $4,804 deduction reduces the income subject to income tax, partially offsetting the SE tax burden.</p>

<h2>Business Deductions That Reduce SE Tax</h2>
<p>Business deductions reduce your <em>net self-employment income</em> — which lowers both income tax AND SE tax. Every dollar of legitimate business expense saves you income tax at your marginal rate <em>plus</em> SE tax at 15.3%. Common deductible expenses include:</p>
<ul>
  <li>Business mileage (72.5¢/mile in 2026) or actual vehicle expenses</li>
  <li>Home office deduction (must be used exclusively and regularly for business)</li>
  <li>Equipment, software, and business subscriptions</li>
  <li>Health insurance premiums (self-employed health insurance deduction)</li>
  <li>Half of self-employment tax paid</li>
  <li>Retirement contributions to SEP-IRA or Solo 401(k)</li>
  <li>Professional development and education</li>
  <li>Business phone and internet (business-use portion only)</li>
</ul>

<h2>Retirement Accounts: The Most Powerful Tool</h2>
<p>A SEP-IRA allows contributions of up to 25% of net SE income, up to $69,000 for 2026. A Solo 401(k) allows an employee contribution of $24,500 plus up to 25% of net SE income as a profit-sharing contribution. These contributions reduce your income tax significantly — though they don't reduce SE tax itself (SE tax is calculated before retirement deductions).</p>

<h2>Quarterly Estimated Payments</h2>
<p>Because no employer withholds from your pay, you're expected to pay SE tax and income tax quarterly. The 2026 due dates are April 15, June 16, September 15, and January 15, 2027. A practical rule of thumb: set aside <strong>28–30% of every payment you receive</strong> for taxes. This covers SE tax (~15%) plus income tax (~13–15% effective rate) for most self-employed workers in the 22% bracket.</p>

<p>Use our <a href="/self-employment-tax-calculator">Self-Employment Tax Calculator</a> to estimate your exact SE tax for 2026. For your full tax picture including both SE tax and income tax, try our <a href="/income-tax-calculator">Income Tax Calculator</a>.</p>
    `,
    relatedLinks: [
      { href: "/self-employment-tax-calculator", label: "Self-Employment Tax Calculator" },
      { href: "/income-tax-calculator", label: "Income Tax Calculator" },
      { href: "/blog/self-employed-quarterly-taxes-guide-2026", label: "Quarterly Estimated Tax Guide" },
    ],
  },

  {
    slug: "irs-dirty-dozen-tax-scams-2026",
    title: "IRS Dirty Dozen 2026: 12 Tax Scams Every American Should Know About",
    date: "May 15, 2026",
    dateISO: "2026-05-15",
    author: "MyTaxCalcs Editorial",
    category: "IRS Announcements",
    excerpt: "The IRS released its annual Dirty Dozen list of the most dangerous tax scams for 2026 — and AI-powered fraud is making them harder to spot than ever. Here's what to watch for.",
    metaDescription: "The IRS Dirty Dozen 2026 list warns taxpayers about 12 dangerous tax scams, including AI-powered phone fraud, phishing emails, and fake charities. Learn how to protect yourself.",
    ogTitle: "IRS Dirty Dozen 2026: 12 Tax Scams to Watch Out For",
    ogDescription: "AI-enabled voice scams, fake IRS emails, and phony charities top the IRS's annual list of most dangerous tax fraud schemes for 2026. Here's how to stay safe.",
    content: `
<p>Each year, the Internal Revenue Service publishes its "Dirty Dozen" — a list of the twelve most dangerous tax scams targeting American taxpayers, businesses, and tax professionals. The 2026 edition was released on March 5, 2026, coinciding with National Slam the Scam Day, and it carries a sobering new theme: artificial intelligence is making scams harder to detect than ever before.</p>

<p>"Thieves continuously adjust the pitches they use to take advantage of honest taxpayers," said IRS Chief Executive Officer Frank J. Bisignano at the announcement. "For more than two decades, the IRS has used the Dirty Dozen list to flag emerging scams that taxpayers should watch out for."</p>

<h2>What's New on the 2026 List</h2>
<p>The biggest change to this year's Dirty Dozen is the addition of <strong>abusive undistributed long-term capital gains claims</strong> — a scheme involving fraudulent or overstated claims on IRS Form 2439 (Notice to Shareholder of Undistributed Long-Term Capital Gains). Promoters pitch these as refundable credit opportunities, but the IRS has seen a sharp rise in fabricated claims that trigger audits, penalties, and refund delays.</p>

<p>The 2026 list also reflects a significant uptick in AI-driven fraud. Scammers are now using deepfake voices, voice mimicry, and AI-generated text to make their schemes feel frighteningly legitimate.</p>

<h2>The 2026 Dirty Dozen: All 12 Scams Explained</h2>

<h3>1. IRS Impersonation by Email and Text (Phishing and Smishing)</h3>
<p>Fraudsters send emails, text messages, and direct messages pretending to be the IRS. They often use alarming language — threatening legal action or promising large refunds — and include links to fake IRS websites designed to steal your Social Security number, banking details, or login credentials. The IRS logged more than 600 social media impersonators in fiscal year 2025 alone. The golden rule: the IRS initiates contact by mail, not email or text. Never click an unsolicited link claiming to be from the IRS.</p>

<h3>2. AI-Enabled IRS Impersonation by Phone</h3>
<p>This is the scam that's evolving fastest. Fraudsters now use AI-generated voices, robocalls, and spoofed caller IDs to sound like real IRS agents. They may reference your real name or partial Social Security number obtained from data breaches. The IRS does not demand immediate payment over the phone, threaten arrest, or require payment via gift cards or wire transfers. If you receive such a call, hang up.</p>

<h3>3. Fake Charities</h3>
<p>Scammers create phony nonprofit organizations — often with names similar to legitimate charities — to collect donations and personal information. They're especially active after natural disasters when public generosity is high. Before donating, verify any charity using the IRS's Tax Exempt Organization Search tool at IRS.gov.</p>

<h3>4. Misleading Tax Advice on Social Media</h3>
<p>Viral tax "tips" on TikTok, Instagram, and YouTube are frequently wrong — and sometimes deliberately fraudulent. Common false claims include advice to report fake business losses, claim credits you're not eligible for, or misuse Form 1099-NEC. Following bad social media tax advice can result in penalties, back taxes owed, and potentially criminal charges. Always verify tax strategies with a licensed CPA or the official IRS.gov website.</p>

<h3>5. "Ghost" Tax Preparers</h3>
<p>A ghost preparer is someone who prepares your tax return for a fee but refuses to sign it. By law, all paid tax preparers must include their Preparer Tax Identification Number (PTIN) and sign returns they prepare. Ghost preparers often inflate deductions, fabricate credits, or claim refunds they pocket themselves. Check that your preparer has a valid PTIN at IRS.gov before handing over any financial documents.</p>

<h3>6. Abusive Undistributed Long-Term Capital Gains Claims (New in 2026)</h3>
<p>This new addition involves fraudulent claims tied to Form 2439, which reports undistributed long-term capital gains from regulated investment companies (like mutual funds) or REITs. Promoters falsely pitch these as opportunities to claim refundable tax credits. The IRS has seen a sharp increase in overstated and completely fabricated claims. Be extremely skeptical of any promoter offering tax credits from "undistributed gains" from funds you don't recognize.</p>

<h3>7. Overstated Withholding Schemes</h3>
<p>Scammers instruct taxpayers to submit returns claiming far more withholding than they actually had — essentially making up income on fake W-2s to manufacture an inflated refund. Beyond the obvious fraud risk, this triggers IRS scrutiny, processing delays, and potential criminal prosecution. If your preparer suggests reporting income you didn't earn, walk away immediately.</p>

<h3>8. Fake Business Tax Credits</h3>
<p>Fraudulent promoters continue to market bogus business tax credits to small business owners, particularly around fuel tax credits and certain pandemic-era claims that have since expired. The IRS specifically warns about promoters claiming businesses qualify for the Employee Retention Credit (ERC) when they clearly do not. An ERC claim that was improperly filed can now be corrected through a new IRS streamlined process rather than proceeding to litigation.</p>

<h3>9. Offer in Compromise Mills</h3>
<p>Legitimate IRS Offer in Compromise programs allow qualifying taxpayers who genuinely cannot pay their full tax debt to settle for less. "OIC mills" are companies that charge large upfront fees and promise to settle anyone's tax debt for "pennies on the dollar" — regardless of the taxpayer's actual eligibility. The IRS's own pre-qualifier tool at IRS.gov is free and takes only minutes to use.</p>

<h3>10. Syndicated Conservation Easement Transactions</h3>
<p>These involve complex real estate arrangements where promoters claim inflated tax deductions for placing land under a conservation easement. The IRS has pursued these aggressively as abusive tax shelters for years. In May 2026, the IRS announced a time-limited settlement opportunity for taxpayers currently in conservation easement disputes — which itself underscores how seriously these cases are being pursued.</p>

<h3>11. High-Income Tax Evasion Schemes</h3>
<p>The IRS continues to crack down on arrangements that allow high-income taxpayers to hide wealth in offshore accounts, complex partnerships, and pass-through entities. The agency has significantly increased audit rates for high earners in recent years using improved data analytics.</p>

<h3>12. Spear Phishing Attacks Targeting Tax Professionals</h3>
<p>Unlike mass phishing emails, spear phishing is highly targeted. Fraudsters research tax preparers and their clients, then send convincingly personalized emails designed to steal client data in bulk. A single compromised tax professional can expose hundreds of clients' Social Security numbers and financial records. Tax professionals should use multi-factor authentication on all accounts and never send client data via standard email.</p>

<h2>How the IRS Will Actually Contact You</h2>
<p>Knowing how the IRS really operates is the best defense against impersonation scams. The IRS will:</p>
<ul>
  <li>Send written notice by U.S. mail first, before any phone contact</li>
  <li>Never demand immediate payment without giving you time to question or appeal</li>
  <li>Never require payment by gift card, wire transfer, or cryptocurrency</li>
  <li>Never threaten to send police or immigration agents for non-payment</li>
  <li>Never ask for credit or debit card numbers over the phone</li>
</ul>

<h2>What to Do If You've Been Targeted</h2>
<p>The IRS launched a new centralized fraud-reporting web page in 2026 that allows taxpayers to confidentially report suspected tax fraud, scams, or evasion. If you receive a suspicious IRS impersonation call, you can also report it to the Treasury Inspector General for Tax Administration (TIGTA) at 1-800-366-4484.</p>

<p>Staying informed is your best protection. Bookmark IRS.gov and check it directly whenever you receive any unexpected tax-related communication — don't follow links from emails or texts.</p>
    `,
    relatedLinks: [
      { href: "/income-tax-calculator", label: "Federal Income Tax Calculator" },
      { href: "/capital-gains-tax-calculator", label: "Capital Gains Tax Calculator" },
      { href: "/blog", label: "More Tax News & Guides" },
    ],
  },

  {
    slug: "2026-tax-brackets-standard-deduction-changes",
    title: "2026 Tax Brackets and Standard Deduction: What Changed and What It Means for You",
    date: "May 10, 2026",
    dateISO: "2026-05-10",
    author: "MyTaxCalcs Editorial",
    category: "Tax Law Changes",
    excerpt: "The IRS announced 2026 inflation adjustments across more than 60 tax provisions. Here's a plain-English breakdown of the new tax brackets, higher standard deductions, and what these changes mean for your wallet.",
    metaDescription: "IRS 2026 tax brackets and standard deduction amounts are now official. See the new income thresholds, how the One Big Beautiful Bill changed the rules, and how to use the updates in your tax planning.",
    ogTitle: "2026 Federal Tax Brackets and Standard Deduction Amounts — Full Breakdown",
    ogDescription: "The IRS has released 2026 inflation adjustments for tax brackets, standard deductions, retirement limits, and more. Here's what every taxpayer needs to know.",
    content: `
<p>Every fall, the IRS adjusts its tax brackets, standard deductions, and dozens of other thresholds to account for inflation. For 2026, those adjustments average around 2.7% — and they're layered on top of significant permanent changes made by the <strong>One Big Beautiful Bill Act (OBBBA)</strong>, signed into law on July 4, 2025. The result is a tax landscape that looks similar to 2025 on the surface but has important differences underneath.</p>

<p>Here's a complete, plain-English guide to what changed for the 2026 tax year (returns you'll file in early 2027).</p>

<h2>The 2026 Federal Tax Brackets</h2>
<p>The seven federal income tax rates — 10%, 12%, 22%, 24%, 32%, 35%, and 37% — remain unchanged. What shifted are the income ranges that fall into each bracket. The OBBBA made these rates permanent, ending years of uncertainty about whether the lower rates from the 2017 Tax Cuts and Jobs Act would expire.</p>

<p>For <strong>single filers</strong>, the 2026 brackets are:</p>
<ul>
  <li><strong>10%:</strong> $0 – $11,925</li>
  <li><strong>12%:</strong> $11,926 – $48,475</li>
  <li><strong>22%:</strong> $48,476 – $103,350</li>
  <li><strong>24%:</strong> $103,351 – $197,300</li>
  <li><strong>32%:</strong> $197,301 – $250,525</li>
  <li><strong>35%:</strong> $250,526 – $626,350</li>
  <li><strong>37%:</strong> Over $626,350</li>
</ul>

<p>For <strong>married filing jointly</strong>, the thresholds are roughly double the single-filer amounts, with the 37% bracket beginning above $751,600.</p>

<p>The modest 2–4% increase in bracket thresholds means your income can rise slightly without pushing you into a higher rate — a protection against what economists call "bracket creep."</p>

<h2>The 2026 Standard Deduction</h2>
<p>The standard deduction — the amount you can subtract from your income before calculating taxes without needing to itemize — increased for all filing statuses:</p>
<ul>
  <li><strong>Single filers:</strong> $16,100 (up from $15,750 in 2025)</li>
  <li><strong>Married filing jointly:</strong> $32,200 (up from $31,500 in 2025)</li>
  <li><strong>Head of household:</strong> $24,150 (up from $23,625 in 2025)</li>
</ul>

<h2>New: Extra Standard Deduction for Seniors Over 65</h2>
<p>Taxpayers age 65 and older can claim an additional standard deduction on top of the base amount:</p>
<ul>
  <li><strong>Single filers 65+:</strong> $2,050 extra</li>
  <li><strong>Married filing jointly 65+:</strong> $1,650 extra per qualifying spouse</li>
</ul>

<h2>Earned Income Tax Credit (EITC) — Higher Maximums</h2>
<p>The maximum EITC for 2026 rose to <strong>$8,231</strong> for families with three or more qualifying children, up from $8,046 in 2025. Other maximum amounts: $7,316 (two children), $4,427 (one child), and $664 (no children). This credit is one of the most powerful tax benefits for working families — and many eligible taxpayers miss it by not checking their eligibility each year.</p>

<h2>Retirement Account Contribution Limits for 2026</h2>
<p>If you're saving for retirement, the contribution limits got a meaningful boost:</p>
<ul>
  <li><strong>401(k), 403(b), and 457 plans:</strong> $24,500 (up from $23,500 in 2025)</li>
  <li><strong>Traditional and Roth IRA:</strong> $7,500</li>
  <li><strong>IRA catch-up contribution (age 50+):</strong> $1,100</li>
  <li><strong>HSA (individual):</strong> $4,400</li>
  <li><strong>HSA (family):</strong> $8,750</li>
  <li><strong>FSA:</strong> $3,400 (with $680 carryover maximum)</li>
</ul>

<p>Contributing the maximum to a 401(k) reduces your taxable income by $24,500 — at the 22% bracket, that's a direct tax savings of $5,390.</p>

<h2>Estate and Gift Tax Changes</h2>
<p>The federal estate tax exemption jumped to <strong>$15 million per person</strong> for 2026 (up from $13.99 million in 2025), or $30 million for married couples. The annual gift tax exclusion remains at $19,000 per recipient.</p>

<h2>Alternative Minimum Tax (AMT)</h2>
<p>The AMT exemption for 2026 is $90,100 for single filers and $140,200 for married couples filing jointly. Phase-outs begin at $500,000 for single filers and $1,000,000 for married couples. These higher exemptions reduce AMT exposure for most taxpayers who were previously caught by it.</p>

<h2>Child Tax Credit</h2>
<p>The maximum Child Tax Credit for 2026 is <strong>$2,200 per qualifying child</strong>, with a refundable portion of up to $1,700.</p>

<h2>What You Should Do Now</h2>
<p>These changes take effect for the 2026 tax year — meaning they apply to income earned between January 1 and December 31, 2026, reported on returns filed in early 2027. There are still practical steps to take now:</p>
<ol>
  <li><strong>Review your W-4 withholding</strong> if you had a major life change in 2025 or 2026 (new job, marriage, child, large bonus). Updated bracket thresholds and new OBBBA deductions mean your withholding from last year may no longer match what you'll owe.</li>
  <li><strong>Max out retirement contributions.</strong> Higher 401(k) and IRA limits give you more room to reduce taxable income. At the 22% bracket, the full $24,500 401(k) contribution saves $5,390 in federal taxes.</li>
  <li><strong>Compare standard deduction vs. itemizing.</strong> With the SALT deduction cap raised to $40,000 for 2026, more taxpayers in high-tax states may find itemizing worthwhile for the first time since 2018. Run the math before assuming the standard deduction still wins.</li>
  <li><strong>Check your EITC eligibility.</strong> Income thresholds for the credit shift each year, so even if you didn't qualify last year, you might in 2026. The maximum of $8,231 for families with three or more children is the highest it's ever been.</li>
  <li><strong>Claim new Schedule 1-A deductions if you qualify.</strong> Workers who received tips, overtime pay, or car loan interest on a new vehicle purchased after December 31, 2024 should ensure their tax software or preparer is applying the new deductions.</li>
</ol>

<h2>How the 2026 Bracket Changes Affect Real Taxpayers</h2>
<table>
  <thead><tr><th>Filing Status / Income</th><th>2025 Estimated Tax</th><th>2026 Estimated Tax</th><th>Change</th></tr></thead>
  <tbody>
    <tr><td>Single / $50,000</td><td>~$5,374</td><td>~$4,927</td><td>−$447</td></tr>
    <tr><td>Single / $100,000</td><td>~$14,843</td><td>~$13,962</td><td>−$881</td></tr>
    <tr><td>Married / $100,000</td><td>~$8,347</td><td>~$6,654</td><td>−$1,693</td></tr>
    <tr><td>Married / $150,000</td><td>~$17,847</td><td>~$15,254</td><td>−$2,593</td></tr>
  </tbody>
</table>
<p>The reductions above reflect both the higher bracket thresholds and the larger standard deduction — not OBBBA-specific deductions, which would further reduce tax for eligible workers. Use our <a href="/income-tax-calculator">Federal Income Tax Calculator</a> to estimate your specific 2026 tax bill based on the updated brackets and your personal situation.</p>
    `,
    relatedLinks: [
      { href: "/income-tax-calculator", label: "Federal Income Tax Calculator" },
      { href: "/tax-refund-calculator", label: "Tax Refund Calculator" },
      { href: "/capital-gains-tax-calculator", label: "Capital Gains Tax Calculator" },
    ],
  },

  {
    slug: "one-big-beautiful-bill-tax-changes-explained",
    title: "The One Big Beautiful Bill: Every Tax Change That Affects Your Paycheck",
    date: "May 5, 2026",
    dateISO: "2026-05-05",
    author: "MyTaxCalcs Editorial",
    category: "Tax Law Changes",
    excerpt: "Signed into law on July 4, 2025, the One Big Beautiful Bill Act made sweeping changes to the U.S. tax code — from permanent lower rates to new deductions for tips, overtime, and seniors. Here's what it means for you.",
    metaDescription: "The One Big Beautiful Bill Act (OBBBA) permanently extended Trump-era tax cuts and added new deductions for tips, overtime, seniors, and car loan interest. Learn how each provision affects your taxes.",
    ogTitle: "One Big Beautiful Bill: Complete Guide to Every Tax Change",
    ogDescription: "The One Big Beautiful Bill, signed July 4, 2025, changed the tax code for millions of Americans. No tax on tips, no tax on overtime, a $6,000 senior deduction — here's the full breakdown.",
    content: `
<p>On July 4, 2025 — America's 249th birthday — President Trump signed the <strong>One Big Beautiful Bill Act (OBBBA)</strong> into law as Public Law 119-21. The legislation is one of the most sweeping rewrites of the U.S. tax code in nearly a decade, making permanent the lower rates from the 2017 Tax Cuts and Jobs Act that were set to expire, while adding several brand-new deductions that could reduce tax bills for millions of workers, seniors, and families.</p>

<p>Here's a provision-by-provision breakdown of everything that changed and what it means for ordinary taxpayers.</p>

<h2>Permanent: Lower Tax Rates and Larger Standard Deduction</h2>
<p>Before the OBBBA, the seven tax rates introduced by the 2017 TCJA — 10%, 12%, 22%, 24%, 32%, 35%, and 37% — were scheduled to expire after 2025, reverting to higher pre-2017 levels. The OBBBA made all seven rates <strong>permanent</strong>. Without this legislation, a single filer earning $60,000 would have seen their marginal rate jump from 22% to 25% in 2026.</p>

<p>The larger standard deduction is also now permanent, with annual inflation adjustments. For 2025, the OBBBA additionally boosted the standard deduction mid-year: single filers can now claim $15,750 (up from $15,000 under prior law), and married couples can claim $31,500 (up from $30,000).</p>

<h2>New: No Tax on Tips (2025–2028)</h2>
<p>One of the most talked-about provisions of the OBBBA is the deduction for qualified tips. Starting with tax year 2025 — meaning you can claim it on the return you filed this spring — workers in eligible tip-receiving occupations can <strong>deduct up to $25,000 in tips per year</strong> from their federal taxable income.</p>

<p>Eligible occupations are those the IRS determined customarily and regularly received tips on or before December 31, 2024. The published list includes wait staff, bartenders, salon workers, hotel staff, delivery drivers, personal trainers, and many gig economy workers.</p>

<p>Important details to know:</p>
<ul>
  <li>The deduction is available whether you take the standard deduction or itemize</li>
  <li>Tips must be reported on Form W-2, 1099-NEC, 1099-MISC, 1099-K, or Form 4137</li>
  <li>You must have a Social Security number to qualify</li>
  <li>The deduction phases out for earners with MAGI above $150,000 ($300,000 for married filing jointly)</li>
  <li>A new Schedule 1-A is used to claim this and the other new deductions</li>
</ul>

<p>For a server who earns $20,000 in tips annually and is in the 22% tax bracket, this deduction could save approximately $4,400 in federal income taxes. Social Security and Medicare payroll taxes still apply to tip income.</p>

<h2>New: No Tax on Overtime (2025–2028)</h2>
<p>Workers who earn overtime pay — the extra half-pay required under the Fair Labor Standards Act for hours worked over 40 per week — can now deduct the <strong>"half" portion of time-and-a-half pay</strong>, up to $12,500 per year ($25,000 for married couples filing jointly).</p>

<p>For example, if your regular rate is $25/hour, your overtime rate is $37.50/hour. The deductible "half" portion is $12.50 per hour of overtime worked. For a worker who puts in significant overtime, this could add up to several thousand dollars of shielded income per year.</p>

<p>The overtime deduction phases out for earners with MAGI above $150,000 ($300,000 for married filing jointly) and is also claimable on the new Schedule 1-A.</p>

<h2>New: $6,000 Senior Deduction (2025–2028)</h2>
<p>Americans age 65 and older who meet income limits can claim an <strong>additional $6,000 deduction</strong> — on top of the regular standard deduction and the existing extra senior deduction that already existed. For a married couple where both spouses are 65 or older, that's $12,000 in additional deductions.</p>

<p>The senior deduction phases out for individuals with MAGI above $75,000 ($150,000 for married filing jointly). It's available regardless of whether you itemize or take the standard deduction, and it applies to tax years 2025 through 2028.</p>

<h2>New: Car Loan Interest Deduction (2025–2028)</h2>
<p>Buyers of new vehicles for personal use can now deduct up to <strong>$10,000 per year in car loan interest</strong> from their federal taxable income. Key qualifications:</p>
<ul>
  <li>The vehicle must be new (original use starts with the taxpayer — used vehicles don't qualify)</li>
  <li>The loan must have originated after December 31, 2024</li>
  <li>The vehicle must be for personal, not business use</li>
  <li>Lease payments do not qualify</li>
  <li>The deduction phases out for MAGI above $100,000 ($200,000 for married filing jointly)</li>
</ul>

<h2>SALT Deduction Cap Raised to $40,000</h2>
<p>The State and Local Tax (SALT) deduction cap — previously $10,000 under the TCJA — has been raised significantly. For 2025 through 2029, taxpayers can deduct up to <strong>$40,000 in combined state income tax, property tax, and sales tax</strong> (for single filers and married filing jointly with income under $500,000). The cap decreases for higher incomes and returns to $10,000 permanently starting in 2030.</p>

<p>This change is particularly significant for homeowners in high-tax states like California, New York, New Jersey, and Illinois who previously felt the full bite of the $10,000 cap.</p>

<h2>New: Trump Accounts for Children (2026–2028)</h2>
<p>A new type of tax-deferred savings account for children under 18 was created by the OBBBA. The federal government is making a one-time $1,000 deposit into Trump Accounts for eligible children born between 2025 and 2028. Contribution limits are $5,000 per year (adjusted for inflation). Employers may also contribute up to $2,500 per year tax-free. Funds cannot be withdrawn until the child turns 18.</p>

<h2>Expanded Adoption Credit</h2>
<p>The maximum adoption credit for 2026 is $17,670 — up from $17,280 in 2025 — and up to $5,120 of the credit is now refundable, meaning families who adopt can receive the benefit even if they owe no federal tax.</p>

<h2>What Hasn't Changed</h2>
<p>Personal exemptions remain at $0 — eliminated by the TCJA and now permanently eliminated by the OBBBA. If you're hoping for a return of the old per-person exemption system, that door is now formally closed.</p>

<p>Use our <a href="/tax-refund-calculator">Tax Refund Calculator</a> to see how the OBBBA's new deductions might affect your 2025 refund — including the new Schedule 1-A deductions for tips, overtime, seniors, and car loan interest.</p>
    `,
    relatedLinks: [
      { href: "/tax-refund-calculator", label: "Tax Refund Calculator" },
      { href: "/income-tax-calculator", label: "Federal Income Tax Calculator" },
      { href: "/self-employment-tax-calculator", label: "Self-Employment Tax Calculator" },
    ],
  },

  {
    slug: "no-tax-on-tips-who-qualifies-how-to-claim",
    title: "No Tax on Tips: Who Qualifies, How Much You Can Save, and How to Claim It",
    date: "April 28, 2026",
    dateISO: "2026-04-28",
    author: "MyTaxCalcs Editorial",
    category: "Tax Tips",
    excerpt: "The new 'no tax on tips' deduction from the One Big Beautiful Bill lets eligible workers deduct up to $25,000 in tip income from federal taxes. Here's a detailed guide on who qualifies and how to claim it.",
    metaDescription: "The 'no tax on tips' deduction lets eligible workers deduct up to $25,000 in tips from federal income taxes starting with 2025 returns. Learn who qualifies, which occupations are included, and how to file.",
    ogTitle: "No Tax on Tips: Full Guide to the New 2025 Federal Deduction",
    ogDescription: "Workers in restaurants, salons, hotels, and other tip-earning industries can now deduct up to $25,000 in tips from federal income taxes. Here's everything you need to know.",
    content: `
<p>If you earn tips as part of your income — whether you're a server, bartender, hair stylist, hotel worker, or gig economy driver — one of the most significant tax changes in decades may directly affect your next tax return. The <strong>One Big Beautiful Bill Act</strong>, signed into law on July 4, 2025, introduced a new federal income tax deduction for qualified tip income, commonly called "No Tax on Tips."</p>

<p>Here's a comprehensive guide to understanding this deduction, whether you qualify, and how much you could save.</p>

<h2>What Is the "No Tax on Tips" Deduction?</h2>
<p>The no-tax-on-tips provision is a federal income tax <strong>deduction</strong> — not an exemption or a credit. That means it reduces your taxable income, which in turn reduces how much federal income tax you owe. It does not eliminate payroll taxes (Social Security and Medicare) on tips, which still apply as before.</p>

<p>The deduction is worth up to <strong>$25,000 per year</strong> in qualified tips. It applies from January 1, 2025, through December 31, 2028, meaning taxpayers who earned tips in 2025 could already claim it on returns filed in early 2026.</p>

<p>One important feature: you can claim this deduction whether you take the standard deduction or itemize — it lives on the new Schedule 1-A and reduces your adjusted gross income directly.</p>

<h2>Who Qualifies?</h2>
<p>To qualify for the tips deduction, you must meet all of the following:</p>
<ul>
  <li>You must have received <strong>voluntary cash or charged tips from customers</strong> (shared tips also count)</li>
  <li>Your occupation must be one that <strong>customarily and regularly received tips</strong> on or before December 31, 2024</li>
  <li>Your tips must be reported on Form W-2, Form 1099-NEC, Form 1099-MISC, Form 1099-K, or reported by you directly on Form 4137</li>
  <li>You must have a valid Social Security number</li>
</ul>

<h3>Occupations That Qualify</h3>
<p>The IRS published its official list of tip-eligible occupations. Qualifying workers generally include:</p>
<ul>
  <li>Restaurant servers, waitstaff, and busers</li>
  <li>Bartenders and barbacks</li>
  <li>Hotel staff (bellhops, valets, housekeeping)</li>
  <li>Hair stylists, barbers, and nail technicians</li>
  <li>Massage therapists</li>
  <li>Personal trainers and fitness instructors</li>
  <li>Casino dealers and gaming floor workers</li>
  <li>Taxi and rideshare drivers</li>
  <li>Food delivery workers</li>
  <li>Movers and parking attendants</li>
</ul>

<h2>Income Limits (Phase-Out)</h2>
<p>The deduction is designed primarily for lower- and middle-income tip workers. It phases out for individuals with Modified Adjusted Gross Income (MAGI) above <strong>$150,000</strong>, and for married couples filing jointly with MAGI above <strong>$300,000</strong>.</p>

<h2>How Much Could You Actually Save?</h2>
<table>
  <thead>
    <tr><th>Annual Tips Earned</th><th>Tax Bracket</th><th>Estimated Federal Tax Savings</th></tr>
  </thead>
  <tbody>
    <tr><td>$8,000</td><td>12%</td><td>$960</td></tr>
    <tr><td>$15,000</td><td>22%</td><td>$3,300</td></tr>
    <tr><td>$25,000 (maximum)</td><td>22%</td><td>$5,500</td></tr>
  </tbody>
</table>

<p>Note: These are federal income tax savings only. Payroll taxes still apply to tip income.</p>

<h2>How to Claim the Deduction</h2>
<p>The IRS created a new <strong>Schedule 1-A</strong> specifically for the new OBBBA deductions. To claim the tips deduction:</p>
<ol>
  <li>Make sure all your tips are properly reported on your W-2, 1099 form, or Form 4137</li>
  <li>Complete Schedule 1-A using the new instructions provided in the 2025 Form 1040 Instructions</li>
  <li>The deduction flows to Schedule 1 and reduces your Adjusted Gross Income</li>
  <li>Married taxpayers must file a joint return to claim this deduction</li>
</ol>

<p>Most major tax software programs — TurboTax, H&R Block, FreeTaxUSA, and others — have already updated to include Schedule 1-A for 2025 returns.</p>

<h2>What About the Future?</h2>
<p>The deduction is currently temporary, applying to tax years 2025, 2026, 2027, and 2028. Starting in 2026 and beyond, the IRS plans to work with employers to apply the tip deduction to payroll withholding — meaning eligible workers will see lower withholding on each paycheck rather than waiting to claim the benefit at filing time.</p>

<h2>Tips Still Subject to Payroll Tax</h2>
<p>An important clarification that trips up many workers: the "no tax on tips" deduction reduces your <strong>federal income tax</strong> only. Payroll taxes — Social Security (6.2%) and Medicare (1.45%) — still apply to all tip income. Tips must still be reported to your employer and included on your W-2. If customers tip in cash and you're paid as an employee, you're still required to report those tips to your employer using Form 4070 (or an equivalent) so they can withhold the correct payroll taxes.</p>

<h2>What If Your Tips Weren't Properly Reported?</h2>
<p>To claim the deduction, your tips must be documented through an official reporting channel — W-2, 1099, or Form 4137 (used to report tips not reported to an employer). If you've historically under-reported tip income, you cannot retroactively claim the deduction on unreported amounts. Going forward, accurate reporting of all tips is both legally required and now financially beneficial thanks to this deduction.</p>

<h2>Combining Tips and Overtime Deductions</h2>
<p>Workers who receive both tips and overtime pay can claim <strong>both</strong> deductions on Schedule 1-A, subject to each deduction's individual limits and phase-out thresholds. A server who earned $18,000 in tips and $8,000 in overtime could potentially deduct all $26,000 (both under their respective caps), saving roughly $5,720 in federal income taxes at the 22% bracket — without affecting their payroll tax obligations.</p>

<p>Use our <a href="/income-tax-calculator">Federal Income Tax Calculator</a> and <a href="/payroll-tax-calculator">Payroll Tax Calculator</a> to estimate how the tips deduction affects your overall tax liability and take-home pay.</p>
    `,
    relatedLinks: [
      { href: "/income-tax-calculator", label: "Federal Income Tax Calculator" },
      { href: "/payroll-tax-calculator", label: "Payroll Tax Calculator" },
      { href: "/tax-refund-calculator", label: "Tax Refund Calculator" },
    ],
  },

  {
    slug: "irs-mileage-rate-2026",
    title: "IRS Standard Mileage Rate 2026: What It Is and How to Use It",
    date: "April 20, 2026",
    dateISO: "2026-04-20",
    author: "MyTaxCalcs Editorial",
    category: "Tax Tips",
    excerpt: "The IRS raised the standard mileage rate for business driving to 72.5 cents per mile in 2026 — up 2.5 cents from 2025. Here's what changed, who can use it, and how to maximize your deduction.",
    metaDescription: "The 2026 IRS standard mileage rate is 72.5 cents per mile for business driving. Learn who qualifies, how to track miles, and how the mileage deduction compares to actual vehicle expenses.",
    ogTitle: "IRS Mileage Rate 2026: 72.5 Cents Per Mile — Here's How to Use It",
    ogDescription: "The IRS set the 2026 business mileage rate at 72.5 cents per mile. Learn who qualifies, how to claim the deduction, and whether actual expenses might save you more.",
    content: `
<p>The Internal Revenue Service announced in December 2025 that the optional standard mileage rate for business driving will increase to <strong>72.5 cents per mile</strong> for 2026 — up 2.5 cents from the 70-cent rate that applied in 2025. The change takes effect January 1, 2026.</p>
<p>For the millions of self-employed workers, small business owners, and employees who use their personal vehicles for work, this rate increase can translate into a meaningfully larger tax deduction.</p>

<h2>What Are the 2026 IRS Mileage Rates?</h2>
<table>
  <thead><tr><th>Purpose</th><th>2026 Rate</th><th>2025 Rate</th><th>Change</th></tr></thead>
  <tbody>
    <tr><td>Business driving</td><td>72.5¢ per mile</td><td>70¢ per mile</td><td>+2.5¢</td></tr>
    <tr><td>Medical / moving (active military only)</td><td>21¢ per mile</td><td>21¢ per mile</td><td>No change</td></tr>
    <tr><td>Charitable driving</td><td>14¢ per mile</td><td>14¢ per mile</td><td>No change</td></tr>
  </tbody>
</table>
<p>The charitable mileage rate is set by statute and does not adjust for inflation — it has been stuck at 14 cents per mile for decades. The medical/moving rate for active-duty military members is adjusted periodically based on variable vehicle costs.</p>

<h2>Who Can Use the Standard Mileage Rate?</h2>
<p>Not everyone is eligible to use the simplified mileage rate. The IRS has specific rules:</p>
<ul>
  <li><strong>Self-employed individuals and small business owners</strong> can use the rate for any vehicle used in their business, including cars, vans, pickups, and panel trucks.</li>
  <li><strong>W-2 employees</strong> who are not reimbursed by their employer cannot deduct business mileage on their federal return. The Tax Cuts and Jobs Act of 2017 suspended the employee business expense deduction, and the One Big Beautiful Bill Act made that suspension permanent.</li>
  <li><strong>Five or more vehicles used simultaneously</strong> in your business disqualify you from using the standard rate — you must use the actual expense method instead.</li>
  <li>You must choose the standard mileage rate in the <em>first year</em> you place a vehicle in service for business. If you use actual expenses in year one, you cannot switch to the standard rate for that vehicle later.</li>
</ul>

<h2>Standard Mileage Rate vs. Actual Expense Method</h2>
<p>The standard mileage rate is simple — multiply your business miles by 72.5 cents. The actual expense method lets you deduct the real costs of operating the vehicle: gas, oil, insurance, registration fees, repairs, tires, and depreciation (or lease payments), multiplied by your business-use percentage.</p>
<table>
  <thead><tr><th></th><th>Standard Mileage Rate</th><th>Actual Expense Method</th></tr></thead>
  <tbody>
    <tr><td>Best for</td><td>High-mileage, fuel-efficient vehicles</td><td>Expensive vehicles, high insurance/repair costs</td></tr>
    <tr><td>Record-keeping</td><td>Mileage log only</td><td>All receipts + mileage log for business %</td></tr>
    <tr><td>Flexibility</td><td>Can switch to actual in future years</td><td>Cannot switch back to standard rate</td></tr>
    <tr><td>Depreciation</td><td>Built into the rate</td><td>Separate depreciation calculation required</td></tr>
  </tbody>
</table>

<h2>How Much Is the 2026 Mileage Deduction Worth?</h2>
<table>
  <thead><tr><th>Annual Business Miles</th><th>2026 Deduction (72.5¢)</th><th>2025 Deduction (70¢)</th><th>Difference</th></tr></thead>
  <tbody>
    <tr><td>5,000 miles</td><td>$3,625</td><td>$3,500</td><td>+$125</td></tr>
    <tr><td>10,000 miles</td><td>$7,250</td><td>$7,000</td><td>+$250</td></tr>
    <tr><td>20,000 miles</td><td>$14,500</td><td>$14,000</td><td>+$500</td></tr>
    <tr><td>30,000 miles</td><td>$21,750</td><td>$21,000</td><td>+$750</td></tr>
  </tbody>
</table>
<p>For a self-employed worker in the 22% federal tax bracket who drives 15,000 business miles in 2026, the mileage deduction alone saves roughly <strong>$2,381 in federal income tax</strong> (15,000 × $0.725 × 22%) — plus reduces the net profit subject to self-employment tax.</p>

<h2>What Counts as Business Mileage?</h2>
<p>Only miles driven for genuine business purposes qualify. Trips that count:</p>
<ul>
  <li>Driving to meet clients or customers</li>
  <li>Travel between two work locations (for those with multiple jobs)</li>
  <li>Travel to a temporary work location away from your regular workplace</li>
  <li>Running business errands (office supplies, bank deposits, post office for business mail)</li>
</ul>
<p>What does <em>not</em> count:</p>
<ul>
  <li><strong>Commuting</strong> — the drive from home to your regular place of business is never deductible, no matter how far</li>
  <li>Personal errands mixed into a business trip (only the business portion counts)</li>
</ul>

<h2>Mileage Log Requirements</h2>
<p>The IRS requires "contemporaneous" records — meaning you should record mileage at or near the time of each trip, not reconstruct it from memory at year-end. A compliant mileage log must capture for each trip: the date, business purpose, starting location and destination, and miles driven. Apps like MileIQ, Everlance, or Stride automatically track mileage via GPS and satisfy IRS record-keeping requirements without a paper log.</p>

<h2>Mileage Deduction and Self-Employment Tax</h2>
<p>For self-employed individuals, the mileage deduction reduces your net self-employment income, which reduces both your income tax <em>and</em> your self-employment tax. That double benefit makes business mileage one of the most valuable deductions available to freelancers and sole proprietors. Use our <a href="/self-employment-tax-calculator">self-employment tax calculator</a> to see how mileage and other business expenses affect your total SE tax liability.</p>

<h2>Charitable and Medical Mileage</h2>
<p>If you drive for volunteer work with a qualifying charity, you can deduct <strong>14 cents per mile</strong>. This rate is significantly below the actual cost of operating a vehicle and has been unchanged for many years — it's set by Congress, not adjusted by the IRS. Medical mileage at <strong>21 cents per mile</strong> is deductible for trips to receive medical care, but only if you itemize and only to the extent total medical expenses exceed 7.5% of your AGI. Very few taxpayers benefit from the medical mileage deduction in practice.</p>
<p>For a broader view of how all your deductions affect your federal tax bill, try our <a href="/income-tax-calculator">income tax calculator</a>.</p>
    `,
    relatedLinks: [
      { href: "/self-employment-tax-calculator", label: "Self-Employment Tax Calculator" },
      { href: "/income-tax-calculator", label: "Federal Income Tax Calculator" },
      { href: "/blog", label: "More Tax Guides" },
    ],
  },

  {
    slug: "how-to-check-your-tax-refund-status-2026",
    title: "How to Check Your IRS Tax Refund Status in 2026 (and Why It Might Be Delayed)",
    date: "April 12, 2026",
    dateISO: "2026-04-12",
    author: "MyTaxCalcs Editorial",
    category: "Filing Tips",
    excerpt: "The IRS is phasing out paper refund checks and pushing taxpayers toward direct deposit. Here's how to check your refund status, what common delays look like, and how to get your money faster.",
    metaDescription: "Learn how to check your 2026 IRS tax refund status using 'Where's My Refund?' and the IRS2Go app. Understand common refund delays and how to receive your money faster with direct deposit.",
    ogTitle: "How to Check Your IRS Tax Refund Status in 2026",
    ogDescription: "Use IRS 'Where's My Refund?' or IRS2Go to track your 2025 tax refund. Learn why refunds get delayed and how direct deposit gets you paid faster as the IRS phases out paper checks.",
    content: `
<p>The 2026 tax filing season officially opened on January 26, 2026, with the IRS beginning to accept and process returns for tax year 2025. The agency expected roughly 164 million individual tax returns — and with millions of those filers waiting for refunds, knowing how to check your status and avoid common delays is more valuable than ever.</p>

<h2>The IRS Is Phasing Out Paper Refund Checks</h2>
<p>This is the biggest change for 2026: the IRS is actively moving away from mailing paper refund checks. Under an Executive Order directing modernization of federal payments, the agency is pushing all taxpayers toward <strong>direct deposit</strong> as the default refund method. The IRS consistently reports that e-filed returns with direct deposit are processed and paid in <strong>21 days or less</strong> in most cases. Paper returns can take 6 to 8 weeks.</p>

<h2>How to Check Your Refund Status</h2>

<h3>1. Where's My Refund? (IRS.gov)</h3>
<p>The official, free tool at IRS.gov/refunds is updated once per day — typically overnight. You'll need three things: your Social Security number or ITIN, your filing status, and the exact refund amount shown on your return. The tool becomes available 24 hours after e-filing, or four weeks after mailing a paper return. It can track your refund for the current year and two prior years.</p>

<h3>2. IRS2Go Mobile App</h3>
<p>The free IRS2Go app (available for iOS and Android) provides the same Where's My Refund? information on your phone, plus payment options, free filing resources, and the ability to make estimated tax payments. It's the fastest way to check status on mobile without navigating a browser.</p>

<h3>3. Automated Phone Line</h3>
<p>Call 800-829-1954 for automated refund information 24 hours a day, 7 days a week. The IRS asks that you wait at least 21 days after e-filing (or 6 weeks after mailing a paper return) before calling. Live agents cannot provide more information than the automated line until your return has been processing for 21 days.</p>

<h2>Understanding Your Refund Status Messages</h2>
<table>
  <thead><tr><th>Status</th><th>What It Means</th><th>Expected Timeline</th></tr></thead>
  <tbody>
    <tr><td><strong>Return Received</strong></td><td>IRS has your return and is processing it</td><td>1–3 weeks</td></tr>
    <tr><td><strong>Refund Approved</strong></td><td>Refund amount confirmed and payment scheduled</td><td>Direct deposit within 5 business days</td></tr>
    <tr><td><strong>Refund Sent</strong></td><td>Payment transmitted to your bank or check mailed</td><td>Direct deposit clears in 1–2 business days</td></tr>
  </tbody>
</table>
<p>If your status jumps from "Return Received" directly to "Refund Sent" without showing "Approved" — that's normal and means processing moved quickly.</p>

<h2>Common Reasons for Refund Delays</h2>
<ul>
  <li><strong>Claiming EITC or Additional Child Tax Credit:</strong> By law (the PATH Act), the IRS cannot issue refunds that include these credits before mid-February, regardless of when you file.</li>
  <li><strong>Filing a paper return:</strong> Paper returns take 6–8 weeks to process — sometimes longer during peak filing season. E-filing is always faster.</li>
  <li><strong>Errors on your return:</strong> Math errors, mismatched Social Security numbers, missing forms (W-2, 1099), or incorrect banking information all trigger delays or manual review.</li>
  <li><strong>Identity verification:</strong> The IRS may mail a Letter 5071C asking you to verify your identity online or by phone before releasing the refund. This is increasingly common as the IRS battles identity theft fraud.</li>
  <li><strong>Claiming new OBBBA deductions:</strong> Returns with the new Schedule 1-A (tips, overtime, car loan interest, senior deduction) may take slightly longer during the first filing season these forms exist.</li>
  <li><strong>Amended returns:</strong> Form 1040-X processing currently takes 16 to 20 weeks — and cannot be tracked in Where's My Refund? Use the "Where's My Amended Return?" tool instead.</li>
  <li><strong>Offset for debts:</strong> If you owe back taxes, child support, student loans, or other federal/state debts, the IRS may reduce your refund through the Treasury Offset Program. You'll receive a notice explaining the reduction.</li>
</ul>

<h2>How to Get Your Refund Faster</h2>
<ol>
  <li><strong>E-file your return.</strong> Electronic filing is faster, more accurate, and provides instant confirmation that the IRS received your return. Free e-filing is available through IRS Free File if your income is $84,000 or below.</li>
  <li><strong>Choose direct deposit.</strong> Enter your bank routing and account number carefully — a wrong number can send your refund to someone else's account, and recovering it can take months. You can split your direct deposit across up to three accounts.</li>
  <li><strong>Double-check your Social Security numbers.</strong> SSN mismatches on you, your spouse, or dependents are one of the most common causes of delays and rejections.</li>
  <li><strong>File as early as possible.</strong> Early filers get processed before the late-season rush, reducing wait times. If you're claiming EITC or ACTC, the mid-February hold applies regardless of when you file — but filing early means you're first in line when that hold lifts.</li>
  <li><strong>Respond quickly to any IRS correspondence.</strong> If the IRS mails you a notice requesting information or identity verification, respond as quickly as possible — delays in your response directly delay your refund.</li>
</ol>

<h2>What If Your Refund Seems Wrong?</h2>
<p>The IRS may adjust your refund amount if it finds errors, applies an offset, or corrects a math mistake. If your refund is different from what you expected, the IRS will mail you a notice (CP notice) explaining the adjustment. Common adjustments include math error corrections, offsets for prior-year balances, and changes to credits claimed. If you disagree with an adjustment, the notice will include instructions for responding or requesting a review.</p>

<h2>Plan Ahead: Was Your Refund Too Big?</h2>
<p>A large refund sounds good, but it means you overwitheld throughout the year — giving the IRS an interest-free loan of your own money. The goal is to have withholding match your actual tax liability as closely as possible. If you regularly receive refunds above $2,000–$3,000, updating your W-4 to reduce withholding puts that money in your pocket throughout the year instead. Use our <a href="/tax-refund-calculator">Tax Refund Calculator</a> to estimate your refund before filing, and our <a href="/income-tax-calculator">Income Tax Calculator</a> to plan your withholding for next year.</p>
    `,
    relatedLinks: [
      { href: "/tax-refund-calculator", label: "Tax Refund Calculator" },
      { href: "/income-tax-calculator", label: "Federal Income Tax Calculator" },
      { href: "/blog", label: "More Tax Filing Tips" },
    ],
  },

  {
    slug: "self-employed-quarterly-taxes-guide-2026",
    title: "Self-Employed? Here's How to Calculate and Pay Quarterly Estimated Taxes in 2026",
    date: "April 5, 2026",
    dateISO: "2026-04-05",
    author: "MyTaxCalcs Editorial",
    category: "Self-Employment",
    excerpt: "If you're self-employed, freelance, or have side income, you're required to make quarterly estimated tax payments to the IRS. Missing them results in penalties — here's exactly how to calculate what you owe.",
    metaDescription: "Self-employed workers must pay estimated taxes quarterly in 2026. Learn how to calculate your quarterly payments, the four due dates, and how to avoid IRS underpayment penalties.",
    ogTitle: "Self-Employed Quarterly Estimated Taxes 2026: Complete Guide",
    ogDescription: "Freelancers and self-employed workers owe quarterly taxes to the IRS. Learn how to calculate estimated tax payments for 2026, when they're due, and how to avoid underpayment penalties.",
    content: `
<p>When you work for an employer, federal income taxes and payroll taxes are automatically withheld from each paycheck. When you're self-employed — whether as a sole proprietor, freelancer, independent contractor, or gig worker — no one does that for you. The IRS expects you to pay taxes as you earn income throughout the year through <strong>quarterly estimated tax payments</strong>. Failing to make these payments, or underpaying them, results in an IRS underpayment penalty — even if you end up getting a refund when you file your annual return.</p>

<h2>Who Needs to Pay Quarterly Estimated Taxes?</h2>
<p>You generally need to make quarterly estimated tax payments if you expect to owe <strong>at least $1,000 in federal taxes</strong> for the year after accounting for withholding and credits. This typically applies to:</p>
<ul>
  <li>Freelancers and independent contractors</li>
  <li>Sole proprietors and single-member LLC owners</li>
  <li>Gig economy workers (rideshare, delivery, short-term rental)</li>
  <li>Partners in partnerships and S corporation shareholders</li>
  <li>Landlords with rental income</li>
  <li>Investors with significant capital gains or dividend income not covered by withholding</li>
</ul>
<p>W-2 employees with side income may also need to make payments if their withholding from their primary job doesn't cover the additional tax owed on their side earnings.</p>

<h2>The 2026 Quarterly Estimated Tax Due Dates</h2>
<table>
  <thead><tr><th>Payment Period</th><th>Due Date</th><th>Note</th></tr></thead>
  <tbody>
    <tr><td>Jan 1 – Mar 31, 2026</td><td><strong>April 15, 2026</strong></td><td>Same day as annual filing deadline</td></tr>
    <tr><td>Apr 1 – May 31, 2026</td><td><strong>June 16, 2026</strong></td><td>Shifted from June 15 (Sunday)</td></tr>
    <tr><td>Jun 1 – Aug 31, 2026</td><td><strong>September 15, 2026</strong></td><td></td></tr>
    <tr><td>Sep 1 – Dec 31, 2026</td><td><strong>January 15, 2027</strong></td><td>Can skip if you file by Jan 31</td></tr>
  </tbody>
</table>
<p>Missing a due date doesn't mean you owe four times the penalty — the underpayment penalty is calculated separately for each quarter based on how much you underpaid and for how long. Catching up in a later quarter reduces but doesn't eliminate the penalty for the earlier period.</p>

<h2>What Taxes Are You Actually Paying?</h2>
<p>Your quarterly estimated payments cover two separate federal taxes:</p>
<ol>
  <li><strong>Federal income tax</strong> — calculated using the standard 2026 tax brackets applied to your net profit (after business deductions)</li>
  <li><strong>Self-employment tax</strong> — 15.3% on the first $184,500 of net self-employment income (12.4% Social Security + 2.9% Medicare), then 2.9% above the wage base. You can deduct half of your SE tax from gross income when calculating income tax.</li>
</ol>
<p>A common mistake: only estimating income tax and forgetting SE tax. For most self-employed people, SE tax alone runs 14–15% of net income — often larger than income tax for lower earners.</p>

<h2>How to Calculate Your Quarterly Payment Amount</h2>

<h3>Method 1: Safe Harbor (Simplest)</h3>
<p>Pay 100% of your prior year's total federal tax liability (Form 1040, line 24), divided into four equal payments. If your prior year AGI exceeded $150,000, pay 110% of the prior year's tax. This method protects you from underpayment penalties regardless of how much your income grows in the current year.</p>
<p>Example: Your 2025 total tax was $12,000. Divide by 4 = $3,000 per quarter. Pay $3,000 by each due date and you're penalty-free, even if your 2026 income doubles.</p>

<h3>Method 2: Current-Year Estimate (More Accurate)</h3>
<p>Use IRS Form 1040-ES to estimate your current-year income, deductions, and credits, then calculate expected tax owed and divide by four. This works better when your income is significantly different from last year — either much higher or much lower.</p>

<h2>A Simple Estimation Shortcut</h2>
<p>If you want a rough number without completing Form 1040-ES in full:</p>
<ol>
  <li>Estimate your net self-employment income for the quarter (gross income minus business expenses)</li>
  <li>Multiply by 92.35% (the SE tax adjustment factor)</li>
  <li>Apply 15.3% to get your SE tax portion</li>
  <li>Estimate income tax by applying your expected bracket rate to your taxable income (after standard deduction and half of SE tax)</li>
  <li>Add SE tax + income tax, divide by 4</li>
</ol>
<p>A practical rule of thumb for most self-employed workers in the 22% bracket: <strong>set aside 28–30% of every payment you receive</strong>. This covers SE tax (~15%) plus income tax (~13–15% effective rate), leaving a small buffer.</p>

<h2>New OBBBA Deductions That May Reduce Your Payments</h2>
<p>If you're eligible for any of the new deductions from the One Big Beautiful Bill Act, these reduce your taxable income and therefore your quarterly payment amounts:</p>
<ul>
  <li><strong>Tips deduction:</strong> Up to $25,000 for workers in qualifying tip occupations</li>
  <li><strong>Overtime deduction:</strong> Up to $12,500 for workers receiving FLSA overtime pay</li>
  <li><strong>Car loan interest:</strong> Up to $10,000 on new vehicle loans for personal use</li>
  <li><strong>Senior deduction:</strong> $6,000 for taxpayers age 65 and older (income limits apply)</li>
</ul>
<p>Make sure to factor these into your 1040-ES estimates if you qualify — they can meaningfully reduce quarterly payments.</p>

<h2>How to Make Quarterly Payments</h2>
<table>
  <thead><tr><th>Method</th><th>Cost</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td>IRS Direct Pay (IRS.gov/directpay)</td><td>Free</td><td>One-time payments, no account needed</td></tr>
    <tr><td>EFTPS (eftps.gov)</td><td>Free</td><td>Scheduling future payments in advance</td></tr>
    <tr><td>IRS2Go app</td><td>Processing fee for cards</td><td>Mobile payments</td></tr>
    <tr><td>Check with Form 1040-ES voucher</td><td>Postage only</td><td>Those without online access</td></tr>
  </tbody>
</table>
<p>EFTPS is the most robust option for self-employed workers who want to schedule all four payments at the start of the year and not think about it again. Enrollment takes about a week to set up.</p>

<h2>What Happens If You Underpay?</h2>
<p>The IRS underpayment penalty for 2026 is calculated at the federal short-term interest rate plus 3 percentage points (currently around 8% annualized), applied to the underpaid amount for each quarter. The penalty is not catastrophic — but on a $5,000 underpayment over 9 months, it might run $300–$400. More importantly, it comes as a surprise at filing time that you can avoid entirely with accurate quarterly payments.</p>

<p>Use our <a href="/self-employment-tax-calculator">Self-Employment Tax Calculator</a> to estimate your SE tax for 2026 based on your net income. For a full picture including both SE tax and income tax, try our <a href="/income-tax-calculator">Income Tax Calculator</a>.</p>
    `,
    relatedLinks: [
      { href: "/self-employment-tax-calculator", label: "Self-Employment Tax Calculator" },
      { href: "/income-tax-calculator", label: "Federal Income Tax Calculator" },
      { href: "/tax-refund-calculator", label: "Tax Refund Calculator" },
    ],
  },

  {
    slug: "salt-deduction-2026-what-homeowners-need-to-know",
    title: "SALT Deduction 2026: The Cap Jumped to $40,000 — Here's What Homeowners Need to Know",
    date: "March 20, 2026",
    dateISO: "2026-03-20",
    author: "MyTaxCalcs Editorial",
    category: "Tax Law Changes",
    excerpt: "The State and Local Tax (SALT) deduction cap was raised from $10,000 to $40,000 starting in 2025. If you live in a high-tax state, this could change your decision to itemize deductions for the first time in years.",
    metaDescription: "The SALT deduction cap increased from $10,000 to $40,000 in 2025 under the One Big Beautiful Bill. Learn who benefits, how to determine whether itemizing makes sense, and what the income limits are.",
    ogTitle: "SALT Deduction Cap Raised to $40,000: What It Means for Your Taxes",
    ogDescription: "The SALT deduction limit jumped from $10,000 to $40,000 under the One Big Beautiful Bill. Homeowners in high-tax states should recalculate whether itemizing beats the standard deduction in 2025 and 2026.",
    content: `
<p>For eight years, the $10,000 cap on the State and Local Tax (SALT) deduction was a source of major frustration for homeowners in high-tax states like California, New York, New Jersey, Massachusetts, and Illinois. That changed significantly with the <strong>One Big Beautiful Bill Act</strong>, signed on July 4, 2025. The new law raises the SALT deduction cap to <strong>$40,000</strong> for tax years 2025 through 2029.</p>

<h2>What Is the SALT Deduction?</h2>
<p>The SALT deduction allows taxpayers who itemize their federal deductions to deduct the state and local taxes they pay — specifically state and local income taxes (or sales taxes, if you choose that option), real property taxes, and personal property taxes such as annual vehicle registration fees based on value. You can deduct income taxes <em>or</em> sales taxes — not both. Residents of states with no income tax (Texas, Florida, Washington, etc.) typically deduct sales taxes instead using the IRS optional sales tax tables.</p>

<h2>SALT Cap History: From Unlimited to $10,000 to $40,000</h2>
<table>
  <thead><tr><th>Tax Years</th><th>SALT Cap</th><th>Law</th></tr></thead>
  <tbody>
    <tr><td>Pre-2018</td><td>Unlimited</td><td>Prior law</td></tr>
    <tr><td>2018–2024</td><td>$10,000</td><td>Tax Cuts and Jobs Act (2017)</td></tr>
    <tr><td>2025–2029</td><td>$40,000</td><td>One Big Beautiful Bill Act (2025)</td></tr>
    <tr><td>2030+</td><td>$10,000 (returns to prior cap)</td><td>Requires new legislation to change</td></tr>
  </tbody>
</table>
<p>Before 2018, high-income homeowners in states like California and New York commonly deducted $30,000, $50,000, or more in state income and property taxes. The TCJA's $10,000 cap hit these taxpayers hard, eliminating a large portion of their itemized deductions and pushing many to take the standard deduction for the first time.</p>

<h2>How the New $40,000 Cap Works</h2>
<ul>
  <li><strong>Cap amount:</strong> $40,000 ($20,000 for married filing separately)</li>
  <li><strong>Income limit:</strong> The full $40,000 cap applies to taxpayers with MAGI at or below $500,000</li>
  <li><strong>Phase-down:</strong> Above $500,000, the cap is gradually reduced by 30 cents for every dollar over the threshold, until it reaches the $10,000 floor at approximately $600,000 MAGI</li>
  <li><strong>Annual increases:</strong> The cap and income threshold increase by 1% per year from 2026 through 2029</li>
  <li><strong>After 2029:</strong> The cap returns to $10,000 unless new legislation is passed</li>
</ul>

<h2>Who Benefits Most from the $40,000 Cap?</h2>
<p>The higher cap is most valuable for homeowners who pay significant state income taxes and property taxes — and who have enough total itemized deductions to exceed the standard deduction. Consider a married couple in New Jersey with $200,000 in combined income and $18,000 in annual property taxes:</p>
<table>
  <thead><tr><th></th><th>Under $10,000 Cap (2024)</th><th>Under $40,000 Cap (2026)</th></tr></thead>
  <tbody>
    <tr><td>State income taxes paid</td><td>$12,000</td><td>$12,000</td></tr>
    <tr><td>Property taxes paid</td><td>$18,000</td><td>$18,000</td></tr>
    <tr><td>Total SALT paid</td><td>$30,000</td><td>$30,000</td></tr>
    <tr><td>SALT deduction allowed</td><td>$10,000</td><td>$30,000</td></tr>
    <tr><td>Additional deduction vs. 2024</td><td>—</td><td>+$20,000</td></tr>
    <tr><td>Federal tax savings (22% bracket)</td><td>—</td><td>~$4,400</td></tr>
  </tbody>
</table>
<p>This couple saves roughly $4,400 in federal income tax compared to what they paid under the old cap. The higher their combined state income tax and property tax, the greater the benefit — up to the $40,000 ceiling.</p>

<h2>Should You Itemize or Take the Standard Deduction?</h2>
<p>With the 2026 standard deduction at $32,200 for married filing jointly ($16,100 for singles), itemizing only makes sense if your total deductions exceed those amounts. Here's a sample calculation for a joint filer:</p>
<table>
  <thead><tr><th>Deductible Expense</th><th>Example Amount</th></tr></thead>
  <tbody>
    <tr><td>State income tax paid</td><td>$15,000</td></tr>
    <tr><td>Property tax paid</td><td>$12,000</td></tr>
    <tr><td>SALT total (capped at $40,000)</td><td><strong>$27,000</strong></td></tr>
    <tr><td>Mortgage interest</td><td>$14,000</td></tr>
    <tr><td>Charitable contributions</td><td>$3,000</td></tr>
    <tr><td><strong>Total itemized deductions</strong></td><td><strong>$44,000</strong></td></tr>
  </tbody>
</table>
<p>In this example, itemizing ($44,000) beats the standard deduction ($32,200) by $11,800 — saving an additional $2,596 in taxes at the 22% bracket. Under the old $10,000 SALT cap, their itemized total would have been only $27,000 — less than the standard deduction, so they wouldn't have itemized at all.</p>

<h2>Average Property Taxes by State: Key Input for Your Calculation</h2>
<p>Property taxes are typically the largest SALT component for homeowners. Average annual property taxes vary dramatically by state:</p>
<table>
  <thead><tr><th>State</th><th>Average Annual Property Tax</th></tr></thead>
  <tbody>
    <tr><td>New Jersey</td><td>~$9,600</td></tr>
    <tr><td>Illinois</td><td>~$7,200</td></tr>
    <tr><td>New Hampshire</td><td>~$7,000</td></tr>
    <tr><td>Connecticut</td><td>~$6,600</td></tr>
    <tr><td>New York</td><td>~$6,000</td></tr>
    <tr><td>California</td><td>~$4,800</td></tr>
    <tr><td>Texas</td><td>~$4,500</td></tr>
    <tr><td>Florida</td><td>~$2,500</td></tr>
  </tbody>
</table>

<h2>New: Charitable Deduction for Non-Itemizers</h2>
<p>One less-discussed OBBBA provision: taxpayers who take the standard deduction can now deduct up to <strong>$1,000 in charitable contributions</strong> ($2,000 for married couples filing jointly) directly from their income. Even non-itemizers now get some tax benefit from charitable giving starting in 2026.</p>

<h2>SALT and Pass-Through Entity Tax Workarounds</h2>
<p>During the years of the $10,000 cap, many states enacted Pass-Through Entity (PTE) tax elections that allowed S corporations, partnerships, and LLCs to pay state income taxes at the entity level. Because the SALT cap applies to individuals, entity-level state tax payments were deductible in full as business expenses. These PTE elections remain available in most states even after the cap increase, and may still benefit business owners with very high state tax liability. Business owners with pass-through income should consult a tax professional to determine whether the PTE election still makes sense for their 2026 return.</p>

<h2>Action Items for Homeowners</h2>
<ol>
  <li>Add up your state income taxes, property taxes, mortgage interest, and charitable donations</li>
  <li>Compare the total to the 2026 standard deduction ($32,200 married / $16,100 single)</li>
  <li>If itemizing wins, file Schedule A and capture the full SALT amount up to $40,000</li>
  <li>If you were just under the itemizing threshold before, recalculate — the higher SALT cap may tip the balance</li>
  <li>Check your state's income tax rates with our <a href="/states">state income tax calculators</a></li>
</ol>
<p>Use our <a href="/income-tax-calculator">Federal Income Tax Calculator</a> to see how your choice between itemizing and the standard deduction affects your overall tax bill. For the full context on 2026 tax changes, see our <a href="/blog/2026-tax-brackets-standard-deduction-changes">2026 tax brackets guide</a>.</p>
    `,
    relatedLinks: [
      { href: "/income-tax-calculator", label: "Federal Income Tax Calculator" },
      { href: "/tax-refund-calculator", label: "Tax Refund Calculator" },
      { href: "/blog", label: "More Tax Law Guides" },
    ],
  },

  {
    slug: "capital-gains-tax-guide-2026",
    title: "Capital Gains Tax 2026: Rates, Thresholds, and Strategies to Keep More of Your Investment Profits",
    date: "March 10, 2026",
    dateISO: "2026-03-10",
    author: "MyTaxCalcs Editorial",
    category: "Investing & Taxes",
    excerpt: "Capital gains tax can take a significant bite out of investment profits — but knowing the 2026 rates, income thresholds, and planning strategies can help you keep more of what you earn. Here's a complete guide.",
    metaDescription: "Learn how capital gains tax works in 2026, including the 0%, 15%, and 20% long-term rates, short-term rates, the Net Investment Income Tax, and legal strategies to reduce what you owe.",
    ogTitle: "2026 Capital Gains Tax Rates and Strategies — Complete Guide",
    ogDescription: "Capital gains tax rates for 2026 are 0%, 15%, or 20% depending on your income. Learn the income thresholds, short vs. long-term differences, and strategies to legally reduce your tax bill.",
    content: `
<p>Whether you sold stocks, mutual funds, cryptocurrency, real estate, or a business in 2025 or 2026, the profit you made — your capital gain — is subject to federal tax. Understanding how capital gains tax works, and the specific rates and thresholds for 2026, can help you make smarter investment decisions and potentially save thousands of dollars in taxes.</p>

<h2>Short-Term vs. Long-Term Capital Gains</h2>
<p><strong>Short-term capital gains</strong> apply to assets held for <strong>12 months or less</strong>. These gains are taxed as ordinary income — subject to your regular federal income tax bracket (10% through 37%). Selling a stock quickly for a profit is treated the same as earning wages from a job.</p>
<p><strong>Long-term capital gains</strong> apply to assets held for <strong>more than 12 months</strong>. These gains receive preferential tax treatment at lower rates — 0%, 15%, or 20%. The one-year holding period is a hard line, which is why tax professionals frequently advise checking it before triggering a sale.</p>

<h2>2026 Long-Term Capital Gains Tax Rates and Thresholds</h2>
<table>
  <thead><tr><th>Rate</th><th>Single Filers (Taxable Income)</th><th>Married Filing Jointly</th><th>Head of Household</th></tr></thead>
  <tbody>
    <tr><td><strong>0%</strong></td><td>Up to $48,350</td><td>Up to $96,700</td><td>Up to $64,750</td></tr>
    <tr><td><strong>15%</strong></td><td>$48,351 – $533,400</td><td>$96,701 – $600,050</td><td>$64,751 – $566,700</td></tr>
    <tr><td><strong>20%</strong></td><td>Over $533,400</td><td>Over $600,050</td><td>Over $566,700</td></tr>
  </tbody>
</table>
<p>These thresholds are based on your <strong>taxable income</strong> (after deductions), not gross income. A married couple with $120,000 in wages but $32,200 in standard deductions has taxable income of $87,800 — putting their long-term gains in the 0% bracket if total taxable income (including the gains) stays under $96,700.</p>

<h2>The 0% Capital Gains Rate: An Often-Missed Opportunity</h2>
<p>If your taxable income is below the threshold ($48,350 single / $96,700 married), you can sell appreciated investments and pay <strong>zero federal capital gains tax</strong>. This is particularly valuable for:</p>
<ul>
  <li>Retirees in early retirement with low taxable income before Social Security kicks in</li>
  <li>Young investors in lower-income years with significant unrealized gains</li>
  <li>Families who can strategically realize gains in a low-income year</li>
</ul>
<p>Strategically harvesting gains in low-income years — sometimes called "gain harvesting" — resets your cost basis higher, reducing future taxable gains when you eventually sell at higher income levels.</p>

<h2>Net Investment Income Tax (NIIT)</h2>
<p>High-income investors face an additional 3.8% Net Investment Income Tax on top of capital gains rates. The NIIT applies if your MAGI exceeds $200,000 for single filers or $250,000 for married couples filing jointly. These thresholds are not adjusted for inflation — meaning more taxpayers get caught each year. At the top, high earners effectively face a <strong>23.8% federal rate</strong> on long-term gains (20% + 3.8%).</p>

<h2>Capital Gains on Your Home Sale</h2>
<p>Qualifying homeowners can exclude up to <strong>$250,000</strong> in profit from federal capital gains tax (single filers), or <strong>$500,000</strong> (married couples filing jointly). To qualify, you must have owned and lived in the home as your primary residence for at least two of the five years before the sale. This exclusion can be used once every two years. Profit above the exclusion amount is taxed as a long-term capital gain at your applicable rate.</p>

<h2>Capital Loss Harvesting</h2>
<p>Capital losses can offset capital gains dollar for dollar. Short-term losses offset short-term gains first; long-term losses offset long-term gains first. Remaining losses of either type can then offset gains of the other type. If your total losses exceed your total gains, you can deduct up to <strong>$3,000</strong> of the excess loss against ordinary income per year. Remaining losses carry forward indefinitely to future years.</p>
<p>Strategic tax-loss harvesting — selling underperforming investments to generate losses that offset gains elsewhere — is a legitimate way to reduce your tax bill. The key rule to avoid: the <strong>wash-sale rule</strong> prevents you from repurchasing a "substantially identical" investment within 30 days before or after the sale. Buying a different ETF in the same sector is generally fine; buying back the same fund is not.</p>

<h2>Cryptocurrency and Capital Gains</h2>
<p>The IRS treats cryptocurrency as property, not currency. Every time you sell, trade, or use crypto to purchase goods or services, you trigger a capital gain or loss. Key implications:</p>
<ul>
  <li>Short-term crypto gains (held ≤12 months) are taxed as ordinary income</li>
  <li>Long-term crypto gains (held >12 months) receive the 0%/15%/20% preferential rates</li>
  <li>Trading one crypto for another (BTC → ETH) is a taxable event</li>
  <li>Using crypto to buy a $5 cup of coffee triggers a capital gain if the crypto appreciated since you acquired it</li>
</ul>
<p>Accurate record-keeping of your cost basis — the price you paid for each unit of crypto — is essential and increasingly required by exchanges under expanded 1099-DA reporting rules starting in 2026.</p>

<h2>Capital Gains on Inherited Assets</h2>
<p>Assets inherited at death receive a <strong>stepped-up basis</strong> to the fair market value at the date of death. This effectively eliminates any gain that accrued during the decedent's lifetime — one of the most significant tax benefits in the code for heirs. An heir who sells inherited stock immediately after inheriting it typically owes no capital gains tax, regardless of how much it appreciated during the original owner's lifetime.</p>

<h2>Strategies to Reduce Capital Gains Tax</h2>
<ul>
  <li><strong>Hold for more than one year</strong> to convert short-term gains (ordinary income rates) to long-term gains (preferential rates)</li>
  <li><strong>Harvest losses</strong> to offset gains in taxable accounts</li>
  <li><strong>Use tax-advantaged accounts</strong> (IRA, 401(k), Roth IRA) for high-growth investments — gains inside these accounts grow tax-deferred or tax-free</li>
  <li><strong>Time sales</strong> in lower-income years when your long-term rate may be 0% or 15%</li>
  <li><strong>Maximize deductions</strong> to reduce taxable income, potentially dropping below the 15% or 0% threshold</li>
  <li><strong>Donate appreciated assets to charity</strong> — you avoid the capital gains tax entirely and deduct the full fair market value as a charitable contribution</li>
</ul>

<p>Use our <a href="/capital-gains-tax-calculator">Capital Gains Tax Calculator</a> to estimate what you'll owe on investment profits based on your income and holding period. For your full federal tax picture, try our <a href="/income-tax-calculator">Income Tax Calculator</a>.</p>
    `,
    relatedLinks: [
      { href: "/capital-gains-tax-calculator", label: "Capital Gains Tax Calculator" },
      { href: "/income-tax-calculator", label: "Federal Income Tax Calculator" },
      { href: "/blog", label: "More Tax Guides" },
    ],
  },

  {
    slug: "2026-401k-ira-contribution-limits",
    title: "401(k) and IRA Contribution Limits Increase for 2026",
    date: "November 13, 2025",
    dateISO: "2025-11-13",
    author: "MyTaxCalcs Editorial",
    category: "Retirement",
    excerpt: "The IRS released IRS Notice 2025-67 announcing higher 401(k), IRA, and catch-up contribution limits for 2026. Here's every number you need to maximize your retirement savings this year.",
    metaDescription: "2026 401(k) limit increases to $24,500. IRA limit rises to $7,500. See all updated contribution limits, catch-up amounts, Roth IRA phase-outs, and traditional IRA deductibility ranges for 2026.",
    ogTitle: "2026 401(k) and IRA Contribution Limits — All the Numbers | MyTaxCalcs",
    ogDescription: "IRS Notice 2025-67 raised the 2026 401(k) limit to $24,500 and IRA limit to $7,500. See catch-up contributions, Roth phase-outs, and strategies to maximize your retirement savings.",
    content: `
  <p>On November 13, 2025, the IRS released <strong>IRS Notice 2025-67</strong> (IR-2025-111) announcing updated contribution limits for 401(k) plans, IRAs, and other retirement vehicles for tax year 2026.</p>

  <h2>401(k), 403(b), and 457 Plan Limits</h2>
  <table>
    <thead><tr><th>Limit Type</th><th>2025</th><th>2026</th></tr></thead>
    <tbody>
      <tr><td>Employee contribution limit</td><td>$23,500</td><td>$24,500</td></tr>
      <tr><td>Catch-up contribution (age 50–59, 64+)</td><td>$7,500</td><td>$8,000</td></tr>
      <tr><td>Special catch-up (age 60, 61, 62, 63)</td><td>$11,250</td><td>$11,250</td></tr>
      <tr><td>Total limit including employer contributions</td><td>$70,000</td><td>$77,000</td></tr>
    </tbody>
  </table>

  <p>The special higher catch-up contribution for employees aged 60–63 was introduced by SECURE 2.0 and remains at $11,250 for 2026 — higher than the standard $8,000 catch-up for other eligible ages.</p>

  <h2>IRA Contribution Limits</h2>
  <table>
    <thead><tr><th>Limit Type</th><th>2025</th><th>2026</th></tr></thead>
    <tbody>
      <tr><td>Traditional and Roth IRA limit</td><td>$7,000</td><td>$7,500</td></tr>
      <tr><td>Catch-up contribution (age 50+)</td><td>$1,000</td><td>$1,100</td></tr>
    </tbody>
  </table>

  <p>The IRA catch-up contribution limit is now indexed to inflation under SECURE 2.0, which is why it increases from $1,000 to $1,100 for 2026. Prior to SECURE 2.0, this amount had been frozen at $1,000 since 2006.</p>

  <h2>Roth IRA Income Phase-Out Ranges for 2026</h2>
  <p>You can contribute to a Roth IRA only if your income falls below certain limits. For 2026:</p>
  <ul>
    <li><strong>Single / Head of Household:</strong> Phase-out begins at $150,000, eliminated at $165,000</li>
    <li><strong>Married Filing Jointly:</strong> Phase-out begins at $236,000, eliminated at $246,000</li>
    <li><strong>Married Filing Separately:</strong> Phase-out begins at $0, eliminated at $10,000</li>
  </ul>

  <h2>Traditional IRA Deductibility Phase-Outs</h2>
  <p>If you or your spouse are covered by a workplace retirement plan, your traditional IRA deduction may be limited based on income. For 2026:</p>
  <ul>
    <li><strong>Single covered by workplace plan:</strong> Phase-out $79,000–$89,000</li>
    <li><strong>Married filing jointly, covered by workplace plan:</strong> Phase-out $126,000–$146,000</li>
    <li><strong>Married, spouse covered but you are not:</strong> Phase-out $236,000–$246,000</li>
  </ul>

  <h2>Social Security Wage Base Increases</h2>
  <p>The Social Security Administration announced that the maximum earnings subject to Social Security tax increases from $176,100 in 2025 to <strong>$184,500</strong> in 2026 — a 4.7% increase. Earnings above this threshold are not subject to the 6.2% Social Security tax (though all earnings remain subject to the 1.45% Medicare tax).</p>

  <h2>Why This Matters</h2>
  <p>Maxing out your 401(k) in 2026 shelters $24,500 from federal income tax this year (traditional 401(k)) or grows it tax-free (Roth 401(k)). At a 22% marginal rate, a full traditional 401(k) contribution saves $5,390 in federal taxes in the year of contribution. For those in the catch-up age range, the savings are even higher.</p>

  <h2>What Should You Do Now?</h2>
  <p>The 2026 limit increases offer a concrete opportunity to boost your retirement savings and reduce your tax bill. Here's how to act on these numbers:</p>
  <ul>
    <li><strong>Update your 401(k) contribution rate.</strong> If your employer's payroll system allows it, set your 2026 contribution to capture the full $24,500. Divide by your number of pay periods to find your per-paycheck amount ($941/paycheck for 26 biweekly periods).</li>
    <li><strong>Check if you qualify for catch-up contributions.</strong> If you turn 50 or older in 2026, you can contribute up to $32,500 total to your 401(k) ($24,500 + $8,000 catch-up). If you're 60–63, your limit is $35,750 ($24,500 + $11,250).</li>
    <li><strong>Max your IRA before April 15, 2027.</strong> You have until the tax filing deadline to make your 2026 IRA contribution. The new $7,500 limit (plus $1,100 catch-up if 50+) applies to Roth and traditional IRAs combined across all accounts.</li>
    <li><strong>Check Roth IRA eligibility.</strong> If your MAGI falls below the phase-out range, a Roth IRA contribution grows tax-free and has no required minimum distributions. If you're over the income limit, a backdoor Roth conversion may still be available.</li>
    <li><strong>Consider the MAGI impact.</strong> Traditional 401(k) and IRA contributions reduce your MAGI, which can affect eligibility for other credits and deductions — including the Child Tax Credit phase-out, Roth IRA contribution limits, and ACA premium subsidies.</li>
  </ul>
  <p>The key takeaway: retirement contribution limits increase in 2026 across the board. Adjusting your contributions now rather than waiting until year-end maximizes the number of pay periods you benefit from the higher limits.</p>

  <h2>Source</h2>
  <p>All figures sourced from <a href="https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-rises-to-7500" target="_blank" rel="noopener">IRS IR-2025-111</a> and IRS Notice 2025-67.</p>
    `,
    relatedLinks: [
      { href: "/income-tax-calculator", label: "Income Tax Calculator" },
      { href: "/self-employment-tax-calculator", label: "Self-Employment Tax Calculator" },
      { href: "/blog", label: "More Tax Guides" },
    ],
  },

  // ── ORIGINAL POSTS BELOW (unchanged) ──────────────────────────────────────

  {
    slug: "irs-2026-tax-inflation-adjustments",
    title: "IRS Announces 2026 Tax Inflation Adjustments: What Every Taxpayer Needs to Know",
    date: "October 9, 2025",
    dateISO: "2025-10-09",
    author: "MyTaxCalcs Editorial",
    category: "IRS Announcements",
    excerpt: "The IRS released Revenue Procedure 2025-32 on October 9, 2025, announcing inflation adjustments to more than 60 tax provisions for tax year 2026. Here's what changed and what it means for your tax bill.",
    metaDescription: "IRS Rev. Proc. 2025-32 announced 2026 inflation adjustments to over 60 tax provisions. See updated tax brackets, standard deductions, credits, and more for tax year 2026.",
    ogTitle: "IRS 2026 Tax Inflation Adjustments Explained | MyTaxCalcs",
    ogDescription: "IRS Revenue Procedure 2025-32 updated over 60 tax provisions for 2026. See what changed for brackets, deductions, credits, and retirement limits.",
    content: `
<p>On October 9, 2025, the Internal Revenue Service released <strong>Revenue Procedure 2025-32</strong>, its annual announcement of inflation-adjusted tax figures for tax year 2026. The adjustments affect more than 60 tax provisions and also incorporate changes made by the <strong>One Big Beautiful Bill Act (OBBBA)</strong>, signed into law on July 4, 2025. Tax year 2026 returns are generally filed in early 2027.</p>

<h2>Key 2026 Figures at a Glance</h2>
<table>
  <thead><tr><th>Provision</th><th>2025</th><th>2026</th></tr></thead>
  <tbody>
    <tr><td>Standard deduction (single)</td><td>$15,000</td><td>$16,100</td></tr>
    <tr><td>Standard deduction (married jointly)</td><td>$30,000</td><td>$32,200</td></tr>
    <tr><td>Top bracket threshold (single)</td><td>$626,350</td><td>$640,600</td></tr>
    <tr><td>Top bracket threshold (married jointly)</td><td>$751,600</td><td>$768,700</td></tr>
    <tr><td>Max EITC (3+ children)</td><td>$8,046</td><td>$8,231</td></tr>
    <tr><td>AMT exemption (single)</td><td>$88,100</td><td>$90,100</td></tr>
    <tr><td>Estate tax exclusion</td><td>$13,990,000</td><td>$15,000,000</td></tr>
    <tr><td>Annual gift exclusion</td><td>$18,000</td><td>$19,000</td></tr>
    <tr><td>401(k) contribution limit</td><td>$23,500</td><td>$24,500</td></tr>
    <tr><td>IRA contribution limit</td><td>$7,000</td><td>$7,500</td></tr>
    <tr><td>Health FSA limit</td><td>$3,300</td><td>$3,400</td></tr>
    <tr><td>Foreign earned income exclusion</td><td>$130,000</td><td>$132,900</td></tr>
  </tbody>
</table>

<h2>Tax Brackets: Same Rates, Higher Thresholds</h2>
<p>The seven federal income tax rates remain unchanged at 10%, 12%, 22%, 24%, 32%, 35%, and 37%. The OBBBA made these rates permanent — ending years of uncertainty about whether the lower TCJA rates would expire after 2025. The income thresholds that determine which rate applies have been adjusted upward by approximately 2.7% for inflation. For single filers, the 37% top rate now applies to income above <strong>$640,600</strong>. For married couples filing jointly, it kicks in above <strong>$768,700</strong>.</p>

<h2>Standard Deduction Increases</h2>
<p>The standard deduction rises for all filing statuses in 2026: $16,100 for single filers and married filing separately (up from $15,000), $32,200 for married filing jointly (up from $30,000), and $24,150 for head of household (up from $22,500). The OBBBA also added a new <strong>$6,000 senior deduction</strong> for taxpayers age 65 and older, which phases out at a 6% rate for incomes above $75,000 (single) and $150,000 (joint). This provision expires after the 2028 tax year.</p>

<h2>New OBBBA Deductions (2025–2028)</h2>
<p>Beyond the standard deduction increase, the OBBBA introduced several entirely new deductions available on the new Schedule 1-A:</p>
<ul>
  <li><strong>No Tax on Tips:</strong> Up to $25,000 in qualified tip income deductible from federal taxable income (phases out above $150,000 MAGI single / $300,000 married)</li>
  <li><strong>No Tax on Overtime:</strong> Up to $12,500 in overtime pay deductible per year ($25,000 married jointly; same phase-out thresholds)</li>
  <li><strong>Car Loan Interest:</strong> Up to $10,000 per year in interest on new vehicle loans originated after December 31, 2024 (phases out above $100,000 MAGI single / $200,000 married)</li>
  <li><strong>Senior Deduction:</strong> $6,000 additional deduction for taxpayers 65+ (phases out above $75,000 single / $150,000 married)</li>
</ul>
<p>These deductions are available whether you take the standard deduction or itemize, and they reduce your Adjusted Gross Income directly.</p>

<h2>Earned Income Tax Credit (EITC)</h2>
<p>The maximum EITC for 2026 increases to <strong>$8,231</strong> for qualifying taxpayers with three or more qualifying children (up from $8,046 in 2025). The investment income limit for EITC eligibility rises to $11,950. Many eligible taxpayers miss this credit — check eligibility annually even if you didn't qualify in a prior year, as income thresholds shift each year.</p>

<h2>Alternative Minimum Tax (AMT)</h2>
<p>The AMT exemption increases to <strong>$90,100</strong> for single filers and <strong>$140,200</strong> for married filing jointly. The phase-out threshold starts at $635,900 for single filers and $1,271,900 for joint filers — both significantly higher than the old pre-TCJA levels that the OBBBA made permanent.</p>

<h2>Retirement Contribution Limits</h2>
<p>The 401(k) employee contribution limit rises to <strong>$24,500</strong> (up from $23,500). The IRA contribution limit increases to <strong>$7,500</strong> (up from $7,000), with the catch-up contribution for those 50+ rising to $1,100 — now indexed to inflation for the first time under SECURE 2.0. The Social Security wage base increases to $184,500.</p>

<h2>Estate and Gift Tax</h2>
<p>The federal estate tax exclusion jumps to <strong>$15,000,000 per person</strong> for 2026 (up from $13,990,000), or $30,000,000 for married couples using portability. The annual gift tax exclusion remains at $19,000 per recipient; the exclusion for gifts to non-citizen spouses rises to $194,000.</p>

<h2>SALT Deduction Cap: $40,000 Through 2029</h2>
<p>One of the most impactful OBBBA changes is the increase of the State and Local Tax (SALT) deduction cap from $10,000 to <strong>$40,000</strong> for tax years 2025–2029 (phases out for MAGI above $500,000, returning to $10,000 floor at $600,000). This change significantly affects itemizing decisions for homeowners in high-tax states.</p>

<h2>What This Means for Your 2026 Tax Planning</h2>
<ul>
  <li>Review W-4 withholding — higher brackets and standard deductions may mean you're over-withholding</li>
  <li>Max out 401(k) contributions at the new $24,500 limit to reduce taxable income</li>
  <li>Check EITC eligibility if your income is in the qualifying range</li>
  <li>If you're in a high-tax state, recalculate whether itemizing now beats the standard deduction given the higher SALT cap</li>
  <li>Workers who receive tips or overtime should be sure to claim the new Schedule 1-A deductions</li>
</ul>

<h2>Source</h2>
<p>All figures sourced from <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener">IRS Revenue Procedure 2025-32</a> and <a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill" target="_blank" rel="noopener">IRS IR-2025-103</a>. Use our <a href="/income-tax-calculator">income tax calculator</a> to estimate your 2026 federal tax with the updated brackets and deductions.</p>
    `,
    relatedLinks: [
      { href: "/tax-brackets-2026", label: "2026 Tax Brackets" },
      { href: "/standard-deduction-2026", label: "2026 Standard Deduction" },
      { href: "/income-tax-calculator", label: "Income Tax Calculator" },
    ]
  },
  {
    slug: "2026-standard-deduction-increase",
    title: "2026 Standard Deduction Rises to $32,200 for Joint Filers — What It Means for You",
    date: "October 9, 2025",
    dateISO: "2025-10-09",
    author: "MyTaxCalcs Editorial",
    category: "Deductions",
    excerpt: "The 2026 standard deduction increases to $32,200 for married filing jointly, $16,100 for single filers, and $24,150 for heads of household. Here's how the change affects your taxable income.",
    metaDescription: "The 2026 standard deduction is $32,200 for married filing jointly, $16,100 for single filers, and $24,150 for heads of household. Learn how this affects your 2026 tax bill.",
    ogTitle: "2026 Standard Deduction: $32,200 Joint, $16,100 Single | MyTaxCalcs",
    ogDescription: "2026 standard deduction amounts by filing status and how the increase from 2025 affects your taxable income and tax bill.",
    content: `
<p>The IRS confirmed in <strong>Revenue Procedure 2025-32</strong> that the standard deduction will increase for all filing statuses in tax year 2026. These figures apply to returns filed in early 2027.</p>

<h2>2026 Standard Deduction Amounts</h2>
<table>
  <thead><tr><th>Filing Status</th><th>2025 Amount</th><th>2026 Amount</th><th>Increase</th></tr></thead>
  <tbody>
    <tr><td>Single</td><td>$15,000</td><td>$16,100</td><td>+$1,100</td></tr>
    <tr><td>Married Filing Jointly</td><td>$30,000</td><td>$32,200</td><td>+$2,200</td></tr>
    <tr><td>Head of Household</td><td>$22,500</td><td>$24,150</td><td>+$1,650</td></tr>
    <tr><td>Married Filing Separately</td><td>$15,000</td><td>$16,100</td><td>+$1,100</td></tr>
  </tbody>
</table>

<h2>Additional Standard Deduction for Age 65+ or Blind</h2>
<p>Taxpayers who are age 65 or older, or blind, may claim an additional standard deduction on top of the base amount. For 2026:</p>
<table>
  <thead><tr><th>Filing Status</th><th>Additional Amount (per qualifying person)</th></tr></thead>
  <tbody>
    <tr><td>Married (per qualifying spouse)</td><td>$1,600</td></tr>
    <tr><td>Single / Head of Household</td><td>$2,000</td></tr>
  </tbody>
</table>
<p>A married couple where both spouses are 65 or older would have a total 2026 standard deduction of <strong>$35,400</strong> ($32,200 + $1,600 + $1,600). If one or both spouses are also blind, each blindness condition adds another $1,600 on top of that.</p>

<h2>New $6,000 Senior Deduction (OBBBA)</h2>
<p>The One Big Beautiful Bill Act added a brand-new <strong>$6,000 deduction for taxpayers age 65 and older</strong> that is available in addition to the standard deduction. This applies for tax years 2025 through 2028. The deduction phases out at 6% of income above $75,000 for single filers and $150,000 for married filing jointly. At $175,000 of income (single), the full $6,000 deduction phases out completely.</p>

<h2>Why Does the Standard Deduction Increase Each Year?</h2>
<p>The standard deduction is adjusted annually for inflation using the <strong>Chained Consumer Price Index (C-CPI-U)</strong>. This mechanism was permanently embedded in the tax code by the Tax Cuts and Jobs Act of 2017 and kept in place by the One Big Beautiful Bill Act signed July 4, 2025. The idea is straightforward: as prices rise, the deduction rises with them so taxpayers aren't pushed into higher effective tax rates simply because wages kept pace with inflation — a phenomenon called "bracket creep."</p>
<p>The 2026 increase of roughly 3.7% for single filers reflects moderating but still meaningful inflation compared to the larger jumps seen in 2023 and 2024.</p>

<h2>Standard Deduction vs. Itemizing: Which Is Better for You in 2026?</h2>
<p>The standard deduction is a flat dollar amount you subtract from your adjusted gross income (AGI) without needing to document individual expenses. Itemizing lets you deduct specific qualifying expenses — but only makes financial sense if your total itemized deductions exceed the standard deduction for your filing status.</p>
<p>Common itemized deductions include:</p>
<ul>
  <li><strong>Mortgage interest</strong> on up to $750,000 of qualified loan principal</li>
  <li><strong>State and local taxes (SALT)</strong> — now capped at $40,000 through 2029 under the One Big Beautiful Bill Act (up from the previous $10,000 cap)</li>
  <li><strong>Charitable contributions</strong> to qualifying organizations</li>
  <li><strong>Medical expenses</strong> exceeding 7.5% of your AGI</li>
  <li><strong>Casualty losses</strong> from federally declared disasters</li>
</ul>
<p>With the 2026 standard deduction at $32,200 for joint filers, the bar for itemizing is high. A couple would need more than $32,200 in combined itemized deductions before it becomes worthwhile. Homeowners in high-tax states like California, New York, or New Jersey are the most likely candidates to benefit from itemizing — particularly now that the SALT cap has risen to $40,000. See our guide on the <a href="/blog/salt-deduction-2026-what-homeowners-need-to-know">2026 SALT deduction changes</a> for a full breakdown.</p>

<h2>How the Standard Deduction Reduces Your Tax Bill: A Worked Example</h2>
<p>Let's say you're a single filer with $75,000 in wages in 2026. Here's how the standard deduction affects your taxable income and tax owed:</p>
<table>
  <thead><tr><th></th><th>Without Deduction</th><th>With Standard Deduction</th></tr></thead>
  <tbody>
    <tr><td>Gross income</td><td>$75,000</td><td>$75,000</td></tr>
    <tr><td>Standard deduction</td><td>$0</td><td>−$16,100</td></tr>
    <tr><td>Taxable income</td><td>$75,000</td><td>$58,900</td></tr>
    <tr><td>Estimated federal tax</td><td>~$13,234</td><td>~$9,622</td></tr>
  </tbody>
</table>
<p>The standard deduction alone saves this filer roughly <strong>$3,600 in federal tax</strong>. Use our <a href="/income-tax-calculator">free income tax calculator</a> to run the numbers for your specific situation.</p>

<h2>Who Cannot Claim the Standard Deduction?</h2>
<p>A small number of taxpayers are ineligible for the standard deduction and must itemize:</p>
<ul>
  <li>Married individuals filing separately when their spouse itemizes</li>
  <li>Nonresident aliens</li>
  <li>Individuals filing a return for a period of less than 12 months due to a change in accounting period</li>
</ul>

<h2>Dependent Filers: A Lower Standard Deduction Applies</h2>
<p>If someone can claim you as a dependent on their tax return, your standard deduction is limited. For 2026, it's the <em>greater</em> of $1,350, or your earned income plus $400 (but not exceeding the regular standard deduction for your filing status). This rule primarily affects college students or young adults who are still claimed as dependents but have part-time jobs or investment income.</p>

<h2>What This Means for Your 2026 Tax Planning</h2>
<p>The increase in the standard deduction is generally good news — more of your income is sheltered from tax before a single dollar of federal income tax applies. A few practical takeaways:</p>
<ul>
  <li><strong>Review your W-4 withholding.</strong> If you got a large refund in 2025, the higher deduction in 2026 means you may be over-withholding again. Use our <a href="/tax-refund-calculator">tax refund calculator</a> to check.</li>
  <li><strong>Don't assume itemizing still beats the standard deduction</strong> just because it did in a prior year. Run the comparison annually — deductions change, and the SALT cap shift may alter the math.</li>
  <li><strong>Bunch charitable deductions</strong> if you're close to the itemizing threshold. Donating two years' worth of charitable contributions in a single tax year can push you over the standard deduction, letting you itemize that year while taking the standard deduction the next.</li>
</ul>

<h2>Source</h2>
<p>All figures sourced from <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener">IRS Revenue Procedure 2025-32</a>. For the full picture of 2026 tax changes including updated brackets, see our <a href="/blog/2026-tax-brackets-standard-deduction-changes">2026 tax brackets guide</a>.</p>
    `,
    relatedLinks: [
      { href: "/tax-brackets-2026", label: "2026 Tax Brackets" },
      { href: "/standard-deduction-2026", label: "2026 Standard Deduction" },
      { href: "/income-tax-calculator", label: "Income Tax Calculator" },
    ]
  },
  {
    slug: "2026-eitc-amt-estate-tax-updates",
    title: "2026 EITC, AMT, Estate Tax, and Gift Exclusion Updates from the IRS",
    date: "October 9, 2025",
    dateISO: "2025-10-09",
    author: "MyTaxCalcs Editorial",
    category: "IRS Announcements",
    excerpt: "Beyond brackets and the standard deduction, IRS Rev. Proc. 2025-32 updated the EITC, AMT exemption, estate tax exclusion, and gift tax exclusion for 2026. Here are the numbers.",
    metaDescription: "2026 IRS updates: EITC up to $8,231, AMT exemption $90,100 single, estate tax exclusion $15 million, gift exclusion $19,000. Full breakdown of Rev. Proc. 2025-32 changes.",
    ogTitle: "2026 EITC, AMT, Estate and Gift Tax Updates | MyTaxCalcs",
    ogDescription: "IRS Rev. Proc. 2025-32 updated the EITC, AMT, estate tax exclusion, and gift tax exclusion for 2026. Here are all the key numbers.",
    content: `
<p>IRS Revenue Procedure 2025-32 covers more than just tax brackets and the standard deduction. Here's a focused breakdown of the other important figures updated for tax year 2026 — including the Earned Income Tax Credit, Alternative Minimum Tax, estate and gift tax exclusions, and several lesser-known inflation adjustments that affect millions of filers.</p>

<h2>Earned Income Tax Credit (EITC)</h2>
<p>The EITC is a refundable credit for low-to-moderate income workers and families. It's one of the most valuable credits in the tax code — "refundable" means it can reduce your tax bill below zero and result in a payment to you even if you owe no tax.</p>
<p>For 2026, the maximum EITC amounts are:</p>
<table>
  <thead><tr><th>Number of Qualifying Children</th><th>Maximum EITC (2026)</th><th>2025 Amount</th></tr></thead>
  <tbody>
    <tr><td>3 or more</td><td>$8,231</td><td>$7,830</td></tr>
    <tr><td>2</td><td>$7,281</td><td>$6,960</td></tr>
    <tr><td>1</td><td>$4,390</td><td>$4,213</td></tr>
    <tr><td>0 (childless workers)</td><td>$649</td><td>$632</td></tr>
  </tbody>
</table>
<p>To claim the EITC, your earned income and adjusted gross income must both fall below the income limits for your filing status and number of children. Investment income is also capped — for 2026, you can't have more than <strong>$11,950</strong> in investment income and still claim the credit.</p>
<p>The EITC phases in as income rises, reaches its maximum, then phases out. Married filers receive a wider phase-out range than single filers, which means married couples can claim the full credit at higher income levels.</p>

<h2>Alternative Minimum Tax (AMT)</h2>
<p>The AMT is a parallel tax system designed to ensure higher-income taxpayers pay at least a minimum amount of tax, regardless of deductions. You calculate your taxes under both the regular system and the AMT, then pay whichever is higher.</p>
<p>For 2026, the AMT exemption amounts — the income threshold below which AMT doesn't apply — are:</p>
<table>
  <thead><tr><th>Filing Status</th><th>2026 AMT Exemption</th><th>Phase-out Begins At</th></tr></thead>
  <tbody>
    <tr><td>Single / Head of Household</td><td>$90,100</td><td>$635,900</td></tr>
    <tr><td>Married Filing Jointly</td><td>$140,200</td><td>$1,271,900</td></tr>
    <tr><td>Married Filing Separately</td><td>$70,100</td><td>$635,900</td></tr>
    <tr><td>Estates and Trusts</td><td>$31,500</td><td>$105,100</td></tr>
  </tbody>
</table>
<p>The AMT affects relatively few middle-income taxpayers today — the higher exemption amounts introduced by the TCJA and made permanent by the One Big Beautiful Bill Act pushed most households well below the threshold. It's more relevant for high earners with large incentive stock option exercises, significant miscellaneous deductions, or substantial depreciation adjustments.</p>

<h2>Estate and Gift Tax</h2>
<p>The federal estate tax applies to the transfer of wealth at death above a certain exemption amount. The annual gift tax exclusion covers gifts you make during your lifetime.</p>

<h3>Federal Estate Tax Exemption</h3>
<p>For 2026, the federal estate and gift tax lifetime exemption is <strong>$15,000,000 per person</strong> (up from $13,990,000 in 2025). A married couple can effectively shelter up to <strong>$30,000,000</strong> from federal estate tax by combining their exemptions through portability elections. Estates above this threshold are taxed at rates up to 40%. The vast majority of estates — over 99% — fall below the exemption and owe no federal estate tax.</p>

<h3>Annual Gift Tax Exclusion</h3>
<p>The annual gift tax exclusion for 2026 is <strong>$19,000 per recipient</strong> (up from $18,000 in 2025). You can give up to $19,000 to any number of people in a calendar year without it counting against your lifetime exemption or requiring a gift tax return. A married couple can give up to $38,000 to each recipient by "gift splitting." The exclusion for gifts to a non-citizen spouse increases to <strong>$194,000</strong>.</p>

<h2>Qualified Transportation Fringe Benefits</h2>
<p>The monthly limit for employer-provided transit passes and qualified parking increases to <strong>$340</strong> per month for 2026 (up $15 from 2025). Amounts provided up to this limit are excluded from employee income — a straightforward pre-tax benefit worth up to $4,080 per year.</p>

<h2>Flexible Spending Account (FSA) Limits</h2>
<p>Health Flexible Spending Accounts let you set aside pre-tax dollars for qualified medical expenses. For 2026:</p>
<ul>
  <li><strong>Health FSA contribution limit:</strong> $3,400 per employee (up from $3,300 in 2025)</li>
  <li><strong>FSA carryover maximum:</strong> $680 (up from $660)</li>
  <li><strong>Dependent care FSA:</strong> Remains at $5,000 per household (set by statute, not inflation-adjusted)</li>
</ul>

<h2>Adoption Credit</h2>
<p>The maximum adoption credit for 2026 is <strong>$17,280</strong> per eligible child (up from $16,810 in 2025). The credit begins to phase out for taxpayers with modified AGI above $259,190 and is completely phased out at $299,190. Qualifying expenses include adoption fees, court costs, attorney fees, and travel expenses.</p>

<h2>Foreign Earned Income Exclusion</h2>
<p>U.S. citizens and resident aliens living abroad may exclude up to <strong>$132,900</strong> of foreign earned income from U.S. taxation in 2026 (up from $130,000 in 2025). This exclusion is available to qualifying taxpayers under the bona fide residence or physical presence tests.</p>

<h2>What These Numbers Mean in Practice</h2>
<ul>
  <li><strong>If you're a low-to-moderate income worker:</strong> Check EITC eligibility every year — many eligible taxpayers miss the credit. Our <a href="/income-tax-calculator">income tax calculator</a> factors in common credits including the EITC.</li>
  <li><strong>If you exercise stock options:</strong> AMT planning is critical. A large ISO exercise in a single year can trigger significant AMT liability. Consider spreading exercises across tax years.</li>
  <li><strong>If you have a taxable estate:</strong> The $15 million exemption is historically high. Annual gifting ($19,000 per recipient) is a simple strategy to gradually reduce estate size.</li>
  <li><strong>If you have an FSA:</strong> Use-it-or-lose-it rules still apply beyond the carryover limit. Plan your elections carefully at open enrollment.</li>
</ul>

<h2>Source</h2>
<p>All figures sourced from <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener">IRS Revenue Procedure 2025-32</a> and <a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill" target="_blank" rel="noopener">IRS IR-2025-103</a>. For the full picture of 2026 changes, see our guides on <a href="/blog/2026-tax-brackets-standard-deduction-changes">2026 tax brackets</a> and the <a href="/blog/2026-standard-deduction-increase">2026 standard deduction</a>.</p>
    `,
    relatedLinks: [
      { href: "/income-tax-calculator", label: "Income Tax Calculator" },
      { href: "/tax-brackets-2026", label: "2026 Tax Brackets" },
      { href: "/capital-gains-tax-rates-2026", label: "2026 Capital Gains Rates" },
    ]
  }
];

module.exports = blogPosts;
