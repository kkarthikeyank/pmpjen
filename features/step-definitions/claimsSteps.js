// import { Given, When, Then } from '@cucumber/cucumber';
// import { LoginPage } from '..src/pages/LoginPage.js';
// import { ClaimsPage } from '..src/pages/ClaimsPage.js';
// import { expect } from '@playwright/test';


// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import { LoginPage } from '../../src/pages/LoginPage.js';
// import { DashboardPage } from '../../src/pages/DashboardPage.js';
// import { ClaimsPage } from '../../src/pages/ClaimsPage.js';




// let loginPage;
// let dashboardPage;
// let claims;

// Given('I am on the Claims tab', async function () {
//   this.claims = new ClaimsPage(this.page); // ✅ correctly assign it
//   await this.claims.openClaimsTab();
// });
// When('I filter claims by the last 60 months', async function () {
//   await claims.filterLast60Months();
// });

// Then('I should see the filtered date range', async function () {
//   const dateText = await claims.monthsdateverify.textContent();
//   expect(dateText.trim()).not.toBe('');
// });

// Given('I open the filter panel', async function () {
//   await claims.openFilterPanel();
// });

// When('I apply a payee filter for {string}', async function (payee) {
//   await claims.filterByPayee(payee);
// });

// When('I apply a provider filter for {string}', async function (provider) {
//   await claims.filterByProvider(provider);
// });

// When('I uncheck payee filter for {string}', async function (payee) {
//   await claims.uncheckPayee(payee);
// });

// When('I clear all filters', async function () {
//   await claims.clearFilters();
// });

// When('I apply the clear action', async function () {
//   await claims.applyClear();
// });

// Then('I close the filter panel', async function () {
//   await claims.closeFilterPanel();
// });

// When('I view claim details', async function () {
//   await claims.viewClaimDetails();
// });

// Then('I return to the previous page', async function () {
//   // Handled by viewClaimDetails internally
// });

// When('I filter claims by claim number {string}', async function (claimNumber) {
//   await claims.filterByClaimNumber(claimNumber);
// });

// Then('I should see matching or no claims result', async function () {
//   // Logic is inside filterByClaimNumber already
// });

// When(
//   'I filter claims by custom date range from {string} to {string}',
//   async function (fromDate, toDate) {
//     await claims.filterByCustomDateRange(fromDate, toDate);
//   }
// );

// Then('I should see the filtered custom date range', async function () {
//   const dateText = await claims.monthsdateverify.textContent();
//   expect(dateText.trim()).not.toBe('');
// });

// steps.js

// claimsSteps.js
// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import { LoginPage } from '../../src/pages/LoginPage.js';
// import { ClaimsPage } from '../../src/pages/ClaimsPage.js';

// let loginPage;
// let claimsPage;

// Given('I navigate to the login page', async function () {
//   loginPage = new LoginPage(this.page);
//   await loginPage.gotoLoginPage();
// });

// When('I login with username {string} and password {string}', async function (username, password) {
//   await loginPage.login(username, password);
// });

// When('I open the Claims tab', async function () {
//   claimsPage = new ClaimsPage(this.page);
//   await claimsPage.openClaimsTab();
// }); 

// When('I filter claims for the last 60 months', async function () {
//   await claimsPage.filterLast60Months();
// });

// // When('I apply Payee filter for {string}', async function (payee) {
// //   await claimsPage.filterByPayee(payee);
// // });

// // When('I apply Provider filter for {string}', async function (provider) {
// //   await claimsPage.filterByProvider(provider);
// // });

// // When('I uncheck Payee {string}', async function (payee) {
// //   await claimsPage.uncheckPayee(payee);
// // });

// // When('I clear all filters', async function () {
// //   await claimsPage.clearFilters();
// // });

// // When('I apply clear filters', async function () {
// //   await claimsPage.applyClear();
// // });

// // When('I close the filter panel', async function () {
// //   await claimsPage.closeFilterPanel();
// // });

