
jest.setTimeout(60000);
const BrowserFactory = require('puppet/factory/BrowserFactory');
require('puppet/puppeteer-extend/Page');

let page;
let browser;

describe('awesome test', () => {
    beforeAll(async () => {
      browser = await BrowserFactory.setupBrowser();
      page = await BrowserFactory.newPage(browser);
    });

    it('something will be ok', async () => {
      await page.goto(global.__BASEURL__, {timeout: 60000})
      await page.sendText('#search]', global.__DATACONFIG__.customer.text)
      await page.screenshot({path: 'google.png', fullPage: true})
      await page.close()
    })

    afterAll(async () => {
        await browser.close();
    });
  })

