# Test info

- Name: Member Portal - Labs Flow >>  doctor name keyword search 
- Location: /home/karthi/pmp/src/tests/providerpagegroup.spec.js:47:5

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Enter a doctor\'s name' })

    at ProviderPage.searchByDoctorName (/home/karthi/pmp/src/pages/ProviderPage.js:129:34)
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
   29 |         // this.healthPartnersLabel = page.locator("//p[@aria-label='Health Partners']");
   30 |         // this.clearButton = page.getByText('Clear');
   31 |
   32 |         // this.healthPartnersButton = page.locator("//button[@id='dropdownPlanFilterButton']");
   33 |         // this.kidzPartnersOption = page.getByText('KidzPartners');
   34 |         // this.healthFacilitiesOption = page.getByText('Health Facilities');
   35 |         // this.myDirectoryButton = page.getByRole('button', { name: 'My Directory' });
   36 |         // this.removeAllButton = page.getByRole('button', { name: 'Remove All' });
   37 |         this.logoutButton = page.locator("//button[@id='dropdownMenuProfile']");
   38 |         this.logoutButtonProfile = page.locator('#dropdownItemLogoutButton');
   39 |         this.  specialtyLocator = page.locator("//p[starts-with(@data-id, 'PROVIDERS.SPECIALTY-')]");
   40 |         this. planLocator = page.locator("//p[@aria-label='Plan']/following-sibling::p[1]");
   41 |
   42 |
   43 |       }
   44 |
   45 |     // open the provider tab
   46 |
   47 |   async openproviderTab () {
   48 |
   49 |    // Ensure the provider tab is visible before clicking
   50 |     await this.providerTap.waitFor({ state: 'visible', timeout: 20000 });
   51 |     await this.providerTap.click();
   52 | }
   53 |
   54 | // async selectDoctorType() {
   55 | //   const doctorType = this.page.getByText('Doctor\'s Type');
   56 |   
   57 | //   // Wait for the element to be visible and clickable, with a timeout
   58 | //   await doctorType.waitFor({ state: 'visible', timeout: 10000 }); // Wait for up to 10 seconds
   59 |   
   60 | //   // Click the element
   61 | //   await doctorType.click();
   62 | // }
   63 | async selectDoctorType() {
   64 | await this.page.waitForSelector('//div[normalize-space(text())="Doctor\'s Type"]', { state: 'visible', timeout: 10000 });
   65 | await this.doctorsType.click();
   66 |
   67 | }
   68 |
   69 | async enterDoctorType(keyword) {
   70 |     await this.doctorTypeTextbox.fill(keyword);
   71 |   }
   72 |
   73 |   // async enterDoctorName(name) {
   74 |   //   await this.doctorNameTextbox.fill(name);
   75 |   // }
   76 |
   77 |   // async openPlanDropdown() {
   78 |   //   await this.openplandropdown.click();
   79 |   // }
   80 |
   81 |   async selectPlan(planName) {
   82 |   await this.openplandropdown.click();
   83 |  const planOption = this.page.locator(`//li[normalize-space(.)='${planName}']`);
   84 |   await planOption.click();
   85 |
   86 |
   87 | }
   88 |
   89 |   async printSpecialtyIfExists() {
   90 |     const isVisible = await this.specialtyLocator.isVisible();
   91 |     if (isVisible) {
   92 |       const text = await this.specialtyLocator.textContent();
   93 |       console.log(`Specialty: ${text}`);
   94 |     } else {
   95 |       console.log("No specialty displayed.");
   96 |     }
   97 |   }
   98 |
   99 |   async printPlanIfExists() {
  100 |     const isVisible = await this.planLocator.isVisible();
  101 |     if (isVisible) {
  102 |       const text = await this.planLocator.textContent();
  103 |       console.log(`Plan: ${text}`);
  104 |     } else {
  105 |       console.log("No plan displayed.");
  106 |     }
  107 |   }
  108 |
  109 |   async clickSearch() {
  110 |     await this.searchButton.click();
  111 |   }
  112 |
  113 |   async clickClear() {
  114 |     await this.clearButton.click();
  115 |   }
  116 |
  117 |   async clickDoctorName() {
  118 |
  119 |      await this.firstdoctorname.click();
  120 |   }
  121 |   async selectDoctorName() {
  122 |  await this.doctorName.waitFor({ state: 'visible', timeout: 10000 });
  123 |
  124 | await this.doctorName.click();
  125 |
  126 | }
  127 |
  128 |   async searchByDoctorName(name) {
> 129 |     await this.doctorNameTextbox.fill(name);
      |                                  ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  130 |
  131 |   }
  132 |    async selectDoctorPlan(planName) {
  133 |   await this.openplandropdown.click();
  134 |  const planOption = this.page.locator(`//li[normalize-space(.)='${planName}']`);
  135 |  await planOption.waitFor({ state: 'visible', timeout: 10000 });
  136 |
  137 |   await planOption.click();
  138 |    console.log(`[INFO] Selected plan: ${planName}`);
  139 |
  140 |
  141 | }
  142 |
  143 |
  144 |
  145 |   async printdoctorPlanIfExists() {
  146 |     const isVisible = await this.doctorNameResults.isVisible();
  147 |     if (isVisible) {
  148 |       const text = await this.doctorNameResults.textContent();
  149 |       console.log(`doctor: ${text}`);
  150 |     } else {
  151 |       console.log("No doctor displayed.");
  152 |     }
  153 |   }
  154 |
  155 |   async printdoctorPlanIfExists() {
  156 |     const isVisible = await this.planLocator.isVisible();
  157 |     if (isVisible) {
  158 |       const text = await this.planLocator.textContent();
  159 |       console.log(`Plan: ${text}`);
  160 |     } else {
  161 |       console.log("No plan displayed.");
  162 |     }
  163 |   }
  164 |
  165 |
  166 |
  167 |
  168 |
  169 | async fillZipCode(zip) {
  170 |     await this.zipCodeTextbox.click();
  171 |     await this.zipCodeTextbox.fill(zip);
  172 | }
  173 |
  174 | async clickProviderCard() {
  175 |     await this.page.locator('div:nth-child(2) > app-provider-search-card > .card > .card-footer').click();
  176 | }
  177 |
  178 | async fillDoctorName(name) {
  179 |     await this.doctorNameTextbox.click();
  180 |     await this.doctorNameTextbox.fill(name);
  181 | }
  182 |
  183 |
  184 | // async verifyDoctorResult(name) {
  185 | //   const doctorResult = this.page.getByText(name);
  186 |
  187 | //   // Assert that the doctor name is visible
  188 | //   await expect(doctorResult).toBeVisible();
  189 |
  190 | //   // Get the text and print it
  191 | //   const doctorNameText = await doctorResult.textContent();
  192 | //   console.log('Doctor found:', doctorNameText.trim());
  193 | // }
  194 |
  195 | async fillDoctorTypeFlow() {
  196 |   await this.doctorsType.click();
  197 |   await this.kidzPartnersButton.click();
  198 |
  199 |   const isPlanVisible = await this.healthPartnersText.isVisible();
  200 |   console.log("object", isPlanVisible);
  201 |
  202 |   if (isPlanVisible) {
  203 |     await this.healthPartnersText.click();
  204 |     await this.healthPartnersLabel.click();
  205 |     await this.page.mouse.wheel(0, 500);
  206 |
  207 |
  208 |     const selectedPlan = (await this.healthPartnersLabel.textContent()).trim();
  209 |     await expect(this.healthPartnersLabel).toHaveText(selectedPlan);
  210 |
  211 |     console.log(`✅ User selected the health plan: ${selectedPlan}`);
  212 |   } else {
  213 |     console.log('❌ No provider displayed under the selected category.');
  214 |   }
  215 |
  216 |   await this.clearButton.click();
  217 | }
  218 | // async verifyDoctorResult(name) {
  219 | //   const doctorResult = this.page.getByText(name);
  220 |
  221 | //   // Assert that the doctor name is visible
  222 | //   await expect(doctorResult).toBeVisible();
  223 |
  224 | //   // Get the text and print it
  225 | //   const doctorNameText = await doctorResult.textContent();
  226 | //   console.log('Doctor found:', doctorNameText.trim());
  227 | // }
  228 | // async adjustDistance() {
  229 | //     await this.moreThan100MilesButton.click();
```