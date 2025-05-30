# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('//input[@id=\'LAST_60_MONTHSradio\']') to be visible

    at LabsPage.selectDateFilter (/home/karthi/pmp/src/pages/LabsPage.js:80:23)
    at LabsPage.searchphysicianinput (/home/karthi/pmp/src/pages/LabsPage.js:118:7)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:177:3
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
  - heading "Labs for" [level=1]
  - button "Julia Donaldson"
- text: "In this section you can view results from lab work ordered by your provider and billed to the Plan. Note: Lab data is updated bi-weekly."
- button "Read More"
- paragraph: Ordering Physician
- textbox "ex. John Smith"
- paragraph: Test Names
- textbox "ex. Triglycerides"
- paragraph: Lab Vendor
- textbox "ex. Life Labs"
- paragraph: Filter by date of service range
- button "Last 36 Months" [expanded]
- list:
  - listitem: Last 3 Months
  - listitem: Last 6 Months
  - listitem: Last 12 Months
  - listitem: Last 24 Months
  - listitem: Last 36 Months
  - listitem: Last 60 Months
  - listitem: Custom
- paragraph: Status
- checkbox "Checkbox for Abnormal"
- text: Abnormal
- button "Apply"
- text: Clear
- separator
- text: "Date Range: from 05-14-2022 to 05-14-2025 Show"
- combobox "select number of results":
  - option "5" [selected]
  - option "10"
  - option "25"
  - option "50"
  - option "100"
