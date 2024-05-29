const { test, expect } = require("@playwright/test");

test("verify you are able to change or reorder previously added product", async ({ page }) => {
  await page.goto("http://live.techpanda.org");
  await expect(page).toHaveTitle("Home page");
});
