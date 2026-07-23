import {test, expect} from '@playwright/test';

test('verify pageURL', async ({page}) => {
    await page.goto('https://www.testo.com/it-IT');
    
    let url: string = await page.url();
        console.log('URL:', url);
    await expect(page).toHaveURL(/testo/);
})