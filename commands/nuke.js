const Discord = require ("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("**Vous n'êtes pas autorisé à faire cela!**");

    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply("**Je suis terriblement désolé mais je n'arrive pas à faire ça.**");

    if (!args[0]) return message.reply("**Veuillez mentonner un channel.**");

    // -nuke Channel_ID

    let nukechannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])

    nukechannel.clone({parent: nukechannel.parent.id})
    nukechannel.delete()
    }
      
    

module.exports.help = {
    name: "nuke"
}