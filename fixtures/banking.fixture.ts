
import { test as base, expect, type Page } from '@playwright/test';
import { setupBankingPage } from '../utils/banking-page';

type BankingFixtures = {
  bankingPage: Page;
};

export const test = base.extend<BankingFixtures>({
  bankingPage: async ({ page }, use) => {

    await setupBankingPage(page);

    await use(page);
  },
});

export { expect };
