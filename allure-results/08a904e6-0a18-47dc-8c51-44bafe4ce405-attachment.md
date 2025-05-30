# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('//input[@id=\'60 Months\']') to be visible

    at LabsPage.selectDateFilter (/home/karthi/pmp/src/pages/LabsPage.js:76:21)
    at LabsPage.searchphysicianinput (/home/karthi/pmp/src/pages/LabsPage.js:114:5)
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
- button "Last 36 Months"
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
   57 |     // Optionally, wait for the page to load after clicking the  tab (if it redirects)
   58 |     // await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });
   59 |
   60 |   }
   61 |
   62 |     async clearFilters()
   63 |     {
   64 |       await this.clearButton.click();
   65 |     }
   66 |   // Method to search for a physician by name
   67 |      
   68 |    // Assumes `dateFilters` is defined elsewhere in your code.
   69 |
   70 | async selectDateFilter(label) {
   71 |   // Open the dropdown
   72 |   await this.last36MonthsButton.click();
   73 |
   74 |   // Use label directly in locator if it matches the input ID
   75 |   const radioOption = this.page.locator(`//input[@id='${label}']`);
>  76 |   await radioOption.waitFor({ state: 'visible', timeout: 5000 });
      |                     ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
   77 |   await radioOption.check();
   78 | }
   79 |
   80 | async selectResultsPerPage(count) { 
   81 |   await this.resultsPerPageDropdown.selectOption(count);
   82 | }
   83 |
   84 | async searchPhysician(name) {
   85 |   await this.physiciansearchinput.fill(name);
   86 |   await this.applyButton.click();
   87 | }
   88 |
   89 | async printPhysiciansOrMessage() {
   90 |   const physicians = await this.physicianNameLocator.all();
   91 |
   92 |   if (physicians.length === 0) {
   93 |     console.log("No physician found");
   94 |   } else {
   95 |     for (const item of physicians) {
   96 |       const text = await item.textContent();
   97 |       console.log(`Physician: ${text?.trim()}`);
   98 |     }
   99 |   }
  100 | }
  101 |
  102 | async clearFilters() {
  103 |   await this.clearButton.click();
  104 | }
  105 |
  106 | async searchphysicianinput() {
  107 |   const dataSet = [
  108 |     { label: '60 Months', Physician: 'scottDown' },
  109 |     { label: '3 Months', Physician: 'testdata' }
  110 |   ];
  111 |
  112 |   for (const { label, Physician } of dataSet) {
  113 |     console.log(`\n=== Filter: ${label} | Physician: ${Physician} ===`);
  114 |     await this.selectDateFilter(label);
  115 |     await this.selectResultsPerPage('100');
  116 |     await this.searchPhysician(Physician);
  117 |     await this.printPhysiciansOrMessage();
  118 |     await this.clearFilters();
  119 |   }
  120 | }
  121 |
  122 |
  123 |   
  124 |
  125 |   // async searchPhysician(name) {
  126 |   //   await this.physiciansearchinput.click();
  127 |   //   await this.physiciansearchinput.fill(name);
  128 |   //   await this.applyButton.click();
  129 |   
  130 |   //   // Scroll down before asserting
  131 |   //   await this.page.mouse.wheel(0, 500);
  132 |   
  133 |   //   await expect(this.physician).toBeVisible();
  134 |   
  135 |   //   const physicianText = await this.physician.textContent();
  136 |   //   console.log('Physician Name Found:', physicianText.trim());
  137 |   // }
  138 |   
  139 |   // Method to search for a lab by name
  140 |
  141 |   async goToLabsAndSearch(labName) {
  142 |     // await this.labSearchInput.click();
  143 |     await this.labSearchInput.click({ force: true });
  144 |
  145 |     await this.labSearchInput.fill(labName);
  146 |     await this.applyButton.click();
  147 |
  148 |     const labResult = this.page.getByText(new RegExp(labName, 'i'));
  149 |
  150 |     await labResult.scrollIntoViewIfNeeded(); // scroll to element
  151 |     await expect(labResult).toBeVisible(); // assertion
  152 |
  153 |     // ✅ console log lab result text
  154 |     const labText = await labResult.textContent();
  155 |     console.log('✅ Found Lab Result:', labText?.trim());
  156 |
  157 |   }//li[normalize-space()='Last 3 Months']
  158 |
  159 |
  160 | // Method to filter by date range
  161 |
  162 |   async filterByDateRange() {
  163 |     await this.last36MonthsButton.click();
  164 |     console.log('🔍 Clicked on "Last 36 Months" button.');
  165 |   
  166 |     await this.last3MonthsOption.click();
  167 |     console.log('🔍 Selected "Last 3 Months" option.');
  168 |   
  169 |     // Wait for UI to reflect the date range change
  170 |     await this.dateRangeText.waitFor({ state: 'visible', timeout: 10000 });
  171 |   
  172 |     // Dynamically calculate the expected date range
  173 |     const endDate = new Date();
  174 |     const startDate = new Date();
  175 |     startDate.setMonth(startDate.getMonth() - 3);
  176 |   
```