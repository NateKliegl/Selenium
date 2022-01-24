const { Builder, By, Key, util } = require("selenium-webdriver");

require("chromedriver");

async function test() {
  let driver = await new Builder().forBrowser("chrome").build();

  // Navigation
  await driver.get("http://hudl.com/login");
  // Finding the name given from the html
  await driver.findElement(By.name("username")).sendKeys(Key.RETURN);
  // Trying to execute the email by calling it
  await driver.execute(By.call("email"));

  // Same process as above
  await driver.findElement(By.name("password")).sendKeys(Key.RETURN);
  await driver.execute(By.call("password"));
}
test();
