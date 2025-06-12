class MainPage{
    constructor(page) {
        this.page = page;
        this.communityTab = page.getByRole('link', {name: /Community/i});
        this.marketLink = page.getByRole('link', {name: /Market/i});
    }

    async goto() {
        await this.page.goto('https://store.steampowered.com/');
    }

    async goToCommunityMarket() {
        await this.communityTab.hover();
        await this.marketLink.click();
    }
}

module.exports = {MainPage};