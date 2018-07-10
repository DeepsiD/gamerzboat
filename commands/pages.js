const Discord = require("discord.js");

module.exports.run = async (bot , message , args) => {
    
    let pages = [`Page One Test` , `Page Two Test` , `Page One Test` , `Page Two Test` , `Page One Test` , `Page Two Test`]; // Define an array of pages here
    let page = 1; // Default page is 1

    let embed = new Discord.RichEmbed()
    .setColor("#15f153")
    .setDescription(pages[page-1])
    .setFooter(`Page ${page} of ${pages.length}`);

    message.channel.send(embed).then(message => {
        message.react(`⏪`).then( r => {
            

            // FILTERS
            const backwardsFilter = (reaction , user) => reaction.emoji.name === `⏪` && user.id === message.author.id;
            const forwardsFilter = (reaction , user) => reaction.emoji.name === `⏩` && user.id === message.author.id;

            const backwards = message.createReactionCollector(backwardsFilter, { time : 6000});
            const forwards = message.createReactionCollector(forwardsFilter, { time : 6000});

            backwards.on(`collect` , r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page-1])
                embed.setFooter(`Page ${page} of ${pages.length}`);
                message.edit(embed)
            })
            message.react(`⏩`).then( r => {
                const backwardsFilter = (reaction , user) => reaction.emoji.name === `⏪` && user.id === message.author.id;
                const forwardsFilter = (reaction , user) => reaction.emoji.name === `⏩` && user.id === message.author.id;
    
                const backwards = message.createReactionCollector(backwardsFilter, { time : 6000});
                const forwards = message.createReactionCollector(forwardsFilter, { time : 6000});
            
            forwards.on(`collect` , r => {
                if (page === pages.length) return;
                page++;
                embed.setDescription(pages[page-1])
                embed.setFooter(`Page ${page} of ${pages.length}`);
                message.edit(embed)
            })    
            
        })
        
    })
  })
  
// ⏪⏩
}
module.exports.help = {
    name: "pages"
}