# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: locator.click: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('#navLink-LABS')
    - locator resolved to <a title="Labs" href="#/labs" id="navLink-LABS" aria-current="page" aria-expanded="true" _ngcontent-lvr-c113="" routerlinkactive="active" class="nav-link text-light rounded-2 d-flex flex-column align-items-center justify-content-center">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <modal-container role="dialog" tabindex="-1" aria-modal="true" class="modal fade">…</modal-container> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <modal-container role="dialog" tabindex="-1" aria-modal="true" class="modal fade show">…</modal-container> intercepts pointer events
    - retrying click action
      - waiting 100ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <modal-container role="dialog" tabindex="-1" aria-modal="true" class="modal fade show">…</modal-container> intercepts pointer events
    - retrying click action
      - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <modal-container role="dialog" tabindex="-1" aria-modal="true" class="modal fade">…</modal-container> intercepts pointer events
  - retrying click action
    - waiting 500ms

    at LabsPage.openlabsTab (/home/karthi/pmp/src/pages/LabsPage.js:55:24)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:175:1
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
- dialog:
  - document:
    - text: Alert
    - button "Close"
    - paragraph: "Something went wrong. Please contact customer support and provide them the following error message:"
    - paragraph: No Response
    - button "Close"
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
>  55 |     await this.labsTab.click();
      |                        ^ Error: locator.click: Test timeout of 70000ms exceeded.
   56 |
   57 |     // Optionally, wait for the page to load after clicking the Claims tab (if it redirects)
   58 |     await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });
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
   71 |   const filterId = dateFilters[label];
   72 |
   73 |   if (!filterId) {
   74 |     console.log(`Invalid filter label: ${label}`);
   75 |     return;
   76 |   }
   77 |
   78 |   // Open the dropdown
   79 |   await this.last36MonthsButton.click();
   80 |
   81 |   // Select the radio button based on the label
   82 |   const radioOption = this.page.locator(`//input[@id='${filterId}']`);
   83 |   await radioOption.waitFor({ state: 'visible', timeout: 5000 });
   84 |   await radioOption.check();
   85 | }
   86 |
   87 | async selectResultsPerPage(count) { 
   88 |   await this.resultsPerPageDropdown.selectOption(count);
   89 | }
   90 |
   91 | async searchPhysician(name) {
   92 |   await this.physiciansearchinput.fill(name);
   93 |   await this.applyButton.click();
   94 | }
   95 |
   96 | async printPhysiciansOrMessage() {
   97 |   const physicians = await this.physicianNameLocator.all();
   98 |
   99 |   if (physicians.length === 0) {
  100 |     console.log("No physician found");
  101 |   } else {
  102 |     for (const item of physicians) {
  103 |       const text = await item.textContent();
  104 |       console.log(`Physician: ${text?.trim()}`);
  105 |     }
  106 |   }
  107 | }
  108 |
  109 | async clearFilters() {
  110 |   await this.clearButton.click();
  111 | }
  112 |
  113 | async searchphysicianinput() {
  114 |   const dataSet = [
  115 |     { label: '60 Months', Physician: 'scottDown' },
  116 |     { label: '3 Months', Physician: 'testdata' }
  117 |   ];
  118 |
  119 |   for (const { label, Physician } of dataSet) {
  120 |     console.log(`\n=== Filter: ${label} | Physician: ${Physician} ===`);
  121 |     await this.selectDateFilter(label);
  122 |     await this.selectResultsPerPage('100');
  123 |     await this.searchPhysician(Physician);
  124 |     await this.printPhysiciansOrMessage();
  125 |     await this.clearFilters();
  126 |   }
  127 | }
  128 |
  129 |
  130 |   
  131 |
  132 |   // async searchPhysician(name) {
  133 |   //   await this.physiciansearchinput.click();
  134 |   //   await this.physiciansearchinput.fill(name);
  135 |   //   await this.applyButton.click();
  136 |   
  137 |   //   // Scroll down before asserting
  138 |   //   await this.page.mouse.wheel(0, 500);
  139 |   
  140 |   //   await expect(this.physician).toBeVisible();
  141 |   
  142 |   //   const physicianText = await this.physician.textContent();
  143 |   //   console.log('Physician Name Found:', physicianText.trim());
  144 |   // }
  145 |   
  146 |   // Method to search for a lab by name
  147 |
  148 |   async goToLabsAndSearch(labName) {
  149 |     // await this.labSearchInput.click();
  150 |     await this.labSearchInput.click({ force: true });
  151 |
  152 |     await this.labSearchInput.fill(labName);
  153 |     await this.applyButton.click();
  154 |
  155 |     const labResult = this.page.getByText(new RegExp(labName, 'i'));
```