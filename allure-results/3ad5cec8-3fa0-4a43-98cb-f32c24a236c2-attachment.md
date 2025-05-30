# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//button[@id=\'applyFilterClaims\']')
    - locator resolved to <button disabled tabindex="0" aria-current="page" _ngcontent-luk-c274="" id="applyFilterClaims" class="btn btn-primary" aria-label="applyFilters">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is not enabled
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    17 × waiting for element to be visible, enabled and stable
       - element is not enabled
     - retrying click action
       - waiting 500ms

    at ClaimsPage.clickApplyFilters (/home/karthi/pmp/src/pages/ClaimsPage.js:166:35)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:122:16
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
- dialog "Filter Results":
  - heading "Filter Results" [level=5]
  - button "Close"
  - heading "Provider" [level=2]
  - checkbox "Nicole Koepke_provider"
  - text: Nicole Koepke (2)
  - heading "Payee" [level=2]
  - checkbox "Integra Partners Llc_payee"
  - text: Integra Partners Llc (2)
  - heading "Diagnosis" [level=2]
  - checkbox "Z34.83_diagnoses"
  - text: Z34.83 - Unknown (2)
  - checkbox "Z3A.33_diagnoses"
  - text: Z3A.33 - Unknown (2)
  - button "applyFilters" [disabled]: Apply
  - button "clearFilters": Clear
