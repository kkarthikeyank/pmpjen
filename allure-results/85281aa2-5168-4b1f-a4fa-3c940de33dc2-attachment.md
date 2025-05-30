# Test info

- Name: Member Portal - Labs Flow >> Check abnormal check and uncheck testname search  
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:138:5

# Error details

```
Error: locator.isVisible: Error: strict mode violation: locator('//div[@data-id=\'labsCardObjectResultsDiv\']//div[contains(@class, \'row\')]').first().locator('span').filter({ hasText: 'ABNORMAL' }) resolved to 2 elements:
    1) <span _ngcontent-jle-c268="" data-id="labsCardObjectBadge">…</span> aka locator('.row > span:nth-child(2)').first()
    2) <span data-id="undefined-0" _ngcontent-jle-c268="" class="badge badge-m badge-danger-light"> ABNORMAL </span> aka getByText('ABNORMAL').nth(1)

Call log:
    - checking visibility of locator('//div[@data-id=\'labsCardObjectResultsDiv\']//div[contains(@class, \'row\')]').first().locator('span').filter({ hasText: 'ABNORMAL' })

    at LabsPage.printNonAbnormaltestname (/home/karthi/pmp/src/pages/LabsPage.js:817:53)
    at /home/karthi/pmp/src/tests/labspagegroup.spec.js:156:14
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
- textbox "ex. Triglycerides": Calcium SerPl-sCnc
- paragraph: Lab Vendor
- textbox "ex. Life Labs"
- paragraph: Filter by date of service range
- button "Last 60 Months"
- paragraph: Status
- checkbox "Checkbox for Abnormal"
- text: Abnormal
- button "Apply"
- text: Clear
- separator
- text: "Date Range: from 05-26-2020 to 05-26-2025 Show"
- combobox "select number of results":
  - option "5" [selected]
  - option "10"
  - option "25"
  - option "50"
  - option "100"
- text: entries
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
  717 |     await this.testnamesearchBox.fill(testname);
  718 |    await this.testnamesearchBox.waitFor({ state: 'visible' });
  719 |   }
  720 |
  721 |   async checkboxtestname() {
  722 |   const isChecked = await this.checkboxAbnormal.isChecked();
  723 |   if (!isChecked) {
  724 |     await this.checkboxAbnormal.click();
  725 |         console.log("checkbox checked ")
  726 |
  727 |   }
  728 |
  729 |   await this.applyButton.click();
  730 |     await this.page.evaluate(() => {
  731 |     window.scrollBy(0, 500); // Scroll down by 500 pixels
  732 |   });
  733 |   await this.page.waitForTimeout(500); // Small pause after scroll
  734 | }
  735 |
  736 | async uncheckboxtestname() {
  737 |   const isChecked = await this.checkboxAbnormal.isChecked();
  738 |   if (isChecked) {
  739 |     await this.checkboxAbnormal.uncheck();
  740 |         console.log("checkbox unchecked ")
  741 |
  742 |   }
  743 |   await this.applyButton.click();
  744 |
  745 |   await this.page.evaluate(() => {
  746 |     window.scrollBy(0, 500); // Scroll down by 500 pixels
  747 |   });
  748 |   await this.page.waitForTimeout(500); // Small pause after scroll
  749 |
  750 | }
  751 | async printTestNames() {
  752 |   const physicianNames = await this.testnameonly.allTextContents();
  753 |
  754 |   if (physicianNames.length > 0) {
  755 |     console.log(" Test Names:");
  756 |     physicianNames.forEach(name => console.log(name));
  757 |   } else {
  758 |     console.log("No Test names found.");
  759 |   }
  760 | }
  761 |
  762 |
  763 | async printAbnormaltestname() {
  764 |   const count = await this.testNameLocators.count();
  765 |   if (count === 0) {
  766 |     console.log('✅ No abnormal test results found.');
  767 |     return;
  768 |   }
  769 |
  770 |   const testNames = [];
  771 |   for (let i = 0; i < count; i++) {
  772 |     const row = this.testNameLocators.nth(i);
  773 |     const testName = await row.locator('span').first().innerText();
  774 |     testNames.push(testName);
  775 |   }
  776 |
  777 |   console.log('🔴 Abnormal test results found:');
  778 |   testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  779 | }
  780 |
  781 |
  782 | // async printNonAbnormaltestname() {
  783 | //   const allRows = this.page.locator(`//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row')]`);
  784 | //   const total = await allRows.count();
  785 | //   const testNames = [];
  786 |
  787 | //   for (let i = 0; i < total; i++) {
  788 | //     const row = allRows.nth(i);
  789 | //     const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
  790 | //     if (isAbnormal === 0) {
  791 | //       const testName = await row.locator('span').first().innerText();
  792 | //       testNames.push(testName);
  793 | //     }
  794 | //   }
  795 |
  796 | //   if (testNames.length === 0) {
  797 | //     console.log('✅ No normal/non-abnormal test results found.');
  798 | //   } else {
  799 | //     console.log('🟢 Non-abnormal test results found:');
  800 | //     testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  801 | //   }
  802 | // }
  803 | async printNonAbnormaltestname() {
  804 |   const allRows = this.page.locator(`//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row')]`);
  805 |   const total = await allRows.count();
  806 |   const testNames = [];
  807 |
  808 |   for (let i = 0; i < total; i++) {
  809 |     const row = allRows.nth(i);
  810 |     
  811 |     // ✅ Skip rows not visible (filtered out by checkbox)
  812 |     const isVisible = await row.isVisible();
  813 |     if (!isVisible) continue;
  814 |
  815 |     // ✅ Check if this visible row has an ABNORMAL span that is visible
  816 |     const abnormalLocator = row.locator('span', { hasText: 'ABNORMAL' });
> 817 |     const isAbnormalVisible = await abnormalLocator.isVisible();
      |                                                     ^ Error: locator.isVisible: Error: strict mode violation: locator('//div[@data-id=\'labsCardObjectResultsDiv\']//div[contains(@class, \'row\')]').first().locator('span').filter({ hasText: 'ABNORMAL' }) resolved to 2 elements:
  818 |
  819 |     if (!isAbnormalVisible) {
  820 |       const testName = await row.locator('span').first().innerText();
  821 |       testNames.push(testName);
  822 |     }
  823 |   }
  824 |
  825 |   if (testNames.length === 0) {
  826 |     console.log('✅ No normal/non-abnormal test results found.');
  827 |   } else {
  828 |     console.log('🟢 Non-abnormal test results found:');
  829 |     [...new Set(testNames)].forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
  830 |   }
  831 | }
  832 |
  833 |
  834 |
  835 | //  async optionDatetestname(monthRangeText) {
  836 | //     await this.page.locator('#monthRangeDropdown').selectOption({ label: monthRangeText });
  837 | //   }
  838 |
  839 | //   // ✅ Method to enter/select the test name
  840 | //   async optionTestName(TestName) {
  841 | //     const testNameInput = this.page.locator('#testNameInput'); // customize selector
  842 | //     await testNameInput.fill('');
  843 | //     await testNameInput.fill(TestName);
  844 | //     await testNameInput.press('Enter'); // If dropdown or autocomplete
  845 | //   }
  846 |
  847 |
  848 | // async runAbnormalTestnameFlow(monthRangeText, TestName) {
  849 | //   // Step 1: Select Date Range and Physician
  850 | //   await this.optionDatetestname(monthRangeText);
  851 | //   await this.optionTestName(TestName);
  852 |
  853 | //   // Step 2: Check 'Abnormal' checkbox
  854 | //   await this.checkboxAbnormal.check();
  855 | //   const isChecked = await this.checkboxAbnormal.isChecked();
  856 |   
  857 | //   console.log("✅ Abnormal checkbox is checked:", isChecked);
  858 |
  859 |
  860 | //   // Step 3: Apply filter and log abnormal results
  861 | //   await this.applyButton.click();
  862 |
  863 |
  864 |
  865 | //   const testElements = await this.testnamewithabnormal.allTextContents();
  866 |
  867 | //   if (testElements.length === 0) {
  868 | //     console.log("❌ No test name found");
  869 | //     return;
  870 | //   }
  871 |
  872 | //   let abnormalFound = false;
  873 | //   for (const text of testElements) {
  874 | //     if (text.includes("Abnormal")) {
  875 | //       abnormalFound = true;
  876 | //       console.log(`⚠️ Test Name with Abnormal status: ${text}`);
  877 | //     }
  878 | //   }
  879 |
  880 | //   if (!abnormalFound) {
  881 | //     console.log("✅ No abnormal status found in test names");
  882 | //   }
  883 |
  884 |
  885 | // //   const testNameCount = await this.testNameLocators.count();
  886 | // // console.log(`Test name elements found: ${testNameCount}`);
  887 |
  888 | // //   if (abnormalCount === 0) {
  889 | // //     console.log(`✅ No abnormal test results in ${monthRangeText}.`);
  890 | // //   } else {
  891 | // //     for (let i = 0; i < abnormalCount; i++) {
  892 | // //       const row = this.testNameLocators.nth(i);
  893 | // //       await row.waitFor({ state: 'visible' });
  894 | // //       const testName = await row.innerText();
  895 | // //       console.log(`🔴 ${testName} - Status: ABNORMAL`);
  896 | // //     }
  897 | // //   }
  898 |
  899 | //     await this.page.waitForLoadState('networkidle');
  900 |
  901 | //   // Step 4: Uncheck 'Abnormal' checkbox safely
  902 | // if (await this.checkboxAbnormal.isChecked()) {
  903 | //   try {
  904 | //     await this.checkboxAbnormal.uncheck(); // Fallback for custom checkboxes
  905 | //     await this.page.waitForTimeout(500); // Wait for UI to update
  906 | //     console.log('Checkbox is now: Unchecked');
  907 | //   } catch (error) {
  908 | //     console.log('Failed to uncheck checkbox:', error);
  909 | //   }
  910 | // } else {
  911 | //   console.log('Checkbox is already Unchecked');
  912 | // }
  913 |
  914 |
  915 | //   // const isUnchecked = await this.checkboxAbnormal.isChecked();
  916 | //   // console.log("Is checkbox checked? ", isUnchecked); // should be false
  917 |
```