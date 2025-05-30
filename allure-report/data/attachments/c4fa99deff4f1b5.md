# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:11:1

# Error details

```
Error: locator.click: Test timeout of 70000ms exceeded.
Call log:
  - waiting for getByText('Doctor\'s Type')
    - locator resolved to <div _ngcontent-hlh-c312="" class="card-text fw-bold d-flex justify-content-center"> Doctor's Type </div>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

    at ProviderPage.selectDoctorType (/home/karthi/pmp/src/pages/ProviderPage.js:34:28)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:65:20
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
   14 |         this.doctorTypeTextbox = page.getByRole('textbox', { name: 'Enter a type of doctor or a' });
   15 |         this.searchButton = page.getByRole('button', { name: 'Search' });
   16 |         this.clearButton = page.getByText('Clear');
   17 |         this.zipCodeTextbox = page.getByRole('textbox', { name: 'ZIP Code' });
   18 |         this.doctorNameTextbox = page.getByRole('textbox', { name: "Enter a doctor's name" });
   19 |         // this.moreThan100MilesButton = page.getByRole('button', { name: 'More than 100 miles' });
   20 |         // this.healthPartnersButton = page.locator("//button[@id='dropdownPlanFilterButton']");
   21 |         // this.kidzPartnersOption = page.getByText('KidzPartners');
   22 |         // this.healthFacilitiesOption = page.getByText('Health Facilities');
   23 |         // this.myDirectoryButton = page.getByRole('button', { name: 'My Directory' });
   24 |         // this.removeAllButton = page.getByRole('button', { name: 'Remove All' });
   25 |         this.logoutButton = page.locator("//button[@id='dropdownMenuProfile']");
   26 |         this.logoutButtonprofile = page.locator('#dropdownItemLogoutButton');
   27 |       }
   28 |
   29 |   async clickProviderLink() {
   30 |     await this.providerLink.click();
   31 | }
   32 |
   33 | async selectDoctorType() {
>  34 |     await this.doctorsType.click();
      |                            ^ Error: locator.click: Test timeout of 70000ms exceeded.
   35 | }
   36 |
   37 | async fillDoctorType(name) {
   38 |     await this.doctorTypeTextbox.click();
   39 |     await this.doctorTypeTextbox.fill(name);
   40 | }
   41 |
   42 | // async rightClickOnDoctor(name) {
   43 | //     await this.page.getByText(name).click({ button: 'right' });
   44 | // }
   45 |
   46 | async search() {
   47 |     await this.searchButton.click();
   48 | }
   49 |
   50 | async clear() {
   51 |     await this.clearButton.click();
   52 | }
   53 |
   54 | async fillZipCode(zip) {
   55 |     await this.zipCodeTextbox.click();
   56 |     await this.zipCodeTextbox.fill(zip);
   57 | }
   58 |
   59 | async clickProviderCard() {
   60 |     await this.page.locator('div:nth-child(2) > app-provider-search-card > .card > .card-footer').click();
   61 | }
   62 |
   63 | async fillDoctorName(name) {
   64 |     await this.doctorNameTextbox.click();
   65 |     await this.doctorNameTextbox.fill(name);
   66 | }
   67 |
   68 |
   69 | async verifyDoctorResult(name) {
   70 |   const doctorResult = this.page.getByText(name);
   71 |
   72 |   // Assert that the doctor name is visible
   73 |   await expect(doctorResult).toBeVisible();
   74 |
   75 |   // Get the text and print it
   76 |   const doctorNameText = await doctorResult.textContent();
   77 |   console.log('Doctor found:', doctorNameText.trim());
   78 | }
   79 |
   80 |
   81 | // async adjustDistance() {
   82 | //     await this.moreThan100MilesButton.click();
   83 | //     await this.page.getByText('Within 10 miles').click();
   84 | // }
   85 |
   86 | // async switchPlan() {
   87 | //     // await this.healthPartnersButton.click();
   88 | //     // await this.kidzPartnersOption.click();
   89 | //     await this.healthFacilitiesOption.click();
   90 | //     await this.page.getByRole('button', { name: 'KidzPartners' }).click();
   91 | //     await this.page.getByText('Health Partners', { exact: true }).click();
   92 | // }
   93 |
   94 | // async manageDirectory() {
   95 | //     await this.myDirectoryButton.click();
   96 | //     await this.removeAllButton.click();
   97 | // }
   98 |
   99 | // async returnToPreviousPage() {
  100 | //     await this.page.getByText('Return to previous page').click();
  101 | // }
  102 |
  103 | // async addProviderById(id) {
  104 | //     await this.page.locator(`[id="${id}"]`).getByRole('button', { name: 'Add to my directory' }).click();
  105 | // }
  106 |
  107 | // async checkCompareBox(id) {
  108 | //     await this.page.locator(`[id="${id}compare"]`).check();
  109 | //     await this.page.getByRole('checkbox', { name: 'Compare with other providers' }).check();
  110 | //     await this.page.getByRole('button', { name: /Compare providers/ }).click();
  111 | // }
  112 |
  113 | // async removeComparison() {
  114 | //     await this.page.getByText('Provider ID55641').click();
  115 | //     await this.page.getByText('Remove').nth(1).click();
  116 | // }
  117 | async logout() {
  118 |   // Click the logout button to open the dropdown
  119 |   await this.logoutButton.click();
  120 |   
  121 |   // Click the logout option in the dropdown
  122 |   await this.logoutButtonProfile.click();
  123 | }
  124 |
  125 | // Assert that logout is successful (you can customize based on your app's behavior)
  126 | async assertLoggedOut() {
  127 |   // Example: Ensure you're redirected to the login page
  128 |   await expect(this.page).toHaveURL('/login'); // Modify to match your app's URL
  129 | }
  130 | }
  131 |
  132 |   
  133 |
  134 |
```