# Test info

- Name: Member Portal - Labs Flow >> Check abnormal check and uncheck  physician name
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:112:5

# Error details

```
TimeoutError: locator.innerText: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//p[starts-with(@id, \'physicianText\')]').first().locator('span').first()

    at LabsPage.runAbnormalTestFlow (/home/karthi/pmp/src/pages/LabsPage.js:418:56)
    at /home/karthi/pmp/src/tests/labspagegroup.spec.js:118:13
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
  395 | async runAbnormalTestFlow(monthRangeText, physicianName) {
  396 |   // Step 1: Select Date Range and Physician (uncomment when implemented)
  397 |   // await this.optionDateRangephysicain(monthRangeText);
  398 |   // await this.physician(physicianName);
  399 |
  400 |   // Step 2: Filter by 'Abnormal'
  401 |   await this.checkboxAbnormal.check();
  402 |   console.log("✅ Abnormal checkbox is checked:", await this.checkboxAbnormal.isChecked());
  403 |
  404 |   await this.applyButton.click();
  405 |   await this.page.evaluate(() => window.scrollBy(0, 500));
  406 |   await this.page.waitForTimeout(500);
  407 |
  408 |   const abnormalCount = await this.physicianNameElements.count();
  409 |
  410 |   if (abnormalCount === 0) {
  411 |     console.log(`❌ No physician "${physicianName}" found in ${monthRangeText}.`);
  412 |     return;
  413 |   }
  414 |
  415 |   // Step 3: Log abnormal results
  416 |   for (let i = 0; i < abnormalCount; i++) {
  417 |     const row = this.physicianNameElements.nth(i);
> 418 |     const testName = await row.locator('span').first().innerText();
      |                                                        ^ TimeoutError: locator.innerText: Timeout 10000ms exceeded.
  419 |     const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  420 |     console.log(`🔴 ${testName} - Physician: ${physician} - Status: ABNORMAL`);
  421 |   }
  422 |
  423 |   // Step 4: Uncheck 'Abnormal' safely
  424 |   try {
  425 |     if (await this.checkboxAbnormal.isChecked()) {
  426 |       await this.checkboxAbnormal.uncheck();
  427 |       await this.page.waitForTimeout(500);
  428 |       await expect(this.checkboxAbnormal).not.toBeChecked();
  429 |       console.log('☑️ Abnormal checkbox is now unchecked.');
  430 |     }
  431 |   } catch (e) {
  432 |     console.log('⚠️ Failed to uncheck checkbox:', e);
  433 |   }
  434 |
  435 |   // Step 5: Re-apply filter and log normal results
  436 |   await this.applyButton.click();
  437 |   await this.page.evaluate(() => window.scrollBy(0, 500));
  438 |   await this.page.waitForTimeout(500);
  439 |
  440 |   let foundNormal = false;
  441 |   const total = await this.allRows.count();
  442 |
  443 |   for (let i = 0; i < total; i++) {
  444 |     const row = this.allRows.nth(i);
  445 |     if (await row.locator('span', { hasText: 'ABNORMAL' }).count() === 0) {
  446 |       const testName = await row.locator('span').first().innerText();
  447 |       const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  448 |       console.log(`🟢 ${testName} - Physician: ${physician} - Status: UNABNORMAL`);
  449 |       foundNormal = true;
  450 |     }
  451 |   }
  452 |
  453 |   if (!foundNormal) {
  454 |     console.log(`✅ No UNABNORMAL test results for ${physicianName} in ${monthRangeText}.`);
  455 |   }
  456 |
  457 |   // Step 6: Clear filters
  458 |   await this.clearFilters();
  459 | }
  460 |
  461 | // async runAbnormalTestFlow(monthRangeText, physicianName) {
  462 | //   // Step 1: Select Date Range and Physician
  463 | //   // await this.optionDateRangephysicain(monthRangeText);
  464 | //   // await this.physician(physicianName);
  465 |
  466 | //   // Step 2: Check 'Abnormal' checkbox
  467 | //   await this.checkboxAbnormal.check();
  468 | //   const isChecked = await this.checkboxAbnormal.isChecked();
  469 | //   console.log("✅ Abnormal checkbox is checked:", isChecked);
  470 |
  471 | //   // Step 3: Apply filter and log abnormal results
  472 | //   await this.applyButton.click();
  473 |
  474 | //      await this.page.evaluate(() => {
  475 | //     window.scrollBy(0, 500); // Scroll down by 500 pixels
  476 | //   });
  477 | //   await this.page.waitForTimeout(500); // Small pause after scroll
  478 |
  479 |
  480 | //   const abnormalCount = await this.physicianNameElements.count();
  481 |
  482 | //   if (abnormalCount === 0) {
  483 | //     console.log(`✅ No abnormal test results for ${physicianName} in ${monthRangeText}.`);
  484 | //   } else {
  485 | //     for (let i = 0; i < abnormalCount; i++) {
  486 | //       const row = this.physicianNameElements.nth(i);
  487 | //        const spanLocator = row.locator('span').first();
  488 | // await spanLocator.waitFor({ state: 'attached', timeout: 5000 });
  489 |
  490 | // if (await spanLocator.isVisible()) {
  491 | //   const testName = await spanLocator.innerText();
  492 | //   console.log(`Physician Name: ${testName}`);
  493 | // } else {
  494 | //   console.log(`⚠️ Row ${i}: Span not visible.`);
  495 | // }
  496 |
  497 |
  498 | //       // const testName = await row.locator('span').first().innerText();
  499 | //       const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  500 | //       console.log(`🔴 ${testName} - Physician: ${physician} - Status: ABNORMAL`);
  501 | //     }
  502 | //   }
  503 | //     await this.page.waitForLoadState('networkidle');
  504 |
  505 | //   // Step 4: Uncheck 'Abnormal' checkbox safely
  506 |
  507 | // let checkboxStatus = '';
  508 |
  509 | // if (await this.checkboxAbnormal.isChecked()) {
  510 | //   try {
  511 | //     await this.checkboxAbnormal.uncheck(); // Fallback for custom checkboxes
  512 | //     await this.page.waitForTimeout(500); // Wait for UI to update
  513 |
  514 | //     // Assertion to verify checkbox is unchecked
  515 | //     await expect(this.checkboxAbnormal).not.toBeChecked();
  516 |
  517 | //     checkboxStatus = 'Unchecked';
  518 | //   } catch (error) {
```