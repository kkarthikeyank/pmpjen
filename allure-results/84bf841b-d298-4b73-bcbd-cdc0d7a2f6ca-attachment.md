# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//button[@id=\'dropdownDateFilterButton\']')
    - locator resolved to <button type="button" aria-expanded="false" _ngcontent-kfo-c277="" data-bs-toggle="dropdown" id="dropdownDateFilterButton" data-id="dropdownDateFilterButton" class="btn btn-outline-gray btn-block dropdown-toggle text-start w-100 h-70">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-kfo-c274="" class="offcanvas-body">…</div> from <ngb-offcanvas-panel role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="offcanvasLabel" class="offcanvas offcanvas-end show">…</ngb-offcanvas-panel> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div _ngcontent-kfo-c274="" class="offcanvas-body">…</div> from <ngb-offcanvas-panel role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="offcanvasLabel" class="offcanvas offcanvas-end show">…</ngb-offcanvas-panel> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 100ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span class="fw-bold" _ngcontent-kfo-c97=""> Z3A.33 - </span> from <ngb-offcanvas-panel role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="offcanvasLabel" class="offcanvas offcanvas-end show">…</ngb-offcanvas-panel> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
    3 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-kfo-c274="" class="offcanvas-body">…</div> from <ngb-offcanvas-panel role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="offcanvasLabel" class="offcanvas offcanvas-end show">…</ngb-offcanvas-panel> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span class="fw-bold" _ngcontent-kfo-c97=""> Z3A.33 - </span> from <ngb-offcanvas-panel role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="offcanvasLabel" class="offcanvas offcanvas-end show">…</ngb-offcanvas-panel> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <h5 id="offcanvasLabel" _ngcontent-kfo-c274="" class="offcanvas-title">Filter Results</h5> from <ngb-offcanvas-panel role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="offcanvasLabel" class="offcanvas offcanvas-end show">…</ngb-offcanvas-panel> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <h5 id="offcanvasLabel" _ngcontent-kfo-c274="" class="offcanvas-title">Filter Results</h5> from <ngb-offcanvas-panel role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="offcanvasLabel" class="offcanvas offcanvas-end show">…</ngb-offcanvas-panel> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div _ngcontent-kfo-c274="" class="offcanvas-body">…</div> from <ngb-offcanvas-panel role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="offcanvasLabel" class="offcanvas offcanvas-end show">…</ngb-offcanvas-panel> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <span class="fw-bold" _ngcontent-kfo-c97=""> Z3A.33 - </span> from <ngb-offcanvas-panel role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="offcanvasLabel" class="offcanvas offcanvas-end show">…</ngb-offcanvas-panel> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms

    at /home/karthi/pmp/src/tests/claimsearch.spec.js:127:37
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
  - heading "Claims for" [level=1]
  - button "Julia Donaldson"
- text: HPP can only present information for medical claims. please contact us. To view your Deductible and Out-of-Pocket Amounts Applied Year To Date,
- link "click here to navigate to Year To Date Deductibles page":
  - /url: "#/claims/ytd"
  - text: click here.
- text: Claim Number
- textbox "Claim Number"
- paragraph: Filter by date of service range
- button "05-27-2020 - 05-27-2025"
- button "Apply"
- button "Clear"
- text: "Date range: from 05-27-2020 to 05-27-2025"
- button "Download Summary by Filter"
- button "Filter Results"
- text: "Filters: Show"
- combobox "select number of results":
  - option "5"
  - option "10" [selected]
  - option "25"
  - option "50"
  - option "100"
- text: entries
- paragraph: Claim Number
- paragraph: "144111"
- paragraph: Date of Service
- paragraph: From 04-01-2024 to 04-02-2024
- paragraph: Processed Date
- paragraph: "----"
- paragraph: Provider
- paragraph: nicole koepke
- paragraph: Payee
- paragraph: integra partners llc
- button "View Details"
- paragraph: "Total billed:"
- paragraph: $1,967.05
- paragraph: "Plan paid:"
- paragraph: $195.79
- separator
- paragraph: "Patient Liability:"
- paragraph: $48.95
- paragraph: Claim Number
- paragraph: "144114"
- paragraph: Date of Service
- paragraph: From 01-01-2024 to 01-03-2024
- paragraph: Processed Date
- paragraph: "----"
- paragraph: Provider
- paragraph: nicole koepke
- paragraph: Payee
- paragraph: integra partners llc
- button "View Details"
- paragraph: "Total billed:"
- paragraph: $1,967.05
- paragraph: "Plan paid:"
- paragraph: $195.79
- separator
- paragraph: "Patient Liability:"
- paragraph: $48.95
- paragraph: Claim Number
- paragraph: "144115"
- paragraph: Date of Service
- paragraph: From 01-06-2024 to 01-10-2024
- paragraph: Processed Date
- paragraph: "----"
- paragraph: Provider
- paragraph: nicole koepke
- paragraph: Payee
- paragraph: integra partners llc
- button "View Details"
- paragraph: "Total billed:"
- paragraph: $1,967.05
- paragraph: "Plan paid:"
- paragraph: $195.79
- separator
- paragraph: "Patient Liability:"
- paragraph: $48.95
- paragraph: Claim Number
- paragraph: "144000"
- paragraph: Date of Service
- paragraph: From 04-01-2024 to 01-02-2025
- paragraph: Processed Date
- paragraph: "----"
- paragraph: Provider
- paragraph: nicole koepke
- paragraph: Payee
- paragraph: integra partners llc
- button "View Details"
- paragraph: "Total billed:"
- paragraph: $1,967.05
- paragraph: "Plan paid:"
- paragraph: $195.79
- separator
- paragraph: "Patient Liability:"
- paragraph: $48.95
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
- dialog "Filter Results":
  - heading "Filter Results" [level=5]
  - button "Close"
  - heading "Provider" [level=2]
  - checkbox "Nicole Koepke_provider"
  - text: Nicole Koepke (4)
  - heading "Payee" [level=2]
  - checkbox "Integra Partners Llc_payee"
  - text: Integra Partners Llc (4)
  - heading "Diagnosis" [level=2]
  - checkbox "Z34.83_diagnoses"
  - text: Z34.83 - Unknown (4)
  - checkbox "Z3A.33_diagnoses"
  - text: Z3A.33 - Unknown (4)
  - button "applyFilters" [disabled]: Apply
  - button "clearFilters": Clear
