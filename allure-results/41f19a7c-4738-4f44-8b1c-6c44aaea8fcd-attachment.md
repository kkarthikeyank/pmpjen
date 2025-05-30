# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: locator.click: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('//span[normalize-space()=\'Filter Results\']')
    - locator resolved to <span _ngcontent-dwy-c277="">Filter Results</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms

    at ClaimsPage.applyFilters (/home/karthi/pmp/src/pages/ClaimsPage.js:138:36)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:122:5
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
  - heading "Claims for" [level=1]
  - button "Julia Donaldson"
- text: HPP can only present information for medical claims. please contact us. To view your Deductible and Out-of-Pocket Amounts Applied Year To Date,
- link "click here to navigate to Year To Date Deductibles page":
  - /url: "#/claims/ytd"
  - text: click here.
- text: Claim Number
- textbox "Claim Number"
- paragraph: Filter by date of service range
- button "05-22-2020 - 05-22-2025"
- button "Apply"
- button "Clear"
- text: "Date range: from 05-22-2020 to 05-22-2025"
- button "Download Summary by Filter"
- button "Filter Results"
- text: "Filters:"
- button "Nicole Koepke"
- button "Integra Partners Llc"
- text: Show
- combobox "select number of results":
  - option "5"
  - option "10" [selected]
  - option "25"
  - option "50"
  - option "100"
