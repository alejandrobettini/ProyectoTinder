const {Builder, By, Key, until, Keys} = require ('selenium-webdriver');
const { Given, When, Then, setDefaultTimeout } = require ('cucumber');
var webdriver = require ('selenium-webdriver');
require('chromedriver');
var driver;
setDefaultTimeout(1000000);
const { WElements} = require(`${process.cwd()}/pages/ProyectoTinder.js`);
const { assert, expect} = require('chai');
var nameLike;


Given ('open Tinder', async function () {
this.driver = await new webdriver.Builder().forBrowser('chrome').build();
await this.driver.get ('http://www.tinder.com');
});

When(/^iniciar sesion en Tinder con usuario "(.*)" y contraseña "(.*)"$/, async function (usuario, contraseña) {
    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEiniciarSesionFb)));
    

    var WEiniciarSesionFb = await this.driver.findElement(By.xpath(WElements.WEiniciarSesionFb)); 
    
    await WEiniciarSesionFb.click();

    let handles = await this.driver.getAllWindowHandles();
    await this.driver.switchTo().window(handles[1]);


    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEemail)));
    var WEemail = await this.driver.findElement(By.xpath(WElements.WEemail));
    await WEemail.sendKeys(usuario);
    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEcontraseña)));
    var WEcontraseña = await this.driver.findElement(By.xpath(WElements.WEcontraseña));
    await WEcontraseña.sendKeys(contraseña);
    await this.driver.findElement(By.xpath(WElements.WEentrar)).click();
    await this.driver.switchTo().window(handles[0]);
    
});

Then('mandar corazones', async function () {
    
    for (var i=0; i<=100;i++){
      
        try { 
        await this.driver.wait(until.elementLocated(By.xpath(WElements.WEcorazon)));
        let WEcorazon = await this.driver.findElement(By.xpath(WElements.WEcorazon));
        await WEcorazon.click();

       } catch (error) {
        
       }
    }
});

When ('envio un like', async function () {
    this.nameLike = await this.driver.findElement(By.xpath(WElements.girlName)).getText();
    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEcorazon)));
    let WEcorazon = await this.driver.findElement(By.xpath(WElements.WEcorazon));
    await WEcorazon.click();

});
Then('verificar like', async function () {
    var name2Like = await this.driver.findElement(By.xpath(WElements.girlName)).getText();
    assert(this.nameLike!==name2Like);

});

When ('envio un superlike', async function () {
    this.nameLike = await this.driver.findElement(By.xpath(WElements.girlName)).getText();
    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEsuperlike)));
    let WEsuperlike = await this.driver.findElement(By.xpath(WElements.WEsuperlike));
    await WEsuperlike.click();
});
Then('verificar superlike', async function () {
    var name2Like = await this.driver.findElement(By.xpath(WElements.girlName)).getText();
    assert(this.nameLike!==name2Like);
});

When ('envio rechazo', async function () {
    this.nameLike = await this.driver.findElement(By.xpath(WElements.girlName)).getText();
    await this.driver.wait(until.elementLocated(By.xpath(WElements.WErechazo)));
    let WErechazo = await this.driver.findElement(By.xpath(WElements.WErechazo));
    await WErechazo.click();

});
Then('verificar rechazo', async function () {
    var name2Like = await this.driver.findElement(By.xpath(WElements.girlName)).getText();
    assert(this.nameLike!==name2Like);

});

Then('verificar doble superlike', async function () {
    var name2Like = await this.driver.findElement(By.xpath(WElements.girlName)).getText();
    assert(this.nameLike!==name2Like);
});
