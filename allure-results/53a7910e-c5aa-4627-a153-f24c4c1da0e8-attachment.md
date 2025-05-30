# Test info

- Name: Member Portal - Labs Flow >> Check abnormal check and uncheck  physician name
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:112:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('//p[starts-with(@id, \'physicianText\')]').first().locator('span').first()

    at LabsPage.runAbnormalTestFlow (/home/karthi/pmp/src/pages/LabsPage.js:423:19)
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
  422 |        const spanLocator = row.locator('span').first();
> 423 | await spanLocator.waitFor({ state: 'attached', timeout: 5000 });
      |                   ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
  424 |
  425 | if (await spanLocator.isVisible()) {
  426 |   const testName = await spanLocator.innerText();
  427 |   console.log(`Physician Name: ${testName}`);
  428 | } else {
  429 |   console.log(`⚠️ Row ${i}: Span not visible.`);
  430 | }
  431 |
  432 |
  433 |       // const testName = await row.locator('span').first().innerText();
  434 |       const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  435 |       console.log(`🔴 ${testName} - Physician: ${physician} - Status: ABNORMAL`);
  436 |     }
  437 |   }
  438 |     await this.page.waitForLoadState('networkidle');
  439 |
  440 |   // Step 4: Uncheck 'Abnormal' checkbox safely
  441 |
  442 | let checkboxStatus = '';
  443 |
  444 | if (await this.checkboxAbnormal.isChecked()) {
  445 |   try {
  446 |     await this.checkboxAbnormal.uncheck(); // Fallback for custom checkboxes
  447 |     await this.page.waitForTimeout(500); // Wait for UI to update
  448 |
  449 |     // Assertion to verify checkbox is unchecked
  450 |     await expect(this.checkboxAbnormal).not.toBeChecked();
  451 |
  452 |     checkboxStatus = 'Unchecked';
  453 |   } catch (error) {
  454 |     console.log('Failed to uncheck checkbox:', error);
  455 |     checkboxStatus = 'Uncheck failed';
  456 |   }
  457 | } else {
  458 |   // Optional assertion for already unchecked state
  459 |   await expect(this.checkboxAbnormal).not.toBeChecked();
  460 |   checkboxStatus = 'Already Unchecked';
  461 | }
  462 |
  463 |
  464 | console.log('Checkbox status is:', checkboxStatus);
  465 |   // const isUnchecked = await this.checkboxAbnormal.isChecked();
  466 |   // console.log("Is checkbox checked? ", isUnchecked); // should be false
  467 |
  468 |   // Step 5: Apply filter again and check for non-abnormal (normal) results
  469 |   await this.applyButton.click();
  470 |
  471 |     await this.page.evaluate(() => {
  472 |     window.scrollBy(0, 500); // Scroll down by 500 pixels
  473 |   });
  474 |   await this.page.waitForTimeout(500); // Small pause after scroll
  475 |
  476 |   const total = await this.allRows.count();
  477 |   let foundNormal = false;
  478 |
  479 |   for (let i = 0; i < total; i++) {
  480 |     const row = this.allRows.nth(i);
  481 |     const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
  482 |     if (isAbnormal === 0) {
  483 |       const testName = await row.locator('span').first().innerText();
  484 |       const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  485 |       console.log(`🟢 ${testName} - Physician: ${physician} - Status: UNABNORMAL`);
  486 |       foundNormal = true;
  487 |     }
  488 |   }
  489 |
  490 |   if (!foundNormal) {
  491 |     console.log(`✅ No UNABNORMAL test results for ${physicianName} in ${monthRangeText}.`);
  492 |   }
  493 |
  494 |   // Step 6: Clear all filters
  495 |   await this.clearFilters();
  496 | }
  497 |
  498 | //  scenario : search for abnormal check  and uncheck status  test results with test name
  499 |
  500 |
  501 |
  502 | async runAbnormalTestnameFlow(monthRangeText, TestName) {
  503 |   // Step 1: Select Date Range and Physician
  504 |   // await this.optionDatetestname(monthRangeText);
  505 |   // await this.optionTestName(TestName);
  506 |
  507 |   // Step 2: Check 'Abnormal' checkbox
  508 |   await this.checkboxAbnormal.check();
  509 |   const isChecked = await this.checkboxAbnormal.isChecked();
  510 |   
  511 |   console.log("✅ Abnormal checkbox is checked:", isChecked);
  512 |
  513 |
  514 |   // Step 3: Apply filter and log abnormal results
  515 |   await this.applyButton.click();
  516 |
  517 |
  518 |
  519 |   const testElements = await this.testnamewithabnormal.allTextContents();
  520 |
  521 |   if (testElements.length === 0) {
  522 |     console.log("❌ No test name found");
  523 |     return;
```