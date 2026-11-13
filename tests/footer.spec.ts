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
            await expect(locator.quickLinks).toBeVisible();
            await expect(locator.homeLink).toBeVisible();
            await expect(locator.howItWorksLink).toBeVisible();
            await expect(locator.shopLink).toBeVisible();
            await expect(locator.downloadLink).toBeVisible();
            console.log('Quick Links have loaded');
        });

        await test.step('verify help list', async() => {
            await expect(locator.helpList).toBeVisible();
            await expect(locator.FAQ).toBeVisible();
            await expect(locator.supportCent).toBeVisible();
            await expect(locator.shipNSales).toBeVisible();
            console.log('Help list has loaded')
        });

        await test.step('verify info list', async() => {
            
            await expect(locator.infoContainer).toBeVisible();
            await expect(locator.aboutUs).toBeVisible();
            await expect(locator.workWus).toBeVisible();
            await expect(locator.privacy).toBeVisible();
            await expect(locator.termsOfUse).toBeVisible();
            await expect(locator.termsOfSale).toBeVisible();
            await expect(locator.pressKit).toBeVisible();
            console.log('Info list has loaded')
        })
        
    });


});