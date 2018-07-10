const Discord = require("discord.js");
const Client = require("fortnite");
const fortnite = new Client(process.env.fortnite);

module.exports.run = async (bot , message , args) => {
    
    let username = args[0];
    let platform = args[2] || 'pc';
    let gamemode = args[1];

    if(gamemode != "solo" && gamemode != "duo" && gamemode != "squad" && gamemode != "lifetime") return message.channel.send("<:xmark:465829723906506761> The correct usage is: \`d!fortnite <username> <mode> <platform>\` \n Username is case sensitive. The modes are solo, duo, squad and lifetime. If platform is not mentioned, PC will be selected by default.") 
    
    if(!username) return message.reply("Please provide a username.")

    let data = fortnite.user(username , platform).then(data => {
        let stats = data.stats;
        if (gamemode === "solo") {
            let solostats = stats.solo;
            let score = solostats.score;
            let kd = solostats.kd;
            let matches = solostats.matches;
            let kills = solostats.kills;
            let wins = solostats.wins;
            let top3 = solostats.top_3;
            let top5 = solostats.top_5;
            let top12 = solostats.top_12;
            let top25 = solostats.top_25;
            let killsMatch = solostats.kills_per_match;

            let embed = new Discord.RichEmbed() 
            .setTitle(`Fortnite Solo Stats for ${data.username}`)
            .setColor('#b734d8')
            .setThumbnail("https://i.ebayimg.com/images/g/6ekAAOSw3WxaO8mr/s-l300.jpg")
            .addField('Top Placement' ,  `**Top 3:** ${top3}\n**Top 5:** ${top5}\n**Top 12:** ${top12}\n**Top 25:** ${top25}`)
            .addField('Wins' , wins , true)
            .addField('Matches Played' , matches  , true)
            .addField('Score' , score , true)
            .addField('Kills' , kills , true)
            .addField('Kill/Death' , kd, true) 
            .addField('Kill/Match' , killsMatch , true) 
        
            message.channel.send(embed);
    

        }else if(gamemode === "duo") {
            let duostats = stats.duo;
            let score = duostats.score;
            let kd = duostats.kd;
            let matches = duostats.matches;
            let kills = duostats.kills;
            let wins = duostats.wins;
            let top3 = duostats.top_3;
            let top5 = duostats.top_5;
            let top12 = duostats.top_12;
            let top25 = duostats.top_25;
            let killsMatch = duostats.kills_per_match;

            let embed = new Discord.RichEmbed() 
            .setTitle(`Fortnite Duo Stats for ${data.username}`)
            .setColor('#b734d8')
            .setThumbnail("https://i.ebayimg.com/images/g/6ekAAOSw3WxaO8mr/s-l300.jpg")
            .addField('Top Placement' ,  `**Top 3:** ${top3}\n **Top 5:** ${top5}\n **Top 12:** ${top12}\n **Top 25:** ${top25}`)
            .addField('Wins' , wins , true)
            .addField('Matches Played' , matches  , true)
            .addField('Score' , score , true)
            .addField('Kills' , kills , true)
            .addField('Kill/Death' , kd, true) 
            .addField('Kill/Match' , killsMatch , true) 
        
            message.channel.send(embed);

        }else if(gamemode === "squad") {
            let squadstats = stats.squad;
            let score = squadstats.score;
            let kd = squadstats.kd;
            let matches = squadstats.matches;
            let kills = squadstats.kills;
            let wins = squadstats.wins;
            let top3 = squadstats.top_3;
            let top5 = squadstats.top_5;
            let top12 = squadstats.top_12;
            let top25 = squadstats.top_25;
            let killsMatch = squadstats.kills_per_match;

            let embed = new Discord.RichEmbed() 
            .setTitle(`Fortnite Squad Stats for ${data.username}`)
            .setColor('#b734d8')
            .setThumbnail("https://i.ebayimg.com/images/g/6ekAAOSw3WxaO8mr/s-l300.jpg")
            .addField('Top Placement' ,  `**Top 3:** ${top3}\n **Top 5:** ${top5}\n **Top 12:** ${top12}\n **Top 25:** ${top25}`)
            .addField('Wins' , wins , true)
            .addField('Matches Played' , matches  , true)
            .addField('Score' , score , true)
            .addField('Kills' , kills , true)
            .addField('Kill/Death' , kd, true) 
            .addField('Kill/Match' , killsMatch , true) 
        
            message.channel.send(embed);

        }else{


        if (!data) return message.reply("User does not exist.");

        let lifetime = stats.lifetime;
            
        let score = lifetime[6]['Score'];
        let mplayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];

        let embed = new Discord.RichEmbed() 
        .setTitle(`Fortnite Lifetime Stats for ${data.username}`)
        .setColor('#b734d8')
        .setThumbnail("https://i.ebayimg.com/images/g/6ekAAOSw3WxaO8mr/s-l300.jpg")
        .addField('Wins' , wins , true)
        .addField('Matches Played' , mplayed  , true)
        .addField('Score' , score , true)
        .addField('Kills' , kills , true)
        .addField('Win Percentage' , winper , true)
        .addField('Kill/Death' , kd , true)
    
        message.channel.send(embed);

        }    

    })
}

module.exports.help = {
    name: "fortnite"
}