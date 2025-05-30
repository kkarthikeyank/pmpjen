# Test info

- Name: Member Portal - Labs Flow >> Check abnormal check and uncheck  physician name
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:112:5

# Error details

```
TimeoutError: locator.innerText: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//div[@data-id=\'labsCardObjectResultsDiv\']//div[contains(@class, \'row\')]').first().locator('.test-name-class')

    at LabsPage.printPhysicianTestStatus (/home/karthi/pmp/src/pages/LabsPage.js:469:64)
    at /home/karthi/pmp/src/tests/labspagegroup.spec.js:122:22
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
- textbox "ex. John Smith": Scott Down
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
  369 | //   for (let i = 0; i < count; i++) {
  370 | //     const row = this.testNameLocators.nth(i);
  371 | //     const spans = row.locator('span');
  372 | //     const spanCount = await spans.count();
  373 |
  374 | //     let textParts = [];
  375 | //     for (let j = 0; j < spanCount; j++) {
  376 | //       const part = await spans.nth(j).innerText();
  377 | //       textParts.push(part.trim());
  378 | //     }
  379 |
  380 | //     const rowText = textParts.join(' ');
  381 | //     if (!rowText.includes('ABNORMAL')) {
  382 | //       console.log(`  - ${rowText}`);
  383 | //       found = true;
  384 | //     }
  385 | //   }
  386 |
  387 | //   if (!found) {
  388 | //     console.log('✅ No normal/non-abnormal test results found.');
  389 | //   }
  390 | // }
  391 |
  392 |
  393 |
  394 |
  395 | //  scenario : search for abnormal check  and uncheck status  test results with  physician name
  396 |     async searchphysicainabnormalcheck(rangeText) {
  397 |     await this.last36MonthsButton.click();
  398 |     // await this.page.getByText(rangeText).click();
  399 |     await this.page.locator('li.dropdown-item', { hasText: rangeText }).click();
  400 |
  401 |   }
  402 |      async searchPhysicianabnormal(physicianname) {
  403 |     await this.physiciansearchinput.click();
  404 |     await this.physiciansearchinput.fill(physicianname);
  405 |    await this.physiciansearchinput.waitFor({ state: 'visible' });
  406 |   }
  407 |
  408 |   async checkboxphysician() {
  409 |   const isChecked = await this.checkboxAbnormal.isChecked();
  410 |   if (!isChecked) {
  411 |     await this.checkboxAbnormal.click();
  412 |   }
  413 |
  414 |   await this.applyButton.click();
  415 |     await this.page.evaluate(() => {
  416 |     window.scrollBy(0, 500); // Scroll down by 500 pixels
  417 |   });
  418 |   await this.page.waitForTimeout(500); // Small pause after scroll
  419 | }
  420 |
  421 | async uncheckboxphysician() {
  422 |   const isChecked = await this.checkboxAbnormal.isChecked();
  423 |   if (isChecked) {
  424 |     await this.checkboxAbnormal.uncheck();
  425 |   }
  426 |   await this.applyButton.click();
  427 |
  428 |   await this.page.evaluate(() => {
  429 |     window.scrollBy(0, 500); // Scroll down by 500 pixels
  430 |   });
  431 |   await this.page.waitForTimeout(500); // Small pause after scroll
  432 |
  433 | }
  434 |
  435 |
  436 | // async printPhysiciansAndNormalTests() {
  437 | //   // Print unique physician names
  438 | //   await this.page.waitForSelector("//p[starts-with(@id, 'physicianText')]", { timeout: 5000 }).catch(() => null);
  439 | //   const physicianCount = await this.physicianNameElements.count();
  440 | //   if (physicianCount === 0) {
  441 | //     console.log('No physician displayed');
  442 | //   } else {
  443 | //     const uniqueNames = new Set();
  444 | //     for (let i = 0; i < physicianCount; i++) {
  445 | //       uniqueNames.add(await this.physicianNameElements.nth(i).innerText());
  446 | //     }
  447 | //     console.log(`Physicians displayed (${uniqueNames.size}):`);
  448 | //     for (const name of uniqueNames) {
  449 | //       console.log(` - ${name}`);
  450 | //     }
  451 | //   }
  452 |
  453 | // }
  454 |
  455 | async printPhysicianTestStatus() {
  456 |   const physicianCount = await this.physicianNameElements.count();
  457 |   const testCount = await this.testNameLocators.count();
  458 |
  459 |   for (let i = 0; i < testCount; i++) {
  460 |     // Get physician name - if it’s one per test, otherwise adjust logic as needed
  461 |     const physicianName = i < physicianCount 
  462 |       ? await this.physicianNameElements.nth(i).innerText()
  463 |       : "Physician name not found";
  464 |
  465 |     // For the test row, get test name and status
  466 |     const testRow = this.testNameLocators.nth(i);
  467 |
  468 |     // You need to provide selectors relative to testRow for test name and status, for example:
> 469 |     const testName = await testRow.locator(".test-name-class").innerText();  // replace with real selector
      |                                                                ^ TimeoutError: locator.innerText: Timeout 10000ms exceeded.
  470 |     const status = await testRow.locator(".status-class").innerText();       // replace with real selector
  471 |
  472 |     console.log(`Physician: ${physicianName}, Test: ${testName}, Status: ${status}`);
  473 |   }
  474 | }
  475 |
  476 |
  477 |
  478 | // async runAbnormalTestFlow(monthRangeText, physicianName) {
  479 | //   // Step 1: (Optional) Select Date Range and Physician (commented out in your code)
  480 | //   // await this.optionDateRangephysicain(monthRangeText);
  481 | //   // await this.physician(physicianName);
  482 |
  483 | //   // Step 2: Check 'Abnormal' checkbox
  484 | //   await this.checkboxAbnormal.check();
  485 | //   const isChecked = await this.checkboxAbnormal.isChecked();
  486 | //   console.log("✅ Abnormal checkbox is checked:", isChecked);
  487 |
  488 | //   // Step 3: Apply filter and scroll page
  489 | //   await this.applyButton.click();
  490 | //   await this.page.evaluate(() => window.scrollBy(0, 500)); // Scroll down by 500px
  491 | //   await this.page.waitForTimeout(500);
  492 |
  493 | //   // Count abnormal results rows
  494 | //   const abnormalCount = await this.physicianNameElements.count();
  495 |
  496 | //   if (abnormalCount === 0) {
  497 | //     console.log(`✅ No abnormal test results for ${physicianName} in ${monthRangeText}.`);
  498 | //   } else {
  499 | //     for (let i = 0; i < abnormalCount; i++) {
  500 | //       const row = this.physicianNameElements.nth(i);
  501 | //       const spanLocator = row.locator('span').first();
  502 |
  503 | //       // Wait for the span to be attached to DOM
  504 | //       await spanLocator.waitFor({ state: 'attached', timeout: 5000 });
  505 |
  506 | //       if (await spanLocator.isVisible()) {
  507 | //         const testName = await spanLocator.innerText();
  508 | //         const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  509 | //         console.log(`🔴 ${testName} - Physician: ${physician} - Status: ABNORMAL`);
  510 | //       } else {
  511 | //         console.log(`⚠️ Row ${i}: Span not visible.`);
  512 | //       }
  513 | //     }
  514 | //   }
  515 |
  516 | //   // Wait for network idle after filter applied
  517 | //   await this.page.waitForLoadState('networkidle');
  518 |
  519 | //   // Step 4: Uncheck 'Abnormal' checkbox safely
  520 | //   let checkboxStatus = '';
  521 | //   if (await this.checkboxAbnormal.isChecked()) {
  522 | //     try {
  523 | //       await this.checkboxAbnormal.uncheck();
  524 | //       await this.page.waitForTimeout(500);
  525 | //       await expect(this.checkboxAbnormal).not.toBeChecked();
  526 | //       checkboxStatus = 'Unchecked';
  527 | //     } catch (error) {
  528 | //       console.log('Failed to uncheck checkbox:', error);
  529 | //       checkboxStatus = 'Uncheck failed';
  530 | //     }
  531 | //   } else {
  532 | //     await expect(this.checkboxAbnormal).not.toBeChecked();
  533 | //     checkboxStatus = 'Already Unchecked';
  534 | //   }
  535 | //   console.log('Checkbox status is:', checkboxStatus);
  536 |
  537 | //   // Step 5: Apply filter again for normal (non-abnormal) results
  538 | //   await this.applyButton.click();
  539 | //   await this.page.evaluate(() => window.scrollBy(0, 500));
  540 | //   await this.page.waitForTimeout(500);
  541 |
  542 | //   const total = await this.allRows.count();
  543 | //   let foundNormal = false;
  544 |
  545 | //   for (let i = 0; i < total; i++) {
  546 | //     const row = this.allRows.nth(i);
  547 | //     const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
  548 | //     if (isAbnormal === 0) {
  549 | //       const testName = await row.locator('span').first().innerText();
  550 | //       const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  551 | //       console.log(`🟢 ${testName} - Physician: ${physician} - Status: UNABNORMAL`);
  552 | //       foundNormal = true;
  553 | //     }
  554 | //   }
  555 | //   if (!foundNormal) {
  556 | //     console.log(`✅ No UNABNORMAL test results for ${physicianName} in ${monthRangeText}.`);
  557 | //   }
  558 |
  559 | //   // Step 6: Clear all filters
  560 | //   await this.clearFilters();
  561 | // }
  562 |
  563 |
  564 |
  565 |  
  566 | // async runAbnormalTestFlow(monthRangeText, physicianName) {
  567 | //   // Step 1: Select Date Range and Physician
  568 | //   // await this.optionDateRangephysicain(monthRangeText);
  569 | //   // await this.physician(physicianName);
```