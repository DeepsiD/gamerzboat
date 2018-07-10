const Discord = require("discord.js");

module.exports.run = async (bot , message , args) => {
    helpmessage = (`A bot by Deepsi with many features like music, level system, economy, moderation, etc. \n This bot is still being developed. Type \`d!commands\` to get a list of available commands. \n Support server: https://discord.gg/UmRMmhm`)
    return message.channel.send(helpmessage);
}

module.exports.help = {
    name: "help"
}