import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage.js';

import { ClaimsPage } from '../../src/pages/ClaimsPage.js';
import data from '../../data/testData.json' assert { type: 'json' };

test.describe('Claims Page Tests', () => {
  let login;
  let claims;
  let page;



  // Run this block before all tests
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    login = new LoginPage(page);
    claims = new ClaimsPage(page);

    await login.gotoLoginPage();
    await login.login(data.user, data.password);

    await page.waitForURL('**/member-portal/**', { timeout: 180000 });

            claims.page = page;

  }, { timeout: 180000 });



  test(' @smoke Open Claims tab after login', async () => {
    await claims.openClaimsTab(); // Assuming `openClaimsTab` is a method in ClaimsPage


    
  });

  test('  Filter by date and select specific providers', async ({ page }) => {
      await claims.filterByLast60Months();

  const providersToSelect = ['unknown', 'Dr. John Doe'];
  await claims.selectProvidersByNames(providersToSelect)
   
});
    test('  claim number search', async ({ page }) => {
   for (const { label, claimNumber } of data.claimsNumberSearch) {
    await claims.searchClaimNumber(label, claimNumber);
  }

   });

     test('@smoke  print the claims numbers', async ({ page }) => {
     for (const filter of data.claimsDateFilter) {
  await claims.filterAndPrintClaimsByLabel(filter.label, filter.resultsSelectOption);
}

       });

   });



