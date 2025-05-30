# Test info

- Name: Member Portal - Labs Flow >>   scenario : search for doctor name with keyword and plan 
- Location: /home/karthi/pmp/src/tests/providerpagegroup.spec.js:52:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByText('Doctor\'s Name')

    at ProviderPage.clickDoctorName (/home/karthi/pmp/src/pages/ProviderPage.js:152:33)
    at /home/karthi/pmp/src/tests/providerpagegroup.spec.js:59:28
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
   63 | await this.page.waitForSelector('//div[normalize-space(text())="Doctor\'s Type"]', { state: 'visible', timeout: 10000 });
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
> 152 |      await this.firstdoctorname.click();
      |                                 ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
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
  164 |   }
  165 |    async selectDoctorPlan(planName) {
  166 |   await this.openplandropdown.click();
  167 |  const planOption = this.page.locator(`//li[normalize-space(.)='${planName}']`);
  168 |  await planOption.waitFor({ state: 'visible', timeout: 10000 });
  169 |
  170 |   await planOption.click();
  171 |    console.log(`[INFO] Selected plan: ${planName}`);
  172 |
  173 |
  174 | }
  175 |
  176 |
  177 | async selectDistancedoctorname(distance) {
  178 |   console .log(`[INFO] Selected distance: ${distance}`);
  179 |     const trimmedDistance = distance.trim();
  180 |
  181 |     // Click the dropdown to open options
  182 |     await this.distancedropdown.click();
  183 |
  184 |     // Optional short wait if dropdown takes time to render
  185 |     await this.page.waitForTimeout(500);
  186 |
  187 |     // Locator for the matching option using dynamic XPath
  188 |     const optionLocator = this.page.locator(`//li[normalize-space()='${trimmedDistance}']`);
  189 |
  190 |     // Wait for the option to be visible
  191 |     await optionLocator.waitFor({ state: 'visible', timeout: 5000 });
  192 |
  193 |     // Click the option
  194 |     await optionLocator.click();
  195 |   }
  196 |
  197 | // async printDistancedoctornameIfExists() {
  198 | //     const isVisible = await this.distancemile.isVisible();
  199 | //     if (isVisible) {
  200 | //       const text = await this.distancemile.textContent();
  201 | //       console.log(`distance for provider: ${text}`);
  202 | //     } else {
  203 | //       console.log("No provider displayed.");
  204 | //     }
  205 | //   }
  206 | async printDistancedoctornameIfExists() {
  207 |   try {
  208 |     await this.distancemile.waitFor({ state: 'visible', timeout: 5000 });
  209 |     const text = await this.distancemile.textContent();
  210 |     console.log(`distance for provider: ${text}`);
  211 |   } catch (e) {
  212 |     console.log("No provider displayed.");
  213 |   }
  214 | }
  215 |
  216 |
  217 |
  218 |   async printdoctorNameIfExists() {
  219 |     const isVisible = await this.doctorNameResults.isVisible();
  220 |     if (isVisible) {
  221 |       const text = await this.doctorNameResults.textContent();
  222 |       console.log(`doctor: ${text}`);
  223 |     } else {
  224 |       console.log("No doctor displayed.");
  225 |     }
  226 |   }
  227 |
  228 |   async printdoctorPlanIfExists() {
  229 |     const isVisible = await this.planLocator.isVisible();
  230 |     if (isVisible) {
  231 |       const text = await this.planLocator.textContent();
  232 |       console.log(`Plan: ${text}`);
  233 |     } else {
  234 |       console.log("No plan displayed.");
  235 |     }
  236 |   }
  237 |
  238 |
  239 |
  240 |
  241 |
  242 | async fillZipCode(zip) {
  243 |     await this.zipCodeTextbox.click();
  244 |     await this.zipCodeTextbox.fill(zip);
  245 | }
  246 |
  247 | async clickProviderCard() {
  248 |     await this.page.locator('div:nth-child(2) > app-provider-search-card > .card > .card-footer').click();
  249 | }
  250 |
  251 | async fillDoctorName(name) {
  252 |     await this.doctorNameTextbox.click();
```