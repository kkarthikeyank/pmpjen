# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: page.waitForSelector: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('table.claims-table') to be visible

    at ClaimsPage.filterByCustomDateRangeAndPrintClaims (/home/karthi/pmp/src/pages/ClaimsPage.js:359:17)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:113:5
```

# Page snapshot

```yaml
- banner:
  - heading "Member Portal" [level=1]
- navigation "Navbar":
  - link "Brand logo":
    - /url: "#/dashboard"
    - img "Brand logo"
  - button "Julia Donaldson"
- navigation:
  - list:
    - listitem:
      - link "navbarLinkIcon Home" [expanded]:
        - /url: "#/dashboard"
        - img "navbarLinkIcon"
        - text: Home
    - listitem:
      - link "navbarLinkIcon Claims" [expanded]:
        - /url: "#/claims"
        - img "navbarLinkIcon"
        - text: Claims
    - listitem:
      - link "navbarLinkIcon Labs" [expanded]:
        - /url: "#/labs"
        - img "navbarLinkIcon"
        - text: Labs
    - listitem:
      - link "navbarLinkIcon Provider" [expanded]:
        - /url: "#/providers"
        - img "navbarLinkIcon"
        - text: Provider
    - listitem:
      - link "navbarLinkIcon FAQ" [expanded]:
        - /url: "#/customContent/FAQ"
        - img "navbarLinkIcon"
        - text: FAQ
- navigation "dependent-selection":
  - heading "Claims for" [level=1]
  - button "Julia Donaldson"
- text: HPP can only present information for medical claims. please contact us. To view your Deductible and Out-of-Pocket Amounts Applied Year To Date,
- link "click here to navigate to Year To Date Deductibles page":
  - /url: "#/claims/ytd"
  - text: click here.
- text: Claim Number
- textbox "Claim Number"
- paragraph: Filter by date of service range
- button "03-10-2024 - 03-11-2025"
- button "Apply"
- button "Clear"
- text: "Date range: from 03-10-2024 to 03-11-2025"
- button "Download Summary by Filter"
- button "Filter Results"
- text: "Filters: Show"
- combobox "select number of results":
  - option "5"
  - option "10" [selected]
  - option "25"
  - option "50"
  - option "100"
- text: entries
- paragraph: Claim Number
- paragraph: "144111"
- paragraph: Date of Service
- paragraph: From 04-01-2024 to 04-02-2024
- paragraph: Processed Date
- paragraph: "----"
- paragraph: Provider
- paragraph: nicole koepke
- paragraph: Payee
- paragraph: integra partners llc
- button "View Details"
- paragraph: "Total billed:"
- paragraph: $1,967.05
- paragraph: "Plan paid:"
- paragraph: $195.79
- separator
- paragraph: "Patient Liability:"
- paragraph: $48.95
- paragraph: Claim Number
- paragraph: "144000"
- paragraph: Date of Service
- paragraph: From 04-01-2024 to 01-02-2025
- paragraph: Processed Date
- paragraph: "----"
- paragraph: Provider
- paragraph: nicole koepke
- paragraph: Payee
- paragraph: integra partners llc
- button "View Details"
- paragraph: "Total billed:"
- paragraph: $1,967.05
- paragraph: "Plan paid:"
- paragraph: $195.79
- separator
- paragraph: "Patient Liability:"
- paragraph: $48.95
- list:
  - listitem:
    - link "‹":
      - /url: ""
  - listitem:
    - link "1":
      - /url: ""
  - listitem:
    - link "›":
      - /url: ""
