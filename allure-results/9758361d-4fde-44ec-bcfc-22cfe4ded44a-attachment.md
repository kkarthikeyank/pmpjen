# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Login' })

    at LoginPage.login (/home/karthi/pmp/src/pages/LoginPage.js:27:23)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:38:15
```

# Test source

```ts
   1 |                 
   2 | export class LoginPage {
   3 |   constructor(page) {
   4 |     this.page = page;
   5 |   }
   6 |
   7 |   async gotoLoginPage() {
   8 |     await this.page.goto('https://hikepmp-dev.smilecdr.com/member-portal/#/login');
   9 |     // await this.page.goto(process.env.LOGIN_URL);
  10 |   }
  11 |
  12 |   // async gotoLoginPage() {
  13 |   //   const loginUrl = process.env.LOGIN_URL || 'https://hikepmp-dev.smilecdr.com/member-portal/#/login';  // Fallback URL
  14 |   //   console.log('Using login URL:', loginUrl);  // Debug: Print the login URL
  15 |   //   await this.page.goto(loginUrl);
  16 |   // }
  17 |   
  18 |
  19 |   async login(user, password) {
  20 |     //  async login(NAME, PASSWORD) {
  21 |
  22 |     const loginButton = this.page.getByRole('button', { name: 'Login' });
  23 |     const usernameInput = this.page.getByRole('textbox', { name: 'Username' });
  24 |     const passwordInput = this.page.getByRole('textbox', { name: 'Password' });
  25 |     const signInButton = this.page.getByRole('button', { name: 'Sign in' });
  26 |
> 27 |     await loginButton.click();
     |                       ^ Error: locator.click: Target page, context or browser has been closed
  28 |     await usernameInput.fill(user);
  29 |     await passwordInput.fill(password);
  30 |     await signInButton.click();
  31 |
  32 |     await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 180000 });
  33 |   }
  34 | }
  35 |
```