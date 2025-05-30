
 
import { expect } from '@playwright/test';

 
export class LabsPage {
  constructor(page) {

    this.page = page;
    this.labsTab = page.locator('#navLink-LABS');
    this.physiciansearchinput = page.locator('#labsFilterPhysicianSearchInput')
    this.applyButton = page.getByRole('button', { name: 'Apply' });
    this.physicianNameElements = page.locator("//p[starts-with(@id, 'physicianText')]"); //physician text print 
      // Locator for abnormal rows
    this.abnormalLocator = page.locator("//div[contains(@class, 'abnormal-row')]");

    // Locator for all rows (normal + abnormal)
    this.allRows = page.locator("//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row-cols-2')]");
        this.abnormalLocatosr = page.locator('//div[@data-id="labsCardObjectResultsDiv"]//div[contains(@class, "row") and .//span[contains(text(), "ABNORMAL")]]');
        this.resultsDropdown = page.getByLabel('select number of results'); //pag


    this.physician = page.locator('#physicianText328558');
    this.labSearchInput = page.getByRole('textbox', { name: 'ex. Life Labs' });
        this.labNameElements = page.locator("//p[starts-with(@id, 'labVendorText')]"); //lab vendor text

    //p[starts-with@id,'labVendorText']
    // this.applyButton = page.getByRole('button', { name: 'Apply' });
    this.last36MonthsButton = page.locator('//button[@id="dropdownDateFilterButton"]'); //first select the date range button
    this.last3MonthsOption = page.getByText('Last 3 Months');
    this.dateRangeText = page.locator('//div[@class="d-flex flex-wrap"]');
    this.noLabResultsText =page.getByText('No Lab Results to Show');
    this.customDateButton = page.locator('//li[normalize-space()="Custom"]');
    this.monthDropdown = page.locator('//select[@title="Select month"]');
    this.checkboxAbnormal = page.locator('//input[@id="checkboxAbnormal"]');
    this.last3MonthsDropdownItem = page.locator('//li[normalize-space()="Last 3 Months"]');
    this.firstLabCardAbnormalLabel = page.getByText('Calcium SerPl-sCnc').first();
    this.noAbnormalLabel = page.locator('//span[normalize-space(text())="N/A"]');
    this.clearButton = page.locator('//a[normalize-space()="Clear"]');
     this.abnormalLocatorwwithstatus = page.locator(
      `//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row') and .//span[contains(text(), 'ABNORMAL')]]/span[1]`);
      //span[normalize-space(text())='N/A']
    // this.monthFilter = page.locator('//option[@value="1"]');
    // this.yearDropdown = page.locator('//select[@title="Select year"]');
    // this.yearFilter = page.locator('option[value="2024"]');
    // this.previousButton = page.locator('//button[@aria-label="Previous month"]');
    // this.nextButton = page.locator('//button[@title="Next month"]');
    this.monthDropdown = page.locator('//select[@title="Select month"]');
    this.monthOptions = page.locator('//select[@title="Select month"]/option');
    this.yearDropdown = page.locator('//select[@title="Select year"]');
    this.yearOptions = page.locator('//select[@title="Select year"]/option');

    this.testnamesearchBox = page.getByRole('textbox', { name: 'ex. Triglycerides' });
    this.testNameLocators = page.locator("//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row')]"); // custom
    this.testnameonly=page.locator("//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row-cols-2')]/span[1]")

    this.testnamewithabnormal=page.locator('//div[contains(@class, "row-cols-2")]/span')

    this.applyButton = page.getByRole('button', { name: 'Apply' });
    this.clearButton = page.getByText('Clear');





    
  
  }
 
  
  async openlabsTab() {
    // Ensure the Claims tab is visible before clicking
    await this.labsTab.waitFor({ state: 'visible', timeout: 20000 });
    await this.labsTab.click();

    // Optionally, wait for the page to load after clicking the  tab (if it redirects)
    // await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });

  }

  
  //  scenario  search with date filterwith last 60month   physician by name
     

