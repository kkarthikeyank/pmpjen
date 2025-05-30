# Test info

- Name: Member Portal - Labs Flow >> Check abnormal check and uncheck 
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:59:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//p[starts-with(@id, \'physicianText\')]').first().locator('span').first() to be visible

    at LabsPage.runAbnormalTestFlow (/home/karthi/pmp/src/pages/LabsPage.js:313:41)
    at /home/karthi/pmp/src/tests/labspagegroup.spec.js:65:7
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
- button "Last 60 Months"
- paragraph: Status
- checkbox "Checkbox for Abnormal" [checked]
- text: Abnormal
- button "Apply"
- text: Clear
- separator
- text: "Date Range: from 05-16-2020 to 05-16-2025 Show"
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
  213 |
  214 |     // Start Date
  215 |     await this.selectYear(start.year);
  216 |     await this.selectMonth(start.month);
  217 |     await this.dateCell(start.dayName, start.monthName, start.day, start.year).click();
  218 |
  219 |     // End Date
  220 |     await this.selectYear(end.year);
  221 |     await this.selectMonth(end.month);
  222 |     await this.dateCell(end.dayName, end.monthName, end.day, end.year).click();
  223 |   }
  224 |
  225 |
  226 |     // Check Abnormal checkbox
  227 | async checkAbnormalFilter() {
  228 |   const isChecked = await this.checkboxAbnormal.isChecked();
  229 |   if (!isChecked) {
  230 |     await this.checkboxAbnormal.click();
  231 |   }
  232 |   await this.applyButton.click();
  233 | }
  234 |
  235 |
  236 | // Print abnormal test names
  237 | async printAbnormalTestNames() {
  238 |   const count = await this.abnormalLocator.count();
  239 |   if (count === 0) {
  240 |     console.log('✅ No abnormal test results found.');
  241 |     return;
  242 |   }
  243 |
  244 |   const testNames = [];
  245 |   for (let i = 0; i < count; i++) {
  246 |     const row = this.abnormalLocator.nth(i);
  247 |     const testName = await row.locator('span').first().innerText();
  248 |     testNames.push(testName);
  249 |   }
  250 |
  251 |   console.log('🔴 Abnormal test results found:');
  252 |   testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  253 | }
  254 |   // Uncheck Abnormal checkbox
  255 | async uncheckAbnormalFilter() {
  256 |   const isChecked = await this.checkboxAbnormal.isChecked();
  257 |   if (isChecked) {
  258 |     await this.checkboxAbnormal.uncheck();
  259 |   }
  260 |   await this.applyButton.click();
  261 | }
  262 |
  263 |
  264 | // Print test names that are NOT abnormal
  265 | async printNonAbnormalTestNames() {
  266 |   const allRows = this.page.locator(`//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row')]`);
  267 |   const total = await allRows.count();
  268 |   const testNames = [];
  269 |
  270 |   for (let i = 0; i < total; i++) {
  271 |     const row = allRows.nth(i);
  272 |     const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
  273 |     if (isAbnormal === 0) {
  274 |       const testName = await row.locator('span').first().innerText();
  275 |       testNames.push(testName);
  276 |     }
  277 |   }
  278 |
  279 |   if (testNames.length === 0) {
  280 |     console.log('✅ No normal/non-abnormal test results found.');
  281 |   } else {
  282 |     console.log('🟢 Non-abnormal test results found:');
  283 |     testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  284 |   }
  285 | }
  286 |
  287 |
  288 | //  scenario : search for abnormal check  and uncheck status  test results with  physician name
  289 |
  290 | async runAbnormalTestFlow(monthRangeText, physicianName) {
  291 |   // Step 1: Select Date Range and Physician
  292 |   await this.selectDateRangephysicain(monthRangeText);
  293 |   await this.searchPhysician(physicianName);
  294 |
  295 |   // Step 2: Check 'Abnormal' checkbox
  296 |   await this.checkboxAbnormal.check();
  297 |   const isChecked = await this.checkboxAbnormal.isChecked();
  298 |   console.log("✅ Abnormal checkbox is checked:", isChecked);
  299 |
  300 |   // Step 3: Apply filter and log abnormal results
  301 |   await this.applyButton.click();
  302 |
  303 |     await this.page.waitForLoadState('networkidle');
  304 |
  305 |
  306 |   const abnormalCount = await this.physicianNameElements.count();
  307 |
  308 |   if (abnormalCount === 0) {
  309 |     console.log(`✅ No abnormal test results for ${physicianName} in ${monthRangeText}.`);
  310 |   } else {
  311 |     for (let i = 0; i < abnormalCount; i++) {
  312 |       const row = this.physicianNameElements.nth(i);
> 313 |       await row.locator('span').first().waitFor({ state: 'visible' });
      |                                         ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  314 |       const testName = await row.locator('span').first().innerText();
  315 |
  316 |       // const testName = await row.locator('span').first().innerText();
  317 |       const physician = await row.locator("p[id*='physicianText']").innerText();
  318 |       console.log(`🔴 ${testName} - Physician: ${physician} - Status: ABNORMAL`);
  319 |     }
  320 |   }
  321 |     await this.page.waitForLoadState('networkidle');
  322 |
  323 |   // Step 4: Uncheck 'Abnormal' checkbox safely
  324 |   if (await this.checkboxAbnormal.isChecked()) {
  325 |     try {
  326 |       await this.checkboxAbnormal.uncheck(); // Fallback for custom checkboxes
  327 |
  328 |     } catch {
  329 |     }
  330 |     await this.page.waitForTimeout(500); // Wait for UI to update
  331 |   }
  332 |
  333 |   const isUnchecked = await this.checkboxAbnormal.isChecked();
  334 |   console.log("Is checkbox checked? ", isUnchecked); // should be false
  335 |
  336 |   // Step 5: Apply filter again and check for non-abnormal (normal) results
  337 |   await this.applyButton.click();
  338 |   const total = await this.allRows.count();
  339 |   let foundNormal = false;
  340 |
  341 |   for (let i = 0; i < total; i++) {
  342 |     const row = this.allRows.nth(i);
  343 |     const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
  344 |     if (isAbnormal === 0) {
  345 |       const testName = await row.locator('span').first().innerText();
  346 |       const physician = await row.locator("p[id*='physicianText']").innerText();
  347 |       console.log(`🟢 ${testName} - Physician: ${physician} - Status: UNABNORMAL`);
  348 |       foundNormal = true;
  349 |     }
  350 |   }
  351 |
  352 |   if (!foundNormal) {
  353 |     console.log(`✅ No UNABNORMAL test results for ${physicianName} in ${monthRangeText}.`);
  354 |   }
  355 |
  356 |   // Step 6: Clear all filters
  357 |   await this.clearFilters();
  358 | }
  359 |
  360 |
  361 | //     async selectDateRangephysicain(monthRangeText) {
  362 | //     await this.last36MonthsButton.click();
  363 | //     await this.page.locator(`text=${monthRangeText}`).click();
  364 | //   }
  365 |
  366 | //   async searchPhysician(name) {
  367 | //     await this.physiciansearchinput.fill(name);
  368 | //     await this.page.waitForTimeout(1000); // wait for filter to apply
  369 | //   }
  370 |
  371 | //   async applyfliter() {
  372 | //     await this.applyButton.click();
  373 | //   }
  374 |
  375 | //   async clearFilters() {
  376 | //     if (await this.clearButton.isVisible()) {
  377 | //       await this.clearButton.click();
  378 | //     }
  379 | //   }
  380 |
  381 | //   async runAbnormalTestFlow(monthRangeText, physicianName) {
  382 | //     await this.selectDateRangephysicain(monthRangeText);
  383 | //     await this.searchPhysician(physicianName);
  384 |
  385 | //     await this.checkboxAbnormal.check();
  386 | //     // Verify it was checked
  387 | //    const isCheckedd = await this.checkboxAbnormal.isChecked();
  388 | //    console.log("✅ Abnormal checkbox is checked:", isCheckedd);
  389 | //     await this.applyfliter();
  390 |
  391 | //     const abnormalCount = await this.physicianNameElements.count();
  392 | //     if (abnormalCount === 0) {
  393 | //       console.log(`✅ No abnormal test results for ${physicianName} in ${monthRangeText}.`);
  394 | //     } else {
  395 | //       for (let i = 0; i < abnormalCount; i++) {
  396 | //         const row = this.physicianNameElements.nth(i);
  397 | //         const testName = await row.locator('span').first().innerText();
  398 | //         const physician = await row.locator("p[id*='physicianText']").innerText();
  399 | //         console.log(`🔴 ${testName} - Physician: ${physician} - Status: ABNORMAL`);
  400 | //       }
  401 | //     }
  402 |
  403 | //     // await this.checkboxAbnormal.uncheck();
  404 |
  405 | //     await this.checkboxAbnormal.uncheck();
  406 | // console.log("Checkbox has been unchecked");
  407 |
  408 | // const isChecked = await this.checkboxAbnormal.isChecked();
  409 | // console.log("Is checkbox checked? ", isChecked); // should print: false
  410 |
  411 |     
  412 | //     await this.applyfliter();
  413 |
```