# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: locator.click: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('//span[normalize-space()=\'Filter Results\']')
    - locator resolved to <span _ngcontent-pmn-c277="">Filter Results</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-pmn-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div _ngcontent-pmn-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is not stable
  14 × retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div _ngcontent-pmn-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
  - retrying click action
    - waiting 500ms

    at ClaimsPage.runFilterScenario (/home/karthi/pmp/src/pages/ClaimsPage.js:212:38)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:128:3
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
  187 |
  188 |     for (const name of filters.providers || []) {
  189 |       await tryUncheck('provider', name);
  190 |     }
  191 |
  192 |     for (const name of filters.payees || []) {
  193 |       await tryUncheck('payee', name);
  194 |     }
  195 |
  196 |     for (const name of filters.diagnoses || []) {
  197 |       await tryUncheck('diagnosis', name);
  198 |     }
  199 |
  200 |     await this.applyFiltersButton.click();
  201 |     console.log('[INFO] Unchecked filters applied');
  202 |     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  203 |     console.log('[INFO] Page scrolled to bottom');
  204 |   }
  205 |
  206 |   async runFilterScenario(dateRange, filters) {
  207 |     await this.filterByDateRange(dateRange);
  208 |
  209 |     const canClick = await this.canClickFilterResultsButton();
  210 |
  211 |     if (canClick) {
> 212 |       await this.filterResultsButton.click();
      |                                      ^ Error: locator.click: Test timeout of 70000ms exceeded.
  213 |       console.log(`[INFO] FilterResultsButton clicked for: ${dateRange}`);
  214 |
  215 |       await this.applyFilters(filters);
  216 |       await this.printResults();
  217 |       await this.uncheckFilters(filters);
  218 |     } else {
  219 |       console.warn(`[SKIP] FilterResultsButton not visible or disabled — skipping steps for: ${dateRange}`);
  220 |     }
  221 |   }
  222 | //     async filterByDateRange(dateRange) {
  223 | //   await this.dateFilterButton.click();
  224 | //   await this.page.getByText(dateRange).click();
  225 | //   await this.doneButton.click();
  226 | //   await this.filterResultsButton.waitFor({ state: 'visible', timeout: 30000 });
  227 | //   await this.filterResultsButton.click();
  228 |
  229 | //   console.log(`[INFO] Filter applied: ${dateRange}`);
  230 |
  231 | //   // const isFilterButtonVisible = await this.filterResultsButton.isVisible();
  232 | //   // if (isFilterButtonVisible) {
  233 | //   //   await this.filterResultsButton.click();
  234 | //   //   console.log(`[INFO] FilterResultsButton clicked for: ${dateRange}`);
  235 | //   //   return true;
  236 | //   // } else {
  237 | //   //   console.warn('[WARN] FilterResultsButton not visible, skipping click');
  238 | //   //   return false;
  239 | //   // }
  240 | // }
  241 | //    async hasResults() {
  242 | //   const providerCount = await this.providerResults.count();
  243 | //   const payeeCount = await this.payeeResults.count();
  244 |
  245 | //   return providerCount > 0 || payeeCount > 0;
  246 | // }
  247 |
  248 |
  249 |
  250 | //   //  async filterByDateRange(dateRange) {
  251 | //   //   await this.dateFilterButton.click();
  252 | //   //   await this.page.getByText(dateRange).click();
  253 | //   //   await this.doneButton.click();
  254 | //   //   await this.filterResultsButton.waitFor({ state: 'visible', timeout: 30000 });
  255 | //   //   await this.filterResultsButton.click();
  256 |
  257 | //   //   //  await this.filterResultsButton.click();
  258 |
  259 | //   //   console.log(`[INFO] Filter applied: ${dateRange}`);
  260 | //   // }
  261 |
  262 | //   async _checkCheckboxByLabel(labelText) {
  263 | //     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${labelText}")]/preceding-sibling::div//input[@type='checkbox']`;
  264 | //     try {
  265 | //       const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`, { timeout: 5000 });
  266 | //       const isChecked = await checkbox.isChecked();
  267 | //       if (!isChecked) {
  268 | //         await checkbox.check();
  269 | //         console.log(`[INFO] Checked: ${labelText}`);
  270 | //       } else {
  271 | //         console.log(`[INFO] Already checked: ${labelText}`);
  272 | //       }
  273 | //       return true;
  274 | //     } catch {
  275 | //       console.log(`[WARN] Not found: ${labelText}`);
  276 | //       return false;
  277 | //     }
  278 | //   }
  279 |
  280 | //   async applyFilters(filters) {
  281 | //     let anyApplied = false;
  282 |
  283 | //     for (const group of ['providers', 'payees', 'diagnoses']) {
  284 | //       if (filters[group]?.length > 0) {
  285 | //         for (const item of filters[group]) {
  286 | //           const result = await this._checkCheckboxByLabel(item);
  287 | //           if (result) anyApplied = true;
  288 | //         }
  289 | //       }
  290 | //     }
  291 |
  292 | //     if (anyApplied) {
  293 | //       await this.applyFiltersButton.click();
  294 | //       await this.page.waitForTimeout(1000); // wait for results to render
  295 | //       console.log('[INFO] Filters applied');
  296 | //     } else {
  297 | //       console.log('[WARN] No filters selected — skipping apply');
  298 | //     }
  299 |
  300 | //     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  301 | //     console.log('[INFO] Page scrolled to bottom');
  302 |
  303 | //     await this.filterResultsButton.waitFor({ state: 'visible' });
  304 | //     await this.page.waitForTimeout(1000); // Optional small buffer
  305 | //     await this.filterResultsButton.click();
  306 |
  307 |     
  308 | //   }
  309 |
  310 | //   async printResults() {
  311 | //     const providerCount = await this.providerResults.count();
  312 | //     if (providerCount === 0) {
```