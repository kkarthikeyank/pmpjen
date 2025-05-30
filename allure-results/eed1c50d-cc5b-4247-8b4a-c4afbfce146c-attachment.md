# Test info

- Name: Member Portal - Labs Flow >>  doctor name keyword search 
- Location: /home/karthi/pmp/src/tests/providerpagegroup.spec.js:47:5

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Enter a doctor\'s name' })

    at ProviderPage.searchByDoctorName (/home/karthi/pmp/src/pages/ProviderPage.js:123:34)
    at /home/karthi/pmp/src/tests/providerpagegroup.spec.js:55:20
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
   23 |         this.openplandropdown =page.locator("//button[@id='dropdownPlanFilterButton']")
   24 |         this.kidzPartnersButton = page.locator("//li[normalize-space()='KidzPartners']");
   25 |         this.healthPartnersButton = page.locator("//li[normalize-space()='Health Partners']");
   26 |          this.healthpartnersMedicare =page.locator("//li[normalize-space()='Health Partners Medicare']");
   27 |         // this.healthPartnersLabel = page.locator("//p[@aria-label='Health Partners']");
   28 |         // this.clearButton = page.getByText('Clear');
   29 |
   30 |         // this.healthPartnersButton = page.locator("//button[@id='dropdownPlanFilterButton']");
   31 |         // this.kidzPartnersOption = page.getByText('KidzPartners');
   32 |         // this.healthFacilitiesOption = page.getByText('Health Facilities');
   33 |         // this.myDirectoryButton = page.getByRole('button', { name: 'My Directory' });
   34 |         // this.removeAllButton = page.getByRole('button', { name: 'Remove All' });
   35 |         this.logoutButton = page.locator("//button[@id='dropdownMenuProfile']");
   36 |         this.logoutButtonProfile = page.locator('#dropdownItemLogoutButton');
   37 |         this.  specialtyLocator = page.locator("//p[starts-with(@data-id, 'PROVIDERS.SPECIALTY-')]");
   38 |         this. planLocator = page.locator("//p[@aria-label='Plan']/following-sibling::p[1]");
   39 |
   40 |
   41 |       }
   42 |
   43 |     // open the provider tab
   44 |
   45 |   async openproviderTab () {
   46 |
   47 |    // Ensure the provider tab is visible before clicking
   48 |     await this.providerTap.waitFor({ state: 'visible', timeout: 20000 });
   49 |     await this.providerTap.click();
   50 | }
   51 |
   52 | // async selectDoctorType() {
   53 | //   const doctorType = this.page.getByText('Doctor\'s Type');
   54 |   
   55 | //   // Wait for the element to be visible and clickable, with a timeout
   56 | //   await doctorType.waitFor({ state: 'visible', timeout: 10000 }); // Wait for up to 10 seconds
   57 |   
   58 | //   // Click the element
   59 | //   await doctorType.click();
   60 | // }
   61 | async selectDoctorType() {
   62 | await this.page.waitForSelector('//div[normalize-space(text())="Doctor\'s Type"]', { state: 'visible', timeout: 10000 });
   63 | await this.doctorsType.click();
   64 |
   65 | }
   66 |
   67 | async enterDoctorType(keyword) {
   68 |     await this.doctorTypeTextbox.fill(keyword);
   69 |   }
   70 |
   71 |   // async enterDoctorName(name) {
   72 |   //   await this.doctorNameTextbox.fill(name);
   73 |   // }
   74 |
   75 |   // async openPlanDropdown() {
   76 |   //   await this.openplandropdown.click();
   77 |   // }
   78 |
   79 |   async selectPlan(planName) {
   80 |   await this.openplandropdown.click();
   81 |  const planOption = this.page.locator(`//li[normalize-space(.)='${planName}']`);
   82 |   await planOption.click();
   83 |
   84 |
   85 | }
   86 |
   87 |   async printSpecialtyIfExists() {
   88 |     const isVisible = await this.specialtyLocator.isVisible();
   89 |     if (isVisible) {
   90 |       const text = await this.specialtyLocator.textContent();
   91 |       console.log(`Specialty: ${text}`);
   92 |     } else {
   93 |       console.log("No specialty displayed.");
   94 |     }
   95 |   }
   96 |
   97 |   async printPlanIfExists() {
   98 |     const isVisible = await this.planLocator.isVisible();
   99 |     if (isVisible) {
  100 |       const text = await this.planLocator.textContent();
  101 |       console.log(`Plan: ${text}`);
  102 |     } else {
  103 |       console.log("No plan displayed.");
  104 |     }
  105 |   }
  106 |
  107 |   async clickSearch() {
  108 |     await this.searchButton.click();
  109 |   }
  110 |
  111 |   async clickClear() {
  112 |     await this.clearButton.click();
  113 |   }
  114 |
  115 |
  116 |
  117 |   async selectDoctorName() {
  118 | await this.doctorName.click();
  119 |
  120 | }
  121 |
  122 |   async searchByDoctorName(name) {
> 123 |     await this.doctorNameTextbox.fill(name);
      |                                  ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  124 |
  125 |   }
  126 |    async selectDoctorPlan(planName) {
  127 |   await this.openplandropdown.click();
  128 |  const planOption = this.page.locator(`//li[normalize-space(.)='${planName}']`);
  129 |  await planOption.waitFor({ state: 'visible', timeout: 10000 });
  130 |
  131 |   await planOption.click();
  132 |    console.log(`[INFO] Selected plan: ${planName}`);
  133 |
  134 |
  135 | }
  136 |
  137 |
  138 |
  139 |   async printdoctorPlanIfExists() {
  140 |     const isVisible = await this.doctorNameResults.isVisible();
  141 |     if (isVisible) {
  142 |       const text = await this.doctorNameResults.textContent();
  143 |       console.log(`doctor: ${text}`);
  144 |     } else {
  145 |       console.log("No doctor displayed.");
  146 |     }
  147 |   }
  148 |
  149 |   async printdoctorPlanIfExists() {
  150 |     const isVisible = await this.planLocator.isVisible();
  151 |     if (isVisible) {
  152 |       const text = await this.planLocator.textContent();
  153 |       console.log(`Plan: ${text}`);
  154 |     } else {
  155 |       console.log("No plan displayed.");
  156 |     }
  157 |   }
  158 |
  159 |
  160 |
  161 |
  162 |
  163 | async fillZipCode(zip) {
  164 |     await this.zipCodeTextbox.click();
  165 |     await this.zipCodeTextbox.fill(zip);
  166 | }
  167 |
  168 | async clickProviderCard() {
  169 |     await this.page.locator('div:nth-child(2) > app-provider-search-card > .card > .card-footer').click();
  170 | }
  171 |
  172 | async fillDoctorName(name) {
  173 |     await this.doctorNameTextbox.click();
  174 |     await this.doctorNameTextbox.fill(name);
  175 | }
  176 |
  177 |
  178 | // async verifyDoctorResult(name) {
  179 | //   const doctorResult = this.page.getByText(name);
  180 |
  181 | //   // Assert that the doctor name is visible
  182 | //   await expect(doctorResult).toBeVisible();
  183 |
  184 | //   // Get the text and print it
  185 | //   const doctorNameText = await doctorResult.textContent();
  186 | //   console.log('Doctor found:', doctorNameText.trim());
  187 | // }
  188 |
  189 | async fillDoctorTypeFlow() {
  190 |   await this.doctorsType.click();
  191 |   await this.kidzPartnersButton.click();
  192 |
  193 |   const isPlanVisible = await this.healthPartnersText.isVisible();
  194 |   console.log("object", isPlanVisible);
  195 |
  196 |   if (isPlanVisible) {
  197 |     await this.healthPartnersText.click();
  198 |     await this.healthPartnersLabel.click();
  199 |     await this.page.mouse.wheel(0, 500);
  200 |
  201 |
  202 |     const selectedPlan = (await this.healthPartnersLabel.textContent()).trim();
  203 |     await expect(this.healthPartnersLabel).toHaveText(selectedPlan);
  204 |
  205 |     console.log(`✅ User selected the health plan: ${selectedPlan}`);
  206 |   } else {
  207 |     console.log('❌ No provider displayed under the selected category.');
  208 |   }
  209 |
  210 |   await this.clearButton.click();
  211 | }
  212 | // async verifyDoctorResult(name) {
  213 | //   const doctorResult = this.page.getByText(name);
  214 |
  215 | //   // Assert that the doctor name is visible
  216 | //   await expect(doctorResult).toBeVisible();
  217 |
  218 | //   // Get the text and print it
  219 | //   const doctorNameText = await doctorResult.textContent();
  220 | //   console.log('Doctor found:', doctorNameText.trim());
  221 | // }
  222 | // async adjustDistance() {
  223 | //     await this.moreThan100MilesButton.click();
```