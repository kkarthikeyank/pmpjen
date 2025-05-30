# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: page.waitForSelector: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//div[contains(@class, \'form-check\')]//div[contains(text(), \' the\')]/preceding-sibling::div//input[@type=\'checkbox\']') to be visible

    at ClaimsPage.checkProviderCheckbox (/home/karthi/pmp/src/pages/ClaimsPage.js:93:38)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:99:16
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
- button "05-19-2020 - 05-19-2025"
- button "Apply"
- button "Clear"
- text: "Date range: from 05-19-2020 to 05-19-2025"
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
- dialog "Filter Results":
  - heading "Filter Results" [level=5]
  - button "Close"
  - heading "Provider" [level=2]
  - checkbox "Nicole Koepke_provider"
  - text: Nicole Koepke (4)
  - heading "Payee" [level=2]
  - checkbox "Integra Partners Llc_payee"
  - text: Integra Partners Llc (4)
  - heading "Diagnosis" [level=2]
  - checkbox "Z34.83_diagnoses"
  - text: Z34.83 - Unknown (4)
  - checkbox "Z3A.33_diagnoses"
  - text: Z3A.33 - Unknown (4)
  - button "applyFilters" [disabled]: Apply
  - button "clearFilters": Clear
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
>  93 |     const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`);
      |                                      ^ TimeoutError: page.waitForSelector: Timeout 10000ms exceeded.
   94 |
   95 |     const isChecked = await checkbox.isChecked();
   96 |     if (!isChecked) {
   97 |       await checkbox.check();
   98 |       console.log(`[INFO] Checked checkbox for provider: ${providerName}`);
   99 |     } else {
  100 |       console.log(`[INFO] Checkbox for provider: ${providerName} was already checked`);
  101 |     }
  102 |     await this.applyFiltersButton.click();
  103 |   }
  104 |  
  105 |   
  106 |
  107 |
  108 |
  109 |   //  scenario Filter by date range and print claims
  110 |
  111 |   // async filterAndPrintClaimsByLabel(label) {
  112 |   //   const dateFilters = {
  113 |   //     '3 Months': 'LAST_3_MONTHSradio',
  114 |   //     '6 Months': 'LAST_6_MONTHSradio',
  115 |   //     '60 Months': 'LAST_60_MONTHSradio',
  116 |   //   };
  117 |
  118 |   //   const filterId = dateFilters[label];
  119 |   //   if (!filterId) {
  120 |   //     console.log(`Invalid filter label: ${label}`);
  121 |   //     return;
  122 |   //   }
  123 |
  124 |   //   console.log(`Filtering by: ${label}`);
  125 |   //   await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  126 |
  127 |   //   await this.dateFilterButtons.waitFor({ state: 'visible', timeout: 10000 });
  128 |   //   await this.dateFilterButtons.click();
  129 |
  130 |   //   const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  131 |   //   await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  132 |   //   await radioLocator.check();
  133 |
  134 |   //   await this.doneButton.click();
  135 |
  136 |   //   await this.page.waitForTimeout(3000); // Replace with smarter wait if needed
  137 |
  138 |   //   const claims = await this.claimNumberLocator.all();
  139 |   //   if (claims.length === 0) {
  140 |   //     console.log("No claims found");
  141 |   //   } else {
  142 |   //     console.log(`Claims found for ${label}:`);
  143 |   //     for (const claim of claims) {
  144 |   //       const text = await claim.textContent();
  145 |   //       console.log(`Claim Number: ${text?.trim()}`);
  146 |   //     }
  147 |   //   }
  148 |
  149 |
  150 |   // }  senario
  151 |
  152 |   // // Method to open filter panel
  153 |   // async openFilterPanel() {
  154 |   //   await this.filterResultsButton.click();
  155 |   //   console.log("[INFO] Filter panel opened.");
  156 |   // }
  157 |
  158 |   // // Method to apply provider checkboxes based on given JSON providers list
  159 |   // async applyProviderFilters(providerList) {
  160 |   //   let missingLabels = [];
  161 |
  162 |   //   // Iterate over provider names from JSON list
  163 |   //   for (const provider of providerList) {
  164 |   //     const trimmedProvider = provider.trim();
  165 |   //     console.log(`[INFO] Attempting to find and check checkbox for provider: ${trimmedProvider}`);
  166 |
  167 |   //     // Directly locate the checkbox related to the provider
  168 |   //     const checkboxLocator = this.page.locator(`//input[@type='checkbox' and contains(@id, '_provider') and @id='${trimmedProvider}']`);
  169 |
  170 |   //     // Check if the checkbox exists and is visible
  171 |   //     if (await checkboxLocator.isVisible()) {
  172 |   //       await checkboxLocator.check(); // Check the checkbox directly
  173 |   //       console.log(`[INFO] Checkbox checked for: ${trimmedProvider}`);
  174 |   //     } else {
  175 |   //       console.warn(`[WARN] Checkbox not found for provider: "${trimmedProvider}"`);
  176 |   //       missingLabels.push(trimmedProvider);
  177 |   //     }
  178 |   //   }
  179 |
  180 |   //   return missingLabels; // Return missing labels in case any checkbox was not found
  181 |   // }
  182 |
  183 |   // // Method to apply the filters after selecting checkboxes
  184 |   // async applyFilters() {
  185 |   //   await this.applyFiltersButton.click();
  186 |   //   console.log("[INFO] Filters applied.");
  187 |   // }
  188 |
  189 |
  190 |   // open the filter panel for payee and provider
  191 |
  192 |   // async openFilterPanel() {
  193 |   //   await this.filterResultsButton.click();
```