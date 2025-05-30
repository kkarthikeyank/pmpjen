# Test info

- Name: Member Portal - Labs Flow >> Check abnormal check and uncheck  physician name
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:112:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//p[starts-with(@id, \'physicianText\')]').first().locator('span').first() to be visible

    at LabsPage.runAbnormalTestFlow (/home/karthi/pmp/src/pages/LabsPage.js:422:41)
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
  397 |   // Step 1: Select Date Range and Physician
  398 |   // await this.optionDateRangephysicain(monthRangeText);
  399 |   // await this.physician(physicianName);
  400 |
  401 |   // Step 2: Check 'Abnormal' checkbox
  402 |   await this.checkboxAbnormal.check();
  403 |   const isChecked = await this.checkboxAbnormal.isChecked();
  404 |   console.log("✅ Abnormal checkbox is checked:", isChecked);
  405 |
  406 |   // Step 3: Apply filter and log abnormal results
  407 |   await this.applyButton.click();
  408 |
  409 |      await this.page.evaluate(() => {
  410 |     window.scrollBy(0, 500); // Scroll down by 500 pixels
  411 |   });
  412 |   await this.page.waitForTimeout(500); // Small pause after scroll
  413 |
  414 |
  415 |   const abnormalCount = await this.physicianNameElements.count();
  416 |
  417 |   if (abnormalCount === 0) {
  418 |     console.log(`✅ No abnormal test results for ${physicianName} in ${monthRangeText}.`);
  419 |   } else {
  420 |     for (let i = 0; i < abnormalCount; i++) {
  421 |       const row = this.physicianNameElements.nth(i);
> 422 |       await row.locator('span').first().waitFor({ state: 'visible' });
      |                                         ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  423 |       const testName = await row.locator('span').first().innerText();
  424 |
  425 |       // const testName = await row.locator('span').first().innerText();
  426 |       const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  427 |       console.log(`🔴 ${testName} - Physician: ${physician} - Status: ABNORMAL`);
  428 |     }
  429 |   }
  430 |     await this.page.waitForLoadState('networkidle');
  431 |
  432 |   // Step 4: Uncheck 'Abnormal' checkbox safely
  433 |
  434 | let checkboxStatus = '';
  435 |
  436 | if (await this.checkboxAbnormal.isChecked()) {
  437 |   try {
  438 |     await this.checkboxAbnormal.uncheck(); // Fallback for custom checkboxes
  439 |     await this.page.waitForTimeout(500); // Wait for UI to update
  440 |
  441 |     // Assertion to verify checkbox is unchecked
  442 |     await expect(this.checkboxAbnormal).not.toBeChecked();
  443 |
  444 |     checkboxStatus = 'Unchecked';
  445 |   } catch (error) {
  446 |     console.log('Failed to uncheck checkbox:', error);
  447 |     checkboxStatus = 'Uncheck failed';
  448 |   }
  449 | } else {
  450 |   // Optional assertion for already unchecked state
  451 |   await expect(this.checkboxAbnormal).not.toBeChecked();
  452 |   checkboxStatus = 'Already Unchecked';
  453 | }
  454 |
  455 |
  456 | console.log('Checkbox status is:', checkboxStatus);
  457 |   // const isUnchecked = await this.checkboxAbnormal.isChecked();
  458 |   // console.log("Is checkbox checked? ", isUnchecked); // should be false
  459 |
  460 |   // Step 5: Apply filter again and check for non-abnormal (normal) results
  461 |   await this.applyButton.click();
  462 |
  463 |     await this.page.evaluate(() => {
  464 |     window.scrollBy(0, 500); // Scroll down by 500 pixels
  465 |   });
  466 |   await this.page.waitForTimeout(500); // Small pause after scroll
  467 |
  468 |   const total = await this.allRows.count();
  469 |   let foundNormal = false;
  470 |
  471 |   for (let i = 0; i < total; i++) {
  472 |     const row = this.allRows.nth(i);
  473 |     const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
  474 |     if (isAbnormal === 0) {
  475 |       const testName = await row.locator('span').first().innerText();
  476 |       const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  477 |       console.log(`🟢 ${testName} - Physician: ${physician} - Status: UNABNORMAL`);
  478 |       foundNormal = true;
  479 |     }
  480 |   }
  481 |
  482 |   if (!foundNormal) {
  483 |     console.log(`✅ No UNABNORMAL test results for ${physicianName} in ${monthRangeText}.`);
  484 |   }
  485 |
  486 |   // Step 6: Clear all filters
  487 |   await this.clearFilters();
  488 | }
  489 |
  490 | //  scenario : search for abnormal check  and uncheck status  test results with test name
  491 |
  492 |
  493 |
  494 | async runAbnormalTestnameFlow(monthRangeText, TestName) {
  495 |   // Step 1: Select Date Range and Physician
  496 |   // await this.optionDatetestname(monthRangeText);
  497 |   // await this.optionTestName(TestName);
  498 |
  499 |   // Step 2: Check 'Abnormal' checkbox
  500 |   await this.checkboxAbnormal.check();
  501 |   const isChecked = await this.checkboxAbnormal.isChecked();
  502 |   
  503 |   console.log("✅ Abnormal checkbox is checked:", isChecked);
  504 |
  505 |
  506 |   // Step 3: Apply filter and log abnormal results
  507 |   await this.applyButton.click();
  508 |
  509 |
  510 |
  511 |   const testElements = await this.testnamewithabnormal.allTextContents();
  512 |
  513 |   if (testElements.length === 0) {
  514 |     console.log("❌ No test name found");
  515 |     return;
  516 |   }
  517 |
  518 |   let abnormalFound = false;
  519 |   for (const text of testElements) {
  520 |     if (text.includes("Abnormal")) {
  521 |       abnormalFound = true;
  522 |       console.log(`⚠️ Test Name with Abnormal status: ${text}`);
```