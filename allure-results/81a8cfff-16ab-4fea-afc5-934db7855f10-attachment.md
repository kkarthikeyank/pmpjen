# Test info

- Name: Member Portal - Labs Flow >> check abnormal status for physician name search
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:60:2

# Error details

```
TimeoutError: locator.innerText: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//div[@data-id=\'labsCardObjectResultsDiv\']//div[contains(@class, \'row\') and .//span[contains(text(), \'ABNORMAL\')]]/span[1]').first().locator('span').first()

    at LabsPage.runAbnormalTestFlow (/home/karthi/pmp/src/pages/LabsPage.js:324:60)
    at /home/karthi/pmp/src/tests/labspagegroup.spec.js:63:5
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
- text: "Date Range: from 05-15-2020 to 05-15-2025 Show"
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
  224 |   if (!isChecked) {
  225 |     await this.checkboxAbnormal.check();
  226 |   }
  227 |   await this.applyButton.click();
  228 | }
  229 |
  230 |
  231 | // Print abnormal test names
  232 | async printAbnormalTestNames() {
  233 |   const count = await this.abnormalLocator.count();
  234 |   if (count === 0) {
  235 |     console.log('✅ No abnormal test results found.');
  236 |     return;
  237 |   }
  238 |
  239 |   const testNames = [];
  240 |   for (let i = 0; i < count; i++) {
  241 |     const row = this.abnormalLocator.nth(i);
  242 |     const testName = await row.locator('span').first().innerText();
  243 |     testNames.push(testName);
  244 |   }
  245 |
  246 |   console.log('🔴 Abnormal test results found:');
  247 |   testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  248 | }
  249 |   // Uncheck Abnormal checkbox
  250 | async uncheckAbnormalFilter() {
  251 |   const isChecked = await this.checkboxAbnormal.isChecked();
  252 |   if (isChecked) {
  253 |     await this.checkboxAbnormal.uncheck();
  254 |   }
  255 |   await this.applyButton.click();
  256 | }
  257 |
  258 |
  259 | // Print test names that are NOT abnormal
  260 | async printNonAbnormalTestNames() {
  261 |   const allRows = this.page.locator(`//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row')]`);
  262 |   const total = await allRows.count();
  263 |   const testNames = [];
  264 |
  265 |   for (let i = 0; i < total; i++) {
  266 |     const row = allRows.nth(i);
  267 |     const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
  268 |     if (isAbnormal === 0) {
  269 |       const testName = await row.locator('span').first().innerText();
  270 |       testNames.push(testName);
  271 |     }
  272 |   }
  273 |
  274 |   if (testNames.length === 0) {
  275 |     console.log('✅ No normal/non-abnormal test results found.');
  276 |   } else {
  277 |     console.log('🟢 Non-abnormal test results found:');
  278 |     testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  279 |   }
  280 | }
  281 |
  282 |
  283 | // search for abnormal test results with a specific physician 
  284 |
  285 |  async selectDateRangephysicain(monthRangeText) {
  286 |     await this.last36MonthsButton.click();
  287 |     await this.page.locator(`text=${monthRangeText}`).click();
  288 |   }
  289 |
  290 |   async searchPhysician(name) {
  291 |     await this.physiciansearchinput.fill(name);
  292 |     await this.page.waitForTimeout(1000); // Allow filter to apply
  293 |   }
  294 |
  295 |   async checkAbnormalFilter() {
  296 |     if (!(await this.checkboxAbnormal.isChecked())) {
  297 |       await this.checkboxAbnormal.check();
  298 |     }
  299 |   }
  300 |
  301 |   async uncheckAbnormalFilter() {
  302 |     if (await this.checkboxAbnormal.isChecked()) {
  303 |       await this.checkboxAbnormal.uncheck();
  304 |     }
  305 |   }
  306 |
  307 |   async clearFilters() {
  308 |     if (await this.clearButton.isVisible()) {
  309 |       await this.clearButton.click();
  310 |     }
  311 |   }
  312 |
  313 |   async runAbnormalTestFlow(monthRangeText, physicianName) {
  314 |     await this.selectDateRangephysicain(monthRangeText);
  315 |     await this.searchPhysician(physicianName);
  316 |     await this.checkAbnormalFilter();
  317 |
  318 |     const abnormalCount = await this.abnormalLocatorwwithstatus.count();
  319 |     if (abnormalCount === 0) {
  320 |       console.log(`✅ No abnormal test results for ${physicianName} in ${monthRangeText}.`);
  321 |     } else {
  322 |       for (let i = 0; i < abnormalCount; i++) {
  323 |         const row = this.abnormalLocatorwwithstatus.nth(i);
> 324 |         const testName = await row.locator('span').first().innerText();
      |                                                            ^ TimeoutError: locator.innerText: Timeout 10000ms exceeded.
  325 |         const physician = await row.locator("p[id*='physicianText']").innerText();
  326 |         console.log(`🔴 ${testName} - Physician: ${physician} - Status: ABNORMAL`);
  327 |       }
  328 |     }
  329 |
  330 |     await this.uncheckAbnormalFilter();
  331 |
  332 |     const total = await this.allRows.count();
  333 |     let foundNormal = false;
  334 |
  335 |     for (let i = 0; i < total; i++) {
  336 |       const row = this.allRows.nth(i);
  337 |       const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
  338 |       if (isAbnormal === 0) {
  339 |         const testName = await row.locator('span').first().innerText();
  340 |         const physician = await row.locator("p[id*='physicianText']").innerText();
  341 |         console.log(`🟢 ${testName} - Physician: ${physician} - Status: UNABNORMAL`);
  342 |         foundNormal = true;
  343 |       }
  344 |     }
  345 |
  346 |     if (!foundNormal) {
  347 |       console.log(`✅ No UNABNORMAL test results for ${physicianName} in ${monthRangeText}.`);
  348 |     }
  349 |
  350 |     await this.clearFilters();
  351 |   }
  352 |
  353 |
  354 |
  355 |   // async checkAbnormalFilter() {
  356 |   //   const isChecked = await this.checkboxAbnormal.isChecked();
  357 |   //   if (!isChecked) {
  358 |   //     await this.checkboxAbnormal.check();
  359 |   //   }
  360 |   //   await this.applyButton.click();
  361 |   // }
  362 |
  363 |   // async getAbnormalTestNames() {
  364 |   //   const count = await this.abnormalLocator.count();
  365 |   //   if (count === 0) {
  366 |   //     console.log('✅ No abnormal test results found.');
  367 |   //     return;
  368 |   //   }
  369 |
  370 |   //   const testNames = [];
  371 |   //   for (let i = 0; i < count; i++) {
  372 |   //     const row = this.abnormalLocator.nth(i);
  373 |   //     const testName = await row.locator('span').first().innerText();
  374 |   //     testNames.push(testName);
  375 |   //   }
  376 |
  377 |   //   console.log(`🔴 Abnormal test results found:`);
  378 |   //   testNames.forEach((name, index) => console.log(`  ${index + 1}. ${name}`));
  379 |   // }
  380 |
  381 |
  382 | // async selectDateRangep(rangeText) {
  383 | //     await this.last36MonthsButton.click();
  384 | //     await this.page.getByText(rangeText).click();
  385 | //   }
  386 |
  387 | //   async searchPhysician(name) {
  388 | //     await this.physiciansearchinput.click();
  389 | //      await this.physiciansearchinput.fill(name); // ✅ fix is her
  390 | //     await this.applyButton.click();
  391 | //   }
  392 |
  393 | //   async clearFilters() {
  394 | //     await this.clearButton.click();
  395 | //   }
  396 |
  397 | //   async printPhysicianResults() {
  398 | //     const count = await this.physicianNameElements.count();
  399 | //     if (count === 0) {
  400 | //       console.log('No physician');
  401 | //     } else {
  402 | //       for (let i = 0; i < count; i++) {
  403 | //         const name = await this.physicianNameElements.nth(i).innerText();
  404 | //         console.log(`Physician ${i + 1}: ${name}`);
  405 | //       }
  406 | //     }
  407 | //   }
  408 |
  409 |   
  410 |
  411 |   // async searchPhysician(name) {
  412 |   //   await this.physiciansearchinput.click();
  413 |   //   await this.physiciansearchinput.fill(name);
  414 |   //   await this.applyButton.click();
  415 |   
  416 |   //   // Scroll down before asserting
  417 |   //   await this.page.mouse.wheel(0, 500);
  418 |   
  419 |   //   await expect(this.physician).toBeVisible();
  420 |   
  421 |   //   const physicianText = await this.physician.textContent();
  422 |   //   console.log('Physician Name Found:', physicianText.trim());
  423 |   // }
  424 |   
```