import { setupBankingPage } from '../../utils/banking-page';
import {
  Given,
  When,
  Then,
  Before,
  After,
  setWorldConstructor,
  World
} from '@cucumber/cucumber';

import {
  chromium,
  expect,
  type Browser,
  type Page
} from '@playwright/test';

class BankingWorld extends World {
  browser!: Browser;
  page!: Page;
}

setWorldConstructor(BankingWorld);

Before(async function (this: BankingWorld) {
  this.browser = await chromium.launch({ headless: true });
  this.page = await this.browser.newPage();
});

After(async function (this: BankingWorld) {
  await this.browser?.close();
});


Given('the customer is on the banking login page',
  async function (this: BankingWorld) {

    await setupBankingPage(this.page);

  }
);
When('the customer enters valid credentials',
  async function (this: BankingWorld) {

    await this.page.locator('#username').fill('demo_customer');

    await this.page.locator('#password').fill('DemoPass123');

    await this.page.getByRole('button', { name: 'Signin' }).click();

  }
);

Then('the customer should see the welcome message',
  async function (this: BankingWorld) {

    await expect(this.page.getByRole('status'))
      .toHaveText('Welcome, demo customer');

  }
);