    async selectDateRangephysicain(rangeText) {
    await this.last36MonthsButton.click();
    await this.page.getByText(rangeText).click();
  }

  async searchPhysician(name) {
    await this.physiciansearchinput.click();
    await this.physiciansearchinput.fill(name);
   await this.physiciansearchinput.waitFor({ state: 'visible' });
   await this.physiciansearchinput.click();

  }

  async clearFilters() {
    await this.clearButton.click();
  }

  async printPhysicianResults(name, rangeText) {
  console.log(`\n--- Filter Selection ---`);
  console.log(`Date Range: ${rangeText}`);
  console.log(`Physician Name Searched: ${name}`);

  await this.page.waitForTimeout(1000); // give time for search results to load

  const count = await this.physicianNameElements.count();

  if (count === 0) {
    console.log('No physician found.');
  } else {
    for (let i = 0; i < count; i++) {
      const physicianName = await this.physicianNameElements.nth(i).innerText();
      console.log(`Physician ${i + 1}: ${physicianName}`);
    }
  }

  console.log(); // spacing
}


       // scenario  search with date filter  for a labvendor

   async selectDateRangelab(rangeText) {
    await this.last36MonthsButton.click();
    await this.page.getByText(rangeText).click();
  }

  

  async searchLab(name) {
    await this.labSearchInput.click();
    await this.labSearchInput.fill(name);
    await this.applyButton.click();
  }

 
  //  async clearFilters() {
  //   await this.clearButton.click();
  // }

async logLabResults(name, rangeText) {
  console.log(`\n--- Filter Selection ---`);
  console.log(`Date Range: ${rangeText}`);
  console.log(`Lab Vendor Name Searched: ${name}`);

  await this.page.waitForTimeout(1000); // allow results to load

  const count = await this.labNameElements.count();

  if (count === 0) {
    console.log('No lab vendors found.');
  } else {
    for (let i = 0; i < count; i++) {
      const text = await this.labNameElements.nth(i).textContent();
      console.log(`Lab Vendor ${i + 1}: ${text.trim()}`);
    }
  }

  console.log(); // spacing
}





// scenario  search for a test name

    async selectDateRangetestname(rangeText) {
    await this.last36MonthsButton.click();
    await this.page.getByText(rangeText).click();
  }

  async searchTestName(name) {
    await this.testnamesearchBox.click();
    await this.testnamesearchBox.fill(name);
    await this.applyButton.click();
  }

async printTestResults(searchedName, rangeText) {
  console.log(`\n--- Filter Selection ---`);
  console.log(`Date Range: ${rangeText}`);
  console.log(`Test Name Searched: ${searchedName}`);

  await this.page.waitForTimeout(1000); // wait for results to appear

  const count = await this.testNameLocators.count();
  let matchFound = false;

  for (let i = 0; i < count; i++) {
    const fullText = await this.testNameLocators.nth(i).textContent();
    const trimmedText = fullText.trim();

    // Match exactly or case-insensitively (adjust as needed)
    if (trimmedText.includes(searchedName)) {
      console.log(`Test Name ${i + 1}: ${trimmedText}`);
      matchFound = true;
    }
  }

  if (!matchFound) {
    console.log('No test names found');
  }

  console.log(); // spacing
}

  
   async clearFilters() {
    await this.clearButton.click();
  }

//  scenario custom date range status abnormal and unabnormal with checkbox

  dateCell(dayName, monthName, day, year) {
    const fullDateLabel = `${dayName}, ${monthName} ${day}, ${year}`;
    return this.page.locator(`//div[@aria-label="${fullDateLabel}"]`);
  }

  async openCustomDatePicker() {
  await this.page.waitForLoadState('networkidle'); // wait for full load

  await this.last36MonthsButton.waitFor({ state: 'visible', timeout: 10000 });
  await this.last36MonthsButton.click();

  await this.customDateButton.waitFor({ state: 'visible', timeout: 10000 });
  await this.customDateButton.click();
}


