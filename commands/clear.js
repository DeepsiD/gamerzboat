const Discord = require("discord.js");

module.exports.run = async (bot , message , args) => {
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You are not a moderator or administrator.")
    if(!args[0]) return message.channel.send("Please provide a valid number between 1 to 100!")
    if(args[0] > 100) return message.channel.send("The number must be between 1 to 100!")
    message.delete()
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`<:check:465829711315075073> Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
    });
}

module.exports.help = {
    name: "clear"
}