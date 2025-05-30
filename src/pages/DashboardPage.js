

import { expect } from '@playwright/test';

export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.welcomeLocator = page.locator('//span[@id="dashHeader"]');
        // this.welcomeLocator = page.getByRole('heading', { name: 'Welcome, Julia Donaldson' }); // ✅ updated locator

    this.memberIdLocator = page.locator("//div[@data-id='benefitsCardMemberId']");
  }

  // Dynamic wait for any element to be visible
  async waitForElementToBeVisible(locator, timeout = 30000) {
    await locator.waitFor({ state: 'visible', timeout });
  }

  // Dynamic assertion for login success
  async assertLoginSuccess(timeout = 15000) {
    await this.waitForElementToBeVisible(this.welcomeLocator, timeout);
    const welcomeText = await this.welcomeLocator.textContent();
    console.log('🟢 Welcome message:', welcomeText?.trim());
    return welcomeText?.trim();
  }

  // Get member ID dynamically with fallback to handle missing element
  async getMemberId() {
    try {
      await this.waitForElementToBeVisible(this.memberIdLocator, 10000);
      const memberId = await this.memberIdLocator.textContent();
      console.log('🟢 Member ID:', memberId?.trim());
      return memberId?.trim();
    } catch (error) {
      console.warn('⚠️ Member ID not displayed for this user.');
      return null;
    }
  }


}


