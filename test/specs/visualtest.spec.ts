import { remote } from "webdriverio";
import VisualService from "@wdio/visual-service";
import registerPage from "../pageobjects/register.page";
describe('Visual', () => {
    beforeEach(async () => {
        browser.url('https://www.webtaphoa.vn/');
    })
    it('Check Logo 122', async () => {
        const logo =  await $('#dropdownCartButton'); 
        await logo.waitForDisplayed();
        const result = await browser.checkElement(logo, 'Cart');
        expect(result).toBeLessThanOrEqual(0.05);
    });
    it('Check Logo 124', async () => {
        const logo =  await $('.btn-menu-categories'); 
        await logo.waitForDisplayed();
        const result = await browser.checkElement(logo, 'Menu');
        expect(result).toBeLessThanOrEqual(0.05);
    });
    it('Check Logo 3', async () => {
        const logo =  await $('.btn-search'); 
        await logo.waitForDisplayed();
        const result = await browser.checkElement(logo, 'Search');
        expect(result).toBeLessThanOrEqual(0.05);
    });
    it('Check Logo 4', async () => {
        const logo =  await $('[data-id="2htp-tab-2"]'); 
        await logo.waitForDisplayed();
        const result = await browser.checkElement(logo, 'Traicay');
        expect(result).toBeLessThanOrEqual(0.05);
    });
    it('Check saveFullPageScreen', async () => {
        await browser.checkFullPageScreen( 'FullPageScreen');
    });
    it('Check saveFullPageScreen 1234', async () => {
        const logo =  await $('[data-id="3htp-tab-7"]'); 
        await logo.waitForDisplayed();
        const result = await browser.checkElement(logo, 'Chay');
        expect(result).toBeLessThanOrEqual(0.05);
    });
    it.only('Check checkTabbablePage 1234', async () => {
        browser.url('https://www.webtaphoa.vn/account/register');
        await browser.pause(2000);
        await browser.checkTabbablePage('save-tabbable123', {
        })
    });
})