# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//span[normalize-space()=\'Filter Results\']')
    - locator resolved to <span _ngcontent-dbg-c277="">Filter Results</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-dbg-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div _ngcontent-dbg-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 100ms
    19 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div _ngcontent-dbg-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms

    at ClaimsPage.filterByDateRange (/home/karthi/pmp/src/pages/ClaimsPage.js:119:38)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:121:5
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
- button "02-26-2025 - 05-26-2025"
- button "Apply"
- button "Clear"
- text: "Date range: from 02-26-2025 to 05-26-2025"
- button "Download Summary by Filter" [disabled]
- button "Filter Results"
- text: "Filters: Show"
- combobox "select number of results" [disabled]:
  - option "5"
  - option "10" [selected]
  - option "25"
  - option "50"
  - option "100"
- text: entries No matching results were found.
```

# Test source

```ts
   19 |     // this.openSummaryPrintTopBtn = page.locator('#openSummaryPrintTopBtn');
   20 |     // this.printPreviewContainer = page.locator('#printPreviewContent'); // Update this to your actual selector
   21 |
   22 |
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
   85 |
   86 | //     async filterByDateRange(dateRange) {
   87 | //   await this.dateFilterButton.click();
   88 | //   await this.page.getByText(dateRange).click();
   89 | //   await this.doneButton.click();
   90 | //   await this.filterResultsButton.waitFor({ state: 'visible', timeout: 30000 });
   91 | //   await this.filterResultsButton.click();
   92 |
   93 | //   console.log(`[INFO] Filter applied: ${dateRange}`);
   94 |
   95 | //   // const isFilterButtonVisible = await this.filterResultsButton.isVisible();
   96 | //   // if (isFilterButtonVisible) {
   97 | //   //   await this.filterResultsButton.click();
   98 | //   //   console.log(`[INFO] FilterResultsButton clicked for: ${dateRange}`);
   99 | //   //   return true;
  100 | //   // } else {
  101 | //   //   console.warn('[WARN] FilterResultsButton not visible, skipping click');
  102 | //   //   return false;
  103 | //   // }
  104 | // }
  105 | //    async hasResults() {
  106 | //   const providerCount = await this.providerResults.count();
  107 | //   const payeeCount = await this.payeeResults.count();
  108 |
  109 | //   return providerCount > 0 || payeeCount > 0;
  110 | // }
  111 |
  112 | async filterByDateRange(dateRange) {
  113 |     await this.dateFilterButton.click();
  114 |     await this.page.getByText(dateRange).click();
  115 |     await this.doneButton.click();
  116 |
  117 |     await this.page.waitForTimeout(1000); // wait for results to render
  118 |     if (await this.filterResultsButton.isVisible()) {
> 119 |       await this.filterResultsButton.click();
      |                                      ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  120 |       console.log(`[INFO] Filter results button clicked after date range: ${dateRange}`);
  121 |     } else {
  122 |       console.log(`[WARN] Filter results button not visible after selecting date range: ${dateRange}`);
  123 |     }
  124 |   }
  125 |
  126 |   async _checkCheckboxByLabel(labelText) {
  127 |     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${labelText}")]/preceding-sibling::div//input[@type='checkbox']`;
  128 |     try {
  129 |       const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`, { timeout: 5000 });
  130 |       const isChecked = await checkbox.isChecked();
  131 |       if (!isChecked) {
  132 |         await checkbox.check();
  133 |         console.log(`[INFO] Checked: ${labelText}`);
  134 |       } else {
  135 |         console.log(`[INFO] Already checked: ${labelText}`);
  136 |       }
  137 |       return true;
  138 |     } catch {
  139 |       console.log(`[WARN] Not found: ${labelText}`);
  140 |       return false;
  141 |     }
  142 |   }
  143 |
  144 |   async applyFilters(filters) {
  145 |     let anyApplied = false;
  146 |
  147 |     for (const group of ['providers', 'payees', 'diagnoses']) {
  148 |       if (filters[group]?.length > 0) {
  149 |         for (const item of filters[group]) {
  150 |           const result = await this._checkCheckboxByLabel(item);
  151 |           if (result) anyApplied = true;
  152 |         }
  153 |       }
  154 |     }
  155 |
  156 |     if (anyApplied) {
  157 |       await this.applyFiltersButton.click();
  158 |       await this.page.waitForTimeout(1000); // wait for results to render
  159 |       console.log('[INFO] Filters applied');
  160 |     } else {
  161 |       console.log('[WARN] No filters selected — skipping apply');
  162 |     }
  163 |
  164 |     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  165 |     console.log('[INFO] Page scrolled to bottom');
  166 |
  167 |     if (await this.filterResultsButton.isVisible()) {
  168 |       await this.filterResultsButton.click();
  169 |       console.log('[INFO] Filter results button clicked after applying filters');
  170 |     } else {
  171 |       console.log('[WARN] Filter results button not visible after applying filters');
  172 |     }
  173 |   }
  174 |
  175 |   async printResults() {
  176 |     const providerCount = await this.providerResults.count();
  177 |     if (providerCount === 0) {
  178 |       console.log('[INFO] No providers found');
  179 |     } else {
  180 |       for (let i = 0; i < providerCount; i++) {
  181 |         const name = await this.providerResults.nth(i).innerText();
  182 |         console.log(`[PROVIDER ${i + 1}]: ${name}`);
  183 |       }
  184 |     }
  185 |
  186 |     const payeeCount = await this.payeeResults.count();
  187 |     if (payeeCount === 0) {
  188 |       console.log('[INFO] No payees found');
  189 |     } else {
  190 |       for (let i = 0; i < payeeCount; i++) {
  191 |         const name = await this.payeeResults.nth(i).innerText();
  192 |         console.log(`[PAYEE ${i + 1}]: ${name}`);
  193 |       }
  194 |     }
  195 |   }
  196 |
  197 |   async uncheckFilters(filters) {
  198 |     const tryUncheck = async (label, name) => {
  199 |       const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${name}")]/preceding-sibling::div//input[@type='checkbox']`;
  200 |       const checkboxLocator = this.page.locator(`xpath=${checkboxXPath}`);
  201 |
  202 |       const isVisible = await checkboxLocator.isVisible().catch(() => false);
  203 |       if (!isVisible) {
  204 |         console.warn(`[WARN] ${label} not found: ${name}`);
  205 |         return;
  206 |       }
  207 |
  208 |       const isChecked = await checkboxLocator.isChecked();
  209 |       if (isChecked) {
  210 |         await checkboxLocator.uncheck();
  211 |         console.log(`[INFO] Unchecked ${label}: ${name}`);
  212 |       } else {
  213 |         console.log(`[DEBUG] ${label} not checked: ${name}`);
  214 |       }
  215 |     };
  216 |
  217 |     for (const name of filters.providers || []) {
  218 |       await tryUncheck('provider', name);
  219 |     }
```