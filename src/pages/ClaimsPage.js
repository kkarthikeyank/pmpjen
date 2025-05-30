import { expect } from '@playwright/test';

// pages/ClaimsPage.js


export class ClaimsPage {
  constructor(page) {

    this.page = page;
    this.claimsTab = this.page.locator('#navLink-CLAIMS');

    let id = 'dropdownDateFilterButton';
    this.dateFilterButton = page.locator(`//button[@id='${id}']`);
    this.claimNumberLocator = page.locator("//p[@data-id='claimsCardClaimNumber']");

    // this.dateFilterButton = page.locator("//button[@id='dropdownDateFilterButton']"); //div[contains(text(),'Claims')]
    // const dateFilterButton = page.locator('#dropdownDateFilterButton');
    // this . dateFilterButton = page.locator("//button[@id='dropdownDateFilterButton']"); 
    // this.openSummaryPrintTopBtn = page.locator('#openSummaryPrintTopBtn');
    // this.printPreviewContainer = page.locator('#printPreviewContent'); // Update this to your actual selector



    // this.last60MonthsRadio = page.getByRole('radio', { name: 'Last 60 Months' });
    this.last60MonthsRadio = page.locator("//input[@id='LAST_60_MONTHSradio']"); 
    this.filterResultsButton = page.locator("//span[normalize-space()='Filter Results']"); // Button to open filter panel
        this .filterresultButtondisabled = page.locator('button:has-text("Filter Results"):disabled');

    this.applyFiltersButton = page.locator("//button[@id='applyFilterClaims']"); // Button to apply filters
    this.clearFiltersButton = page.locator("#claimsClearFilter");
    this.applyClearButton = page.getByLabel('Filter Results').getByText('Apply Clear');
    this.closeButton = page.getByRole('button', { name: 'Close' });
    this.selectedpayee = page.locator("//div[normalize-space()='Integra Partners Llc']");
    this.selectedprovider = page.locator("//div[normalize-space()='Nicole Koepke']");
    this.monthsdateverify = page.locator("//div[@class='flex-fill']");

    //button[@id='applyFilterClaims']
    this.doneButton = page.getByRole('button', { name: 'Done' });

    this.viewDetailsButton = page.locator("//button[@tabindex='0' and text()=' View Details ']"); // Button to open claim details
    this.totalclaimbill = page.locator("total_claim_charge_billedtext");
    this.returnButton = page.getByText('Return to previous page');
    this.claimNumberInput = page.getByRole('textbox', { name: 'Claim Number' });
    this.applyButton = page.getByRole('button', { name: 'Apply' });
    this.clearButton = page.getByRole('button', { name: 'Clear' });
    this.noClaimsMessage = page.locator('#noInformation');


    this.dateFilterButton1 = page.locator("//button[@id='dropdownDateFilterButton']");

    //   this.customRadio = page.getByRole('radio', { name: 'Custom' });
    //   this.fromDate =  page.locator(`//div[contains(text(),'11')]`);

    //   this.toDateButton = page.locator(`//div[contains(text(),'29')]`);  
    //   this.noResultsText = page.getByText('No matching results were');


    //
    // Adding new locators for custom date filter

    this.customRadio = page.getByRole('radio', { name: 'Custom' });
    this.fromDateInput = page.locator('#dpFromDateInput'); // Custom From Date Input
    this.toDateInput = page.locator('#dpToDateInput'); // Custom To Date Input
    this.noResultsText = page.getByText('No matching results were');
    //  this.doneButton = this.page.getByRole('button', { name: 'Done' });
    this.noResultsText = page.getByText('No matching results were');
    this.providerBlocks = page.locator('form-check-input me-2'); // All provider blocks
      this.providerResults = page.locator("//p[@data-id='claimsCardPhysicianText']");
    this.payeeResults = page.locator("//p[@data-id='claimsCardLabVendorText']");


  }



  // open claims tab
  async openClaimsTab() {
    // Ensure the Claims tab is visible before clicking
    await this.claimsTab.waitFor({ state: 'visible', timeout: 20000 });
    await this.claimsTab.click();

    // Optionally, wait for the page to load after clicking the Claims tab (if it redirects)
    await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });
  }


  //  scenario filter result provider and payee , diagnosis check and uncheck 


