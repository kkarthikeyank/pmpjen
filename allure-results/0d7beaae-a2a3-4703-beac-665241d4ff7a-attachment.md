# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: page.waitForSelector: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('text=Claim Details') to be visible

    at ClaimsPage.openClaimAndReturn (/home/karthi/pmp/src/pages/ClaimsPage.js:356:21)
    at ClaimsPage.filterByCustomDateRangeAndPrintClaims (/home/karthi/pmp/src/pages/ClaimsPage.js:336:9)
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
- status: Loading...
```

# Test source

```ts
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
  348 |
  349 |     const claimDetailButton = this.viewDetailsButton.nth(claimIndex - 1);
  350 |     await claimDetailButton.waitFor({ state: 'visible', timeout: 10000 });
  351 |    await claimDetailButton.click();
  352 |
  353 |     // const claimDetailButton = this.viewDetailsButton.nth(claimIndex - 1);
  354 |     // await claimDetailButton.click();
  355 |
> 356 |     await this.page.waitForSelector('text=Claim Details', { timeout: 20000 });
      |                     ^ Error: page.waitForSelector: Test timeout of 70000ms exceeded.
  357 |     console.log(`✅ Claim ${claimIndex} details page opened.`);
  358 |
  359 |     await this.returnButton.waitFor({ state: 'visible', timeout: 30000 });
  360 |     await this.returnButton.click();
  361 |     console.log(`↩️ Returned to previous page after Claim ${claimIndex}.`);
  362 |
  363 |     await this.clearButton.click();
  364 |
  365 |   }
  366 |
  367 |
  368 |   // async waitForContentToLoad() { work
  369 |   //   await this.page.waitForSelector('#openSummaryPrintTopBtn');
  370 |   // }
  371 |
  372 |   // // Optionally click the button (only if needed for layout/view changes, not real print)
  373 |   // async triggerPrintViewIfNeeded() {
  374 |   //   await this.openSummaryPrintTopBtn.click();
  375 |   // }
  376 |
  377 |   // async downloadPDF(outputPath = 'page-output.pdf') {
  378 |   //   await this.page.pdf({
  379 |   //     path: outputPath,
  380 |   //     format: 'A4',
  381 |   //     printBackground: true
  382 |   //   });
  383 |   // }
  384 |
  385 |
  386 |
  387 |
  388 |
  389 | }
```