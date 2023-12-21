import fetch from "node-fetch"
import colors from "colors"

const PROMOTION_ID = "1180231712274387115"
const DISCORD_BASE_URL = "https://discord.com/billing/partner-promotions"
const DISCORD_API_URL = "https://api.discord.gx.games/v1/direct-fulfillment"

const generateUUID = ()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
    const e = 16 * Math.random() | 0;
    return ("x" === t ? e : 3 & e | 8).toString(16)
}))

fetch(DISCORD_API_URL, {
    method: "POST",
    cors: 'no-cors',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(
        {partnerUserId: generateUUID()}
    )
}).then(response => response.json()).then(data => {
    console.log(`${'Claim Discord Gift:'.blue}\n`+`${DISCORD_BASE_URL}/${PROMOTION_ID}/${data.token}`.yellow)
})