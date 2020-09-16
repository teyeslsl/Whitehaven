const {MessageEmbed} = require("discord.js");
module.exports={
    name: 'help',
    category: 'Music',
    timeout: 5000,
    description: "test embed",
    run: async(bot,message, args)=>{
        const embed = new MessageEmbed()
        .setColor("#13E828")
        .addField('> *Userinfo*', "`Permet d'obtnir des informations sur une personne qui est dans le serveur | Exemple : w!userinfo + ID`")
        .addField('> *Invite*', "`Permet d'obtenir l'invitation du bot | Exemple : w!invite`")
        message.channel.send(embed)
    } 
}