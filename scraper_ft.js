import * as cheerio from 'cheerio';
import * as fs from 'fs';
import RSS from 'rss';

var feed = new RSS({
    title: "FT Top Stories",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Financial_Times_corporate_logo_%28alternative%29.svg/1200px-Financial_Times_corporate_logo_%28alternative%29.svg.png",
    site_url: "ft.com"
});

const url = 'https://ft.com';

async function scrape() {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);
    const $mostReads = $('.o-header__mega-column--articles');
    const $frontRead = $('.list__items-wrapper').first();

    const today = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'UTC',
        timeZoneName: 'short'
    };
    today.setMinutes(Math.round(today.getMinutes() / 5) * 5);
    today.setSeconds(0, 0);
    const formattedDate = today.toLocaleString('en-US', options);

    let RSSElement = {
        "title": "FT Most Read: " + formattedDate,
        "description": ""
    };

    let mostReadHtml = '<ul class="list-decimal list-inside">';

    $frontRead.find('a').each((index, element) => {
        const href = $(element).attr('href');
        let text = $(element).text();
        text = text.replace('opinion content.', '[Opinion]');
        const link = `<a href="${url}${href}">${text}</a>`;
        RSSElement.description += `${index + 1}. ${link}<br>`;
        mostReadHtml += `<li class="text-blue-500 hover:text-blue-200">${link}</li>`;
    });

    mostReadHtml += '</ul>';

    const indexHtml = fs.readFileSync('./src/index.html', 'utf8');
    const $index = cheerio.load(indexHtml);
    $index('#most-read-list-container').empty();
    $index('#most-read-list-container').prepend(mostReadHtml);
    fs.writeFileSync('./src/index.html', $index.html());

    feed.item(RSSElement);
    let xml = feed.xml();
    fs.writeFile("rss_ft.xml", xml, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("rss feed saved");
    });
}

scrape();