import { remote } from "webdriverio";
import VisualService from "@wdio/visual-service";
import registerPage from "../pageobjects/register.page";
describe('Visual', () => {
    beforeEach(async () => {
        browser.url('https://webdriver.io/')
    })
    it('Check Logo', async () => {
        const logo =  await $('#ms-floating-button'); // Sử dụng await
        await logo.waitForDisplayed(); // Chờ logo hiển thị

        await browser.checkElement(logo, 'IOLogoFloating', {});
    });
})