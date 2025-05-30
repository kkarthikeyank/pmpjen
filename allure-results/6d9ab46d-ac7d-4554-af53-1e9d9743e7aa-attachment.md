# Test info

- Name: Member Portal - Labs Flow >> Check abnormal check and uncheck  physician name
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:112:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 7000ms exceeded.
Call log:
  - waiting for locator('//div[@data-id=\'labsCardObjectResultsDiv\']//div[contains(@class, \'row\')]').first().locator('xpath=./p[starts-with(@id, \'physicianText\')]')

    at LabsPage.runAbnormalTestFlow (/home/karthi/pmp/src/pages/LabsPage.js:413:28)
    at /home/karthi/pmp/src/tests/labspagegroup.spec.js:124:3
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
  - heading "Labs for" [level=1]
  - button "Julia Donaldson"
- text: "In this section you can view results from lab work ordered by your provider and billed to the Plan. Note: Lab data is updated bi-weekly."
- button "Read More"
- paragraph: Ordering Physician
- textbox "ex. John Smith"
- paragraph: Test Names
- textbox "ex. Triglycerides"
- paragraph: Lab Vendor
- textbox "ex. Life Labs"
- paragraph: Filter by date of service range
- button "Last 36 Months"
- paragraph: Status
- checkbox "Checkbox for Abnormal" [checked]
- text: Abnormal
- button "Apply"
- text: Clear
- separator
- text: "Date Range: from 05-23-2022 to 05-23-2025 Show"
- combobox "select number of results":
  - option "5" [selected]
  - option "10"
  - option "25"
  - option "50"
  - option "100"
