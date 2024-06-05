import { test, expect } from "@playwright/test";
import { text } from "stream/consumers";

test("Selector Demo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  // Using any object property
  await page.click("id=user-name");
  await page.locator("id=user-name").fill("standar_user");
  await page.locator("id=user-name").fill("Albert Einstein");
  await page.pause();
  // USING XPath
  await page.locator('xpath=//input[@id="user-name"]').fill("secret_sauce");
  await page.locator('//input[@id="user-name"]').fill("secret");
  // USING CSS SELECTOR #login-button
  await page.locator("#login-button").click();
  //USING TEXT
  await page.locator("text=Login").click();
  await page.locator('input:has-text("Login")').click();
  await page.locator("text=Login").click();
});
