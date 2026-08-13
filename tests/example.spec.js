import { test, expect } from '@playwright/test';

test.describe('My First Test Suite', () => {
  test.use({ storageState: 'state.json' });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });
  });

  test('should open https://www.epam.com/ page', async ({ page }) => {
    await expect(page).toHaveTitle(/EPAM/, { timeout: 30000 });
  });

  test('should hamburger menu', async ({ page }) => {
    await page.locator('button.hamburger-menu__button').click();
    await expect(page.locator('div.hamburger-menu__dropdown-section')).toBeVisible();
  });
});
