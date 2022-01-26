import path from "path";

describe("index.html", () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, "./index.html")}`;
    await page.setViewport({'width': 1920, 'height': 1080 });
    await page.goto(URL);
  });

  it("add 3 todos", async () => {
    await page.select('#duration', 20 );
    await page.type( '#description', 'eat')
    await page.click('#add');

    await page.waitForSelector('tbody');
    let element = await page.$('tbody');
    let value = await page.evaluate(el => el.innerText, element);
    expect(value).toEqual("hello");
  });
});
