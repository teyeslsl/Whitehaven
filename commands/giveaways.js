const {MessageEmbed} = require("discord.js");
module.exports={
    name: 'help',
    category: 'Music',
    timeout: 5000,
    description: "test embed",
    run: async(bot,message, args)=>{
        const embed = new MessageEmbed()
        .setColor("#13E828")
        .addField('> *Giveaways*', "`Permet de commencer un giveaway avec un gains et une durée personalisée | Exemple : w!giveaway <Durée> <Salon> <Gains>`")
        message.channel.send(embed)
    } 
}