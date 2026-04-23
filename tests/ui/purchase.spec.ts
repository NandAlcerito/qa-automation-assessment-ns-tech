import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test.describe('Purchase Flow', () => {

  test('CT03 - Compra completa com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    // 🔐 Login
    await loginPage.goTo();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.assertLoginSuccess();

    // 🛒 Adicionar produto ao carrinho
    await inventoryPage.addFirstProductToCart();
    await inventoryPage.assertProductAdded();
    await inventoryPage.goToCart();

    // 🧾 Checkout
    await checkoutPage.startCheckout();
    await checkoutPage.fillInformation('Fernanda', 'QA', '12345');

    // (opcional mas senior 💡) validar que estamos na etapa de overview
    await page.waitForURL(/checkout-step-two/);

    await checkoutPage.finishPurchase();

    // ✅ Validação final
    await checkoutPage.assertSuccess();
  });

});