import { url } from "node:inspector";

export class DummyForm {
    constructor(page) {


        this.page = page;
        this.userEmail = page.locator('//input[@type="email"]');
        this.passWord = page.locator('//input[@type="password"]');
        this.company = page.locator('(//input[@name="company"])[1]');
        this.mobileNumber = page.locator('(//input[@name="mobile number"])[1]');
        this.country = page.locator('(//input[@type="text"])[2]');
        this.submit = page.locator('//button[text()="Submit"]');


    }
    async navigation(url) {
        await this.page.goto(url);
    }
    async userEmailLog(userEmail) {
        await this.userEmail.click();
        await this.page.waitForTimeout(1000);
        await this.userEmail.fill(userEmail);
        await this.page.screenshot({path: 'screenshots/useremail.png'});
    }

    async passWordLog(passWord) {
        await this.page.waitForTimeout(2000);
        await this.passWord.fill(passWord);
         await this.page.screenshot({path: 'screenshots/password.png'});
    }
    async companyLog(company) {
        await this.page.waitForTimeout(2000);
        await this.company.fill(company);
         await this.page.screenshot({path: 'screenshots/company.png'});
    }
    async mobileNumberLog(mobileNumber) {
        await this.page.waitForTimeout(2000);
        await this.mobileNumber.fill(mobileNumber);
         await this.page.screenshot({path: 'screenshots/mobilenumber.png'});
    }
    async countryLog(country) {
        await this.page.waitForTimeout(2000);
        await this.country.fill(country);
         await this.page.screenshot({path: 'screenshots/country.png'});
    }
    async submitLog(submit) {
        await this.page.waitForTimeout(2000);
        await this.submit.click();
    }


}