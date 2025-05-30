# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//span[normalize-space()=\'Filter Results\']')
    - locator resolved to <span _ngcontent-ddj-c277="">Filter Results</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-ddj-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div _ngcontent-ddj-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is not stable
  18 × retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div _ngcontent-ddj-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
  - retrying click action
    - waiting 500ms

    at ClaimsPage.filterByDateRange (/home/karthi/pmp/src/pages/ClaimsPage.js:89:34)
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
  - heading "Claims for" [level=1]
  - button "Anna Queensister"
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
   1 | import { expect } from '@playwright/test';
   2 |
   3 | // pages/ClaimsPage.js
   4 |
   5 |
   6 | export class ClaimsPage {
   7 |   constructor(page) {
   8 |
   9 |     this.page = page;
   10 |     this.claimsTab = this.page.locator('#navLink-CLAIMS');
   11 |
   12 |     let id = 'dropdownDateFilterButton';
   13 |     this.dateFilterButton = page.locator(`//button[@id='${id}']`);
   14 |     this.claimNumberLocator = page.locator("//p[@data-id='claimsCardClaimNumber']");
   15 |
   16 |     // this.dateFilterButton = page.locator("//button[@id='dropdownDateFilterButton']"); //div[contains(text(),'Claims')]
   17 |     // const dateFilterButton = page.locator('#dropdownDateFilterButton');
   18 |     // this . dateFilterButton = page.locator("//button[@id='dropdownDateFilterButton']"); 
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
   84 |    async filterByDateRange(dateRange) {
   85 |   await this.dateFilterButton.click();
   86 |   await this.page.getByText(dateRange).click();
   87 |   await this.doneButton.click();
   88 |   await this.filterResultsButton.waitFor({ state: 'visible', timeout: 30000 });
>  89 |   await this.filterResultsButton.click();
      |                                  ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
   90 |
   91 |   console.log(`[INFO] Filter applied: ${dateRange}`);
   92 |
   93 |   // Wait for any results or "No claims found" message
   94 |   try {
   95 |     await Promise.race([
   96 |       this.providerResults.first().waitFor({ timeout: 5000 }),
   97 |       this.payeeResults.first().waitFor({ timeout: 5000 }),
   98 |       this.page.getByText('No claims found').waitFor({ timeout: 5000 }) // Adjust this text based on UI
   99 |     ]);
  100 |     console.log('[INFO] Results or empty message detected after filtering');
  101 |   } catch {
  102 |     console.warn('[WARN] No results or empty state detected within timeout');
  103 |   }
  104 | }
  105 |
  106 |   //  async filterByDateRange(dateRange) {
  107 |   //   await this.dateFilterButton.click();
  108 |   //   await this.page.getByText(dateRange).click();
  109 |   //   await this.doneButton.click();
  110 |   //   await this.filterResultsButton.waitFor({ state: 'visible', timeout: 30000 });
  111 |   //   await this.filterResultsButton.click();
  112 |
  113 |   //   //  await this.filterResultsButton.click();
  114 |
  115 |   //   console.log(`[INFO] Filter applied: ${dateRange}`);
  116 |   // }
  117 |
  118 |   async _checkCheckboxByLabel(labelText) {
  119 |     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${labelText}")]/preceding-sibling::div//input[@type='checkbox']`;
  120 |     try {
  121 |       const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`, { timeout: 5000 });
  122 |       const isChecked = await checkbox.isChecked();
  123 |       if (!isChecked) {
  124 |         await checkbox.check();
  125 |         console.log(`[INFO] Checked: ${labelText}`);
  126 |       } else {
  127 |         console.log(`[INFO] Already checked: ${labelText}`);
  128 |       }
  129 |       return true;
  130 |     } catch {
  131 |       console.log(`[WARN] Not found: ${labelText}`);
  132 |       return false;
  133 |     }
  134 |   }
  135 |
  136 |   async applyFilters(filters) {
  137 |     let anyApplied = false;
  138 |
  139 |     for (const group of ['providers', 'payees', 'diagnoses']) {
  140 |       if (filters[group]?.length > 0) {
  141 |         for (const item of filters[group]) {
  142 |           const result = await this._checkCheckboxByLabel(item);
  143 |           if (result) anyApplied = true;
  144 |         }
  145 |       }
  146 |     }
  147 |
  148 |     if (anyApplied) {
  149 |       await this.applyFiltersButton.click();
  150 |       await this.page.waitForTimeout(1000); // wait for results to render
  151 |       console.log('[INFO] Filters applied');
  152 |     } else {
  153 |       console.log('[WARN] No filters selected — skipping apply');
  154 |     }
  155 |
  156 |     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  157 |     console.log('[INFO] Page scrolled to bottom');
  158 |
  159 |     await this.filterResultsButton.waitFor({ state: 'visible' });
  160 |     await this.page.waitForTimeout(1000); // Optional small buffer
  161 |     await this.filterResultsButton.click();
  162 |
  163 |     
  164 |   }
  165 |
  166 |   async printResults() {
  167 |     const providerCount = await this.providerResults.count();
  168 |     if (providerCount === 0) {
  169 |       console.log('[INFO] No providers found');
  170 |     } else {
  171 |       for (let i = 0; i < providerCount; i++) {
  172 |         const name = await this.providerResults.nth(i).innerText();
  173 |         console.log(`[PROVIDER ${i + 1}]: ${name}`);
  174 |       }
  175 |     }
  176 |
  177 |     const payeeCount = await this.payeeResults.count();
  178 |     if (payeeCount === 0) {
  179 |       console.log('[INFO] No payees found');
  180 |     } else {
  181 |       for (let i = 0; i < payeeCount; i++) {
  182 |         const name = await this.payeeResults.nth(i).innerText();
  183 |         console.log(`[PAYEE ${i + 1}]: ${name}`);
  184 |       }
  185 |     }
  186 |   }
  187 |
  188 |  async uncheckFilters(filters) {
  189 |     const tryUncheck = async (label, name) => {
```