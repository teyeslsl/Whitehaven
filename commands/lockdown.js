exports.run = (client, message, args) => {
    if (!client.lockit) client.lockit = [];
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("*Vous n'avez pas les permissions requises pour effectuer cela**");
  
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      })
        message.channel.send(`**${message.author.username}** Viens de fermer ce salon!`);
    };
    
  exports.help = {
    name: 'lockdown',
    description: 'This will lock a channel down.',
    usage: '-lockdown',
    example: '-lockdown'
  };
  
  exports.conf= {
    aliases:  ['lock'],
    cooldown: 5
  };