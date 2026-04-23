import { test, expect } from '../fixtures';
import { InventoryPage } from '../../pages/InventoryPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test.describe('Purchase Flow', () => {

  test('CT06 - Compra completa @smoke', async ({ loggedPage }) => {
    const inventoryPage = new InventoryPage(loggedPage);
    const checkoutPage = new CheckoutPage(loggedPage);

    await inventoryPage.addFirstProductToCart();
    await inventoryPage.goToCart();

    await checkoutPage.startCheckout();
    await checkoutPage.fillInformation('Fernanda', 'QA', '12345');

    await loggedPage.waitForURL(/checkout-step-two/);

    await checkoutPage.finishPurchase();
    await checkoutPage.assertSuccess();
  });

});