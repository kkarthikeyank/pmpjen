# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//button[@id="dropdownDateFilterButton"]')
    - locator resolved to <button type="button" aria-expanded="false" _ngcontent-plk-c277="" data-bs-toggle="dropdown" id="dropdownDateFilterButton" data-id="dropdownDateFilterButton" class="btn btn-outline-gray btn-block dropdown-toggle text-start w-100 h-70">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <ngb-offcanvas-backdrop class="offcanvas-backdrop fade show"></ngb-offcanvas-backdrop> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div _ngcontent-plk-c274="" class="offcanvas-body">…</div> from <ngb-offcanvas-panel role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="offcanvasLabel" class="offcanvas offcanvas-end show showing">…</ngb-offcanvas-panel> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 100ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span class="fw-bold" _ngcontent-plk-c97=""> Z3A.33 - </span> from <ngb-offcanvas-panel role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="offcanvasLabel" class="offcanvas offcanvas-end show">…</ngb-offcanvas-panel> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div _ngcontent-plk-c274="" class="offcanvas-body">…</div> from <ngb-offcanvas-panel role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="offcanvasLabel" class="offcanvas offcanvas-end show">…</ngb-offcanvas-panel> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying
    - locator resolved to <button type="button" aria-expanded="false" _ngcontent-plk-c283="" data-bs-toggle="dropdown" id="dropdownDateFilterButton" data-id="dropdownDateFilterButton" class="btn btn-outline-gray btn-block dropdown-toggle text-left font-size-sm w-100"> Last 36 Months </button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <ngb-offcanvas-backdrop class="offcanvas-backdrop fade show"></ngb-offcanvas-backdrop> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <ngb-offcanvas-backdrop class="offcanvas-backdrop fade show"></ngb-offcanvas-backdrop> intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is not stable
  5 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <ngb-offcanvas-backdrop class="offcanvas-backdrop fade show"></ngb-offcanvas-backdrop> intercepts pointer events
  - retrying click action
    - waiting 500ms

    at LabsPage.selectDateRangephysicain (/home/karthi/pmp/src/pages/LabsPage.js:84:35)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:201:16
