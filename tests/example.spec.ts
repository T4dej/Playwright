import { test, expect } from "@playwright/test";
import { randomTimeout } from "../Helpers/helpers";

test("Oddaj glas", async ({ page }) => {
  await page.goto("https://www.radioprlek.net/");

  const firstTimouet = randomTimeout();
  console.log("firstTimouet:", firstTimouet);
  await page.waitForTimeout(firstTimouet);

  await page.click(
    '(//div[contains(@class,"advpoll-result")])[2]//a[contains(text(),"Back")]'
  );

  const secondTimeout = randomTimeout();
  console.log("secondTimeout:", secondTimeout);
  await page.waitForTimeout(secondTimeout);

  await page.click('//li//label[contains(text(),"ALJAŽ RAMOT")]');

  const thirdTimeout = randomTimeout();
  console.log("thirdTimeout:", thirdTimeout);
  await page.waitForTimeout(thirdTimeout);

  await page.click('//a[contains(text(),"Vote")]');

  await expect(
    page.locator('//span[contains(text(),"Ste že glasovali")]')
  ).toBeVisible();
});
