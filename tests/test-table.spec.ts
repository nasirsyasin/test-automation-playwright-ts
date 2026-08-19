import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { TestTablePage } from '../pages/test-table.page';

test('filters automation courses by language', async ({ page }) => {
  const homePage = new HomePage(page);
  const testTablePage = new TestTablePage(page);

  await homePage.goto();
  await homePage.dismissPopupIfPresent();
  await homePage.openTablePage();

  await expect(testTablePage.heading).toBeVisible();

  await testTablePage.filterByLanguage('Java');
  await expect(testTablePage.visibleRows).toHaveCount(6);
  await expect(testTablePage.visibleLanguageCells).toHaveText([
    'Java',
    'Java',
    'Java',
    'Java',
    'Java',
    'Java',
  ]);
  await expect(testTablePage.courseCell('Advanced Selenium')).toBeVisible();
  await expect(testTablePage.courseCell('Selenium with Python')).toBeHidden();

  await testTablePage.filterByLanguage('Python');
  await expect(testTablePage.visibleRows).toHaveCount(2);
  await expect(testTablePage.visibleLanguageCells).toHaveText(['Python', 'Python']);
  await expect(testTablePage.courseCell('Selenium with Python')).toBeVisible();
  await expect(testTablePage.courseCell('Advanced Selenium')).toBeHidden();
});
