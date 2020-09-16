exports.run = (client, message, args) => {
    if (!client.lockit) client.lockit = [];
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("*Vous n'avez pas les permissions requises pour effectuer cela!*");
  
      message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: true
      }).then(() => {
        message.channel.send(`**${message.author.username}** Viens d'ouvrir ce salon!`);
        delete client.lockit[message.channel.id];
      }).catch(error => {
        console.log(error);
      })
    };
    
  exports.help = {
    name: 'unlockdown',
    description: 'This will lock a channel down.',
    usage: '-unlockdown',
    example: '-unlockdown'
  };
  
  exports.conf= {
    aliases:  ['unlock'],
    cooldown: 5
  };