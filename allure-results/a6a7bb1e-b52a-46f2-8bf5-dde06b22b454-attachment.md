# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('heading', { name: 'Welcome, Julia Donaldson' }) to be visible

    at DashboardPage.waitForElementToBeVisible (/home/karthi/pmp/src/pages/DashboardPage.js:16:19)
    at DashboardPage.assertLoginSuccess (/home/karthi/pmp/src/pages/DashboardPage.js:21:16)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:56:46
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
   8 |     // this.welcomeLocator = page.locator('//span[@id="dashHeader"]');
   9 |         this.welcomeLocator = page.getByRole('heading', { name: 'Welcome, Julia Donaldson' }); // ✅ updated locator
  10 |
  11 |     this.memberIdLocator = page.locator("//div[@data-id='benefitsCardMemberId']");
  12 |   }
  13 |
  14 |   // Dynamic wait for any element to be visible
  15 |   async waitForElementToBeVisible(locator, timeout = 30000) {
> 16 |     await locator.waitFor({ state: 'visible', timeout });
     |                   ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  17 |   }
  18 |
  19 |   // Dynamic assertion for login success
  20 |   async assertLoginSuccess(timeout = 15000) {
  21 |     await this.waitForElementToBeVisible(this.welcomeLocator, timeout);
  22 |     const welcomeText = await this.welcomeLocator.textContent();
  23 |     console.log('🟢 Welcome message:', welcomeText?.trim());
  24 |     return welcomeText?.trim();
  25 |   }
  26 |
  27 |   // Get member ID dynamically with fallback to handle missing element
  28 |   async getMemberId() {
  29 |     try {
  30 |       await this.waitForElementToBeVisible(this.memberIdLocator, 10000);
  31 |       const memberId = await this.memberIdLocator.textContent();
  32 |       console.log('🟢 Member ID:', memberId?.trim());
  33 |       return memberId?.trim();
  34 |     } catch (error) {
  35 |       console.warn('⚠️ Member ID not displayed for this user.');
  36 |       return null;
  37 |     }
  38 |   }
  39 |
  40 |
  41 | }
  42 |
  43 |
  44 |
```