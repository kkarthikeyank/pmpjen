# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: locator.waitFor: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('//button[@id=\'dropdownDateFilterButton\']') to be visible

    at ClaimsPage.filterByCustomDateRangeAndPrintClaims (/home/karthi/pmp/src/pages/ClaimsPage.js:359:33)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:113:18
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
- status
```

# Test source

```ts
  259 |
  260 |     const dateFilters = {
  261 |       '3 Months': 'LAST_3_MONTHSradio',
  262 |       '6 Months': 'LAST_6_MONTHSradio',
  263 |       '60 Months': 'LAST_60_MONTHSradio',
  264 |     };
  265 |
  266 |     const cleanLabel = label.trim();
  267 |     const filterId = dateFilters[cleanLabel];
  268 |
  269 |     if (!filterId) {
  270 |       console.log(`❌ Invalid filter label: ${label}`);
  271 |       return;
  272 |     }
  273 |
  274 |     console.log(`→ Filtering by: ${cleanLabel}`);
  275 |
  276 |     await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  277 |
  278 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
  279 |     await this.dateFilterButton.click();
  280 |
  281 |     const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  282 |     await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  283 |     await radioLocator.check();
  284 |
  285 |     await this.doneButton.click();
  286 |
  287 |     // Search by claim number
  288 |     console.log(`→ Searching for Claim Number: ${claimNumber}`);
  289 |     await this.claimNumberInput.waitFor({ state: 'visible', timeout: 5000 });
  290 |     await this.claimNumberInput.click();
  291 |     await this.claimNumberInput.fill('');
  292 |     await this.claimNumberInput.fill(claimNumber);
  293 |     await this.applyButton.click();
  294 |
  295 |     await this.page.waitForTimeout(3000);
  296 |
  297 |     const claims = await this.claimNumberLocator.all();
  298 |     if (claims.length === 0) {
  299 |       console.log(`❌ No claims found for ${cleanLabel}: ${claimNumber}`);
  300 |     } else {
  301 |       console.log(`✅ Claims found for ${cleanLabel}: ${claimNumber}`);
  302 |       for (const claim of claims) {
  303 |         const text = await claim.textContent();
  304 |         console.log(`→ Claim Number: ${text?.trim()}`);
  305 |       }
  306 |     }
  307 |
  308 |     await this.clearButton.click();
  309 |
  310 |   }
  311 |
  312 |
  313 |   async selectProvidersByNames(verifyNames) {
  314 |     const count = await this.providerBlocks.count();
  315 |
  316 |     for (let i = 0; i < count; i++) {
  317 |       const container = this.providerBlocks.nth(i);
  318 |       const nameElement = container.locator('div.me-2');
  319 |       const nameText = (await nameElement.innerText()).trim();
  320 |
  321 |       if (verifyNames.includes(nameText)) {
  322 |         await container.locator('input[type="checkbox"]').check(); // ensures checkbox is checked
  323 |         console.log(`✔ Selected provider: ${nameText}`);
  324 |       } else {
  325 |         console.log(`✖ Skipped: ${nameText}`);
  326 |       }
  327 |     }
  328 |
  329 |   }
  330 |
  331 |
  332 |
  333 |
  334 |   // async waitForContentToLoad() { work
  335 |   //   await this.page.waitForSelector('#openSummaryPrintTopBtn');
  336 |   // }
  337 |
  338 |   // // Optionally click the button (only if needed for layout/view changes, not real print)
  339 |   // async triggerPrintViewIfNeeded() {
  340 |   //   await this.openSummaryPrintTopBtn.click();
  341 |   // }
  342 |
  343 |   // async downloadPDF(outputPath = 'page-output.pdf') {
  344 |   //   await this.page.pdf({
  345 |   //     path: outputPath,
  346 |   //     format: 'A4',
  347 |   //     printBackground: true
  348 |   //   });
  349 |   // }
  350 |
  351 |
  352 |
  353 |   // calender custom date range
  354 |
  355 |
  356 |   async filterByCustomDateRangeAndPrintClaims(fromDate, toDate) {
  357 |     console.log(`→ Applying custom date range: ${fromDate} to ${toDate}`);
  358 |
> 359 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 20000 });
      |                                 ^ Error: locator.waitFor: Test timeout of 70000ms exceeded.
  360 |     await this.dateFilterButton.click();
  361 |     await this.fromDateInput.click();
  362 |     await this.fromDateInput.fill(fromDate);
  363 |     await this.toDateInput.click();
  364 |     await this.toDateInput.fill(toDate);
  365 |     await this.doneButton.click();
  366 |
  367 |     await this.monthsdateverify.waitFor({ state: 'visible', timeout: 30000 }); // Increase timeout to 30 seconds
  368 |
  369 |     const dateText = await this.monthsdateverify.textContent();
  370 |     if (dateText?.trim()) {
  371 |       console.log(`✅ Date filter applied: ${dateText.trim()}`);
  372 |     }
  373 |
  374 | // Wait for either claims table or a no-results message to appear
  375 |
  376 |     // Get claims
  377 |     const claims = await this.claimNumberLocator.all();
  378 |     if (claims.length === 0) {
  379 |       console.log(`❌ No claims found for range ${fromDate} to ${toDate}`);
  380 |     } else {
  381 |       console.log(`✅ Claims found for range ${fromDate} to ${toDate}:`);
  382 |       for (let i = 0; i < claims.length; i++) {
  383 |         const claim = claims[i];
  384 |         const text = await claim.textContent();
  385 |         console.log(`→ Claim Number: ${text?.trim()}`);
  386 |
  387 |         // Open and return for each claim
  388 |         await this.openClaimAndReturn(i + 1);
  389 |       }  
  390 |     }
  391 |   }
  392 |
  393 |  async openClaimAndReturn(claimIndex) {
  394 |     if (claimIndex <= 0) {
  395 |         console.log(`❌ No claims available to open.`);
  396 |         return;
  397 |     }
  398 |
  399 |     console.log(`→ Opening claim ${claimIndex}...`);
  400 |
  401 |     const claimDetailButton = this.viewDetailsButton.nth(claimIndex - 1); // Use nth for 0-indexed array
  402 |     await claimDetailButton.click();
  403 |
  404 |     await this.page.waitForSelector('text=Claim Details', { timeout: 20000 });
  405 |     console.log(`✅ Claim ${claimIndex} details page opened.`);
  406 |     
  407 |     await this.returnButton.waitFor({ state: 'visible', timeout: 30000 });
  408 |
  409 |     await this.returnButton.click();
  410 |     console.log(`↩️ Returned to previous page after Claim ${claimIndex}.`);
  411 | }
  412 |
  413 |
  414 |   // async verifyNoResults() {
  415 |   //   await expect(this.noResultsText).toBeVisible();
  416 |   // }
  417 | }
  418 |
  419 |
  420 |
  421 |
  422 |
```