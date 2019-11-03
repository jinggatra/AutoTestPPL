// -------------------------------------
// |                                   |
// |        instalasi webdriver        |
// |                                   |
// -------------------------------------

var webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')
SeleniumServer = require("selenium-webdriver/remote").SeleniumServer;

chrome.setDefaultService(
    new chrome.ServiceBuilder(chromedriver.path).build())

var driver = new webdriver.Builder().forBrowser('chrome').build()

//------------------------------------------------------------------------
//Testing


async () =>{
    await driver.get('http://www.youtube.com')

    const searchInput = await driver.findElement(webdriver.By.name('search_query'))

    await searchInput.sendKeys('Dr Phil')

    const button = await driver.findElement(webdriver.By.id('search-icon-legacy'))
    const searchButton = button[1]

    await searchButton.click()

    await driver.sleep(2000)

    driver.quit()
}