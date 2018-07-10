const Discord = require("discord.js");

module.exports.run = async (bot , message , args) => {

    if(!args[2]) return message.reply("Please ask a question!");
    let replies = ["Yes." , "No." , "I don't know." ,  "Ask again later." ];

    let result = Math.floor((Math.random() * replies.length))
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#FF9900")
    .setImage('https://discordapp.com/assets/f73a8294c3ac519665af224d98bf411e.svg')
    .addField("Question:" , question)
    .addField("Answer:" , replies[result]);

    message.channel.send(ballembed);
}

module.exports.help = {
    name: "8ball"
}