# Test info

- Name: Member Portal - Labs Flow >> Check abnormal check and uncheck labvendor  search  
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:164:10

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//button[@id="dropdownDateFilterButton"]')

    at LabsPage.searchlabnameabnormalcheck (/home/karthi/pmp/src/pages/LabsPage.js:911:35)
    at /home/karthi/pmp/src/tests/labspagegroup.spec.js:170:16
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
  - text: "View as:"
  - button "Julia Donaldson"
- main:
  - heading "Welcome, Julia Donaldson" [level=1]
  - heading "MY BENEFITS" [level=2]
  - heading "Current Plan" [level=2]
  - paragraph: Healthchoices Maternity&child
  - paragraph: "Effective Date:"
  - paragraph: 01-01-1995
  - paragraph: "Member:"
  - paragraph: julia donaldson
  - paragraph: "Member ID:"
  - paragraph: "850497953"
  - text: OVERVIEW
  - link "Profile"
  - link "Claims"
  - link "Labs"
  - link "Provider"
  - link "FAQ"
  - text: OTHER LINKS
  - img "Manage My Apps"
  - article: View apps you have authorized to access your data, and if desired, revoke permission to access your data
  - link "View App Management Console":
    - /url: https://appgallery-dev.healthpartnersplans.com/smartauth-fhir/session/management
  - img "HP Connect (Member Portal powered by HealthTrio)"
  - article: Visit the Health Partners Medicaid member portal to order an ID card, change your doctor, visit the HPP Rewards center, view benefits information and access self-management tools for healthy weight maintenance, healthy eating, help getting fit and more.
  - link "View Member Portal":
    - /url: https://hpp.healthtrioconnect.com/
  - heading "CONTACT US - View More" [level=2]:
    - text: CONTACT US -
    - link "View More":
      - /url: https://www.healthpartnersplans.com/about-us/contact-us
  - paragraph: Our Access team is available 24/7. Please contact us with your questions or comments.
  - separator
  - paragraph: "Call care management (1-866-500-4571) for: special need unit, baby partners, fit kids, fitness programs, early and periodic screening, diagnosis and treatment (EPSDT)."
  - text: Health Partners (Medicaid) 1-800-553-0784 KidzPartners (CHIP) 1-888-888-1211 Health Partners Medicare 1-866-901-8000 Fraud Hot Line 1-866-HP-SIU-4U Version 5.0.0
