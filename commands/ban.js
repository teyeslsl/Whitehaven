const discord = require("discord.js");
const message = require('../events/message')

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Expulser n'importe quel personne en un coup :)",
  usage: "kick <@user> <raeson>",
  run: (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`*Vous n'avez pas les permissions requises pour ban des membres du serveur!*`)
      }
      
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`*Je n'ai pas de permissions pour utiliser cette commande, veuillez verifier cela*`)
      } 
      let target = message.mentions.members.first();
    
      if(!target) {
        return message.channel.send(`*Veuillez mentionner une personne pour la ban*`)
      }
      if(target.id === message.author.id) {
        return message.channel.send(`*Tu ne peux pas te ban toi meme!*`)
       }
       if(!args[1]) {
        return message.channel.send(` *Veuillez donner une raison pour ban cette utilisateur*`)
      }
      let embed = new discord.MessageEmbed()
      .setTitle("Logs de Modération")
      .setDescription(`Je viens de ban ${target} (${target.id})`)
      .setColor('#2ae0f2')
      .setFooter(`Demandé par ${message.author.username}`);
      
      message.channel.send(embed)
      
      target.ban(args[1]);
   
    }
 }