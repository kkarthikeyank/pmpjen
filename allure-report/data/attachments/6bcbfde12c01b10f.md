# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:22:1

# Error details

```
Error: locator.click: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('text=undefined')

    at LabsPage.selectCustomDate (/home/karthi/pmp/src/pages/LabsPage.js:167:28)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:120:3
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
  - heading "Labs for" [level=1]
  - button "Julia Donaldson"
- text: "In this section you can view results from lab work ordered by your provider and billed to the Plan. Note: Lab data is updated bi-weekly."
- button "Read More"
- paragraph: Ordering Physician
- textbox "ex. John Smith": scott down
- paragraph: Test Names
- textbox "ex. Triglycerides"
- paragraph: Lab Vendor
- textbox "ex. Life Labs": precision Labs
- paragraph: Filter by date of service range
- button "Custom"
- button "Previous month"
- combobox "Select month":
  - option "January": Jan
  - option "February": Feb
  - option "March": Mar
  - option "April": Apr
  - option "May" [selected]
  - option "June": Jun
  - option "July": Jul
  - option "August": Aug
  - option "September": Sep
  - option "October": Oct
  - option "November": Nov
  - option "December": Dec
- combobox "Select year":
  - option "2015"
  - option "2016"
  - option "2017"
  - option "2018"
  - option "2019"
  - option "2020"
  - option "2021"
  - option "2022"
  - option "2023"
  - option "2024"
  - option "2025" [selected]
  - option "2026"
  - option "2027"
  - option "2028"
  - option "2029"
  - option "2030"
  - option "2031"
  - option "2032"
  - option "2033"
  - option "2034"
  - option "2035"
- button "Next month"
- text: May 2025
- grid:
  - row "Su Mo Tu We Th Fr Sa":
    - columnheader "Su"
    - columnheader "Mo"
    - columnheader "Tu"
    - columnheader "We"
    - columnheader "Th"
    - columnheader "Fr"
    - columnheader "Sa"
  - row "Sunday, April 27, 2025 Monday, April 28, 2025 Tuesday, April 29, 2025 Wednesday, April 30, 2025 Thursday, May 1, 2025 Friday, May 2, 2025 Saturday, May 3, 2025":
    - gridcell "Sunday, April 27, 2025": "27"
    - gridcell "Monday, April 28, 2025": "28"
    - gridcell "Tuesday, April 29, 2025": "29"
    - gridcell "Wednesday, April 30, 2025": "30"
    - gridcell "Thursday, May 1, 2025": "1"
    - gridcell "Friday, May 2, 2025": "2"
    - gridcell "Saturday, May 3, 2025": "3"
  - row "Sunday, May 4, 2025 Monday, May 5, 2025 Tuesday, May 6, 2025 Wednesday, May 7, 2025 Thursday, May 8, 2025 Friday, May 9, 2025 Saturday, May 10, 2025":
    - gridcell "Sunday, May 4, 2025": "4"
    - gridcell "Monday, May 5, 2025": "5"
    - gridcell "Tuesday, May 6, 2025": "6"
    - gridcell "Wednesday, May 7, 2025": "7"
    - gridcell "Thursday, May 8, 2025": "8"
    - gridcell "Friday, May 9, 2025": "9"
    - gridcell "Saturday, May 10, 2025": "10"
  - row "Sunday, May 11, 2025 Monday, May 12, 2025 Tuesday, May 13, 2025 Wednesday, May 14, 2025 Thursday, May 15, 2025 Friday, May 16, 2025 Saturday, May 17, 2025":
    - gridcell "Sunday, May 11, 2025": "11"
    - gridcell "Monday, May 12, 2025": "12"
    - gridcell "Tuesday, May 13, 2025": "13"
    - gridcell "Wednesday, May 14, 2025": "14"
    - gridcell "Thursday, May 15, 2025": "15"
    - gridcell "Friday, May 16, 2025": "16"
    - gridcell "Saturday, May 17, 2025": "17"
  - row "Sunday, May 18, 2025 Monday, May 19, 2025 Tuesday, May 20, 2025 Wednesday, May 21, 2025 Thursday, May 22, 2025 Friday, May 23, 2025 Saturday, May 24, 2025":
    - gridcell "Sunday, May 18, 2025": "18"
    - gridcell "Monday, May 19, 2025": "19"
    - gridcell "Tuesday, May 20, 2025": "20"
    - gridcell "Wednesday, May 21, 2025": "21"
    - gridcell "Thursday, May 22, 2025": "22"
    - gridcell "Friday, May 23, 2025": "23"
    - gridcell "Saturday, May 24, 2025": "24"
  - row "Sunday, May 25, 2025 Monday, May 26, 2025 Tuesday, May 27, 2025 Wednesday, May 28, 2025 Thursday, May 29, 2025 Friday, May 30, 2025 Saturday, May 31, 2025":
    - gridcell "Sunday, May 25, 2025": "25"
    - gridcell "Monday, May 26, 2025": "26"
    - gridcell "Tuesday, May 27, 2025": "27"
    - gridcell "Wednesday, May 28, 2025": "28"
    - gridcell "Thursday, May 29, 2025": "29"
    - gridcell "Friday, May 30, 2025": "30"
    - gridcell "Saturday, May 31, 2025": "31"
  - row "Sunday, June 1, 2025 Monday, June 2, 2025 Tuesday, June 3, 2025 Wednesday, June 4, 2025 Thursday, June 5, 2025 Friday, June 6, 2025 Saturday, June 7, 2025":
    - gridcell "Sunday, June 1, 2025"
    - gridcell "Monday, June 2, 2025"
    - gridcell "Tuesday, June 3, 2025"
    - gridcell "Wednesday, June 4, 2025"
    - gridcell "Thursday, June 5, 2025"
    - gridcell "Friday, June 6, 2025"
    - gridcell "Saturday, June 7, 2025"
- text: June 2025
- grid:
  - row "Su Mo Tu We Th Fr Sa":
    - columnheader "Su"
    - columnheader "Mo"
    - columnheader "Tu"
    - columnheader "We"
    - columnheader "Th"
    - columnheader "Fr"
    - columnheader "Sa"
  - row "Sunday, June 1, 2025 Monday, June 2, 2025 Tuesday, June 3, 2025 Wednesday, June 4, 2025 Thursday, June 5, 2025 Friday, June 6, 2025 Saturday, June 7, 2025":
    - gridcell "Sunday, June 1, 2025": "1"
    - gridcell "Monday, June 2, 2025": "2"
    - gridcell "Tuesday, June 3, 2025": "3"
    - gridcell "Wednesday, June 4, 2025": "4"
    - gridcell "Thursday, June 5, 2025": "5"
    - gridcell "Friday, June 6, 2025": "6"
    - gridcell "Saturday, June 7, 2025": "7"
  - row "Sunday, June 8, 2025 Monday, June 9, 2025 Tuesday, June 10, 2025 Wednesday, June 11, 2025 Thursday, June 12, 2025 Friday, June 13, 2025 Saturday, June 14, 2025":
    - gridcell "Sunday, June 8, 2025": "8"
    - gridcell "Monday, June 9, 2025": "9"
    - gridcell "Tuesday, June 10, 2025": "10"
    - gridcell "Wednesday, June 11, 2025": "11"
    - gridcell "Thursday, June 12, 2025": "12"
    - gridcell "Friday, June 13, 2025": "13"
    - gridcell "Saturday, June 14, 2025": "14"
  - row "Sunday, June 15, 2025 Monday, June 16, 2025 Tuesday, June 17, 2025 Wednesday, June 18, 2025 Thursday, June 19, 2025 Friday, June 20, 2025 Saturday, June 21, 2025":
    - gridcell "Sunday, June 15, 2025": "15"
    - gridcell "Monday, June 16, 2025": "16"
    - gridcell "Tuesday, June 17, 2025": "17"
    - gridcell "Wednesday, June 18, 2025": "18"
    - gridcell "Thursday, June 19, 2025": "19"
    - gridcell "Friday, June 20, 2025": "20"
    - gridcell "Saturday, June 21, 2025": "21"
  - row "Sunday, June 22, 2025 Monday, June 23, 2025 Tuesday, June 24, 2025 Wednesday, June 25, 2025 Thursday, June 26, 2025 Friday, June 27, 2025 Saturday, June 28, 2025":
    - gridcell "Sunday, June 22, 2025": "22"
    - gridcell "Monday, June 23, 2025": "23"
    - gridcell "Tuesday, June 24, 2025": "24"
    - gridcell "Wednesday, June 25, 2025": "25"
    - gridcell "Thursday, June 26, 2025": "26"
    - gridcell "Friday, June 27, 2025": "27"
    - gridcell "Saturday, June 28, 2025": "28"
  - row "Sunday, June 29, 2025 Monday, June 30, 2025 Tuesday, July 1, 2025 Wednesday, July 2, 2025 Thursday, July 3, 2025 Friday, July 4, 2025 Saturday, July 5, 2025":
    - gridcell "Sunday, June 29, 2025": "29"
    - gridcell "Monday, June 30, 2025": "30"
    - gridcell "Tuesday, July 1, 2025": "1"
    - gridcell "Wednesday, July 2, 2025": "2"
    - gridcell "Thursday, July 3, 2025": "3"
    - gridcell "Friday, July 4, 2025": "4"
    - gridcell "Saturday, July 5, 2025": "5"
  - row "Sunday, July 6, 2025 Monday, July 7, 2025 Tuesday, July 8, 2025 Wednesday, July 9, 2025 Thursday, July 10, 2025 Friday, July 11, 2025 Saturday, July 12, 2025":
    - gridcell "Sunday, July 6, 2025": "6"
    - gridcell "Monday, July 7, 2025": "7"
    - gridcell "Tuesday, July 8, 2025": "8"
    - gridcell "Wednesday, July 9, 2025": "9"
    - gridcell "Thursday, July 10, 2025": "10"
    - gridcell "Friday, July 11, 2025": "11"
    - gridcell "Saturday, July 12, 2025": "12"
- paragraph: Status
- checkbox "Checkbox for Abnormal"
- text: Abnormal
- button "Apply"
- text: Clear
- separator
- text: "Date Range: from 02-08-2025 to 05-08-2025 Show"
- combobox "select number of results":
  - option "5" [selected]
  - option "10"
  - option "25"
  - option "50"
  - option "100"
- text: entries No Lab Results to Show
- list:
  - listitem:
    - link "‹":
      - /url: ""
  - listitem:
    - link "1":
      - /url: ""
  - listitem:
    - link "›":
      - /url: ""
- text: "Showing: 0 - 0 of 0"
```

