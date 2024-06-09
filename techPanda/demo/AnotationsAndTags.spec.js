import { test } from "@playwright/test";

test.skip("Test One", async ({ page }) => {});

test("Not Yet Ready", function () {
  test.fail();
});

test.fixme("Test to be fixed", async ({ page }) => {});
test("slow test", async ({ page }) => {
  test.slow();
});

// TAGS
test("Test login page @smoke", async ({ page }) => {});
