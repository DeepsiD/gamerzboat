const Discord = require("discord.js");

module.exports.run = async (bot , message , args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You are missing the Manage Messages permission.")
  
    let botmessage = args.join(' ');
    message.delete();
    message.channel.send(botmessage)
}

module.exports.help = {
    name: "say"
}   