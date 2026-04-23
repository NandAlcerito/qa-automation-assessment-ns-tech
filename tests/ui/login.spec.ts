import { test, expect } from '@playwright/test';

test.describe('Login Flow @smoke', () => {

  test('CT01 - Login válido', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory/);
  });

  test('CT02 - Login inválido', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'wrong_user');
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

});

test.describe('Login Edge Cases @regression', () => {

  test('CT03 - Login com campos vazios', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.click('#login-button');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
test('CT04 - Logout com sucesso @regression', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
test('CT05 - Checkout sem itens no carrinho @regression', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('.shopping_cart_link');

  await expect(page.locator('.cart_item')).toHaveCount(0);
});
});