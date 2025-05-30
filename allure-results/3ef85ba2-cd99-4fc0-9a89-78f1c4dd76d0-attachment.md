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
  137 | async printSearchResultss(name, selectedPlan) {
  138 |     const count = await this.doctorNameResults.count();
  139 |     if (count === 0) {
  140 |       console.log(`[INFO] No doctor name displayed`);
  141 |     } else {
  142 |       for (let i = 0; i < count; i++) {
  143 |         const doctor = await this.doctorNameResults.nth(i).textContent();
  144 |         const plan = await this.planLocator.nth(i).textContent();
  145 |         console.log(`[DOCTOR ${i + 1}]: ${doctor.trim()}`);
  146 |         console.log(`  └─ Plan: ${plan?.trim() || 'No plan displayed'}`);
  147 |       }
  148 |     }
  149 |   }
  150 |
  151 |
  152 |
  153 |
  154 |
  155 |
  156 |
  157 | async fillZipCode(zip) {
  158 |     await this.zipCodeTextbox.click();
  159 |     await this.zipCodeTextbox.fill(zip);
  160 | }
  161 |
  162 | async clickProviderCard() {
  163 |     await this.page.locator('div:nth-child(2) > app-provider-search-card > .card > .card-footer').click();
  164 | }
  165 |
  166 | async fillDoctorName(name) {
  167 |     await this.doctorNameTextbox.click();
  168 |     await this.doctorNameTextbox.fill(name);
  169 | }
  170 |
  171 |
  172 | // async verifyDoctorResult(name) {
  173 | //   const doctorResult = this.page.getByText(name);
  174 |
  175 | //   // Assert that the doctor name is visible
  176 | //   await expect(doctorResult).toBeVisible();
  177 |
  178 | //   // Get the text and print it
  179 | //   const doctorNameText = await doctorResult.textContent();
  180 | //   console.log('Doctor found:', doctorNameText.trim());
  181 | // }
  182 |
  183 | async fillDoctorTypeFlow() {
  184 |   await this.doctorsType.click();
  185 |   await this.kidzPartnersButton.click();
  186 |
  187 |   const isPlanVisible = await this.healthPartnersText.isVisible();
  188 |   console.log("object", isPlanVisible);
  189 |
  190 |   if (isPlanVisible) {
  191 |     await this.healthPartnersText.click();
  192 |     await this.healthPartnersLabel.click();
  193 |     await this.page.mouse.wheel(0, 500);
  194 |
  195 |
  196 |     const selectedPlan = (await this.healthPartnersLabel.textContent()).trim();
  197 |     await expect(this.healthPartnersLabel).toHaveText(selectedPlan);
  198 |
  199 |     console.log(`✅ User selected the health plan: ${selectedPlan}`);
  200 |   } else {
  201 |     console.log('❌ No provider displayed under the selected category.');
  202 |   }
  203 |
  204 |   await this.clearButton.click();
  205 | }
  206 | // async verifyDoctorResult(name) {
  207 | //   const doctorResult = this.page.getByText(name);
  208 |
  209 | //   // Assert that the doctor name is visible
  210 | //   await expect(doctorResult).toBeVisible();
  211 |
  212 | //   // Get the text and print it
  213 | //   const doctorNameText = await doctorResult.textContent();
  214 | //   console.log('Doctor found:', doctorNameText.trim());
  215 | // }
  216 | // async adjustDistance() {
  217 | //     await this.moreThan100MilesButton.click();
  218 | //     await this.page.getByText('Within 10 miles').click();
  219 | // }
  220 |
  221 | // async switchPlan() {
  222 | //     // await this.healthPartnersButton.click();
  223 | //     // await this.kidzPartnersOption.click();
```