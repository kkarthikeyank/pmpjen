# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//button[@id=\'applyFilterClaims\']')

    at ClaimsPage.uncheckFilters (/home/karthi/pmp/src/pages/ClaimsPage.js:215:35)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:125:5
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
  115 |     try {
  116 |       const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`, { timeout: 5000 });
  117 |       const isChecked = await checkbox.isChecked();
  118 |       if (!isChecked) {
  119 |         await checkbox.check();
  120 |         console.log(`[INFO] Checked: ${labelText}`);
  121 |       } else {
  122 |         console.log(`[INFO] Already checked: ${labelText}`);
  123 |       }
  124 |       return true;
  125 |     } catch {
  126 |       console.log(`[WARN] Not found: ${labelText}`);
  127 |       return false;
  128 |     }
  129 |   }
  130 |
  131 |   async applyFilters(filters) {
  132 |     let anyApplied = false;
  133 |
  134 |     for (const group of ['providers', 'payees', 'diagnoses']) {
  135 |       if (filters[group]?.length > 0) {
  136 |         for (const item of filters[group]) {
  137 |           const result = await this._checkCheckboxByLabel(item);
  138 |           if (result) anyApplied = true;
  139 |         }
  140 |       }
  141 |     }
  142 |
  143 |     if (anyApplied) {
  144 |       await this.applyFiltersButton.click();
  145 |       await this.page.waitForTimeout(1000); // wait for results to render
  146 |       console.log('[INFO] Filters applied');
  147 |     } else {
  148 |       console.log('[WARN] No filters selected — skipping apply');
  149 |     }
  150 |
  151 |     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  152 |     console.log('[INFO] Page scrolled to bottom');
  153 |
  154 |     await this.filterResultsButton.waitFor({ state: 'visible' });
  155 |     await this.page.waitForTimeout(1000); // Optional small buffer
  156 | await this.filterResultsButton.click({ force: true });
  157 |
  158 |     
  159 |   }
  160 |
  161 |   async printResults() {
  162 |     const providerCount = await this.providerResults.count();
  163 |     if (providerCount === 0) {
  164 |       console.log('[INFO] No providers found');
  165 |     } else {
  166 |       for (let i = 0; i < providerCount; i++) {
  167 |         const name = await this.providerResults.nth(i).innerText();
  168 |         console.log(`[PROVIDER ${i + 1}]: ${name}`);
  169 |       }
  170 |     }
  171 |
  172 |     const payeeCount = await this.payeeResults.count();
  173 |     if (payeeCount === 0) {
  174 |       console.log('[INFO] No payees found');
  175 |     } else {
  176 |       for (let i = 0; i < payeeCount; i++) {
  177 |         const name = await this.payeeResults.nth(i).innerText();
  178 |         console.log(`[PAYEE ${i + 1}]: ${name}`);
  179 |       }
  180 |     }
  181 |   }
  182 |
  183 |  async uncheckFilters(filters) {
  184 |     const tryUncheck = async (label, name) => {
  185 |       const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${name}")]/preceding-sibling::div//input[@type='checkbox']`;
  186 |       const checkboxLocator = this.page.locator(`xpath=${checkboxXPath}`);
  187 |
  188 |       const isVisible = await checkboxLocator.isVisible().catch(() => false);
  189 |       if (!isVisible) {
  190 |         console.warn(`[WARN] ${label} not found: ${name}`);
  191 |         return;
  192 |       }
  193 |
  194 |       const isChecked = await checkboxLocator.isChecked();
  195 |       if (isChecked) {
  196 |         await checkboxLocator.uncheck();
  197 |         console.log(`[INFO] Unchecked ${label}: ${name}`);
  198 |       } else {
  199 |         console.log(`[DEBUG] ${label} not checked: ${name}`);
  200 |       }
  201 |     };
  202 |
  203 |     for (const name of filters.providers || []) {
  204 |       await tryUncheck('provider', name);
  205 |     }
  206 |
  207 |     for (const name of filters.payees || []) {
  208 |       await tryUncheck('payee', name);
  209 |     }
  210 |
  211 |     for (const name of filters.diagnoses || []) {
  212 |       await tryUncheck('diagnosis', name);
  213 |     }
  214 |
