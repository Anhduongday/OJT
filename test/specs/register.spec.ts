import { userData } from "../model/data";
import Account from "../pageobjects/account.page";
import myValidation from "../untils/check.util";
import registerPage from "../pageobjects/register.page"
import allureReporter from '@wdio/allure-reporter'
describe('Register',async()=>{
    const accountPage = new Account();
    beforeEach(async()=>{
        allureReporter.addOwner('DuongHA')
        registerPage.open();    
        await $('#ezca-btn-zalo').waitForClickable();
    })
    it('should register user success with valid data', async ()=>{
        userData.userValid.email = myValidation.generateRandomEmail('fpt.com')
        await registerPage.register(userData.userValid);
        await accountPage.verifyInfoAccount(userData.userValid);
    })
    it('should register user unsuccess with the existed email',async()=>{
        await registerPage.register(userData.userExistEmail);
        await registerPage.verifyErrorMessageMatches(userData.userExistEmail.mess)
    })
    it('Register user unsuccess with the invalid email',async()=>{
        await registerPage.register(userData.userInvalidEmailFormat);
        await registerPage.verifyErrorMessageMatches(userData.userInvalidEmailFormat.mess)
    })
    it('Register user unsuccess with a empty field',async()=>{
        await registerPage.register(userData.userAllEmptyField);
        await registerPage.verifyInputFieldIsEmpty();
    })
    it('Register user unsuccess with invalid password',async()=>{
        await registerPage.register(userData.userShortPasswordRegister);
        await registerPage.verifyErrorMessageMatches(userData.userShortPasswordRegister.mess);
    })

    it('Register user unsuccess with  a password that is too long',async()=>{
        userData.userLongPassword.email = myValidation.generateRandomEmail('gmail.com')
        await registerPage.register(userData.userLongPassword);
        await registerPage.verifyErrorMessageMatches(userData.userLongPassword.mess);
    })
})