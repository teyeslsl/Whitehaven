const {MessageEmbed} = require("discord.js");
module.exports={
    name: 'help',
    category: 'Music',
    timeout: 5000,
    description: "test embed",
    run: async(bot,message, args)=>{
        const embed = new MessageEmbed()
        .setColor("#13E828")
        .setTitle("> **Catégories de commandes**")
        .addField('Commandes de modération', "w!mod")
        .addField('Commandes giveaways', "w!giveaways")
        .addField('Commandes general', "w!general")
        message.channel.send(embed)
    } 
}