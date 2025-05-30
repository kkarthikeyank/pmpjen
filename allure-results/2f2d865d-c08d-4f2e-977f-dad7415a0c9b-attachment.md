# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: locator.click: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('//button[@tabindex=\'0\' and text()=\' View Details \']').nth(1)

    at ClaimsPage.openClaimAndReturn (/home/karthi/pmp/src/pages/ClaimsPage.js:349:29)
    at ClaimsPage.filterByCustomDateRangeAndPrintClaims (/home/karthi/pmp/src/pages/ClaimsPage.js:336:20)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:134:5
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
- button "11-20-2024 - 05-20-2025"
- button "Apply"
- button "Clear"
- text: "Date range: from 11-20-2024 to 05-20-2025"
- button "Download Summary by Filter" [disabled]
- button "Filter Results"
- text: "Filters: Show"
- combobox "select number of results" [disabled]:
  - option "5"
  - option "10" [selected]
  - option "25"
  - option "50"
  - option "100"
- text: entries No matching results were found.
```

# Test source

```ts
  249 |   // senario  search by claim number
  250 |
  251 |   async searchclaimnumber(label, claimNumber) {
  252 |
  253 |     const dateFilters = {
  254 |       '3 Months': 'LAST_3_MONTHSradio',
  255 |       '6 Months': 'LAST_6_MONTHSradio',
  256 |       '60 Months': 'LAST_60_MONTHSradio',
  257 |     };
  258 |
  259 |     const cleanLabel = label.trim();
  260 |     const filterId = dateFilters[cleanLabel];
  261 |
  262 |     if (!filterId) {
  263 |       console.log(`❌ Invalid filter label: ${label}`);
  264 |       return;
  265 |     }
  266 |
  267 |     console.log(`→ Filtering by: ${cleanLabel}`);
  268 |
  269 |     await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  270 |
  271 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
  272 |     await this.dateFilterButton.click();
  273 |
  274 |     const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  275 |     await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  276 |     await radioLocator.check();
  277 |
  278 |     await this.doneButton.click();
  279 |
  280 |     // Search by claim number
  281 |     console.log(`→ Searching for Claim Number: ${claimNumber}`);
  282 |     await this.claimNumberInput.waitFor({ state: 'visible', timeout: 5000 });
  283 |     await this.claimNumberInput.click();
  284 |     await this.claimNumberInput.fill('');
  285 |     await this.claimNumberInput.fill(claimNumber);
  286 |     await this.applyButton.click();
  287 |
  288 |     await this.page.waitForTimeout(3000);
  289 |
  290 |     const claims = await this.claimNumberLocator.all();
  291 |     if (claims.length === 0) {
  292 |       console.log(`❌ No claims found for ${cleanLabel}: ${claimNumber}`);
  293 |     } else {
  294 |       console.log(`✅ Claims found for ${cleanLabel}: ${claimNumber}`);
  295 |       for (const claim of claims) {
  296 |         const text = await claim.textContent();
  297 |         console.log(`→ Claim Number: ${text?.trim()}`);
  298 |       }
  299 |     }
  300 |
  301 |     await this.clearButton.click();
  302 |
  303 |   }
  304 |
  305 |   // scenario  Filter by custom date range and print claims
  306 |
  307 |   async filterByCustomDateRangeAndPrintClaims(fromDate, toDate) {
  308 |     console.log(`→ Applying custom date range: ${fromDate} to ${toDate}`);
  309 |
  310 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 20000 });
  311 |     await this.dateFilterButton.click();
  312 |     await this.fromDateInput.fill(fromDate);
  313 |     await this.toDateInput.fill(toDate);
  314 |     await this.doneButton.click();
  315 |
  316 |     await this.monthsdateverify.waitFor({ state: 'visible', timeout: 50000 });
  317 |
  318 |     const dateText = await this.monthsdateverify.textContent();
  319 |     if (dateText?.trim()) {
  320 |       console.log(`✅ Date filter applied: ${dateText.trim()}`);
  321 |     }
  322 |
  323 |     const claims = await this.claimNumberLocator.all();
  324 |     if (claims.length === 0) {
  325 |       console.log(`❌ No claims found for range ${fromDate} to ${toDate}`);
  326 |     } else {
  327 |       console.log(`✅ Claims found for range ${fromDate} to ${toDate}:`);
  328 |       for (let i = 0; i < claims.length; i++) {
  329 |         const claim = claims[i];
  330 |         // const text = await claim.textContent();
  331 |         // console.log(`→ Claim Number: ${text?.trim()}`);
  332 |
  333 |         const count = await this.page.locator('//p[@data-id="claimsCardClaimNumber"]').count();
  334 |         console.log(`→ Number of claim elements: ${count}`);
  335 |
  336 |         await this.openClaimAndReturn(i + 1);
  337 |       }
  338 |     }
  339 |   }
  340 |
  341 |   async openClaimAndReturn(claimIndex) {
  342 |     if (claimIndex <= 0) {
  343 |       console.log(`❌ No claims available to open.`);
  344 |       return;
  345 |     }
  346 |
  347 |     console.log(`→ Opening claim ${claimIndex}...`);
  348 |     const claimDetailButton = this.viewDetailsButton.nth(claimIndex - 1);
> 349 |     await claimDetailButton.click();
      |                             ^ Error: locator.click: Test timeout of 70000ms exceeded.
  350 |
  351 |     await this.page.waitForSelector('text=Claim Details', { timeout: 20000 });
  352 |     console.log(`✅ Claim ${claimIndex} details page opened.`);
  353 |
  354 |     await this.returnButton.waitFor({ state: 'visible', timeout: 30000 });
  355 |     await this.returnButton.click();
  356 |     console.log(`↩️ Returned to previous page after Claim ${claimIndex}.`);
  357 |
  358 |     await this.clearButton.click();
  359 |
  360 |   }
  361 |
  362 |
  363 |   // async waitForContentToLoad() { work
  364 |   //   await this.page.waitForSelector('#openSummaryPrintTopBtn');
  365 |   // }
  366 |
  367 |   // // Optionally click the button (only if needed for layout/view changes, not real print)
  368 |   // async triggerPrintViewIfNeeded() {
  369 |   //   await this.openSummaryPrintTopBtn.click();
  370 |   // }
  371 |
  372 |   // async downloadPDF(outputPath = 'page-output.pdf') {
  373 |   //   await this.page.pdf({
  374 |   //     path: outputPath,
  375 |   //     format: 'A4',
  376 |   //     printBackground: true
  377 |   //   });
  378 |   // }
  379 |
  380 |
  381 |
  382 |
  383 |
  384 | }
```