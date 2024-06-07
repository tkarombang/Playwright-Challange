// HOW TO CREATE HOKS AND GROUPS
// import { test, expect } from "@playwright/test";
const { test } = require("@playwright/test");

test.describe.configure({ mode: "serial mode All My Test" });

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://www.saucedemo.com");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await page.waitForURL("https://www.saucedemo.com/inventory.html");
});

test.afterAll(async () => {
  await page.close();
});

test("HOMEPAGE", async () => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="item-1-title-link"]').click();
  await page.waitForURL("https://www.saucedemo.com/inventory-item.html?id=1");
  await page.locator('[data-test="add-to-cart"]').click();
});

test("LOGOUT", async () => {
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await page.waitForURL("https://www.saucedemo.com/");
});
