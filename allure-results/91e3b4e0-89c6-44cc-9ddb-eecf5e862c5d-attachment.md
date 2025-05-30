# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('//button[@tabindex=\'0\' and text()=\' View Details \']').nth(1)

    at ClaimsPage.openClaimAndReturn (/home/karthi/pmp/src/pages/ClaimsPage.js:350:27)
    at ClaimsPage.filterByCustomDateRangeAndPrintClaims (/home/karthi/pmp/src/pages/ClaimsPage.js:335:20)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:114:5
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
- button "11-22-2024 - 05-22-2025"
- button "Apply"
- button "Clear"
- text: "Date range: from 11-22-2024 to 05-22-2025"
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
  250 |   async searchclaimnumber(label, claimNumber) {
  251 |
  252 |     const dateFilters = {
  253 |       '3 Months': 'LAST_3_MONTHSradio',
  254 |       '6 Months': 'LAST_6_MONTHSradio',
  255 |       '60 Months': 'LAST_60_MONTHSradio',
  256 |     };
  257 |
  258 |     const cleanLabel = label.trim();
  259 |     const filterId = dateFilters[cleanLabel];
  260 |
  261 |     if (!filterId) {
  262 |       console.log(`❌ Invalid filter label: ${label}`);
  263 |       return;
  264 |     }
  265 |
  266 |     console.log(`→ Filtering by: ${cleanLabel}`);
  267 |
  268 |     await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  269 |
  270 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
  271 |     await this.dateFilterButton.click();
  272 |
  273 |     const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  274 |     await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  275 |     await radioLocator.check();
  276 |
  277 |     await this.doneButton.click();
  278 |
  279 |     // Search by claim number
  280 |     console.log(`→ Searching for Claim Number: ${claimNumber}`);
  281 |     await this.claimNumberInput.waitFor({ state: 'visible', timeout: 5000 });
  282 |     await this.claimNumberInput.click();
  283 |     await this.claimNumberInput.fill('');
  284 |     await this.claimNumberInput.fill(claimNumber);
  285 |     await this.applyButton.click();
  286 |
  287 |     await this.page.waitForTimeout(3000);
  288 |
  289 |     const claims = await this.claimNumberLocator.all();
  290 |     if (claims.length === 0) {
  291 |       console.log(`❌ No claims found for ${cleanLabel}: ${claimNumber}`);
  292 |     } else {
  293 |       console.log(`✅ Claims found for ${cleanLabel}: ${claimNumber}`);
  294 |       for (const claim of claims) {
  295 |         const text = await claim.textContent();
  296 |         console.log(`→ Claim Number: ${text?.trim()}`);
  297 |       }
  298 |     }
  299 |
  300 |     await this.clearButton.click();
  301 |
  302 |   }
  303 |
  304 |   // scenario  Filter by custom date range and print claims
  305 |
  306 |   async filterByCustomDateRangeAndPrintClaims(fromDate, toDate) {
  307 |     console.log(`→ Applying custom date range: ${fromDate} to ${toDate}`);
  308 |
  309 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 20000 });
  310 |     await this.dateFilterButton.click();
  311 |     await this.fromDateInput.fill(fromDate);
  312 |     await this.toDateInput.fill(toDate);
  313 |     await this.doneButton.click();
  314 |
  315 |     await this.monthsdateverify.waitFor({ state: 'visible', timeout: 50000 });
  316 |
  317 |     const dateText = await this.monthsdateverify.textContent();
  318 |     if (dateText?.trim()) {
  319 |       console.log(`✅ Date filter applied: ${dateText.trim()}`);
  320 |     }
  321 |
  322 |     const claims = await this.claimNumberLocator.all();
  323 |     if (claims.length === 0) {
  324 |       console.log(`❌ No claims found for range ${fromDate} to ${toDate}`);
  325 |     } else {
  326 |       console.log(`✅ Claims found for range ${fromDate} to ${toDate}:`);
  327 |       for (let i = 0; i < claims.length; i++) {
  328 |         const claim = claims[i];
  329 |         // const text = await claim.textContent();
  330 |         // console.log(`→ Claim Number: ${text?.trim()}`);
  331 |
  332 |         const count = await this.page.locator('//p[@data-id="claimsCardClaimNumber"]').count();
  333 |         console.log(`→ Number of claim elements: ${count}`);
  334 |
  335 |         await this.openClaimAndReturn(i + 1);
  336 |       }
  337 |     }
  338 |   }
  339 |
  340 |  async openClaimAndReturn(claimIndex) {
  341 |   if (claimIndex <= 0) {
  342 |     console.log(`❌ No claims available to open.`);
  343 |     return;
  344 |   }
  345 |
  346 |   console.log(`→ Opening claim ${claimIndex}...`);
  347 |
  348 |   const claimDetailButton = this.viewDetailsButton.nth(claimIndex - 1);
  349 |
> 350 |   await claimDetailButton.scrollIntoViewIfNeeded();
      |                           ^ Error: locator.scrollIntoViewIfNeeded: Test timeout of 70000ms exceeded.
  351 |   await claimDetailButton.waitFor({ state: 'visible', timeout: 10000 });
  352 |   await claimDetailButton.click();
  353 |
  354 |   // Wait for navigation or content update
  355 |   try {
  356 |     await this.page.waitForSelector('text=Claim Details', { timeout: 30000 });
  357 |     console.log(`✅ Claim ${claimIndex} details page opened.`);
  358 |   } catch (e) {
  359 |     console.error(`❌ Timed out waiting for Claim ${claimIndex} details to load.`);
  360 |     return;
  361 |   }
  362 |
  363 |   await this.returnButton.waitFor({ state: 'visible', timeout: 30000 });
  364 |   await this.returnButton.click();
  365 |   console.log(`↩️ Returned to previous page after Claim ${claimIndex}.`);
  366 |
  367 |   // Optional: Ensure return completes before clicking clear
  368 |   await this.page.waitForLoadState('networkidle');
  369 |   await this.clearButton.waitFor({ state: 'visible', timeout: 10000 });
  370 |   await this.clearButton.click();
  371 | }
  372 |
  373 |
  374 |   // async waitForContentToLoad() { work
  375 |   //   await this.page.waitForSelector('#openSummaryPrintTopBtn');
  376 |   // }
  377 |
  378 |   // // Optionally click the button (only if needed for layout/view changes, not real print)
  379 |   // async triggerPrintViewIfNeeded() {
  380 |   //   await this.openSummaryPrintTopBtn.click();
  381 |   // }
  382 |
  383 |   // async downloadPDF(outputPath = 'page-output.pdf') {
  384 |   //   await this.page.pdf({
  385 |   //     path: outputPath,
  386 |   //     format: 'A4',
  387 |   //     printBackground: true
  388 |   //   });
  389 |   // }
  390 |
  391 |
  392 |
  393 |
  394 |
  395 | }
```