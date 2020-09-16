const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unban",
    category: "moderation",
    run: async (client, message, args) => {

        const member = args[0];

        if (!member) {
             return message.channel.send(`*J'ai besoin d'un id correct pour effectuer cela!*`)
        }

        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(`<@${member}> à été unban!`)
        } catch (e) {
            return message.channel.send(`*Une erreur s'est produite, veuillez réesayer*`)
        }

    }
}