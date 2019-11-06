// -------------------------------------
// |                                   |
// |        instalasi webdriver        |
// |                                   |
// -------------------------------------

// var webdriver = require('selenium-webdriver')
// const chrome = require('selenium-webdriver/chrome')
// const chromedriver = require('chromedriver')
// SeleniumServer = require("selenium-webdriver/remote").SeleniumServer;
const {Builder, By, Key, Util} = require ("selenium-webdriver");

// chrome.setDefaultService(
//     new chrome.ServiceBuilder(chromedriver.path).build())

//------------------------------------------------------------------------
//Testing
async function testing(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://www.youtube.com");
    await driver.findElement(By.name("search_query")).sendKeys("Dr Phil", Key.RETURN);
}
testing();

// async () =>{
//     await driver.get('http://www.youtube.com')
//     const searchInput = await driver.findElement(webdriver.By.name('search_query'))

//     await searchInput.sendKeys('Dr Phil')

//     const button = await driver.findElement(webdriver.By.id('search-icon-legacy'))
//     const searchButton = button[1]

//     await searchButton.click()

//     await driver.sleep(2000)

//     driver.quit()
// }