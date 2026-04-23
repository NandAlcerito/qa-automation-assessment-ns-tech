import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // Selectors centralizados
  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';
  private errorMessage = '[data-test="error"]';

  async goTo() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async assertLoginSuccess() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.page.locator('.title')).toHaveText('Products');

    const items = await this.page.locator('.inventory_item').count();
    expect(items).toBeGreaterThan(0);
  }

  async assertLoginError() {
    const error = this.page.locator(this.errorMessage);
    await expect(error).toBeVisible();
    await expect(error).toContainText('Username and password do not match');
  }
}