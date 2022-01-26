import path from "path";

describe("index.html", () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, "./index.html")}`;
    await page.setViewport({'width': 1920, 'height': 1080 });
    await page.goto(URL);
  });

  it("add 3 todos", async () => {
    await page.select('#duration', "20" );
    await page.type( '#description', 'eat')
    await page.click('#add');

    await page.evaluate( () => document.getElementById("description").value = "")
    await page.select('#duration', "50" );
    await page.type( '#description', 'sleep')
    await page.click('#add');

    await page.evaluate( () => document.getElementById("description").value = "")
    await page.select('#duration', "30" );
    await page.type( '#description', 'study')
    await page.click('#add');

    await page.waitForSelector('tbody');
    let element = await page.$('tbody');
    let value = await page.evaluate(el => el.innerHTML, element);
    expect(value).toEqual("<tr><th>1</th><td>20</td><td>eat</td></tr>" +
                          "<tr><th>2</th><td>50</td><td>sleep</td></tr>" +
                          "<tr><th>3</th><td>30</td><td>study</td></tr>");
  });

  it("clear todos", async () => {
    await page.select('#duration', "20" );
    await page.type( '#description', 'eat')
    await page.click('#add');
    await page.click('#clear');

    await page.waitForSelector('tbody');
    let element = await page.$('tbody');
    let value = await page.evaluate(el => el.innerHTML, element);
    expect(value).toEqual("");
  });
});