  async selectYear(value) {
    await this.yearDropdown.selectOption({ value });
  }

  async selectMonth(value) {
    const monthCount = await this.monthOptions.count();
    for (let i = 0; i < monthCount; i++) {
      const optionValue = await this.monthOptions.nth(i).getAttribute('value');
      if (optionValue === value) {
        await this.monthDropdown.selectOption(optionValue);
        break;
      }
    }
  }

  async selectDateRange(start, end) {
    await this.openCustomDatePicker();

    // Start Date
    await this.selectYear(start.year);
    await this.selectMonth(start.month);
    await this.dateCell(start.dayName, start.monthName, start.day, start.year).click();

    // End Date
    await this.selectYear(end.year);
    await this.selectMonth(end.month);
    await this.dateCell(end.dayName, end.monthName, end.day, end.year).click();
  }


    // Check Abnormal checkbox
async checkAbnormalFilter() {
  const isChecked = await this.checkboxAbnormal.isChecked();
  if (!isChecked) {
    await this.checkboxAbnormal.click();
  }

  await this.applyButton.click();
    await this.page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down by 500 pixels
  });
  await this.page.waitForTimeout(500); // Small pause after scroll
}

async uncheckAbnormalFilter() {
  const isChecked = await this.checkboxAbnormal.isChecked();
  if (isChecked) {
    await this.checkboxAbnormal.uncheck();
  }
  await this.applyButton.click();

  await this.page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down by 500 pixels
  });
  await this.page.waitForTimeout(500); // Small pause after scroll

}


// Print abnormal test names
// async printAbnormalTestNames() {
//   const count = await this.testNameLocators.count();
//   let found = false;

//   for (let i = 0; i < count; i++) {
//     const row = this.testNameLocators.nth(i);
//     const spans = row.locator('span');
//     const spanCount = await spans.count();

//     let textParts = [];
//     for (let j = 0; j < spanCount; j++) {
//       const part = await spans.nth(j).innerText();
//       textParts.push(part.trim());
//     }

//     const rowText = textParts.join(' ');
//     if (rowText.includes('ABNORMAL')) {
//       console.log(`  - ${rowText}`);
//       found = true;
//     }
//   }

//   if (!found) {
//     console.log('✅ No abnormal test results found.');
//   }
// }



async printAbnormalTestNames() {
  const count = await this.testNameLocators.count();
  if (count === 0) {
    console.log('✅ No abnormal test results found.');
    return;
  }

  const testNames = [];
  for (let i = 0; i < count; i++) {
    const row = this.testNameLocators.nth(i);
    const testName = await row.locator('span').first().innerText();
    testNames.push(testName);
  }

  console.log('🔴 Abnormal test results found:');
  testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
}
  // Uncheck Abnormal checkbox



// Print test names that are NOT abnormal
async printNonAbnormalTestNames() {
  const allRows = this.page.locator(`//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row')]`);
  const total = await allRows.count();
  const testNames = [];

  for (let i = 0; i < total; i++) {
    const row = allRows.nth(i);
    const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
    if (isAbnormal === 0) {
      const testName = await row.locator('span').first().innerText();
      testNames.push(testName);
    }
  }

  if (testNames.length === 0) {
    console.log('✅ No normal/non-abnormal test results found.');
  } else {
    console.log('🟢 Non-abnormal test results found:');
    testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  }
}

// async printNonAbnormalTestNames() {
//   const count = await this.testNameLocators.count();
//   let found = false;

//   for (let i = 0; i < count; i++) {
//     const row = this.testNameLocators.nth(i);
//     const spans = row.locator('span');
//     const spanCount = await spans.count();

//     let textParts = [];
//     for (let j = 0; j < spanCount; j++) {
//       const part = await spans.nth(j).innerText();
//       textParts.push(part.trim());
//     }

