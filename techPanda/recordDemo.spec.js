import { test, expect } from "@playwright/test";
const { chromium } = require("@playwright/test");

test("Record Demo", async ({ page }) => {
  // const browser = await chromium.launch({
  //   headless: false,
  // });
  // const context = await browser.newContext();
  // const page = await context.newPage();

  await page.goto("https://www.saucedemo.com", { timeout: 10000 });
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="username"]').press("Tab");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button123"]').click();
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await page.close();

  // ---------------------
  // await context.close();
  // await browser.close();
});
