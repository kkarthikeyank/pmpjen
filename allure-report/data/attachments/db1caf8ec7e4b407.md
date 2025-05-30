# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:22:1

# Error details

```
TimeoutError: locator.selectOption: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//select[@title="Select year"]')
    - locator resolved to <select title="Select year" class="form-select" aria-label="Select year">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    20 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms

    at LabsPage.selectYear (/home/karthi/pmp/src/pages/LabsPage.js:158:29)
    at LabsPage.applyDateRange (/home/karthi/pmp/src/pages/LabsPage.js:187:16)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:151:2
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
- button "Previous month"
- combobox "Select month":
  - option "January": Jan
  - option "February": Feb
  - option "March": Mar
  - option "April": Apr
  - option "May" [selected]
  - option "June": Jun
  - option "July": Jul
  - option "August": Aug
  - option "September": Sep
  - option "October": Oct
  - option "November": Nov
  - option "December": Dec
- combobox "Select year":
  - option "2015"
  - option "2016"
  - option "2017"
  - option "2018"
  - option "2019"
  - option "2020"
  - option "2021"
  - option "2022"
  - option "2023"
  - option "2024"
  - option "2025" [selected]
  - option "2026"
  - option "2027"
  - option "2028"
  - option "2029"
  - option "2030"
  - option "2031"
  - option "2032"
  - option "2033"
  - option "2034"
  - option "2035"
- button "Next month"
- text: May 2025
- grid:
  - row "Su Mo Tu We Th Fr Sa":
    - columnheader "Su"
    - columnheader "Mo"
    - columnheader "Tu"
    - columnheader "We"
    - columnheader "Th"
    - columnheader "Fr"
    - columnheader "Sa"
  - row "Sunday, April 27, 2025 Monday, April 28, 2025 Tuesday, April 29, 2025 Wednesday, April 30, 2025 Thursday, May 1, 2025 Friday, May 2, 2025 Saturday, May 3, 2025":
    - gridcell "Sunday, April 27, 2025": "27"
    - gridcell "Monday, April 28, 2025": "28"
    - gridcell "Tuesday, April 29, 2025": "29"
    - gridcell "Wednesday, April 30, 2025": "30"
    - gridcell "Thursday, May 1, 2025": "1"
    - gridcell "Friday, May 2, 2025": "2"
    - gridcell "Saturday, May 3, 2025": "3"
  - row "Sunday, May 4, 2025 Monday, May 5, 2025 Tuesday, May 6, 2025 Wednesday, May 7, 2025 Thursday, May 8, 2025 Friday, May 9, 2025 Saturday, May 10, 2025":
    - gridcell "Sunday, May 4, 2025": "4"
    - gridcell "Monday, May 5, 2025": "5"
    - gridcell "Tuesday, May 6, 2025": "6"
    - gridcell "Wednesday, May 7, 2025": "7"
    - gridcell "Thursday, May 8, 2025": "8"
    - gridcell "Friday, May 9, 2025": "9"
    - gridcell "Saturday, May 10, 2025": "10"
  - row "Sunday, May 11, 2025 Monday, May 12, 2025 Tuesday, May 13, 2025 Wednesday, May 14, 2025 Thursday, May 15, 2025 Friday, May 16, 2025 Saturday, May 17, 2025":
    - gridcell "Sunday, May 11, 2025": "11"
    - gridcell "Monday, May 12, 2025": "12"
    - gridcell "Tuesday, May 13, 2025": "13"
    - gridcell "Wednesday, May 14, 2025": "14"
    - gridcell "Thursday, May 15, 2025": "15"
    - gridcell "Friday, May 16, 2025": "16"
    - gridcell "Saturday, May 17, 2025": "17"
  - row "Sunday, May 18, 2025 Monday, May 19, 2025 Tuesday, May 20, 2025 Wednesday, May 21, 2025 Thursday, May 22, 2025 Friday, May 23, 2025 Saturday, May 24, 2025":
    - gridcell "Sunday, May 18, 2025": "18"
    - gridcell "Monday, May 19, 2025": "19"
    - gridcell "Tuesday, May 20, 2025": "20"
    - gridcell "Wednesday, May 21, 2025": "21"
    - gridcell "Thursday, May 22, 2025": "22"
    - gridcell "Friday, May 23, 2025": "23"
    - gridcell "Saturday, May 24, 2025": "24"
  - row "Sunday, May 25, 2025 Monday, May 26, 2025 Tuesday, May 27, 2025 Wednesday, May 28, 2025 Thursday, May 29, 2025 Friday, May 30, 2025 Saturday, May 31, 2025":
    - gridcell "Sunday, May 25, 2025": "25"
    - gridcell "Monday, May 26, 2025": "26"
    - gridcell "Tuesday, May 27, 2025": "27"
    - gridcell "Wednesday, May 28, 2025": "28"
    - gridcell "Thursday, May 29, 2025": "29"
    - gridcell "Friday, May 30, 2025": "30"
    - gridcell "Saturday, May 31, 2025": "31"
  - row "Sunday, June 1, 2025 Monday, June 2, 2025 Tuesday, June 3, 2025 Wednesday, June 4, 2025 Thursday, June 5, 2025 Friday, June 6, 2025 Saturday, June 7, 2025":
    - gridcell "Sunday, June 1, 2025"
    - gridcell "Monday, June 2, 2025"
    - gridcell "Tuesday, June 3, 2025"
    - gridcell "Wednesday, June 4, 2025"
    - gridcell "Thursday, June 5, 2025"
    - gridcell "Friday, June 6, 2025"
    - gridcell "Saturday, June 7, 2025"
- text: June 2025
- grid:
  - row "Su Mo Tu We Th Fr Sa":
    - columnheader "Su"
    - columnheader "Mo"
    - columnheader "Tu"
    - columnheader "We"
    - columnheader "Th"
    - columnheader "Fr"
    - columnheader "Sa"
  - row "Sunday, June 1, 2025 Monday, June 2, 2025 Tuesday, June 3, 2025 Wednesday, June 4, 2025 Thursday, June 5, 2025 Friday, June 6, 2025 Saturday, June 7, 2025":
    - gridcell "Sunday, June 1, 2025": "1"
    - gridcell "Monday, June 2, 2025": "2"
    - gridcell "Tuesday, June 3, 2025": "3"
    - gridcell "Wednesday, June 4, 2025": "4"
    - gridcell "Thursday, June 5, 2025": "5"
    - gridcell "Friday, June 6, 2025": "6"
    - gridcell "Saturday, June 7, 2025": "7"
  - row "Sunday, June 8, 2025 Monday, June 9, 2025 Tuesday, June 10, 2025 Wednesday, June 11, 2025 Thursday, June 12, 2025 Friday, June 13, 2025 Saturday, June 14, 2025":
    - gridcell "Sunday, June 8, 2025": "8"
    - gridcell "Monday, June 9, 2025": "9"
    - gridcell "Tuesday, June 10, 2025": "10"
    - gridcell "Wednesday, June 11, 2025": "11"
    - gridcell "Thursday, June 12, 2025": "12"
    - gridcell "Friday, June 13, 2025": "13"
    - gridcell "Saturday, June 14, 2025": "14"
  - row "Sunday, June 15, 2025 Monday, June 16, 2025 Tuesday, June 17, 2025 Wednesday, June 18, 2025 Thursday, June 19, 2025 Friday, June 20, 2025 Saturday, June 21, 2025":
    - gridcell "Sunday, June 15, 2025": "15"
    - gridcell "Monday, June 16, 2025": "16"
    - gridcell "Tuesday, June 17, 2025": "17"
    - gridcell "Wednesday, June 18, 2025": "18"
    - gridcell "Thursday, June 19, 2025": "19"
    - gridcell "Friday, June 20, 2025": "20"
    - gridcell "Saturday, June 21, 2025": "21"
  - row "Sunday, June 22, 2025 Monday, June 23, 2025 Tuesday, June 24, 2025 Wednesday, June 25, 2025 Thursday, June 26, 2025 Friday, June 27, 2025 Saturday, June 28, 2025":
    - gridcell "Sunday, June 22, 2025": "22"
    - gridcell "Monday, June 23, 2025": "23"
    - gridcell "Tuesday, June 24, 2025": "24"
    - gridcell "Wednesday, June 25, 2025": "25"
    - gridcell "Thursday, June 26, 2025": "26"
    - gridcell "Friday, June 27, 2025": "27"
    - gridcell "Saturday, June 28, 2025": "28"
  - row "Sunday, June 29, 2025 Monday, June 30, 2025 Tuesday, July 1, 2025 Wednesday, July 2, 2025 Thursday, July 3, 2025 Friday, July 4, 2025 Saturday, July 5, 2025":
    - gridcell "Sunday, June 29, 2025": "29"
    - gridcell "Monday, June 30, 2025": "30"
    - gridcell "Tuesday, July 1, 2025": "1"
    - gridcell "Wednesday, July 2, 2025": "2"
    - gridcell "Thursday, July 3, 2025": "3"
    - gridcell "Friday, July 4, 2025": "4"
    - gridcell "Saturday, July 5, 2025": "5"
  - row "Sunday, July 6, 2025 Monday, July 7, 2025 Tuesday, July 8, 2025 Wednesday, July 9, 2025 Thursday, July 10, 2025 Friday, July 11, 2025 Saturday, July 12, 2025":
    - gridcell "Sunday, July 6, 2025": "6"
    - gridcell "Monday, July 7, 2025": "7"
    - gridcell "Tuesday, July 8, 2025": "8"
    - gridcell "Wednesday, July 9, 2025": "9"
    - gridcell "Thursday, July 10, 2025": "10"
    - gridcell "Friday, July 11, 2025": "11"
    - gridcell "Saturday, July 12, 2025": "12"
- paragraph: Status
- checkbox "Checkbox for Abnormal" [checked]
- text: Abnormal
- button "Apply"
- text: Clear
- separator
- text: "Date Range: from 02-08-2025 to 05-08-2025 Show"
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
   58 |     // Optionally, wait for the page to load after clicking the Claims tab (if it redirects)
   59 |     // await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });
   60 |     await this.page.getByRole('heading', { name: 'Labs' }).waitFor({ state: 'visible', timeout: 10000 });
   61 |
   62 |   }
   63 |
   64 |   async searchPhysician(name) {
   65 |     await this.searchBox.click();
   66 |     await this.searchBox.fill(name);
   67 |     await this.applyButton.click();
   68 |   
   69 |     // Scroll down before asserting
   70 |     await this.page.mouse.wheel(0, 500);
   71 |   
   72 |     await expect(this.physician).toBeVisible();
   73 |   
   74 |     const physicianText = await this.physician.textContent();
   75 |     console.log('Physician Name Found:', physicianText.trim());
   76 |   }
   77 |   
   78 |   async goToLabsAndSearch(labName) {
   79 |     // await this.labSearchInput.click();
   80 |     await this.labSearchInput.click({ force: true });
   81 |
   82 |     await this.labSearchInput.fill(labName);
   83 |     await this.applyButton.click();
   84 |
   85 |     const labResult = this.page.getByText(new RegExp(labName, 'i'));
   86 |
   87 |     await labResult.scrollIntoViewIfNeeded(); // scroll to element
   88 |     await expect(labResult).toBeVisible(); // assertion
   89 |
   90 |     // ✅ console log lab result text
   91 |     const labText = await labResult.textContent();
   92 |     console.log('✅ Found Lab Result:', labText?.trim());
   93 |
   94 |   }//li[normalize-space()='Last 3 Months']
   95 |
   96 |
   97 |
   98 |
   99 |   async filterByDateRange() {
  100 |     await this.last36MonthsButton.click();
  101 |     console.log('🔍 Clicked on "Last 36 Months" button.');
  102 |   
  103 |     await this.last3MonthsOption.click();
  104 |     console.log('🔍 Selected "Last 3 Months" option.');
  105 |   
  106 |     // Wait for UI to reflect the date range change
  107 |     await this.dateRangeText.waitFor({ state: 'visible', timeout: 10000 });
  108 |   
  109 |     // Dynamically calculate the expected date range
  110 |     const endDate = new Date();
  111 |     const startDate = new Date();
  112 |     startDate.setMonth(startDate.getMonth() - 3);
  113 |   
  114 |     // Format date as MM-DD-YYYY
  115 |     const formatDate = (date) => {
  116 |       const mm = String(date.getMonth() + 1).padStart(2, '0');
  117 |       const dd = String(date.getDate()).padStart(2, '0');
  118 |       const yyyy = date.getFullYear();
  119 |       return `${mm}-${dd}-${yyyy}`;
  120 |     };
  121 |   
  122 |     const expectedStart = formatDate(startDate);
  123 |     const expectedEnd = formatDate(endDate);
  124 |   
  125 |     // Log the expected date range
  126 |     console.log(`🔍 Expected Date Range: from ${expectedStart} to ${expectedEnd}`);
  127 |   
  128 |     // Use a regex to ignore spacing or additional text issues
  129 |     const pattern = new RegExp(`Date Range:\\s*from\\s*${expectedStart}\\s*to\\s*${expectedEnd}`, 'i');
  130 |   
  131 |     // Assert the date range text
  132 |     await expect(this.dateRangeText).toHaveText(pattern, { timeout: 15000 });
  133 |     console.log('✅ Date range successfully validated.');
  134 |   
  135 |     // // Assert that "No Lab Results to Show" text is visible
  136 |     await expect(this.noLabResultsText).toBeVisible({ timeout: 50000 });
  137 |     console.log('✅ "No Lab Results to Show" is visible.');
  138 |
  139 |     await this.clearButton .click();
  140 |   }
  141 |   
  142 |   // async applyCustomDateFilter() {
  143 |   //   await this.last36MonthsButton.click();
  144 |   //   await this.customDateButton.click();
  145 |   //   await this.startDate.click();
  146 |   //   await this.endDate.click();
  147 |   // }
  148 |
  149 |
  150 |    // Method to open the custom date filter
  151 |    async openCustomDateFilter() {
  152 |     await this.last36MonthsButton.click();
  153 |     await this.customDateButton.click();
  154 | }
  155 |
  156 | // Method to select a year in the year dropdown
  157 | async selectYear(year) {
> 158 |     await this.yearDropdown.selectOption({ value: year.toString() });
      |                             ^ TimeoutError: locator.selectOption: Timeout 10000ms exceeded.
  159 | }
  160 |
  161 | // Method to select a month in the month dropdown
  162 | async selectMonth(month) {
  163 |     await this.monthsDropdown.selectOption({ label: month });
  164 | }
  165 |
  166 | // Method to select a specific date from the calendar
  167 | async selectDate(date) {
  168 |     const dateLocator = this.page.locator(`//div[@aria-label='${date}']`);
  169 |     await dateLocator.click();
  170 | }
  171 |
  172 | // Method to handle the month navigation (next or previous)
  173 | async navigateMonth(direction = 'next') {
  174 |     if (direction === 'next') {
  175 |         await this.nextMonthButton.click();
  176 |     } else {
  177 |         await this.previousMonthButton.click();
  178 |     }
  179 | }
  180 |
  181 | // Method to apply the date range
  182 | async applyDateRange(startDate, startYear, endDate, endYear) {
  183 |     // Open the custom date range filter
  184 |     await this.openCustomDateFilter();
  185 |
  186 |     // Set the start date and year
  187 |     await this.selectYear(startYear);
  188 |     await this.selectMonth(startDate.month);
  189 |     await this.selectDate(startDate.date);
  190 |
  191 |     // Set the end date and year
  192 |     await this.selectYear(endYear);
  193 |     await this.selectMonth(endDate.month);
  194 |     await this.selectDate(endDate.date);
  195 | }
  196 |   
  197 |
  198 |   async selectAbnormalCheckbox() {
  199 |     await this.checkboxAbnormal.check();
  200 |   }
  201 |
  202 |   async selectLast3Months() {
  203 |     await this.last36MonthsButton.click();
  204 |     await this.last3MonthsDropdownItem.click();
  205 |   }
  206 |
  207 |   async printNoLabResultsText() {
  208 |     await this.noLabResultsText.waitFor({ state: 'visible', timeout: 30000 });
  209 |
  210 |     const noLabResults = await this.noLabResultsText.innerText();
  211 |     console.log(noLabResults);
  212 |   }
  213 |
  214 |   // You can add a method to click Apply button if necessary
  215 |   async clickApplyButton() {
  216 |     await this.applyButton.click();
  217 |   }
  218 |   
  219 |
  220 |
  221 |   async filterByAbnormalLabs() {
  222 |     await this.last36MonthsButton.click();
  223 |     await this.checkboxAbnormal.check();
  224 |     await this.applyButton.click();
  225 |   }
  226 |
  227 |   async uncheckAbnormalLabs() {
  228 |     await this.last36MonthsButton.click();
  229 |     await this.checkboxAbnormal.uncheck(); // Uncheck the abnormal checkbox
  230 |     await this.applyButton.click();
  231 |   }
  232 |
  233 |   async verifyFirstLabIsAbnormal() {
  234 |     await this.firstLabCardAbnormalLabel.waitFor({ state: 'visible' });
  235 |
  236 |     const abnormalText = await this.firstLabCardAbnormalLabel.textContent();
  237 |
  238 |     if (abnormalText?.trim() === 'Abnormal') {
  239 |       console.log('✅ First lab result is Abnormal');
  240 |     } else {
  241 |       console.log('❌ First lab result is NOT Abnormal. Actual text:', abnormalText?.trim());
  242 |     }
  243 |   }
  244 |
  245 |   async verifyFirstLabIsNoAbnormal() {
  246 |     await this.noAbnormalLabel.waitFor({ state: 'visible' });
  247 |
  248 |     const noAbnormalText = await this.noAbnormalLabel.textContent();
  249 |
  250 |     if (noAbnormalText?.trim() === 'N/A') {
  251 |       console.log('✅ First lab result is N/A (No Abnormal)');
  252 |     } else {
  253 |       console.log('❌ First lab result is NOT N/A. Actual text:', noAbnormalText?.trim());
  254 |     }
  255 |   }
  256 | }
  257 |
  258 |
```