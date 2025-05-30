# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//span[normalize-space()=\'Filter Results\']')
    - locator resolved to <span _ngcontent-rnm-c277="">Filter Results</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-rnm-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div _ngcontent-rnm-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is not stable
  18 × retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div _ngcontent-rnm-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
  - retrying click action
    - waiting 500ms

    at ClaimsPage.filterByDateRange (/home/karthi/pmp/src/pages/ClaimsPage.js:407:38)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:121:5
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
- button "02-26-2025 - 05-26-2025"
- button "Apply"
- button "Clear"
- text: "Date range: from 02-26-2025 to 05-26-2025"
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
  307 | // //       }
  308 | // //     }
  309 |
  310 | // //     if (anyApplied) {
  311 | // //       await this.applyFiltersButton.click();
  312 | // //       await this.page.waitForTimeout(1000); // wait for results to render
  313 | // //       console.log('[INFO] Filters applied');
  314 | // //     } else {
  315 | // //       console.log('[WARN] No filters selected — skipping apply');
  316 | // //     }
  317 |
  318 | // //     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  319 | // //     console.log('[INFO] Page scrolled to bottom');
  320 |
  321 | // //     if (await this.filterResultsButton.isVisible()) {
  322 | // //       await this.filterResultsButton.click();
  323 | // //       console.log('[INFO] Filter results button clicked after applying filters');
  324 | // //     } else {
  325 | // //       console.log('[WARN] Filter results button not visible after applying filters');
  326 | // //     }
  327 | // //   }
  328 |
  329 | // //   async printResults() {
  330 | // //     const providerCount = await this.providerResults.count();
  331 | // //     if (providerCount === 0) {
  332 | // //       console.log('[INFO] No providers found');
  333 | // //     } else {
  334 | // //       for (let i = 0; i < providerCount; i++) {
  335 | // //         const name = await this.providerResults.nth(i).innerText();
  336 | // //         console.log(`[PROVIDER ${i + 1}]: ${name}`);
  337 | // //       }
  338 | // //     }
  339 |
  340 | // //     const payeeCount = await this.payeeResults.count();
  341 | // //     if (payeeCount === 0) {
  342 | // //       console.log('[INFO] No payees found');
  343 | // //     } else {
  344 | // //       for (let i = 0; i < payeeCount; i++) {
  345 | // //         const name = await this.payeeResults.nth(i).innerText();
  346 | // //         console.log(`[PAYEE ${i + 1}]: ${name}`);
  347 | // //       }
  348 | // //     }
  349 | // //   }
  350 |
  351 | // //   async uncheckFilters(filters) {
  352 | // //     const tryUncheck = async (label, name) => {
  353 | // //       const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${name}")]/preceding-sibling::div//input[@type='checkbox']`;
  354 | // //       const checkboxLocator = this.page.locator(`xpath=${checkboxXPath}`);
  355 |
  356 | // //       const isVisible = await checkboxLocator.isVisible().catch(() => false);
  357 | // //       if (!isVisible) {
  358 | // //         console.warn(`[WARN] ${label} not found: ${name}`);
  359 | // //         return;
  360 | // //       }
  361 |
  362 | // //       const isChecked = await checkboxLocator.isChecked();
  363 | // //       if (isChecked) {
  364 | // //         await checkboxLocator.uncheck();
  365 | // //         console.log(`[INFO] Unchecked ${label}: ${name}`);
  366 | // //       } else {
  367 | // //         console.log(`[DEBUG] ${label} not checked: ${name}`);
  368 | // //       }
  369 | // //     };
  370 |
  371 | // //     for (const name of filters.providers || []) {
  372 | // //       await tryUncheck('provider', name);
  373 | // //     }
  374 |
  375 | // //     for (const name of filters.payees || []) {
  376 | // //       await tryUncheck('payee', name);
  377 | // //     }
  378 |
  379 | // //     for (const name of filters.diagnoses || []) {
  380 | // //       await tryUncheck('diagnosis', name);
  381 | // //     }
  382 |
  383 | // //     await this.applyFiltersButton.click();
  384 | // //     console.log('[INFO] Unchecked filters applied');
  385 | // //     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  386 | // //     console.log('[INFO] Page scrolled to bottom');
  387 |
  388 |  
  389 | // //   }
  390 |  async isFilterResultsButtonEnabled() {
  391 |     // Returns true if filterResultsButton is enabled, false if disabled
  392 |     const disabledCount = await this.filterresultButtondisabled.count();
  393 |     return disabledCount === 0;
  394 |   }
  395 |
  396 |
  397 | async filterByDateRange(dateRange) {
  398 |     await this.dateFilterButton.click();
  399 |     await this.page.getByText(dateRange).click();
  400 |     await this.doneButton.click();
  401 |
  402 |     await this.filterResultsButton.waitFor({ state: 'visible', timeout: 30000 });
  403 |
  404 |     const enabled = await this.isFilterResultsButtonEnabled();
  405 |
  406 |     if (enabled) {
> 407 |       await this.filterResultsButton.click();
      |                                      ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  408 |       this.skipNext = false;
  409 |       console.log(`[INFO] Filter results button enabled and clicked for date range: ${dateRange}`);
  410 |     } else {
  411 |       this.skipNext = true;
  412 |       console.log(`[WARN] Filter results button disabled for date range: ${dateRange}. Skipping next scripts.`);
  413 |     }
  414 |   }
  415 |
  416 |   async _checkCheckboxByLabel(labelText) {
  417 |     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${labelText}")]/preceding-sibling::div//input[@type='checkbox']`;
  418 |     try {
  419 |       const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`, { timeout: 5000 });
  420 |       const isChecked = await checkbox.isChecked();
  421 |       if (!isChecked) {
  422 |         await checkbox.check();
  423 |         console.log(`[INFO] Checked: ${labelText}`);
  424 |       } else {
  425 |         console.log(`[INFO] Already checked: ${labelText}`);
  426 |       }
  427 |       return true;
  428 |     } catch {
  429 |       console.log(`[WARN] Not found: ${labelText}`);
  430 |       return false;
  431 |     }
  432 |   }
  433 |
  434 |   async applyFilters(filters) {
  435 |     if (this.skipNext) {
  436 |       console.log('[INFO] Skipping applyFilters because filter results button is disabled.');
  437 |       return;
  438 |     }
  439 |
  440 |     let anyApplied = false;
  441 |
  442 |     for (const group of ['providers', 'payees', 'diagnoses']) {
  443 |       if (filters[group]?.length > 0) {
  444 |         for (const item of filters[group]) {
  445 |           const result = await this._checkCheckboxByLabel(item);
  446 |           if (result) anyApplied = true;
  447 |         }
  448 |       }
  449 |     }
  450 |
  451 |     if (anyApplied) {
  452 |       await this.applyFiltersButton.click();
  453 |       await this.page.waitForTimeout(1000);
  454 |       console.log('[INFO] Filters applied');
  455 |     } else {
  456 |       console.log('[WARN] No filters selected — skipping apply');
  457 |     }
  458 |
  459 |     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  460 |     console.log('[INFO] Page scrolled to bottom');
  461 |
  462 |     await this.filterResultsButton.waitFor({ state: 'visible' });
  463 |     await this.page.waitForTimeout(1000);
  464 |     await this.filterResultsButton.click();
  465 |     console.log('[INFO] Filter results button clicked after applying filters');
  466 |   }
  467 |
  468 |   async printResults() {
  469 |     if (this.skipNext) {
  470 |       console.log('[INFO] Skipping printResults because filter results button is disabled.');
  471 |       return;
  472 |     }
  473 |
  474 |     const providerCount = await this.providerResults.count();
  475 |     if (providerCount === 0) {
  476 |       console.log('[INFO] No providers found');
  477 |     } else {
  478 |       for (let i = 0; i < providerCount; i++) {
  479 |         const name = await this.providerResults.nth(i).innerText();
  480 |         console.log(`[PROVIDER ${i + 1}]: ${name}`);
  481 |       }
  482 |     }
  483 |
  484 |     const payeeCount = await this.payeeResults.count();
  485 |     if (payeeCount === 0) {
  486 |       console.log('[INFO] No payees found');
  487 |     } else {
  488 |       for (let i = 0; i < payeeCount; i++) {
  489 |         const name = await this.payeeResults.nth(i).innerText();
  490 |         console.log(`[PAYEE ${i + 1}]: ${name}`);
  491 |       }
  492 |     }
  493 |   }
  494 |
  495 |   async uncheckFilters(filters) {
  496 |     if (this.skipNext) {
  497 |       console.log('[INFO] Skipping uncheckFilters because filter results button is disabled.');
  498 |       return;
  499 |     }
  500 |
  501 |     const tryUncheck = async (label, name) => {
  502 |       const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${name}")]/preceding-sibling::div//input[@type='checkbox']`;
  503 |       const checkboxLocator = this.page.locator(`xpath=${checkboxXPath}`);
  504 |
  505 |       const isVisible = await checkboxLocator.isVisible().catch(() => false);
  506 |       if (!isVisible) {
  507 |         console.warn(`[WARN] ${label} not found: ${name}`);
```