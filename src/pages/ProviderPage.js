


// pages/ProviderPage.js
import { expect } from '@playwright/test';

export class ProviderPage {
  constructor(page) {
    this.page = page;
    // Define locators
    this.providerTap = page.locator('#navLink-PROVIDERS');
    this.firstdoctortype = page.getByText('Doctor\'s Type');


        this.doctorsType = page.locator(`//div[normalize-space(text())="Doctor's Type"]`);
        this.firstdoctorname = page.getByText('Doctor\'s Name');

        this.doctorName = page.locator(`//div[normalize-space(text())="Doctor's Name"]`);

        this.doctorTypeTextbox = page.getByRole('textbox', { name: 'Enter a type of doctor or a' });
        this.doctorNameResults = page.locator("//span[contains(@class, 'provider-card-name')]");
        this.distancedropdown = page.locator("//button[@id='dropdownDistanceFilterButton']");
        this.distancemile = page.locator("//span[@class='provider-card-distance']");

        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.clearButton = page.getByText('Clear');
        this.zipCodeTextbox = page.getByRole('textbox', { name: 'ZIP Code' });
        this.doctorNameTextbox = page.getByRole('textbox', { name: "Enter a doctor's name" });
        this.openplandropdown =page.locator("//button[@id='dropdownPlanFilterButton']")
        this.kidzPartnersButton = page.locator("//li[normalize-space()='KidzPartners']");
        this.healthPartnersButton = page.locator("//li[normalize-space()='Health Partners']");
         this.healthpartnersMedicare =page.locator("//li[normalize-space()='Health Partners Medicare']");
        // this.healthPartnersLabel = page.locator("//p[@aria-label='Health Partners']");
        // this.clearButton = page.getByText('Clear');

        // this.healthPartnersButton = page.locator("//button[@id='dropdownPlanFilterButton']");
        // this.kidzPartnersOption = page.getByText('KidzPartners');
        // this.healthFacilitiesOption = page.getByText('Health Facilities');
        // this.myDirectoryButton = page.getByRole('button', { name: 'My Directory' });
        // this.removeAllButton = page.getByRole('button', { name: 'Remove All' });
        this.logoutButton = page.locator("//button[@id='dropdownMenuProfile']");
        this.logoutButtonProfile = page.locator('#dropdownItemLogoutButton');
        this. specialtyLocator = page.locator("//p[starts-with(@data-id, 'PROVIDERS.SPECIALTY-')]");
        this. planLocator = page.locator("//p[@aria-label='Plan']/following-sibling::p[1]");


      }

      
    // open the provider tab

  async openproviderTab () {

   // Ensure the provider tab is visible before clicking
    await this.providerTap.waitFor({ state: 'visible', timeout: 20000 });
    await this.providerTap.click();
}

// scenario : search for doctor type with keyword and plan and distance
async firstdoctortypeopen() {
    await this.firstdoctortype.click();
}
async selectDoctorType() {
await this.page.waitForSelector('//div[normalize-space(text())="Doctor\'s Type"]', { state: 'visible', timeout: 20000 });
await this.doctorsType.click();

}

async enterDoctorType(keyword) {
    await this.doctorTypeTextbox.fill(keyword);
  }

  // async enterDoctorName(name) {
  //   await this.doctorNameTextbox.fill(name);
  // }

  // async openPlanDropdown() {
  //   await this.openplandropdown.click();
  // }

  async selectPlan(planName) {
  await this.openplandropdown.click();
 const planOption = this.page.locator(`//li[normalize-space(.)='${planName}']`);
  await planOption.click();


}

async selectDistance(distance) {
    const trimmedDistance = distance.trim();

    // Click the dropdown to open options
    await this.distancedropdown.click();

    // Optional short wait if dropdown takes time to render
    await this.page.waitForTimeout(500);

    // Locator for the matching option using dynamic XPath
    const optionLocator = this.page.locator(`//li[normalize-space()='${trimmedDistance}']`);

    // Wait for the option to be visible
    await optionLocator.waitFor({ state: 'visible', timeout: 5000 });

    // Click the option
    await optionLocator.click();
  }

async printDistanceIfExists() {
    const isVisible = await this.distancemile.isVisible();
    if (isVisible) {
      const text = await this.distancemile.textContent();
      console.log(`distance for provider: ${text}`);
    } else {
      console.log("No provider displayed.");
    }
  }


  

