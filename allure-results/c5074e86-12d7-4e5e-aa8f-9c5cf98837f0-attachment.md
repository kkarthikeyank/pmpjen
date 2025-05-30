# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: locator.click: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('//button[@id=\'dropdownDateFilterButton\']')

    at ClaimsPage.filterByDateRange (/home/karthi/pmp/src/pages/ClaimsPage.js:86:33)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:121:18
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
   85 |    async filterByDateRange(dateRange) {
>  86 |     await this.dateFilterButton.click();
      |                                 ^ Error: locator.click: Test timeout of 70000ms exceeded.
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
  138 |     await this.filterResultsButton.waitFor({ state: 'visible' });
  139 |     await this.page.waitForTimeout(1000); // Optional small buffer
  140 |     await this.filterResultsButton.click();
  141 |
  142 |     
  143 |   }
  144 |
  145 |   async printResults() {
  146 |     const providerCount = await this.providerResults.count();
  147 |     if (providerCount === 0) {
  148 |       console.log('[INFO] No providers found');
  149 |     } else {
  150 |       for (let i = 0; i < providerCount; i++) {
  151 |         const name = await this.providerResults.nth(i).innerText();
  152 |         console.log(`[PROVIDER ${i + 1}]: ${name}`);
  153 |       }
  154 |     }
  155 |
  156 |     const payeeCount = await this.payeeResults.count();
  157 |     if (payeeCount === 0) {
  158 |       console.log('[INFO] No payees found');
  159 |     } else {
  160 |       for (let i = 0; i < payeeCount; i++) {
  161 |         const name = await this.payeeResults.nth(i).innerText();
  162 |         console.log(`[PAYEE ${i + 1}]: ${name}`);
  163 |       }
  164 |     }
  165 |   }
  166 |
  167 |  async uncheckFilters(filters) {
  168 |     const tryUncheck = async (label, name) => {
  169 |       const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${name}")]/preceding-sibling::div//input[@type='checkbox']`;
  170 |       const checkboxLocator = this.page.locator(`xpath=${checkboxXPath}`);
  171 |
  172 |       const isVisible = await checkboxLocator.isVisible().catch(() => false);
  173 |       if (!isVisible) {
  174 |         console.warn(`[WARN] ${label} not found: ${name}`);
  175 |         return;
  176 |       }
  177 |
  178 |       const isChecked = await checkboxLocator.isChecked();
  179 |       if (isChecked) {
  180 |         await checkboxLocator.uncheck();
  181 |         console.log(`[INFO] Unchecked ${label}: ${name}`);
  182 |       } else {
  183 |         console.log(`[DEBUG] ${label} not checked: ${name}`);
  184 |       }
  185 |     };
  186 |
```