async filterByDateRange(dateRange) {
  await this.dateFilterButton.click();
  await this.page.getByText(dateRange).click();
  await this.doneButton.click();

  try {
    await this.filterResultsButton.waitFor({ state: 'visible', timeout: 30000 });
    if (await this.filterResultsButton.isEnabled()) {
      await this.filterResultsButton.click();
      return true; // success
    } else {
      console.warn(`[WARN] Filter results button is visible but not enabled for ${dateRange}`);
      return false; // fail
    }
  } catch (error) {
    console.warn(`[WARN] Filter results button not visible for ${dateRange}, skipping further steps.`);
    return false; // fail
  }
}



async _checkCheckboxByLabel(labelText) {
  const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${labelText}")]/preceding-sibling::div//input[@type='checkbox']`;
  try {
    const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`, { timeout: 5000 });
    const isChecked = await checkbox.isChecked();
    if (!isChecked) {
      await checkbox.check();
      console.log(`[INFO] Checked: ${labelText}`);
    } else {
      console.log(`[INFO] Already checked: ${labelText}`);
    }
    return true;
  } catch {
    console.log(`[WARN] Not found: ${labelText}`);
    return false;
  }
}

async applyFilters(filters) {
  let anyApplied = false;

  for (const group of ['providers', 'payees', 'diagnoses']) {
    if (filters[group]?.length > 0) {
      for (const item of filters[group]) {
        const result = await this._checkCheckboxByLabel(item);
        if (result) anyApplied = true;
      }
    }
  }

  if (anyApplied) {
    await this.applyFiltersButton.click();
    await this.page.waitForTimeout(1000); // Wait for results to render
    console.log('[INFO] Filters applied');
  } else {
    console.log('[WARN] No filters selected — skipping apply');
  }

  await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  console.log('[INFO] Page scrolled to bottom');

  await this.filterResultsButton.waitFor({ state: 'visible' });
  await this.page.waitForTimeout(1000);
  await this.filterResultsButton.click();
}

async printResults() {
  const providerCount = await this.providerResults.count();
  if (providerCount === 0) {
    console.log('[INFO] No providers found');
  } else {
    for (let i = 0; i < providerCount; i++) {
      const name = await this.providerResults.nth(i).innerText();
      console.log(`[PROVIDER ${i + 1}]: ${name}`);
    }
  }

  const payeeCount = await this.payeeResults.count();
  if (payeeCount === 0) {
    console.log('[INFO] No payees found');
  } else {
    for (let i = 0; i < payeeCount; i++) {
      const name = await this.payeeResults.nth(i).innerText();
      console.log(`[PAYEE ${i + 1}]: ${name}`);
    }
  }
}

async uncheckFilters(filters) {
  const tryUncheck = async (label, name) => {
    const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${name}")]/preceding-sibling::div//input[@type='checkbox']`;
    const checkboxLocator = this.page.locator(`xpath=${checkboxXPath}`);

    const isVisible = await checkboxLocator.isVisible().catch(() => false);
    if (!isVisible) {
      console.warn(`[WARN] ${label} not found: ${name}`);
      return;
    }

    const isChecked = await checkboxLocator.isChecked();
    if (isChecked) {
      await checkboxLocator.uncheck();
      console.log(`[INFO] Unchecked ${label}: ${name}`);
    } else {
      console.log(`[DEBUG] ${label} not checked: ${name}`);
    }
  };

  for (const name of filters.providers || []) {
    await tryUncheck('provider', name);
  }

  for (const name of filters.payees || []) {
    await tryUncheck('payee', name);
  }

  for (const name of filters.diagnoses || []) {
    await tryUncheck('diagnosis', name);
  }

  await this.applyFiltersButton.click();
  console.log('[INFO] Unchecked filters applied');
  await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  console.log('[INFO] Page scrolled to bottom');
}




