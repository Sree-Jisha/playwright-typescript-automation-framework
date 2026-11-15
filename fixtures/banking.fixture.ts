
import { test as base, expect, type Page } from '@playwright/test';

type BankingFixtures = {
  bankingPage: Page;
};
// Reusable fictional banking page
export const test = base.extend<BankingFixtures>({

  bankingPage: async ({ page }, use) => {

    await page.setContent(`
      <html>
        <head>
          <title>ABC Digital Bank</title>
        </head>
        <body>
          <h1>ABC Digital Bank</h1>

          <form id="login-form">
            <label for="username">Username</label>
            <input id="username" />

            <label for="password">Password</label>
            <input id="password" type="password" />

            <button type="submit">Signin</button>
          </form>

          <p id="message" role="status"></p>

          <script>
            document.querySelector('#login-form')
              .addEventListener('submit', (event) => {
                event.preventDefault();

                const username =
                  document.querySelector('#username').value;

                const password =
                  document.querySelector('#password').value;

                const message =
                  document.querySelector('#message');

                if (username === 'demo_customer' &&
                    password === 'DemoPass123') {
                  message.textContent = 'Welcome, demo customer';
                } else {
                  message.textContent =
                    'Invalid username or password';
                }
              });
          </script>
        </body>
      </html>
    `);

    await use(page);
  },

});

export { expect };
