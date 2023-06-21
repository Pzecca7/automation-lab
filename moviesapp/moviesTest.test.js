const {Builder,Browser,By,until,Key} = require('selenium-webdriver');
const { elementIsEnabled } = require('selenium-webdriver/lib/until');

let driver;

beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async() => {
    await driver.quit()
});

describe('Test the Movies App', () => {
    // test('check and uncheck movie', async () => {
    //     // await driver.get('http://localhost:3000/')
    //     // await driver.findElement(By.id('add-movie-input')).sendKeys('The Godfather', Key.RETURN)
    //     // await driver.findElement(By.css('input[type="checkbox"]')).click()
    //     // await driver.sleep(4000)
    //     // await driver.findElement(By.css('input[type="checkbox"]')).click()
    //     // await driver.sleep(4000)
    //     // // const checkbox = await driver.wait(until.elementLocated(By.css('#movies-list li input')), 1000)
    //     // // expect(await checkbox)

    // })
    test ('delete movie', async () => {
        await driver.get('http://localhost:3000/')
        await driver.findElement(By.id('add-movie-input')).sendKeys('The Godfather', Key.RETURN)
        await driver.findElement(By.css('button[class="delete-btn"]')).click()
        await driver.sleep(4000)

    })
    test('notification displayed', async () => {
        await driver.get('http://localhost:3000/')
        await driver.findElement(By.id('add-movie-input')).sendKeys('The Godfather', Key.RETURN)
        await driver.findElement(By.id('message'))
    })
})