import { test, expect } from '@playwright/test';
import  defineConfig  from '../playwright.config';
import { LocatorPage } from '../test-data/locators.page';

const config = defineConfig;
//const locators = FOOTER_CONFIG;

test.beforeEach(async ({ page }) => {
    
    await page.goto('/');
})


test.describe('Footer Tests', ():void => {
   
    test('Verify Footer Loads', async( { page }) => {
        const locator = new LocatorPage(page);
        
        await expect(locator.mainFooter).toBeVisible();
        
        
        
    })

});