// When('I view claim details', async function () {
//   await claimsPage.viewClaimDetails();
// });

// When('I search claim by number {string}', async function (claimNumber) {
//   await claimsPage.filterByClaimNumber(claimNumber);
// });

// When('I filter claims from {string} to {string}', async function (fromDate, toDate) {
//   await claimsPage.filterByCustomDateRange(fromDate, toDate);
// });

// Then('I should see filtered claims', async function () {
//   const content = await claimsPage.monthsdateverify.textContent();
//   expect(content.trim()).not.toBe('');
// });

// let loginPage, claimsPage;

// Given('I am logged in as {string} with password {string}', async function (username, password) {
//   loginPage = new LoginPage(this.page);
//   await loginPage.gotoLoginPage();
//   await loginPage.login(username, password);
//   claimsPage = new ClaimsPage(this.page);
// });

// When('I open the Claims tab', async function () {
//   await claimsPage.openClaimsTab();
// });

// When('I apply Last 60 Months date filter', async function () {
//   await claimsPage.filterLast60Months();
// });

// When('I filter claims by claim number {string}', async function (claimNumber) {
//   await claimsPage.filterByClaimNumber(claimNumber);
// });


// When('I filter claims by payee {string}', async function (payeeName) {
//   await claimsPage.filterByPayee(payeeName);
// });

// When('I filter claims by provider {string}', async function (providerName) {
//   await claimsPage.filterByProvider(providerName);
// });

// Then('I should see filtered results', async function () {
//   const dateText = await claimsPage.monthsdateverify.textContent();
//   if (!dateText || dateText.trim() === '') {
//     throw new Error('No date found after filtering. Filter might have failed.');
//   }
//   console.log('Filtered Results Date:', dateText.trim());
// });

// When('I view claim details', async function () {
//   await claimsPage.viewClaimDetails();
// });

// Then('I should return to the claims page', async function () {
//   await claimsPage.claimsTab.waitFor({ state: 'visible', timeout: 10000 });
//   console.log('Returned to Claims page successfully');
// });

// When('I filter claims by custom date range from {string} to {string}', async function (fromDate, toDate) {
//   await claimsPage.filterByCustomDateRange(fromDate, toDate);
// });



// import { Given, When } from '@cucumber/cucumber';
// // import { LoginPage } from '../../pages/LoginPage.js';
// import { LoginPage } from '../../pages/LoginPage.js';
 

import data from '../../data/testData.json' assert { type: 'json' };
import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';   // <-- add this import
import { LoginPage } from '../../src/pages/LoginPage.js';
import { ClaimsPage } from '../../src/pages/ClaimsPage.js';

setDefaultTimeout(70000);

let page;
let login;
let claimsPage;

Given('I am logged in with valid credentials', async function () {
  page = this.page;  // cucumber-playwright injects page context
  login = new LoginPage(page);
  claimsPage = new ClaimsPage(page);

  await login.gotoLoginPage();
  await login.login(data.user, data.password);

  await page.waitForURL('**/member-portal/**', { timeout: 180000 });
});

When('I open the claims tab', async function () {
  await claimsPage.openClaimsTab();
});

When('I filter claims by {string}', async function (filterLabel) {
  const filter = data.claimsDateFilter.find(f => f.label === filterLabel);
  if (!filter) {
    throw new Error(`Filter label "${filterLabel}" not found in test data`);
  }
  await claimsPage.filterAndPrintClaims(filter);
});

 


// Before(async function () {
//   this.browser = await chromium.launch();
//   this.context = await this.browser.newContext();
//   this.page = await this.context.newPage();

//   // Login before each scenario
//   const login = new LoginPage(this.page);
//   await login.gotoLoginPage();
//   // await login.login('dta', 'Batman123');
//     await login.login(data.user, data.password);
  

//   this.login = login;
//   this.claims = new ClaimsPage(this.page); // init ClaimsPage here
// });

