const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/MainPage'); 
const { Marketpage } = require('../pages/MarketPage');
const { STEAM_MAIN, STEAM_MARKET } = require('../testdata/urls');
const { isSortedAscending, isSortedDescending } = require('../utils/sortUtil');

test('Steam Market - price sorting', async ({ page }) => {

    await page.goto(STEAM_MAIN);
    await expect(page).toHaveTitle(/Steam/);
    await page.goto(STEAM_MARKET);
    await expect(page).toHaveTitle(/Steam Community Market/);
    
    const marketPage = new Marketpage(page);
    await marketPage.openAdvancedSearch();
    await expect (marketPage.advancedSearchWindow).toBeVisible();
    await marketPage.selectGame('Dota 2');
    await marketPage.selectHero('Anti-Mage');
    await marketPage.selectRarity('Uncommon');
    await marketPage.clickSearch();
    await marketPage.validateShowingTags(['Dota 2', 'Anti-Mage', 'Uncommon']);

    


    await marketPage.sortByPrice();
    const pricesAsc = await marketPage.getAllListingPrices();
    expect(isSortedAscending(pricesAsc)).toBeTruthy();

    await marketPage.sortByPrice();
    const pricesDesc = await marketPage.getAllListingPrices();
    expect(isSortedDescending(pricesDesc)).toBeTruthy();
});