//     const rowText = textParts.join(' ');
//     if (!rowText.includes('ABNORMAL')) {
//       console.log(`  - ${rowText}`);
//       found = true;
//     }
//   }

//   if (!found) {
//     console.log('✅ No normal/non-abnormal test results found.');
//   }
// }




//  scenario : search for abnormal check  and uncheck status  test results with  physician name
    async searchphysicainabnormalcheck(rangeText) {

      await this.last36MonthsButton.waitFor({ state: 'visible' });
        await this.last36MonthsButton.scrollIntoViewIfNeeded();


    await this.last36MonthsButton.click();
    // await this.page.getByText(rangeText).click();
    await this.page.locator('li.dropdown-item', { hasText: rangeText }).click();

  }
     async searchPhysicianabnormal(physicianname) {
    await this.physiciansearchinput.click();
    await this.physiciansearchinput.fill(physicianname);
   await this.physiciansearchinput.waitFor({ state: 'visible' });
  }

  async checkboxphysician() {
  const isChecked = await this.checkboxAbnormal.isChecked();
  if (!isChecked) {
    await this.checkboxAbnormal.click();
        console.log("checkbox checked ")

  }

  await this.applyButton.click();
    await this.page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down by 500 pixels
  });
  await this.page.waitForTimeout(500); // Small pause after scroll
}

async uncheckboxphysician() {
  const isChecked = await this.checkboxAbnormal.isChecked();
  if (isChecked) {
    await this.checkboxAbnormal.uncheck();
        console.log("checkbox  unchecked ")

  }
  await this.applyButton.click();

  await this.page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down by 500 pixels
  });
  await this.page.waitForTimeout(500); // Small pause after scroll

}
async printPhysicianNames() {
  const physicianNames = await this.physicianNameElements.allTextContents();

  if (physicianNames.length > 0) {
    console.log("Physician Names:");
    physicianNames.forEach(name => console.log(name));
  } else {
    console.log("No physician names found.");
  }
}


async printAbnormalpy() {
  const count = await this.testNameLocators.count();
  if (count === 0) {
    console.log('✅ No abnormal test results found.');
    return;
  }

  const testNames = [];
  for (let i = 0; i < count; i++) {
    const row = this.testNameLocators.nth(i);
    // const testName = await row.locator('span').first().innerText();
    const testName = await row.locator('span').first().innerText({ timeout: 120000 });

    testNames.push(testName);
  }

  console.log('🔴 Abnormal test results found:');
  testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
}


async printNonAbnormalpy() {
  const allRows = this.page.locator(`//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row')]`);
  const total = await allRows.count();
  const testNames = [];

  for (let i = 0; i < total; i++) {
    const row = allRows.nth(i);
    const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
    if (isAbnormal === 0) {
      const testName = await row.locator('span').first().innerText();
      testNames.push(testName);
    }
  }

  if (testNames.length === 0) {
    console.log('✅ No normal/non-abnormal test results found.');
  } else {
    console.log('🟢 Non-abnormal test results found:');
    testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  }
}

//  scenario : search for abnormal check  and uncheck status  test results with test name


   async searchtestnameabnormalcheck(rangeText) {
    await this.last36MonthsButton.click();
    // await this.page.getByText(rangeText).click();
    await this.page.locator('li.dropdown-item', { hasText: rangeText }).click();

  }
     async searchtestnameabnormal(testname ){
    await this.testnamesearchBox.click();
    await this.testnamesearchBox.fill(testname);
   await this.testnamesearchBox.waitFor({ state: 'visible' });
  }

  async checkboxtestname() {
  const isChecked = await this.checkboxAbnormal.isChecked();
  if (!isChecked) {
    await this.checkboxAbnormal.click();
        console.log("checkbox checked ")

  }

  await this.applyButton.click();
    await this.page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down by 500 pixels
  });
  await this.page.waitForTimeout(500); // Small pause after scroll
}

