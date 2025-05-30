# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: locator.selectOption: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('//select[@title="Select year"]')
    - locator resolved to <select title="Select year" class="form-select" aria-label="Select year">…</select>
  - attempting select option action
    - waiting for element to be visible and enabled

    at LabsPage.selectYear (/home/karthi/pmp/src/pages/LabsPage.js:234:29)
    at LabsPage.selectDateRange (/home/karthi/pmp/src/pages/LabsPage.js:257:16)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:191:5
```

# Page snapshot

```yaml
- banner:
  - heading "Member Portal" [level=1]
- navigation "Navbar":
  - link "Brand logo":
    - /url: "#/dashboard"
    - img "Brand logo"
  - button "Anna Queensister"
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
  - button "Anna Queensister"
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
- button "Previous month"
- combobox "Select month":
  - option "January" [selected]: Jan
  - option "February": Feb
  - option "March": Mar
  - option "April": Apr
  - option "May"
  - option "June": Jun
  - option "July": Jul
  - option "August": Aug
  - option "September": Sep
  - option "October": Oct
  - option "November": Nov
  - option "December": Dec
- combobox "Select year":
  - option "2014"
  - option "2015"
  - option "2016"
  - option "2017"
  - option "2018"
  - option "2019"
  - option "2020"
  - option "2021"
  - option "2022"
  - option "2023"
  - option "2024" [selected]
  - option "2025"
  - option "2026"
  - option "2027"
  - option "2028"
  - option "2029"
  - option "2030"
  - option "2031"
  - option "2032"
  - option "2033"
  - option "2034"
- button "Next month"
- text: January 2024
- grid:
  - row "Su Mo Tu We Th Fr Sa":
    - columnheader "Su"
    - columnheader "Mo"
    - columnheader "Tu"
    - columnheader "We"
    - columnheader "Th"
    - columnheader "Fr"
    - columnheader "Sa"
  - row "Sunday, December 31, 2023 Monday, January 1, 2024 Tuesday, January 2, 2024 Wednesday, January 3, 2024 Thursday, January 4, 2024 Friday, January 5, 2024 Saturday, January 6, 2024":
    - gridcell "Sunday, December 31, 2023": "31"
    - gridcell "Monday, January 1, 2024": "1"
    - gridcell "Tuesday, January 2, 2024": "2"
    - gridcell "Wednesday, January 3, 2024": "3"
    - gridcell "Thursday, January 4, 2024": "4"
    - gridcell "Friday, January 5, 2024": "5"
    - gridcell "Saturday, January 6, 2024": "6"
  - row "Sunday, January 7, 2024 Monday, January 8, 2024 Tuesday, January 9, 2024 Wednesday, January 10, 2024 Thursday, January 11, 2024 Friday, January 12, 2024 Saturday, January 13, 2024":
    - gridcell "Sunday, January 7, 2024": "7"
    - gridcell "Monday, January 8, 2024": "8"
    - gridcell "Tuesday, January 9, 2024": "9"
    - gridcell "Wednesday, January 10, 2024": "10"
    - gridcell "Thursday, January 11, 2024": "11"
    - gridcell "Friday, January 12, 2024": "12"
    - gridcell "Saturday, January 13, 2024": "13"
  - row "Sunday, January 14, 2024 Monday, January 15, 2024 Tuesday, January 16, 2024 Wednesday, January 17, 2024 Thursday, January 18, 2024 Friday, January 19, 2024 Saturday, January 20, 2024":
    - gridcell "Sunday, January 14, 2024": "14"
    - gridcell "Monday, January 15, 2024": "15"
    - gridcell "Tuesday, January 16, 2024": "16"
    - gridcell "Wednesday, January 17, 2024": "17"
    - gridcell "Thursday, January 18, 2024": "18"
    - gridcell "Friday, January 19, 2024": "19"
    - gridcell "Saturday, January 20, 2024": "20"
  - row "Sunday, January 21, 2024 Monday, January 22, 2024 Tuesday, January 23, 2024 Wednesday, January 24, 2024 Thursday, January 25, 2024 Friday, January 26, 2024 Saturday, January 27, 2024":
    - gridcell "Sunday, January 21, 2024": "21"
    - gridcell "Monday, January 22, 2024": "22"
    - gridcell "Tuesday, January 23, 2024": "23"
    - gridcell "Wednesday, January 24, 2024": "24"
    - gridcell "Thursday, January 25, 2024": "25"
    - gridcell "Friday, January 26, 2024": "26"
    - gridcell "Saturday, January 27, 2024": "27"
  - row "Sunday, January 28, 2024 Monday, January 29, 2024 Tuesday, January 30, 2024 Wednesday, January 31, 2024 Thursday, February 1, 2024 Friday, February 2, 2024 Saturday, February 3, 2024":
    - gridcell "Sunday, January 28, 2024": "28"
    - gridcell "Monday, January 29, 2024": "29"
    - gridcell "Tuesday, January 30, 2024": "30"
    - gridcell "Wednesday, January 31, 2024": "31"
    - gridcell "Thursday, February 1, 2024"
    - gridcell "Friday, February 2, 2024"
    - gridcell "Saturday, February 3, 2024"
  - row "Sunday, February 4, 2024 Monday, February 5, 2024 Tuesday, February 6, 2024 Wednesday, February 7, 2024 Thursday, February 8, 2024 Friday, February 9, 2024 Saturday, February 10, 2024":
    - gridcell "Sunday, February 4, 2024"
    - gridcell "Monday, February 5, 2024"
    - gridcell "Tuesday, February 6, 2024"
    - gridcell "Wednesday, February 7, 2024"
    - gridcell "Thursday, February 8, 2024"
    - gridcell "Friday, February 9, 2024"
    - gridcell "Saturday, February 10, 2024"
