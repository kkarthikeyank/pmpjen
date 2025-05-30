# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//span[normalize-space()=\'Filter Results\']')
    - locator resolved to <span _ngcontent-dix-c277="">Filter Results</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-dix-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div _ngcontent-dix-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
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
       - <div _ngcontent-dix-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
  - retrying click action
    - waiting 500ms

    at ClaimsPage.filterByDateRange (/home/karthi/pmp/src/pages/ClaimsPage.js:403:36)
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
  303 | // //         for (const item of filters[group]) {
  304 | // //           const result = await this._checkCheckboxByLabel(item);
  305 | // //           if (result) anyApplied = true;
  306 | // //         }
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
  390 |
  391 |
  392 |
  393 | async filterByDateRange(dateRange) {
  394 |   await this.dateFilterButton.click();
  395 |   await this.page.getByText(dateRange).click();
  396 |   await this.doneButton.click();
  397 |
  398 |   const isDisabled = await this.filterresultButtondisabled.isVisible().catch(() => false);
  399 |   if (isDisabled) {
  400 |     console.log('[INFO] Filter Results button is disabled — skipping click in filterByDateRange');
  401 |   } else {
  402 |     await this.filterResultsButton.waitFor({ state: 'visible', timeout: 30000 });
> 403 |     await this.filterResultsButton.click();
      |                                    ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  404 |     console.log(`[INFO] Filter applied: ${dateRange}`);
  405 |   }
  406 | }
  407 |
  408 | async _checkCheckboxByLabel(labelText) {
  409 |   const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${labelText}")]/preceding-sibling::div//input[@type='checkbox']`;
  410 |   try {
  411 |     const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`, { timeout: 5000 });
  412 |     const isChecked = await checkbox.isChecked();
  413 |     if (!isChecked) {
  414 |       await checkbox.check();
  415 |       console.log(`[INFO] Checked: ${labelText}`);
  416 |     } else {
  417 |       console.log(`[INFO] Already checked: ${labelText}`);
  418 |     }
  419 |     return true;
  420 |   } catch {
  421 |     console.log(`[WARN] Not found: ${labelText}`);
  422 |     return false;
  423 |   }
  424 | }
  425 |
  426 | async applyFilters(filters) {
  427 |   let anyApplied = false;
  428 |
  429 |   for (const group of ['providers', 'payees', 'diagnoses']) {
  430 |     if (filters[group]?.length > 0) {
  431 |       for (const item of filters[group]) {
  432 |         const result = await this._checkCheckboxByLabel(item);
  433 |         if (result) anyApplied = true;
  434 |       }
  435 |     }
  436 |   }
  437 |
  438 |   if (anyApplied) {
  439 |     await this.applyFiltersButton.click();
  440 |     await this.page.waitForTimeout(1000);
  441 |     console.log('[INFO] Filters applied');
  442 |   } else {
  443 |     console.log('[WARN] No filters selected — skipping apply');
  444 |   }
  445 |
  446 |   await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  447 |   console.log('[INFO] Page scrolled to bottom');
  448 |
  449 |   const isDisabled = await this.filterresultButtondisabled.isVisible().catch(() => false);
  450 |   if (isDisabled) {
  451 |     console.log('[INFO] Filter Results button is disabled — skipping click in applyFilters');
  452 |   } else {
  453 |     await this.filterResultsButton.waitFor({ state: 'visible' });
  454 |     await this.page.waitForTimeout(1000);
  455 |     await this.filterResultsButton.click();
  456 |     console.log('[INFO] Filter Results button clicked');
  457 |   }
  458 | }
  459 |
  460 | async printResults() {
  461 |   const providerCount = await this.providerResults.count();
  462 |   if (providerCount === 0) {
  463 |     console.log('[INFO] No providers found');
  464 |   } else {
  465 |     for (let i = 0; i < providerCount; i++) {
  466 |       const name = await this.providerResults.nth(i).innerText();
  467 |       console.log(`[PROVIDER ${i + 1}]: ${name}`);
  468 |     }
  469 |   }
  470 |
  471 |   const payeeCount = await this.payeeResults.count();
  472 |   if (payeeCount === 0) {
  473 |     console.log('[INFO] No payees found');
  474 |   } else {
  475 |     for (let i = 0; i < payeeCount; i++) {
  476 |       const name = await this.payeeResults.nth(i).innerText();
  477 |       console.log(`[PAYEE ${i + 1}]: ${name}`);
  478 |     }
  479 |   }
  480 | }
  481 |
  482 | async uncheckFilters(filters) {
  483 |   const tryUncheck = async (label, name) => {
  484 |     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${name}")]/preceding-sibling::div//input[@type='checkbox']`;
  485 |     const checkboxLocator = this.page.locator(`xpath=${checkboxXPath}`);
  486 |
  487 |     const isVisible = await checkboxLocator.isVisible().catch(() => false);
  488 |     if (!isVisible) {
  489 |       console.warn(`[WARN] ${label} not found: ${name}`);
  490 |       return;
  491 |     }
  492 |
  493 |     const isChecked = await checkboxLocator.isChecked();
  494 |     if (isChecked) {
  495 |       await checkboxLocator.uncheck();
  496 |       console.log(`[INFO] Unchecked ${label}: ${name}`);
  497 |     } else {
  498 |       console.log(`[DEBUG] ${label} not checked: ${name}`);
  499 |     }
  500 |   };
  501 |
  502 |   for (const name of filters.providers || []) {
  503 |     await tryUncheck('provider', name);
```