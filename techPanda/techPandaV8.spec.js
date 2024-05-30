const { test, expect } = require("@playwright/test");

let context;
let page;
test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  await context.tracing.start({
    snapshots: true,
    screenshots: true,
  });
  page = await context.newPage();
});

test.afterAll(async ({}) => {
  await context.tracing.stop({ path: "test1_trace.zip" });
});

test("verify you are able to change or reorder previously added product", async () => {
  await page.goto("http://live.techpanda.org");
  await expect(page).toHaveTitle("Home page");
});
