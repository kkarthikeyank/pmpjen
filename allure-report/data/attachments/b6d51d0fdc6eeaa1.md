# Test info

- Name: Claims Page Tests >> Open Claims tab and filter last 60 months
- Location: /home/karthi/pmp/src/tests/claimspagegroup.spec.js:34:3

# Error details

```
Error: "context" and "page" fixtures are not supported in "beforeAll" since they are created on a per-test basis.
If you would like to reuse a single page between tests, create context manually with browser.newContext(). See https://aka.ms/playwright/reuse-page for details.
If you would like to configure your page before each test, do that in beforeEach hook instead.
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { ClaimsPage } from '../../src/pages/ClaimsPage.js';  // Import the ClaimsPage class for interacting with claims
   3 | import { LoginPage } from '../../src/pages/LoginPage.js';  // Import the LoginPage class for logging in
   4 |
   5 | test.describe('Claims Page Tests', () => {
   6 |     test.setTimeout(70000);
   7 |
   8 |   // Declare variables that will be reused across tests
   9 |   let loginPage;
  10 |   let claimsPage;
  11 |
  12 |   // Run this block before all tests. It will log the user in once and share the login state across all tests.
  13 |   test.beforeAll(async ({ page }) => {
  14 |     // Initialize the LoginPage and ClaimsPage instances
  15 |     loginPage = new LoginPage(page);
  16 |     claimsPage = new ClaimsPage(page);
  17 |
  18 |     // Navigate to the login page and perform the login action
  19 |     await loginPage.gotoLoginPage();
  20 |     await loginPage.login('Julia', 'Batman123');
  21 |     
  22 |     // Wait for the user to be redirected to the member portal after a successful login
  23 |     await page.waitForURL('**/member-portal/**', { timeout: 180000 });
  24 |   });
  25 |
  26 |   // Run this block after all tests to perform any necessary cleanup or logout actions
  27 |   test.afterAll(async () => {
  28 |     // Example: Perform logout or other cleanup actions here, if necessary
  29 |     // await claimsPage.logout();  // Uncomment if a logout method is available
  30 |     console.log('Tests are complete!'); // Just logging a message after all tests
  31 |   });
  32 |
  33 |   // Test case: Open the Claims tab and filter by last 60 months
> 34 |   test('Open Claims tab and filter last 60 months', async ({ page }) => {
     |   ^ Error: "context" and "page" fixtures are not supported in "beforeAll" since they are created on a per-test basis.
  35 |     // Open the Claims tab and apply the "Last 60 Months" filter
  36 |     await claimsPage.openClaimsTab();
  37 |     await claimsPage.filterLast60Months();
  38 |
  39 |     // Check if the "Claim Details" table is visible after filtering
  40 |     const claimsTable = page.locator('text=Claim Details');
  41 |     await expect(claimsTable).toBeVisible();
  42 |   });
  43 |
  44 |   // Test case: View claim details and return to the previous page
  45 |   test('View claim details and return', async ({ page }) => {
  46 |     // Open the Claims tab and view a specific claim's details
  47 |     await claimsPage.openClaimsTab();
  48 |     await claimsPage.viewClaimDetails();
  49 |
  50 |     // Check if the page title still has "Claims" text after returning from details view
  51 |     const pageTitle = page.locator('text=Claims');
  52 |     await expect(pageTitle).toBeVisible();
  53 |   });
  54 |
  55 |   // Test case: Filter claims by a specific claim number
  56 |   test('Filter claims by claim number', async ({ page }) => {
  57 |     // Open the Claims tab and filter by a given claim number
  58 |     await claimsPage.openClaimsTab();
  59 |     await claimsPage.filterByClaimNumber('144111');
  60 |
  61 |     // Ensure that the claim number is visible after filtering
  62 |     const claimNumberVisible = page.locator('text=144111');
  63 |     await expect(claimNumberVisible).toBeVisible();
  64 |   });
  65 |
  66 |   // Test case: Filter claims by a custom date range
  67 |   test('Filter claims by custom date range', async ({ page }) => {
  68 |     // Open the Claims tab and apply a custom date range filter
  69 |     await claimsPage.openClaimsTab();
  70 |     await claimsPage.filterByCustomDateRange('03/10/2024', '03/11/2025');
  71 |
  72 |     // Verify that the "Claims Results" section is visible after filtering
  73 |     const resultsSection = page.locator('text=Claims Results');
  74 |     await expect(resultsSection).toBeVisible();
  75 |   });
  76 | });
  77 |
```