```

# Test source

```ts
  259 |     const dateFilters = {
  260 |       '3 Months': 'LAST_3_MONTHSradio',
  261 |       '6 Months': 'LAST_6_MONTHSradio',
  262 |       '60 Months': 'LAST_60_MONTHSradio',
  263 |     };
  264 |
  265 |     const cleanLabel = label.trim();
  266 |     const filterId = dateFilters[cleanLabel];
  267 |
  268 |     if (!filterId) {
  269 |       console.log(`❌ Invalid filter label: ${label}`);
  270 |       return;
  271 |     }
  272 |
  273 |     console.log(`→ Filtering by: ${cleanLabel}`);
  274 |
  275 |     await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  276 |
  277 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
  278 |     await this.dateFilterButton.click();
  279 |
  280 |     const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  281 |     await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  282 |     await radioLocator.check();
  283 |
  284 |     await this.doneButton.click();
  285 |
  286 |     // Search by claim number
  287 |     console.log(`→ Searching for Claim Number: ${claimNumber}`);
  288 |     await this.claimNumberInput.waitFor({ state: 'visible', timeout: 5000 });
  289 |     await this.claimNumberInput.click();
  290 |     await this.claimNumberInput.fill('');
  291 |     await this.claimNumberInput.fill(claimNumber);
  292 |     await this.applyButton.click();
  293 |
  294 |     await this.page.waitForTimeout(3000);
  295 |
  296 |     const claims = await this.claimNumberLocator.all();
  297 |     if (claims.length === 0) {
  298 |       console.log(`❌ No claims found for ${cleanLabel}: ${claimNumber}`);
  299 |     } else {
  300 |       console.log(`✅ Claims found for ${cleanLabel}: ${claimNumber}`);
  301 |       for (const claim of claims) {
  302 |         const text = await claim.textContent();
  303 |         console.log(`→ Claim Number: ${text?.trim()}`);
  304 |       }
  305 |     }
  306 |
  307 |     await this.clearButton.click();
  308 |
  309 |   }
  310 |
  311 |
  312 |
  313 |
  314 |
  315 |
  316 |
  317 |
  318 |
  319 |   // async waitForContentToLoad() { work
  320 |   //   await this.page.waitForSelector('#openSummaryPrintTopBtn');
  321 |   // }
  322 |
  323 |   // // Optionally click the button (only if needed for layout/view changes, not real print)
  324 |   // async triggerPrintViewIfNeeded() {
  325 |   //   await this.openSummaryPrintTopBtn.click();
  326 |   // }
  327 |
  328 |   // async downloadPDF(outputPath = 'page-output.pdf') {
  329 |   //   await this.page.pdf({
  330 |   //     path: outputPath,
  331 |   //     format: 'A4',
  332 |   //     printBackground: true
  333 |   //   });
  334 |   // }
  335 |
  336 |
  337 |
  338 |   // calender custom date range
  339 |
  340 |
  341 |   async filterByCustomDateRangeAndPrintClaims(fromDate, toDate) {
  342 |     console.log(`→ Applying custom date range: ${fromDate} to ${toDate}`);
  343 |
  344 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 20000 });
  345 |     await this.dateFilterButton.click();
  346 |     await this.fromDateInput.click();
  347 |     await this.fromDateInput.fill(fromDate);
  348 |     await this.toDateInput.click();
  349 |     await this.toDateInput.fill(toDate);
  350 |     await this.doneButton.click();
  351 |
  352 |     await this.monthsdateverify.waitFor({ state: 'visible', timeout: 30000 }); // Increase timeout to 30 seconds
  353 |
  354 |     const dateText = await this.monthsdateverify.textContent();
  355 |     if (dateText?.trim()) {
  356 |       console.log(`✅ Date filter applied: ${dateText.trim()}`);
  357 |     }
  358 |
> 359 | await this.page.waitForSelector('table.claims-table', { state: 'visible', timeout: 30000 });
      |                 ^ Error: page.waitForSelector: Test timeout of 70000ms exceeded.
  360 |
  361 |     // Get claims
  362 |     const claims = await this.claimNumberLocator.all();
  363 |     if (claims.length === 0) {
  364 |       console.log(`❌ No claims found for range ${fromDate} to ${toDate}`);
  365 |     } else {
  366 |       console.log(`✅ Claims found for range ${fromDate} to ${toDate}:`);
  367 |       for (let i = 0; i < claims.length; i++) {
  368 |         const claim = claims[i];
  369 |         const text = await claim.textContent();
  370 |         console.log(`→ Claim Number: ${text?.trim()}`);
  371 |
  372 |         // Open and return for each claim
  373 |         await this.openClaimAndReturn(i + 1);
  374 |       }
  375 |     }
  376 |   }
  377 |
  378 |  async openClaimAndReturn(claimIndex) {
  379 |     if (claimIndex <= 0) {
  380 |         console.log(`❌ No claims available to open.`);
  381 |         return;
  382 |     }
  383 |
  384 |     console.log(`→ Opening claim ${claimIndex}...`);
  385 |
  386 |     const claimDetailButton = this.viewDetailsButton.nth(claimIndex - 1); // Use nth for 0-indexed array
  387 |     await claimDetailButton.click();
  388 |
  389 |     await this.page.waitForSelector('text=Claim Details', { timeout: 20000 });
  390 |     console.log(`✅ Claim ${claimIndex} details page opened.`);
  391 |
  392 |     await this.returnButton.click();
  393 |     console.log(`↩️ Returned to previous page after Claim ${claimIndex}.`);
  394 | }
  395 |
  396 |
  397 |   // async verifyNoResults() {
  398 |   //   await expect(this.noResultsText).toBeVisible();
  399 |   // }
  400 | }
  401 |
  402 |
  403 |
  404 |
  405 |
```