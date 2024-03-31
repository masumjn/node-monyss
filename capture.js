const puppeteer = require('puppeteer');

async function takeScreenshot() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://mownycamera.kq6wtm.easypanel.host/');

    // Capture screenshot
    await page.screenshot({ path: 'screenshot.png' });

    await browser.close();
}

// Call takeScreenshot every 3 seconds
setInterval(takeScreenshot, 3000);
