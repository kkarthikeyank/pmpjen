# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: page.waitForSelector: Target page, context or browser has been closed
Call log:
  - waiting for locator('//div[contains(@class, \'form-check\')]//div[contains(text(), \'Z34.83 - Unknown\')]/preceding-sibling::div//input[@type=\'checkbox\']') to be visible

    at ClaimsPage.checkDiagnosesCheckbox (/home/karthi/pmp/src/pages/ClaimsPage.js:127:38)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:108:18
```

# Test source

```ts
   27 |     this.applyFiltersButton = page.locator("//button[@id='applyFilterClaims']"); // Button to apply filters
   28 |     this.clearFiltersButton = page.locator("#claimsClearFilter");
   29 |     this.applyClearButton = page.getByLabel('Filter Results').getByText('Apply Clear');
   30 |     this.closeButton = page.getByRole('button', { name: 'Close' });
   31 |     this.selectedpayee = page.locator("//div[normalize-space()='Integra Partners Llc']");
   32 |     this.selectedprovider = page.locator("//div[normalize-space()='Nicole Koepke']");
   33 |     this.monthsdateverify = page.locator("//div[@class='flex-fill']");
   34 |
   35 |     //button[@id='applyFilterClaims']
   36 |     this.doneButton = page.getByRole('button', { name: 'Done' });
   37 |
   38 |     this.viewDetailsButton = page.locator("//button[@tabindex='0' and text()=' View Details ']"); // Button to open claim details
   39 |     this.totalclaimbill = page.locator("total_claim_charge_billedtext");
   40 |     this.returnButton = page.getByText('Return to previous page');
   41 |     this.claimNumberInput = page.getByRole('textbox', { name: 'Claim Number' });
   42 |     this.applyButton = page.getByRole('button', { name: 'Apply' });
   43 |     this.clearButton = page.getByRole('button', { name: 'Clear' });
   44 |     this.noClaimsMessage = page.locator('#noInformation');
   45 |
   46 |     this.dateFilterButton1 = page.locator("//button[@id='dropdownDateFilterButton']");
   47 |
   48 |     //   this.customRadio = page.getByRole('radio', { name: 'Custom' });
   49 |     //   this.fromDate =  page.locator(`//div[contains(text(),'11')]`);
   50 |
   51 |     //   this.toDateButton = page.locator(`//div[contains(text(),'29')]`);  
   52 |     //   this.noResultsText = page.getByText('No matching results were');
   53 |
   54 |
   55 |     //
   56 |     // Adding new locators for custom date filter
   57 |
   58 |     this.customRadio = page.getByRole('radio', { name: 'Custom' });
   59 |     this.fromDateInput = page.locator('#dpFromDateInput'); // Custom From Date Input
   60 |     this.toDateInput = page.locator('#dpToDateInput'); // Custom To Date Input
   61 |     this.noResultsText = page.getByText('No matching results were');
   62 |     //  this.doneButton = this.page.getByRole('button', { name: 'Done' });
   63 |     this.noResultsText = page.getByText('No matching results were');
   64 |     this.providerBlocks = page.locator('form-check-input me-2'); // All provider blocks
   65 |
   66 |
   67 |   }
   68 |
   69 |
   70 |
   71 |   // open claims tab
   72 |   async openClaimsTab() {
   73 |     // Ensure the Claims tab is visible before clicking
   74 |     await this.claimsTab.waitFor({ state: 'visible', timeout: 20000 });
   75 |     await this.claimsTab.click();
   76 |
   77 |     // Optionally, wait for the page to load after clicking the Claims tab (if it redirects)
   78 |     await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });
   79 |   }
   80 |
   81 |
   82 |
   83 |   // Dynamically selects a date range from radio options
   84 |   async selectDateRange(rangeText) {
   85 |     await this.dateFilterButton.click();
   86 |
   87 |     // Handle label or text-based radio buttons dynamically
   88 |     const rangeOption = this.page.getByLabel(rangeText, { exact: true });
   89 |     if (await rangeOption.isVisible()) {
   90 |       await rangeOption.check();
   91 |     } else {
   92 |       // Fallback: try clicking by visible text
   93 |       await this.page.getByText(rangeText, { exact: true }).click();
   94 |     }
   95 |
   96 |     await this.doneButton.click();
   97 |     await this.filterResultsButton.click();
   98 |     console.log(`[INFO] Filter applied: ${rangeText}`);
   99 |   }
  100 |
  101 |   async checkProviderCheckbox(providerName) {
  102 |     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), '${providerName}')]/preceding-sibling::div//input[@type='checkbox']`;
  103 |     const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`);
  104 |
  105 |     if (!(await checkbox.isChecked())) {
  106 |       await checkbox.check();
  107 |       console.log(`[INFO] Checked checkbox for provider: ${providerName}`);
  108 |     } else {
  109 |       console.log(`[INFO] Provider already checked: ${providerName}`);
  110 |     }
  111 |   }
  112 |
  113 |   async checkPayeeCheckbox(payeeName) {
  114 |     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), '${payeeName}')]/preceding-sibling::div//input[@type='checkbox']`;
  115 |     const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`);
  116 |
  117 |     if (!(await checkbox.isChecked())) {
  118 |       await checkbox.check();
  119 |       console.log(`[INFO] Checked checkbox for payee: ${payeeName}`);
  120 |     } else {
  121 |       console.log(`[INFO] Payee already checked: ${payeeName}`);
  122 |     }
  123 |   }
  124 |
  125 |   async checkDiagnosesCheckbox(diagnosisLabel) {
  126 |     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), '${diagnosisLabel}')]/preceding-sibling::div//input[@type='checkbox']`;
