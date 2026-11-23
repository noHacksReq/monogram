import { test, expect } from '@playwright/test';
import  defineConfig  from '../playwright.config';
import { LocatorPage } from '../test-data/locators.page';

test.beforeEach(async ({ page }) => {
    
    await page.goto('/');
})

test.describe('', ():void => {

  test('Verify product section loads', async ({ page }) => {
    const locator = new LocatorPage(page);
    await page.pause();

    await test.step('Verify product container loads', async() => {
      await expect(locator.prodContainer).toBeVisible();
      console.log('Product container has loaded')
    })
    

    await test.step('Verify all prod cards load', async() => {})
      await page.pause();
      await expect(locator.prodCard1).toBeVisible();
      await expect(locator.prodCard2).toBeVisible();
      await expect(locator.prodCard3).toBeVisible();
      await expect(locator.prodCard4).toBeVisible();
      console.log('All products cards have loaded')
  });
});




