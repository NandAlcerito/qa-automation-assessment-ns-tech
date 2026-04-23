import { test, expect } from '@playwright/test';

test.describe('Login Flow', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('CT01 - Login com credenciais válidas', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Validações robustas
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');

    const items = await page.locator('.inventory_item').count();
    expect(items).toBeGreaterThan(0);
  });

  test('CT02 - Login com credenciais inválidas', async ({ page }) => {
    await page.fill('#user-name', 'invalid_user');
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');

    const error = page.locator('[data-test="error"]');

    await expect(error).toBeVisible();
    await expect(error).toContainText('Username and password do not match');
  });

});