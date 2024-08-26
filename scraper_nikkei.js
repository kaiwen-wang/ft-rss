import * as cheerio from 'cheerio';
import * as fs from 'fs';
import RSS from 'rss';

var feed = new RSS({
    title: "Nikkei Asia Top Stories",
    image_url: "https://www.nikkei.com/nikkei_asia/common/img/logo_nikkeiasia_ogp.png",
    site_url: "https://asia.nikkei.com/"
});

const url = 'https://asia.nikkei.com/';

async function scrape() {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);
    const $mostReads = $('.most-read');

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
        "title": "Nikkei Asia Most Read: " + formattedDate,
        "description": ""
    };

    let mostReadHtml = '<ul class="list-decimal list-inside">';

    $mostReads.find('.slot--most-read-item').each((index, element) => {
        const $article = $(element).find('.collection-article');
        const href = $article.find('a').attr('href');
        let text = $article.find('a').text().trim();
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
    fs.writeFile("rss_nikkei.xml", xml, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("rss feed saved");
    });
}

scrape();