const { expect } = require("allure-playwright");
const { expect } = require('@playwright/test');

class Marketpage {
    constructor(page) {
        this.page = page;
        this.advancedSearchBtn = page.getByRole('link', {name: /Advanced Search/i});
        this.allGamesDropdown = this.page.locator('#market_advanced_search_appselect');
        this.heroDropdown = this.page.locator('#market_advanced_search_hero');
        this.rarityDropdown = this.page.locator('#market_advanced_search_rarity');
        this.searchBtn = page.getByRole('button', {name: /Search/i});
        this.showingResults = page.getByRole('heading', {name: /Showing results for/i});
        this.firsrtResult = page.locator('.market_listing_row.market_recent_listing_row').first();
    }

    async openAdvancedSearch() {
        await this.advancedSearchBtn.click();
    }

    async selectGame(gameName) {
        await this.allGamesDropdown.selectOption({label: gameName});
    }

    async selectHero(heroName) {
        await this.heroDropdown.selectOption({label: heroName});
    }

    async selectRarity(rarityName) {
        await this.rarityDropdown.selectOption({label: rarityName});
    }

    async clickSearch() {
        await this.searchBtn.click();
    }

    async validateShowingTags(tags = []){
        for (const tag of tags) {
            await expect(this.showingResults).toContainText(tag);
        }
    }

    async clickFirstResult() {
        await this.firsrtResult.click();
    }   
}

module.exports = {Marketpage};