async uncheckboxtestname() {
  const isChecked = await this.checkboxAbnormal.isChecked();
  if (isChecked) {
    await this.checkboxAbnormal.uncheck();
        console.log("checkbox unchecked ")

  }
  await this.applyButton.click();

  await this.page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down by 500 pixels
  });
  await this.page.waitForTimeout(500); // Small pause after scroll

}
async printTestNames() {
  const physicianNames = await this.testnameonly.allTextContents();

  if (physicianNames.length > 0) {
    console.log(" Test Names:");
    physicianNames.forEach(name => console.log(name));
  } else {
    console.log("No Test names found.");
  }
}




async printAbnormaltestname() {
  const count = await this.testNameLocators.count();
  if (count === 0) {
    console.log('✅ No abnormal test results found.');
    return;
  }

  const testNames = [];
  for (let i = 0; i < count; i++) {
    const row = this.testNameLocators.nth(i);
    const testName = await row.locator('span').first().innerText();
    testNames.push(testName);
  }

  console.log('🔴 Abnormal test results found:');
  testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
}


async printNonAbnormaltestname() {
  const allRows = this.page.locator(`//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row')]`);
  const total = await allRows.count();
  const testNames = [];

  for (let i = 0; i < total; i++) {
    const row = allRows.nth(i);
    const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
    if (isAbnormal === 0) {
      const testName = await row.locator('span').first().innerText();
      testNames.push(testName);
    }
  }

  if (testNames.length === 0) {
    console.log('✅ No normal/non-abnormal test results found.');
  } else {
    console.log('🟢 Non-abnormal test results found:');
    testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  }
}





//  scenario : search for abnormal check  and uncheck status  test results with labvendor name



async searchlabnameabnormalcheck(rangeText) {
    await this.last36MonthsButton.click();
    // await this.page.getByText(rangeText).click();
    await this.page.locator('li.dropdown-item', { hasText: rangeText }).click();

  }
     async searchlabnameabnormal(labname ){
    await this.labSearchInput.click();
    await this.labSearchInput.fill(labname);
   await this.labSearchInput.waitFor({ state: 'visible' });
  }

  async checkboxlabname() {
  const isChecked = await this.checkboxAbnormal.isChecked();
  if (!isChecked) {
    await this.checkboxAbnormal.click();
    console.log("checkbox checked ")
  }

  await this.applyButton.click();
    await this.page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down by 500 pixels
  });
  await this.page.waitForTimeout(500); // Small pause after scroll
}

async uncheckboxlabname() {
  const isChecked = await this.checkboxAbnormal.isChecked();
  if (isChecked) {
    await this.checkboxAbnormal.uncheck();
  }
  await this.applyButton.click();

  await this.page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down by 500 pixels
  });
  await this.page.waitForTimeout(500); // Small pause after scroll

}
async printlabNames() {
  const labsNames = await this.labNameElements.allTextContents();

  if (labsNames.length > 0) {
    console.log("LabsNames:");
    labsNames.forEach(name => console.log(name));
  } else {
    console.log("No Labs names found.");
  }
}


async printAbnormallabname() {
  const count = await this.testNameLocators.count();
  if (count === 0) {
    console.log('✅ No abnormal test results found.');
    return;
  }

  const testNames = [];
  for (let i = 0; i < count; i++) {
    const row = this.testNameLocators.nth(i);
    const testName = await row.locator('span').first().innerText();
    testNames.push(testName);
  }

  console.log('🔴 Abnormal test results found:');
  testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
}


async printNonAbnormallabname() {
  const allRows = this.page.locator(`//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row')]`);
  const total = await allRows.count();
  const testNames = [];

  for (let i = 0; i < total; i++) {
    const row = allRows.nth(i);
    const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
    if (isAbnormal === 0) {
      const testName = await row.locator('span').first().innerText();
      testNames.push(testName);
    }
  }

  if (testNames.length === 0) {
    console.log('✅ No normal/non-abnormal test results found.');
  } else {
    console.log('🟢 Non-abnormal test results found:');
    testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  }
}

}





