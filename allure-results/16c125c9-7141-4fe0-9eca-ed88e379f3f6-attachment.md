# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: locator.waitFor: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('label').filter({ hasText: 'Filter Results' }).locator('text=Z34.83 -') to be visible

    at ClaimsPage.clickFilterText (/home/karthi/pmp/src/pages/ClaimsPage.js:226:22)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:149:18
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
  126 |   }
  127 |
  128 | // open the filter panel for payee and provider
  129 |
  130 | // async openFilterPanel() {
  131 | //   await this.filterResultsButton.click();
  132 | // }
  133 |
  134 | // // Dynamically check/uncheck payee or provider
  135 | // async toggleFilter(name, action = 'check') {
  136 | //   const checkboxLocator = this.page.getByRole('checkbox', { name: `${name}` });
  137 |
  138 | //   if (action === 'check') {
  139 | //     await checkboxLocator.check();
  140 | //   } else if (action === 'uncheck') {
  141 | //     await checkboxLocator.uncheck();
  142 | //   }
  143 | // }
  144 |
  145 |
  146 |
  147 | // // Apply the selected filters
  148 | async applyFilters() {
  149 |   await this.applyFiltersButton.click();
  150 | }
  151 |
  152 | // // Clear all applied filters
  153 | // async clearFilters() {
  154 | //   await this.clearFiltersButton.click();
  155 | // }
  156 |
  157 | // // Apply the clear action
  158 | // async applyClear() {
  159 | //   await this.applyClearButton.click();
  160 | // }
  161 |
  162 | // // Close the filter panel
  163 | // async closeFilterPanel() {
  164 | //   await this.closeButton.click();
  165 | // }
  166 |
  167 | // async openFilterPanel() {
  168 | //   await this.filterResultsButton.click();
  169 | // }
  170 |
  171 | // async filterByPayee(payeeName) {
  172 | //   await this.openFilterPanel();
  173 | //   await this.page.getByRole('checkbox', { name: `${payeeName}_payee` }).check();
  174 | //   await this.applyFilters();
  175 | //   console.log("payee filter :",payeeName)
  176 | // }
  177 |
  178 | // async filterByProvider(providerName) {
  179 | //   await this.openFilterPanel();
  180 | //   await this.page.getByRole('checkbox', { name: `${providerName}_provider` }).first().check();
  181 |
  182 | //   await this.applyFilters();
  183 | //   console.log("provider filter: ",providerName)
  184 | // }
  185 |
  186 | // async uncheckPayee(payeeName) {
  187 | //   // await this.page.getByRole('checkbox', { name: `${payeeName}_payee` }).uncheck();
  188 | //   await this.page.locator('input[type="checkbox"][name="Integra Partners Llc_payee"]').nth(0).uncheck();
  189 |
  190 | //   console.log("uncheck payee filter: ",payeeName)
  191 | // }
  192 |
  193 | // async applyFilters() {
  194 | //   await this.applyFiltersButton.click();
  195 | // }
  196 |
  197 | // async clearFilters() {
  198 | //   await this.clearFiltersButton.click();
  199 | // }
  200 |
  201 | // async applyClear() {
  202 | //   await this.applyClearButton.click();
  203 | // }
  204 |
  205 | // async closeFilterPanel() {
  206 | //   await this.closeButton.click();
  207 | // }
  208 |  
  209 |
  210 | async openFilters() {
  211 |     await this.filterResultsButton.click();
  212 |   }
  213 |
  214 |   async checkFilter(name) {
  215 |     await this.page.locator(`role=checkbox[name="${name}"]`).check();
  216 |   }
  217 |
  218 |   async uncheckFilter(name) {
  219 |     await this.page.locator(`role=checkbox[name="${name}"]`).uncheck();
  220 |   }
  221 |
  222 |  async clickFilterText(text) {
  223 |   const labelLocator = this.page.locator('label', { hasText: 'Filter Results' }).locator(`text=${text}`);
  224 |   
  225 |   // Wait for the element to be visible and interactable
> 226 |   await labelLocator.waitFor({ state: 'visible' });
      |                      ^ Error: locator.waitFor: Test timeout of 70000ms exceeded.
  227 |   await labelLocator.click();
  228 | }
  229 |
  230 |   async applyFilters() {
  231 |     await this.applyFiltersButton.click();
  232 |   }
  233 |
  234 |   async clearFilters() {
  235 |     await this.clearFiltersButton.click();
  236 |   }
  237 |
  238 |   async clickBackdrop() {
  239 |     await this.backdropLocator.click();
  240 |   }
  241 |
  242 |   // Fetches dynamic filter data (can be from a file, API, etc.)
  243 |   async getDynamicFilters() {
  244 |     // Example: Simulating fetching dynamic data from an API or external source
  245 |     // In a real-world scenario, replace this with an actual API call or file read operation
  246 |     return {
  247 |       "payeeAndProvidercheckboxes": {
  248 |         "provider": [
  249 |           "Nicole Koepke_provider",
  250 |           "John Smith_provider",
  251 |           "Emily Chen_provider"
  252 |         ],
  253 |         "payee": [
  254 |           "Integra Partners Llc_payee"
  255 |         ],
  256 |         "diagnosis": [
  257 |           "Z34.83 -"
  258 |         ]
  259 |       }
  260 |     };
  261 |   }
  262 |
  263 |   // Dynamically retrieves the checkboxes based on filter type ('provider' or 'payee')
  264 |   async getCheckboxes(filterType) {
  265 |     return await this.page.locator(`role=checkbox[name*="${filterType}"]`);
  266 |   }
  267 |
  268 | // search by claim number
  269 |
  270 |  async searchclaimnumber(label, claimNumber) {
  271 |
  272 |   const dateFilters = {
  273 |     '3 Months': 'LAST_3_MONTHSradio',
  274 |     '6 Months': 'LAST_6_MONTHSradio',
  275 |     '60 Months': 'LAST_60_MONTHSradio',
  276 |   };
  277 |
  278 |   const cleanLabel = label.trim();
  279 |   const filterId = dateFilters[cleanLabel];
  280 |
  281 |   if (!filterId) {
  282 |     console.log(`❌ Invalid filter label: ${label}`);
  283 |     return;
  284 |   }
  285 |
  286 |   console.log(`→ Filtering by: ${cleanLabel}`);
  287 |
  288 |   await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  289 |
  290 |   await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
  291 |   await this.dateFilterButton.click();
  292 |
  293 |   const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  294 |   await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  295 |   await radioLocator.check();
  296 |
  297 |   await this.doneButton.click();
  298 |
  299 |   // Search by claim number
  300 |   console.log(`→ Searching for Claim Number: ${claimNumber}`);
  301 |   await this.claimNumberInput.waitFor({ state: 'visible', timeout: 5000 });
  302 |   await this.claimNumberInput.click();
  303 |   await this.claimNumberInput.fill('');
  304 |   await this.claimNumberInput.fill(claimNumber);
  305 |   await this.applyButton.click();
  306 |
  307 |   await this.page.waitForTimeout(3000);
  308 |
  309 |   const claims = await this.claimNumberLocator.all();
  310 |   if (claims.length === 0) {
  311 |     console.log(`❌ No claims found for ${cleanLabel}: ${claimNumber}`);
  312 |   } else {
  313 |     console.log(`✅ Claims found for ${cleanLabel}: ${claimNumber}`);
  314 |     for (const claim of claims) {
  315 |       const text = await claim.textContent();
  316 |       console.log(`→ Claim Number: ${text?.trim()}`);
  317 |     }
  318 |   }
  319 |
  320 |   await this.clearButton.click();
  321 |
  322 |  }
  323 |
  324 |
  325 |
  326 |  
```