- text: entries
- paragraph: Date of Service
- paragraph: 04-11-2024
- button "View Details"
- paragraph: Ordering Physician Name
- paragraph: Scott Down
- paragraph: Lab Vendor
- paragraph: "Hope Pharma #1"
- paragraph: New Comp. Metabolic Panel (113)
- text: Calcium SerPl-sCnc ABNORMAL
- separator
- text: TEst2 ABNORMAL
- paragraph: Date of Service
- paragraph: 04-11-2024
- button "View Details"
- paragraph: Ordering Physician Name
- paragraph: Scott Down
- paragraph: Lab Vendor
- paragraph: "Hope Pharma #1"
- paragraph: New Comp. Metabolic Panel (113)
- text: Calcium SerPl-sCnc ABNORMAL
- separator
- text: TEst2 ABNORMAL
```

# Test source

```ts
  313 | //   if (!found) {
  314 | //     console.log('✅ No abnormal test results found.');
  315 | //   }
  316 | // }
  317 |
  318 |
  319 |
  320 | async printAbnormalTestNames() {
  321 |   const count = await this.testNameLocators.count();
  322 |   if (count === 0) {
  323 |     console.log('✅ No abnormal test results found.');
  324 |     return;
  325 |   }
  326 |
  327 |   const testNames = [];
  328 |   for (let i = 0; i < count; i++) {
  329 |     const row = this.testNameLocators.nth(i);
  330 |     const testName = await row.locator('span').first().innerText();
  331 |     testNames.push(testName);
  332 |   }
  333 |
  334 |   console.log('🔴 Abnormal test results found:');
  335 |   testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  336 | }
  337 |   // Uncheck Abnormal checkbox
  338 |
  339 |
  340 |
  341 | // Print test names that are NOT abnormal
  342 | async printNonAbnormalTestNames() {
  343 |   const allRows = this.page.locator(`//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row')]`);
  344 |   const total = await allRows.count();
  345 |   const testNames = [];
  346 |
  347 |   for (let i = 0; i < total; i++) {
  348 |     const row = allRows.nth(i);
  349 |     const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
  350 |     if (isAbnormal === 0) {
  351 |       const testName = await row.locator('span').first().innerText();
  352 |       testNames.push(testName);
  353 |     }
  354 |   }
  355 |
  356 |   if (testNames.length === 0) {
  357 |     console.log('✅ No normal/non-abnormal test results found.');
  358 |   } else {
  359 |     console.log('🟢 Non-abnormal test results found:');
  360 |     testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  361 |   }
  362 | }
  363 |
  364 | // async printNonAbnormalTestNames() {
  365 | //   const count = await this.testNameLocators.count();
  366 | //   let found = false;
  367 |
  368 | //   for (let i = 0; i < count; i++) {
  369 | //     const row = this.testNameLocators.nth(i);
  370 | //     const spans = row.locator('span');
  371 | //     const spanCount = await spans.count();
  372 |
  373 | //     let textParts = [];
  374 | //     for (let j = 0; j < spanCount; j++) {
  375 | //       const part = await spans.nth(j).innerText();
  376 | //       textParts.push(part.trim());
  377 | //     }
  378 |
  379 | //     const rowText = textParts.join(' ');
  380 | //     if (!rowText.includes('ABNORMAL')) {
  381 | //       console.log(`  - ${rowText}`);
  382 | //       found = true;
  383 | //     }
  384 | //   }
  385 |
  386 | //   if (!found) {
  387 | //     console.log('✅ No normal/non-abnormal test results found.');
  388 | //   }
  389 | // }
  390 |
  391 |
  392 |
  393 |
  394 | //  scenario : search for abnormal check  and uncheck status  test results with  physician name
  395 |  
  396 | async runAbnormalTestFlow(monthRangeText, physicianName) {
  397 |   // Step 1: Check 'Abnormal' checkbox
  398 |   await this.checkboxAbnormal.check();
  399 |
  400 |   // Step 2: Apply filter
  401 |   await this.applyButton.click();
  402 |   await this.page.waitForLoadState('networkidle');
  403 |   await this.page.evaluate(() => window.scrollBy(0, 500));
  404 |
  405 |   // Step 3: Evaluate abnormal test rows
  406 |   const rowsCount = await this.testNameLocators.count();
  407 |
  408 |   for (let i = 0; i < rowsCount; i++) {
  409 |     const row = this.testNameLocators.nth(i);
  410 |
  411 |     // Wait for physician name locator inside the row
  412 |     const physicianLocator = row.locator("xpath=./p[starts-with(@id, 'physicianText')]");
> 413 |     await physicianLocator.waitFor({ state: 'attached', timeout: 7000 });
      |                            ^ TimeoutError: locator.waitFor: Timeout 7000ms exceeded.
  414 |
  415 |     // Get physician text and match (not printed)
  416 |     const actualPhysician = await physicianLocator.innerText();
  417 |
  418 |     // Optional: Add assertion or filtering logic based on physicianName
  419 |     // Example: skip or throw error if it doesn't match
  420 |     // if (actualPhysician !== physicianName) {
  421 |     //   throw new Error(`Unexpected physician: ${actualPhysician}`);
  422 |     // }
  423 |   }
  424 |
  425 |   // Step 4: Uncheck 'Abnormal' checkbox if it's still checked
  426 |   if (await this.checkboxAbnormal.isChecked()) {
  427 |     await this.checkboxAbnormal.uncheck();
  428 |     await this.page.waitForTimeout(500);
  429 |     await expect(this.checkboxAbnormal).not.toBeChecked();
  430 |   }
  431 |
  432 |   // Step 5: Reapply filter to reset
  433 |   await this.applyButton.click();
  434 |   await this.page.waitForLoadState('networkidle');
  435 |   await this.page.evaluate(() => window.scrollBy(0, 500));
  436 | }
  437 |
  438 | // async runAbnormalTestFlow(monthRangeText, physicianName) {
  439 |  
  440 |
  441 | //   // Step 2: Check 'Abnormal' checkbox
  442 | //   await this.checkboxAbnormal.check();
  443 | //   const isChecked = await this.checkboxAbnormal.isChecked();
  444 | //   console.log("✅ Abnormal checkbox is checked:", isChecked);
  445 |
  446 | //   // Step 3: Apply filter and scroll
  447 | //   await this.applyButton.click();
  448 | //   await this.page.evaluate(() => window.scrollBy(0, 500));
  449 |
  450 | //   // Step 4: Log all abnormal test results
  451 | //   const abnormalCount = await this.physicianNameElements.count();
  452 | //   if (abnormalCount === 0) {
  453 | //     console.log(`✅ No abnormal test results for ${physicianName} in ${monthRangeText}.`);
  454 | //   } else {
  455 | //     for (let i = 0; i < abnormalCount; i++) {
  456 | //       const row = this.physicianNameElements.nth(i);
  457 | //       const spanLocator = row.locator('span').first();
  458 |  
  459 | //       if (await spanLocator.isVisible()) {
  460 | //         const testName = await spanLocator.innerText();
  461 | //         const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  462 | //         console.log(`🔴 ${testName} - Physician: ${physician} - Status: ABNORMAL`);
  463 | //       } else {
  464 | //         console.log(`⚠️ Row ${i}: Test name span not visible.`);
  465 | //       }
  466 | //     }
  467 | //   }
  468 |
  469 | //   await this.page.waitForLoadState('networkidle');
  470 |
  471 | //   // Step 5: Uncheck 'Abnormal' checkbox safely
  472 | //   let checkboxStatus = '';
  473 | //   if (await this.checkboxAbnormal.isChecked()) {
  474 | //     try {
  475 | //       await this.checkboxAbnormal.uncheck();
  476 | //       await this.page.waitForTimeout(500);
  477 | //       await expect(this.checkboxAbnormal).not.toBeChecked();
  478 | //       checkboxStatus = 'Unchecked';
  479 | //     } catch (error) {
  480 | //       console.log('❌ Failed to uncheck checkbox:', error);
  481 | //       checkboxStatus = 'Uncheck failed';
  482 | //     }
  483 | //   } else {
  484 | //     await expect(this.checkboxAbnormal).not.toBeChecked();
  485 | //     checkboxStatus = 'Already Unchecked';
  486 | //   }
  487 | //   console.log('Checkbox status is:', checkboxStatus);
  488 |
  489 | //   // Step 6: Apply filter again for normal tests
  490 | //   await this.applyButton.click();
  491 | //   await this.page.evaluate(() => window.scrollBy(0, 500));
  492 |
  493 | //   const totalRows = await this.testNameLocators.count();
  494 | //   let foundNormal = false;
  495 |
  496 | //   for (let i = 0; i < totalRows; i++) {
  497 | //     const row = this.testNameLocators.nth(i);
  498 | //     const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
  499 |
  500 | //     if (isAbnormal === 0) {
  501 | //       const testName = await row.locator('span').first().innerText();
  502 | //       const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  503 | //       console.log(`🟢 ${testName} - Physician: ${physician} - Status: UNABNORMAL`);
  504 | //       foundNormal = true;
  505 | //     }
  506 | //   }
  507 |
  508 | //   if (!foundNormal) {
  509 | //     console.log(`✅ No UNABNORMAL test results for ${physicianName} in ${monthRangeText}.`);
  510 | //   }
  511 |
  512 | //   // Step 7: Clear all filters
  513 | //   await this.clearFilters();
```