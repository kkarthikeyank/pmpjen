# Test info

- Name: Member Portal - Labs Flow >> Check abnormal check and uncheck 
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:59:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//button[@id="dropdownDateFilterButton"]')

    at LabsPage.selectDateRangephysicain (/home/karthi/pmp/src/pages/LabsPage.js:83:35)
    at LabsPage.runAbnormalTestFlow (/home/karthi/pmp/src/pages/LabsPage.js:292:14)
    at /home/karthi/pmp/src/tests/labspagegroup.spec.js:65:18
```

# Page snapshot

```yaml
- banner:
  - heading "Member Portal" [level=1]
- status: Loading...
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
   13 |     this.physicianNameElements = page.locator("//p[starts-with(@id, 'physicianText')]"); //physician text 
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
   55 |
   56 |     this.applyButton = page.getByRole('button', { name: 'Apply' });
   57 |     this.clearButton = page.getByText('Clear');
   58 |
   59 |
   60 |
   61 |
   62 |
   63 |     
   64 |   
   65 |   }
   66 |  
   67 |   
   68 |   async openlabsTab() {
   69 |     // Ensure the Claims tab is visible before clicking
   70 |     await this.labsTab.waitFor({ state: 'visible', timeout: 20000 });
   71 |     await this.labsTab.click();
   72 |
   73 |     // Optionally, wait for the page to load after clicking the  tab (if it redirects)
   74 |     // await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });
   75 |
   76 |   }
   77 |
   78 |   
   79 |   //  scenario  search with date filter  physician by name
   80 |      
   81 |
   82 |     async selectDateRangephysicain(rangeText) {
>  83 |     await this.last36MonthsButton.click();
      |                                   ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
   84 |     await this.page.getByText(rangeText).click();
   85 |   }
   86 |
   87 |   async searchPhysician(name) {
   88 |     await this.physiciansearchinput.click();
   89 |     await this.physiciansearchinput.fill(name);
   90 |     await this.applyButton.click();
   91 |   }
   92 |
   93 |   async clearFilters() {
   94 |     await this.clearButton.click();
   95 |   }
   96 |
   97 |   async printPhysicianResults() {
   98 |     const count = await this.physicianNameElements.count();
   99 |     if (count === 0) {
  100 |       console.log('No physician');
  101 |     } else {
  102 |       for (let i = 0; i < count; i++) {
  103 |         const name = await this.physicianNameElements.nth(i).innerText();
  104 |         console.log(`Physician ${i + 1}: ${name}`);
  105 |       }
  106 |     }
  107 |   }
  108 |
  109 |
  110 |        // scenario  search with date filter  for a labvendor
  111 |
  112 |    async selectDateRangelab(rangeText) {
  113 |     await this.last36MonthsButton.click();
  114 |     await this.page.getByText(rangeText).click();
  115 |   }
  116 |
  117 |   
  118 |
  119 |   async searchLab(name) {
  120 |     await this.labSearchInput.click();
  121 |     await this.labSearchInput.fill(name);
  122 |     await this.applyButton.click();
  123 |   }
  124 |
  125 |  
  126 |    async clearFilters() {
  127 |     await this.clearButton.click();
  128 |   }
  129 |
  130 |
  131 |
  132 |     async logLabResults() {
  133 |     const count = await this.labNameElements.count();
  134 |     if (count === 0) {
  135 |       console.log('No test names');
  136 |     } else {
  137 |       for (let i = 0; i < count; i++) {
  138 |         const text = await this.labNameElements.nth(i).textContent();
  139 |         console.log(text.trim());
  140 |       }
  141 |     } 
  142 |   }
  143 |
  144 |
  145 |
  146 |
  147 |
  148 | // scenario  search for a test name
  149 |
  150 |     async selectDateRangetestname(rangeText) {
  151 |     await this.last36MonthsButton.click();
  152 |     await this.page.getByText(rangeText).click();
  153 |   }
  154 |
  155 |   async searchTestName(name) {
  156 |     await this.testnamesearchBox.click();
  157 |     await this.testnamesearchBox.fill(name);
  158 |     await this.applyButton.click();
  159 |   }
  160 |
  161 |  
  162 |   async printTestResults() {
  163 |     const count = await this.testNameLocators.count();
  164 |     if (count === 0) {
  165 |       console.log('No test names found');
  166 |     } else {
  167 |       for (let i = 0; i < count; i++) {
  168 |         const text = await this.testNameLocators.nth(i).textContent();
  169 |         console.log(text.trim());
  170 |       }
  171 |     }
  172 |   }
  173 |
  174 |    async clearFilters() {
  175 |     await this.clearButton.click();
  176 |   }
  177 |
  178 | //  scenario custom date range status abnormal and unabnormal with checkbox
  179 |
  180 | dateCell(dayName, monthName, day, year) {
  181 |     const fullDateLabel = `${dayName}, ${monthName} ${day}, ${year}`;
  182 |     return this.page.locator(`//div[@aria-label="${fullDateLabel}"]`);
  183 |   }
```