- text: February 2024
- grid:
  - row "Su Mo Tu We Th Fr Sa":
    - columnheader "Su"
    - columnheader "Mo"
    - columnheader "Tu"
    - columnheader "We"
    - columnheader "Th"
    - columnheader "Fr"
    - columnheader "Sa"
  - row "Sunday, January 28, 2024 Monday, January 29, 2024 Tuesday, January 30, 2024 Wednesday, January 31, 2024 Thursday, February 1, 2024 Friday, February 2, 2024 Saturday, February 3, 2024":
    - gridcell "Sunday, January 28, 2024"
    - gridcell "Monday, January 29, 2024"
    - gridcell "Tuesday, January 30, 2024"
    - gridcell "Wednesday, January 31, 2024"
    - gridcell "Thursday, February 1, 2024": "1"
    - gridcell "Friday, February 2, 2024": "2"
    - gridcell "Saturday, February 3, 2024": "3"
  - row "Sunday, February 4, 2024 Monday, February 5, 2024 Tuesday, February 6, 2024 Wednesday, February 7, 2024 Thursday, February 8, 2024 Friday, February 9, 2024 Saturday, February 10, 2024":
    - gridcell "Sunday, February 4, 2024": "4"
    - gridcell "Monday, February 5, 2024": "5"
    - gridcell "Tuesday, February 6, 2024": "6"
    - gridcell "Wednesday, February 7, 2024": "7"
    - gridcell "Thursday, February 8, 2024": "8"
    - gridcell "Friday, February 9, 2024": "9"
    - gridcell "Saturday, February 10, 2024": "10"
  - row "Sunday, February 11, 2024 Monday, February 12, 2024 Tuesday, February 13, 2024 Wednesday, February 14, 2024 Thursday, February 15, 2024 Friday, February 16, 2024 Saturday, February 17, 2024":
    - gridcell "Sunday, February 11, 2024": "11"
    - gridcell "Monday, February 12, 2024": "12"
    - gridcell "Tuesday, February 13, 2024": "13"
    - gridcell "Wednesday, February 14, 2024": "14"
    - gridcell "Thursday, February 15, 2024": "15"
    - gridcell "Friday, February 16, 2024": "16"
    - gridcell "Saturday, February 17, 2024": "17"
  - row "Sunday, February 18, 2024 Monday, February 19, 2024 Tuesday, February 20, 2024 Wednesday, February 21, 2024 Thursday, February 22, 2024 Friday, February 23, 2024 Saturday, February 24, 2024":
    - gridcell "Sunday, February 18, 2024": "18"
    - gridcell "Monday, February 19, 2024": "19"
    - gridcell "Tuesday, February 20, 2024": "20"
    - gridcell "Wednesday, February 21, 2024": "21"
    - gridcell "Thursday, February 22, 2024": "22"
    - gridcell "Friday, February 23, 2024": "23"
    - gridcell "Saturday, February 24, 2024": "24"
  - row "Sunday, February 25, 2024 Monday, February 26, 2024 Tuesday, February 27, 2024 Wednesday, February 28, 2024 Thursday, February 29, 2024 Friday, March 1, 2024 Saturday, March 2, 2024":
    - gridcell "Sunday, February 25, 2024": "25"
    - gridcell "Monday, February 26, 2024": "26"
    - gridcell "Tuesday, February 27, 2024": "27"
    - gridcell "Wednesday, February 28, 2024": "28"
    - gridcell "Thursday, February 29, 2024": "29"
    - gridcell "Friday, March 1, 2024": "1"
    - gridcell "Saturday, March 2, 2024": "2"
  - row "Sunday, March 3, 2024 Monday, March 4, 2024 Tuesday, March 5, 2024 Wednesday, March 6, 2024 Thursday, March 7, 2024 Friday, March 8, 2024 Saturday, March 9, 2024":
    - gridcell "Sunday, March 3, 2024": "3"
    - gridcell "Monday, March 4, 2024": "4"
    - gridcell "Tuesday, March 5, 2024": "5"
    - gridcell "Wednesday, March 6, 2024": "6"
    - gridcell "Thursday, March 7, 2024": "7"
    - gridcell "Friday, March 8, 2024": "8"
    - gridcell "Saturday, March 9, 2024": "9"
