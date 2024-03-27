import * as cheerio from 'cheerio';
import * as fs from 'fs';
import RSS from 'rss';

var feed = new RSS(
    {
        title: "FT Top Stories",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Financial_Times_corporate_logo_%28alternative%29.svg/1200px-Financial_Times_corporate_logo_%28alternative%29.svg.png",
    }
);

const url = 'https://ft.com';

async function scrape() {
    const res = await fetch(url);
    const html = await res.text();

    const $ = cheerio.load(html);

    const $mostReads = $('.o-header__mega-column--articles')
    // console.log($mostReads.html());

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

    // Round the time to the nearest 5 minutes
    today.setMinutes(Math.round(today.getMinutes() / 5) * 5);
    today.setSeconds(0, 0);

    const formattedDate = today.toLocaleString('en-US', options);

    let RSSElement = {
        "title": "FT Most Read: " + formattedDate,
        "description": ""
    };

    $frontRead.find('a').each((index, element) => {
        const href = $(element).attr('href');
        let text = $(element).text();
        text = text.replace('opinion content.', '');
        const link = `<a href="${url}${href}">${text}</a>`;
        RSSElement.description += `${index + 1}. ${link}<br>`;
    });

    feed.item(RSSElement);

    let xml = feed.xml();
    fs.writeFile("rss.xml", xml, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("rss feed saved")
    })

    // const sections = ["World", "Companies", "Markets", "Opinion", "Work/Careers", "Life/Arts"]

    // $mostReads.each((index, element) => {
    //     const allText = $(element).text();
    //     const lines = allText.split('\n');

    //     lines.forEach((line, lineIndex) => {
    //         const trimmedLine = line.trim();
    //         if (trimmedLine) {
    //             console.log(`Line ${lineIndex + 1}: ${trimmedLine}`);
    //         }
    //     });

    //     console.log('\n'); // add a separator between elements
    // });

}

scrape();