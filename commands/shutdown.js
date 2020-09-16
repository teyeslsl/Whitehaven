exports.run = async(client, message, args) => {
    if(message.author.id !== "741630376816017442")  return message.channel.send("Vous n'etes pas owner du bot!")
  try {
    await message.channel.send('Entrain de shutdown...').then(i => i.delete({timeout: 5000}))
    process.exit()
  } catch(e) {
    message.channel.send(`ERROR: ${e.message}`)
  }
  
  }
  
  
  exports.help = {
           name: "reboot",
           description: "reboot the bots",
           usage: "sb!reboot",
           example: "sb!reboot",
  };
  
  exports.conf = {
            aliases: ["shutdown"],
            cooldown: 5
  };