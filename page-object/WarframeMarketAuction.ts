import { expect, type Locator, type Page } from '@playwright/test';

export class WarframeMarketAuction {
  readonly page: Page;
  readonly getCategoryDropdown: Locator;
  readonly getAuctionSearchField: Locator;
  readonly getAuctionSearchFieldResult: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getCategoryDropdown = page.locator("xpath=//select[@class='form-control--uQav7 big--etFNj']");
    this.getAuctionSearchField = page.getByPlaceholder('Any')
    this.getAuctionSearchFieldResult = page.locator('li').filter({ hasText: 'Vectis' });
  }

  async goto() {
    await this.page.goto('https://warframe.market/auctions');
  }
}