# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//span[normalize-space()=\'Filter Results\']')
    - locator resolved to <span _ngcontent-nhi-c277="">Filter Results</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 100ms
    19 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div _ngcontent-nhi-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms

    at ClaimsPage.clickFilterResultsIfEnabled (/home/karthi/pmp/src/pages/ClaimsPage.js:99:27)
    at ClaimsPage.applyFilters (/home/karthi/pmp/src/pages/ClaimsPage.js:180:24)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:123:5
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
   27 |         this .filterresultButtondisabled = page.locator('button:has-text("Filter Results"):disabled');
   28 |
   29 |     this.applyFiltersButton = page.locator("//button[@id='applyFilterClaims']"); // Button to apply filters
   30 |     this.clearFiltersButton = page.locator("#claimsClearFilter");
   31 |     this.applyClearButton = page.getByLabel('Filter Results').getByText('Apply Clear');
   32 |     this.closeButton = page.getByRole('button', { name: 'Close' });
   33 |     this.selectedpayee = page.locator("//div[normalize-space()='Integra Partners Llc']");
   34 |     this.selectedprovider = page.locator("//div[normalize-space()='Nicole Koepke']");
   35 |     this.monthsdateverify = page.locator("//div[@class='flex-fill']");
   36 |
   37 |     //button[@id='applyFilterClaims']
   38 |     this.doneButton = page.getByRole('button', { name: 'Done' });
   39 |
   40 |     this.viewDetailsButton = page.locator("//button[@tabindex='0' and text()=' View Details ']"); // Button to open claim details
   41 |     this.totalclaimbill = page.locator("total_claim_charge_billedtext");
   42 |     this.returnButton = page.getByText('Return to previous page');
   43 |     this.claimNumberInput = page.getByRole('textbox', { name: 'Claim Number' });
   44 |     this.applyButton = page.getByRole('button', { name: 'Apply' });
   45 |     this.clearButton = page.getByRole('button', { name: 'Clear' });
   46 |     this.noClaimsMessage = page.locator('#noInformation');
   47 |
   48 |
   49 |     this.dateFilterButton1 = page.locator("//button[@id='dropdownDateFilterButton']");
   50 |
   51 |     //   this.customRadio = page.getByRole('radio', { name: 'Custom' });
   52 |     //   this.fromDate =  page.locator(`//div[contains(text(),'11')]`);
   53 |
   54 |     //   this.toDateButton = page.locator(`//div[contains(text(),'29')]`);  
   55 |     //   this.noResultsText = page.getByText('No matching results were');
   56 |
   57 |
   58 |     //
   59 |     // Adding new locators for custom date filter
   60 |
   61 |     this.customRadio = page.getByRole('radio', { name: 'Custom' });
   62 |     this.fromDateInput = page.locator('#dpFromDateInput'); // Custom From Date Input
   63 |     this.toDateInput = page.locator('#dpToDateInput'); // Custom To Date Input
   64 |     this.noResultsText = page.getByText('No matching results were');
   65 |     //  this.doneButton = this.page.getByRole('button', { name: 'Done' });
   66 |     this.noResultsText = page.getByText('No matching results were');
   67 |     this.providerBlocks = page.locator('form-check-input me-2'); // All provider blocks
   68 |       this.providerResults = page.locator("//p[@data-id='claimsCardPhysicianText']");
   69 |     this.payeeResults = page.locator("//p[@data-id='claimsCardLabVendorText']");
   70 |
   71 |
   72 |   }
   73 |
   74 |
   75 |
   76 |   // open claims tab
   77 |   async openClaimsTab() {
   78 |     // Ensure the Claims tab is visible before clicking
   79 |     await this.claimsTab.waitFor({ state: 'visible', timeout: 20000 });
   80 |     await this.claimsTab.click();
   81 |
   82 |     // Optionally, wait for the page to load after clicking the Claims tab (if it redirects)
   83 |     await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });
   84 |   }
   85 |
   86 |
   87 |   //  scenario filter result provider and payee , diagnosis check and uncheck 
   88 |
   89 |
   90 |
   91 |   async clickFilterResultsIfEnabled() {
   92 |     const buttonLocator = this.filterResultsButton;
   93 |
   94 |     const isVisible = await buttonLocator.isVisible().catch(() => false);
   95 |     const isEnabled = await buttonLocator.isEnabled().catch(() => false);
   96 |
   97 |     if (isVisible && isEnabled) {
   98 |       console.log("✅ 'Filter Results' button is enabled. Clicking...");
>  99 |       await buttonLocator.click();
      |                           ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  100 |       return true;
  101 |     }
  102 |
  103 |     const isDisabledVisible = await this.filterresultButtondisabled.isVisible().catch(() => false);
  104 |
  105 |     if (isDisabledVisible) {
  106 |       console.log("❌ 'Filter Results' button is disabled. Skipping click.");
  107 |     } else {
  108 |       console.log("⚠️ 'Filter Results' button not found at all. Skipping click.");
  109 |     }
  110 |
  111 |     return false;
  112 |   }
  113 | async filterByDateRange(dateRange) {
  114 |     await this.dateFilterButton.click();
  115 |     await this.page.getByText(dateRange).click();
  116 |     await this.doneButton.click();
  117 |
  118 |     const isFilterResultsEnabled = await this.filterResultsButton.isVisible().catch(() => false) &&
  119 |                                    await this.filterResultsButton.isEnabled().catch(() => false);
  120 |
  121 |     if (isFilterResultsEnabled) {
  122 |       console.log("✅ 'Filter Results' button is enabled. Clicking...");
  123 |       await this.filterResultsButton.click();
  124 |       console.log(`[INFO] Filter applied: ${dateRange}`);
  125 |       return true;
  126 |     }
  127 |
  128 |     const isFilterResultsDisabled = await this.filterresultButtondisabled.isVisible().catch(() => false);
  129 |
  130 |     if (isFilterResultsDisabled) {
  131 |       console.log("❌ 'Filter Results' button is disabled. Skipping click.");
  132 |     } else {
  133 |       console.log("⚠️ 'Filter Results' button not found at all. Skipping click.");
  134 |     }
  135 |
  136 |     console.log(`[WARN] Skipping test for dateRange: ${dateRange}`);
  137 |     return false;
  138 |   }
  139 |   async _checkCheckboxByLabel(labelText) {
  140 |     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${labelText}")]/preceding-sibling::div//input[@type='checkbox']`;
  141 |     try {
  142 |       const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`, { timeout: 5000 });
  143 |       const isChecked = await checkbox.isChecked();
  144 |       if (!isChecked) {
  145 |         await checkbox.check();
  146 |         console.log(`[INFO] Checked: ${labelText}`);
  147 |       } else {
  148 |         console.log(`[INFO] Already checked: ${labelText}`);
  149 |       }
  150 |       return true;
  151 |     } catch {
  152 |       console.log(`[WARN] Not found: ${labelText}`);
  153 |       return false;
  154 |     }
  155 |   }
  156 |
  157 |   async applyFilters(filters) {
  158 |     let anyApplied = false;
  159 |
  160 |     for (const group of ['providers', 'payees', 'diagnoses']) {
  161 |       if (filters[group]?.length > 0) {
  162 |         for (const item of filters[group]) {
  163 |           const result = await this._checkCheckboxByLabel(item);
  164 |           if (result) anyApplied = true;
  165 |         }
  166 |       }
  167 |     }
  168 |
  169 |     if (anyApplied) {
  170 |       await this.applyFiltersButton.click();
  171 |       await this.page.waitForTimeout(1000);
  172 |       console.log('[INFO] Filters applied');
  173 |     } else {
  174 |       console.log('[WARN] No filters selected — skipping apply');
  175 |     }
  176 |
  177 |     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  178 |     console.log('[INFO] Page scrolled to bottom');
  179 |
  180 |     const wasClicked = await this.clickFilterResultsIfEnabled();
  181 |     if (!wasClicked) {
  182 |       console.log('[WARN] Filter Results button was disabled after filters');
  183 |     }
  184 |   }
  185 |
  186 |   async printResults() {
  187 |     const providerCount = await this.providerResults.count();
  188 |     if (providerCount === 0) {
  189 |       console.log('[INFO] No providers found');
  190 |     } else {
  191 |       for (let i = 0; i < providerCount; i++) {
  192 |         const name = await this.providerResults.nth(i).innerText();
  193 |         console.log(`[PROVIDER ${i + 1}]: ${name}`);
  194 |       }
  195 |     }
  196 |
  197 |     const payeeCount = await this.payeeResults.count();
  198 |     if (payeeCount === 0) {
  199 |       console.log('[INFO] No payees found');
```