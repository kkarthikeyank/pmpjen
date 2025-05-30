# Test info

- Name: Member Portal - Labs Flow >> Check abnormal check and uncheck  physician name
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:112:5

# Error details

```
TimeoutError: locator.innerText: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//div[@data-id=\'labsCardObjectResultsDiv\']//div[contains(@class, \'row\')]').first().locator('xpath=./p[starts-with(@id, \'physicianText\')]')

    at LabsPage.runAbnormalTestFlow (/home/karthi/pmp/src/pages/LabsPage.js:431:48)
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
  397 |   
  398 |
  399 |   // Step 2: Check 'Abnormal' checkbox
  400 |   await this.checkboxAbnormal.check();
  401 |   const isChecked = await this.checkboxAbnormal.isChecked();
  402 |   console.log("✅ Abnormal checkbox is checked:", isChecked);
  403 |
  404 |   // Step 3: Apply filter
  405 |   await this.applyButton.click();
  406 |
  407 |   // Wait for filter results to load fully
  408 |   await this.page.waitForLoadState('networkidle');
  409 |
  410 |   // Scroll down so rows are visible if needed
  411 |   await this.page.evaluate(() => window.scrollBy(0, 500));
  412 |
  413 |   // Get all rows that contain test info
  414 |   const rowsCount = await this.testNameLocators.count();
  415 |   console.log(`Found ${rowsCount} test rows with ABNORMAL checked.`);
  416 |
  417 |   if (rowsCount === 0) {
  418 |     console.log(`✅ No abnormal test results for ${physicianName} in ${monthRangeText}.`);
  419 |   } else {
  420 |     for (let i = 0; i < rowsCount; i++) {
  421 |       const row = this.testNameLocators.nth(i);
  422 |
  423 |       // Find test name span inside row (adjust selector if needed)
  424 |       const testNameLocator = row.locator('span').first();
  425 |       // Find physician name inside row using relative XPath (prefix with ./ to scope inside row)
  426 |       const physicianLocator = row.locator("xpath=./p[starts-with(@id, 'physicianText')]");
  427 |
  428 |     
  429 |
  430 |       const testName = await testNameLocator.innerText();
> 431 |       const physician = await physicianLocator.innerText();
      |                                                ^ TimeoutError: locator.innerText: Timeout 10000ms exceeded.
  432 |
  433 |       console.log(`🔴 ${testName} - Physician: ${physician} - Status: ABNORMAL`);
  434 |     }
  435 |   }
  436 |
  437 |   // Step 4: Uncheck 'Abnormal' checkbox
  438 |   if (await this.checkboxAbnormal.isChecked()) {
  439 |     await this.checkboxAbnormal.uncheck();
  440 |     await this.page.waitForTimeout(500); // wait for UI to update
  441 |     await expect(this.checkboxAbnormal).not.toBeChecked();
  442 |     console.log('Checkbox status is: Unchecked');
  443 |   } else {
  444 |     console.log('Checkbox was already unchecked.');
  445 |   }
  446 |
  447 |   // Step 5: Apply filter again for UNABNORMAL results
  448 |   await this.applyButton.click();
  449 |   await this.page.waitForLoadState('networkidle');
  450 |   await this.page.evaluate(() => window.scrollBy(0, 500));
  451 |
  452 |  
  453 |
  454 |   // Step 6: Optionally clear filters if needed
  455 | }
  456 |
  457 |
  458 | async printAbnormalTestNames() {
  459 |   const count = await this.testNameLocators.count();
  460 |   if (count === 0) {
  461 |     console.log('✅ No abnormal test results found.');
  462 |     return;
  463 |   }
  464 |
  465 |   const testNames = [];
  466 |   for (let i = 0; i < count; i++) {
  467 |     const row = this.testNameLocators.nth(i);
  468 |     const testName = await row.locator('span').first().innerText();
  469 |     testNames.push(testName);
  470 |   }
  471 |
  472 |   console.log('🔴 Abnormal test results found:');
  473 |   testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  474 | }
  475 | // async runAbnormalTestFlow(monthRangeText, physicianName) {
  476 |  
  477 |
  478 | //   // Step 2: Check 'Abnormal' checkbox
  479 | //   await this.checkboxAbnormal.check();
  480 | //   const isChecked = await this.checkboxAbnormal.isChecked();
  481 | //   console.log("✅ Abnormal checkbox is checked:", isChecked);
  482 |
  483 | //   // Step 3: Apply filter and scroll
  484 | //   await this.applyButton.click();
  485 | //   await this.page.evaluate(() => window.scrollBy(0, 500));
  486 |
  487 | //   // Step 4: Log all abnormal test results
  488 | //   const abnormalCount = await this.physicianNameElements.count();
  489 | //   if (abnormalCount === 0) {
  490 | //     console.log(`✅ No abnormal test results for ${physicianName} in ${monthRangeText}.`);
  491 | //   } else {
  492 | //     for (let i = 0; i < abnormalCount; i++) {
  493 | //       const row = this.physicianNameElements.nth(i);
  494 | //       const spanLocator = row.locator('span').first();
  495 |  
  496 | //       if (await spanLocator.isVisible()) {
  497 | //         const testName = await spanLocator.innerText();
  498 | //         const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  499 | //         console.log(`🔴 ${testName} - Physician: ${physician} - Status: ABNORMAL`);
  500 | //       } else {
  501 | //         console.log(`⚠️ Row ${i}: Test name span not visible.`);
  502 | //       }
  503 | //     }
  504 | //   }
  505 |
  506 | //   await this.page.waitForLoadState('networkidle');
  507 |
  508 | //   // Step 5: Uncheck 'Abnormal' checkbox safely
  509 | //   let checkboxStatus = '';
  510 | //   if (await this.checkboxAbnormal.isChecked()) {
  511 | //     try {
  512 | //       await this.checkboxAbnormal.uncheck();
  513 | //       await this.page.waitForTimeout(500);
  514 | //       await expect(this.checkboxAbnormal).not.toBeChecked();
  515 | //       checkboxStatus = 'Unchecked';
  516 | //     } catch (error) {
  517 | //       console.log('❌ Failed to uncheck checkbox:', error);
  518 | //       checkboxStatus = 'Uncheck failed';
  519 | //     }
  520 | //   } else {
  521 | //     await expect(this.checkboxAbnormal).not.toBeChecked();
  522 | //     checkboxStatus = 'Already Unchecked';
  523 | //   }
  524 | //   console.log('Checkbox status is:', checkboxStatus);
  525 |
  526 | //   // Step 6: Apply filter again for normal tests
  527 | //   await this.applyButton.click();
  528 | //   await this.page.evaluate(() => window.scrollBy(0, 500));
  529 |
  530 | //   const totalRows = await this.testNameLocators.count();
  531 | //   let foundNormal = false;
```