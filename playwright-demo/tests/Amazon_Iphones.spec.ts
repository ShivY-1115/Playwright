import {test, Expect, Browser, Page, chromium} from "@playwright/test";


test("Amazon Iphones", async () => {

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://www.amazon.in/');

    const searchbox = await page.locator("//*[@id=\"twotabsearchtextbox\"]");

    searchbox.fill("Iphone 17");

    await page.keyboard.press("Enter");

    await page.press("//*[@id=\"twotabsearchtextbox\"]",'Enter');

    await page.waitForSelector("//*[@data-cy=\"title-recipe\"]");

    const value = await page.locator("//*[@data-cy=\"title-recipe\"]");

    const para = await value.count();

    console.log("count is",para);

    for(let i:number=1;i<para;i++){
        const values = await page.locator("(//*[@data-cy=\"title-recipe\"])").nth(i);
        const  values2 = await values.textContent();
        if(values2 && values2.includes("iPhone"))
        {
            const hrf = await values.getAttribute("href");
            console.log("href is",hrf);
            console.log("Iphone is found in: ",i," name: ",values2);
        }
    }

    await page.pause();


})
