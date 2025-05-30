# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:22:1

# Error details

```
Error: locator.innerText: Test timeout of 70000ms exceeded.
Call log:
  - waiting for getByText('No Lab Results to Show')

    at LabsPage.printNoLabResultsText (/home/karthi/pmp/src/pages/LabsPage.js:194:54)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:137:12
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
- button "Last 3 Months"
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
- text: entries
- status
```

# Test source

```ts
   94 |   async filterByDateRange() {
   95 |     await this.last36MonthsButton.click();
   96 |     console.log('🔍 Clicked on "Last 36 Months" button.');
   97 |   
   98 |     await this.last3MonthsOption.click();
   99 |     console.log('🔍 Selected "Last 3 Months" option.');
  100 |   
  101 |     // Wait for UI to reflect the date range change
  102 |     await this.dateRangeText.waitFor({ state: 'visible', timeout: 10000 });
  103 |   
  104 |     // Dynamically calculate the expected date range
  105 |     const endDate = new Date();
  106 |     const startDate = new Date();
  107 |     startDate.setMonth(startDate.getMonth() - 3);
  108 |   
  109 |     // Format date as MM-DD-YYYY
  110 |     const formatDate = (date) => {
  111 |       const mm = String(date.getMonth() + 1).padStart(2, '0');
  112 |       const dd = String(date.getDate()).padStart(2, '0');
  113 |       const yyyy = date.getFullYear();
  114 |       return `${mm}-${dd}-${yyyy}`;
  115 |     };
  116 |   
  117 |     const expectedStart = formatDate(startDate);
  118 |     const expectedEnd = formatDate(endDate);
  119 |   
  120 |     // Log the expected date range
  121 |     console.log(`🔍 Expected Date Range: from ${expectedStart} to ${expectedEnd}`);
  122 |   
  123 |     // Use a regex to ignore spacing or additional text issues
  124 |     const pattern = new RegExp(`Date Range:\\s*from\\s*${expectedStart}\\s*to\\s*${expectedEnd}`, 'i');
  125 |   
  126 |     // Assert the date range text
  127 |     await expect(this.dateRangeText).toHaveText(pattern, { timeout: 15000 });
  128 |     console.log('✅ Date range successfully validated.');
  129 |   
  130 |     // // Assert that "No Lab Results to Show" text is visible
  131 |     await expect(this.noLabResultsText).toBeVisible({ timeout: 30000 });
  132 |     console.log('✅ "No Lab Results to Show" is visible.');
  133 |
  134 |     await this.clearButton .click();
  135 |   }
  136 |   
  137 |   // async applyCustomDateFilter() {
  138 |   //   await this.last36MonthsButton.click();
  139 |   //   await this.customDateButton.click();
  140 |   //   await this.startDate.click();
  141 |   //   await this.endDate.click();
  142 |   // }
  143 |
  144 |   async openCustomDatePicker() {
  145 |     await this.last36MonthsButton.click();
  146 |     await this.customDateButton.click();
  147 |   }
  148 |
  149 | //  Method to select a custom date range dynamically
  150 |
  151 |   // Helper method to adjust the calendar to the desired month and year
  152 |   async selectDateRange(startDate, endDate) {
  153 |     // Click 'Last 36 Months'
  154 |     await this.last36MonthsButton.click();
  155 |
  156 |     // Click 'Custom'
  157 |     await this.customDateButton.click();
  158 |
  159 |     // Build dynamic locators
  160 |     const startLocator = this.page.locator(
  161 |       `//div[@aria-label='${this.formatAriaDate(startDate)}']//span[@class='custom-day'][normalize-space()='${startDate.getDate()}']`
  162 |     );
  163 |
  164 |     const endLocator = this.page.locator(
  165 |       `//div[@aria-label='${this.formatAriaDate(endDate)}']//span[@class='custom-day'][normalize-space()='${endDate.getDate()}']`
  166 |     );
  167 |
  168 |     // Click start and end dates
  169 |     await startLocator.click();
  170 |     await endLocator.click();
  171 |   }
  172 |
  173 |   formatAriaDate(date) {
  174 |     return date.toLocaleDateString('en-US', {
  175 |       weekday: 'long',
  176 |       year: 'numeric',
  177 |       month: 'long',
  178 |       day: 'numeric'
  179 |     });
  180 |   }
  181 |
  182 |
  183 |
  184 |   async selectAbnormalCheckbox() {
  185 |     await this.checkboxAbnormal.check();
  186 |   }
  187 |
  188 |   async selectLast3Months() {
  189 |     await this.last36MonthsButton.click();
  190 |     await this.last3MonthsDropdownItem.click();
  191 |   }
  192 |
  193 |   async printNoLabResultsText() {
> 194 |     const noLabResults = await this.noLabResultsText.innerText();
      |                                                      ^ Error: locator.innerText: Test timeout of 70000ms exceeded.
  195 |     console.log(noLabResults);
  196 |   }
  197 |
  198 |   // You can add a method to click Apply button if necessary
  199 |   async clickApplyButton() {
  200 |     await this.applyButton.click();
  201 |   }
  202 |   
  203 |
  204 |
  205 |   async filterByAbnormalLabs() {
  206 |     await this.last36MonthsButton.click();
  207 |     await this.checkboxAbnormal.check();
  208 |     await this.applyButton.click();
  209 |   }
  210 |
  211 |   async uncheckAbnormalLabs() {
  212 |     await this.last36MonthsButton.click();
  213 |     await this.checkboxAbnormal.uncheck(); // Uncheck the abnormal checkbox
  214 |     await this.applyButton.click();
  215 |   }
  216 |
  217 |   async verifyFirstLabIsAbnormal() {
  218 |     await this.firstLabCardAbnormalLabel.waitFor({ state: 'visible' });
  219 |
  220 |     const abnormalText = await this.firstLabCardAbnormalLabel.textContent();
  221 |
  222 |     if (abnormalText?.trim() === 'Abnormal') {
  223 |       console.log('✅ First lab result is Abnormal');
  224 |     } else {
  225 |       console.log('❌ First lab result is NOT Abnormal. Actual text:', abnormalText?.trim());
  226 |     }
  227 |   }
  228 |
  229 |   async verifyFirstLabIsNoAbnormal() {
  230 |     await this.noAbnormalLabel.waitFor({ state: 'visible' });
  231 |
  232 |     const noAbnormalText = await this.noAbnormalLabel.textContent();
  233 |
  234 |     if (noAbnormalText?.trim() === 'N/A') {
  235 |       console.log('✅ First lab result is N/A (No Abnormal)');
  236 |     } else {
  237 |       console.log('❌ First lab result is NOT N/A. Actual text:', noAbnormalText?.trim());
  238 |     }
  239 |   }
  240 | }
  241 |
  242 |
  243 |
  244 |
  245 |
  246 |
```