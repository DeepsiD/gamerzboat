const Discord = require("discord.js");

module.exports.run = async (bot , message , args) => {
    let totalSeconds = (bot.uptime / 1000);
 
    let hours = Math.round(totalSeconds / 3600);
    let h = hours.toFixed(0);
    totalSeconds %= 3600;
    
    let minutes = Math.round(totalSeconds / 60);
    let mins = minutes.toFixed(0);

    let seconds = totalSeconds % 60;
    let sec = seconds.toFixed(0);

    let uptime = `${h} hours, ${mins} minutes and ${sec} seconds`;    
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField("Bot Owner" , "<@361169817442713611>")
    .addField("Bot Uptime" , uptime)
    .setTimestamp(message.createdAt);

    return message.channel.send(botembed);
}

module.exports.help = {
    name: "botinfo"
}