# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: page.waitForSelector: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('text=Claim Details') to be visible

    at ClaimsPage.openClaimAndReturn (/home/karthi/pmp/src/pages/ClaimsPage.js:389:21)
    at ClaimsPage.filterByCustomDateRangeAndPrintClaims (/home/karthi/pmp/src/pages/ClaimsPage.js:373:9)
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
- status: Loading...
```

# Test source

```ts
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
  359 | // Wait for either claims table or a no-results message to appear
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
> 389 |     await this.page.waitForSelector('text=Claim Details', { timeout: 20000 });
      |                     ^ Error: page.waitForSelector: Test timeout of 70000ms exceeded.
  390 |     console.log(`✅ Claim ${claimIndex} details page opened.`);
  391 |     
  392 |     await this.returnButton.waitFor({ state: 'visible', timeout: 30000 });
  393 |
  394 |     await this.returnButton.click();
  395 |     console.log(`↩️ Returned to previous page after Claim ${claimIndex}.`);
  396 | }
  397 |
  398 |
  399 |   // async verifyNoResults() {
  400 |   //   await expect(this.noResultsText).toBeVisible();
  401 |   // }
  402 | }
  403 |
  404 |
  405 |
  406 |
  407 |
```