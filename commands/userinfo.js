const Discord = require("discord.js");

module.exports.run = async (bot , message , args) => {
    let user = message.mentions.users.first() || message.author;
    let userEmbed = new Discord.RichEmbed()
    .setTitle("User Information")
    .setColor("#15f153")
    .setThumbnail(user.displayAvatarURL)
    .addField("Username" , user.username , true)    
    .addField("ID" , user.id , true)    
    .addField("Joined Server" , message.member.joinedAt , true)
    .addField("Joined Discord" , user.createdAt);
    
    message.channel.send(userEmbed);
}

module.exports.help = {
    name: "userinfo" 
}