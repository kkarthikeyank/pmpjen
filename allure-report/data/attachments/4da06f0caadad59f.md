# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:22:1

# Error details

```
Error: locator.click: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('//div[@aria-label="Thursday, January 2, 2025"]')

    at LabsPage.selectCustomDateRange (/home/karthi/pmp/src/pages/LabsPage.js:190:42)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:155:1
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
- text: "Date Range: from 05-09-2022 to 05-09-2025 Show"
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
   90 |     await labResult.scrollIntoViewIfNeeded(); // scroll to element
   91 |     await expect(labResult).toBeVisible(); // assertion
   92 |
   93 |     // ✅ console log lab result text
   94 |     const labText = await labResult.textContent();
   95 |     console.log('✅ Found Lab Result:', labText?.trim());
   96 |
   97 |   }//li[normalize-space()='Last 3 Months']
   98 |
   99 |
  100 |
  101 |
  102 |   async filterByDateRange() {
  103 |     await this.last36MonthsButton.click();
  104 |     console.log('🔍 Clicked on "Last 36 Months" button.');
  105 |   
  106 |     await this.last3MonthsOption.click();
  107 |     console.log('🔍 Selected "Last 3 Months" option.');
  108 |   
  109 |     // Wait for UI to reflect the date range change
  110 |     await this.dateRangeText.waitFor({ state: 'visible', timeout: 10000 });
  111 |   
  112 |     // Dynamically calculate the expected date range
  113 |     const endDate = new Date();
  114 |     const startDate = new Date();
  115 |     startDate.setMonth(startDate.getMonth() - 3);
  116 |   
  117 |     // Format date as MM-DD-YYYY
  118 |     const formatDate = (date) => {
  119 |       const mm = String(date.getMonth() + 1).padStart(2, '0');
  120 |       const dd = String(date.getDate()).padStart(2, '0');
  121 |       const yyyy = date.getFullYear();
  122 |       return `${mm}-${dd}-${yyyy}`;
  123 |     };
  124 |   
  125 |     const expectedStart = formatDate(startDate);
  126 |     const expectedEnd = formatDate(endDate);
  127 |   
  128 |     // Log the expected date range
  129 |     console.log(`🔍 Expected Date Range: from ${expectedStart} to ${expectedEnd}`);
  130 |   
  131 |     // Use a regex to ignore spacing or additional text issues
  132 |     const pattern = new RegExp(`Date Range:\\s*from\\s*${expectedStart}\\s*to\\s*${expectedEnd}`, 'i');
  133 |   
  134 |     // Assert the date range text
  135 |     await expect(this.dateRangeText).toHaveText(pattern, { timeout: 15000 });
  136 |     console.log('✅ Date range successfully validated.');
  137 |   
  138 |     // // Assert that "No Lab Results to Show" text is visible
  139 |     await expect(this.noLabResultsText).toBeVisible({ timeout: 50000 });
  140 |     console.log('✅ "No Lab Results to Show" is visible.');
  141 |
  142 |     await this.clearButton .click();
  143 |   }
  144 |   
  145 |   // async applyCustomDateFilter() {
  146 |   //   await this.last36MonthsButton.click();
  147 |   //   await this.customDateButton.click();
  148 |   //   await this.startDate.click();
  149 |   //   await this.endDate.click();
  150 |   // }
  151 |
  152 |   async searchLabTest(testName) {
  153 |     await this.scrollToSearchBox();
  154 |     await this.testnamesearchBox.click();
  155 |     await this.testnamesearchBox.fill(testName);
  156 |     await this.applyButton.click();
  157 |   }
  158 |
  159 |   async clearSearch() {
  160 |     await this.clearButton.click();
  161 |   }
  162 |
  163 |   async verifyNoResultsMessage() {
  164 |     return await this.noLabResultsText.isVisible();
  165 |   }
  166 |
  167 |   async scrollToSearchBox() {
  168 |     await this.testnamesearchBox.scrollIntoViewIfNeeded();
  169 |   }
  170 |
  171 |   async logResultStatus(testName) {
  172 |     if (await this.verifyNoResultsMessage()) {
  173 |       console.log(`❌ No results found for: ${testName}`);
  174 |     } else {
  175 |       console.log(`✅ Results found for: ${testName}`);
  176 |     }
  177 |   }
  178 |    // Method to open the custom date filter
  179 |    async selectCustomDateRange(monthValue, yearValue, startDateLabel, endDateLabel) {
  180 |     await this.last36MonthsButton.click();
  181 |     await this.customDateButton.click();
  182 |
  183 |     // Select Month
  184 |     await this.monthDropdown.selectOption({ value: monthValue });
  185 |
  186 |     // Select Year
  187 |     await this.yearDropdown.selectOption({ value: yearValue });
  188 |
  189 |     // Pick Start Date
> 190 |     await this.startDate(startDateLabel).click();
      |                                          ^ Error: locator.click: Test timeout of 70000ms exceeded.
  191 |
  192 |     // Pick End Date
  193 |     await this.endDate(endDateLabel).click();
  194 |   }
  195 |
  196 |
  197 |   async selectAbnormalCheckbox() {
  198 |     await this.checkboxAbnormal.check();
  199 |   }
  200 |
  201 |   async selectLast3Months() {
  202 |     await this.last36MonthsButton.click();
  203 |     await this.last3MonthsDropdownItem.click();
  204 |   }
  205 |
  206 |   async printNoLabResultsText() {
  207 |     await this.noLabResultsText.waitFor({ state: 'visible', timeout: 30000 });
  208 |
  209 |     const noLabResults = await this.noLabResultsText.innerText();
  210 |     console.log(noLabResults);
  211 |   }
  212 |
  213 |   // You can add a method to click Apply button if necessary
  214 |   async clickApplyButton() {
  215 |     await this.applyButton.click();
  216 |   }
  217 |   
  218 |
  219 |
  220 |   async filterByAbnormalLabs() {
  221 |     await this.last36MonthsButton.click();
  222 |     await this.checkboxAbnormal.check();
  223 |     await this.applyButton.click();
  224 |   }
  225 |
  226 |   async uncheckAbnormalLabs() {
  227 |     await this.last36MonthsButton.click();
  228 |     await this.checkboxAbnormal.uncheck(); // Uncheck the abnormal checkbox
  229 |     await this.applyButton.click();
  230 |   }
  231 |
  232 |   async verifyFirstLabIsAbnormal() {
  233 |     await this.firstLabCardAbnormalLabel.waitFor({ state: 'visible' });
  234 |
  235 |     const abnormalText = await this.firstLabCardAbnormalLabel.textContent();
  236 |
  237 |     if (abnormalText?.trim() === 'Abnormal') {
  238 |       console.log('✅ First lab result is Abnormal');
  239 |     } else {
  240 |       console.log('❌ First lab result is NOT Abnormal. Actual text:', abnormalText?.trim());
  241 |     }
  242 |   }
  243 |
  244 |   async verifyFirstLabIsNoAbnormal() {
  245 |     await this.noAbnormalLabel.waitFor({ state: 'visible' });
  246 |
  247 |     const noAbnormalText = await this.noAbnormalLabel.textContent();
  248 |
  249 |     if (noAbnormalText?.trim() === 'N/A') {
  250 |       console.log('✅ First lab result is N/A (No Abnormal)');
  251 |     } else {
  252 |       console.log('❌ First lab result is NOT N/A. Actual text:', noAbnormalText?.trim());
  253 |     }
  254 |   }
  255 | }
  256 |
  257 |
  258 |
  259 |
  260 |
  261 |
```