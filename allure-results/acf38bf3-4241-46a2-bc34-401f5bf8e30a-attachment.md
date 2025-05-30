# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: locator.uncheck: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('//input[@id="checkboxAbnormal"]')
    - locator resolved to <input type="checkbox" id="checkboxAbnormal" _ngcontent-tqk-c283="" data-id="checkboxAbnormal" formcontrolname="filterAbnormal" aria-label="Checkbox for Abnormal" class="form-check-input m-0 ng-valid ng-dirty ng-touched"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <nav aria-label="Navbar" _ngcontent-tqk-c107="" class="nav navbar nav-bar-box-shadow nav-bar-background-color navbar-light fixed-top p-0 nav--hidden">…</nav> from <app-navbar _nghost-tqk-c107="" _ngcontent-tqk-c115="" data-id="appNavbar-sideBarLayout">…</app-navbar> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 100ms

    at LabsPage.uncheckAbnormalFilter (/home/karthi/pmp/src/pages/LabsPage.js:280:33)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:187:5
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
- button "Custom"
- paragraph: Status
- checkbox "Checkbox for Abnormal" [checked]
- text: Abnormal
- button "Apply"
- text: Clear
- separator
- text: "Date Range: from 01-01-2024 to 01-01-2025 Show"
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
  180 |   }
  181 |
  182 | async printTestResults(searchedName, rangeText) {
  183 |   console.log(`\n--- Filter Selection ---`);
  184 |   console.log(`Date Range: ${rangeText}`);
  185 |   console.log(`Test Name Searched: ${searchedName}`);
  186 |
  187 |   await this.page.waitForTimeout(1000); // wait for results to appear
  188 |
  189 |   const count = await this.testNameLocators.count();
  190 |   let matchFound = false;
  191 |
  192 |   for (let i = 0; i < count; i++) {
  193 |     const fullText = await this.testNameLocators.nth(i).textContent();
  194 |     const trimmedText = fullText.trim();
  195 |
  196 |     // Match exactly or case-insensitively (adjust as needed)
  197 |     if (trimmedText.includes(searchedName)) {
  198 |       console.log(`Test Name ${i + 1}: ${trimmedText}`);
  199 |       matchFound = true;
  200 |     }
  201 |   }
  202 |
  203 |   if (!matchFound) {
  204 |     console.log('No test names found');
  205 |   }
  206 |
  207 |   console.log(); // spacing
  208 | }
  209 |
  210 |   
  211 |    async clearFilters() {
  212 |     await this.clearButton.click();
  213 |   }
  214 |
  215 | //  scenario custom date range status abnormal and unabnormal with checkbox
  216 |
  217 |   dateCell(dayName, monthName, day, year) {
  218 |     const fullDateLabel = `${dayName}, ${monthName} ${day}, ${year}`;
  219 |     return this.page.locator(`//div[@aria-label="${fullDateLabel}"]`);
  220 |   }
  221 |
  222 |   async openCustomDatePicker() {
  223 |   await this.page.waitForLoadState('networkidle'); // wait for full load
  224 |
  225 |   await this.last36MonthsButton.waitFor({ state: 'visible', timeout: 10000 });
  226 |   await this.last36MonthsButton.click();
  227 |
  228 |   await this.customDateButton.waitFor({ state: 'visible', timeout: 10000 });
  229 |   await this.customDateButton.click();
  230 | }
  231 |
  232 |
  233 |   async selectYear(value) {
  234 |     await this.yearDropdown.selectOption({ value });
  235 |   }
  236 |
  237 |   async selectMonth(value) {
  238 |     const monthCount = await this.monthOptions.count();
  239 |     for (let i = 0; i < monthCount; i++) {
  240 |       const optionValue = await this.monthOptions.nth(i).getAttribute('value');
  241 |       if (optionValue === value) {
  242 |         await this.monthDropdown.selectOption(optionValue);
  243 |         break;
  244 |       }
  245 |     }
  246 |   }
  247 |
  248 |   async selectDateRange(start, end) {
  249 |     await this.openCustomDatePicker();
  250 |
  251 |     // Start Date
  252 |     await this.selectYear(start.year);
  253 |     await this.selectMonth(start.month);
  254 |     await this.dateCell(start.dayName, start.monthName, start.day, start.year).click();
  255 |
  256 |     // End Date
  257 |     await this.selectYear(end.year);
  258 |     await this.selectMonth(end.month);
  259 |     await this.dateCell(end.dayName, end.monthName, end.day, end.year).click();
  260 |   }
  261 |
  262 |
  263 |     // Check Abnormal checkbox
  264 | async checkAbnormalFilter() {
  265 |   const isChecked = await this.checkboxAbnormal.isChecked();
  266 |   if (!isChecked) {
  267 |     await this.checkboxAbnormal.click();
  268 |   }
  269 |
  270 |   await this.applyButton.click();
  271 |     await this.page.evaluate(() => {
  272 |     window.scrollBy(0, 500); // Scroll down by 500 pixels
  273 |   });
  274 |   await this.page.waitForTimeout(500); // Small pause after scroll
  275 | }
  276 |
  277 | async uncheckAbnormalFilter() {
  278 |   const isChecked = await this.checkboxAbnormal.isChecked();
  279 |   if (isChecked) {
> 280 |     await this.checkboxAbnormal.uncheck();
      |                                 ^ Error: locator.uncheck: Test timeout of 70000ms exceeded.
  281 |   }
  282 |   await this.applyButton.click();
  283 |
  284 |   await this.page.evaluate(() => {
  285 |     window.scrollBy(0, 500); // Scroll down by 500 pixels
  286 |   });
  287 |   await this.page.waitForTimeout(500); // Small pause after scroll
  288 |
  289 | }
  290 |
  291 |
  292 | // Print abnormal test names
  293 | // async printAbnormalTestNames() {
  294 | //   const count = await this.testNameLocators.count();
  295 | //   let found = false;
  296 |
  297 | //   for (let i = 0; i < count; i++) {
  298 | //     const row = this.testNameLocators.nth(i);
  299 | //     const spans = row.locator('span');
  300 | //     const spanCount = await spans.count();
  301 |
  302 | //     let textParts = [];
  303 | //     for (let j = 0; j < spanCount; j++) {
  304 | //       const part = await spans.nth(j).innerText();
  305 | //       textParts.push(part.trim());
  306 | //     }
  307 |
  308 | //     const rowText = textParts.join(' ');
  309 | //     if (rowText.includes('ABNORMAL')) {
  310 | //       console.log(`  - ${rowText}`);
  311 | //       found = true;
  312 | //     }
  313 | //   }
  314 |
  315 | //   if (!found) {
  316 | //     console.log('✅ No abnormal test results found.');
  317 | //   }
  318 | // }
  319 |
  320 |
  321 |
  322 | async printAbnormalTestNames() {
  323 |   const count = await this.testNameLocators.count();
  324 |   if (count === 0) {
  325 |     console.log('✅ No abnormal test results found.');
  326 |     return;
  327 |   }
  328 |
  329 |   const testNames = [];
  330 |   for (let i = 0; i < count; i++) {
  331 |     const row = this.testNameLocators.nth(i);
  332 |     const testName = await row.locator('span').first().innerText();
  333 |     testNames.push(testName);
  334 |   }
  335 |
  336 |   console.log('🔴 Abnormal test results found:');
  337 |   testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  338 | }
  339 |   // Uncheck Abnormal checkbox
  340 |
  341 |
  342 |
  343 | // Print test names that are NOT abnormal
  344 | async printNonAbnormalTestNames() {
  345 |   const allRows = this.page.locator(`//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row')]`);
  346 |   const total = await allRows.count();
  347 |   const testNames = [];
  348 |
  349 |   for (let i = 0; i < total; i++) {
  350 |     const row = allRows.nth(i);
  351 |     const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
  352 |     if (isAbnormal === 0) {
  353 |       const testName = await row.locator('span').first().innerText();
  354 |       testNames.push(testName);
  355 |     }
  356 |   }
  357 |
  358 |   if (testNames.length === 0) {
  359 |     console.log('✅ No normal/non-abnormal test results found.');
  360 |   } else {
  361 |     console.log('🟢 Non-abnormal test results found:');
  362 |     testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  363 |   }
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
```