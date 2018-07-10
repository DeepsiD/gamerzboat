const Discord = require("discord.js");

module.exports.run = async (bot , message , args) => {
    let user = message.mentions.users.first() || message.author;
    let avatarEmbed = new Discord.RichEmbed()
    .setTitle(user.username)
    .setColor("#15f153")
    .setImage(user.displayAvatarURL);

    return message.channel.send(avatarEmbed);
}

module.exports.help = {
    name: "avatar"
}