import { test, expect, chromium } from "@playwright/test";

test("Slow Motion Video Recording Demo", async () => {
  const browser = await chromium.launch({
    slowMo: 500,
    hadless: false,
  });

  const context = await browser.newContext({
    recordVideo: {
      dir: "videos/",
      size: { width: 800, height: 600 },
    },
  });

  const page = await context.newPage();

  await page.goto("https://www.saucedemo.com/");
  await page.locator("#user-name").type("problem_user");
  await page.locator("#password").click();
  await page.locator("#password").type("secret_sauce");
  await page.locator('//*[@id="login-button"]').click();
  await expect(page.locator("text=Products")).toHaveText("Products");
  await expect(page.locator('//*[@id="add-to-cart-sauce-labs-bike-light"]')).toBeEnabled();
  await page.locator('//*[@id="add-to-cart-sauce-labs-bike-light"]').click();

  await context.close();
});
