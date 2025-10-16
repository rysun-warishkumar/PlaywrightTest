// @ts-check

import { test, expect } from '@playwright/test';

test('Login to GuruTattva', async ({ page, browserName }) => {
  // Open Chrome browser only
  test.skip(browserName !== 'chromium', 'This test runs only on Chrome');

  await page.goto('https://gurutattva.rysun.in/');

  // Enter username
  // await page.fill('input[name="email"], input[type="text"]', 'maniratnam.mudaliar@rysun.com');

  // Enter password
  await page.fill('input[name="password"]', 'Rysun@5044');

  // Click Sign In button
  await page.click('button[type="submit"], button:has-text("Sign in")');

  // Optionally, add an assertion to verify successful login
  await page.waitForTimeout(5000);
  await expect(page).toHaveURL(/dashboard/);
});
