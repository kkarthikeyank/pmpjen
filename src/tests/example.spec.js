// @ts-check
import { test, expect } from '@playwright/test';

// test.only('has title', async ({ page }) => {
//   await page.goto('https://letcode.in/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle( 'LetCode with Koushik' );
// });

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
console.log('Test completed successfully.');
});
