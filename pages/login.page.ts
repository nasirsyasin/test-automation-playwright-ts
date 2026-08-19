import { type Locator, type Page } from '@playwright/test';

export type LoginCredentials = {
  username: string;
  password: string;
};

/** Page object for the Test Login Page. */
export class LoginPage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly successHeading: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.successHeading = page.getByRole('heading', { name: 'Logged In Successfully' });
    this.logoutLink = page.getByRole('link', { name: 'Log out' });
  }

  async login({ username, password }: LoginCredentials): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async logout(): Promise<void> {
    await this.logoutLink.click();
  }
}
