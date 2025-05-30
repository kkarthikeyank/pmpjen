# Test info

- Name: Member Portal - Labs Flow >>  doctor type keyword search 
- Location: /home/karthi/pmp/src/tests/providerpagegroup.spec.js:37:5

# Error details

```
Error: locator.click: Unexpected token "/" while parsing css selector "/div[normalize-space(text())="Doctor's Type"]". Did you mean to CSS.escape it?
Call log:
  - waiting for /div[normalize-space(text())="Doctor's Type"]

    at ProviderPage.selectDoctorType (/home/karthi/pmp/src/pages/ProviderPage.js:66:24)
    at /home/karthi/pmp/src/tests/providerpagegroup.spec.js:39:9
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
- dialog "Provider Directory - Member Portal"
- heading "PAGE_TITLE.PROVIDER_DIRECTORY_PAGE" [level=1]: Provider Directory
- paragraph: "Search by:"
- text: Doctor's Type Doctor's Name Health Facilities
- dialog:
  - document:
    - text: Alert
    - button "Close"
    - paragraph: "Something went wrong. Please contact customer support and provide them the following error message:"
    - paragraph: No Response
    - button "Close"
```

# Test source

```ts
   1 |
   2 |
   3 |
   4 | // pages/ProviderPage.js
   5 | import { expect } from '@playwright/test';
   6 |
   7 | export class ProviderPage {
   8 |   constructor(page) {
   9 |     this.page = page;
   10 |     // Define locators
   11 |     this.providerTap = page.locator('#navLink-PROVIDERS');
   12 |
   13 |         this.doctorsType = page.locator(`/div[normalize-space(text())="Doctor's Type"]`);
   14 |         this.firstdoctorname = page.getByText('Doctor\'s Name');
   15 |
   16 |         this.doctorName = page.locator(`//div[normalize-space(text())="Doctor's Name"]`);
   17 |
   18 |         this.doctorTypeTextbox = page.getByRole('textbox', { name: 'Enter a type of doctor or a' });
   19 |         this.doctorNameResults = page.locator("//span[contains(@class, 'provider-card-name')]");
   20 |         this.distancedropdown = page.locator("//button[@id='dropdownDistanceFilterButton']");
   21 |
   22 |         this.searchButton = page.getByRole('button', { name: 'Search' });
   23 |         this.clearButton = page.getByText('Clear');
   24 |         this.zipCodeTextbox = page.getByRole('textbox', { name: 'ZIP Code' });
   25 |         this.doctorNameTextbox = page.getByRole('textbox', { name: "Enter a doctor's name" });
   26 |         this.openplandropdown =page.locator("//button[@id='dropdownPlanFilterButton']")
   27 |         this.kidzPartnersButton = page.locator("//li[normalize-space()='KidzPartners']");
   28 |         this.healthPartnersButton = page.locator("//li[normalize-space()='Health Partners']");
   29 |          this.healthpartnersMedicare =page.locator("//li[normalize-space()='Health Partners Medicare']");
   30 |         // this.healthPartnersLabel = page.locator("//p[@aria-label='Health Partners']");
   31 |         // this.clearButton = page.getByText('Clear');
   32 |
   33 |         // this.healthPartnersButton = page.locator("//button[@id='dropdownPlanFilterButton']");
   34 |         // this.kidzPartnersOption = page.getByText('KidzPartners');
   35 |         // this.healthFacilitiesOption = page.getByText('Health Facilities');
   36 |         // this.myDirectoryButton = page.getByRole('button', { name: 'My Directory' });
   37 |         // this.removeAllButton = page.getByRole('button', { name: 'Remove All' });
   38 |         this.logoutButton = page.locator("//button[@id='dropdownMenuProfile']");
   39 |         this.logoutButtonProfile = page.locator('#dropdownItemLogoutButton');
   40 |         this.  specialtyLocator = page.locator("//p[starts-with(@data-id, 'PROVIDERS.SPECIALTY-')]");
   41 |         this. planLocator = page.locator("//p[@aria-label='Plan']/following-sibling::p[1]");
   42 |
   43 |
   44 |       }
   45 |
   46 |     // open the provider tab
   47 |
   48 |   async openproviderTab () {
   49 |
   50 |    // Ensure the provider tab is visible before clicking
   51 |     await this.providerTap.waitFor({ state: 'visible', timeout: 20000 });
   52 |     await this.providerTap.click();
   53 | }
   54 |
   55 | // async selectDoctorType() {
   56 | //   const doctorType = this.page.getByText('Doctor\'s Type');
   57 |   
   58 | //   // Wait for the element to be visible and clickable, with a timeout
   59 | //   await doctorType.waitFor({ state: 'visible', timeout: 10000 }); // Wait for up to 10 seconds
   60 |   
   61 | //   // Click the element
   62 | //   await doctorType.click();
   63 | // }
   64 | async selectDoctorType() {
   65 | await this.page.waitForSelector('//div[normalize-space(text())="Doctor\'s Type"]', { state: 'visible', timeout: 10000 });
>  66 | await this.doctorsType.click();
      |                        ^ Error: locator.click: Unexpected token "/" while parsing css selector "/div[normalize-space(text())="Doctor's Type"]". Did you mean to CSS.escape it?
   67 |
   68 | }
   69 |
   70 | async enterDoctorType(keyword) {
   71 |     await this.doctorTypeTextbox.fill(keyword);
   72 |   }
   73 |
   74 |   // async enterDoctorName(name) {
   75 |   //   await this.doctorNameTextbox.fill(name);
   76 |   // }
   77 |
   78 |   // async openPlanDropdown() {
   79 |   //   await this.openplandropdown.click();
   80 |   // }
   81 |
   82 |   async selectPlan(planName) {
   83 |   await this.openplandropdown.click();
   84 |  const planOption = this.page.locator(`//li[normalize-space(.)='${planName}']`);
   85 |   await planOption.click();
   86 |
   87 |
   88 | }
   89 |
   90 |  async selectDistance(distancename) {
   91 |     await this.distancedropdown.click();
   92 |     const distanceoption = this.page.locator(`//li[normalize-space(.)='${distancename}']`);
   93 |     await distanceoption.click();
   94 |  }
   95 |
   96 |   //  async verifySelectedDistance(expectedDistance) {
   97 |   //   const actualText = await this.selectedDistanceLocator.textContent();
   98 |   //   if (actualText?.includes(expectedDistance.trim())) {
   99 |   //     console.log(`✅ Correct distance selected: ${actualText.trim()}`);
  100 |   //   } else {
  101 |   //     console.error(`❌ Mismatch in selected distance. Expected: "${expectedDistance}", Got: "${actualText}"`);
  102 |   //   }
  103 |   // }
  104 |
  105 |
  106 |   async printSpecialtyIfExists() {
  107 |     const isVisible = await this.specialtyLocator.isVisible();
  108 |     if (isVisible) {
  109 |       const text = await this.specialtyLocator.textContent();
  110 |       console.log(`Specialty: ${text}`);
  111 |     } else {
  112 |       console.log("No specialty displayed.");
  113 |     }
  114 |   }
  115 |
  116 |   async printPlanIfExists() {
  117 |     const isVisible = await this.planLocator.isVisible();
  118 |     if (isVisible) {
  119 |       const text = await this.planLocator.textContent();
  120 |       console.log(`Plan: ${text}`);
  121 |     } else {
  122 |       console.log("No plan displayed.");
  123 |     }
  124 |   }
  125 |
  126 |   async clickSearch() {
  127 |     await this.searchButton.click();
  128 |   }
  129 |
  130 |   async clickClear() {
  131 |     await this.clearButton.click();
  132 |   }
  133 |
  134 |
  135 |   async clickDoctorName() {
  136 |
  137 |      await this.firstdoctorname.click();
  138 |   }
  139 |   async selectDoctorName() {
  140 |  await this.doctorName.waitFor({ state: 'visible', timeout: 10000 });
  141 |
  142 | await this.doctorName.click();
  143 |
  144 | }
  145 |
  146 |   async searchByDoctorName(name) {
  147 |     await this.doctorNameTextbox.fill(name);
  148 |
  149 |   }
  150 |    async selectDoctorPlan(planName) {
  151 |   await this.openplandropdown.click();
  152 |  const planOption = this.page.locator(`//li[normalize-space(.)='${planName}']`);
  153 |  await planOption.waitFor({ state: 'visible', timeout: 10000 });
  154 |
  155 |   await planOption.click();
  156 |    console.log(`[INFO] Selected plan: ${planName}`);
  157 |
  158 |
  159 | }
  160 |
  161 |
  162 |
  163 |   async printdoctorNameIfExists() {
  164 |     const isVisible = await this.doctorNameResults.isVisible();
  165 |     if (isVisible) {
  166 |       const text = await this.doctorNameResults.textContent();
```