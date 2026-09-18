import { test, expect } from '@playwright/test';



test('Header is loaded', async ({ page }) => {
  // this goes to basUrl set in pw config
  await page.goto('/');
  
  const header = page.locator('[data-test="header"]')
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('app');
  await expect(header).toBeVisible();

});

test("Monogram link is working", async ({ page }) =>{
  await page.goto('/');

  let monoLink = page.locator('[data-test="monogramLink"]')

  await expect.soft(monoLink).toBeVisible();
  await expect.soft(monoLink).toHaveText('Monogram');
  
  await monoLink.click();
  
})

test('nav menu is working', async({ page })=> {
  await page.goto('/');
  const navBarList = page.locator('[data-test="navbar-list"]');
  const listContent = ['how it works', 'workflows', 'blog', 'support', 'shop', 'USD'];
  const firstItem = page.locator('[data-test="navbar-list"]').getByText('how it works');
  const secondItem = page.locator('[data-test="navbar-list"]').getByText('workflows');
  const thirdItem = page.locator('[data-test="navbar-list"]').getByText('blog');
  const fourthItem = page.locator('[data-test="navbar-list"]').getByText('support');
  const fithItem = page.locator('[data-test="navbar-list"]').getByText('shop');
  const sixthItem = page.locator('[data-test="navbar-list"]').getByText('USD');
  
  
  
  await expect.soft(navBarList).toBeVisible();
  await expect.soft(firstItem).toBeVisible();
  await expect.soft(secondItem).toBeVisible();
  await expect.soft(thirdItem).toBeVisible();
  await expect.soft(fourthItem).toBeVisible();
  await expect.soft(fithItem).toBeVisible();
  await expect.soft(sixthItem).toBeVisible();

})