//    async filterByDateRange(dateRange) {
//   await this.dateFilterButton.click();
//   await this.page.getByText(dateRange).click();
//   await this.doneButton.click();
//   await this.filterResultsButton.waitFor({ state: 'visible', timeout: 30000 });
//   await this.filterResultsButton.click();
//   // console.log(`[INFO] Filter applied: ${dateRange}`);
// }

// async _checkCheckboxByLabel(labelText) {
//   const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${labelText}")]/preceding-sibling::div//input[@type='checkbox']`;
//   try {
//     const checkbox = await this.page.waitForSelector(`xpath=${checkboxXPath}`, { timeout: 5000 });
//     const isChecked = await checkbox.isChecked();
//     if (!isChecked) {
//       await checkbox.check();
//       console.log(`[INFO] Checked: ${labelText}`);
//     } else {
//       console.log(`[INFO] Already checked: ${labelText}`);
//     }
//     return true;
//   } catch {
//     console.log(`[WARN] Not found: ${labelText}`);
//     return false;
//   }
// }

// async applyFilters(filters) {
//   let anyApplied = false;

//   for (const group of ['providers', 'payees', 'diagnoses']) {
//     if (filters[group]?.length > 0) {
//       for (const item of filters[group]) {
//         const result = await this._checkCheckboxByLabel(item);
//         if (result) anyApplied = true;
//       }
//     }
//   }

//   if (anyApplied) {
//     await this.applyFiltersButton.click();
//     await this.page.waitForTimeout(1000); // Wait for results to render
//     console.log('[INFO] Filters applied');
//   } else {
//     console.log('[WARN] No filters selected — skipping apply');
//   }

//   await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
//   console.log('[INFO] Page scrolled to bottom');

//   await this.filterResultsButton.waitFor({ state: 'visible' });
//   await this.page.waitForTimeout(1000);
//   await this.filterResultsButton.click();
// }

// async printResults() {
//   const providerCount = await this.providerResults.count();
//   if (providerCount === 0) {
//     console.log('[INFO] No providers found');
//   } else {
//     for (let i = 0; i < providerCount; i++) {
//       const name = await this.providerResults.nth(i).innerText();
//       console.log(`[PROVIDER ${i + 1}]: ${name}`);
//     }
//   }

//   const payeeCount = await this.payeeResults.count();
//   if (payeeCount === 0) {
//     console.log('[INFO] No payees found');
//   } else {
//     for (let i = 0; i < payeeCount; i++) {
//       const name = await this.payeeResults.nth(i).innerText();
//       console.log(`[PAYEE ${i + 1}]: ${name}`);
//     }
//   }
// }

// async uncheckFilters(filters) {
//   const tryUncheck = async (label, name) => {
//     const checkboxXPath = `//div[contains(@class, 'form-check')]//div[contains(text(), "${name}")]/preceding-sibling::div//input[@type='checkbox']`;
//     const checkboxLocator = this.page.locator(`xpath=${checkboxXPath}`);

//     const isVisible = await checkboxLocator.isVisible().catch(() => false);
//     if (!isVisible) {
//       console.warn(`[WARN] ${label} not found: ${name}`);
//       return;
//     }

//     const isChecked = await checkboxLocator.isChecked();
//     if (isChecked) {
//       await checkboxLocator.uncheck();
//       console.log(`[INFO] Unchecked ${label}: ${name}`);
//     } else {
//       console.log(`[DEBUG] ${label} not checked: ${name}`);
//     }
//   };

//   for (const name of filters.providers || []) {
//     await tryUncheck('provider', name);
//   }

//   for (const name of filters.payees || []) {
//     await tryUncheck('payee', name);
//   }

//   for (const name of filters.diagnoses || []) {
//     await tryUncheck('diagnosis', name);
//   }

