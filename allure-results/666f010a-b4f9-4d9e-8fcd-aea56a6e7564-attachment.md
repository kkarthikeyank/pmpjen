# Test info

- Name: Member Portal - Labs Flow >> Check abnormal check and uncheck  physician name
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:112:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('//p[starts-with(@id, \'physicianText\')]').first().locator('span').first()

    at LabsPage.runAbnormalTestFlow (/home/karthi/pmp/src/pages/LabsPage.js:423:25)
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
  396 |
  397 | async runAbnormalTestFlow(monthRangeText, physicianName) {
  398 |   // Step 1: (Optional) Select Date Range and Physician (commented out in your code)
  399 |   // await this.optionDateRangephysicain(monthRangeText);
  400 |   // await this.physician(physicianName);
  401 |
  402 |   // Step 2: Check 'Abnormal' checkbox
  403 |   await this.checkboxAbnormal.check();
  404 |   const isChecked = await this.checkboxAbnormal.isChecked();
  405 |   console.log("✅ Abnormal checkbox is checked:", isChecked);
  406 |
  407 |   // Step 3: Apply filter and scroll page
  408 |   await this.applyButton.click();
  409 |   await this.page.evaluate(() => window.scrollBy(0, 500)); // Scroll down by 500px
  410 |   await this.page.waitForTimeout(500);
  411 |
  412 |   // Count abnormal results rows
  413 |   const abnormalCount = await this.physicianNameElements.count();
  414 |
  415 |   if (abnormalCount === 0) {
  416 |     console.log(`✅ No abnormal test results for ${physicianName} in ${monthRangeText}.`);
  417 |   } else {
  418 |     for (let i = 0; i < abnormalCount; i++) {
  419 |       const row = this.physicianNameElements.nth(i);
  420 |       const spanLocator = row.locator('span').first();
  421 |
  422 |       // Wait for the span to be attached to DOM
> 423 |       await spanLocator.waitFor({ state: 'attached', timeout: 5000 });
      |                         ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
  424 |
  425 |       if (await spanLocator.isVisible()) {
  426 |         const testName = await spanLocator.innerText();
  427 |         const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  428 |         console.log(`🔴 ${testName} - Physician: ${physician} - Status: ABNORMAL`);
  429 |       } else {
  430 |         console.log(`⚠️ Row ${i}: Span not visible.`);
  431 |       }
  432 |     }
  433 |   }
  434 |
  435 |   // Wait for network idle after filter applied
  436 |   await this.page.waitForLoadState('networkidle');
  437 |
  438 |   // Step 4: Uncheck 'Abnormal' checkbox safely
  439 |   let checkboxStatus = '';
  440 |   if (await this.checkboxAbnormal.isChecked()) {
  441 |     try {
  442 |       await this.checkboxAbnormal.uncheck();
  443 |       await this.page.waitForTimeout(500);
  444 |       await expect(this.checkboxAbnormal).not.toBeChecked();
  445 |       checkboxStatus = 'Unchecked';
  446 |     } catch (error) {
  447 |       console.log('Failed to uncheck checkbox:', error);
  448 |       checkboxStatus = 'Uncheck failed';
  449 |     }
  450 |   } else {
  451 |     await expect(this.checkboxAbnormal).not.toBeChecked();
  452 |     checkboxStatus = 'Already Unchecked';
  453 |   }
  454 |   console.log('Checkbox status is:', checkboxStatus);
  455 |
  456 |   // Step 5: Apply filter again for normal (non-abnormal) results
  457 |   await this.applyButton.click();
  458 |   await this.page.evaluate(() => window.scrollBy(0, 500));
  459 |   await this.page.waitForTimeout(500);
  460 |
  461 |   const total = await this.allRows.count();
  462 |   let foundNormal = false;
  463 |
  464 |   for (let i = 0; i < total; i++) {
  465 |     const row = this.allRows.nth(i);
  466 |     const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
  467 |     if (isAbnormal === 0) {
  468 |       const testName = await row.locator('span').first().innerText();
  469 |       const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  470 |       console.log(`🟢 ${testName} - Physician: ${physician} - Status: UNABNORMAL`);
  471 |       foundNormal = true;
  472 |     }
  473 |   }
  474 |   if (!foundNormal) {
  475 |     console.log(`✅ No UNABNORMAL test results for ${physicianName} in ${monthRangeText}.`);
  476 |   }
  477 |
  478 |   // Step 6: Clear all filters
  479 |   await this.clearFilters();
  480 | }
  481 |
  482 |
  483 |
  484 |  
  485 | // async runAbnormalTestFlow(monthRangeText, physicianName) {
  486 | //   // Step 1: Select Date Range and Physician
  487 | //   // await this.optionDateRangephysicain(monthRangeText);
  488 | //   // await this.physician(physicianName);
  489 |
  490 | //   // Step 2: Check 'Abnormal' checkbox
  491 | //   await this.checkboxAbnormal.check();
  492 | //   const isChecked = await this.checkboxAbnormal.isChecked();
  493 | //   console.log("✅ Abnormal checkbox is checked:", isChecked);
  494 |
  495 | //   // Step 3: Apply filter and log abnormal results
  496 | //   await this.applyButton.click();
  497 |
  498 | //      await this.page.evaluate(() => {
  499 | //     window.scrollBy(0, 500); // Scroll down by 500 pixels
  500 | //   });
  501 | //   await this.page.waitForTimeout(500); // Small pause after scroll
  502 |
  503 |
  504 | //   const abnormalCount = await this.physicianNameElements.count();
  505 |
  506 | //   if (abnormalCount === 0) {
  507 | //     console.log(`✅ No abnormal test results for ${physicianName} in ${monthRangeText}.`);
  508 | //   } else {
  509 | //     for (let i = 0; i < abnormalCount; i++) {
  510 | //       const row = this.physicianNameElements.nth(i);
  511 | //        const spanLocator = row.locator('span').first();
  512 | // await spanLocator.waitFor({ state: 'attached', timeout: 5000 });
  513 |
  514 | // if (await spanLocator.isVisible()) {
  515 | //   const testName = await spanLocator.innerText();
  516 | //   console.log(`Physician Name: ${testName}`);
  517 | // } else {
  518 | //   console.log(`⚠️ Row ${i}: Span not visible.`);
  519 | // }
  520 |
  521 |
  522 | //       // const testName = await row.locator('span').first().innerText();
  523 | //       const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
```