chromeLocation = require('chrome-location');
puppeteer = require('puppeteer-core');


async function start() {
    const browser = await puppeteer.launch({
        'headless': false,
        'executablePath': chromeLocation,
        //ignoreDefaultArgs: ["--enable-automation"] 
    });

    const page = await browser.newPage()

    // replace me with your liveserver address
    await page.goto('http://127.0.0.1:5500/public/index.html');

    await page.type('#text-field', 'hi');
}

start();