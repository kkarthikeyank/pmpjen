# Test info

- Name: Member Portal - Labs Flow >> Check abnormal check and uncheck  physician name
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:112:5

# Error details

```
TimeoutError: locator.innerText: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//div[@data-id=\'labsCardObjectResultsDiv\']//div[contains(@class, \'row-cols-2\')]').first().locator('//p[starts-with(@id, \'physicianText\')]')

    at LabsPage.runAbnormalTestFlow (/home/karthi/pmp/src/pages/LabsPage.js:461:85)
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
- checkbox "Checkbox for Abnormal"
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
- paragraph: 05-12-2024
- button "View Details"
- paragraph: Ordering Physician Name
- paragraph: Scott Down
- paragraph: Lab Vendor
- paragraph: Precision Labs
- paragraph: New Comp. Metabolic Panel (113)
- text: Laboratory N/A
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
  404 |   // Step 3: Apply filter and scroll
  405 |   await this.applyButton.click();
  406 |   await this.page.evaluate(() => window.scrollBy(0, 500));
  407 |
  408 |   // Step 4: Log all abnormal test results
  409 |   const abnormalCount = await this.physicianNameElements.count();
  410 |   if (abnormalCount === 0) {
  411 |     console.log(`✅ No abnormal test results for ${physicianName} in ${monthRangeText}.`);
  412 |   } else {
  413 |     for (let i = 0; i < abnormalCount; i++) {
  414 |       const row = this.physicianNameElements.nth(i);
  415 |       const spanLocator = row.locator('span').first();
  416 |  
  417 |       if (await spanLocator.isVisible()) {
  418 |         const testName = await spanLocator.innerText();
  419 |         const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  420 |         console.log(`🔴 ${testName} - Physician: ${physician} - Status: ABNORMAL`);
  421 |       } else {
  422 |         console.log(`⚠️ Row ${i}: Test name span not visible.`);
  423 |       }
  424 |     }
  425 |   }
  426 |
  427 |   await this.page.waitForLoadState('networkidle');
  428 |
  429 |   // Step 5: Uncheck 'Abnormal' checkbox safely
  430 |   let checkboxStatus = '';
  431 |   if (await this.checkboxAbnormal.isChecked()) {
  432 |     try {
  433 |       await this.checkboxAbnormal.uncheck();
  434 |       await this.page.waitForTimeout(500);
  435 |       await expect(this.checkboxAbnormal).not.toBeChecked();
  436 |       checkboxStatus = 'Unchecked';
  437 |     } catch (error) {
  438 |       console.log('❌ Failed to uncheck checkbox:', error);
  439 |       checkboxStatus = 'Uncheck failed';
  440 |     }
  441 |   } else {
  442 |     await expect(this.checkboxAbnormal).not.toBeChecked();
  443 |     checkboxStatus = 'Already Unchecked';
  444 |   }
  445 |   console.log('Checkbox status is:', checkboxStatus);
  446 |
  447 |   // Step 6: Apply filter again for normal tests
  448 |   await this.applyButton.click();
  449 |   await this.page.evaluate(() => window.scrollBy(0, 500));
  450 |   await this.page.waitForTimeout(500);
  451 |
  452 |   const totalRows = await this.allRows.count();
  453 |   let foundNormal = false;
  454 |
  455 |   for (let i = 0; i < totalRows; i++) {
  456 |     const row = this.allRows.nth(i);
  457 |     const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
  458 |
  459 |     if (isAbnormal === 0) {
  460 |       const testName = await row.locator('span').first().innerText();
> 461 |       const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
      |                                                                                     ^ TimeoutError: locator.innerText: Timeout 10000ms exceeded.
  462 |       console.log(`🟢 ${testName} - Physician: ${physician} - Status: UNABNORMAL`);
  463 |       foundNormal = true;
  464 |     }
  465 |   }
  466 |
  467 |   if (!foundNormal) {
  468 |     console.log(`✅ No UNABNORMAL test results for ${physicianName} in ${monthRangeText}.`);
  469 |   }
  470 |
  471 |   // Step 7: Clear all filters
  472 |   await this.clearFilters();
  473 | }
  474 |
  475 |
  476 |  
  477 | // async runAbnormalTestFlow(monthRangeText, physicianName) {
  478 | //   // Step 1: Select Date Range and Physician
  479 | //   // await this.optionDateRangephysicain(monthRangeText);
  480 | //   // await this.physician(physicianName);
  481 |
  482 | //   // Step 2: Check 'Abnormal' checkbox
  483 | //   await this.checkboxAbnormal.check();
  484 | //   const isChecked = await this.checkboxAbnormal.isChecked();
  485 | //   console.log("✅ Abnormal checkbox is checked:", isChecked);
  486 |
  487 | //   // Step 3: Apply filter and log abnormal results
  488 | //   await this.applyButton.click();
  489 |
  490 | //      await this.page.evaluate(() => {
  491 | //     window.scrollBy(0, 500); // Scroll down by 500 pixels
  492 | //   });
  493 | //   await this.page.waitForTimeout(500); // Small pause after scroll
  494 |
  495 |
  496 | //   const abnormalCount = await this.physicianNameElements.count();
  497 |
  498 | //   if (abnormalCount === 0) {
  499 | //     console.log(`✅ No abnormal test results for ${physicianName} in ${monthRangeText}.`);
  500 | //   } else {
  501 | //     for (let i = 0; i < abnormalCount; i++) {
  502 | //       const row = this.physicianNameElements.nth(i);
  503 | //        const spanLocator = row.locator('span').first();
  504 | // await spanLocator.waitFor({ state: 'attached', timeout: 5000 });
  505 |
  506 | // if (await spanLocator.isVisible()) {
  507 | //   const testName = await spanLocator.innerText();
  508 | //   console.log(`Physician Name: ${testName}`);
  509 | // } else {
  510 | //   console.log(`⚠️ Row ${i}: Span not visible.`);
  511 | // }
  512 |
  513 |
  514 | //       // const testName = await row.locator('span').first().innerText();
  515 | //       const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  516 | //       console.log(`🔴 ${testName} - Physician: ${physician} - Status: ABNORMAL`);
  517 | //     }
  518 | //   }
  519 | //     await this.page.waitForLoadState('networkidle');
  520 |
  521 | //   // Step 4: Uncheck 'Abnormal' checkbox safely
  522 |
  523 | // let checkboxStatus = '';
  524 |
  525 | // if (await this.checkboxAbnormal.isChecked()) {
  526 | //   try {
  527 | //     await this.checkboxAbnormal.uncheck(); // Fallback for custom checkboxes
  528 | //     await this.page.waitForTimeout(500); // Wait for UI to update
  529 |
  530 | //     // Assertion to verify checkbox is unchecked
  531 | //     await expect(this.checkboxAbnormal).not.toBeChecked();
  532 |
  533 | //     checkboxStatus = 'Unchecked';
  534 | //   } catch (error) {
  535 | //     console.log('Failed to uncheck checkbox:', error);
  536 | //     checkboxStatus = 'Uncheck failed';
  537 | //   }
  538 | // } else {
  539 | //   // Optional assertion for already unchecked state
  540 | //   await expect(this.checkboxAbnormal).not.toBeChecked();
  541 | //   checkboxStatus = 'Already Unchecked';
  542 | // }
  543 |
  544 |
  545 | // console.log('Checkbox status is:', checkboxStatus);
  546 | //   // const isUnchecked = await this.checkboxAbnormal.isChecked();
  547 | //   // console.log("Is checkbox checked? ", isUnchecked); // should be false
  548 |
  549 | //   // Step 5: Apply filter again and check for non-abnormal (normal) results
  550 | //   await this.applyButton.click();
  551 |
  552 | //     await this.page.evaluate(() => {
  553 | //     window.scrollBy(0, 500); // Scroll down by 500 pixels
  554 | //   });
  555 | //   await this.page.waitForTimeout(500); // Small pause after scroll
  556 |
  557 | //   const total = await this.allRows.count();
  558 | //   let foundNormal = false;
  559 |
  560 | //   for (let i = 0; i < total; i++) {
  561 | //     const row = this.allRows.nth(i);
```