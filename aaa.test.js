const { Builder, By } = require("selenium-webdriver");
//предположение, что заголовок сайта равен указанной строке
it("Тестируем результат открытия страницы, что заголовок сайта равен указанной строке", async function () {
  //создание и инициализация ссылки на браузер
  const perem = "мага";
  const actuation = By.xpath('//h1[@class="page-content__title"]');
  const namem = "238ДЕ2-1000186-36 Двигатель без кп и сц 36компл.зап.часть";
  const driver = await new Builder().forBrowser("MicrosoftEdge").build();

  try {
    //установка адреса сайта, автоматически открывает окно MSEdge и переходит по адресу
    await driver.get("https://ymzmarket.ru/");
    const param = await driver.getTitle();
    await driver.sleep(500);
    expect(param).toContain(perem);
    await driver.findElement(By.linkText("Вход")).click();
    await driver.sleep(200);
    await driver
      .findElement(By.xpath('//input[@name="USER_LOGIN"]'))
      .sendKeys("azazavox@gmail.com");
    await driver.sleep(200);
    await driver
      .findElement(By.xpath('//input[@name="USER_PASSWORD"]'))
      .sendKeys("tre3tre3fas3");
    await driver.sleep(200);
    await driver.findElement(By.xpath('//input[@name="Login"]')).click();
    await driver.sleep(2000);
    await driver.navigate().back();
    await driver.sleep(200);
    await driver.navigate().back();
    await driver.sleep(200);
    await driver
      .findElement(By.xpath('//input[@id="title-search-input"]'))
      .sendKeys("238ДЕ2-1000186-36");
    await driver.sleep(200);
    await driver.findElement(By.xpath('//button[@name="s"]')).click();
    await driver.sleep(200);
    await driver
      .findElement(By.xpath('//a[@class="item-product__image"]'))
      .click();
    trulala = await driver.findElement(actuation).getText();
    expect(trulala).toBe(namem);
    await driver.sleep(500);

    await driver.navigate().back();
    await driver.sleep(200);
    await driver.findElement(By.xpath('//a[@data-favorite="206106"]')).click();
    await driver.sleep(200);
    await driver
      .findElement(By.xpath('//a[@href="/personal/order/basket/"]'))
      .click();
    await driver.sleep(200);
    await driver
      .findElement(
        By.xpath(
          '//a[@class="personal-block-header__link personal-block-header__link--personal"]'
        )
      )
      .click();
    await driver.findElement(By.linkText("Главная")).click();
    await driver.sleep(2000);
  } finally {
    await driver.quit();
  }
}, 100000);
