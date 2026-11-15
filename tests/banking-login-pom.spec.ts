
import { test, expect } from '../fixtures/banking.fixture';
import { LoginPage } from '../pages/LoginPage';

test('Verify successful banking login using POM and fixture', async ({ bankingPage }) => {

  const loginPage = new LoginPage(bankingPage);

  await loginPage.login('demo_customer', 'DemoPass123');

  await expect(loginPage.statusMessage)
    .toHaveText('Welcome, demo customer');

});
