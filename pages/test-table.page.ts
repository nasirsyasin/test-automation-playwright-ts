import { type Locator, type Page } from '@playwright/test';

export type CourseLanguage = 'Java' | 'Python';

/** Page object for the Automation Courses table and its language filters. */
export class TestTablePage {
  readonly heading: Locator;
  readonly visibleRows: Locator;
  readonly visibleLanguageCells: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Automation Courses' });
    this.visibleRows = page.locator('#courses_table tbody tr:visible');
    this.visibleLanguageCells = this.visibleRows.locator('td[data-col="language"]');
  }

  languageFilter(language: CourseLanguage): Locator {
    return this.page.getByRole('radio', { name: language });
  }

  courseCell(courseName: string): Locator {
    return this.page.locator('td[data-col="course"]', { hasText: courseName });
  }

  async filterByLanguage(language: CourseLanguage): Promise<void> {
    await this.languageFilter(language).check();
  }
}
