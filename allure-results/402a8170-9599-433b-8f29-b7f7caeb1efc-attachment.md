# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//span[normalize-space()=\'Filter Results\']')
    - locator resolved to <span _ngcontent-tcb-c277="">Filter Results</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-tcb-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div _ngcontent-tcb-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is not stable
  16 × retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div _ngcontent-tcb-c277="" class="d-flex flex-wrap" data-id="claimsFilterResults">…</div> intercepts pointer events
  - retrying click action
    - waiting 500ms

    at ClaimsPage.openFilterPanel (/home/karthi/pmp/src/pages/ClaimsPage.js:132:36)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:111:16
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
- button "11-13-2024 - 05-13-2025"
- button "Apply"
- button "Clear"
- text: "Date range: from 11-13-2024 to 05-13-2025"
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
   32 |     this.selectedprovider = page.locator("//div[normalize-space()='Nicole Koepke']");
   33 |     this.monthsdateverify = page.locator("//div[@class='flex-fill']");
   34 |
   35 | //button[@id='applyFilterClaims']
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
   48 |   //   this.customRadio = page.getByRole('radio', { name: 'Custom' });
   49 |   //   this.fromDate =  page.locator(`//div[contains(text(),'11')]`);
   50 |
   51 |   //   this.toDateButton = page.locator(`//div[contains(text(),'29')]`);  
   52 |   //   this.noResultsText = page.getByText('No matching results were');
   53 |
   54 |
   55 |   //
   56 |    // Adding new locators for custom date filter
   57 |    
   58 |    this.customRadio = page.getByRole('radio', { name: 'Custom' });
   59 |    this.fromDateInput = page.locator('#dpFromDateInput'); // Custom From Date Input
   60 |    this.toDateInput = page.locator('#dpToDateInput'); // Custom To Date Input
   61 |    this.noResultsText = page.getByText('No matching results were');
   62 |   //  this.doneButton = this.page.getByRole('button', { name: 'Done' });
   63 |    this.noResultsText = page.getByText('No matching results were');
   64 |
   65 |
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
> 132 |     await this.filterResultsButton.click();
      |                                    ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  133 |     console.log('Opened filter panel');
  134 |   }
  135 |
  136 |   // Click Apply Filters
  137 |   async clickApplyFilters() {
  138 |     await this.applyFiltersButton.click();
  139 |     console.log('Clicked Apply Filters button');
  140 |   }
  141 |
  142 |   // Click provider checkbox if found
  143 |   async clickProviderCheckbox(providerName) {
  144 |     const labelLocator = this.page.locator(`//div[normalize-space()='${providerName}']`);
  145 |     const count = await labelLocator.count();
  146 |
  147 |     if (count > 0) {
  148 |       const checkboxLocator = labelLocator.locator("preceding-sibling::input[@type='checkbox']");
  149 |       const isChecked = await checkboxLocator.isChecked();
  150 |       if (!isChecked) {
  151 |         await checkboxLocator.click();
  152 |         console.log(`Checked: ${providerName}`);
  153 |       } else {
  154 |         console.log(`Already checked: ${providerName}`);
  155 |       }
  156 |     } else {
  157 |       console.log(`No provider found: ${providerName}`);
  158 |     }
  159 |   }
  160 |
  161 |   // Loop and check all providers
  162 |   async clickAllProviderCheckboxes(providerList) {
  163 |     for (const provider of providerList) {
  164 |       await this.clickProviderCheckbox(provider);
  165 |     }
  166 |   }
  167 |
  168 | // open the filter panel for payee and provider
  169 |
  170 | // async openFilterPanel() {
  171 | //   await this.filterResultsButton.click();
  172 | // }
  173 |
  174 | // // Dynamically check/uncheck payee or provider
  175 | // async toggleFilter(name, action = 'check') {
  176 | //   const checkboxLocator = this.page.getByRole('checkbox', { name: `${name}` });
  177 |
  178 | //   if (action === 'check') {
  179 | //     await checkboxLocator.check();
  180 | //   } else if (action === 'uncheck') {
  181 | //     await checkboxLocator.uncheck();
  182 | //   }
  183 | // }
  184 |
  185 |
  186 |
  187 | // // Apply the selected filters
  188 | // async applyFilters() {
  189 | //   await this.applyFiltersButton.click();
  190 | // }
  191 |
  192 | // // Clear all applied filters
  193 | // async clearFilters() {
  194 | //   await this.clearFiltersButton.click();
  195 | // }
  196 |
  197 | // // Apply the clear action
  198 | // async applyClear() {
  199 | //   await this.applyClearButton.click();
  200 | // }
  201 |
  202 | // // Close the filter panel
  203 | // async closeFilterPanel() {
  204 | //   await this.closeButton.click();
  205 | // }
  206 |
  207 | // async openFilterPanel() {
  208 | //   await this.filterResultsButton.click();
  209 | // }
  210 |
  211 | // async filterByPayee(payeeName) {
  212 | //   await this.openFilterPanel();
  213 | //   await this.page.getByRole('checkbox', { name: `${payeeName}_payee` }).check();
  214 | //   await this.applyFilters();
  215 | //   console.log("payee filter :",payeeName)
  216 | // }
  217 |
  218 | // async filterByProvider(providerName) {
  219 | //   await this.openFilterPanel();
  220 | //   await this.page.getByRole('checkbox', { name: `${providerName}_provider` }).first().check();
  221 |
  222 | //   await this.applyFilters();
  223 | //   console.log("provider filter: ",providerName)
  224 | // }
  225 |
  226 | // async uncheckPayee(payeeName) {
  227 | //   // await this.page.getByRole('checkbox', { name: `${payeeName}_payee` }).uncheck();
  228 | //   await this.page.locator('input[type="checkbox"][name="Integra Partners Llc_payee"]').nth(0).uncheck();
  229 |
  230 | //   console.log("uncheck payee filter: ",payeeName)
  231 | // }
  232 |
```