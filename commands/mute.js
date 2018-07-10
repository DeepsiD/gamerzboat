const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot , message , args) => {
    
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Can't find user!");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("That person cannot be muted!");
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You are not a moderator or administrator.")
    let muterole = message.guild.roles.find(`name` , "Muted");
    
    // START OF CREATE ROLE
    if(!muterole) {
        try{
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel , id ) => {
                await channel.overwritePermissions(muterole , {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    SPEAK: false
                })
            })
        }catch(e){
            console.log(e.stack);
        }
        
    }
    // END OF CREATE ROLE

    let mutetime = args[1];
    if(!mutetime) return message.reply("You must specify a time!");
    let muteReason = args.slice(2).join(" ");
    if(!muteReason) return message.reply("You must provide a valid reason!")

    await(tomute.addRole(muterole.id));  
    message.channel.send(`<:check:465829711315075073> <@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

    let muteembed = new Discord.RichEmbed()
    .setDescription("**Muted**")
    .setColor("#e56b00")
    .addField("Muted User", `${tomute} ID \`${tomute.id}\``)
    .addField("Muted By", `<@${message.author.id}> ID \`${message.author.id}\``)
    .addField("Muted In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", muteReason);
    
    
    let muteChannel = message.guild.channels.find(`name`, "logs");
    if(!muteChannel) return message.channel.send("Can't find logs channel.");

    muteChannel.send(muteembed);

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> has been unmuted!`);
    }, ms(mutetime));

    // END OF MODULE
}

module.exports.help = {
    name: "mute"
}