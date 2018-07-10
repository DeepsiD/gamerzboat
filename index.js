// Invite Link:https://discordapp.com/api/oauth2/authorize?client_id=461135909715181588&permissions=0&scope=bot

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

bot.on("ready", async  () => {
    console.log(`${bot.user.username} is online in ${bot.guilds.size} servers!`);
    bot.user.setActivity("Gamerz", {type: "WATCHING"});

    let logchannel = bot.channels.get('465830446844870656');
    logchannel.send(`${bot.user.username} loaded now!`);

});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

    const prefix = "d!";
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


// TO MAKE COMMAND HANDLER

// const Discord = require("discord.js");

// module.exports.run = async (bot , message , args) => {
    
// }

// module.exports.help = {
//     name: ""
// }

// FOR !COMMAND HELP
// if(!args[0] || args[0 == "help"]) return message.channel.send(`Usage: ${prefix} `);