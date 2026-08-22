const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/HIRUN-XS/CLOUDS_XS/blob/main/images/7279f672-2d81-4ba0-8074-7b8e79586835.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 CLOUDS_XS Is Alive Now😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
