
import type { Page, Locator } from '@playwright/test';
//Creates a reusable page class
export class LoginPage {

  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly statusMessage: Locator;

//receivesbrowserpage
  constructor(page: Page) {

    this.page = page;

    this.usernameInput = page.getByLabel('Username');

    this.passwordInput = page.getByLabel('Password');

    this.loginButton = page.getByRole('button', {
      name: 'Signin'
    });

    this.statusMessage = page.getByRole('status');

  }

  async login(username: string, password: string) {

    await this.usernameInput.fill(username);

    await this.passwordInput.fill(password);

    await this.loginButton.click();

  }
}
