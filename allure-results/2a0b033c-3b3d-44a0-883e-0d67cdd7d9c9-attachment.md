# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//span[normalize-space()=\'Filter Results\']')
    - locator resolved to <span _ngcontent-ujx-c277="">Filter Results</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-ujx-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  18 × retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div _ngcontent-ujx-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
  - retrying click action
    - waiting 500ms

    at ClaimsPage.applyFilters (/home/karthi/pmp/src/pages/ClaimsPage.js:158:36)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:136:3
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
- button "02-27-2025 - 05-27-2025"
- button "Apply"
- button "Clear"
- text: "Date range: from 02-27-2025 to 05-27-2025"
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
   91 |
   92 |    async filterByDateRange(dateRange) {
   93 |     await this.dateFilterButton.click();
   94 |     await this.page.getByText(dateRange).click();
   95 |     await this.doneButton.click();
   96 |
   97 |
   98 |
   99 |     
  100 |        if (await this.filterResultsButton.isVisible()) {
  101 |     await this.filterResultsButton.click();
  102 |     console.log(`[INFO] Filter applied: ${dateRange}`);
  103 |   }
  104 |
  105 |
  106 |     // await this.filterResultsButton.waitFor({ state: 'visible', timeout: 30000 });
  107 |     // await this.filterResultsButton.click();
  108 |
  109 |     //  await this.filterResultsButton.click();
  110 |
  111 |     // console.log(`[INFO] Filter applied: ${dateRange}`);
  112 |   }
  113 |
  114 |
  115 |   async _checkCheckboxByLabel(labelText) {
  116 |     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${labelText}")]/preceding-sibling::div//input[@type='checkbox']`;
  117 |     try {
  118 |       const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`, { timeout: 5000 });
  119 |       const isChecked = await checkbox.isChecked();
  120 |       if (!isChecked) {
  121 |         await checkbox.check();
  122 |         console.log(`[INFO] Checked: ${labelText}`);
  123 |       } else {
  124 |         console.log(`[INFO] Already checked: ${labelText}`);
  125 |       }
  126 |       return true;
  127 |     } catch {
  128 |       console.log(`[WARN] Not found: ${labelText}`);
  129 |       return false;
  130 |     }
  131 |   }
  132 |
  133 |   async applyFilters(filters) {
  134 |     let anyApplied = false;
  135 |
  136 |     for (const group of ['providers', 'payees', 'diagnoses']) {
  137 |       if (filters[group]?.length > 0) {
  138 |         for (const item of filters[group]) {
  139 |           const result = await this._checkCheckboxByLabel(item);
  140 |           if (result) anyApplied = true;
  141 |         }
  142 |       }
  143 |     }
  144 |
  145 |     if (anyApplied) {
  146 |       await this.applyFiltersButton.click();
  147 |       await this.page.waitForTimeout(1000); // wait for results to render
  148 |       console.log('[INFO] Filters applied');
  149 |     } else {
  150 |       console.log('[WARN] No filters selected — skipping apply');
  151 |     }
  152 |
  153 |     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  154 |     console.log('[INFO] Page scrolled to bottom');
  155 |
  156 |     await this.filterResultsButton.waitFor({ state: 'visible' });
  157 |     await this.page.waitForTimeout(1000); // Optional small buffer
> 158 |     await this.filterResultsButton.click();
      |                                    ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  159 |
  160 |     
  161 |   }
  162 |
  163 |   async printResults() {
  164 |     const providerCount = await this.providerResults.count();
  165 |     if (providerCount === 0) {
  166 |       console.log('[INFO] No providers found');
  167 |     } else {
  168 |       for (let i = 0; i < providerCount; i++) {
  169 |         const name = await this.providerResults.nth(i).innerText();
  170 |         console.log(`[PROVIDER ${i + 1}]: ${name}`);
  171 |       }
  172 |     }
  173 |
  174 |     const payeeCount = await this.payeeResults.count();
  175 |     if (payeeCount === 0) {
  176 |       console.log('[INFO] No payees found');
  177 |     } else {
  178 |       for (let i = 0; i < payeeCount; i++) {
  179 |         const name = await this.payeeResults.nth(i).innerText();
  180 |         console.log(`[PAYEE ${i + 1}]: ${name}`);
  181 |       }
  182 |     }
  183 |   }
  184 |
  185 |  async uncheckFilters(filters) {
  186 |     const tryUncheck = async (label, name) => {
  187 |       const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${name}")]/preceding-sibling::div//input[@type='checkbox']`;
  188 |       const checkboxLocator = this.page.locator(`xpath=${checkboxXPath}`);
  189 |
  190 |       const isVisible = await checkboxLocator.isVisible().catch(() => false);
  191 |       if (!isVisible) {
  192 |         console.warn(`[WARN] ${label} not found: ${name}`);
  193 |         return;
  194 |       }
  195 |
  196 |       const isChecked = await checkboxLocator.isChecked();
  197 |       if (isChecked) {
  198 |         await checkboxLocator.uncheck();
  199 |         console.log(`[INFO] Unchecked ${label}: ${name}`);
  200 |       } else {
  201 |         console.log(`[DEBUG] ${label} not checked: ${name}`);
  202 |       }
  203 |     };
  204 |
  205 |     for (const name of filters.providers || []) {
  206 |       await tryUncheck('provider', name);
  207 |     }
  208 |
  209 |     for (const name of filters.payees || []) {
  210 |       await tryUncheck('payee', name);
  211 |     }
  212 |
  213 |     for (const name of filters.diagnoses || []) {
  214 |       await tryUncheck('diagnosis', name);
  215 |     }
  216 |
  217 |      // Wait for Apply button to be visible first
  218 |   await this.applyFiltersButton.waitFor({ state: 'visible' });
  219 |
  220 |   // Check if Apply button is enabled before clicking
  221 |   if (!(await this.applyFiltersButton.isDisabled())) {
  222 |     await this.applyFiltersButton.click();
  223 |     console.log('[INFO] Unchecked filters applied');
  224 |   } else {
  225 |     console.log('[WARN] Apply Filters button is disabled, skipping click');
  226 |   }
  227 |
  228 |   await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  229 |   console.log('[INFO] Page scrolled to bottom');
  230 |     // await this.applyFiltersButton.click();
  231 |     // console.log('[INFO] Unchecked filters applied');
  232 |     // await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  233 |     // console.log('[INFO] Page scrolled to bottom');
  234 |   }
  235 |
  236 |
  237 |
  238 |
  239 |
  240 |   //  scenario Filter by date range and print claims
  241 |
  242 |   async filterAndPrintClaimsByLabel(label) {
  243 |     const dateFilters = {
  244 |       '3 Months': 'LAST_3_MONTHSradio',
  245 |       '6 Months': 'LAST_6_MONTHSradio',
  246 |       '60 Months': 'LAST_60_MONTHSradio',
  247 |     };
  248 |
  249 |     const filterId = dateFilters[label];
  250 |     if (!filterId) {
  251 |       console.log(`Invalid filter label: ${label}`);
  252 |       return;
  253 |     }
  254 |
  255 |     console.log(`Filtering by: ${label}`);
  256 |     await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  257 |
  258 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
```