import { test, expect } from '@playwright/test';

// Set headless mode to true globally for this test
test.use({ headless: true });

test('Login and search for member by first name', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://hikepmp-dev.smilecdr.com/admin/member-portal/#/login');

  // Wait for login button to appear and click it

  await page.locator('//button[@id="loginButton"]').click();
  console.log('Login button clicked');

  // Wait for page to load post-login (increase timeout if slow)
  await page.waitForTimeout(10000);

  // Interact with the search form
  await page.waitForSelector('//input[@id="lookupFirstName"]');
  await page.locator('//input[@id="lookupFirstName"]').click();
  await page.locator('//input[@id="lookupFirstName"]').fill('julia');

  // Click the Search button
  await page.locator("//button[normalize-space()='Search']").click();
  console.log('Search button clicked');

  // Optional: Add assertion or verification here
  // await expect(page.locator('//div[contains(text(), "Expected Result")]')).toBeVisible();
});
