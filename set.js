// Hi Buddy,
// Edit Anything Here Except ones Indicated "DO NOT"...
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.caption = "*©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*"; // Input Yours custom...(Maintain font for Flow)
global.api = "https://api.giftedtech.web.id/api"; // DO NOT Change this...
global.session = "https://pairing.giftedtech.web.id"; // DO NOT Change this....
global.footer = "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ*"; // Input Yours custom...(Maintain font for Flow)
global.ytdl = "https://ytdl.giftedtech.web.id"; // You Can Change this...
global.giftedCdn = "https://cdn.giftedtech.web.id";
global.sessionServer = "https://creds.giftedtech.web.id";
global.giftedRepo = "https://github.com/mauricegift/gifted-md";
global.giftedApiRepo = "https://api.github.com/repos/mauricegift/gifted-md";


 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Gifted~H4sIAAAAAAAAA5VU27KiOBT9l7xqtYBc1KpTNYiAiBcUL+hUPwSIEIWASVCxy3/vwtOnux9mes7wFJLU3muvS74BUmCGXFSDwTdQUnyFHDVLXpcIDMCwOh4RBW0QQw7BAFwcOx6TyuPQ9cK0Ja/lqKMal0pAB2EZqPP0kCxcB276QfIGnm1QVmGGoz8UVHdUjGOyn/Z2cqfujNYP6BOXnhQrWW7E7QKdR8O91brbu+UbeDYVIaaYJGaZohxRmLmo9iCmn4OPxxSvDGNW3VnskeHoGOpLKRXV3aazuc87Ku1reTrVpG2+/xx8/7xoYXF7hb5T+NdK60z8Y37bqVKOLyaW/PlVTaaKMdrpt3f4DCcExU6MCMe8/jTv8jyFPqnnRNv399cwyjTxtLUiWzC6tkmY4i3TeyAkk8PZ/CRws9tRGJMzzzxqNLMrLBhS3suT8arePxZjFFTENplhbZLfgXv0wyvn/8P7xb1Jqtm7O6vNo3f3jNHkoNGsVlbXSSz0pxaCUfKolY1ozT4HPx/dripF6cXbrbobF5eHbHJ89FrqbD/yimAmOqEP09Pa+7BNAx/yiv7RHYd8fbkrUOfmaeF6j+m8u9BCK1j25OVitrdunbCK1JQHweqYjWMmnylXxrMeuaVaa3edTrt5Nc7inrvP3fyyJ2XrkOjLt9dEZ1Q7MRiIzzagKMGMU8hxQV57gtIGML76KKKIv+gFLOzDXTmrs8k8EM7hXtrlxpW4285sfTm740qvpOQ+JXfH0N9AG5S0iBBjKB5jxgtazxBjMEEMDP7+2gYE3fm7cE27rtgGR0wZ35CqzAoYf6j6cQijqKgI92sSGc0CUTAQfm0jzjFJWMNjRSCNUnxFRgo5A4MjzBj6OSGiKAYDTiv0M7VGETfEm9NVMJ0FXdAG+UsQHIMBkBRFk2VF6vW6ykDr/8W+3JqysCy/EMRBG2Sva6Lc1/qqIMtiv9uXXzebg+dPhE3BGHGIMwYGwJhqpRAmljl399rMsW3dTHQj0cGviT6s8U59vCr6eDhZQouE9513t5l+OifGeq4rmyLvqXeTtU44HrH89vYPRcAALEpxvA1HrlR0d55w3JNUvVmrljue2NOFHTpnf3KZ2MG2ytFVjGW1kydaIWAYncyJYykalnoSi8strNm4vxxnJbGkl4/aIEZXHKHfm9GOGK6L9VbeCSc/WrSmd57MzbDlRqNlsQ4M1eHD7GBFvSENdV8MF9j1TlY1NDTVhXOlP/eCwn8UqSFnBkNSi2DoG7d3075Ck/14rPDLTo1Wze8Ro1f2CWwU/G/t3oE3FhOe7d9q/HhN/iWRw2ADvX3ib+z0IPW2p96K6o7i6OfHcrF1J9cFW029QiZLbcLA8/m1DcoM8mNBczAAkMS0wDFoA1pUjWcdciz+0MzQBUdP3ifPIOP6rxyscY4Yh3kJBqKmCFpfkwXp/ZZHi3IMWdqQYMt6XjWmrvWy9DnkH7ECevPZzgM8vwMgtC0ycgcAAA==", // Add sess Id here especially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || false, // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by Gifted-Md!", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "255744528835", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃💜", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "5.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃", // Input Yours custom...(Maintain font for Flow)
BOT_PIC: process.env.BOT_PIC || "https://files.giftedtech.web.id/file/gifted-md.jpg", // You can Replace with yours...
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "Gifted creates things that creates other things",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "212,79", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
