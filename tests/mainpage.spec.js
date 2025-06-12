const {test, expect} = require('@playwright/test');
const {MainPage} = require('../pages/MainPage');

test('can open steam homepage', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await expect(page).toHaveTitle(/Steam/);
    await mainPage.goToCommunityMarket();
    await expect(page).toHaveTitle('Steam Community :: Steam Community Market');
}  
);
