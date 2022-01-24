// Importing Builder, By, Key and util from the from package
const { Builder, By, Key, util } = require("selenium-webdriver");

require("chromedriver");

// Writing the function for running the test
async function test() {
  let driver = await new Builder().forBrowser("chrome").build();

  // Navigates to site
  await driver.get("http://hudl.com/login");
  await driver.findElement(By.name("email")).sendKeys(Key.RETURN);

  await driver.findElement(By.name("password")).sendKeys(Key.RETURN);
}
// calling the function
test();
