# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: locator.fill: Test timeout of 70000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Claim Number' })
    - locator resolved to <input type="text" _ngcontent-mln-c277="" placeholder="ex. 123455" formcontrolname="filterId" id="claimsFilterIdSearchInput" data-id="claimsFilterIdSearchInputDataId" class="form-control ng-untouched ng-pristine ng-valid"/>
    - fill("")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

    at ClaimsPage.searchclaimnumber (/home/karthi/pmp/src/pages/ClaimsPage.js:447:33)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:108:5
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
- button "05-26-2020 - 05-26-2025"
- button "Apply"
- button "Clear"
- text: "Date range: from 05-26-2020 to 05-26-2025"
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
- paragraph: "144114"
- paragraph: Date of Service
- paragraph: From 01-01-2024 to 01-03-2024
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
- paragraph: "144115"
- paragraph: Date of Service
- paragraph: From 01-06-2024 to 01-10-2024
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
  347 | //     }
  348 |
  349 | //     for (const name of filters.payees || []) {
  350 | //       await tryUncheck('payee', name);
  351 | //     }
  352 |
  353 | //     for (const name of filters.diagnoses || []) {
  354 | //       await tryUncheck('diagnosis', name);
  355 | //     }
  356 |
  357 | //     await this.applyFiltersButton.click();
  358 | //     console.log('[INFO] Unchecked filters applied');
  359 | //     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  360 | //     console.log('[INFO] Page scrolled to bottom');
  361 | //   }
  362 |
  363 |
  364 |
  365 |
  366 |
  367 |   //  scenario Filter by date range and print claims
  368 |
  369 |   async filterAndPrintClaimsByLabel(label) {
  370 |     const dateFilters = {
  371 |       '3 Months': 'LAST_3_MONTHSradio',
  372 |       '6 Months': 'LAST_6_MONTHSradio',
  373 |       '60 Months': 'LAST_60_MONTHSradio',
  374 |     };
  375 |
  376 |     const filterId = dateFilters[label];
  377 |     if (!filterId) {
  378 |       console.log(`Invalid filter label: ${label}`);
  379 |       return;
  380 |     }
  381 |
  382 |     console.log(`Filtering by: ${label}`);
  383 |     await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  384 |
  385 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
  386 |     await this.dateFilterButton.click();
  387 |
  388 |     const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  389 |     await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  390 |     await radioLocator.check();
  391 |
  392 |     await this.doneButton.click();
  393 |
  394 |     await this.page.waitForTimeout(3000); // Replace with smarter wait if needed
  395 |
  396 |     const claims = await this.claimNumberLocator.all();
  397 |     if (claims.length === 0) {
  398 |       console.log("No claims found");
  399 |     } else {
  400 |       console.log(`Claims found for ${label}:`);
  401 |       for (const claim of claims) {
  402 |         const text = await claim.textContent();
  403 |         console.log(`Claim Number: ${text?.trim()}`);
  404 |       }
  405 |     }
  406 |
  407 |
  408 |   }  
  409 |
  410 |   
  411 |
  412 |   // senario  search by claim number with date range filter 
  413 |
  414 |   async searchclaimnumber(label, claimNumber) {
  415 |
  416 |     const dateFilters = {
  417 |       '3 Months': 'LAST_3_MONTHSradio',
  418 |       '6 Months': 'LAST_6_MONTHSradio',
  419 |       '60 Months': 'LAST_60_MONTHSradio',
  420 |     };
  421 |
  422 |     const cleanLabel = label.trim();
  423 |     const filterId = dateFilters[cleanLabel];
  424 |
  425 |     if (!filterId) {
  426 |       console.log(`❌ Invalid filter label: ${label}`);
  427 |       return;
  428 |     }
  429 |
  430 |     console.log(`→ Filtering by: ${cleanLabel}`);
  431 |
  432 |     await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  433 |
  434 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
  435 |     await this.dateFilterButton.click();
  436 |
  437 |     const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  438 |     await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  439 |     await radioLocator.check();
  440 |
  441 |     await this.doneButton.click();
  442 |
  443 |     // Search by claim number
  444 |     console.log(`→ Searching for Claim Number: ${claimNumber}`);
  445 |     await this.claimNumberInput.waitFor({ state: 'visible', timeout: 5000 });
  446 |     await this.claimNumberInput.click();
> 447 |     await this.claimNumberInput.fill('');
      |                                 ^ Error: locator.fill: Test timeout of 70000ms exceeded.
  448 |     await this.claimNumberInput.fill(claimNumber);
  449 |     await this.applyButton.click();
  450 |
  451 |     await this.page.waitForTimeout(3000);
  452 |
  453 |     const claims = await this.claimNumberLocator.all();
  454 |     if (claims.length === 0) {
  455 |       console.log(`❌ No claims found for ${cleanLabel}: ${claimNumber}`);
  456 |     } else {
  457 |       console.log(`✅ Claims found for ${cleanLabel}: ${claimNumber}`);
  458 |       for (const claim of claims) {
  459 |         const text = await claim.textContent();
  460 |         console.log(`→ Claim Number: ${text?.trim()}`);
  461 |       }
  462 |     }
  463 |
  464 |     await this.clearButton.click();
  465 |
  466 |   }
  467 |
  468 |   // scenario  Filter by custom date range and print claims
  469 |
  470 |  
  471 |   async filterByCustomDateRangeAndPrintClaims(fromDate, toDate) {
  472 |     console.log(`→ Applying custom date range: ${fromDate} to ${toDate}`);
  473 |
  474 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 20000 });
  475 |     await this.dateFilterButton.click();
  476 |     await this.fromDateInput.fill(fromDate);
  477 |     await this.toDateInput.fill(toDate);
  478 |     await this.doneButton.click();
  479 |
  480 |     await this.monthsdateverify.waitFor({ state: 'visible', timeout: 50000 });
  481 |
  482 |     const dateText = await this.monthsdateverify.textContent();
  483 |     if (dateText?.trim()) {
  484 |       console.log(`✅ Date filter applied: ${dateText.trim()}`);
  485 |     }
  486 |
  487 |     const claims = await this.viewDetailsButton.all(); // get all claim buttons
  488 |     const claimCount = claims.length;
  489 |
  490 |     if (claimCount === 0) {
  491 |       console.log(`❌ No claims found for range ${fromDate} to ${toDate}`);
  492 |       return;
  493 |     }
  494 |
  495 |     console.log(`✅ Claims found for range ${fromDate} to ${toDate}:`);
  496 |     console.log(`→ Number of claim elements: ${claimCount}`);
  497 |
  498 |     for (let i = 0; i < claimCount; i++) {
  499 |       await this.openClaimDirectly(claims[i], i + 1);
  500 |     }
  501 |
  502 |     // Clear filters after viewing all claims
  503 |     await this.clearButton.waitFor({ state: 'visible', timeout: 10000 });
  504 |     await this.clearButton.click();
  505 |     console.log(`🧹 Cleared filters after viewing all claims.`);
  506 |   }
  507 |
  508 |   async openClaimDirectly(claimLocator, claimIndex) {
  509 |     console.log(`→ Opening claim ${claimIndex}...`);
  510 |
  511 |     try {
  512 |       await claimLocator.waitFor({ state: 'visible', timeout: 10000 });
  513 |       await claimLocator.click();
  514 |     } catch (e) {
  515 |       console.error(`❌ Could not open claim ${claimIndex}`);
  516 |       return;
  517 |     }
  518 |
  519 |     try {
  520 |       await this.page.waitForSelector('text=Claim Details', { timeout: 30000 });
  521 |       console.log(`✅ Claim ${claimIndex} details page opened.`);
  522 |     } catch (e) {
  523 |       console.error(`❌ Claim ${claimIndex} details did not load in time.`);
  524 |       return;
  525 |     }
  526 |
  527 |     await this.returnButton.waitFor({ state: 'visible', timeout: 30000 });
  528 |     await this.returnButton.click();
  529 |     console.log(`↩️ Returned to previous page after Claim ${claimIndex}.`);
  530 |
  531 |     await this.page.waitForLoadState('networkidle');
  532 |   }
  533 |
  534 |
  535 | //   async filterByCustomDateRangeAndPrintClaims(fromDate, toDate) {
  536 | //     console.log(`→ Applying custom date range: ${fromDate} to ${toDate}`);
  537 |
  538 | //     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 50000 });
  539 | //     await this.dateFilterButton.click();
  540 | //     await this.fromDateInput.fill(fromDate);
  541 | //     await this.toDateInput.fill(toDate);
  542 | //     await this.doneButton.click();
  543 |
  544 | //     await this.monthsdateverify.waitFor({ state: 'visible', timeout: 50000 });
  545 |
  546 | //     const dateText = await this.monthsdateverify.textContent();
  547 | //     if (dateText?.trim()) {
```