- text: entries
- paragraph: Date of Service
- paragraph: 05-12-2024
- button "View Details"
- paragraph: Ordering Physician Name
- paragraph: Scott Down
- paragraph: Lab Vendor
- paragraph: Precision Labs
- paragraph: New Comp. Metabolic Panel (113)
- text: Laboratory N/A
- paragraph: Date of Service
- paragraph: 04-11-2024
- button "View Details"
- paragraph: Ordering Physician Name
- paragraph: Scott Down
- paragraph: Lab Vendor
- paragraph: "Hope Pharma #1"
- paragraph: New Comp. Metabolic Panel (113)
- text: Calcium SerPl-sCnc ABNORMAL
- separator
- text: TEst2 ABNORMAL
- paragraph: Date of Service
- paragraph: 04-11-2024
- button "View Details"
- paragraph: Ordering Physician Name
- paragraph: Scott Down
- paragraph: Lab Vendor
- paragraph: "Hope Pharma #1"
- paragraph: New Comp. Metabolic Panel (113)
- text: Calcium SerPl-sCnc ABNORMAL
- separator
- text: TEst2 ABNORMAL
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
   13 |     this.physician = page.locator('#physicianText328558');
   14 |     this.labSearchInput = page.getByRole('textbox', { name: 'ex. Life Labs' });
   15 |     // this.applyButton = page.getByRole('button', { name: 'Apply' });
   16 |     this.last36MonthsButton = page.locator('//button[@id="dropdownDateFilterButton"]'); //first select the date range button
   17 |     this.last3MonthsOption = page.getByText('Last 3 Months');
   18 |     this.dateRangeText = page.locator('//div[@class="d-flex flex-wrap"]');
   19 |     this.noLabResultsText =page.getByText('No Lab Results to Show');
   20 |     this.customDateButton = page.locator('//li[normalize-space()="Custom"]');
   21 |     this.monthDropdown = page.locator('//select[@title="Select month"]');
   22 |     this.checkboxAbnormal = page.locator('//input[@id="checkboxAbnormal"]');
   23 |     this.last3MonthsDropdownItem = page.locator('//li[normalize-space()="Last 3 Months"]');
   24 |     this.firstLabCardAbnormalLabel = page.getByText('Calcium SerPl-sCnc').first();
   25 |     this.noAbnormalLabel = page.locator('//span[normalize-space(text())="N/A"]');
   26 |     this.clearButton = page.locator('//a[normalize-space()="Clear"]');
   27 |
   28 |       //span[normalize-space(text())='N/A']
   29 |     // this.monthFilter = page.locator('//option[@value="1"]');
   30 |     // this.yearDropdown = page.locator('//select[@title="Select year"]');
   31 |     // this.yearFilter = page.locator('option[value="2024"]');
   32 |     // this.previousButton = page.locator('//button[@aria-label="Previous month"]');
   33 |     // this.nextButton = page.locator('//button[@title="Next month"]');
   34 |     this.monthDropdown = page.locator('//select[@title="Select month"]');
   35 |     this.monthOptions = page.locator('//select[@title="Select month"]/option');
   36 |     this.yearDropdown = page.locator('//select[@title="Select year"]');
   37 |     this.yearOptions = page.locator('//select[@title="Select year"]/option');
   38 |
   39 |     this.testnamesearchBox = page.getByRole('textbox', { name: 'ex. Triglycerides' });
   40 |     this.applyButton = page.getByRole('button', { name: 'Apply' });
   41 |     this.clearButton = page.getByText('Clear');
   42 |
   43 |
   44 |
   45 |
   46 |
   47 |     
   48 |   
   49 |   }
   50 |  
   51 |   
   52 |   async openlabsTab() {
   53 |     // Ensure the Claims tab is visible before clicking
   54 |     await this.labsTab.waitFor({ state: 'visible', timeout: 20000 });
   55 |     await this.labsTab.click();
   56 |
   57 |     // Optionally, wait for the page to load after clicking the Claims tab (if it redirects)
   58 |     await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });
   59 |
   60 |   }
   61 |   // Method to search for a physician by name
   62 |
   63 |
   64 |   async selectDateFilter(label) {
   65 |     const dateFilters = {
   66 |       '3 Months': 'LAST_3_MONTHSradio',
   67 |       '6 Months': 'LAST_6_MONTHSradio',
   68 |       '60 Months': 'LAST_60_MONTHSradio',
   69 |     };
   70 |
   71 |     const filterId = dateFilters[label];
   72 |     if (!filterId) {
   73 |       console.log(`Invalid filter label: ${label}`);
   74 |       return;
   75 |     }
   76 |
   77 |     await this.last36MonthsButton.click();
   78 |
   79 |     const radioOption = this.page.locator(`//input[@id='${filterId}']`);
>  80 |     await radioOption.waitFor({ state: 'visible', timeout: 5000 });
      |                       ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
   81 |     await radioOption.check();
   82 |
   83 |   }
   84 |
   85 |   async selectResultsPerPage(count) {
   86 |     await this.resultsPerPageDropdown.selectOption(count);
   87 |   }
   88 |
   89 |   async searchPhysician(name) {
   90 |     await this.physiciansearchinput.fill(name);
   91 |     await this.applyButton.click();
   92 |   }
   93 |
   94 |   async printPhysiciansOrMessage() {
   95 |     const physicians = await this.physicianNameLocator.all();
   96 |     if (physicians.length === 0) {
   97 |       console.log("No physician found");
   98 |     } else {
   99 |       for (const item of physicians) {
  100 |         const text = await item.textContent();
  101 |         console.log(`Physician: ${text?.trim()}`);
  102 |       }
  103 |     }
  104 |   }
  105 |
  106 |   async clearFilters() {
  107 |     await this.clearButton.click();
  108 |   }
  109 |
  110 |   async  searchphysicianinput() {
  111 |     const dataSet = [
  112 |       { label: '60 Months', Physician: 'scottDown' },
  113 |       { label: '3 Months', Physician: 'testdata' }
  114 |     ];
  115 |
  116 |     for (const { label, Physician } of dataSet) {
  117 |       console.log(`\n=== Filter: ${label} | Physician: ${Physician} ===`);
  118 |       await this.selectDateFilter(label);
  119 |       await this.selectResultsPerPage('100');
  120 |       await this.searchPhysician(Physician);
  121 |       await this.printPhysiciansOrMessage();
  122 |       await this.clearFilters();
  123 |     }
  124 |   }
  125 |
  126 |   // async searchPhysician(name) {
  127 |   //   await this.physiciansearchinput.click();
  128 |   //   await this.physiciansearchinput.fill(name);
  129 |   //   await this.applyButton.click();
  130 |   
  131 |   //   // Scroll down before asserting
  132 |   //   await this.page.mouse.wheel(0, 500);
  133 |   
  134 |   //   await expect(this.physician).toBeVisible();
  135 |   
  136 |   //   const physicianText = await this.physician.textContent();
  137 |   //   console.log('Physician Name Found:', physicianText.trim());
  138 |   // }
  139 |   
  140 |   // Method to search for a lab by name
  141 |
  142 |   async goToLabsAndSearch(labName) {
  143 |     // await this.labSearchInput.click();
  144 |     await this.labSearchInput.click({ force: true });
  145 |
  146 |     await this.labSearchInput.fill(labName);
  147 |     await this.applyButton.click();
  148 |
  149 |     const labResult = this.page.getByText(new RegExp(labName, 'i'));
  150 |
  151 |     await labResult.scrollIntoViewIfNeeded(); // scroll to element
  152 |     await expect(labResult).toBeVisible(); // assertion
  153 |
  154 |     // ✅ console log lab result text
  155 |     const labText = await labResult.textContent();
  156 |     console.log('✅ Found Lab Result:', labText?.trim());
  157 |
  158 |   }//li[normalize-space()='Last 3 Months']
  159 |
  160 |
  161 | // Method to filter by date range
  162 |
  163 |   async filterByDateRange() {
  164 |     await this.last36MonthsButton.click();
  165 |     console.log('🔍 Clicked on "Last 36 Months" button.');
  166 |   
  167 |     await this.last3MonthsOption.click();
  168 |     console.log('🔍 Selected "Last 3 Months" option.');
  169 |   
  170 |     // Wait for UI to reflect the date range change
  171 |     await this.dateRangeText.waitFor({ state: 'visible', timeout: 10000 });
  172 |   
  173 |     // Dynamically calculate the expected date range
  174 |     const endDate = new Date();
  175 |     const startDate = new Date();
  176 |     startDate.setMonth(startDate.getMonth() - 3);
  177 |   
  178 |     // Format date as MM-DD-YYYY
  179 |     const formatDate = (date) => {
  180 |       const mm = String(date.getMonth() + 1).padStart(2, '0');
```