// // After(async function () {
// //   await this.page.close();
// //   await this.context.close();
// //   await this.browser.close();
// // });

// Given('I am logged in', async function () {
//   // Already logged in in Before hook
// });

// When('I open the claims tab', async function () {
//   // await this.claims.openClaimsTab();
//   await this.claims.openClaimsTab();

// });

// When('I filter claims by {string}', async function (label) {
//   await this.claims.filterAndPrintClaimsByLabel(label);
// });

// Then('I see claims printed for {string}', async function (label) {
//   // optional assertions or leave blank
// });
// AfterAll(async function () {
//   await page.close();
//   await context.close();
//   await browser.close();
// });

// let login;
// let claims;

// Given('I am logged in as a user with username {string} and password {string}', async function (username, password) {
//   login = new LoginPage(this.page);
//   await login.gotoLoginPage();
//   await login.login(username, password);

//   claims = new ClaimsPage(this.page);
// });

// When('I open the claims tab', async function () {
//   await claims.openClaimsTab();
// });

// When('I filter claims by {string}', async function (label) {
//   await claims.filterAndPrintClaimsByLabel(label);
// });

// Then('I see the claims printed for {string}', async function (label) {
//   // Optionally verify something, or just rely on console logs in filterAndPrintClaimsByLabel
//   // Example: Check no error message shown, or claims exist if applicable
//   // For demo, just a placeholder:
//   expect(true).toBeTruthy();
// });

// import { BeforeAll, Before, AfterAll, Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';



// import { Given, When, Then } from '@cucumber/cucumber';
// import { LoginPage } from '../../src/pages/LoginPage.js';
// import { ClaimsPage } from '../../src/pages/ClaimsPage.js';
// import { expect } from '@playwright/test';


// Given('I am logged in', async function () {
//   // Assume login done in BeforeAll hook or do it here if needed
//   if (!this.page) throw new Error('Page not initialized');
//   this.login = new LoginPage(this.page);
//   // If you want to do login here, uncomment:
//   await this.login.gotoLoginPage();
//   await this.login.login('Julia', 'Batman123');
// });

// When('I open the claims tab', async function () {
//   this.claims = new ClaimsPage(this.page);
//   await this.claims.openClaimsTab();
// });

// Then('I see the claims page displayed', async function () {
//   // Replace selector below with an actual claims page header or unique element
//   const header = await this.page.locator('css=selector-for-claims-page-header').textContent();
//   expect(header).toContain('Claims');
// });

// When('I filter claims by {string}', async function (label) {
//   if (!this.claims) {
//     this.claims = new ClaimsPage(this.page);
//   }
//   await this.claims.filterAndPrintClaimsByLabel(label);
// });

// Then('I see claims filtered for {string}', async function (label) {
//   // Optionally check something like claims are filtered by label,
//   // or rely on console output in filterAndPrintClaimsByLabel.
//   // For example, verify filtered claims exist:
//   const claims = await this.page.locator('css=selector-for-claim-number').allTextContents();
//   expect(claims.length).toBeGreaterThan(0);
// });

// let browser;
// let context;
// let page;

// BeforeAll(async function () {
//   browser = await chromium.launch();
//   context = await browser.newContext();

//   const page = await context.newPage();
//   const login = new LoginPage(page);

//   await login.gotoLoginPage();
//   await Promise.all([
//     page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
//     login.login('Julia', 'Batman123'),
//   ]);

//   this.context = context;
// });

// AfterAll(async function () {
//   await browser.close();
// });



// Given('I am logged in', async function () {
//   // nothing needed here — login done in BeforeAll
// });

// When('I open the claims tab', async function () {
//   await this.claims.openClaimsTab();
// });

// When('I filter claims by {string}', async function (label) {
//   await this.claims.filterAndPrintClaimsByLabel(label);
// });

// Then('I see claims printed for {string}', async function (label) {
//   // optionally assert something here
// });
