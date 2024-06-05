import { test, expect } from "@playwright/test";

test("Demo login Part-1", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");
  // await page.pause();
  await page.getByPlaceholder("Enter your username").fill("Muhanaz");
  await page.getByPlaceholder("Enter your password").fill("123456");

  await page.waitForSelector('//*[@id="log-in"]', { timeout: 4000 });
  await page.getByRole("link", { name: "Sign in" }).click();
});

test("Demo login Part-2", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.pause();

  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Username").press("Tab");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.locator("span").filter({ hasText: "test user" }).locator("i").click();
  await page.getByRole("menuitem", { name: "Logout" }).click();
});

test.only("Demo login Part-3", async ({ page }) => {
  await page.goto("https://admin-demo.nopcommerce.com/login");
  await page.pause();
  await page.getByLabel("Email:").click();
  await page.getByLabel("Email:").fill("");
  await page.getByLabel("Password:").click();
  await page.getByLabel("Password:").fill("");
  await page.getByRole("button", { name: "Log in" }).click();
});
