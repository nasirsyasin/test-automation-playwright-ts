import { type Locator, type Page } from '@playwright/test';

/** Page object for the Practice Test Automation home page and its navigation. */
export class HomePage {
  readonly closePopupButton: Locator;
  readonly practiceLink: Locator;
  readonly testLoginPageLink: Locator;
  readonly testTablePageLink: Locator;

  constructor(private readonly page: Page) {
    this.closePopupButton = page.getByRole('button', { name: 'Close' });
    this.practiceLink = page.getByRole('link', { name: 'Practice', exact: true });
    this.testLoginPageLink = page.getByRole('link', { name: 'Test Login Page' });
    this.testTablePageLink = page.getByRole('link', { name: 'Test Table' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async dismissPopupIfPresent(): Promise<void> {
    if (await this.closePopupButton.isVisible()) {
      await this.closePopupButton.click();
    }
  }

  async openLoginPage(): Promise<void> {
    await this.practiceLink.click();
    await this.testLoginPageLink.click();
  }

  async openTablePage(): Promise<void> {
    await this.practiceLink.click();
    await this.testTablePageLink.click();
  }
}
