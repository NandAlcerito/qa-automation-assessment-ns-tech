import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private checkoutButton = '#checkout';
  private firstNameInput = '#first-name';
  private lastNameInput = '#last-name';
  private postalCodeInput = '#postal-code';
  private continueButton = '#continue';
  private finishButton = '#finish';
  private successMessage = '.complete-header';

  async startCheckout() {
    await this.page.click(this.checkoutButton);
  }

  async fillInformation(
    firstName: string = 'Fernanda',
    lastName: string = 'QA',
    postalCode: string = '12345'
  ) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueButton);
  }

  async finishPurchase() {
    await this.page.click(this.finishButton);
  }

  async assertSuccess() {
    await expect(this.page.locator(this.successMessage))
      .toHaveText('Thank you for your order!');
  }
}