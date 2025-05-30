# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: locator.innerText: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('//div[@data-id=\'labsCardObjectResultsDiv\']//div[contains(@class, \'row\')]').first().locator('span').first()

    at LabsPage.printAbnormalpy (/home/karthi/pmp/src/pages/LabsPage.js:464:56)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:207:8
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
- textbox "ex. John Smith": Down
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
- text: "Date Range: from 05-26-2022 to 05-26-2025 Show"
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
  364 | }
  365 |
  366 | // async printNonAbnormalTestNames() {
  367 | //   const count = await this.testNameLocators.count();
  368 | //   let found = false;
  369 |
  370 | //   for (let i = 0; i < count; i++) {
  371 | //     const row = this.testNameLocators.nth(i);
  372 | //     const spans = row.locator('span');
  373 | //     const spanCount = await spans.count();
  374 |
  375 | //     let textParts = [];
  376 | //     for (let j = 0; j < spanCount; j++) {
  377 | //       const part = await spans.nth(j).innerText();
  378 | //       textParts.push(part.trim());
  379 | //     }
  380 |
  381 | //     const rowText = textParts.join(' ');
  382 | //     if (!rowText.includes('ABNORMAL')) {
  383 | //       console.log(`  - ${rowText}`);
  384 | //       found = true;
  385 | //     }
  386 | //   }
  387 |
  388 | //   if (!found) {
  389 | //     console.log('✅ No normal/non-abnormal test results found.');
  390 | //   }
  391 | // }
  392 |
  393 |
  394 |
  395 |
  396 | //  scenario : search for abnormal check  and uncheck status  test results with  physician name
  397 |     async searchphysicainabnormalcheck(rangeText) {
  398 |
  399 |       await this.last36MonthsButton.waitFor({ state: 'visible' });
  400 |
  401 |     await this.last36MonthsButton.click();
  402 |     // await this.page.getByText(rangeText).click();
  403 |     await this.page.locator('li.dropdown-item', { hasText: rangeText }).click();
  404 |
  405 |   }
  406 |      async searchPhysicianabnormal(physicianname) {
  407 |     await this.physiciansearchinput.click();
  408 |     await this.physiciansearchinput.fill(physicianname);
  409 |    await this.physiciansearchinput.waitFor({ state: 'visible' });
  410 |   }
  411 |
  412 |   async checkboxphysician() {
  413 |   const isChecked = await this.checkboxAbnormal.isChecked();
  414 |   if (!isChecked) {
  415 |     await this.checkboxAbnormal.click();
  416 |         console.log("checkbox checked ")
  417 |
  418 |   }
  419 |
  420 |   await this.applyButton.click();
  421 |     await this.page.evaluate(() => {
  422 |     window.scrollBy(0, 500); // Scroll down by 500 pixels
  423 |   });
  424 |   await this.page.waitForTimeout(500); // Small pause after scroll
  425 | }
  426 |
  427 | async uncheckboxphysician() {
  428 |   const isChecked = await this.checkboxAbnormal.isChecked();
  429 |   if (isChecked) {
  430 |     await this.checkboxAbnormal.uncheck();
  431 |         console.log("checkbox  unchecked ")
  432 |
  433 |   }
  434 |   await this.applyButton.click();
  435 |
  436 |   await this.page.evaluate(() => {
  437 |     window.scrollBy(0, 500); // Scroll down by 500 pixels
  438 |   });
  439 |   await this.page.waitForTimeout(500); // Small pause after scroll
  440 |
  441 | }
  442 | async printPhysicianNames() {
  443 |   const physicianNames = await this.physicianNameElements.allTextContents();
  444 |
  445 |   if (physicianNames.length > 0) {
  446 |     console.log("Physician Names:");
  447 |     physicianNames.forEach(name => console.log(name));
  448 |   } else {
  449 |     console.log("No physician names found.");
  450 |   }
  451 | }
  452 |
  453 |
  454 | async printAbnormalpy() {
  455 |   const count = await this.testNameLocators.count();
  456 |   if (count === 0) {
  457 |     console.log('✅ No abnormal test results found.');
  458 |     return;
  459 |   }
  460 |
  461 |   const testNames = [];
  462 |   for (let i = 0; i < count; i++) {
  463 |     const row = this.testNameLocators.nth(i);
> 464 |     const testName = await row.locator('span').first().innerText();
      |                                                        ^ Error: locator.innerText: Test timeout of 70000ms exceeded.
  465 |     testNames.push(testName);
  466 |   }
  467 |
  468 |   console.log('🔴 Abnormal test results found:');
  469 |   testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  470 | }
  471 |
  472 |
  473 | async printNonAbnormalpy() {
  474 |   const allRows = this.page.locator(`//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row')]`);
  475 |   const total = await allRows.count();
  476 |   const testNames = [];
  477 |
  478 |   for (let i = 0; i < total; i++) {
  479 |     const row = allRows.nth(i);
  480 |     const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
  481 |     if (isAbnormal === 0) {
  482 |       const testName = await row.locator('span').first().innerText();
  483 |       testNames.push(testName);
  484 |     }
  485 |   }
  486 |
  487 |   if (testNames.length === 0) {
  488 |     console.log('✅ No normal/non-abnormal test results found.');
  489 |   } else {
  490 |     console.log('🟢 Non-abnormal test results found:');
  491 |     testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  492 |   }
  493 | }
  494 | // async printPhysiciansAndNormalTests() {
  495 | //   // Print unique physician names
  496 | //   await this.page.waitForSelector("//p[starts-with(@id, 'physicianText')]", { timeout: 5000 }).catch(() => null);
  497 | //   const physicianCount = await this.physicianNameElements.count();
  498 | //   if (physicianCount === 0) {
  499 | //     console.log('No physician displayed');
  500 | //   } else {
  501 | //     const uniqueNames = new Set();
  502 | //     for (let i = 0; i < physicianCount; i++) {
  503 | //       uniqueNames.add(await this.physicianNameElements.nth(i).innerText());
  504 | //     }
  505 | //     console.log(`Physicians displayed (${uniqueNames.size}):`);
  506 | //     for (const name of uniqueNames) {
  507 | //       console.log(` - ${name}`);
  508 | //     }
  509 | //   }
  510 |
  511 | // }
  512 |
  513 |
  514 |
  515 |
  516 | // async runAbnormalTestFlow(monthRangeText, physicianName) {
  517 | //   // Step 1: (Optional) Select Date Range and Physician (commented out in your code)
  518 | //   // await this.optionDateRangephysicain(monthRangeText);
  519 | //   // await this.physician(physicianName);
  520 |
  521 | //   // Step 2: Check 'Abnormal' checkbox
  522 | //   await this.checkboxAbnormal.check();
  523 | //   const isChecked = await this.checkboxAbnormal.isChecked();
  524 | //   console.log("✅ Abnormal checkbox is checked:", isChecked);
  525 |
  526 | //   // Step 3: Apply filter and scroll page
  527 | //   await this.applyButton.click();
  528 | //   await this.page.evaluate(() => window.scrollBy(0, 500)); // Scroll down by 500px
  529 | //   await this.page.waitForTimeout(500);
  530 |
  531 | //   // Count abnormal results rows
  532 | //   const abnormalCount = await this.physicianNameElements.count();
  533 |
  534 | //   if (abnormalCount === 0) {
  535 | //     console.log(`✅ No abnormal test results for ${physicianName} in ${monthRangeText}.`);
  536 | //   } else {
  537 | //     for (let i = 0; i < abnormalCount; i++) {
  538 | //       const row = this.physicianNameElements.nth(i);
  539 | //       const spanLocator = row.locator('span').first();
  540 |
  541 | //       // Wait for the span to be attached to DOM
  542 | //       await spanLocator.waitFor({ state: 'attached', timeout: 5000 });
  543 |
  544 | //       if (await spanLocator.isVisible()) {
  545 | //         const testName = await spanLocator.innerText();
  546 | //         const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  547 | //         console.log(`🔴 ${testName} - Physician: ${physician} - Status: ABNORMAL`);
  548 | //       } else {
  549 | //         console.log(`⚠️ Row ${i}: Span not visible.`);
  550 | //       }
  551 | //     }
  552 | //   }
  553 |
  554 | //   // Wait for network idle after filter applied
  555 | //   await this.page.waitForLoadState('networkidle');
  556 |
  557 | //   // Step 4: Uncheck 'Abnormal' checkbox safely
  558 | //   let checkboxStatus = '';
  559 | //   if (await this.checkboxAbnormal.isChecked()) {
  560 | //     try {
  561 | //       await this.checkboxAbnormal.uncheck();
  562 | //       await this.page.waitForTimeout(500);
  563 | //       await expect(this.checkboxAbnormal).not.toBeChecked();
  564 | //       checkboxStatus = 'Unchecked';
```