```

# Test source

```ts
   1 |
   2 |  
   3 | import { expect } from '@playwright/test';
   4 |
   5 |  
   6 | export class LabsPage {
   7 |   constructor(page) {
   8 |
   9 |     this.page = page;
   10 |     this.labsTab = page.locator('#navLink-LABS');
   11 |     this.physiciansearchinput = page.locator('#labsFilterPhysicianSearchInput')
   12 |     this.applyButton = page.getByRole('button', { name: 'Apply' });
   13 |     this.physicianNameElements = page.locator("//p[starts-with(@id, 'physicianText')]"), { state: 'visible' }; //physician text 
   14 |       // Locator for abnormal rows
   15 |     this.abnormalLocator = page.locator("//div[contains(@class, 'abnormal-row')]");
   16 |
   17 |     // Locator for all rows (normal + abnormal)
   18 |     this.allRows = page.locator("//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row-cols-2')]");
   19 |         this.abnormalLocatosr = page.locator('//div[@data-id="labsCardObjectResultsDiv"]//div[contains(@class, "row") and .//span[contains(text(), "ABNORMAL")]]');
   20 |         this.resultsDropdown = page.getByLabel('select number of results'); //pag
   21 |
   22 |
   23 |     this.physician = page.locator('#physicianText328558');
   24 |     this.labSearchInput = page.getByRole('textbox', { name: 'ex. Life Labs' });
   25 |         this.labNameElements = page.locator("//p[starts-with(@id, 'labVendorText')]"); //lab vendor text
   26 |
   27 |     //p[starts-with@id,'labVendorText']
   28 |     // this.applyButton = page.getByRole('button', { name: 'Apply' });
   29 |     this.last36MonthsButton = page.locator('//button[@id="dropdownDateFilterButton"]'); //first select the date range button
   30 |     this.last3MonthsOption = page.getByText('Last 3 Months');
   31 |     this.dateRangeText = page.locator('//div[@class="d-flex flex-wrap"]');
   32 |     this.noLabResultsText =page.getByText('No Lab Results to Show');
   33 |     this.customDateButton = page.locator('//li[normalize-space()="Custom"]');
   34 |     this.monthDropdown = page.locator('//select[@title="Select month"]');
   35 |     this.checkboxAbnormal = page.locator('//input[@id="checkboxAbnormal"]');
   36 |     this.last3MonthsDropdownItem = page.locator('//li[normalize-space()="Last 3 Months"]');
   37 |     this.firstLabCardAbnormalLabel = page.getByText('Calcium SerPl-sCnc').first();
   38 |     this.noAbnormalLabel = page.locator('//span[normalize-space(text())="N/A"]');
   39 |     this.clearButton = page.locator('//a[normalize-space()="Clear"]');
   40 |      this.abnormalLocatorwwithstatus = page.locator(
   41 |       `//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row') and .//span[contains(text(), 'ABNORMAL')]]/span[1]`);
   42 |       //span[normalize-space(text())='N/A']
   43 |     // this.monthFilter = page.locator('//option[@value="1"]');
   44 |     // this.yearDropdown = page.locator('//select[@title="Select year"]');
   45 |     // this.yearFilter = page.locator('option[value="2024"]');
   46 |     // this.previousButton = page.locator('//button[@aria-label="Previous month"]');
   47 |     // this.nextButton = page.locator('//button[@title="Next month"]');
   48 |     this.monthDropdown = page.locator('//select[@title="Select month"]');
   49 |     this.monthOptions = page.locator('//select[@title="Select month"]/option');
   50 |     this.yearDropdown = page.locator('//select[@title="Select year"]');
   51 |     this.yearOptions = page.locator('//select[@title="Select year"]/option');
   52 |
   53 |     this.testnamesearchBox = page.getByRole('textbox', { name: 'ex. Triglycerides' });
   54 |     this.testNameLocators = page.locator("//app-labs-card//span[not(contains(@data-id, 'Badge')) and contains(@data-id, '-')]");
   55 |     this.testnamewithabnormal=page.locator('//div[contains(@class, "row-cols-2")]/span')
   56 |
   57 |     this.applyButton = page.getByRole('button', { name: 'Apply' });
   58 |     this.clearButton = page.getByText('Clear');
   59 |
   60 |
   61 |
   62 |
   63 |
   64 |     
   65 |   
   66 |   }
   67 |  
   68 |   
   69 |   async openlabsTab() {
   70 |     // Ensure the Claims tab is visible before clicking
   71 |     await this.labsTab.waitFor({ state: 'visible', timeout: 20000 });
   72 |     await this.labsTab.click();
   73 |
   74 |     // Optionally, wait for the page to load after clicking the  tab (if it redirects)
   75 |     // await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });
   76 |
   77 |   }
   78 |
   79 |   
   80 |   //  scenario  search with date filterwith last 60month   physician by name
   81 |      
   82 |
   83 |     async selectDateRangephysicain(rangeText) {
>  84 |     await this.last36MonthsButton.click();
      |                                   ^ Error: locator.click: Target page, context or browser has been closed
   85 |     await this.page.getByText(rangeText).click();
   86 |   }
   87 |
   88 |   async searchPhysician(name) {
   89 |     await this.physiciansearchinput.click();
   90 |     await this.physiciansearchinput.fill(name);
   91 |     await this.applyButton.click();
   92 |   }
   93 |
   94 |   async clearFilters() {
   95 |     await this.clearButton.click();
   96 |   }
   97 |
   98 |   
   99 |   async printPhysicianResults() {
  100 |     const count = await this.physicianNameElements.count();
  101 |     if (count === 0) {
  102 |       console.log('No physician');
  103 |     } else {
  104 |       for (let i = 0; i < count; i++) {
  105 |         const name = await this.physicianNameElements.nth(i).innerText();
  106 |         console.log(`Physician ${i + 1}: ${name}`);
  107 |       }
  108 |     }
  109 |   }
  110 |
  111 |
  112 |        // scenario  search with date filter  for a labvendor
  113 |
  114 |    async selectDateRangelab(rangeText) {
  115 |     await this.last36MonthsButton.click();
  116 |     await this.page.getByText(rangeText).click();
  117 |   }
  118 |
  119 |   
  120 |
  121 |   async searchLab(name) {
  122 |     await this.labSearchInput.click();
  123 |     await this.labSearchInput.fill(name);
  124 |     await this.applyButton.click();
  125 |   }
  126 |
  127 |  
  128 |   //  async clearFilters() {
  129 |   //   await this.clearButton.click();
  130 |   // }
  131 |
  132 |
  133 |
  134 |     async logLabResults() {
  135 |     const count = await this.labNameElements.count();
  136 |     if (count === 0) {
  137 |       console.log('No test names');
  138 |     } else {
  139 |       for (let i = 0; i < count; i++) {
  140 |         const text = await this.labNameElements.nth(i).textContent();
  141 |         console.log(text.trim());
  142 |       }
  143 |     } 
  144 |   }
  145 |
  146 |
  147 |
  148 |
  149 |
  150 | // scenario  search for a test name
  151 |
  152 |     async selectDateRangetestname(rangeText) {
  153 |     await this.last36MonthsButton.click();
  154 |     await this.page.getByText(rangeText).click();
  155 |   }
  156 |
  157 |   async searchTestName(name) {
  158 |     await this.testnamesearchBox.click();
  159 |     await this.testnamesearchBox.fill(name);
  160 |     await this.applyButton.click();
  161 |   }
  162 |
  163 |  
  164 |   async printTestResults() {
  165 |     const count = await this.testNameLocators.count();
  166 |     if (count === 0) {
  167 |       console.log('No test names found');
  168 |     } else {
  169 |       for (let i = 0; i < count; i++) {
  170 |         const text = await this.testNameLocators.nth(i).textContent();
  171 |         console.log(text.trim());
  172 |       }
  173 |     }
  174 |   }
  175 |
  176 |    async clearFilters() {
  177 |     await this.clearButton.click();
  178 |   }
  179 |
  180 | //  scenario custom date range status abnormal and unabnormal with checkbox
  181 |
  182 | dateCell(dayName, monthName, day, year) {
  183 |     const fullDateLabel = `${dayName}, ${monthName} ${day}, ${year}`;
  184 |     return this.page.locator(`//div[@aria-label="${fullDateLabel}"]`);
```