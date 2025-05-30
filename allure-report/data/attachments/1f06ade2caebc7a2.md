# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:22:1

# Error details

```
Error: page.waitForEvent: Test ended.
=========================== logs ===========================
waiting for event "download"
============================================================
    at ClaimsPage.downloadSummaryPDF (/home/karthi/pmp/src/pages/ClaimsPage.js:130:17)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:96:14
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
```

# Test source

```ts
   30 |     this.applyButton = page.getByRole('button', { name: 'Apply' });
   31 |     this.clearButton = page.getByRole('button', { name: 'Clear' });
   32 |     this.noClaimsMessage = page.locator('#noInformation');
   33 |
   34 |     this.dateFilterButton1 = page.locator("//button[@id='dropdownDateFilterButton']"); 
   35 |
   36 |   //   this.customRadio = page.getByRole('radio', { name: 'Custom' });
   37 |   //   this.fromDate =  page.locator(`//div[contains(text(),'11')]`);
   38 |
   39 |   //   this.toDateButton = page.locator(`//div[contains(text(),'29')]`);  
   40 |   //   this.noResultsText = page.getByText('No matching results were');
   41 |
   42 |
   43 |   //
   44 |    // Adding new locators for custom date filter
   45 |    
   46 |    this.customRadio = page.getByRole('radio', { name: 'Custom' });
   47 |    this.fromDateInput = page.locator('#dpFromDateInput'); // Custom From Date Input
   48 |    this.toDateInput = page.locator('#dpToDateInput'); // Custom To Date Input
   49 |    this.noResultsText = page.getByText('No matching results were');
   50 |    this.doneButton = this.page.getByRole('button', { name: 'Done' });
   51 |    this.noResultsText = page.getByText('No matching results were');
   52 |
   53 |
   54 |    }
   55 |
   56 |
   57 |
   58 |
   59 |   // async filterLast60Months() {
   60 |   //   // ✅ Wait for loading to disappear before interacting
   61 |   //   await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
   62 |   
   63 |   //   // ✅ Now it's safe to interact
   64 |   //   // await this.claimsTab.waitFor({ state: 'visible', timeout: 10000 });
   65 |   //   // await this.claimsTab.click();
   66 |   
   67 |   //   await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
   68 |   //   await this.dateFilterButton.click();
   69 |   //   await this.last60MonthsRadio.check();
   70 |   //   await this.doneButton.click();
   71 |   // }
   72 |   
   73 |   async filterLast60Months() {
   74 |     // ✅ Wait for loading to disappear before interacting
   75 |     await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
   76 |
   77 |     // ✅ Interact with the filter UI
   78 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
   79 |     await this.dateFilterButton.click();
   80 |     await this.last60MonthsRadio.check();
   81 |     await this.doneButton.click();
   82 |
   83 |     // ✅ Wait for the filtered date range to appear
   84 |     await this.monthsdateverify.waitFor({ state: 'visible', timeout: 10000 });
   85 |
   86 |     // ✅ Get and print the date text, with check for no value
   87 |     const dateText = await this.monthsdateverify.textContent();
   88 |     
   89 |     if (dateText && dateText.trim() !== '') {
   90 |         console.log('Filtered Date:', dateText.trim());
   91 |     } else {
   92 |         console.log('No date found or displayed.');
   93 |     }
   94 | }
   95 |  
   96 |   async viewClaimDetails() {
   97 |     await this.claimDetails.waitFor({ state: 'visible', timeout: 10000 });
   98 |     await this.claimDetails.click();
   99 |     await this.returnButton.click();
  100 |   }
  101 |   async openClaimsTab() {
  102 |     // Ensure the Claims tab is visible before clicking
  103 |     await this.claimsTab.waitFor({ state: 'visible', timeout: 20000 });
  104 |     await this.claimsTab.click();
  105 |
  106 |     // Optionally, wait for the page to load after clicking the Claims tab (if it redirects)
  107 |     await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });
  108 |   }
  109 |  
  110 |   async filterByClaimNumber(claimNumber) {
  111 |     await this.claimNumberInput.fill(claimNumber);
  112 |     await this.applyButton.click();
  113 |     await this.page.waitForTimeout(2000); // Wait for result to appear
  114 |   }
  115 |
  116 |   // async openPrintView() {
  117 |   //   await this.openSummaryPrintTopBtn.click();
  118 |   //   await this.page.waitForTimeout(1000); // wait for print-ready content
  119 |   // }
  120 |
  121 |   // async downloadPDF(filePath = 'summary.pdf') {
  122 |   //   await this.page.pdf({
  123 |   //     path: filePath,
  124 |   //     format: 'A4',
  125 |   //     printBackground: true,
  126 |   //   });
  127 |   // }
  128 |   async downloadSummaryPDF(downloadPath = 'summary.pdf') {
  129 |     const [download] = await Promise.all([
> 130 |       this.page.waitForEvent('download'), // Wait for download event
      |                 ^ Error: page.waitForEvent: Test ended.
  131 |       this.openSummaryPrintTopBtn.click() // Trigger the print button click
  132 |     ]);
  133 |     await download.saveAs(downloadPath); // Save the downloaded file to the specified path
  134 |     console.log(`PDF downloaded to ${downloadPath}`);
  135 |   }
  136 |
  137 |   // async filterByClaimNumber(claimNumber) {
  138 |   //   await this.claimNumberInput.fill(claimNumber);
  139 |   //   await this.applyButton.click();
  140 |   //    // Optional: wait for 2 seconds after applying the filter
  141 |   
  142 |   //   // Wait for clear button to be visible before clicking
  143 |   //   await this.clearButton.waitFor({ state: 'visible', timeout: 10000 });
  144 |   //   await this.clearButton.click();
  145 |   
  146 |
  147 |   //   // await this.page.waitForTimeout(3000); // Optional: wait for 2 seconds after login
  148 |
  149 |   // }
  150 |   async filterByClaimNumber(claimNumber) {
  151 |     await this.claimNumberInput.fill(claimNumber);
  152 |     await this.applyButton.click();
  153 |
  154 |     // Check if "No claims" message is visible
  155 |     try {
  156 |       await this.noClaimsMessage.waitFor({ state: 'visible', timeout: 5000 });
  157 |       console.log('No claims displayed');
  158 |     } catch (error) {
  159 |       console.log('Claims found ');
  160 |     }
  161 |
  162 |     // Wait for and click clear button
  163 |     await this.clearButton.waitFor({ state: 'visible', timeout: 10000 });
  164 |     await this.clearButton.click();
  165 |   }
  166 |   
  167 |
  168 |   
  169 |   // async filterByCustomDateRange(fromDate, toDate) {
  170 |  
  171 |   // // Click the "Custom" radio button
  172 |   // await this.dateFilterButton1.waitFor({ state: 'visible', timeout: 10000 });
  173 |   // await this.dateFilterButton1.click();
  174 |
  175 |   // // Instead of check(), just click the "Custom" radio button
  176 |
  177 |   // // Select the "From" date
  178 |   // await this.fromDateInput.click();
  179 |   // await this.fromDateInput.fill(fromDate);
  180 |
  181 |   // // Select the "To" date
  182 |   // await this.toDateInput.click();
  183 |   // await this.toDateInput.fill(toDate);
  184 |
  185 |   // // Apply the date range filter
  186 |   // await this.doneButton.click();
  187 |   // // Fill the "From" date field
  188 |  
  189 |   // // Click the "Done" button
  190 |     
  191 |   // }
  192 |
  193 |   async filterByCustomDateRange(fromDate, toDate) {
  194 |     await this.dateFilterButton1.waitFor({ state: 'visible', timeout: 10000 });
  195 |     await this.dateFilterButton1.click();
  196 |   
  197 |     await this.fromDateInput.click();
  198 |     await this.fromDateInput.fill(fromDate);
  199 |   
  200 |     await this.toDateInput.click();
  201 |     await this.toDateInput.fill(toDate);
  202 |   
  203 |     await this.doneButton.click();
  204 |   
  205 |     await this.monthsdateverify.waitFor({ state: 'visible', timeout: 10000 });
  206 |   
  207 |     const dateText = await this.monthsdateverify.textContent();
  208 |     if (dateText && dateText.trim() !== '') {
  209 |       console.log(`Custom Date Range (${fromDate} to ${toDate}) Filtered Date:`, dateText.trim());
  210 |     } else {
  211 |       console.log(`No date displayed for custom range ${fromDate} to ${toDate}.`);
  212 |     }
  213 |   }
  214 |   
  215 |   
  216 |   // async verifyNoResults() {
  217 |   //   await expect(this.noResultsText).toBeVisible();
  218 |   // }
  219 |  }
  220 |
  221 |
  222 |
  223 |
  224 |
```