  async printSpecialtyIfExists() {
    const isVisible = await this.specialtyLocator.isVisible();
    if (isVisible) {
      const text = await this.specialtyLocator.textContent();
      console.log(`Specialty: ${text}`);
    } else {
      console.log("No specialty displayed.");
    }
  }

  async printPlanIfExists() {
    const isVisible = await this.planLocator.isVisible();
    if (isVisible) {
      const text = await this.planLocator.textContent();
      console.log(`Plan: ${text}`);
    } else {
      console.log("No plan displayed.");
    }
  }

  async clickSearch() {
    await this.searchButton.click();
  }

  async clickClear() {
    await this.clearButton.click();
  }

 // scenario : search for doctor name with keyword and plan and distance

  async clickDoctorName() {

     await this.firstdoctorname.click();
  }
  async selectDoctorName() {
 await this.doctorName.waitFor({ state: 'visible', timeout: 10000 });

  await this.doctorName.click();

}

  async searchByDoctorName(name) {
    await this.doctorNameTextbox.fill(name);

  }
   async selectDoctorPlan(planName) {
  await this.openplandropdown.click();
 const planOption = this.page.locator(`//li[normalize-space(.)='${planName}']`);
 await planOption.waitFor({ state: 'visible', timeout: 10000 });

  await planOption.click();
   console.log(`[INFO] Selected plan: ${planName}`);


}


async selectDistancedoctorname(distance) {
  console .log(`[INFO] Selected distance: ${distance}`);
    const trimmedDistance = distance.trim();

    // Click the dropdown to open options
    await this.distancedropdown.click();

    // Optional short wait if dropdown takes time to render
    await this.page.waitForTimeout(500);

    // Locator for the matching option using dynamic XPath
    const optionLocator = this.page.locator(`//li[normalize-space()='${trimmedDistance}']`);

    // Wait for the option to be visible
    await optionLocator.waitFor({ state: 'visible', timeout: 5000 });

    // Click the option
    await optionLocator.click();
  }

// async printDistancedoctornameIfExists() {
//     const isVisible = await this.distancemile.isVisible();
//     if (isVisible) {
//       const text = await this.distancemile.textContent();
//       console.log(`distance for provider: ${text}`);
//     } else {
//       console.log("No provider displayed.");
//     }
//   }
async printDistancedoctornameIfExists() {
  try {
    await this.distancemile.waitFor({ state: 'visible', timeout: 5000 });
    const text = await this.distancemile.textContent();
    console.log(`distance for provider: ${text}`);
  } catch (e) {
    console.log("No provider displayed.");
  }
}



  async printdoctorNameIfExists() {
    const isVisible = await this.doctorNameResults.isVisible();
    if (isVisible) {
      const text = await this.doctorNameResults.textContent();
      console.log(`doctor: ${text}`);
    } else {
      console.log("No doctor displayed.");
    }
  }

  async printdoctorPlanIfExists() {
    const isVisible = await this.planLocator.isVisible();
    if (isVisible) {
      const text = await this.planLocator.textContent();
      console.log(`Plan: ${text}`);
    } else {
      console.log("No plan displayed.");
    }
  }





async logout() {
  // Ensure the dropdown menu button is visible and click it
  await expect(this.logoutButton).toBeVisible();  // Ensure the menu button is visible
  await this.logoutButton.click();  // Open the dropdown menu
  
  // Ensure the logout button in the dropdown is visible before clicking
  await expect(this.logoutButtonProfile).toBeVisible();  // Ensure logout button is visible
  await this.logoutButtonProfile.click();  // Perform the logout action
}


}

  

