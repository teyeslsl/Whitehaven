const {MessageEmbed} = require("discord.js");
module.exports={
    name: 'help',
    category: 'Music',
    timeout: 5000,
    description: "test embed",
    run: async(bot,message, args)=>{
        const embed = new MessageEmbed()
        .setTitle('Commandes de modération')
        .setColor("#13E828")
        .addField('> *Ban*', "`Permet de bannir une personne du serveur | Exemple : w!ban + mention`")
        .addField('> *Kick*', "`Permet d'éxpulser une personne du serveur | Exemple : w!kick + mention`")
        .addField('> *Unban*', "`Permet de débannir une personne du serveur avec son id | Exemple : w!unban + ID`")
        .addField('> *Lockdown*', "`Permet de fermer un salon | Exemple : w!lockdown `")
        .addField('> *Unlockdown*', "`Permet d'ouvrir un salon fermé | Exemple : w!unlockdown`")
        .addField('> *Nuke*', '`Permet de recrée un salon | Exemple : w!nuke + salon`')
        message.channel.send(embed)
    } 
}