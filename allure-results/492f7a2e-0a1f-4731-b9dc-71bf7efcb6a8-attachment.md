# Test info

- Name: Member Portal - Labs Flow >> Check abnormal check and uncheck testname search  
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:138:5

# Error details

```
TimeoutError: locator.selectOption: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('#monthRangeDropdown')

    at LabsPage.optionDatetestname (/home/karthi/pmp/src/pages/LabsPage.js:701:52)
    at LabsPage.runAbnormalTestnameFlow (/home/karthi/pmp/src/pages/LabsPage.js:715:14)
    at /home/karthi/pmp/src/tests/labspagegroup.spec.js:145:24
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
- text: "Date Range: from 05-24-2022 to 05-24-2025 Show"
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
  601 | //   // Step 2: Check 'Abnormal' checkbox
  602 | //   await this.checkboxAbnormal.check();
  603 | //   const isChecked = await this.checkboxAbnormal.isChecked();
  604 | //   console.log("✅ Abnormal checkbox is checked:", isChecked);
  605 |
  606 | //   // Step 3: Apply filter and log abnormal results
  607 | //   await this.applyButton.click();
  608 |
  609 | //      await this.page.evaluate(() => {
  610 | //     window.scrollBy(0, 500); // Scroll down by 500 pixels
  611 | //   });
  612 | //   await this.page.waitForTimeout(500); // Small pause after scroll
  613 |
  614 |
  615 | //   const abnormalCount = await this.physicianNameElements.count();
  616 |
  617 | //   if (abnormalCount === 0) {
  618 | //     console.log(`✅ No abnormal test results for ${physicianName} in ${monthRangeText}.`);
  619 | //   } else {
  620 | //     for (let i = 0; i < abnormalCount; i++) {
  621 | //       const row = this.physicianNameElements.nth(i);
  622 | //        const spanLocator = row.locator('span').first();
  623 | // await spanLocator.waitFor({ state: 'attached', timeout: 5000 });
  624 |
  625 | // if (await spanLocator.isVisible()) {
  626 | //   const testName = await spanLocator.innerText();
  627 | //   console.log(`Physician Name: ${testName}`);
  628 | // } else {
  629 | //   console.log(`⚠️ Row ${i}: Span not visible.`);
  630 | // }
  631 |
  632 |
  633 | //       // const testName = await row.locator('span').first().innerText();
  634 | //       const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  635 | //       console.log(`🔴 ${testName} - Physician: ${physician} - Status: ABNORMAL`);
  636 | //     }
  637 | //   }
  638 | //     await this.page.waitForLoadState('networkidle');
  639 |
  640 | //   // Step 4: Uncheck 'Abnormal' checkbox safely
  641 |
  642 | // let checkboxStatus = '';
  643 |
  644 | // if (await this.checkboxAbnormal.isChecked()) {
  645 | //   try {
  646 | //     await this.checkboxAbnormal.uncheck(); // Fallback for custom checkboxes
  647 | //     await this.page.waitForTimeout(500); // Wait for UI to update
  648 |
  649 | //     // Assertion to verify checkbox is unchecked
  650 | //     await expect(this.checkboxAbnormal).not.toBeChecked();
  651 |
  652 | //     checkboxStatus = 'Unchecked';
  653 | //   } catch (error) {
  654 | //     console.log('Failed to uncheck checkbox:', error);
  655 | //     checkboxStatus = 'Uncheck failed';
  656 | //   }
  657 | // } else {
  658 | //   // Optional assertion for already unchecked state
  659 | //   await expect(this.checkboxAbnormal).not.toBeChecked();
  660 | //   checkboxStatus = 'Already Unchecked';
  661 | // }
  662 |
  663 |
  664 | // console.log('Checkbox status is:', checkboxStatus);
  665 | //   // const isUnchecked = await this.checkboxAbnormal.isChecked();
  666 | //   // console.log("Is checkbox checked? ", isUnchecked); // should be false
  667 |
  668 | //   // Step 5: Apply filter again and check for non-abnormal (normal) results
  669 | //   await this.applyButton.click();
  670 |
  671 | //     await this.page.evaluate(() => {
  672 | //     window.scrollBy(0, 500); // Scroll down by 500 pixels
  673 | //   });
  674 | //   await this.page.waitForTimeout(500); // Small pause after scroll
  675 |
  676 | //   const total = await this.allRows.count();
  677 | //   let foundNormal = false;
  678 |
  679 | //   for (let i = 0; i < total; i++) {
  680 | //     const row = this.allRows.nth(i);
  681 | //     const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
  682 | //     if (isAbnormal === 0) {
  683 | //       const testName = await row.locator('span').first().innerText();
  684 | //       const physician = await row.locator("//p[starts-with(@id, 'physicianText')]").innerText();
  685 | //       console.log(`🟢 ${testName} - Physician: ${physician} - Status: UNABNORMAL`);
  686 | //       foundNormal = true;
  687 | //     }
  688 | //   }
  689 |
  690 | //   if (!foundNormal) {
  691 | //     console.log(`✅ No UNABNORMAL test results for ${physicianName} in ${monthRangeText}.`);
  692 | //   }
  693 |
  694 | //   // Step 6: Clear all filters
  695 | //   await this.clearFilters();
  696 | // }
  697 |
  698 | //  scenario : search for abnormal check  and uncheck status  test results with test name
  699 |
  700 |  async optionDatetestname(monthRangeText) {
> 701 |     await this.page.locator('#monthRangeDropdown').selectOption({ label: monthRangeText });
      |                                                    ^ TimeoutError: locator.selectOption: Timeout 10000ms exceeded.
  702 |   }
  703 |
  704 |   // ✅ Method to enter/select the test name
  705 |   async optionTestName(TestName) {
  706 |     const testNameInput = this.page.locator('#testNameInput'); // customize selector
  707 |     await testNameInput.fill('');
  708 |     await testNameInput.fill(TestName);
  709 |     await testNameInput.press('Enter'); // If dropdown or autocomplete
  710 |   }
  711 |
  712 |
  713 | async runAbnormalTestnameFlow(monthRangeText, TestName) {
  714 |   // Step 1: Select Date Range and Physician
  715 |   await this.optionDatetestname(monthRangeText);
  716 |   await this.optionTestName(TestName);
  717 |
  718 |   // Step 2: Check 'Abnormal' checkbox
  719 |   await this.checkboxAbnormal.check();
  720 |   const isChecked = await this.checkboxAbnormal.isChecked();
  721 |   
  722 |   console.log("✅ Abnormal checkbox is checked:", isChecked);
  723 |
  724 |
  725 |   // Step 3: Apply filter and log abnormal results
  726 |   await this.applyButton.click();
  727 |
  728 |
  729 |
  730 |   const testElements = await this.testnamewithabnormal.allTextContents();
  731 |
  732 |   if (testElements.length === 0) {
  733 |     console.log("❌ No test name found");
  734 |     return;
  735 |   }
  736 |
  737 |   let abnormalFound = false;
  738 |   for (const text of testElements) {
  739 |     if (text.includes("Abnormal")) {
  740 |       abnormalFound = true;
  741 |       console.log(`⚠️ Test Name with Abnormal status: ${text}`);
  742 |     }
  743 |   }
  744 |
  745 |   if (!abnormalFound) {
  746 |     console.log("✅ No abnormal status found in test names");
  747 |   }
  748 |
  749 |
  750 | //   const testNameCount = await this.testNameLocators.count();
  751 | // console.log(`Test name elements found: ${testNameCount}`);
  752 |
  753 | //   if (abnormalCount === 0) {
  754 | //     console.log(`✅ No abnormal test results in ${monthRangeText}.`);
  755 | //   } else {
  756 | //     for (let i = 0; i < abnormalCount; i++) {
  757 | //       const row = this.testNameLocators.nth(i);
  758 | //       await row.waitFor({ state: 'visible' });
  759 | //       const testName = await row.innerText();
  760 | //       console.log(`🔴 ${testName} - Status: ABNORMAL`);
  761 | //     }
  762 | //   }
  763 |
  764 |     await this.page.waitForLoadState('networkidle');
  765 |
  766 |   // Step 4: Uncheck 'Abnormal' checkbox safely
  767 | if (await this.checkboxAbnormal.isChecked()) {
  768 |   try {
  769 |     await this.checkboxAbnormal.uncheck(); // Fallback for custom checkboxes
  770 |     await this.page.waitForTimeout(500); // Wait for UI to update
  771 |     console.log('Checkbox is now: Unchecked');
  772 |   } catch (error) {
  773 |     console.log('Failed to uncheck checkbox:', error);
  774 |   }
  775 | } else {
  776 |   console.log('Checkbox is already Unchecked');
  777 | }
  778 |
  779 |
  780 |   // const isUnchecked = await this.checkboxAbnormal.isChecked();
  781 |   // console.log("Is checkbox checked? ", isUnchecked); // should be false
  782 |
  783 |   // Step 5: Apply filter again and check for non-abnormal (normal) results
  784 |   await this.applyButton.click();
  785 |   const total = await this.testNameLocators.count();
  786 |   let foundNormal = false;
  787 |    
  788 |     for (let i = 0; i < total; i++) {
  789 |     const row = this.testNameLocators.nth(i);
  790 |     const parent = row.locator('xpath=..');
  791 |     const isAbnormal = await parent.locator('span', { hasText: 'ABNORMAL' }).count();
  792 |
  793 |     if (isAbnormal === 0) {
  794 |       const testName = await row.innerText();
  795 |       console.log(`🟢 ${testName} - Status: UNABNORMAL`);
  796 |       foundNormal = true;
  797 |     }
  798 |   }
  799 |
  800 |   
  801 |   if (!foundNormal) {
```