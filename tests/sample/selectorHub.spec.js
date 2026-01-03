import { test } from "@playwright/test";
import { DummyForm } from "../../page.js/DummyForm";
import { SelectorData } from "../steps/test_data/datas_credentials";

test("SelectorsHub", async ({ page }) => {

    const logs = new DummyForm(page);
    const data = new SelectorData(page);
    await logs.navigation(data.url);
    // await page.pause();
    await logs.userEmailLog(data.username);
    
    await logs.passWordLog(data.pass);
    await logs.companyLog(data.company);
    await logs.mobileNumberLog(data.mobilenumber);
    await logs.countryLog(data.country);


})