- text: entries
- paragraph: Claim Number
- paragraph: "144111"
- paragraph: Date of Service
- paragraph: From 04-01-2024 to 04-02-2024
- paragraph: Processed Date
- paragraph: "----"
- paragraph: Provider
- paragraph: nicole koepke
- paragraph: Payee
- paragraph: integra partners llc
- button "View Details"
- paragraph: "Total billed:"
- paragraph: $1,967.05
- paragraph: "Plan paid:"
- paragraph: $195.79
- separator
- paragraph: "Patient Liability:"
- paragraph: $48.95
- paragraph: Claim Number
- paragraph: "144114"
- paragraph: Date of Service
- paragraph: From 01-01-2024 to 01-03-2024
- paragraph: Processed Date
- paragraph: "----"
- paragraph: Provider
- paragraph: nicole koepke
- paragraph: Payee
- paragraph: integra partners llc
- button "View Details"
- paragraph: "Total billed:"
- paragraph: $1,967.05
- paragraph: "Plan paid:"
- paragraph: $195.79
- separator
- paragraph: "Patient Liability:"
- paragraph: $48.95
- paragraph: Claim Number
- paragraph: "144115"
- paragraph: Date of Service
- paragraph: From 01-06-2024 to 01-10-2024
- paragraph: Processed Date
- paragraph: "----"
- paragraph: Provider
- paragraph: nicole koepke
- paragraph: Payee
- paragraph: integra partners llc
- button "View Details"
- paragraph: "Total billed:"
- paragraph: $1,967.05
- paragraph: "Plan paid:"
- paragraph: $195.79
- separator
- paragraph: "Patient Liability:"
- paragraph: $48.95
- paragraph: Claim Number
- paragraph: "144000"
- paragraph: Date of Service
- paragraph: From 04-01-2024 to 01-02-2025
- paragraph: Processed Date
- paragraph: "----"
- paragraph: Provider
- paragraph: nicole koepke
- paragraph: Payee
- paragraph: integra partners llc
- button "View Details"
- paragraph: "Total billed:"
- paragraph: $1,967.05
- paragraph: "Plan paid:"
- paragraph: $195.79
- separator
- paragraph: "Patient Liability:"
- paragraph: $48.95
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
```

# Test source

```ts
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
   65 |       this.providerResults = page.locator("//p[@data-id='claimsCardPhysicianText']");
   66 |     this.payeeResults = page.locator("//p[@data-id='claimsCardLabVendorText']");
   67 |
   68 |   }
   69 |
   70 |
   71 |
   72 |   // open claims tab
   73 |   async openClaimsTab() {
   74 |     // Ensure the Claims tab is visible before clicking
   75 |     await this.claimsTab.waitFor({ state: 'visible', timeout: 20000 });
   76 |     await this.claimsTab.click();
   77 |
   78 |     // Optionally, wait for the page to load after clicking the Claims tab (if it redirects)
   79 |     await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });
   80 |   }
   81 |
   82 |
   83 |   //  scenario filter result provider and payee , diagnosis check and uncheck 
   84 |
   85 |    async filterByDateRange(dateRange) {
   86 |     await this.dateFilterButton.click();
   87 |     await this.page.getByText(dateRange).click();
   88 |     await this.doneButton.click();
   89 |     await this.filterResultsButton.waitFor({ state: 'visible', timeout: 30000 });
   90 |     await this.filterResultsButton.click();
   91 |
   92 |     //  await this.filterResultsButton.click();
   93 |
   94 |     console.log(`[INFO] Filter applied: ${dateRange}`);
   95 |   }
   96 |
   97 |   async _checkCheckboxByLabel(labelText) {
   98 |     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${labelText}")]/preceding-sibling::div//input[@type='checkbox']`;
   99 |     try {
  100 |       const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`, { timeout: 5000 });
  101 |       const isChecked = await checkbox.isChecked();
  102 |       if (!isChecked) {
  103 |         await checkbox.check();
  104 |         console.log(`[INFO] Checked: ${labelText}`);
  105 |       } else {
  106 |         console.log(`[INFO] Already checked: ${labelText}`);
  107 |       }
  108 |       return true;
  109 |     } catch {
  110 |       console.log(`[WARN] Not found: ${labelText}`);
  111 |       return false;
  112 |     }
  113 |   }
  114 |
  115 |   async applyFilters(filters) {
  116 |     let anyApplied = false;
  117 |
  118 |     for (const group of ['providers', 'payees', 'diagnoses']) {
  119 |       if (filters[group]?.length > 0) {
  120 |         for (const item of filters[group]) {
  121 |           const result = await this._checkCheckboxByLabel(item);
  122 |           if (result) anyApplied = true;
  123 |         }
  124 |       }
  125 |     }
  126 |
  127 |     if (anyApplied) {
  128 |       await this.applyFiltersButton.click();
  129 |       await this.page.waitForTimeout(1000); // wait for results to render
  130 |       console.log('[INFO] Filters applied');
  131 |     } else {
  132 |       console.log('[WARN] No filters selected — skipping apply');
  133 |     }
  134 |
  135 |     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  136 |     console.log('[INFO] Page scrolled to bottom');
  137 |
> 138 |     await this.filterResultsButton.click();
      |                                    ^ Error: locator.click: Test timeout of 70000ms exceeded.
  139 |     console.log('[INFO] Filter Results clicked again');
  140 |   }
  141 |
  142 |   async printResults() {
  143 |     const providerCount = await this.providerResults.count();
  144 |     if (providerCount === 0) {
  145 |       console.log('[INFO] No providers found');
  146 |     } else {
  147 |       for (let i = 0; i < providerCount; i++) {
  148 |         const name = await this.providerResults.nth(i).innerText();
  149 |         console.log(`[PROVIDER ${i + 1}]: ${name}`);
  150 |       }
  151 |     }
  152 |
  153 |     const payeeCount = await this.payeeResults.count();
  154 |     if (payeeCount === 0) {
  155 |       console.log('[INFO] No payees found');
  156 |     } else {
  157 |       for (let i = 0; i < payeeCount; i++) {
  158 |         const name = await this.payeeResults.nth(i).innerText();
  159 |         console.log(`[PAYEE ${i + 1}]: ${name}`);
  160 |       }
  161 |     }
  162 |   }
  163 |
  164 |  async uncheckFilters(filters) {
  165 |     const tryUncheck = async (label, name) => {
  166 |       const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${name}")]/preceding-sibling::div//input[@type='checkbox']`;
  167 |       const checkboxLocator = this.page.locator(`xpath=${checkboxXPath}`);
  168 |
  169 |       const isVisible = await checkboxLocator.isVisible().catch(() => false);
  170 |       if (!isVisible) {
  171 |         console.warn(`[WARN] ${label} not found: ${name}`);
  172 |         return;
  173 |       }
  174 |
  175 |       const isChecked = await checkboxLocator.isChecked();
  176 |       if (isChecked) {
  177 |         await checkboxLocator.uncheck();
  178 |         console.log(`[INFO] Unchecked ${label}: ${name}`);
  179 |       } else {
  180 |         console.log(`[DEBUG] ${label} not checked: ${name}`);
  181 |       }
  182 |     };
  183 |
  184 |     for (const name of filters.providers || []) {
  185 |       await tryUncheck('provider', name);
  186 |     }
  187 |
  188 |     for (const name of filters.payees || []) {
  189 |       await tryUncheck('payee', name);
  190 |     }
  191 |
  192 |     for (const name of filters.diagnoses || []) {
  193 |       await tryUncheck('diagnosis', name);
  194 |     }
  195 |
  196 |     await this.applyFiltersButton.click();
  197 |     console.log('[INFO] Unchecked filters applied');
  198 |     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  199 |     console.log('[INFO] Page scrolled to bottom');
  200 |   }
  201 |
  202 |
  203 |
  204 |
  205 |
  206 |   //  scenario Filter by date range and print claims
  207 |
  208 |   async filterAndPrintClaimsByLabel(label) {
  209 |     const dateFilters = {
  210 |       '3 Months': 'LAST_3_MONTHSradio',
  211 |       '6 Months': 'LAST_6_MONTHSradio',
  212 |       '60 Months': 'LAST_60_MONTHSradio',
  213 |     };
  214 |
  215 |     const filterId = dateFilters[label];
  216 |     if (!filterId) {
  217 |       console.log(`Invalid filter label: ${label}`);
  218 |       return;
  219 |     }
  220 |
  221 |     console.log(`Filtering by: ${label}`);
  222 |     await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  223 |
  224 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
  225 |     await this.dateFilterButton.click();
  226 |
  227 |     const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  228 |     await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  229 |     await radioLocator.check();
  230 |
  231 |     await this.doneButton.click();
  232 |
  233 |     await this.page.waitForTimeout(3000); // Replace with smarter wait if needed
  234 |
  235 |     const claims = await this.claimNumberLocator.all();
  236 |     if (claims.length === 0) {
  237 |       console.log("No claims found");
  238 |     } else {
```