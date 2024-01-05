import { test, expect } from '@playwright/test';
import { WarframeMarketPage } from '../page-object/WarframeMarketMainPage';
import { WarframeMarketAuction } from '../page-object/WarframeMarketAuction';

test('The user can go to the WarframeMarket page', async ({ page }) => {
    const warframeMarketPage = new WarframeMarketPage(page);
    await warframeMarketPage.goto();
  
    await expect(warframeMarketPage.getSearchButton).toBeVisible();
  });

test('The user can login to the WarframeMarket', async ({ page }) =>{
    const warframeMarketPage = new WarframeMarketPage(page);
    await warframeMarketPage.goto();

    await page.getByRole('link', { name: 'Sign In' }).dispatchEvent('click'); //не зміг виділити xpath для цієї кнопки(знаходились 2 элементи завжди), також через getByRole не працювала .click
    await expect(warframeMarketPage.getSubmitButton).toBeVisible();
    await warframeMarketPage.getEmailField.pressSequentially("justlucik46@gmail.com");
    await warframeMarketPage.getPasswordField.pressSequentially("VeryHardPass1234");
    await warframeMarketPage.getSubmitButton.click();
    
    await expect(page.locator("xpath=//span[@class='nickname--sKj0R']")).toBeVisible();
})

test('The user can find an item: "Primed Chamber"', async ({ page }) => {
    const warframeMarketPage = new WarframeMarketPage(page);
    await warframeMarketPage.goto();

    await warframeMarketPage.warframeSearchText("Primed Chamber");
    await warframeMarketPage.getSearchButton.click(); 
    await page.locator("xpath=//a[@class='link smartLink--bBcyL set-root--x4f9c item-image--BT0En big--FGppQ zoom--CTaeD dark--x95ud active']").isVisible();
})

test('The user can go to auction page', async ({ page }) => {
    const warframeMarketAuction = new WarframeMarketAuction(page);
    await warframeMarketAuction.goto();

    await page.locator("xpath=//label[@for='auctions-search-type']").isVisible();
})

test('The user with Category dropdown', async ({ page }) => {
    const warframeMarketAuction = new WarframeMarketAuction(page);
    await warframeMarketAuction.goto();

    await warframeMarketAuction.getCategoryDropdown.selectOption('Kuva liches');
    await expect(page.locator("xpath=//label[@for='auctions-search-ephemera']")).toBeVisible();
    await warframeMarketAuction.getCategoryDropdown.selectOption('Sisters of Parvos');
    await expect(page.locator("xpath=//label[@for='auctions-search-ephemera']")).toBeVisible();
    await warframeMarketAuction.getCategoryDropdown.selectOption('Unveiled Riven mods');
    await expect(page.locator("xpath=//label[@class='riven__positive']")).toBeVisible();

    await page.locator("xpath=//select[@class='form-control--uQav7 big--etFNj']").selectOption('Kuva liches');
    
})

test('The user can find Vectis weapon', async ({ page }) => {
    const warframeMarketAuction = new WarframeMarketAuction(page);
    await warframeMarketAuction.goto();

    await warframeMarketAuction.getAuctionSearchField.pressSequentially("Vectis");
    await warframeMarketAuction.getAuctionSearchFieldResult.click();
    await page.locator("xpath=//button[@class='btn btn__primary--L8HyD auctions-search__find']").click();
    await expect(page.locator("xpath=//button[@class='btn btn__light--c9XBJ red--sqBa6 dimmed--pln9I w-100']")).toBeVisible();
})