//   await this.applyFiltersButton.click();
//   console.log('[INFO] Unchecked filters applied');
//   await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
//   console.log('[INFO] Page scrolled to bottom');
// }


  



  


  //  scenario Filter by date range and print claims

  async filterAndPrintClaimsByLabel(label) {
    const dateFilters = {
      '3 Months': 'LAST_3_MONTHSradio',
      '6 Months': 'LAST_6_MONTHSradio',
      '60 Months': 'LAST_60_MONTHSradio',
    };

    const filterId = dateFilters[label];
    if (!filterId) {
      console.log(`Invalid filter label: ${label}`);
      return;
    }

    console.log(`Filtering by: ${label}`);
    await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });

    await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.dateFilterButton.click();

    const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
    await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
    await radioLocator.check();

    await this.doneButton.click();

    await this.page.waitForTimeout(3000); // Replace with smarter wait if needed

    const claims = await this.claimNumberLocator.all();
    if (claims.length === 0) {
      console.log("No claims found");
    } else {
      console.log(`Claims found for ${label}:`);
      for (const claim of claims) {
        const text = await claim.textContent();
        console.log(`Claim Number: ${text?.trim()}`);
      }
    }


  }  

  

  // senario  search by claim number with date range filter 

  async searchclaimnumber(label, claimNumber) {

    const dateFilters = {
      '3 Months': 'LAST_3_MONTHSradio',
      '6 Months': 'LAST_6_MONTHSradio',
      '60 Months': 'LAST_60_MONTHSradio',
    };

    const cleanLabel = label.trim();
    const filterId = dateFilters[cleanLabel];

    if (!filterId) {
      console.log(`❌ Invalid filter label: ${label}`);
      return;
    }

    console.log(`→ Filtering by: ${cleanLabel}`);

    await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });

    await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.dateFilterButton.click();

    const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
    await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
    await radioLocator.check();

    await this.doneButton.click();

    // Search by claim number
    console.log(`→ Searching for Claim Number: ${claimNumber}`);
    await this.claimNumberInput.waitFor({ state: 'visible', timeout: 5000 });
    await this.claimNumberInput.click();
    await this.claimNumberInput.fill('');
    await this.claimNumberInput.fill(claimNumber);
    await this.applyButton.click();

    await this.page.waitForTimeout(3000);

    const claims = await this.claimNumberLocator.all();
    if (claims.length === 0) {
      console.log(`❌ No claims found for ${cleanLabel}: ${claimNumber}`);
    } else {
      console.log(`✅ Claims found for ${cleanLabel}: ${claimNumber}`);
      for (const claim of claims) {
        const text = await claim.textContent();
        console.log(`→ Claim Number: ${text?.trim()}`);
      }
    }

    await this.clearButton.click();

  }

  // scenario  Filter by custom date range and print claims

 
  async filterByCustomDateRangeAndPrintClaims(fromDate, toDate) {
    console.log(`→ Applying custom date range: ${fromDate} to ${toDate}`);

    await this.dateFilterButton.waitFor({ state: 'visible', timeout: 20000 });
    await this.dateFilterButton.click();
    await this.fromDateInput.fill(fromDate);
    await this.toDateInput.fill(toDate);
    await this.doneButton.click();

    await this.monthsdateverify.waitFor({ state: 'visible', timeout: 50000 });

    const dateText = await this.monthsdateverify.textContent();
    if (dateText?.trim()) {
      console.log(`✅ Date filter applied: ${dateText.trim()}`);
    }

    const claims = await this.viewDetailsButton.all(); // get all claim buttons
    const claimCount = claims.length;

    if (claimCount === 0) {
      console.log(`❌ No claims found for range ${fromDate} to ${toDate}`);
      return;
    }

    console.log(`✅ Claims found for range ${fromDate} to ${toDate}:`);
    console.log(`→ Number of claim elements: ${claimCount}`);

    for (let i = 0; i < claimCount; i++) {
      await this.openClaimDirectly(claims[i], i + 1);
    }

    // Clear filters after viewing all claims
    await this.clearButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.clearButton.click();
    console.log(`🧹 Cleared filters after viewing all claims.`);
  }

  async openClaimDirectly(claimLocator, claimIndex) {
    console.log(`→ Opening claim ${claimIndex}...`);

    try {
      await claimLocator.waitFor({ state: 'visible', timeout: 10000 });
      await claimLocator.click();
    } catch (e) {
      console.error(`❌ Could not open claim ${claimIndex}`);
      return;
    }

    try {
      await this.page.waitForSelector('text=Claim Details', { timeout: 30000 });
      console.log(`✅ Claim ${claimIndex} details page opened.`);
    } catch (e) {
      console.error(`❌ Claim ${claimIndex} details did not load in time.`);
      return;
    }

    await this.returnButton.waitFor({ state: 'visible', timeout: 30000 });
    await this.returnButton.click();
    console.log(`↩️ Returned to previous page after Claim ${claimIndex}.`);

    await this.page.waitForLoadState('networkidle');
  }


