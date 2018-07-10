const Discord = require("discord.js");

module.exports.run = async (bot , message , args) => {
    let emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
    message.channel.send(emojiList);
}

module.exports.help = {
    name: "emojis"
}