import { expect, type Locator, type Page } from '@playwright/test';

export class WarframeMarketPage {
  readonly page: Page;
  readonly getSearchButton: Locator;
  readonly getSearchField: Locator;
  readonly getEmailField: Locator;
  readonly getPasswordField: Locator;
  readonly getSubmitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getSearchButton = page.locator("xpath=//button[@class='btn btn__primary--L8HyD bfs--PcQ_p']");
    this.getSearchField = page.locator("xpath=//input[@placeholder='Search...']");
    this.getEmailField = page.locator("xpath=//input[@type='email']");
    this.getPasswordField = page.locator("xpath=//input[@type='password']");
    this.getSubmitButton = page.locator("xpath=//button[@type='submit']");
  }

  async goto() {
    await this.page.goto('https://warframe.market/');
  }

  async warframeSearchText(text) {
    await this.getSearchField.pressSequentially(text);
    await this.getSearchButton.click(); 
  }

}