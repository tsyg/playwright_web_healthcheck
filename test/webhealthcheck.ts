import { defineConfig, test, expect, request } from '@playwright/test';


// @ts-check
test(' There are links on the site', async ({ page }) => {
  await page.goto('https://www.w3.org/');

  await page.content();

  // Expecting links
  const html : string = await page.content();  // Get entire page

  console.log(".. TSYG-LINKS_Testing...");

  const links = page.locator('a');
  const linksCount = await links.count();
  console.log("Number of possible links: ");
  console.log(linksCount);
  console.log("--------: ");
  for (let i=0; i< linksCount; i++){
    const link =await links.nth(i).getAttribute("href");
    if (link && link.startsWith("https:")) {
        console.log(link);
    }
    
  }
});

