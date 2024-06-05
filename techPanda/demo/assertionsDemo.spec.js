import test, { page, expect } from "@playwright/test";

// ASSERTIONS
// Check Element present or not
test("Assertions Demo", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");
  await page.pause();
  await expect(page.getByRole("heading", { name: "The Kitchen" })).toHaveCount(1);

  if (await page.$("text=The Kitchen")) {
    await page.getByRole("heading", { name: "The Kitchen" }).click();
  }
});

// Check Element Hidden or Visible
test("Tobe Visible and Hidden", async ({ page }) => {
  await page.goto("https://admin-demo.nopcommerce.com/login");
  // await page.pause();
  await page.getByLabel("Email:").click();
  await page.getByLabel("Email:").fill("");
  await page.getByLabel("Password:").click();
  await page.getByLabel("Password:").fill("");
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.getByText("Please enter your email")).toBeVisible();
  await page.getByLabel("Email:").click();
  await page.getByLabel("Email:").type("admin@yourstore.com", { delay: 100 });
  await expect(page.getByText("Please enter your email")).toBeHidden();
});

// Check Element Enable/Disable
test.only("Tobe Enable or Disable", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.pause();
  await page.locator("#user-name").type("problem_user");
  await page.locator("#password").click();
  await page.locator("#password").type("secret_sauce");
  await page.locator('//*[@id="login-button"]').click();
  await expect(page.locator("text=Products")).toHaveText("Products");
  await expect(page.locator('//*[@id="add-to-cart-sauce-labs-bike-light"]')).toBeEnabled();
  await page.locator('//*[@id="add-to-cart-sauce-labs-bike-light"]').click();
  await expect(page.locator('//*[@id="add-to-cart-sauce-labs-bike-light"]')).toBeDisabled();
});
