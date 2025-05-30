# Test info

- Name: Claims Page Tests >> Filter by date and select specific providers
- Location: /home/karthi/pmp/src/tests/claimspagegroup.spec.js:36:3

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('//input[@id=\'LAST_60_MONTHSradio\']') to be visible

    at Function.filterClaimsAndSelectProviders (/home/karthi/pmp/src/pages/ClaimsPage.js:406:24)
    at /home/karthi/pmp/src/tests/claimspagegroup.spec.js:38:5
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
- button "11-19-2024 - 05-19-2025" [expanded]
- list:
  - listitem:
    - radio "Last 3 Months"
    - text: Last 3 Months
  - listitem:
    - radio "Last 6 Months" [checked]
    - text: Last 6 Months
  - listitem:
    - radio "Last 12 Months"
    - text: Last 12 Months
  - listitem:
    - radio "Last 24 Months"
    - text: Last 24 Months
  - listitem:
    - radio "Last 36 Months"
    - text: Last 36 Months
  - listitem:
    - radio "Last 60 Months"
    - text: Last 60 Months
  - listitem:
    - radio "Custom"
    - text: Custom
  - text: "From :"
  - textbox "Use enter key to pick a date from calendar widget or Enter the date"
  - button "Select From Date"
  - text: "To :"
  - textbox "Use enter key to pick a date from calendar widget or Enter the date"
  - button "Select To Date"
  - button "Done"
- button "Apply"
- button "Clear"
- text: "Date range: from 11-19-2024 to 05-19-2025"
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
  306 |     }
  307 |
  308 |     await this.clearButton.click();
  309 |
  310 |   }
  311 |
  312 |   // scenario  Filter by custom date range and print claims
  313 |
  314 |   async filterByCustomDateRangeAndPrintClaims(fromDate, toDate) {
  315 |     console.log(`→ Applying custom date range: ${fromDate} to ${toDate}`);
  316 |
  317 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 20000 });
  318 |     await this.dateFilterButton.click();
  319 |     await this.fromDateInput.fill(fromDate);
  320 |     await this.toDateInput.fill(toDate);
  321 |     await this.doneButton.click();
  322 |
  323 |     await this.monthsdateverify.waitFor({ state: 'visible', timeout: 30000 });
  324 |
  325 |     const dateText = await this.monthsdateverify.textContent();
  326 |     if (dateText?.trim()) {
  327 |       console.log(`✅ Date filter applied: ${dateText.trim()}`);
  328 |     }
  329 |
  330 |     const claims = await this.claimNumberLocator.all();
  331 |     if (claims.length === 0) {
  332 |       console.log(`❌ No claims found for range ${fromDate} to ${toDate}`);
  333 |     } else {
  334 |       console.log(`✅ Claims found for range ${fromDate} to ${toDate}:`);
  335 |       for (let i = 0; i < claims.length; i++) {
  336 |         const claim = claims[i];
  337 |         const text = await claim.textContent();
  338 |         console.log(`→ Claim Number: ${text?.trim()}`);
  339 |         await this.openClaimAndReturn(i + 1);
  340 |       }
  341 |     }
  342 |   }
  343 |
  344 |   async openClaimAndReturn(claimIndex) {
  345 |     if (claimIndex <= 0) {
  346 |       console.log(`❌ No claims available to open.`);
  347 |       return;
  348 |     }
  349 |
  350 |     console.log(`→ Opening claim ${claimIndex}...`);
  351 |     const claimDetailButton = this.viewDetailsButton.nth(claimIndex - 1);
  352 |     await claimDetailButton.click();
  353 |
  354 |     await this.page.waitForSelector('text=Claim Details', { timeout: 20000 });
  355 |     console.log(`✅ Claim ${claimIndex} details page opened.`);
  356 |
  357 |     await this.returnButton.waitFor({ state: 'visible', timeout: 30000 });
  358 |     await this.returnButton.click();
  359 |     console.log(`↩️ Returned to previous page after Claim ${claimIndex}.`);
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
  382 |   // calender custom date range
  383 |    
  384 |  
  385 |   static dateFilters = {
  386 |     '3 Months': 'LAST_3_MONTHSradio',
  387 |     '6 Months': 'LAST_6_MONTHSradio',
  388 |     '60 Months': 'LAST_60_MONTHSradio',
  389 |   };
  390 |
  391 |   // 🔄 Combined method
  392 |   static async filterClaimsAndSelectProviders(page, dateFilterButton, doneButton, filterResultsButton, providerBlocks, label, providerNames) {
  393 |     const filterId = ClaimsPage.dateFilters[label];
  394 |     if (!filterId) {
  395 |       console.log(`Invalid filter label: ${label}`);
  396 |       return;
  397 |     }
  398 |
  399 |     console.log(`Filtering by: ${label}`);
  400 |     await page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  401 |
  402 |     await dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
  403 |     await dateFilterButton.click();
  404 |
  405 |     const radioLocator = page.locator(`//input[@id='${filterId}']`);
> 406 |     await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
      |                        ^ Error: locator.waitFor: Target page, context or browser has been closed
  407 |     await radioLocator.check();
  408 |
  409 |     await doneButton.click();
  410 |
  411 |     await filterResultsButton.click();
  412 |     console.log("[INFO] Filter panel opened.");
  413 |
  414 |     // Select providers
  415 |     const count = await providerBlocks.count();
  416 |
  417 |     for (let i = 0; i < count; i++) {
  418 |       const container = providerBlocks.nth(i);
  419 |       const nameElement = container.locator('div.me-2');
  420 |       const nameText = (await nameElement.innerText()).trim();
  421 |
  422 |       if (providerNames.includes(nameText)) {
  423 |         await container.locator('input[type="checkbox"]').check();
  424 |         console.log(`✔ Selected provider: ${nameText}`);
  425 |       } else {
  426 |         console.log(`✖ Skipped: ${nameText}`);
  427 |       }
  428 |     }
  429 |   }
  430 |
  431 | }
  432 |
```