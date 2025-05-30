# Test info

- Name: Member Portal - Labs Flow >>  doctor type keyword search 
- Location: /home/karthi/pmp/src/tests/providerpagegroup.spec.js:37:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//*[normalize-space(.)=\' Within 10 miles \']')

    at ProviderPage.selectDistance (/home/karthi/pmp/src/pages/ProviderPage.js:101:23)
    at /home/karthi/pmp/src/tests/providerpagegroup.spec.js:42:9
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
- textbox "Enter a type of doctor or a specialty": Psychologist
- paragraph: Plan
- button "KidzPartners"
- paragraph: Location
- dialog "Check current location button"
- textbox "ZIP Code": "19474"
- paragraph: Distance
- button "More than 100 miles" [expanded]
- list:
  - listitem: Within 10 miles
  - listitem: Within 20 miles
  - listitem: Within 50 miles
  - listitem: Within 100 miles
  - listitem: More than 100 miles
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
   12 |     this.firstdoctortype = page.getByText('Doctor\'s Type');
   13 |
   14 |
   15 |         this.doctorsType = page.locator(`//div[normalize-space(text())="Doctor's Type"]`);
   16 |         this.firstdoctorname = page.getByText('Doctor\'s Name');
   17 |
   18 |         this.doctorName = page.locator(`//div[normalize-space(text())="Doctor's Name"]`);
   19 |
   20 |         this.doctorTypeTextbox = page.getByRole('textbox', { name: 'Enter a type of doctor or a' });
   21 |         this.doctorNameResults = page.locator("//span[contains(@class, 'provider-card-name')]");
   22 |         this.distancedropdown = page.locator("//button[@id='dropdownDistanceFilterButton']");
   23 |
   24 |         this.searchButton = page.getByRole('button', { name: 'Search' });
   25 |         this.clearButton = page.getByText('Clear');
   26 |         this.zipCodeTextbox = page.getByRole('textbox', { name: 'ZIP Code' });
   27 |         this.doctorNameTextbox = page.getByRole('textbox', { name: "Enter a doctor's name" });
   28 |         this.openplandropdown =page.locator("//button[@id='dropdownPlanFilterButton']")
   29 |         this.kidzPartnersButton = page.locator("//li[normalize-space()='KidzPartners']");
   30 |         this.healthPartnersButton = page.locator("//li[normalize-space()='Health Partners']");
   31 |          this.healthpartnersMedicare =page.locator("//li[normalize-space()='Health Partners Medicare']");
   32 |         // this.healthPartnersLabel = page.locator("//p[@aria-label='Health Partners']");
   33 |         // this.clearButton = page.getByText('Clear');
   34 |
   35 |         // this.healthPartnersButton = page.locator("//button[@id='dropdownPlanFilterButton']");
   36 |         // this.kidzPartnersOption = page.getByText('KidzPartners');
   37 |         // this.healthFacilitiesOption = page.getByText('Health Facilities');
   38 |         // this.myDirectoryButton = page.getByRole('button', { name: 'My Directory' });
   39 |         // this.removeAllButton = page.getByRole('button', { name: 'Remove All' });
   40 |         this.logoutButton = page.locator("//button[@id='dropdownMenuProfile']");
   41 |         this.logoutButtonProfile = page.locator('#dropdownItemLogoutButton');
   42 |         this.  specialtyLocator = page.locator("//p[starts-with(@data-id, 'PROVIDERS.SPECIALTY-')]");
   43 |         this. planLocator = page.locator("//p[@aria-label='Plan']/following-sibling::p[1]");
   44 |
   45 |
   46 |       }
   47 |
   48 |     // open the provider tab
   49 |
   50 |   async openproviderTab () {
   51 |
   52 |    // Ensure the provider tab is visible before clicking
   53 |     await this.providerTap.waitFor({ state: 'visible', timeout: 20000 });
   54 |     await this.providerTap.click();
   55 | }
   56 |
   57 | // async selectDoctorType() {
   58 | //   const doctorType = this.page.getByText('Doctor\'s Type');
   59 |   
   60 | //   // Wait for the element to be visible and clickable, with a timeout
   61 | //   await doctorType.waitFor({ state: 'visible', timeout: 10000 }); // Wait for up to 10 seconds
   62 |   
   63 | //   // Click the element
   64 | //   await doctorType.click();
   65 | // }
   66 | async firstdoctortypeopen() {
   67 |     await this.firstdoctortype.click();
   68 | }
   69 | async selectDoctorType() {
   70 | await this.page.waitForSelector('//div[normalize-space(text())="Doctor\'s Type"]', { state: 'visible', timeout: 10000 });
   71 | await this.doctorsType.click();
   72 |
   73 | }
   74 |
   75 | async enterDoctorType(keyword) {
   76 |     await this.doctorTypeTextbox.fill(keyword);
   77 |   }
   78 |
   79 |   // async enterDoctorName(name) {
   80 |   //   await this.doctorNameTextbox.fill(name);
   81 |   // }
   82 |
   83 |   // async openPlanDropdown() {
   84 |   //   await this.openplandropdown.click();
   85 |   // }
   86 |
   87 |   async selectPlan(planName) {
   88 |   await this.openplandropdown.click();
   89 |  const planOption = this.page.locator(`//li[normalize-space(.)='${planName}']`);
   90 |   await planOption.click();
   91 |
   92 |
   93 | }
   94 | async selectDistance(distancenameRaw) {
   95 |   // const distancename = distancenameRaw.trim();
   96 |
   97 |   await this.distancedropdown.click();
   98 |
   99 |   const optionLocator = this.page.locator(`//*[normalize-space(.)='${distancenameRaw}']`);
  100 |
> 101 |   await optionLocator.click();
      |                       ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  102 | }
  103 |
  104 |
  105 |
  106 |   //  async verifySelectedDistance(expectedDistance) {
  107 |   //   const actualText = await this.selectedDistanceLocator.textContent();
  108 |   //   if (actualText?.includes(expectedDistance.trim())) {
  109 |   //     console.log(`✅ Correct distance selected: ${actualText.trim()}`);
  110 |   //   } else {
  111 |   //     console.error(`❌ Mismatch in selected distance. Expected: "${expectedDistance}", Got: "${actualText}"`);
  112 |   //   }
  113 |   // }
  114 |
  115 |
  116 |   async printSpecialtyIfExists() {
  117 |     const isVisible = await this.specialtyLocator.isVisible();
  118 |     if (isVisible) {
  119 |       const text = await this.specialtyLocator.textContent();
  120 |       console.log(`Specialty: ${text}`);
  121 |     } else {
  122 |       console.log("No specialty displayed.");
  123 |     }
  124 |   }
  125 |
  126 |   async printPlanIfExists() {
  127 |     const isVisible = await this.planLocator.isVisible();
  128 |     if (isVisible) {
  129 |       const text = await this.planLocator.textContent();
  130 |       console.log(`Plan: ${text}`);
  131 |     } else {
  132 |       console.log("No plan displayed.");
  133 |     }
  134 |   }
  135 |
  136 |   async clickSearch() {
  137 |     await this.searchButton.click();
  138 |   }
  139 |
  140 |   async clickClear() {
  141 |     await this.clearButton.click();
  142 |   }
  143 |
  144 |
  145 |   async clickDoctorName() {
  146 |
  147 |      await this.firstdoctorname.click();
  148 |   }
  149 |   async selectDoctorName() {
  150 |  await this.doctorName.waitFor({ state: 'visible', timeout: 10000 });
  151 |
  152 | await this.doctorName.click();
  153 |
  154 | }
  155 |
  156 |   async searchByDoctorName(name) {
  157 |     await this.doctorNameTextbox.fill(name);
  158 |
  159 |   }
  160 |    async selectDoctorPlan(planName) {
  161 |   await this.openplandropdown.click();
  162 |  const planOption = this.page.locator(`//li[normalize-space(.)='${planName}']`);
  163 |  await planOption.waitFor({ state: 'visible', timeout: 10000 });
  164 |
  165 |   await planOption.click();
  166 |    console.log(`[INFO] Selected plan: ${planName}`);
  167 |
  168 |
  169 | }
  170 |
  171 |
  172 |
  173 |   async printdoctorNameIfExists() {
  174 |     const isVisible = await this.doctorNameResults.isVisible();
  175 |     if (isVisible) {
  176 |       const text = await this.doctorNameResults.textContent();
  177 |       console.log(`doctor: ${text}`);
  178 |     } else {
  179 |       console.log("No doctor displayed.");
  180 |     }
  181 |   }
  182 |
  183 |   async printdoctorPlanIfExists() {
  184 |     const isVisible = await this.planLocator.isVisible();
  185 |     if (isVisible) {
  186 |       const text = await this.planLocator.textContent();
  187 |       console.log(`Plan: ${text}`);
  188 |     } else {
  189 |       console.log("No plan displayed.");
  190 |     }
  191 |   }
  192 |
  193 |
  194 |
  195 |
  196 |
  197 | async fillZipCode(zip) {
  198 |     await this.zipCodeTextbox.click();
  199 |     await this.zipCodeTextbox.fill(zip);
  200 | }
  201 |
```