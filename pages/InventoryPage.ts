import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}
async addMultipleProducts(quantity: number) {
  const buttons = this.page.locator('.inventory_item button');

  for (let i = 0; i < quantity; i++) {
    await buttons.nth(i).click();
  }
}

async assertCartCount(count: string) {
  await expect(this.page.locator('.shopping_cart_badge')).toHaveText(count);
}
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

