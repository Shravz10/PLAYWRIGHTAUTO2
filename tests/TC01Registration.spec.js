// Registration Test Cases
import { test, expect } from '@playwright/test';

test('User Register Account', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  

//click on my account
await page.click('text= My Account');
await page.click('text= Register');

//Fill the Registration Form
await page.fill('#input-firstname', 'Test');
await page.fill('#input-lastname', 'User');
await page.fill('#input-email','Testuser10@yopmail.com');
await page.fill('#input-telephone', '9878799877');
await page,fill('#input-password', 'abc@123');
await page.fill('#input-confirm', 'abc@123');

//click on the Privacy policy checkbox
await page.check('input[name="agree"]');
await page.click('text= Continue');
//verify the success message
await expect(page.locator('h1')).toHaveText('Your Account Has Been Created!');
});