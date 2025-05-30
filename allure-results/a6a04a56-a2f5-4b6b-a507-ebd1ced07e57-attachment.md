# Test info

- Name: Member Portal - Labs Flow >> Check abnormal test names for multiple date ranges
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:48:10

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//button[@id="dropdownDateFilterButton"]')

    at LabsPage.openCustomDatePicker (/home/karthi/pmp/src/pages/LabsPage.js:356:35)
    at LabsPage.selectDateRange (/home/karthi/pmp/src/pages/LabsPage.js:376:16)
    at /home/karthi/pmp/src/tests/labspagegroup.spec.js:52:24
```

# Page snapshot

```yaml
- banner:
  - heading "Member Portal" [level=1]
- status: Loading...
```

# Test source

```ts
  256 | //     if (count === 0) {
  257 | //       console.log('No physician');
  258 | //     } else {
  259 | //       for (let i = 0; i < count; i++) {
  260 | //         const name = await this.physicianNameElements.nth(i).innerText();
  261 | //         console.log(`Physician ${i + 1}: ${name}`);
  262 | //       }
  263 | //     }
  264 | //   }
  265 |
  266 |   
  267 |
  268 |   // async searchPhysician(name) {
  269 |   //   await this.physiciansearchinput.click();
  270 |   //   await this.physiciansearchinput.fill(name);
  271 |   //   await this.applyButton.click();
  272 |   
  273 |   //   // Scroll down before asserting
  274 |   //   await this.page.mouse.wheel(0, 500);
  275 |   
  276 |   //   await expect(this.physician).toBeVisible();
  277 |   
  278 |   //   const physicianText = await this.physician.textContent();
  279 |   //   console.log('Physician Name Found:', physicianText.trim());
  280 |   // }
  281 |   
  282 |   // Method to search for a lab by name
  283 |
  284 |   // async goToLabsAndSearch(labName) {
  285 |   //   // await this.labSearchInput.click();
  286 |   //   await this.labSearchInput.click({ force: true });
  287 |
  288 |   //   await this.labSearchInput.fill(labName);
  289 |   //   await this.applyButton.click();
  290 |
  291 |   //   const labResult = this.page.getByText(new RegExp(labName, 'i'));
  292 |
  293 |   //   await labResult.scrollIntoViewIfNeeded(); // scroll to element
  294 |   //   await expect(labResult).toBeVisible(); // assertion
  295 |
  296 |   //   // ✅ console log lab result text
  297 |   //   const labText = await labResult.textContent();
  298 |   //   console.log('✅ Found Lab Result:', labText?.trim());
  299 |
  300 |   // }//li[normalize-space()='Last 3 Months']
  301 |
  302 |
  303 | // Method to filter by date range
  304 |
  305 |   async filterByDateRange() {
  306 |     await this.last36MonthsButton.click();
  307 |     console.log('🔍 Clicked on "Last 36 Months" button.');
  308 |   
  309 |     await this.last3MonthsOption.click();
  310 |     console.log('🔍 Selected "Last 3 Months" option.');
  311 |   
  312 |     // Wait for UI to reflect the date range change
  313 |     await this.dateRangeText.waitFor({ state: 'visible', timeout: 10000 });
  314 |   
  315 |     // Dynamically calculate the expected date range
  316 |     const endDate = new Date();
  317 |     const startDate = new Date();
  318 |     startDate.setMonth(startDate.getMonth() - 3);
  319 |   
  320 |     // Format date as MM-DD-YYYY
  321 |     const formatDate = (date) => {
  322 |       const mm = String(date.getMonth() + 1).padStart(2, '0');
  323 |       const dd = String(date.getDate()).padStart(2, '0');
  324 |       const yyyy = date.getFullYear();
  325 |       return `${mm}-${dd}-${yyyy}`;
  326 |     };
  327 |   
  328 |     const expectedStart = formatDate(startDate);
  329 |     const expectedEnd = formatDate(endDate);
  330 |   
  331 |     // Log the expected date range
  332 |     console.log(`🔍 Expected Date Range: from ${expectedStart} to ${expectedEnd}`);
  333 |   
  334 |     // Use a regex to ignore spacing or additional text issues
  335 |     const pattern = new RegExp(`Date Range:\\s*from\\s*${expectedStart}\\s*to\\s*${expectedEnd}`, 'i');
  336 |   
  337 |     // Assert the date range text
  338 |     await expect(this.dateRangeText).toHaveText(pattern, { timeout: 15000 });
  339 |     console.log('✅ Date range successfully validated.');
  340 |   
  341 |     // // Assert that "No Lab Results to Show" text is visible
  342 |     await expect(this.noLabResultsText).toBeVisible({ timeout: 50000 });
  343 |     console.log('✅ "No Lab Results to Show" is visible.');
  344 |
  345 |     await this.clearButton .click();
  346 |   }
  347 |   
  348 | // custom date range
  349 |
  350 |   dateCell(dayName, monthName, dayNumber, year) {
  351 |     const fullDateLabel = `${dayName}, ${monthName} ${dayNumber}, ${year}`;
  352 |     return this.page.locator(`//div[@aria-label="${fullDateLabel}"]`);
  353 |   }
  354 |
  355 |   async openCustomDatePicker() {
> 356 |     await this.last36MonthsButton.click();
      |                                   ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  357 |     await this.customDateButton.click();
  358 |   }
  359 |
  360 |   async selectYear(value) {
  361 |     await this.yearDropdown.selectOption({ value });
  362 |   }
  363 |
  364 |   async selectMonth(value) {
  365 |     const monthCount = await this.monthOptions.count();
  366 |     for (let i = 0; i < monthCount; i++) {
  367 |       const optionValue = await this.monthOptions.nth(i).getAttribute('value');
  368 |       if (optionValue === value) {
  369 |         await this.monthDropdown.selectOption(optionValue);
  370 |         break;
  371 |       }
  372 |     }
  373 |   }
  374 |
  375 |   async selectDateRange(start, end) {
  376 |     await this.openCustomDatePicker();
  377 |
  378 |     // Start Date
  379 |     await this.selectYear(start.year);
  380 |     await this.selectMonth(start.month); // 1 = Jan, 12 = Dec
  381 |     const startDateLocator = this.dateCell(start.dayName, start.monthName, start.day, start.year);
  382 |     await startDateLocator.click();
  383 |
  384 |     // End Date
  385 |     await this.selectYear(end.year);
  386 |     await this.selectMonth(end.month);
  387 |     const endDateLocator = this.dateCell(end.dayName, end.monthName, end.day, end.year);
  388 |     await endDateLocator.click();
  389 |
  390 |   }
  391 |
  392 | // method test name search
  393 |
  394 |   // async searchLabTest(testName) {
  395 |   //   await this.scrollToSearchBox();
  396 |   //   await this.testnamesearchBox.click();
  397 |   //   await this.testnamesearchBox.fill(testName);
  398 |   //   await this.applyButton.click();
  399 |   // }
  400 |
  401 |   // async clearSearch() {
  402 |   //   await this.clearButton.click();
  403 |   // }
  404 |
  405 |   // async verifyNoResultsMessage() {
  406 |   //   return await this.noLabResultsText.isVisible();
  407 |   // }
  408 |
  409 |   // async scrollToSearchBox() {
  410 |   //   await this.testnamesearchBox.scrollIntoViewIfNeeded();
  411 |   // }
  412 |
  413 |   // async logResultStatus(testName) {
  414 |   //   if (await this.verifyNoResultsMessage()) {
  415 |   //     console.log(`❌ No results found for: ${testName}`);
  416 |   //   } else {
  417 |   //     console.log(`✅ Results found for: ${testName}`);
  418 |   //   }
  419 |   // }
  420 |
  421 |
  422 |   async selectAbnormalCheckbox() {
  423 |     await this.checkboxAbnormal.check();
  424 |   }
  425 |
  426 |      // Method to open the custom date filter
  427 |
  428 |   async selectLast3Months() {
  429 |     await this.last36MonthsButton.click();
  430 |     await this.last3MonthsDropdownItem.click();
  431 |   }
  432 |
  433 |   async printNoLabResultsText() {
  434 |     await this.noLabResultsText.waitFor({ state: 'visible', timeout: 30000 });
  435 |
  436 |     const noLabResults = await this.noLabResultsText.innerText();
  437 |     console.log(noLabResults);
  438 |   }
  439 |
  440 |   // You can add a method to click Apply button if necessary
  441 |   async clickApplyButton() {
  442 |     await this.applyButton.click();
  443 |   }
  444 |   
  445 | // checkboxabnormal and uncheckabnormal
  446 |
  447 |   async filterByAbnormalLabs() {
  448 |     await this.last36MonthsButton.click();
  449 |     await this.checkboxAbnormal.check();
  450 |     await this.applyButton.click();
  451 |   }
  452 |
  453 |   // async uncheckAbnormalLabs() {
  454 |   //   await this.last36MonthsButton.click();
  455 |   //   await this.checkboxAbnormal.uncheck(); // Uncheck the abnormal checkbox
  456 |   //   await this.applyButton.click();
```