- paragraph: Status
- checkbox "Checkbox for Abnormal"
- text: Abnormal
- button "Apply"
- text: Clear
- separator
- text: "Date Range: from 01-01-2024 to 11-30-2024 Show"
- combobox "select number of results":
  - option "5" [selected]
  - option "10"
  - option "25"
  - option "50"
  - option "100"
- text: entries No Lab Results to Show
- list:
  - listitem:
    - link "‹":
      - /url: ""
  - listitem:
    - link "1":
      - /url: ""
  - listitem:
    - link "›":
      - /url: ""
- text: "Showing: 0 - 0 of 0"
```

# Test source

```ts
  134 |     await this.labSearchInput.click();
  135 |     await this.labSearchInput.fill(name);
  136 |     await this.applyButton.click();
  137 |   }
  138 |
  139 |  
  140 |   //  async clearFilters() {
  141 |   //   await this.clearButton.click();
  142 |   // }
  143 |
  144 | async logLabResults(name, rangeText) {
  145 |   console.log(`\n--- Filter Selection ---`);
  146 |   console.log(`Date Range: ${rangeText}`);
  147 |   console.log(`Lab Vendor Name Searched: ${name}`);
  148 |
  149 |   await this.page.waitForTimeout(1000); // allow results to load
  150 |
  151 |   const count = await this.labNameElements.count();
  152 |
  153 |   if (count === 0) {
  154 |     console.log('No lab vendors found.');
  155 |   } else {
  156 |     for (let i = 0; i < count; i++) {
  157 |       const text = await this.labNameElements.nth(i).textContent();
  158 |       console.log(`Lab Vendor ${i + 1}: ${text.trim()}`);
  159 |     }
  160 |   }
  161 |
  162 |   console.log(); // spacing
  163 | }
  164 |
  165 |
  166 |
  167 |
  168 |
  169 | // scenario  search for a test name
  170 |
  171 |     async selectDateRangetestname(rangeText) {
  172 |     await this.last36MonthsButton.click();
  173 |     await this.page.getByText(rangeText).click();
  174 |   }
  175 |
  176 |   async searchTestName(name) {
  177 |     await this.testnamesearchBox.click();
  178 |     await this.testnamesearchBox.fill(name);
  179 |     await this.applyButton.click();
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
> 234 |     await this.yearDropdown.selectOption({ value });
      |                             ^ Error: locator.selectOption: Test timeout of 70000ms exceeded.
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
  280 |     await this.checkboxAbnormal.uncheck();
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
```