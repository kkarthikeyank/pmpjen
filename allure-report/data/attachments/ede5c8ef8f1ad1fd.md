# Test info

- Name: Login with incorrect username
- Location: /home/karthi/pmp/src/tests/logina.spec.js:22:1

# Error details

```
Error: page.waitForNavigation: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for navigation until "domcontentloaded"
============================================================
    at LoginPage.login (/home/karthi/pmp/src/pages/LoginPage.js:52:21)
    at /home/karthi/pmp/src/tests/logina.spec.js:30:5
```

# Page snapshot

```yaml
- img "login photo"
- img "HPP logo"
- form "Sign in with your username":
  - heading "Sign in with your username" [level=2]
  - alert:
    - paragraph: We can't seem to find your account
  - text: Username
  - textbox "Username": InvalidUsername
  - text: Password
  - link "Forgot your password?":
    - /url: /hpp1.onmicrosoft.com/B2C_1_PortalRegistration/api/CombinedSigninAndSignup/unified?claimsexchange=ForgotPassword&csrf_token=RVFXWHlPVHV2VzhxdlRBdGh5SStiNDNtSFdjODVEbTYvVTJnTm0veXY1YVBJM3dEQndLeEN4VVg1OEVMekc3VjhQczZNdVVKVlczSFlZVkNqbkx4aHc9PTsyMDI1LTA0LTI0VDEzOjM4OjE5LjAxMjgwODRaO1llK1l4L1pscEZodXBVTE5BU1ZHakE9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&tx=StateProperties=eyJUSUQiOiI2YzZiZmZiMi1mZTQwLTQ4YzctYTJjMC0xM2NlMTRkNzhhNWQifQ&p=B2C_1_PortalRegistration
  - textbox "Password": Batman123
  - button "Sign in"
  - paragraph:
    - text: Don't have an account?
    - link "Sign up now":
      - /url: /hpp1.onmicrosoft.com/B2C_1_PortalRegistration/api/CombinedSigninAndSignup/unified?local=signup&csrf_token=RVFXWHlPVHV2VzhxdlRBdGh5SStiNDNtSFdjODVEbTYvVTJnTm0veXY1YVBJM3dEQndLeEN4VVg1OEVMekc3VjhQczZNdVVKVlczSFlZVkNqbkx4aHc9PTsyMDI1LTA0LTI0VDEzOjM4OjE5LjAxMjgwODRaO1llK1l4L1pscEZodXBVTE5BU1ZHakE9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&tx=StateProperties=eyJUSUQiOiI2YzZiZmZiMi1mZTQwLTQ4YzctYTJjMC0xM2NlMTRkNzhhNWQifQ&p=B2C_1_PortalRegistration
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
  48 |     await usernameInput.fill(username);
  49 |     await passwordInput.fill(password);
  50 |     await signInButton.click();
  51 |
> 52 |     await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 180000 });
     |                     ^ Error: page.waitForNavigation: Test timeout of 30000ms exceeded.
  53 |   }
  54 | }
  55 |
```