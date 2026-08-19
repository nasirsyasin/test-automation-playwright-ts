import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';

test('a user can log in and log out', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await homePage.goto();
  await homePage.dismissPopupIfPresent();
  await homePage.openLoginPage();

  await loginPage.login({ username: 'student', password: 'Password123' });
  await expect(loginPage.successHeading).toBeVisible();

  await loginPage.logout();
  await expect(loginPage.usernameInput).toBeVisible();
});
