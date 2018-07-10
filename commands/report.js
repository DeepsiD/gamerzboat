const Discord = require("discord.js");

module.exports.run = async (bot , message , args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Can't find user!");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} ID: \`${rUser.id}\``)
    .addField("Reported By", `${message.author} ID: \`${message.author.id}\``)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "logs");
    if(!reportschannel) return message.channel.send("Can't find logs channel.");

    reportschannel.send(reportEmbed);
    message.delete().catch(O_o=>{});
    message.channel.send(`<:check:465829711315075073> ${rUser} has been reported.`);
}

module.exports.help = {
    name: "report"
}