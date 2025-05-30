# Test info

- Name: Member Portal - Labs Flow >>  doctor type keyword search 
- Location: /home/karthi/pmp/src/tests/providerpagegroup.spec.js:37:9

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Enter a type of doctor or a' })

    at ProviderPage.enterDoctorType (/home/karthi/pmp/src/pages/ProviderPage.js:72:34)
    at /home/karthi/pmp/src/tests/providerpagegroup.spec.js:41:23
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
   13 |     this.doctorsType = page.getByText("Doctor's Type");
   14 |         this.doctorTypeTextbox = page.getByRole('textbox', { name: 'Enter a type of doctor or a' });
   15 |         this.searchButton = page.getByRole('button', { name: 'Search' });
   16 |         this.clearButton = page.getByText('Clear');
   17 |         this.zipCodeTextbox = page.getByRole('textbox', { name: 'ZIP Code' });
   18 |         this.doctorNameTextbox = page.getByRole('textbox', { name: "Enter a doctor's name" });
   19 |         this.plandropdown -page.locator("//button[@id='dropdownPlanFilterButton']")
   20 |         this.kidzPartnersButton = page.getByRole('button', { name: 'KidzPartners' });
   21 |         // this.healthPartnersText = page.getByText('Health Partners', { exact: true });
   22 |         this.healthPartnersText = page.getByRole('button', { name: 'Health Partners' });
   23 |          this.healthpartnersMedicare=page.locator("//li[normalize-space()='Health Partners Medicare']");
   24 |         // this.healthPartnersLabel = page.locator("//p[@aria-label='Health Partners']");
   25 |         // this.clearButton = page.getByText('Clear');
   26 |
   27 |         // this.healthPartnersButton = page.locator("//button[@id='dropdownPlanFilterButton']");
   28 |         // this.kidzPartnersOption = page.getByText('KidzPartners');
   29 |         // this.healthFacilitiesOption = page.getByText('Health Facilities');
   30 |         // this.myDirectoryButton = page.getByRole('button', { name: 'My Directory' });
   31 |         // this.removeAllButton = page.getByRole('button', { name: 'Remove All' });
   32 |         this.logoutButton = page.locator("//button[@id='dropdownMenuProfile']");
   33 |         this.logoutButtonProfile = page.locator('#dropdownItemLogoutButton');
   34 |
   35 |
   36 |       }
   37 |
   38 |     // open the provider tab
   39 |
   40 |   async openproviderTab () {
   41 |     await this.providerTap.click();
   42 |
   43 |    // Ensure the provider tab is visible before clicking
   44 |     await this.providerTap.waitFor({ state: 'visible', timeout: 20000 });
   45 |     await this.providerTap.click();
   46 | }
   47 |
   48 | // async selectDoctorType() {
   49 | //   const doctorType = this.page.getByText('Doctor\'s Type');
   50 |   
   51 | //   // Wait for the element to be visible and clickable, with a timeout
   52 | //   await doctorType.waitFor({ state: 'visible', timeout: 10000 }); // Wait for up to 10 seconds
   53 |   
   54 | //   // Click the element
   55 | //   await doctorType.click();
   56 | // }
   57 | async selectDoctorType() {
   58 |   await this.clickProviderLink(); // Ensure navigation
   59 |   await this.page.waitForLoadState('networkidle'); // Wait for page to fully load
   60 |
   61 |   const doctorType = this.page.getByText("Doctor's Type");
   62 |
   63 |   // Validate it exists before waiting to avoid timeout
   64 |   // await expect(doctorType).toBeVisible({ timeout: 10000 });
   65 |   // await doctorType.click();
   66 |   await page.getByRole('button', { name: 'Search' }).click(); // example
   67 | await expect(doctorType).toBeVisible({ timeout: 20000 });
   68 |
   69 | }
   70 |
   71 | async enterDoctorType(keyword) {
>  72 |     await this.doctorTypeTextbox.fill(keyword);
      |                                  ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
   73 |   }
   74 |
   75 |   async enterDoctorName(name) {
   76 |     await this.doctorNameTextbox.fill(name);
   77 |   }
   78 |
   79 |   async openPlanDropdown() {
   80 |     await this.planDropdown.click();
   81 |   }
   82 |
   83 |   async selectPlan(planName) {
   84 |     await this.openPlanDropdown();
   85 |
   86 |     switch(planName) {
   87 |       case 'KidzPartners':
   88 |         await this.kidzPartnersButton.click();
   89 |         break;
   90 |       case 'Health Partners Medicare':
   91 |         await this.healthPartnersMedicareButton.click();
   92 |         break;
   93 |       case 'Health Partners':
   94 |         await this.healthPartnersButton.click();
   95 |         break;
   96 |       default:
   97 |         throw new Error(`Plan option "${planName}" not recognized.`);
   98 |     }
   99 |   }
  100 |
  101 |   async clickSearch() {
  102 |     await this.searchButton.click();
  103 |   }
  104 |
  105 |   async clickClear() {
  106 |     await this.clearButton.click();
  107 |   }
  108 |
  109 |
  110 | async fillDoctorType(name) {
  111 |     await this.doctorTypeTextbox.click();
  112 |     await this.doctorTypeTextbox.fill(name);
  113 | }
  114 |
  115 |
  116 |
  117 | async fillZipCode(zip) {
  118 |     await this.zipCodeTextbox.click();
  119 |     await this.zipCodeTextbox.fill(zip);
  120 | }
  121 |
  122 | async clickProviderCard() {
  123 |     await this.page.locator('div:nth-child(2) > app-provider-search-card > .card > .card-footer').click();
  124 | }
  125 |
  126 | async fillDoctorName(name) {
  127 |     await this.doctorNameTextbox.click();
  128 |     await this.doctorNameTextbox.fill(name);
  129 | }
  130 |
  131 |
  132 | // async verifyDoctorResult(name) {
  133 | //   const doctorResult = this.page.getByText(name);
  134 |
  135 | //   // Assert that the doctor name is visible
  136 | //   await expect(doctorResult).toBeVisible();
  137 |
  138 | //   // Get the text and print it
  139 | //   const doctorNameText = await doctorResult.textContent();
  140 | //   console.log('Doctor found:', doctorNameText.trim());
  141 | // }
  142 |
  143 | async fillDoctorTypeFlow() {
  144 |   await this.doctorsType.click();
  145 |   await this.kidzPartnersButton.click();
  146 |
  147 |   const isPlanVisible = await this.healthPartnersText.isVisible();
  148 |   console.log("object", isPlanVisible);
  149 |
  150 |   if (isPlanVisible) {
  151 |     await this.healthPartnersText.click();
  152 |     await this.healthPartnersLabel.click();
  153 |     await this.page.mouse.wheel(0, 500);
  154 |
  155 |
  156 |     const selectedPlan = (await this.healthPartnersLabel.textContent()).trim();
  157 |     await expect(this.healthPartnersLabel).toHaveText(selectedPlan);
  158 |
  159 |     console.log(`✅ User selected the health plan: ${selectedPlan}`);
  160 |   } else {
  161 |     console.log('❌ No provider displayed under the selected category.');
  162 |   }
  163 |
  164 |   await this.clearButton.click();
  165 | }
  166 | // async verifyDoctorResult(name) {
  167 | //   const doctorResult = this.page.getByText(name);
  168 |
  169 | //   // Assert that the doctor name is visible
  170 | //   await expect(doctorResult).toBeVisible();
  171 |
  172 | //   // Get the text and print it
```