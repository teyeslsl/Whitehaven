const Discord = require('discord.js');
const message = require('../events/message')

module.exports = {
    name: "clear",
    description: "Clears messages",

    async run (client, message, args) {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("*Vous n'avez pas les permissions requises pour effectuer cela!*")


        const amount = args.join(" ");
        
     
       if(!amount) return message.reply('Veuillez indiquez un nombre de message correct!')

        if(amount > 100) return message.reply(`Vous ne pouvez pas supprimé plus de 100 messages!`)

        if(amount < 1) return message.reply(`Je ne peux pas supprimé ce nombre de message`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});

    let embed = new Discord.MessageEmbed()
    .setTitle("Logs de Modération")
    .setDescription(`Je viens de supprimé ***${amount}*** messages!`)
    .setColor('#2ae0f2')
    .setFooter(`Demandé par ${message.author.username}`);
                message.channel.send(embed)
    }
}