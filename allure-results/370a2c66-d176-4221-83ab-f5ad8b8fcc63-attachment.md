# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByText('Last 60 Months')
    - locator resolved to <label _ngcontent-vjl-c277="" for="LAST_60_MONTHSradio"> Last 60 Months </label>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <modal-container role="dialog" tabindex="-1" aria-modal="true" class="modal fade">…</modal-container> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <modal-container role="dialog" tabindex="-1" aria-modal="true" class="modal fade">…</modal-container> intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is not stable
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <p tabindex="0" _ngcontent-vjl-c98="" aria-label="No Response" class="new-line-paragraph modal-extra-string-parameter"> No Response </p> from <modal-container role="dialog" tabindex="-1" aria-modal="true" class="modal fade show">…</modal-container> subtree intercepts pointer events
  17 × retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is not visible
  - retrying click action
    - waiting 500ms

    at ClaimsPage.filterByDateRange (/home/karthi/pmp/src/pages/ClaimsPage.js:88:42)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:141:3
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
- button "03-10-2024 - 03-11-2025"
- button "Apply"
- button "Clear"
- text: "Date range: from 03-10-2024 to 03-11-2025"
- button "Download Summary by Filter"
- button "Filter Results"
- text: "Filters: Show"
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
   83 |
   84 |   //  scenario filter result provider and payee , diagnosis check and uncheck 
   85 |
   86 |    async filterByDateRange(dateRange) {
   87 |     await this.dateFilterButton.click();
>  88 |     await this.page.getByText(dateRange).click();
      |                                          ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
   89 |     await this.doneButton.click();
   90 |        await this.filterResultsButton.click();
   91 |
   92 |     console.log(`[INFO] Filter applied: ${dateRange}`);
   93 |   }
   94 |
   95 |   async _checkCheckboxByLabel(labelText) {
   96 |     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${labelText}")]/preceding-sibling::div//input[@type='checkbox']`;
   97 |     try {
   98 |       const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`, { timeout: 5000 });
   99 |       const isChecked = await checkbox.isChecked();
  100 |       if (!isChecked) {
  101 |         await checkbox.check();
  102 |         console.log(`[INFO] Checked: ${labelText}`);
  103 |       } else {
  104 |         console.log(`[INFO] Already checked: ${labelText}`);
  105 |       }
  106 |       return true;
  107 |     } catch {
  108 |       console.log(`[WARN] Not found: ${labelText}`);
  109 |       return false;
  110 |     }
  111 |   }
  112 |
  113 |   async applyFilters(filters) {
  114 |     let anyApplied = false;
  115 |
  116 |     for (const group of ['providers', 'payees', 'diagnoses']) {
  117 |       if (filters[group]?.length > 0) {
  118 |         for (const item of filters[group]) {
  119 |           const result = await this._checkCheckboxByLabel(item);
  120 |           if (result) anyApplied = true;
  121 |         }
  122 |       }
  123 |     }
  124 |
  125 |     if (anyApplied) {
  126 |       await this.applyFiltersButton.click();
  127 |       await this.page.waitForTimeout(1000); // wait for results to render
  128 |       console.log('[INFO] Filters applied');
  129 |     } else {
  130 |       console.log('[WARN] No filters selected — skipping apply');
  131 |     }
  132 |
  133 |     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  134 |     console.log('[INFO] Page scrolled to bottom');
  135 |
  136 |     await this.filterResultsButton.click();
  137 |     console.log('[INFO] Filter Results clicked again');
  138 |   }
  139 |
  140 |   async printResults() {
  141 |     const providerCount = await this.providerResults.count();
  142 |     if (providerCount === 0) {
  143 |       console.log('[INFO] No providers found');
  144 |     } else {
  145 |       for (let i = 0; i < providerCount; i++) {
  146 |         const name = await this.providerResults.nth(i).innerText();
  147 |         console.log(`[PROVIDER ${i + 1}]: ${name}`);
  148 |       }
  149 |     }
  150 |
  151 |     const payeeCount = await this.payeeResults.count();
  152 |     if (payeeCount === 0) {
  153 |       console.log('[INFO] No payees found');
  154 |     } else {
  155 |       for (let i = 0; i < payeeCount; i++) {
  156 |         const name = await this.payeeResults.nth(i).innerText();
  157 |         console.log(`[PAYEE ${i + 1}]: ${name}`);
  158 |       }
  159 |     }
  160 |   }
  161 |
  162 |  async uncheckFilters(filters) {
  163 |     const tryUncheck = async (label, name) => {
  164 |       const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${name}")]/preceding-sibling::div//input[@type='checkbox']`;
  165 |       const checkboxLocator = this.page.locator(`xpath=${checkboxXPath}`);
  166 |
  167 |       const isVisible = await checkboxLocator.isVisible().catch(() => false);
  168 |       if (!isVisible) {
  169 |         console.warn(`[WARN] ${label} not found: ${name}`);
  170 |         return;
  171 |       }
  172 |
  173 |       const isChecked = await checkboxLocator.isChecked();
  174 |       if (isChecked) {
  175 |         await checkboxLocator.uncheck();
  176 |         console.log(`[INFO] Unchecked ${label}: ${name}`);
  177 |       } else {
  178 |         console.log(`[DEBUG] ${label} not checked: ${name}`);
  179 |       }
  180 |     };
  181 |
  182 |     for (const name of filters.providers || []) {
  183 |       await tryUncheck('provider', name);
  184 |     }
  185 |
  186 |     for (const name of filters.payees || []) {
  187 |       await tryUncheck('payee', name);
  188 |     }
```