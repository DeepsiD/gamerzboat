const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/" , (err , files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) {
    console.log("Can't find commands.");
    return;
  }

  jsfile.forEach((f , i) =>  {
    let props = require(`./commands/${f}`);
    console.log(`${f} has loaded!`);
    bot.commands.set(props.help.name , props);
  })

})

// BOT INITIALIZATION
bot.on("ready", async  () => {
    console.log(`${bot.user.username} is online in ${bot.guilds.size} servers!`);
    bot.user.setActivity("Gamerz", {type: "WATCHING"});

    let logchannel = bot.channels.get('465830446844870656');
    logchannel.send(`${bot.user.username} loaded now!`);
});

//  GUILD MEMBER ADD
client.on("guildMemberAdd" , member => {

    member.guild.channels.get('464823082180411408').setName(`Total Users: ${member.guild.memberCount}`)
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    member.guild.channels.get('464823129663864832').setName(`Member Count: ${humans}`)
    let bots = member.guild.members.filter(m => m.user.bot).size;
    member.guild.channels.get('464823151474507776').setName(`Bot Count: ${bots}`)
});

//  GUILD MEMBER REMOVE
client.on("guildMemberRemove" , member => {
    
    member.guild.channels.get('464823082180411408').setName(`Total Users: ${member.guild.memberCount}`)
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    member.guild.channels.get('464823129663864832').setName(`Member Count: ${humans}`)
    let bots = member.guild.members.filter(m => m.user.bot).size;
    member.guild.channels.get('464823151474507776').setName(`Bot Count: ${bots}`)
});

bot.on("message", async message => {
    const prefix = "d!";
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    let cmd = messageArray[0]; 
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) 
    if(commandfile) commandfile.run(bot , message , args , prefix);


  // PING COMMAND
  if(cmd === `${prefix}ping`){
    let m = await message.channel.send("Pinging...")
    m.edit(`⏱ Round-Trip: \`${m.createdAt - message.createdTimestamp}ms\` \n 💓 Heartbeat: \`${Math.round(bot.ping)}ms\``);
  };

});

  
bot.login(process.env.token);
