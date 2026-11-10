import { test, expect } from '@playwright/test';
import  defineConfig  from '../playwright.config';
import { LocatorPage } from '../test-data/locators.page';

const config = defineConfig;

test.beforeEach(async ({ page }) => {
    
    await page.goto('/');
})


test.describe('Footer Tests', ():void => {
   
    test('Verify Footer Loads', async( { page }) => {
        const locator = new LocatorPage(page);
        await test.step('verify footer loads', async () => {
           
            await  expect(locator.mainFooter).toBeVisible();
            console.log('main footer has loaded')
        })

        await test.step('verify address field', async () => {
            
        //verify address field
        await expect(locator.addressCont).toBeVisible();
        await expect(locator.addressTitle).toBeVisible();
        await expect(locator.addressField).toContainText(
            '305 King St. W.',
            'Suite 502',
            'Kitchener, ON',
            'Canada'
            )
            console.log('Address field has loaded');
        });

        await test.step('Verify quick links', async() => {
            await page.pause();
            await expect(locator.quickLinks).toBeVisible();
            await expect(locator.homeLink).toBeVisible();
            await expect(locator.howItWorksLink).toBeVisible();
            await expect(locator.shopLink).toBeVisible();
            await expect(locator.downloadLink).toBeVisible();
            console.log('Quick Links have loaded');
        })
        
    });


});