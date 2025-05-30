# Test info

- Name: Claims Page Tests >> View claim details and return
- Location: /home/karthi/pmp/src/tests/claimspagegroup.spec.js:44:3

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('textbox', { name: 'Username' })

    at LoginPage.login (/home/karthi/pmp/src/pages/LoginPage.js:48:25)
    at /home/karthi/pmp/src/tests/claimspagegroup.spec.js:24:5
```

# Test source

```ts
   1 |
   2 | // export class LoginPage {
   3 | //   constructor(page) {
   4 | //     this.page = page;
   5 | //     this.usernameInput = page.getByRole('textbox', { name: 'Username' });
   6 | //     this.passwordInput = page.getByRole('textbox', { name: 'Password' });
   7 | //     this.loginButton = page.getByRole('button', { name: 'Login' });
   8 | //     this.signInButton = page.getByRole('button', { name: 'Sign in' });
   9 | //   }
  10 |
  11 | //   async gotoLoginPage() {
  12 | //     await this.page.goto('https://hikepmp-dev.smilecdr.com/member-portal/#/login');
  13 | //   }
  14 |
  15 | //   async login(username, password) {
  16 | //     await this.loginButton.click();
  17 | //     await this.usernameInput.fill(username);
  18 | //     await this.passwordInput.fill(password);
  19 | //     await this.signInButton.click();
  20 | //     // await this.page.waitForTimeout(180000); // Optional: wait for a bit after login
  21 | //     await this.page.waitForNavigation({ 
  22 | //       waitUntil: 'domcontentloaded', 
  23 | //       timeout: 180000 
  24 | //     });
  25 |
  26 | //   }
  27 | // }
  28 |                       
  29 |
  30 |
  31 |
  32 | export class LoginPage {
  33 |   constructor(page) {
  34 |     this.page = page;
  35 |   }
  36 |
  37 |   async gotoLoginPage() {
  38 |     await this.page.goto('https://hikepmp-dev.smilecdr.com/member-portal/#/login');
  39 |   }
  40 |
  41 |   async login(username, password) {
  42 |     const loginButton = this.page.getByRole('button', { name: 'Login' });
  43 |     const usernameInput = this.page.getByRole('textbox', { name: 'Username' });
  44 |     const passwordInput = this.page.getByRole('textbox', { name: 'Password' });
  45 |     const signInButton = this.page.getByRole('button', { name: 'Sign in' });
  46 |
  47 |     await loginButton.click();
> 48 |     await usernameInput.fill(username);
     |                         ^ Error: locator.fill: Target page, context or browser has been closed
  49 |     await passwordInput.fill(password);
  50 |     await signInButton.click();
  51 |
  52 |     await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 180000 });
  53 |   }
  54 | }
  55 |
```