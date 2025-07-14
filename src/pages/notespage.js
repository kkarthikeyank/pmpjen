
export class NotesPage {
  constructor(page) {
        this.page = page;
        this.notesTab = page.locator('//a[@id="navLink-HEALTH_NOTES"]');
    
  }



  async openNotesTab() {
    // Ensure the Notes tab is visible before clicking
    await this.notesTab.click();
    await this.page.waitForLoadState('networkidle');

    // Optionally, wait for the page to load after clicking the  tab (if it redirects)
    // await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 });

  }
}
