import { test, expect } from '@playwright/test';

// Configure baseURL for this file.
//test.use({ baseURL: 'http://localhost:3000' });

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/app/);
});

