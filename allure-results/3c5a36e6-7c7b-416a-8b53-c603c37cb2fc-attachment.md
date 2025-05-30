# Test info

- Name: Member Portal - Labs Flow >> Open Labs tab after login
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:29:5

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('#navLink-LABS') to be visible

    at LabsPage.openlabsTab (/home/karthi/pmp/src/pages/LabsPage.js:72:24)
    at /home/karthi/pmp/src/tests/labspagegroup.spec.js:30:20
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
   13 |     this.physicianNameElements = page.locator("//p[starts-with(@id, 'physicianText')]"); //physician text print 
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
   54 |     this.testNameLocators = page.locator("//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row')]"); // custom
   55 |
   56 |     this.testnamewithabnormal=page.locator('//div[contains(@class, "row-cols-2")]/span')
   57 |
   58 |     this.applyButton = page.getByRole('button', { name: 'Apply' });
   59 |     this.clearButton = page.getByText('Clear');
   60 |
   61 |
   62 |
   63 |
   64 |
   65 |     
   66 |   
   67 |   }
   68 |  
   69 |   
   70 |   async openlabsTab() {
   71 |     // Ensure the Claims tab is visible before clicking
>  72 |     await this.labsTab.waitFor({ state: 'visible', timeout: 20000 });
      |                        ^ Error: locator.waitFor: Target page, context or browser has been closed
   73 |     await this.labsTab.click();
   74 |
   75 |     // Optionally, wait for the page to load after clicking the  tab (if it redirects)
   76 |     // await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });
   77 |
   78 |   }
   79 |
   80 |   
   81 |   //  scenario  search with date filterwith last 60month   physician by name
   82 |      
   83 |
   84 |     async selectDateRangephysicain(rangeText) {
   85 |     await this.last36MonthsButton.click();
   86 |     await this.page.getByText(rangeText).click();
   87 |   }
   88 |
   89 |   async searchPhysician(name) {
   90 |     await this.physiciansearchinput.click();
   91 |     await this.physiciansearchinput.fill(name);
   92 |    await this.physiciansearchinput.waitFor({ state: 'visible' });
   93 |    await this.physiciansearchinput.click();
   94 |
   95 |   }
   96 |
   97 |   async clearFilters() {
   98 |     await this.clearButton.click();
   99 |   }
  100 |
  101 |   async printPhysicianResults(name, rangeText) {
  102 |   console.log(`\n--- Filter Selection ---`);
  103 |   console.log(`Date Range: ${rangeText}`);
  104 |   console.log(`Physician Name Searched: ${name}`);
  105 |
  106 |   await this.page.waitForTimeout(1000); // give time for search results to load
  107 |
  108 |   const count = await this.physicianNameElements.count();
  109 |
  110 |   if (count === 0) {
  111 |     console.log('No physician found.');
  112 |   } else {
  113 |     for (let i = 0; i < count; i++) {
  114 |       const physicianName = await this.physicianNameElements.nth(i).innerText();
  115 |       console.log(`Physician ${i + 1}: ${physicianName}`);
  116 |     }
  117 |   }
  118 |
  119 |   console.log(); // spacing
  120 | }
  121 |
  122 |
  123 |        // scenario  search with date filter  for a labvendor
  124 |
  125 |    async selectDateRangelab(rangeText) {
  126 |     await this.last36MonthsButton.click();
  127 |     await this.page.getByText(rangeText).click();
  128 |   }
  129 |
  130 |   
  131 |
  132 |   async searchLab(name) {
  133 |     await this.labSearchInput.click();
  134 |     await this.labSearchInput.fill(name);
  135 |     await this.applyButton.click();
  136 |   }
  137 |
  138 |  
  139 |   //  async clearFilters() {
  140 |   //   await this.clearButton.click();
  141 |   // }
  142 |
  143 | async logLabResults(name, rangeText) {
  144 |   console.log(`\n--- Filter Selection ---`);
  145 |   console.log(`Date Range: ${rangeText}`);
  146 |   console.log(`Lab Vendor Name Searched: ${name}`);
  147 |
  148 |   await this.page.waitForTimeout(1000); // allow results to load
  149 |
  150 |   const count = await this.labNameElements.count();
  151 |
  152 |   if (count === 0) {
  153 |     console.log('No lab vendors found.');
  154 |   } else {
  155 |     for (let i = 0; i < count; i++) {
  156 |       const text = await this.labNameElements.nth(i).textContent();
  157 |       console.log(`Lab Vendor ${i + 1}: ${text.trim()}`);
  158 |     }
  159 |   }
  160 |
  161 |   console.log(); // spacing
  162 | }
  163 |
  164 |
  165 |
  166 |
  167 |
  168 | // scenario  search for a test name
  169 |
  170 |     async selectDateRangetestname(rangeText) {
  171 |     await this.last36MonthsButton.click();
  172 |     await this.page.getByText(rangeText).click();
```