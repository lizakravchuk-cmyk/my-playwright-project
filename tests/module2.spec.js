import { test, expect } from '@playwright/test';

test.describe('Scenario 1: Successful user login', () => {

  test('should login with valid credentials', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
    await page.locator('[data-test="password"]').fill('welcome01');
    await page.locator('[data-test="login-submit"]').click();
    await expect(page.locator('[data-test="nav-menu"]')).toBeVisible({ timeout: 10000 });
  });

});

test.describe('Scenario 2: Search for a specific product', () => {

  test('should find product by search', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com');
    await page.locator('[data-test="search-query"]').fill('Hammer');
    await page.locator('[data-test="search-submit"]').click();
    await expect(page.locator('[data-test="product-name"]').first()).toContainText('Hammer', { timeout: 10000 });
  });

});

test.describe('Scenario 3: Add a product to the basket', () => {

  test('should add product to cart', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com');
    await page.locator('[data-test="product-name"]').first().click();
    await page.locator('[data-test="add-to-cart"]').click();
    await expect(page.locator('[data-test="cart-quantity"]')).toBeVisible({ timeout: 10000 });
  });

});

test.describe('Scenario 4: Filter products by category', () => {

  test('should filter products by category', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com');
    await page.getByLabel('Hand Tools').click();
    await expect(page.locator('.card').first()).toBeVisible({ timeout: 10000 });
  });

});