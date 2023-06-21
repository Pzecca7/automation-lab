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
    test('check and uncheck movie', async () => {
        await driver.get('http://localhost:3000/')
        await driver.findElement(By.id('add-movie-input')).sendKeys('The Godfather', Key.RETURN)
        await driver.findElement(By.css('input[type="checkbox"]')).click()
        const watched = await driver.wait(until.elementLocated(By.id('message')), 1000)
        await driver.sleep(4000)
        expect(await watched.getText()).toBe('Watched The Godfather')
        await driver.findElement(By.css('input[type="checkbox"]')).click()
        const addedBack = await driver.wait(until.elementLocated(By.id('message')), 1000)
        await driver.sleep(4000)
        expect(await addedBack.getText()).toBe('Added back The Godfather')
       

    })
    test ('delete movie', async () => {
        await driver.get('http://localhost:3000/')
        await driver.findElement(By.id('add-movie-input')).sendKeys('The Godfather', Key.RETURN)
        await driver.sleep(4000)
        await driver.findElement(By.css('button[class="delete-btn"]')).click()
        const deleted = await driver.wait(until.elementLocated(By.id('message')), 1000)
        await driver.sleep(4000)
        expect(await deleted.getText()).toBe('The Godfather deleted!')
        

    })
    test('notification displayed', async () => {
        await driver.get('http://localhost:3000/')
        await driver.findElement(By.id('add-movie-input')).sendKeys('The Godfather', Key.RETURN)
        await driver.findElement(By.css('input[type="checkbox"]')).click()
        const watched = await driver.wait(until.elementLocated(By.id('message')), 1000)
        expect(await watched.getText()).toBe('Watched The Godfather')
        await driver.findElement(By.css('input[type="checkbox"]')).click()
        const addedBack = await driver.wait(until.elementLocated(By.id('message')), 1000)
        expect(await addedBack.getText()).toBe('Added back The Godfather')
        await driver.findElement(By.css('button[class="delete-btn"]')).click()
        const deleted = await driver.wait(until.elementLocated(By.id('message')), 1000)
        expect(await deleted.getText()).toBe('The Godfather deleted!')

    })
})