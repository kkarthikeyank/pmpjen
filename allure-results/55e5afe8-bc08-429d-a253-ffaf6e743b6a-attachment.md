# Test info

- Name: Member Portal - Labs Flow >> Check abnormal test names for multiple date ranges
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:48:10

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//button[@id="dropdownDateFilterButton"]') to be visible

    at LabsPage.openCustomDatePicker (/home/karthi/pmp/src/pages/LabsPage.js:181:33)
    at LabsPage.selectDateRange (/home/karthi/pmp/src/pages/LabsPage.js:205:5)
    at /home/karthi/pmp/src/tests/labspagegroup.spec.js:52:13
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
   81 |   async searchPhysician(name) {
   82 |     await this.physiciansearchinput.click();
   83 |     await this.physiciansearchinput.fill(name);
   84 |     await this.applyButton.click();
   85 |   }
   86 |
   87 |   async clearFilters() {
   88 |     await this.clearButton.click();
   89 |   }
   90 |
   91 |   async printPhysicianResults() {
   92 |     const count = await this.physicianNameElements.count();
   93 |     if (count === 0) {
   94 |       console.log('No physician');
   95 |     } else {
   96 |       for (let i = 0; i < count; i++) {
   97 |         const name = await this.physicianNameElements.nth(i).innerText();
   98 |         console.log(`Physician ${i + 1}: ${name}`);
   99 |       }
  100 |     }
  101 |   }
  102 |
  103 |
  104 |        // Method to search for a lab by name
  105 |
  106 |    async selectDateRangelab(rangeText) {
  107 |     await this.last36MonthsButton.click();
  108 |     await this.page.getByText(rangeText).click();
  109 |   }
  110 |
  111 |   
  112 |
  113 |   async searchLab(name) {
  114 |     await this.labSearchInput.click();
  115 |     await this.labSearchInput.fill(name);
  116 |     await this.applyButton.click();
  117 |   }
  118 |
  119 |  
  120 |    async clearFilters() {
  121 |     await this.clearButton.click();
  122 |   }
  123 |
  124 |
  125 |
  126 |     async logLabResults() {
  127 |     const count = await this.labNameElements.count();
  128 |     if (count === 0) {
  129 |       console.log('No test names');
  130 |     } else {
  131 |       for (let i = 0; i < count; i++) {
  132 |         const text = await this.labNameElements.nth(i).textContent();
  133 |         console.log(text.trim());
  134 |       }
  135 |     } 
  136 |   }
  137 |
  138 |
  139 |
  140 |
  141 |
  142 |
  143 |
  144 |     async selectDateRangetestname(rangeText) {
  145 |     await this.last36MonthsButton.click();
  146 |     await this.page.getByText(rangeText).click();
  147 |   }
  148 |
  149 |   async searchTestName(name) {
  150 |     await this.testnamesearchBox.click();
  151 |     await this.testnamesearchBox.fill(name);
  152 |     await this.applyButton.click();
  153 |   }
  154 |
  155 |  
  156 |   async printTestResults() {
  157 |     const count = await this.testNameLocators.count();
  158 |     if (count === 0) {
  159 |       console.log('No test names found');
  160 |     } else {
  161 |       for (let i = 0; i < count; i++) {
  162 |         const text = await this.testNameLocators.nth(i).textContent();
  163 |         console.log(text.trim());
  164 |       }
  165 |     }
  166 |   }
  167 |
  168 |    async clearFilters() {
  169 |     await this.clearButton.click();
  170 |   }
  171 |
  172 |
  173 | dateCell(dayName, monthName, day, year) {
  174 |     const fullDateLabel = `${dayName}, ${monthName} ${day}, ${year}`;
  175 |     return this.page.locator(`//div[@aria-label="${fullDateLabel}"]`);
  176 |   }
  177 |
  178 |   async openCustomDatePicker() {
  179 |   await this.page.waitForLoadState('networkidle'); // wait for full load
  180 |
> 181 |   await this.last36MonthsButton.waitFor({ state: 'visible', timeout: 10000 });
      |                                 ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  182 |   await this.last36MonthsButton.click();
  183 |
  184 |   await this.customDateButton.waitFor({ state: 'visible', timeout: 10000 });
  185 |   await this.customDateButton.click();
  186 | }
  187 |
  188 |
  189 |   async selectYear(value) {
  190 |     await this.yearDropdown.selectOption({ value });
  191 |   }
  192 |
  193 |   async selectMonth(value) {
  194 |     const monthCount = await this.monthOptions.count();
  195 |     for (let i = 0; i < monthCount; i++) {
  196 |       const optionValue = await this.monthOptions.nth(i).getAttribute('value');
  197 |       if (optionValue === value) {
  198 |         await this.monthDropdown.selectOption(optionValue);
  199 |         break;
  200 |       }
  201 |     }
  202 |   }
  203 |
  204 |   async selectDateRange(start, end) {
  205 |     await this.openCustomDatePicker();
  206 |
  207 |     // Start Date
  208 |     await this.selectYear(start.year);
  209 |     await this.selectMonth(start.month);
  210 |     await this.dateCell(start.dayName, start.monthName, start.day, start.year).click();
  211 |
  212 |     // End Date
  213 |     await this.selectYear(end.year);
  214 |     await this.selectMonth(end.month);
  215 |     await this.dateCell(end.dayName, end.monthName, end.day, end.year).click();
  216 |   }
  217 |
  218 |   async checkAbnormalFilter() {
  219 |     const isChecked = await this.checkboxAbnormal.isChecked();
  220 |     if (!isChecked) {
  221 |       await this.checkboxAbnormal.check();
  222 |     }
  223 |     await this.applyButton.click();
  224 |   }
  225 |
  226 |   async getAbnormalTestNames() {
  227 |     const count = await this.abnormalLocator.count();
  228 |     if (count === 0) {
  229 |       console.log('✅ No abnormal test results found.');
  230 |       return;
  231 |     }
  232 |
  233 |     const testNames = [];
  234 |     for (let i = 0; i < count; i++) {
  235 |       const row = this.abnormalLocator.nth(i);
  236 |       const testName = await row.locator('span').first().innerText();
  237 |       testNames.push(testName);
  238 |     }
  239 |
  240 |     console.log(`🔴 Abnormal test results found:`);
  241 |     testNames.forEach((name, index) => console.log(`  ${index + 1}. ${name}`));
  242 |   }
  243 |
  244 |
  245 | // async selectDateRangep(rangeText) {
  246 | //     await this.last36MonthsButton.click();
  247 | //     await this.page.getByText(rangeText).click();
  248 | //   }
  249 |
  250 | //   async searchPhysician(name) {
  251 | //     await this.physiciansearchinput.click();
  252 | //      await this.physiciansearchinput.fill(name); // ✅ fix is her
  253 | //     await this.applyButton.click();
  254 | //   }
  255 |
  256 | //   async clearFilters() {
  257 | //     await this.clearButton.click();
  258 | //   }
  259 |
  260 | //   async printPhysicianResults() {
  261 | //     const count = await this.physicianNameElements.count();
  262 | //     if (count === 0) {
  263 | //       console.log('No physician');
  264 | //     } else {
  265 | //       for (let i = 0; i < count; i++) {
  266 | //         const name = await this.physicianNameElements.nth(i).innerText();
  267 | //         console.log(`Physician ${i + 1}: ${name}`);
  268 | //       }
  269 | //     }
  270 | //   }
  271 |
  272 |   
  273 |
  274 |   // async searchPhysician(name) {
  275 |   //   await this.physiciansearchinput.click();
  276 |   //   await this.physiciansearchinput.fill(name);
  277 |   //   await this.applyButton.click();
  278 |   
  279 |   //   // Scroll down before asserting
  280 |   //   await this.page.mouse.wheel(0, 500);
  281 |   
```