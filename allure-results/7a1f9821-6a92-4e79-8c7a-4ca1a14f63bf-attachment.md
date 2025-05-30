# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: locator.selectOption: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//select[@title="Select year"]')

    at LabsPage.selectYear (/home/karthi/pmp/src/pages/LabsPage.js:197:29)
    at LabsPage.selectDateRange (/home/karthi/pmp/src/pages/LabsPage.js:215:16)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:177:2
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
- checkbox "Checkbox for Abnormal"
- text: Abnormal
- button "Apply"
- text: Clear
- separator
- text: "Date Range: from 05-14-2022 to 05-14-2025 Show"
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
   97 |         console.log(`Physician ${i + 1}: ${name}`);
   98 |       }
   99 |     }
  100 |   }
  101 |
  102 |   
  103 |
  104 |   // async searchPhysician(name) {
  105 |   //   await this.physiciansearchinput.click();
  106 |   //   await this.physiciansearchinput.fill(name);
  107 |   //   await this.applyButton.click();
  108 |   
  109 |   //   // Scroll down before asserting
  110 |   //   await this.page.mouse.wheel(0, 500);
  111 |   
  112 |   //   await expect(this.physician).toBeVisible();
  113 |   
  114 |   //   const physicianText = await this.physician.textContent();
  115 |   //   console.log('Physician Name Found:', physicianText.trim());
  116 |   // }
  117 |   
  118 |   // Method to search for a lab by name
  119 |
  120 |   async goToLabsAndSearch(labName) {
  121 |     // await this.labSearchInput.click();
  122 |     await this.labSearchInput.click({ force: true });
  123 |
  124 |     await this.labSearchInput.fill(labName);
  125 |     await this.applyButton.click();
  126 |
  127 |     const labResult = this.page.getByText(new RegExp(labName, 'i'));
  128 |
  129 |     await labResult.scrollIntoViewIfNeeded(); // scroll to element
  130 |     await expect(labResult).toBeVisible(); // assertion
  131 |
  132 |     // ✅ console log lab result text
  133 |     const labText = await labResult.textContent();
  134 |     console.log('✅ Found Lab Result:', labText?.trim());
  135 |
  136 |   }//li[normalize-space()='Last 3 Months']
  137 |
  138 |
  139 | // Method to filter by date range
  140 |
  141 |   async filterByDateRange() {
  142 |     await this.last36MonthsButton.click();
  143 |     console.log('🔍 Clicked on "Last 36 Months" button.');
  144 |   
  145 |     await this.last3MonthsOption.click();
  146 |     console.log('🔍 Selected "Last 3 Months" option.');
  147 |   
  148 |     // Wait for UI to reflect the date range change
  149 |     await this.dateRangeText.waitFor({ state: 'visible', timeout: 10000 });
  150 |   
  151 |     // Dynamically calculate the expected date range
  152 |     const endDate = new Date();
  153 |     const startDate = new Date();
  154 |     startDate.setMonth(startDate.getMonth() - 3);
  155 |   
  156 |     // Format date as MM-DD-YYYY
  157 |     const formatDate = (date) => {
  158 |       const mm = String(date.getMonth() + 1).padStart(2, '0');
  159 |       const dd = String(date.getDate()).padStart(2, '0');
  160 |       const yyyy = date.getFullYear();
  161 |       return `${mm}-${dd}-${yyyy}`;
  162 |     };
  163 |   
  164 |     const expectedStart = formatDate(startDate);
  165 |     const expectedEnd = formatDate(endDate);
  166 |   
  167 |     // Log the expected date range
  168 |     console.log(`🔍 Expected Date Range: from ${expectedStart} to ${expectedEnd}`);
  169 |   
  170 |     // Use a regex to ignore spacing or additional text issues
  171 |     const pattern = new RegExp(`Date Range:\\s*from\\s*${expectedStart}\\s*to\\s*${expectedEnd}`, 'i');
  172 |   
  173 |     // Assert the date range text
  174 |     await expect(this.dateRangeText).toHaveText(pattern, { timeout: 15000 });
  175 |     console.log('✅ Date range successfully validated.');
  176 |   
  177 |     // // Assert that "No Lab Results to Show" text is visible
  178 |     await expect(this.noLabResultsText).toBeVisible({ timeout: 50000 });
  179 |     console.log('✅ "No Lab Results to Show" is visible.');
  180 |
  181 |     await this.clearButton .click();
  182 |   }
  183 |   
  184 | // custom date range
  185 |
  186 |   dateCell(dayName, monthName, dayNumber, year) {
  187 |     const fullDateLabel = `${dayName}, ${monthName} ${dayNumber}, ${year}`;
  188 |     return this.page.locator(`//div[@aria-label="${fullDateLabel}"]`);
  189 |   }
  190 |
  191 |   async openCustomDatePicker() {
  192 |     await this.last36MonthsButton.click();
  193 |     await this.customDateButton.click();
  194 |   }
  195 |
  196 |   async selectYear(value) {
> 197 |     await this.yearDropdown.selectOption({ value });
      |                             ^ TimeoutError: locator.selectOption: Timeout 10000ms exceeded.
  198 |   }
  199 |
  200 |   async selectMonth(value) {
  201 |     const monthCount = await this.monthOptions.count();
  202 |     for (let i = 0; i < monthCount; i++) {
  203 |       const optionValue = await this.monthOptions.nth(i).getAttribute('value');
  204 |       if (optionValue === value) {
  205 |         await this.monthDropdown.selectOption(optionValue);
  206 |         break;
  207 |       }
  208 |     }
  209 |   }
  210 |
  211 |   async selectDateRange(start, end) {
  212 |     await this.openCustomDatePicker();
  213 |
  214 |     // Start Date
  215 |     await this.selectYear(start.year);
  216 |     await this.selectMonth(start.month); // 1 = Jan, 12 = Dec
  217 |     const startDateLocator = this.dateCell(start.dayName, start.monthName, start.day, start.year);
  218 |     await startDateLocator.click();
  219 |
  220 |     // End Date
  221 |     await this.selectYear(end.year);
  222 |     await this.selectMonth(end.month);
  223 |     const endDateLocator = this.dateCell(end.dayName, end.monthName, end.day, end.year);
  224 |     await endDateLocator.click();
  225 |
  226 |   }
  227 |
  228 | // method test name search
  229 |
  230 |   async searchLabTest(testName) {
  231 |     await this.scrollToSearchBox();
  232 |     await this.testnamesearchBox.click();
  233 |     await this.testnamesearchBox.fill(testName);
  234 |     await this.applyButton.click();
  235 |   }
  236 |
  237 |   async clearSearch() {
  238 |     await this.clearButton.click();
  239 |   }
  240 |
  241 |   async verifyNoResultsMessage() {
  242 |     return await this.noLabResultsText.isVisible();
  243 |   }
  244 |
  245 |   async scrollToSearchBox() {
  246 |     await this.testnamesearchBox.scrollIntoViewIfNeeded();
  247 |   }
  248 |
  249 |   async logResultStatus(testName) {
  250 |     if (await this.verifyNoResultsMessage()) {
  251 |       console.log(`❌ No results found for: ${testName}`);
  252 |     } else {
  253 |       console.log(`✅ Results found for: ${testName}`);
  254 |     }
  255 |   }
  256 |
  257 |
  258 |   async selectAbnormalCheckbox() {
  259 |     await this.checkboxAbnormal.check();
  260 |   }
  261 |
  262 |      // Method to open the custom date filter
  263 |
  264 |   async selectLast3Months() {
  265 |     await this.last36MonthsButton.click();
  266 |     await this.last3MonthsDropdownItem.click();
  267 |   }
  268 |
  269 |   async printNoLabResultsText() {
  270 |     await this.noLabResultsText.waitFor({ state: 'visible', timeout: 30000 });
  271 |
  272 |     const noLabResults = await this.noLabResultsText.innerText();
  273 |     console.log(noLabResults);
  274 |   }
  275 |
  276 |   // You can add a method to click Apply button if necessary
  277 |   async clickApplyButton() {
  278 |     await this.applyButton.click();
  279 |   }
  280 |   
  281 | // checkboxabnormal and uncheckabnormal
  282 |
  283 |   async filterByAbnormalLabs() {
  284 |     await this.last36MonthsButton.click();
  285 |     await this.checkboxAbnormal.check();
  286 |     await this.applyButton.click();
  287 |   }
  288 |
  289 |   // async uncheckAbnormalLabs() {
  290 |   //   await this.last36MonthsButton.click();
  291 |   //   await this.checkboxAbnormal.uncheck(); // Uncheck the abnormal checkbox
  292 |   //   await this.applyButton.click();
  293 |   // }
  294 |   async uncheckAbnormalLabs() {
  295 |     await this.last36MonthsButton.click();
  296 |     await expect(this.checkboxAbnormal).toBeVisible(); // Add visibility check
  297 |     if (await this.checkboxAbnormal.isChecked()) {
```