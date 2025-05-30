# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: page.click: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('#clear-filters-button')

    at ClaimsPage.clearFilters (/home/karthi/pmp/src/pages/ClaimsPage.js:281:21)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:161:14
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
  251 |  async openFilterPanel() {
  252 |     if (await this.filterResultsButton.isVisible()) {
  253 |       await this.filterResultsButton.click();
  254 |       console.log('Filter panel opened');
  255 |     } else {
  256 |       console.warn('Filter button not found or not visible');
  257 |     }
  258 |   }
  259 |
  260 |   
  261 |   async applyFilterBySectionAndLabel(section, label) {
  262 |     // Locate checkbox using section + label
  263 |     const checkbox = this.page.locator(`input[type="checkbox"][data-section="${section}"][data-label="${label}"]`);
  264 |     if (await checkbox.isVisible()) {
  265 |       await checkbox.check();
  266 |     } else {
  267 |       console.warn(`Checkbox not found for: ${section} - ${label}`);
  268 |     }
  269 |   }
  270 |
  271 |   async uncheckFilterBySectionAndLabel(section, label) {
  272 |     const checkbox = this.page.locator(`input[type="checkbox"][data-section="${section}"][data-label="${label}"]`);
  273 |     if (await checkbox.isVisible() && await checkbox.isChecked()) {
  274 |       await checkbox.uncheck();
  275 |     } else {
  276 |       console.warn(`Checkbox not found or already unchecked: ${section} - ${label}`);
  277 |     }
  278 |   }
  279 |
  280 |   async clearFilters() {
> 281 |     await this.page.click('#clear-filters-button'); // adjust selector
      |                     ^ Error: page.click: Test timeout of 70000ms exceeded.
  282 |   }
  283 |
  284 |   async applyClear() {
  285 |     await this.page.click('#apply-clear-button'); // adjust selector
  286 |   }
  287 |
  288 |   async closeFilterPanel() {
  289 |     await this.page.click('#close-filter-panel'); // adjust selector
  290 |   }
  291 |
  292 | // search by claim number
  293 | // async searchclaimnumber(label, claimNumber) {
  294 | //   const dateFilters = {
  295 | //     '3 Months': 'LAST_3_MONTHSradio',
  296 | //     '6 Months': 'LAST_6_MONTHSradio',
  297 | //     '60 Months': 'LAST_60_MONTHSradio',
  298 | //   };
  299 |
  300 | //   const filterId = dateFilters[label];
  301 | //   if (!filterId) {
  302 | //     console.log(`❌ Invalid filter label: ${label}`);
  303 | //     return;
  304 | //   }
  305 |
  306 | //   console.log(`→ Filtering by: ${label}`);
  307 |
  308 | //   // Wait for loading to clear
  309 | //   await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  310 |
  311 | //   // Open date filter and select radio
  312 | //   await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
  313 | //   await this.dateFilterButton.click();
  314 |
  315 | //   const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  316 | //   await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  317 | //   await radioLocator.check();
  318 |
  319 | //   await this.doneButton.click();
  320 |
  321 | //   // Search by claim number
  322 | //   console.log(`→ Searching for Claim Number: ${claimNumber}`);
  323 | //   await this.claimNumberInput.waitFor({ state: 'visible', timeout: 5000 });
  324 | //   await this.claimNumberInput.click();
  325 | //   await this.claimNumberInput.fill('');
  326 | //   await this.claimNumberInput.fill(claimNumber);
  327 | //   await this.applyButton.click();
  328 |
  329 | //   // Wait for claims to load (ideally replace with network/waitForResponse)
  330 | //   await this.page.waitForTimeout(3000);
  331 |
  332 | //   // Get and print claim results
  333 | //   const claims = await this.claimNumberLocator.all();
  334 | //   if (claims.length === 0) {
  335 | //     console.log(`❌ No claims found for ${label}: ${claimNumber}`);
  336 | //   } else {
  337 | //     console.log(`✅ Claims found for ${label}: ${claimNumber}`);
  338 | //     for (const claim of claims) {
  339 | //       const text = await claim.textContent();
  340 | //       console.log(`→ Claim Number: ${text?.trim()}`);
  341 | //     }
  342 | //   }
  343 |
  344 | //   // Clear search for next iteration
  345 | //   await this.clearButton.click();
  346 | // }
  347 |  async searchclaimnumber(label, claimNumber) {
  348 |
  349 |   const dateFilters = {
  350 |     '3 Months': 'LAST_3_MONTHSradio',
  351 |     '6 Months': 'LAST_6_MONTHSradio',
  352 |     '60 Months': 'LAST_60_MONTHSradio',
  353 |   };
  354 |
  355 |   const cleanLabel = label.trim();
  356 |   const filterId = dateFilters[cleanLabel];
  357 |
  358 |   if (!filterId) {
  359 |     console.log(`❌ Invalid filter label: ${label}`);
  360 |     return;
  361 |   }
  362 |
  363 |   console.log(`→ Filtering by: ${cleanLabel}`);
  364 |
  365 |   await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  366 |
  367 |   await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
  368 |   await this.dateFilterButton.click();
  369 |
  370 |   const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  371 |   await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  372 |   await radioLocator.check();
  373 |
  374 |   await this.doneButton.click();
  375 |
  376 |   // Search by claim number
  377 |   console.log(`→ Searching for Claim Number: ${claimNumber}`);
  378 |   await this.claimNumberInput.waitFor({ state: 'visible', timeout: 5000 });
  379 |   await this.claimNumberInput.click();
  380 |   await this.claimNumberInput.fill('');
  381 |   await this.claimNumberInput.fill(claimNumber);
```