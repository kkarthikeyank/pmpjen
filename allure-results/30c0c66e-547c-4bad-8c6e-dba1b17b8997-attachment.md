# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: page.waitForSelector: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('text=Claim Details') to be visible

    at ClaimsPage.openClaimAndReturn (/home/karthi/pmp/src/pages/ClaimsPage.js:393:21)
    at ClaimsPage.filterByCustomDateRangeAndPrintClaims (/home/karthi/pmp/src/pages/ClaimsPage.js:382:9)
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
  293 |   await this.doneButton.click();
  294 |
  295 |   // Search by claim number
  296 |   console.log(`→ Searching for Claim Number: ${claimNumber}`);
  297 |   await this.claimNumberInput.waitFor({ state: 'visible', timeout: 5000 });
  298 |   await this.claimNumberInput.click();
  299 |   await this.claimNumberInput.fill('');
  300 |   await this.claimNumberInput.fill(claimNumber);
  301 |   await this.applyButton.click();
  302 |
  303 |   await this.page.waitForTimeout(3000);
  304 |
  305 |   const claims = await this.claimNumberLocator.all();
  306 |   if (claims.length === 0) {
  307 |     console.log(`❌ No claims found for ${cleanLabel}: ${claimNumber}`);
  308 |   } else {
  309 |     console.log(`✅ Claims found for ${cleanLabel}: ${claimNumber}`);
  310 |     for (const claim of claims) {
  311 |       const text = await claim.textContent();
  312 |       console.log(`→ Claim Number: ${text?.trim()}`);
  313 |     }
  314 |   }
  315 |
  316 |   await this.clearButton.click();
  317 |
  318 |  }
  319 |
  320 |
  321 |
  322 |  
  323 |  
  324 |
  325 |
  326 |   
  327 |
  328 |   // async waitForContentToLoad() { work
  329 |   //   await this.page.waitForSelector('#openSummaryPrintTopBtn');
  330 |   // }
  331 |
  332 |   // // Optionally click the button (only if needed for layout/view changes, not real print)
  333 |   // async triggerPrintViewIfNeeded() {
  334 |   //   await this.openSummaryPrintTopBtn.click();
  335 |   // }
  336 |
  337 |   // async downloadPDF(outputPath = 'page-output.pdf') {
  338 |   //   await this.page.pdf({
  339 |   //     path: outputPath,
  340 |   //     format: 'A4',
  341 |   //     printBackground: true
  342 |   //   });
  343 |   // }
  344 |
  345 |   
  346 |
  347 | // calender custom date range
  348 |
  349 |   
  350 |    async filterByCustomDateRangeAndPrintClaims(fromDate, toDate) {
  351 |     console.log(`→ Applying custom date range: ${fromDate} to ${toDate}`);
  352 |
  353 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 20000 });
  354 |     await this.dateFilterButton.click();
  355 |     await this.fromDateInput.click();
  356 |     await this.fromDateInput.fill(fromDate);
  357 |     await this.toDateInput.click();
  358 |     await this.toDateInput.fill(toDate);
  359 |     await this.doneButton.click();
  360 |
  361 |    await this.monthsdateverify.waitFor({ state: 'visible', timeout: 30000 }); // Increase timeout to 30 seconds
  362 |
  363 |     const dateText = await this.monthsdateverify.textContent();
  364 |     if (dateText?.trim()) {
  365 |       console.log(`✅ Date filter applied: ${dateText.trim()}`);
  366 |     }
  367 |
  368 |     await this.page.waitForTimeout(3000);
  369 |
  370 |     // Get claims
  371 |     const claims = await this.claimNumberLocator.all();
  372 |     if (claims.length === 0) {
  373 |       console.log(`❌ No claims found for range ${fromDate} to ${toDate}`);
  374 |     } else {
  375 |       console.log(`✅ Claims found for range ${fromDate} to ${toDate}:`);
  376 |       for (let i = 0; i < claims.length; i++) {
  377 |         const claim = claims[i];
  378 |         const text = await claim.textContent();
  379 |         console.log(`→ Claim Number: ${text?.trim()}`);
  380 |
  381 |         // Open and return for each claim
  382 |         await this.openClaimAndReturn(i + 1);
  383 |       }
  384 |     }
  385 |   }
  386 |
  387 |   async openClaimAndReturn(claimIndex) {
  388 |     console.log(`→ Opening claim ${claimIndex}...`);
  389 |     
  390 |     const claimDetailButton = this.viewDetailsButton.nth(claimIndex - 1); // Use nth for 0-indexed array
  391 |     await claimDetailButton.click();
  392 |
> 393 |     await this.page.waitForSelector('text=Claim Details', { timeout: 10000 });
      |                     ^ Error: page.waitForSelector: Test timeout of 70000ms exceeded.
  394 |     console.log(`✅ Claim ${claimIndex} details page opened.`);
  395 |
  396 |     await this.returnButton.click();
  397 |     console.log(`↩️ Returned to previous page after Claim ${claimIndex}.`);
  398 |   }
  399 |   
  400 |   // async verifyNoResults() {
  401 |   //   await expect(this.noResultsText).toBeVisible();
  402 |   // }
  403 |  }
  404 |
  405 |
  406 |
  407 |
  408 |
```