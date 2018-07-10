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
    
    return message.channel.send(`Bot has been online for ${uptime}`)
    
}

module.exports.help = {
    name: "uptime"
}