```

# Test source

```ts
   66 |    }
   67 |
   68 |
   69 |
   70 | // open claims tab
   71 |   async openClaimsTab() {
   72 |     // Ensure the Claims tab is visible before clicking
   73 |     await this.claimsTab.waitFor({ state: 'visible', timeout: 20000 });
   74 |     await this.claimsTab.click();
   75 |
   76 |     // Optionally, wait for the page to load after clicking the Claims tab (if it redirects)
   77 |     await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });
   78 |   }
   79 |  
   80 |
   81 |
   82 |
   83 |
   84 | // Filter by date range and print claims
   85 |
   86 | async filterAndPrintClaimsByLabel(label) {
   87 |     const dateFilters = {
   88 |       '3 Months': 'LAST_3_MONTHSradio',
   89 |       '6 Months': 'LAST_6_MONTHSradio',
   90 |       '60 Months': 'LAST_60_MONTHSradio',
   91 |     };
   92 |
   93 |     const filterId = dateFilters[label];
   94 |     if (!filterId) {
   95 |       console.log(`Invalid filter label: ${label}`);
   96 |       return;
   97 |     }
   98 |
   99 |     console.log(`Filtering by: ${label}`);
  100 |     await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  101 |
  102 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
  103 |     await this.dateFilterButton.click();
  104 |
  105 |     const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  106 |     await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  107 |     await radioLocator.check();
  108 |
  109 |     await this.doneButton.click();
  110 |
  111 |     await this.page.waitForTimeout(3000); // Replace with smarter wait if needed
  112 |
  113 |     const claims = await this.claimNumberLocator.all();
  114 |     if (claims.length === 0) {
  115 |       console.log("No claims found");
  116 |     } else {
  117 |       console.log(`Claims found for ${label}:`);
  118 |       for (const claim of claims) {
  119 |         const text = await claim.textContent();
  120 |         console.log(`Claim Number: ${text?.trim()}`);
  121 |       }
  122 |     }
  123 |
  124 |      // Clear filters
  125 |   
  126 |   }
  127 |
  128 |
  129 |
  130 |   // Open the filter panel
  131 |   async openFilterPanel() {
  132 |     await this.filterResultsButton.click();
  133 |     console.log('Opened filter panel');
  134 |   }
  135 |
  136 |  
  137 |   // Click provider checkbox if found
  138 |  async clickProviderCheckbox(providerName) {
  139 |   const checkboxLocator = this.page.locator(`//label[contains(., '${providerName}')]//input[@type='checkbox']`);
  140 |   const count = await checkboxLocator.count();
  141 |
  142 |   if (count > 0) {
  143 |     await checkboxLocator.first().waitFor({ state: 'visible', timeout: 5000 });
  144 |     const isChecked = await checkboxLocator.first().isChecked();
  145 |
  146 |     if (!isChecked) {
  147 |       await checkboxLocator.first().click();
  148 |       console.log(`Checked: ${providerName}`);
  149 |     } else {
  150 |       console.log(`Already checked: ${providerName}`);
  151 |     }
  152 |   } else {
  153 |     console.log(`No provider checkbox found for: ${providerName}`);
  154 |   }
  155 | }
  156 |
  157 |   // Loop and check all providers
  158 |   async clickAllProviderCheckboxes(providerList) {
  159 |     for (const provider of providerList) {
  160 |       await this.clickProviderCheckbox(provider);
  161 |     }
  162 |   }
  163 |
  164 |    // Click Apply Filters
  165 |   async clickApplyFilters() {
> 166 |     await this.applyFiltersButton.click();
      |                                   ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  167 |     console.log('Clicked Apply Filters button');
  168 |   }
  169 |
  170 |
  171 | // open the filter panel for payee and provider
  172 |
  173 | // async openFilterPanel() {
  174 | //   await this.filterResultsButton.click();
  175 | // }
  176 |
  177 | // // Dynamically check/uncheck payee or provider
  178 | // async toggleFilter(name, action = 'check') {
  179 | //   const checkboxLocator = this.page.getByRole('checkbox', { name: `${name}` });
  180 |
  181 | //   if (action === 'check') {
  182 | //     await checkboxLocator.check();
  183 | //   } else if (action === 'uncheck') {
  184 | //     await checkboxLocator.uncheck();
  185 | //   }
  186 | // }
  187 |
  188 |
  189 |
  190 | // // Apply the selected filters
  191 | // async applyFilters() {
  192 | //   await this.applyFiltersButton.click();
  193 | // }
  194 |
  195 | // // Clear all applied filters
  196 | // async clearFilters() {
  197 | //   await this.clearFiltersButton.click();
  198 | // }
  199 |
  200 | // // Apply the clear action
  201 | // async applyClear() {
  202 | //   await this.applyClearButton.click();
  203 | // }
  204 |
  205 | // // Close the filter panel
  206 | // async closeFilterPanel() {
  207 | //   await this.closeButton.click();
  208 | // }
  209 |
  210 | // async openFilterPanel() {
  211 | //   await this.filterResultsButton.click();
  212 | // }
  213 |
  214 | // async filterByPayee(payeeName) {
  215 | //   await this.openFilterPanel();
  216 | //   await this.page.getByRole('checkbox', { name: `${payeeName}_payee` }).check();
  217 | //   await this.applyFilters();
  218 | //   console.log("payee filter :",payeeName)
  219 | // }
  220 |
  221 | // async filterByProvider(providerName) {
  222 | //   await this.openFilterPanel();
  223 | //   await this.page.getByRole('checkbox', { name: `${providerName}_provider` }).first().check();
  224 |
  225 | //   await this.applyFilters();
  226 | //   console.log("provider filter: ",providerName)
  227 | // }
  228 |
  229 | // async uncheckPayee(payeeName) {
  230 | //   // await this.page.getByRole('checkbox', { name: `${payeeName}_payee` }).uncheck();
  231 | //   await this.page.locator('input[type="checkbox"][name="Integra Partners Llc_payee"]').nth(0).uncheck();
  232 |
  233 | //   console.log("uncheck payee filter: ",payeeName)
  234 | // }
  235 |
  236 | // async applyFilters() {
  237 | //   await this.applyFiltersButton.click();
  238 | // }
  239 |
  240 | // async clearFilters() {
  241 | //   await this.clearFiltersButton.click();
  242 | // }
  243 |
  244 | // async applyClear() {
  245 | //   await this.applyClearButton.click();
  246 | // }
  247 |
  248 | // async closeFilterPanel() {
  249 | //   await this.closeButton.click();
  250 | // }
  251 |  
  252 |
  253 |
  254 |
  255 |   // Dynamically retrieves the checkboxes based on filter type ('provider' or 'payee')
  256 |   // async getCheckboxes(filterType) {
  257 |   //   return await this.page.locator(`role=checkbox[name*="${filterType}"]`);
  258 |   // }
  259 |
  260 | // search by claim number
  261 |
  262 |  async searchclaimnumber(label, claimNumber) {
  263 |
  264 |   const dateFilters = {
  265 |     '3 Months': 'LAST_3_MONTHSradio',
  266 |     '6 Months': 'LAST_6_MONTHSradio',
```