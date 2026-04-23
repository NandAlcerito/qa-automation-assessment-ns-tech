import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type Fixtures = {
  loggedPage: any;
};

export const test = base.extend<Fixtures>({
  loggedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goTo();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.assertLoginSuccess();

    await use(page);
  },
});

export { expect } from '@playwright/test';