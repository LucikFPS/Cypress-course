import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Main page has', async ({ page }) => {
  await page.goto('https://readmanga.live/');

  await expect(page.getByRole('link', { name: 'Читать мангу Online' })).toBeVisible;
});

test('The user proceed to the registration page', async ({ page }) => {
    await page.goto('https://readmanga.live/');

    await expect(page.getByRole('link', { name: 'Регистрация' })).toBeVisible;
    await page.getByRole('link', { name: 'Регистрация' }).click();
    await expect(page.getByRole('heading', { name: 'Регистрация нового пользователя' })).toBeVisible;
});

//with locators
test('The user can provide the login name and see a validation rule', async ({ page }) => {
    await page.goto('https://grouple.co/internal/auth/register?siteId=1');

    await page.locator("xpath=//input[@name = 'username']").pressSequentially("TestUser")
    await expect(page.locator("xpath=//*[text()='Минимум 4 символа']")).toHaveText('Минимум 4 символа');
})

test('The user can provide the email and additional info', async ({ page }) => {
    await page.goto('https://grouple.co/internal/auth/register?siteId=1');

    await page.locator("xpath=//input[@name='email']").pressSequentially("testemail@aqa.com")
    await expect(page.locator("xpath=//*[text()='Никому не показывается']")).toHaveText('Никому не показывается');
})

test('The user can provide the password and click on eye', async ({ page }) => {
    await page.goto('https://grouple.co/internal/auth/register?siteId=1');

    const passwordLocator = page.locator("//input[@name='password']");

    await page.locator("xpath=//i[contains(@class, 'fa-eye')]").click();
    await passwordLocator.pressSequentially("Pass1234");

    const passwordValue = await passwordLocator.inputValue();

    await expect(passwordValue).toBe('Pass1234');
    await page.locator("xpath=//i[contains(@class, 'fa-eye')]").click();
});

test('The user can provide password in Confirm Password', async ({ page }) => {
    await page.goto('https://grouple.co/internal/auth/register?siteId=1');

    const repeatPasswordLocator = page.locator("//input[@name='password1']");
    await repeatPasswordLocator.pressSequentially("Pass1234");

    const inputValue = await repeatPasswordLocator.inputValue();
    expect(inputValue).toBe('Pass1234');

    //Сайт якось криво написаний, я не зміг зробити так, щоб перевірити нормально через isHidden() або isVisible(), постійно повертало значення що текст видно(хоча на ділі - ні)
    // const hiddenPassword = await repeatPasswordLocator.isVisible();
    // expect(hiddenPassword).toBeFalsy();

    const inputType = await repeatPasswordLocator.getAttribute('type');
    expect(inputType).toBe('password');
});

test('The user can add and remove checkmark in checkbox', async ({ page }) => {
    await page.goto('https://grouple.co/internal/auth/register?siteId=1');
  
    const checkboxLocator = page.locator("xpath=//input[@type='checkbox']");

    await checkboxLocator.check();
    await expect(checkboxLocator.isChecked()).resolves.toBe(true);

    // await page.locator("xpath=//input[@type='checkbox']").check();
    // expect(page.locator("xpath=//input[@type='checkbox']")).toBeChecked() - не працював toBeChecked, замінив на інший.
  });

