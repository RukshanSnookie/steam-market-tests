const { expect } = require('@playwright/test');

class Marketpage {
    constructor(page) {
        this.page = page;
        this.advancedSearchBtn = this.page.locator('#market_search_advanced_show');
        this.allGamesDropdown = this.page.locator('#market_advancedsearch_appselect .market_advancedsearch_appname');
        this.heroDropdown = this.page.locator('select[name="category_570_Hero[]"]');
        this.rarityDropdown = this.page.locator('input#tag_570_Rarity_Rarity_Rare');
        this.searchBtn = page.locator('.btn_green_white_innerfade', { hasText: 'Search' });
        this.showingResults = page.locator('a.market_searchedForTerm');
        this.firsrtResult = page.locator('.market_listing_row.market_recent_listing_row').first();
        this.advancedSearchWindow = page.locator('.title_text', { hasText: 'Search Community Market'});
        this.gameName = page.locator('#largeiteminfo_game_name');
        this.itemType = page.locator('#largeiteminfo_item_type');
        this.usedByDescriptor = page.locator('#largeiteminfo_item_descriptors .descriptor').first();

    }

    async openAdvancedSearch() {
        await this.advancedSearchBtn.click();
    }

    async selectGame(gameName) {
        await this.allGamesDropdown.click();
        await this.page.locator('.popup_menu .popup_item', { hasText: gameName }).click();    
    }

    async selectHero(heroName) {
        await this.heroDropdown.click();
        await this.heroDropdown.selectOption({label: heroName});
    }

    async selectRarity(rarityName) {
        const rareRarityCheckbox = this.page.locator('input#tag_570_Rarity_Rarity_Rare');
        await rareRarityCheckbox.check();    
}

    async clickSearch() {
        await this.searchBtn.click();
    }

    async validateShowingTags(tags = []){
        for (const tag of tags) {
            await expect(this.showingResults.filter({ hasText: tag })).toHaveCount(1);
        }
    }

    async clickFirstResult() {
        await this.firsrtResult.click();
    }   

    async isAdvancedSearchWindowVisible() {
        return await this.advancedSearchWindow.isVisible();
    }
}

module.exports = {Marketpage};