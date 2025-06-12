const {test, expect} = require('@playwright/test');

test('can open steam homepage', async ({page}) => {
    await page.goto('https://store.steampowered.com/');
    await expect(page).toHaveTitle(/Steam/);
})