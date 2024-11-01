import allureReporter from '@wdio/allure-reporter'
class CommonElement{
    async verifyInputFieldIsEmpty(inputField: ChainablePromiseElement) {
        allureReporter.addStep('Verify Input Field Empty')
        const element = await inputField.getProperty('validationMessage')
        await expect(element).toEqual('Please fill out this field.');
    }
    get errorMessage(){
        return $('.errors');
    }
    async verifyErrorMessMatches(mess:string){
        allureReporter.addStep('Verify error message matches')
        await expect(this.errorMessage).toBeDisplayed();
        await expect(this.errorMessage).toHaveText(mess);
    }
}
export default new CommonElement();