```

# Test source

```ts
   27 |
   28 |   // console.log('Login URL:', process.env.LOGIN_URL);  // Should print the URL or be undefined if not set
   29 |   // console.log('Username:', process.env.NAME);  // Log the name from env
   30 |   // console.log('Password:', process.env.PASSWORD);  // Log the password from env
   31 |
   32 |
   33 |   test.setTimeout(70000);
   34 |   const login = new LoginPage(page);
   35 |
   36 |   await login.gotoLoginPage();
   37 |   // await login.login('Julia', 'Batman123');
   38 |   await login.login(data.user, data.password);
   39 |
   40 |
   41 |   // await login.login('Anna', 'test@123Example?');
   42 |   // await login.login(process.env.USERNAME, process.env.PASSWORD);
   43 |   // await login.login(process.env.NAME, process.env.PASSWORD);
   44 |
   45 |
   46 |
   47 |
   48 |   await page.waitForURL('**/member-portal/**', { timeout: 180000 });
   49 |   // await page.waitForLoadState('networkidle');
   50 |
   51 |   const dashboardPage = new DashboardPage(page);
   52 |
   53 |
   54 |
   55 |   // Assert login success with dynamic wait
   56 |   const welcomeMessage = await dashboardPage.assertLoginSuccess();
   57 |   expect(welcomeMessage).toContain('Welcome');
   58 |
   59 |   // Dynamically get and validate Member ID if present
   60 |   const memberId = await dashboardPage.getMemberId();
   61 |   if (memberId) {
   62 |     // If Member ID is present, validate the content format
   63 |     expect(memberId).toMatch(/\w+/);  // Ensure the ID is a valid alphanumeric string
   64 |   } else {
   65 |     console.warn('⚠️ Member ID is optional for this user.');
   66 |   }
   67 |
   68 |
   69 |
   70 |
   71 |
   72 |   const profilePage = new ProfilePage(page);
   73 |
   74 |   await page.getByTitle('Your profile and settings').click();
   75 |   await page.getByLabel('My Profile').click();
   76 |
   77 |   // const profileName = await profilePage.checkProfileVisibility();
   78 |   // const dob = await profilePage.checkDobVisibility();
   79 |   // const email = await profilePage.checkEmailVisibility();
   80 |   // const gender = await profilePage.checkGe
   81 |
   82 |   // const address = await profilePage.checkAddressVisibility();
   83 |
   84 |   await profilePage.assertProfileNameVisible();
   85 |   await profilePage.assertDobVisible();
   86 |   await profilePage.assertEmailVisible();
   87 |   await profilePage.assertGenderVisible();
   88 |   await profilePage.assertAddressVisible();
   89 |
   90 |
   91 |
   92 |
   93 |   const claims = new ClaimsPage(page);
   94 |
   95 |   await claims.openClaimsTab();
   96 |
   97 |
   98 |
   99 |   // // // scenario Filter by date range and print claims
  100 |   // for (const filter of data.claimsDateFilter) {
  101 |   //   await claims.filterAndPrintClaimsByLabel(filter.label);
  102 |   // }
  103 |
  104 |
  105 |
  106 |   // // // scenario Filter by claim number and print claims
  107 |   // for (const { label, claimNumber } of data.claimsNumberSearch) {
  108 |   //   await claims.searchclaimnumber(label, claimNumber);
  109 |   // }
  110 |
  111 |
  112 |   // // // scenario custom date range by claim status and print claims
  113 |   // for (const viewclaim of data.customDateRanges) {
  114 |   //   await claims.filterByCustomDateRangeAndPrintClaims(viewclaim.fromDate, viewclaim.toDate);
  115 |
  116 |   // }
  117 |
  118 |   //  scenario filter result provider and payee , diagnosis check and uncheck 
  119 |
  120 |   for (const testCase of data.FiltersList) {
  121 |      const filterApplied =  await claims.filterByDateRange(testCase.dateRange);
  122 |
  123 |       await claims. clickFilterResultsIfVisible();
  124 |     // await claims.isFilterResultsButtonEnabled(testCase.dateRange);
  125 |     await claims.applyFilters(testCase);
  126 |     await claims.printResults();
> 127 |       await claims.dateFilterButton.click(); // or any button that opens the filter panel
      |                                     ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  128 |
  129 |     await claims.uncheckFilters(testCase);
  130 |   }
  131 |   
  132 | // for (const testCase of data.FiltersList) {
  133 | //   await claims.runFilterScenario(testCase.dateRange, testCase);
  134 | // }
  135 |
  136 |
  137 |
  138 |
  139 |   const labs = new LabsPage(page);
  140 |   // Open the Labs tab
  141 |   await labs.openlabsTab();
  142 |
  143 |   //  scenario  search with date filterwith last 60month   physician by name
  144 |
  145 |   for (const physicians of data.PhysicianSearchCases) {
  146 |     const name = physicians.physicianName;
  147 |     const rangeText = physicians.dateRange;
  148 |     await labs.selectDateRangephysicain(physicians.dateRange);
  149 |     await labs.searchPhysician(physicians.physicianName);
  150 |     await labs.printPhysicianResults(name, rangeText); // ✅ pass them here
  151 |
  152 |     await labs.clearFilters();
  153 |   }
  154 |   // scenario  search with date filter  for a labvendor
  155 |
  156 |   for (const labsrecord of data.LabSearchCases) {
  157 |
  158 |     const name = labsrecord.labName;
  159 |     const rangeText = labsrecord.dateRange;
  160 |
  161 |
  162 |     await labs.selectDateRangelab(labsrecord.dateRange);
  163 |     await labs.searchLab(labsrecord.labName);
  164 |     await labs.logLabResults(name, rangeText); // ✅ pass values here
  165 |
  166 |     await labs.clearFilters();
  167 |
  168 |   }
  169 |
  170 |   // scenario  search for a test name
  171 |
  172 |   for (const testrecord of data.TestNameCases) {
  173 |     const testName = testrecord.testName;
  174 |     const rangeText = testrecord.dateRange;
  175 |
  176 |     await labs.selectDateRangetestname(rangeText);
  177 |     await labs.searchTestName(testName);
  178 |     await labs.printTestResults(testName, rangeText); // ✅ pass filters
  179 |     await labs.clearFilters();
  180 |   }
  181 |
  182 |
  183 |   //  scenario custom date range status abnormal and unabnormal with checkbox
  184 |
  185 |   for (const [index, range] of data.labsCustomDateRange.entries()) {
  186 |     console.log(`\n📅 Checking date range #${index + 1}: ${range.startDate.monthName} ${range.startDate.day}, ${range.startDate.year} → ${range.endDate.monthName} ${range.endDate.day}, ${range.endDate.year}`);
  187 |
  188 |     await labs.selectDateRange(range.startDate, range.endDate);
  189 |     console.log('☑️ Checkbox: Selected (Abnormal)');
  190 |
  191 |     await labs.checkAbnormalFilter();
  192 |     await labs.printAbnormalTestNames();
  193 |
  194 |     // Step 2: Uncheck and view all other results
  195 |     console.log('⬜ Checkbox: Unselected (Abnormal)');
  196 |
  197 |     await labs.uncheckAbnormalFilter();
  198 |     await labs.printNonAbnormalTestNames();
  199 |   }
  200 |
  201 |   // Step 1: Apply custom date range
  202 |
  203 |   // for (const { dateRange, physicianName } of data.PhysicianSearchCaseswithabnormal) {
  204 |   //   console.log(`Running test for Physician: ${physicianName}, Date Range: ${dateRange}`);
  205 |
  206 |
  207 |   //   await labs.runAbnormalTestFlow(dateRange, physicianName);
  208 |
  209 |
  210 |   // }
  211 |   for (const item of data.PhysicianSearchCaseswithabnormal) {
  212 |     console.log(`Added search physician '${item.physicianName}' and months filter '${item.dateRange}'`);
  213 |
  214 |     await labs.searchphysicainabnormalcheck(item.dateRange);
  215 |     await labs.searchPhysicianabnormal(item.physicianName);
  216 |     await labs.checkboxphysician();
  217 |     await labs.printAbnormalpy();
  218 |     await labs.printPhysicianNames();
  219 |
  220 |
  221 |
  222 |     await labs.uncheckboxphysician();
  223 |     await labs.printNonAbnormalpy();
  224 |     await labs.printPhysicianNames();
  225 |
  226 |
  227 |
```