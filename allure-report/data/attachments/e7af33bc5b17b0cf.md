# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:22:1

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Test timeout of 70000ms exceeded.
Call log:
  - waiting for getByText(/precision Labs/i)

    at LabsPage.goToLabsAndSearch (/home/karthi/pmp/src/pages/LabsPage.js:62:21)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:117:1
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
- textbox "ex. John Smith": scott down
- paragraph: Test Names
- textbox "ex. Triglycerides"
- paragraph: Lab Vendor
- textbox "ex. Life Labs": precision Labs
- paragraph: Filter by date of service range
- button "Last 36 Months"
- paragraph: Status
- checkbox "Checkbox for Abnormal"
- text: Abnormal
- button "Apply"
- text: Clear
- separator
- text: "Date Range: from 05-07-2022 to 05-07-2025 Show"
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
   8 |     this.page = page;
   9 |     this.labsTab = page.locator('#navLink-LABS');
   10 |     this.searchBox = page.getByRole('textbox', { name: 'ex. John Smith' });
   11 |     this.applyButton = page.getByRole('button', { name: 'Apply' });
   12 |     this.physician = page.locator('#physicianText328558');
   13 |     this.labSearchInput = page.getByRole('textbox', { name: 'ex. Life Labs' });
   14 |     this.applyButton = page.getByRole('button', { name: 'Apply' });
   15 |     this.last36MonthsButton = page.locator('//button[@id="dropdownDateFilterButton"]'); //first select the date range button
   16 |     this.last3MonthsOption = page.getByText('Last 3 Months');
   17 |     this.dateRangeText = page.locator('//div[@class="d-flex flex-wrap"]');
   18 |     this.noLabResultsText =page.getByText('No Lab Results to Show');
   19 |     this.customDateButton = page.locator('//li[normalize-space()="Custom"]');
   20 |     this.startDate = page.getByLabel('Thursday, May 1,').getByText('1');
   21 |     this.endDate = page.getByText('1', { exact: true }).nth(1);
   22 |
   23 |
   24 |
   25 |
   26 |
   27 |     
   28 |   
   29 |   }
   30 |  
   31 |   
   32 |   async openlabsTab() {
   33 |     // Ensure the Claims tab is visible before clicking
   34 |     await this.labsTab.waitFor({ state: 'visible', timeout: 20000 });
   35 |     await this.labsTab.click();
   36 |
   37 |     // Optionally, wait for the page to load after clicking the Claims tab (if it redirects)
   38 |     await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });
   39 |   }
   40 |
   41 |   async searchPhysician(name) {
   42 |     await this.searchBox.click();
   43 |     await this.searchBox.fill(name);
   44 |     await this.applyButton.click();
   45 |   
   46 |     // Scroll down before asserting
   47 |     await this.page.mouse.wheel(0, 500);
   48 |   
   49 |     await expect(this.physician).toBeVisible();
   50 |   
   51 |     const physicianText = await this.physician.textContent();
   52 |     console.log('Physician Name Found:', physicianText.trim());
   53 |   }
   54 |   
   55 |   async goToLabsAndSearch(labName) {
   56 |     await this.labSearchInput.click();
   57 |     await this.labSearchInput.fill(labName);
   58 |     await this.applyButton.click();
   59 |
   60 |     const labResult = this.page.getByText(new RegExp(labName, 'i'));
   61 |
>  62 |     await labResult.scrollIntoViewIfNeeded(); // scroll to element
      |                     ^ Error: locator.scrollIntoViewIfNeeded: Test timeout of 70000ms exceeded.
   63 |     await expect(labResult).toBeVisible(); // assertion
   64 |
   65 |     // ✅ console log lab result text
   66 |     const labText = await labResult.textContent();
   67 |     console.log('✅ Found Lab Result:', labText?.trim());
   68 |
   69 |   }
   70 |
   71 |
   72 |
   73 |
   74 |   async filterByDateRange() {
   75 |     await this.last36MonthsButton.click();
   76 |     console.log('🔍 Clicked on "Last 36 Months" button.');
   77 |   
   78 |     await this.last3MonthsOption.click();
   79 |     console.log('🔍 Selected "Last 3 Months" option.');
   80 |   
   81 |     // Wait for UI to reflect the date range change
   82 |     await this.dateRangeText.waitFor({ state: 'visible', timeout: 10000 });
   83 |   
   84 |     // Dynamically calculate the expected date range
   85 |     const endDate = new Date();
   86 |     const startDate = new Date();
   87 |     startDate.setMonth(startDate.getMonth() - 3);
   88 |   
   89 |     // Format date as MM-DD-YYYY
   90 |     const formatDate = (date) => {
   91 |       const mm = String(date.getMonth() + 1).padStart(2, '0');
   92 |       const dd = String(date.getDate()).padStart(2, '0');
   93 |       const yyyy = date.getFullYear();
   94 |       return `${mm}-${dd}-${yyyy}`;
   95 |     };
   96 |   
   97 |     const expectedStart = formatDate(startDate);
   98 |     const expectedEnd = formatDate(endDate);
   99 |   
  100 |     // Log the expected date range
  101 |     console.log(`🔍 Expected Date Range: from ${expectedStart} to ${expectedEnd}`);
  102 |   
  103 |     // Use a regex to ignore spacing or additional text issues
  104 |     const pattern = new RegExp(`Date Range:\\s*from\\s*${expectedStart}\\s*to\\s*${expectedEnd}`, 'i');
  105 |   
  106 |     // Assert the date range text
  107 |     await expect(this.dateRangeText).toHaveText(pattern, { timeout: 15000 });
  108 |     console.log('✅ Date range successfully validated.');
  109 |   
  110 |     // // Assert that "No Lab Results to Show" text is visible
  111 |     await expect(this.noLabResultsText).toBeVisible({ timeout: 10000 });
  112 |     console.log('✅ "No Lab Results to Show" is visible.');
  113 |   }
  114 |   
  115 |   // async applyCustomDateFilter() {
  116 |   //   await this.last36MonthsButton.click();
  117 |   //   await this.customDateButton.click();
  118 |   //   await this.startDate.click();
  119 |   //   await this.endDate.click();
  120 |   // }
  121 |
  122 |
  123 |
  124 |   async applyCustomDateFilter(startDay, endDay) {
  125 |     await this.last36MonthsButton.click();
  126 |     await this.customDateButton.click();
  127 |
  128 |     // Select start date dynamically
  129 |     const startDateLocator = this.page.locator(`//button[text()="${startDay}"]`).first();
  130 |     await startDateLocator.click();
  131 |
  132 |     // Select end date dynamically
  133 |     const endDateLocator = this.page.locator(`//button[text()="${endDay}"]`).nth(1);
  134 |     await endDateLocator.click();
  135 |   }
  136 | }
  137 |
  138 |
  139 |
  140 |
```