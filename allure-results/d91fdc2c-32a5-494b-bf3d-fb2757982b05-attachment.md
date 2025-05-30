# Test info

- Name: Member Portal - Labs Flow >>  doctor type keyword search 
- Location: /home/karthi/pmp/src/tests/providerpagegroup.spec.js:37:9

# Error details

```
Error: locator.click: Error: strict mode violation: locator('text=Health Partners') resolved to 2 elements:
    1) <li _ngcontent-nfs-c244="" class="dropdown-item font-size-sm" data-id="plan-name: Health Partners Medicare"> Health Partners Medicare </li> aka getByText('Health Partners Medicare')
    2) <li _ngcontent-nfs-c244="" class="dropdown-item font-size-sm" data-id="plan-name: Health Partners"> Health Partners </li> aka getByText('Health Partners', { exact: true })

Call log:
  - waiting for locator('text=Health Partners')

    at ProviderPage.selectPlan (/home/karthi/pmp/src/pages/ProviderPage.js:76:20)
    at /home/karthi/pmp/src/tests/providerpagegroup.spec.js:41:8
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
- paragraph: Keyword Search
- dialog "Open Provide card modal button"
- textbox "Enter a type of doctor or a specialty": Clinical Psychologist
- paragraph: Plan
- button "KidzPartners" [expanded]
- list:
  - listitem: KidzPartners
  - listitem: Health Partners Medicare
  - listitem: Health Partners
- paragraph: Location
- dialog "Check current location button"
- textbox "ZIP Code": "19474"
- paragraph: Distance
- button "More than 100 miles"
- button "Search"
- text: Clear
- separator
- button "Filter results" [disabled]
- button "Compare providers (0)" [disabled]
- text: "Filters:"
- 'button "Sort By: Best Match"'
- text: "Showing: 1-5 of 0 No matching results were found. Please adjust the filter."
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
- button "My Directory"
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
   13 |         this.doctorsType = page.locator(`xpath=//div[normalize-space(text())="Doctor's Type"]`);
   14 |         this.doctorTypeTextbox = page.getByRole('textbox', { name: 'Enter a type of doctor or a' });
   15 |         this.searchButton = page.getByRole('button', { name: 'Search' });
   16 |         this.clearButton = page.getByText('Clear');
   17 |         this.zipCodeTextbox = page.getByRole('textbox', { name: 'ZIP Code' });
   18 |         this.doctorNameTextbox = page.getByRole('textbox', { name: "Enter a doctor's name" });
   19 |         this.openplandropdown =page.locator("//button[@id='dropdownPlanFilterButton']")
   20 |         this.kidzPartnersButton = page.getByRole('button', { name: 'KidzPartners' });
   21 |         // this.healthPartnersText = page.getByText('Health Partners', { exact: true });
   22 |         this.healthPartnersButton = page.getByRole('button', { name: 'Health Partners' });
   23 |          this.healthpartnersMedicare =page.locator("//li[normalize-space()='Health Partners Medicare']");
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
   41 |
   42 |    // Ensure the provider tab is visible before clicking
   43 |     await this.providerTap.waitFor({ state: 'visible', timeout: 20000 });
   44 |     await this.providerTap.click();
   45 | }
   46 |
   47 | // async selectDoctorType() {
   48 | //   const doctorType = this.page.getByText('Doctor\'s Type');
   49 |   
   50 | //   // Wait for the element to be visible and clickable, with a timeout
   51 | //   await doctorType.waitFor({ state: 'visible', timeout: 10000 }); // Wait for up to 10 seconds
   52 |   
   53 | //   // Click the element
   54 | //   await doctorType.click();
   55 | // }
   56 | async selectDoctorType() {
   57 |
   58 | await this.doctorsType.click();
   59 | }
   60 |
   61 | async enterDoctorType(keyword) {
   62 |     await this.doctorTypeTextbox.fill(keyword);
   63 |   }
   64 |
   65 |   // async enterDoctorName(name) {
   66 |   //   await this.doctorNameTextbox.fill(name);
   67 |   // }
   68 |
   69 |   // async openPlanDropdown() {
   70 |   //   await this.openplandropdown.click();
   71 |   // }
   72 |
   73 |   async selectPlan(planName) {
   74 |   await this.openplandropdown.click();
   75 |   const planOption = this.page.locator(`text=${planName}`);
>  76 |   await planOption.click();
      |                    ^ Error: locator.click: Error: strict mode violation: locator('text=Health Partners') resolved to 2 elements:
   77 | }
   78 |
   79 |
   80 |   async clickSearch() {
   81 |     await this.searchButton.click();
   82 |   }
   83 |
   84 |   async clickClear() {
   85 |     await this.clearButton.click();
   86 |   }
   87 |
   88 |
   89 | async fillDoctorType(name) {
   90 |     await this.doctorTypeTextbox.click();
   91 |     await this.doctorTypeTextbox.fill(name);
   92 | }
   93 |
   94 |
   95 |
   96 | async fillZipCode(zip) {
   97 |     await this.zipCodeTextbox.click();
   98 |     await this.zipCodeTextbox.fill(zip);
   99 | }
  100 |
  101 | async clickProviderCard() {
  102 |     await this.page.locator('div:nth-child(2) > app-provider-search-card > .card > .card-footer').click();
  103 | }
  104 |
  105 | async fillDoctorName(name) {
  106 |     await this.doctorNameTextbox.click();
  107 |     await this.doctorNameTextbox.fill(name);
  108 | }
  109 |
  110 |
  111 | // async verifyDoctorResult(name) {
  112 | //   const doctorResult = this.page.getByText(name);
  113 |
  114 | //   // Assert that the doctor name is visible
  115 | //   await expect(doctorResult).toBeVisible();
  116 |
  117 | //   // Get the text and print it
  118 | //   const doctorNameText = await doctorResult.textContent();
  119 | //   console.log('Doctor found:', doctorNameText.trim());
  120 | // }
  121 |
  122 | async fillDoctorTypeFlow() {
  123 |   await this.doctorsType.click();
  124 |   await this.kidzPartnersButton.click();
  125 |
  126 |   const isPlanVisible = await this.healthPartnersText.isVisible();
  127 |   console.log("object", isPlanVisible);
  128 |
  129 |   if (isPlanVisible) {
  130 |     await this.healthPartnersText.click();
  131 |     await this.healthPartnersLabel.click();
  132 |     await this.page.mouse.wheel(0, 500);
  133 |
  134 |
  135 |     const selectedPlan = (await this.healthPartnersLabel.textContent()).trim();
  136 |     await expect(this.healthPartnersLabel).toHaveText(selectedPlan);
  137 |
  138 |     console.log(`✅ User selected the health plan: ${selectedPlan}`);
  139 |   } else {
  140 |     console.log('❌ No provider displayed under the selected category.');
  141 |   }
  142 |
  143 |   await this.clearButton.click();
  144 | }
  145 | // async verifyDoctorResult(name) {
  146 | //   const doctorResult = this.page.getByText(name);
  147 |
  148 | //   // Assert that the doctor name is visible
  149 | //   await expect(doctorResult).toBeVisible();
  150 |
  151 | //   // Get the text and print it
  152 | //   const doctorNameText = await doctorResult.textContent();
  153 | //   console.log('Doctor found:', doctorNameText.trim());
  154 | // }
  155 | // async adjustDistance() {
  156 | //     await this.moreThan100MilesButton.click();
  157 | //     await this.page.getByText('Within 10 miles').click();
  158 | // }
  159 |
  160 | // async switchPlan() {
  161 | //     // await this.healthPartnersButton.click();
  162 | //     // await this.kidzPartnersOption.click();
  163 | //     await this.healthFacilitiesOption.click();
  164 | //     await this.page.getByRole('button', { name: 'KidzPartners' }).click();
  165 | //     await this.page.getByText('Health Partners', { exact: true }).click();
  166 | // }
  167 |
  168 | // async manageDirectory() {
  169 | //     await this.myDirectoryButton.click();
  170 | //     await this.removeAllButton.click();
  171 | // }
  172 |
  173 | // async returnToPreviousPage() {
  174 | //     await this.page.getByText('Return to previous page').click();
  175 | // }
  176 |
```