> 127 |     const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`, { timeout: 20000 });
      |                                      ^ Error: page.waitForSelector: Target page, context or browser has been closed
  128 |
  129 |     if (!(await checkbox.isChecked())) {
  130 |       await checkbox.check();
  131 |       console.log(`[INFO] Checked checkbox for diagnosis: ${diagnosisLabel}`);
  132 |     } else {
  133 |       console.log(`[INFO] Diagnosis already checked: ${diagnosisLabel}`);
  134 |     }
  135 |
  136 |     await this.applyFiltersButton.click();
  137 |   }
  138 |   // calender custom date range
  139 |   //    async filterByLast60Months() {
  140 |   //   await this.dateFilterButton.click();
  141 |   //   await this.last60MonthsRadio .check();
  142 |   //   await this.doneButton.click();
  143 |   //   await this.filterResultsButton.click();
  144 |   //   console.log('[INFO] Filter applied: Last 60 Months');
  145 |
  146 |
  147 |   //    }
  148 |   //      async checkProviderCheckbox(providerName) {
  149 |   //   const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), '${providerName}')]/preceding-sibling::div//input[@type='checkbox']`;
  150 |   //   const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`);
  151 |
  152 |   //   const isChecked = await checkbox.isChecked();
  153 |   //   if (!isChecked) {
  154 |   //     await checkbox.check();
  155 |   //     console.log(`[INFO] Checked checkbox for provider: ${providerName}`);
  156 |   //   } else {
  157 |   //     console.log(`[INFO] Checkbox for provider: ${providerName} was already checked`);
  158 |   //   }
  159 |
  160 |      
  161 |   // }
  162 |  
  163 |   // async checkPayeeCheckbox(payeeName) {
  164 |   //   const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), '${payeeName}')]/preceding-sibling::div//input[@type='checkbox']`;
  165 |   //   const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`);
  166 |
  167 |   //   const isChecked = await checkbox.isChecked();
  168 |   //   if (!isChecked) {
  169 |   //     await checkbox.check();
  170 |   //     console.log(`[INFO] Checked checkbox for payee: ${payeeName}`);
  171 |   //   } else {
  172 |   //     console.log(`[INFO] Checkbox for payee: ${payeeName} was already checked`);
  173 |   //   }
  174 |
  175 |   // }
  176 |
  177 |   // async checkDiagnosesCheckbox(diagnosisLabel) {
  178 |   //   const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), '${diagnosisLabel}')]/preceding-sibling::div//input[@type='checkbox']`;
  179 |   //   // const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`);
  180 |   //   await this.page.waitForSelector(`xpath=${checkboxXPath}`, { timeout: 20000 });
  181 |
  182 |
  183 |   //   const isChecked = await checkbox.isChecked();
  184 |   //   if (!isChecked) {
  185 |   //     await checkbox.check();
  186 |   //     console.log(`[INFO] Checked checkbox for diagnosis: ${diagnosisLabel}`);
  187 |   //   } else {
  188 |   //     console.log(`[INFO] Checkbox for diagnosis: ${diagnosisLabel} was already checked`);
  189 |   //   }
  190 |   //       await this.applyFiltersButton.click();
  191 |
  192 |   // }
  193 |
  194 |
  195 |
  196 |   //  scenario Filter by date range and print claims
  197 |
  198 |   // async filterAndPrintClaimsByLabel(label) {
  199 |   //   const dateFilters = {
  200 |   //     '3 Months': 'LAST_3_MONTHSradio',
  201 |   //     '6 Months': 'LAST_6_MONTHSradio',
  202 |   //     '60 Months': 'LAST_60_MONTHSradio',
  203 |   //   };
  204 |
  205 |   //   const filterId = dateFilters[label];
  206 |   //   if (!filterId) {
  207 |   //     console.log(`Invalid filter label: ${label}`);
  208 |   //     return;
  209 |   //   }
  210 |
  211 |   //   console.log(`Filtering by: ${label}`);
  212 |   //   await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  213 |
  214 |   //   await this.dateFilterButtons.waitFor({ state: 'visible', timeout: 10000 });
  215 |   //   await this.dateFilterButtons.click();
  216 |
  217 |   //   const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  218 |   //   await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  219 |   //   await radioLocator.check();
  220 |
  221 |   //   await this.doneButton.click();
  222 |
  223 |   //   await this.page.waitForTimeout(3000); // Replace with smarter wait if needed
  224 |
  225 |   //   const claims = await this.claimNumberLocator.all();
  226 |   //   if (claims.length === 0) {
  227 |   //     console.log("No claims found");
```