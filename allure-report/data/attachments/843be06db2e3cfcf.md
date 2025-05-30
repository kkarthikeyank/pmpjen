# Test info

- Name: Claims Page Tests >> Open Claims tab and filter last 60 months
- Location: /home/karthi/pmp/src/tests/claimspagegroup.spec.js:16:5

# Error details

```
TimeoutError: page.waitForNavigation: Timeout 20000ms exceeded.
=========================== logs ===========================
waiting for navigation until "domcontentloaded"
============================================================
    at ClaimsPage.openClaimsTab (/home/karthi/pmp/src/pages/ClaimsPage.js:78:21)
    at /home/karthi/pmp/src/tests/claimspagegroup.spec.js:23:9
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
- button "04-25-2020 - 04-25-2025"
- button "Apply"
- button "Clear"
- text: "Date range: from 04-25-2020 to 04-25-2025"
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
- paragraph: "144114"
- paragraph: Date of Service
- paragraph: From 01-01-2024 to 01-03-2024
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
- paragraph: "144115"
- paragraph: Date of Service
- paragraph: From 01-06-2024 to 01-10-2024
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
```

# Test source

```ts
   1 |
   2 |
   3 | // pages/ClaimsPage.js
   4 | export class ClaimsPage {
   5 |   constructor(page) {
   6 |     
   7 |     this.page = page;
   8 |     this.claimsTab = this.page.locator('#navLink-CLAIMS');
   9 |
   10 |
   11 |     // this.claimsTab = page .locator('#navLink-CLAIMS');
   12 |     // this.dateFilterButton = page.locator("//button[@id='dropdownDateFilterButton']"); //div[contains(text(),'Claims')]
   13 |     // const dateFilterButton = page.locator('#dropdownDateFilterButton');
   14 |     this . dateFilterButton = page.locator("//button[@id='dropdownDateFilterButton']"); 
   15 |
   16 | //button[@id='dropdownDateFilterButton']
   17 |     // this.last60MonthsRadio = page.getByRole('radio', { name: 'Last 60 Months' });
   18 |     this.last60MonthsRadio = page.locator("//input[@id='LAST_60_MONTHSradio']"); 
   19 |
   20 |     this.doneButton = page.getByRole('button', { name: 'Done' });
   21 |     this.claimDetails = page.locator('#viewDetails144111');
   22 |     this.returnButton = page.getByText('Return to previous page');
   23 |     this.claimNumberInput = page.getByRole('textbox', { name: 'Claim Number' });
   24 |     this.applyButton = page.getByRole('button', { name: 'Apply' });
   25 |     this.clearButton = page.getByRole('button', { name: 'Clear' });
   26 |
   27 |     this.dateFilterButton1 = page.locator("//button[@id='dropdownDateFilterButton']"); 
   28 |
   29 |   //   this.customRadio = page.getByRole('radio', { name: 'Custom' });
   30 |   //   this.fromDate =  page.locator(`//div[contains(text(),'11')]`);
   31 |
   32 |   //   this.toDateButton = page.locator(`//div[contains(text(),'29')]`);  
   33 |   //   this.noResultsText = page.getByText('No matching results were');
   34 |
   35 |
   36 |   //
   37 |    // Adding new locators for custom date filter
   38 |    
   39 |    this.customRadio = page.getByRole('radio', { name: 'Custom' });
   40 |    this.fromDateInput = page.locator('#dpFromDateInput'); // Custom From Date Input
   41 |    this.toDateInput = page.locator('#dpToDateInput'); // Custom To Date Input
   42 |    this.noResultsText = page.getByText('No matching results were');
   43 |    this.doneButton = this.page.getByRole('button', { name: 'Done' });
   44 |    this.noResultsText = page.getByText('No matching results were');
   45 |
   46 |
   47 |    }
   48 |
   49 |
   50 |
   51 |
   52 |   async filterLast60Months() {
   53 |     // ✅ Wait for loading to disappear before interacting
   54 |     await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
   55 |   
   56 |     // ✅ Now it's safe to interact
   57 |     // await this.claimsTab.waitFor({ state: 'visible', timeout: 10000 });
   58 |     // await this.claimsTab.click();
   59 |   
   60 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
   61 |     await this.dateFilterButton.click();
   62 |     await this.last60MonthsRadio.check();
   63 |     await this.doneButton.click();
   64 |   }
   65 |   
   66 |  
   67 |   async viewClaimDetails() {
   68 |     await this.claimDetails.waitFor({ state: 'visible', timeout: 10000 });
   69 |     await this.claimDetails.click();
   70 |     await this.returnButton.click();
   71 |   }
   72 |   async openClaimsTab() {
   73 |     // Ensure the Claims tab is visible before clicking
   74 |     await this.claimsTab.waitFor({ state: 'visible', timeout: 20000 });
   75 |     await this.claimsTab.click();
   76 |
   77 |     // Optionally, wait for the page to load after clicking the Claims tab (if it redirects)
>  78 |     await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });
      |                     ^ TimeoutError: page.waitForNavigation: Timeout 20000ms exceeded.
   79 |   }
   80 |
   81 |
   82 |   async filterByClaimNumber(claimNumber) {
   83 |     await this.claimNumberInput.fill(claimNumber);
   84 |     await this.applyButton.click();
   85 |      // Optional: wait for 2 seconds after applying the filter
   86 |   
   87 |     // Wait for clear button to be visible before clicking
   88 |     await this.clearButton.waitFor({ state: 'visible', timeout: 10000 });
   89 |     await this.clearButton.click();
   90 |   
   91 |
   92 |     // await this.page.waitForTimeout(3000); // Optional: wait for 2 seconds after login
   93 |
   94 |   }
   95 |   
   96 |
   97 |   
   98 |   async filterByCustomDateRange(fromDate, toDate) {
   99 |  
  100 |   // Click the "Custom" radio button
  101 |   await this.dateFilterButton1.waitFor({ state: 'visible', timeout: 10000 });
  102 |   await this.dateFilterButton1.click();
  103 |
  104 |   // Instead of check(), just click the "Custom" radio button
  105 |
  106 |   // Select the "From" date
  107 |   await this.fromDateInput.click();
  108 |   await this.fromDateInput.fill(fromDate);
  109 |
  110 |   // Select the "To" date
  111 |   await this.toDateInput.click();
  112 |   await this.toDateInput.fill(toDate);
  113 |
  114 |   // Apply the date range filter
  115 |   await this.doneButton.click();
  116 |   // Fill the "From" date field
  117 |  
  118 |   // Click the "Done" button
  119 |     
  120 |   }
  121 |   
  122 |   
  123 |   // async verifyNoResults() {
  124 |   //   await expect(this.noResultsText).toBeVisible();
  125 |   // }
  126 |  }
  127 |
  128 |
  129 |
  130 |
  131 |
```