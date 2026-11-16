import { expect, type Locator } from '@playwright/test';

export async function expectTransactionStatus(
    statusLocator: Locator,
    expectedStatus: 'SUCCESS' | 'FAILED' | 'PENDING'
): Promise<void> {

    await expect(statusLocator).toHaveText(expectedStatus);

}