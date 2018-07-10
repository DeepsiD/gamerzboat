module.exports.run = async (bot , message , args) => {

    let cont = args.join(' ');

    if (!cont) return message.channel.send("Please input something to announce.")
    
    let announceChannel = bot.channels.get("465577225316728834")
    announceChannel.send(cont)
}

module.exports.help = {
    
    name: "announce"
}