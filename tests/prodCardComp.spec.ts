import { test, expect } from '@playwright/test';
import  defineConfig  from '../playwright.config';
import { LocatorPage } from '../test-data/locators.page';

test.beforeEach(async ({ page }) => {
    
    await page.goto('/');
})

test.describe('', ():void => {

  test('Verify product section loads', async ({ page }) => {
    const locator = new LocatorPage(page);

    await test.step('Verify product container loads', async() => {
      await expect(locator.prodContainer).toBeVisible();
      console.log('Product container has loaded')
    })
    

    await test.step('Verify all prod cards load', async() => {
      
      await expect(locator.prodCard1).toBeVisible();
      await expect(locator.prodCard2).toBeVisible();
      await expect(locator.prodCard3).toBeVisible();
      await expect(locator.prodCard4).toBeVisible();
      console.log('All products cards have loaded')
    });

    await test.step('Verify prod card 1', async() => {
    await expect(locator.prodCard1
      .filter({
      has: page.getByRole('heading', {name: 'Product 1'})
    })).toBeVisible();
    await expect(locator.prodCard1.filter({hasText: '1.99'})).toBeVisible();
    await expect(locator.prodCard1.filter({hasText: 'Prod Card 1 description'}))
    .toBeVisible();
    await expect(locator.prodCard1.getByRole('img', {has: 'Prod Card 1 image'})).toBeVisible();
    console.log('Prod card 1 loaded');
  });

  await test.step('Verify prod card 2', async() => {
    await expect(locator.prodCard2
      .filter({
      has: page.getByRole('heading', {name: 'Product 2'})
    })).toBeVisible();
    await expect(locator.prodCard2.filter({hasText: '2.99'})).toBeVisible();
    await expect(locator.prodCard2.filter({hasText: 'Prod Card 2 description'}))
    .toBeVisible();
    await expect(locator.prodCard2.getByRole('img', {has: 'Prod Card 2 image'})).toBeVisible();
    console.log('Prod card 2 loaded');
  });

  await test.step('Verify prod card 3', async() => {
    await expect(locator.prodCard3
      .filter({
      has: page.getByRole('heading', {name: 'Product 3'})
    })).toBeVisible();
    await expect(locator.prodCard3.filter({hasText: '3.99'})).toBeVisible();
    await expect(locator.prodCard3.filter({hasText: 'Prod Card 3 description'}))
    .toBeVisible();
    await expect(locator.prodCard3.getByRole('img', {has: 'Prod Card 3 image'})).toBeVisible();
    console.log('Prod card 3 loaded');
  });

  await test.step('Verify prod card 4', async() => {
    await expect(locator.prodCard4
      .filter({
      has: page.getByRole('heading', {name: 'Product 4'})
    })).toBeVisible();
    await expect(locator.prodCard4.filter({hasText: '4.99'})).toBeVisible();
    await expect(locator.prodCard4.filter({hasText: 'Prod Card 4 description'}))
    .toBeVisible();
    await expect(locator.prodCard4.getByRole('img', {has: 'Prod Card 4 image'})).toBeVisible();
    console.log('Prod card 4 loaded');
  });
      
  });
  
});




