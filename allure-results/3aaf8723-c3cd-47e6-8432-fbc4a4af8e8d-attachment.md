# Test info

- Name: Member Portal - Labs Flow >> Open Labs tab after login
- Location: /home/karthi/pmp/src/tests/labspagegroup.spec.js:29:5

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Username' })
    - waiting for" https://hpp1.b2clogin.com/hpp1.onmicrosoft.com/b2c_1_portalregistration/oauth2/v2.0/authorize?client_id=7d7e2fce-ddb0-45ae-bc42-f5372b8410a4&redirect_uri=https%3A%2F%2Fhikepmp-dev.smilecdr.com%2Fmemb…" navigation to finish...
    - navigated to "https://hpp1.b2clogin.com/hpp1.onmicrosoft.com/b2c_1_portalregistration/oauth2/v2.0/authorize?client_id=7d7e2fce-ddb0-45ae-bc42-f5372b8410a4&redirect_uri=https%3A%2F%2Fhikepmp-dev.smilecdr.com%2Fmemb…"

    at LoginPage.login (/home/karthi/pmp/src/pages/LoginPage.js:28:25)
    at test.beforeAll.timeout (/home/karthi/pmp/src/tests/labspagegroup.spec.js:20:9)
```

# Page snapshot

```yaml
- img "login photo"
- img "HPP logo"
- form "Sign in with your username":
  - heading "Sign in with your username" [level=2]
  - text: Username
  - textbox "Username"
  - text: Password
  - link "Forgot your password?":
    - /url: /hpp1.onmicrosoft.com/B2C_1_PortalRegistration/api/CombinedSigninAndSignup/unified?claimsexchange=ForgotPassword&csrf_token=T1ZaRDMxNkR0R3R0TU1TTUNJNHpJRXVMMktyRm85S1ZvNlZzaERKS0JkUE42ZnJzZ3BqWW9pcW55cU9hMG0yTXRkWjhRRDNVU2RIeEV0QzFGOWNDM0E9PTsyMDI1LTA1LTI2VDA2OjU5OjU2LjU3Njg1NDFaO3FvMDJsS3A0andmNmRoZjN0Nzg3TUE9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&tx=StateProperties=eyJUSUQiOiJhYTA2ZTU5MS03ZTBjLTQyYmUtODE4ZS03NGQ3N2ViMTcwZDgifQ&p=B2C_1_PortalRegistration
  - textbox "Password"
  - button "Sign in"
  - paragraph:
    - text: Don't have an account?
    - link "Sign up now":
      - /url: /hpp1.onmicrosoft.com/B2C_1_PortalRegistration/api/CombinedSigninAndSignup/unified?local=signup&csrf_token=T1ZaRDMxNkR0R3R0TU1TTUNJNHpJRXVMMktyRm85S1ZvNlZzaERKS0JkUE42ZnJzZ3BqWW9pcW55cU9hMG0yTXRkWjhRRDNVU2RIeEV0QzFGOWNDM0E9PTsyMDI1LTA1LTI2VDA2OjU5OjU2LjU3Njg1NDFaO3FvMDJsS3A0andmNmRoZjN0Nzg3TUE9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&tx=StateProperties=eyJUSUQiOiJhYTA2ZTU5MS03ZTBjLTQyYmUtODE4ZS03NGQ3N2ViMTcwZDgifQ&p=B2C_1_PortalRegistration
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
  27 |     await loginButton.click();
> 28 |     await usernameInput.fill(user);
     |                         ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  29 |     await passwordInput.fill(password);
  30 |     await signInButton.click();
  31 |
  32 |     await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 180000 });
  33 |   }
  34 | }
  35 |
```