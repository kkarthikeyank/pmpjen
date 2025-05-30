# Test info

- Name: Login with valid credentials
- Location: /home/karthi/pmp/src/tests/claimsearch.spec.js:24:1

# Error details

```
Error: locator.waitFor: Test timeout of 70000ms exceeded.
Call log:
  - waiting for locator('//div[@class=\'flex-fill\']') to be visible

    at ClaimsPage.filterByCustomDateRangeAndPrintClaims (/home/karthi/pmp/src/pages/ClaimsPage.js:316:33)
    at /home/karthi/pmp/src/tests/claimsearch.spec.js:134:5
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
  - heading "Claims for" [level=1]
  - button "Julia Donaldson"
- status
```

# Test source

```ts
  216 |       return;
  217 |     }
  218 |
  219 |     console.log(`Filtering by: ${label}`);
  220 |     await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  221 |
  222 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
  223 |     await this.dateFilterButton.click();
  224 |
  225 |     const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  226 |     await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  227 |     await radioLocator.check();
  228 |
  229 |     await this.doneButton.click();
  230 |
  231 |     await this.page.waitForTimeout(3000); // Replace with smarter wait if needed
  232 |
  233 |     const claims = await this.claimNumberLocator.all();
  234 |     if (claims.length === 0) {
  235 |       console.log("No claims found");
  236 |     } else {
  237 |       console.log(`Claims found for ${label}:`);
  238 |       for (const claim of claims) {
  239 |         const text = await claim.textContent();
  240 |         console.log(`Claim Number: ${text?.trim()}`);
  241 |       }
  242 |     }
  243 |
  244 |
  245 |   }  
  246 |
  247 |   
  248 |
  249 |   // senario  search by claim number
  250 |
  251 |   async searchclaimnumber(label, claimNumber) {
  252 |
  253 |     const dateFilters = {
  254 |       '3 Months': 'LAST_3_MONTHSradio',
  255 |       '6 Months': 'LAST_6_MONTHSradio',
  256 |       '60 Months': 'LAST_60_MONTHSradio',
  257 |     };
  258 |
  259 |     const cleanLabel = label.trim();
  260 |     const filterId = dateFilters[cleanLabel];
  261 |
  262 |     if (!filterId) {
  263 |       console.log(`❌ Invalid filter label: ${label}`);
  264 |       return;
  265 |     }
  266 |
  267 |     console.log(`→ Filtering by: ${cleanLabel}`);
  268 |
  269 |     await this.page.locator('text=Loading...').waitFor({ state: 'detached', timeout: 10000 });
  270 |
  271 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 10000 });
  272 |     await this.dateFilterButton.click();
  273 |
  274 |     const radioLocator = this.page.locator(`//input[@id='${filterId}']`);
  275 |     await radioLocator.waitFor({ state: 'visible', timeout: 5000 });
  276 |     await radioLocator.check();
  277 |
  278 |     await this.doneButton.click();
  279 |
  280 |     // Search by claim number
  281 |     console.log(`→ Searching for Claim Number: ${claimNumber}`);
  282 |     await this.claimNumberInput.waitFor({ state: 'visible', timeout: 5000 });
  283 |     await this.claimNumberInput.click();
  284 |     await this.claimNumberInput.fill('');
  285 |     await this.claimNumberInput.fill(claimNumber);
  286 |     await this.applyButton.click();
  287 |
  288 |     await this.page.waitForTimeout(3000);
  289 |
  290 |     const claims = await this.claimNumberLocator.all();
  291 |     if (claims.length === 0) {
  292 |       console.log(`❌ No claims found for ${cleanLabel}: ${claimNumber}`);
  293 |     } else {
  294 |       console.log(`✅ Claims found for ${cleanLabel}: ${claimNumber}`);
  295 |       for (const claim of claims) {
  296 |         const text = await claim.textContent();
  297 |         console.log(`→ Claim Number: ${text?.trim()}`);
  298 |       }
  299 |     }
  300 |
  301 |     await this.clearButton.click();
  302 |
  303 |   }
  304 |
  305 |   // scenario  Filter by custom date range and print claims
  306 |
  307 |   async filterByCustomDateRangeAndPrintClaims(fromDate, toDate) {
  308 |     console.log(`→ Applying custom date range: ${fromDate} to ${toDate}`);
  309 |
  310 |     await this.dateFilterButton.waitFor({ state: 'visible', timeout: 20000 });
  311 |     await this.dateFilterButton.click();
  312 |     await this.fromDateInput.fill(fromDate);
  313 |     await this.toDateInput.fill(toDate);
  314 |     await this.doneButton.click();
  315 |
> 316 |     await this.monthsdateverify.waitFor({ state: 'visible', timeout: 50000 });
      |                                 ^ Error: locator.waitFor: Test timeout of 70000ms exceeded.
  317 |
  318 |     const dateText = await this.monthsdateverify.textContent();
  319 |     if (dateText?.trim()) {
  320 |       console.log(`✅ Date filter applied: ${dateText.trim()}`);
  321 |     }
  322 |
  323 |     const claims = await this.claimNumberLocator.all();
  324 |     if (claims.length === 0) {
  325 |       console.log(`❌ No claims found for range ${fromDate} to ${toDate}`);
  326 |     } else {
  327 |       console.log(`✅ Claims found for range ${fromDate} to ${toDate}:`);
  328 |       for (let i = 0; i < claims.length; i++) {
  329 |         const claim = claims[i];
  330 |         // const text = await claim.textContent();
  331 |         // console.log(`→ Claim Number: ${text?.trim()}`);
  332 |
  333 |         const count = await this.page.locator('//p[@data-id="claimsCardClaimNumber"]').count();
  334 |         console.log(`→ Number of claim elements: ${count}`);
  335 |
  336 |         await this.openClaimAndReturn(i + 1);
  337 |       }
  338 |     }
  339 |   }
  340 |
  341 |  async openClaimAndReturn(claimIndex) {
  342 |   if (claimIndex <= 0) {
  343 |     console.log(`❌ No claims available to open.`);
  344 |     return;
  345 |   }
  346 |
  347 |   console.log(`→ Opening claim ${claimIndex}...`);
  348 |
  349 |   const claimDetailButton = this.viewDetailsButton.nth(claimIndex - 1);
  350 |
  351 |   await claimDetailButton.scrollIntoViewIfNeeded();
  352 |   await claimDetailButton.waitFor({ state: 'visible', timeout: 10000 });
  353 |   await claimDetailButton.click();
  354 |
  355 |   // Wait for navigation or content update
  356 |   try {
  357 |     await this.page.waitForSelector('text=Claim Details', { timeout: 30000 });
  358 |     console.log(`✅ Claim ${claimIndex} details page opened.`);
  359 |   } catch (e) {
  360 |     console.error(`❌ Timed out waiting for Claim ${claimIndex} details to load.`);
  361 |     return;
  362 |   }
  363 |
  364 |   await this.returnButton.waitFor({ state: 'visible', timeout: 30000 });
  365 |   await this.returnButton.click();
  366 |   console.log(`↩️ Returned to previous page after Claim ${claimIndex}.`);
  367 |
  368 |   // Optional: Ensure return completes before clicking clear
  369 |   await this.page.waitForLoadState('networkidle');
  370 |   await this.clearButton.waitFor({ state: 'visible', timeout: 10000 });
  371 |   await this.clearButton.click();
  372 | }
  373 |
  374 |
  375 |   // async waitForContentToLoad() { work
  376 |   //   await this.page.waitForSelector('#openSummaryPrintTopBtn');
  377 |   // }
  378 |
  379 |   // // Optionally click the button (only if needed for layout/view changes, not real print)
  380 |   // async triggerPrintViewIfNeeded() {
  381 |   //   await this.openSummaryPrintTopBtn.click();
  382 |   // }
  383 |
  384 |   // async downloadPDF(outputPath = 'page-output.pdf') {
  385 |   //   await this.page.pdf({
  386 |   //     path: outputPath,
  387 |   //     format: 'A4',
  388 |   //     printBackground: true
  389 |   //   });
  390 |   // }
  391 |
  392 |
  393 |
  394 |
  395 |
  396 | }
```