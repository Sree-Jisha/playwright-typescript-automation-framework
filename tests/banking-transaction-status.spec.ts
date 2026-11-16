import { test } from '@playwright/test';
import { expectTransactionStatus } from '../utils/banking-assertions';

test('Verify successful transaction', async ({ page }) => {

    await page.setContent(`
        <p role="status">SUCCESS</p>
    `);

    const statusLocator = page.getByRole('status');

    await expectTransactionStatus(statusLocator, 'SUCCESS');

});

test('Verify failed transaction', async ({ page }) => {

    await page.setContent(`
        <p role="status">FAILED</p>
    `);

    const statusLocator = page.getByRole('status');

    await expectTransactionStatus(statusLocator, 'FAILED');

});