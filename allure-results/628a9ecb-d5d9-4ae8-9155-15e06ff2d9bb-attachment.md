# Test info

- Name: Member Portal - Labs Flow >> Check abnormal check and uncheck  physician name
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:112:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Last 36 Months') resolved to 2 elements:
    1) <button type="button" aria-expanded="true" _ngcontent-xhx-c271="" data-bs-toggle="dropdown" id="dropdownDateFilterButton" data-id="dropdownDateFilterButton" class="btn btn-outline-gray btn-block dropdown-toggle text-left font-size-sm w-100 show"> Last 36 Months </button> aka getByRole('button', { name: 'Last 36 Months' })
    2) <li tabindex="0" data-id="undefined-4" _ngcontent-xhx-c271="" class="dropdown-item font-size-sm"> Last 36 Months </li> aka getByRole('listitem').filter({ hasText: 'Last 36 Months' })

Call log:
  - waiting for getByText('Last 36 Months')

    at LabsPage.searchphysicainabnormalcheck (/home/karthi/pmp/src/pages/LabsPage.js:397:42)
    at /home/karthi/pmp/src/tests/labspagegroup.spec.js:117:7
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
- button "Last 36 Months" [expanded]
- list:
  - listitem: Last 3 Months
  - listitem: Last 6 Months
  - listitem: Last 12 Months
  - listitem: Last 24 Months
  - listitem: Last 36 Months
  - listitem: Last 60 Months
  - listitem: Custom
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
  297 | //     const spans = row.locator('span');
  298 | //     const spanCount = await spans.count();
  299 |
  300 | //     let textParts = [];
  301 | //     for (let j = 0; j < spanCount; j++) {
  302 | //       const part = await spans.nth(j).innerText();
  303 | //       textParts.push(part.trim());
  304 | //     }
  305 |
  306 | //     const rowText = textParts.join(' ');
  307 | //     if (rowText.includes('ABNORMAL')) {
  308 | //       console.log(`  - ${rowText}`);
  309 | //       found = true;
  310 | //     }
  311 | //   }
  312 |
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
  395 |     async searchphysicainabnormalcheck(rangeText) {
  396 |     await this.last36MonthsButton.click();
> 397 |     await this.page.getByText(rangeText).click();
      |                                          ^ Error: locator.click: Error: strict mode violation: getByText('Last 36 Months') resolved to 2 elements:
  398 |   }
  399 |      async searchPhysicianabnormal(name) {
  400 |     await this.physiciansearchinput.click();
  401 |     await this.physiciansearchinput.fill(name);
  402 |    await this.physiciansearchinput.waitFor({ state: 'visible' });
  403 |   }
  404 |
  405 |   async checkboxphysician(){
  406 |    await this.checkboxAbnormal.check();
  407 |    await this.applyButton.click();
  408 |       await this.page.evaluate(() => {
  409 |     window.scrollBy(0, 500); // Scroll down by 500 pixels
  410 |   });
  411 |     await this.page.waitForTimeout(500); // Small pause after scroll
  412 |
  413 |
  414 |   }
  415 |
  416 |   async uncheckboxphysician(){
  417 |    await this.checkboxAbnormal.uncheck();
  418 |    await this.applyButton.click();
  419 |       await this.page.evaluate(() => {
  420 |     window.scrollBy(0, 500); // Scroll down by 500 pixels
  421 |   });
  422 |     await this.page.waitForTimeout(500); // Small pause after scroll
  423 |
  424 |   }
  425 |
  426 | async printPhysiciansAndNormalTests() {
  427 |   // Print unique physician names
  428 |   await this.page.waitForSelector("//p[starts-with(@id, 'physicianText')]", { timeout: 5000 }).catch(() => null);
  429 |   const physicianCount = await this.physicianNameElements.count();
  430 |   if (physicianCount === 0) {
  431 |     console.log('No physician displayed');
  432 |   } else {
  433 |     const uniqueNames = new Set();
  434 |     for (let i = 0; i < physicianCount; i++) {
  435 |       uniqueNames.add(await this.physicianNameElements.nth(i).innerText());
  436 |     }
  437 |     console.log(`Physicians displayed (${uniqueNames.size}):`);
  438 |     for (const name of uniqueNames) {
  439 |       console.log(` - ${name}`);
  440 |     }
  441 |   }
  442 |
  443 |   // Print test names excluding abnormal ones
  444 |   const allRows = this.page.locator(`//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row')]`);
  445 |   const total = await allRows.count();
  446 |   const testNames = [];
  447 |
  448 |   for (let i = 0; i < total; i++) {
  449 |     const row = allRows.nth(i);
  450 |     const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
  451 |     if (isAbnormal === 0) {
  452 |       const testName = await row.locator('span').first().innerText();
  453 |       testNames.push(testName);
  454 |     }
  455 |   }
  456 |
  457 |   if (testNames.length === 0) {
  458 |     console.log('✅ No normal/non-abnormal test results found.');
  459 |   } else {
  460 |     console.log('🟢 Non-abnormal test results found:');
  461 |     testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  462 |   }
  463 |
  464 | }
  465 |
  466 |
  467 |
  468 |
  469 |
  470 | // async runAbnormalTestFlow(monthRangeText, physicianName) {
  471 | //   // Step 1: (Optional) Select Date Range and Physician (commented out in your code)
  472 | //   // await this.optionDateRangephysicain(monthRangeText);
  473 | //   // await this.physician(physicianName);
  474 |
  475 | //   // Step 2: Check 'Abnormal' checkbox
  476 | //   await this.checkboxAbnormal.check();
  477 | //   const isChecked = await this.checkboxAbnormal.isChecked();
  478 | //   console.log("✅ Abnormal checkbox is checked:", isChecked);
  479 |
  480 | //   // Step 3: Apply filter and scroll page
  481 | //   await this.applyButton.click();
  482 | //   await this.page.evaluate(() => window.scrollBy(0, 500)); // Scroll down by 500px
  483 | //   await this.page.waitForTimeout(500);
  484 |
  485 | //   // Count abnormal results rows
  486 | //   const abnormalCount = await this.physicianNameElements.count();
  487 |
  488 | //   if (abnormalCount === 0) {
  489 | //     console.log(`✅ No abnormal test results for ${physicianName} in ${monthRangeText}.`);
  490 | //   } else {
  491 | //     for (let i = 0; i < abnormalCount; i++) {
  492 | //       const row = this.physicianNameElements.nth(i);
  493 | //       const spanLocator = row.locator('span').first();
  494 |
  495 | //       // Wait for the span to be attached to DOM
  496 | //       await spanLocator.waitFor({ state: 'attached', timeout: 5000 });
  497 |
```