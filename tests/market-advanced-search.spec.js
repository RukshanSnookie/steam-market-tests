const {test, expect} = require('@playwright/test');
const {STEAM_MAIN, STEAM_MARKET} = require('../testdata/urls');
const {Marketpage} = require('../pages/MarketPage'); 

test('Advanced Search on Steam Community Market', async ({page}) => {
    await page.goto(STEAM_MAIN);
    await expect(page).toHaveTitle(/Steam/);

    await page.goto(STEAM_MARKET);
    await expect(page).toHaveTitle(/Steam Community Market/);

    const marketPage = new Marketpage(page);
    await marketPage.openAdvancedSearch();
    await expect (marketPage.advancedSearchWindow).toBeVisible();

    await marketPage.selectGame('Dota 2');
    await marketPage.selectHero('Phantom Assassin');
    await marketPage.selectRarity('Rare');
    await marketPage.clickSearch();
    await marketPage.validateShowingTags(['Dota 2', 'Phantom Assassin', 'Rare']);
    await marketPage.clickFirstResult();
    await expect(marketPage.gameName).toHaveText('Dota 2');
    await expect(marketPage.itemType).toHaveText('Rare helm');
    await expect(marketPage.usedByDescriptor).toHaveText('Used By: Phantom Assassin');
});