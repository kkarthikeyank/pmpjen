// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// // import { LoginPage } from '../../pages/LoginPage.js';
// // import { LoginPage } from '../../pages/LoginPage.js';
// import { LoginPage } from '../../src/pages/LoginPage.js';


// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import { LoginPage } from '../../src/pages/LoginPage.js';
// import { DashboardPage } from '../../src/pages/DashboardPage.js';

// let loginPage;
// let dashboardPage;

// Given('I navigate to the login page', async function () {
//   loginPage = new LoginPage(this.page);
//   await loginPage.gotoLoginPage();
// });

// When('I login with username {string} and password {string}', async function (username, password) {
//   await loginPage.login(username, password);
// });

// Then('I should be redirected to the member portal dashboard', async function () {
//   await this.page.waitForURL('**/member-portal/**', { timeout: 180000 });
//   expect(this.page.url()).toContain('/member-portal');
// });
// Then('I should see a welcome message', async function () {
//   const dashboardPage = new DashboardPage(this.page);
//   const welcomeMessage = await dashboardPage.assertLoginSuccess();
//   expect(welcomeMessage).toContain('Welcome');
// });

// Then('I should see my Member ID', async function () {
//   const dashboardPage = new DashboardPage(this.page);
//   const memberId = await dashboardPage.getMemberId();
//   expect(memberId).toBeTruthy(); // Ensure Member ID is present
// });

// features/step-definitions/loginSteps.js

// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import { LoginPage } from '../../src/pages/LoginPage.js';
// import { DashboardPage } from '../../src/pages/DashboardPage.js';

// let loginPage;

// Given('I navigate to the login page', async function () {
//   loginPage = new LoginPage(this.page);
//   await loginPage.gotoLoginPage();
// });

// When('I login with username {string} and password {string}', async function (username, password) {
//   await loginPage.login(username, password);
// });

// Then('I should be redirected to the member portal dashboard', async function () {
//   await this.page.waitForURL('**/member-portal/**', { timeout: 180000 });
//   expect(this.page.url()).toContain('/member-portal');
// });

// Then('I should see a welcome message', async function () {
//   const dashboardPage = new DashboardPage(this.page);
//   const welcomeMessage = await dashboardPage.assertLoginSuccess();
//   expect(welcomeMessage).toContain('Welcome');
// });

// Then('I should see my Member ID', async function () {
//   const dashboardPage = new DashboardPage(this.page);
//   const memberId = await dashboardPage.getMemberId();
//   expect(memberId).toBeTruthy();
// });

// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import { LoginPage } from '../../src/pages/LoginPage.js';
// import { DashboardPage } from '../../src/pages/DashboardPage.js';

// let loginPage;
// let dashboardPage;

// Given('I navigate to the login page', async function () {
//   loginPage = new LoginPage(this.page);
//   await loginPage.gotoLoginPage();
// });

// When('I login with username {string} and password {string}', async function (username, password) {
//   await loginPage.login(username, password);
// });

// Then('I should be redirected to the member portal dashboard', async function () {
//   await this.page.waitForURL('**/member-portal/**', { timeout: 180000 });
//   expect(this.page.url()).toContain('/member-portal');
// });

// Then('I should see a welcome message', async function () {
//   dashboardPage = new DashboardPage(this.page);
//   const welcomeMessage = await dashboardPage.assertLoginSuccess();
//   expect(welcomeMessage).toContain('Welcome');
// });

// Then('I should see my Member ID', async function () {
//   dashboardPage = new DashboardPage(this.page);
//   const memberId = await dashboardPage.getMemberId();
//   expect(memberId).toBeTruthy();
// });

// // Negative scenarios

// Then('I should see an error message indicating invalid credentials', async function () {
//   const errorMessage = await loginPage.getErrorMessage();
//   expect(errorMessage).toContain('Invalid credentials');
// });