> 215 |     await this.applyFiltersButton.click({ force: true });
      |                                   ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  216 |     console.log('[INFO] Unchecked filters applied');
  217 |     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  218 |     console.log('[INFO] Page scrolled to bottom');
  219 |   }
  220 |
  221 |
  222 |
  223 |
  224 |
  225 |   //  scenario Filter by date range and print claims
  226 |
  227 |   async filterAndPrintClaimsByLabel(label) {
  228 |     const dateFilters = {
  229 |       '3 Months': 'LAST_3_MONTHSradio',
  230 |       '6 Months': 'LAST_6_MONTHSradio',
  231 |       '60 Months': 'LAST_60_MONTHSradio',
  232 |     };
  233 |
  234 |     const filterId = dateFilters[label];
  235 |     if (!filterId) {
  236 |       console.log(`Invalid filter label: ${label}`);
  237 |       return;
  238 |     }
  239 |
  240 |     console.log(`Filtering by: ${label}`);
  241 |     await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  242 |
  243 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
  244 |     await this.dateFilterButton.click();
  245 |
  246 |     const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  247 |     await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  248 |     await radioLocator.check();
  249 |
  250 |     await this.doneButton.click();
  251 |
  252 |     await this.page.waitForTimeout(3000); // Replace with smarter wait if needed
  253 |
  254 |     const claims = await this.claimNumberLocator.all();
  255 |     if (claims.length === 0) {
  256 |       console.log("No claims found");
  257 |     } else {
  258 |       console.log(`Claims found for ${label}:`);
  259 |       for (const claim of claims) {
  260 |         const text = await claim.textContent();
  261 |         console.log(`Claim Number: ${text?.trim()}`);
  262 |       }
  263 |     }
  264 |
  265 |
  266 |   }  
  267 |
  268 |   
  269 |
  270 |   // senario  search by claim number with date range filter 
  271 |
  272 |   async searchclaimnumber(label, claimNumber) {
  273 |
  274 |     const dateFilters = {
  275 |       '3 Months': 'LAST_3_MONTHSradio',
  276 |       '6 Months': 'LAST_6_MONTHSradio',
  277 |       '60 Months': 'LAST_60_MONTHSradio',
  278 |     };
  279 |
  280 |     const cleanLabel = label.trim();
  281 |     const filterId = dateFilters[cleanLabel];
  282 |
  283 |     if (!filterId) {
  284 |       console.log(`❌ Invalid filter label: ${label}`);
  285 |       return;
  286 |     }
  287 |
  288 |     console.log(`→ Filtering by: ${cleanLabel}`);
  289 |
  290 |     await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  291 |
  292 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
  293 |     await this.dateFilterButton.click();
  294 |
  295 |     const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  296 |     await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  297 |     await radioLocator.check();
  298 |
  299 |     await this.doneButton.click();
  300 |
  301 |     // Search by claim number
  302 |     console.log(`→ Searching for Claim Number: ${claimNumber}`);
  303 |     await this.claimNumberInput.waitFor({ state: 'visible', timeout: 5000 });
  304 |     await this.claimNumberInput.click();
  305 |     await this.claimNumberInput.fill('');
  306 |     await this.claimNumberInput.fill(claimNumber);
  307 |     await this.applyButton.click();
  308 |
  309 |     await this.page.waitForTimeout(3000);
  310 |
  311 |     const claims = await this.claimNumberLocator.all();
  312 |     if (claims.length === 0) {
  313 |       console.log(`❌ No claims found for ${cleanLabel}: ${claimNumber}`);
  314 |     } else {
  315 |       console.log(`✅ Claims found for ${cleanLabel}: ${claimNumber}`);
```