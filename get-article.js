const fs = require('fs');
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const { executablePath } = require('puppeteer')
const cheerio = require('cheerio');

var name = `Warriors-hype-man-earns-NBA-All-Star-honor-Heres-why-his-booming-voice-matters`;

// var url = `https://www.sfexaminer.com/sports/warriors/warriors-hype-man-franco-finn-carries-nba-role-into-day-job/article_04b1f18e-0705-11ee-9c61-3bc15b6df7d4.html`;

var url = `https://www.nytimes.com/athletic/4218492/2023/02/17/nba-all-star-warriors-hype-man-franco-finn/`;

puppeteer.launch({ headless: 'new', executablePath: executablePath() }).then(async browser => {
    const page = await browser.newPage()
    await page.goto(url);
    // await page.waitForTimeout(2000)
    const html = await page.content();
    // console.log(html);

    const $ = cheerio.load(html);

    var content = $('.sc-82783a67-5.bwvKme.the-lead-article');
    // console.log(content);

    fs.writeFile(`${name}.html`, html, (err) => {
        if (err)
            console.log(err);
        else {
            console.log(`File ${name} written successfully`);
        }
    });

    await browser.close()
});