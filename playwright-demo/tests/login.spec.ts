import {test,expect,Browser,Page} from "@playwright/test";
import {webkit,chromium,firefox} from "@playwright/test";

test("login page", async () => {

    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    const emailID = await page.locator("//*[@id=\"input-email\"]");
    const password = await page.locator("//*[@id=\"input-password\"]");
    const loginbtn = await page.locator("//*[@type=\"submit\"]");

    await emailID.fill("pwtest@opencart.com");
    await password.fill("playwright@123");
   await loginbtn.click();
    //await page.

    const title = await page.title();

    console.log("Login page title is:",title);

    await page.screenshot({path: "./loginpage.png"});

    expect(title).toEqual("My Account");

    await page.pause();

    await page.waitForSelector("//*[@id='input-email']");

    //await page.mouse

    //waits
    await page.waitForLoadState('networkidle');  // Waits until no network activity
    await page.waitForSelector('load');   //full page load

    //get text
    const text = await page.locator("").textContent();

    //input files
    await page.setInputFiles("","");

    await page.selectOption("","");




})