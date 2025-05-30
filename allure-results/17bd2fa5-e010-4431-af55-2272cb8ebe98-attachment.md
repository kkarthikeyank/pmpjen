# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: locator.click: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('//button[@id=\'dropdownDateFilterButton\']')

    at ClaimsPage.filterByDateRange (/home/karthi/pmp/src/pages/ClaimsPage.js:86:33)
    at ClaimsPage.runFilterScenario (/home/karthi/pmp/src/pages/ClaimsPage.js:228:14)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:128:16
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
  - button
- status
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
   84 |
   85 |  async filterByDateRange(dateRange) {
>  86 |     await this.dateFilterButton.click();
      |                                 ^ Error: locator.click: Test timeout of 70000ms exceeded.
   87 |     await this.page.getByText(dateRange).click();
   88 |     await this.doneButton.click();
   89 |     console.log(`[INFO] Date range selected: ${dateRange}`);
   90 |   }
   91 |
   92 |   async canClickFilterResultsButton() {
   93 |     try {
   94 |       await this.filterResultsButton.waitFor({ state: 'attached', timeout: 3000 });
   95 |     } catch {
   96 |       return false;
   97 |     }
   98 |     const isVisible = await this.filterResultsButton.isVisible().catch(() => false);
   99 |     if (!isVisible) return false;
  100 |     const isEnabled = await this.filterResultsButton.isEnabled().catch(() => false);
  101 |     return isEnabled;
  102 |   }
  103 |
  104 |   async _checkCheckboxByLabel(labelText) {
  105 |     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${labelText}")]/preceding-sibling::div//input[@type='checkbox']`;
  106 |     try {
  107 |       const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`, { timeout: 5000 });
  108 |       const isChecked = await checkbox.isChecked();
  109 |       if (!isChecked) {
  110 |         await checkbox.check();
  111 |         console.log(`[INFO] Checked: ${labelText}`);
  112 |       } else {
  113 |         console.log(`[INFO] Already checked: ${labelText}`);
  114 |       }
  115 |       return true;
  116 |     } catch {
  117 |       console.log(`[WARN] Not found: ${labelText}`);
  118 |       return false;
  119 |     }
  120 |   }
  121 |
  122 |   async applyFilters(filters) {
  123 |     let anyApplied = false;
  124 |
  125 |     for (const group of ['providers', 'payees', 'diagnoses']) {
  126 |       if (filters[group]?.length > 0) {
  127 |         for (const item of filters[group]) {
  128 |           const result = await this._checkCheckboxByLabel(item);
  129 |           if (result) anyApplied = true;
  130 |         }
  131 |       }
  132 |     }
  133 |
  134 |     if (anyApplied) {
  135 |       await this.applyFiltersButton.click();
  136 |       await this.page.waitForTimeout(1000);
  137 |       console.log('[INFO] Filters applied');
  138 |     } else {
  139 |       console.log('[WARN] No filters selected — skipping apply');
  140 |     }
  141 |
  142 |     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  143 |     console.log('[INFO] Page scrolled to bottom');
  144 |   }
  145 |
  146 |   async printResults() {
  147 |     const providerCount = await this.providerResults.count();
  148 |     if (providerCount === 0) {
  149 |       console.log('[INFO] No providers found');
  150 |     } else {
  151 |       for (let i = 0; i < providerCount; i++) {
  152 |         const name = await this.providerResults.nth(i).innerText();
  153 |         console.log(`[PROVIDER ${i + 1}]: ${name}`);
  154 |       }
  155 |     }
  156 |
  157 |     const payeeCount = await this.payeeResults.count();
  158 |     if (payeeCount === 0) {
  159 |       console.log('[INFO] No payees found');
  160 |     } else {
  161 |       for (let i = 0; i < payeeCount; i++) {
  162 |         const name = await this.payeeResults.nth(i).innerText();
  163 |         console.log(`[PAYEE ${i + 1}]: ${name}`);
  164 |       }
  165 |     }
  166 |   }
  167 |
  168 |   async uncheckFilters(filters) {
  169 |     const tryUncheck = async (label, name) => {
  170 |       const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${name}")]/preceding-sibling::div//input[@type='checkbox']`;
  171 |       const checkboxLocator = this.page.locator(`xpath=${checkboxXPath}`);
  172 |
  173 |       const isVisible = await checkboxLocator.isVisible().catch(() => false);
  174 |       if (!isVisible) {
  175 |         console.warn(`[WARN] ${label} not found: ${name}`);
  176 |         return;
  177 |       }
  178 |
  179 |       const isChecked = await checkboxLocator.isChecked();
  180 |       if (isChecked) {
  181 |         await checkboxLocator.uncheck();
  182 |         console.log(`[INFO] Unchecked ${label}: ${name}`);
  183 |       } else {
  184 |         console.log(`[DEBUG] ${label} not checked: ${name}`);
  185 |       }
  186 |     };
```