# Test source

```ts
   67 |
   68 |     // ✅ console log lab result text
   69 |     const labText = await labResult.textContent();
   70 |     console.log('✅ Found Lab Result:', labText?.trim());
   71 |
   72 |   }
   73 |
   74 |
   75 |
   76 |
   77 |   async filterByDateRange() {
   78 |     await this.last36MonthsButton.click();
   79 |     console.log('🔍 Clicked on "Last 36 Months" button.');
   80 |   
   81 |     await this.last3MonthsOption.click();
   82 |     console.log('🔍 Selected "Last 3 Months" option.');
   83 |   
   84 |     // Wait for UI to reflect the date range change
   85 |     await this.dateRangeText.waitFor({ state: 'visible', timeout: 10000 });
   86 |   
   87 |     // Dynamically calculate the expected date range
   88 |     const endDate = new Date();
   89 |     const startDate = new Date();
   90 |     startDate.setMonth(startDate.getMonth() - 3);
   91 |   
   92 |     // Format date as MM-DD-YYYY
   93 |     const formatDate = (date) => {
   94 |       const mm = String(date.getMonth() + 1).padStart(2, '0');
   95 |       const dd = String(date.getDate()).padStart(2, '0');
   96 |       const yyyy = date.getFullYear();
   97 |       return `${mm}-${dd}-${yyyy}`;
   98 |     };
   99 |   
  100 |     const expectedStart = formatDate(startDate);
  101 |     const expectedEnd = formatDate(endDate);
  102 |   
  103 |     // Log the expected date range
  104 |     console.log(`🔍 Expected Date Range: from ${expectedStart} to ${expectedEnd}`);
  105 |   
  106 |     // Use a regex to ignore spacing or additional text issues
  107 |     const pattern = new RegExp(`Date Range:\\s*from\\s*${expectedStart}\\s*to\\s*${expectedEnd}`, 'i');
  108 |   
  109 |     // Assert the date range text
  110 |     await expect(this.dateRangeText).toHaveText(pattern, { timeout: 15000 });
  111 |     console.log('✅ Date range successfully validated.');
  112 |   
  113 |     // // Assert that "No Lab Results to Show" text is visible
  114 |     await expect(this.noLabResultsText).toBeVisible({ timeout: 10000 });
  115 |     console.log('✅ "No Lab Results to Show" is visible.');
  116 |   }
  117 |   
  118 |   // async applyCustomDateFilter() {
  119 |   //   await this.last36MonthsButton.click();
  120 |   //   await this.customDateButton.click();
  121 |   //   await this.startDate.click();
  122 |   //   await this.endDate.click();
  123 |   // }
  124 |
  125 |   // async openCustomDatePicker() {
  126 |   //   await this.last36MonthsButton.click();
  127 |   //   await this.customDateButton.click();
  128 |   // }
  129 |
  130 |  // Method to select a custom date range dynamically
  131 |  async selectDateRange(startMonth, startYear, startDay, endMonth, endYear, endDay) {
  132 |   // Select start date
  133 |   await this.selectCustomDate(startMonth, startYear, startDay);
  134 |   
  135 |   // If the start and end dates are in different months or years, we navigate to the end date
  136 |   let monthsToNavigate = this.calculateMonthsDifference(startMonth, startYear, endMonth, endYear);
  137 |   for (let i = 0; i < monthsToNavigate; i++) {
  138 |     await this.nextMonthButton.click();
  139 |   }
  140 |   
  141 |   // Select end date
  142 |   await this.dateCell(endDay).click();
  143 | }
  144 |
  145 | // Helper method to calculate months between start and end
  146 | calculateMonthsDifference(startMonth, startYear, endMonth, endYear) {
  147 |   const monthsInYear = 12;
  148 |   const startMonthIndex = new Date(`${startMonth} 1, ${startYear}`).getMonth();
  149 |   const endMonthIndex = new Date(`${endMonth} 1, ${endYear}`).getMonth();
  150 |   const startYearIndex = startYear * monthsInYear;
  151 |   const endYearIndex = endYear * monthsInYear;
  152 |
  153 |   return (endYearIndex + endMonthIndex) - (startYearIndex + startMonthIndex);
  154 | }
  155 |
  156 | // Method to select a custom start date dynamically
  157 | async selectCustomDate(month, year, day) {
  158 |   // Click the 'Last 36 Months' button to open the date selection
  159 |   await this.last36MonthsButton.click();
  160 |   // Click the 'Custom' button to start the custom date selection
  161 |   await this.customDateButton.click();
  162 |
  163 |   // Adjust to the correct month and year
  164 |   await this.adjustToMonthYear(month, year);
  165 |
  166 |   // Click on the desired day of the month
> 167 |   await this.dateCell(day).click();
      |                            ^ Error: locator.click: Test timeout of 70000ms exceeded.
  168 | }
  169 |
  170 | // Method to adjust the calendar to the desired month and year
  171 | async adjustToMonthYear(targetMonth, targetYear) {
  172 |   let currentYear = new Date().getFullYear();
  173 |   let currentMonth = new Date().getMonth() + 1;
  174 |
  175 |   // If the target year is greater than the current year, go forward
  176 |   while (targetYear > currentYear || (targetYear === currentYear && targetMonth > currentMonth)) {
  177 |     await this.nextMonthButton.click();
  178 |     currentMonth += 1;
  179 |     if (currentMonth > 12) {
  180 |       currentMonth = 1;
  181 |       currentYear += 1;
  182 |     }
  183 |   }
  184 |
  185 |   // If the target year is less than the current year, go back
  186 |   while (targetYear < currentYear || (targetYear === currentYear && targetMonth < currentMonth)) {
  187 |     await this.previousMonthButton.click();
  188 |     currentMonth -= 1;
  189 |     if (currentMonth < 1) {
  190 |       currentMonth = 12;
  191 |       currentYear -= 1;
  192 |     }
  193 |   }
  194 | }
  195 | }
  196 |
  197 |
  198 |
  199 |
  200 |
  201 |
```