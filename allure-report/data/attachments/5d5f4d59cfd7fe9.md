# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:21:1

# Error details

```
TimeoutError: page.waitForEvent: Timeout 10000ms exceeded while waiting for event "download"
=========================== logs ===========================
waiting for event "download"
============================================================
    at ClaimsPage.downloadSummaryPDF (/home/karthi/pmp/src/pages/ClaimsPage.js:84:17)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:92:14
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
   19 |     this.openSummaryPrintTopBtn = page.locator('#openSummaryPrintTopBtn');
   20 |
   21 |     this.doneButton = page.getByRole('button', { name: 'Done' });
   22 |     this.claimDetails = page.locator('#viewDetails144111');
   23 |     this.returnButton = page.getByText('Return to previous page');
   24 |     this.claimNumberInput = page.getByRole('textbox', { name: 'Claim Number' });
   25 |     this.applyButton = page.getByRole('button', { name: 'Apply' });
   26 |     this.clearButton = page.getByRole('button', { name: 'Clear' });
   27 |     this.noClaimsMessage = page.locator('#noInformation');
   28 |
   29 |     this.dateFilterButton1 = page.locator("//button[@id='dropdownDateFilterButton']"); 
   30 |
   31 |   //   this.customRadio = page.getByRole('radio', { name: 'Custom' });
   32 |   //   this.fromDate =  page.locator(`//div[contains(text(),'11')]`);
   33 |
   34 |   //   this.toDateButton = page.locator(`//div[contains(text(),'29')]`);  
   35 |   //   this.noResultsText = page.getByText('No matching results were');
   36 |
   37 |
   38 |   //
   39 |    // Adding new locators for custom date filter
   40 |    
   41 |    this.customRadio = page.getByRole('radio', { name: 'Custom' });
   42 |    this.fromDateInput = page.locator('#dpFromDateInput'); // Custom From Date Input
   43 |    this.toDateInput = page.locator('#dpToDateInput'); // Custom To Date Input
   44 |    this.noResultsText = page.getByText('No matching results were');
   45 |    this.doneButton = this.page.getByRole('button', { name: 'Done' });
   46 |    this.noResultsText = page.getByText('No matching results were');
   47 |
   48 |
   49 |    }
   50 |
   51 |
   52 |
   53 |
   54 |   async filterLast60Months() {
   55 |     // ✅ Wait for loading to disappear before interacting
   56 |     await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
   57 |   
   58 |     // ✅ Now it's safe to interact
   59 |     // await this.claimsTab.waitFor({ state: 'visible', timeout: 10000 });
   60 |     // await this.claimsTab.click();
   61 |   
   62 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
   63 |     await this.dateFilterButton.click();
   64 |     await this.last60MonthsRadio.check();
   65 |     await this.doneButton.click();
   66 |   }
   67 |   
   68 |  
   69 |   async viewClaimDetails() {
   70 |     await this.claimDetails.waitFor({ state: 'visible', timeout: 10000 });
   71 |     await this.claimDetails.click();
   72 |     await this.returnButton.click();
   73 |   }
   74 |   async openClaimsTab() {
   75 |     // Ensure the Claims tab is visible before clicking
   76 |     await this.claimsTab.waitFor({ state: 'visible', timeout: 20000 });
   77 |     await this.claimsTab.click();
   78 |
   79 |     // Optionally, wait for the page to load after clicking the Claims tab (if it redirects)
   80 |     await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });
   81 |   }
   82 |   async downloadSummaryPDF(savePath = './downloads') {
   83 |     const [download] = await Promise.all([
>  84 |       this.page.waitForEvent('download'),
      |                 ^ TimeoutError: page.waitForEvent: Timeout 10000ms exceeded while waiting for event "download"
   85 |       this.openSummaryPrintTopBtn.click(),
   86 |     ]);
   87 |     const filePath = `${savePath}/${download.suggestedFilename()}`;
   88 |     await download.saveAs(filePath);
   89 |     console.log(`Downloaded to: ${filePath}`);
   90 |   }
   91 |
   92 |   // async filterByClaimNumber(claimNumber) {
   93 |   //   await this.claimNumberInput.fill(claimNumber);
   94 |   //   await this.applyButton.click();
   95 |   //    // Optional: wait for 2 seconds after applying the filter
   96 |   
   97 |   //   // Wait for clear button to be visible before clicking
   98 |   //   await this.clearButton.waitFor({ state: 'visible', timeout: 10000 });
   99 |   //   await this.clearButton.click();
  100 |   
  101 |
  102 |   //   // await this.page.waitForTimeout(3000); // Optional: wait for 2 seconds after login
  103 |
  104 |   // }
  105 |   async filterByClaimNumber(claimNumber) {
  106 |     await this.claimNumberInput.fill(claimNumber);
  107 |     await this.applyButton.click();
  108 |
  109 |     // Check if "No claims" message is visible
  110 |     try {
  111 |       await this.noClaimsMessage.waitFor({ state: 'visible', timeout: 5000 });
  112 |       console.log('No claims displayed');
  113 |     } catch (error) {
  114 |       console.log('Claims found ');
  115 |     }
  116 |
  117 |     // Wait for and click clear button
  118 |     await this.clearButton.waitFor({ state: 'visible', timeout: 10000 });
  119 |     await this.clearButton.click();
  120 |   }
  121 |   
  122 |
  123 |   
  124 |   async filterByCustomDateRange(fromDate, toDate) {
  125 |  
  126 |   // Click the "Custom" radio button
  127 |   await this.dateFilterButton1.waitFor({ state: 'visible', timeout: 10000 });
  128 |   await this.dateFilterButton1.click();
  129 |
  130 |   // Instead of check(), just click the "Custom" radio button
  131 |
  132 |   // Select the "From" date
  133 |   await this.fromDateInput.click();
  134 |   await this.fromDateInput.fill(fromDate);
  135 |
  136 |   // Select the "To" date
  137 |   await this.toDateInput.click();
  138 |   await this.toDateInput.fill(toDate);
  139 |
  140 |   // Apply the date range filter
  141 |   await this.doneButton.click();
  142 |   // Fill the "From" date field
  143 |  
  144 |   // Click the "Done" button
  145 |     
  146 |   }
  147 |   
  148 |   
  149 |   // async verifyNoResults() {
  150 |   //   await expect(this.noResultsText).toBeVisible();
  151 |   // }
  152 |  }
  153 |
  154 |
  155 |
  156 |
  157 |
```