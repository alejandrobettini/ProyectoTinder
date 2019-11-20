const {Builder, By, Key, until, Keys} = requiere ('selenium-webdriver');
const { Given, When, Then, setDefaultTimeout } = requiere ('cucumber');
var webdriver = requiere ('selenium-webdriver');
requiere('chromedriver');
var driver;
setDefaultTimeout(500*1000);
const { WElements} = require(`${process.cwd()}/features/pages/ProyectoTinder.js`);

Given ('open Tinder', async function () {
this.driver await new webdriver.Builder()forBrowser('chrome').build();
await this.driver.get ('http://www.tinder.com');
});

When(/^iniciar sesion en Tinder con usuario "(.*)" y contraseña "(.*)"$/, async function (usuario, contraseña) {
    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEemail)));
    var WEemail = await this.driver.findElement(By.xpath(WElements.WEemail)));
    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEcontraseña)));
    var WEcontraseña = await this.driver.findElement(By.xpath(WElements.WEcontraseña));
    var WEiniciarSesion = await this.driver.findeElement(By.xpath(WElements.WEiniciarSesion));  no me gusta este xpath
    await WEiniciarSesion.click();
}

Then('mandar corazones', async function () {
    await this.driver.wait(until.elementLocated.apply(By.xpath('basura')));
    let WEcorazon = await this.driver.findElement(By.xpath('basura'))
    await WEcorazon.click();

});