```

# Test source

```ts
   811 | //   await this.optionTestName(TestName);
   812 |
   813 | //   // Step 2: Check 'Abnormal' checkbox
   814 | //   await this.checkboxAbnormal.check();
   815 | //   const isChecked = await this.checkboxAbnormal.isChecked();
   816 |   
   817 | //   console.log("✅ Abnormal checkbox is checked:", isChecked);
   818 |
   819 |
   820 | //   // Step 3: Apply filter and log abnormal results
   821 | //   await this.applyButton.click();
   822 |
   823 |
   824 |
   825 | //   const testElements = await this.testnamewithabnormal.allTextContents();
   826 |
   827 | //   if (testElements.length === 0) {
   828 | //     console.log("❌ No test name found");
   829 | //     return;
   830 | //   }
   831 |
   832 | //   let abnormalFound = false;
   833 | //   for (const text of testElements) {
   834 | //     if (text.includes("Abnormal")) {
   835 | //       abnormalFound = true;
   836 | //       console.log(`⚠️ Test Name with Abnormal status: ${text}`);
   837 | //     }
   838 | //   }
   839 |
   840 | //   if (!abnormalFound) {
   841 | //     console.log("✅ No abnormal status found in test names");
   842 | //   }
   843 |
   844 |
   845 | // //   const testNameCount = await this.testNameLocators.count();
   846 | // // console.log(`Test name elements found: ${testNameCount}`);
   847 |
   848 | // //   if (abnormalCount === 0) {
   849 | // //     console.log(`✅ No abnormal test results in ${monthRangeText}.`);
   850 | // //   } else {
   851 | // //     for (let i = 0; i < abnormalCount; i++) {
   852 | // //       const row = this.testNameLocators.nth(i);
   853 | // //       await row.waitFor({ state: 'visible' });
   854 | // //       const testName = await row.innerText();
   855 | // //       console.log(`🔴 ${testName} - Status: ABNORMAL`);
   856 | // //     }
   857 | // //   }
   858 |
   859 | //     await this.page.waitForLoadState('networkidle');
   860 |
   861 | //   // Step 4: Uncheck 'Abnormal' checkbox safely
   862 | // if (await this.checkboxAbnormal.isChecked()) {
   863 | //   try {
   864 | //     await this.checkboxAbnormal.uncheck(); // Fallback for custom checkboxes
   865 | //     await this.page.waitForTimeout(500); // Wait for UI to update
   866 | //     console.log('Checkbox is now: Unchecked');
   867 | //   } catch (error) {
   868 | //     console.log('Failed to uncheck checkbox:', error);
   869 | //   }
   870 | // } else {
   871 | //   console.log('Checkbox is already Unchecked');
   872 | // }
   873 |
   874 |
   875 | //   // const isUnchecked = await this.checkboxAbnormal.isChecked();
   876 | //   // console.log("Is checkbox checked? ", isUnchecked); // should be false
   877 |
   878 | //   // Step 5: Apply filter again and check for non-abnormal (normal) results
   879 | //   await this.applyButton.click();
   880 | //   const total = await this.testNameLocators.count();
   881 | //   let foundNormal = false;
   882 |    
   883 | //     for (let i = 0; i < total; i++) {
   884 | //     const row = this.testNameLocators.nth(i);
   885 | //     const parent = row.locator('xpath=..');
   886 | //     const isAbnormal = await parent.locator('span', { hasText: 'ABNORMAL' }).count();
   887 |
   888 | //     if (isAbnormal === 0) {
   889 | //       const testName = await row.innerText();
   890 | //       console.log(`🟢 ${testName} - Status: UNABNORMAL`);
   891 | //       foundNormal = true;
   892 | //     }
   893 | //   }
   894 |
   895 |   
   896 | //   if (!foundNormal) {
   897 | //     console.log(`✅ No UNABNORMAL test results for ${TestName} in ${monthRangeText}.`);
   898 | //   }
   899 |
   900 | //   // Step 6: Clear all filters
   901 | //   await this.clearFilters();
   902 | // }
   903 |
   904 |
   905 |
   906 | //  scenario : search for abnormal check  and uncheck status  test results with labvendor name
   907 |
   908 |
   909 |
   910 | async searchlabnameabnormalcheck(rangeText) {
>  911 |     await this.last36MonthsButton.click();
       |                                   ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
   912 |     // await this.page.getByText(rangeText).click();
   913 |     await this.page.locator('li.dropdown-item', { hasText: rangeText }).click();
   914 |
   915 |   }
   916 |      async searchlabnameabnormal(labname ){
   917 |     await this.labSearchInput.click();
   918 |     await this.labSearchInput.fill(labname);
   919 |    await this.labSearchInput.waitFor({ state: 'visible' });
   920 |   }
   921 |
   922 |   async checkboxlabname() {
   923 |   const isChecked = await this.checkboxAbnormal.isChecked();
   924 |   if (!isChecked) {
   925 |     await this.checkboxAbnormal.click();
   926 |   }
   927 |
   928 |   await this.applyButton.click();
   929 |     await this.page.evaluate(() => {
   930 |     window.scrollBy(0, 500); // Scroll down by 500 pixels
   931 |   });
   932 |   await this.page.waitForTimeout(500); // Small pause after scroll
   933 | }
   934 |
   935 | async uncheckboxlabname() {
   936 |   const isChecked = await this.checkboxAbnormal.isChecked();
   937 |   if (isChecked) {
   938 |     await this.checkboxAbnormal.uncheck();
   939 |   }
   940 |   await this.applyButton.click();
   941 |
   942 |   await this.page.evaluate(() => {
   943 |     window.scrollBy(0, 500); // Scroll down by 500 pixels
   944 |   });
   945 |   await this.page.waitForTimeout(500); // Small pause after scroll
   946 |
   947 | }
   948 | async printlabNames() {
   949 |   const physicianNames = await this.physicianNameElements.allTextContents();
   950 |
   951 |   if (physicianNames.length > 0) {
   952 |     console.log("Physician Names:");
   953 |     physicianNames.forEach(name => console.log(name));
   954 |   } else {
   955 |     console.log("No physician names found.");
   956 |   }
   957 | }
   958 |
   959 |
   960 | async printAbnormallabname() {
   961 |   const count = await this.testNameLocators.count();
   962 |   if (count === 0) {
   963 |     console.log('✅ No abnormal test results found.');
   964 |     return;
   965 |   }
   966 |
   967 |   const testNames = [];
   968 |   for (let i = 0; i < count; i++) {
   969 |     const row = this.testNameLocators.nth(i);
   970 |     const testName = await row.locator('span').first().innerText();
   971 |     testNames.push(testName);
   972 |   }
   973 |
   974 |   console.log('🔴 Abnormal test results found:');
   975 |   testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
   976 | }
   977 |
   978 |
   979 | async printNonAbnormallabname() {
   980 |   const allRows = this.page.locator(`//div[@data-id='labsCardObjectResultsDiv']//div[contains(@class, 'row')]`);
   981 |   const total = await allRows.count();
   982 |   const testNames = [];
   983 |
   984 |   for (let i = 0; i < total; i++) {
   985 |     const row = allRows.nth(i);
   986 |     const isAbnormal = await row.locator('span', { hasText: 'ABNORMAL' }).count();
   987 |     if (isAbnormal === 0) {
   988 |       const testName = await row.locator('span').first().innerText();
   989 |       testNames.push(testName);
   990 |     }
   991 |   }
   992 |
   993 |   if (testNames.length === 0) {
   994 |     console.log('✅ No normal/non-abnormal test results found.');
   995 |   } else {
   996 |     console.log('🟢 Non-abnormal test results found:');
   997 |     testNames.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));
   998 |   }
   999 | }
  1000 |
  1001 | // async runAbnormallabvendorFlow(monthRangeText, labvendor) {
  1002 | //   // Step 1: Select Date Range and Physician
  1003 | //   // await this.openDateRangelabvendor(monthRangeText);
  1004 | //   // await this.selectDatelabendor(labvendor);
  1005 |
  1006 | //   // Step 2: Check 'Abnormal' checkbox
  1007 | //   await this.checkboxAbnormal.check();
  1008 | //   const isChecked = await this.checkboxAbnormal.isChecked();
  1009 |   
  1010 | //   console.log("✅ Abnormal checkbox is checked:", isChecked);
  1011 |
```