import { test, expect } from '@playwright/test';
import { defineConfig } from '../playwright.config';

const config = defineConfig;


test.beforeEach(async ({ page }) => {
    page.goto('/');
    await page.pause();
})


test.describe('Footer Tests', ():void => {
    test('first', async( { page }) => {
        try{
            const footer = page.locator('[data-test="mainFooter"]');
            //await page.pause();
            await expect(footer).toBeVisible();
            console.log('footer succesfully loaded')
        }catch(error){
            log.error('footer has not loaded')
        }
        
    })

});