
import { test, expect } from '@playwright/test';

test('Verify negativelogin', async ({ page }) => {

  // Create our fictional banking login page
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
                message.textContent = 'Invalid username or password';
              }                                     
            });       
        </script>
      </body>
    </html>
  `);
 
  // Enter username and password
  await page.getByLabel('Username').fill('demo_customer')
  await page.getByLabel('Password').fill('wrong')
  await page.getByRole('button',{name:'Signin'}).click()
  await expect( page.locator("#message")).toHaveText('Invalid username or password');                                                                           
                                                                                                                                                
});        
                                                                                                                                                                                                                                                                                                                                                                      