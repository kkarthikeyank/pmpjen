# Test info

- Name: Member Portal - Labs Flow >> Open Labs tab after login
- Location: /home/karthi/pmp/src/tests/providerpagegroup.spec.js:30:5

# Error details

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "https://hikepmp-dev.smilecdr.com/member-portal/#/login", waiting until "load"

    at LoginPage.gotoLoginPage (/home/karthi/pmp/src/pages/LoginPage.js:8:21)
    at test.beforeAll.timeout (/home/karthi/pmp/src/tests/providerpagegroup.spec.js:20:21)
```

# Page snapshot

```yaml
- banner:
  - heading "Member Portal" [level=1]
- main:
  - img "background side image"
  - img "Company Logo"
  - heading "Member Access Portal" [level=1]
  - heading [level=2]
  - paragraph: This portal is compliant with the Health Insurance Portability and Accountability Act (HIPAA) and ensures the privacy and security of your information.
  - button "Enter"
  - text: Version 5.0.0
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
>  8 |     await this.page.goto('https://hikepmp-dev.smilecdr.com/member-portal/#/login');
     |                     ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
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
  27 |     await loginButton.click();
  28 |     await usernameInput.fill(user);
  29 |     await passwordInput.fill(password);
  30 |     await signInButton.click();
  31 |
  32 |     await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 180000 });
  33 |   }
  34 | }
  35 |
```