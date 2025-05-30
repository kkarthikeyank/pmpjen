# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('//span[@id="dashHeader"]') to be visible

    at DashboardPage.waitForElementToBeVisible (/home/karthi/pmp/src/pages/DashboardPage.js:14:19)
    at DashboardPage.assertLoginSuccess (/home/karthi/pmp/src/pages/DashboardPage.js:19:16)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:56:46
```

# Page snapshot

```yaml
- banner:
  - heading "Member Portal" [level=1]
- status: Loading...
```

# Test source

```ts
   1 |
   2 |
   3 | import { expect } from '@playwright/test';
   4 |
   5 | export class DashboardPage {
   6 |   constructor(page) {
   7 |     this.page = page;
   8 |     this.welcomeLocator = page.locator('//span[@id="dashHeader"]');
   9 |     this.memberIdLocator = page.locator("//div[@data-id='benefitsCardMemberId']");
  10 |   }
  11 |
  12 |   // Dynamic wait for any element to be visible
  13 |   async waitForElementToBeVisible(locator, timeout = 30000) {
> 14 |     await locator.waitFor({ state: 'visible', timeout });
     |                   ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  15 |   }
  16 |
  17 |   // Dynamic assertion for login success
  18 |   async assertLoginSuccess(timeout = 15000) {
  19 |     await this.waitForElementToBeVisible(this.welcomeLocator, timeout);
  20 |     const welcomeText = await this.welcomeLocator.textContent();
  21 |     console.log('🟢 Welcome message:', welcomeText?.trim());
  22 |     return welcomeText?.trim();
  23 |   }
  24 |
  25 |   // Get member ID dynamically with fallback to handle missing element
  26 |   async getMemberId() {
  27 |     try {
  28 |       await this.waitForElementToBeVisible(this.memberIdLocator, 10000);
  29 |       const memberId = await this.memberIdLocator.textContent();
  30 |       console.log('🟢 Member ID:', memberId?.trim());
  31 |       return memberId?.trim();
  32 |     } catch (error) {
  33 |       console.warn('⚠️ Member ID not displayed for this user.');
  34 |       return null;
  35 |     }
  36 |   }
  37 |
  38 |
  39 | }
  40 |
  41 |
  42 |
```