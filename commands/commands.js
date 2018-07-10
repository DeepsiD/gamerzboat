const Discord = require("discord.js");

module.exports.run = async (bot , message , args) => {
    let bicon = bot.user.displayAvatarURL;
    let cmdmessage = new Discord.RichEmbed()
    .setTitle(`Available commads for ${bot.user.username}`)
    .addField("INFORMATION" , "__These commands can be used to get information.__")
    .addField(`d!botinfo` , "Shows information about the bot.")
    .addField(`d!serverinfo` , "Shows information about the server.")
    .addField(`d!userinfo` , "Shows information about the mentioned user.")
    .addField(`d!uptime` , "Shows the bot's uptime.")

    .addField("FUN" , "__These commands can be used to have fun with the bot.__")
    .addField(`d!dog` , "Gets a random dog image/gif.")
    .addField(`d!8ball` , "Ask a question.\n Usage: \`d!8ball Full question here\`.")
    .addField(`d!say` , "Bot says what you want it to say.\n Usage: \`d!say text here\`")

    .addField("MODERATION" , "__To use moderation features except the clear command, you need a channel named #logs.__")
    .addField(`d!report` , "Report a user.\n Usage: \`d!report @user <reason>\`. Can be used by members.")
    .addField(`d!mute` , "Mute a user.\n Usage: \`d!mute @username \<time\>\`")
    .addField(`d!kick` , "Kick a user from the server.\n Usage: \`d!kick @username \<reason is required\>\`")
    .addField(`d!ban` , "Ban a user permanently from the server.\n Usage: \`d!ban @username \<reason is required\>\`")
    .addField(`d!clear` , "Deletes the number of messages specified.\n Usage: \`d!clear <1-100>\`")

    .addField("UTILITY" , "__These commands are useful.__")
    .addField(`d!avatar` , "Gets the avatar of the mentioned user.")
    .addField(`d!emojis` , "Sends all the emojis of the server in a single message.")

    .addField("STAT TRACKER" , "__These commands can get in game statistics.__")
    .addField(`d!fortnite` , "Gets the Fortnite statistics of a user.\n Usage: \`d!fortnite <username> <game mode> [pc/xbl/psn]\` \n The available game modes are solo, duo, squad and lifetime.")
    .setThumbnail(bicon);

     message.channel.send(cmdmessage);
}

module.exports.help = {
    name: "commands"
}