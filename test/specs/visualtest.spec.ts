import { remote } from "webdriverio";
import VisualService from "@wdio/visual-service";
import registerPage from "../pageobjects/register.page";

describe('Visual', () => {
    beforeEach(async () => {
        browser.url('https://www.webtaphoa.vn/');
    })
    it('Check show dropdown correct ', async () => {
        const logo =  await $('#dropdownCartButton'); 
        await logo.waitForDisplayed();
        const result = await browser.checkElement(logo, 'Cart');
        expect(result).toBeLessThanOrEqual(0.05);
    });
    it('Check show logo menu categories', async () => {
        const logo =  await $('.btn-menu-categories'); 
        await logo.waitForDisplayed();
        const result = await browser.checkElement(logo, 'Menu');
        expect(result).toBeLessThanOrEqual(0.05);
    });
    // it('Check show banner sanvuong', async () => {
    //     const logo = await $('[data-id="2htp-tab-3"]'); 
    //     await logo.waitForDisplayed();
    //     const result = await browser.checkElement(logo, 'Sanvuon');
    //     expect(result).toBeLessThanOrEqual(0.05);
    // });
    // it('Check Logo NE NE 3', async () => {
    //     const logo = await $('[data-id="2htp-tab-5"]'); 
    //     await logo.waitForDisplayed();
    //     const result = await browser.checkElement(logo, 'Okla2');
    //     expect(result).toBeLessThanOrEqual(0.05);
    // });
    // it('Check Logo NE NE 4', async () => {
    //     const logo = await $('[data-id="2htp-tab-4"]'); 
    //     await logo.waitForDisplayed();
    //     const result = await browser.checkElement(logo, 'Okla2');
    //     expect(result).toBeLessThanOrEqual(0.05);
    // });
    // it('Check Logo NE NE 2', async () => {
    //     const logo = await $('[data-id="2htp-tab-2"]'); 
    //     await logo.waitForDisplayed();
    //     const result = await browser.checkElement(logo, 'OKla');
    //     expect(result).toBeLessThanOrEqual(0.05);
    // });
    it('Check button search', async () => {
        const logo =  await $('.btn-search'); 
        await logo.waitForDisplayed();
        const result = await browser.checkElement(logo, 'Search');
        expect(result).toBeLessThanOrEqual(0.05);
    });
    it('Check show banner traicay ', async () => {
        const logo =  await $('[data-id="2htp-tab-2"]'); 
        await logo.waitForDisplayed();
        const result = await browser.checkElement(logo, 'Traicay');
        expect(result).toBeLessThanOrEqual(0.05);
    });
    it('Check show full page', async () => {
        await browser.checkFullPageScreen( 'FullPageScreen');
    });
    it('Check show element chay', async () => {
        const logo =  await $('[data-id="3htp-tab-7"]'); 
        await logo.waitForDisplayed();
        const result = await browser.checkElement(logo, 'Chay');
        expect(result).toBeLessThanOrEqual(0.05);
    });
    it('Check savetable fullpage ', async () => {
        browser.url('https://www.webtaphoa.vn/account/register');
        await browser.checkTabbablePage('save-tabbable123', {
        })
    });
})