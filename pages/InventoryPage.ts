import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addFirstProductToCart() {
    await this.page.locator('.inventory_item').first().locator('button').click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  async assertProductAdded() {
    const cartBadge = this.page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');
  }
}