//   async filterByCustomDateRangeAndPrintClaims(fromDate, toDate) {
//     console.log(`→ Applying custom date range: ${fromDate} to ${toDate}`);

//     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 50000 });
//     await this.dateFilterButton.click();
//     await this.fromDateInput.fill(fromDate);
//     await this.toDateInput.fill(toDate);
//     await this.doneButton.click();

//     await this.monthsdateverify.waitFor({ state: 'visible', timeout: 50000 });

//     const dateText = await this.monthsdateverify.textContent();
//     if (dateText?.trim()) {
//       console.log(`✅ Date filter applied: ${dateText.trim()}`);
//     }

//     const claims = await this.claimNumberLocator.all();
//     if (claims.length === 0) {
//       console.log(`❌ No claims found for range ${fromDate} to ${toDate}`);
//     } else {
//       console.log(`✅ Claims found for range ${fromDate} to ${toDate}:`);

//       for (let i = 0; i < claims.length; i++) {
//   const claim = claims[i];
//   const count = await this.page.locator('//p[@data-id="claimsCardClaimNumber"]').count();
//   console.log(`→ Number of claim elements: ${count}`);

// }

//       // for (let i = 0; i < claims.length; i++) {
//       //   const claim = claims[i];
//       //   // const text = await claim.textContent();
//       //   // console.log(`→ Claim Number: ${text?.trim()}`);

//       //   const count = await this.page.locator('//p[@data-id="claimsCardClaimNumber"]').count();
//       //   console.log(`→ Number of claim elements: ${count}`);

//       //   await this.openClaimAndReturn(i + 1);
//       // }
//     }
//   }

//  async openClaimAndReturn(claimIndex) {
//   if (claimIndex <= 0) {
//     console.log(`❌ No claims available to open.`);
//     return;
//   }

//   console.log(`→ Opening claim ${claimIndex}...`);

//   const claimDetailButton = this.viewDetailsButton.nth(claimIndex - 1);

//   // await claimDetailButton.scrollIntoViewIfNeeded();
//   await claimDetailButton.waitFor({ state: 'visible', timeout: 10000 });
//   await claimDetailButton.click();

//   // Wait for navigation or content update
//   try {
//     await this.page.waitForSelector('text=Claim Details', { timeout: 30000 });
//     console.log(`✅ Claim ${claimIndex} details page opened.`);
//   } catch (e) {
//     console.error(`❌ Timed out waiting for Claim ${claimIndex} details to load.`);
//     return;
//   }

//   await this.returnButton.waitFor({ state: 'visible', timeout: 30000 });
//   await this.returnButton.click();
//   console.log(`↩️ Returned to previous page after Claim ${claimIndex}.`);

//   // Optional: Ensure return completes before clicking clear
//   await this.page.waitForLoadState('networkidle');
//   await this.clearButton.waitFor({ state: 'visible', timeout: 10000 });
//   await this.clearButton.click();
// }


  // async waitForContentToLoad() { work
  //   await this.page.waitForSelector('#openSummaryPrintTopBtn');
  // }

  // // Optionally click the button (only if needed for layout/view changes, not real print)
  // async triggerPrintViewIfNeeded() {
  //   await this.openSummaryPrintTopBtn.click();
  // }

  // async downloadPDF(outputPath = 'page-output.pdf') {
  //   await this.page.pdf({
  //     path: outputPath,
  //     format: 'A4',
  //     printBackground: true
  //   });
  // }





}