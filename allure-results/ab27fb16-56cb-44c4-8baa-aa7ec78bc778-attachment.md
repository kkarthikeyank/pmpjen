# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: page.waitForSelector: Target page, context or browser has been closed
Call log:
  - waiting for locator('//div[contains(@class, \'form-check\')]//div[contains(text(), \'Z34.83 - Unknown \')]/preceding-sibling::div//input[@type=\'checkbox\']') to be visible

    at ClaimsPage.checkDiagnosesCheckbox (/home/karthi/pmp/src/pages/ClaimsPage.js:123:21)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:101:16
```

# Test source

```ts
   23 |
   24 |     // this.last60MonthsRadio = page.getByRole('radio', { name: 'Last 60 Months' });
   25 |     this.last60MonthsRadio = page.locator("//input[@id='LAST_60_MONTHSradio']"); 
   26 |     this.filterResultsButton = page.locator("//span[normalize-space()='Filter Results']"); // Button to open filter panel
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
   81 |   // calender custom date range
   82 |      async filterByLast60Months() {
   83 |     await this.dateFilterButton.click();
   84 |     await this.last60MonthsRadio .check();
   85 |     await this.doneButton.click();
   86 |     await this.filterResultsButton.click();
   87 |     console.log('[INFO] Filter applied: Last 60 Months');
   88 |
   89 |
   90 |      }
   91 |        async checkProviderCheckbox(providerName) {
   92 |     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), '${providerName}')]/preceding-sibling::div//input[@type='checkbox']`;
   93 |     const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`);
   94 |
   95 |     const isChecked = await checkbox.isChecked();
   96 |     if (!isChecked) {
   97 |       await checkbox.check();
   98 |       console.log(`[INFO] Checked checkbox for provider: ${providerName}`);
   99 |     } else {
  100 |       console.log(`[INFO] Checkbox for provider: ${providerName} was already checked`);
  101 |     }
  102 |
  103 |      
  104 |   }
  105 |  
  106 |   async checkPayeeCheckbox(payeeName) {
  107 |     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), '${payeeName}')]/preceding-sibling::div//input[@type='checkbox']`;
  108 |     const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`);
  109 |
  110 |     const isChecked = await checkbox.isChecked();
  111 |     if (!isChecked) {
  112 |       await checkbox.check();
  113 |       console.log(`[INFO] Checked checkbox for payee: ${payeeName}`);
  114 |     } else {
  115 |       console.log(`[INFO] Checkbox for payee: ${payeeName} was already checked`);
  116 |     }
  117 |
  118 |   }
  119 |
  120 |   async checkDiagnosesCheckbox(diagnosisLabel) {
  121 |     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), '${diagnosisLabel}')]/preceding-sibling::div//input[@type='checkbox']`;
  122 |     // const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`);
> 123 |     await this.page.waitForSelector(`xpath=${checkboxXPath}`, { timeout: 20000 });
      |                     ^ Error: page.waitForSelector: Target page, context or browser has been closed
  124 |
  125 |
  126 |     const isChecked = await checkbox.isChecked();
  127 |     if (!isChecked) {
  128 |       await checkbox.check();
  129 |       console.log(`[INFO] Checked checkbox for diagnosis: ${diagnosisLabel}`);
  130 |     } else {
  131 |       console.log(`[INFO] Checkbox for diagnosis: ${diagnosisLabel} was already checked`);
  132 |     }
  133 |         await this.applyFiltersButton.click();
  134 |
  135 |   }
  136 |
  137 |
  138 |
  139 |   //  scenario Filter by date range and print claims
  140 |
  141 |   // async filterAndPrintClaimsByLabel(label) {
  142 |   //   const dateFilters = {
  143 |   //     '3 Months': 'LAST_3_MONTHSradio',
  144 |   //     '6 Months': 'LAST_6_MONTHSradio',
  145 |   //     '60 Months': 'LAST_60_MONTHSradio',
  146 |   //   };
  147 |
  148 |   //   const filterId = dateFilters[label];
  149 |   //   if (!filterId) {
  150 |   //     console.log(`Invalid filter label: ${label}`);
  151 |   //     return;
  152 |   //   }
  153 |
  154 |   //   console.log(`Filtering by: ${label}`);
  155 |   //   await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  156 |
  157 |   //   await this.dateFilterButtons.waitFor({ state: 'visible', timeout: 10000 });
  158 |   //   await this.dateFilterButtons.click();
  159 |
  160 |   //   const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  161 |   //   await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  162 |   //   await radioLocator.check();
  163 |
  164 |   //   await this.doneButton.click();
  165 |
  166 |   //   await this.page.waitForTimeout(3000); // Replace with smarter wait if needed
  167 |
  168 |   //   const claims = await this.claimNumberLocator.all();
  169 |   //   if (claims.length === 0) {
  170 |   //     console.log("No claims found");
  171 |   //   } else {
  172 |   //     console.log(`Claims found for ${label}:`);
  173 |   //     for (const claim of claims) {
  174 |   //       const text = await claim.textContent();
  175 |   //       console.log(`Claim Number: ${text?.trim()}`);
  176 |   //     }
  177 |   //   }
  178 |
  179 |
  180 |   // }  senario
  181 |
  182 |   // // Method to open filter panel
  183 |   // async openFilterPanel() {
  184 |   //   await this.filterResultsButton.click();
  185 |   //   console.log("[INFO] Filter panel opened.");
  186 |   // }
  187 |
  188 |   // // Method to apply provider checkboxes based on given JSON providers list
  189 |   // async applyProviderFilters(providerList) {
  190 |   //   let missingLabels = [];
  191 |
  192 |   //   // Iterate over provider names from JSON list
  193 |   //   for (const provider of providerList) {
  194 |   //     const trimmedProvider = provider.trim();
  195 |   //     console.log(`[INFO] Attempting to find and check checkbox for provider: ${trimmedProvider}`);
  196 |
  197 |   //     // Directly locate the checkbox related to the provider
  198 |   //     const checkboxLocator = this.page.locator(`//input[@type='checkbox' and contains(@id, '_provider') and @id='${trimmedProvider}']`);
  199 |
  200 |   //     // Check if the checkbox exists and is visible
  201 |   //     if (await checkboxLocator.isVisible()) {
  202 |   //       await checkboxLocator.check(); // Check the checkbox directly
  203 |   //       console.log(`[INFO] Checkbox checked for: ${trimmedProvider}`);
  204 |   //     } else {
  205 |   //       console.warn(`[WARN] Checkbox not found for provider: "${trimmedProvider}"`);
  206 |   //       missingLabels.push(trimmedProvider);
  207 |   //     }
  208 |   //   }
  209 |
  210 |   //   return missingLabels; // Return missing labels in case any checkbox was not found
  211 |   // }
  212 |
  213 |   // // Method to apply the filters after selecting checkboxes
  214 |   // async applyFilters() {
  215 |   //   await this.applyFiltersButton.click();
  216 |   //   console.log("[INFO] Filters applied.");
  217 |   // }
  218 |
  219 |
  220 |   // open the filter panel for payee and provider
  221 |
  222 |   // async openFilterPanel() {
  223 |   //   await this.filterResultsButton.click();
```