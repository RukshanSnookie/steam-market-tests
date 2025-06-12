const {test, expect} = require('@playwright/test');
//const {Marketpage} = require('../pages/MarketPage');   

test('Advanced Search on Steam Community Market', async ({page}) => {
    await page.goto('https://store.steampowered.com/');
    await expect(page).toHaveTitle(/Steam/);
});