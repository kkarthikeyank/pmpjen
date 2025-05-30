# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:11:1

# Error details

```
Error: locator.click: Test timeout of 70000ms exceeded.
Call log:
  - waiting for getByText('Doctor\'s Type')

    at ProviderPage.searchByDoctorType (/home/karthi/pmp/src/pages/ProviderPage.js:40:28)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:67:22
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
- textbox "ex. John Smith": scott down
- paragraph: Test Names
- textbox "ex. Triglycerides"
- paragraph: Lab Vendor
- textbox "ex. Life Labs": precision Labs
- paragraph: Filter by date of service range
- button "Last 3 Months"
- paragraph: Status
- checkbox "Checkbox for Abnormal"
- text: Abnormal
- button "Apply"
- text: Clear
- separator
- text: "Date Range: from 01-27-2025 to 04-27-2025 Show"
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
   11 |     this.providerLink = page.locator('#navLink-PROVIDERS');
   12 |
   13 |     this.doctorsType = page.getByText("Doctor's Type");
   14 |     this.doctorTypeTextbox = page.getByRole('textbox', { name: 'Enter a type of doctor or a' });
   15 |     this.searchButton = page.getByRole('button', { name: 'Search' });
   16 |     this.clearButton = page.getByText('Clear');
   17 |     this.zipTextbox = page.getByRole('textbox', { name: 'ZIP Code' });
   18 |     this.providerCard = page.locator('div:nth-child(2) > app-provider-search-card > .card > .card-footer');
   19 |     this.doctorNameTextbox = page.getByRole('textbox', { name: "Enter a doctor's name" });
   20 |     this.moreThan100MilesButton = page.getByRole('button', { name: 'More than 100 miles' });
   21 |     this.within10MilesButton = page.getByRole('button', { name: 'Within 10 miles' });
   22 |     this.noResultsText = page.locator('[data-id="providers-no-info-text"]');
   23 |     this.healthPartnersButton = page.locator('#dropdownPlanFilterButton');
   24 |     this.kidzPartnersText = page.getByText('KidzPartners');
   25 |     this.healthFacilitiesText = page.getByText('Health Facilities');
   26 |     this.myDirectoryButton = page.getByRole('button', { name: 'My Directory' });
   27 |     this.removeAllButton = page.getByRole('button', { name: 'Remove All' });
   28 |     this.returnToPreviousPage = page.getByText('Return to previous page');
   29 |     this.addToMyDirectoryButton = page.getByRole('button', { name: 'Add to my directory' });
   30 |     this.compareCheckbox = page.getByRole('checkbox', { name: 'Compare with other providers' });
   31 |     this.compareProvidersButton = page.getByRole('button', { name: /Compare providers/ });
   32 |     this.logoutButton = page.getByLabel('Logout');
   33 |   }
   34 |
   35 |   async openProviderPageTab() {
   36 |     await this.providerLink.click();
   37 |   }
   38 |
   39 |   async searchByDoctorType(doctorName) {
>  40 |     await this.doctorsType.click();
      |                            ^ Error: locator.click: Test timeout of 70000ms exceeded.
   41 |     await this.doctorTypeTextbox.click();
   42 |     await this.doctorTypeTextbox.fill(doctorName);
   43 |     await this.searchButton.click();
   44 |   }
   45 |
   46 |   async searchByZip(zip) {
   47 |     await this.clearButton.click();
   48 |     await this.zipTextbox.click();
   49 |     await this.zipTextbox.fill(zip);
   50 |     await this.searchButton.click();
   51 |   }
   52 |
   53 |   async selectProviderCard() {
   54 |     await this.providerCard.click();
   55 |   }
   56 |
   57 |   async searchByDoctorName(name) {
   58 |     await this.doctorNameTextbox.click();
   59 |     await this.doctorNameTextbox.fill(name);
   60 |     await this.searchButton.click();
   61 |   }
   62 |
   63 |   async clearSearch() {
   64 |     await this.clearButton.click();
   65 |   }
   66 |
   67 |   async changeDistanceFilter() {
   68 |     // Click the "More than 100 miles" button
   69 |     await this.moreThan100MilesButton.click();
   70 |
   71 |     // Assert that the distance filter changed to "Within 10 miles"
   72 |     await (this.within10MilesButton).click();
   73 |      // Dynamically check if the "No matching results" message is visible and log it
   74 |      const isNoResultsVisible = await this.noResultsText.isVisible();
   75 |
   76 |      if (isNoResultsVisible) {
   77 |        const noResults = await this.noResultsText.innerText();
   78 |        console.log('No Results Text:', noResults);
   79 |      } else {
   80 |        console.log('No matching results message is not visible.');
   81 |      }
   82 |    
   83 |   
   84 | }
   85 |
   86 |   async switchToHealthPartners() {
   87 |     await this.healthPartnersButton.click();
   88 |     await this.kidzPartnersText.click();
   89 |     await this.healthFacilitiesText.click();
   90 |     await this.healthPartnersButton.click();
   91 |   }
   92 |
   93 |   async manageDirectory() {
   94 |     await this.myDirectoryButton.click();
   95 |     await this.removeAllButton.click();
   96 |   }
   97 |
   98 |   async addProviderToDirectory(providerId) {
   99 |     await this.page.locator(`[id="\\3${providerId}"]`).getByRole('button', { name: 'Add to my directory' }).click();
  100 |     await this.addToMyDirectoryButton.click();
  101 |   }
  102 |
  103 |   async compareProviders(providerId) {
  104 |     await this.page.locator(`[id="\\3${providerId}compare"]`).check();
  105 |     await this.compareCheckbox.check();
  106 |     await this.compareProvidersButton.click();
  107 |   }
  108 |
  109 |   async removeProviderFromComparison() {
  110 |     await this.page.getByText('Remove').nth(1).click();
  111 |   }
  112 |
  113 |   async logout() {
  114 |     await this.logoutButton.click();
  115 |   }
  116 | }
  117 |
```