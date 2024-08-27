import * as cheerio from 'cheerio';
import * as fs from 'fs';
import RSS from 'rss';

var feed = new RSS({
    title: "Lobsters Top Stories",
    image_url: "https://lobste.rs/apple-touch-icon-144.png",
    site_url: "https://lobste.rs/"
});

const url = 'https://lobste.rs/';

async function scrape() {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);

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
        "title": "Lobsters Top Stories: " + formattedDate,
        "description": ""
    };

    let topStoriesHtml = '<ol class="list-decimal list-inside">';

    $('.story').each((index, element) => {
        const $title = $(element).find('.link a.u-url');
        const href = $title.attr('href');
        let text = $title.text();
        const points = $(element).find('.score').text();
        const comments = $(element).find('.comments_label a').text();

        const link = `<a href="${href}">${text}</a>`;
        const details = `${points} points | ${comments}`;

        RSSElement.description += `${index + 1}. ${link} (${details})<br>`;
        topStoriesHtml += `<li class="text-blue-500 hover:text-blue-200">${link} <span class="text-gray-500">(${details})</span></li>`;
    });

    topStoriesHtml += '</ol>';

    const indexHtml = fs.readFileSync('./src/index.html', 'utf8');
    const $index = cheerio.load(indexHtml);
    $index('#most-read-list-container').empty();
    $index('#most-read-list-container').prepend(topStoriesHtml);
    fs.writeFileSync('./src/index.html', $index.html());

    feed.item(RSSElement);
    let xml = feed.xml();
    fs.writeFile("rss_lobsters.xml", xml, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("rss feed saved");
    });
}

scrape();