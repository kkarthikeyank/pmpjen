# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: page.waitForSelector: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('//div[normalize-space(text())="Doctor\'s Type"]') to be visible

    at ProviderPage.selectDoctorType (/home/karthi/pmp/src/pages/ProviderPage.js:63:17)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:281:18
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
- textbox "ex. John Smith": Down
- paragraph: Test Names
- textbox "ex. Triglycerides": Calcium SerPl-sCnc
- paragraph: Lab Vendor
- textbox "ex. Life Labs": Precision Labs
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
- text: entries No Lab Results to Show
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
- text: "Showing: 0 - 0 of 0"
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
   23 |         this.distancemile = page.locator("//span[@class='provider-card-distance']");
   24 |
   25 |         this.searchButton = page.getByRole('button', { name: 'Search' });
   26 |         this.clearButton = page.getByText('Clear');
   27 |         this.zipCodeTextbox = page.getByRole('textbox', { name: 'ZIP Code' });
   28 |         this.doctorNameTextbox = page.getByRole('textbox', { name: "Enter a doctor's name" });
   29 |         this.openplandropdown =page.locator("//button[@id='dropdownPlanFilterButton']")
   30 |         this.kidzPartnersButton = page.locator("//li[normalize-space()='KidzPartners']");
   31 |         this.healthPartnersButton = page.locator("//li[normalize-space()='Health Partners']");
   32 |          this.healthpartnersMedicare =page.locator("//li[normalize-space()='Health Partners Medicare']");
   33 |         // this.healthPartnersLabel = page.locator("//p[@aria-label='Health Partners']");
   34 |         // this.clearButton = page.getByText('Clear');
   35 |
   36 |         // this.healthPartnersButton = page.locator("//button[@id='dropdownPlanFilterButton']");
   37 |         // this.kidzPartnersOption = page.getByText('KidzPartners');
   38 |         // this.healthFacilitiesOption = page.getByText('Health Facilities');
   39 |         // this.myDirectoryButton = page.getByRole('button', { name: 'My Directory' });
   40 |         // this.removeAllButton = page.getByRole('button', { name: 'Remove All' });
   41 |         this.logoutButton = page.locator("//button[@id='dropdownMenuProfile']");
   42 |         this.logoutButtonProfile = page.locator('#dropdownItemLogoutButton');
   43 |         this. specialtyLocator = page.locator("//p[starts-with(@data-id, 'PROVIDERS.SPECIALTY-')]");
   44 |         this. planLocator = page.locator("//p[@aria-label='Plan']/following-sibling::p[1]");
   45 |
   46 |
   47 |       }
   48 |
   49 |     // open the provider tab
   50 |
   51 |   async openproviderTab () {
   52 |
   53 |    // Ensure the provider tab is visible before clicking
   54 |     await this.providerTap.waitFor({ state: 'visible', timeout: 20000 });
   55 |     await this.providerTap.click();
   56 | }
   57 |
   58 | // scenario : search for doctor type with keyword and plan and distance
   59 | async firstdoctortypeopen() {
   60 |     await this.firstdoctortype.click();
   61 | }
   62 | async selectDoctorType() {
>  63 | await this.page.waitForSelector('//div[normalize-space(text())="Doctor\'s Type"]', { state: 'visible', timeout: 10000 });
      |                 ^ Error: page.waitForSelector: Test timeout of 70000ms exceeded.
   64 | await this.doctorsType.click();
   65 |
   66 | }
   67 |
   68 | async enterDoctorType(keyword) {
   69 |     await this.doctorTypeTextbox.fill(keyword);
   70 |   }
   71 |
   72 |   // async enterDoctorName(name) {
   73 |   //   await this.doctorNameTextbox.fill(name);
   74 |   // }
   75 |
   76 |   // async openPlanDropdown() {
   77 |   //   await this.openplandropdown.click();
   78 |   // }
   79 |
   80 |   async selectPlan(planName) {
   81 |   await this.openplandropdown.click();
   82 |  const planOption = this.page.locator(`//li[normalize-space(.)='${planName}']`);
   83 |   await planOption.click();
   84 |
   85 |
   86 | }
   87 |
   88 | async selectDistance(distance) {
   89 |     const trimmedDistance = distance.trim();
   90 |
   91 |     // Click the dropdown to open options
   92 |     await this.distancedropdown.click();
   93 |
   94 |     // Optional short wait if dropdown takes time to render
   95 |     await this.page.waitForTimeout(500);
   96 |
   97 |     // Locator for the matching option using dynamic XPath
   98 |     const optionLocator = this.page.locator(`//li[normalize-space()='${trimmedDistance}']`);
   99 |
  100 |     // Wait for the option to be visible
  101 |     await optionLocator.waitFor({ state: 'visible', timeout: 5000 });
  102 |
  103 |     // Click the option
  104 |     await optionLocator.click();
  105 |   }
  106 |
  107 | async printDistanceIfExists() {
  108 |     const isVisible = await this.distancemile.isVisible();
  109 |     if (isVisible) {
  110 |       const text = await this.distancemile.textContent();
  111 |       console.log(`distance for provider: ${text}`);
  112 |     } else {
  113 |       console.log("No provider displayed.");
  114 |     }
  115 |   }
  116 |
  117 |
  118 |   
  119 |
  120 |   async printSpecialtyIfExists() {
  121 |     const isVisible = await this.specialtyLocator.isVisible();
  122 |     if (isVisible) {
  123 |       const text = await this.specialtyLocator.textContent();
  124 |       console.log(`Specialty: ${text}`);
  125 |     } else {
  126 |       console.log("No specialty displayed.");
  127 |     }
  128 |   }
  129 |
  130 |   async printPlanIfExists() {
  131 |     const isVisible = await this.planLocator.isVisible();
  132 |     if (isVisible) {
  133 |       const text = await this.planLocator.textContent();
  134 |       console.log(`Plan: ${text}`);
  135 |     } else {
  136 |       console.log("No plan displayed.");
  137 |     }
  138 |   }
  139 |
  140 |   async clickSearch() {
  141 |     await this.searchButton.click();
  142 |   }
  143 |
  144 |   async clickClear() {
  145 |     await this.clearButton.click();
  146 |   }
  147 |
  148 |  // scenario : search for doctor name with keyword and plan and distance
  149 |
  150 |   async clickDoctorName() {
  151 |
  152 |      await this.firstdoctorname.click();
  153 |   }
  154 |   async selectDoctorName() {
  155 |  await this.doctorName.waitFor({ state: 'visible', timeout: 10000 });
  156 |
  157 |   await this.doctorName.click();
  158 |
  159 | }
  160 |
  161 |   async searchByDoctorName(name) {
  162 |     await this.doctorNameTextbox.fill(name);
  163 |
```